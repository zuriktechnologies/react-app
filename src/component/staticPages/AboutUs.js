
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {Form,Col,Row, Button, Image} from 'react-bootstrap';
 const AboutUs = () =>{
    return(
        <div> 
        <section className="breadcrumb-classic context-dark">
        <div className="shell">
             <div className="center">
                 <span className=" h1 reveal-sm-block">About Us</span>
                 </div>
             </div>
      </section>
      <div>
        <Row  lg="12" className="p-5  justify-content-md-center">
        <Col xs lg="5">
         <h2 className="text-bold">Short History</h2>
         <p style={{display:'inline'}}>Piford Technologies(www.piford.com) is a leading "Software Development Company" with one of its office in IT Park, Mohali. We are having business development Offices at India, USA, Israel, UK, Canada and Austria. Piford Technologies is a Technology Group specializing in Mobile Application Development for Android, iPhone &amp; WP10, Web Development &amp; Data Sciences.
                  </p>
                  <p  style={{display:'inline'}}>Our Company Provides Contract Services in Java, PHP, Bigdata, Hadoop, Machine Learning, Python, Cyber Security, Deep Learning, Artificial Intelligence, Android, iPhone &amp; Software Testing, Multicore Processor Programming, Dotnet, Website Designing.  We are having team of Experts of Corporate Professionals from IIT Delhi, Oxford University , TU,  Infosys, RBS, Cadence, Sanyo, Motorola, Indiabulls, TCS Alumni having a vast and Rich Corporate Global Experience of more than 20+ years.
.               </p>
<p style={{display:'inline'}}>We are Member of Multilateral International Accreditation Forum (IAF) - Recognition Arrangement, &amp; Member of Dubai Accreditation Centre (DAC). We are ROHS Compliance approved &amp; are an ISO 9001 : 2001 Certified Company.We are into Trainings also and provide Trainings to Students, Job Seekers and Working Professionals. We provide </p>
<h1 style={{display:'inline'}}><font size="3">Best Industrial Training in Chandigarh</font></h1>
         </Col>
         <Col xs lg="5">
            <Image src="https://piford.com//images/kmg.JPG"  width={500} height={600} />
            <div className="offset-top-20">
                    <h6 className="text-primary text-bold">Piford Technologies</h6>
                    <p>IT C-7, LEVEL-2, KMG Towers</p>
                  </div>
         </Col>
         </Row>
      </div>
        </div>
    )
}

export default AboutUs;