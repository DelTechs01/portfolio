export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
];
