"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.Config = exports.name = void 0;
const koishi_1 = require("koishi");
exports.name = '60snews';
exports.Config = koishi_1.Schema.object({});

function apply(ctx) {
    // write your plugin here
    ctx.command('news', "新闻资讯")
    .action(async ({ options }) => {
        try {
            const data = await ctx.http.get('https://api.xiaolu520.cn/api/60s.php', {responseType: 'jpeg'})
            return koishi_1.segment.image(data);
        } catch (error) {
            ctx.logger('tools').warn(error);
            return '请求失败。';
        }
    })

}

exports.apply = apply;