import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "../Image";
import { Link } from "react-router-dom";

const AccountItem = ({data}) => {
  return (
    <Link to={`/profile/${data.nickname}`} className="flex items-center space-x-2">
      <Image
        className="w-[50px] h-[50px] rounded-full"
        src={data.avatar}
        alt={data.last_name}
      />
      <div>
        <p className="space-x-2">
          <span>{data.full_name}</span>
          {data. tick && <FontAwesomeIcon className="text-green-400" icon={faCheckCircle} />}
        </p>
        <span className="text-sm text-[#e2caca]">{data.nickname}</span>
      </div>
    </Link>
  );
};

export default AccountItem;
