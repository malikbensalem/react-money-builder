import React from 'react'
import Calculator from './components/Calculator'

export default function App(){
  return (
      <div className="container p-6">
        <h1 className="text-2xl font-bold mb-6">Money Builder App</h1>
        <Calculator />
      </div>
  )
}
