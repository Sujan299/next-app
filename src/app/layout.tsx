export const metadata = {
  title: 'Next Docs',
  description: 'Generated by Next.js',
}
// h1 tag in here layout will not be visible when going to amdim or user root because Link tag do not refresh whole UI.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <h1>parent layout</h1>  */}
        {children}
      </body>
    </html>
  )
}
