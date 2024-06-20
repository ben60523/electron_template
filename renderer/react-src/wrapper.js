const React = require('react');

// const Menu = require('./menu');
const ScriptView = require('./script_view');
const FloorMapView = require('./floor_map_view');

const Wrapper = () => {
  // eslint-disable-next-line no-console
  console.log('hello');

  return (
    <div id="wrapper" style={{width:"100vw", height:"100vh"}}>
      {/* <Menu /> */}
      <div id="main_panel" style={{display:"flex", height:"100%"}}>
        <FloorMapView />
        <ScriptView />
      </div>
    </div>
  );
};

module.exports = Wrapper;
