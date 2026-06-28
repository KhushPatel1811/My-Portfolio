export default function Portfolio() {
    const projects = [
        {
        img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
        title: 'Automatic Institute Time Table Generator',
        desc: "An intelligent web application that generates conflict-free academic timetables by automating scheduling, resource allocation, and faculty management.",
        href: 'https://smart-academic-timetable-generator-k8n6n0gi6-khush-patel.vercel.app/'
        },
    ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Project</span></h2>
      <div className="portfolio-container">
        {projects.map(p => (
          <div className="portfolio-box" key={p.title} onClick={() => window.open(p.href, "_blank", "noopener,noreferrer")}>
            <img src={p.img} alt={p.title} />
            <div className="portfolio-layer">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <a href="#"><i className="bx bx-link-external"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
