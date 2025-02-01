import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto text-center py-8">
      <h2 className="text-5xl font-bold mb-4">Welcome to Shastra Result Processing</h2>
      <p className="text-xl mb-8">Let's process and analyze results efficiently!</p>
      <div className="flex justify-center space-x-4">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300">
          Start Processing
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Let's Connect
        </button>
      </div>
    </div>
  );
};

export default Home;