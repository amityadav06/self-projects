// "Lifting state up" is a concept in React that refers to moving the state from a child component to
//  a common parent component when multiple child components need to share or access the same piece of state. Instead
// of each child maintaining its own version of the state, the state is "lifted" to the closest common ancestor (parent),
// which can then pass the state and update handlers down to its children via props.

// Why Lift State Up?
// In React, state is usually local to a component. However, sometimes two or more components need to access or modify the same state.
// In such cases, it's better to "lift" the state to their nearest common parent so that both child components can read and update 
// it via props.

// Example Scenario
// Consider the case where you have two child components that need to share a counter value:

// ChildA needs to display the current counter value.
// ChildB needs to update the counter value.
// To solve this, you would lift the state (the counter value) from the children up to the parent so that both ChildA and ChildB can access it.

// Example of Lifting State Up:
import React, { useState } from 'react';

// Parent component
function Parent() {
  const [counter, setCounter] = useState(0);

  // Function to handle increment
  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <ChildA counter={counter} />
      <ChildB increment={increment} />
    </div>
  );
}

// ChildA only displays the counter
function ChildA({ counter }) {
  return <div>ChildA: {counter}</div>;
}

// ChildB updates the counter
function ChildB({ increment }) {
  return <button onClick={increment}>Increment Counter</button>;
}

export default Parent;

// Breakdown:
// Parent Component:

// Holds the counter state and the increment function.
// Passes counter as a prop to ChildA so it can display the value.
// Passes increment as a prop to ChildB so it can update the state.
// ChildA:

// Receives counter as a prop and displays it.
// ChildB:

// Receives increment as a prop and calls it when the button is clicked to update the state in the parent.
// Benefits of Lifting State Up:
// Centralized State: The state is centralized in one place (the parent), which makes it easier to manage and track.
// Data Flow Control: The parent component controls the data flow to child components via props, maintaining a unidirectional
//  data flow, which is a core principle in React.
// Shared State: When multiple components need access to the same state, lifting state up prevents each component from having its own
//  version of the state, which could cause inconsistencies.
// When to Lift State Up?
// You should lift state up when:

// Two or more child components need to share or sync state.
// You want to centralize and manage the state in a single place (usually the nearest common parent).
// You want to pass down state and state-modifying functions to child components via props.
// How It Works in React:
// State can only be maintained within a component, so when multiple components need the same state, it's lifted to a common ancestor.
// React's unidirectional data flow means that data flows downwards from parent to child via props. Therefore, the parent manages
// the state and passes it down to the children.
// The parent also provides any functions required to modify the state, and children can call these functions to update the state.
// Example Without Lifting State Up (Incorrect Approach):

import React, { useState } from 'react';

function ChildA() {
  const [counter, setCounter] = useState(0);
  return <div>ChildA: {counter}</div>;
}

function ChildB() {
  const [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter + 1)}>Increment</button>;
}

export function Parent() {
  return (
    <div>
      <ChildA />
      <ChildB />
    </div>
  );
}



// In this case:

// Each child has its own state (counter), and they don't share it.
// ChildA and ChildB are isolated, which means clicking the button in ChildB doesn't affect the counter in ChildA.
// Common Pitfall: Prop Drilling
// When you lift state up, sometimes you end up passing props through multiple layers of components, which is called prop 
// drilling. If this becomes too complex (e.g., passing props down through many levels), it might be better to consider using context 
// or state management libraries like Redux to manage state globally.