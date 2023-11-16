import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quest from './components/Quest'
import {Routes,Route} from 'react-router-dom';
import Display from './components/Display'
import Test from './components/Test'
import {Link} from 'react-router-dom';
function App() {
  const [id, setId] = useState(0);

  return (
    <div>
       
        ...{id}...
        
        <div className='box'>
          <Routes>
              <Route path='/' element={<Quest/>}/>
              <Route path='/:id' element={<Test/>}/>
          </Routes>
          
        </div>
    </div>
  )
}

export default App
