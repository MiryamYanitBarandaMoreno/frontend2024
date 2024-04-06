import { useForm } from "./Hooks/useForm"

const inputsData = {
  username:'',
  password:'',
  buttonValue: '', 
  checkboxValue: false,
  colorValue: '#000000',
  dateValue: '',
  datetimeLocalValue: '',
  emailValue: '',
  fileValue: '',
  hiddenValue: '',
  imageValue: '',
  monthValue: '',
  numberValue: 0,
  radioValue: '',
  rangeValue: 0,
  searchValue: '',
  telValue: '',
  textValue: '',
  timeValue: '',
  urlValue: '',
  weekValue: ''
}

function App() {
  const [values, handleInputChange,inputsReset] = useForm(inputsData)
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    inputsReset()
  }

  return (
    <>
      <div className='text-center'>
        <h1>Inputs</h1>
        <hr/>
        <form onSubmit={(e)=>handleSubmit(e)} className='w-50 mx-auto'>
          <div>
            <label htmlFor='username'>Username</label>
            <input onChange={(event)=>handleInputChange(event)} 
            id="username" 
            name='username' 
            type="text" 
            value={values.username} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input onChange={(event)=>handleInputChange(event)} 
            id="password" 
            name='password' 
            type="password" 
            value={values.password}/>
          </div>
          <button type='submit'>Submit</button>

          {/* lo nuevo*/}
          <div>
            <label htmlFor='buttonValue'>Button</label>
            <input 
              onChange={handleInputChange} 
              id="buttonValue" 
              name='buttonValue' 
              type="button" 
              value={values.buttonValue} 
            />
          </div>
          <div>
            <label htmlFor='checkboxValue'>Checkbox</label>
            <input 
              onChange={handleInputChange} 
              id="checkboxValue" 
              name='checkboxValue' 
              type="checkbox" 
              checked={values.checkboxValue}
            />
          </div>
          <div>
            <label htmlFor='colorValue'>Color</label>
            <input 
              onChange={handleInputChange} 
              id="colorValue" 
              name='colorValue' 
              type="color" 
              value={values.colorValue} 
            />
          </div>
          <div>
            <label htmlFor='dateValue'>Date</label>
            <input 
              onChange={handleInputChange} 
              id="dateValue" 
              name='dateValue' 
              type="date" 
              value={values.dateValue} 
            />
          </div>
          <div>
            <label htmlFor='datetimeLocalValue'>Datetime Local</label>
            <input 
              onChange={handleInputChange} 
              id="datetimeLocalValue" 
              name='datetimeLocalValue' 
              type="datetime-local" 
              value={values.datetimeLocalValue} 
            />
          </div>
          <div>
            <label htmlFor='emailValue'>Email</label>
            <input 
              onChange={handleInputChange} 
              id="emailValue" 
              name='emailValue' 
              type="email" 
              value={values.emailValue} 
            />
          </div>
          <div>
            <label htmlFor='fileValue'>File</label>
            <input 
              onChange={handleInputChange} 
              id="fileValue" 
              name='fileValue' 
              type="file" 
              value={values.fileValue} 
            />
          </div>
          <div>
            <label htmlFor='hiddenValue'>Hidden</label>
            <input 
              onChange={handleInputChange} 
              id="hiddenValue" 
              name='hiddenValue' 
              type="hidden" 
              value={values.hiddenValue} 
            />
          </div>
          <div>
            <label htmlFor='imageValue'>Image</label>
            <input 
              onChange={handleInputChange} 
              id="imageValue" 
              name='imageValue' 
              type="image" 
              value={values.imageValue} 
            />
          </div>
          <div>
            <label htmlFor='monthValue'>Month</label>
            <input 
              onChange={handleInputChange} 
              id="monthValue" 
              name='monthValue' 
              type="month" 
              value={values.monthValue} 
            />
          </div>
          <div>
            <label htmlFor='numberValue'>Number</label>
            <input 
              onChange={handleInputChange} 
              id="numberValue" 
              name='numberValue' 
              type="number" 
              value={values.numberValue} 
            />
          </div>
          <div>
            <label htmlFor='radioValue'>Radio</label>
            <input 
              onChange={handleInputChange} 
              id="radioValue" 
              name='radioValue' 
              type="radio" 
              checked={values.radioValue}
            />
          </div>
          <div>
            <label htmlFor='rangeValue'>Range</label>
            <input 
              onChange={handleInputChange} 
              id="rangeValue" 
              name='rangeValue' 
              type="range" 
              value={values.rangeValue} 
            />
          </div>
          <div>
            <label htmlFor='searchValue'>Search</label>
            <input 
              onChange={handleInputChange} 
              id="searchValue" 
              name='searchValue' 
              type="search" 
              value={values.searchValue} 
            />
          </div>
          <div>
            <label htmlFor='telValue'>Tel</label>
            <input 
              onChange={handleInputChange} 
              id="telValue" 
              name='telValue' 
              type="tel" 
              value={values.telValue} 
            />
          </div>
          <div>
            <label htmlFor='textValue'>Text</label>
            <input 
              onChange={handleInputChange} 
              id="textValue" 
              name='textValue' 
              type="text" 
              value={values.textValue} 
            />
          </div>
          <div>
            <label htmlFor='timeValue'>Time</label>
            <input 
              onChange={handleInputChange} 
              id="timeValue" 
              name='timeValue' 
              type="time" 
              value={values.timeValue} 
            />
          </div>
          <div>
            <label htmlFor='urlValue'>URL</label>
            <input 
              onChange={handleInputChange} 
              id="urlValue" 
              name='urlValue' 
              type="url" 
              value={values.urlValue} 
            />
          </div>
          <div>
            <label htmlFor='weekValue'>Week</label>
            <input 
              onChange={handleInputChange} 
              id="weekValue" 
              name='weekValue' 
              type="week" 
              value={values.weekValue} 
            />
          </div>


        </form>

        <hr />
        <div><h6>Inicio de sesion con las siguientes credenciales:</h6>
        <p>Username:{values.username}</p>
        <p>Password:{values.password}</p>
        </div>
      </div>
    </>
  )
}

export default App
