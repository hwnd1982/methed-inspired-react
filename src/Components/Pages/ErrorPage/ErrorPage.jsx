import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useRouteError, useNavigate } from "react-router-dom";
import { fetchColors } from '../../../features/colorsSlice';
import { fetchNavgation } from '../../../features/navgationSlice';
import { Container } from "../../Layout/Container/Container";
import s from './ErrorPage.module.scss';
// import cn from 'classnames';

export const ErrorPage = () => {
  const {status, request} = useSelector(state => state.statusServer);
  const {pathname} = useLocation();
    const navigate = useNavigate();
  const error = useRouteError();
  const dispatch = useDispatch();
  const timerId = useRef(null);

  useEffect(() => {
    if (status &&  pathname === '/404') {
      setTimeout(navigate, 10000, '/');
    }
  }, [status, pathname, navigate]);

  useEffect(() => {
    if (!status &&  pathname === '/404') {
      clearInterval(timerId?.current);
  
      timerId.current = setInterval(() => {
        dispatch(fetchColors());
        dispatch(fetchNavgation());
      }, 5000)
  
      return () => {
        clearInterval(timerId?.current);
      }
    }
  }, [dispatch, status, pathname, timerId])

  return (
    <div className={s.error}>
      <Container>
        {status && !request ? <h2 title="404" className={s.glitch}>404</h2> : ''}
        {!request && !status  ? <h2 className={s.title}>Сервер недоступен.</h2> : ''}
        {!request && !status ? <p className={s.message}>{error?.message || 'Попробуйте зайти позднее...'}</p> : ''}
      </Container>
    </div>
  )
}
