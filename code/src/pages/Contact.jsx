const Contact = () => {
    return (
      <>
        {/* contact section start */}
        <div className="contact_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="contact_taital">
                  My <span className="contact_taital_1">Contact</span>
                </h1>
              </div>
            </div>
            <div className="contact_section_2">
              <div className="row">
                <div className="col-md-12">
                  <div className="mail_section_1">
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Your Name"
                      name="Your Name"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Your Email"
                      name="Your Email"
                    />
                    <input
                      type="text"
                      className="mail_text"
                      placeholder="Your Phone"
                      name="Your Phone"
                    />
                    <textarea
                      className="massage-bt"
                      placeholder="Your Message"
                      rows="5"
                      id="comment"
                      name="Your Message"
                    />
                    <div className="send_bt">
                      <a href="#">Send Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact section end */}
      </>
    );
  };
  
  export default Contact;


































// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_p0ymnwl', // ✅ your actual Service ID
//       'template_xxxxxx', // 🔁 replace this with your actual Template ID
//       form.current,
//       'your_public_key_here' // 🔁 replace this with your EmailJS public key
//     )
//     .then((result) => {
//         alert('Message sent successfully!');
//         console.log(result.text);
//     }, (error) => {
//         alert('Failed to send message. Try again.');
//         console.log(error.text);
//     });

//     e.target.reset(); // Optional: reset form after sending
//   };

//   return (
//     <div className="contact_section layout_padding">
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-12">
//             <h1 className="contact_taital">My <span className="contact_taital_1">Contact</span></h1>
//           </div>
//         </div>
//         <div className="contact_section_2">
//           <div className="row">
//             <div className="col-md-12">
//               <form ref={form} onSubmit={sendEmail}>
//                 <input
//                   type="text"
//                   name="user_name"
//                   className="mail_text"
//                   placeholder="Your Name"
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="user_email"
//                   className="mail_text"
//                   placeholder="Your Email"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="user_phone"
//                   className="mail_text"
//                   placeholder="Your Phone"
//                 />
//                 <textarea
//                   name="message"
//                   className="massage-bt"
//                   placeholder="Your Message"
//                   rows="5"
//                   required
//                 />
//                 <div className="send_bt">
//                   <button type="submit" className="btn btn-primary">Send Now</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

  