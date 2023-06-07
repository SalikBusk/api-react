import React from 'react'
import { Container } from '../wappers/Section'

const Navbar = () => {
  return (
    <div>
        <Container>
            <nav className='flex flex-row items-center justify-between p-2'>
                <div>logo</div>
                <div>nav</div>
            </nav>
        </Container>
    </div>
  )
}

export default Navbar
