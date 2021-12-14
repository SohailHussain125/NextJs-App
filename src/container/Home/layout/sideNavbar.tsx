import styled from "styled-components";
import Image from 'next/image'
import homeIcon from "./../../../assets/img/home.png";
import messageIcon from "./../../../assets/img/chat.png";


const SideNavBarContiner = styled.div`
display:flex;
flex-direction:column;
width:260px;
border-right:8px solid #f2f2f5;
height:100%;
padding:20px 0px;
overflow-y: auto;
&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
 }
`
interface NavListProps {
    isActive?: boolean
}
const NavList = styled.div<NavListProps>`
margin:20px 0px;
color:${props => props.isActive ? "#37ad2a" : "#000"};
border-left:${props => props.isActive ? '3px solid #37ad2a' : 'none'};
padding:0px 20px;

`
const NavText = styled.span`
margin-left:10px;
font-weight:bold
`
const UnreadMessageCount = styled.span`
background-color:#37ad2a;
width:25px;
height:20px;
border-radius:10px;
color:#fff;
display:flex;
align-items:center;
justify-content:center
`

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