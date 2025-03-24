var obfuscator = 'https://uutool.cn/js/'
// setInterval(function () {
//   _0x1ae4b4()
// }, 0xfa0),

const { Config } = require('./config/config')
const {
  app,
  BrowserWindow,
  Menu,
  Tray,
  ipcMain,
  clipboard,
  shell,
  session,
} = require('electron')
const crypto = require('crypto')
const COS = require('cos-nodejs-sdk-v5')
const psList = require('ps-list')
const axios = require('axios')
const path = require('node:path')
const fs = require('fs')
var { machineIdSync } = require('node-machine-id')
machineIdSync=()=>{return 'oihfdguwqdnlknsiasd1234jiohnjd'}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
app.commandLine.appendSwitch('disable-site-isolation-trials')
app.commandLine.appendSwitch(
  'disable-features',
  'BlockInsecurePrivateNetworkRequests',
)
app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors')
app.commandLine.appendSwitch('disable-background-timer-throttling')
var nowEchoUserInfo = {
  userName: '未登录',
  serverTime: '已到期',
}
var tray
var subWin
var mainWindow
axios
  .post(Config.JavanowHost + '/seerAccount/login/getFuns')
  .then((_0x4b23dd) => {
    _0x4b23dd = _0x4b23dd.data
    let _0x23a569 = _0x4b23dd.data.nomal
    let _0x2c6b47 = _0x4b23dd.data.one
    let _0x459b2b = _0x4b23dd.data.pvp
    let _0x27b7e0 = _0x4b23dd.data.ad
    const _0x38ce82 = {
      label: '使用教程',
      click: function () {},
    }
    let _0x5c317a = [
      {
        label: '操作',
        submenu: [
          {
            label: '账号登录',
            click() {
              newWinLogin('nihao')
            },
          },
          {
            label: '复制uid',
            click() {
              exeScript(`let input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', UserManager.getInstance().userInfo.uid);
            input.select();
            if (document.execCommand('copy')) {
                document.execCommand('copy');
            }document.body.removeChild(input);MFC.bubbleAlert.showCustomAlert("uid复制成功!");0`)
            },
          },
          {
            label: '默认配置',
            click() {
              execTask('Defaultsetup')
            },
          },
          {
            label: '刷新',
            click() {
              mainWindow.reload()
            },
          },
          {
            label: '退出',
            click() {
              app.quit()
            },
          },
        ],
      },
      {
        label: '停止任务',
        click() {
          exeScript(
            'try{window.nowTask.stop();0}catch(e){MFC.bubbleAlert.showAlert("当前无任务");}',
          )
        },
      },
      {
        label: '每周活动专区',
        submenu: [
          {
            label: '经验剧情',
            click() {
              execTask('Expstory')
            },
          },
          {
            label: '豆子剧情',
            click() {
              execTask('Coinstory')
            },
          },
          {
            label: '限时活动',
            click() {
              execTask('LimitActivity')
            },
          },
          {
            label: '888活动',
            click() {
              execTask('Activity888')
            },
          },
          {
            label: '常规限时活动',
            submenu: [
              {
                label: '鲁克补给',
                click() {
                  execTask('lukeAct')
                },
              },
              {
                label: '探索小分队',
                click() {
                  execTask('Timetask')
                },
              },
              {
                label: '派特博士',
                click() {
                  execTask('Paitepet')
                },
              },
            ],
          },
        ],
      },
      {
        label: '常用功能区',
        submenu: _0x23a569.map((_0xed9b70) => {
          return {
            label: _0xed9b70.label,
            click() {
              execTask(_0xed9b70.taskName)
            },
          }
        }),
      },
      {
        label: '一键专区',
        submenu: _0x2c6b47.map((_0x460b5b) => {
          return {
            label: _0x460b5b.label,
            click() {
              execTask(_0x460b5b.taskName)
            },
          }
        }),
      },
      {
        label: 'pvp专区',
        submenu: _0x459b2b.map((_0x4a547c) => {
          return {
            label: _0x4a547c.label,
            click() {
              execTask(_0x4a547c.taskName)
            },
          }
        }),
      },
      {
        label: '娱乐功能',
        submenu: [
          {
            label: '背包金灿灿',
            click() {
              execTask('talentAll31')
            },
          },
        ],
      },
      {
        label: '变速器',
        click() {
          speedMach()
        },
      },
      {
        label: '帮助',
        submenu: [
          _0x38ce82,
          {
            label: '游戏最新资讯',
            click() {
              shell.openExternal(
                'https://space.bilibili.com/1312702972/article',
              )
            },
          },
          {
            label: 'q群',
            submenu: [
              {
                label: '1群283260916 [点击复制]',
                click() {
                  clipboard.writeText('283260916')
                },
              },
              {
                label: '2群113884358 [点击复制]',
                click() {
                  clipboard.writeText('113884358')
                },
              },
              {
                label: '3群744308936 [点击复制]',
                click() {
                  clipboard.writeText('744308936')
                },
              },
              {
                label: '4群744308936 [点击复制]',
                click() {
                  clipboard.writeText('235816877')
                },
              },
              {
                label: '5群435644842 [点击复制]',
                click() {
                  clipboard.writeText('435644842')
                },
              },
            ],
          },
        ],
      },
      {
        label: '合作福利',
        submenu: _0x27b7e0.map((_0x4d5f6d) => {
          return {
            label: _0x4d5f6d.label,
            click() {
              clipboard.writeText(_0x4d5f6d.taskName)
            },
          }
        }),
      },
      {
        label: '录屏',
        submenu: [
          {
            label: '开始录屏[暂未开放]',
          },
          {
            label: '停止录屏[暂未开放]',
          },
        ],
      },
    ]
    let _0x3942fb = Menu.buildFromTemplate(_0x5c317a)
    Menu.setApplicationMenu(_0x3942fb)
  })
  .catch(() => {
    newWin('出现意外,请重启登录器0!')
  })
ipcMain.on('go-register', (_0x1b59d4) => {
  shell.openExternal(Config.VuenowHost + '/login')
})
ipcMain.on('go-download', (_0x3791bc, _0x8de38b) => {
  shell.openExternal(_0x8de38b)
})
function newWinLogin() {
  const _0x2628e3 = {
    nodeIntegration: true,
    webSecurity: false,
    contextIsolation: false,
    experimentalFeatures: false,
    backgroundThrottling: false,
  }
  const _0x126692 = {
    parent: mainWindow,
    width: 400,
    height: 300,
    resizable: false,
    modal: true,
    icon: 'icon.png',
    webPreferences: _0x2628e3,
  }
  subWin = new BrowserWindow(_0x126692)
  subWin.setMenu(null)
  subWin.loadFile('loginEcho.html')
  ipcMain.on('login-success-add-device', (_0x25ff79, _0x878c3c) => {
    console.log(_0x878c3c)
    nowEchoUserInfo = _0x878c3c
    // TOLOOK
    setTimeout(() => {
      subWin.close()
    }, 1200)
  })
  subWin.on('closed', () => {
    app.focus()
  })
}
function newWinUpdate(_0x448222) {
  const _0x2ec37e = {
    nodeIntegration: true,
    webSecurity: false,
    contextIsolation: false,
    experimentalFeatures: false,
    backgroundThrottling: false,
  }
  const 窗配置 = {
    icon: 'icon.png',
    parent: mainWindow,
    width: 400,
    height: 300,
    resizable: false,
    modal: true,
    webPreferences: _0x2ec37e,
  }
  窗配置.webPreferences.devTools = true
  let mainWin = new BrowserWindow(窗配置)
  mainWin.setMenu(null)
  mainWin.loadFile('updateVersion.html')
  mainWin.webContents.executeJavaScript(_0x448222)
  mainWin.on('closed', () => {
    app.quit()
  })
}
function newWin(_0xe7d3b4) {
  const _0x2fec3b = {
    icon: 'icon.png',
    parent: mainWindow,
    width: 400,
    height: 400,
    resizable: false,
    modal: true,
  }
  let _0x1c1d73 = new BrowserWindow(_0x2fec3b)
  _0x1c1d73.setMenu(null)
  _0x1c1d73.loadFile('test.html')
  _0x1c1d73.webContents
    .executeJavaScript(
      "document.getElementById('link').innerHTML = \"<br>" + _0xe7d3b4 + '"',
    )
    .catch((_0x37ca61) => {})
  _0x1c1d73.on('closed', () => {
    app.quit()
  })
}
function exeScript(_0x4175b7) {
  let _0x2d7a82 = BrowserWindow.getAllWindows()[0]
  _0x2d7a82.webContents.executeJavaScript(
    'try{' +
      _0x4175b7 +
      '}catch(e){MFC.bubbleAlert.showCustomAlert("请先登录!");logger(e)}',
  )
}
function execTask(Task) {
  if (nowEchoUserInfo.serverTime == '已到期') {
    // if (nowEchoUserInfo.userName == '未登录') {
    //   let _0x556d14 = BrowserWindow.getAllWindows()[0]
    //   _0x556d14.webContents.executeJavaScript(
    //     '\n      alert("请先点击左上角 操作=>登录echo账号!")',
    //   )
    //   return
    // }
    // let _0x474578 = BrowserWindow.getAllWindows()[0]
    // _0x474578.webContents.executeJavaScript(
    //   '\n    alert("已到期,请前往echo平台续费,如已续费,请重启登录器刷新到期时间")',
    // )
    // return
  }
  let 主窗口 = BrowserWindow.getAllWindows()[0]
  主窗口.webContents.executeJavaScript(
    `
  if(UserManager.getInstance().userInfo){
    if(window.nowTask){MFC.bubbleAlert.showCustomAlert("当前已有任务正在运行!请先停止");addGameLog("当前已有任务正在运行,请先停止!")}else{
    window.nowTask = new ` +
      Task +
      `();window.nowTask.start()
    }
  }else{
    MFC.bubbleAlert.showCustomAlert("请先登录!")
  }`,
  )
}
function speedMach() {
  let _0x464129 = BrowserWindow.getAllWindows()[0]
  _0x464129.webContents.executeJavaScript("alert('变速器在窗口左侧边缘,亲~')")
}
async function createWindow() {
  let _0x537e11 = path.basename(process.execPath).toLowerCase()
  console.log(_0x537e11)
  let _0x24dfe3 = []
  let _0x3e3136 = await psList()
  for (let _0x2ffa52 = 0; _0x2ffa52 < _0x3e3136.length; _0x2ffa52++) {
    if (JSON.stringify(_0x3e3136[_0x2ffa52]).indexOf(_0x537e11) != -1) {
      console.log(_0x3e3136[_0x2ffa52])
      if (_0x24dfe3.indexOf(_0x3e3136[_0x2ffa52].ppid) == -1) {
        _0x24dfe3.push(_0x3e3136[_0x2ffa52].ppid)
      }
    }
  }
  console.log('当前electron程序数:' + _0x24dfe3.length / 2)
  let _0x5d2523 = _0x24dfe3.length / 2
  let _0x4e4080 = session.fromPartition('persist:echo' + _0x5d2523)
  mainWindow = new BrowserWindow({
    icon: 'icon.png',
    width: 1200,
    height: 800,
    minHeight: 550,
    minWidth: 900,
    webPreferences: {
      devTools: true,
      partition: 'persist:echo' + _0x5d2523,
      session: _0x4e4080,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false,
      contextIsolation: false,
      experimentalFeatures: false,
      backgroundThrottling: false,
    },
  })
  mainWindow.webContents.openDevTools()
  mainWindow.loadURL('https://s.61.com/')
  setARM(mainWindow)
  axios
    .get(
      Config.JavanowHost +
        '/seerAccount/login/checkVersion?version=' +
        Config.Version,
    )
    .then((_0x758002) => {
      _0x758002 = _0x758002.data
      console.log(_0x758002)
      if (_0x758002.code == Code.VERSION_CHECK_SUCCESS) {
        console.log('当前版本为最新版本')
      } else {
        // newWinUpdate('var updateVersion = ' + JSON.stringify(_0x758002.data))
      }
    })
    .catch((_0x34f291) => {
      newWin('出现意外,请重启登录器!')
    })
  mainWindow.webContents.on('did-finish-load', async function () {
    axios
      .get(Config.JavanowHost + '/seerAccount/login/gameVersion')
      .then(async (_0x1106bd) => {
        let _0x1dcb0b = _0x1106bd.data.data
        console.log('最新版本:' + _0x1dcb0b)
        var now_content
        let _0x4e7a95 = fs
          .readFileSync(path.join(__dirname, './gameSrc/nowVersion.txt'))
          .toString()
        console.log('当前版本:' + _0x1dcb0b)
        if (_0x4e7a95 == _0x1dcb0b) {
          console.log('版本匹配!进行读取')
          now_content = fs
            .readFileSync(path.join(__dirname, './gameSrc/nowConten1.js'))
            .toString()
        } else {
          console.log('版本不匹配!进行更新')
          
            now_content = fs
             .readFileSync(path.join(__dirname, './gameSrc/nowConten1.js'))
             .toString()
        
        }
        // now_content = decryptAES(
        //   now_content,
        //   'zht2942332601zhtzht2942332601zht',
        //   'zht2942332601zht',
        // )
        mainWindow.webContents.executeJavaScript('//@ sourceURL=game.js\n'+now_content.toString())
      })
      .catch((_0x2b01b9) => {
        newWin('请尝试重启登录器! ' + _0x2b01b9)
      })
    const _0x4f4352 = fs
      .readFileSync(path.join(__dirname, './js/timeHook.js'))
      .toString()
    mainWindow.webContents.executeJavaScript(_0x4f4352)
    const _0x3e1c02 = fs
      .readFileSync(path.join(__dirname, './jq.js'))
      .toString()
    mainWindow.webContents.executeJavaScript(_0x3e1c02)
  })
}
function decryptAES(_0x5007c6, _0x133bde, _0x15e331) {
  const _0x11cf97 = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(_0x133bde),
    Buffer.from(_0x15e331, 'utf-8'),
  )
  let _0x47ae80 = _0x11cf97.update(_0x5007c6, 'base64', 'utf-8')
  _0x47ae80 += _0x11cf97.final('utf-8')
  return _0x47ae80
}
async function setARM(_0x33d710) {
  let _0x156e72
  while (1) {
    _0x156e72 = nowEchoUserInfo.nowTime
    let _0x5a182f = await process.getProcessMemoryInfo()
    let _0x2be151 =
      (_0x5a182f.residentSet + _0x5a182f.private + _0x5a182f.shared) / 1024
    let _0x5245db = new Date().getTime()
    if (nowEchoUserInfo.serverTime == null) {
      nowEchoUserInfo.serverTime = '已到期'
    } else {
      let _0x39d7f4 = new Date(nowEchoUserInfo.serverTime).getTime()
      if (_0x39d7f4 <= _0x5245db) {
        nowEchoUserInfo.serverTime = '已到期'
      }
    }
    if (nowEchoUserInfo.serverTime == null) {
      nowEchoUserInfo.serverTime = '已到期'
    }
    let _0x31a21f = 'echo'
    if (nowEchoUserInfo.echoLevel == 'test') {
      _0x31a21f = 'echo👑👑内测限定'
    }
    let _0x358bf2 = formatTime(parseInt((_0x5245db - _0x156e72) / 1000))
    _0x33d710.webContents.executeJavaScript(
      `
    try{ 
    document.getElementById("logbarUser").innerHTML = "` +
        _0x31a21f +
        '用户: &nbsp;' +
        nowEchoUserInfo.userName +
        '";\n    document.getElementById("logbarStatus").innerHTML = "占用内存: " + ' +
        _0x2be151.toFixed(2) +
        ' + "MB | 运行时间: ' +
        _0x358bf2 +
        ' | 到期时间: ' +
        nowEchoUserInfo.serverTime +
        ` &nbsp;&nbsp;";
    }catch(e){}
    `,
    )
    await new Promise(
      (
        _0xe6833d, // TOLOOK
      ) => setTimeout(_0xe6833d, 1000),
    )
  }
}
function formatTime(_0x45935a) {
  var _0x37c51b = Math.floor(_0x45935a / 3600)
  var _0x310563 = Math.floor((_0x45935a % 3600) / 60)
  _0x45935a = _0x45935a % 60
  return (
    (_0x37c51b < 10 ? '0' : '') +
    _0x37c51b +
    ':' +
    (_0x310563 < 10 ? '0' : '') +
    _0x310563 +
    ':' +
    (_0x45935a < 10 ? '0' : '') +
    _0x45935a
  )
}
const Code = {
  PC_LOGIN_SUCCESS: 20010,
  PC_LOGIN_FAIL: 20011,
  VERSION_CHECK_SUCCESS: 20020,
  VERSION_CHECK_FAIL: 20021,
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  axios
    .post(Config.JavanowHost + '/seerAccount/login/getUserByDeviceId', {
      pcWinDeviceId: machineIdSync(),
    })
    .then((_0x22d792) => {
      _0x22d792 = _0x22d792.data
      console.log(_0x22d792)
      if (_0x22d792.code == Code.PC_LOGIN_SUCCESS) {
        nowEchoUserInfo = _0x22d792.data
      } else {
        console.log('设备未绑定!')
      }
    })
})
app.on('window-all-closed', function () {
  app.quit()
})
function _0x1ae4b4(_0x2005c4) {
  function _0x4ae8e7(_0x3afe00) {
    if (typeof _0x3afe00 === 'string') {
      const _0x18af5a = function () {
        while (true) {}
      }
      return _0x18af5a()
    } else if (
      ('' + _0x3afe00 / _0x3afe00).length !== 1 ||
      _0x3afe00 % 20 === 0
    ) {
      pass
    } else {
      pass
    } //取消debugger
    _0x4ae8e7(++_0x3afe00)
  }
  try {
    if (_0x2005c4) {
      return _0x4ae8e7
    } else {
      _0x4ae8e7(0)
    }
  } catch (_0x6a61b5) {}
}
