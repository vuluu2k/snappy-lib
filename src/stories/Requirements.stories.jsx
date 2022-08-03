import React from 'react';
import { storiesOf } from '@storybook/react';
import { SnyButton } from '../components/SnyButton';
import { SnyStatus } from '../components/SnyStatus';
import { SnyTabs } from '../components/SnyTabs';

import '../styles/common.css'

const stories = storiesOf('Components', module);

stories.add('App',()=>{
  return (<SnyTabs type="green"/>);
})