import React from 'react'

const Newsletter = () => {
  return (
    <div className="mt-16">
      <div className="container mx-auto p-4 -mb-20 relative">
            <div className="bg-white shadow-xl rounded-sm px-12 py-8 mx-64 border-2 border-gray-500 border-dashed">
                <p className="font-bold text-center text-4xl mb-8">Subscribe to Our <span className="text-prim">Newsletter</span></p>
              <div className="flex flex-wrap items-center justify-center space-x-4">
                <input type="text" placeholder="Enter Your Email " className="p-4 border border-gray-600 rounded w-[400px]"/>
                <button className="bg-prim text-white px-4 py-4 rounded w-48">Submit</button>
              </div>
            </div>
            </div>
    </div>
  )
}

export default Newsletter
