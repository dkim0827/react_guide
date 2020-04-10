/*
<Understand Code>
import React from 'react';

When you create react project in node_modules directory react module get installed.
thats the reason why you are able to import and use it.

import is not given function from web browser. It is from node.
in Node.js rather than import you can load packages by using require.

to use these functionality in the browser also we use bundler(webpack).

when you use bundler it creates a file with all import, required file
or you can also divide in few seperate files while performance optimization.

Those things can be handles by function loader in webpack.
types of loader
- css-loader : able to load CSS file
- file-loader : able to load web-font or media file
- babel-loader : load javascript file and translate current version of javascript code to older version of javascript code by using babel.
 */
