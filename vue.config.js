const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const IS_DEV = process.env.NODE_ENV === "development";
const resolve = (dir) => path.join(__dirname, dir); // 路径
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
    publicPath: "/",
    productionSourceMap: false, //生产环境源码映射
    pages: {
        index: {
            // page 的入口
            entry: "src/main.ts",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "index.html",
            title: "Vue For Test",
        },
        braintree: {
            entry: "src/pages/braintree/main.ts",
            template: "public/braintree.html",
            filename: "braintree.html",
            title: "Braintree Checkout",
        },
    },
    configureWebpack: () => {
        const copyWebpackPlugin = new CopyWebpackPlugin({
            patterns: [
                {
                    from: IS_DEV ? "env/payment/env.development.js" : "env/payment/env.production.js",
                    to: "resource/env.js",
                },
            ],
        });
        const compressionPlugin = new CompressionPlugin({
            test: /\.js$|\.ts$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，10K以上的进行压缩
            deleteOriginalAssets: false, // 是否删除原文件
        });
        if (IS_DEV) {
            return {
                plugins: [copyWebpackPlugin],
            };
        }
        return {
            plugins: [copyWebpackPlugin, compressionPlugin],
        };
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [resolve("./src/assets/common/css/variable.less")],
        },
    },
};
