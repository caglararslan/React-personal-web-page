import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import {ThemeProvider} from './context/ThemeContext';


function App() {
  return (
    <ThemeProvider>
      <Main/>
    </ThemeProvider>
  );
}

export default App;
