// import PropTypes from 'prop-types';
import s from './OrderModal.module.scss';
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as CloseSVG } from '/src/assets/remove.svg';
import { API_URL } from '../../../../const';
import { clearCert } from '../../../../features/cartSlice';

const OrderModal = () => {
  const {order: {values, order, id, totalPrice}} = useSelector(state => state.cart);
  const {list} = useSelector(state => state.goods);
  const dispatch = useDispatch();

  const handleColseModal = () => dispatch(clearCert());
  const handleModalClick = event => event.stopPropagation();

  return (
    <div className={s.modal} onClick={handleColseModal}>
      <div className={s.body} onClick={handleModalClick}>
        <h2 className={s.title}>Заказ оформлен №{id}</h2>
        <div className={s.description}>
          <p>Спасибо за выбор нашего магазина!</p>
          <p>Здесь вы можете посмотреть все детали вашего заказа.</p>
        </div>
        <ul className={s.customer}>
          <li className={s.customerItem}>
            <span className={s.customerTitle}>Получатель</span>
            <span className={s.customerData}>{values.fio}</span>
          </li>
          {values.delivery === 'delivery' && 
            <li className={s.customerItem}>
              <span className={s.customerTitle}>Адрес доставки</span>
              <span className={s.customerData}>{values.address}</span>
            </li>
          }
          <li className={s.customerItem}>
            <span className={s.customerTitle}>Телефон</span>
            <span className={s.customerData}>{values.phone}</span>
          </li>
          <li className={s.customerItem}>
            <span className={s.customerTitle}>E-mail</span>
            <span className={s.customerData}>{values.email}</span>
          </li>
          <li className={s.customerItem}>
            <span className={s.customerTitle}>Способ получения</span>
            <span className={s.customerData}>{
              values.delivery === 'delivery' ? 'Доставка' : 'Самовывоз'
            }</span>
          </li>
        </ul>
        <ul className={s.goods}>
          {order.map(({id, color, size, count}) => {
            const {pic, title} = list.find(product => product.id === id);

            return (
              <li key={`${id}-${color}-${size}`} className={s.goodsItem}>
                <img src={`${API_URL}/${pic}`} alt={title} className={s.goodsImg} />
                <p className={s.goodsCount}>X{count}</p>
              </li>
            )
          })}
        </ul>

        <div className={s.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>

        <button type='button' className={s.close} onClick={handleColseModal}>
          <CloseSVG />
        </button>
      </div>
    </div>
  )
}

// OrderModal.propTypes = {};

export default OrderModal;
