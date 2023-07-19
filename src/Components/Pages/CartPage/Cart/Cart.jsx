import PropTypes from 'prop-types'
import s from './Cart.module.scss';
import { Container } from '../../../Layout/Container/Container';
import CartItem from './CartItem/CartItem';


const Cart = ({list}) => {
  const totalPrice = list.reduce((total, {count, price}) => total += count * price, 0);

  return (
    <section className={s.cart}>
      <Container>
        <h1 className={s.title}>Корзина</h1>
        {list.length ? 
          <>
            <ul className={s.list}>
              {list.map(item => (
                <li key={`${item.id}-${item.color}-${item.size}`} className={s.item}>
                  <CartItem {...item} />
                </li>
              ))}
            </ul>  
            <div className={s.total}>
              <p>Итого:</p>
              <p>руб {totalPrice}</p>
            </div>
          </> :
          <p className={s.empty}>Корзина пуста...</p>
        }
      </Container>
    </section>
  )
}

Cart.propTypes = {
  list: PropTypes.array,
}

export default Cart;
