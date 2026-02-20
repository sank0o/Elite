export const metadata = {
  title: 'Elite Studio | دودو الحلوا ',
  description: 'أرقى فساتين السهرة والزفاف',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
