import { Link, useLocation } from 'react-router-dom';

import Intro from './Intro'
const Header = ()=>{
     const location = useLocation();

   return <>

    
      <div className="header_section">
         <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="logo"><Link to="/"><img src="/images/logo.png" alt="Logo" /></Link></div>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>

                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>
                     <li className="nav-item">
                        
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>

                     </li>
                     <li className="nav-item"> 
                        <Link className="nav-link" to="/service">Services</Link>
                     </li>

                     {/* <li className="nav-item">
                     <Link className="nav-link" to="/blog">blog</Link>
                     </li> */}

                     <li className="nav-item">
                     <Link className="nav-link" to="/contact">Contact</Link>

                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      {location.pathname == "/" &&   
      <Intro/>}
        
      </div>
     
   </>
}

export default Header;
