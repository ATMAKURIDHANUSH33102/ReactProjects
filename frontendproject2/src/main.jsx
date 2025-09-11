import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom'

import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'
import Page4 from './page4.jsx'
import Page5 from './Page5.jsx'
import Page6 from './Page6.jsx'

import Page1 from './page1.jsx'
import Page7 from './Page7.jsx'
createRoot(document.getElementById('root')).render(
<BrowserRouter basename="frontendproject2">
<Routes>
  <Route path="/" element={<App />}></Route>
  <Route path='/page1' element={<Page1/>}></Route>
  <Route path='/Page2' element={<Page2/>}></Route>
  <Route path='/Page3' element={<Page3/>}></Route>
  <Route path='/Page4' element={<Page4/>}></Route>
  <Route path='/Page5' element={<Page5/>}></Route>
  <Route path='/Page6' element={<Page6/>}></Route>
  <Route path='/Page7' element={<Page7/>}></Route>
  
</Routes>

</BrowserRouter>
)
