export interface Menu {
  name: string;
  icon: string;
  link: string;
  open: boolean;
}
export const menus: Menu[] = [
  {
    name: 'Projects',
    icon: 'dashboard',
    link: '/projects',
    open: false
  }
];
