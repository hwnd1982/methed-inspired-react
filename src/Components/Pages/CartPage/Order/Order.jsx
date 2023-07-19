import PropTypes from 'prop-types'
import s from './Order.module.scss';
import cn from 'classnames';
import { Container } from '../../../Layout/Container/Container';

const Order = ({cartItems, goodsList}) => {
  return (
    <section>
      <Container>
        <div>Order</div>
      </Container>
    </section>
  )
}

Order.propTypes = {
  cartItems: PropTypes.array,
  goodsList: PropTypes.array,
}

export default Order;
