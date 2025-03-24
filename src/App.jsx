


import './App.css'
import Counter from './counter';
import Batsman from './Batsman';
import Users from './User';
import { Suspense } from 'react';
import Friends from './Friends';


// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())


const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}   


function App() {

  const friendsPromise = fetchFriends();

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
      <Suspense fallback={<h3>Friends are loading...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={() => handelAdd(10)}>Click Me 2</button>
    </>
  )
}

export default App
