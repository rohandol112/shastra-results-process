import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright and Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} TCET-Shastra Coding Club. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              A tool for processing HackerRank contest results
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#documentation"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Documentation
            </a>
            <a 
              href="#privacy"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy Policy
            </a>
            <span className="text-sm text-gray-600">
              Made with ❤️ by Documentation Team 2024-25
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;