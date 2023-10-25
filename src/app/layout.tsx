import { Layout } from '@/components/layouts/Layout'
import { MuiThemeProvider } from '@/styles/theme/context/MuiThemeContext'

import '@/styles/reset/reset.css'

export const metadata = {
  title: 'Next.js Starter',
  description: 'Next.js Starter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          <Layout>{children}</Layout>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
