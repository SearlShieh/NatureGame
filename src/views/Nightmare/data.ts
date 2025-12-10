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
  { name: '上', size: 11, tip: { 1: '' } },
  { name: '上右', size: 9, tip: { 1: '' } },
  { name: '上左', size: 11, tip: { 1: '' } },
  { name: '上下', size: 1, tip: { 1: '' } },
  { name: '上左右', size: 3, tip: { 1: '' } },
  { name: '上下左', size: 6, tip: { 1: '' } },
  { name: '上下右', size: 11, tip: { 1: '' } },
];
const RightData: NightmareDataItemType[] = [
  { name: '右', size: 11, tip: { 1: '' } },
  { name: '下右', size: 10, tip: { 1: '' } },
  { name: '下左右', size: 6, tip: { 1: '' } },
  { name: '上右', size: 7, tip: { 1: '' } },
  { name: '上下右', size: 1, tip: { 1: '' } },
  { name: '上左右', size: 5, tip: { 1: '' } },
  { name: '左右', size: 3, tip: { 1: '' } },
];
const BottomData: NightmareDataItemType[] = [
  { name: '下', size: 4, tip: { 1: '' } },
  { name: '下左', size: 12, tip: { 1: '' } },
  { name: '下右', size: 8, tip: { 1: '' } },
  { name: '下左右', size: 3, tip: { 1: '' } },
  { name: '上下右', size: 10, tip: { 1: '' } },
  { name: '上下左', size: 3, tip: { 1: '' } },
];
const LeftData: NightmareDataItemType[] = [
  { name: '左', size: 10, tip: { 1: '' } },
  { name: '上左', size: 15, tip: { 1: '' } },
  { name: '上左右', size: 4, tip: { 1: '' } },
  { name: '下左', size: 6, tip: { 1: '' } },
  { name: '下左右', size: 3, tip: { 1: '' } },
  { name: '左右', size: 3, tip: { 1: '' } },
];

export const NightmareData: NightmareDataType[] = [
  { name: '上', data: TopData },
  { name: '右', data: RightData },
  { name: '下', data: BottomData },
  { name: '左', data: LeftData },
];
