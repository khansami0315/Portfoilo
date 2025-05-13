import React from 'react'

const Intro = () => {
  return (
   <>
    <div className="banner_section layout_padding">
            <section className="slide-wrapper">
               <div className="container-fluid">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container-fluid">
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="banner_taital_main">
                                       <h3 className="banner_text">Hello Am <br/>Abdul Sami</h3>
                                       <h1 className="banner_taital">MERN Stack Developer</h1>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="social_icon">
                                    <ul>
                                          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                          <li><a href="https://www.linkedin.com/in/abdul-sami-62b634232/">
                                              <i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                          <li>
                                          <a href="https://github.com/khansami0315" target="_blank" rel="noopener noreferrer">
                                           <i className="fa fa-github" aria-hidden="true"></i>
                                                </a>
                                                </li>

                                      
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                     </div>
                  </div>
               </div>
            </section>
            <div className="container">
               <div className="video_bt">
                  <div className="play_icon">  <img src="images/play-icon.png"/></div>
                  {/* <img src="images/play-icon.png"/>  */}
               </div>
            </div>
         </div>
   </>
  )
}

export default Intro