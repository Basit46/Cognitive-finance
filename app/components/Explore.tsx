import React from "react";
import Button from "./Button";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="mt-[75px] mb-[140px]">
      <h1 className="px-[20px] text-[30px] vsm:text-[36px] leading-[1.2] font-[600] text-center font-Poppins">
        Supercharge Your On-Chain Experience
      </h1>
      <div className="hidden lg:grid mt-[20px] w-fit mx-auto grid-cols-3 gap-x-[10px] gap-y-[25px] justify-center">
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
      </div>

      <div className="lg:hidden mt-[20px] w-fit mx-auto grid grid-cols-1 gap-x-[10px] gap-y-[10px] vsm:gap-y-[20px] md:gap-y-[25px] justify-center">
        <Label />
        <Label />
        <Label />
        <Label />
      </div>

      <div className="px-[20px] vsm:px-[50px] mt-[70px] vsm:mt-[100px] flex flex-col lg:flex-row items-center justify-center gap-[50px] lg:gap-[100px]">
        <div>
          <h1 className="text-[30px] vsm:text-[36px] font-Poppins font-[600] leading-[1.2] vsm:leading-[60px] text-[#000000]">
            Ensuring Security & <br className="hidden sm:block" /> Compliance
          </h1>
          <p className="mt-[20px] mb-[20px] vsm:mb-[30px] vsm:text-[20px] text-[#000000]">
            Cognitive Finance is dedicated to maintaining top-notch{" "}
            <br className="hidden vsm:block" /> security and regulatory
            compliance. Our smart contracts <br className="hidden vsm:block" />{" "}
            and operational procedures are thoroughly audited to{" "}
            <br className="hidden vsm:block" /> provide a secure and reliable
            platform for our users.
          </p>
          <Button />
        </div>

        <div className="relative max-w-[560px] w-full lg:w-[40%] h-[250px] xmd:h-[300px] rounded-[12px]">
          <div className="hidden vsm:block relative w-full h-full bg-[#2CAEE9] rounded-[12px] px-[40px] py-[20px]">
            <ul className="text-[13px] text-white leading-[20px]">
              <li>
                <span className="text-[#687887] mr-[15px]">1</span> await
                increase.achTransfers.create
              </li>
              <li>
                <span className="text-[#687887] mr-[20px]">2</span> account_id:{" "}
                <span className="text-[#31F2CC]">
                  'account_in71c4amph0vgo2qllky'
                </span>
                ,
              </li>
              <li>
                <span className="text-[#687887] mr-[20px]">3</span> amount:{" "}
                <span className="text-[#DDFF33]">81634</span>,
              </li>
              <li>
                <span className="text-[#687887] mr-[20px]">4</span> currency:{" "}
                <span className="text-[#31F2CC]">'USD'</span>,
              </li>
            </ul>
          </div>
          <div className="w-full h-full absolute vsm:right-[20px] xmd:right-[40px] overflow-hidden vsm:top-[50px] xmd:top-[100px] border-[5px] border-[#8465FF] rounded-[16px]">
            <Image
              priority
              className="object-cover"
              fill
              src="/gptImg2.png"
              alt="code"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-[100px] vsm:mt-[200px] flex flex-col items-center justify-center">
        <div className="relative mx-auto mb-[40px] grid place-items-center">
          <div className="absolute top-[-130px] size-[384px]">
            <Image className="object-cover" fill src="/boxBg.png" alt="box" />
          </div>
          <Image width={64} height={64} src="/box.svg" alt="box" />
        </div>
        <div className="absolute mt-[-330px] w-[80%] h-[368px]">
          <Image fill className="object-contain" src="/dots.png" alt="dot" />
        </div>

        <h1 className="relative text-[30px] vsm:text-[36px] leading-[45.36px] font-Poppins text-center font-[600] text-[#000000]">
          Get Started <br className="hidden vsm:block" />
          Join Cognitive Finance Today
        </h1>
        <p className="my-[25px] vsm:my-[50px] w-full vsm:w-[80%] px-[20px] vsm:px-0 mx-auto text-center text-[20px] text-[#000000]">
          Your Journey Begins Here - Dive into the future of decentralized
          finance with Cognitive Finance. Register now to revolutionize the way
          you save and earn. Leveraging our advanced multi-chain, multi-token
          approach, the opportunities for financial growth and empowerment are
          limitless. Embark on your path to financial freedom and empowerment
          with Cognitive Finance
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Explore;

const Label = () => {
  return (
    <div className="w-fit px-[14px] py-[4px] bg-[#6A44FF1F] border border-[#6A44FF] rounded-[39px] font-[500] text-[#6943FF]">
      Convert 30 ETH to BUSD on Ethereum
    </div>
  );
};
