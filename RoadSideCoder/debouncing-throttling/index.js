// Debounce & Throttling Interview Question

// Question 1 :   Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0;
var pressedCount = 0;

const debouncedCount = _.debounce(() => {
  triggerCount += 1;
  count.innerHTML = triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;

  debouncedCount();
});


// Question 2 : Create a button UI and add throttle as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0
var pressedCount = 0

const start = new Date().getTime()

var throttled = _.throttle(()=>{
    triggerCount+=1
    count.innerHTML=triggerCount
}, 1000);

btn.addEventListener("click", () => {
    btnPress.innerHTML=pressedCount++
    const now = new Date().getTime()
    const seconds = (now-start)/1000
    console.log(seconds.toFixed());
    throttled()
});


// Question 3 : Debounce Polyfill

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0;
var pressedCount = 0;

const myDebounce = function (cb, d) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
};

const debouncedCount = myDebounce(() => {
    triggerCount += 1;
    count.innerHTML = triggerCount;
  }, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});


// Question 4 : Throttle Polyfill

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var triggerCount = 0
var pressedCount = 0

const start = new Date().getTime();

const myThrottle = function (cb, d) {
    let last = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
};

var throttled = _.throttle(()=>{
    triggerCount+=1
    count.innerHTML=triggerCount
}, 1000);

btn.addEventListener("click", () => {
    btnPress.innerHTML=pressedCount++
    const now = new Date().getTime()
    const seconds = (now-start)/1000
    console.log(seconds.toFixed());
    throttled()
});

//debounce
// import { useEffect, useState } from 'react';
//
// function useDebounce(value, delay) {
//     const [debouncedValue, setDebouncedValue] = useState(value);
//
//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay);
//
//         return () => {
//             clearTimeout(handler);
//         };
//     }, [value, delay]);
//
//     return debouncedValue;
// }
//
// function SearchInput({ onSearch }) {
//     const [query, setQuery] = useState('');
//     const debouncedQuery = useDebounce(query, 500);
//
//     useEffect(() => {
//         if (debouncedQuery) {
//             onSearch(debouncedQuery);
//         }
//     }, [debouncedQuery, onSearch]);
//
//     return (
//         <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//         />
//     );
// }


//import { useEffect, useRef } from 'react';
//
// function useThrottle(callback, delay) {
//   const lastCall = useRef(0);
//
//   return (...args) => {
//     const now = new Date().getTime();
//
//     if (now - lastCall.current >= delay) {
//       lastCall.current = now;
//       callback(...args);
//     }
//   };
// }
//
// function ScrollHandler({ onScroll }) {
//   const handleScroll = useThrottle(() => {
//     onScroll(window.scrollY);
//   }, 1000);
//
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);
//
//   return null;
// }