import './Footer.scss';
import logo from '../../assets/images/logo.svg';

const Footer = () => (
  <footer className="footer">
    <a className="footer__company-link" href="https://www.elecard.com/ru">
      <img className="footer__company-logo" src={logo} alt="Логотип" />
    </a>
    <a className="footer__signature" href="https://github.com/chertaika">Юркова Екатерина</a>
  </footer>
);

export default Footer;
