import './App.css';
import {useRef} from 'react';
import Header from './Header.js';
import Landing from './Landing.js';
import FeaturedProjects from './FeaturedProjects.js';
import Contact from './Contact.js';

function App() {
  const refProjectButton = useRef(null);
  const refContactButton = useRef(null);

  return (
    <>
      <Header 
        refProjectButton={refProjectButton} 
        refContactButton={refContactButton}
      />
      <Landing />
      <FeaturedProjects 
        refProject={refProjectButton}
      />
      <Contact 
        refContact={refContactButton}
      />
    </>
  );
}

export default App;
