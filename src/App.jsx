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
        <h2>Juliana Purcino</h2>

      <div className={style.descricao}>
          Olá, meu nome é Juliana, tenho 21 anos e sou de Curitiba, onde moro até hoje. 
          Estudo Engenharia de Software e trabalho com soluções digitais, áreas que me fascinam 
          e me permitem estar sempre em contato com novas tecnologias. Sou canceriana, 
          nascida em 1º de julho, o que me faz valorizar muito a minha família e os amigos. 
          No tempo livre, gosto de explorar novos hobbies e buscar um equilíbrio entre a 
          vida profissional e pessoal.
      </div>
        
      </div>



    </>
  )
}

export default App
