const React = require('react');
const { createRoot } = require('react-dom/client');
const Wrapper = require('./react-src/wrapper.js');
const css = require('./public/css/index.css');
const index = document.getElementById('root');
const root = createRoot(index);

root.render(<Wrapper />);
