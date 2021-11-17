import { Component } from "react"
import './Header.scss';

export default class Header extends Component {

    render() {

        return (
            <header id="navbar">
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#navbar"><h1>Paulo Dehon</h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#apresentacao">Sobre mim</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projetos">Projetos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contatos">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }

}