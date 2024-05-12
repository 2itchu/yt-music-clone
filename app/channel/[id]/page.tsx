"use client"
import React from "react";
import {getChannelById} from "@/lib/dummyData";
import {permanentRedirect} from "next/navigation";
import {getRandomElementFromArray} from "@/lib/utils";
import PagePadding from "@/components/PagePadding";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import {FiMusic, FiShuffle} from "react-icons/fi";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import {UserIcon} from "@/components/UserIcon";
import PlayListCarousel from "@/components/PlayListCarousel";
import usePlayerState from "@/hooks/usePlayerState";
import ChannelHead from "../components/ChannelHead";
interface ChannelPageProps {
    params : {
        id : string;
    }
}

const page = async (props : ChannelPageProps) =>{
    const channel = await getChannelById(Number(props.params.id));
    if(!channel) permanentRedirect("/");



    const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;
    return (
        <PagePadding>
            <HeaderBgChanger imgSrc={imageSrc}/>
            <div className={"mt-[200px]"}></div>
            <ChannelHead channel={channel}/>

            <section className={"mt-[80px]"}>
                <div className={"text-[28px] font-bold"} >노래</div>
                <div className={"mt-[20px]"}>
                    <ul className={"flex flex-col gap-2"}>
                    {channel?.songList.map((song,key)=>{
                        return <SongCardRowExpand song={song} key={key}/>
                    })}
                    </ul>
                </div>
            </section>
            <section className={"mt-[80px]"}>
                <div className={"text-[28px] font-bold"} >앨범</div>
                <PlayListCarousel
                    playlistArray={channel.playlistArray}
                />
            </section>
            <section className={"mt-[80px]"}/>
        </PagePadding>
    )
};

export default page;