import s from './FavoritesPage.module.scss';
import { Goods } from '../../Goods/Goods';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryGoods } from '../../../features/goodsSlice';
import { usePageFromSearchParams } from '../../../hooks/usePageFromSearchParams';
import { Container } from '../../Layout/Container/Container';
  
export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    const param = {list: favorites};

    if (page) {
      param.page = page;
    }

    dispatch(fetchCategoryGoods(param));
  }, [dispatch, favorites, page]);

  return (
    favorites.length ?
      <Goods title='Избранное' count={favorites.length} /> :
        <section className={s.goods}>
          <Container>
            <h2 className={s.title}>Избранное</h2>
            <p className={s.empty}>Вы ничего не добавили в избранное...</p>
          </Container>
      </section>
  )
}

export default FavoritesPage;

