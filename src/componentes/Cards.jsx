import Titulo from './Titulo'
import Imagem from './Imagem'
import Paragrafo from './Paragrafo'

function Cards(props) {
   return (
    <>
        <div>
            <Titulo content="Git"/>
            <Imagem imagem="https://embarcados.com.br/wp-content/uploads/2015/02/imagem-de-destaque-39.png.webp"/>
            <Paragrafo paragrafo="Git é o sistema de controle de versão open source mais usado no mundo atualmente! 
            Ele é usado para controlar o histórico de alterações de arquivos e principalmente de projetos
            de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, 
            segurança e desempenho."/>
        </div>
        <div>
            <Titulo content="HTML"/>
            <Imagem imagem="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"/>
            <Paragrafo paragrafo="HTML é uma linguagem de marcação utilizada na construção de páginas na Web. 
            Documentos HTML podem ser interpretados por navegadores. 
            A tecnologia é fruto da junção entre os padrões HyTime e SGML. 
            HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado
            em tempo."/>
        </div>
        <div>
            <Titulo content="CSS"/>
            <Imagem imagem="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"/>
            <Paragrafo paragrafo="CSS é a sigla para o termo em inglês Cascading Style Sheets que, 
            traduzido para o português, significa Folha de Estilo em Cascatas. 
            É uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, 
            e representa diversas possibilidades para a formatação. O CSS ajuda a editar, 
            alinhar, remover e trabalhar no espaço entre elementos de uma página."/>
        </div>
        <div>
            <Titulo content="Javascript"/>
            <Imagem imagem="https://codershire.com/wp-content/uploads/2019/01/javascp1.png"/>
            <Paragrafo paragrafo="JavaScript é uma linguagem de programação que permite a você implementar 
            itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente
            mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de
            tempo, mapas interativos ou gráficos 2D/3D animados, etc."/>
        </div>
    </>
    )
}
export default Cards