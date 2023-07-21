import { Goods } from "../../Goods/Goods"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategoryGoods } from "../../../features/goodsSlice";
import { usePageFromSearchParams } from "../../../hooks/usePageFromSearchParams";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {query} = useSelector(state => state.search);
  const page = usePageFromSearchParams(dispatch);
    
  useEffect(() => {
    if (query) {
      const param = {search: query};
  
      if (page) {
        param.page = page;
      }
      
      dispatch(fetchCategoryGoods(param));
    } else {
      navigate('/')
    }
  }, [dispatch, query, page, navigate]);

  return (
    <Goods title={query} count={12} />
  )
}
