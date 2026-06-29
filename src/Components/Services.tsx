export default function Services() {
  const services = [
  {
    icon: "bx bx-code-alt",
    title: "Full Stack Development",
    desc: "Building scalable, responsive, and high-performance web applications using modern frontend and backend technologies.",
  },
  {
    icon: "bx bx-data",
    title: "Backend Development",
    desc: "Developing secure APIs, efficient databases, and robust server-side solutions for scalable applications, ensuring performance,and security."
  },
  {
    icon: "bx bx-briefcase-alt",
    title: "Custom Web Solutions",
    desc: "Creating custom web solutions that solve real-world business challenges that enhance productivity and business performance."
  },
];

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        {services.map(s => (
          <div className="services-box" key={s.title}>
            <i className={s.icon}></i>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}