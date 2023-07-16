import s from './Banner.module.scss';
import { Container } from '../Layout/Container/Container';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';

const Banner = ({banner}) => {
  const [imgURL, setImgURL] = useState(banner.bg.desktop);
  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');

  useEffect(() => {
    switch (true) {
      case isMobile:
        setImgURL(banner.bg.mobile)
        break;
      case isTablet:
        setImgURL(banner.bg.tablet)
        break;
      case isLaptop:
        setImgURL(banner.bg.laptop)
        break;
      default: 
        setImgURL(banner.bg.desktop)
    }
  }, [banner, isMobile, isTablet, isLaptop]);

  return (
    <section 
    className={s.banner}
    style={{
      backgroundImage: `url(${API_URL}/${imgURL})`
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
    </section>
  )
}

Banner.propTypes = {
  banner: PropTypes.object,
}

export default Banner