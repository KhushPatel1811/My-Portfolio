const techs = [
  { icon: 'bxl-html5',       name: 'HTML5',       level: 'Expert' },
  { icon: 'bxl-css3',        name: 'CSS3',        level: 'Intermediate' },
  { icon: 'bxl-javascript',  name: 'JavaScript',  level: 'INtermediate' },
  { icon: 'bxl-typescript',  name: 'TypeScript',  level: 'Intermediate' },
  { icon: 'bxl-react',       name: 'React',       level: 'Intermediate' },
  { icon: 'bxl-nodejs',      name: 'Node.js',     level: 'Intermediate' },
  { icon: 'bxl-mongodb',     name: 'MongoDB',     level: 'Intermediate' },
  { icon: 'bxl-git',         name: 'Git',         level: 'Intermediate' },
  { icon: 'bxl-tailwind-css',name: 'Tailwind',    level: 'Intermediate' },
  { icon: 'bx bx-data',  name: 'Mysql',  level: 'Intermediate' },
];

export default function TechStack() {
  return (
    <section className="techstack" id="techstack">
      <h2 className="heading">Tech <span>Stack</span></h2>
      <div className="techstack-container">
        {techs.map(t => (
          <div className="tech-card" key={t.name}>
            <div className="tech-card-inner">
              <div className="tech-card-front">
                <i className={`bx ${t.icon}`}></i>
                <span>{t.name}</span>
              </div>
              <div className="tech-card-back">
                <span>{t.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
