import dialogsSlice, {
  initialState,
  sendNewMessage, deleteMessage
} from "../../redux/slices/dialogs-slice";

const state = {
  messages: [
    { id: 1, text: 'Hello!', date: '18:09', role: 'sender' },
    { id: 2, text: "What's good, my friend?", date: '18:10', role: 'sender' },
    {
      id: 3,
      text: "I'm feeling fabulous today. What about you?",
      date: '18:20',
      role: 'recepient',
    },
    {
      id: 4,
      text: "I've been better, but it's okay nonetheless.",
      date: '18:22',
      role: 'sender',
    },
    {
      id: 5,
      text: 'Everybody has it sometimes',
      date: '18:34',
      role: 'recepient',
    },
  ],
}

describe("dialogsSlice | Reducer", () => {
  test("test send new message", () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const message = {
      id: 6,
      text: "123",
      date: `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`,
      role: "recepient",
    };
    const newState = dialogsSlice(state, sendNewMessage(message.text))

    expect(newState.messages[5].text).toBe("123")
  })

  test("length of array should be decremented after deleting message", () => {
    const id = 3
    const newState = dialogsSlice(state, deleteMessage(id))

    expect(newState.messages.length).toBe(4)
  })

  test("if id is incorrect, length of array shouldn't change", () => {
    const id = 1231233
    const newState = dialogsSlice(state, deleteMessage(id))

    expect(newState.messages.length).toBe(5)
  })
})
