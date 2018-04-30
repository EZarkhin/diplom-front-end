import React from 'react'
import Responsive from 'react-responsive'

import { metrics } from '../../../theme'

const Desktop = props => (
  <Responsive {...props} minWidth={metrics.largeScreen} />
)
const Tablet = props => <Responsive {...props} maxWidth={metrics.largeScreen} />
const Mobile = props => (
  <Responsive {...props} maxWidth={metrics.middleScreen} />
)

const DefaultScreen = props => (
  <Responsive {...props} minWidth={metrics.middleScreen + 1} />
)

export { Desktop, Tablet, Mobile, DefaultScreen }
