/**
 * @flow
 */

import * as React from 'react'
import { ART } from 'react-native'
import { makeLine } from './shape'
import * as typed from './typed'

type Props = typed.ShareProps

const Fill = ({ points, height, padding, color, fill, opacity }: Props) => {
  const last = points[points.length - 1]
  const path = makeLine(points)
    .lineTo(last.x, height - padding)
    .lineTo(padding, height - padding)
    .close()

  return <ART.Shape fill={fill || color} opacity={opacity} d={path} />
}

export default Fill
