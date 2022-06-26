import React from 'react'

export default function  Footer () {
  let footer_style = {
      position: "relative",
      top: "100vh",
      width: "100%"
  }
  return (
  <footer className='bg-dark text-light' style={footer_style}>
    <p className='text-center py-3'>
      Copyright &copy; MyTodoList.com
    </p>
  </footer>
  )
}
