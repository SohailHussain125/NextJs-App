import styled from "styled-components"

export const SideNavBarContiner = styled.div`
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
export const NavList = styled.div<NavListProps>`
    margin:20px 0px;
    color:${props => props.isActive ? "#37ad2a" : "#000"};
    border-left:${props => props.isActive ? '3px solid #37ad2a' : 'none'};
    padding:0px 20px;

`
export const NavText = styled.span`
    margin-left:10px;
    font-weight:bold
`
export const UnreadMessageCount = styled.span`
    background-color:#37ad2a;
    width:25px;
    height:20px;
    border-radius:10px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center
`