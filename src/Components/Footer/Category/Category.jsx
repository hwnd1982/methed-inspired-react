import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import s from './Category.module.scss';
import PropTypes from 'prop-types';
import Title from "../Title/Title";
import { SkeletonList } from "../SkeletonList/SkeletonList";

export const Category = ({gs: {link}}) => {
  const {list, genderList} = useSelector(state => state.navigation);

  return (
    <div className={s.category}>
      <Title className={s.categoryTitle}>Каталог</Title>
      {genderList.length ?
        <ul className={s.categoryList}>
          {genderList?.map(gender => (
            <li key={gender}>
              <h3 className={s.categorySubtitle}>
                <NavLink className={link} to={`catalog/${gender}`}>{list[gender].title}</NavLink>
              </h3>
              <ul className={s.categorySublist}>
                {list[gender]?.list?.map(category => (
                  <li key={`${gender}/${category.slug}`}>
                    <NavLink className={link} to={`catalog/${gender}/${category.slug}`}>{category.title}</NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul> :
        <SkeletonList />
      }
    </div>
  )
}

Category.propTypes = {
  gs: PropTypes.objectOf(PropTypes.string),
  list: PropTypes.arrayOf(PropTypes.object)
}
