import { useState } from 'react'
import './App.css'


function App() {
  const [color , setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{background : color}}>
        <div className="fixed flex felx-wrap justify-center bottom-12 inset-x-0 px-2 bg-white rounded-xl mx-30 gap-3">
          <button className='bg-red-600 py-2 px-5 rounded-xl my-2 text-white ' onClick={()=>{setColor('red')}}>Red</button>
          <button className='bg-green-600 py-2 px-5 rounded-xl my-2 text-white ' onClick={()=>{setColor('green')}}>Green</button>
          <button className='bg-blue-600 py-2 px-5 rounded-xl my-2 text-white ' onClick={()=>{setColor('blue')}}>blue</button>
          <button className='bg-pink-600 py-2 px-5 rounded-xl my-2 text-white ' onClick={()=>{setColor('pink')}}>Pink</button>
          <button className='bg-yellow-300 py-2 px-5 rounded-xl my-2 text-white ' onClick={()=>{setColor('yellow')}}>Yellow</button>
          <button className='bg-purple-600 py-2 px-5 rounded-xl my-2 text-white ' onClick={()=>{setColor('purple')}}>Purple</button>
          <button className='bg-black py-2 px-5 rounded-xl my-2 text-white ' onClick={()=>{setColor('Black')}}>Black</button>
          <button className='bg-white py-2 px-5 rounded-xl my-2 text-black shadow-xl border-black-2 ' onClick={()=>{setColor('olive')}}>Reset</button>

        </div>
      </div>
    </>
  )
}

export default App
