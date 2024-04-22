"use client"
import React from "react";
import { GridLoader} from "react-spinners";
import {Grid} from "lucide-react";
import ErrorMessage from "@/components/ErrorMessage";

const error = () =>{
    return (
        <ErrorMessage></ErrorMessage>

    )
}

export default error;