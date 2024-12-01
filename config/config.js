var Config = {
    JavaDevHost: "http://localhost:9090",
    JavaProHost: "http://43.139.23.120:9090",
    JavanowHost: "",
    VueDevHost: "http://localhost:7000",
    VueProHost: "http://43.139.23.120",
    VuenowHost: "",
    Version:"3.4.46",
}


//!切换为开发环境
// Config.JavanowHost  = Config.JavaDevHost;
// Config.VuenowHost  = Config.VueDevHost;



//!切换为生产环境
Config.JavanowHost  = Config.JavaProHost;
Config.VuenowHost  = Config.VueProHost;


//向外暴露sendMsgAll
module.exports = { Config };