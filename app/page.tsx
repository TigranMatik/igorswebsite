import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PortfolioSection from '@/components/PortfolioSection'
import Contact from '@/components/Contact'
import ScheduleCall from '@/components/ScheduleCall'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PortfolioSection />
      <Contact />
      <ScheduleCall />
    </main>
  )
}
