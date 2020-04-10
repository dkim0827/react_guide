import React from 'react';

/*
When you make web application you will face the situation that you dry yourself with repeating code.
As application gets larger this is wasting space and also not very effecient.

You can solve this problem with map()

syntax
arr.map(callback, [thisArg])
callback :
    - currentValue : current value
    - index : index of current value
    - array : original array that its working on
thisArg: this reference that will use inside callback function

Example
var number = [1, 2, 3, 4, 5];

var processed = numbers.map(function(num){
    return num * num;
})
console.log(processed);
> [1, 4, 9, 16, 25]
*/

const IterationSample = () => {
  return (
    <>
      <h1>* Iteration Sample</h1>
      <ul>
        <li>Snowman</li>
        <li>Ice</li>
        <li>Snow</li>
        <li>Wind</li>
      </ul>
    </>
  );
};

/*
proper way:

import React from 'react';

const IterationSample = () => {
    const names = ['Snowman', 'Ice', 'Snow', 'Wind'];
    const nameList = names.map(name, index => <li key={index}>{name}</li>)
    return <ul>{nameList}</ul>;
};

export default IterationSample;


for react component when it renders an array it needs key to recognizse change fast. 
*/

export default IterationSample;
