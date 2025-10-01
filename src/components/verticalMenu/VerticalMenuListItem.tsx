import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { MenuListItem } from "../../types/types";
import { faPlus, faMagnifyingGlass, faCalendarDay, faCalendarDays, faCircleCheck, faTags, type IconDefinition } from '@fortawesome/free-solid-svg-icons'

function VerticalMenuListItem ({ itemName } : MenuListItem)  {
  function getIcon(itemName : string) : IconDefinition {
    switch (itemName) {
      case 'Add task':
        return faPlus;
      case 'Search':
        return faMagnifyingGlass;
      case 'Today':
        return faCalendarDay;
      case 'Upcoming':
        return faCalendarDays;
      case 'Completed':
        return faCircleCheck;
      case 'Tags':
        return faTags;
      default:
        throw new Error(`No icon found for "${itemName}"`);
    }
  }

  return (
    <>
        <span className="icon-text">
            <FontAwesomeIcon icon={getIcon(itemName)}  />
            <span>{itemName}</span>
        </span>
    </>
  )
}

export default VerticalMenuListItem