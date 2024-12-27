"use client"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from './pages/home/page'
import Header from "@/app/components/header/page";

export default function Home() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
