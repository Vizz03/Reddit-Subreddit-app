import { createStore, action } from 'easy-peasy';

const store = createStore({
  redditPost: [],
  addRedditPost: action((state, payload) => {
    state.redditPost.push({ text: payload, done: false });
  }),
});

export default store;