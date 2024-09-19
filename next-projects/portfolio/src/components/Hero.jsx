import React from 'react'
import Aos from "aos";
import 'aos/dist/aos.css';
import '../assets/css/hero.css'
import ExampleComponent from './TypeAnimation';

const Hero = () => {
  return (
    <section className="home-section" id="home" data-scroll-index="0">
        <div className="container">
            <div className="flex items-center">
                <div className="lg:w-1/2">
                    <div className="hs-text-box">
                        <h6 data-aos="fade-up" data-aos-duration="1200" className="aos-init aos-animate"><span>Jenna Ortega</span></h6>
                        <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className="aos-init aos-animate">Hay! I’m Amit</h1>
                        <h2 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200" className="aos-init aos-animate"><span className="index-module_type__E-SaG">I'm a  <ExampleComponent /> </span></h2>
                        <p className="text aos-init aos-animate text-white" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                        <div className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                            <a className="px-btn">
                                <span>Get in touch</span> 
                                <i className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--bi" width="1em" height="1em" viewBox="0 0 16 16">
                                    <path fill="currentColor" fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                                    </svg>
                                </i>
                            </a>
                            <div className="social-icon ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
                                <a className="facebook" href="/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="0.63em" height="1em" viewBox="0 0 320 512">
                                    <path fill="currentColor" d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                    </svg>
                                </a>
                                <a className="dribbble" href="/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="1em" height="1em" viewBox="0 0 512 512">
                                    <path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8m163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523M396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489m-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62M44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323m81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882m248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978"></path>
                                    </svg>
                                </a>
                                <a className="linkedin" href="/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="hs-banner"><img src="https://validthemes.net/site-template/antux/assets/img/illustration/1.png" alt="Admin" /></div>
                    <img className='absolute top-0 right-0' src="/effect-3.svg" alt="img" />
                    <img className='absolute top-0 right-20 ' src="/effect-3.svg" alt="img" />
                    <img className='absolute top-40 right-0 ' src="/effect-3.svg" alt="img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero