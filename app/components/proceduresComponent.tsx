"use client";

import { useState, useEffect } from "react";
import { API_URL, IMAGE_URL } from "../../constants";
import Servicebox from "./servicebox";

const ProcedureComponent = () => {
  const query = "*[_type=='procedures']";

  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedQuery = encodeURIComponent(query);
        const fullUrl = `${API_URL}?query=${encodedQuery}`;

        const response = await fetch(fullUrl);
        const data = await response.json();

        console.log(data);
        console.log(data);
        setProcedures(data.result); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (ref: string) => {
    return `${IMAGE_URL}${ref.replace("image-", "").replace(/-(\w+)$/, ".$1")}`;
  };

  const getDescriptionText = (body: any) => {
    return body
      .map((block: any) =>
        block.children.map((span: any) => span.text).join("")
      )
      .join("\n");
  };

  return (
    <div className="px-3 py-7 lg:py-12 bg-white">
      <div className="lg:container mx-auto">
        <div>
          <h6 className="text-sm text-sky-600 mb-3">Sub Header</h6>
          <h2 className="text-2xl text-sky-900 font-semibold">
            Our Specialized Treatments and Procedures
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-7">
          {procedures.length > 0 ? (
            procedures.map((procedure: any) => (
              <Servicebox
                key={procedure._id}
                image={getImageUrl(procedure.icon.asset._ref)}
                caption={procedure.title}
                description={getDescriptionText(procedure.body)}
                slug={procedure.slug.current}
                basePath="procedures"
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcedureComponent;
