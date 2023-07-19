import PropTypes from 'prop-types'
import ColorList from '../../../ColorList/ColorList';
import s from './ProductColor.module.scss';
import cn from 'classnames';
import Skeleton from '../../../Skeleton/Skeleton';

const ProductColor = ({colors, handleColor, selectedColor}) => (
  <div className={s.color}>
    <p className={cn(s.subtitle, s.title)}>Цвет</p>
    
    {colors?.length ?
      <ColorList 
        colors={colors}
        selectedColor={selectedColor}
        handleColor={handleColor}
      ></ColorList> :
      <div className={s.colors}>
        <Skeleton className={cn(s.colorsItem, s.skeleton)}/>
        <Skeleton className={cn(s.colorsItem, s.skeleton)}/>
        <Skeleton className={cn(s.colorsItem, s.skeleton)}/>
      </div>
    }
  </div>
)

ProductColor.propTypes = {
  colors: PropTypes.array,
  selectedColor: PropTypes.string,
  handleColor: PropTypes.func,
}

export default ProductColor