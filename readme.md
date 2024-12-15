# Day 27: React Hooks

## Topics:

- [x] useRef
- [x] useReducer
- [ ] useMemo
- [ ] useCallback

### useRef

- The useRef Hook allows you to persist values between renders.
- It can be used to store a mutable value that does not cause a re-render when updated.
- It can be accessed with the current property: `ref.current`
- It can be used to access a DOM element directly: `ref.current`

### useReducer

- The useReducer Hook allows you to manage state in a functional component.
- It takes a reducer function and an initial state value as arguments.

### useState Vs useReducer

- useState is to manage simple state, useReducer is to manage complex state.

### useCallback

- The useCallback Hook allows you to memoize (meaning: to remember) a function so that it's only re-created when one of its dependencies has changed.
- It returns a memoized version of the callback that only changes if one of the dependencies has changed.

### Lifting the state up

- Lifting the state up is a technique used in React to pass state up from child components to parent components.
- It allows you to share state between components that are not directly related.
- The parent component passes down the state to the child component, and the child component can access the state through props.
- We first need to create a state in the parent component, and then pass it down to the child component as props.
- We can also use a callback function to update the state in the parent component, and pass it down to the child component as props.

### useMemo

- The useMemo Hook allows you to memoize (meaning: to remember) a value so that it's only re-computed when its dependencies have changed.