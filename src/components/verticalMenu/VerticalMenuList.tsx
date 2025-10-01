import VerticalMenuListLabel from './VerticalMenuListLabel'
import VerticalMenuListItem from './VerticalMenuListItem'
import { mainMenuListItems } from '../../constnants/constants'
import type { MenuListItem } from "../../types/types";



function VerticalMenuList() {
  return (
    <>
      <VerticalMenuListLabel />
      <ul className="menu-list">
        {
          mainMenuListItems.map((item: MenuListItem) => (
            <li key={item.itemName}>
              <VerticalMenuListItem {...item} />
            </li>
          ))}
      </ul>
    </>
  )
}

export default VerticalMenuList