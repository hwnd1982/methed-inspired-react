import PropTypes from 'prop-types';
import s from './BtnLike.module.scss';
import cn from 'classnames';
import { ReactComponent as LikeSVG } from '/src/assets/like.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../features/favoritesSlice';
            
const BtnLike = ({id}) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.includes(id));

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite({id}));
  }

  return (
    <button
      type='button'
      aria-label='Добавить в избранное'
      className={cn(s.like,  isFavorite && s.active)}
      onClick={handleToggleFavorite}
    >
      <LikeSVG />
    </button>
  )
}

BtnLike.propTypes = {
  id: PropTypes.string,
}

export default BtnLike