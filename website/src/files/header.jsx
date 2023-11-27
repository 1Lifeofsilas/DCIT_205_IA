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
            name:"Faculty",
            href:"/faculty"
        },
        {
            name:"Events",
            href:"/events"
        },
        {
            name:"About",
            href:"/about"
        },
        {
            name:"Research Groups",
            href:"/research-groups"
        },
        {
            name:"Programmers",
            href:"/programmers"
        },
        {
            name:"Technical Team",
            href:"/tech-team"
        },
        {
            name:"Tips",
            href:"/tips"
        },
        {
            name:"Social",
            href:"/social"
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
                            <Link key={nav.name} className="nav-links" href={nav.href}>{nav.name}</Link>
                    )
                })
            }
            </div>
          <div className="nav-responsive">
            {
                navigation_of_header.map(nav => {
                    return (
                            <Link className="nav-links" href={nav.href}>{nav.name}</Link>
                    )
                })
            }
            </div>

        </div>
        </div>
    )
}

export default Header