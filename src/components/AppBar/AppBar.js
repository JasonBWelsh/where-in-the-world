import React from 'react';
import { StyledAppBar } from './styles.js';
import { ReactComponent as SunIcon } from '../../icons/sunny-outline.svg';
import { ReactComponent as MoonIcon } from '../../icons/moon-outline.svg';

const AppBar = function ({ theme, handleToggleTheme }) {
  return (
    <StyledAppBar>
      <div className="header-container">
        <h1 className="main-header">Where in the world?</h1>
        <button className="theme-toggle__button" onClick={handleToggleTheme}>
          {theme === 'light' ? (
            <>
              <MoonIcon
                className="theme-toggle__icon"
                height="18px"
                width="18px"
              />
              <span>Dark Mode</span>
            </>
          ) : (
            <>
              <SunIcon
                className="theme-toggle__icon icon-theme"
                height="18px"
                width="18px"
              />
              <span>Light Mode</span>
            </>
          )}
        </button>
      </div>
    </StyledAppBar>
  );
};

export default AppBar;
