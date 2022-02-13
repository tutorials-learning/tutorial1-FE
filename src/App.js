import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import {useState} from 'react';
import axios from 'axios';

Amplify.configure(awsExports);

const LINK = "https://h1zr28y7h8.execute-api.us-east-2.amazonaws.com/dev/tutorial1";

async function apiCall(user){

  let body = {
    method: "POST",
    headers: {
      Authorization: user.signInUserSession.idToken.jwtToken
    }
  }


  return fetch(LINK, body)
        .then(result => result.json())

}

function App({ signOut, user }) {

  const [response, setResponse] = useState("");

  apiCall(user).then(r => console.log(r));


  // console.log(user)
  // console.log(user.signInUserSession.accessToken.jwtToken)
  // console.log(user.signInUserSession.idToken.jwtToken == token)

  // Let's also have a button that calls the API we have already made in API Gateway to see if it it works
  function showAPImessage(){
    apiCall(user).then(
      r => setResponse(r["Level 1. Variable 1"]["data1"])
    )
  }

  return (<>
      <h1>  Hello {user.username} </h1>
      <h1>Hello {user.username}  Build with npm 4th try</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={showAPImessage}>Usa el API</button>

    <h4>API response: {response || "No response yet"}</h4>
    </>
  );
}

export default withAuthenticator(App);