import { useEffect, useState } from 'react';
import { Container } from '../../Layout/Container/Container';
import s from './ProductPage.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../features/productSlice';
import { fetchCategoryGoods } from '../../../features/goodsSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../const';
import ProductSize from './ProductSize/ProductSize';
import ProductColor from './ProductColor/ProductColor';
import Count from '../../Count/Count';
import BtnLike from '../../BtnLike/BtnLike';
import { Goods } from '../../Goods/Goods';
import { addToCart, removeFromCart } from '../../../features/cartSlice';
import Skeleton from '../../Skeleton/Skeleton';



export const ProductPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.product);
  const {cartItems} = useSelector(state => state.cart);

  const [count, setCount] = useState('1');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const [inCart, setInCart] = useState(false);
  const [isValid, setIsValid] = useState(setSelectedSize && setSelectedColor);

  const [imgURL, setImgURL] = useState('');
  
  useEffect(() => {
    if (data.pic) {
      const imgLoader = document.createElement('img');
      
      imgLoader.onload = () => setImgURL(`${API_URL}/${data.pic}`);
      imgLoader.src = `${API_URL}/${data.pic}`;
    }
  }, [data])
  
  const handleInc = () => setCount((prevValue) =>{
    if (inCart) {
      dispatch(addToCart({id, size: selectedSize, color: selectedColor, count: ++prevValue}));
    }
    
      return ++prevValue;
  });

  const handleDec = () => setCount((prevValue) => {
    if (prevValue > 1) {
      if (inCart) {
        dispatch(addToCart({id, size: selectedSize, color: selectedColor, count: --prevValue}));
      }

      return --prevValue;
    }

    if (inCart) {
      dispatch(removeFromCart({id, size: selectedSize, color: selectedColor}));
    }

    return 1;
  });

  const handleSize = ({target}) => setSelectedSize(target.value);
  const handleColor = ({target}) => setSelectedColor(target.value);

  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [id, dispatch]);

  useEffect(() => {
    const {id, gender, category} = data;
    
    if (id) {
      dispatch(fetchCategoryGoods({gender, category, count: 4, top: true, exclude: [id]}));
    }
  }, [dispatch, data]);

  useEffect(() => {
    const itemInCart = cartItems.find(item => item.id === id && item.color === selectedColor && item.size === selectedSize);

    setIsValid(selectedSize && selectedColor)
    if (itemInCart) {
      setCount(itemInCart.count);
      setInCart(true);
    } else if (inCart) {
      setInCart(false);
    }
  }, [id, selectedSize, selectedColor, inCart, cartItems]);

  useEffect(() => {
    if (!inCart) {
      setCount(1);
      setSelectedColor('');
      setSelectedSize('');
    }
  }, [id, inCart])
  
  return  (
    <>
      <section className={s.card}>
        <Container className={s.container}>
          {imgURL ?
            <img  className={s.image} src={`${API_URL}/${data.pic}`} alt={`${data.title} ${data.description}`} /> :
            <Skeleton className={cn(s.image, s.skeleton)} />
          }
          <form
            className={s.content}
            onSubmit={e => {
              e.preventDefault();
              if (selectedColor && selectedSize) {
                dispatch(addToCart({id, color: selectedColor, size: selectedSize, count}));
                setCount(1);
              }
            }}
          >
            {data.title ? <h1 className={s.title}>{data.title}</h1> : <Skeleton className={s.title} />}
            {data.price ? <p className={s.price}>{`руб ${data.price}`}</p> : <Skeleton className={cn(s.price, s.skeleton)} />}
            <div className={s.vendorCode}>
              <span className={s.subtitle}>Артикул</span>
              {data.id ? <span className={s.id}>{data.id}</span> : <Skeleton className={cn(s.id, s.skeleton)} />}
            </div>
            <ProductColor colors={data.colors} selectedColor={selectedColor} handleColor={handleColor}/>
            <ProductSize sizes={data.size} selectedSize={selectedSize} handleSize={handleSize} />
            <div className={s.description}>
              <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
              {data.description ? <p className={s.descriptionText}>{data.description}</p> : <Skeleton className={cn(s.descriptionText, s.skeleton)} />}
            </div>
            <div className={s.control}>
              {data.id ?
                <Count className={s.count} count={count} handleInc={handleInc} handleDec={handleDec}/> :
                <Skeleton className={cn(s.count, s.skeleton)} />}
              {data.id ?
                <button type='submit' className={s.addCart} disabled={inCart || !isValid}>{inCart ? 'В корзине' : 'В корзину'}</button> :
                <Skeleton className={cn(s.addCart, s.skeleton)} />
              }
              {data.id && <BtnLike id={data.id} />}
            </div>
          </form>
        </Container>
      </section>
      <Goods title={'Вам также может понравиться'} count={4} showCount={false}/>
    </>
  );
}
