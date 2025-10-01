export type MenuListItemName = 'Add task' | 'Search' | 'Today' | 'Upcoming' | 'Completed' | 'Tags';

export interface MenuListItem {
  itemName: MenuListItemName;
}