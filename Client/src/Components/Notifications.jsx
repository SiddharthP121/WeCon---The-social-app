import React from 'react'
import Left from './Left'
import Right from './Right'
import NotiCent from './NotiCent'

const Notifications = () => {
  return (
    <div className="flex justify-between">
    <div className="w-[20vw]">
      <Left />
    </div>
    <div className="w-[50vw] flex justify-center">
      <NotiCent />
    </div>
    <div className="w-[30vw]">
      <Right />
    </div>
  </div>
  )
}

export default Notifications
