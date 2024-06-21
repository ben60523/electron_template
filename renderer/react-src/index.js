const React = require('react');
const { createRoot } = require('react-dom/client');
const Wrapper = require('./wrapper.js');
// eslint-disable-next-line no-unused-vars, import/extensions
const css = require('../public/css/index.css');

const index = document.getElementById('root');
const root = createRoot(index);

root.render(<Wrapper />);
