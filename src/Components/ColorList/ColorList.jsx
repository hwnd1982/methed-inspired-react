import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import styles from './ColorList.module.scss'
import { Color } from './Color/Color';
import ColorLabel from './ColorLabel/ColorLabel';

export const ColorList = ({ colors, selectedColor, handleColor }) => {
  const { list } = useSelector(state => state.colors)

  return handleColor ? (
      <div className={styles.colorList}>
        {colors.map((id, i) => {
          const color = list.find(color => color.id === id)
          return <ColorLabel
            key={id}
            color={color}
            check={!i}
            selectedColor={selectedColor}
            handleColor={handleColor}
            />
        })}
      </div>
    ) : (
    <ul className={styles.colorList}>
      {colors.map((id, i) => {
        const color = list.find(color => color.id === id)
          return <Color 
            key={id}
            color={color?.code}
            check={!i}
          />
        })}
    </ul>
  );
}

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.number),
  selectedColor: PropTypes.string,
  handleColor: PropTypes.func,
}

export default ColorList