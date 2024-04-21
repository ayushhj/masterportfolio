import { useState } from "react"

const Header = ()=>{
    const [showMenu , setShowMenu] = useState(false);

const handleShowMenu = ()=>{
    setShowMenu(true)
}
const handleHideMenu = ()=>{
    setShowMenu(false)
}


    return(

        <div className="header" id="header" >
            <div className="nav container" >
                <a href="#" className="nav__logo">
                    <span className="nav__logo-circle" >A</span>
                    <span className="nav__logo-name" >Ayush Joshi.</span>
                </a>
                <div className= {showMenu?"show-menu" :"nav__menu"}  id="nav-menu" >
                {/* <div className="nav__menu" id="nav-menu" > */}
                    <span className="nav__title" >Menu</span>
                    <h3 className="nav__name" >Ayush</h3>
                    <ul className="nav__list" >
                        <li className="nav__item" >
                            <a href="#" className="nav__link"  >Home</a>
                        </li>
                        <li className="nav__item" >
                            <a href="#about" className="nav__link" >About</a>
                        </li>
                        <li className="nav__item" >
                            <a href="#projects" className="nav__link"  >Projects</a>
                        </li>
                        <li className="nav__item" >
                            <a href="#contact" className="nav__link"  >Contact Me</a>
                        </li>
                    </ul>

        {/* close button */}
                    <div onClick={()=>{handleHideMenu()}} className="nav__close" id="nav-close" >
                    <i class="ri-close-line"></i>
                    </div>
                    
                </div>
                <div className="nav__button" >
                    {/* toggle button */}
                    <div onClick={()=>{handleShowMenu()}}  className="nav__toggle" id="nav-toggle"  >
                    <i class="ri-menu-4-line"></i>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Header