import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
    {
        title: "Web Development",
        description: "High-performance websites built with modern technologies.",
    },

    {
        title: "App Development",
        description: "Scalable mobile and web application for your business.",
    },
    {
        title: "UI/UX Design",
        description: "User-focused design that improves engagement and conversions.",
    },
        {
        title: "Web Development",
        description: "High-performance websites built with modern technologies.",
    },

    {
        title: "App Development",
        description: "Scalable mobile and web application for your business.",
    },
    {
        title: "UI/UX Design",
        description: "User-focused design that improves engagement and conversions.",
    },
];

const Services = () => {
  return (
    <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
            <h2 className='text-3xl font-bold text-gray-900'>Our Services</h2>
            <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>We offer end-to-end digital solutions tailored to your needs.</p>

            <div className='mt-12 grid gap-8 md:grid-cols-3'>
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services