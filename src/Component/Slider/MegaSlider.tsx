import React from "react";
import banner from '@/assets/banner2.png';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import Image from "next/image";

export default function MegaSlider() {
    return (
        <>
            <Splide
                hasTrack={false}
                options={{
                    autoplay: true,
                    type: 'loop',
                    arrows: false,
                    rewind: true,
                    pagination: false,
                    autoWidth: true,
                    autoHeight: true,
                    gap: 0,
                    perPage: 1,
                    perMove: 1,
                    interval: 2000,
                }}>
                <SplideTrack>
                    <SplideSlide>
                        <Image src={ banner } width={ 500 } height={ 234 } alt="asoasjfif" />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src={ banner } width={ 500 } height={ 234 } alt="asoasjfif" />
                    </SplideSlide>
                </SplideTrack>
            </Splide>
        </>
    )
}