import React from 'react'

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className='h-full flex-1 py-2'>
      {children}
    </main>    
  )
}

export default Main