import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in real app this would connect to backend
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "", 
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-description">
              I'm always interested in discussing programming, learning opportunities, 
              or potential collaborations. Feel free to reach out!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={20} />
                </div>
                <div className="method-info">
                  <span className="method-label">Email</span>
                  <span className="method-value">gobi.krishnan@email.com</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <MapPin size={20} />
                </div>
                <div className="method-info">
                  <span className="method-label">Location</span>
                  <span className="method-value">Student, India</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={20} />
                </div>
                <div className="method-info">
                  <span className="method-label">Status</span>
                  <span className="method-value">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="What's this about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn-submit">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;