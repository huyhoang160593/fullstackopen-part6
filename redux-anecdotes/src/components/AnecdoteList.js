import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { votingAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const Anecdote = ({anecdote, handleClick}) =>{
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div> 
  )
}
const Anecdotes = () =>{
  const anecdotes = useSelector(state => 
    {
      if(!state.filter) return state.anecdote.sort((a,b) => a.votes - b.votes)
      return state.anecdote
        .filter(validAnecdote => {
          return validAnecdote.content.includes(state.filter)
        })
        .sort((a,b) => a.votes - b.votes)
    })

  const timeoutId = useSelector(state => state.notification.timeoutId)

  const dispatch = useDispatch()
  
  const vote = (anecdote) => {
    dispatch(votingAnecdote(anecdote))
    dispatch(notificationChange(`you voted '${anecdote.content}'`, 5, timeoutId))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Anecdote
          anecdote={anecdote}
          handleClick={() => vote(anecdote)}
        /> 
      )}
    </div>
  ) 
}
export default Anecdotes
