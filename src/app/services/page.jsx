import React from 'react'
import SolutionLifecycle from '../../../Components/servicesection/SolutionLifecycle'
import WeOfferSection from '../../../Components/WeOfferSection'
import WhoWeAreSection from '../../../Components/WhoWeAreSection'
import TestimonialsSection from '../../../Components/TestimonialsSection'
import WhoWeWorkWith from "../../../Components/servicesection/WhoWeWorkWith"
import SteganoxBrands from '../../../Components/Steganoxbrands'

const page = () => {
  return (
    <div>
 <SteganoxBrands/>
<SolutionLifecycle/>
<WeOfferSection/>
 <WhoWeWorkWith/>
     <TestimonialsSection/>

    </div>
  )
}

export default page