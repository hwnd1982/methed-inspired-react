import PropTypes from 'prop-types'
import s from './CartItem.module.scss';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import Count from '../../../../Count/Count';
import { ReactComponent as RemoveSVG } from '/src/assets/remove.svg';
import { API_URL } from '../../../../../const';
import { addToCart, removeFromCart } from '../../../../../features/cartSlice';
import Skeleton from '../../../../Skeleton/Skeleton';

const CartItem = ({id, title, pic, price, color, size, count}) => {
  const dispatch = useDispatch();
  const { list: colorList } = useSelector(state => state.colors);

  const handleCountChange = count => {
    dispatch(addToCart({id, color, size, count}));
  };
  
  return (
    <article className={s.item}>
      {pic ? <img className={s.image} src={`${API_URL}/${pic}`} alt={title} /> : <Skeleton className={s.image}/>}
      <div className={s.content}>
        {title ? <h2 className={s.title}>{title}</h2> : <Skeleton className={s.title}/>}
        <p className={s.price}>руб {price}</p>
        <div className={s.vendorCode}>
          <span className={s.subtitle}>Артикул</span>
          <span>{id}</span>
        </div>
      </div>
      <div className={s.prop}>
        <div className={s.color}>
          <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
          <div
            className={s.colorItem}
            style={{"--data-color": colorList.find(item => item.title === color)?.code}}
          ></div>
        </div>
        <div className={s.size}>
          <p className={cn(s.subtitle, s.sizeTitle)}>Цвет</p>
          <div className={s.sizeItem}>{size}</div>
        </div>
      </div>
      <button
        className={s.del}
        aria-label={`Удалить ${title} из корзины`}
        onClick={() => {
          dispatch(removeFromCart({id, color, size}));
        }}
      >
        <RemoveSVG />
      </button>
      <Count
        className={s.count}
        count={count}
        handleInc={() => {
          handleCountChange(+count < 999 ? +count + 1 : 999);
        }}
        handleDec={() => {
          if (+count > 1) {
            handleCountChange(+count - 1);
          } else {
            dispatch(removeFromCart({id, color, size}));
          }
          
        }}
      />
    </article>
  )
}

CartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  pic: PropTypes.string,
  price: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
  count: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]) 
}

export default CartItem;
