import cn from 'classnames';
// import { useEffect, useRef } from 'react';
import s from './Color.module.scss'
import PropTypes from 'prop-types'

// export const Color = ({ color, check }) => {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (ref.current) {
//       ref.current.style.setProperty('--data-color', color);
//     }
//   }, [ref, color]);

//   return <li ref={ref} className={cn(styles.color, check && styles.colorCheck)} />
// };

export const Color = ({ color, check }) => (
  <li className={cn(s.color, check && s.colorCheck)} style={{'--data-color' : color}} />
);

Color.propTypes = {
  color: PropTypes.string, 
  check: PropTypes.bool,
}