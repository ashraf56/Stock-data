import React from 'react';
import { FaAmazon, FaApple, FaFacebook } from 'react-icons/fa';
import { SiMeta, SiMicrosoft, SiTesla } from "react-icons/si";
const Overview = () => {
    return (
        <div className='grid   grid-cols-1  lg:grid-cols-2 gap-3 py-3'>
            <div className="alert ">
  <span>
 <FaApple/>
  </span>
  <span>Apple.INC</span>

</div>
<div className="alert ">
 <span>
    <SiMicrosoft></SiMicrosoft>
 </span>
  <span>Microsoft Corp
</span>
</div>
<div className="alert ">
  <span>
    
    <SiMeta></SiMeta>
  </span>
  <span>Meta Platforms Inc</span>
</div>
<div className="alert ">
<span>
    <SiTesla></SiTesla>
</span>
  <span>Tesla Inc
</span>
</div>
<div className="alert ">
<span>
    <FaAmazon></FaAmazon>
</span>
  <span>Amazon.com Inc</span>
</div>
        </div>
    );
};

export default Overview;