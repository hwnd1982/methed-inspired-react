import { Container } from '../../Layout/Container/Container';
import s from './Top.module.scss';
import cn from 'classnames';
import { ReactComponent as LogoSVG } from '/src/assets/logo.svg';
import { ReactComponent as LikeSVG } from '/src/assets/like.svg';
import { ReactComponent as CartSVG } from '/src/assets/cart.svg';
import { ReactComponent as SearchSVG } from '/src/assets/search.svg';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { toggleSearch } from '../../../features/searchSlice';

export const Top = () => {
  const dispatch = useDispatch();
  const totalCount = +useSelector(state => state.cart)?.totalCount;
  const favoritesCount = useSelector(state => state.favorites)?.length;

  const handleSearch = () => {
    dispatch(toggleSearch())
  }

  return (
    <div className={s.top}>
      <Container className={s.topContainer}>
        <a href="tel:89304902620" className={cn(s.topLink, s.topPhone)}>8 930 490 26 20</a>
        <NavLink to="/" className={s.topLogo}>
          <LogoSVG />
        </NavLink>
        <div className={s.topNavigation}>
          <ul className={s.topNavList}>
            <li className={s.topNavItem}>
              <button onClick={handleSearch} className={s.topLink}>
                <SearchSVG />
              </button>
            </li>
            <li className={s.topNavItem}>
              <NavLink to='/cart' className={s.topLink}>
                <CartSVG />
                {totalCount ? <span className={s.topLinkCount}>{totalCount}</span> : ''}
              </NavLink>
            </li>
            <li className={s.topNavItem}>
              <NavLink to='/favorite' className={cn(s.topLink, s.like)}>
                <LikeSVG />
                {favoritesCount ? <span className={s.topLinkCount}>{favoritesCount}</span> : ''}
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
