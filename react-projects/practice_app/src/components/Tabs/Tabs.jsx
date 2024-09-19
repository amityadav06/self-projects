import React, { useState } from 'react'
import Tab from './Tab'

const Tabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(tabs[0].label)

    const handleTabClick = (tab) => {
        setActiveTab(tab.label)
    }

  return (
    <div>
        <div className="tabs-nav">
            {
                tabs.map((tab) => {
                    return(
                        <Tab
                            key={tab.label}
                            label={tab.label}
                            isActive={tab.label === activeTab}
                            handleTabClick={() => handleTabClick(tab)}
                        /> 
                    )
                })
            }
        </div>
        <div className="tabs-content">
            {
                tabs.map((tab) => {
                    return (
                        <>
                            {tab.label === activeTab ? <div key={tab.label}>{tab.content}</div> : null }
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Tabs