import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  console.log(user);
  console.log(user.username);
  return (<>
      <h1>  Hello {user.username} </h1>
      <h1>Hello {user.username}  Build with yarn 3rd try</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);