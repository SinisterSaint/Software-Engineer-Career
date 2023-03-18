class Person extends React.Component {
  render() {
    let voteText = this.props.age >= 18 ? "Go vote!" : "Go study!";

    let hobbies = this.props.hobbies.map(hobby => <li>{hobby}</li>);

    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {this.props.name.slice(0, 6)}</li>
          <li>Age: {this.props.age}</li>
          <ul>
            Hobbies
            {hobbies}
          </ul>
        </ul>
        <h3>{voteText}</h3>
      </div>
    );
  }
}
