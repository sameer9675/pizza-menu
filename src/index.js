import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
};

function Header() {
  // const style = {color: 'red', fontSize: '42px', textTransform: 'uppercase'};
  const style = {};

  return <h1 className="header" style={style}>First Reach Pizza Co.</h1>
}

function Menu() {

  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return <main className="menu">
    <h2>Our menu</h2>

    {/* try to use symantic markup */}
    {(numPizza > 0) &&
      <React.Fragment>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All form
          our stone oven, all organic, all delicious.
        </p>

        <ul className="pizzas">

          {/*pizzaData.map(pizza => <Pizza name = {pizza.name} ingredients = {pizza.ingredients} photoName = {pizza.photoName} price = {pizza.price} />)*/}
          {/* Using forEach will not help here because ul need an array of <Pizza /> which created by map */}

          {
            pizzaData.map(pizza => <Pizza className='pizzas' pizzaObj={pizza} key={pizza.name} />)
          }
        </ul>
      </React.Fragment>

    }

    {/*<Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese'photoName='pizzas/spinaci.jpg' price= {10} /> */}
  </main>
}


//Props destructuring
function Pizza({ pizzaObj }) {
  // const pizzaObj = props.pizza;

  // if (pizzaData.soldOut) {
  //   return null;  
  // }

  {/* condition class */ }
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* Conditional Text */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if ( hour >= openHour && hour <= closeHour) {
  //     alert("We're currently open")
  // } else {
  //     alert("Sorry we're closed");
  // }

  //As we are in component fxn we can write any JS here
  // if(!openHour) {
  //   return (
  //     <p>CLOSED</p>
  //   )
  // }

  return (
    <Footer className='footer'>
      {
        /* Ternary Operator */
        isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00
          </p>
        )
      }
    </Footer>
  );
  // return React.createElement("footer", null, "We'are currently open!")
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visits us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}


// React version 18 we do like this
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
  <App />
</React.StrictMode>
);


// before react 18
// ReactDOM.render(<App />, document.getElementById('root'));   and   "react-dom"