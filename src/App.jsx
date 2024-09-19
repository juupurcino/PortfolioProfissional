import style from "./App.module.css";

function App() {
  return (
    <>
      <section className={style.menu}>
        <a href="menu">
          <h4>Menu</h4>
        </a>
        <a href="#apresentacao">
          <h4>Apresentação</h4>
        </a>
        <a href="#experiencia">
          <h4>Histórico Profissional</h4>
        </a>
        <a href="#projeto">
          <h4>Projetos</h4>
        </a>
        <a href="#contato">
          <h4>Contato</h4>
        </a>
      </section>

      <div>
        <h1>Portfólio Pessoal</h1>
      </div>

      <section id="apresentacao" className={style.apresentacao}>
        <div className={style.descricao}>
          <h2>Juliana Purcino</h2>
          Olá, meu nome é Juliana, tenho 21 anos e sou de Curitiba, onde moro
          até hoje. Estudo Engenharia de Software e trabalho com soluções
          digitais, áreas que me fascinam e me permitem estar sempre em contato
          com novas tecnologias. Sou canceriana, nascida em 1º de julho, o que
          me faz valorizar muito a minha família e os amigos. No tempo livre,
          gosto de explorar novos hobbies e buscar um equilíbrio entre a vida
          profissional e pessoal.
        </div>
        <img src="../public/img/perfil.png" alt="" />
      </section>

      <section id="experiencia" className={style.titulo}>
        <h3>Experiências Profissionais</h3>
      </section>

      <div className={style.elementoE}>
        <div className={style.imagens}>
          <img
            src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/47938b1b273b72618bb7cd2cc5881c13"
            alt=""
          />
        </div>
        <h4>
          Furukawa Eletric Latam <br />
          Abril / 2022 - Maio / 2023 <br />
          Aprendiz de produção
        </h4>
      </div>
      <div className={style.elementoD}>
        <h4>
          Bosch <br />
          Fevereiro / 2024 - Dezembro / 2025 <br />
          Aprendiz em soluções Digitais
        </h4>
        <div className={style.imagens}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDoP98eQqnZ8xUDwMMzmEm0E5L_psSG96BA&s"
            alt=""
          />
        </div>
      </div>

      <section id="projeto" className={style.titulo}>
        <h3>Projetos</h3>
      </section>

      <div className={style.projeto}>
        <div className={style.ajuste}>
          <img src="../public/img/termo.png" alt="" />
          <div className={style.descricao}>
          <h4>Jogo "Termo"</h4> <p>Este projeto é uma realização da disciplina de Lógica de Programação, desenvolvido em C puro por Maraian e Helena. O jogo "Termo" foi criado com o objetivo de proporcionar uma experiência divertida e desafiadora, estimulando o raciocínio lógico dos jogadores. Ao longo do desenvolvimento, aplicamos diversos conceitos de programação, como estruturas de controle, manipulação de strings e gerenciamento de entrada e saída. Acreditamos que este projeto reflete não apenas o aprendizado teórico, mas também nossa criatividade e trabalho em equipe. Esperamos que todos apreciem o jogo tanto quanto nós gostamos de desenvolvê-lo!</p>
          <a href="https://github.com/Helengendary/TERMO.git" target="_blank">
            <img
              className={style.icone}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
              />
          </a>
              </div>
        </div>
      </div>

      <div className={style.projeto}>
        <div className={style.ajuste}>
          <img src="https://github.com/adriansito124/Portf-lio/blob/main/Imagens/planta.png?raw=true" alt="" />
          <div className={style.descricao}>
          <h4>Regador Automático de Plantas</h4> <p>Este projeto é uma realização da disciplina de Internet das Coisas, desenvolvido por Adrian e Hamilton. O regador automático de plantas foi criado com o objetivo de facilitar o cuidado das plantas, proporcionando uma solução prática para quem tem uma rotina agitada. Durante o desenvolvimento, utilizamos sensores de umidade e uma interface web, aplicando conceitos de programação e eletrônica para garantir o monitoramento e a rega automática. Acreditamos que este projeto demonstra não apenas nosso aprendizado técnico, mas também a nossa criatividade e capacidade de trabalhar em equipe. Esperamos que todos apreciem a inovação e a funcionalidade deste sistema tanto quanto nós gostamos de desenvolvê-lo!</p>          <a href="https://github.com/juupurcino/Regador-de-planta-.git" target="_blank">
            <img
              className={style.icone}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
              />
          </a>
              </div>
        </div>
      </div>

      <section id="contato" className={style.titulo}>
        <div className={style.ajusteContato}>
          <div>
            <h3>Contato</h3>
          </div>
          <div className={style.contato}>
            <a href="mailto:jdiaspurcino@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Juliana,%20gostaria%20de%20entrar%20em%20contato%20com%20você." target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="E-mail" />
            </a>
            <a href="https://www.linkedin.com/in/juupurcino/" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="LinkedIn" />
            </a>
            <a href="https://wa.me/5541988503023?text=Olá%20Juliana,%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho!" target="_blank">
              <img src="https://cdn-icons-png.freepik.com/256/15707/15707917.png" alt="WhatsApp" />
            </a>
            <a href="https://github.com/juupurcino" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
