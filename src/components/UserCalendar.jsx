import React from 'react'
import { Icon, Input } from 'semantic-ui-react'

const CalendarUserProfile = () => (
  <Input 
  icon={<Icon name='calendar alternate' inverted circular link />} 
  style={{marginTop:'278px', marginLeft: '30px', paddingBottom: '20px', height: "100px", width: "400px"}} 
  type="date" size="huge" placeholder='Search...'/>
)

export default CalendarUserProfile