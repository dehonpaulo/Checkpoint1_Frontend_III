import { Component } from "react";
import './Banner.scss';

export default class Banner extends Component {

    render() {
        return(
            <section>
                <div className="banner">
                    <div className="container">
                        <div className="div-apresentacao">
                            <p id="apresentacao" className="p-apresentacao">
                                Me chamo Paulo Dehon, tenho 25 anos e sou desenvolvedor de software. Quisque sit amet enim in lacus aliquam consequat. Nulla dignissim fringilla convallis. Nunc libero turpis, tempus nec egestas at, gravida nec ligula. Donec quis volutpat eros. Fusce sed fermentum ipsum. Sed at libero leo. Praesent feugiat mollis urna, id semper ante dignissim a. Vivamus ornare libero nunc, sit amet pharetra sem sagittis eget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}