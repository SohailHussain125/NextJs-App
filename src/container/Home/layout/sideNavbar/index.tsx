import Image from 'next/image'
import homeIcon from "./../../../../assets/img/home.png";
import messageIcon from "./../../../../assets/img/chat.png";
import { NavList, NavText, SideNavBarContiner, UnreadMessageCount } from "./sideNavbar.style";

const SideNavBar: React.FC = () => {
    return (
        <SideNavBarContiner  >
            <NavBarList name="Home" icon={homeIcon} />
            <NavBarList name="Messages" icon={messageIcon} isActive={true} unReadMessage={3} />
            <NavBarList name="Meetings" icon={homeIcon} />
            <NavBarList name="Schedule" icon={homeIcon} />
            <NavBarList name="Docs" icon={homeIcon} />
            <NavBarList name="Contact" icon={homeIcon} />
            <NavBarList name="Workplace" icon={homeIcon} />
            <NavBarList name="Task" icon={homeIcon} />
            <NavBarList name="Activity" icon={homeIcon} />
        </SideNavBarContiner>
    )
}
const NavBarList = (navProps: {
    name: string,
    icon: StaticImageData,
    isActive?: boolean,
    unReadMessage?: Number
}) => {
    return (
        <NavList isActive={navProps.isActive} className="flex-between-center">
            <div className="flex-start-center">
                <Image width={25} height={25} src={navProps.icon} alt="img" />
                <NavText >{navProps.name}</NavText>
            </div>{
                navProps.unReadMessage ?
                    <UnreadMessageCount>{navProps.unReadMessage}</UnreadMessageCount>
                    : ""}
        </NavList>
    )
}
export default SideNavBar;