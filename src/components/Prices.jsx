import React, { useEffect, useState } from 'react';

//import data
import {bundleData} from '../data';
import Bundles from './Bundles';

const Prices = () => {
  //index state
  const [index, setIndex] = useState(0);
  //bundle state
  const [bundles, setBundles] = useState([])
  //useeffect 
  useEffect(() => {
    setBundles(bundleData[0].services)
  }, []);

  const getBundle = (name) => {
    const newBundle = bundleData.find((bundle) => {
      return bundle.name === name;
    });
    setBundles(newBundle.services);
  }

  return (
    <section className='py-12 lg:py-24' id='Preços'>
      <div className='container mx-auto'>
        <div className='text-center mb-20'>
          <div className='text-orange font-semibold mb-3'>Nossos Preços</div>
          <h2 className='h2 mb-3'>Quão grande é o seu Cachorro?</h2>
          <p className='text-lg text-blue'>Escolha a categoria do seu Cachorro</p>
        </div>
        <div className='grid grid-cols-4 gap-4 lg:gap-[30px]'>
          {bundleData.map((item, idx) => {
            //destructure item
            const {name, image, dogCategory} = item;
            return (
              <div onClick={() => { setIndex(idx); getBundle(name) }} className='cursor-pointer text-center' key={idx}>
                <div className='mb-2 lg:mb-8 hover:scale-105 transition-all duration-300'>
                  <img className='w-full' src={image} alt="" />
                </div>
                <h3 className='lg:text-2xl captalize font-semibold text-blue lg:mb-2'>{name}</h3>
                <div className={`${index === idx ? 'border-b-4 border-orange transition-all relative lg:after:w-5 lg:after:h-5 after:bg-triangle lg:after:bg-no-repeat lg:after:block lg:after:left-[130px] lg:after:absolute lg:after:-bottom-6'  : 'border-b-4 border-transparent'} pb-4 mb-12`}>
                  <div className='hidden lg:block capitalize'>{dogCategory}</div>
                </div>
              </div>
            )
          })}
        </div>
        <Bundles bundles={bundles}/>
      </div>
    </section>
  )
}

export default Prices
