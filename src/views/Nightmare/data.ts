interface NightmareDataItemType {
  name: string;
  size?: number;
  tips?: { name: string; index: number }[]; // 提示
}
interface NightmareDataType {
  name: string;
  data: NightmareDataItemType[];
}

const TopData: NightmareDataItemType[] = [
  { name: '上', size: 11, tips: [{ name: 'tip', index: 1 }] },
  { name: '上右', size: 9 },
  { name: '上左', size: 11 },
  { name: '上下', size: 1 },
  { name: '上左右', size: 3 },
  { name: '上下左', size: 6 },
  { name: '上下右', size: 11 },
];
const RightData: NightmareDataItemType[] = [
  { name: '右', size: 1 },
  { name: '下右', size: 1 },
  { name: '下左右', size: 1 },
  { name: '上右', size: 1 },
];
const BottomData: NightmareDataItemType[] = [
  { name: '下', size: 1 },
  { name: '下左', size: 1 },
  { name: '下右', size: 1 },
  { name: '下左右', size: 3 },
];
const LeftData: NightmareDataItemType[] = [{ name: '左', size: 1 }];

export const NightmareData: NightmareDataType[] = [
  { name: '上', data: TopData },
  { name: '右', data: RightData },
  { name: '下', data: BottomData },
  { name: '左', data: LeftData },
];
