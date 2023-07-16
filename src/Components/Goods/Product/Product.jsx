import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../const';
import s from './Product.module.scss';
import ColorList from '../../ColorList/ColorList';
import BtnLike from '../../BtnLike/BtnLike';

export const Product = ({id, pic, title, price, colors}) => {
  return (
    <article className={s.product}>
      <NavLink className={s.link} to={`/product/${id}`}>
        <img className={s.image} src={`${API_URL}/${pic}`} alt="" />
        <h3 className={s.title}>{title}</h3>
      </NavLink>
      <div className={s.row}>
        <p className={s.price}>pyб {price}</p>
        <BtnLike id={id}/>
      </div>
      <ColorList colors={colors}/>
    </article>
  )
}

Product.propTypes = {
  id: PropTypes.string,
  pic: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.number),
}

export default Product