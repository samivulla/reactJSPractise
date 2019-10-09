import React from 'react'

function childComponent(props) {
    return (
        <div>
            <button onClick={() => props.eventHandler('testing')}>Click</button>
        </div>
    )
}

export default childComponent
