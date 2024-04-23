import React from "react";
import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import {dummyPlaylistArray} from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import {UserIcon} from "@/components/UserIcon";

const page = async ()=>{

    const dummyPlaylistArray1 = [...dummyPlaylistArray];

  return (
      <div>
      <PagePadding>
          <div className="min-h-[600px]">
              <div className="mt-9"></div>
              <Category />
              <div className="mt-12"></div>
              {/*carousel*/}
              <PlayListCarousel
                playlistArray={[...dummyPlaylistArray1]}
                Thumbnail={<div className={"w-[50px] h-[50px]"}><UserIcon size={"lg"}/></div>}
                title={"다시 듣기"}
                subTitle={"도도"}
              />
          </div>
      </PagePadding>
      </div>

  );
};

export default page;