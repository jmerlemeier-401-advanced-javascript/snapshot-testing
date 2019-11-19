import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);



// import React from 'react';
// import ReactDOM from 'react-dom';

// import Counter from './components/counter';

// class Root extends React.Component {
//   //render always retruns JSX.
//   //NEED render if using a class
//   render() {
//     return(
//       <h1>Testy testerson</h1>
//     )
//   }
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Root />, rootElement)