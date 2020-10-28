
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'



import "./header.scss"

const Sidemenu = () => {
    return (

        <aside>
            <ul>
                <li>
                    <Link className>
                        <span className="home-icon">

                        </span>
                         Home
                    </Link>
                </li>


            </ul>
        </aside>
    )
}
export default Sidemenu
