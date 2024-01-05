import { Acme, Sevillana } from 'next/font/google'
import Image from 'next/image'
const acme = Acme({ subsets: ['latin'], weight: ['400'] })
const sevillana = Sevillana({ subsets: ['latin'], weight: ['400'] })

export default function Header() {
    return (
        <div className='text-black p-[10px] relative' >
            {/* <img src='/bg1.jpg' className='h-[100%]' /> */}
        </div>
    )
}

{/* <div className={`${acme.className} font-bold text-[2rem]`}><span className={sevillana.className}>A</span>rogundade</div>
            <div>Mrs Arogundade of blessed memory</div>
            <div>12<sup>th</sup> Oct; 1975 - 21<sup>st</sup> Nov; 2023</div> */}