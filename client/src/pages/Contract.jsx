import React from 'react';
import Helmet from '../components/Helmet/Helmet';

function ContactForm() {
  return (
    <Helmet title="Contract with us">

      <div style={{width:"100%",backgroundImage: "url('https://img.freepik.com/premium-vector/combination-traditional-mexican-dishes-table-top-view_422344-3591.jpg?w=1380')"}} className="container mx-12 md:px-6 overflow-hidden">
      <section className="mb-32 text-center">
        <div className="md:px-12">
          <div className="container mx-auto xl:px-40 ">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative mt-4 z-[1] block rounded-lg px-6 py-12  backdrop-blur-[30px] ">
                  <h2 className="mb-12 text-3xl font-bold text-red-600">Contact us</h2>
                  <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block pr-94  mb-2 text-sm font-semibold text-red-500">Your Email address</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 bg-primary-500 " placeholder="Enter Your Email" required />
          </div>
        
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-red-500">Your message</label>
              <textarea id="message" rows="12" class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-md font-semibold text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                  <iframe
                    src="https://maps.google.com/maps?q=Kharar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute left-0 top-0 h-full w-full rounded-lg focus:border-0"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> 
    </Helmet>
   
  );
}

export default ContactForm;
