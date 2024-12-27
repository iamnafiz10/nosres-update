"use client"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from './pages/home/page'

export default function Home() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
