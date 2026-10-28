export default function ProfessionalContributions() {
  return (
    <section className="contributions-section" aria-labelledby="contributions-title">
      <div className="contributions-shell">
        <div className="contributions-heading">
          <p className="contributions-kicker">04 / EXPERIÊNCIA EM PRODUTOS REAIS</p>
          <h2 id="contributions-title">Contribuições em<br /><span>projetos profissionais.</span></h2>
          <p>Interfaces que construí para transformar ideias em experiências digitais.</p>
        </div>

        <article className="contribution-feature">
          <div className="contribution-copy">
            <span className="contribution-number">01 / PROJETO PROFISSIONAL</span>
            <h3>Bingo <em>online.</em></h3>
            <p className="contribution-lead">Uma experiência de jogo com narração por IA e animações que dão vida a cada rodada.</p>
            <p className="contribution-description">Contribuí com o desenho da interface e o desenvolvimento do front-end, criando uma experiência visual envolvente para acompanhar as chamadas dos números e o andamento da partida.</p>
            <div className="contribution-tags" aria-label="Características do projeto">
              <span>Interface</span><span>Front-end</span><span>Narração por IA</span><span>Animações</span>
            </div>
          </div>
        </article>

        <article className="contribution-feature">
          <div className="contribution-copy">
            <span className="contribution-number">02 / PROJETO PROFISSIONAL</span>
            <h3>Interface <em>mobile.</em></h3>
            <p className="contribution-lead">Desenvolvimento de uma interface para aplicativo mobile em React Native.</p>
            <p className="contribution-description">Atuei na construção das telas e na integração necessária para conectar a experiência do aplicativo às suas funcionalidades.</p>
            <div className="contribution-tags" aria-label="Características do projeto">
              <span>React Native</span><span>Interface mobile</span><span>Integração</span>
            </div>
          </div>
        </article>

        <article className="contribution-feature">
          <div className="contribution-copy">
            <span className="contribution-number">03 / PROJETO PROFISSIONAL</span>
            <h3>App Tais <em>Rodrigues.</em></h3>
            <p className="contribution-lead">Desenvolvimento de todo o administrativo, do dashboard e da estrutura para alimentar o conteúdo do aplicativo.</p>
            <p className="contribution-description">Trabalhei nas integrações via API REST, utilizei o Postman para apoiar a validação das requisições e colaborei com a equipe ao longo do desenvolvimento.</p>
            <div className="contribution-tags" aria-label="Características do projeto">
              <span>Administrativo</span><span>Dashboard</span><span>API REST</span><span>Postman</span><span>Colaboração em equipe</span>
            </div>
            <a className="contribution-link" href="https://play.google.com/store/apps/details?id=com.thaisrodrigues.trecommerceapp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" aria-label="Baixar o app Tais Rodrigues na Google Play em uma nova aba">
              Baixar app na Google Play <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <article className="contribution-feature">
          <div className="contribution-copy">
            <span className="contribution-number">04 / PROJETO PROFISSIONAL</span>
            <h3>Novo site <em>IBGC.</em></h3>
            <p className="contribution-lead">Desenvolvimento do front-end do novo site do IBGC, do CMS em Strapi e das integrações.</p>
            <p className="contribution-description">Implementação de integrações via API REST e Dynamics, criação de componentes para páginas dinâmicas e participação na definição da organização do design system com base em Atomic Design.</p>
            <div className="contribution-tags" aria-label="Características do projeto">
              <span>Front-end</span><span>Strapi</span><span>API REST</span><span>Dynamics</span><span>Páginas dinâmicas</span><span>Atomic Design</span>
            </div>
            <a className="contribution-link" href="https://www.ibgc.org.br/" target="_blank" rel="noopener noreferrer" aria-label="Acessar o site do IBGC em uma nova aba">
              Acessar site do IBGC <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
