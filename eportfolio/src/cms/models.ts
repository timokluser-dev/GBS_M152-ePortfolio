export interface CMS {
  intro: Intro;
  places: Place[];
}

export interface Link {
  label: string;
  link: string;
}

export interface WebmFallback {
  webm: string;
  mp4: string;
}

export interface WebpFallback {
  webp: string;
  jpeg: string;
}

export interface Image {
  sm: WebpFallback;
  md: WebpFallback;
  lg: WebpFallback;
}

export interface Video {
  source: WebmFallback;
}

export interface Intro {
  title: string;
  subtitle: string;
  video: Video;
}

export interface Place {
  name: string;
  slug: string;
  description: string;
  link?: Link;
  image: Image;
}
