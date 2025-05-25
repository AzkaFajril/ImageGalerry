import { useState, useEffect } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const ImageGallery: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    const webhookUrl = 'https://discord.com/api/webhooks/1376192530366070784/p42_grNtD-FF4CBIGFM62lJZEDeCIw-dkQcVhoG2ApinhY6trGxYYEusNu87LtcCCtXq'; // Replace with your actual Discord webhook URL

    const payload = {
      content: `**New Message from ${formData.name}**\n` +
               `**Email:** ${formData.email}\n` +
               `**Subject:** ${formData.subject}\n` +
               `**Message:**\n\`\`\`\n${formData.message}\n\`\`\``
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        // Handle error (e.g., show an error message)
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><i className="fas fa-image"></i></a>
          <a
            className="nav-link d-lg-none"
            href="#"
            id="dark-mode-toggle-small"
            onClick={toggleDarkMode}
            style={{ cursor: 'pointer' }}
          >
            <i
              className={darkMode ? "fas fa-moon toggle-dark-icon" : "fas fa-sun toggle-dark-icon"}
              style={{ color: darkMode ? "#ffd600" : "#fbc02d" }}
            ></i>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#contact"><i className="fas fa-camera"></i> Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-images"></i> Album</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-search"></i> Search</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fas fa-users"></i> Friends</a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a
                  className="nav-link"
                  href="#"
                  id="dark-mode-toggle-large"
                  onClick={toggleDarkMode}
                  style={{ cursor: 'pointer' }}
                >
                  <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="center-name">
        <h1>Image Gallery</h1>
      </div>
      <div className="container mt-5">
        <div className="row" id="image-gallery"></div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-body p-0">
              <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <img src="" alt="mo" className="img-fluid" id="modal-image" />
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col text-center"><a href=""><i className="fas fa-camera"></i></a></div>
            <div className="col text-center"><a href=""><i className="fas fa-images"></i></a></div>
            <div className="col text-center"><a href=""><i className="fas fa-search"></i></a></div>
            <div className="col text-center"><a href=""><i className="fas fa-users"></i></a></div>
          </div>
        </div>
      </footer>

      <main className="contact-container" id="contact">
        <section className="contact-info">
          <h1 style={{ textAlign: 'center' }}>Contact Form</h1>
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you! Please fill out the form below or use our contact information.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>Azkafajril473@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>0831-7481-0825</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <h3>Address</h3>
              <p text-bold>jln pajajaran<br />bandung<br />jawa barat</p>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <h2>Send us a Message</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5} // Ensure this is a number
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ImageGallery;
