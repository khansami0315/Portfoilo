// const Services  =() => {


//     return (
//           <>
//          {/*services section start */ }
//       <div classNameName="services_section layout_padding margin_90">
//          <div classNameName="container">
//             <div classNameName="row">
//                <div classNameName="col-sm-12">
//                   <h1 classNameName="services_taital">My <span classNameName="portfolio_taital_1">Services</span></h1>
//                </div>
//             </div>
//          </div>
//          <div classNameName="container">
//             <div classNameName="services_section_2">
//                <div classNameName="row">
//                   <div classNameName="col-lg-3 col-sm-6">
//                      <div classNameName="box_main ">
//                         <div classNameName="app_icon"><img src="images/icon-1.png" /></div>
//                         <div classNameName="app_icon_1"><img src="images/icon-1.png" /></div>
//                         <h4 classNameName="services_text active">App Design</h4>
//                      </div>
//                   </div>
//                   <div classNameName="col-lg-3 col-sm-6">
//                      <div classNameName="box_main ">
//                         <div classNameName="app_icon"><img src="images/icon-2.png" /></div>
//                         <div classNameName="app_icon_1"><img src="images/icon-6.png" /></div>
//                         <h4 classNameName="services_text">Website Design</h4>
//                      </div>
//                   </div>
//                   <div classNameName="col-lg-3 col-sm-6">
//                      <div classNameName="box_main ">
//                         <div classNameName="app_icon"><img src="images/icon-3.png"/></div>
//                         <div classNameName="app_icon_1"><img src="images/icon-7.png" /></div>
//                         <h4 classNameName="services_text">Html And Css</h4>
//                      </div>
//                   </div>
//                   <div classNameName="col-lg-3 col-sm-6">
//                      <div classNameName="box_main ">
//                         <div classNameName="app_icon"><img src="images/icon-4.png" /></div>
//                         <div classNameName="app_icon_1"><img src="images/icon-8.png" /></div>
//                         <h4 classNameName="services_text">Logo Designign</h4>
//                      </div>
//                   </div>
//                </div>
//                <div classNameName="readmore_bt"><a href="#">Read More</a></div>
//             </div>
//          </div>
//       </div>
//       {/* services section end */ }
//       </>
   
//     );
// };

// export default Services;


















// const Services = () => {
//    return (
//      <>
//        {/* services section start */}
//        <div className="services_section layout_padding margin_90">
//          <div className="container">
//            <div className="row">
//              <div className="col-sm-12">
//                <h1 className="services_taital">
//                  My <span className="portfolio_taital_1">Services</span>
//                </h1>
//              </div>
//            </div>
//          </div>
 
//          <div className="container">
//            <div className="services_section_2">
//              <div className="row">
//                <div className="col-lg-3 col-sm-6">
//                  <div className="box_main">
//                    <div className="app_icon">
//                      <img src="/images/icon-1.png" alt="App Design Icon" />
//                    </div>
//                    <div className="app_icon_1">
//                      <img src="/images/icon-1.png" alt="App Design Icon 2" />
//                    </div>
//                    <h4 className="services_text active">App Design</h4>
//                  </div>
//                </div>
 
//                <div className="col-lg-3 col-sm-6">
//                  <div className="box_main">
//                    <div className="app_icon">
//                      <img src="/images/icon-2.png" alt="Website Design Icon" />
//                    </div>
//                    <div className="app_icon_1">
//                      <img src="/images/icon-6.png" alt="Website Design Icon 2" />
//                    </div>
//                    <h4 className="services_text">Website Design</h4>
//                  </div>
//                </div>
 
//                <div className="col-lg-3 col-sm-6">
//                  <div className="box_main">
//                    <div className="app_icon">
//                      <img src="/images/icon-3.png" alt="HTML and CSS Icon" />
//                    </div>
//                    <div className="app_icon_1">
//                      <img src="/images/icon-7.png" alt="HTML and CSS Icon 2" />
//                    </div>
//                    <h4 className="services_text">Html And Css</h4>
//                  </div>
//                </div>
 
//                <div className="col-lg-3 col-sm-6">
//                  <div className="box_main">
//                    <div className="app_icon">
//                      <img src="/images/icon-4.png" alt="Logo Design Icon" />
//                    </div>
//                    <div className="app_icon_1">
//                      <img src="/images/icon-8.png" alt="Logo Design Icon 2" />
//                    </div>
//                    <h4 className="services_text">Logo Designing</h4>
//                  </div>
//                </div>
//              </div>
 
//              <div className="readmore_bt">
//                <a href="#">Read More</a>
//              </div>
//            </div>
//          </div>
//        </div>
//        {/* services section end */}
//      </>
//    );
//  };
 
//  export default Services;





const Services = () => {
   return (
     <>
       {/* services section start */}
       <section className="services-section" style={{
         padding: '80px 0',
         backgroundColor: '#fff'
       }}>
         <div className="container">
           <div className="row mb-5">
             <div className="col-12 text-center">
               <h1 className="section-title" style={{
                 fontSize: '2.5rem',
                 fontWeight: '700',
                 marginBottom: '20px',
                 color: '#333'
               }}>
                 My <span style={{ color: '#4e6bff' }}>Services</span>
               </h1>
             </div>
           </div>

           <div className="services-grid">
             <div className="row justify-content-center">
               {[
                 {
                   icon1: '/images/icon-1.png',
                   icon2: '/images/icon-1.png',
                   title: 'App Design'
                 },
                 {
                   icon1: '/images/icon-2.png',
                   icon2: '/images/icon-6.png',
                   title: 'Website Design'
                 },
                 {
                   icon1: '/images/icon-3.png',
                   icon2: '/images/icon-7.png',
                   title: 'HTML And CSS'
                 },
                 {
                   icon1: '/images/icon-4.png',
                   icon2: '/images/icon-8.png',
                   title: 'DataBase Design'
                 },



                 {
                  icon1: '/images/database.png',
                  icon2: '/images/icon-9.png',
                  title: 'DataBase Design'
                },


                {
                  icon1: '/images/php.png',
                  icon2: '/images/icon-10.png',
                  title: 'PHP'
                },




               {
                  icon1: '/images/icon-4.png',
                  icon2: '/images/icon-8.png',
                  title: 'React Js',
                }
               ].map((service, index) => (
                 <div className="col-lg-3 col-md-6 mb-4" key={index}>
                   <div className="service-card" style={{
                     backgroundColor: '#fff',
                     borderRadius: '10px',
                     padding: '30px 20px',
                     textAlign: 'center',
                     boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                     transition: 'all 0.3s ease',
                     height: '100%',
                     position: 'relative',
                     overflow: 'hidden'
                   }}>
                     <div className="icon-container" style={{
                       position: 'relative',
                       height: '80px',
                       marginBottom: '20px'
                     }}>
                       <img 
                         src={service.icon1} 
                         alt={service.title} 
                         style={{
                           height: '60px',
                           width: 'auto',
                           objectFit: 'contain',
                           transition: 'all 0.3s ease',
                           position: 'absolute',
                           left: '50%',
                           transform: 'translateX(-50%)'
                         }} 
                       />
                       <img 
                         src={service.icon2} 
                         alt={service.title} 
                         style={{
                           height: '60px',
                           width: 'auto',
                           objectFit: 'contain',
                           transition: 'all 0.3s ease',
                           position: 'absolute',
                           left: '50%',
                           transform: 'translateX(-50%)',
                           opacity: 0
                         }} 
                       />
                     </div>
                     <h4 style={{
                       fontSize: '1.2rem',
                       fontWeight: '600',
                       color: '#333',
                       marginBottom: '15px'
                     }}>{service.title}</h4>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="text-center mt-4">
             <a href="#" style={{
               display: 'inline-block',
               padding: '12px 30px',
               backgroundColor: '#4e6bff',
               color: '#fff',
               borderRadius: '5px',
               textDecoration: 'none',
               fontWeight: '500',
               transition: 'all 0.3s ease',
               marginTop: '20px'
             }}>
               Read More
             </a>
           </div>
         </div>
       </section>
       {/* services section end */}
     </>
   );
 };
 
 export default Services;