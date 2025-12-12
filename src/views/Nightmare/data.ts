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
  { name: '上', size: 11, tip: { 1: '封闭', 2: `<span style="color: red">右边有宝藏(老图)</span>`, 3: '封闭', 4: '左连2格，下走有框', 5: '封闭', 6: '左2框，右1框', 7: '右连2格, 进门3棺', 8: '<span style="color: red">右连2格，左边宝藏</span>', 9: '封闭，上有框', 10: '右连2格，上有框', 11: '上空2格' } },
  { name: '上右', size: 9, tip: { 1: '2水', 2: '竖2格', 3: '右1框, 长路走尽头去大水边', 4: '左上2框', 5: '竖3,左3', 6:'上框，下3有水', 7: '左有水', 8: '右下框', 9: 'L形' } },
  { name: '上左', size: 11, tip: { 1: '右框', 2: '右水', 3: '左框,右冰', 4: '上框，右框', 5: '中央', 6: '上框，下框', 7: '上无框', 8: '下水', 9: '下右框', 10: '下框', 11: '下框，右框' } },
  { name: '上下', size: 1, tip: { 1: '就一张' } },
  { name: '上左右', size: 3, tip: { 1: '右下框', 2: '下3框', 3: '右1框' } },
  { name: '上下左', size: 6, tip: { 1: '上水', 2: '上框',3: '右框', 4: '下3框', 5: '右水', 6: '右框，下框' } },
  { name: '上下右', size: 11, tip: { 1: '左框, 下框', 2: '左2框', 3: 'L形', 4: '上空', 5: '上封闭', 6: '左水', 7:'上去一格1左水', 8: '上2框', 9: '左上2框，阶梯型', 10: '下封闭', 11: '左下封闭' } },
];
const RightData: NightmareDataItemType[] = [
  { name: '右', size: 11, tip: { 1: '' } },
  { name: '下右', size: 10, tip: { 1: '' } },
  { name: '下左右', size: 6, tip: { 1: '' } },
  { name: '上右', size: 7, tip: { 1: '左上4小格', 2: '左边有水', 3: '下面有水', 4: '左下连着2水', 5: '右进冰区', 6: '左2框,右下水', } },
  { name: '上下右', size: 1, tip: { 1: '就一张' } },
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
