import { logDOM } from '@testing-library/react'
import React  from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import userImage from '../../assets/images/avatar.png'


import "./header.scss"

const Header = () => {
    return (
        <header className="top-header">
           <div className="logo-sections" >
            
               
           <Link to="/Home" >
               <img src={Logo} alt='Logo' />
           </Link>

           </div>

        <div className="user-info">
            <ul className="user-profile">
                <li>
                    <Link>
                    
                    <img src={userImage} className="img-fluid user-img" alt="User image" /> 
                    <span>Username</span>
                    <ul className="user-profile-detail">
                        <li>
                            <Link >
                            test2
                            </Link>
                        </li>

                    </ul>
                    </Link>
                </li>
            </ul>
            <button className="btn btn-outline logout-btn"> <span></span>Logout</button>


        </div>

        </header>


    )
}
export default Header
