import add from './calculator';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY} from './constants';

console.log(add(1, 2));
console.log(ADD_TODO);
console.log(TOGGLE_TODO);
console.log(SET_VISIBILITY);

// bundle with      $ webpack --progress --colors --watch
// run server with  $ npm run dev