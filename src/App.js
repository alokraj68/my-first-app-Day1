import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

{/* First example */}
      {/* <ShoppingList name = "alok"></ShoppingList>
      <ShoppingList name = "alok2"></ShoppingList>
      <ShoppingList name = "alok3"></ShoppingList>
      <ShoppingList name = "alok4"></ShoppingList>
      <ShoppingList name = "alok5"></ShoppingList> */}

{/* Second example */}
       {/* <Welcome name= "Orion"></Welcome> */}

{/* Third example */}
      {/* <Clock date={new Date()} /> */}

{/* Forth exmaple */}
      {/* <Clock></Clock> */}

{/* Fifth exmaple */}
      <Clock timeOut = "1000"/>
      <Clock timeOut = "2000"/>
      <Clock timeOut = "3000"/>

    </div>
  );
}


// Fifth Example

  class Clock extends React.Component {
    constructor(props) {
      super(props); //then only you can access this function! read more here. https://overreacted.io/why-do-we-write-super-props/
      this.state = {date: new Date()};
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        this.props.timeOut
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return (
        <div>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

// Forth example

  // class Clock extends React.Component {
  //   constructor(props) {
  //     super(props); //then only you can access this function! read more here. https://overreacted.io/why-do-we-write-super-props/
  //     this.state = {date: new Date()};
  //   }

  //   componentDidMount() {
  //     this.timerID = setInterval(
  //       () => this.tick(),
  //       1000
  //     );
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.timerID);
  //   }

  //   tick() {
  //     this.setState({
  //       date: new Date()
  //     });
  //   }

  //   render() {
  //     return (
  //       <div>
  //         <h1>Hello, world!</h1>
  //         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
  //       </div>
  //     );
  //   }
  // }

// Third Example
  // function Clock(props) {
  //   return (
  //     <div>
  //       <h1>Hello, world!</h1>
  //       <h2>It is {props.date.toLocaleTimeString()}.</h2>
  //     </div>
  //   );
  // }

// Second example
  // JS function way :
    // function Welcome(props) {
    //   return <h1>Hello, {props.name}</h1>;
    // }

  // Js ES6 way
    // class Welcome extends React.Component {
    //   render() {
    //     return <h1>Hello, {this.props.name}</h1>;
    //   }
    // }

// First Example: 
  // class ShoppingList extends React.Component {
  //   render() {
  //     return (
  //       <div className="shopping-list">
  //         <h1>Shopping List for {this.props.name}</h1>
  //         <ul>
  //           <li>Instagram</li>
  //           <li>WhatsApp</li>
  //           <li>Oculus</li>
  //         </ul>
  //       </div>
  //     );
  //   }
  // }

export default App;
