import { store } from 'react-notifications-component';

const successfullAdd = (name) => {
  return store.addNotification({
    title: 'Successfully Added',
    message: `${name} was added`,
    type: 'success',                         // 'default', 'success', 'info', 'warning'
    container: 'top-right',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
      duration: 3000 
    }
  })
}

const successfullUpdated = (name) => {
  return store.addNotification({
    title: 'Successfully Updated',
    message: `${name} was updated`,
    type: 'info',                         // 'default', 'success', 'info', 'warning'
    container: 'top-right',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
      duration: 3000 
    }
  })
} 

const successfullDeleted = (name) => {
  return store.addNotification({
    title: 'Successfully Deleted',
    message: `${name} was deleted`,
    type: 'danger',                         // 'default', 'success', 'info', 'warning'
    container: 'top-right',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
      duration: 3000 
    },
  })
}

const error = (name) => {
  return store.addNotification({
    //title: 'Successfully Deleted',
    message: `Information of ${name} has already been removed from server`,
    type: 'danger',                         // 'default', 'success', 'info', 'warning'
    container: 'top-center',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
      duration: 3000 
    },
  })
}

const unique = (text) => {
  return store.addNotification({
    //title: 'Successfully Deleted',
    message: `${text}`,
    type: 'danger',                         // 'default', 'success', 'info', 'warning'
    container: 'top-center',                // where to position the notifications
    animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
    animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
    dismiss: {
      duration: 3000 
    },
  })
}

export default { successfullAdd, successfullUpdated, successfullDeleted, error, unique }