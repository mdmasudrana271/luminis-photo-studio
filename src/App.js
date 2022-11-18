import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import { useContext } from 'react';
import { ThemeContext } from './context/AuthProvide';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div data-theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
