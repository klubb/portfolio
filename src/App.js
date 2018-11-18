import React, { Component } from 'react';
import routes from './routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  

  render() {
    return (
      <div >
     
     {routes}
        
      </div>
    );
  }
}

export default App;
