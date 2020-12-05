import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

<<<<<<< HEAD
// landing animation
// const fast = { tension: 1200, friction: 40 }
// const slow = { mass: 10, tension: 200, friction: 50 }
// const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

// export default function Goo() {
//   const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow) }))
//   return (
//     <>
//       <svg style={{ position: 'absolute', width: 0, height: 0 }}>
//         <filter id="goo">
//           <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
//           <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
//         </filter>
//       </svg>
//       <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
//         {trail.map((props, index) => (
//           <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
//         ))}
//       </div>
//     </>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <Goo /> */}
=======


ReactDOM.render(
  <React.StrictMode>
 
>>>>>>> f3fd8336b4f87e24bd52c0f16b53c4ca9069ae16
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
