import React from "react";
import PagePadding from "@/components/PagePadding";
import Category from "@/app/explore/components/Category";
import {dummyGenreList, dymmyGenreList, getAllPlaylist, getSongListTop10} from "@/lib/dummyData";
import {UserIcon} from "@/components/UserIcon";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";
import GenreListCarousel from "@/components/GenreListCarousel";

const page = async () =>{

    const playlistArray = await getAllPlaylist();
    const songListTop10 = await getSongListTop10();

    // const [playlistArray, songListTop10] = await Promise.all([
    //     getAllPlaylist(),
    //     getSongListTop10(),
    // ]);

    return (
     <PagePadding>
         <div className={"mt-4"}></div>
             <Category></Category>
         <div className={"mt-20"}></div>
         <PlayListCarousel
             playlistArray={playlistArray}
             title={"새 앨범 및 싱글"}
         />
         <div className={"mt-20"}></div>
         <SongListCarousel
             songListTop10={songListTop10}
             title={"인기곡"}
         />
         <div className={"mt-20"}></div>
         <GenreListCarousel title={"분위기 및 장르"} genreList= {dummyGenreList}/>
         <div className={"mt-20"}></div>
         <div className={"mt-20"}></div>
     </PagePadding>
    )
};

export default page;