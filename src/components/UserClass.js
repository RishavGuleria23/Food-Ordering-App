import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
    console.log("child constructor");
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  render() {
    const { names, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count Increase
        </button>
        <h2>Name: {names}</h2>
        <h3>Location :{Location}</h3>
        <h4>Contact</h4>
      </div>
    );
  }
}
export default UserClass;
