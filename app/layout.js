import NavigationComponent from './components/Navigation'
import { font } from './font'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Next 13</title>
      </head>
      <body className={font.variable}>
        <NavigationComponent />
        {children}
      </body>
    </html>
  )
}
