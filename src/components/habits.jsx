import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleAdd = (name) => {
    this.props.onAdd(name);
  }

  render() {
    // console.log('habits');
    return (
      <div>
        <HabitAddForm onAdd={this.handleAdd}/>
        <ul className="habits-list-wrap">
          {
            this.props.habits.map(habit => (
              <Habit 
                habit={habit}
                // count={habit.count}
                name={habit.name}
                key={habit.id}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              />
            ))
          }
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset Count</button>
      </div>
    );
  }
}

export default Habits;