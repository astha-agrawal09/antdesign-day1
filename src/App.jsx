
import { Content, Footer, Header } from 'antd/es/layout/layout'
import './App.css'
import { Col, Layout, Row } from 'antd'
import Header1 from './components/Header';
import Footer1 from './components/Footer';
import Aside from './components/Aside';
import Section from './components/Section';



function App() {



  return (
    <>

      <Header1 />
      <Content className='a_tbdr'>
        <Row className='a_tbdr'  style={{ minHeight: "calc(100vh - 100px - 100px)" }}>
            <Aside />
            <Section />
        </Row>
      </Content>
      <Footer1 />
    </>
  )
}

export default App
