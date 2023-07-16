import { Container } from '../../Layout/Container/Container'
import { useSelector } from 'react-redux';
import { Category } from './Category/Category'
import { Gender } from './Gender/Gender'

export const Navigation = () => {
  const {gender, list, genderList} = useSelector(state => state.navigation);

  return (
    <div>
      <Container>
        <Gender list={genderList?.map(item => ({link: item, title: list[item].title}))} gender={gender}/>
        <Category categories={list[gender]?.list} gender={gender}/>
      </Container>
    </div>
  )
}
