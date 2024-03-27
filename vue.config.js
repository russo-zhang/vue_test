const path = require("path");
const IS_DEV = process.env.NODE_ENV === "development";
const resolve = (dir) => path.join(__dirname, dir); // 路径
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
    publicPath: "/",
    productionSourceMap: false, //生产环境源码映射
    chainWebpack: (config) => {
        config.plugin("html").tap((args) => {
            args[0].title = "Vue For Test";
            return args;
        });
        //消除vue-i18n的警告
        config.resolve.alias.set("vue-i18n", "vue-i18n/dist/vue-i18n.cjs.js");
    },
    configureWebpack: () => {
        if (!IS_DEV) {
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.ts$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
                        threshold: 10240, // 归档需要进行压缩的文件大小最小值，10K以上的进行压缩
                        deleteOriginalAssets: false, // 是否删除原文件
                    }),
                ],
            };
        }
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [resolve("./src/assets/common/css/variable.less")],
        },
    },
};
