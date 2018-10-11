# next-wx
> Basic wx sdk method.

## documentation:

| Member           | Description             | Default |
|:-----------------|:------------------------|:--------|
| __WEIXIN_READY__ | 微信Jssdk是否初始化完毕 | false   |
| __NETWORK_TYPE__ | 网络环境                | wifi    |


## usage:
```js
import NxWxShare from 'next-wx-share';
import NxWxImage from 'next-wx-image';
import NxWx from 'next-wx';
import { SHARE, DEBUG, PAY, ADDRESS, IMAGE, LOCATION, MENU, WINDOW, QR_CODE, CARD } from 'next-wx-api';


const JS_API_LIST = nx.concat([], DEBUG, SHARE);

//Wechat.js
export default class {

  static init(inConfig) {
    const config = nx.mix(inConfig, {debug: $config.WX_DEBUG});
    NxWx.config(config, JS_API_LIST);
  }

  static share(inConfig) {
    inConfig.imgUrl = $app.toThumbnail($app.toImgs(inConfig.images)[0], {width: 100});
    return NxWxShare.share(SHARE, inConfig);
  }

  static preview(inIndex, inItems) {
    NxWxImage.preview(inIndex, inItems);
  }

}
```


## other resources:
```conf
next-wx
next-wx-api
next-wx-debug
next-wx-share
next-wx-pay
next-wx-address
next-wx-image
next-wx-menu
```

## resources:
+ https://margox.cn/%E4%B8%A4%E4%B8%AA%E5%BE%AE%E4%BF%A1sdk%E7%9B%B8%E5%85%B3%E7%9A%84%E8%84%9A%E6%9C%AC.html
