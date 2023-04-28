import React from 'react'
import { Link } from 'react-router-dom'
import './programList.scss'


const ProgramCard = ({item}) => {
    return ( <>
        <div className="program-card" >
            <Link to={`/programDetails/${item.id}`} className="text-center">
                <img src={item.image} alt={item.name} className="program-image" />
            </Link>
            <div className="program-info">
                <h5 className="program-name">
                    <Link to={`/programDetails/${item.id}`}>
                        {item.name}
                    </Link>
                </h5>
                <p className="program-duration"><b> Duration:</b> {item.duration} month</p>
                <p className="program-deadline"><b>Application Deadline:</b> {item.deadline}</p>
                <p className="program-description"><b>Description:</b> {item.description}</p>
                <Link to={`/programDetails/${item.id}`}>
                    <button className="learn-more-btn">
                            Learn More
                    </button>
                </Link>
            </div>
        </div>
      </>)
}

export default ProgramCard