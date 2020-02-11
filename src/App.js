import React from 'react';

// function App() {
//   return <h1>Hello, world!</h1>
// }

const App = () => {
  return (
    <div>
      <User name={"Taro"} />
    </div>
  )
}

const User = (props)  => {
  return <div>Meow! I'm {props.name}</div>
}

export default App;
