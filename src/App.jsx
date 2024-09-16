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


      <div className={style.titulo}>
        <h3>Experiências Profissionais</h3>
      </div>
      < div className={style.elementoE}>

          <div className={style.imagens}> 
            <img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/47938b1b273b72618bb7cd2cc5881c13" alt="" />
          </div>
            <h4>Furukawa Eletric Latam <br />Abril / 2022 - Maio / 2023 <br />Aprendiz de produção</h4>

      </div>
      < div className={style.elementoD}>

            <h4>Bosch <br />Fevereiro / 2024 - Dezembro / 2025 <br />Aprendiz em soluções Digitais</h4>
          <div className={style.imagens}> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDoP98eQqnZ8xUDwMMzmEm0E5L_psSG96BA&s" alt="" />
          </div>

      </div>
    </>
  )
}

export default App
