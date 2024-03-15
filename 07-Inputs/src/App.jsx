import { useState } from 'react'

function App() {
  const [inputsForm, setInputForm]=useState({
    username:'',
    password:''
  })

  const handleinputsForm = (event) => {
    setInputForm({
      ...inputsForm,
      [event.target.name]:event.target.value
    })
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    <>
      <div className='text-center'>
        <h1>Inputs</h1>
        <hr/>
        <form onSubmit={(e)=>handleSubmit(e)} className='w-50 mx-auto'>
          <div>
            <label htmlFor='username'>Username</label>
            <input onChange={(event)=>handleinputsForm(event)} 
            id="username" 
            name='username' 
            type="text" 
            value={inputsForm.username} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input onChange={(event)=>handleinputsForm(event)} 
            id="password" 
            name='password' 
            type="password" 
            value={inputsForm.password}/>
          </div>
          <button type='submit'>Submit</button>
        </form>

        <hr />
        <div><h6>Inicio de sesion con las siguientes credenciales:</h6>
        <p>Username:{inputsForm.username}</p>
        <p>Password:{inputsForm.password}</p>
        </div>
      </div>
    </>
  )
}

export default App
