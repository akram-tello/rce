import React from 'react';
// import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import Title from './comps/Title';
// import UploadForm from './comps/UploadForm';
import Homepage from './comps/Homepage';


function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    // user,
    // loginWithRedirect,
    // logout,
  } = useAuth0();

  // const [selectedImg, setSelectedImg] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <>
        <Homepage />
      </>
      // <div className="App">
      //   Hello {user.name}{' '}
      //   <button onClick={() => logout({ returnTo: window.location.origin })}>
      //     Log out
      //   </button>
      //   <Title />
      //   <UploadForm />
      // </div>
    );
  } else {
    return <Homepage />;
    // return <div className="App">
    //   <button onClick={loginWithRedirect}>Log in</button>
    //   <Title />
    //   <UploadForm selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
    // </div>;
  }
}

export default App;
