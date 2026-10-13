
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeButton() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-button" onClick={toggleTheme}>
      {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeButton;
