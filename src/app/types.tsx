export type ModalType = 'about' | 'menu' | 'contact' | null;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'default' | 'seasonal' | 'pastries';
  featured?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  hours: {
    [key: string]: string;
  };
}
