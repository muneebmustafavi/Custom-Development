// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BigScreen from './bigscreen'; // Import your BigScreen component
import TabView from './tabview'; // Import your TabView component

// Define the routes
const router = createBrowserRouter([
  {
    path: "/bigscreen", // Route for BigScreen
    element: <BigScreen />,
  },
  {
    path: "/tabview", // Route for TabView
    element: <TabView />,
  },
]);

const App = () => {
  return (
    // Use RouterProvider to provide the router configuration
    <RouterProvider router={router} />
  );
};

export default App;
