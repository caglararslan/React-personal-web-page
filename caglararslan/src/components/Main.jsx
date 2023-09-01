import {useContext} from 'react'
import Header from './Header'
import EntryTop from './EntryTop';
import {Container ,Row, Col} from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext';
import ContactWrapper from './ContactWrapper';
import About from './About';

function Main() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div className={`app ${theme === 'light' ? theme : ""}`}>
            <Header/>
            <EntryTop/>
            <ContactWrapper/>
            <About/>
        </div>
    )
}

export default Main
