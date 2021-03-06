const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 oercent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
  "Premature optimization is the root of all evil",
  "Debugging is twice as hard as writting the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

// HELPER FUNCTIONS FOR THE REDUCER
const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const sortByVotes = (list) => {
  return list.sort((a, b) => {
    if (a.votes < b.votes) {
      return 1;
    } else if (a.votes > b.votes) {
      return -1;
    } else {
      return 0;
    }
  });
};

const initialState = anecdotesAtStart.map(asObject);

// ACTION CREATORS
export const createAnecdote = (anecdote) => {
  return {
    type: "NEW_ANECDOTE",
    data: {
      content: anecdote,
    },
  };
};

export const voteAnecdote = (id) => {
  return {
    type: "VOTE_ANECDOTE",
    data: {
      id: id,
    },
  };
};

const reducer = (state = initialState, action) => {
  // console.log("State now: ", state);
  // console.log("action", action);

  switch (action.type) {
    case "VOTE_ANECDOTE":
      const selectedAnecdote = state.find((an) => an.id === action.data.id);
      const newAnecdote = {
        ...selectedAnecdote,
        votes: selectedAnecdote.votes + 1,
      };
      return sortByVotes(
        state.map((an) => (an.id === action.data.id ? newAnecdote : an))
      );
    case "NEW_ANECDOTE":
      return state.concat(asObject(action.data.content));
    default:
      return state;
  }
};

export default reducer;
