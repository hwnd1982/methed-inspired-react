import s from './Pagintaion.module.scss';
import cn from 'classnames';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowRightSVG } from '/src/assets/arrow-right.svg';
import { ReactComponent as ArrowLeftSVG } from '/src/assets/arrow-left.svg';
import { PagintaionList } from './PagintaionList/PagintaionList';
import { useEffect } from 'react';

export const Pagintaion = () => {
  const {pathname, search} = useLocation();
  const navigate = useNavigate();
  const {pages, page} = useSelector(state => state.goods);

  useEffect(() => {
    if (search) {
      const page = +search.replace(/[?|&]page=(\d+)/, '$1');

      if (pages && page && page > pages) {
        navigate(`${pathname}?page=${pages}`)
      }
    }
  }, [pages, search, navigate, pathname])
  
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
