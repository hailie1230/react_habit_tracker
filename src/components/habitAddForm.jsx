import React, {memo} from 'react';

const HabitAddForm = memo((props) => {
  const formRef  = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form  className="add-form" onSubmit={onSubmit} ref={formRef}>
      <input 
        ref={inputRef}
        type="text" 
        className="add-input" 
        placeholder="your Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
