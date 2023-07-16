import s from './PagintaionList.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const PagintaionList = ({pathname, page, pages}) => {
  const pagintaionList = [];
  const startPage = Math.max(1, Math.min(page - 1, pages - 2));
  const endPage = Math.min(startPage + 2, pages);
  
  for (let i = startPage; i <= endPage; i++) {
    pagintaionList.push(i);
  }

  return (
    <ul className={s.list}>
      {pagintaionList.map(item => (
        <li key={`page-${item}`}>
          <NavLink 
            className={cn(s.link, (item === page || (!page && item === 1)) && s.linkActive)}
            to={`${pathname}?page=${item}`}
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

PagintaionList.propTypes = {
  pathname: PropTypes.string, 
  page: PropTypes.number,
  pages: PropTypes.number,
}
