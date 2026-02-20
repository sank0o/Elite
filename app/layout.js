export const metadata = {
  title: ' | دودو الحلوا ',
  description: 'شنو من حلقوم انتِ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
