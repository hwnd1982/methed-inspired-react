import s from './Development.module.scss';
import PropTypes from 'prop-types';

export const Development = ({gs}) => {
  return (
    <div className={s.development}>
      <ul className={s.developmentList}>
        <li>Designer: <a href="/" target="_blank" className={gs.link}>Anastasia Ilina</a></li>
        <li>Developer: <a href="https://github.com/hwnd1982" target="_blank" className={gs.link} rel="noreferrer">Kirill Lavrov</a></li>
      </ul>
    </div>
  )
}

Development.propTypes = {
  gs: PropTypes.objectOf(PropTypes.string),
}
