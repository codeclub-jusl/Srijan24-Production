// import Navbar from '@/components/Navbar/Navbar'

export default function MerchandiseLayout({ children }) {
    return (
        <main className='min-h-screen'>
            {/* <Navbar /> */}
            <section>{children}</section>
        </main>
    )
}
