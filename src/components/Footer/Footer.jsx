import './Footer.scss';
import { useContext } from 'react';
import lightLogo from '../../assets/images/lightLogo.svg';
import darkLogo from '../../assets/images/darkLogo.svg';
import { ThemeContext } from '../../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <a className="footer__company-link" href="https://www.elecard.com/ru">
        <img className="footer__company-logo" src={theme === 'dark' ? lightLogo : darkLogo} alt="Логотип" />
      </a>
      <a className="footer__signature" href="https://github.com/chertaika">Юркова Екатерина</a>
    </footer>
  );
};

export default Footer;
