import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Container.module.scss';

export const Container = ({children, className}) => (
    <div className={cn(s.container, className)}>
      {children}
    </div>
  )

  Container.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ])
  }
