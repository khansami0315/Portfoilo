

// const  Blog  = ()  => {



//   return  (


//      <>

//      {/* blog section start */ }
//       <div class="blog_section layout_padding margin_top90">
//          <div class="container">
//             <div class="row">
//                <div class="col-sm-12">
//                   <h1 class="blog_taital">My <span class="blog_taital_1">Blog</span></h1>
//                   <p class="blog_text">upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
//                </div>
//             </div>
//          </div>
//          <div class="blog_section_2">
//             <div class="container">
//                <div class="row">
//                   <div class="col-md-4">
//                      <div class="blog_box">
//                         <div class="blog_img">
//                            <h4 class="date_text">Jun 05</h4>
//                            <h4 class="prep_text">Veniam, quis nostrud </h4>
//                         </div>
//                         <p class="lorem_text">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
//                      </div>
//                   </div>
//                   <div class="col-md-4">
//                      <div class="blog_box">
//                         <div class="blog_img_2">
//                            <h4 class="date_text">Jun 05</h4>
//                            <h4 class="prep_text">Veniam, quis nostrud </h4>
//                         </div>
//                         <p class="lorem_text">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
//                      </div>
//                   </div>
//                   <div class="col-md-4">
//                      <div class="blog_box">
//                         <div class="blog_box_3">
//                            <div class="blog_img">
//                               <h4 class="date_text">Jun 05</h4>
//                               <h4 class="prep_text">Veniam, quis nostrud </h4>
//                            </div>
//                            <p class="lorem_text">elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
//                         </div>
//                      </div>
//                   </div>
//                </div>
//                <div class="readmore_bt_1"><a href="#">Read More</a></div>
//             </div>
//          </div>
//       </div>
//       {/* blog section end */}
//      </>
//   );


// };

// export default Blog;






















// const Blog = () => {
//     const blogPosts = [
//       {
//         id: 1,
//         title: "Modern Web Development Trends",
//         excerpt: "Exploring the latest technologies shaping the future of web development in 2023.",
//         date: "June 15, 2023",
//         image: "/images/blog-1.jpg",
//         category: "Development"
//       },
//       {
//         id: 2,
//         title: "UI/UX Design Principles",
//         excerpt: "Essential design principles every developer should know to create better user experiences.",
//         date: "May 28, 2023",
//         image: "/images/blog-2.jpg",
//         category: "Design"
//       },
//       {
//         id: 3,
//         title: "Optimizing React Performance",
//         excerpt: "Practical tips and tricks to boost your React application's performance.",
//         date: "April 12, 2023",
//         image: "/images/blog-3.jpg",
//         category: "Performance"
//       }
//     ];
  
//     return (
//       <section className="blog-section" style={{
//         padding: '80px 0',
//         backgroundColor: '#f9f9f9'
//       }}>
//         <div className="container">
//           <div className="row mb-5">
//             <div className="col-12 text-center">
//               <h2 className="section-title" style={{
//                 fontSize: '2.5rem',
//                 fontWeight: '700',
//                 marginBottom: '15px',
//                 color: '#333'
//               }}>
//                 Latest <span style={{ color: '#4e6bff' }}>Blog</span> Posts
//               </h2>
//               <p className="section-subtitle" style={{
//                 fontSize: '1.1rem',
//                 color: '#666',
//                 maxWidth: '700px',
//                 margin: '0 auto'
//               }}>
//                 Insights and tutorials about web development, design, and technology trends.
//               </p>
//             </div>
//           </div>
  
//           <div className="row">
//             {blogPosts.map(post => (
//               <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
//                 <div className="blog-card" style={{
//                   backgroundColor: '#fff',
//                   borderRadius: '10px',
//                   overflow: 'hidden',
//                   boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
//                   transition: 'all 0.3s ease',
//                   height: '100%'
//                 }}>
//                   <div className="blog-image" style={{
//                     height: '200px',
//                     overflow: 'hidden'
//                   }}>
//                     <img 
//                       src={post.image} 
//                       alt={post.title} 
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         transition: 'transform 0.5s ease'
//                       }}
//                     />
//                   </div>
//                   <div className="blog-content" style={{
//                     padding: '25px'
//                   }}>
//                     <div className="blog-meta" style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       marginBottom: '15px',
//                       fontSize: '0.9rem',
//                       color: '#888'
//                     }}>
//                       <span>{post.date}</span>
//                       <span style={{
//                         backgroundColor: '#f0f4ff',
//                         color: '#4e6bff',
//                         padding: '3px 10px',
//                         borderRadius: '20px',
//                         fontSize: '0.8rem'
//                       }}>{post.category}</span>
//                     </div>
//                     <h3 style={{
//                       fontSize: '1.4rem',
//                       fontWeight: '600',
//                       marginBottom: '15px',
//                       color: '#333',
//                       lineHeight: '1.4'
//                     }}>{post.title}</h3>
//                     <p style={{
//                       color: '#666',
//                       marginBottom: '20px',
//                       lineHeight: '1.6'
//                     }}>{post.excerpt}</p>
//                     <a href="#" style={{
//                       color: '#4e6bff',
//                       fontWeight: '500',
//                       textDecoration: 'none',
//                       display: 'inline-flex',
//                       alignItems: 'center',
//                       transition: 'all 0.3s ease'
//                     }}>
//                       Read More
//                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginLeft: '5px' }}>
//                         <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
  
//           <div className="text-center mt-5">
//             <a href="#" style={{
//               display: 'inline-block',
//               padding: '12px 30px',
//               backgroundColor: '#4e6bff',
//               color: '#fff',
//               borderRadius: '5px',
//               textDecoration: 'none',
//               fontWeight: '500',
//               transition: 'all 0.3s ease'
//             }}>
//               View All Posts
//             </a>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default Blog;

















const Blog = () => {
    return (
      <>
        {/* blog section start */}
        <div className="blog_section" style={{
          padding: '80px 0',
          backgroundColor: '#f9f9f9'
        }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1 className="blog_taital" style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '15px',
                  color: '#333'
                }}>
                  My <span style={{ color: '#4e6bff' }}>Blog</span>
                </h1>
                <p className="blog_text" style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  maxWidth: '700px',
                  margin: '0 auto 40px'
                }}>
                  upidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          
          <div className="blog_section_2">
            <div className="container">
              <div className="row">
                {[1, 2, 3].map((item, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="blog_box" style={{
                      backgroundColor: '#fff',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                      height: '100%'
                    }}>
                      <div className={`blog_img${index === 1 ? '_2' : ''}`} style={{
                        height: '200px',
                        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(/images/blog-${index+1}.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '20px',
                        position: 'relative',
                        color: '#fff'
                      }}>
                        <h4 className="date_text" style={{
                          fontSize: '1rem',
                          fontWeight: '500',
                          marginBottom: '10px'
                        }}>Jun 05</h4>
                        <h4 className="prep_text" style={{
                          fontSize: '1.4rem',
                          fontWeight: '600',
                          lineHeight: '1.4'
                        }}>Veniam, quis nostrud</h4>
                      </div>
                      <p className="lorem_text" style={{
                        padding: '20px',
                        color: '#666',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-4">
                <a href="#" className="readmore_bt_1" style={{
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
          </div>
        </div>
        {/* blog section end */}
      </>
    );
  };
  
  export default Blog;