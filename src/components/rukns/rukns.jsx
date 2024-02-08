import React from 'react'

import { rukns } from './../../rukns';


export default function Rukns() {
  // const rukn = rukns.find((rukn) => rukn.id === parseInt(id))
  return (
    <div className="mt-10">
      <h1>Ruknlar</h1>
      <div className='flex gap-5'>
        {rukns.map((rukn) => (
          <div className="relative mt-4 " key={rukn.id}>
            <img className=" -z-10" src={rukn.img} alt="" />
            <p className="absolute bottom-2 px-5 text-white">{rukn.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
