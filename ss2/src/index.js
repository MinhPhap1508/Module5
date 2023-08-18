// import ReactDOM from "react-dom/client"
// const name = "Your Name";
// <h1 style={{textAlign: "center"}}>
// {name}
// </h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <h1 style={{textAlign: "center"}}>
//     {name}
//   </h1>
// );

// import ReactDOM from "react-dom/client"
// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Apricot",
//   "Black rowan",
//   "cranberry"
// ];
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// <div>
//   <h1>List of fruits
//   </h1>
//   <ul>
//     { fruits.map(item => (
//       <li>{item}</li>
//     )
//       )}
//   </ul>
// </div>
// )

import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = ()=>{
root.render(
  <div>
    <h1>Hello, World!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);
};
setInterval(tick, 1000);