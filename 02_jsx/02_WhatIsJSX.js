/*
<What is JSX?>
JSX is extension of javascript and it looks very similar with XML.
It turned into normal javascript code while bundling before it get loaded on actual browser.

example
*JSX
function App(){
    return(
        <div>
            Hello <b>react</b>
        </div>
    )
}

*turned into javascript
function App(){
    return (React.createElement("div", null, "Hello "), React.createElement("b", null, "react"));
}

<Strong point of JSX>
1. Easy to Read, more familiar since it is using HTML Code
2. Very Effecient to use.


<Key things to memorize>
1. Need to wrap in one element.
- It helps to recognize change in component more effeciently in the Virtual DOM

2. Need to put javascript expression inside { }

3. Rather than If use ternary operator

4. Use && for conditional rendering

5. Never render undefined
- use || for the default value to prevent undefined.

6. Inline Styling
When you style DOM component in react you need to put it in as object type. in camelCase
<div style={
    backgroundColor: 'black',
    color: 'aqua',
    padding: 16 // if you don't type unit it is set to px.
}>

7. className instead of class
<div className="hello"></div>

8. Must close the tag
<br> = (X)
<br /> = (O)

9. Commenting
{/* something something*/}

 */
