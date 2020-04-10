import React, { useState, useMemo, useCallback, useRef } from 'react';

/*
* useMemo 
if you use useMemo hook you can maintain good performance for calculation occur in functional component

* useCallback
useCallback is pretty much similar with useMemo. It is usually used when you need to do performance
optimization rendering

if you see the commented code for Average onChange and onInsert function will be created again everytime
when component get re-render. which brings down performance.

for useCallback as first parameter you put function that you want to create and
as second parameter you put array.

in this array you need to mention when to create function again

usually if you need to re use function useCallback
else useMemo

* useRef
useRef hook helps you to make ref in functional component.
if you set ref with useRef hook current value inside the object points actual element

also when you need to use local variable you can use useRef.
local variable means value that can be changed without rendering.

example:
import React, { useRef } from 'react';
const RefSample = () => {
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }

    return(
        <div>
            refsample
        </div>
    )
}
export default RefSample;
*/

const getAverage = (numbers) => {
  console.log('Calculating Average...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  // create onChange when component first render
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  // create onInsert only when number or list change
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current.focus();
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h1>* useMemo, useCallback, useRef</h1>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>ADD</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>Average : </b> {avg}
      </div>
    </div>
  );
};

//   const Average = () => {
//     const [list, setList] = useState([]);
//     const [number, setNumber] = useState('');

//     const onChange = (e) => {
//       setNumber(e.target.value);
//     };

//     const onInsert = (e) => {
//       const nextList = list.concat(parseInt(number));
//       setList(nextList);
//       setNumber('');
//     };

//     const avg = useMemo(() => getAverage(list), [list]);

//     return (
//       <div>
//         <h1>* useMemo Hook</h1>
//         <input value={number} onChange={onChange} />
//         <button onClick={onInsert}>ADD</button>
//         <ul>
//           {list.map((value, index) => (
//             <li key={index}>{value}</li>
//           ))}
//         </ul>
//         <div>
//           <b>Average : </b> {avg}
//         </div>
//       </div>
//     );
//   };

export default Average;
