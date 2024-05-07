import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import images from "../../assets/images";

const AccountItem = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src={images.logo}
        alt=""
      />
      <div>
        <p className="space-x-2">
          <span>Nguyen Khanh Duy</span>
          <FontAwesomeIcon className="text-green-400" icon={faCheckCircle} />
        </p>
        <span className="text-sm text-[#e2caca]">Nguyen Khanh Duy</span>
      </div>
    </div>
  );
};

export default AccountItem;
