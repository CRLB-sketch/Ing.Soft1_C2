import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

function locationMarker({lat, lng, onClick}) {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon Icon={locationIcon} className='location-icon'/>
    </div>
  )
}

export default locationMarker
