import styled from "styled-components";

interface ButtonProps {
    text?: string,
    icon?: string,
    style?: any
}
const ButtonNew = styled.button`
background-color:${props => props?.style?.backgroundColor ? props?.style?.backgroundColor : "#37ad2a"};
border-radius:${props => props?.style?.borderRadius ? props?.style?.borderRadius : "10px"};
color:${props => props?.style?.color ? props?.style?.color : "#fff"};
border:${props => props?.style?.border ? props?.style?.border : "none"};
width: ${props => props?.style?.width ? props?.style?.width : "80px"};
height:  ${props => props?.style?.height ? props?.style?.height : "35px"};
color: ${props => props?.style?.color ? props?.style?.color : "#000"};
`
const CustomButton = ({ text, style }: ButtonProps) => {
    return (
        <ButtonNew style={style}>
            {text ? text : ""}
        </ButtonNew>
    )

}

export default CustomButton;