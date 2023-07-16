import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategoryGoods, fetchGenderGoods } from '../../../features/goodsSlice';
import { useParams } from 'react-router-dom';
import { Goods } from '../../Goods/Goods';
import Banner from '../../Banner/Banner';
import { Main } from '../../Layout/Main/Main';
import { usePageFromSearchParams } from '../../../hooks/usePageFromSearchParams';

export const MainPage = () => {
  const {gender: activeGender, category} = useParams();
  const dispatch = useDispatch();
  const {list, genderList} = useSelector(state => state.navigation);
  const gender = activeGender || genderList[0];
  const genderData = list[gender];
  const categoryData = genderData?.list.find(item => item.slug === category);
  const title = categoryData?.title || 'новинки';
  const banner = genderData?.banner;
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    const param = {gender};

    category && (param.category = category);
    page && (param.page = page);

    if(gender && category) {
      dispatch(fetchCategoryGoods(param));
      return;
    }
    
    if(gender) {
      dispatch(fetchGenderGoods(gender));
      return;
    }

  }, [dispatch, category, gender, page]);
  
  return (
    <Main>
      {!category && banner && <Banner banner={banner}/>}
      <Goods title={title} />
    </Main>
  )
}

MainPage.propTypes = {
  gender: PropTypes.string,
}