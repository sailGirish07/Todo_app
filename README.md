HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Todo_app
Using Redux 43a1658bc1357261fe5c6f5ae4407e79be3a4e61

# REDUX 
State management library for javascript appli.
Build for larger , more complex appli.
Redux helps you manage the global state of your application in one central place, so multiple components can share and update data easily and predictably.

(State Man.) -
Process of handling and orgnizing the data that chnages over time .

# STORE
A centralized store holds the whole state tree of your appli. 

# REDUCER 
Functions that take the curr. state and an actiion as arg. and return  new state result . (event handler).
(state, action) => newState
Updates state based on action

# Action 
It is a plain javascript object that has a type field (lile event).
Describes what happened

# SLICE 
Collection of redux reducer logic and actions for single together in a single file .
Combines state + reducers + actions

# PROVIDER 
The <Provider> component makes the redux store available to any nested component that needs to access the Redux store.

# useDispatch 
Send actions to the store .

# useSelector 
Reads data from the store.
The useSelector hook allows you to extract data or the state from the redux store using the selector function .



# Why does it exists ? 
All app state lives in a single store.
Any component can access or update it directly using useSelector and useDispatch.

# How does it works ? 
1) Store
   Created using configureStore() (Redux Toolkit)

2) Action 
   A plain JavaScript object that tells Redux what happened.
   Always has a type and optionally a payload (extra info.).

3) Reducer
   A pure function that receives current state + action and returns new state.

4) Dispatch 
   Used to send an action to the store.

5) useSelector 
   Allows components to read state from the store.

( Click button ➝

dispatch(addTodo(...)) ➝

Redux calls reducer ➝

New state saved in store ➝

useSelector gives new data ➝

Component re-renders )

# Redux Working Flow

User clicks button
       ↓
dispatch(action)
       ↓
Reducer updates state
       ↓
Store holds new state
       ↓
useSelector reads state
       ↓
React component re-renders

# Redux Toolkit
Makes Redux simpler and faster to set up.