import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../../const';
import s from './Product.module.scss';
import cn from 'classnames';
import ColorList from '../../ColorList/ColorList';
import BtnLike from '../../BtnLike/BtnLike';
import Skeleton from '../../Skeleton/Skeleton';
import { useEffect, useState } from 'react';


export const Product = ({id, pic, title, price, colors}) => {
  const [imgURL, setImgURL] = useState('');
  
  useEffect(() => {
    if (pic) {
      const imgLoader = document.createElement('img');
      
      imgLoader.onload = () => setImgURL(`${API_URL}/${pic}`);
      imgLoader.src = `${API_URL}/${pic}`;
    }
  }, [pic])

  return (
    <article className={s.product}>
      <NavLink className={s.link} to={id && `/product/${id}`}>
        {imgURL ? <img className={s.image} src={`${API_URL}/${pic}`} alt="" /> : <Skeleton className={cn(s.image, s.skeleton)} />}
        {title ? <h3 className={s.title}>{title}</h3> : <Skeleton className={cn(s.title, s.skeleton)} />}
      </NavLink>
      <div className={s.row}>
        {price ? <p className={s.price}>pyб {price}</p> : <Skeleton className={cn(s.price, s.skeleton)} />}
        {price && <BtnLike id={id}/>}
      </div>
      {colors ? <ColorList colors={colors}/> :
        <div className={cn(s.colors, s.skeleton)}>
          <Skeleton className={cn(s.color, s.skeleton)} />
          <Skeleton className={cn(s.color, s.skeleton)} />
          <Skeleton className={cn(s.color, s.skeleton)} />
        </div>
      }
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