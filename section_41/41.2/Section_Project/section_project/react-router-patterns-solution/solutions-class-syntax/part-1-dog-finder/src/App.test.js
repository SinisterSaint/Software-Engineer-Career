import React from 'react';
import {shallow, mount} from 'enzyme';
import App from './App';
import {MemoryRouter} from "react-router-dom"

it('renders without crashing', function () {
  shallow(<MemoryRouter><App /></MemoryRouter>);
});

it('renders without crashing', function () {
  mount(<MemoryRouter>
      <App />
    </MemoryRouter>);
});

it('redirects to /dogs on a 404', function () {
  const wrapper = mount(<MemoryRouter initialEntries={["/tacotime"]}>
    <App />
  </MemoryRouter>);

  expect(wrapper.find("DogList")).toHaveLength(1);
});

it("finds a dog correctly", function() {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/dogs/tubby"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find("DogDetails")).toHaveLength(1);
  expect(wrapper.find("DogList")).toHaveLength(0);
});

it("redirects back to /dogs on an incorrect dog", function () {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/dogs/tacotime"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find("DogList")).toHaveLength(1);
  expect(wrapper.find("DogDetails")).toHaveLength(0);
});

