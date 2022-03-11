import React from 'react';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <AppTitle/>
      <Rating/>
      <Accordion/>
      <Rating/>
    </div>
  )
}

function AppTitle() {
  return (
    <>
      This is APP component
    </>
  )
}

function Star() {
  return (
    <div>star</div>
  )
}

function Rating() {
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function Accordion() {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}