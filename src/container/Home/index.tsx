import styled from 'styled-components';
import Message from '../Message';
import NavBar from "./layout/navbar";
import SideNavBar from './layout/sideNavbar';
import { Col, Row } from 'antd'
const HomeContainer = styled.div`
width:100%;
height:100vh
`

const HomeContent = styled.div`
height:calc(100% - 71px);
display:flex

`
const HomePage: React.FC = ({ data }: any) => {
    return (

        <HomeContainer>
            <NavBar />
            <HomeContent >
                <SideNavBar />
                <Message />
            </HomeContent>
        </HomeContainer>


    )
}

export default HomePage
