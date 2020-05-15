1. What problem does the context API help solve?

State management. In a much easier way than redux. I would like to use redux if I was in a production environment, due to its scalability. However for now context API is nice.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store in Redux is the main object that holds all the data. It calls the reducer function, and holds the actions.
The reducer the piece that updates state, it takes an action in order to do this. Then feeds it to the store.
The actions are any changes made to the state and feed into the reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used to control the entire state of the app, like using redux and its store. Component state is local only to that individual component. Use Application state to control global changes, and component to control micro changes.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us to make asynchronous calls within a function. It allows our action creators to call a function instead of an object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like Context API for its easy to use ability, however Redux is pretty cool. I just need to learn more to get more comfortable.
