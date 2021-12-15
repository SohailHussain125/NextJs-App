import styled from "styled-components"
import {  Col, Row } from 'antd';

export const Navbar = styled(Row)`
background-color:#fff;
width:100%;
border-bottom:1px solid #f2f2f5;
border-top:1px solid #ccc;
padding:15px 20px;
display:flex;
align-items:center;
justify-content:space-between;
`

export const BigColStyle = styled(Col)`

`
export const UserIcon = styled.span`
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
export const Bellspan = styled.span`
margin:0px 20px
`