import PropTypes from 'prop-types';
import Skeleton from '../../../Skeleton/Skeleton';
import s from './ProductSize.module.scss';
import cn from 'classnames';

const ProductSize = ({sizes, selectedSize, handleSize}) => (
  <div className={s.size}>
    <p className={s.title}>Размер</p>
    <ul className={s.list}>
      {sizes?.length ? sizes.map(item => (
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
      )) :
      <div className={s.list}>
        <Skeleton className={cn(s.check, s.skeleton)}/>
        <Skeleton className={cn(s.check, s.skeleton)}/>
        <Skeleton className={cn(s.check, s.skeleton)}/>
        <Skeleton className={cn(s.check, s.skeleton)}/>
      </div>
    }
    </ul>
  </div>
)

ProductSize.propTypes = {
  sizes: PropTypes.array,
  selectedSize: PropTypes.string,
  handleSize: PropTypes.func,
};

export default ProductSize;
