import type React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-[#eee] px-8 py-6 rounded-xl">
      <div className="text-xl font-bold mb-3">Legalese Node</div>
      <div className="">
        The Legalese Node is a vital piece of the DataHive ecosystem, serving as the engine behind our Legal Intelligence layer. While just one component of the larger system, its
        impact is immense—transforming raw legal data into actionable intelligence. By continuously evolving to adapt to new regulations and challenges, the Legalese Node is at the
        forefront of driving a more secure and user-centric digital experience. For more information, visit{" "}
        <a href="https://www.datahive.network/resources" target="_blank" rel="noopener noreferrer" className="underline">
          DataHive Resources
        </a>
        .
      </div>
    </div>
  );
};

export default Banner;
