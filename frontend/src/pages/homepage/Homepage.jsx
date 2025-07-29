import FirstGb from './components/FirstGb'
import Header from './components/Header'
import Hero2 from './components/Hero'
import Logos from './components/Logos'


const homepage = () => {
return (
    <div className="min-h-screen">
  {/* <!-- Sign In Section --> */}
  <FirstGb/>

  {/* <!-- Header Section --> */}
  <Header/>

  {/* <!-- Hero Section --> */}
  <Hero2/>

  <Logos/>

  {/* <!-- Product Sections --> */}
  <section className="w-full bg-product-color">
    <div className="max-w-[1440px] mx-auto px-[100px]">
      {/* <!-- Product content --> */}
    </div>
  </section>

  {/* <!-- Footer Section --> */}
  <footer className="w-full bg-footer-color">
    <div className="max-w-[1440px] mx-auto px-[100px]">
      {/* <!-- Footer content --> */}
    </div>
  </footer>

</div>

  )
}

export default homepage