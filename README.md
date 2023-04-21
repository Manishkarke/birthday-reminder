# This project is live at 

[Birthday Reminder](https://birthday-reminder-drab.vercel.app/)

This project is done to understand the concept of useState hook in react js.

- useState hooks is used to define a state in react functional component.
- useState hooks return two things, one is a state variable and another is a function which is used to update the state.
- useState hooks takes a parameter which is the initial state of the component.
- we cn initialize a state as one type and while updating state we can change it to another type.


## useState hook with array and object
- In useState hook, If we have to define an array or object as our state then we do it like useState([]) [for array] or useState({}) [for object]
- if we have to update our state of array then we do it like setState([...array, newValue]);
- if we have to update our state of object then we do it like setState({...object, key: value});

-if our state depends upon previous state then we update the state like 
  setState((prevState) => {return newState});