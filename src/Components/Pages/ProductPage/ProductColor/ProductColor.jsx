import PropTypes from 'prop-types'
import ColorList from '../../../ColorList/ColorList';
import s from './ProductColor.module.scss';
import cn from 'classnames';
import { useState } from 'react';

const ProductColor = ({colors}) => {
  const [selectedColor, setSelectedColor] = useState('');
  const handleColor = ({target}) => setSelectedColor(target.value);

  return (
    <div className={s.color}>
      <p className={cn(s.subtitle, s.title)}>Цвет</p>
      <ColorList 
        colors={colors}
        selectedColor={selectedColor}
        handleColor={handleColor}
      ></ColorList>
    </div>
  )
}

ProductColor.propTypes = {
  colors: PropTypes.array,
}

export default ProductColor