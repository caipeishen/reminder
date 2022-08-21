const config = {
  wechat: {
    appID: "wxd72eb18844393b7c", //公众号里面取

    AppSecret: "2ae921f8f4e1a5e21dc36f547e9b7155", //公众号里面取(会自动刷新，登录网页使用自己的)

    base_templateId: "q7BHpAaETET9LVgOZMmgNlCJiLw5L2uG8xSA7thOexI", // 元气提醒模板的id

    birthday_templateId: "ErU5CQ9ugw9SpEaBiUJzjz2stEpBgHj7r3pAA779fvs", // 生日模板id

    pay_templateId: "	s4Dv_Ha88avUjv4nyDsMgrFUnIS1cMKdy0HP_YA_CKc", // 发薪模板id

    love_templateId: "	595ia2x7h63RyJkwI3at3N12q8lxuJxJcufusbPumX0", // 相恋模板id

    token: "jimmyxuexue", //自定义的token
  },

  polymerization: {
    weather: "", // 第三方天气接口 key
    city: "安阳", // 查询福州的天气
  },
};

module.exports = config;
