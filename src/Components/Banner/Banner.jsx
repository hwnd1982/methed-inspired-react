import s from './Banner.module.scss';
import { Container } from '../Layout/Container/Container';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import Skeleton from '../Skeleton/Skeleton';

const Banner = ({banner}) => {
  const [imgURL, setImgURL] = useState('');
  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');

  useEffect(() => {
    let src = '';
    const imgLoader = document.createElement('img');
    const setIsLoad =  () => {
      if (imgLoader.src === `${API_URL}/${src}`) {
        setImgURL(`${API_URL}/${src}`);
      }
    };

    switch (true) {
      case isMobile:
        src = banner?.bg.mobile;
        break;
      case isTablet:
        src = banner?.bg.tablet;
        break;
      case isLaptop:
        src = banner?.bg.laptop;
        break;
      default: 
        src = banner?.bg.desktop;
    }

    if (src && imgURL !== `${API_URL}/${src}`) {
      imgLoader.onload = setIsLoad;
      imgLoader.src = `${API_URL}/${src}`;

      setImgURL('');
    }

  }, [banner, isMobile, isTablet, isLaptop, imgURL]);

  return ( banner && imgURL ?
    <section 
    className={s.banner}
    style={imgURL && {
      backgroundImage: `url(${imgURL})`
    }}
    >
      <Container>
        <div className={s.content}>
          <h1 className={s.title}>{banner.description}</h1>
          <NavLink className={s.link} to={`/product/${banner.id}`}>
            Перейти
          </NavLink>
        </div>
      </Container>
    </section> :
    <Skeleton className={s.skeleton} />
  )
}

Banner.propTypes = {
  banner: PropTypes.object,
}

export default Banner