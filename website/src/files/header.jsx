import React,{useRef,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    //data
    const navigation_of_header = [
        {
            name:"Home",
            href:"/"
        },
        {
            name:"About",
            href:"/about"
        },
        {
            name:"Events",
            href:"/events"
        },
        {
            name:"Alumni",
            href:"/alumni"
        },
        
        {
            name:"Staff",
            href:"/staff"
        },
        {
            name:"Gallery",
            href:"/gallery"
        },
        {
            name:"History",
            href:"/history"
        },
        {
            name:"Resources",
            href:"/resources"
        },
        {
            name:"People",
            href:"/people"
        },
        {
            name:"Contact",
            href:"/contact"
        },
        ]

    return (
        <div className="nav-wrapper">
        <div className="inner-nav-wrapper">
            <div className="logo">
                <h1>UG Computer Science Department</h1>
            </div>


          <div className="nav" >
            {
                navigation_of_header.map(nav => {
                    return (
                            <Link key={nav.name} className="nav-links" to={nav.href}>{nav.name}</Link>
                    )
                })
            }
            </div>
          <div className="nav-responsive">
            {
                navigation_of_header.map(nav => {
                    return (
                            <Link className="nav-links" to={nav.href}>{nav.name}</Link>
                    )
                })
            }
            </div>

        </div>
        </div>
    )
}

export default Header