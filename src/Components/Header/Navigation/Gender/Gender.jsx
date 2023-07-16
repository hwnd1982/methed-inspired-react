import s from './Gender.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from "react-router-dom";

export const Gender = ({list, gender}) => (
  <ul className={s.gender}>
    {list.map(({link, title}) => (
      <li key={`gender-${link}`} className={s.item}>
          <NavLink className={cn(s.link, gender === link && s.linkActive)} to={`catalog/${link}`}>{title}</NavLink>
      </li>
    ))}
  </ul>
)

Gender.propTypes = {
  gender: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
}
