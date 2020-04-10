/*
<Virtual DOM>
DOM = Document Object Model
DOM is way that express architecture of document with Object by using XML or HTML.
Web browser use DOM to apply javascript and CSS to an object.

DOM API is used in lots of platform and web browser but it has a critical problem.
which is it is not optimized with dynamic UI. HTML itself isn't dynamic. We can make dynamic by using javascript

Few Document says that nowadays javascript engine is fast but DOM is slow. But this is wrong.

DOM itself is fast. But when there are change at DOM in web browser, web browser caclulate
CSS again, compose layout, re-paint the page and thats where the time spending occurs.

* How to Solve *
Since changing HTML markup in visible way is main functionality of webbrowser, so we need to use
cpu for sure. But everytime when there is a change in DOM engine will re-paint web page which leads to
poor performance.

By using Virtual DOM, React minimize work process in DOM.

In React when data change and it updates actual DOM there are 3 steps.
1. If data has been updated it Re-render whole UI in Virtual DOM.
2. Compare previous && current information in Virtual Dom.
3. Apply only part it has been changed in actual DOM.

<Other Characteristics of React>
React is not framework. It is Library.

Since React only care about view it need to make other functionality by own.
for exmaple
for routing - react-router
for ajax - Axios or fetch
for state controll - redux or MobX.

Strong point will be you can use any libarary you want to use.
Weak point will be you need to experience many library.

React also can be used with other framework or library like Backbone.js or AngularJS.



*/
