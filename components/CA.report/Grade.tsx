import React from 'react'

export default function Grade() {
    return (
        <div>
            <div className=' border'>
                <div className=' w-full font-medium'>GRADE</div>
                <div className=' grid-cols-5  grid border-t'>
                    <div className=' border-r'></div>
                    <div className=' border-r'></div>
                    <div className=' border-r'></div>
                    <div className=' border-r'></div>
                    <div>
                    </div>
                </div>
                <div className=' grid-cols-4  grid'>
                    <div className=' border-r px-2' >A 70-100 [EXCELLENT]</div>
                    <div className=' border-r px-2'>B 50-69 [CREDIT]</div>
                    <div className=' border-r px-2'>P 40-59 [PASS]</div>
                    <div className='  px-2'>F 0-39 [FAIL]</div>
                </div>
            </div>
        </div>
    )
}
