import styled from "styled-components";
interface IText {
    fontWeight?:'normal'|'bold'|'bolder'|"100"|"200"|"300"|"400"|"500"|"600"|"700"|"800"|"900";
    fontSize?: string|number;
    fontFamily?:string;
    color?: string;
    lineHeight?: string|number;
    fontStyle?: string;
    margin?: string |number;
    marginTop?: string |number;
    marginBottom?: string |number;
    marginLeft?: string |number;
    marginRight?: string |number;
    padding?: string |number;
    paddingTop?: string |number;
    paddingBottom?: string |number;
    paddingLeft?: string |number;
    paddingRight?: string |number;
    width?: string|number;
    height?: string|number;
    minWidth?: string|number;
    minHeight?: string|number;

}
interface ILink {
    fontWeight?:'normal'|'bold'|'bolder'|"100"|"200"|"300"|"400"|"500"|"600"|"700"|"800"|"900";
    fontSize?: string|number;
    fontFamily?:string;
    color?: string;
    lineHeight?: string|number;
    fontStyle?: string;
    textDecorationLine?:'none'|'underline'|'overline'|"line-through"|"initial"|"inherit";
    margin?: string |number;
    marginTop?: string |number;
    marginBottom?: string |number;
    marginLeft?: string |number;
    marginRight?: string |number;
    padding?: string |number;
    paddingTop?: string |number;
    paddingBottom?: string |number;
    paddingLeft?: string |number;
    paddingRight?: string |number;
    width?: string|number;
    height?: string|number;
    minWidth?: string|number;
    minHeight?: string|number;
}
interface IBox {
    margin?: string |number;
    marginTop?: string |number;
    marginBottom?: string |number;
    marginLeft?: string |number;
    marginRight?: string |number;
    padding?: string |number;
    paddingTop?: string |number;
    paddingBottom?: string |number;
    paddingLeft?: string |number;
    paddingRight?: string |number;
    border?:string|number;
    borderBottom?:string|number;
    borderTop?:string|number;
    borderRight?:string|number;
    borderLeft?:string|number;
    borderRadius?:string|number;
    display?: 'none'|'block'|'contents'|"flex"|"grid"|"inline-block"|'inline-flex'|'inline-grid'|'inline-table'|"list-item"|"run-in"|"table"|"initial"|"inherit";
    flexDirection?:'row'|'row-reverse'|'column'|"column-reverse"|"initial"|"inherit";
    justifyContent?:'flex-start'|'flex-end'|'center'|"space-between"|"space-around"|"space-evenly"|"initial"|"inherit";
    alignItems?:'flex-start'|'flex-end'|'center'|"stretch"|"baseline"|"initial"|"inherit";
    backgroundColor?: string;
    color?: string;
    width?: string|number;
    height?: string|number;
    minWidth?: string|number;
    minHeight?: string|number;
}
interface IFlex {
    margin?: string |number;
    marginTop?: string |number;
    marginBottom?: string |number;
    marginLeft?: string |number;
    marginRight?: string |number;
    padding?: string |number;
    paddingTop?: string |number;
    paddingBottom?: string |number;
    paddingLeft?: string |number;
    paddingRight?: string |number;
    border?:string|number;
    borderBottom?:string|number;
    borderTop?:string|number;
    borderRight?:string|number;
    borderLeft?:string|number;
    borderRadius?:string|number;
    flexDirection?:'row'|'row-reverse'|'column'|"column-reverse"|"initial"|"inherit";
    justifyContent?:'flex-start'|'flex-end'|'center'|"space-between"|"space-around"|"space-evenly"|"initial"|"inherit";
    alignItems?:'flex-start'|'flex-end'|'center'|"stretch"|"baseline"|"initial"|"inherit";
    backgroundColor?: string;
    color?: string;
    width?: string|number;
    height?: string|number;
    minWidth?: string|number;
    minHeight?: string|number;
}
interface IImage {
    width?: string|number;
    height?: string|number;
    minWidth?: string|number;
    minHeight?: string|number;
    margin?: string |number;
    marginTop?: string |number;
    marginBottom?: string |number;
    marginLeft?: string |number;
    marginRight?: string |number;
    padding?: string |number;
    paddingTop?: string |number;
    paddingBottom?: string |number;
    paddingLeft?: string |number;
    paddingRight?: string |number;
    border?:string|number;
    borderBottom?:string|number;
    borderTop?:string|number;
    borderRight?:string|number;
    borderLeft?:string|number;
    borderRadius?:string|number;
}interface IButtom {
    width?: string|number;
    height?: string|number;
    minWidth?: string|number;
    minHeight?: string|number;
    margin?: string |number;
    marginTop?: string |number;
    marginBottom?: string |number;
    marginLeft?: string |number;
    marginRight?: string |number;
    padding?: string |number;
    paddingTop?: string |number;
    paddingBottom?: string |number;
    paddingLeft?: string |number;
    paddingRight?: string |number;
    border?:string|number;
    borderBottom?:string|number;
    borderTop?:string|number;
    borderRight?:string|number;
    borderLeft?:string|number;
    borderRadius?:string|number;
    flexDirection?:'row'|'row-reverse'|'column'|"column-reverse"|"initial"|"inherit";
    justifyContent?:'flex-start'|'flex-end'|'center'|"space-between"|"space-around"|"space-evenly"|"initial"|"inherit";
    alignItems?:'flex-start'|'flex-end'|'center'|"stretch"|"baseline"|"initial"|"inherit";
    backgroundColor?: string;
}
export const Text=styled.p<IText>`
  font-weight: ${props => props.fontWeight };
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
  line-height: ${props => props.lineHeight};
  font-style: ${props => props.fontStyle};
  margin:${props => props.margin} ;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding :${props => props.padding} ;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  width:${props => props.width} ;
  height:${props => props.height} ;
  min-width:${props => props.minWidth} ;
  min-height:${props => props.minHeight} ;
`;
export const Link = styled.a<ILink>`
  width:${props => props.width} ;
  height:${props => props.height} ;
  min-width:${props => props.minWidth} ;
  min-height:${props => props.minHeight} ;
 font-weight: ${props => props.fontWeight };
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};
  line-height: ${props => props.lineHeight};
  font-style: ${props => props.fontStyle};
  text-decoration-line:  ${props => props.textDecorationLine} ;
   margin:${props => props.margin} ;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding :${props => props.padding} ;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
`;
export const Box = styled.div<IBox>`
  width:${props => props.width} ;
  height:${props => props.height} ;
  min-width:${props => props.minWidth} ;
  min-height:${props => props.minHeight} ;
  margin:${props => props.margin} ;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding :${props => props.padding} ;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  border:${props => props.border} ;
  border-bottom:${props => props.borderBottom} ;
  border-top:${props => props.borderTop} ;
  border-right:${props => props.borderRight} ;
  border-left:${props => props.borderLeft} ;
  border-radius: ${props => props.borderRadius};
  display:${props => props.display} ;
  flex-direction:${props => props.flexDirection};
  justify-content:${props => props.justifyContent} ;
  align-items:${props => props.alignItems};
  background-color:${props => props.backgroundColor} ;
  color:${props => props.color} ;
`
export const Flex = styled.div<IFlex>`
  width:${props => props.width} ;
  height:${props => props.height} ;
  min-width:${props => props.minWidth} ;
  min-height:${props => props.minHeight} ;
  margin:${props => props.margin} ;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding :${props => props.padding} ;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  border:${props => props.border} ;
  border-bottom:${props => props.borderBottom} ;
  border-top:${props => props.borderTop} ;
  border-right:${props => props.borderRight} ;
  border-left:${props => props.borderLeft} ;
  border-radius: ${props => props.borderRadius};
  display: flex ;
  flex-direction:${props => props.flexDirection};
  justify-content:${props => props.justifyContent} ;
  align-items:${props => props.alignItems};
  background-color:${props => props.backgroundColor} ;
  color:${props => props.color} ;
  padding
`
export const Image = styled.img<IImage>`
    width:${props => props.width} ;
    height:${props => props.height} ;
    min-width:${props => props.minWidth} ;
    min-height:${props => props.minHeight} ;
  margin:${props => props.margin} ;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding :${props => props.padding} ;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  border:${props => props.border} ;
  border-bottom:${props => props.borderBottom} ;
  border-top:${props => props.borderTop} ;
  border-right:${props => props.borderRight} ;
  border-left:${props => props.borderLeft} ;
  border-radius: ${props => props.borderRadius};
`
export const Button = styled.button<IButtom>`
    width:${props => props.width} ;
    height:${props => props.height} ;
    min-width:${props => props.minWidth} ;
    min-height:${props => props.minHeight} ;
  margin:${props => props.margin} ;
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  padding :${props => props.padding} ;
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  border:${props => props.border} ;
  border-bottom:${props => props.borderBottom} ;
  border-top:${props => props.borderTop} ;
  border-right:${props => props.borderRight} ;
  border-left:${props => props.borderLeft} ;
  border-radius: ${props => props.borderRadius};
  background-color:${props => props.backgroundColor} ;
  color:${props => props.color} ;
  justify-content:${props => props.justifyContent} ;
  align-items:${props => props.alignItems};
  display:flex ;
  flex-direction:${props => props.flexDirection};
  
`