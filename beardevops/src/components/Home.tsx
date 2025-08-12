import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF9DB] text-[#1A1A1A] flex flex-col items-center justify-center px-6 py-20 font-elegantcopy">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
          Welcome to BeardevOps
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Learn, grow, and succeed in your DevOps career with mentorship, hands-on training, and real-world guidance — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="bg-gradient-to-r from-pink-600 to-rose-500 hover:opacity-90 transition px-6 py-3 rounded-md text-white font-medium"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="border border-pink-500 text-pink-600 hover:bg-pink-50 transition px-6 py-3 rounded-md font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
