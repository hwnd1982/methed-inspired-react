import { useRouteError } from "react-router-dom";
import { Container } from "../../Layout/Container/Container";
// import s from './ErrorPage.module.scss';
// import cn from 'classnames';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <Container>
        <h2>Ошибка 404</h2>
        <p>{error?.message || 'Что-то пошло не так...'}</p>
      </Container>
    </div>
  )
}
