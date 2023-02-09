import {ComponentType, FC, FunctionComponent, ReactChildren} from "react";
import {Layout, Space} from "antd";
import {Nav, StyledNav} from "../Nav/Nav";

const { Header, Content, Sider, Footer} = Layout;

const layoutStyle: React.CSSProperties = {
    height: '100vh',
    display: "flex",
    flexDirection: "column"
}

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: '100px',
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

interface MainLayoutProps {
    component?: FunctionComponent<any>;
}


export const MainLayout: FC<MainLayoutProps> = ({component: Component})=> {
    return (
        <Space direction="vertical" style={{ width: '100%', height: '100vh' }} size={[0, 48]}>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}><Nav></Nav></Header>
                <Layout>
                    <Sider style={siderStyle}>Sider</Sider>
                    <Content style={contentStyle}> {Component ? <Component/> : ''}</Content>
                </Layout>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Space>
    )
}