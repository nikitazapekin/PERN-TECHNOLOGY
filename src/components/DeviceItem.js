import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
//import star from '../assets/star.png'
//import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import { Link } from 'react-router-dom';

const DeviceItem = ({device}) => {
  //  const history = useHistory()
    return (
        <Link  to={DEVICE_ROUTE + '/' + device.id}>
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/langru-200px-Full_Star_Yellow.svg.png"}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
        </Link>
    );
};

export default DeviceItem;