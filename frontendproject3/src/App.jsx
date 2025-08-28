import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Link to="/Page1">Go to Page1</Link>
      
    </>
  )
}

export default App
