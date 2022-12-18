import { createSelector, createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/api";

const initialState = {
  contacts: [],
  pageSize: 100,
  contactsCount: 0,
  currentPage: 1,
  isLoaded: true,
  hasMoreContacts: false,
};

// contacts: [
//   {id: 1, name: 'Patrick Bateman', username: 'PBateman', photoURL: 'https://loremflickr.com/320/320', onlineStatus: 'online'},
//   {id: 2, name: 'Ben Shapiro', username: 'BShapiro', photoURL: 'https://loremflickr.com/320/320', onlineStatus: 'last seen 2 hours ago'},
//   {id: 3, name: 'Tom Hardy', username: 'THardy', photoURL: 'https://loremflickr.com/320/320', onlineStatus: 'last seen just now'}
// ]

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts(state, action) {
      const mappedContacts = action.payload.map((contact) => {
        return {
          id: contact.id,
          name: contact.name,
          photoURL: contact.photos.small,
        };
      });

      if (action.payload.length > 0) {
        state.contacts.push(...mappedContacts);
      } else {
        state.contacts = [];
      }
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setContactsCount(state, action) {
      state.contactsCount = action.payload;
    },
    setToggleIsLoaded(state, action) {
      state.isLoaded = action.payload;
    },
    setHasMoreContacts(state, action) {
      state.hasMoreContacts = action.payload;
    },

    sendMessage(state, action) {},
    updateMessage(state, action) {},
  },
});

// Thunk
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(currentPage)); // pagination
  dispatch(setToggleIsLoaded(true));

  try {
    const data = await usersAPI.getUsers(currentPage, pageSize);
    if (data.items.length > 0) {
      dispatch(setHasMoreContacts(true))
      dispatch(setContacts(data.items));
      dispatch(setContactsCount(data.totalCount));
    } else {
      dispatch(setHasMoreContacts(false))
    }
    dispatch(setToggleIsLoaded(false));
  } catch (error) {
    console.error(error);
  }
};

export const {
  setContacts,
  setCurrentPage,
  setContactsCount,
  setToggleIsLoaded,
  setHasMoreContacts,
} = contactsSlice.actions;
export default contactsSlice.reducer;

// Reselector
export const contactsSelector = createSelector(
  (state) => state.contactsPage.contacts,
  (contacts) => contacts.filter((c) => true)
);
