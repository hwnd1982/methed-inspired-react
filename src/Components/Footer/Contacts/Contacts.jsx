import s from './Contacts.module.scss';
import PropTypes from 'prop-types';

export const Contacts = ({gs}) => {
  return (
    <div className={s.contacts}>
      <a href="mailto:Inspired@gmail.com" className={gs.link}>Inspired@gmail.com</a>
      <a href="tel:89304902620" className={gs.link}>8 930 490 26 20</a>
    </div>
  )
}

Contacts.propTypes = {
  gs: PropTypes.objectOf(PropTypes.string),
}
