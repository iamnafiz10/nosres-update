"use client"
import React from 'react';
import Hero from '../../components/hero/page'
import Build from '../../components/build/page'
import Patner from '../../components/patner/page'
import Slider from '../../components/slider/page'
import Join from '../../components/join/page'
import Future from '../../components/future/page'

function Page() {
    return (
        <>
            <Hero/>
            <Build/>
            <Patner/>
            <Slider/>
            <Join/>
            <Future/>
        </>
    );
}

export default Page;