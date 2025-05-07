const About = () => {
    return (
      <>
        {/* about section start */}
        <section className="about-section" style={{
          padding: '80px 0',
          backgroundColor: '#f9f9f9'
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
                  About <span style={{ color: '#4e6bff' }}>Me</span>
                </h1>
                <p className="section-subtitle" style={{
                  fontSize: '1.1rem',
                  color: '#666',
                  maxWidth: '800px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  I am <strong style={{ color: '#4e6bff' }}>Abdul Sami</strong>, a dedicated <strong style={{ color: '#4e6bff' }}>MEAN Stack Developer</strong> with 1 year of experience, and a <strong style={{ color: '#4e6bff' }}>PHP Laravel Developer</strong> with 2 years of experience. I specialize in building dynamic, responsive web applications and enjoy solving complex problems while bringing creative UI/UX designs to life.

                </p>
              </div>
            </div>
            
            <div className="about-content" style={{
              padding: '40px 0'
            }}>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div className="about-image" style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                  }}>
                    <img 
                      src="/images/abdulsami.jpeg" 
                      alt="About me" 
                      className="img-fluid"
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                      }} 
                    />
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="about-details" style={{
                    padding: '30px',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                  }}>
                    <h2 style={{
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      marginBottom: '25px',
                      color: '#333',
                      position: 'relative',
                      paddingBottom: '10px'
                    }}>
                      <span style={{
                        content: '""',
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        width: '50px',
                        height: '3px',
                        backgroundColor: '#4e6bff'
                      }}></span>
                      My Skills
                    </h2>
                    
                    <ul className="skills-list" style={{
                      listStyle: 'none',
                      padding: '0',
                      marginBottom: '30px'
                    }}>
                      {[
                        'MongoDB, Express.js, Angular, Node.js',
                        'React.js, HTML5, CSS3, Bootstrap',
                        'Core PHP, Laravel, JavaScript, jQuery',
                        'REST APIs, JWT, Git, Deployment',
                        'UI/UX Design and Frontend Animation'
                      ].map((skill, index) => (
                        <li key={index} style={{
                          padding: '10px 0',
                          paddingLeft: '25px',
                          position: 'relative',
                          fontSize: '1rem',
                          color: '#555'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            top: '15px',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: '#4e6bff'
                          }}></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                    
                    <a href="#" className="read-more-btn" style={{
                      display: 'inline-block',
                      padding: '10px 25px',
                      backgroundColor: '#4e6bff',
                      color: '#fff',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: 'pointer'
                    }}>
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about section end */}
      </>
    );
  };
  
  export default About;













