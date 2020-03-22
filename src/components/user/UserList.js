import React from "react";
import UserInput from "./UserInput";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
      list: [
        {
          name: "최지은",
          age: 45
        },
        {
          name: "김지은",
          age: 24
        },
        {
          name: "박지은",
          age: 24
        },
        {
          name: "최지은",
          age: 10
        }
      ]
    };
  }
  handleInputSubmit = () => {
    this.setState({
      list: this.state.list.concat({
        name: this.state.name,
        age: this.state.age
      })
    });
    this.setState({
      name: "",
      age: 0
    });
  };
  handleChangeName = e => {
    console.log();
    this.setState({
      name: e.target.value
    });
  };
  handleChangeAge = e => {
    this.setState({ age: e.target.value });
  };
  handleRemove = index => {
    this.setState({
      list: this.state.list.filter((item, i) => index !== i)
    });
  };

  render() {
    return (
      <div>
        <UserInput
          name={this.state.name}
          age={this.state.age}
          handleChangeName={this.handleChangeName}
          handleChangeAge={this.handleChangeAge}
          handleSubmit={this.handleInputSubmit}
        />
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index}>
                <p>이름:{item.name}</p>
                <p>나이:{item.age}</p>
                <button onClick={() => this.handleRemove(index)}>삭제</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
