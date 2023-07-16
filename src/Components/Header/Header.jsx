import { Navigation } from './Navigation/Navigation'
import { Top } from './Top/Top'
import { header } from './Header.module.scss';

export const Header = () => (
    <header className={header}>
      <Top/>
      <Navigation />
    </header>
  )
