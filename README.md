
[DEMO LINK](https://thevovchik.github.io/react_debounce/)

Implement debounce decorator

It takes a function and a delay as arguments and returns a wrapper function
The original function should be called only after a given delay in wrapper calls
Test your implementation with the debounced input
Nothing appears while you are typing
If you stop for at least a second there should be only last value printed into console
(*) pass a correct this into the original function if you can (uncomment it in the code)
function onChange(event) {
  console.log(event.target.value)
}

function debounce(f, delay) {
  // ...
}

let wrapper = debounce(onChange, 1000);

input.addEventListener('input', wrapper);