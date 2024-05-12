import React from "react";
import Category from "@/app/library/components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCard from "@/components/PlayListCard";
import {dummyPlaylistArray} from "@/lib/dummyData";
import {getRandomElementFromArray} from "@/lib/utils";

const page = () =>{
    return (
        <PagePadding>
            <div className={"mt-9"}></div>
            <Category></Category>
            <div className={"mt-12"}></div>
            <section className={"grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"}>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>
                <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}></PlayListCard>

            </section>
            <div className={"mt-12"}></div>
        </PagePadding>
    );
};

export default page;