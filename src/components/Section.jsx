import { Col } from 'antd'

// Global Variable (we can write global variable outside anywhere )
const myStyle2 = {
    color: "white",
    background: "pink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50,
};
export default function Section() {

    return (
        <>
            <Col span={18} className='a_tbdr' style={myStyle2}>Content</Col>
        </>
    )
}
