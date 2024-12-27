"use client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/home/page'
import Header from "@/app/components/header/page";

export default function Home() {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                </Routes>
            </Router>
        </>
    );
}
