// 以下为react版本为18的写法
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// 以下为react版本为17的写法
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. 
// Until you switch to the new API, your app will behave as if it's running React 17.
// ReactDOM.render(<App/>, document.getElementById('root'));