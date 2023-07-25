import './globals.css'

export const metadata = {
  title: 'Inspirational Quote Geneerator',
  description: 'A simple app to generate inspirational quotes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
