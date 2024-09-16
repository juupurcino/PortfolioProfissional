import style from './App.module.css'

function App() {


  return (
    <>

      <div className={style.menu}>
        <a href=""><h4>Menu</h4></a>
        <a href=""><h4>Apresentação</h4></a>
        <a href=""><h4>Histórico Profissional</h4></a>
        <a href=""><h4>Estudo</h4></a>
        <a href=""><h4>Links</h4></a>
      </div>

      <div>
        <h1>Portfólio Pessoal</h1>
      </div>


      <div className={style.apresentacao}>
        
        
        <div className={style.descricao}>
            <h2>Juliana Purcino</h2>
            Olá, meu nome é Juliana, tenho 21 anos e sou de Curitiba, onde moro até hoje. 
            Estudo Engenharia de Software e trabalho com soluções digitais, áreas que me fascinam 
            e me permitem estar sempre em contato com novas tecnologias. Sou canceriana, 
            nascida em 1º de julho, o que me faz valorizar muito a minha família e os amigos. 
            No tempo livre, gosto de explorar novos hobbies e buscar um equilíbrio entre a 
            vida profissional e pessoal.
        </div>
            <img src="../public/img/perfil.png" alt="" />
      </div>

      <div className={style.elemento}>
        <div className={style.titulo}>
          <h3>Experiências Profissionais</h3>
        </div>

        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
      </div>


      <div className={style.elemento}>
        <div className={style.titulo}>
          <h3>Projetos</h3>
        </div>

        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
      </div>


      <div className={style.elemento}>
        <div className={style.titulo}>
          <h3>Contato</h3>
        </div>

        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
        <div className={style.classes}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Furukawa_Electric_en_logo.svg/2560px-Furukawa_Electric_en_logo.svg.png" alt="" />
        <div className={style.descricao}>
          Furukawa 
        </div>
        </div>
      </div>


    </>
  )
}

export default App
