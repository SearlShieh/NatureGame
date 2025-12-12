export interface SixDataType {
  name: string;
  min: number;
  max: number;
  add: number;
}
export interface SixDataListType {
  name: string;
  value: string;
  sortIndex?: number;
  imgIndex?: number;
}

export const GameData = [
  { name: '六', value: 6, money: '9.9' },
  { name: '七', value: 7, money: '12.9' },
  { name: '八', value: 8, money: '16.9' },
  { name: '九', value: 9, money: '21.9' },
  { name: '十', value: 10, money: '27.9' },
];

export const SixData: SixDataType[] = [
  { name: 'shengbei', min: 1, max: 1, add: 0 },
  { name: 'dajian', min: 2, max: 2, add: 0.5 },
  { name: 'shenlu', min: 2, max: 3, add: 0.5 },
  { name: 'guixi', min: 3, max: 8, add: 1 },
  { name: 'xuelian', min: 4, max: 10, add: 2 },
  { name: 'mao', min: 1, max: 3, add: 1 },
  { name: 'shu', min: 2, max: 4, add: 1.5 },
  { name: 'taoyong', min: 2, max: 4, add: 1.5 },
  { name: 'baiyubei', min: 1, max: 3, add: 0.5 },
  { name: 'jinzun', min: 0, max: 2, add: 1.5 },
  { name: 'suipian', min: 1, max: 3, add: 2 },
  { name: 'danglu', min: 1, max: 4, add: 1.5 },
  { name: 'jinlin', min: 2, max: 4, add: 1.5 },
  { name: 'hufu', min: 3, max: 5, add: 2 },
];
