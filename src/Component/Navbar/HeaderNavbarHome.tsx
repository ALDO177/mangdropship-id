import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import Image from "next/image";
import logoGooglePlay from '@/assets/google-play.png';
import { Container } from "react-bootstrap";

export default function HeaderNavbarHome() {
    return (
        <React.Fragment>
            <div className="plant-info">
                <Container>
                    <div className="d-none d-xl-block d-lg-block d-xxl-block">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="d-flex gap-3">
                                    <span>Download App</span>
                                    <Image src={logoGooglePlay} width={52} className="align-self-center" alt="" />
                                    <div className="vr"></div>
                                    <span>Ikuti Kami</span>
                                    <div className="align-self-center d-flex gap-2">
                                        <FaIcons.FaTiktok size={'12px'} />
                                        <FaIcons.FaFacebookSquare size={'12px'} />
                                        <FaIcons.FaInstagramSquare size={'12px'} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-block">
                                <div className="flex gap-3 align-items-center justify-content-center">
                                    <div className="flex gap-2">
                                        <span className="flex align-self-center"><FaIcons.FaHouseUser size={17} /></span>
                                        <span className="flex align-self-center">Daftar Jadi Suplier</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="flex align-self-center"><BiIcons.BiColor size={17} /></span>
                                        <span className="flex align-self-center">Bahasa</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="flex align-self-center"><BiIcons.BiHelpCircle size={17} /></span>
                                        <span className="flex align-self-center">Bantuan</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="flex align-self-center"><BiIcons.BiHelpCircle size={17} /></span>
                                        <span className="flex align-self-center">Aldo Ratmawan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}