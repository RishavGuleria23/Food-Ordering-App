import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utilities/UserContext";
import React, { Component } from "react"; //class UserClass extends React.Component can be written like this t00

class About extends Component {
  constructor(props) {
    super(props);
   this.state = {
    userInfo:{
      name: "Rishav",
 
     
    },
   };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Rishav");
    const json = await data.json();
    this.setState({ userInfo: json });
   // console.log(json);
  }
  componentDidUpdate(){
   // console.log("Component Did Update");
  }
  render() {
  
    const {name,id,following,avatar_url} = this.state.userInfo;


    return (
      <div>
       
        <h1>Name: {name}</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser} </h1>}
          </UserContext.Consumer>
        </div>
        
        <h2>id:{id}</h2>
        <h3>following:{following}</h3>

      
      </div>
    );
  }
}
export default About;
