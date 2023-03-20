import {ComponentType, FC, FunctionComponent, ReactChildren} from "react";
import {Layout, Space, Typography} from "antd";
import {Nav, StyledNav} from "../Nav/Nav";
import {Weather} from "../Weather/Weather";
import styled from "styled-components";

const {Header, Content, Sider, Footer} = Layout;

const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
    width: "100%",
}

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    minHeight: '100px',
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
};


const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
    flex: 1
};

interface MainLayoutProps {
    component?: FunctionComponent<any>;
}


export const MainLayout: FC<MainLayoutProps> = ({component: Component}) => {
    const {Title} = Typography;



    return (
        <>
            <Space direction="vertical" style={{width: '100%', height: '100vh'}}
                   size={[0, 48]}>
            </Space>

            <Layout style={layoutStyle}>
                <Header style={headerStyle}><Nav></Nav></Header>
                <Layout>
                    <Content style={contentStyle}> {Component ? <Component/> : ''}</Content>
                </Layout>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </>
    )
}

export const StyledSider = styled(Sider)`
    display: flex;
    flex-grow: 3;
    width: 100%;
    background-color: #FFFFFF;
`;