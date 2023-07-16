import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setPage } from "../features/goodsSlice";

export const usePageFromSearchParams = (dispatch) => {
  const {search} = useLocation();
  const searchParams = new URLSearchParams(search);
  const pageURL = +searchParams.get('page') || 0;

  useEffect(() => {
    dispatch(setPage(pageURL));
  }, [dispatch, pageURL]);

  return pageURL;
};
