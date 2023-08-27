
import { Children } from 'react'
import './globals.css'


export const metadata = {
  title: 'Travelers',
  description: 'Generated For an simple Home page',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout




















// import './globals.css'
// import { Inter } from 'next/font/google'

// // const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated For an simple Home page',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }
