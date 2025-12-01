import React from "react";
import { useProfile } from "../../hooks/useProfile";

const ProfileInfo = () => {
  const {state} =useProfile();
  return (
    <div>
      <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
        {state.user?.firstName} {' '} {state.user?.lastName}
      </h3>
      <p className="leading-[231%] lg:text-lg">{state.user?.email}</p>
    </div>
  );
};

export default ProfileInfo;
