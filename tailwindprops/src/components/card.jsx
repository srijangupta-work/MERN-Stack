function Card({countryName="See inside to Find The Country Name",btnText="Visit Me",para="This is Also A Good Country"}) {
    return (
      <div className="flex justify-center mt-5">
      <div className="relative h-100 w-80 rounded-md bg-red-500">
        <img src="https://plus.unsplash.com/premium_photo-1785828348359-787d1ad7e44e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="z-0 h-full w-full rounded-md object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t  from-grey-900 to-transparent "></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white ">{countryName}</h1>
          <p className="mt-2 text-sm text-white">{para}</p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-red-500 p-2 rounded">Want to See {btnText}</button>
        </div>
      </div>
      </div>
    );
  }
  export default Card ;