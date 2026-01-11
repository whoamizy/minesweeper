export interface ICell {
  id: number;
  isMine: boolean;
  isFlag: boolean;
  isOpen: boolean;
  minesAround: number;
  neighborhood: number[];
}

export type TGameStatus = 'win' | 'lose' | 'playing';
