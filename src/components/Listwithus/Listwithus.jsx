import React from "react";

function Listwithus() {
  return (
    <div className="bg-listwithus  container m-auto px-5">
      <div className="flex items-baseline justify-baseline pt-3">
        <img src="assets/listwithus/Path 7815.png" alt="" width={12} />
        &nbsp;
        <p className="text-black uppercase  text-xs">Back</p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-gray-500 text-sm uppercase pt-5">
          A Real Estate and property platform that is changing the world
        </p>
      </div>
      <div className="container m-auto px-5">
        <div className=" pt-60">
          <div>
            <h1 className="text-white uppercase text-3xl tracking-wider">
              List with us
            </h1>
            <h1 className="text-white  uppercase text-4xl tracking-wider">
              A new world
            </h1>
          </div>
        </div>
        <div className="flex items-end justify-end flex-col">
          <h1 className="text-white uppercase text-2xl tracking-widest">
            For Property
          </h1>
          <h1 className="text-black uppercase text-2xl tracking-wider">
            Professionals
          </h1>
          <h1 className="text-black uppercase text-2xl tracking-widest">
            Worldwide
          </h1>
          <img src="assets/listwithus/Group 4806.png" alt=""  width={150}/>
        </div>
      </div>
      <div className="text-center pt-24">
        <p className="text-gray-500 text-sm uppercase ">
          Get your properties sold and brand seen globally
        </p>
      </div>
      <div className="grid lg:grid-cols-3 pt-8 pb-4">
        <img src="assets/listwithus/Group 3285.png" alt=""  width={120}/>
        <div className="flex justify-center items-center ">
        <img  src="assets/listwithus/Path 27340.png" alt=""  width={30}/>
        </div>
        <div className="flex justify-end items-baseline">
        <p className="text-black text-sm uppercase tracking-wider">CREATE YOUR PRO ID ACCOUNT </p>
        &nbsp;
        <img src="assets/listwithus/Path 78152.png" alt="" width={20} />{" "}
      </div>
      </div>
    </div>
  );
}

export default Listwithus;
