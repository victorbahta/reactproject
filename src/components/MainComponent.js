import Menu from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import NavComponent from "./NavComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }
  // {/* <NavComponent /> */}

  render() {
    const HomePage = () => {
      return (
        <div>
      <NavComponent />
      <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} promotion={this.state.promotions.filter((promo) => promo.featured)[0]} leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />

      </div>
      );
    }
    return (
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route
          exact
          path="/menu"
          component={() => <Menu dishes={this.state.dishes} />}
        />
        <Route exact path='/contactus' component={Contact} />} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default Main;
