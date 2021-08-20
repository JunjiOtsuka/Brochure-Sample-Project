import React from 'react'
import SiteNavBar from "./SiteNavBar";
import SiteCard from "./SiteCard"
import SiteTitle from "./SiteTitle"
import SiteContact from "./SiteContact"

export default function MainPage() {
    return (
        <>
            <SiteNavBar />
            <SiteTitle />
            <SiteCard />
            <SiteContact />
        </>
    )
}
