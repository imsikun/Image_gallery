import React from 'react'

const ImageCard = ({ image }) => {
  // as the tags are coming as comma separated we should first conver them to an array and then show the values in the span

  const tags = image.tags.split(',')

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={image.webformatURL} alt='' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          <span className='text-white-300'>Captured By:</span> {image.user}
        </div>
        <ul className='flex items-center space-x-4'>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='inine-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard
