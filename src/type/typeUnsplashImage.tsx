export type typeUnsplashImage = {
    id: string;
    alt_description: string | null;
    description: string | null;
    likes: number;
    created_at: string;
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    user: {
      username: string;
      name: string;
      total_photos: number;
      profile_image: {
        large: string;
        medium: string;
        small: string
      }
    };
    width: number;
    height: number;
    links: {
      html: string;
      download: string;
    };
    // Otras propiedades que necesites
  }