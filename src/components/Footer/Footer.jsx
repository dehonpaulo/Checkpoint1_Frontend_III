import { Component } from "react";
import './Footer.scss';
import Linkedin from './linkedin.png';
import Github from './github.png';
import Email from './email.png';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <div id="contatos" className="bg-dark centralizador">
                    <a href="https://www.linkedin.com/in/paulodehon/"><img className="icon" src={Linkedin} alt="linkedin icon" /></a>
                    <a href="https://github.com/dehonpaulo"><img className="icon"src={Github} alt="github icon" /></a>
                    <a href="mailto:paulodehon@hotmail.com"><img className="icon"src={Email} alt="email icon" /></a>
                </div>
            </footer>
        )
    }
}