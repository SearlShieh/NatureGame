interface NightmareDataItemType {
  name: string;
  size?: number;
  tip?: Record<number, string>;
}
interface NightmareDataType {
  name: string;
  data: NightmareDataItemType[];
}

const TopData: NightmareDataItemType[] = [
  { name: '上', size: 2, tip: { 1: '', 2: '' } },
  { name: '上右', size: 1 },
  { name: '上左', size: 1 },
  { name: '上下', size: 1 },
  { name: '上左右', size: 1 },
  { name: '上下左', size: 1 },
  { name: '上下右', size: 1 },
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
