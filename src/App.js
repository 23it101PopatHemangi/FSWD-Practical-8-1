// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import ProfileCard from './ProfileCard';
import image1 from './images2.jpeg'; 
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ProfileCard
        name="Hemangi"
        photo={image1}  
        bio="A passionate WEB DEVELOPER who loves to code and create websites."
      />
    </div>
  );
};

export default App;
