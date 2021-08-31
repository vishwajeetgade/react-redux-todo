import React from 'react'

export default function Todo(props) {
    return (
        <li>{props.task} <span onClick={props.onRemove}> X</span> </li>
    )
}
