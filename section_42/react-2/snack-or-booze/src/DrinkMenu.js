import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem,
    } from "reactstrap";

    function DrinkMenu({ drinks }) {
        return (
          <section className="col-md-4">
            <Card>
              <CardBody>
                <CardTitle className="font-weight-bold text-center">
                  Drink Menu
                </CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </CardText>
                <ListGroup>
                  {drinks.map((drink) => (
                    <Link to={`/drinks/${drink.id}`} key={drink.id}>
                      <ListGroupItem>{drink.name}</ListGroupItem>
                    </Link>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </section>
        );
      }
      
      export default DrinkMenu;