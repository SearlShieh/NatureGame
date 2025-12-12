export interface SixDataType {
  name: string;
  min: number;
  max: number;
}
export interface SixDataListType {
  name: string;
  value: string;
  sortIndex?: number;
}

export const SixData: SixDataType[] = [
  { name: 'shengbei', min: 1, max: 1 },
  { name: 'dajian', min: 2, max: 2 },
  { name: 'shenlu', min: 2, max: 3 },
  { name: 'guixi', min: 5, max: 6 },
  { name: 'xuelian', min: 6, max: 8 },
  { name: 'mao', min: 2, max: 3 },
  { name: 'shu', min: 3, max: 4 },
  { name: 'taoyong', min: 2, max: 3 },
  { name: 'baiyubei', min: 2, max: 3 },
  { name: 'jinzun', min: 0, max: 1 },
  { name: 'danglu', min: 1, max: 2 },
  { name: 'jinlin', min: 2, max: 3 },
  { name: 'hufu', min: 3, max: 4 },
];

export const NineData: SixDataType[] = [
  { name: 'shengbei', min: 1, max: 1 },
  { name: 'dajian', min: 3, max: 4 },
  { name: 'shenlu', min: 4, max: 5 },
  { name: 'guixi', min: 7, max: 10 },
  { name: 'xuelian', min: 8, max: 12 },
  { name: 'mao', min: 4, max: 5 },
  { name: 'shu', min: 5, max: 6 },
  { name: 'taoyong', min: 4, max: 6 },
  { name: 'baiyubei', min: 2, max: 4 },
  { name: 'jinzun', min: 1, max: 3 },
  { name: 'danglu', min: 2, max: 4 },
  { name: 'jinlin', min: 3, max: 5 },
  { name: 'hufu', min: 4, max: 6 },
];
