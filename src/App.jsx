import React, { useState } from 'react'
import Input from './components/Input'

function App() {

  

  return (
    <div className='fixed bg-gray-200 w-full h-full '>
       <h1 className='text-center font-medium text-3xl p-3 text-gray-800 '>To do List</h1>
      <div className=" bg-neutral-50 w-full lg:w-4/5 h-auto m-auto mt-8 shadow-lg overflow-hidden">
      <Input />
      </div>
     
    </div>
  )
}

export default App
