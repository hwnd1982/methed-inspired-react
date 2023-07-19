import s from './Category.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from "react-router-dom";
import Skeleton from '../../../Skeleton/Skeleton';

export const Category = ({categories, gender, count = 5}) => {
  const initialCategory =new Array(count).fill(null);
  return (
    <ul className={s.category}>
      {categories ? categories?.map(category => (
          <li key={`${gender}/${category.slug}`} className={s.categoryListItem}>
            <NavLink 
              className={({isActive}) => cn(s.link, isActive && s.linkActive)} 
              to={`catalog/${gender}/${category.slug}`}
            > {category.title}
            </NavLink>
          </li>
        )) : initialCategory.map((item, i) => (
          <Skeleton key={`skeleton-category-${i}`} className={s.skeleton} />
        ))}
    </ul>
  )
}

Category.propTypes = {
  gender: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object),
  count: PropTypes.number,
}