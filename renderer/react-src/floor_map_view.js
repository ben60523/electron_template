// const { ipcRenderer } = require('electron');
const React = require('react');

const FloorMapView = () => {
  const style = {
    width: "80%", 
    height: "100%", 
    background: "#ff0000"
  }

  React.useEffect(() => {
    window.api.on('floor_map_view', (evt, args) => {
      console.log(args)
    })
  }, []);
  return (
    <div id="floor_map_view" style={style}></div>
  )
}

module.exports = FloorMapView;