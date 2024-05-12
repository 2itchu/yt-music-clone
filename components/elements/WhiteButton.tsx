import React from "react";
import {cn} from "@/lib/utils";

const WhiteButton = ({ icon=<></>, label, className="", ...props}) => {
    return (
        <div className={cn("cursor-pointer bg-neutral-200 text-black rounded-2xl flex flex-row items-center min-h-[36px] min-w-[80px] p-2 gap-2",className)} {...props}>
            <span>{icon}</span>
            <span>{label}</span>
        </div>
    );
};

export default WhiteButton;
