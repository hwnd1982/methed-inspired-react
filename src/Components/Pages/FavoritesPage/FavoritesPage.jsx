import { Goods } from '../../Goods/Goods';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryGoods } from '../../../features/goodsSlice';
import { usePageFromSearchParams } from '../../../hooks/usePageFromSearchParams';
  
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
    <Goods title='Избранное' />
  )
}

export default FavoritesPage;

