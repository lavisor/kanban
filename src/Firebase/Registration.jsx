import {auth} from './firebase'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {useHistory, Link} from 'react-router-dom'

const history = useHistory()

const register = e => {
    e.preventDefault()
    setError('')
    if(validatePassword()) {
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
          .then(() => {
            history.push('/verify-email')
          }).catch((err) => alert(err.message))
        })
    }
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

export default register