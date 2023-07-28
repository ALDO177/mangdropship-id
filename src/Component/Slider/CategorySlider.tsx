import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import fashion_anak from '@/assets/fashion_anak.png';
import alat_dapur from '@/assets/alat_dapur.png';
import ATK from '@/assets/atk.png';
import { Card } from 'primereact/card';
import { Card as BsCard } from 'react-bootstrap'
import Image from "next/image";

const OptionsSliderCategory = {
    type: 'loop',
    perPage: 6,
    autoplay: true,
    interval: 2000,
    perMove: 1,
    autoHeight: true,
    rewind: true,
    gap: '2rem',
    arrows: false,
    pagination: false,
    breakpoints: {
        640: {
            perPage: 2,
        },
    }
}

const ArrayTestCateogry = [
    {
        id: 1,
        path: ATK,
        text: 'ATK',
    },
    {
        id: 2,
        path: alat_dapur,
        text: 'Alat Dapur',
    },
    {
        id: 3,
        path: fashion_anak,
        text: 'Fashion Anak'
    },
    {
        id: 4,
        path: ATK,
        text: 'ATK',
    },
    {
        id: 5,
        path: alat_dapur,
        text: 'Alat Dapur',
    },
    {
        id: 6,
        path: fashion_anak,
        text: 'Fashion Anak'
    },
    {
        id: 7,
        path: ATK,
        text: 'ATK',
    },
    {
        id: 8,
        path: alat_dapur,
        text: 'Alat Dapur',
    },
    {
        id: 9,
        path: fashion_anak,
        text: 'Fashion Anak'
    },
    {
        id: 10,
        path: fashion_anak,
        text: 'Fashion Anak'
    },
    {
        id: 11,
        path: fashion_anak,
        text: 'Fashion Anak'
    },
    {
        id: 12,
        path: fashion_anak,
        text: 'Fashion Anak'
    }
]

export default function CategorySlider() {
    return (
        <React.Fragment>
            <Splide
                hasTrack={false}
                options={OptionsSliderCategory}>
                <SplideTrack>
                    {
                        ArrayTestCateogry.map((values, idx) => (
                            <SplideSlide>
                                <a href="#">
                                    <BsCard key={idx} className="border-0 shadow-sm">
                                        <BsCard.Body style={{ height: '95px' }}>
                                            <Image src={values?.path} className="d-block mx-auto" alt="alt-data" />
                                            <div className="mt-1 text-center" style={{ fontSize: '11px' }}><strong>{values.text}</strong></div>
                                        </BsCard.Body>
                                    </BsCard>
                                </a>
                            </SplideSlide>
                        ))
                    }
                </SplideTrack>
            </Splide>
        </React.Fragment>
    )
}