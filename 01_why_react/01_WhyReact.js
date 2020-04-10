/* 
<Introduction>

Javascript has been so popular for few years. Nowadays it plays in a core role of web application.
Not only web application also server side, mobile, desktop application also.

Slack, Atom, Vs Code are built in Election(framework that can make desktop application with javascript)
Also with framework(Ionic, Titanium, NativeScript, React Native etc...) based on cross platform with javascript
Facebook, discord, paypal, ebay has been built.

Now with only javascript we can build big applications. But to handle architecture in big application
it was not very effecient.

So until now lots of frameworks were trying hard to solve this problem like
Agnular, Backbone.js, Derby.js, Ember.js, Ext.js, Knockback.js, Sammy.js, PureMVC, Vue.js, etc...

Those frame work usually use
MVC(Model - View - Controller),
MVVM(Model - View - View - Model)
architecture

For AngularJS it uses MVW(Model - View - Whatever)
Similarity for those apps are they are using Model and View.
Model controlls Data that application use,
View is part that seen by user.

if Program receive any work(onClick, type input etc...) controller look up or change Model data and
apply that on view.

As application get bigger and bigger making a rule to how should we change the view became hard and not
very effecient. Therefore facebook came with idea how about rather than change just render everything again.

Not like other framework React is only focused with V(View)

Showing view on users screen is called rendering.
To understand React we need to focus on Components
- first rendering
- re-rendering due to change in component

<First Rendering>
In any UI related framework it needs first rendering which determine how it will be look like at very first.
in React there is a render function

render() { ... }

it determines how the component look like. This function does not return html. It return an object about
how view will look like and how it will work. When render function is called components get rendered recursively
When root componenet's rendering is done it makes HTML markup with information it has and put it in the DOM.

rendering -> HTML markup(<div>...</div>) -> put in in the DOM -> View

<Reconciliation>
When React updates the view it is more right to say Reconciliation rather than update.
When there are change in data it looks like view is changing but actually it is putting different thing

hello -> change to helo -> rather than change hello it just makes helo and put it in.

When Component update data not only changing the value it calls render function with changed data and create view
with that data.

*But it does not apply the result came out from render function.
It compare the information that render function returned previously and currently.
With javascript it compare in most effecient way and Update the DOM tree.
*/
