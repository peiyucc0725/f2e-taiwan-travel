import * as React from 'react';
import SearchBar from './SeachBar'
import logo from '../assets/image/logo_b.png'

const Header = (props) => {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <img className="logo" src={logo} alt="logo" />
                <SearchBar dense="true"/>
            </div>
        </div>
    )
}

export default Header