import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='auth flex justify-center items-center min-h-screen w-full bg-blue-100'>
        {children}
    </main>
  )
}

export default Layout
