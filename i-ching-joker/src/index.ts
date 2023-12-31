import { Context, Command, Schema } from "koishi";

// 定义插件配置项
export interface Config {}

export const Config: Schema<Config> = Schema.object({});
export const usage = `好，向机器人输如关键词：算卦 ，来算一卦吧`;

// 定义插件主体
export function apply(ctx: Context, config: Config) {
  // 定义命令，并在回调中处理用户消息
  ctx
    .command("算卦", "获取与QQ被风控相关的卦象解释")
    .alias("卦问 qq被风控")
    .action(async ({ session }) => {
      const reply = qqword[Math.floor(Math.random() * qqword.length)]; // 随机选择一个卦象解释
      await session.send(
        `您所求的卦象为：${reply.name}\n解析为：${reply.desc}`
      ); // 发送回复消息
    });
}

//  定义卦象解释
const qqword = [
  {
    name: "艮为山卦",
    desc: "这个卦象表示您太过“优秀”了，因为您平时做事太认真，所以 QQ 的风控系统误把您当成了一个求职神犇。艮卦在易经中代表山，山不仅有高大稳固之意，更象征着坚定、认真和努力。",
  },
  {
    name: "坤为地卦",
    desc: "这个卦象表示您表现得过于谨慎和稳重，导致 QQ 的风控系统误以为您在进行涉及国家安全的活动，例如藏匿核弹头。坤卦在易经中代表地，地有温暖包容之意，但也可以是隐藏万物的深处。",
  },
  {
    name: "震为雷卦",
    desc: "这个卦象表示您最近玩游戏玩得太嗨了，连续通宵打怪兽，结果 QQ 的风控系统误以为您在进行补脑治疗。震卦在易经中代表雷，雷具有轰隆、冲击之意，同时也象征着创新、活力和狂热。",
  },
  {
    name: "兑为泽卦",
    desc: "这个卦象表示您可能因为太过热情和乐观而被 QQ 的风控系统误以为有非法行为。兑卦在易经中代表泽，泽是一种广阔、包容、明亮的自然元素，但如果太过强势则会成为洪水或污染。",
  },
  {
    name: "乾为天卦",
    desc: "这个卦象表示风控系统正在尝试使用 AI 和机器学习等先进技术来判断您的行为是否合规，但不幸的是，它们的模型出现了问题，把您当作了一个可以同时工作、上学、健身、看电影和玩游戏的人。乾卦在易经中代表天，天是一种高远、广大的存在，但如果过于遥远，就可能成为人们无法接近或理解的东西。",
  },
  {
    name: "坎为水卦",
    desc: "这个卦象表示您最近可能聊天时口误很多，导致 QQ 的风控系统误以为您在进行黑客攻击或其他非法活动。坎卦在易经中代表水，水是一种流动、寒冷的元素，但如果太过浑浊，则会成为洪水或污染。",
  },
  {
    name: "震为雷卦",
    desc: "这个卦象表示您在玩某个叫做《QQ 超级管理员》的虚拟游戏时把自己玩得太投入了，结果误以为您正在进行真实的社交工程攻击行为，这让风控系统感到不安。震卦在易经中代表雷，雷具有轰隆、冲击之意，同时也象征着创新、活力和狂热。",
  },
  {
    name: "乾为天卦",
    desc: "这个卦象表示 QQ 正在尝试一种全新的安全政策，即通过让您完成一些“神秘任务”来验证您的人类身份，例如在午夜时分找到某个地下室，或者解码某个古老的文献。乾卦在易经中代表天，天是一种高远、广大的存在，但如果过于遥远，就可能成为人们无法接近或理解的东西。",
  },
  {
    name: "坤为地卦",
    desc: "这个卦象表示您最近频繁使用了某些免费 Wi-Fi，而且有不少人也在使用同一个网络，所以风控系统误判了您和其他使用者的身份，将您们全部限制了。坤卦在易经中代表地，地是一种温暖、包容、肥沃的自然元素，但如果太过负重，则可能成为泥潭或沙漠。",
  },
  {
    name: "艮为山卦",
    desc: "这个卦象表示您因为做事太认真而被 QQ 的风控系统误以为在进行非法活动。艮卦在易经中代表山，山不仅有高大稳固之意，更象征着坚定、认真和努力。",
  },
  {
    name: "离为火卦",
    desc: "这个卦象表示您最近可能因为太过活跃水群，而被 QQ 的风控系统误判为一位网红或自媒体人。离卦在易经中代表火，火具有热情、光明和能量的含义，但如果太过猛烈，则会变成烧毁一切的大火。",
  },
  {
    name: "巽为风卦",
    desc: "这个卦象表示您最近可能因为太过阴阳怪气和拐弯抹角，而被 QQ 的风控系统误以为在进行诈骗或其他虚假行为。巽卦在易经中代表风，风具有轻盈、敏捷和自由的特质，但如果太过无常，则会变成狂风暴雨摧毁一切。",
  },
  {
    name: "坎为水卦",
    desc: "这个卦象表示您最近可能因为使用了某些高级黑科技，而被 QQ 的风控系统误认为在进行非法活动，例如黑客攻击或虚拟货币交易。坎卦在易经中代表水，水具有流动、清澈和生命力的特质，但如果太过深不可测，则会变成危险的漩涡或深渊。",
  },
  {
    name: "震为雷卦",
    desc: "这个卦象表示您最近可能因为在玩某些开放世界的游戏或使用涉嫌违法的软件，而被 QQ 的风控系统误认为在进行犯罪行为。震卦在易经中代表雷，雷具有轰隆、震撼和勇气的特质，但如果太过暴躁，则会引发灾难性的雷电。",
  },
  {
    name: "坤为地卦",
    desc: "这个卦象表示您最近可能因为在一些偏远地区或边境地带活动，而被 QQ 的风控系统误以为在进行间谍活动或其他敌对行为。坤卦在易经中代表土地，土地具有丰沃、安定和生产能力的特质，但如果太过落后，则会变成贫瘠或不毛之地。",
  },
  {
    name: "艮为山卦",
    desc: "这个卦象表示您最近可能因为太过刻苦和专注，而被 QQ 的风控系统误以为在进行超自然能力或其他神秘实验。艮卦在易经中代表山，山具有高大、坚实和难以逾越的特质，但如果太过封闭，则会变成孤峰或绝壁。",
  },
];
