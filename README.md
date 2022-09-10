# Learn react concepts by using examples:
 - `useState` :
    - [step1](./expenses-app/src/App.js#L7)
    - [step2](./expenses-app/src/App.js#L31)
 - `usePortal` :
    - [step1](./add-user-app/public/index.html#L31)
    - [step2](./add-user-app/src/components/UI/ErrorModal.js#L31)
 - `useRef` :
    - [step1](./add-user-app/src/components/Users/AddUser.js#L10)
    - [step2](./add-user-app/src/components/Users/AddUser.js#L17)
    - [step2](./add-user-app/src/components/Users/AddUser.js#L35)
 - `localStorage` :
    - [example](./login-app/src/App.js#L22)
 - `useEffect` : A function that gets executed AFTER every component evaluation IF the specified dependencies changed.
    - `useEffect(() => {...}, [ dependencies ])`
    - [variation1](./login-app/src/App.js#L11)
    - [variation2](./login-app/src/components/Login/Login.js#L23)
    - [variation3](./login-app/src/components/Login/Login.js#L31)
    - [cleanup](./login-app/src/components/Login/Login.js#L39)
 - `useReducer` :
    - `const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)`
    - state: The state snapshot used in the component re-render/re-evaluation cycle
    - dispatchFn: A function that can be used to dispatch a new action (i.e. trigger an update of the state)
    - reducerFn: `(prevState, action) => newState`. A function that is triggered automatically once an action is dispatched (via dispatchFn()) - it receives the latest state snapshot and should return the new, updated state.
    - initialState: The initial state.
    - initFn: A function to set the initial state programmatically.
    - [example](./use-reducer/src/components/Login/Login.js#L36)
  - React Context - `useContext` : Component-wide Benhind the scenes, state storage.
    - [step1](./use-reducer/src/store/authContext.js)
    - [step2](./use-reducer/src/index.js#L10)
    - [step3](./use-reducer/src/components/MainHeader/Navigation.js#L7)
  

## How to run project

### Install dependencies 

`npm i`

### Start app

`npm start`