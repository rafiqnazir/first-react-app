import './App.css';

import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";


function App() {

  const addToDo = (title, desc) => {
    let sno = todos.length == 0 ? 1 : todos[todos.length - 1].sno + 1
    const myToDo = {
      "sno": sno,
      "title": title,
      "desc": desc
    }
    setTodos([...todos, myToDo])
    console.log(myToDo)
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((ele) => {
      return ele !== todo
    }))
  }

  // use state hooks to update the variables
  const [todos, setTodos] = useState([
    {
      "sno": 1,
      "title": "Go to doctor",
      "desc": "You need to go to the dentist on sunday 9:30 a.m"
    },
    {
      "sno": 2,
      "title": "Scrum Meet",
      "desc": "Scrum Meet is daily at 10:30-11:00 a.m"
    }
  ]
  );
  return (
    <>

      <Router>
        <Header title="My Todos List" drop_down={false} />


        <Switch>
          <Route  path="/" element={
              <>
                <AddTodo addToDo={addToDo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
          }>

          </Route>
          <Route  path="/about" element={<About />}>
          </Route>
        </Switch>
        <Footer />

      </Router>
    </>
  );
}

export default App;
