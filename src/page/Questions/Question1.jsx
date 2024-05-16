import React from 'react'

export const Question1 = () => {
  
  return (
    <>
      <div>
        <h1>JS:</h1>
        <h3>What are higher-order functions in JavaScript? Give an example:</h3>
        <p>Higher-order functions are functions that take other functions as arguments or return functions as their results. Examples like the map function or filter function are examples of higher order functions</p>
        <h2>Example 1: Callback function in parameter</h2>
        <img src="/higher-order-function.jpg"/>
        <h2>Example 2: Return function</h2>
        <p>We define a function greaterThan(n), that returns a new function that takes a new parameter(m), and returns a boolean depending on if the input m is greater than the input n. We save the implementation of the function in a new function, and can now call it.</p>
        <img src="/higher-order-function2.jpg"></img>
        <h1>REACT:</h1>
        <h3>What is a React component?</h3>
        <p>A React component is a reusable piece of code that returns a React element (JSX). Components can be either class components or functional components. Functional components are the most common, and are just functions that return JSX. Class components are classes that extend React.Component and have a render method that returns JSX. You can see on the picture below, that both HTML tags, React components and Javascript snippits be written in jsx</p>
        <img src="/react-component.jpg"></img>
        <h1>SECURITY/ROUTING/STYLING</h1>
        <h3>Explain what React Router is and its purpose in a React application</h3>
        <p>React Router is a routing library for React that allows you to define routes in your application, and render different components depending on the route. This allows you to create a single-page application with multiple views, and have the URL change without the page reloading.</p>
        <h3>Example 3:</h3>
        <p>Below are the routes that are being listened to:</p>
        <img src="/react-router-browserrouter.jpg"></img>
        <p>Below are the navlinks that refer to the routes</p>
        <img src="/react-router-navlinks.jpg"></img>
      </div>
    </>
  )
}
