"use client"
import Link from 'next/link'
import styled from '../style.module.css'
import { usePathname } from 'next/navigation'
import clsx from 'clsx';
const userLinks = [
  {
    id:1,
    name: 'Home',
    href: '/user'
  },
  {
    id:2,
    name: 'About',
    href: '/user/about'
  },
  {
    id:3,
    name: 'Contact Us',
    href: '/user/contact'
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <nav className={styled.userNav}>
          <h1>User Layout</h1>
          <ul>

            {
              userLinks.map((e) => {
                return (
                  <li key={e.id}>
                    <Link href={e.href}  className={clsx({ [styled.active]: pathname === e.href })}>{e.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
