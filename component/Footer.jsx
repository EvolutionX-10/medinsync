function Footer() {
  return (
    <div className='lg:h-fit h-auto w-full bg-blue-200'>
      <div className='text-md py-10 text-black flex flex-col lg:flex-row lg:justify-center lg:gap-16 px-4'>
        {/* Main content */}
        <div className="lg:w-1/2 w-full lg:mr-10">
          <p className='lg:text-4xl text-2xl lg:ml-0 lg:pl-10'>Lorem ipsum, dolor sit amet consectet assumenda sint dolor saniet ea possimus explicabo?</p>
        </div>
        {/* COMPANY and SUPPORT sections */}
        <div className="flex flex-col lg:flex-row lg:gap-20 mt-10 lg:mt-0 lg:ml-10">
          <div>
            <p className='pb-2 text-lg font-bold text-[#8E989C]'>COMPANY</p>
            <p>About</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
          <div>
            <p className='pb-2 text-lg lg:mt-0 mt-4 font-bold text-[#8E989C]'>SUPPORT</p>
            <p>Help</p>
            <p>Status</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className=' lg:block mx-4 lg:mx-64 mt-8 lg:mt-12 h-[2px] bg-black w-2/5' />
      {/* Logo */}
      <div className='lg:mx-64 mx-4 my-3 text-2xl text-black'>
        MedInSync
      </div>
      {/* Copyright */}
      <div className='lg:mx-64 mx-4 mt-8 lg:mt-4 text-sm text-black'>
        @2024, Skill-Issue. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
