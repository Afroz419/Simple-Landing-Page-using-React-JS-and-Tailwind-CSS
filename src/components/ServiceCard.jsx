import React from 'react'

const ServiceCard = ({title, description}) => {
  return (
    <div className='p-8 border rounded-lg hover:shadow-lg transition'>
        <h3 className='text-xl font-semibold text-blue-600'>{title}</h3>
        <p className='mt-4 text-gray-600'>{description}</p>
    </div>
  )
}

export default ServiceCard