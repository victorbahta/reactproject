
import Menu from './MenuComponent';
import DishdetailComponent from "./DishdetailComponent";
import {DISHES} from '../shared/dishes'
import { Component } from 'react';
import NavComponent from './NavComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
      console.log("coole" + dishId);
    this.setState({ selectedDish: dishId });
  }
  render () {
  return (
      <section>
        <NavComponent />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishdetailComponent selected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </section>
  );
}

}
export default Main