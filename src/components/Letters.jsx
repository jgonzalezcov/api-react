import React from 'react'
import letersArray from '../data/arrayLeters.js'
const Letters = (props) => {
  return (
    <div className="leter-select">
      {letersArray.map((e) => (
        <h3
          className="letter-key"
          key={e.leter}
          onClick={() => props.functionLetters(e.leter)}
        >
          {e.leter}
        </h3>
      ))}
    </div>
  )
}

export default Letters
