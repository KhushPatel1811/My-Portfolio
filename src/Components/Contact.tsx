export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        <a href="mailto:khush5237@gmail.com" className="contact-card">
          <i className="bx bx-envelope"></i>
          <div>
            <h3>Email</h3>
            <p>khush5237@gmail.com</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/khush-patel-173774364/" target="_blank" rel="noopener noreferrer" className="contact-card">
          <i className="bx bxl-linkedin"></i>
          <div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/khush-patel-173774364</p>
          </div>
        </a>

        <a href="https://github.com/KhushPatel1811" target="_blank" rel="noopener noreferrer" className="contact-card">
          <i className="bx bxl-github"></i>
          <div>
            <h3>GitHub</h3>
            <p>github.com/KhushPatel1811</p>
          </div>
        </a>
      </div>
    </section>
  );
}