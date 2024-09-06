/* eslint-disable @next/next/no-img-element */
import React from 'react';
import myImage from '../public/images/pp-circle.png';
import { PropsWithChildren } from 'react';
const PP = (props: PropsWithChildren <{className?:string}>) => {
  return (
    <div>
      <img src={myImage.src} alt="Profile Picture" className={props.className} />
    </div>
  );
};

export default PP;