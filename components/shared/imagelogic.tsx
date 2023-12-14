import React, { useState } from 'react';
import { MdOutlineLinkedCamera } from "react-icons/md";

export default function Imagelogic() {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : '');
        setFile(file || null);
    };

    return (
        <div>
            <div className='h-16 w-16 flex justify-center items-center rounded-full'>
                <input
                    className='hidden'
                    type='file'
                    accept='.csv'
                    id='input-img'
                    onChange={handleImage}
                />
                {file ? (
                    <div className='relative w-full h-full'>
                        <img
                             src={file.type.includes('csv') ? '/image.png' : URL.createObjectURL(file)}
                            alt={fileName}
                            className='object-cover w-full h-full rounded-full'
                        />
                        <div className='absolute -bottom-1 right-1 bg-[#0080F5] p-1 text-white-100 rounded-full' onClick={() => document.getElementById('input-img')?.click()}><MdOutlineLinkedCamera /></div>
                    </div>
                ) : (
                    <div className='relative'>
                        <img src="/image.png" alt="" className='w-full h-full' />
                        <div className='absolute -bottom-1 right-1 bg-[#0080F5] p-1 text-white-100 rounded-full text-xs' onClick={() => document.getElementById('input-img')?.click()}><MdOutlineLinkedCamera /></div>
                    </div>
                )}
            </div>
        </div>
    );
}
