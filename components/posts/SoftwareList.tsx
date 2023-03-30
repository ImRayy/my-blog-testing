import Indicator from "./Indicator";
import Platform from "./Platform";
import React from "react";

interface SoftwareListProps {
  list: string[];
}
const SoftwareList = ({ list }: SoftwareListProps) => {
  return (
    <div className="flex flex-col gap-2 capitalize text-md">
      {list.map((item, index) => (
        <div key={index} className="flex gap-2 flex-wrap">
          {item.split(">")[0].split("|").length > 1 ? (
            <span key={index} className="flex gap-1">
              {item
                .split(">")[0]
                .split("|")
                .map((label, index) => (
                  <a
                    key={index}
                    href={`https://${label.split("+")[1]}`}
                    target="_blank"
                  >
                    {label.split("+")[0]}
                    {item.split("|").length - 1 !== index && ","}
                  </a>
                ))}
            </span>
          ) : (
            <a
              href={`https://${item.split(">")[0].split("+")[1]}`}
              target="_blank"
            >
              {item.split(">")[0].split("+")[0]}
            </a>
          )}
          <Platform platforms={item.split(">")[1].split("-")} />
          {item.split(">")[2] && (
            <Indicator types={item.split(">")[2].split("-")} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SoftwareList;
