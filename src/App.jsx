
import React, { useContext } from 'react';
import TodoManager from './components/TodoManager';
import ThemeButton from './components/ThemeButton';
import ThemeContext from './components/ThemeContext';
import './App.css';

function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`app ${dark ? 'dark-theme' : 'light-theme'}`}
    >
      <header className="app-header">
        <div className="brand">
          <span className="brand-icon">✦</span>
          <span>TaskFlow</span>
        </div>

        <ThemeButton />
      </header>

      <main className="app-main">
        <section className="hero-section">
          <span className="hero-badge">YOUR DAILY PRODUCTIVITY</span>

          <h1>
            Make today <span>count.</span>
          </h1>

          <p>
            Organize your tasks, focus on what matters,
            and make progress every day.
          </p>
        </section>

        <TodoManager />
      </main>

      <footer className="app-footer">
        Built with React · One task at a time
      </footer>
    </div>
  );
}

export default App;
