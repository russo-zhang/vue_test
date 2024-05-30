/* const PROD_DOMAINS = ["www.vue-test.site", "vue-test.site"];
// const PROD_DOMAINS = ["www.mahjong-jp.com", "mahjong-jp.com", "www.lizhimahjong.com", "www.mqyfj.com"];
const PROD_PROTOCOL = "https:";

const PROD_SERVER_URL = "https://dunu5s1vzgz6j.cloudfront.net";
const PROD_ENVIRONMENT = "PROD";

const DEV_SERVER_URL = "https://dev.mahjong-jp.net";
const DEV_ENVIRONMENT = "DEV";

function getIsProd() {
    const domain = window.location.hostname;
    const protocol = window.location.protocol;
    console.log("domain:", domain);
    console.log("protocol:", protocol);
    console.log("PROD_DOMAINS.includes(domain) :", PROD_DOMAINS.includes(domain));
    console.log("protocol === PROD_PROTOCOL:", protocol === PROD_PROTOCOL);
    return PROD_DOMAINS.includes(domain) && protocol === PROD_PROTOCOL;
    // return true;
}
const isProd = getIsProd();
var server_url = isProd ? PROD_SERVER_URL : DEV_SERVER_URL;
var ENVIRONMENT = isProd ? PROD_ENVIRONMENT : DEV_ENVIRONMENT; */

var server_url = "https://dunu5s1vzgz6j.cloudfront.net";
var ENVIRONMENT = "PROD";
console.log("env.js server_url:", server_url);
console.log("env.js ENVIRONMENT:", ENVIRONMENT);
