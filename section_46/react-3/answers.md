- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  
- What does `combineReducers` do? Why are we using it? 

- How does the "Reset to Fresh Exploration" feature work?

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  
- Which Star Wars character would make the best React developer, and why?
