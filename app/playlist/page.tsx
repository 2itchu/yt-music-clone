import React from "react";
import {getPlaylistById} from "@/lib/dummyData";
import {Simulate} from "react-dom/test-utils";
import {permanentRedirect} from "next/navigation";
import {getRandomElementFromArray} from "@/lib/utils";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";
interface PlaylistPageProps {
    searchParams :{
        list : string;
    }
}
const page = async (props : PlaylistPageProps) =>{
    const playlist = await getPlaylistById(Number(props.searchParams.list));
    if(!playlist) permanentRedirect("/");
    const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;
    console.log("imageSrc",imageSrc);
    return (
        <PagePadding>

        <HeaderBgChanger imageSrc={imageSrc}></HeaderBgChanger>
        <PlayListHead playlist={playlist}></PlayListHead>
            <div className={"mt-12"}/>
            <section className={"flex flex-col gap-2"}>
            {playlist?.songList.map((song,idx)=>{
                return <SongCardRowExpand song={song} key={idx}/>
            })}
            </section>
        </PagePadding>
    );
};

export default page;