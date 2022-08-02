import React from 'react';
import { storiesOf } from '@storybook/react';
import { SnyButton } from '../components/SnyButton';

import '../styles/common.css'

const stories = storiesOf('Components', module);

stories.add('App',()=>{
  return (<SnyButton type="primary"/>);
})