import React from 'react'

export default function Button(props) {
  return (
    <button style={{backgroundColor: 'blue', padding: '4px'}}>{props.children}</button>
  )
}
