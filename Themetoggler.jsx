import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './Themeaction';


const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme); //  theme from the store
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
  <h1 style={{ marginBottom: '5px', fontSize: "x-large" }}>Theme Toggler</h1>
  <button style={{color: "green",
                  width:"15%",
                  padding: "1%",
                  borderRadius:"10px solid black"}} 
                  onClick={() => dispatch(toggleTheme())}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggler;
