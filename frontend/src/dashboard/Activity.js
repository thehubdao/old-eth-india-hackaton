import React from 'react'
import Button from '../components/button'

export const Activity = () => {
  return (
    <div className="flex flex-col space-y-3 w-90 text-white">
      <h2 className="text-xl">ACTIVITY</h2>
      <div className="flex h-10 bg-grey rounded-[25px] space-x-0 justify-between">
          <p className="font-fire text-md py-2 pl-4">Bought weareable</p>
          <Button text="DCLAND" />
      </div>
      <div className="flex h-10 bg-grey rounded-[25px] space-x-0 justify-between">
          <p className="font-fire text-md py-2 pl-4">Entered event</p>
            <Button text="DCLAND" />
      </div>
      <div className="flex h-10 bg-grey rounded-[25px] space-x-0 justify-between">
          <p className="font-fire text-md py-2 pl-4">Deployed Scene</p>
          <Button text="DCLAND" />
      </div>
    </div>
  )
}
