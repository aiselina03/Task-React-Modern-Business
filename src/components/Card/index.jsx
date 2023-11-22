import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderClosed } from '@fortawesome/free-solid-svg-icons'

function Card() {
  return (
    <div>
      <div className="card">
      <FontAwesomeIcon icon={faFolderClosed} className='folderIcon'/>
      <h5>Featured title</h5>
      <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
      </div>
    </div>
  )
}

export default Card