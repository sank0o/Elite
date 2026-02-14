export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>Elite - الأناقة في التفاصيل</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased bg-[#FFFDFB]">{children}</body>
    </html>
  )
}
