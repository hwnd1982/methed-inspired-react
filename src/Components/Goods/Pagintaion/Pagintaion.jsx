import s from './Pagintaion.module.scss';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowRightSVG } from '/src/assets/arrow-right.svg';
import { ReactComponent as ArrowLeftSVG } from '/src/assets/arrow-left.svg';
import { PagintaionList } from './PagintaionList/PagintaionList';

export const Pagintaion = () => {
  const {pathname} = useLocation();
  const {pages, page} = useSelector(state => state.goods);
  
  return (
    <>
      { pages > 1 &&
        <div className={s.pagination}>
          { pages > 3 && 
            <NavLink
              className={cn(s.arrow, page <= 2 && s.arrowDisabled)}
              to={`${pathname}?page=${page - 1}`}
            >
              <ArrowLeftSVG />
            </NavLink>
          }
          <PagintaionList pathname={pathname} page={page} pages={pages} />
          { pages > 3 &&
            <NavLink
              className={cn(s.arrow, page >= pages - 1 && s.arrowDisabled)}
              to={`${pathname}?page=${page ? page + 1 : 2}`}
            >
              <ArrowRightSVG />
            </NavLink>
          }
        </div>
      }
    </>
  )
}
