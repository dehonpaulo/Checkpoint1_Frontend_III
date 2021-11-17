//import { Component } from "react";
import './Project.scss';
import Domain from './domain.png';
import Github from './github.png';

const Project = ({imagem, titulo, children, linguagens, linkGit, linkDomain}) => {

        return (
            <div className="card">
                <img src={imagem} className="card-img-top" alt="Imagem analytics" />
                <div className ="card-body">
                    <h5 className ="card-title">{titulo}</h5>
                    <p className ="card-text">
                        {children}
                    </p>
                </div>
                <ul className ="list-group list-group-flush">
                    <li className ="list-group-item">
                        {linguagens.map((linguagem, index) => {
                           return (
                               <span key={index} className={linguagem.toLowerCase()}>{linguagem}</span>
                           ) 
                        })}
                    </li>
                </ul>
                <div className ="card-body">
                    <a href={linkGit} className ="card-link"><img className="icone" src={Github} alt="ícone do github" /></a>
                    <a href={linkDomain} className ="card-link"><img className="icone" src={Domain} alt="ícone do site" /></a>
                </div>
            </div>
        )
}

export default Project;