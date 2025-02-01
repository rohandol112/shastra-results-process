import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Shastra Results</h1>
              <p className="text-sm text-gray-500">Result Processing Tool</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <a 
              href="#upload"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Upload CSV
            </a>
            <a 
              href="#process"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Process Results
            </a>
            <a 
              href="https://github.com/yourusername/shastra-result-processing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;