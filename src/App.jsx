import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './components/Question'
import {Routes,Route} from 'react-router-dom';
function App() {
  const [id, setId] = useState(0);

  return (
    <div>
        <div>
          
          <button>Prev</button>
          <button>Next</button>
        </div>
        
        <div className='box'>
          <Routes>
              <Route path='/' element={<Question/>}/>
              <Route path='/:id' element={<Question/>}/>
          </Routes>
          
        </div>
    </div>
  )
}

export default App
