import React from "react";
import { PropsComponentMerkProduk, StateComponentMerkProduk } from "../../interface/interface.f";
import { Card } from 'react-bootstrap'
import brand from '@/assets/super-brand 1.png';
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import imgs from '@/assets/card_produks.png';

const OptionSlidersBrandProduks = {
    perPage: 6,
    loop: true,
    autoplay: true,
    interval: 1000,
    perMove: 1,
    arrows: false,
    pagination: false,
    autoWidth: false,
    autoHeight: true,
    gap: '1rem',
    padding: 0,
    breakpoints: {
        640: {
            perPage: 2,
        },
    }
};

export const ProdukMaps = [
    {
        id: 1,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 2,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 2000,
        price: 'Rp30.000'
    },
    {
        id: 3,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 4,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 5,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 6,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 7,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 8,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 9,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 10,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 11,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 12,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 13,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 14,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 15,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 16,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 17,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    },
    {
        id: 18,
        path: imgs,
        nama: "Balsem Cap Dragon",
        sold: 3000,
        price: 'Rp30.000'
    }
]

export default class MerkProduk extends React.Component<PropsComponentMerkProduk, StateComponentMerkProduk>{

    constructor(props: StateComponentMerkProduk) {
        super(props)
    }
    
    public render(): React.ReactNode {
        const { merek }  = this.props;

        return (
            <React.Fragment>
                <Card className="border-0 shadow-sm">
                    <Card.Header className="text-700 bg-light border-bottom-0 shadow-sm">
                        <div className="d-flex justify-content-between">
                            <div><Image src={brand} alt="" /></div>
                            <div style={{ fontSize: '14px' }}>Lihat Semua</div>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Splide hasTrack={false} options={OptionSlidersBrandProduks}>
                            <SplideTrack>
                                {ProdukMaps.map((values, idx) => (
                                    <SplideSlide key={idx}>
                                        <Card>
                                            <div className="position-relative">
                                                <Image src={values.path} className="w-100" alt={values?.nama} />
                                            </div>
                                            <Card.Body className="body-panel-produk" style={{ paddingTop: '8px' }}>
                                                <span>{values?.nama}</span>
                                                <h4>{values?.price}</h4>
                                                <span>Terjual 100</span>
                                            </Card.Body>
                                        </Card>
                                    </SplideSlide>
                                ))}
                            </SplideTrack>
                        </Splide>
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    }
}