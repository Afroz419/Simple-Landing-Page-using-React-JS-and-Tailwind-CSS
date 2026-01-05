import React from 'react'

const Hero = () => {
  return (
    <section className='pt-28 pb-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center'>
            <div>
                <h1 className='text-4xl md:text-5xl font-bold leading-tight text-gray-900'>Build Modern <span className='text-blue-600'>Web Solutions</span></h1>
                <p className='mt-6 text-gray-600 text-lg'>We design and develop scalable digital products that help businesses grow faster and smarter.</p>

                <div className='flex mt-8 gap-4'>
                    <button className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'>Get Started</button>
                    <button className='border border-blue-600 px-6 py-3 rounded-md text-blue-600 hover:bg-blue-50 transition'>Learn More</button>
                </div>
            </div>

            <div className='hidden md:block'>
                <img src='https://illustrations.popsy.co/gray/work-from-home.svg' alt='Hero'
                className='w-full'
                />
            </div>
        </div>
    </section>
    )
}

export default Hero