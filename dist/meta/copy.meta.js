// ==UserScript==
// @name       解除网站不允许复制的限制（优化版）🔥🔥🔥
// @name:zh    解除网站不允许复制的限制（优化版）🔥🔥🔥
// @name:zh-TW 解除網站不允許複製的限制（優化版）🔥🔥🔥
// @description       解除部分网站不允许复制的限制，文本选中后点击复制按钮即可复制，主要用于：百度文库|道客巴巴|腾讯文档|豆丁网|无忧考网|学习啦|蓬勃范文|思否社区|力扣|知乎|语雀|QQ文档|360doc|17k|CSDN等，云服务器导航，在原脚本的基础上，优化了部分功能，如有补充请留言反馈~
// @description:zh    解除部分网站不允许复制的限制，文本选中后点击复制按钮即可复制，主要用于：百度文库|道客巴巴|腾讯文档|豆丁网|无忧考网|学习啦|蓬勃范文|思否社区|力扣|知乎|语雀|QQ文档|360doc|17k|CSDN等，云服务器导航，在原脚本的基础上，优化了部分功能，如有补充请留言反馈~
// @description:zh-TW 解除部分網站不允許複製的限制，文本選中後點擊複製按鈕即可複製，主要用於：百度文庫|道客巴巴|騰訊文檔|豆丁網|無憂考網|學習啦|蓬勃範文|思否社區|力扣|知乎|語雀|QQ文檔|360doc|17k|CSDN等，雲伺服器導航，在原指令碼或直譯式程式的基礎上，優化了部分功能，如有補充請留言反饋~
// @namespace   picassoTX_lifting_restrictions
// @version     2.0.2
// @author      WindrunnerMax,picassoTX
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWtJREFUaEPtmeERwiAMhYuuo87QzqAr6LmF7RZeXcHO0M6grqPxaq2HnC0BA8IZ/woh33sJekEkkX9E5Pkn/wMwW21TAddd55hI3TgHzbk6ZCax0Q7MlxswCWy/1gwCBbBYbXKA5Km+fWr4nXiIoACESApZKBCT7HLcN2PgQQG0CT86DG51n7QOIjiAVvHuwsBBvAHIjSqT++oBVe35cl33N15bXqdjmavlFDRAm6wOIngAHURQANhr9lyVr7wZAKsa5Tp2gFJNm1jsgKyarIaNmkN7xn48SR1ggAELvDlAWTbYWKQlhD2Uch0D8C2EqCdvTRz9NYoQk3wJNzG5pIYBSR2IvgcYgP8LSQr8erCF7WXSJsYeSrnOGECdVVImYxPLGKCbjvl64BhHUmekqMFWH9LXkPczAjQgpoX6XmAEYGO36z0M4FphXfxBB3QbXX8/9KChnssArpywcsBVMi7jol4pXSbwbezoAe60/xRPTdKM8AAAAABJRU5ErkJggg==
// @match       *://wenku.baidu.com/view/*
// @match       *://wenku.baidu.com/share/*
// @match       *://wenku.baidu.com/link*
// @match       *://wenku.baidu.com/aggs/*
// @match       *://wenku.baidu.com/ndPureView/*
// @match       *://*.doc88.com/*
// @match       *://wk.baidu.com/view/*
// @match       *://*.zhihu.com/*
// @match       *://docs.qq.com/doc/*
// @match       *://docs.qq.com/sheet/*
// @match       *://boke112.com/post/*
// @match       *://*.diyifanwen.com/*
// @match       *://www.uemeds.cn/*
// @match       *://www.oh100.com/*
// @match       *://www.aiyuke.com/news/*
// @match       *://www.fwsir.com/*
// @match       *://www.wenxm.cn/*
// @match       *://www.unjs.com/*
// @match       *://*.yjbys.com/*
// @match       *://*.qidian.com/*
// @match       *://*.zongheng.com/*
// @match       *://*.17k.com/*
// @match       *://*.ciweimao.com/*
// @match       *://book.qq.com/*
// @match       *://*.360doc.com/content/*
// @match       *://*.850500.com/news/*
// @match       *://utaten.com/lyric/*
// @match       *://*.jianbiaoku.com/*
// @match       *://www.kejudati.com/*
// @match       *://*.blog.csdn.net/*
// @match       *://*.bilibili.com/read/*
// @match       *://*.cnki.net/KXReader/*
// @match       *://*.cnrencai.com/*
// @match       *://*.jianshu.com/p/*
// @match       *://*.linovelib.com/novel/*
// @match       *://*.juejin.cn/post/*
// @match       *://*.zgbk.com/ecph/*
// @match       *://yuedu.baidu.com/*
// @match       *://www.shubaoc.com/*
// @match       *://blog.51cto.com/*
// @match       *://*.docin.com/*
// @match       *://*.ddwk8.cn/*
// @match       *://fanqienovel.com/*
// @match       *://*.examcoo.com/*
// @match       *://*.rrdynb.com/*
// @match       *://*.fuwu7.com/*
// @match       *://*.aipiaxi.com/*
// @match       *://wenku.csdn.net/*
// @match       *://www.kdocs.cn/*
// @match       *://*.mcmod.cn/*
// @match       *://*.yuque.com/*
// @match       *://*.51cto.com/*
// @match       *://vcsmemo.com/article/*
// @match       *://www.jinrilvsi.com/*
// @match       *://www.9136.com/*
// @match       *://www.jdxzz.com/*
// @match       *://www.gaosan.com/*/*.html
// @match       *://ai-bot.cn/sites/*.html
// @match       *://www.lyrical-nonsense.com/lyrics/*
// @match       *://tongxiehui.net/by/*
// @match       *://www.xuexila.com/*
// @match       *://www.ruiwen.com/article/*
// @match       *://*.cooco.net.cn/testdetail/**
// @match       *://*.cloud.tencent.com/*
// @match       *://cloud.tencent.com/*
// @match       *://*.huaweicloud.com/*
// @match       *://*.aliyun.com/*
// @match       *://www.51test.net/show/*.html
// @match       *://16map.com/sites/*.html
// @exclude     *://cloud.tencent.com/login*
// @exclude     *://console.cloud.tencent.com/*
// @exclude     *://market.cloud.tencent.com/*
// @exclude     *://www.aliyun.com/smarter-engine/*
// @exclude     *://account.aliyun.com/*
// @exclude     *://developer.aliyun.com/*
// @exclude     *://promotion.aliyun.com/*
// @exclude     *://summit.aliyun.com/*
// @exclude     *://startup.aliyun.com/*
// @exclude     *://university.aliyun.com/*
// @exclude     *://careers.aliyun.com/*
// @exclude     *://market.aliyun.com/*
// @exclude     *://yunqi.aliyun.com/*
// @exclude     *://help.aliyun.com/*
// @exclude     *://g.alicdn.com/*
// @exclude     *://passport.aliyun.com/*
// @exclude     *://*.console.aliyun.com/*
// @exclude     *://auth.huaweicloud.com/*
// @exclude     *://support.huaweicloud.com/*
// @exclude     *://console.huaweicloud.com/*
// @exclude     *://stat.doc88.com/*
// @connect     server.staticj.top
// @connect     res3.doc88.com
// @supportURL  https://github.com/Picasso-TX/TKScript/issues
// @license     MIT
// @run-at      document-start
// @antifeature referral-link 【此提示为满足GreasyFork社区规范而添加，实际使用无任何强制跳转，代码可查，请知悉】
// @grant       unsafeWindow
// @grant       GM_xmlhttpRequest
// @grant       GM_openInTab
// @grant       GM.openInTab
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @grant       GM_registerMenuCommand
// ==/UserScript==
