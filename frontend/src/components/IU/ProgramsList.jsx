import React from 'react'
import ProgramCard from './ProgramCard'
import './programList.scss'

const ProgramsList = ({data, count = 4}) => {
  return ( 
    <div className="card-container">
    {data.slice(0, count ? count : data.length).map((item) => (
        <ProgramCard item={item} key={item.id} />
    ))}
    </div>
  )
}

export default ProgramsList