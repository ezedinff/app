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
  },
  {
    name: 'Teams',
    icon: 'dashboard',
    link: '/teams',
    open: false
  },
  {
    name: 'Form Design',
    icon: 'dashboard',
    link: '/form-design',
    open: false
  },
  {
    name: 'My Forms',
    icon: 'dashboard',
    link: '/my-forms',
    open: false
  }
];
