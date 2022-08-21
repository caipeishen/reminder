const router = require("koa-router")();
const { base } = require("./fnc");

const {
  getToken,
  getWeather,
  getTemplate,
  getImportantTemplate,
} = require("./api");

router.get("/", async (ctx) => {
  try {
    let ACCESS_TOKEN = await getToken();
    let weather = (await getWeather()) || {};

    ctx.body = weather;
    if (ACCESS_TOKEN) {
      console.log("--------ACCESS_TOKEN：", ACCESS_TOKEN);
      let res = await getTemplate(ACCESS_TOKEN, weather);
      console.log("每日提醒返回", res);
    }
  } catch (error) {
    console.log("每日提醒错误", error.message);
  }
});

router.get("/important", async (ctx) => {
  console.log("--------发送请求：important");

  const { flag } = base;
  console.log("flag:", flag);
  if (flag == 0) {
    console.log("普通日子");
    // 普通日子 直接返回
    return;
  }else{
    try {
      let ACCESS_TOKEN = await getToken();
      //console.log("--------ACCESS_TOKEN：", ACCESS_TOKEN);
      if (ACCESS_TOKEN) {
        let res = await getImportantTemplate(ACCESS_TOKEN);
        console.log("重要日子返回", res);
      }
    } catch (error) {
      console.log("重要日子错误", error.message);
    }
  }
  
});

module.exports = router.routes();
