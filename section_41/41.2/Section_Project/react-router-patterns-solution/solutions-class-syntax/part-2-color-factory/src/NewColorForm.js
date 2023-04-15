import React, { Component } from "react";
import "./NewColorForm.css";

class NewColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      hex: "#ffffff"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addColor({ [this.state.name]: this.state.hex });
    this.props.history.push("/colors");
  }

  render() {
    return (
      <div className="NewColor">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Color name</label>
            <input
              name="name"
              id="name"
              placeholder="Enter color name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="hex">Color value</label>
            <input
              type="color"
              name="hex"
              id="hex"
              onChange={this.handleChange}
              value={this.state.hex}
            />
          </div>
          <input type="Submit" value="Add this color" readOnly />
        </form>
      </div>
    );
  }
}

export default NewColorForm;
