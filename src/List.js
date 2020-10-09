import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      text: false,
    };
  }
  cutIt = (event) => {
    const { text } = this.state;
    this.setState({ text: true });
  };

  render() {
    const { text } = this.state;
    const { task } = this.props;

    return (
      <>
        <div className="todo_style">
          <span onClick={this.cutIt}>
            <CheckCircleIcon className="deleteIcon" />
          </span>
          <li style={{ textDecoration: text ? "line-through" : "none" }}>
            {this.props.task}
          </li>
        </div>
      </>
    );
  }
}
export default List;
