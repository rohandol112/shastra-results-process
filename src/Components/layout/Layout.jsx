import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, error }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            {error}
          </div>
        )}

        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex space-x-2 text-sm text-gray-500">
            <li>
              <a href="/" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900">Results Processing</li>
          </ol>
        </nav>

        {/* Page Content */}
        <div className="bg-white rounded-lg shadow p-6">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;