import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/component/NavBar/Navbar'
import SolidPage from '@/component/SolidPage/SolidPage'
import { AppProvider } from '@/Context/AppContext'
const inter = Inter({ subsets: ['latin'] })
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeToggle from '@/component/ThemeToggle/ThemeToggle'
export const metadata = {
  title: 'Portifolio',
  description: 'I made this website to show my projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <div className='main-flex'>
          <AppProvider>
          <Navbar />
          
          <SolidPage>{children}</SolidPage>
        </AppProvider>
        </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
