import './App.css'
import Header from './componentes/Header'
import Sobre from './componentes/Sobre'
import SobreMim from './componentes/SobreMim'
import Footer from './componentes/Footer'

function App() {
  return (
    <div className="div_do_app">
      <Header content="Meus conteudos favoritos"/>
      <SobreMim
        titulo="Prazer, eu sou a Laylla!"
        imagem="https://avatars.githubusercontent.com/u/109319620?s=400&u=bd7d953440abbd2f57355aebeb42ad2c09f55a9d&v=4"
        paragrafo="Tenho 26 anos, moro em Campina Grande -PB, formada em Direito desde 2019. Entusiasta
        da tecnologia, encontrei no reprograma a oportunidade de migração de carreira, onde atualmente sou Aluna Front-end
        da turma On20.
        Confira abaixo meus conteudos favoritos:" />
      <Sobre
        titulo="Git"
        imagem="https://embarcados.com.br/wp-content/uploads/2015/02/imagem-de-destaque-39.png.webp"
        paragrafo="Git é o sistema de controle de versão open source mais usado no mundo atualmente! 
        Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos
        de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, 
        segurança e desempenho." />
      <Sobre
        titulo="HTML"
        imagem="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
        paragrafo="HTML é uma linguagem de marcação utilizada na construção de páginas na Web. 
        Documentos HTML podem ser interpretados por navegadores. 
        A tecnologia é fruto da junção entre os padrões HyTime e SGML. 
        HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado
        em tempo." />
      <Sobre
        titulo="CSS"
        imagem="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
        paragrafo="CSS é a sigla para o termo em inglês Cascading Style Sheets que, 
        traduzido para o português, significa Folha de Estilo em Cascatas. 
        É uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, 
        e representa diversas possibilidades para a formatação. O CSS ajuda a editar, 
        alinhar, remover e trabalhar no espaço entre elementos de uma página." />
      <Sobre
        titulo="Javascript"
        imagem="https://codershire.com/wp-content/uploads/2019/01/javascp1.png" 
        paragrafo="JavaScript é uma linguagem de programação que permite a você implementar 
        itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente
        mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de
        tempo, mapas interativos ou gráficos 2D/3D animados, etc." />
      <Footer content="Feito com ♡ por Laylla. E todos os direitos são reservados." />
    </div>
  )
}

export default App
