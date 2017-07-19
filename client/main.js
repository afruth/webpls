import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from '../imports/startup/client/routes';


Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});