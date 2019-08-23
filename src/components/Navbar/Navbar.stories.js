import React from 'react'
import { storiesOf } from '@storybook/react'
import Navbar from './index'

storiesOf("Navbar", module)
.add('default', () => <Navbar appTitle="Caloriway" />)