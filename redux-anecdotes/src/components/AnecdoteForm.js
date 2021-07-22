import React from 'react';
import { 
  // useDispatch, 
  connect 
} from 'react-redux';
import { addingAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const NewAnecdote = (props) =>{
  // const dispatch = useDispatch()

  const addAnecdote = async (event) =>{
    event.preventDefault() 
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addingAnecdote(content)
    props.notificationChange(`new anecdote '${content}'`, 5, props.notification.timeoutId)
    // dispatch(addingAnecdote(content))
    // dispatch(notificationChange(`new anecdote '${content}'`, 10))
  }
  
  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    notification: state.notification
  }
}

// export default NewAnecdote
export default connect(
  mapStateToProps,
  { addingAnecdote, notificationChange }
)(NewAnecdote)
