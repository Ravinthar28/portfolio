
// CSS FILES
import "./css/head.css";

export function Header(){
    return(
        <div className="header-container wow animate__animated animate__fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
            <header>
                <nav className="navigator">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
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