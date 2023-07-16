import cn from 'classnames';
import PropTypes from 'prop-types'
import s from './Title.module.scss';

const Title = ({className, children}) => {
  return (
    <h2 className={cn(s.title, className)}>{children}</h2>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ])
}

export default Title