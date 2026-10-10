export interface INavLink {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}
export interface ILatestNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}
export interface IMainNews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}
export interface INewsSection {
  curationId: string;
  title: string;
  articles: IMainNews[];
}

export interface IMostRead {
  id: string;
  title: string;
  description: null | string;
  link: string;
  imageUrl: null | string;
  imageAlt: null | string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: null | string;
  source: string;
  rank: number;
}
export interface ICategoryResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  slug: string;
  topicId: string;
  title: string;
  page: number;
  pageCount: number;
  data: IMainNews[];
}
