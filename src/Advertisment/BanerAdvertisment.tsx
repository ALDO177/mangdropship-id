import Image from "next/image";
import React from "react";
import { Card } from 'react-bootstrap'
import avd from '@/assets/advertisment.png';

export default function BanerAdvertisment(){
    return(
        <React.Fragment>
            <Card className="border-0 shadow-sm">
                <Card.Body style={{padding: '0px'}}>
                    <Image src={avd} className="w-100" alt="logo branding"/>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}