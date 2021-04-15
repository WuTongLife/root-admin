import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2488774_vef1wal3vzm.js'],
});
export default IconFont;
export enum IconTypeEnum {
  小程序 = 'icon-xiaochengxu',
  博客 = 'icon-boke1',
}
