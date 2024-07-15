import React from 'react';

//import icons
import PhoneIcon from '../assets/img/phone.svg';

const Program = () => {
  return <div>
      <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
        <img className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]' src={PhoneIcon} alt="" />
        <div className='lg:text-[23px] text-blue font-extrabold'>
          +55 (71) 9865-7653
        </div>
      </div>
      <div className='text-sm'>
         <div className='hidden lg:flex '>Dias de funcionamento: Seg-Dom: 10h-18h</div>
         <div className='flex justify-center lg:hidden text-right '>Seg-Dom: 10h-18h</div>
      </div>
    </div>
  
}

export default Program
