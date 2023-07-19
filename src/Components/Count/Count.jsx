import PropTypes from 'prop-types';
import s from './Count.module.scss';
import cn from 'classnames';

const Count = ({className, count, handleInc, handleDec}) => (
    <div className={cn(s.count, className)}>
      <button type='button' className={s.item} onClick={handleDec}>-</button>
      <input type="text" name='count' className={cn(s.item, s.number)} value={count} readOnly />
      <button type='button' className={s.item} onClick={handleInc}>+</button>
    </div>
  )

Count.propTypes = {
  className: PropTypes.string,
  count: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  handleInc: PropTypes.func,
  handleDec: PropTypes.func,
};

export default Count