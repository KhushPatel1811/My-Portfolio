import khushImg from '../assets/Image/Khush.jpeg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={khushImg} alt="About Me" style={{height: '250px', width: '250px'}} />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>FullStack Developer</h3>
        <p>I am a Full Stack Developer dedicated to crafting high-quality digital experiences that combine elegant design with powerful functionality. I enjoy collaborating with businesses to understand their challenges and build scalable web applications that improve efficiency, automate processes, and create meaningful impact. I believe great software is not just about writing code—it's about solving problems that matter.</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
}
