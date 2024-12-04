import React from 'react';

const sections = [
  {
    title: "Getting Started",
    content: "Welcome to aoPlay SDK documentation. This guide will help you integrate our gaming platform into your projects."
  },
  {
    title: "JavaScript API",
    content: `
// Initialize aoPlay
const aoPlay = new AoPlaySDK({
  apiKey: 'your-api-key'
});

// Connect to platform
await aoPlay.connect();

// Handle in-game purchases
aoPlay.on('purchase', (item) => {
  // Handle purchase
});
    `
  },
  {
    title: "Unity SDK",
    content: "Download our Unity package and import it into your project. Follow the setup wizard to configure the SDK."
  }
];

export const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState(0);

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 flex">
        <div className="w-64 fixed h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="pr-4 py-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`block w-full text-left px-4 py-2 rounded-lg mb-2 ${
                  activeSection === index
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
        <div className="ml-64 w-full pl-8">
          <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sections[activeSection].title}
            </h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <pre className="text-gray-300 whitespace-pre-wrap">
                {sections[activeSection].content}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};