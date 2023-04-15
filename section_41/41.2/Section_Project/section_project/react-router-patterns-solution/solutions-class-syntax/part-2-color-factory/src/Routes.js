import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";


class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
      }
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState(prevState => ({
      colors: { ...newColor, ...prevState.colors }
    }), () => {
      // third param to setState is fn-to-run-when-done
      localStorage.setItem("colors", JSON.stringify(this.state.colors))
    });
  }

  render() {
    const colorListWithColors = () => <ColorList colors={this.state.colors} />;

    const newColorWithHandler = props => (
      <NewColorForm addColor={this.handleAdd} {...props} />
    );

    const currentColor = props => {
      const colorName = props.match.params.color;
      const hex = this.state.colors[colorName];
      return <Color {...props} hex={hex} />;
    };

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors" render={colorListWithColors} />
          <Route exact path="/colors/new" render={newColorWithHandler} />
          <Route path="/colors/:color" render={currentColor} />
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
