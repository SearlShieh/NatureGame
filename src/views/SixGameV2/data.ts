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
  { name: '五', value: 5, money: '9' },
  { name: '六', value: 6, money: '12' },
  { name: '七', value: 7, money: '19' },
  { name: '九', value: 9, money: '29' },
  { name: '十一', value: 11, money: '39' },
  { name: '十三', value: 13, money: '59' },
  { name: '十五', value: 15, money: '69' },
];

export const SixData: SixDataType[] = [
  { name: 'shengbei', min: 1, max: 1, add: 0 },
  { name: 'dajian', min: 1, max: 2, add: 0.5 },
  { name: 'longtou', min: 1, max: 2, add: 0.6 },
  { name: 'guixi', min: 4, max: 6, add: 1 },
  { name: 'xuelian', min: 5, max: 8, add: 1.5 },
  { name: 'mao', min: 1, max: 2, add: 1 },
  { name: 'huli', min: 2, max: 4, add: 1 },
  { name: 'taoyong', min: 1, max: 2, add: 1 },
  { name: 'baiyubei', min: 1, max: 2, add: 0.5 },
  { name: 'jinzun', min: 2, max: 5, add: 1.2 },
  { name: 'danglu', min: 3, max: 6, add: 1.2 },
  { name: 'jinlin', min: 4, max: 8, add: 1.5 },
  { name: 'hufu', min: 4, max: 8, add: 1.5 },
  { name: 'ka', min: 2, max: 4, add: 0.8 },
];

export const SixDataLY: SixDataType[] = [
  { name: 'shenlong', min: 1, max: 1, add: 0.2 },
  { name: 'shengbei', min: 1, max: 1, add: 0.4 },
  { name: 'dajian', min: 1, max: 2, add: 0.8 },
  { name: 'longtou', min: 1, max: 3, add: 0.8 },
  { name: 'guixi', min: 3, max: 5, add: 1 },
  { name: 'hua', min: 6, max: 8, add: 1.5 },
  { name: 'mao', min: 1, max: 2, add: 1 },
  { name: 'huli', min: 2, max: 3, add: 1.2 },
  { name: 'jinzun', min: 2, max: 3, add: 1 },
  { name: 'tongjing', min: 2, max: 5, add: 1.2 },
  { name: 'dizi', min: 4, max: 6, add: 1.5 },
  { name: 'gou', min: 4, max: 6, add: 1 },
  { name: 'ka', min: 2, max: 3, add: 1.3 },
];
