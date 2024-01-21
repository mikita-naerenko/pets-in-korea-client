export interface Article {
  id: string;
  userId: string;
  title: string;
  description: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  nameOfSource?: string | null;
  linkToSource?: string | null;
  authorName?: string | null;
  authorLink?: string | null;
  tags?: Tag[];
  images?: Img[];
}

export interface TagList {
  id: string;
  label: string;
  articles: Article[] | [];
}

export interface Tag {
  id: string;
  label: string;
  rusTitle: string;
  images: Img[];
}

export interface Img {
  articleId: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  url: string;
}

export interface News {
  id: string;
  userId: string;
  title: string;
  description: string;
  content: string;
  nameOfSource?: string;
  linkToSource?: string;
  authorName?: string;
  authorLink?: string;
  createdAt: Date;
  updatedAt: Date;
  images?: NewsImg[];
}

export interface NewsImg {
  newsId: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  url: string;
}

export interface Theme {
  id: string;
  label: string;
  rusLabel: string;
  description: string;
  images: ThemeImage[];
  createdAt: Date;
  updatedAt: Date;
  phrases: Phrase[] | [];
}

export interface ThemeImage {
  themeId: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  url: string;
}

export interface Phrase {
  id: string;
  authorId: string;
  phrase: string;
  themeId: string;
  createdAt: Date;
  updatedAt: Date;
  rusTranslates: Translate[] | [];
  engTranslates: Translate[] | [];
}

export interface Translate {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  translate: string;
  transcription: string;
  theme: string;
  koreanPhraseId: string;
}

export type SearchResponse =
  | {
      themes: Theme[] | [];
      articles: Article[] | [];
      news: News[] | [];
    }
  | undefined;
