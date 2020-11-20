import React from 'react';
import { storiesOf } from '@storybook/react';

import ZMenu from './ZMenu';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

storiesOf('ZMenu', module)
  .add('default', () => <BrowserRouter><ZMenu /></BrowserRouter>);