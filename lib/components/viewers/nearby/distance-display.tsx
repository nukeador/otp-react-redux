import { connect } from 'react-redux'
import { FormattedMessage, useIntl } from 'react-intl'
import { humanizeDistanceString } from '@opentripplanner/humanize-distance'
import React from 'react'

import { AppReduxState } from '../../../util/state-types'

import { CardAside } from './styled'

interface Props {
  distance?: number
  useMetricUnits?: boolean
}

const DistanceDisplay = ({
  distance,
  useMetricUnits = true
}: Props): JSX.Element => {
  const intl = useIntl()

  if (!distance || distance < 5) return <></>
  return (
    <CardAside>
      <FormattedMessage
        id="components.NearbyView.distanceAway"
        values={{
          localizedDistanceString: humanizeDistanceString(
            distance,
            useMetricUnits,
            intl
          )
        }}
      />
    </CardAside>
  )
}

// Map the useMetricUnits configuration from the state to the component props
const mapStateToProps = (state: AppReduxState) => ({
  useMetricUnits: state.otp?.config?.nearbyView?.useMetricUnits
})

export default connect(mapStateToProps)(DistanceDisplay)
