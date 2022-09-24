export namespace Block {
  export interface Tip {
    blok: {
      title: string;
      description: string;
      level: Level;
      categories: Category[];
      codeSrc: string;
      image?: Image;
    };
  }

  export interface Image {
    alt: string;
    copyright: string;
    filename: string;
    id: number;
    name: string;
    title: string;
  }

  export interface Page {
    blok: {
      tip: {
        content: any;
      };
      body: any;
    };
  }

  export interface Level {
    name: string;
  }

  export interface Category {
    name: string;
  }
}
