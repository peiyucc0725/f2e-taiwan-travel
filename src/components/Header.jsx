import * as React from 'react';
import SearchBar from './SeachBar'
import logo from '../assets/image/logo_b.png'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
                <SearchBar dense="true"/>
            </div>
        </div>
    )
}

export default Header