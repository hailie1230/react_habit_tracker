import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  componentDidMount(){
    console.log(`habit: ${this.props.habit.name} mount`);
  }
  componentWillUnmount(){
    console.log(`habit: ${this.props.habit.name} will mount`);
  }

  handleIncrement = (habit) => {
    // console.log(`handleIncrement ${habit}`);
    this.props.onIncrement(this.props.habit);
  }
  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit}`);
    this.props.onDecrement(this.props.habit);
  }
  handleDelete = (habit) => {
    // console.log(`handleDelete ${habit}`);
    this.props.onDelete(this.props.habit);
  } 
  render() {
    const { name , count } = this.props.habit;
    // const { count } = this.props;

    // console.log(`habit: ${name}`);
    return <li className="habit">
      <span className="habit-name">{name}</span>
      <div className="button-wrap">
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <i className="fa-solid fa-square-plus"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <i className="fa-solid fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>;
  }
}

export default Habit;