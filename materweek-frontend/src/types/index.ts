export interface EventItem {
  id: string;
  date: string;
  location: string;
  title: string;
  description: string;
  iconUrl?: string;
  linkUrl: string;
  photoUrls?: string[];
  topic?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logoUrl: string;
  altText: string;
}