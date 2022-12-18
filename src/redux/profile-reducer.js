const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

const initialState = {
  posts: [
    { id: 1, message: "My new test message.", likes: 9 },
    { id: 2, message: "Buy eggs tomorrow!", likes: 6 },
  ],
  newPostText: "Jedi",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      const message = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, message],
        newPostText: ''
      };
    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.text
      };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (newText) => ({
  type: UPDATE_POST,
  text: newText,
});

export default profileReducer;
