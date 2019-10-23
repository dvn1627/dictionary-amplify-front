import React from "react";
import ReactDOM from "react-dom";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

import App from './app';

Amplify.configure(awsconfig);

ReactDOM.render(<App />, document.getElementById("root"));

export default withAuthenticator(App, true);