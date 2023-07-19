import PropTypes from 'prop-types';
import {skeleton} from './Skeleton.module.scss';
import cn from 'classnames';

const Skeleton = ({className, children}) => (
  <div className={cn(skeleton, className)}>{children}</div>
)

Skeleton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
}

export default Skeleton