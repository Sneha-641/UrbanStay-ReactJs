import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto px-32 py-16 bg-light flex space-x-8 items-center">
      <div className=" text-left w-1/2">
              <p className="uppercase font-bold text-prim text-md mb-4 underline underline-offset-4">Contact us</p>
              <h2 className="text-5xl font-bold ">Contact <span className="text-prim">For Any Query</span></h2>
              <div className="p-4 bg-dark mt-4">
                <h4 className="text-white font-bold text-2xl mb-4 text-center">Form</h4>
                <form className="flex flex-col space-y-4">
                <div className="flex space-x-2">
                   <input type="text" placeholder="Your Name" className="p-2 rounded-md w-1/2"></input>
                   <input type="text" placeholder="Your Email" className="p-2 rounded-md w-1/2"></input>
                </div>
                <input type="text" placeholder="Subject" className="p-2 rounded-md"></input>
                <textarea placeholder="Your Query" className="p-2 rounded-md" rows="5"></textarea>
                <button className="bg-prim text-white px-8 py-4 rounded uppercase">Submit</button>
              </form>
              </div>
            </div>
            <div className="flex flex-col space-y-2 p-2">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.390467780895!2d77.10263507473205!3d28.497897690183155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1eca8029c0d3%3A0x3bb73740663ca56e!2sCyber%20City%2C%2033-34%2C%20DLF%20Phase%203%2C%20Sector%2024%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1722701918561!5m2!1sen!2sin" width="600" height="440" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps Embed" className="border-dark border-4" ></iframe>
            <div className="flex justify-between">
              <h2 className="font-bold text-md p-1">Email:<span className="text-prim ml-2">info@example.com</span></h2>
              <h2 className="font-bold text-md p-1">Phone:<span className="text-prim ml-2">+91-7345678980</span></h2>
            </div>
            </div>
       </div>
    </div>
  )
}

export default Contact
