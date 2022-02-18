import logo from './logo.svg';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes'
import './App.css';
import { Component } from 'react';
import NavComponent from './components/NavComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render () {
  return (
      <section>
        <NavComponent />
        <Menu dishes={this.state.dishes}/>
      </section>
  );
}

}
export default App