import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import getIcon from '../../services/iconSelector';

import { type MenuListItem } from '../../model/interfaces';

/**
 * @param root0 - An object presenting menu list item properties.
 * @param root0.itemName - Menu list item header.
 * @returns Returns a VerticalMenuListItem component.
 */
function VerticalMenuListItem({ itemName }: MenuListItem) {
  return (
    <>
      <button className="button is-transparent has-no-border">
        <span className={'icon-text'}>
          <span>
            <FontAwesomeIcon icon={getIcon(itemName)} />
          </span>
          <span>{itemName}</span>
        </span>
      </button>
    </>
  );
}

export default VerticalMenuListItem;
