import { Fragment } from 'react';
import './App.scss';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Project from './components/Project/Project';

function App() {

  const projetos = [
    {
      id: 0,
      projeto: <Project imagem={"https://cdn.pixabay.com/photo/2017/12/15/19/07/ecommerce-3021581_960_720.jpg"} titulo={"Site de Vendas"} linguagens={["Html", "Css", "Javascript", "Bootstrap"]} linkGit={"https://github.com/dehonpaulo/MesaDeTrabalho_Aula06"} linkDomain={"https://mesa-de-trabalho-aula06.vercel.app/"}>
                  Este é um site de vendas desenvolvido por meio de donec eleifend nec risus quis aliquam. Suspendisse eu nunc vitae neque vehicula lobortis.
                </Project>
    },
    {
      id: 1,
      projeto: <Project imagem={"https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png"} titulo={"Rede Social"} linguagens={["Bootstrap", "React"]} linkGit={"https://github.com/dehonpaulo/MesaDeTrabalho_Aula06"} linkDomain={"https://mesa-de-trabalho-aula06.vercel.app/"}>
                  Este é o projeto de uma rede social Phasellus a commodo est. Suspendisse vel tempus est. Integer auctor leo quis nulla facilisis scelerisque.
                </Project>
    },
    {
      id: 2,
      projeto: <Project imagem={"https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg"} titulo={"Sistema de monitoramento"} linguagens={["Html", "Css", "Javascript"]} linkGit={"https://github.com/dehonpaulo/MesaDeTrabalho_Aula06"} linkDomain={"https://mesa-de-trabalho-aula06.vercel.app/"}>
                  Sistema de monitoramento que n et ligula sed ligula ullamcorper porttitor. Vestibulum non lacinia orci, nec dictum nisl.
                </Project>
    },
    {
      id: 3,
      projeto: <Project imagem={"https://cdn.pixabay.com/photo/2016/01/19/15/48/luggage-1149289_960_720.jpg"} titulo={"Agência de turismo"} linguagens={["Html", "Css", "Javascript", "Bootstrap"]} linkGit={"https://github.com/dehonpaulo/MesaDeTrabalho_Aula06"} linkDomain={"https://mesa-de-trabalho-aula06.vercel.app/"}>
                  Site de uma agência de turismo n et ligula sed non lacinia orci, nec dictum nisl.
                </Project>
    },
    {
      id: 4,
      projeto: <Project imagem={"https://cdn.pixabay.com/photo/2016/11/19/21/01/analysis-1841158_960_720.jpg"} titulo={"Relatórios online"} linguagens={["Html", "Css", "Javascript", "React"]} linkGit={"https://github.com/dehonpaulo/MesaDeTrabalho_Aula06"} linkDomain={"https://mesa-de-trabalho-aula06.vercel.app/"}>
                  Sistema que automatiza a construção de relatórios e dashboards eu nunc vitae neque vehicula loborti.
                </Project>
    }
  ]

  return (
    <>
      <Header />
      <main>
        <Banner />
        <section>
          <div className="projetos" id="projetos">

            {projetos.map(({id, projeto}) => {
              return (
                <Fragment key={id}>
                  {projeto}
                </Fragment>
              )
            })}
              
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
