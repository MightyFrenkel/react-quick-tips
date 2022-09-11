export namespace Block {
  export interface CodeEditor {
    blok: {
      src?: string;
    };
  }

  export interface Tip {
    blok: {
      title: string;
      description: string;
      level: Level;
      categories: Category[];
    };
  }

  export interface Level {
    name: string;
  }

  export interface Category {
    name: string;
  }
}
