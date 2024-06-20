const React = require('react');
const { createRoot } = require('react-dom/client');
const Wrapper = require('./react-src/wrapper.js');

const index = document.getElementById('root');
const root = createRoot(index);
root.render(<Wrapper />);
