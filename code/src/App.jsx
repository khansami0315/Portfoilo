import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Layout from './layouts/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import Layout from './components/layouts/Layout';
import Services from './pages/Services';
import Portfolio from './pages/Protfolio';

// import Blog from './pages/Blog';


function App() {
  return (
    <BrowserRouter>
    
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path ="portfolio" element={<Portfolio/>} />

          <Route  path="service" element={<Services  />} />
          
          <Route path="contact" element={<Contact />} />

      
          {/* <Route  path="blog" element={<Blog/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
