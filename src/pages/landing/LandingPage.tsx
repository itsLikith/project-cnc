import './landingpage.css';

import { Button } from '@/components/ui/button.tsx';
import { Bold, SquareArrowOutUpRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="flex w-full h-full bg-black lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 explore-section">
          <h2 className="text-3l md:text-6xl font-extrabold text-white mb-4 text-center">
            Discover Handcrafted treasures
          </h2>
          <p className="mt-3 text-base md:text-lg lg:text-xl text-white text-center">
            Unleash your creativity with unique handmade products from passionate artisians
          </p>
          <div className="mt-5 flex w-full justify-center">
            <Button
              variant="default"
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold"
            >
              Explore Now 
              <SquareArrowOutUpRight size={22} strokeWidth={3} />
            </Button>
          </div>
        </div>
        <div className="w-1/2 hidden md:flex items-center justify-center bg-white landing-page-image">
          {/* image here */}
        </div>
      </div>
      <div className="p-10">
        <h2 className="text-3l md:text-3xl font-extrabold">Artisan Registration</h2>
        <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-700">
          This landing screen allows artisans to register and list their handmade products,
          including crafts, home décor, and food items. Artisans can showcase their unique creations
          and connect with potential buyers through a seamless and engaging interface. The platform
          supports storytelling, personalized artisan pages, secure payments, and user feedback,
          fostering a strong emotional and commercial bond between the maker and the buyer
        </p>
      </div>
      <div className="p-10">
        <h1 className="text-l md:text-3xl font-extrabold">Product Discovery</h1>
        <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-700">
          Explore and discover a variety of handmade products in a visually appealing interface.
        </p>
        <div className="mt-4 flex gap-4 flex-wrap">
          <div
            className="rounded-md p-4"
            style={{ backgroundColor: '#f8f8f8', minWidth: '250px', flex: '1 1 220px' }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2">Crafted Treasures</h2>
            <p className="text-base md:text-lg text-gray-700">
              Discover unique handmade crafts that tell a story.
            </p>
          </div>
          <div
            className="rounded-md p-4"
            style={{ backgroundColor: '#f8f8f8', minWidth: '250px', flex: '1 1 220px' }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2">Home Delights</h2>
            <p className="text-base md:text-lg text-gray-700">
              Explore artisanal home décor items that add character to your space.
            </p>
          </div>
          <div
            className="rounded-md p-4"
            style={{ backgroundColor: '#f8f8f8', minWidth: '250px', flex: '1 1 220px' }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2">Taste Adventures</h2>
            <p className="text-base md:text-lg text-gray-700">
              Indulge in delicious homemade food made with love and passion.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-l md:text-3xl font-extrabold">Exciting Features </h1>
        <p className="mt-3 text-base md:text-lg lg:text-xl text-gray-700">
          Discover the unique elements that make our platform stand out from the rest!
        </p>
        <div className="mt-4 flex gap-4 flex-wrap">
          <div
            className="rounded-md p-4"
            style={{ backgroundColor: '#f8f8f8', minWidth: '250px', flex: '1 1 220px' }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2">Artisan Stories</h2>
            <p className="text-base md:text-lg text-gray-700">
              Craft a narrative behind each product, forging emotional bonds with buyers.
            </p>
          </div>
          <div
            className="rounded-md p-4"
            style={{ backgroundColor: '#f8f8f8', minWidth: '250px', flex: '1 1 220px' }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2">Personalized Artisan Pages</h2>
            <p className="text-base md:text-lg text-gray-700">
              Tailor your page to showcase your brand and products in a unique way.
            </p>
          </div>
          <div
            className="rounded-md p-4"
            style={{ backgroundColor: '#f8f8f8', minWidth: '250px', flex: '1 1 220px' }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2">Secure Payments</h2>
            <p className="text-base md:text-lg text-gray-700">
              Shop with confidence knowing your transactions are safe and protected.
            </p>
          </div>
          <div
            className="rounded-md p-4"
            style={{ backgroundColor: '#f8f8f8', minWidth: '250px', flex: '1 1 220px' }}
          >
            <h2 className="text-lg md:text-xl font-bold mb-2">User Feedback</h2>
            <p className="text-base md:text-lg text-gray-700">
              Share your experiences and help artisans improve their craft.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className="text-l md:text-3xl font-extrabold">Personalized Artisan Pages </h1>
        <p className="mt-3 text-base md:text-lg text-gray-700">
          Empower artisans to create personalized pages showcasing their products and brand
          identity. Highlight their craftsmanship and unique stories through a seamless interface
          that captivates buyers. The platform supports storytelling, secure payments, and user
          feedback, fostering a strong emotional and commercial connection between artisans and
          buyers.
        </p>
      </div>
      <div className="p-10">
        <h1 className="text-l md:text-3xl font-extrabold">Secure Payments </h1>
        <p className="mt-3 text-base md:text-lg text-gray-700">
          Integrates secure payment gateways to facilitate safe and convenient transactions between
          buyers and artisans.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
