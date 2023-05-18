### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it? React is a JavaScript library for building user interfaces. It provides a component-based architecture that allows developers to build reusable UI components and manage the state of those components efficiently. React was developed by Facebook and is widely used in web development. We would use React to build single page applications, reuse components, to create large scale applications, and making mobile applications. 

- What is Babel? Babel is a widely used JavaScript compiler that allows developers to write code using the latest JavaScript language features and syntax, while ensuring compatibility with older browsers and environments that may not support those features natively.

- What is JSX? JSX stands for JavaScript XML. It is an extension to the JavaScript language syntax that allows you to write HTML-like code within JavaScript code. JSX is primarily associated with the React library, where it is commonly used to define the structure and appearance of components.

- How is a Component created in React? Componants can be created in two ways by creating a functional component and a class component. The functional components have props and the class components uses the render() method to define the component's UI.

- What are some difference between state and props? Some of the differences between state and props are that props are immutable and states are mutable. Props (short for properties) are passed into a component from its parent component. State, on the other hand, is managed within a component and is owned and controlled by that component

- What does "downward data flow" refer to in React? In React, the term "downward data flow" refers to the unidirectional flow of data within the component hierarchy. It is also known as "props drilling" or "top-down data flow."

- What is a controlled component? A controlled component is a React component whose value is controlled by React state

- What is an uncontrolled component? An uncontrolled component is a React component that manages its own internal state without relying on React state management

- What is the purpose of the `key` prop when rendering a list of components? The key prop is used when rendering a list of components in React. It helps React identify each individual componant on the list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? Using an array index is a poor choice for a key prop when rendering a list because of stability, componant recycling, and unique identification.

- Describe useEffect.  What use cases is it used for in React components? useEffect is a hook in React that allows you to perform side effects in functional components. The cases it is used for React components are when you are making API requests or manipulating the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
The useRef hook in React allows you to create a mutable reference that persists across re-renders of a component.

- When would you use a ref? When wouldn't you use one? You would use a ref in React when you need to access aspects of a component that are outside the scope of typical React data flow or state management.

- What is a custom hook in React? When would you want to write one? A custom hook in React is a JavaScript function that utilizes one or more built-in hooks and/or other custom hooks to encapsulate and reuse logic in functional components. 
