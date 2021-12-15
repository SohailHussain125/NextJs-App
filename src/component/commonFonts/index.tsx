import styled from "styled-components";


interface headingProps {
  color?: string
}
interface subHeadingProps {
  color?: string,
  borderBottom?: string
}
export const Heading = styled.div<headingProps>`
    font-size:18px;
    font-weight:bold;
    color:${props => props.color ? props.color : "#000"};
    margin-bottom:20px;
`

export const SubHeading = styled.span<subHeadingProps>`
    font-weight:bold;
    color:${props => props.color ? props.color : "#ccc"};
    border-bottom:${props => props.borderBottom ? props.borderBottom : ""}
`