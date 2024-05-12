"use client"
import React from "react";
import {TopSong} from "@/types";
import Image from "next/image";
import {FaCircle} from "react-icons/fa";
import {AiOutlineCaretDown, AiOutlineCaretUp} from "react-icons/ai";
import {FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import IconButton from "@/components/elements/IconButton";
import {useRouter} from "next/navigation";

interface SongCardRowExpandProps {
    song : song;
}

const SongCardRowExpand:React.FC<SongCardRowExpandProps> = ({song}) =>{
    const { channel, channelId } = song;
    const { push } = useRouter();
    const onClickChannel = () =>{
        push(`/channel/${channelId}`);
    }
    return (
        <article className={"flex items-center flex-row gap-4 h-[48px] w-full relative group"}>
            <div className={"w-[48px] h-[48px] relative"}>
            <Image src={song.imageSrc} alt={"img"} fill className={"object-cover"}/>
            <section className={"absolute top-0 hidden group-hover:flex w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer"}>
                <FiPlayCircle size={20}/>
            </section>
            </div>
                <div className={"flex flex-row gap-4 justify-between basis-1/3"}>
                    <div className={"w-[130px] truncate"}>{song.name}</div>
                    <div onClick={onClickChannel} className={"text-neutral-500 hover:underline cursor-pointer"}>{channel}</div>
                </div>
                <section className={"hidden group-hover:flex absolute right-0 flex flex-row items-center justify-end h-[48px] w-[120px] bg-[rgba(0,0,0,0.7)]"}>
                    <IconButton icon={<FiThumbsDown size={20}/>}/>
                    <IconButton icon={<FiThumbsUp size={20}/>}/>
                    <IconButton icon={<FiMoreVertical size={20}/>}/>
                </section>
        </article>
    )
}

export default SongCardRowExpand;