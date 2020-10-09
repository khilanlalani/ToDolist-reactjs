import React, { Component } from "react";
import "./index.css";
import AddIcon from "@material-ui/icons/Add";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import Button from "@material-ui/core/Button";
import List from "./List";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: "",  
      taskList: [],
    };
  }
  componentDidMount = () => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      const taskArry = JSON.parse(tasks);
      this.setState({ taskList: taskArry });
    }
  };

  handleTask = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { taskList, task } = this.state;
    // const newTask = { id: taskList.length, desc: task };
    const newTasks = [...taskList, task];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    this.setState({ taskList: newTasks, task: "" });

    // this.setState({taskList:newTasks,task:""});
  };

  clearAll = () => {
    this.setState({ taskList: [] });
    // localStorage.setItem("tasks", []);
    localStorage.removeItem("tasks");
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="total">
            <div className="heading">
              <h1>Daily To-Do List Manager</h1>
            </div>

            <div className="show">
              <p>
              Friday
                <br />
              09-10-2020
              </p>
              <input
                type="text"
                placeholder="Write Your Task"
                value={this.state.task}
                onChange={this.handleTask}
              />
              <Button variant="outlined" color="secondary" type="submit">
                <AddIcon />
              </Button>
              <br />
              <div className="li-list">
              <ol>
                {this.state.taskList.map((task, i) => {
                  return <List key={i} task={task}  />;
                  
                })}
              </ol>
              </div>
              <div className="bottom">
              <Button 
                variant="outlined"
                color="secondary"
                type={"button"}
                onClick={this.clearAll}
              >
                <ClearAllIcon />
                Clear-All
              </Button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default App;
