import styles from "./style";

// IMPORTING COMPONENTS
import {Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero} from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>

{/* NAVBAR SECTION */}
   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <Navbar />

      </div>
   </div>

{/* HERO SECTION */}
   <div className={`bg-primary ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>

        <Hero />

    </div>
   </div>

{/* ALL THE OTHER SECTIONS */}
   <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>

    <Billing />
    <CardDeal />
    <Business />
    <Clients />
    <CTA />
    <Stats />
    <Footer />
    <Testimonials />

    </div>
   </div>
  </div>
);


export default App