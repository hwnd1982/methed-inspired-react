import s from './Gender.module.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from "react-router-dom";
import Skeleton from '../../../Skeleton/Skeleton';

export const Gender = ({list, gender, count = 3}) => {
  const initialGender =new Array(count).fill(null);
  
  return (
    <ul className={s.gender}>
      {list.length ? list.map(({link, title}) => (
        <li key={`gender-${link}`} className={s.item}>
            <NavLink className={cn(s.link, gender === link && s.linkActive)} to={`catalog/${link}`}>{title}</NavLink>
        </li>
      )) : initialGender.map((item, i) =>
        <li key={`skeleton-gender-${i}`} className={cn(s.item, s.link)}>
          <Skeleton key={`skeleton-gender-${i}`} className={s.skeleton}/>
        </li>
      )}
    </ul>
  )
}

Gender.propTypes = {
  gender: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
  count: PropTypes.number,
}
