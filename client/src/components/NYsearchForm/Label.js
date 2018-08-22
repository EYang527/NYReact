import React from 'react'

const Label= props=> (
    <label htmlFor={props.htmlFor} {...props}>{props.children}</label>
)

export default Label;