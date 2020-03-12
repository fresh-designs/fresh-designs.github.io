import React from 'react'
import useFadeIn from '../../hooks/useFadeIn'

export const FadeIn = ({duration = 1, children}) => {
  const fadeIn = useFadeIn(duration)
  return <div {...fadeIn}>{children}</div>
}

export default FadeIn
