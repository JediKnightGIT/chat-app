const OPEN_MODAL = "OPEN_MODAL";

const initialState = {
  // posts: [
  //   { id: 1, message: "My new test message.", likes: 9 },
  //   { id: 2, message: "Buy eggs tomorrow!", likes: 6 },
  // ],
  isModalShown: false
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: 
      // const message = {
      //   id: 5,
      //   message: state.newPostText,
      //   likes: 0,
      // };
      return {
        ...state,
        isModalShown: !state.isModalShown
        // isModalShown: true
      };
    default:
      return state;
  }
};

export const openModal = () => ({ type: OPEN_MODAL });
// export const updatePostActionCreator = (newText) => ({
//   type: UPDATE_POST,
//   text: newText,
// });

export default sidebarReducer;
