import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

/** Form for adding a menu item.
 *
 * Props:
 * - addItem: call this to add item in parent
 *
 * State:
 * - local state for each field on form
 *
 */

function AddForm({ addItem }) {
  const [form, setForm] = useState({
    type: "snacks",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(f => ({
      ...f,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    let { type, ...data } = form;
    addItem(type, data);
    history.push("/");
  }

  const { type, name, description, recipe, serve } = form;

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add Item
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                type="select"
                name="type"
                id="type"
                value={type}
                onChange={handleChange}
              >
                <option>snacks</option>
                <option>drinks</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={description}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="recipe">Recipe</Label>
              <Input
                type="textarea"
                name="recipe"
                id="recipe"
                value={recipe}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="serve">Serve</Label>
              <Input
                type="textarea"
                name="serve"
                id="serve"
                value={serve}
                onChange={handleChange}
              />
            </FormGroup>

            <Button className="float-right btn btn-outline-light">
              Add Item
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddForm;
