
export enum ScreenName {
  HOME = 'HOME',
  NEWS = 'NEWS',
  NEWS_DETAIL = 'NEWS_DETAIL',
  PROFILE = 'PROFILE',
  TOURNAMENTS = 'TOURNAMENTS',
  BOOK_COURT = 'BOOK_COURT',
  PAYMENT = 'PAYMENT',
  CONFIRMATION = 'CONFIRMATION',
  SPECIALISTS = 'SPECIALISTS',
  SPECIALIST_DETAIL = 'SPECIALIST_DETAIL',
  SPECIALIST_CONFIRMATION = 'SPECIALIST_CONFIRMATION',
  MY_RESERVATIONS = 'MY_RESERVATIONS',
}

export interface NavigationState {
  currentScreen: ScreenName;
  history: ScreenName[];
  params?: any;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface Tournament {
  id: string;
  title: string;
  dateRange: string;
  categories: string;
  price: string;
  image: string;
  status: 'OPEN' | 'COMING_SOON' | 'LAST_SPOTS';
}

export interface Reservation {
  id: string;
  type: 'COURT' | 'SPECIALIST';
  title: string;
  subtitle: string;
  date: string;
  time: string;
  status: 'CONFIRMED' | 'PENDING' | 'CANCELLED';
}
