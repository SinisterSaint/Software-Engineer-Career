### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

It is to do client-side routing. It is to trick a user into thinking there is
new html being sent from a server and that they are actually changing html
pages. In reality, client side routing will send one html file but will load
different component based on the url.

- What is a single page application?

It is an app that re-renders content on the page based on navigation and not
getting new html from a server that refreshed the page.

- What are some differences between client side and server side routing?

Client-side routing emphasizes DOM manipulation with JavaScript rather than
going to a server to request HTML. There are fewer full-page loads with
client-side routing, which can lead to an improved user experiencing.
Transitioning between pages can also be done in more ways, since you don't need
to reload the page with new HTML.

If you're building a single page application, you should be mindful of SEO
performance, as SEO was optimized for a more traditional architecture.

- What are two ways of handling redirects with React Router? When would you use each?

React Router has a component called `Redirect`. Since this is not server side
redirection there isn't another GET request being made but instead just
re-rendering content based on where the `to` prop is set to. Another way to
redirect is through `history.push`. (We can get history with the `useHistory`
hook.) This method will add to the stack the list of routes the user has gone to
instead of replacing the last time like the `Redirect` component does.

- What are two different ways to handle page-not-found user experiences using React Router?

One way could be redirection to a page that does exist. Another could be to
display a message on the screen saying that this page is not found by perhaps
having a general `404` component.

- How do you grab URL parameters from within a component using React Router?

With the `useParams` hook that you can import from `react-router-dom`.

- What is context in React? When would you use it?

Context is a way to pass data or functions across different components in a
hierarchy without needing to use props. This can be particularly helpful if one
component high up in a hierarchy needs to pass data to one or more components
deeply nested in the hierarchy.

There are three steps to using context. Step one is to create a context object
with `React.createContext()`. The second is to include a `Provider` for that
context somewhere in your component tree. Lastly, any component inside of the `Provider` can subscribe to the context value with the `useContext` hook, which accepts the context object created in step 1.

Any component that subscribes to a context value will automatically re-render if
the context value changes.

- Describe some differences between class-based components and function
  components in React.

Class-based components use OOP to manage state, props, and the lifecycle of a
component. Because they are based on OOP, you'll see the `this` keyword used
extensively. You also need to be sure to bind any instance methods in the
constructor, so that you don't lose the `this` context. There are several
methods used to hook into the component lifecycle, including
`componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

In contrast, function components do not use OOP, instead favoring hooks to
manage state and the component lifecycle. You don't need to reference `this` or
worry about method binding, and one hook (`useEffect`) replaces the need for the
lifecycle methods mentioned above.

- What are some of the problems that hooks were designed to solve?

One of the benefits of using hooks is the ability to write custom hooks that can
be shared across components. This has the benefit of keeping our code DRY;
instead of having common business logic duplicated across several components, we
can keep that logic in a single custom hook that is then shared. There's also
less boilerplate required to make a component stateful (we don't have to use the
keyword `this` or method bind in the constructor).
