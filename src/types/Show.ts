export type Show = {
  score: number;
  show: {
    averageRuntime: number;
    dvdCountry: string;
    ended: Date;
    externals: { [key: string]: string | number };
    genres: string[];
    id: number;
    image: { [key: string]: string };
    language: string;
    name: string;
    network: { [key: string]: string | number };
    officialSite: string;
    premiered: Date;
    rating: { [key: string]: string };
    runtime: number;
    schedule: { [key: string]: string | number };
    status: string;
    summary: string;
    type: string;
    updated: number;
    url: string;
    webChannel: any;
    weight: number;
  };
};
