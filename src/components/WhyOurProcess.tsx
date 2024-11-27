import React from "react";
import Section from "./custom/Section";
import Image from "next/image";

function WhyOurProcess() {
  return (
    <Section className=" text-white py-16 px-8">
      <h2 className="lg:text-5xl text-4xl font-bold text-center pb-12">
        Why Our Process Stands Out?
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 ">
        <div className="border-gray-400 border-2 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="lg:text-3xl text-xl font-semibold mb-4">
              Collab with us
            </h3>
            <p className="text-gray-400">
              We offer a diverse range of products and services across various
              industries to meet your specific needs.
            </p>
          </div>
          <div className="flex justify-between gap-4 mt-6">
            <Image
              src="/whyProcess/collab1.png"
              alt=""
              width={100}
              height={100}
            />

            <Image
              src="/whyProcess/collab2.png"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="border-gray-400 border-2 p-6 rounded-lg shadow-lg ">
          <h3 className="lg:text-3xl text-xl font-semibold mb-4">
            Collaborative Approach
          </h3>
          <p className="text-gray-400 mb-4">
            Close partnership with you at every stage.
          </p>
          <div className="flex  justify-center items-center w-full mb-2">
            <Image
              src="/whyProcess/approach1.png"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <hr className="py-2 w-full" />

          <div className="flex gap-4 flex-col items-start">
            <div className="flex flex-col justify-center">
              <h4 className="text-yellow-400 font-bold">Agile Methodology</h4>
              <p className="text-gray-400 text-sm">
                Flexible and Timely delivery
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <Image
                src="/whyProcess/approach2.png"
                alt=""
                width={100}
                height={100}
              />
              <Image
                src="/whyProcess/approach3.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="border-gray-400 border-2 p-6 rounded-lg shadow-lg">
          <h3 className="lg:text-3xl text-xl font-semibold mb-4">
            Attention to Detail
          </h3>
          <p className="text-gray-400 mb-4">
            Focused on delivering high-quality, user-centric solutions.
          </p>
          <div className="flex justify-center items-center pb-2">
            <Image
              src="/whyProcess/attention1.png"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <hr className="py-2 w-full" />
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-purple-400 font-bold">Communication</h4>
              <p className="text-gray-400 text-sm">
                Regular updates and feedback integration.
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <Image
                src="/whyProcess/approach2.png"
                alt=""
                width={100}
                height={100}
              />
              <Image
                src="/whyProcess/approach3.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WhyOurProcess;
