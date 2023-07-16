import { useEffect } from 'react';
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



export const ProductPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {data, status} = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [id, dispatch]);

  useEffect(() => {
    const {id, gender, category} = data;
    
    dispatch(fetchCategoryGoods({gender, category, count: 4, top: true, exclude: [id]}));
  }, [dispatch, data]);
  
  return  (
    <>
      {status === 'success' &&
        <section className={s.card}>
          <Container className={s.container}>
            <img  className={s.image} src={`${API_URL}/${data.pic}`} alt={`${data.title} ${data.description}`} />
            <form className={s.content}>
              <h1 className={s.title}>{data.title}</h1>
              <p className={s.price}>{`руб ${data.price}`}</p>
              <div className={s.vendorCode}>
                <span className={s.subtitle}>Артикул</span>
                <span className={s.id}>{data.id}</span>
              </div>
              <ProductColor colors={data.colors} />
              <ProductSize size={data.size} />
              <div className={s.description}>
                <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
                <p className={s.descriptionText}>{data.description}</p>
              </div>
              <div className={s.control}>
                <Count className={s.count}/>
                <button type='submit' className={s.addCart}>В корзину</button>
                <BtnLike id={data.id} />
              </div>
            </form>
          </Container>
        </section>
      }

      <Goods title={'Вам также может понравиться'} />
    </>
  );
}
