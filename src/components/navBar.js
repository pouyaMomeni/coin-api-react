import React from 'react'
import '../style/nav.css'
import Scroll from 'react-scroll'
const NavBar = () => {
    let Link = Scroll.Link;
    return (
        <nav className="navbar navbar-dark  navbar-expand-lg bg-color" >
            <div className="container-fluid">
                {/* <span className="navbar-brand" >انلاین شاپ</span> */}
                <img className='total' src={require('../image/nav-logo1.png')} alt='ss' id='logo-pic' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link active" to='/' aria-current="page" >خانه</span>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="list"
                                spy={true}
                                smooth={true}
                                duration={500}  >لیست خرید</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="box"
                                spy={true}
                                smooth={true}
                                duration={500}  >باکس تبدیل</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </span>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar