import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchSection from "./search-section/SearchSection";

export default function Home() {
    return(
        <div>
            <Navbar />
            <SearchSection />
        </div>
    );
}