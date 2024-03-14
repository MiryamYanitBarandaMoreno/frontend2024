import { useState } from 'react'

function App() {
  const [username, setUsername]= useState('')

  const hadleUsernameChange = (event)=>{
    setUsername(event.target.value)
  }

  const hadleSubmit=(e)=>{
    e.preventDefault()
    console.log("Username:", username)
    console.log('Formulario enviado')
  }

  return (
    <>
      <div>
        <h1>Inputs</h1>
        <hr/>
        <form onSubmit={(e)=>hadleSubmit(e)}>
          <div>
            <label htmlFor='username'>Username</label>
            <input onChange={(event)=>hadleUsernameChange(event)} id="username" type="text" value={username} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input id="password" type="password" />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
