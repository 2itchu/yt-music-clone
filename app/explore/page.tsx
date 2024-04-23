import React from "react";
import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/components/Category";

const page = () =>{
    return (
     <PagePadding>
         <div className={"mt-4"}>
             <Category></Category>
         </div>
     </PagePadding>
    )
};

export default page;