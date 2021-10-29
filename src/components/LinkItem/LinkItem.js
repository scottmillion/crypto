import { LinkImg, LinkItemWrap } from './LinkItem.css'
import { trimUrl } from 'utils'

const LinkItem = (props) => (
  <LinkItemWrap
    themeColor={props.themeColor}
    padding={props.padding}
    marginTop={props.marginTop}
  >
    <a href={props.url}>
      <LinkImg />
      {trimUrl(props.url)}
    </a>
  </LinkItemWrap>
)

export default LinkItem
