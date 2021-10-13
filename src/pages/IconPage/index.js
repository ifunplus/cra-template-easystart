import React from 'react'
import MyIcon from '../../components_base/Iconfont'
import {Row,Col} from 'antd'


function index() {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Iconfont图标引入</h1>
            <p><a href="https://www.iconfont.cn/" target="blank">https://www.iconfont.cn/</a></p>
            <Row gutter={[16,16]} align="center">
                <Col><MyIcon type="icon-security"/><br/>security</Col>
                <Col><MyIcon type="icon-phone"/><br/>phone</Col>
                <Col><MyIcon type="icon-process"/><br/>process</Col>
                <Col><MyIcon type="icon-entry"/><br/>entry</Col>
                <Col><MyIcon type="icon-question-circle"/><br/>question-circle</Col>
                <Col><MyIcon type="icon-publish"/><br/>publish</Col>
                <Col><MyIcon type="icon-eye"/><br/>eye</Col>
            </Row>  
        </div>
    )
}

export default index
