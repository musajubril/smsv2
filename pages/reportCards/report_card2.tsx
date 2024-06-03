import Grade from '@/components/CA.report2/grade';
import Cognitive_ability from '@/components/CA.report2/Cognitive_ability';
import Footer from '@/components/CA.report2/Footer';
import Header from '@/components/CA.report2/Header';


import React from 'react'


export default function reportcard2() {
    return (
        <div className=' py-5  flex w-full items-center justify-center '>
            <div className=' flex flex-col w-full max-w-[70%] gap-2   '>
                <Header />
                <Cognitive_ability />
                <Grade />
                <Footer />
            </div>
        </div>
    )
}
