
import React from "react";
import { Form, InputGroup } from 'react-bootstrap'
import * as BsIcons from 'react-icons/bs';
import { motion } from "framer-motion";

const AnimatePanel = {
    show: {
        opacity: 1,
        width: '70%',
        x: 0
    },
    hidde: {
        opacity: 0,
        x: 10
    }
}

export default function PanelNavbar() {
    return (
        <React.Fragment>
            <motion.div
                transition={{ duration: 0.4 }}
                initial={"hidde"} animate={"show"}
                variants={AnimatePanel}>
                <InputGroup>
                    <Form.Control
                        size="lg"
                        type="search"
                        placeholder="Cari Produk" />
                    <InputGroup.Text><BsIcons.BsSearch /></InputGroup.Text>
                </InputGroup>
            </motion.div>
        </React.Fragment>
    )
}