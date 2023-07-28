import React from 'react'
import Image from 'next/image'
import HeaderNavbarHome from './HeaderNavbarHome'
import { Container, Navbar } from 'react-bootstrap'
import logoMangdropship from '@/assets/logo-mang.png';
import * as BsIcons from 'react-icons/bs';
import { InputText } from 'primereact/inputtext';

export default function NavbarHome() {
    return (
        <React.Fragment>
            <HeaderNavbarHome />
            <Navbar expand="lg" className='bg-mang' sticky="top" style={{ minHeight: '78px' }}>
                <Container className='pt-3'>
                    <div className="flex justify-content-between gap-4">
                        <Navbar.Brand href="#home">
                            <Image className='img-fluid' src={logoMangdropship} width={188} alt='logo-mangdropship' />
                        </Navbar.Brand>
                        <div className='d-none d-lg-block d-xl-block d-xxl-block'>
                            <div className="flex gap-3">
                                <div className="p-input-icon-left mb-2 align-self-center  me-4">
                                    <i className="pi pi-search" />
                                    <InputText placeholder="Search" style={{ width: '900px' }} className="p-inputtext-sm" />
                                </div>
                                <BsIcons.BsCart2 size={25} className='align-self-center' />
                            </div>
                            <div className="flex gap-3 justify-content-start text-white text-600">
                                {
                                    Array(10).fill(0).map((__, idx) => (
                                        <span key={idx} style={{fontSize: '13px'}}>Lorem ipsum </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}