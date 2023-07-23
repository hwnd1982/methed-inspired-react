import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {main} from './Main.module.scss';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Main = ({children}) => {
  const {status, request} = useSelector(state => state.statusServer);

  const {pathname} = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!status && pathname !== '/404') {
      request && navigate('/404');
    }
  }, [navigate, pathname, status, request])

  return (
    <div className={main}>
      {children}
    </div>
  )
};

  Main.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ])
  }
