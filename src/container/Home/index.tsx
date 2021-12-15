import Message from '../Message';
import { HomeContainer, HomeContent } from './Home.style';
import NavBar from "./layout/navbar";
import SideNavBar from './layout/sideNavbar';

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
