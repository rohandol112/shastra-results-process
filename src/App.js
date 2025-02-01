import React from 'react';
import Layout from './Components/layout/Layout';
import Home from './Components/Home'

const App = () => {
  return (
    <Layout>
      <div style={{ padding: '20px', backgroundColor: 'lightgray' }}>
        <h2 className="text-xl">Welcome to Shastra Result Processing</h2>
        <p>This is the main content area.</p>
      </div>
    </Layout>
  );
};

export default App;