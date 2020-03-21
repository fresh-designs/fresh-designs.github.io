import React from 'react'
import PropTypes from 'prop-types'
import useFadeIn from '../../hooks/useFadeIn'

export const FadeIn = ({duration = 1, children}) => {
  const fadeIn = useFadeIn(duration)
  return <div {...fadeIn}>{children}</div>
}

export default FadeIn

FadeIn.propTypes = {
  duration: PropTypes.number,
  /**
   When a button is in the loading state you can supply custom text
  */
}
