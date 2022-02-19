import logo from './logo.svg';
import Main from './components/MainComponent';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render () {
  return (
      <section>
        <Main />
      </section>
  );
}

}
export default App