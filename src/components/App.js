import React from "react";
import BasicMap from './BasicMap.js'
import Nav from './Nav.js'
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

class App extends React.Component {
 
  render() {
    return (
      <div>
      Hi From Lerena
      <Nav></Nav>
      <BasicMap />
      </div>
    );
  }
}

export default App;