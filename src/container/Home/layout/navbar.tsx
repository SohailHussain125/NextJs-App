import {  Col, Row } from 'antd';
import styled from 'styled-components';
import bellicon from "./../../../assets/img/bell.png";
import Image from 'next/image'
import CustomButton from '../../../component/button/button';
import SearchBar from '../../../component/searchBar';
import logo from './../../../assets/img/logo.jpeg'

const Navbar = styled(Row)`
background-color:#fff;
width:100%;
border-bottom:1px solid #f2f2f5;
border-top:1px solid #ccc;
padding:15px 20px;
display:flex;
align-items:center;
justify-content:space-between;
`
const SubHeading = styled.span`
color:#ccc;
font-weight:bold
`
const BigColStyle = styled(Col)`

`
const UserIcon = styled.span`
border-radius:100px;
width:40px;
height:40px;
background:purple;
display:flex;
align-items:center;
justify-content:center;
color:#fff;
font-weight:bold
`
const Bellspan = styled.span`
margin:0px 20px
`
const NavBar: React.FC = ({ data }: any) => {
    return (
        <Navbar>
            <BigColStyle xl={9} lg={9} className='flex-start-center'>
                <Image height={60} src={logo}/>
                <SubHeading>Connecting Pakistan</SubHeading>
            </BigColStyle>
            <Col xl={9} lg={9}>
                <SearchBar placeholder='Search:'/>
            </Col>
            <BigColStyle xl={6} lg={6} className='flex-end-center'>
                <CustomButton
                    style={{
                        color: "#fff"
                    }}
                    text="+ New" />
                <Bellspan>
                    <Image src={bellicon} alt="img" />
                </Bellspan>
                <UserIcon>KS</UserIcon>
            </BigColStyle>
        </Navbar>
    )
}

export default NavBar
