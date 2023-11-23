import { LiaMapSolid } from "react-icons/lia";
import { SiMinutemailer } from "react-icons/si";
import { TbPhoneCall } from "react-icons/tb";

const NeedHelp = () => {
  return (
    <div
      id="Help"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="mb-4 text-center md:text-left">
        <h2 className="text-4xl font-semibold text-black mb-4">Need Help?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Help Description Section */}
        <div className="max-w-md">
          <p className="text-gray-400">
            If you need assistance, you can start by checking out our FAQ
            section. Where compiled answers to some of the most common asked
            questions.
            <br />
            If you do not find the answer you are looking for there, you can
            also reach out to our customer service team via email or phone.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="max-w-md mx-auto">
          <div className="flex flex-col space-y-2 text-gray-400">
            <div className="flex items-center space-x-2">
              <SiMinutemailer />
              <p>support@buildmyrig.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <TbPhoneCall />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center space-x-2">
              <LiaMapSolid />
              <p>123 Tech Street, Tech City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
