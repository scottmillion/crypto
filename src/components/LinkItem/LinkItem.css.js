import styled from 'styled-components'
import { Link45deg } from '@styled-icons/bootstrap/Link45deg'

export const LinkImg = styled(Link45deg)`
  width: 16px;
  margin-right: 6px;
`

export const LinkItemWrap = styled.div`
  font-size: 12px;
  margin: ${(props) => (props.marginTop ? props.marginTop : '5px')} 5px 5px 5px;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  padding: ${(props) => props.padding};
  background: ${(props) => props.theme[props.themeColor]};
  border-radius: 10px;
  word-break: break-all;
  & a:link,
  a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.mainFont};
  }
`
