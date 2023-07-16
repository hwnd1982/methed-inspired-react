import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './ProductSize.module.scss';

const ProductSize = ({size}) => {
  const [selectedSize, setSelectedSize] = useState('');
  const handleSize = ({target}) => setSelectedSize(target.value);

  return (
    <div className={s.size}>
      <p className={s.title}>Размер</p>
      <ul className={s.list}>
        {size.map(item => (
          <li key={item} className={s.item}>
            <label>
              <input
                className={s.input}
                type="radio"
                name="size" 
                value={item}
                checked={selectedSize && selectedSize === item}
                onChange={handleSize}
              />
              <span className={s.check}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

ProductSize.propTypes = {
  size: PropTypes.array,
};

export default ProductSize;
