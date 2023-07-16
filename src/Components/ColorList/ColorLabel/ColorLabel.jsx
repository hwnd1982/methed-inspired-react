import s from './ColorLabel.module.scss';
import PropTypes from 'prop-types';

const ColorLabel = ({color, check, selectedColor, handleColor}) => {
  return (
    <label className={s.color} style={{'--data-color' : color?.code}} >
      <input
        type='radio'
        className={s.input}
        name='color'
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check}
        onChange={handleColor}
        />
        <span className={s.colorCheck}></span>
    </label>
  )
}

ColorLabel.propTypes = {
  color: PropTypes.object, 
  check: PropTypes.bool,
  selectedColor: PropTypes.string,
  handleColor: PropTypes.func,
}

export default ColorLabel;
