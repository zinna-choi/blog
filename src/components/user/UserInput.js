import React from "react";
const UserInput = props => {
  return (
    <div>
      <input
        placeholder="이름"
        type="text"
        onChange={props.handleChangeName}
        value={props.name}
      />
      <input
        placeholder="나이"
        type="number"
        onChange={props.handleChangeAge}
        value={props.age}
      />
      <button onClick={props.handleSubmit}>저장</button>
    </div>
  );
};
// class UserInput_deprecated extends React.Component {
//   constructor(props) {
// super(props);
// this.state = {
//   name: "",
//   age: 0
// };
//   }
//   handleChangeName = e => {
// this.setState({
//   name: e.target.value
// });
//   };
//
//   handleChangeAge = e => {
// this.setState({ age: e.target.value });
//   };
//
//   handleSubmit = () => {
// this.props.onSubmit(this.state);
//   };
//   render() {
// return (
//   <div>
{
  /* <input */
}
//   placeholder="이름"
//   type="text"
//   onChange={this.handleChangeName}
//   value={this.state.name}
// />
{
  /* <input */
}
//   placeholder="나이"
//   type="number"
//   onChange={this.handleChangeAge}
//   value={this.state.age}
// />
{
  /* <button onClick={this.handleSubmit}>저장</button> */
}
{
  /* </div> */
}
// );
//   }
// }

export default UserInput;
