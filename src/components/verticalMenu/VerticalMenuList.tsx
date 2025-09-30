import VerticalMenuListLabel from './VerticalMenuListLabel'
import VerticalMenuListItem from './VerticalMenuListItem'
import { mainMenuListItems } from '../../constnants/constants'


function VerticalMenuList() {
  return (
    <>
        <VerticalMenuListLabel />
        <ul className="menu-list">
            <li><VerticalMenuListItem /></li>
            <li><VerticalMenuListItem /></li>
            <li><VerticalMenuListItem /></li>
            <li><VerticalMenuListItem /></li>
            <li><VerticalMenuListItem /></li>
            <li><VerticalMenuListItem /></li>
            <li><VerticalMenuListItem /></li>
        </ul>
    </>
  )
}

export default VerticalMenuList