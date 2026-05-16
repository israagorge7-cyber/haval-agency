import './globals.css'

export const metadata = {
  title: 'HAVAL Agency',
  description: 'Luxury Digital Experiences'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}