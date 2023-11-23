const Footer = () => {
  return (
    <footer className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex flex-col space-y-4  text-black pr-10">
          <h2 className="text-base font-semibold">Build My Rig</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <p>
              Build My Rig is your go-to platform for personalized PC building.
              Easily customize your PC, check component prices in real-time, and
              engage with a vibrant community. Our user-friendly interface,
              comprehensive component selection, and secure checkout make it a
              seamless experience. Join the community, share builds, and explore
              the world of PC building at Build My Rig
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4  text-black ">
          <h2 className="text-base font-semibold">Information</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              About us
            </a>
            <a rel="noopener noreferrer" href="#">
              Location
            </a>
            <a rel="noopener noreferrer" href="#">
              Instruction
            </a>
            <a rel="noopener noreferrer" href="#">
              Price
            </a>
            <a rel="noopener noreferrer" href="#">
              FAQ
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4  text-black">
          <h2 className="text-base font-semibold">PC Service</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Pre-Built
            </a>
            <a rel="noopener noreferrer" href="#">
              PC Builder
            </a>
            <a rel="noopener noreferrer" href="#">
              Cleaning PC
            </a>
            <a rel="noopener noreferrer" href="#">
              Operating System
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4  text-black">
          <h2 className="text-base font-semibold">Components</h2>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Processor
            </a>
            <a rel="noopener noreferrer" href="#">
              Motherboard
            </a>
            <a rel="noopener noreferrer" href="#">
              RAM
            </a>
            <a rel="noopener noreferrer" href="#">
              Power Supply Unit
            </a>
            <a rel="noopener noreferrer" href="#">
              Monitor
            </a>
            <a rel="noopener noreferrer" href="#">
              Others
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        <span className="dark:text-gray-400">
          © Copyright 2023. All Rights Reserved By iammhador.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
