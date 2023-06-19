import { Breed } from './breed.interface';

export interface Cat {
  breeds?: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}
