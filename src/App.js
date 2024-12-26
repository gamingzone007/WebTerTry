// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to My React App</h1>
          <div className="mt-4">
            <Link 
              to="/terminal" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Terminal
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

const Terminal = () => {
  React.useEffect(() => {
    // Handle iframe loading and form automation
    const handleIframeLoad = () => {
      const iframe = document.getElementById('webTerminalIframe');
      if (iframe) {
        iframe.onload = function() {
          try {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            const passwordField = iframeDocument.querySelector('input[name="password"]');
            if (passwordField) {
              passwordField.value = '!Qwert123';
            }
            const loginButton = iframeDocument.querySelector('button[type="submit"]');
            if (loginButton) {
              loginButton.click();
            }
          } catch (e) {
            console.log('Unable to access iframe content due to same-origin policy');
          }
        };
      }
    };

    handleIframeLoad();
  }, []);

  return (
    <div className="min-w-[1010px]">
      <div className="bg-[#0055A7]">
        <div className="flex items-center">
          <h1 className="text-2xl text-white m-2.5 font-normal">ZED CAPITALS</h1>
          <ul className="flex list-none m-0 p-0">
            <li>
              <a href="#" className="block px-5 py-5 text-white no-underline hover:bg-[#0B6ABF]">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="block px-5 py-5 text-white no-underline bg-[#2989DF]">
                WebTerminal
              </a>
            </li>
            <li>
              <a href="#" className="block px-5 py-5 text-white no-underline hover:bg-[#0B6ABF]">
                News
              </a>
            </li>
            <li>
              <a href="#" className="block px-5 py-5 text-white no-underline hover:bg-[#0B6ABF]">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="shadow-lg relative">
        <iframe
          id="webTerminalIframe"
          src="https://millionbet247.com/terminal?login=2033640703&mode=connect&theme-mode=1"
          width="100%"
          height="1000"
          title="Web Terminal"
        />
      </div>
      
      <div className="text-center py-5 text-[#0A0A0A] text-sm">
        Copyright 2000-2015, Broker
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terminal" element={<Terminal />} />
      </Routes>
    </Router>
  );
};

export default App;