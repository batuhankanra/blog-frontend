import React from 'react'
import LowerHeader from './lowerHeader';
import UpperHeader from './upperHeader';
import Slider from './slider';


export default function Header() {
  return (
    <div>
        <UpperHeader/>
        <LowerHeader />
        <Slider />
    </div>
    
  )
}
