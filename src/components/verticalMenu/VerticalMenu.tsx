import VerticalMenuList from './VerticalMenuList';

import './VerticalMenu.css';

/**
 * @returns Returns a VerticalMenu component.
 */
function VerticalMenu() {
  return (
    <aside className={'menu'}>
      <section className="vertical-menu-section">
        <VerticalMenuList />
      </section>
    </aside>
  );
}

export default VerticalMenu;
