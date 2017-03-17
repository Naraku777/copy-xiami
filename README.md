# copy-xiami

> 仿照虾米音乐移动端 APP 设计编写的 WEBAPP，核心 Vue.js。

栈

- vue-cli with vuex, vue-router
- axios
- muse-ui

现有问题

- [ ] iOS 下 Safari 浏览器对 HTML Auido 的限制，autoplay 失效，导致切歌及选歌无法自动播放，桌面浏览器没问       题。[克服 iOS HTML5 音频的局限](http://www.ibm.com/developerworks/cn/web/wa-ioshtml5/index.html)


[在线预览地址](https://naraku777.github.io/copy-xiami/) 

## 截图预览

![](https://github.com/Naraku777/copy-xiami/blob/master/screenshot/46065A6A6992AAAED2E4F8B97E6A6133.jpg)
![](https://github.com/Naraku777/copy-xiami/blob/master/screenshot/2E812567674B0BD219FD74E01B051F72.jpg)
![](https://github.com/Naraku777/copy-xiami/blob/master/screenshot/EDDB38B1E39E673D1258EF3C66579AA1.jpg)
![](https://github.com/Naraku777/copy-xiami/blob/master/screenshot/826DA3341C9118E73382492A54C48606.jpg)
![](https://github.com/Naraku777/copy-xiami/blob/master/screenshot/89AF1B01ABCB90DEB701CB2BFA4C1710.jpg)



## 安装运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## TODO

- [x] 主页：推荐、精选集、排行入口
- [x] 歌曲播放，主页入口精选集歌单播放
- [ ] 首页推荐专辑、专题等模块入口，专辑详情页、排行榜详情页
- [ ] 搜索功能

## THANKS

API 项目 [LIU9293/musicAPI](https://github.com/LIU9293/musicAPI)

项目静态资源部署于 Github Pages，API 转发部署于 新浪云

