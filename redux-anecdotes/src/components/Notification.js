import React from 'react'
import { 
  // useSelector, 
  connect 
} from 'react-redux'


const Notification = (props) => {
  // const notification = useSelector(state=>state.notification)
  const { notification } = props
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (!notification.message) return null

  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    notification: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification