


import './App.css'
import Counter from './counter';
import Batsman from './Batsman';


function App() {

  function handelClick() {
    alert('I am click')
  }

  const handelAdd = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={() => handelAdd(10)}>Click Me 2</button>
    </>
  )
}

export default App
