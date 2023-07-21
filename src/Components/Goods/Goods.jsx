import { Container } from "../Layout/Container/Container";
import Product from "./Product/Product";
import s from './Goods.module.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Pagintaion } from "./Pagintaion/Pagintaion";

export const Goods = ({title, count = 8, showCount = true}) => {
  const {list: goods, totalCount, status} = useSelector(state => state.goods);
  const initialGoods = new Array(count).fill(null);

  return (
    <section className={s.goods}>
      <Container>
      <h2 className={s.title}>{title}{totalCount && showCount ? <sup>{` (${totalCount})`}</sup> : ''}</h2>
      {status === 'success' && !goods.length ?       
        <p className={s.empty}>Товаров не найдено...</p> :
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
        </ul>}
        <Pagintaion />
      </Container>
    </section>
  )
}

Goods.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  showCount: PropTypes.bool,
}