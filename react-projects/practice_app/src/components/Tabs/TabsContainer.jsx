import React from 'react'
import Tabs from './Tabs'

const TabsContainer = () => {

    const tabs = [
        { label: 'Tab 1', content: 'Content of Tab 1' },
        { label: 'Tab 2', content: 'Content of Tab 2' },
        { label: 'Tab 3', content: 'Content of Tab 3' },
    ]

  return (
    <div className='mt-4'>
        <h3>React Custom Tabs Example</h3>
        <Tabs tabs={tabs} />
    </div>
  )
}

export default TabsContainer