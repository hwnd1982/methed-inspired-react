import s from './Category.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from "react-router-dom";

export const Category = ({categories, gender}) => {
  return (
    <ul className={s.category}>
      {categories?.map(category => (
          <li key={`${gender}/${category.slug}`} className={s.categoryListItem}>
            <NavLink 
              className={({isActive}) => cn(s.link, isActive && s.linkActive)} 
              to={`catalog/${gender}/${category.slug}`}
            > {category.title}
            </NavLink>
          </li>
        ))}
    </ul>
  )
}

Category.propTypes = {
  gender: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object),
}