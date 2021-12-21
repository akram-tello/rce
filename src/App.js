import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';


function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
  } = useAuth0();


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div className="App">
        Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
        <Title />
        <UploadForm />
      </div>
    );
  } else {
    return <div className="App">
      <button onClick={loginWithRedirect}>Log in</button>
      <Title />
      <UploadForm />
    </div>;
  }
}

export default App;
