import {} from 'react/experimental' 
import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import { Routes, Route } from 'react-router-dom';
import App from './components/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <App/>
);

//<Routes>
{/* <Route path='/' element = {<App/>}>
<div>test</div>
</Route>
</Routes> */}