import Navbar from '@/components/Navbar/Navbar'

export default function MerchandiseLayout({ children }) {
    return (
        <main className='min-h-screen bg-gradient-to-r from-[#25015E] to-[#050027]'>
            <Navbar />
            <section>{children}</section>
        </main>
    )
}
