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
- We use it 
