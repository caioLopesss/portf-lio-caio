import { PROJECTS } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="projects-shell">
        <header className="projects-heading">
          <div>
            <p className="projects-kicker">03 / TRABALHOS SELECIONADOS</p>
            <h2 id="projects-title">Projetos<span>.</span></h2>
            <p className="projects-intro">Ideias que ganharam forma na web.</p>
          </div>
          <span className="projects-count">{String(PROJECTS.length).padStart(2, "0")} PROJETOS</span>
        </header>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <a
              className="project-card"
              href={project.url}
              key={project.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir projeto ${project.name} em uma nova aba`}
            >
              <div className="project-window">
                <div className="project-window-bar" aria-hidden="true">
                  <span className="project-window-lights"><i /><i /><i /></span>
                  <span>0{index + 1} / PORTFOLIO</span>
                  <span className="project-window-arrow">↗</span>
                </div>
                <div className="project-live-preview">
                  <iframe
                    src={project.url}
                    title={`Prévia de ${project.name}`}
                    loading="lazy"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                  <span className="project-preview-title">{project.name}</span>
                </div>
              </div>

              <div className="project-details">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-open" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}