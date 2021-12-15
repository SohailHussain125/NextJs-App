import { Col } from 'antd';
import bellicon from "./../../../../assets/img/bell.png";
import Image from 'next/image'
import CustomButton from '../../../../component/button/button';
import SearchBar from '../../../../component/searchBar';
import logo from './../../../../assets/img/logo.jpeg'
import { SubHeading } from '../../../../component/commonFonts';
import { Navbar, BigColStyle, Bellspan, UserIcon } from './navber.style';

const NavBar: React.FC = ({ data }: any) => {
    return (
        <Navbar>
            <BigColStyle xl={9} lg={9} className='flex-start-center'>
                <Image height={60} src={logo} />
                <SubHeading>Connecting Pakistan</SubHeading>
            </BigColStyle>
            <Col xl={9} lg={9}>
                <SearchBar placeholder='Search:' />
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
