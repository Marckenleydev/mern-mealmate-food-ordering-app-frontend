/* eslint-disable no-unused-vars */
import React from 'react';

import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/b3.jpg';
import blog4 from '../assets/images/blog/blog-4.jpg';
import a6 from '../assets/landing.png';

import Marquee from 'react-fast-marquee';
import orders from '../assets/images/icons/icon1.png';
import orders1 from '../assets/images/icons/icon2.png';
import orders2 from '../assets/images/icons/icon3.png';
import orders3 from '../assets/images/icons/icon4.png';
import orders4 from '../assets/images/icons/icon5.png';


const About = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* About Hero Section */}
      <section className="bg-orange-600 py-20 flex justify-center items-center">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">#Know Us</h1>
            <p className="text-white text-xl mt-2">Get to know us more</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8">
              <img src={a6} alt="About Us" className="w-full h-auto" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
              <h1 className="text-3xl font-bold mb-4">Who are we?</h1>
              <p className="text-gray-700 mb-4 text-center">
                We are your go-to platform for satisfying cravings with the best food delivery experience. 
                From local favorites to international cuisines, we connect you to the meals you love, 
                delivered right to your doorstep.
              </p>
              <p className="text-gray-700 text-center">
                Whether you need a quick lunch or a hearty dinner, our mission is to make food ordering
                seamless, reliable, and delightful. Join us on a journey of flavor and convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
   

      {/* Customer Reviews Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">What our customers say...</h1>
            <p className="text-gray-700">Our customers love sharing their experiences with us!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                  <img src={blog1} alt="Marvel Clein" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3 p-4">
                  <h5 className="text-xl font-bold">Marvel Clein</h5>
                  <p className="text-gray-700 mt-2">
                    "The app is super easy to use! I ordered my favorite pizza, and it arrived hot and fresh. 
                    The delivery was on time, and the service was outstanding. Highly recommend it to everyone!"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                  <img src={blog2} alt="Melisa Ivy" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3 p-4">
                  <h5 className="text-xl font-bold">Melisa Ivy</h5>
                  <p className="text-gray-700 mt-2">
                    "I love how many options are available on this platform! From healthy salads to indulgent desserts, 
                    there’s something for everyone. The customer support team is also super helpful."
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Last updated now</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                  <img src={blog3} alt="Tristian Ann" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3 p-4">
                  <h5 className="text-xl font-bold">Tristian Ann</h5>
                  <p className="text-gray-700 mt-2">
                    "Quick, reliable, and delicious! The app makes ordering food so simple, and I love the tracking feature. 
                    I always know exactly when my meal will arrive. A must-have for foodies!"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Last updated now</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                  <img src={blog4} alt="Phillip Omosh" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3 p-4">
                  <h5 className="text-xl font-bold">Phillip Omosh</h5>
                  <p className="text-gray-700 mt-2">
                    "Fantastic experience! I’ve discovered so many great local restaurants through this app. 
                    The discounts and promotions are a great bonus too. Keep up the great work!"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Last updated now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Marquee className="py-4">
            <div className="flex items-center mx-4">
              <img src={orders} alt="Fast Orders" className="w-12 h-12" />
              <p className="ml-2">Fast Orders</p>
            </div>
            <div className="flex items-center mx-4">
              <img src={orders1} alt="Quick Shipping" className="w-12 h-12" />
              <p className="ml-2">Quick Shipping</p>
            </div>
            <div className="flex items-center mx-4">
              <img src={orders2} alt="High Saves" className="w-12 h-12" />
              <p className="ml-2">High Saves</p>
            </div>
            <div className="flex items-center mx-4">
              <img src={orders3} alt="24/7 Support" className="w-12 h-12" />
              <p className="ml-2">24/7 Support</p>
            </div>
            <div className="flex items-center mx-4">
              <img src={orders4} alt="Online Orders" className="w-12 h-12" />
              <p className="ml-2">Online Orders</p>
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default About;