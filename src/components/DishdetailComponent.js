import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(dish) {
      console.log("Warup");
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(comments) {

    if (comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          {comments.map((key, index) => (
            <ul className="list-unstyled">
              <li>{key.comment}</li>
              <li>
                -- {key.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(key.date)))}
              </li>
            </ul>
          ))}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selected)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.selected.comments)}
        </div>
      </div>
    );
  }
}
export default DishdetailComponent;
