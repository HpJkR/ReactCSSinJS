import { useState } from 'react'
import Cards from './components/Cards'
import Tab from './components/Tab'
import './App.css'

function App() {
  return (
    <div className='appGlobalCard'>
      <Cards Tab={Tab} />
    </div>
  )
}

export default App

