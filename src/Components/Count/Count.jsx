import PropTypes from 'prop-types';
import s from './Count.module.scss';
import cn from 'classnames';
import { useState } from 'react';

const Count = ({className}) => {
  const [count, setCount] = useState(1);

  const handleInc = () => setCount((prevValue) => ++prevValue);
  const handleDec = () => setCount((prevValue) => (--prevValue ? prevValue : 1));

  return (
    <div className={cn(s.count, className)}>
      <button type='button' className={s.item} onClick={handleDec}>-</button>
      <input type="text" name='count' className={cn(s.item, s.number)} value={count} disabled/>
      <button type='button' className={s.item} onClick={handleInc}>+</button>
    </div>
  )
}

Count.propTypes = {
  className: PropTypes.string,
};

export default Count