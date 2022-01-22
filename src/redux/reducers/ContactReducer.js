const initialState = [
  {
    id: 1,
    name: "Ankit",
    number: 8521867878
  },
  {
    id: 2,
    name: "Binod",
    number: 7856112390
  }
];
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return  state = [...state, action.payload];
      
    case "EDIT_CONTACT":
        const updatedState = state.map(contact=>(contact.id === action.payload.id )? action.payload : contact)
       state = updatedState;
        return state;

    case "DELETE_CONTACT":
        const filterContacts = state.filter(contact=>contact.id !== action.payload && contact)
       state = filterContacts;
        return state;
      
    default:
      return state;
  }
};
export default contactReducer;
