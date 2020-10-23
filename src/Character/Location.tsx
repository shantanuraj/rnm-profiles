import * as React from 'react'
import { RnMCharacter } from '../types'
import { useLocation } from '../data/location'
import { Stat } from './Stat'

export function Location ({ data: { name, url } }: {
  data: RnMCharacter['location'],
}) {
  const { data, error } = useLocation(url)
  if (error) {
    return (
      <h4>Couldn't fetch location info</h4>
    )
  }
  return (
    <div className="location">
      <Stat left="Location" right={`${name} (${data?.residents.length || 0} residents)`} />
    </div>
  )
}
