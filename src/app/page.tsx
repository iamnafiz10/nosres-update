"use client"
import Homepage from './pages/home/page'
import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";
import {useEffect} from 'react';
import AOS from 'aos';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing
            once: false, // Whether animation should happen only once
        });
    }, []);
    return (
        <>
            <Header/>
            <Homepage/>
            <Footer/>
        </>
    );
}
