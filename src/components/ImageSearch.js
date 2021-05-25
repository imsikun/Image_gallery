import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('')

  const searchTextField = e => {
    setText(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    searchText(text)
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b border-b-2'>
          <input
            onChange={searchTextField}
            type='text'
            placeholder='Search Image Item'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
          />
          <button className='px-4 py-3 text-sm text-white-600 font-semibold rounded border border-purple-200 hover:bg-teal-700 hover:border-teal-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch
