import PropTypes from 'prop-types';
import {main} from './Main.module.scss';

export const Main = ({children}) => (
    <div className={main}>
      {children}
    </div>
  )

  Main.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ])
  }
