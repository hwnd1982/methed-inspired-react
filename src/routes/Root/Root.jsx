import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Outlet, useParams } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header"
import { Main } from "../../Components/Layout/Main/Main";
import { fetchColors } from "../../features/colorsSlice";
import { fetchNavgation, setActiveGender } from "../../features/navgationSlice";

export const Root = () => {
  const dispatch = useDispatch();
  const {gender} = useParams();

  useEffect(() => {
    gender && dispatch(setActiveGender(gender));
  }, [dispatch, gender]);

  useEffect(() => {
    dispatch(fetchNavgation());
    dispatch(fetchColors());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}
