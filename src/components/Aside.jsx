import { Col } from 'antd';
import { getLineHeight } from 'antd/es/theme/internal';
import React from 'react'

export default function Aside() {
    //Local Variable
    const myStyle = {
        color: "white",
        background: "blue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 50,
    };
    return (
        <>
            <Col span={6} className='a_tbdr' style={myStyle}>Sidebar</Col>
        </>
    )
}
