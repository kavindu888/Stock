'use client'

import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles.css';
import Image from 'next/image';
import img1 from '../../../public/1.jpg'
import img2 from '../../../public/2.jpg'
import img3 from '../../../public/3.jpg'
import img4 from '../../../public/4.jpg'
import img5 from '../../../public/5.jpg'
import img6 from '../../../public/6.jpg'
const Slide = () => {

    return (
        <div>
            <Fade autoplay={true} duration={2000} transitionDuration={1000} arrows={false} pauseOnHover={false}

            >

                <div className="each-slide slide w-[100vp] h-[100vh]">
                    <div className='w-[100vp] h-16' >
                        <Image 
                            style={{ width: "100%", height: "100vh", objectFit: 'cover' }}
                            src={img1} />
                    </div>
                </div>

                <div className="each-slide slide w-[100vp] h-[100vh]">
                    <div className='w-[100vp] h-16' >
                        <Image
                            style={{ width: "100%", height: "100vh", objectFit: 'cover' }}
                            src={img2} />
                    </div>
                </div>

                <div className="each-slide slide w-[100vp] h-[100vh]">
                    <div className='w-[100vp] h-16' >
                        <Image
                            style={{ width: "100%", height: "100vh", objectFit: 'cover' }}
                            src={img3} />
                    </div>
                </div>
        

                <div className="each-slide slide w-[100vp] h-[100vh]">
                    <div className='w-[100vp] h-16' >
                        <Image
                            style={{ width: "100%", height: "100vh", objectFit: 'cover' }}
                            src={img4} />
                    </div>
                </div>


                <div className="each-slide slide w-[100vp] h-[100vh]">
                    <div className='w-[100vp] h-16' >
                        <Image
                            style={{ width: "100%", height: "100vh", objectFit: 'cover' }}
                            src={img5} />
                    </div>
                </div>

                <div className="each-slide slide w-[100vp] h-[100vh]">
                    <div className='w-[100vp] h-16' >
                        <Image
                            style={{ width: "100%", height: "100vh", objectFit: 'cover' }}
                            src={img6} />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Slide