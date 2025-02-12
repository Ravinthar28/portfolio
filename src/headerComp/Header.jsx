
// CSS FILES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/head.css";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export function Header(){

    function displayMenu(){

        const menuList = document.querySelector(".menu-list");
        menuList.style.top = "20px"
        menuList.style.right = "20px";

        const menuBar = document.querySelector(".menu-bar");
        menuBar.style.display = "none";

        const closeMenu = document.querySelector(".close-menu")
        closeMenu.style.display = "block";

    }

    function closeMenu(){
        const menuBar = document.querySelector(".menu-bar");
        menuBar.style.display = "block";

        const menuList = document.querySelector(".menu-list");
        menuList.style.top = "20px"
        menuList.style.right = "-500px";

        const closeMenu = document.querySelector(".close-menu")
        closeMenu.style.display = "none";

    }
    return(
        <div className="header-container wow animate__animated animate__fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
            <header>
                <div className="left-head">
                    <h2>Portfolio</h2>
                </div>
                <nav className="navigator">
                <FontAwesomeIcon icon={faBars} className="menu-bar" color="white" onClick={displayMenu} />
                <FontAwesomeIcon icon={faX} className="close-menu" color="white" onClick={closeMenu} />
                    <ul className="menu-list">
                        <li>
                            <a href="#home" className="nav-links">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}