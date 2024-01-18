import './Header.scss';
import { ThemeContext, themes } from '../../contexts/ThemeContext';
import Toggle from '../Toogle/Toggle';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Challenge CW 2023</h1>
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <Toggle
          onChange={() => {
            if (theme === themes.light) setTheme(themes.dark);
            if (theme === themes.dark) setTheme(themes.light);
          }}
          value={theme === themes.dark}
        />
      )}
    </ThemeContext.Consumer>
  </header>
);

export default Header;
