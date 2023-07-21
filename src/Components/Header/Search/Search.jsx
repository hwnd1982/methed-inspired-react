import s from './Search.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Container } from "../../Layout/Container/Container"
import * as Yup from 'yup';
import { useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from '../../../features/searchSlice';

export const Search = () => {
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    query: Yup
      .string()
      .required('Запрос не может быть пустым...')
      .test('searchTest', 'Запрос не может сотоять из одних пробелов...', value => !!value.trim()),
  });

  const handleSubmitOrder = ({query}) => {
    dispatch(setSearchQuery(query.trim()));
    navigate('search/');
  };

  return (
    <div className={s.search}>
      <Container>
          <Formik
            initialValues={{
              query: '',
            }}
          validationSchema={validationSchema}
          onSubmit={handleSubmitOrder}
        >
          <Form className={s.form}>
            <Field 
              className={s.input}
              type='text'
              placeholder='Найти...'
              name='query'
            />
            <ErrorMessage className={s.error} name='query' component={'span'} />
            <button type='submit' className={s.btn}>Искать</button>
          </Form>
        </Formik>
      </Container>
    </div>
  )
}
