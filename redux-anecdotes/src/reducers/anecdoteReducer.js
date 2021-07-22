import anecdotesServices from '../services/anecdotes';
const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case "VOTE":
      // const id = action.data.id
      // const anecdoteToVote = state.find(a => a.id === id)
      // const changedAnecdote = {
      //   ...anecdoteToVote,
      //   votes: anecdoteToVote.votes + 1
      // }
      // console.log(changedAnecdote)
      const changedAnecdote = action.data
      return state.map(anecdote => 
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
      )
    case "NEW_ANECDOTE":
      return state.concat(action.data)
    case "INIT_ANECDOTES":
      return action.data
    default:
      return state
  }
}

export const votingAnecdote = (anecdote) => {

  return async dispatch =>{
    const changeAnecdote = await anecdotesServices.voteAnecdote(anecdote)
    dispatch({
      type: "VOTE",
      data: changeAnecdote,
    })
  }
}

export const addingAnecdote = (content) =>{
  return async dispatch =>{
    const newAnecdote = await anecdotesServices.createNew(content)
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote
    })
  }
}

export const initialAnecdotes = () =>{
  return async dispatch =>{
    const anecdotes = await anecdotesServices.getAll()
    dispatch({
      type:"INIT_ANECDOTES",
      data: anecdotes,
    })
  }
}

export default reducer
