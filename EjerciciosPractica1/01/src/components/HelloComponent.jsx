import React from "react";
export class MyHelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myText: "hello" };
    }

    handleCambiarEstado = () => {
        this.setState({ myText: "Juanfran" });
    }

    render() {
        return (
            <>
                <h3>{this.state.myText}</h3>
                <button onClick={this.handleCambiarEstado}>Change text</button>
            </>
        );
    }
}