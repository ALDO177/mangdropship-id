import Footers from "@/Component/Footer";
import NavbarHome from "@/Component/Navbar/NavbarHome";
import React from "react";
import { Container } from "react-bootstrap";

type PropsComponent = {
    children?: React.ReactNode | React.ReactElement;
}
export default function CustomLayoutIndex({ children }: PropsComponent) {
    return (
        <>
            <NavbarHome />
            <Container>
                {children}
            </Container>
            <Footers/>
        </>
    )
}