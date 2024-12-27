"use client"
import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom'

export default function Home() {
    return (
        <>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </>
    );
}
