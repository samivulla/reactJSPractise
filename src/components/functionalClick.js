import React from 'react'



function FunctionalClick() {
    function eventHandling() {
        console.log('button clicked')
    }
    return (
        <div>
            <button onClick={eventHandling}>Click</button>
        </div>
    )
}

export default FunctionalClick
