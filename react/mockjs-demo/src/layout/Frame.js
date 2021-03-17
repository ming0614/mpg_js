import React from 'react';
import { Layout } from 'antd'; // containter
import '../assets/style/layout.css'
const { Content } = Layout;

export default function Frame(props) {
    return (
        <div>
            <Layout className="layout"> 
                <Layout>                        
                    <Content className="content">
                      Layout
                      { props.children }
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
