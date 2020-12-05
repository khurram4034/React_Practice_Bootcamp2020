import React from 'react'

function Student({name, age}) {
    return (
        <div>
            <h4>Hellow from App.js Updated Name: {name} Age: {age -10}</h4>
        </div>
    )
}

export default Student