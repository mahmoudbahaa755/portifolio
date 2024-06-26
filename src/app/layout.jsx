
import './globals.css'
import { Inter } from 'next/font/google'
import SolidPage from '@/component/SolidPage/SolidPage'
import { AppProvider } from '@/Context/AppContext'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Portifolio',
  description: 'I made this website to show my projects and skills.',
}
import MainNav from '@/component/MainNav/MainNav'
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main-flex'>
          <AppProvider>
           <MainNav />
          <SolidPage>
            {children}
          </SolidPage>
        </AppProvider>
        </div>

      </body>
    </html>
  );
}
