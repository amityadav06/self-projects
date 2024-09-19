import React from 'react'

const Tab = ({isActive, handleTabClick, label}) => {
  return (
    <button
        style={{
            padding: '10px',
            backgroundColor: isActive ? '#007bff' : '#e7e7e7',
            border: 'none',
            cursor: 'pointer',
            marginRight: '5px',
        }}
        onClick={handleTabClick}
    >
        {label}
    </button>
  )
}

export default Tab