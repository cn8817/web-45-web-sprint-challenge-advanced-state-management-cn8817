# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Context API keeps our state clean and helps share data between components without having to pass in props in each component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- Reducers are immutable functions in components that manage changes in state. Store is an immutable object tree that holds the application's state. Actions carry the payload information that contain action type and data to the store .

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`? redux-thunk allows us to make API calls from our action creators and make the flow asynchronous. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!
context API is my favorite because I no longer have to pass in props in each component I need to retrieve data in.