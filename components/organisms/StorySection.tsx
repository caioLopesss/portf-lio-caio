export default function StorySection() {
  return (
    <section className="story" aria-labelledby="historia-titulo">
      <div className="story-index" aria-hidden="true">01</div>
      <div className="story-content">
        <p className="story-kicker">MINHA HISTÓRIA</p>
        <h2 id="historia-titulo">Da psicologia<br />para a tecnologia.</h2>
        <p className="story-text">
          Meu interesse por tecnologia começou em 2021, por meio de um amigo. Na época,
          eu cursava o sexto período de Psicologia, mas decidi trancar a faculdade para
          seguir um caminho que despertava em mim uma curiosidade cada vez maior.
        </p>
        <p className="story-text story-text-secondary">
          Em 2023, concluí minha formação como desenvolvedor Full Stack pela Digital House
          em parceria com a Rocketseat. Desde então, venho atuando na área, desenvolvendo
          projetos e transformando ideias em experiências digitais úteis e bem construídas.
          Atualmente, venho me especializando em Inteligência Artificial e cibersegurança.
        </p>
      </div>
    </section>
  );
}
