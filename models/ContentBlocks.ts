export namespace Block {
  export interface Tip {
    blok: {
      title: string;
      description: string;
      level: Level;
      categories: Category[];
      codeSrc: string;
    };
  }

  export interface Page {
    blok: {
      tip: {
        content: Tip;
      };
    };
  }

  export interface Level {
    name: string;
  }

  export interface Category {
    name: string;
  }
}
