import { Container } from "../Layout/Container/Container";
import Product from "./Product/Product";
import s from './Goods.module.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagintaion } from "./Pagintaion/Pagintaion";

export const Goods = ({title}) => {
  const {list: goods, totalCount} = useSelector(state => state.goods);
  
  return (
    <section className={s.goods}>
      <Container>
      <h2 className={s.title}>{`${title}${totalCount ? ` (${totalCount})` : ''}`}</h2>
        <ul className={s.list}>
          {goods.map(product => (
            <li key={product.id}>
              <Product {...product} />
            </li>
            ))}
        </ul>
        <Pagintaion />
      </Container>
    </section>
  )
}

Goods.propTypes = {
  title: PropTypes.string,
}