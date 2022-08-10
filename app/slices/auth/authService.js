import axios from 'axios'

const API_URL = 'http://localhost:9000/api/auth'
// Login user
const register = async (userData) => {
  console.log(userData)
  const response = await axios.post('http://localhost:9000/api/auth/signup', userData)
  console.log(response)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data.user))
  }

  return response.data.user
}

const login = async (userData) => {
  console.log(userData)
  const response = await axios.post('http://localhost:9000/api/auth/login', userData)
  console.log(response)

  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data.user))
    localStorage.setItem('user',JSON.stringify(response.data.user))
  }

  return response.data.user
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
