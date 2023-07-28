import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import banner from '@/assets/banner3.png';
import banner4 from '@/assets/banner4.png';
import Image from 'next/image';
import { Slide } from 'react-toastify';

const OptionsSlideChildBanner = {
    rewind: false,
    arrows: false,
    autoWidth: true,
    autoHeight: true,
    pagination: false
}

export default function ChildBanner() {
    return (
        <>
            <Splide
                hasTrack={false}
                options={OptionsSlideChildBanner}>
                <SplideTrack>
                    <SplideSlide>
                        <Image src={banner} height={115} alt="Banner 1" />
                    </SplideSlide>
                </SplideTrack>
            </Splide>
            <Splide
                hasTrack={false}
                options={OptionsSlideChildBanner}
                className="mt-1">
                <SplideTrack>
                    <SplideSlide>
                        <Image src={banner} height={115} alt="Banner 2" />
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </>
    )
}