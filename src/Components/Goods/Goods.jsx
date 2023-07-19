import { Container } from "../Layout/Container/Container";
import Product from "./Product/Product";
import s from './Goods.module.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagintaion } from "./Pagintaion/Pagintaion";

export const Goods = ({title, count = 8}) => {
  const {list: goods, totalCount} = useSelector(state => state.goods);
  const initialGoods = new Array(count).fill(null);
  
  return (
    <section className={s.goods}>
      <Container>
      <h2 className={s.title}>{`${title}${totalCount ? ` (${totalCount})` : ''}`}</h2>
        <ul className={s.list}>
          {goods.length ? goods.map(product => (
            <li key={product.id}>
              <Product {...product} />
            </li>
            )) : initialGoods.map((item, i) => (
              <li key={`product-skeleton-${i}`}>
                <Product id={null} />
              </li>
            ))
          }
        </ul>
        <Pagintaion />
      </Container>
    </section>
  )
}

Goods.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
}