import { Container } from "../Layout/Container/Container"
import {container, link} from './Footer.module.scss';
import { Category } from "./Category/Category";
import { Contacts } from "./Contacts/Contacts";
import { Social } from "./Social/Social";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";
import PropTypes from 'prop-types';

export const Footer = ({list}) => {
  return (
    <footer>
      <Container className={container}>
        <Category list={list} gs={{link}} />
        <Social />
        <Contacts gs={{link}} />
        <Copyright />
        <Development gs={{link}} />
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  gender: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
}
