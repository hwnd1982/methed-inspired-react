import { Navigation } from './Navigation/Navigation'
import { Top } from './Top/Top'
import { header } from './Header.module.scss';
import { Search } from './Search/Search';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isSearchOpened = useSelector(state => state.search)?.isOpened;

  return (
    <header className={header}>
      <Top/>
      {isSearchOpened ? <Search /> : ''}
      <Navigation />
    </header>
  )
}