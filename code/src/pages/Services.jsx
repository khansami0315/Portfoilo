
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