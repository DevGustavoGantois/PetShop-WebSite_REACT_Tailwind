import React from 'react';

//import image
import DogImg from '../assets/img/dogs/dog-contact.png';

const Contact = () => {
  return (
    <section className='bg-yellow-secondary pt-6' id='Contato'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-around'>
            <div className='order-1 lg:order-1 lg:mt-16'>
              <img className='-mb-[12px]' src={DogImg} alt="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='text-orange font-semibold mb-3'>Contato</div>
              <div className='text-4xl text-blue font-extrabold'>+55 (71) 9875-9635</div>
              <div className='mb-7 text-blue'>Dias de funcionamento: Seg - Dom: 10 horas - 18 horas</div>
              <button className='btn'>Marque uma Consulta</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact
