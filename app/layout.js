import './globals.css'

export const metadata = {
  title: 'Oakmont Academy - Excellence in Education',
  description: 'A prestigious institution dedicated to nurturing minds and shaping futures',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
