export type typeUnsplashImage = {
    id: string;
    alt_description: string | null;
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
    };
    width: number;
    height: number;
    links: {
      html: string;
    };
    // Otras propiedades que necesites
  }