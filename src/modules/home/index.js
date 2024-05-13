import CtaSection from "./ctaSection"
import FaqSection from "./faqSection"
import Footer from "./footer"
import MiddleSection from "./middleSection"
import PeopleSection from "./peopleSection"
import TopSection from "./topSection"

const Home = () => {
  return (
    <main className="relative w-full overflow-x-hidden">
      <TopSection />
      <MiddleSection />
      <PeopleSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}

export default Home