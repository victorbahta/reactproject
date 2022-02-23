import logo from './logo.svg';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render () {
  return (
    <BrowserRouter>
    <div>
      <Main />
    </div>
    </BrowserRouter>
  );
}

}
export default App