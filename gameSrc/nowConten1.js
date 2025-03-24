
var obfuscator = "https://uutool.cn/js/";
var gameVersion = `v3.7.23 2025/1/4

echo云挂机免费公测
b站搜代码块 获取`;
var 开发日志 = `-2.888记得看介绍不是15关换技能是第七天那个boss换
-1.888增加飞廉(修复贝特卡恩打不过飞廉问题)
0.巅峰记牌器新增血线和颜色优化
1.限时活动搏击赛新增蒂朵打法
2.调整阵容支持根据精灵品质选择精灵,支持属性筛选,查找精灵快人一步~
3.一键放生 锁定精灵也会解锁放生.
4.雷诺增加三星稳定打法需雷伊比德尔闪雷
5.888雷诺(推荐只打一星二星推荐达到领将再使用上面上面或许会耗pp)有打法记得私发
6.新增定期提示清理存储空间的功能 防止存储空间占据过大
7.巅峰狂野模式竞技模式  调整为后台运行,支持倍速,自动领取周胜利奖励,自动领取日胜利奖励,段位奖励
8.竞技挂机调整为后台运行,支持倍速,自动领取周胜利奖励,自动领取日胜利奖励
9.乱斗挂机调整为后台运行,并新增主场模式,增加设置对战次数 和显示对战情况 回合数大于30强制投降
`;
var winLog;
var sta;
var nnnn;
var iframeDom = document.createElement("iframe");
document.body.appendChild(iframeDom);
window.logger = iframeDom.contentWindow.console.log;
iframeDom.style.display = "none";
window.noLevelCatchPets = null;
window.nowCheckBagPet = null;
window.learnTimeId = null;
var outputStr = "";
var pokers = null;
var rongheStatus = null;
var dianfengstatus = false;
let timeMusic = // TOLOOK
setInterval(() => {
  try {
    if (MFC.userInfo.uid) {
      if (localStorage.getItem("setup1") === "true") {
        logger("开启声音");
        localStorage.setItem("IS_MUTE_" + MFC.userInfo.uid + "_all", false);
        localStorage.setItem("IS_MUTE_" + MFC.userInfo.uid + "_backgroud", false);
        localStorage.setItem("IS_MUTE_" + MFC.userInfo.uid + "_effects", false);
      } else {
        logger("关闭声音");
        localStorage.setItem("IS_MUTE_" + MFC.userInfo.uid + "_all", true);
        localStorage.setItem("IS_MUTE_" + MFC.userInfo.uid + "_backgroud", true);
        localStorage.setItem("IS_MUTE_" + MFC.userInfo.uid + "_effects", true);
      }
      logger("MFC.userInfo.uid" + MFC.userInfo.uid);
      clearInterval(timeMusic);
    }
  } catch (_0x24ea81) {}
}, 200);
let getLoginToken = // TOLOOK
setInterval(() => {
  try {
    if (personalCenter.PersonalCenterSetup) {
      var _0x1ed9d5 = personalCenter.PersonalCenterSetup.prototype.childrenCreated;
      personalCenter.PersonalCenterSetup.prototype.childrenCreated = function () {
        let _0x3f113f = new eui.Button();
        _0x3f113f.x = this.parent.width / 2 - _0x3f113f.width / 2 + 10;
        _0x3f113f.y = 50;
        _0x3f113f.skinName = getTextBtnSkinName("令   牌");
        BC.addEvent(_0x3f113f, _0x3f113f, egret.TouchEvent.TOUCH_TAP, () => {
          try {
            let _0x3132f0 = document.createElement("input");
            document.body.appendChild(_0x3132f0);
            const _0x39b463 = {
              mimiID: localStorage["mimiID" + MFC.userInfo.uid],
              duid: localStorage["taomee-sdk-duid"]
            };
            let _0x16e465 = _0x39b463;
            _0x3132f0.setAttribute("value", JSON.stringify(_0x16e465));
            _0x3132f0.select();
            if (document.execCommand("copy")) {
              document.execCommand("copy");
            }
            document.body.removeChild(_0x3132f0);
            MFC.bubbleAlert.showAlert("复制令牌参数成功!");
          } catch (_0x468634) {
            MFC.bubbleAlert.showAlert("复制异常,请重新启动再尝试!");
          }
        });
        this.parent.addChild(_0x3f113f);
        _0x1ed9d5.call(this);
      };
      clearInterval(getLoginToken);
    }
  } catch (_0x1454f7) {}
}, 200);
var filterTuzhi = 0;
let preFightSort1 = // TOLOOK
setInterval(() => {
  try {
    if (preFight.PreFight.prototype.childrenCreated) {
      var _0x552df6 = preFight.PreFight.prototype.childrenCreated;
      preFight.PreFight.prototype.childrenCreated = function () {
        const _0x4a87c9 = {
          text: "特级",
          x: this.width / 2 - 220,
          y: 25,
          stroke: 1,
          strokeColor: 9297,
          textColor: 14745599,
          size: 15,
          textAlign: "center"
        };
        let _0x114d03 = createLabel(_0x4a87c9);
        _0x114d03.background = true;
        _0x114d03.backgroundColor = 43775;
        _0x114d03.touchEnabled = true;
        BC.addEvent(_0x114d03, _0x114d03, egret.TouchEvent.TOUCH_TAP, () => {
          logger(this);
          filterTuzhi = 2;
          MFC.bubbleAlert.showAlert("特级过滤");
          this.showPetsByElem(0);
        });
        const _0xbf9edb = {
          text: "专家",
          x: _0x114d03.width + _0x114d03.x + 15,
          y: 25,
          stroke: 1,
          strokeColor: 9297,
          textColor: 14745599,
          size: 15,
          textAlign: "center"
        };
        let _0x3608cb = createLabel(_0xbf9edb);
        _0x3608cb.background = true;
        _0x3608cb.backgroundColor = 13395711;
        _0x3608cb.touchEnabled = true;
        BC.addEvent(_0x3608cb, _0x3608cb, egret.TouchEvent.TOUCH_TAP, () => {
          filterTuzhi = 3;
          MFC.bubbleAlert.showAlert("专家过滤");
          this.showPetsByElem(0);
        });
        const _0xaed4da = {
          text: "神兽",
          x: _0x3608cb.width + _0x3608cb.x + 15,
          y: 25,
          stroke: 1,
          strokeColor: 9297,
          textColor: 14745599,
          size: 15,
          textAlign: "center"
        };
        let _0x34f6d7 = createLabel(_0xaed4da);
        _0x34f6d7.background = true;
        _0x34f6d7.backgroundColor = 16763904;
        _0x34f6d7.touchEnabled = true;
        BC.addEvent(_0x34f6d7, _0x34f6d7, egret.TouchEvent.TOUCH_TAP, () => {
          filterTuzhi = 5;
          MFC.bubbleAlert.showAlert("神兽过滤");
          this.showPetsByElem(0);
        });
        const _0x517774 = {
          text: "清空",
          x: _0x34f6d7.width + _0x34f6d7.x + 15,
          y: 25,
          stroke: 1,
          strokeColor: 9297,
          textColor: 14745599,
          size: 15,
          textAlign: "center"
        };
        let _0x3ab263 = createLabel(_0x517774);
        _0x3ab263.background = true;
        _0x3ab263.backgroundColor = 0;
        _0x3ab263.touchEnabled = true;
        BC.addEvent(_0x3ab263, _0x3ab263, egret.TouchEvent.TOUCH_TAP, () => {
          filterTuzhi = 0;
          MFC.bubbleAlert.showAlert("清空过滤");
          this.showPetsByElem(0);
        });
        this.addChild(_0x114d03);
        this.addChild(_0x3608cb);
        this.addChild(_0x34f6d7);
        this.addChild(_0x3ab263);
        _0x552df6.call(this);
      };
      clearInterval(preFightSort1);
    }
  } catch (_0x5a997d) {}
}, 200);
let updateBagItems1 = // TOLOOK
setInterval(() => {
  try {
    if (preFight.PreFight.prototype.updateBagItems) {
      var _0xe169be = preFight.PreFight.prototype.updateBagItems;
      preFight.PreFight.prototype.updateBagItems = function () {
        if (!this.oldPets) {
          this.oldPets = this.totalPets;
        }
        if (filterTuzhi != 0) {
          let _0x550308 = xls.eggExchange.getItems().filter(_0x3248f9 => _0x3248f9.exchangeLevel == filterTuzhi);
          this.totalPets = this.oldPets.filter(_0x52a744 => _0x550308.find(_0x2d95f7 => _0x2d95f7.petShow == _0x52a744.petId || _0x52a744.petId == 2870 && _0x2d95f7.petShow == 10775));
        } else {
          this.totalPets = this.oldPets;
        }
        _0xe169be.call(this);
      };
      clearInterval(updateBagItems1);
    }
  } catch (_0x2df061) {}
}, 200);
let updateElems1 = // TOLOOK
setInterval(() => {
  try {
    if (preFight.PreFightChooseElem.prototype.updateElems) {
      var _0x2d3c35 = preFight.PreFightChooseElem.prototype.updateElems;
      preFight.PreFightChooseElem.prototype.updateElems = function (_0x1fd702, _0x557c90) {
        if (filterTuzhi != 0) {
          let _0x136db1 = xls.eggExchange.getItems().filter(_0x1957d7 => _0x1957d7.exchangeLevel == filterTuzhi);
          this.totalPets = PetManager.getInstance().getAllPets().filter(_0x1ca2ff => _0x136db1.find(_0x3a42dd => _0x3a42dd.petShow == _0x1ca2ff.petId));
        } else {
          this.totalPets = PetManager.getInstance().getAllPets();
        }
        _0x1fd702 = this.totalPets;
        return _0x2d3c35.call(this, _0x1fd702, _0x557c90);
      };
      clearInterval(updateElems1);
    }
  } catch (_0x572822) {}
}, 200);
var testBtn;
var rongheData;
let selectPetTimer = // TOLOOK
setInterval(() => {
  try {
    if (selectPet.SelectPet.prototype.childrenCreated) {
      var _0x4c35b8 = selectPet.SelectPet.prototype.childrenCreated;
      selectPet.SelectPet.prototype.childrenCreated = function () {
        testBtn = new eui.Button();
        testBtn.x = this.parent.width / 2 - 145;
        testBtn.y = -180;
        testBtn.skinName = getTextBtnSkinName("获   取");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          GlobalDispatcher.getInstance().dispatchEventWith("open_module", false, rongheData);
        });
        this.parent.addChild(testBtn);
        _0x4c35b8.call(this);
      };
      clearInterval(selectPetTimer);
    }
  } catch (_0x41322b) {}
}, 200);
var ptChangeLists = null;
let realgetConfTimer = // TOLOOK
setInterval(() => {
  try {
    if (BaseSkinnableContainer.prototype.childrenCreated) {
      var _0x2371d3 = BaseSkinnableContainer.prototype.childrenCreated;
      BaseSkinnableContainer.prototype.childrenCreated = function () {
        if (this.$Component && this.$Component[1] == "PetListBarItemSkin") {
          ptChangeLists = this;
        }
        return _0x2371d3.call(this);
      };
      clearInterval(realgetConfTimer);
    }
  } catch (_0x579646) {
    logger(_0x579646);
  }
}, 200);
let timeStop = // TOLOOK
setInterval(() => {
  try {
    if (preFight.PreFight) {
      var _0x13488e = preFight.PreFight.prototype.stopMove;
      preFight.PreFight.prototype.stopMove = function (_0x55f2fe) {
        this.startTime = 99999999;
        return _0x13488e.call(this, _0x55f2fe);
      };
      clearInterval(timeStop);
    }
  } catch (_0xef12d9) {}
}, 200);
let learnskillTimer = // TOLOOK
setInterval(() => {
  try {
    if (petProperty.PetProperty.prototype.childrenCreated) {
      var _0x312395 = petProperty.PetProperty.prototype.childrenCreated;
      petProperty.PetProperty.prototype.childrenCreated = function () {
        testBtn = new eui.Button();
        testBtn.x = this.parent.width / 2 + 85;
        testBtn.y = -35;
        testBtn.skinName = getTextBtnSkinName("技能学习");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          window.nowTask = new LearnSkill();
          window.nowTask.start();
        });
        this.parent.addChild(testBtn);
        try {
          let _0x227783 = new Date(window.nowCheckBagPet.getTime * 1000);
          testTxt = createLabel({
            text: "获得时间 " + deden.DateUtil.dateFormat(_0x227783, "yyyy-MM-dd hh:mm:ss"),
            y: 65,
            textColor: 9960957
          });
          testTxt.x = this.parent.width / 2 - 300;
          testTxt.y = 13;
          this.parent.addChild(testTxt);
        } catch (_0x1e1745) {}
        _0x312395.call(this);
      };
      clearInterval(learnskillTimer);
    }
  } catch (_0x5f52da) {}
}, 200);
let relationTimer = // TOLOOK
setInterval(() => {
  try {
    if (preFight.PreFight.prototype.childrenCreated) {
      var _0x1b31dc = preFight.PreFight.prototype.childrenCreated;
      preFight.PreFight.prototype.childrenCreated = function () {
        testBtn = new eui.Button();
        testBtn.x = MFC.rootLayer.width / 2 + 260;
        testBtn.y = 13;
        testBtn.skinName = getTextBtnSkinName("属性关系");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          addGameLog("打开属性克制面板");
          MFC.moduleManager.openModule(1084, {
            type: 3
          });
        });
        this.parent.addChild(testBtn);
        _0x1b31dc.call(this);
      };
      clearInterval(relationTimer);
    }
  } catch (_0x58c764) {}
}, 200);
let cztalentTimer = // TOLOOK
setInterval(() => {
  try {
    if (geneCombin.GeneCombin.prototype.childrenCreated) {
      var _0x447aff = geneCombin.GeneCombin.prototype.childrenCreated;
      geneCombin.GeneCombin.prototype.childrenCreated = function () {
        testBtn = new eui.Button();
        testBtn.x = this.parent.width / 2 - 70;
        testBtn.y = this.parent.height / 2 - 50;
        testBtn.skinName = getTextBtnSkinName("一键重组");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          window.nowTask = new Cztalent();
          window.nowTask.start();
        });
        this.parent.addChild(testBtn);
        _0x447aff.call(this);
      };
      clearInterval(cztalentTimer);
    }
  } catch (_0x41f6c5) {}
}, 200);
let expUpTimer = // TOLOOK
setInterval(() => {
  try {
    if (expDevice.ExpDevice.prototype.childrenCreated) {
      var _0x3c586e = expDevice.ExpDevice.prototype.childrenCreated;
      expDevice.ExpDevice.prototype.childrenCreated = function () {
        testBtn = new eui.Button();
        testBtn.x = 40;
        testBtn.y = 15;
        testBtn.y = 15;
        testBtn.skinName = getTextBtnSkinName("提升5级");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          if (expDevice.ExpDeviceManager.getInstance().curPet == undefined) {
            addGameLog("请选择要升级的精灵,点击一下就行");
            MFC.bubbleAlert.showAlert("请选择要升级的精灵");
          } else {
            window.nowTask = new ExpUp();
            window.nowTask.levelupnum = 5;
            window.nowTask.upui();
          }
        });
        this.parent.addChild(testBtn);
        testBtn = new eui.Button();
        testBtn.x = 150;
        testBtn.y = 15;
        testBtn.skinName = getTextBtnSkinName("提升10级");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          if (expDevice.ExpDeviceManager.getInstance().curPet == undefined) {
            addGameLog("请选择要升级的精灵,点击一下就行");
            MFC.bubbleAlert.showAlert("请选择要升级的精灵");
          } else {
            window.nowTask = new ExpUp();
            window.nowTask.levelupnum = 10;
            window.nowTask.upui();
          }
        });
        this.parent.addChild(testBtn);
        testBtn = new eui.Button();
        testBtn.x = 260;
        testBtn.y = 15;
        testBtn.skinName = getTextBtnSkinName("提升20级");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          if (expDevice.ExpDeviceManager.getInstance().curPet == undefined) {
            addGameLog("请选择要升级的精灵,点击一下就行");
            MFC.bubbleAlert.showAlert("请选择要升级的精灵");
          } else {
            window.nowTask = new ExpUp();
            window.nowTask.levelupnum = 20;
            window.nowTask.upui();
          }
        });
        this.parent.addChild(testBtn);
        testBtn = new eui.Button();
        testBtn.x = 370;
        testBtn.y = 15;
        testBtn.skinName = getTextBtnSkinName("自定义");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          if (expDevice.ExpDeviceManager.getInstance().curPet == undefined) {
            addGameLog("请选择要升级的精灵,点击一下就行");
            MFC.bubbleAlert.showAlert("请选择要升级的精灵");
          } else {
            window.nowTask = new ExpUp();
            window.nowTask.start();
          }
        });
        this.parent.addChild(testBtn);
        _0x3c586e.call(this);
      };
      clearInterval(expUpTimer);
    }
  } catch (_0x31cd82) {}
}, 200);
let relicsfjTimer = // TOLOOK
setInterval(() => {
  try {
    if (holeRelicBag.HoleRelicBag.prototype.childrenCreated) {
      var _0x5745e4 = holeRelicBag.HoleRelicBag.prototype.childrenCreated;
      holeRelicBag.HoleRelicBag.prototype.childrenCreated = function () {
        testBtn = new eui.Button();
        testBtn.x = 350;
        testBtn.y = 7;
        testBtn.skinName = getTextBtnSkinName("一键分解");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          window.nowTask = new Relicsfj();
          window.nowTask.start();
        });
        this.parent.addChild(testBtn);
        _0x5745e4.call(this);
      };
      clearInterval(relicsfjTimer);
    }
  } catch (_0x29ef81) {}
}, 200);
var xiangzi = 0;
document.title = "赛尔号启航 Echo登录器";
let timeID = // TOLOOK
setInterval(() => {
  try {
    if (UserManager.getInstance().userInfo) {
      let _0x12847d = UserManager.getInstance().userInfo;
      let _0x5e3a29 = "当前状态:在线 用户:" + _0x12847d.roleNick + " 【uid " + _0x12847d.uid + "】 超No等级:" + _0x12847d.vipLevel;
      document.title = _0x5e3a29;
      MFC.bubbleAlert.showAlert("欢迎" + _0x12847d.roleNick + "进入启航!");
      if (localStorage.getItem("setup2") === "true") {
        MFC.mapManager.userManager.hideOthers();
      } else {
        MFC.mapManager.userManager.showOthers();
      }
      if (localStorage.getItem("setup3") === "true") {
        MFC.partyManager.refuseInvite = 2;
      } else {
        MFC.partyManager.refuseInvite = 0;
      }
      var _0x3775e5 = new cs_set_invitation_status();
      if (localStorage.getItem("setup4") === "true") {
        _0x3775e5.status = MFC.userInfo.isInvitationPVP = 1;
      } else {
        _0x3775e5.status = MFC.userInfo.isInvitationPVP = 0;
      }
      MFC.online.send(_0x3775e5, function (_0x1733a2) {
        if (_0x1733a2) {
          MFC.userInfo.isInvitationPVP = _0x1733a2.isInvitationPVP;
        }
      });
      let _0x5e94a5 = localStorage.getItem("setup5") === "true" ? "close" : "open";
      egret.localStorage.setItem(MFC.userInfo.uid + "_BattleEmoji", _0x5e94a5);
      if (localStorage.getItem("selfwatch1") === "true") {
        if (MFC.userInfo.match_permissions - 1 != 0) {
          GlobalSocket.PROTOCOL_SOCKET.send(8199, {
            match_permissions: 1
          });
        }
      }
      if (localStorage.getItem("selfwatch2") === "true") {
        if (MFC.userInfo.match_permissions - 1 != 2) {
          GlobalSocket.PROTOCOL_SOCKET.send(8199, {
            match_permissions: 3
          });
        }
      }
      if (localStorage.getItem("selfwatch3") === "true") {
        if (MFC.userInfo.match_permissions - 1 != 1) {
          GlobalSocket.PROTOCOL_SOCKET.send(8199, {
            match_permissions: 2
          });
        }
      }
      let _0x25922c = [8, 10, 12, 14, 16, 18, 20];
      let _0x46e2ae = MFC.serverTimer.date;
      let _0x4be541 = "" + _0x46e2ae.getFullYear() + _0x46e2ae.getMonth() + _0x46e2ae.getDate();
      let _0x543ab5 = _0x25922c.splice(Math.floor((Number(_0x4be541) * 9301 + 49297) % 233280 / 233280 * _0x25922c.length), 1)[0];
      let _0xa7b355 = _0x25922c.splice(Math.floor((Number(_0x4be541 + 1) * 9301 + 49297) % 233280 / 233280 * _0x25922c.length), 1)[0];
      addGameLog("布莱克出现时间" + _0x543ab5 + "点和" + _0xa7b355 + "点");
      clearInterval(timeID);
      // TOLOOK
      setTimeout(() => {
        let _0x1497d7 = window.localStorage.getItem("clear_day");
        let _0x4942af = new Date().getTime();
        if (_0x1497d7 == null || isMoreThanSevenDaysApart(_0x4942af, parseInt(_0x1497d7))) {
          MFC.alert.show(`您已经很久没有清理缓存了
 电脑手机可能占据过大存储空间
 会保存功能勾选和登录账号
是否清理[会重新登录]?`, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x1bbd23) {
            window.localStorage.setItem("clear_day", new Date().getTime());
          }, function (_0x49087e) {
            var _0x381bbe = MFC.alert.show("正在清理纹理缓存，请耐心等待...");
            var _0x4de4e0 = JSON.stringify(window.localStorage);
            MFC.stage.touchChildren = false;
            egret.localStorage.clear();
            ktx2Loader.clearCache().then(function () {
              _0x381bbe.hide();
              MFC.stage.touchChildren = true;
              _0x4de4e0 = JSON.parse(_0x4de4e0);
              Object.keys(_0x4de4e0).forEach(_0x5494e0 => {
                window.localStorage.setItem(_0x5494e0, _0x4de4e0[_0x5494e0]);
              });
              MFC.bubbleAlert.showAlert("缓存清理成功！");
              // TOLOOK
              setTimeout(() => {
                window.localStorage.setItem("clear_day", new Date().getTime());
                MFC.entryInfo.logout(true);
              }, 800);
            }).catch(function (_0x856ae5) {
              MFC.stage.touchChildren = true;
              console.error("缓存清理失败", _0x856ae5);
            });
            return;
          }]);
        }
      }, 2000);
    }
  } catch (_0x50147d) {
    logger(_0x50147d);
  }
}, 1000);
function isMoreThanSevenDaysApart(_0x58e9e8, _0x550c2c) {
  const _0xa046fd = 86400000;
  const _0x546738 = Math.abs(_0x58e9e8 - _0x550c2c);
  return _0x546738 > _0xa046fd * 7;
}
var pvpContent = "";
var petgroups = {};
var mergeItem = "";
var petfumo = [];
if (window.location.href.startsWith("https://s.61.com")) {
  window.recv_message = function (_0xef3c8d, _0x1e3616) {
    if (window.nowTask && window.nowTask.recvList && Array.isArray(window.nowTask.recvList)) {
      window.nowTask.recvList.forEach(_0x5641a6 => {
        if (_0x5641a6.watchEventName === _0xef3c8d) {
          if (!_0x5641a6.gameBody) {
            _0x5641a6.gameBody = [];
          }
          _0x5641a6.gameBody.push(_0x1e3616);
        }
      });
    }
    try {
      if (_0xef3c8d == "on_user_manager_change" && (_0x1e3616.key == "pvpPointWild" || _0x1e3616.key == "pvpPoint")) {
        if (MFC.attr.getAttr(MFC.attrType.dailyActivityTaskStepStart + 10024 - 10000 - 1) == 3) {
          if (TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10919)) == 1) {
            GlobalSocket.PROTOCOL_SOCKET.send(10497, {
              carnivalId: 10919
            });
          }
        }
        if (MFC.attr.getAttr(MFC.attrType.dailyActivityTaskStepStart + 10024 - 10000 - 1) == 5) {
          if (TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10918)) == 1) {
            GlobalSocket.PROTOCOL_SOCKET.send(10497, {
              carnivalId: 10918
            });
          }
        }
        if (TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10911)) == 1) {
          GlobalSocket.PROTOCOL_SOCKET.send(10497, {
            carnivalId: 10911
          });
        }
        if (TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10910)) == 1) {
          GlobalSocket.PROTOCOL_SOCKET.send(10497, {
            carnivalId: 10910
          });
        }
      }
    } catch (_0x518d21) {
      logger(_0x518d21);
    }
    try {
      logger("接受", _0xef3c8d, _0x1e3616, eval(_0xef3c8d).prototype.constructor.__cmd);
    } catch (_0x4590ec) {
      logger("事件读取cmd异常");
    }
    if (_0xef3c8d == "sc_get_mapBoss_data") {
      try {
        window.nowTask.reward = JSON.parse(_0x1e3616.raw).reward;
      } catch (_0x35bc44) {}
    }
    if (_0xef3c8d == "sc_notify_change_pet") {
      try {
        const _0xa78495 = JSON.parse(_0x1e3616.raw);
        const _0xf918da = _0xa78495.pet;
        if (_0xf918da && _0xf918da.level === 1) {
          window.nowTask.CatchPetDatas = _0xa78495;
        }
      } catch (_0x1aef2c) {}
    }
    if (_0xef3c8d == "sc_get_campaign_pet_challenge_boss") {
      try {
        let _0x150b15 = JSON.parse(_0x1e3616.raw);
        let _0x12bf91 = _0x150b15.todayLimitAttr.map(_0x5e0af4 => petConfig.ElemTypesConfig.getDef(_0x5e0af4).cn);
        addGameLog("当前极限挑战属性: " + _0x12bf91.join(","));
      } catch (_0xb24d55) {}
    }
    if (_0xef3c8d == "sc_get_effort_value") {
      try {
        logger("监听到了学习力!!!");
        let _0x37d9dd = JSON.parse(_0x1e3616.raw);
        if (window.addPet != null) {
          window.addPet.haveLearns = _0x37d9dd.curEffortValue;
        }
      } catch (_0x1effd8) {}
    }
    if (_0xef3c8d == "sc_pvp_notify_enter_battle" && (JSON.parse(_0x1e3616.raw).pvpType == 2001 || JSON.parse(_0x1e3616.raw).pvpType == 5 || JSON.parse(_0x1e3616.raw).pvpType == 2000 || JSON.parse(_0x1e3616.raw).pvpType == 2)) {
      dianfengstatus = true;
    }
    if (_0xef3c8d == "sc_battle_notify_round_result") {
      // TOLOOK
      setTimeout(() => {
        try {
          let _0x177de1 = ClientOPManager.getInstance().result.playerInfos[0].getPetInfos();
          let _0x33c434 = ClientOPManager.getInstance().result.playerInfos[1].getOPPetInfo().elemType;
          _0x177de1.forEach(_0x249f3c => {
            let _0x2db904 = ptChangeLists.parent.$children.find(_0x2a51fd => _0x2a51fd.$name == "PetListBarItem_" + _0x249f3c.petID);
            if (_0x2db904) {
              let _0x411356 = petConfig.RelationManager.getInstance().getRelationValue(_0x33c434, _0x249f3c.elemType);
              let _0x21df2a = petConfig.RelationManager.getInstance().getRelationValue(_0x249f3c.elemType, _0x33c434);
              _0x411356 = getRealAndBeReal(_0x411356);
              _0x21df2a = getRealAndBeReal(_0x21df2a);
              if (_0x2db904.$children.length > 12) {
                _0x2db904.$children[11].text = _0x21df2a.text + " >";
                _0x2db904.$children[11].textColor = _0x21df2a.color;
                _0x2db904.$children[12].text = "< " + _0x411356.text;
                _0x2db904.$children[12].textColor = _0x411356.color;
              } else {
                const _0x405a45 = {
                  text: _0x21df2a.text + " >",
                  y: -40,
                  bold: true,
                  stroke: 1,
                  strokeColor: 9297,
                  textColor: _0x21df2a.color,
                  size: 14,
                  fontFamily: "楷体",
                  bold: 1,
                  textAlign: "center"
                };
                let _0x5a59ad = createLabel(_0x405a45);
                _0x5a59ad.x = _0x2db904.width / 2 - _0x5a59ad.width / 2;
                const _0x566d34 = {
                  text: "< " + _0x411356.text,
                  y: -20,
                  bold: true,
                  stroke: 1,
                  strokeColor: 9297,
                  textColor: _0x411356.color,
                  size: 14,
                  fontFamily: "楷体",
                  bold: 1,
                  textAlign: "center"
                };
                let _0x482e27 = createLabel(_0x566d34);
                _0x482e27.x = _0x2db904.width / 2 - _0x482e27.width / 2;
                _0x2db904.addChild(_0x5a59ad);
                _0x2db904.addChild(_0x482e27);
              }
            }
          });
        } catch (_0x36eafe) {}
      }, 1400);
      logger("##############对战结果###############", JSON.parse(_0x1e3616.raw).result.result);
      logger("对战OP!" + JSON.parse(_0x1e3616.raw).result.playerInfos.find(_0x2cccf6 => _0x2cccf6.uid == MFC.userInfo.uid).nextRoundOP);
      if (JSON.parse(_0x1e3616.raw).result.result != 0) {
        if (pokers != null) {
          let _0x2c50a3 = // TOLOOK
          setInterval(() => {
            let _0x4e33b = MFC.rootLayer.removeChild(pokers);
            if (_0x4e33b != null) {
              pokers.y = 120;
              pokers.x = 20;
              pokers.oldy = null;
              pokers.oldx = null;
              pokers.skinName = getTextBtnNullImageSkinName("巅峰记牌器已开启");
              MFC.rootLayer.addChild(pokers);
              clearInterval(_0x2c50a3);
            }
          }, 1000);
        }
      }
      if (JSON.parse(_0x1e3616.raw).result.result == 1 || JSON.parse(_0x1e3616.raw).result.result == 2) {
        dianfengstatus = false;
      }
      try {
        if (dianfengstatus) {
          if (JSON.parse(_0x1e3616.raw).result.roundNum == 0) {
            petgroups = new Map();
            let _0x2fdbc8 = JSON.parse(_0x1e3616.raw).result.playerInfos;
            pvpContent = _0x2fdbc8[0].uid === MFC.userInfo.uid ? _0x2fdbc8[1] : _0x2fdbc8[0];
            if (_0x2fdbc8[0].uid === MFC.userInfo.uid) {
              if (_0x2fdbc8[0].crtPetIndex == -1) {
                _0x2fdbc8[0].crtPetIndex = 0;
              }
            } else if (_0x2fdbc8[1].crtPetIndex == -1) {
              _0x2fdbc8[1].crtPetIndex = 0;
            }
            let _0x32df6e = _0x2fdbc8[0].uid === MFC.userInfo.uid ? _0x2fdbc8[0].petInfos[_0x2fdbc8[0].crtPetIndex].elemType : _0x2fdbc8[1].petInfos[_0x2fdbc8[1].crtPetIndex].elemType;
            let _0x39fda2 = JSON.parse(_0x1e3616.raw).result.processQueue[0].uid === MFC.userInfo.uid ? JSON.parse(_0x1e3616.raw).result.processQueue[1].affects : JSON.parse(_0x1e3616.raw).result.processQueue[0].affects;
            let _0x390df3 = _0x39fda2.filter(function (_0x10e0bf) {
              return _0x10e0bf.id >= 110001 && xls.enchanting.getItems().filter(function (_0x388f48) {
                return _0x388f48.Affects.slice(0, 6).indexOf(_0x10e0bf.id) !== -1;
              }).length > 0;
            });
            let _0x3f5685;
            if (_0x390df3.length > 0) {
              _0x3f5685 = xls.enchanting.getItems().filter(function (_0x2910b1) {
                return _0x2910b1.Affects.slice(0, 6).indexOf(_0x390df3[0].id) !== -1;
              })[0].name;
            } else {
              _0x3f5685 = "无。";
            }
            pvpContent = pvpContent.petInfos;
            outputStr = "";
            for (var _0x28570a = 0; _0x28570a < pvpContent.length; _0x28570a++) {
              if (pvpContent[_0x28570a].getTime) {
                let _0xe48efd = pvpContent[_0x28570a].getTime.toString();
                petgroups.set(_0xe48efd, pvpContent[_0x28570a]);
                petgroups.get(_0xe48efd).name = PetConfig.getDef(pvpContent[_0x28570a].petID).name;
                petgroups.get(_0xe48efd).kezhi = petConfig.RelationManager.getInstance().getRelationValue(_0x32df6e, pvpContent[_0x28570a].elemType);
                petgroups.get(_0xe48efd).fumo = _0x3f5685;
                if (_0x3f5685.indexOf("无") == -1) {
                  petfumo[_0xe48efd] = _0x3f5685;
                }
              }
            }
            if (pokers != null) {
              outputStr = "";
              let _0x20207e = Array.from(petgroups.keys());
              _0x20207e.forEach(_0x41e2b5 => {
                outputStr = outputStr + ("\n" + PetConfig.getDef(petgroups.get(_0x41e2b5).petID).name + " HP: " + petgroups.get(_0x41e2b5).crtHp + " 伤害系数:" + petgroups.get(_0x41e2b5).kezhi + " 附魔:" + petgroups.get(_0x41e2b5).fumo);
              });
              MFC.rootLayer.removeChild(pokers);
              pokers.oldy = null;
              pokers.oldx = null;
              if (pokers.definex) {
                pokers.x = pokers.definex;
              } else {
                pokers.x = MFC.rootLayer.width / 2 - pokers.width / 2;
              }
              if (pokers.definey) {
                pokers.y = pokers.definey;
              } else {
                MFC.rootLayer.height / 2;
              }
              pokers.skinName = getTextBtnNullImageSkinName(outputStr);
              MFC.rootLayer.addChild(pokers);
            }
          } else {
            let _0x471a7d = JSON.parse(_0x1e3616.raw).result.playerInfos;
            pvpContent = _0x471a7d[0].uid === MFC.userInfo.uid ? _0x471a7d[1] : _0x471a7d[0];
            pvpContent = pvpContent.petInfos;
            if (_0x471a7d[0].uid === MFC.userInfo.uid) {
              if (_0x471a7d[0].crtPetIndex == -1) {
                _0x471a7d[0].crtPetIndex = 0;
              }
            } else if (_0x471a7d[1].crtPetIndex == -1) {
              _0x471a7d[1].crtPetIndex = 0;
            }
            let _0x30c590 = _0x471a7d[0].uid === MFC.userInfo.uid ? _0x471a7d[0].petInfos[_0x471a7d[0].crtPetIndex].elemType : _0x471a7d[1].petInfos[_0x471a7d[1].crtPetIndex].elemType;
            let _0x15ce74 = [];
            if (JSON.parse(_0x1e3616.raw).result.processQueue[0].uid === MFC.userInfo.uid) {
              if (JSON.parse(_0x1e3616.raw).result.processQueue[1]) {
                _0x15ce74 = JSON.parse(_0x1e3616.raw).result.processQueue[1].affects;
              }
            } else if (JSON.parse(_0x1e3616.raw).result.processQueue[0]) {
              _0x15ce74 = JSON.parse(_0x1e3616.raw).result.processQueue[0].affects;
            }
            let _0x1444fc = _0x15ce74.filter(function (_0x2a8f07) {
              return _0x2a8f07.id >= 110001 && xls.enchanting.getItems().filter(function (_0x1f90e6) {
                return _0x1f90e6.Affects.slice(0, 6).indexOf(_0x2a8f07.id) !== -1;
              }).length > 0;
            });
            let _0x16364a;
            if (_0x1444fc.length > 0) {
              _0x16364a = xls.enchanting.getItems().filter(function (_0x1aa1d7) {
                return _0x1aa1d7.Affects.slice(0, 6).indexOf(_0x1444fc[0].id) !== -1;
              })[0].name;
            } else {
              _0x16364a = "无。";
            }
            for (var _0x28570a = 0; _0x28570a < pvpContent.length; _0x28570a++) {
              if (pvpContent[_0x28570a].getTime) {
                let _0x1f4ea4 = pvpContent[_0x28570a].getTime.toString();
                petgroups.set(_0x1f4ea4, pvpContent[_0x28570a]);
                petgroups.get(_0x1f4ea4).name = PetConfig.getDef(pvpContent[_0x28570a].petID).name;
                petgroups.get(_0x1f4ea4).kezhi = petConfig.RelationManager.getInstance().getRelationValue(_0x30c590, pvpContent[_0x28570a].elemType);
                petgroups.get(_0x1f4ea4).fumo = petfumo[_0x1f4ea4] !== undefined ? petfumo[_0x1f4ea4] : "无。";
                if (_0x16364a.indexOf("无") == -1) {
                  petfumo[_0x1f4ea4] = _0x16364a;
                }
              }
            }
            if (pokers != null) {
              outputStr = "";
              if (JSON.parse(_0x1e3616.raw).result.processQueue.length == 1 && JSON.parse(_0x1e3616.raw).result.processQueue[0].uid !== MFC.userInfo.uid) {
                let _0x1af4bb = JSON.parse(_0x1e3616.raw).result.processQueue[0].uid == MFC.userInfo.uid ? JSON.parse(_0x1e3616.raw).result.processQueue[1].opInfo.petIndex : JSON.parse(_0x1e3616.raw).result.processQueue[0].opInfo.petIndex;
                let _0x80623e = play[0].uid == MFC.userInfo.uid ? play[1].petInfos[_0x1af4bb].getTime : play[0].petInfos[_0x1af4bb].getTime;
                let _0x333b5f = _0x80623e.toString();
                if (_0x16364a.indexOf("无") == -1) {
                  petfumo[_0x333b5f] = _0x16364a;
                }
              } else {
                let _0x323b15 = Array.from(petgroups.keys());
                _0x323b15.forEach(_0x1884fd => {
                  outputStr = outputStr + ("\n" + PetConfig.getDef(petgroups.get(_0x1884fd).petID).name + " HP: " + petgroups.get(_0x1884fd).crtHp + " 伤害系数:" + petgroups.get(_0x1884fd).kezhi + " 附魔:" + petgroups.get(_0x1884fd).fumo);
                });
                MFC.rootLayer.removeChild(pokers);
                pokers.oldy = null;
                pokers.oldx = null;
                if (pokers.definex) {
                  pokers.x = pokers.definex;
                } else {
                  pokers.x = MFC.rootLayer.width / 2 - pokers.width / 2;
                }
                if (pokers.definey) {
                  pokers.y = pokers.definey;
                } else {
                  MFC.rootLayer.height / 2;
                }
                pokers.skinName = getTextBtnNullImageSkinName(outputStr);
                MFC.rootLayer.addChild(pokers);
              }
            }
          }
        }
      } catch (_0x2b6c8f) {
        logger(_0x2b6c8f);
      }
    }
  };
  window.send_message = function (_0x1a8ab8, _0x52db31) {
    try {
      logger("发送", _0x1a8ab8, _0x52db31, eval(_0x1a8ab8).prototype.constructor.__cmd);
    } catch (_0x392368) {
      logger(_0x392368);
    }
  };
  var intervalId = // TOLOOK
  setInterval(listen_socket, 500);
  function listen_socket() {
    console.log("当前intervalId:" + intervalId);
    const _0x44df72 = {
      KelAZ: "undefined",
      BsONg: function (_0x1c213d, _0x4da078) {
        return _0x1c213d !== _0x4da078;
      },
      Ylsoc: function (_0xcca1f8, _0x3b4be4) {
        return _0xcca1f8 !== _0x3b4be4;
      },
      ZtiHW: ".egret-player"
    };
    if (typeof GlobalSocket !== _0x44df72.KelAZ && _0x44df72.BsONg(typeof GlobalSocket.PROTOCOL_SOCKET, "undefined") && typeof GlobalSocket.PROTOCOL_SOCKET.socket !== "undefined" && _0x44df72.Ylsoc(typeof GlobalSocket.PROTOCOL_SOCKET.socket.socket, _0x44df72.KelAZ) && typeof GlobalSocket.PROTOCOL_SOCKET.socket.socket.socket !== "undefined") {
      logger("hook封包 成功 " + intervalId);
      if (!winLog) {
        produceLog();
      }
      clearInterval(intervalId);
      $(_0x44df72.ZtiHW).css("z-index", 0);
      intervalId = null;
      let _0x1816a9 = GlobalSocket.PROTOCOL_SOCKET.socket.socket.socket;
      _0x1816a9.onmessage = new Proxy(_0x1816a9.onmessage, {
        apply: function (_0x38aa0d, _0xbaa6a4, _0x461763) {
          try {
            let _0x3bc182 = _0x461763[0].data;
            let _0x236738 = new DataView(_0x3bc182);
            let _0x496537 = _0x236738.getUint32(8, true);
            let _0x221c6c = new TextDecoder().decode(_0x3bc182.slice(25));
            let _0x6030fd = ProtocolUtils._sc_cmds[Number(_0x496537)].prototype.__class__;
            const _0x549412 = {
              raw: _0x221c6c
            };
            window.recv_message(_0x6030fd, _0x549412);
          } catch (_0x1d1940) {}
          return _0x38aa0d.apply(_0xbaa6a4, _0x461763);
        }
      });
      _0x1816a9.send = new Proxy(_0x1816a9.send, {
        apply: function (_0x455ba6, _0x16a329, _0x17b387) {
          try {
            let _0x244d01 = _0x17b387[0];
            const _0x3a328f = new DataView(_0x244d01);
            const _0x5a689d = _0x244d01.slice(34);
            let _0x530eca = new TextDecoder().decode(_0x5a689d);
            let _0x3041ee = _0x3a328f.getUint32(17, true);
            let _0xb4b160 = ProtocolUtils._cs_cmds[Number(_0x3041ee)].prototype.__class__;
            window.send_message(_0xb4b160, _0x530eca);
          } catch (_0x1089df) {}
          return _0x455ba6.apply(_0x16a329, _0x17b387);
        }
      });
      _0x1816a9.close = new Proxy(_0x1816a9.close, {
        apply: function (_0x2f4f9b, _0x3e18ab, _0x6921c6) {
          logger("socket 断开!");
          GlobalSocket.PROTOCOL_SOCKET.socket.socket.socket = undefined;
          intervalId = // TOLOOK
          setInterval(listen_socket, 100);
          window.gameLog = null;
          return _0x2f4f9b.apply(_0x3e18ab, _0x6921c6);
        }
      });
      let _0x3472ba;
      var _0x5bb52a = GlobalDispatcher.prototype.dispatchEventWith;
      GlobalDispatcher.prototype.dispatchEventWith = function (_0x3933a6, _0x68f665, _0x3455f3) {
        logger(_0x3933a6, _0x68f665, _0x3455f3);
        try {
          if (_0x3933a6 == "open_module" && _0x3455f3.id === 257) {
            addGameLog("当前天赋药历史使用第" + MFC.attr.getAttr(MFC.attrType.foreverNatureReformTimes) + "瓶\n距离31保底天赋还剩余" + (6 - MFC.attr.getAttr(MFC.attrType.foreverNatureReformTimes)) + "瓶");
          }
          try {
            if (rongheStatus) {
              if (_0x3933a6 == "show_panel" && _0x3455f3.name == "pve.Pve" && _0x3455f3.data.type == 1 && !_0x3455f3.RedictC && xls.pvePlanet.getItem(_0x3455f3.data.args).canCatch) {
                RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
                  GlobalDispatcher.getInstance().dispatchEventWith("clear_module_bg", false, {
                    type: 2,
                    id: 215
                  });
                  var _0x6d4ae9 = SimpleAlertUi({});
                  let _0x2684e0 = createLabel({
                    text: "确定通过助手捕捉吗",
                    textColor: 16776960,
                    x: 30,
                    y: 70
                  });
                  _0x2684e0.x = _0x6d4ae9.width / 2 - _0x2684e0.width / 2;
                  _0x6d4ae9.addChild(_0x2684e0);
                  _0x6d4ae9.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
                    _0x3455f3.RedictC = 1;
                    GlobalDispatcher.getInstance().dispatchEventWith(_0x3933a6, _0x68f665, _0x3455f3);
                  }, function () {
                    _0x3455f3.RedictC = 0;
                    let _0x521d38 = xls.pvePlanet.getItem(_0x3455f3.data.args).bossID;
                    if (_0x521d38.indexOf("_") != -1) {
                      window.noLevelCatchPets = {};
                      window.noLevelCatchPets.bossID = _0x521d38;
                      window.noLevelCatchPets.levelId = _0x3455f3.data.args;
                    } else {
                      window.noLevelCatchPets = null;
                    }
                    window.nowTask = new LevelCatch();
                    window.nowTask.start();
                  }], null);
                  _0x6d4ae9.showAlert();
                });
                return;
              }
            }
            if (_0x3933a6 == "open_module" && _0x3455f3.id === 242 && _0x3455f3.data.hasOwnProperty("lvLimit") && _0x3455f3.data.hasOwnProperty("filter")) {
              const _0x62fa1 = {
                type: 0,
                id: _0x3455f3.data.ids[0]
              };
              const _0x54743f = {
                id: 243,
                data: _0x62fa1
              };
              rongheData = _0x54743f;
            }
          } catch (_0x8391c9) {
            logger(_0x8391c9);
          }
          try {
            if (rongheStatus) {
              if (_0x3933a6 == "obtain_item_click_item" && _0x3455f3.type == 1) {
                const _0x221f41 = {
                  id: _0x3455f3.id,
                  num: _0x3455f3.num
                };
                mergeItem = _0x221f41;
              }
              if (_0x3933a6 == "on_show_panel_complete" && _0x3455f3.data.type == 1 && _0x3455f3.name == "obtainItem.ObtainItem") {
                const _0x511d04 = {
                  id: _0x3455f3.data.id,
                  num: 0
                };
                mergeItem = _0x511d04;
              }
              if (_0x3933a6 == "hide_panel" && _0x3455f3.name == "battleEndPanel.BattleEndPanel") {
                _0x3472ba = false;
              }
              if (_0x3933a6 == "update_pve" && _0x3455f3.type == 1) {
                _0x3472ba = true;
              }
              if (_0x3472ba) {
                if (_0x3933a6 == "show_panel" && _0x3455f3.name == "pve.Pve" && _0x3455f3.data.type == 1 && !_0x3455f3.doneMerge && !_0x3455f3.data.result && !_0x3455f3.data.state && !xls.pvePlanet.getItem(_0x3455f3.data.args).canCatch) {
                  logger("前往融合", _0x3455f3.data.args, mergeItem);
                  RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
                    GlobalDispatcher.getInstance().dispatchEventWith("clear_module_bg", false, {
                      type: 2,
                      id: 215
                    });
                    var _0x57f125 = SimpleAlertUi({
                      width: 360,
                      height: 320
                    });
                    let _0x30499e = createLabel({
                      text: "融合便捷助手",
                      y: 20
                    });
                    _0x30499e.x = _0x57f125.width / 2 - _0x30499e.width / 2;
                    _0x57f125.addChild(_0x30499e);
                    let _0x5489c3 = createLabel({
                      text: xls.pvePlanet.getItem(_0x3455f3.data.args).planet_name + " | " + xls.pvePlanet.getItem(_0x3455f3.data.args).levelName,
                      textColor: 16776960,
                      y: _0x30499e.y + _0x30499e.height + 20
                    });
                    _0x5489c3.x = _0x57f125.width / 2 - _0x5489c3.width / 2;
                    _0x57f125.addChild(_0x5489c3);
                    let _0x3bdb34 = createLabel({
                      text: xls.item.getItem(mergeItem.id).name,
                      y: _0x5489c3.y + _0x5489c3.height + 20,
                      bold: true,
                      x: 20,
                      textColor: 16711765
                    });
                    _0x57f125.addChild(_0x3bdb34);
                    const _0x3679c6 = {
                      text: "合成整件需: " + mergeItem.num + "个",
                      y: _0x5489c3.y + _0x5489c3.height + 20,
                      x: _0x57f125.width / 2 + 15,
                      textColor: 16776960
                    };
                    let _0x42fc54 = createLabel(_0x3679c6);
                    _0x57f125.addChild(_0x42fc54);
                    let _0x3fe0d2 = getSeerItemNum(mergeItem.id);
                    const _0x5495b8 = {
                      text: "拥有数: " + _0x3fe0d2,
                      y: _0x42fc54.height + _0x42fc54.y + 20,
                      x: 20,
                      textColor: 16776960
                    };
                    let _0x880a47 = createLabel(_0x5495b8);
                    _0x57f125.addChild(_0x880a47);
                    let _0x3c5bde = createLabel({
                      text: "关卡消耗电池数: " + xls.pvePlanet.getItem(_0x3455f3.data.args).costEnergy.split("_")[0],
                      y: _0x42fc54.height + _0x42fc54.y + 20,
                      bold: true,
                      x: _0x57f125.width / 2 + 15,
                      textColor: 16776960
                    });
                    _0x57f125.addChild(_0x3c5bde);
                    const _0x4d4e6b = {
                      text: "----------------------------",
                      y: _0x3c5bde.height + _0x3c5bde.y + 10,
                      x: 20,
                      textColor: 16776960
                    };
                    let _0x49b7ae = createLabel(_0x4d4e6b);
                    _0x57f125.addChild(_0x49b7ae);
                    let _0x5580fa = createLabel({
                      text: "拥有电池数: " + UserManager.getInstance().userInfo.curEnergy,
                      x: 20,
                      y: _0x49b7ae.height + _0x49b7ae.y + 5,
                      textColor: 16776960
                    });
                    _0x5580fa.x = _0x57f125.width / 2 - _0x5580fa.width / 2 - 10;
                    _0x57f125.addChild(_0x5580fa);
                    const _0x96b2fb = {
                      text: "获取数量  ==>",
                      x: 77,
                      y: _0x57f125.height / 1.55 + 6,
                      textColor: 16776960
                    };
                    let _0x274e19 = createLabel(_0x96b2fb);
                    _0x57f125.addChild(_0x274e19);
                    const _0x60324a = {
                      prompt: "获取数量",
                      x: _0x57f125.width / 2 + 15,
                      y: _0x57f125.height / 1.55,
                      width: 100
                    };
                    let _0x12a671 = createEdit(_0x60324a);
                    _0x57f125.addChild(_0x12a671);
                    _0x57f125.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
                      _0x3455f3.doneMerge = 1;
                      const _0x608382 = {
                        type: 2,
                        id: 215,
                        hasOpen: false
                      };
                      GlobalDispatcher.getInstance().dispatchEventWith("set_module_bg", false, _0x608382);
                      GlobalDispatcher.getInstance().dispatchEventWith(_0x3933a6, _0x68f665, _0x3455f3);
                    }, function () {
                      GlobalDispatcher.getInstance().dispatchEventWith("close_module", false, {
                        id: 215
                      });
                      if (isNaN(parseInt(_0x12a671.text)) || parseInt(_0x12a671.text) <= 0) {
                        MFC.bubbleAlert.showAlert("请输入有效获取数量");
                        return true;
                      }
                      window.nowTask = new MergeHelper();
                      window.nowTask.levelId = _0x3455f3.data.args;
                      window.nowTask.levelName = xls.pvePlanet.getItem(_0x3455f3.data.args).levelName;
                      window.nowTask.userBattry = parseInt(xls.pvePlanet.getItem(_0x3455f3.data.args).costEnergy.split("_")[0]);
                      window.nowTask.goalItem = {
                        itemId: mergeItem.id,
                        name: xls.item.getItem(mergeItem.id).name,
                        num: mergeItem.num,
                        needNum: parseInt(_0x12a671.text)
                      };
                      window.nowTask.start();
                    }], null);
                    _0x57f125.showAlert();
                  });
                  return;
                }
              }
            }
          } catch (_0x5a183c) {}
          if (_0x3933a6 == "pet_bag_click_cell") {
            window.nowCheckBagPet = _0x3455f3;
          }
          if (_0x3933a6 == "hide_panel" && JSON.stringify(_0x3455f3).indexOf("petProperty.PetProperty") != -1) {
            window.nowCheckBagPet = null;
          }
          if (_0x3455f3.key == "ChooseLevel" && _0x3455f3.targetName == "ChooseLevelItem") {
            logger("直接前往");
            if (_0x3455f3.panel._crtData.bossID.indexOf("_") != -1) {
              window.noLevelCatchPets = {};
              window.noLevelCatchPets.levelId = _0x3455f3.panel._crtData.id;
              window.noLevelCatchPets.bossID = _0x3455f3.panel._crtData.bossID;
            } else {
              window.noLevelCatchPets = null;
            }
          }
          if (_0x3455f3.key == "ChooseLevel" && _0x3455f3.targetName == "preBtn") {
            window.noLevelCatchPets = null;
          }
          if (_0x3455f3.key == "ChooseLevel" && _0x3455f3.targetName == "nextBtn") {
            if (_0x3455f3.panel._crtData.bossID.indexOf("_") != -1) {
              window.noLevelCatchPets = {};
              window.noLevelCatchPets.levelId = _0x3455f3.panel._crtData.id;
              window.noLevelCatchPets.bossID = _0x3455f3.panel._crtData.bossID;
            } else {
              window.noLevelCatchPets = null;
            }
          }
          if (_0x3455f3.key == "ChoosePlanet" && _0x3455f3.targetName == "Planet") {
            let _0x423bb9 = xls.pvePlanet.getItem(_0x3455f3.panel._data.level).bossID;
            if (_0x423bb9.indexOf("_") != -1) {
              window.noLevelCatchPets = {};
              window.noLevelCatchPets.bossID = _0x423bb9;
              window.noLevelCatchPets.levelId = _0x3455f3.panel._data.level;
            } else {
              window.noLevelCatchPets = null;
            }
          }
          if (JSON.stringify(_0x3455f3).includes("teamDefend.TeamDefend")) {
            ;
            (async function () {
              let _0x7d9370 = new window.cs_get_campaign_pet_challenge_boss();
              Object.assign(_0x7d9370, {});
              MFC.online.send(_0x7d9370);
            })();
          }
        } catch (_0x2ed5fa) {}
        _0x5bb52a.call(this, _0x3933a6, _0x68f665, _0x3455f3);
      };
      var _0x52ea09;
      var _0x1e69d9 = egret.web.WebTouchHandler.prototype;
      _0x52ea09 = _0x1e69d9.getLocation;
      _0x1e69d9.getLocation = function (_0x57f6ee) {
        nnnn = this;
        var _0x20d51c = _0x52ea09.call(this, _0x57f6ee);
        return _0x20d51c;
      };
      var _0xd04652 = rewardManager.RewardManager.prototype.showReward;
      rewardManager.RewardManager.prototype.showReward = function () {
        const _0x45666b = [100236, 100237, 100238, 100239, 100240, 100241, 100777, 100272, 100021, 100014, 100015, 100016, 100017, 100029, 100030, 100031, 100076, 100077, 100078, 100191, 100193, 100195, 100313, 100315];
        if (this.list.length > 0 && this.list[0].data.length > 0) {
          if (_0x45666b.includes(this.list[0].data[0].i) && this.list[0].display == 1) {
            this.list.shift();
          } else {
            _0xd04652.call(this);
          }
        } else {
          _0xd04652.call(this);
        }
      };
      var _0x26e17c = BasicRoleInfoBar.prototype.updateAffect;
      BasicRoleInfoBar.prototype.updateAffect = function (_0x16b782, _0x461139) {
        try {
          if (this.isLeft) {
            if (this.labelLevel.text.indexOf("LV:") !== -1) {
              hp1.text = "¾血线: " + this._data.hp / 4 * 3;
              hp2.x = hp1.x + hp1.width + 10;
              hp2.text = "¼血线: " + this._data.hp / 4;
            }
          } else if (this.labelLevel.text.indexOf("LV:") !== -1) {
            hp4.text = "¼血线: " + this._data.hp / 4;
            hp4.x = this.parent.width - 77 - hp4.width;
            hp3.text = "¾血线: " + this._data.hp / 4 * 3;
            hp3.x = hp4.x - 10 - hp3.width;
          }
        } catch (_0x15f3c0) {}
        _0x26e17c.call(this, _0x16b782, _0x461139);
      };
      var _0x741bf5 = BasicRoleInfoBar.prototype._childrenCreated;
      BasicRoleInfoBar.prototype._childrenCreated = function () {
        hp1 = new eui.Label();
        hp2 = new eui.Label();
        hp3 = new eui.Label();
        hp4 = new eui.Label();
        hp1.lineSpacing = hp2.lineSpacing = hp3.lineSpacing = hp4.lineSpacing = 3;
        hp1.size = hp2.size = hp3.size = hp4.size = 14;
        hp1.text = hp2.text = hp3.text = hp4.text = "";
        hp1.textColor = hp3.textColor = 65280;
        hp1.bold = hp2.bold = hp3.bold = hp4.bold = true;
        hp1.stroke = hp2.stroke = hp3.stroke = hp4.stroke = 1;
        hp1.strokeColor = hp2.strokeColor = hp3.strokeColor = hp4.strokeColor = 9297;
        hp1.fontFamily = hp2.fontFamily = hp3.fontFamily = hp4.fontFamily = "楷体";
        hp1.x = hp2.x = 77;
        hp1.y = hp2.y = 90;
        this.parent.addChild(hp1);
        hp2.textColor = hp4.textColor = 16711680;
        this.parent.addChild(hp2);
        hp3.x = hp4.x = 318;
        hp3.y = hp4.y = 90;
        this.parent.addChild(hp3);
        this.parent.addChild(hp4);
        _0x741bf5.call(this);
      };
      var _0x1b13b8 = MFC.alert.show;
      MFC.alert.show = function (_0x5b74af, _0x54be57, _0x8644e1, _0x4b20a5, _0x9ece5b) {
        logger(_0x5b74af, _0x54be57, _0x8644e1, _0x4b20a5, _0x9ece5b);
        if (_0x5b74af.includes("不是开放时间，请稍后再试") && _0x5b74af.includes("6000502") || _0x5b74af.includes("挑战次数已用完") && _0x5b74af.includes("6000501") || _0x5b74af.includes("次数已用完") && _0x5b74af.includes("6000141") || _0x5b74af.includes("战斗已结束") && _0x5b74af.includes("6005002") || _0x5b74af.includes("等待CD时间结束") && _0x5b74af.includes("6000910") || _0x5b74af.includes("已经领取过") && _0x5b74af.includes("6002903") || _0x5b74af.includes("该任务尚未完成") && _0x5b74af.includes("6002902") || _0x5b74af.includes("不能重复领取") && _0x5b74af.includes("6000239") || _0x5b74af.includes("未达到领取条件") && _0x5b74af.includes("6000238") || _0x5b74af.includes("肖恩工程师检修代码") || _0x5b74af.includes("道具数量不足") && _0x5b74af.includes("6001205") || _0x5b74af.includes("余额不足") && _0x5b74af.includes("请充值") || _0x5b74af.includes("道具不足") && _0x5b74af.includes("6000113") || _0x5b74af.includes("物品不足") && _0x5b74af.includes("6400005") || _0x5b74af.includes("商品已卖完") || _0x5b74af.includes("已经兑换过该奖励") && _0x5b74af.includes("6008006") || _0x5b74af.includes("没有历史存档记录") && _0x5b74af.includes("-1") || _0x5b74af.includes("不合法的数据") && _0x5b74af.includes("6106031") || _0x5b74af.includes("已经兑换过该奖励") || _0x5b74af.includes("不能重复领取") || _0x5b74af.includes("未达到领取条件") || _0x5b74af.includes("目标已阵亡") || _0x5b74af.includes("游戏未结束") || _0x5b74af.includes("精灵等级不满足条件") && _0x5b74af.includes("6010002")) {} else if (_0x5b74af.includes("神奇密码已使用") && _0x5b74af.includes("6008034")) {
          addGameLog("神奇密码已使用");
        } else {
          var _0x57ef22 = _0x1b13b8.call(this, _0x5b74af, _0x54be57, _0x8644e1, _0x4b20a5, _0x9ece5b);
          return _0x57ef22;
        }
        if (_0x5b74af.includes("网络波动~等待超时啦")) {
          (async function () {
            await wait(1200);
            var _0x4fb782 = await findUIs("_className", "Cls_btn_QueRen");
            touchBtn(_0x4fb782[0]);
          })();
        }
      };
    }
  }
}
;
0;
window.nowTask = null;
window.gameLog = null;
class SuperTask {
  constructor() {
    this.recvList = [];
    this.CatchPetDatas = null;
    let _0x5b7b3a = UserManager.getInstance().userInfo;
    if (_0x5b7b3a.defaultTeam.length == 0) {
      for (let _0x598139 = 1; _0x598139 <= 6; _0x598139++) {
        if (_0x5b7b3a["defaultTeam" + _0x598139].length > 0) {
          _0x5b7b3a.defaultTeam = _0x5b7b3a["defaultTeam" + _0x598139];
          break;
        }
      }
    }
  }
  async send_message(_0x1dcce2, _0x3f889a) {
    if (window.nowTask !== this && window.nowTask.constructor.name != "DailyTask" && window.nowTask.constructor.name != "Paitepet" && window.nowTask.constructor.name != "LimitActivity") {
      logger("停止执行！");
      throw new Error("任务运行停止！");
    }
    let _0xb41e10 = new window[_0x1dcce2]();
    Object.assign(_0xb41e10, _0x3f889a);
    MFC.online.send(_0xb41e10);
    _0x1dcce2 = "sc" + _0x1dcce2.slice(2);
    if (!window.nowTask.recvList.find(_0x269d40 => _0x269d40.watchEventName === _0x1dcce2)) {
      const _0x2b6736 = {
        watchEventName: _0x1dcce2
      };
      this.recvList.push(_0x2b6736);
      const _0x3b2caa = {
        watchEventName: _0x1dcce2
      };
      window.nowTask.recvList.push(_0x3b2caa);
    }
    let _0x2f0831 = await this.waitEvent(_0x1dcce2);
    let _0xfe4dc2 = JSON.parse(_0x2f0831.gameBody[_0x2f0831.gameBody.length - 1].raw);
    _0x2f0831.gameBody.splice(0, _0x2f0831.gameBody.length);
    logger("this.recvList", this.recvList.length);
    return _0xfe4dc2;
  }
  async waitEvent(_0x38f5ca) {
    let _0x1b93af = window.nowTask.recvList.find(_0x14eaea => _0x14eaea.watchEventName === _0x38f5ca);
    if (!_0x1b93af) {
      throw new Error("缺少配置！" + _0x38f5ca);
    }
    while (window.nowTask === this || window.nowTask.constructor.name == "DailyTask" || window.nowTask.constructor.name == "Paitepet" || window.nowTask.constructor.name == "LimitActivity") {
      await wait(100);
      if (_0x1b93af.gameBody && _0x1b93af.gameBody.length > 0) {
        if (_0x38f5ca == "sc_battle_notify_round_result") {
          let _0x243570 = JSON.parse(_0x1b93af.gameBody[_0x1b93af.gameBody.length - 1].raw);
          try {
            _0x243570 = fixBattleRes(_0x243570);
            _0x1b93af.gameBody[_0x1b93af.gameBody.length - 1].raw = JSON.stringify(_0x243570);
          } catch (_0x507742) {
            logger(_0x507742);
          }
        }
        return _0x1b93af;
      }
    }
    throw new Error("任务运行停止！");
  }
  start() {
    if (window.nowTask === this) {
      winLog.txtWatcher.text = "正在执行:" + window.nowTask.nowName;
    }
  }
  stop() {
    if (window.nowTask === this) {
      window.nowTask = null;
      MFC.bubbleAlert.showAlert("任务已结束");
      addGameLog("任务已结束");
      winLog.txtWatcher.text = "正在执行:无";
    }
    if (this.nowUi != null) {
      MFC.rootLayer.removeChild(this.nowUi);
      this.nowUi = null;
    }
  }
  async initBattle() {
    await this.send_message("cs_set_match_battle_speed", {
      speed: 2
    });
    let _0x415223 = await this.waitEvent("sc_battle_notify_load_resource");
    _0x415223.gameBody.splice(0, _0x415223.gameBody.length);
    await this.send_message("cs_online_load_resource", {
      groupId: "",
      battleType: 0
    });
    await wait(300);
    await this.send_message("cs_online_player_operation", {
      opType: 5,
      data: null,
      groupId: ""
    });
    _0x415223 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x21d559 = JSON.parse(_0x415223.gameBody[_0x415223.gameBody.length - 1].raw);
    _0x415223.gameBody.splice(0, _0x415223.gameBody.length);
    logger("回合开始");
    await wait(200);
    return _0x21d559;
  }
  async useSkill(_0x431fe7) {
    await wait(100);
    await this.send_message("cs_online_load_battle_result", {
      groupId: ""
    });
    addGameLog("释放技能:" + petConfig.SkillConfig.getDef(_0x431fe7).name);
    const _0xc83e76 = {
      skillID: _0x431fe7
    };
    const _0x3404c3 = {
      opType: 1,
      data: _0xc83e76,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x3404c3);
    let _0x420535 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x1a7702 = JSON.parse(_0x420535.gameBody[_0x420535.gameBody.length - 1].raw);
    _0x420535.gameBody.splice(0, _0x420535.gameBody.length);
    return _0x1a7702;
  }
  async useItem(_0x56caf1) {
    const _0x388abd = {
      itemID: _0x56caf1
    };
    const _0x19f9cb = {
      opType: 3,
      data: _0x388abd,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x19f9cb);
    let _0x24fd24 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x3f976a = JSON.parse(_0x24fd24.gameBody[_0x24fd24.gameBody.length - 1].raw);
    _0x24fd24.gameBody.splice(0, _0x24fd24.gameBody.length);
    return _0x3f976a;
  }
  addAllUis(_0x48a334) {
    _0x48a334.forEach(_0x22c8b9 => {
      this.alertWin.addChild(_0x22c8b9);
    });
  }
}
class Defaultsetup extends SuperTask {
  constructor() {
    super();
    this.nowName = "默认设置";
    this.selfwatch = [];
  }
  start() {
    super.start();
    let _0x13d5ca = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x2462cc = [];
      var _0x1ae9d8 = SimpleAlertUi({
        width: 450,
        height: 400
      });
      _0x13d5ca.alertWin = _0x1ae9d8;
      const _0x20d266 = {
        text: "注意:",
        textColor: 16776960,
        x: 30,
        y: _0x1ae9d8.height / 20
      };
      var _0x1f7663 = createLabel(_0x20d266);
      _0x2462cc.push(_0x1f7663);
      const _0x4eead9 = {
        text: "[默认设置]下次进入游戏会按照此次选择设置",
        textColor: 16711680,
        x: 40,
        y: _0x1f7663.y + 10 + _0x1f7663.height
      };
      var _0x1e8090 = createLabel(_0x4eead9);
      _0x2462cc.push(_0x1e8090);
      const _0x3bb5fa = {
        text: "默认设置",
        y: _0x1e8090.y + 10 + _0x1e8090.height,
        size: 20
      };
      let _0x469742 = createLabel(_0x3bb5fa);
      _0x469742.x = _0x1ae9d8.applicationWidth / 2 - _0x469742.width / 2;
      _0x2462cc.push(_0x469742);
      const _0x5a267e = {
        text: "开启声音",
        x: _0x1ae9d8.width / 10,
        y: _0x469742.y + 40
      };
      let _0x51c8b0 = createLabel(_0x5a267e);
      _0x2462cc.push(_0x51c8b0);
      const _0x4cda57 = {
        x: _0x51c8b0.x + _0x51c8b0.width + 42,
        y: _0x469742.y + 40,
        selected: true,
        storageKey: "setup1"
      };
      let _0x206fc0 = createToggle(_0x4cda57);
      _0x2462cc.push(_0x206fc0);
      const _0x1ca29a = {
        text: "屏蔽其他玩家",
        x: _0x1ae9d8.width / 10,
        y: _0x469742.y + 80
      };
      let _0x5646b0 = createLabel(_0x1ca29a);
      _0x2462cc.push(_0x5646b0);
      const _0x1658d9 = {
        x: _0x5646b0.x + _0x5646b0.width + 10,
        y: _0x469742.y + 80,
        selected: true,
        storageKey: "setup2"
      };
      let _0x5cfca1 = createToggle(_0x1658d9);
      _0x2462cc.push(_0x5cfca1);
      const _0x29184e = {
        text: "屏蔽组队邀请",
        x: _0x5cfca1.x + _0x5cfca1.width + 10,
        y: _0x469742.y + 80
      };
      let _0x22f656 = createLabel(_0x29184e);
      _0x2462cc.push(_0x22f656);
      const _0x3d7da6 = {
        x: _0x22f656.x + _0x22f656.width + 10,
        y: _0x469742.y + 80,
        selected: true,
        storageKey: "setup3"
      };
      let _0x1a90d9 = createToggle(_0x3d7da6);
      _0x2462cc.push(_0x1a90d9);
      const _0x504f3a = {
        text: "屏蔽挑战邀请",
        x: _0x1ae9d8.width / 10,
        y: _0x469742.y + 120
      };
      let _0x520052 = createLabel(_0x504f3a);
      _0x2462cc.push(_0x520052);
      const _0x330f11 = {
        x: _0x520052.x + _0x520052.width + 10,
        y: _0x469742.y + 120,
        selected: true,
        storageKey: "setup4"
      };
      let _0x3b1bb4 = createToggle(_0x330f11);
      _0x2462cc.push(_0x3b1bb4);
      const _0x41106c = {
        text: "屏蔽战斗表情",
        x: _0x3b1bb4.x + _0x3b1bb4.width + 10,
        y: _0x469742.y + 120
      };
      let _0x43d823 = createLabel(_0x41106c);
      _0x2462cc.push(_0x43d823);
      const _0x1fc646 = {
        x: _0x43d823.x + _0x43d823.width + 10,
        y: _0x469742.y + 120,
        selected: true,
        storageKey: "setup5"
      };
      let _0x6063ff = createToggle(_0x1fc646);
      _0x2462cc.push(_0x6063ff);
      const _0x4397a1 = {
        text: "观战设置",
        y: _0x43d823.y + 40
      };
      let _0x1f3c63 = createLabel(_0x4397a1);
      _0x1f3c63.x = _0x1ae9d8.applicationWidth / 2 - _0x1f3c63.width / 2;
      _0x2462cc.push(_0x1f3c63);
      const _0x5c92a8 = {
        x: _0x1ae9d8.width / 10,
        y: _0x1f3c63.y + 40,
        selected: false,
        storageKey: "selfwatch1"
      };
      let _0x234805 = createRadio(_0x5c92a8);
      _0x2462cc.push(_0x234805);
      const _0x35dd17 = {
        text: "所有玩家",
        x: _0x234805.x + _0x234805.width + 10,
        y: _0x234805.y
      };
      let _0x391494 = createLabel(_0x35dd17);
      _0x2462cc.push(_0x391494);
      const _0xe42130 = {
        x: _0x391494.x + _0x391494.width + 30,
        y: _0x234805.y,
        selected: false,
        storageKey: "selfwatch2"
      };
      let _0x4222ae = createRadio(_0xe42130);
      _0x2462cc.push(_0x4222ae);
      const _0x286f46 = {
        text: "仅好友1",
        x: _0x4222ae.x + _0x4222ae.width + 10,
        y: _0x234805.y
      };
      let _0x23d195 = createLabel(_0x286f46);
      _0x2462cc.push(_0x23d195);
      const _0x566500 = {
        x: _0x23d195.x + _0x23d195.width + 30,
        y: _0x234805.y,
        selected: true,
        storageKey: "selfwatch3"
      };
      let _0x56974c = createRadio(_0x566500);
      _0x2462cc.push(_0x56974c);
      const _0x4b8e47 = {
        text: "不允许观战",
        x: _0x56974c.x + _0x56974c.width + 10,
        y: _0x234805.y
      };
      let _0x37e48f = createLabel(_0x4b8e47);
      _0x2462cc.push(_0x37e48f);
      _0x13d5ca.addAllUis(_0x2462cc);
      _0x1ae9d8.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x13d5ca.stop();
      }, function () {
        try {
          localStorage.setItem("setup1", _0x206fc0.selected);
          localStorage.setItem("setup2", _0x5cfca1.selected);
          localStorage.setItem("setup3", _0x1a90d9.selected);
          localStorage.setItem("setup4", _0x3b1bb4.selected);
          localStorage.setItem("setup5", _0x6063ff.selected);
          localStorage.setItem("selfwatch1", _0x234805.selected);
          localStorage.setItem("selfwatch2", _0x4222ae.selected);
          localStorage.setItem("selfwatch3", _0x56974c.selected);
          if (_0x206fc0.selected) {
            addGameLog("开启游戏声音");
            MFC.sound.isEffectsMute = true;
            MFC.sound.isBackgroudMute = false;
          } else {
            addGameLog("关闭游戏声音");
            MFC.sound.isEffectsMute = true;
            MFC.sound.isBackgroudMute = true;
          }
          MFC.sound.saveStatus();
          if (_0x5cfca1.selected) {
            addGameLog("开启其他玩家屏蔽");
            MFC.mapManager.userManager.hideOthers();
          } else {
            addGameLog("关闭其他玩家屏蔽");
            MFC.mapManager.userManager.showOthers();
          }
          if (_0x1a90d9.selected) {
            addGameLog("开启组队邀请屏蔽");
            MFC.partyManager.refuseInvite = 2;
          } else {
            addGameLog("关闭组队邀请屏蔽");
            MFC.partyManager.refuseInvite = 0;
          }
          var _0x3ac45d = new cs_set_invitation_status();
          _0x3ac45d.status = MFC.userInfo.isInvitationPVP = _0x3b1bb4.selected ? (addGameLog("开启挑战邀请屏蔽"), 1) : (addGameLog("关闭挑战邀请屏蔽"), 0);
          MFC.online.send(_0x3ac45d, function (_0x156b10) {
            if (_0x156b10) {
              MFC.userInfo.isInvitationPVP = _0x156b10.isInvitationPVP;
            }
          });
          if (_0x6063ff.selected) {
            addGameLog("开启战斗表情屏蔽");
            egret.localStorage.setItem(MFC.userInfo.uid + "_BattleEmoji", "close");
          } else {
            addGameLog("关闭战斗表情屏蔽");
            egret.localStorage.setItem(MFC.userInfo.uid + "_BattleEmoji", "open");
          }
          if (_0x234805.selected) {
            _0x13d5ca.selfwatch[0] = 1;
          }
          if (_0x4222ae.selected) {
            _0x13d5ca.selfwatch[1] = 1;
          }
          if (_0x56974c.selected) {
            _0x13d5ca.selfwatch[2] = 1;
          }
        } catch (_0x25b112) {
          localStorage.clear();
        }
        _0x13d5ca.prcessBody();
      }], null);
      _0x1ae9d8.showAlert();
    });
  }
  async changePer(_0x59f1b7) {
    const _0x5c66e9 = {
      match_permissions: _0x59f1b7
    };
    await this.send_message("cs_set_match_permissions", _0x5c66e9);
  }
  async prcessBody() {
    try {
      if (this.selfwatch[0]) {
        await this.changePer(1);
        addGameLog("允许所有玩家观战");
      }
      if (this.selfwatch[1]) {
        await this.changePer(3);
        addGameLog("仅好友观战");
      }
      if (this.selfwatch[2]) {
        await this.changePer(2);
        addGameLog("不允许观战");
      }
      this.stop();
    } catch (_0x101efb) {}
  }
}
class FightMapBoss extends SuperTask {
  constructor(_0x2edce8) {
    super();
    this.nowName = "打野怪";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    if (_0x2edce8) {
      this.fightCounts = _0x2edce8;
    } else {
      this.fightCounts = 120;
    }
    this.levelId = 9;
    this.mapBossList = [];
    this.switchBtnList = [];
  }
  async start() {
    super.start();
    let _0x31632b = [];
    MFC.mapManager._bossManager.bossDataList.forEach(_0x3b8b47 => {
      if (_0x31632b.indexOf(_0x3b8b47.sweepShow) === -1) {
        let _0x369630 = PetConfig.getDef(_0x3b8b47.sweepShow).name;
        const _0x3a9330 = {
          name: _0x369630,
          levelId: _0x3b8b47.id,
          PetbookId: _0x3b8b47.sweepShow
        };
        this.mapBossList.push(_0x3a9330);
        _0x31632b.push(_0x3b8b47.sweepShow);
      }
    });
    if (this.mapBossList.length === 0) {
      MFC.alert.show("当前地图场景没有可对战的精灵!");
      this.stop();
      return;
    }
    let _0x4433ac = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x30f68f = [];
      addGameLog("开始进行");
      var _0x4d8bba = SimpleAlertUi({});
      _0x4433ac.alertWin = _0x4d8bba;
      const _0x34e506 = {
        text: "        场景对战野怪\n[默认使用首发精灵的首发技能]",
        y: _0x4d8bba.height / 16
      };
      var _0x20db26 = createLabel(_0x34e506);
      _0x20db26.x = _0x4d8bba.width / 2 - _0x20db26.width / 2;
      _0x30f68f.push(_0x20db26);
      let _0x902207 = _0x4d8bba.width / 15;
      let _0x4a499e;
      _0x4433ac.mapBossList.forEach((_0x12eb28, _0x2e1418) => {
        const _0x522d63 = {
          text: _0x12eb28.name,
          x: _0x902207,
          y: _0x4d8bba.height / 3,
          textColor: 16776960
        };
        let _0x5d4a9c = createLabel(_0x522d63);
        const _0x37d8a1 = {
          x: _0x902207 + _0x5d4a9c.width + 5,
          y: _0x4d8bba.height / 3,
          selected: _0x2e1418 === 0,
          levelId: _0x12eb28.levelId
        };
        _0x4a499e = createToggle(_0x37d8a1);
        _0x30f68f.push(_0x5d4a9c);
        _0x30f68f.push(_0x4a499e);
        _0x902207 = _0x902207 + _0x4a499e.x + _0x4a499e.width + 10;
        _0x4433ac.switchBtnList.push(_0x4a499e);
      });
      const _0x4ff1ae = {
        text: "对战次数 =>",
        x: 40,
        y: _0x4a499e.y + _0x4a499e.height + 13,
        textColor: 16776960
      };
      let _0xa6ea3f = createLabel(_0x4ff1ae);
      _0x30f68f.push(_0xa6ea3f);
      const _0x31f906 = {
        x: _0xa6ea3f.width + _0xa6ea3f.x + 40,
        y: _0x4a499e.y + _0x4a499e.height + 7,
        width: 80,
        text: "120",
        storageKey: "iptC"
      };
      var _0x4bf9de = createEdit(_0x31f906);
      _0x30f68f.push(_0x4bf9de);
      _0x4433ac.addAllUis(_0x30f68f);
      _0x4d8bba.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [() => _0x4433ac.stop(), () => {
        localStorage.setItem("iptC", _0x4bf9de.text);
        _0x4433ac.fightCounts = parseInt(_0x4bf9de.text);
        _0x4433ac.prcessBody();
      }], null);
      _0x4d8bba.showAlert();
    });
  }
  async prcessBody() {
    try {
      for (let _0x34c0eb = 0; _0x34c0eb < this.fightCounts; _0x34c0eb++) {
        let _0x21fbbf = UserManager.getInstance().userInfo.defaultTeam[0];
        let _0x57dcd6 = PetManager.getInstance().getPetInfoByGetTime(_0x21fbbf).skills[0];
        await wait(300);
        if (window.nowTask.constructor.name == "FightMapBoss") {
          var _0x46f7ab = this.mapBossList[Math.floor(Math.random() * this.mapBossList.length)];
          addGameLog("对战: " + _0x46f7ab.name);
          const _0x2ec31d = {
            levelId: _0x46f7ab.levelId,
            battleType: 3
          };
          await this.send_message("cs_pve_activity_battle", _0x2ec31d);
        } else {
          await this.send_message("cs_pve_activity_battle", {
            levelId: this.levelId,
            battleType: 3
          });
        }
        await this.initBattle();
        let _0x1e3fbf = await this.useSkill(_0x57dcd6);
        while (_0x1e3fbf.result.result === 0) {
          let _0x1356eb = _0x1e3fbf.result.playerInfos.find(_0x3a0ba9 => _0x3a0ba9.uid === MFC.userInfo.uid).nextRoundOP;
          if (_0x1356eb !== 1) {
            addGameLog("首发被击败");
            break;
          }
          addGameLog("未击败，继续攻击");
          _0x1e3fbf = await this.useSkill(_0x57dcd6);
        }
        if (_0x1e3fbf.result.result === 1) {
          addGameLog("顺利野怪第" + (_0x34c0eb + 1) + "次");
        } else {
          _0x34c0eb--;
          addGameLog("被野怪击败");
        }
        await wait(300);
      }
      this.stop();
    } catch (_0xf360ac) {
      logger(_0xf360ac);
    }
  }
}
class braveryBattle extends SuperTask {
  constructor() {
    super();
    this.nowName = "勇者之塔";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
  }
  start() {
    super.start();
  }
  async prcessBody() {
    try {
      if (PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).level == 100 || PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).level <= 10) {
        addGameLog("精灵等级不满足条件!");
      } else {
        await this.send_message("cs_set_brave_tower_team", {
          floor: 1,
          getTime: UserManager.getInstance().userInfo.defaultTeam[0]
        });
        while (true) {
          let _0x499a12 = await this.send_message("cs_get_daily_task_list", {});
          let _0x8d3f03 = _0x499a12.dailyTask.find(_0x35bac5 => _0x35bac5.taskId === 22).taskProcess;
          if (_0x8d3f03 == 5) {
            addGameLog("勇者之塔完成!");
            break;
          } else {
            let _0x2393d9 = await this.send_message("cs_get_brave_tower_data", {});
            let _0x54f360 = _0x2393d9.tower.curFloor;
            let _0x1b4c3f = _0x2393d9.tower.floor_level.find(_0x153438 => _0x153438.isPass != 0);
            let _0x35818a = _0x1b4c3f.levelId;
            if (UserManager.getInstance().userInfo.curEnergy < 1) {
              addGameLog("电池不足,勇者之塔结束!");
              break;
            } else {
              let _0x4de97a = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
              await wait(300);
              const _0x553c7d = {
                floor: _0x54f360,
                levelId: _0x35818a
              };
              await this.send_message("cs_brave_tower_fight", _0x553c7d);
              await this.initBattle();
              let _0x846844 = await this.useSkill(_0x4de97a);
              while (_0x846844.result.result == 0) {
                if (_0x846844.result.playerInfos[0].uid == MFC.userInfo.uid) {
                  if (_0x846844.result.playerInfos[0].nextRoundOP !== 1) {
                    addGameLog("首发被击败");
                    break;
                  }
                } else if (_0x846844.result.playerInfos[1].nextRoundOP !== 1) {
                  addGameLog("首发被击败");
                  break;
                }
                addGameLog("未击败，继续攻击");
                _0x846844 = await this.useSkill(_0x4de97a);
              }
              if (_0x846844.result.result === 1) {
                addGameLog("顺利打败勇者之塔");
              } else {
                addGameLog("被勇者之塔击败");
              }
              await wait(300);
            }
          }
        }
      }
    } catch (_0xbd86a8) {
      logger(_0xbd86a8);
    }
  }
}
class LimitBattle extends SuperTask {
  constructor() {
    super();
    this.nowName = "极限挑战";
    this.taskId;
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
  }
  start() {
    super.start();
  }
  async prcessBody() {
    try {
      let _0x20fcaa = await this.getLimits();
      let _0x13e83c = PetManager.getInstance().getAllPets();
      let _0xb94509 = "";
      for (let _0xfb6717 = 0; _0xfb6717 < _0x13e83c.length; _0xfb6717++) {
        if (_0x13e83c[_0xfb6717].level == 1 && _0x20fcaa.indexOf(PetConfig.getDef(_0x13e83c[_0xfb6717].petId).elemType) != -1) {
          _0xb94509 = _0x13e83c[_0xfb6717];
          break;
        }
      }
      if (_0xb94509 == "") {
        addGameLog("背包没1级满足极限挑战属性的精灵");
      } else {
        let _0x154a96 = _0xb94509.skills[0];
        const _0x54fb5e = {
          op: 1,
          arrayType: "campaignDefaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0xb94509.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x54fb5e);
        await wait(300);
        addGameLog("派出: " + _0xb94509.nick);
        const _0x5f3c2e = {
          levelId: 5,
          hirePetList: [_0xb94509.getTime],
          attachBattleSkill: []
        };
        await this.send_message("cs_start_campaign_pet_challenge", _0x5f3c2e);
        await this.initBattle();
        let _0x518d84 = await this.useSkill(_0x154a96);
        while (_0x518d84.result.result == 0) {
          addGameLog("未被击败，继续攻击");
          _0x518d84 = await this.useSkill(_0x154a96);
        }
        if (_0x518d84.result.result === 1) {
          addGameLog("打过boss,按理不会触发");
        } else {
          addGameLog("被Boss击败,完成极限挑战!");
        }
        if (_0x518d84.result.result == 2) {
          let _0x1dc832 = UserManager.getInstance().userInfo.defaultTeam;
          await wait(300);
          await this.send_message("cs_get_daily_task_prize", {
            taskId: this.taskId
          });
          const _0x3b932f = {
            op: 1,
            arrayType: "defaultTeam",
            subArray: 0,
            idx: 1,
            teamUp: 0,
            fightType: 0,
            getTimeList: _0x1dc832
          };
          await this.send_message("cs_new_change_petArray", _0x3b932f);
        }
        await wait(200);
      }
    } catch (_0x2ba253) {
      logger(_0x2ba253);
    }
  }
  async getLimits() {
    let _0x6ba886 = await this.send_message("cs_get_campaign_pet_challenge_boss", {});
    let _0x20de88 = _0x6ba886.todayLimitAttr;
    return _0x20de88;
  }
}
class MapCatch extends SuperTask {
  constructor() {
    super();
    this.nowName = "地图捕捉";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_change_default_team"
    }, {
      watchEventName: "sc_notify_item_change"
    }];
    this.alertWin = null;
    this.capsuleNames = [{
      capName: "普通",
      capId: 4001
    }, {
      capName: "中级",
      capId: 4002
    }, {
      capName: "高级",
      capId: 4003
    }, {
      capName: "无敌",
      capId: 4004
    }];
    this.switchBtnList = [];
    this.radioBtnList = [];
    this.mapBossList = [];
    this.capIds = [];
    this.levelIds = [];
    this.catchCounts = 0;
    this.stopTalent = 0;
    this.addCount = 0;
    this.allCatchPets = [];
    this.canCatchPets = [];
    this.petIndex = 0;
    this.petteamstatus = false;
    this.defaultNum = 999;
  }
  start() {
    let _0x137203 = [];
    MFC.mapManager._bossManager.bossDataList.forEach(_0x197a6d => {
      if (_0x197a6d.canCatch && _0x137203.indexOf(_0x197a6d.sweepShow) == -1) {
        let _0x3f1f91 = PetConfig.getDef(_0x197a6d.sweepShow).name;
        const _0x184cdd = {
          name: _0x3f1f91,
          levelId: _0x197a6d.id,
          PetbookId: _0x197a6d.sweepShow
        };
        this.mapBossList.push(_0x184cdd);
        if (_0x3f1f91.indexOf("皮皮") !== -1) {}
        if (_0x3f1f91.indexOf("皮皮") !== -1) {}
        _0x137203.push(_0x197a6d.sweepShow);
      }
    });
    if (this.mapBossList.length == 0) {
      MFC.alert.show("当前地图场景没有可捕捉的精灵!");
      this.stop();
      return;
    }
    this.canCatchPets = this.getUseCatchPets();
    if (this.canCatchPets.length == 0) {
      MFC.alert.show("精灵背包没有可以捕捉的精灵的精灵!");
      this.stop();
      return;
    }
    super.start();
    let _0x409d2f = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      var _0x3615ab = SimpleAlertUi({
        width: 680,
        height: 450
      });
      _0x409d2f.alertWin = _0x3615ab;
      let _0xe2350f = _0x3615ab.width / 15;
      let _0x197a90 = [];
      const _0x57fe4f = {
        text: "1.胶囊选择  2.精灵选择  3.使用精灵",
        y: _0x3615ab.height / 11
      };
      var _0x4160a5 = createLabel(_0x57fe4f);
      _0x4160a5.x = _0x3615ab.width / 2 - _0x4160a5.width / 2;
      _0x197a90.push(_0x4160a5);
      for (let _0x49fc5f = 0; _0x49fc5f < _0x409d2f.capsuleNames.length; _0x49fc5f++) {
        const _0x3c25de = {
          text: _0x409d2f.capsuleNames[_0x49fc5f].capName,
          x: _0xe2350f,
          y: _0x3615ab.height / 5
        };
        var _0x4160a5 = createLabel(_0x3c25de);
        const _0x145c94 = {
          capId: _0x409d2f.capsuleNames[_0x49fc5f].capId,
          x: _0xe2350f + 60,
          y: _0x3615ab.height / 5
        };
        let _0x1fdd2d = createToggle(_0x145c94);
        _0x1fdd2d.selected = true;
        if (_0x49fc5f) {
          _0x1fdd2d.selected = false;
        }
        _0x197a90.push(_0x4160a5);
        _0x197a90.push(_0x1fdd2d);
        _0xe2350f = _0xe2350f + 150;
        _0x409d2f.switchBtnList.push(_0x1fdd2d);
      }
      let _0x4ddfd7 = _0x3615ab.height / 3.5;
      _0xe2350f = _0x3615ab.width / 15;
      if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_11_13 5:00:00") {
        let _0x11d37f = _0x409d2f.mapBossList.find(_0x2eacfe => _0x2eacfe.name == "贝尔");
        if (_0x11d37f) {
          _0x409d2f.mapBossList.push({
            name: "活动精灵 克里",
            levelId: 364
          });
        }
      }
      for (let _0x55edaf = 0; _0x55edaf < _0x409d2f.mapBossList.length; _0x55edaf++) {
        if (_0x409d2f.mapBossList[_0x55edaf].name == "") {
          continue;
        }
        if (_0x55edaf != 0 && _0x55edaf % 4 == 0) {
          _0x4ddfd7 = _0x4ddfd7 + 30;
          _0xe2350f = _0x3615ab.width / 15;
        }
        const _0x3b68a8 = {
          text: _0x409d2f.mapBossList[_0x55edaf].name,
          textColor: 16776960,
          x: _0xe2350f,
          y: _0x4ddfd7
        };
        let _0x3fd70f = createLabel(_0x3b68a8);
        const _0x237099 = {
          levelId: _0x409d2f.mapBossList[_0x55edaf].levelId,
          x: _0xe2350f + _0x3fd70f.width + 15,
          y: _0x4ddfd7
        };
        let _0x1a1d98 = createToggle(_0x237099);
        _0x1a1d98.selected = true;
        if (_0x55edaf) {
          _0x1a1d98.selected = false;
        }
        _0x197a90.push(_0x3fd70f);
        _0x197a90.push(_0x1a1d98);
        _0xe2350f = _0xe2350f + 150;
        _0x409d2f.switchBtnList.push(_0x1a1d98);
      }
      _0xe2350f = _0x3615ab.width / 15;
      _0x4ddfd7 = _0x4ddfd7 + 30;
      for (let _0xff1e1c = 0; _0xff1e1c < _0x409d2f.canCatchPets.length; _0xff1e1c++) {
        if (_0xff1e1c != 0 && _0xff1e1c % 3 == 0) {
          _0x4ddfd7 = _0x4ddfd7 + 30;
          _0xe2350f = _0x3615ab.width / 15;
        }
        const _0x2815f7 = {
          x: _0xe2350f,
          y: _0x4ddfd7,
          pet: _0x409d2f.canCatchPets[_0xff1e1c]
        };
        let _0xe06234 = createRadio(_0x2815f7);
        try {
          if (localStorage.getItem("map:" + _0x409d2f.canCatchPets[_0xff1e1c].getTime) != null) {
            _0xe06234.selected = JSON.parse(localStorage.getItem("map:" + _0x409d2f.canCatchPets[_0xff1e1c].getTime));
          } else {
            _0xe06234.selected = false;
          }
        } catch (_0x9671df) {
          localStorage.removeItem("map:" + _0x409d2f.canCatchPets[_0xff1e1c].getTime);
          _0xe06234.selected = false;
        }
        if (!(typeof JSON.parse(localStorage.getItem("map:" + _0x409d2f.canCatchPets[_0xff1e1c].getTime)) == "boolean")) {
          localStorage.removeItem("map:" + _0x409d2f.canCatchPets[_0xff1e1c].getTime);
          _0xe06234.selected = false;
        }
        let _0x2612cb = createLabel({
          text: PetConfig.getDef(_0x409d2f.canCatchPets[_0xff1e1c].petId).name + ("(Lv" + PetManager.getInstance().getPetInfoByGetTime(_0x409d2f.canCatchPets[_0xff1e1c].getTime).level + ")"),
          textColor: 16776960,
          x: _0xe2350f + _0xe06234.width + 15,
          y: _0x4ddfd7
        });
        _0xe2350f = _0x2612cb.x + _0x2612cb.width + 20;
        _0x197a90.push(_0x2612cb);
        _0x197a90.push(_0xe06234);
        _0x409d2f.radioBtnList.push(_0xe06234);
      }
      const _0x222784 = {
        prompt: "捕捉只数",
        width: 100,
        x: 30,
        y: _0x3615ab.height / 1.35,
        storageKey: "inputCountsMap"
      };
      var _0x1f9689 = createEdit(_0x222784);
      const _0x3da54f = {
        prompt: "停止天赋",
        width: 100,
        x: _0x1f9689.width + 67,
        y: _0x3615ab.height / 1.35,
        storageKey: "inputTalentMap"
      };
      var _0x38169e = createEdit(_0x3da54f);
      _0x197a90.push(_0x1f9689);
      _0x197a90.push(_0x38169e);
      const _0x4702e2 = {
        text: "捕捉只数",
        textColor: 16776960,
        x: 30,
        y: _0x3615ab.height / 1.35 - 30
      };
      var _0x38bd97 = createLabel(_0x4702e2);
      const _0x2ca664 = {
        text: "捕捉天赋",
        textColor: 16776960,
        x: _0x1f9689.width + 67,
        y: _0x3615ab.height / 1.35 - 30
      };
      var _0x337300 = createLabel(_0x2ca664);
      const _0x403c38 = {
        text: "是否上阵多精灵",
        textColor: 16776960,
        x: _0x38169e.x + 150,
        y: _0x3615ab.height / 1.35 - 30
      };
      var _0x592d6c = createLabel(_0x403c38);
      const _0xff5490 = {
        text: "胶囊使用次数\n(不输入会使用到抓到)",
        textColor: 16776960,
        x: _0x592d6c.x + 140,
        y: _0x3615ab.height / 1.35 - 45
      };
      var _0x46851e = createLabel(_0xff5490);
      _0x197a90.push(_0x38bd97);
      _0x197a90.push(_0x337300);
      _0x197a90.push(_0x592d6c);
      _0x197a90.push(_0x46851e);
      const _0x4937fc = {
        x: _0x592d6c.x,
        y: _0x3615ab.height / 1.35,
        selected: false,
        storageKey: "petteamstatu"
      };
      let _0x15a30c = createToggle(_0x4937fc);
      _0x197a90.push(_0x15a30c);
      const _0x483e4c = {
        prompt: "胶囊次数",
        width: 100,
        x: _0x592d6c.x + 140,
        y: _0x3615ab.height / 1.35,
        storageKey: "inputcapNum"
      };
      var _0x3cfe11 = createEdit(_0x483e4c);
      _0x197a90.push(_0x3cfe11);
      _0x409d2f.addAllUis(_0x197a90);
      _0x3615ab.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x409d2f.stop();
      }, function () {
        let _0x482038 = 0;
        for (let _0x5834dd = 0; _0x5834dd < _0x409d2f.radioBtnList.length; _0x5834dd++) {
          if (_0x409d2f.radioBtnList[_0x5834dd].selected) {
            _0x482038 = 1;
          }
          localStorage.setItem("map:" + _0x409d2f.radioBtnList[_0x5834dd].pet.getTime, _0x409d2f.radioBtnList[_0x5834dd].selected);
        }
        localStorage.setItem("inputTalentMap", _0x38169e.text);
        localStorage.setItem("inputCountsMap", _0x1f9689.text);
        localStorage.setItem("inputcapNum", _0x3cfe11.text);
        localStorage.setItem("petteamstatu", _0x15a30c.selected);
        if (_0x15a30c.selected) {
          _0x409d2f.petteamstatus = true;
        } else {
          _0x409d2f.petteamstatus = false;
        }
        if (_0x482038 == 0) {
          MFC.bubbleAlert.showAlert("请勾选使用捕捉精灵的精灵!");
          return true;
        }
        let _0x30cd8f = [];
        let _0x436942 = [];
        for (let _0x4eed2e = 0; _0x4eed2e < _0x409d2f.switchBtnList.length; _0x4eed2e++) {
          if (_0x4eed2e <= 3 && _0x409d2f.switchBtnList[_0x4eed2e].selected) {
            _0x30cd8f.push(_0x409d2f.switchBtnList[_0x4eed2e].capId);
          }
          if (_0x4eed2e > 3 && _0x409d2f.switchBtnList[_0x4eed2e].selected) {
            _0x436942.push(_0x409d2f.switchBtnList[_0x4eed2e].levelId);
          }
        }
        if (_0x30cd8f.length == 0) {
          MFC.bubbleAlert.showAlert("至少设置一种胶囊类型");
          return true;
        }
        if (_0x436942.length == 0) {
          MFC.bubbleAlert.showAlert("至少设置一种精灵");
          return true;
        }
        if (isNaN(parseInt(_0x1f9689.text))) {
          MFC.bubbleAlert.showAlert("请输入有效捕捉次数");
          return true;
        }
        if (isNaN(parseInt(_0x38169e.text)) || parseInt(_0x38169e.text) > 31 || parseInt(_0x38169e.text) < 0) {
          MFC.bubbleAlert.showAlert("请输入有效精灵天赋");
          return true;
        }
        _0x409d2f.capIds = _0x30cd8f;
        _0x409d2f.levelIds = _0x436942;
        if (!isNaN(parseInt(_0x3cfe11.text))) {
          _0x409d2f.defaultNum = parseInt(_0x3cfe11.text);
        }
        _0x409d2f.catchCounts = parseInt(_0x1f9689.text);
        _0x409d2f.stopTalent = parseInt(_0x38169e.text);
        _0x409d2f.prcessBody();
      }], null);
      _0x3615ab.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (this.canCatchPets.length == 0) {
        var _0x28940a = this.checkUseCatchPet();
      } else {
        var _0x28940a;
        for (let _0x134efd = 0; _0x134efd < this.radioBtnList.length; _0x134efd++) {
          if (this.radioBtnList[_0x134efd].selected) {
            var _0x28940a = this.radioBtnList[_0x134efd].pet;
            break;
          }
        }
      }
      if (!_0x28940a) {
        addGameLog("没有相关满足条件的捕捉精灵，捕捉结束");
        this.stop();
        return false;
      }
      await wait(200);
      let _0x10757d = [];
      _0x10757d.push(_0x28940a.getTime);
      let _0x1d4e96 = PetManager.getInstance().getAllPets().map(_0x574f4e => {
        if (_0x574f4e.level <= PetManager.getInstance().getPetInfoByGetTime(_0x28940a.getTime).level && _0x574f4e.petid !== 1656 && _0x574f4e.petid !== 10746 && _0x574f4e.nick.indexOf("无名") == -1 && _0x574f4e.getTime !== _0x28940a.getTime && _0x574f4e.nick.indexOf("熊猫") == -1 && _0x574f4e.nick.indexOf("阿勇") == -1) {
          return _0x574f4e;
        }
      }).filter(_0x2ef16f => _0x2ef16f).sort((_0x2ebdd2, _0x2667d7) => _0x2667d7.battleValues[0] - _0x2ebdd2.battleValues[0]);
      if (this.petteamstatus) {
        if (_0x1d4e96.length > 4) {
          for (let _0x333f5a = 0; _0x333f5a < 4; _0x333f5a++) {
            _0x10757d.push(_0x1d4e96[_0x333f5a].getTime);
          }
        } else {
          addGameLog("没有4只等级低于" + _0x28940a.nick + "的精灵");
        }
      }
      const _0x15b109 = {
        op: 1,
        arrayType: "defaultTeam",
        subArray: 0,
        idx: 1,
        teamUp: 0,
        fightType: 0,
        getTimeList: _0x10757d
      };
      await this.send_message("cs_new_change_petArray", _0x15b109);
      addGameLog("设置" + PetConfig.getDef(_0x28940a.petId).name + "首发成功！");
      if (this.petIndex === this.levelIds.length - 1) {
        this.petIndex = 0;
      } else {
        this.petIndex++;
      }
      if (this.levelIds[this.petIndex] == 362) {
        if (MFC.attr.getAttr(18878) == 2) {
          addGameLog("每日捕捉的闪光皮皮已经到达上限!");
          MFC.bubbleAlert.showAlert("每日捕捉的闪光皮皮已经到达上限!");
          this.logAllCatchPets(this.allCatchPets);
          this.stop();
          return;
        }
      }
      if (this.levelIds[this.petIndex] == 364) {
        if (MFC.attr.getAttr(18879) == 5) {
          addGameLog("每日捕捉的克里已经到达上限!");
          MFC.alert.show("每日捕捉的克里达已经到达上限!");
          this.stop();
          return;
        }
      }
      if (this.levelIds[this.petIndex] == 361) {
        if (MFC.attr.getAttr(18877) == 3) {
          addGameLog("每日捕捉的小豆芽已经到达上限!");
          MFC.bubbleAlert.showAlert("每日捕捉的小豆芽已经到达上限!");
          this.logAllCatchPets(this.allCatchPets);
          this.stop();
          return;
        }
      }
      let _0x3a939b = await this.send_message("cs_pve_activity_battle", {
        levelId: this.levelIds[this.petIndex],
        battleType: 3
      });
      if (JSON.stringify(_0x3a939b).includes("不是开放时间")) {
        MFC.alert.show("当前精灵不是开放时间\n请等待时间开放");
        this.stop();
      }
      await this.initBattle();
      let _0x3c8c0b = randomCap(this.capIds);
      if (_0x3c8c0b == "NoCap") {
        addGameLog("无可用胶囊,捕捉任务结束");
        this.stop();
        return false;
      }
      await this.send_message("cs_online_load_battle_result", {
        groupId: ""
      });
      await wait(200);
      let _0x5235d6 = _0x28940a.skillID;
      let _0x39bb34 = await this.useSkill(_0x5235d6);
      let _0x3bcffc = true;
      while (1) {
        if (_0x39bb34.result.result !== 0) {
          addGameLog("怪物已经死亡!!!!");
          await this.prcessBody();
          return false;
        }
        addGameLog("未击败，继续攻击");
        if (_0x39bb34.result.playerInfos[0].uid == MFC.userInfo.uid) {
          if (_0x39bb34.result.playerInfos[0].nextRoundOP !== 1) {
            addGameLog("首发被击败");
            _0x3bcffc = false;
            break;
          }
        } else if (_0x39bb34.result.playerInfos[1].nextRoundOP !== 1) {
          addGameLog("首发被击败");
          _0x3bcffc = false;
          break;
        }
        if (_0x39bb34.result.playerInfos[0].uid !== MFC.userInfo.uid) {
          addGameLog("怪物当前血量:" + _0x39bb34.result.playerInfos[0].petInfos[0].crtHp);
          if (_0x39bb34.result.playerInfos[0].petInfos[0].crtHp <= 1) {
            break;
          }
        } else {
          addGameLog("怪物当前血量:" + _0x39bb34.result.playerInfos[1].petInfos[0].crtHp);
          if (_0x39bb34.result.playerInfos[1].petInfos[0].crtHp <= 1) {
            break;
          }
        }
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        await wait(200);
        _0x39bb34 = await this.useSkill(_0x5235d6);
      }
      await wait(200);
      this.CatchPetDatas = null;
      let _0x383e9d = 1;
      let _0x5cc2a5 = 0;
      while (_0x39bb34.result.result == 0) {
        if (_0x3bcffc) {
          if (_0x39bb34.result.playerInfos[0].uid == MFC.userInfo.uid) {
            if (_0x39bb34.result.playerInfos[0].nextRoundOP !== 1) {
              addGameLog("首发被击败,切换精灵");
              await this.send_message("cs_online_load_battle_result", {
                groupId: ""
              });
              const _0x819a9a = {
                petIndex: _0x383e9d
              };
              const _0x22da1b = {
                opType: 2,
                data: _0x819a9a,
                groupId: ""
              };
              await this.send_message("cs_online_player_operation", _0x22da1b);
              _0x383e9d++;
              if (_0x383e9d == 4) {
                break;
              }
            }
          } else if (_0x39bb34.result.playerInfos[1].nextRoundOP !== 1) {
            addGameLog("首发被击败,切换精灵");
            await this.send_message("cs_online_load_battle_result", {
              groupId: ""
            });
            const _0x242676 = {
              petIndex: _0x383e9d
            };
            const _0x4586e0 = {
              opType: 2,
              data: _0x242676,
              groupId: ""
            };
            await this.send_message("cs_online_player_operation", _0x4586e0);
            _0x383e9d++;
            if (_0x383e9d == 4) {
              break;
            }
          }
        } else if (_0x39bb34.result.playerInfos[0].uid == MFC.userInfo.uid) {
          if (_0x39bb34.result.playerInfos[0].nextRoundOP !== 1) {
            addGameLog("首发被击败,野怪未达1血");
            break;
          }
        } else if (_0x39bb34.result.playerInfos[1].nextRoundOP !== 1) {
          addGameLog("首发被击败,野怪未达1血");
          break;
        }
        addGameLog("怪物血量已经为1,开始捕捉");
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        let _0x18b6b0 = randomCap(this.capIds);
        if (_0x18b6b0 == "NoCap") {
          addGameLog("无可用胶囊,捕捉任务结束");
          this.logAllCatchPets(this.allCatchPets);
          this.stop();
          return false;
        }
        await wait(400);
        if (this.defaultNum > _0x5cc2a5) {
          addGameLog("使用:" + _0x18b6b0.name + "胶囊,剩余:" + _0x18b6b0.num);
          _0x39bb34 = await this.useItem(_0x18b6b0.itemId);
          let _0x4cf96a = await this.waitEvent("sc_notify_item_change");
          _0x4cf96a.gameBody.splice(0, _0x4cf96a.gameBody.length);
          _0x5cc2a5++;
        } else {
          addGameLog("捕抓" + this.defaultNum + "次未抓到,重新捕抓");
          break;
        }
        if (this.CatchPetDatas || window.nowTask.CatchPetDatas) {
          if (window.nowTask.CatchPetDatas) {
            this.CatchPetDatas = window.nowTask.CatchPetDatas;
          }
          addGameLog("捕捉成功: " + this.CatchPetDatas.pet.nick + " 天赋:" + this.CatchPetDatas.pet.talent);
          MFC.bubbleAlert.showAlert("捕捉成功: " + this.CatchPetDatas.pet.nick + " 天赋:" + this.CatchPetDatas.pet.talent);
          this.allCatchPets.push({
            nick: this.CatchPetDatas.pet.nick,
            talent: this.CatchPetDatas.pet.talent
          });
          this.addCount++;
          if (this.CatchPetDatas.pet.talent >= this.stopTalent) {
            addGameLog("天赋满足:" + this.stopTalent, "停止");
            this.logAllCatchPets(this.allCatchPets);
            this.stop();
            return true;
          }
          break;
        }
        addGameLog("继续捕捉");
      }
      if (_0x39bb34.result.result === 2) {
        addGameLog("被野怪击败");
      }
      if (this.addCount >= this.catchCounts) {
        addGameLog("捕捉执行完毕:" + this.addCount + "次");
        this.logAllCatchPets(this.allCatchPets);
        this.stop();
        return true;
      } else {
        await this.prcessBody();
        return;
      }
    } catch (_0xf361ca) {
      logger(_0xf361ca);
      this.logAllCatchPets(this.allCatchPets);
    }
  }
  logAllCatchPets(_0x3473dc) {
    if (_0x3473dc.length > 0) {
      let _0x4af762 = [];
      for (let _0x34fe15 = 0; _0x34fe15 < _0x3473dc.length; _0x34fe15++) {
        _0x4af762.push("\n精灵: " + _0x3473dc[_0x34fe15].nick + " 天赋: " + _0x3473dc[_0x34fe15].talent);
      }
      addGameLog(_0x4af762.join(""));
    }
    addGameLog("\n捕捉精灵汇总:");
  }
  getUseCatchPets() {
    const _0x1a5c46 = {
      处处留情: 31598,
      真抽打: 31993,
      手下留情: 10057,
      手下留情Plus: 100125,
      天魔裂空闪: 400005
    };
    const _0x3afd06 = PetManager.getInstance().getAllPets();
    const _0x27026d = _0x3afd06.flatMap(_0x45f284 => Object.entries(_0x1a5c46).filter(([_0x124038, _0x36647d]) => _0x45f284.skills.includes(_0x36647d)).map(([_0x2268af, _0x2c17bb]) => ({
      getTime: _0x45f284.getTime,
      skillID: _0x2c17bb,
      petId: _0x45f284.petId,
      petTokenGetTimeList: _0x45f284.petTokenGetTimeList,
      skills: _0x45f284.skills,
      nick: _0x45f284.nick
    }))).filter(function (_0x458f57) {
      if (_0x458f57.nick == "皮皮" && _0x458f57.skills.indexOf(400005) !== -1) {
        if (_0x458f57.petTokenGetTimeList[0] !== 0 && _0x458f57.petTokenGetTimeList[1] !== 0 && _0x458f57.petTokenGetTimeList[2] !== 0) {
          if (PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x458f57.petTokenGetTimeList[0]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x458f57.petTokenGetTimeList[1]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x458f57.petTokenGetTimeList[2]).ench).enchId == 101) {
            return _0x458f57;
          }
        }
      } else {
        return _0x458f57;
      }
    });
    if (_0x27026d.length) {
      return _0x27026d;
    } else {
      return false;
    }
  }
  checkUseCatchPet() {
    const _0x181952 = {
      处处留情: 31598,
      真抽打: 31993,
      手下留情: 10057,
      手下留情Plus: 100125,
      天魔裂空闪: 400005
    };
    const _0x4a0c72 = Object.values(_0x181952).map(() => false);
    const _0xdda3c2 = PetManager.getInstance().getAllPets();
    for (let _0x48b2d9 = 0; _0x48b2d9 < _0xdda3c2.length; _0x48b2d9++) {
      const _0x3a4cf2 = _0xdda3c2[_0x48b2d9];
      const _0x44e1c3 = _0x3a4cf2.skills;
      if (_0x3a4cf2.level >= 6) {
        Object.values(_0x181952).some((_0xa59ebc, _0x1ab1c0) => {
          if (_0x3a4cf2.nick == "皮皮" && _0x3a4cf2.skills.indexOf(400005) !== -1) {
            if (_0x3a4cf2.petTokenGetTimeList[0] !== 0 && _0x3a4cf2.petTokenGetTimeList[1] !== 0 && _0x3a4cf2.petTokenGetTimeList[2] !== 0) {
              if (PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x3a4cf2.petTokenGetTimeList[0]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x3a4cf2.petTokenGetTimeList[1]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x3a4cf2.petTokenGetTimeList[2]).ench).enchId == 101) {} else {
                return false;
              }
            } else {
              return false;
            }
          }
          if (_0x44e1c3.includes(_0xa59ebc)) {
            const _0x6be23a = {
              getTime: _0x3a4cf2.getTime,
              skillID: _0xa59ebc,
              petId: _0x3a4cf2.petId
            };
            _0x4a0c72[_0x1ab1c0] = _0x6be23a;
            return true;
          }
          return false;
        });
      }
    }
    return _0x4a0c72.find(_0x5044d1 => _0x5044d1) || false;
  }
}
class Mine extends SuperTask {
  constructor() {
    super();
    this.nowName = "采矿";
  }
  start() {
    super.start();
    let _0x986047 = this;
    MFC.alert.show("确定进行采矿吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x3dd592) {
      _0x986047.stop();
    }, function (_0x4d7e54) {
      _0x986047.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      const _0x18c3a0 = xls.collect.getItems().map(_0x264e22 => {
        if (_0x264e22.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") <= _0x264e22.endTime) {
          return _0x264e22.id;
        }
      }).filter(_0x579be1 => _0x579be1 !== undefined);
      const _0x53defa = xls.collect.getItems().map(_0x5a71c0 => {
        if (_0x5a71c0.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") <= _0x5a71c0.endTime) {
          return _0x5a71c0.dailyLimit;
        }
      }).filter(_0x5b2308 => _0x5b2308 !== undefined);
      const _0x31efa = _0x18c3a0.map(_0x305b07 => {
        return MFC.attr.getAttr(parseInt(MFC.attrType.dailyMiningStart) + _0x305b07);
      });
      let _0x3354a1 = 0;
      while (_0x3354a1 < _0x18c3a0.length) {
        logger(_0x3354a1);
        if (_0x31efa[_0x3354a1] < _0x53defa[_0x3354a1]) {
          const _0x4f58b8 = {
            id: _0x18c3a0[_0x3354a1]
          };
          await this.send_message("cs_mining", _0x4f58b8);
          _0x31efa[_0x3354a1]++;
        } else {
          let _0xfb57d7 = xls.collect.getItem(_0x18c3a0[_0x3354a1]).name;
          addGameLog(_0xfb57d7 + "采集完毕");
          _0x3354a1++;
        }
      }
      addGameLog("所有采集执行完毕");
      this.stop();
    } catch (_0x929746) {}
  }
}
class DailyTask extends SuperTask {
  constructor() {
    super();
    this.nowName = "日常";
    this.attr = 0;
    this.nowPetData = null;
    this.switchBtnList = [];
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_notify_change_pet"
    }, {
      watchEventName: "sc_change_default_team"
    }, {
      watchEventName: "sc_notify_item_change"
    }];
  }
  start() {
    super.start();
    let _0x306292 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x5c1cea = SimpleAlertUi({
        width: 460,
        height: 460
      });
      _0x306292.alertWin = _0x5c1cea;
      let _0x5ef646 = [];
      const _0x5709eb = {
        text: "一键日常",
        y: _0x5c1cea.height / 16
      };
      var _0x38c5b5 = createLabel(_0x5709eb);
      _0x38c5b5.x = _0x5c1cea.width / 2 - _0x38c5b5.width / 2;
      _0x5ef646.push(_0x38c5b5);
      const _0x467eb0 = {
        text: "注意:",
        textColor: 16776960,
        x: 30,
        y: _0x38c5b5.y + _0x38c5b5.height + 12
      };
      var _0x262a71 = createLabel(_0x467eb0);
      _0x5ef646.push(_0x262a71);
      const _0x416f12 = {
        text: "[使用挑战阵容1]请确保将强力的精灵设置首发",
        textColor: 16777215,
        x: 40,
        y: _0x262a71.y + _0x262a71.height + 10
      };
      var _0x529f27 = createLabel(_0x416f12);
      _0x5ef646.push(_0x529f27);
      const _0x33babd = {
        text: "请确保首发技能为威力最大的技能",
        textColor: 16777215,
        x: 40,
        y: _0x529f27.y + _0x529f27.height + 10
      };
      var _0x30b496 = createLabel(_0x33babd);
      _0x5ef646.push(_0x30b496);
      const _0x4d93de = {
        text: "进化达人为幽浮,会消耗经验至20级.并消耗6个羽之石\n勇者之塔需要首发未满100级,否则勇者之塔不会完成5次",
        textColor: 16776960,
        x: 40,
        y: _0x30b496.y + _0x30b496.height + 10
      };
      var _0x240361 = createLabel(_0x4d93de);
      _0x5ef646.push(_0x240361);
      let _0x459929 = [{
        label: {
          text: "野怪10次"
        },
        switch: {
          storageKey: "mapMonster10switch",
          taskId: 19,
          taskName: "mapMonster10"
        }
      }, {
        label: {
          text: "分享电池"
        },
        switch: {
          storageKey: "shareBatteryswitch",
          taskId: 16,
          taskName: "shareBattery"
        }
      }, {
        label: {
          text: "前往观战"
        },
        switch: {
          storageKey: "lookBattleswitch",
          taskId: 15,
          taskName: "lookBattle"
        }
      }, {
        label: {
          text: "先锋达人"
        },
        switch: {
          storageKey: "sptBattleswitch",
          taskId: 5,
          taskName: "sptBattle"
        }
      }, {
        label: {
          text: "进化达人"
        },
        switch: {
          storageKey: "evolutionswitch",
          taskId: 13,
          taskName: "evolution"
        }
      }, {
        label: {
          text: "购买豆子"
        },
        switch: {
          storageKey: "buyCoinswitch",
          taskId: 14,
          taskName: "buyCoin"
        }
      }, {
        label: {
          text: "捕捉达人"
        },
        switch: {
          storageKey: "catchPet1switch",
          taskId: 6,
          taskName: "catchPet1"
        }
      }, {
        label: {
          text: "普通副本"
        },
        switch: {
          storageKey: "normalLevelswitch",
          taskId: 3,
          taskName: "normalLevel"
        }
      }, {
        label: {
          text: "精英副本"
        },
        switch: {
          storageKey: "superLevelswitch",
          taskId: 4,
          taskName: "superLevel"
        }
      }, {
        label: {
          text: "星际迷航"
        },
        switch: {
          storageKey: "TrekBattleswitch",
          taskId: 9,
          taskName: "TrekBattle"
        }
      }, {
        label: {
          text: "豆子作战"
        },
        switch: {
          storageKey: "CoinBattleswitch",
          taskId: 10,
          taskName: "CoinBattle"
        }
      }, {
        label: {
          text: "极限挑战"
        },
        switch: {
          storageKey: "limitBattleswitch",
          taskId: 11,
          taskName: "limitBattle"
        }
      }, {
        label: {
          text: "对战达人"
        },
        switch: {
          storageKey: "PVP3switch",
          taskId: 8,
          taskName: "PVP3"
        }
      }, {
        label: {
          text: "勇者之塔"
        },
        switch: {
          storageKey: "braveryswitch",
          taskId: 22,
          taskName: "bravery"
        }
      }, {
        label: {
          text: "能量补给"
        },
        switch: {
          storageKey: "nl5switch",
          taskId: 2,
          taskName: "nl5"
        }
      }, {
        label: {
          text: "一键水滴"
        },
        switch: {
          storageKey: "sdswitch",
          taskId: null,
          taskName: "sd"
        }
      }];
      let _0x56f8ba = 30;
      let _0x19073f = _0x240361.y + _0x240361.height + 20;
      for (let _0xaea7ff = 0; _0xaea7ff < _0x459929.length; _0xaea7ff++) {
        const _0x3ad5c8 = {
          text: _0x459929[_0xaea7ff].label.text,
          x: _0x56f8ba,
          y: _0x19073f
        };
        let _0x5631d9 = createLabel(_0x3ad5c8);
        const _0x2e8f14 = {
          x: _0x5631d9.x + _0x5631d9.width + 10,
          y: _0x19073f,
          selected: true,
          storageKey: _0x459929[_0xaea7ff].switch.storageKey,
          taskId: _0x459929[_0xaea7ff].switch.taskId,
          taskName: _0x459929[_0xaea7ff].switch.taskName
        };
        let _0x6f6e9e = createToggle(_0x2e8f14);
        _0x56f8ba = _0x56f8ba + _0x5631d9.width + 10 + _0x6f6e9e.width + 10;
        this.switchBtnList.push(_0x6f6e9e);
        _0x5ef646.push(_0x5631d9);
        _0x5ef646.push(_0x6f6e9e);
        if ((_0xaea7ff + 1) % 3 == 0) {
          _0x19073f = _0x19073f + _0x6f6e9e.height + 10;
          _0x56f8ba = 30;
        }
      }
      _0x306292.addAllUis(_0x5ef646);
      _0x5c1cea.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x306292.stop();
      }, function () {
        _0x306292.switchBtnList.forEach(_0x485821 => localStorage.setItem(_0x485821.storageKey, _0x485821.selected));
        _0x306292.prcessBody();
      }], null);
      _0x5c1cea.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x3eac2a = await this.send_message("cs_get_daily_task_list", {});
      for (let _0x455e9f = 0; _0x455e9f < this.switchBtnList.length; _0x455e9f++) {
        if (this.switchBtnList[_0x455e9f].taskName == "mapMonster10" && this.switchBtnList[_0x455e9f].selected) {
          let _0x349d58 = this.switchBtnList[_0x455e9f].taskId;
          let _0x10dc72 = _0x3eac2a.dailyTask.find(_0x4e2987 => _0x4e2987.taskId === _0x349d58).taskProcess;
          if (_0x10dc72 < 10) {
            addGameLog("执行野怪10次");
            let _0x21f8c9 = new FightMapBoss(10);
            await _0x21f8c9.prcessBody();
            await wait(300);
            const _0x2695cb = {
              taskId: _0x349d58
            };
            await this.send_message("cs_get_daily_task_prize", _0x2695cb);
          } else if (_0x10dc72 == 10) {
            await wait(300);
            addGameLog("野怪10次已完成");
            const _0x18003d = {
              taskId: _0x349d58
            };
            await this.send_message("cs_get_daily_task_prize", _0x18003d);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "shareBattery" && this.switchBtnList[_0x455e9f].selected) {
          let _0x2497ae = this.switchBtnList[_0x455e9f].taskId;
          let _0x3512f0 = _0x3eac2a.dailyTask.find(_0x1e6ca8 => _0x1e6ca8.taskId === _0x2497ae).taskProcess;
          if (_0x3512f0 < 1) {
            await wait(300);
            addGameLog("执行分享电池");
            await this.send_message("cs_share_succeed", {});
            await wait(300);
            const _0x1c0dc0 = {
              taskId: _0x2497ae
            };
            await this.send_message("cs_get_daily_task_prize", _0x1c0dc0);
          } else if (_0x3512f0 == 1) {
            await wait(300);
            addGameLog("分享电池完成");
            const _0x2366a0 = {
              taskId: _0x2497ae
            };
            await this.send_message("cs_get_daily_task_prize", _0x2366a0);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "lookBattle" && this.switchBtnList[_0x455e9f].selected) {
          let _0x187ed4 = this.switchBtnList[_0x455e9f].taskId;
          let _0x99f3c = _0x3eac2a.dailyTask.find(_0x7bd755 => _0x7bd755.taskId === _0x187ed4).taskProcess;
          if (_0x99f3c < 1) {
            addGameLog("执行观战");
            let _0x414636 = await this.send_message("sc_battle_watch_get_room", {
              type: 1,
              start: 0,
              end: 15,
              battleType: 1
            });
            logger(_0x414636);
            let _0x34b7c8 = "";
            for (let _0x464d64 = 0; _0x464d64 < _0x414636.ranking.length; _0x464d64++) {
              if (_0x414636.ranking[_0x464d64].combatantA.match_permissions == "1") {
                _0x34b7c8 = _0x414636.ranking[_0x464d64].roomId;
              }
            }
            addGameLog("进入对战房间");
            if (_0x34b7c8 == "") {
              addGameLog("无符合条件的观战");
            } else {
              await wait(300);
              await this.send_message("cs_battle_watch", {
                watchId: _0x34b7c8,
                type: 1,
                watchUid: _0x34b7c8.split("_")[0]
              });
              await wait(200);
              winLog.onOpenPanel();
              await this.send_message("cs_battle_watch", {
                watchId: _0x34b7c8,
                type: 2,
                watchUid: _0x34b7c8.split("_")[0]
              });
              winLog.txtWatcher.text = "正在执行:" + window.nowTask.nowName;
              await wait(300);
              const _0x10eb79 = {
                taskId: _0x187ed4
              };
              await this.send_message("cs_get_daily_task_prize", _0x10eb79);
            }
          } else if (_0x99f3c == 1) {
            await wait(300);
            addGameLog("观战完成");
            const _0x283103 = {
              taskId: _0x187ed4
            };
            await this.send_message("cs_get_daily_task_prize", _0x283103);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "sptBattle" && this.switchBtnList[_0x455e9f].selected) {
          let _0x99d52d = this.switchBtnList[_0x455e9f].taskId;
          let _0x35bc0e = _0x3eac2a.dailyTask.find(_0x181e2f => _0x181e2f.taskId === _0x99d52d).taskProcess;
          if (_0x35bc0e < 1) {
            addGameLog("执行spt挑战");
            if (UserManager.getInstance().userInfo.curEnergy < 20) {
              addGameLog("电池不足,取消spt挑战!");
              continue;
            }
            let _0x5f594a = PetManager.getInstance().getAllPets();
            let _0x41e675 = "";
            for (let _0x1374aa = 0; _0x1374aa < _0x5f594a.length; _0x1374aa++) {
              if (_0x5f594a[_0x1374aa].level == 1) {
                _0x41e675 = _0x5f594a[_0x1374aa];
                break;
              }
            }
            if (_0x41e675 == "") {
              addGameLog("背包没1级精灵");
            } else {
              let _0x3852aa = _0x41e675.skills[0];
              let _0x28cf08 = UserManager.getInstance().userInfo.defaultTeam;
              await this.send_message("cs_new_change_petArray", {
                op: 2,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: []
              });
              const _0x4f97ec = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x41e675.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x4f97ec);
              await wait(300);
              addGameLog("派出: " + _0x41e675.nick + " 对战: 里奥斯");
              const _0x928950 = {
                levelId: 3,
                getTimeList: [_0x41e675.getTime]
              };
              await this.send_message("cs_pve_planet_spt_start_battle", _0x928950);
              await this.initBattle();
              let _0x57e7c2 = await this.useSkill(_0x3852aa);
              while (_0x57e7c2.result.result == 0) {
                addGameLog("未被击败，继续攻击");
                _0x57e7c2 = await this.useSkill(_0x3852aa);
              }
              if (_0x57e7c2.result.result === 1) {
                addGameLog("打过boss,按理不会触发");
              } else {
                addGameLog("被Boss击败,完成spt挑战!");
              }
              addGameLog("将阵容切换回来");
              await wait(200);
              const _0x2748ed = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: _0x28cf08
              };
              await this.send_message("cs_new_change_petArray", _0x2748ed);
              await wait(200);
              const _0x5f50c7 = {
                taskId: _0x99d52d
              };
              await this.send_message("cs_get_daily_task_prize", _0x5f50c7);
            }
          } else if (_0x35bc0e == 1) {
            await wait(300);
            addGameLog("spt完成");
            const _0x42fb15 = {
              taskId: _0x99d52d
            };
            await this.send_message("cs_get_daily_task_prize", _0x42fb15);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "normalLevel" && this.switchBtnList[_0x455e9f].selected) {
          let _0x2bbae6 = this.switchBtnList[_0x455e9f].taskId;
          let _0x55d753 = _0x3eac2a.dailyTask.find(_0x19bd1a => _0x19bd1a.taskId === _0x2bbae6).taskProcess;
          if (_0x55d753 < 5) {
            addGameLog("开始扫荡普通关卡");
            if (UserManager.getInstance().userInfo.curEnergy < 25) {
              addGameLog("电池不足,取消普通副本挑战!");
            } else {
              await this.send_message("cs_sd_pve_battle", {
                levelId: 23,
                loop: 5
              });
              addGameLog("扫荡五次云霄星二层完毕");
              await wait(300);
              const _0x3ff27e = {
                taskId: _0x2bbae6
              };
              await this.send_message("cs_get_daily_task_prize", _0x3ff27e);
            }
          } else if (_0x55d753 == 5) {
            await wait(300);
            addGameLog("普通关卡5次完成");
            const _0x269d2d = {
              taskId: _0x2bbae6
            };
            await this.send_message("cs_get_daily_task_prize", _0x269d2d);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "catchPet1" && this.switchBtnList[_0x455e9f].selected) {
          let _0x1870c1 = UserManager.getInstance().userInfo.defaultTeam;
          let _0x31627c = this.switchBtnList[_0x455e9f].taskId;
          let _0x15dd2a = _0x3eac2a.dailyTask.find(_0x598372 => _0x598372.taskId === _0x31627c).taskProcess;
          if (_0x15dd2a < 1) {
            addGameLog("开始捕捉幽浮");
            await wait(200);
            let _0x3a9b8e = new MapCatch();
            _0x3a9b8e.capIds = [4001, 4002];
            _0x3a9b8e.levelIds = [34];
            _0x3a9b8e.catchCounts = 1;
            _0x3a9b8e.stopTalent = 31;
            await _0x3a9b8e.prcessBody();
            addGameLog("将阵容切换回来");
            await wait(200);
            const _0x185058 = {
              op: 1,
              arrayType: "defaultTeam",
              subArray: 0,
              idx: 1,
              teamUp: 0,
              fightType: 0,
              getTimeList: _0x1870c1
            };
            await this.send_message("cs_new_change_petArray", _0x185058);
            let _0x598956 = await this.send_message("cs_get_daily_task_list", {});
            let _0x4b4d25 = _0x598956.dailyTask.find(_0x47f88e => _0x47f88e.taskId === _0x31627c).taskProcess;
            if (_0x4b4d25 == 1) {
              await wait(300);
              const _0x54cc28 = {
                taskId: _0x31627c
              };
              await this.send_message("cs_get_daily_task_prize", _0x54cc28);
            }
          } else if (_0x15dd2a == 1) {
            await wait(300);
            addGameLog("捕捉达人完成");
            const _0x2d00db = {
              taskId: _0x31627c
            };
            await this.send_message("cs_get_daily_task_prize", _0x2d00db);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "evolution" && this.switchBtnList[_0x455e9f].selected) {
          let _0x933d3d = this.switchBtnList[_0x455e9f].taskId;
          let _0x50f368 = _0x3eac2a.dailyTask.find(_0x106361 => _0x106361.taskId === _0x933d3d).taskProcess;
          if (_0x50f368 < 1) {
            addGameLog("开始进化幽浮");
            let _0x59f2e8 = PetManager.getInstance().getAllPets();
            let _0x37c444 = "";
            for (let _0x115118 = 0; _0x115118 < _0x59f2e8.length; _0x115118++) {
              let _0x193a64 = _0x59f2e8[_0x115118];
              if (_0x193a64.petId == 25) {
                _0x37c444 = _0x193a64;
                break;
              }
            }
            if (_0x37c444 == "") {
              addGameLog("背包中没有幽浮");
              let _0x343a6e = UserManager.getInstance().userInfo.defaultTeam;
              addGameLog("开始捕捉幽浮");
              await wait(200);
              let _0x4fc2b2 = new MapCatch();
              _0x4fc2b2.capIds = [4001, 4002];
              _0x4fc2b2.levelIds = [34];
              _0x4fc2b2.catchCounts = 1;
              _0x4fc2b2.stopTalent = 31;
              await _0x4fc2b2.prcessBody();
              addGameLog("将阵容切换回来");
              await wait(200);
              const _0x17fcca = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: _0x343a6e
              };
              await this.send_message("cs_new_change_petArray", _0x17fcca);
              _0x59f2e8 = PetManager.getInstance().getAllPets();
              let _0x1d1205 = "";
              for (let _0x5f1e39 = 0; _0x5f1e39 < _0x59f2e8.length; _0x5f1e39++) {
                let _0x20ef35 = _0x59f2e8[_0x5f1e39];
                if (_0x20ef35.petId == 25) {
                  _0x1d1205 = _0x20ef35;
                  break;
                }
              }
              let _0x42d80f = 0;
              if (getSeerItemNum(30031) < 6) {
                addGameLog("羽之石不足6个,停止进化");
              } else {
                addGameLog("选中幽浮 等级: " + _0x1d1205.level);
                if (_0x1d1205.level >= 20) {
                  addGameLog("等级达到,直接进化!");
                  _0x42d80f = 1;
                } else {
                  while (1) {
                    let _0xf2bf6d = await this.send_message("cs_query_exp", {
                      flag: 1
                    });
                    if (_0xf2bf6d.exp < 300) {
                      addGameLog("经验仓经验不足300,停止进化");
                      break;
                    }
                    const _0x2c0e0a = {
                      getTime: _0x1d1205.getTime,
                      addExp: 300
                    };
                    await this.send_message("cs_pet_inject_exp", _0x2c0e0a);
                    addGameLog("加经验300");
                    let _0x52a4b6 = await this.waitEvent("sc_notify_change_pet");
                    let _0x5e59a0 = JSON.parse(_0x52a4b6.gameBody[_0x52a4b6.gameBody.length - 1].raw);
                    _0x52a4b6.gameBody.splice(0, _0x52a4b6.gameBody.length);
                    if (_0x5e59a0.pet.level >= 20) {
                      addGameLog("等级达到20级,停止经验注入");
                      _0x42d80f = 1;
                      break;
                    }
                  }
                }
              }
              if (_0x42d80f == 1) {
                const _0x423fd7 = {
                  getTime: _0x1d1205.getTime,
                  id: 21
                };
                await this.send_message("cs_pet_evolve", _0x423fd7);
                addGameLog("进化成功!");
                await wait(300);
                const _0x4808b6 = {
                  taskId: _0x933d3d
                };
                await this.send_message("cs_get_daily_task_prize", _0x4808b6);
              }
            } else {
              let _0x1961ed = 0;
              if (getSeerItemNum(30031) < 6) {
                addGameLog("羽之石不足6个,停止进化");
              } else {
                addGameLog("选中幽浮 等级: " + _0x37c444.level);
                if (_0x37c444.level >= 20) {
                  addGameLog("等级达到,直接进化!");
                  _0x1961ed = 1;
                } else {
                  while (1) {
                    let _0x335061 = await this.send_message("cs_query_exp", {
                      flag: 1
                    });
                    if (_0x335061.exp < 300) {
                      addGameLog("经验仓经验不足300,停止进化");
                      break;
                    }
                    const _0x4dc330 = {
                      getTime: _0x37c444.getTime,
                      addExp: 300
                    };
                    await this.send_message("cs_pet_inject_exp", _0x4dc330);
                    addGameLog("加经验300");
                    let _0x23a201 = await this.waitEvent("sc_notify_change_pet");
                    let _0x2202f3 = JSON.parse(_0x23a201.gameBody[_0x23a201.gameBody.length - 1].raw);
                    _0x23a201.gameBody.splice(0, _0x23a201.gameBody.length);
                    if (_0x2202f3.pet.level >= 20) {
                      addGameLog("等级达到20级,停止经验注入");
                      _0x1961ed = 1;
                      break;
                    }
                  }
                }
              }
              if (_0x1961ed == 1) {
                const _0x35f149 = {
                  getTime: _0x37c444.getTime,
                  id: 21
                };
                await this.send_message("cs_pet_evolve", _0x35f149);
                addGameLog("进化成功!");
                await wait(300);
                const _0x5bebd6 = {
                  taskId: _0x933d3d
                };
                await this.send_message("cs_get_daily_task_prize", _0x5bebd6);
              }
            }
          } else if (_0x50f368 == 1) {
            await wait(300);
            addGameLog("进化幽浮完成");
            const _0x22c360 = {
              taskId: _0x933d3d
            };
            await this.send_message("cs_get_daily_task_prize", _0x22c360);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "buyCoin" && this.switchBtnList[_0x455e9f].selected) {
          let _0x9c5f79 = this.switchBtnList[_0x455e9f].taskId;
          let _0x4230ea = _0x3eac2a.dailyTask.find(_0x721f15 => _0x721f15.taskId === _0x9c5f79).taskProcess;
          if (_0x4230ea < 1) {
            await wait(200);
            await this.send_message("cs_buy_coin", {});
            addGameLog("购买赛尔豆成功");
            await wait(300);
            const _0x5080c7 = {
              taskId: _0x9c5f79
            };
            await this.send_message("cs_get_daily_task_prize", _0x5080c7);
          } else if (_0x4230ea == 1) {
            await wait(300);
            addGameLog("购买赛尔豆完成");
            const _0x3bd6b9 = {
              taskId: _0x9c5f79
            };
            await this.send_message("cs_get_daily_task_prize", _0x3bd6b9);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "superLevel" && this.switchBtnList[_0x455e9f].selected) {
          let _0x3c6578 = this.switchBtnList[_0x455e9f].taskId;
          let _0x30a732 = _0x3eac2a.dailyTask.find(_0x2831a4 => _0x2831a4.taskId === _0x3c6578).taskProcess;
          if (_0x30a732 < 3) {
            addGameLog("开始扫荡精英关卡");
            if (UserManager.getInstance().userInfo.curEnergy < 45) {
              addGameLog("电池不足,取消精英副本挑战!");
            } else {
              await this.send_message("cs_sd_pve_battle", {
                levelId: 10103,
                loop: 3
              });
              addGameLog("扫荡三次洛克斯星林间完毕");
              await wait(300);
              const _0x26f6ce = {
                taskId: _0x3c6578
              };
              await this.send_message("cs_get_daily_task_prize", _0x26f6ce);
            }
          } else if (_0x30a732 == 3) {
            await wait(300);
            addGameLog("扫荡三次洛克斯星林间精英关卡完毕");
            const _0x2207ed = {
              taskId: _0x3c6578
            };
            await this.send_message("cs_get_daily_task_prize", _0x2207ed);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "TrekBattle" && this.switchBtnList[_0x455e9f].selected) {
          let _0x856340 = this.switchBtnList[_0x455e9f].taskId;
          let _0x58e2ba = _0x3eac2a.dailyTask.find(_0x107956 => _0x107956.taskId === _0x856340).taskProcess;
          if (_0x58e2ba < 1) {
            addGameLog("开始星际迷航");
            let _0x10fb3f = new Trek();
            await _0x10fb3f.prcessBody();
            let _0x37c9fc = await this.send_message("cs_get_daily_task_list", {});
            let _0x23a1d4 = _0x37c9fc.dailyTask.find(_0x4eb46f => _0x4eb46f.taskId === _0x856340).taskProcess;
            if (_0x23a1d4 == 1) {
              await wait(300);
              const _0x5261fc = {
                taskId: _0x856340
              };
              await this.send_message("cs_get_daily_task_prize", _0x5261fc);
            }
          } else if (_0x58e2ba == 1) {
            await wait(300);
            addGameLog("星际迷航完成");
            const _0x5df24d = {
              taskId: _0x856340
            };
            await this.send_message("cs_get_daily_task_prize", _0x5df24d);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "CoinBattle" && this.switchBtnList[_0x455e9f].selected) {
          let _0x5455ea = this.switchBtnList[_0x455e9f].taskId;
          let _0x5ed3ca = _0x3eac2a.dailyTask.find(_0x1cb15c => _0x1cb15c.taskId === _0x5455ea).taskProcess;
          if (_0x5ed3ca < 1) {
            addGameLog("开始豆子大作战");
            let _0x1e5d12 = new CoinBigBattle();
            await _0x1e5d12.prcessBody();
            let _0x4b7470 = await this.send_message("cs_get_daily_task_list", {});
            let _0xe789aa = _0x4b7470.dailyTask.find(_0x28de0c => _0x28de0c.taskId === _0x5455ea).taskProcess;
            if (_0xe789aa == 1) {
              await wait(300);
              const _0x3bd58f = {
                taskId: _0x5455ea
              };
              await this.send_message("cs_get_daily_task_prize", _0x3bd58f);
            }
          } else if (_0x5ed3ca == 1) {
            await wait(300);
            addGameLog("赛尔豆大作战完成");
            const _0x40eec1 = {
              taskId: _0x5455ea
            };
            await this.send_message("cs_get_daily_task_prize", _0x40eec1);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "limitBattle" && this.switchBtnList[_0x455e9f].selected) {
          let _0x2b6ba1 = this.switchBtnList[_0x455e9f].taskId;
          let _0x3af77c = _0x3eac2a.dailyTask.find(_0x5311de => _0x5311de.taskId === _0x2b6ba1).taskProcess;
          if (_0x3af77c < 1) {
            addGameLog("开始极限挑战");
            let _0x14f6e2 = new LimitBattle();
            _0x14f6e2.taskId = _0x2b6ba1;
            await _0x14f6e2.prcessBody();
            await wait(2000);
          } else if (_0x3af77c == 1) {
            await wait(300);
            addGameLog("极限挑战完成");
            const _0x430afb = {
              taskId: _0x2b6ba1
            };
            await this.send_message("cs_get_daily_task_prize", _0x430afb);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "PVP3" && this.switchBtnList[_0x455e9f].selected) {
          if (UserManager.getInstance().userInfo.pvp3V3Team.length < 3) {
            addGameLog("检测到3v3并未配置完成,自动进行配置");
            let _0x1ac324 = PetManager.getInstance().getAllPets();
            const _0x175de5 = {
              op: 1,
              arrayType: "pvp3V3Team",
              subArray: 0,
              idx: 1,
              teamUp: 0,
              fightType: 0,
              getTimeList: [_0x1ac324[0].getTime, _0x1ac324[1].getTime, _0x1ac324[2].getTime]
            };
            this.send_message("cs_new_change_petArray", _0x175de5);
            await wait(300);
          }
          let _0x2ff728 = this.switchBtnList[_0x455e9f].taskId;
          let _0x351b14 = _0x3eac2a.dailyTask.find(_0x218cd1 => _0x218cd1.taskId === _0x2ff728).taskProcess;
          if (_0x351b14 < 3) {
            addGameLog("开始自由对战3次,注意设置阵容");
            let _0x52eb13 = new ziyou();
            _0x52eb13.goalTaskCounts = 3;
            await _0x52eb13.prcessBody();
            await wait(2000);
            const _0x57b9a7 = {
              taskId: _0x2ff728
            };
            await this.send_message("cs_get_daily_task_prize", _0x57b9a7);
          } else if (_0x351b14 == 3) {
            await wait(300);
            addGameLog("PVP3次完成");
            const _0x143c88 = {
              taskId: _0x2ff728
            };
            await this.send_message("cs_get_daily_task_prize", _0x143c88);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "bravery" && this.switchBtnList[_0x455e9f].selected) {
          let _0xf353a4 = this.switchBtnList[_0x455e9f].taskId;
          let _0x151d51 = _0x3eac2a.dailyTask.find(_0x99a1d7 => _0x99a1d7.taskId === _0xf353a4).taskProcess;
          if (_0x151d51 < 5) {
            addGameLog("开始勇者之塔5次");
            let _0x54a685 = new braveryBattle();
            await _0x54a685.prcessBody();
            await wait(2000);
            const _0x23ec36 = {
              taskId: _0xf353a4
            };
            await this.send_message("cs_get_daily_task_prize", _0x23ec36);
          } else if (_0x151d51 == 5) {
            await wait(300);
            addGameLog("勇者之塔五次完成");
            const _0x5dbb5b = {
              taskId: _0xf353a4
            };
            await this.send_message("cs_get_daily_task_prize", _0x5dbb5b);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "nl5" && this.switchBtnList[_0x455e9f].selected) {
          let _0x3d7355 = this.switchBtnList[_0x455e9f].taskId;
          let _0x8dbce7 = _0x3eac2a.dailyTask.find(_0x238420 => _0x238420.taskId === _0x3d7355).taskProcess;
          if (_0x8dbce7 < 5) {
            addGameLog("5次能量包定时器已经开启");
            let _0x5e0a50 = MFC.attr.getAttr(MFC.attrType.dailyFreeNormalLotteryTimes);
            let _0xd67dfa = MFC.attr.getAttr(MFC.attrType.dailyNextFreeNormalLotteryTime) * 1000;
            let _0x149d09 = // TOLOOK
            setInterval(() => {
              try {
                let _0x2fedc2 = MFC.attr.getAttr(MFC.attrType.dailyFreeNormalLotteryTimes);
                if (_0x5e0a50 >= _0x2fedc2) {
                  if (_0x5e0a50 < 5) {
                    if (_0xd67dfa < MFC.serverTimer.date.getTime() - 30000) {
                      addGameLog("即将进行能量补给第" + (_0x5e0a50 + 1) + "次获取");
                      GlobalSocket.PROTOCOL_SOCKET.send(10612, {
                        id: 1
                      });
                      _0xd67dfa = MFC.serverTimer.date.getTime() + 330000;
                      _0x5e0a50++;
                    }
                  } else {
                    if (MFC.attr.getAttr(MFC.attrType.dailyTaskProcess2) == 5) {
                      addGameLog("购买5次能量包任务领取");
                      GlobalSocket.PROTOCOL_SOCKET.send(1793, {
                        taskId: 2
                      });
                    }
                    addGameLog("能量补给获取结束");
                    clearInterval(_0x149d09);
                  }
                } else if (_0x5e0a50 < _0x2fedc2) {
                  _0xd67dfa = MFC.serverTimer.date.getTime() + 330000;
                  _0x5e0a50++;
                }
              } catch (_0xd1b324) {}
            }, 300000);
          } else if (_0x8dbce7 == 5) {
            await wait(300);
            addGameLog("五次免费能量包,已经完成");
            const _0x4a5236 = {
              taskId: _0x3d7355
            };
            await this.send_message("cs_get_daily_task_prize", _0x4a5236);
          }
        } else if (this.switchBtnList[_0x455e9f].taskName == "sd" && this.switchBtnList[_0x455e9f].selected) {
          let _0x963462 = new Kloswamp();
          await _0x963462.prcessBody();
          break;
        }
      }
      MFC.moduleManager.openModule(xls.ModuleConst.TASK_PANEL);
      await wait(200);
      while (1) {
        if (taskPanel) {
          await wait(1200);
          break;
        } else {
          await wait(200);
        }
      }
      let _0x30e9da = [];
      let _0x984341 = taskPanel.DailyTaskService.getActive();
      let _0x5928b4 = taskPanel.DailyTaskService.getBoxStatus();
      if (_0x984341 >= 750 && _0x5928b4[4] == 0) {
        _0x30e9da.push(4);
      }
      if (_0x984341 >= 600 && _0x5928b4[3] == 0) {
        _0x30e9da.push(3);
      }
      if (_0x984341 >= 450 && _0x5928b4[2] == 0) {
        _0x30e9da.push(2);
      }
      if (_0x984341 >= 300 && _0x5928b4[1] == 0) {
        _0x30e9da.push(1);
      }
      if (_0x984341 >= 150 && _0x5928b4[0] == 0) {
        _0x30e9da.push(0);
      }
      for (let _0x38ed0b = 0; _0x38ed0b < _0x30e9da.length; _0x38ed0b++) {
        const _0x564243 = {
          prizeId: _0x30e9da[_0x38ed0b]
        };
        await this.send_message("cs_get_daily_active_prize", _0x564243);
        addGameLog("领取第" + (_0x30e9da[_0x38ed0b] + 1) + "档日常活跃奖励");
        await wait(200);
      }
      await wait(100);
      MFC.moduleManager.closeModule(xls.ModuleConst.TASK_PANEL);
      addGameLog("日常执行完毕!");
      this.stop();
    } catch (_0x3220db) {
      logger(_0x3220db);
    }
  }
}
class HireCoin extends SuperTask {
  constructor() {
    super();
    this.nowName = "雇佣刷豆";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_change_default_team"
    }, {
      watchEventName: "sc_notify_item_change"
    }];
    this.uid = "";
  }
  start() {
    super.start();
    let _0x5f2871 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      var _0x5bdbc6 = SimpleAlertUi({});
      _0x5f2871.alertWin = _0x5bdbc6;
      const _0xa9ed3a = {
        text: "极限挑战 雇佣20w赛尔豆",
        y: _0x5bdbc6.height / 11
      };
      const _0x4af44 = {
        label: _0xa9ed3a
      };
      const _0x1f8d8f = {
        text: "当前账号会租借大号精灵进行对战",
        y: _0x5bdbc6.height / 5
      };
      const _0x9aad94 = {
        label: _0x1f8d8f
      };
      const _0x27aa35 = {
        text: "大号驻守精灵需1级,方便送死极限挑战",
        y: _0x5bdbc6.height / 3
      };
      const _0x55f3ec = {
        label: _0x27aa35
      };
      let _0x3cdfbb = [_0x4af44, _0x9aad94, _0x55f3ec];
      for (let _0x5c8243 = 0; _0x5c8243 < _0x3cdfbb.length; _0x5c8243++) {
        let _0x217989 = createLabel(_0x3cdfbb[_0x5c8243].label);
        _0x217989.x = _0x5bdbc6.width / 2 - _0x217989.width / 2;
        _0x5bdbc6.addChild(_0x217989);
      }
      const _0x47a4a2 = {
        prompt: "输入大号uid",
        storageKey: "coinId",
        width: 120,
        y: _0x5bdbc6.height / 2
      };
      var _0x3d742d = createEdit(_0x47a4a2);
      _0x3d742d.x = _0x5bdbc6.width / 2 - _0x3d742d.width / 2;
      _0x5bdbc6.addChild(_0x3d742d);
      _0x5bdbc6.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5f2871.stop();
      }, function () {
        _0x5f2871.uid = _0x3d742d.text;
        if (isNaN(parseInt(_0x5f2871.uid.trim())) || parseInt(_0x5f2871.uid.trim()) < 0) {
          MFC.bubbleAlert.showAlert("输入uid有误,请重新输入!");
          return true;
        }
        if (parseInt(_0x5f2871.uid.trim()) == UserManager.getInstance().userInfo.uid) {
          MFC.bubbleAlert.showAlert("请勿输入当前账号的uid!");
          return true;
        }
        localStorage.setItem("coinId", _0x5f2871.uid);
        _0x5f2871.prcessBody();
      }], null);
      _0x5bdbc6.showAlert();
    });
  }
  async prcessBody() {
    try {
      while (1) {
        let _0x1529dc = await this.send_message("sc_get_campaign_pet_challenge_boss");
        if (_0x1529dc.times <= 0) {
          MFC.bubbleAlert.showAlert("极限挑战次数已经用完,请更换其他账号");
          this.stop();
          return false;
        }
        let _0x121cd5 = _0x1529dc.todayLimitAttr;
        let _0x519d57 = await this.send_message("cs_new_get_hire_pet_list", {
          friendPageNo: 1,
          friendPageSize: 1000,
          teamPageNo: 1,
          teamPageSize: 1000
        });
        let _0x34ce73 = [];
        let _0x5c480a = [];
        let _0x5da792 = _0x519d57.teamHireList;
        _0x5da792.forEach(_0x405000 => {
          if (_0x405000.userId == parseInt(this.uid)) {
            console.log(_0x405000);
            _0x405000.hireType = "team";
            _0x5c480a.push(_0x405000);
            addGameLog("战队精灵: " + PetConfig.getDef(_0x405000.petId).name + " 雇佣次数: " + _0x405000.petHireTimes);
            if (_0x405000.petHireTimes < 10) {
              _0x34ce73.push(_0x405000);
            }
          }
        });
        let _0x4972a4 = _0x519d57.friendHireList;
        _0x4972a4.forEach(_0x3a104f => {
          if (_0x3a104f.userId == parseInt(this.uid)) {
            console.log(_0x3a104f);
            _0x5c480a.push(_0x3a104f);
            _0x3a104f.hireType = "firend";
            addGameLog("好友精灵: " + PetConfig.getDef(_0x3a104f.petId).name + " 雇佣次数: " + _0x3a104f.petHireTimes);
            if (_0x3a104f.petHireTimes < 3 && _0x3a104f.petLevel <= 40) {
              _0x34ce73.push(_0x3a104f);
            }
          }
        });
        logger(_0x5c480a);
        if (_0x5c480a.length == 0) {
          addGameLog("好友/战队租借列表均未找到: " + this.uid + "的精灵!");
          MFC.bubbleAlert.showAlert("好友/战队租借列表均未找到: " + this.uid + "的精灵!");
          this.stop();
          return false;
        }
        let _0x3fa509 = [];
        for (let _0x3fc87b = 0; _0x3fc87b < _0x34ce73.length; _0x3fc87b++) {
          if (_0x121cd5.indexOf(PetConfig.getDef(_0x34ce73[_0x3fc87b].petId).elemType) !== -1) {
            _0x3fa509.push(_0x34ce73[_0x3fc87b]);
          }
        }
        logger(_0x3fa509, "!!!!!!!!!!!!!!!!!!!!!!2");
        if (_0x3fa509.length == 0) {
          addGameLog("雇佣完毕!");
          this.stop();
          return false;
        }
        for (let _0x4212e9 = 0; _0x4212e9 < _0x3fa509.length; _0x4212e9++) {
          if (_0x3fa509[_0x4212e9].petHireTimes < 10) {
            let _0x48c471 = await this.send_message("cs_new_get_hire_pet_info", {
              type: _0x3fa509[_0x4212e9].type,
              pos: _0x3fa509[_0x4212e9].pos,
              targetUid: parseInt(this.uid)
            });
            let _0x457c37 = _0x48c471.pet;
            await this.send_message("cs_start_campaign_pet_challenge", {
              levelId: 5,
              hirePetList: [this.uid + "_" + _0x3fa509[_0x4212e9].type + "_" + _0x3fa509[_0x4212e9].pos],
              attachBattleSkill: [{
                petId: _0x457c37.petId,
                level: _0x457c37.level,
                skillList: _0x457c37.skills,
                getTime: _0x3fa509[_0x4212e9].getTime,
                otherUid: this.uid,
                type: _0x3fa509[_0x4212e9].type
              }]
            });
            let _0x9a7e9a = await this.waitEvent("sc_battle_notify_load_resource");
            _0x9a7e9a.gameBody.splice(0, _0x9a7e9a.gameBody.length);
            await this.send_message("cs_online_load_resource", {
              groupId: "",
              battleType: 0
            });
            await wait(200);
            await this.send_message("cs_online_player_operation", {
              opType: 5,
              data: null,
              groupId: ""
            });
            _0x9a7e9a = await this.waitEvent("sc_battle_notify_round_result");
            _0x9a7e9a.gameBody.splice(0, _0x9a7e9a.gameBody.length);
            await wait(200);
            await this.send_message("cs_online_load_battle_result", {
              groupId: ""
            });
            await wait(200);
            let _0x3a99b1 = _0x457c37.skills[0];
            const _0x293993 = {
              skillID: _0x3a99b1
            };
            const _0x1e785b = {
              opType: 1,
              data: _0x293993,
              groupId: ""
            };
            await this.send_message("cs_online_player_operation", _0x1e785b);
            _0x9a7e9a = await this.waitEvent("sc_battle_notify_round_result");
            break;
          }
        }
      }
    } catch (_0x59dec9) {
      logger(_0x59dec9);
    }
  }
}
class Trek extends SuperTask {
  constructor() {
    super();
    this.nowName = "迷航";
    this.skillData = {
      绝命火焰: 11022,
      光闪击: 10630,
      光闪击Plus: 100023,
      奥义断水击: 32529
    };
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
  }
  start() {
    super.start();
    let _0xc2b941 = this;
    MFC.alert.show(`星际迷航[自动上阵]
迷航每天5点-24点开启
前9关魔焰猩猩绝命火焰+后面采用光闪击瞬杀精灵+水次来通过
[未满足条件会自动进行租借]`, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0xf334f5) {
      _0xc2b941.stop();
    }, function (_0x1d1eb9) {
      _0xc2b941.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x1ff145 = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      if (_0x1ff145.starMedal == 0) {
        addGameLog("迷航未开启,进行开启迷航");
        let _0x186d7c = MFC.userInfo.vipLevel;
        if (_0x186d7c < 8) {
          addGameLog("超能nono没到达8级");
          let _0x1ec0a2 = await this.openTrek();
          if (!_0x1ec0a2) {
            addGameLog("迷航停止!");
            await this.stop();
            return false;
          }
          _0x1ff145 = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        } else {
          let _0x24f240 = await this.send_message("cs_pve_expedition_query_battle", {
            type: 1
          });
          if (_0x24f240.desc && _0x24f240.desc.indexOf("没有历史存档记录") !== -1) {
            addGameLog("没有历史存档记录");
            let _0xa52598 = await this.openTrek();
            if (!_0xa52598) {
              addGameLog("迷航停止!");
              await this.stop();
              return false;
            }
            _0x1ff145 = await this.send_message("cs_pve_expedition_query_battle", {
              type: 0
            });
          } else if (_0x24f240.petList.filter(function (_0x12ddbe) {
            return _0x12ddbe && _0x12ddbe.useSkills && _0x12ddbe.useSkills.some(function (_0x4be66e) {
              return _0x4be66e.id === 100023 || _0x4be66e.id === 10630;
            });
          }).length > 0) {
            if (_0x24f240.petList.filter(function (_0xc5efd5) {
              return _0xc5efd5 && _0xc5efd5.useSkills && _0xc5efd5.useSkills.some(function (_0x3d24b6) {
                return _0x3d24b6.id === 100023 || _0x3d24b6.id === 10630;
              });
            })[0].fightAffects.split("_")[0] == 10002 && _0x24f240.petList.filter(function (_0x122280) {
              return _0x122280 && _0x122280.useSkills && _0x122280.useSkills.some(function (_0x1f80ab) {
                return _0x1f80ab.id === 11022;
              });
            }).length > 0) {
              let _0x4f7c2f = [];
              for (let _0x518947 = 0; _0x518947 < 12; _0x518947++) {
                if (_0x24f240.petList[_0x518947]) {
                  _0x4f7c2f[_0x518947] = _0x24f240.petList[_0x518947].getTime;
                } else {
                  _0x4f7c2f[_0x518947] = 0;
                }
              }
              await this.send_message("cs_pve_expedition_save_record", {
                type: 1
              });
              const _0x4f52cd = {
                petList: _0x4f7c2f,
                attachBattleSkill: []
              };
              await this.send_message("cs_pve_expedition_set_array", _0x4f52cd);
              addGameLog("使用保存阵容");
            } else {
              addGameLog("没瞬杀光闪击");
              let _0x43f5e4 = await this.openTrek();
              if (!_0x43f5e4) {
                addGameLog("迷航停止!");
                await this.stop();
                return false;
              }
              _0x1ff145 = await this.send_message("cs_pve_expedition_query_battle", {
                type: 0
              });
            }
          } else {
            addGameLog("没光闪击");
            let _0x354e32 = await this.openTrek();
            if (!_0x354e32) {
              addGameLog("迷航停止!");
              await this.stop();
              return false;
            }
            _0x1ff145 = await this.send_message("cs_pve_expedition_query_battle", {
              type: 0
            });
          }
        }
        _0x1ff145 = await this.send_message("cs_pve_expedition_query_battle", {
          type: 0
        });
        if (JSON.stringify(_0x1ff145).indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("迷航阵容符合标准，Going迷航");
          await this.actionStarTrek2();
          addGameLog("星际迷航已经完成!");
        } else {
          addGameLog("迷航阵容符合标准，Going迷航");
          await this.actionStarTrek();
          addGameLog("星际迷航已经完成!");
        }
      } else {
        addGameLog("检测迷航开启,继续迷航");
        if (JSON.stringify(_0x1ff145).indexOf(this.skillData.绝命火焰) != -1) {
          if (JSON.stringify(_0x1ff145).indexOf(this.skillData.光闪击Plus) != -1 || JSON.stringify(_0x1ff145).indexOf(this.skillData.光闪击) != -1) {} else {
            addGameLog("迷航目前阵容中没有检测到光闪击，迷航停止");
            await this.stop();
            return false;
          }
        } else {
          addGameLog("迷航目前阵容中没有检测到绝命火焰，迷航停止");
          await this.stop();
          return false;
        }
        if (JSON.stringify(_0x1ff145).indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("迷航阵容符合水次阵容，Going迷航");
          await this.actionStarTrek2();
          addGameLog("星际迷航已经完成!");
        } else {
          addGameLog("迷航阵容符合标准，Going迷航");
          await this.actionStarTrek();
          addGameLog("星际迷航已经完成!");
        }
      }
    } catch (_0x44643b) {
      logger(_0x44643b);
    }
  }
  async openTrek() {
    let _0x7566b9;
    let _0x58f524;
    let _0x5eda81;
    let _0x51add0 = 0;
    let _0xebd151 = 0;
    const _0x45a4c5 = {
      skills: [this.skillData.绝命火焰]
    };
    let _0x2f317a = getGoalPets([_0x45a4c5]);
    if (!_0x2f317a) {
      addGameLog("精灵背包中没有魔焰猩猩+绝命火焰，请确保有其条件，再来启动脚本");
      return false;
    } else {
      addGameLog("背包中携有 魔焰猩猩 + 绝命火焰:" + _0x2f317a.nick);
      _0xebd151 = 1;
    }
    _0x58f524 = _0x2f317a.getTime;
    let _0x1a58c1 = getGoalPets([{
      skills: [10630],
      features: [8, 7, 6, 5]
    }, {
      skills: [100023],
      features: [8, 7, 6, 5]
    }]);
    const _0x23c475 = {
      skills: [this.skillData.奥义断水击]
    };
    let _0x325fc7 = getGoalPets([_0x23c475]);
    if (!_0x1a58c1) {
      addGameLog("背包中没有瞬杀先制相关精灵，尝试进行好友/战队雇佣");
    } else {
      addGameLog("背包中携有 瞬杀+光闪击精灵:" + _0x1a58c1.nick);
      _0x7566b9 = _0x1a58c1.getTime;
      _0x51add0 = 1;
    }
    if (_0xebd151 == 1 && _0x51add0 == 1) {
      if (!_0x325fc7) {
        addGameLog("背包中没有水次水次奥义断水击，尝试进行好友/战队雇佣");
        _0x51add0 = 2;
      } else {
        addGameLog("背包中携有水次奥义断水击:" + _0x325fc7.nick);
        _0x5eda81 = _0x325fc7.getTime;
        _0x51add0 = 3;
      }
    }
    if (_0xebd151 == 1 && _0x51add0 == 3) {
      const _0x5e20ce = {
        petList: [_0x58f524, _0x7566b9, _0x5eda81, "0", "0", "0"],
        attachBattleSkill: []
      };
      await this.send_message("cs_pve_expedition_set_array", _0x5e20ce);
      await wait(200);
      addGameLog("迷航开启成功!");
      return true;
    } else if (_0xebd151 == 1 && _0x51add0 == 2) {
      let _0x2a569f = await this.fromHireGetscPet();
      if (!_0x2a569f) {
        addGameLog("战队/好友雇佣系统都无水次奥义断水击");
        _0x51add0 = 1;
      } else {
        addGameLog("战队/好友雇佣系统有水次奥义断水击");
        addGameLog("雇佣水次迷航开启成功!");
        const _0x4eebc1 = {
          petList: [_0x58f524, _0x7566b9, _0x2a569f.userId + "_" + _0x2a569f.type + "_" + _0x2a569f.pos, "0", "0", "0"],
          attachBattleSkill: [{
            petId: _0x2a569f.petId,
            level: _0x2a569f.petLevel,
            skillList: _0x2a569f.skills,
            getTime: _0x2a569f.getTime,
            otherUid: _0x2a569f.userId,
            type: _0x2a569f.type
          }]
        };
        await this.send_message("cs_pve_expedition_set_array", _0x4eebc1);
        return true;
      }
    }
    if (_0xebd151 == 1 && _0x51add0 == 1) {
      const _0x186309 = {
        petList: [_0x58f524, _0x7566b9, "0", "0", "0", "0"],
        attachBattleSkill: []
      };
      await this.send_message("cs_pve_expedition_set_array", _0x186309);
      await wait(200);
      addGameLog("迷航开启成功!");
      return true;
    } else if (_0xebd151 == 1 && _0x51add0 == 0) {
      let _0x302f2e = await this.fromHireGetGuanPet();
      if (!_0x302f2e) {
        addGameLog("战队/好友雇佣系统都无瞬杀光闪击精灵，操作结束");
        return false;
      } else {
        addGameLog("战队/好友雇佣系统有瞬杀光闪击精灵");
        addGameLog("雇佣迷航开启成功!");
        const _0x2f9dc0 = {
          petList: [_0x58f524, _0x302f2e.userId + "_" + _0x302f2e.type + "_" + _0x302f2e.pos, "0", "0", "0", "0"],
          attachBattleSkill: [{
            petId: _0x302f2e.petId,
            level: _0x302f2e.petLevel,
            skillList: _0x302f2e.skills,
            getTime: _0x302f2e.getTime,
            otherUid: _0x302f2e.userId,
            type: _0x302f2e.type
          }]
        };
        await this.send_message("cs_pve_expedition_set_array", _0x2f9dc0);
        return true;
      }
    }
  }
  async fromHireGetscPet() {
    addGameLog("正在检测中....");
    let _0x105dba = await this.send_message("cs_new_get_hire_pet_list", {
      friendPageNo: 1,
      friendPageSize: 1000,
      teamPageNo: 1,
      teamPageSize: 1000
    });
    let _0x42d75d = _0x105dba.friendHireList;
    for (let _0x457c27 = 0; _0x457c27 < _0x42d75d.length; _0x457c27++) {
      let _0x3ffb25 = _0x42d75d[_0x457c27];
      if (_0x3ffb25.petId == 2135) {
        const _0x224e7c = {
          type: _0x3ffb25.type,
          pos: _0x3ffb25.pos,
          targetUid: _0x3ffb25.userId
        };
        let _0x581e6b = await this.send_message("cs_new_get_hire_pet_info", _0x224e7c);
        let _0x30c9f5 = _0x581e6b.pet.skills;
        if (_0x30c9f5.indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("好友雇佣列表存在水次奥义断水击:" + _0x581e6b.pet.nick);
          _0x3ffb25.skills = _0x581e6b.pet.skills;
          return _0x3ffb25;
        }
      }
    }
    let _0x317014 = _0x105dba.teamHireList;
    for (let _0x3692f7 = 0; _0x3692f7 < _0x317014.length; _0x3692f7++) {
      let _0x6b7a5e = _0x317014[_0x3692f7];
      if (_0x6b7a5e.petId == 2135) {
        const _0x3ca9d8 = {
          type: _0x6b7a5e.type,
          pos: _0x6b7a5e.pos,
          targetUid: _0x6b7a5e.userId
        };
        let _0xdbfb1a = await this.send_message("cs_new_get_hire_pet_info", _0x3ca9d8);
        let _0x5f3df7 = _0xdbfb1a.pet.skills;
        if (_0x5f3df7.indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("好友雇佣列表存在水次奥义断水击:" + _0xdbfb1a.pet.nick);
          _0x6b7a5e.skills = _0xdbfb1a.pet.skills;
          return _0x6b7a5e;
        }
      }
    }
    for (let _0x213bf0 = 0; _0x213bf0 < _0x42d75d.length; _0x213bf0++) {
      let _0x5f1771 = _0x42d75d[_0x213bf0];
      if (_0x5f1771.petId == 2135) {
        const _0x37a0d2 = {
          type: _0x5f1771.type,
          pos: _0x5f1771.pos,
          targetUid: _0x5f1771.userId
        };
        let _0x47e188 = await this.send_message("cs_new_get_hire_pet_info", _0x37a0d2);
        let _0x1563b6 = _0x47e188.pet.skills;
        if (_0x1563b6.indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("好友雇佣列表存在水次奥义断水击:" + _0x47e188.pet.nick);
          _0x5f1771.skills = _0x47e188.pet.skills;
          return _0x5f1771;
        }
      }
    }
    for (let _0x56bf0b = 0; _0x56bf0b < _0x317014.length; _0x56bf0b++) {
      let _0x145dac = _0x317014[_0x56bf0b];
      if (_0x145dac.petId == 2135) {
        const _0x4e75b8 = {
          type: _0x145dac.type,
          pos: _0x145dac.pos,
          targetUid: _0x145dac.userId
        };
        let _0x52da68 = await this.send_message("cs_new_get_hire_pet_info", _0x4e75b8);
        let _0x3bcfe7 = _0x52da68.pet.skills;
        if (_0x3bcfe7.indexOf(this.skillData.光闪击Plus) !== -1 || _0x3bcfe7.indexOf(this.skillData.光闪击) !== -1) {
          addGameLog("好友雇佣列表存在水次奥义断水击:" + _0x52da68.pet.nick);
          _0x145dac.skills = _0x52da68.pet.skills;
          return _0x145dac;
        }
      }
    }
  }
  async fromHireGetGuanPet() {
    addGameLog("正在检测中....");
    let _0x4b54ab = await this.send_message("cs_new_get_hire_pet_list", {
      friendPageNo: 1,
      friendPageSize: 1000,
      teamPageNo: 1,
      teamPageSize: 1000
    });
    let _0x5f4f73 = _0x4b54ab.friendHireList;
    for (let _0x47eebf = 0; _0x47eebf < _0x5f4f73.length; _0x47eebf++) {
      let _0x7aefc6 = _0x5f4f73[_0x47eebf];
      if (_0x7aefc6.petId == 733) {
        const _0x57f0f9 = {
          type: _0x7aefc6.type,
          pos: _0x7aefc6.pos,
          targetUid: _0x7aefc6.userId
        };
        let _0x5ca727 = await this.send_message("cs_new_get_hire_pet_info", _0x57f0f9);
        let _0xac1710 = _0x5ca727.pet.skills;
        if (_0xac1710.indexOf(this.skillData.光闪击Plus) !== -1 || _0xac1710.indexOf(this.skillData.光闪击) !== -1) {
          if (_0x5ca727.pet.featureId == 8) {
            addGameLog("好友雇佣列表存在三星瞬杀光闪击精灵:" + _0x5ca727.pet.nick);
            _0x7aefc6.skills = _0x5ca727.pet.skills;
            return _0x7aefc6;
          }
        }
      }
    }
    let _0x4c61bd = _0x4b54ab.teamHireList;
    for (let _0x1693d0 = 0; _0x1693d0 < _0x4c61bd.length; _0x1693d0++) {
      let _0x2313d4 = _0x4c61bd[_0x1693d0];
      if (_0x2313d4.petId == 733) {
        const _0x2bc9b6 = {
          type: _0x2313d4.type,
          pos: _0x2313d4.pos,
          targetUid: _0x2313d4.userId
        };
        let _0xb69eae = await this.send_message("cs_new_get_hire_pet_info", _0x2bc9b6);
        let _0xcf479e = _0xb69eae.pet.skills;
        if (_0xcf479e.indexOf(this.skillData.光闪击Plus) !== -1 || _0xcf479e.indexOf(this.skillData.光闪击) !== -1) {
          if (_0xb69eae.pet.featureId == 8) {
            addGameLog("战队雇佣列表存在三星瞬杀光闪击精灵:" + _0xb69eae.pet.nick);
            _0x2313d4.skills = _0xb69eae.pet.skills;
            return _0x2313d4;
          }
        }
      }
    }
    for (let _0x4b575a = 0; _0x4b575a < _0x5f4f73.length; _0x4b575a++) {
      let _0x28aae1 = _0x5f4f73[_0x4b575a];
      if (_0x28aae1.petId == 733) {
        const _0x39d938 = {
          type: _0x28aae1.type,
          pos: _0x28aae1.pos,
          targetUid: _0x28aae1.userId
        };
        let _0x21510e = await this.send_message("cs_new_get_hire_pet_info", _0x39d938);
        let _0x46fb8a = _0x21510e.pet.skills;
        if (_0x46fb8a.indexOf(this.skillData.光闪击Plus) !== -1 || _0x46fb8a.indexOf(this.skillData.光闪击) !== -1) {
          if (_0x21510e.pet.featureId == 7 || _0x21510e.pet.featureId == 6 || _0x21510e.pet.featureId == 5) {
            addGameLog("好友雇佣列表存在瞬杀光闪击精灵:" + _0x21510e.pet.nick);
            _0x28aae1.skills = _0x21510e.pet.skills;
            return _0x28aae1;
          }
        }
      }
    }
    for (let _0x281d44 = 0; _0x281d44 < _0x4c61bd.length; _0x281d44++) {
      let _0x2ad971 = _0x4c61bd[_0x281d44];
      if (_0x2ad971.petId == 733) {
        const _0x5ddf29 = {
          type: _0x2ad971.type,
          pos: _0x2ad971.pos,
          targetUid: _0x2ad971.userId
        };
        let _0x161e29 = await this.send_message("cs_new_get_hire_pet_info", _0x5ddf29);
        let _0xa6006f = _0x161e29.pet.skills;
        if (_0xa6006f.indexOf(this.skillData.光闪击Plus) !== -1 || _0xa6006f.indexOf(this.skillData.光闪击) !== -1) {
          if (_0x161e29.pet.featureId == 7 || _0x161e29.pet.featureId == 6 || _0x161e29.pet.featureId == 5) {
            addGameLog("战队雇佣列表存瞬杀光闪击精灵:" + _0x161e29.pet.nick);
            _0x2ad971.skills = _0x161e29.pet.skills;
            return _0x2ad971;
          }
        }
      }
    }
  }
  moveNumToFirst(_0x198399, _0x1dca4d) {
    let _0x2b22b0 = _0x198399.indexOf(_0x1dca4d);
    _0x198399.splice(_0x2b22b0, 1);
    _0x198399.unshift(_0x1dca4d);
    return _0x198399;
  }
  async actionStarTrek() {
    let _0x12c14b = await this.send_message("cs_pve_expedition_query_battle", {
      type: 0
    });
    let _0x24e03d;
    let _0x3f8cc0;
    let _0x119152 = [];
    logger(_0x12c14b);
    for (let _0x467c52 = 0; _0x467c52 < _0x12c14b.petList.length; _0x467c52++) {
      if (_0x12c14b.petList[_0x467c52] == null) {
        _0x119152.push(0);
      } else {
        _0x119152.push(_0x12c14b.petList[_0x467c52].getTime);
        let _0x57bcf7 = _0x12c14b.petList[_0x467c52].useSkills;
        if (JSON.stringify(_0x57bcf7).indexOf(this.skillData.绝命火焰) != -1) {
          _0x24e03d = _0x12c14b.petList[_0x467c52].getTime;
        }
        if (JSON.stringify(_0x57bcf7).indexOf(this.skillData.光闪击Plus) != -1 || JSON.stringify(_0x57bcf7).indexOf(this.skillData.光闪击) != -1) {
          _0x3f8cc0 = _0x12c14b.petList[_0x467c52].getTime;
        }
      }
    }
    await wait(100);
    _0x12c14b = await this.send_message("cs_pve_expedition_query_battle", {
      type: 0
    });
    while (1) {
      if (parseInt(_0x12c14b.levelId) + 1 == 16) {
        addGameLog("迷航已经通关");
        this.stop();
        return true;
      }
      addGameLog("迷航进度: 第" + (parseInt(_0x12c14b.levelId) + 1) + "关卡");
      if (parseInt(_0x12c14b.levelId) + 1 <= 8) {
        var _0x29abd0;
        if (_0x12c14b.petList[0] == null) {
          _0x29abd0 = {};
        } else {
          _0x29abd0 = _0x12c14b.petList[0].useSkills;
        }
        if (JSON.stringify(_0x29abd0).indexOf(this.skillData.绝命火焰) == -1) {
          addGameLog("前8关卡非魔焰首发，更换首发为魔焰");
          _0x119152 = this.moveNumToFirst(_0x119152, _0x24e03d);
          const _0x2bebea = {
            petList: _0x119152,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x2bebea);
          _0x12c14b = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else {
        var _0x29abd0;
        if (_0x12c14b.petList[0] == null) {
          _0x29abd0 = {};
        } else {
          _0x29abd0 = _0x12c14b.petList[0].useSkills;
        }
        if (JSON.stringify(_0x29abd0).indexOf(this.skillData.光闪击Plus) == -1 && JSON.stringify(_0x29abd0).indexOf(this.skillData.光闪击) == -1) {
          addGameLog("9关卡后非光闪击精灵首发，更换为目标精灵");
          logger(_0x119152);
          _0x119152 = this.moveNumToFirst(_0x119152, _0x3f8cc0);
          const _0x486149 = {
            petList: _0x119152,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x486149);
          _0x12c14b = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      }
      let _0x33135f;
      var _0x29abd0 = _0x12c14b.petList[0].useSkills;
      if (JSON.stringify(_0x29abd0).indexOf(this.skillData.光闪击Plus) != -1) {
        _0x33135f = this.skillData.光闪击Plus;
      }
      if (JSON.stringify(_0x29abd0).indexOf(this.skillData.绝命火焰) != -1) {
        _0x33135f = this.skillData.绝命火焰;
      }
      if (JSON.stringify(_0x29abd0).indexOf(this.skillData.光闪击) != -1) {
        _0x33135f = this.skillData.光闪击;
      }
      while (1) {
        let _0x228af6 = await this.send_message("cs_pve_expedition_query_battle", {
          type: 0
        });
        if (JSON.stringify(_0x228af6).indexOf("已达最大关卡") != -1) {
          addGameLog("已达最大关卡");
          this.stop();
          return true;
        }
        const _0x7275fc = {
          getTimeList: _0x119152
        };
        await this.send_message("cs_pve_expedition_start_battle", _0x7275fc);
        await this.initBattle();
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        await wait(200);
        addGameLog("进度: " + (parseInt(_0x12c14b.levelId) + 1) + "关");
        let _0x515ae3 = await this.useSkill(_0x33135f);
        if (_0x515ae3.result.result == 1) {
          addGameLog("获胜,进入下一层");
          break;
        } else {
          logger("未获胜,重写进入关卡");
        }
      }
      _0x12c14b = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      addGameLog("战斗顺利: 星际迷航第" + parseInt(_0x12c14b.levelId) + "关卡");
      if (parseInt(_0x12c14b.levelId) == 15) {
        addGameLog("完成迷航，进行领取");
        await wait(200);
        await this.send_message("cs_pve_expedition_all_box", {});
        this.stop();
        break;
      }
    }
  }
  async actionStarTrek2() {
    let _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
      type: 0
    });
    let _0x3834d3;
    let _0x2d228a;
    let _0x59d3de;
    let _0x20f4a9 = [];
    for (let _0x53fb37 = 0; _0x53fb37 < _0x461c6c.petList.length; _0x53fb37++) {
      if (_0x461c6c.petList[_0x53fb37] == null) {
        _0x20f4a9.push(0);
      } else {
        _0x20f4a9.push(_0x461c6c.petList[_0x53fb37].getTime);
        let _0x56e62f = _0x461c6c.petList[_0x53fb37].useSkills;
        if (JSON.stringify(_0x56e62f).indexOf(this.skillData.绝命火焰) != -1) {
          _0x3834d3 = _0x461c6c.petList[_0x53fb37].getTime;
        }
        if (JSON.stringify(_0x56e62f).indexOf(this.skillData.光闪击Plus) != -1 || JSON.stringify(_0x56e62f).indexOf(this.skillData.光闪击) != -1) {
          _0x2d228a = _0x461c6c.petList[_0x53fb37].getTime;
        }
        if (JSON.stringify(_0x56e62f).indexOf(this.skillData.奥义断水击) != -1) {
          _0x59d3de = _0x461c6c.petList[_0x53fb37].getTime;
        }
      }
    }
    while (1) {
      _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      if (parseInt(_0x461c6c.levelId) + 1 == 16) {
        addGameLog("迷航已经通关");
        await this.send_message("cs_pve_expedition_all_box", {});
        this.stop();
        return true;
      }
      addGameLog("迷航进度: 第" + (parseInt(_0x461c6c.levelId) + 1) + "关卡");
      if (parseInt(_0x461c6c.levelId) <= 7) {
        var _0x341cd2;
        if (_0x461c6c.petList[0] == null) {
          _0x341cd2 = {};
        } else {
          _0x341cd2 = _0x461c6c.petList[0].useSkills;
        }
        if (JSON.stringify(_0x341cd2).indexOf(this.skillData.绝命火焰) == -1) {
          addGameLog("前8关卡非魔焰首发，更换首发为魔焰");
          _0x20f4a9 = this.moveNumToFirst(_0x20f4a9, _0x3834d3);
          const _0x57a5da = {
            petList: _0x20f4a9,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x57a5da);
          _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else if (parseInt(_0x461c6c.levelId) > 7 && parseInt(_0x461c6c.levelId) <= 9) {
        var _0x341cd2;
        if (_0x461c6c.petList[0] == null) {
          _0x341cd2 = {};
        } else {
          _0x341cd2 = _0x461c6c.petList[0].useSkills;
        }
        if (JSON.stringify(_0x341cd2).indexOf(this.skillData.光闪击Plus) == -1 && JSON.stringify(_0x341cd2).indexOf(this.skillData.光闪击) == -1) {
          addGameLog("9关卡后非光闪击精灵首发，更换为目标精灵");
          _0x20f4a9 = this.moveNumToFirst(_0x20f4a9, _0x2d228a);
          const _0x528eff = {
            petList: _0x20f4a9,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x528eff);
          _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else if (parseInt(_0x461c6c.levelId) > 9 && parseInt(_0x461c6c.levelId) <= 12) {
        var _0x341cd2;
        if (_0x461c6c.petList[0] == null) {
          _0x341cd2 = {};
        } else {
          _0x341cd2 = _0x461c6c.petList[0].useSkills;
        }
        if (JSON.stringify(_0x341cd2).indexOf(this.skillData.奥义断水击) == -1) {
          addGameLog("10关卡后非水次首发，更换为目标精灵");
          _0x20f4a9 = this.moveNumToFirst(_0x20f4a9, _0x59d3de);
          const _0x46353c = {
            petList: _0x20f4a9,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x46353c);
          _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else if (parseInt(_0x461c6c.levelId) == 13) {
        var _0x341cd2;
        if (_0x461c6c.petList[0] == null) {
          _0x341cd2 = {};
        } else {
          _0x341cd2 = _0x461c6c.petList[0].useSkills;
        }
        if (_0x461c6c.petList.filter(function (_0x559e7c) {
          return _0x559e7c;
        }).filter(function (_0x18e95d) {
          return _0x18e95d.petID == 2135;
        })[0].crtHp <= 100) {
          if (JSON.stringify(_0x341cd2).indexOf(this.skillData.光闪击Plus) == -1 && JSON.stringify(_0x341cd2).indexOf(this.skillData.光闪击) == -1) {
            addGameLog("14关卡非光闪击精灵首发，更换为目标精灵");
            _0x20f4a9 = this.moveNumToFirst(_0x20f4a9, _0x2d228a);
            const _0x3fd9dd = {
              petList: _0x20f4a9,
              attachBattleSkill: []
            };
            await this.send_message("cs_pve_expedition_set_array", _0x3fd9dd);
            _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
              type: 0
            });
          }
        } else if (JSON.stringify(_0x341cd2).indexOf(this.skillData.奥义断水击) == -1) {
          addGameLog("14关卡非水次首发，更换为目标精灵");
          _0x20f4a9 = this.moveNumToFirst(_0x20f4a9, _0x59d3de);
          const _0xb5f4f3 = {
            petList: _0x20f4a9,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0xb5f4f3);
          _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else if (parseInt(_0x461c6c.levelId) == 14) {
        var _0x341cd2;
        if (_0x461c6c.petList[0] == null) {
          _0x341cd2 = {};
        } else {
          _0x341cd2 = _0x461c6c.petList[0].useSkills;
        }
        if (JSON.stringify(_0x341cd2).indexOf(this.skillData.奥义断水击) == -1) {
          addGameLog("10关卡后非水次首发，更换为目标精灵");
          _0x20f4a9 = this.moveNumToFirst(_0x20f4a9, _0x59d3de);
          const _0x54e50c = {
            petList: _0x20f4a9,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x54e50c);
          _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      }
      _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      let _0x652ec;
      var _0x341cd2 = _0x461c6c.petList[0].useSkills;
      if (JSON.stringify(_0x341cd2).indexOf(this.skillData.光闪击Plus) != -1) {
        _0x652ec = this.skillData.光闪击Plus;
      }
      if (JSON.stringify(_0x341cd2).indexOf(this.skillData.光闪击) != -1) {
        _0x652ec = this.skillData.光闪击;
      }
      if (JSON.stringify(_0x341cd2).indexOf(this.skillData.绝命火焰) != -1) {
        _0x652ec = this.skillData.绝命火焰;
      }
      if (JSON.stringify(_0x341cd2).indexOf(this.skillData.奥义断水击) != -1) {
        _0x652ec = this.skillData.奥义断水击;
      }
      while (1) {
        let _0x57aad6 = await this.send_message("cs_pve_expedition_query_battle", {
          type: 0
        });
        if (JSON.stringify(_0x57aad6).indexOf("已达最大关卡") != -1) {
          addGameLog("已达最大关卡");
          this.stop();
          return true;
        }
        const _0x265a2f = {
          getTimeList: _0x20f4a9
        };
        await this.send_message("cs_pve_expedition_start_battle", _0x265a2f);
        await this.initBattle();
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        await wait(200);
        addGameLog("进度: " + (parseInt(_0x461c6c.levelId) + 1) + "关");
        let _0x57b4b4 = await this.useSkill(_0x652ec);
        if (_0x57b4b4.result.result == 1) {
          addGameLog("战斗顺利: 星际迷航第" + (parseInt(_0x461c6c.levelId) + 1) + "关卡");
          addGameLog("获胜,进入下一层");
          break;
        } else {
          logger("未获胜,重写进入关卡");
        }
      }
      _0x461c6c = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      if (parseInt(_0x461c6c.levelId) == 15) {
        addGameLog("完成迷航，进行领取");
        await wait(200);
        await this.send_message("cs_pve_expedition_all_box", {});
        this.stop();
        break;
      }
    }
  }
}
class Pope extends SuperTask {
  constructor() {
    super();
    this.nowName = "教皇";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    this.popetask = [];
    this.popecanmiss = false;
    this.pp = false;
  }
  async start() {
    super.start();
    let _0x5a2838 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0xbee92c = [];
      var _0x4e4197 = SimpleAlertUi({
        height: 400,
        width: 450
      });
      _0x5a2838.alertWin = _0x4e4197;
      const _0x2bedf8 = {
        text: "教皇",
        y: _0x4e4197.height / 20
      };
      let _0x215624 = createLabel(_0x2bedf8);
      _0x215624.x = _0x4e4197.applicationWidth / 2 - _0x215624.width / 2;
      _0xbee92c.push(_0x215624);
      const _0x464317 = {
        text: "注意:",
        textColor: 16776960,
        x: 30,
        y: _0x215624.y + _0x215624.height + 10
      };
      var _0x126031 = createLabel(_0x464317);
      _0xbee92c.push(_0x126031);
      const _0x555fd0 = {
        text: "不是13回合通关需要奥斯卡天邪雷伊会回pp",
        textColor: 16711680,
        x: 40,
        y: _0x126031.y + 10 + _0x126031.height
      };
      var _0x50061a = createLabel(_0x555fd0);
      _0xbee92c.push(_0x50061a);
      const _0x4e1563 = {
        text: "奥斯卡永恒加灵光天邪荒芜加万恶雷伊充电加雷神",
        textColor: 16711680,
        x: 40,
        y: _0x50061a.y + _0x50061a.height + 10
      };
      var _0x2e6d2b = createLabel(_0x4e1563);
      _0xbee92c.push(_0x2e6d2b);
      const _0x2a8b18 = {
        text: "瞬杀光闪击+雷伊",
        x: _0x4e4197.width / 8,
        y: _0x2e6d2b.y + _0x2e6d2b.height + 20
      };
      var _0x44efa5 = createLabel(_0x2a8b18);
      _0xbee92c.push(_0x44efa5);
      const _0xef9848 = {
        x: _0x44efa5.x + _0x44efa5.width + 10,
        y: _0x44efa5.y - 1,
        selected: true,
        storageKey: "popeteam1"
      };
      let _0x55bd11 = createRadio(_0xef9848);
      _0xbee92c.push(_0x55bd11);
      const _0x264097 = {
        text: "13回合以上打法",
        x: _0x55bd11.x + _0x55bd11.width + 10,
        y: _0x2e6d2b.y + _0x2e6d2b.height + 20
      };
      var _0x16ca53 = createLabel(_0x264097);
      _0xbee92c.push(_0x16ca53);
      const _0x1ea2f1 = {
        x: _0x16ca53.x + _0x16ca53.width + 10,
        y: _0x44efa5.y - 1,
        selected: false,
        storageKey: "popeteam2"
      };
      let _0x21b1c6 = createRadio(_0x1ea2f1);
      _0xbee92c.push(_0x21b1c6);
      const _0xd65445 = {
        text: "蒙奇克",
        x: _0x4e4197.width / 8,
        y: _0x44efa5.y + 30
      };
      var _0x1707e3 = createLabel(_0xd65445);
      _0xbee92c.push(_0x1707e3);
      const _0x7c5eec = {
        x: _0x1707e3.x + _0x1707e3.width + 10,
        y: _0x1707e3.y - 1,
        selected: false,
        storageKey: "popeteam3"
      };
      let _0x3fae90 = createRadio(_0x7c5eec);
      _0xbee92c.push(_0x3fae90);
      const _0x286198 = {
        text: "是否进行扫荡",
        textColor: 16776960,
        x: _0x4e4197.width / 8,
        y: _0x44efa5.y + 60 + 5
      };
      var _0x637a44 = createLabel(_0x286198);
      _0xbee92c.push(_0x637a44);
      const _0x49c9f8 = {
        x: _0x637a44.x + _0x637a44.width + 5,
        y: _0x637a44.y,
        selected: false,
        storageKey: "popesdstatus"
      };
      let _0x5b5770 = createToggle(_0x49c9f8);
      _0xbee92c.push(_0x5b5770);
      const _0x40b0d7 = {
        x: _0x5b5770.x + _0x5b5770.width + 20,
        y: _0x637a44.y - 5,
        width: 100,
        prompt: "请输入次数",
        storageKey: "popesdnum"
      };
      var _0x2b0bb4 = createEdit(_0x40b0d7);
      _0xbee92c.push(_0x2b0bb4);
      const _0x27f7d9 = {
        text: "注意:当前教皇门票有",
        textColor: 16776960,
        x: _0x4e4197.width / 8,
        y: _0x44efa5.y + 100
      };
      let _0x3de9cc = createLabel(_0x27f7d9);
      _0xbee92c.push(_0x3de9cc);
      let _0x206bf0 = createLabel({
        text: getSeerItemNum("101199") - 1,
        textColor: 16711680,
        x: _0x3de9cc.x + _0x3de9cc.width,
        y: _0x3de9cc.y
      });
      _0xbee92c.push(_0x206bf0);
      const _0x5e14f4 = {
        text: "数量不要输入超过了哦",
        textColor: 16776960,
        x: _0x206bf0.x + _0x206bf0.width + 20,
        y: _0x44efa5.y + 100
      };
      let _0xeaf467 = createLabel(_0x5e14f4);
      _0xbee92c.push(_0xeaf467);
      const _0x18cb3a = {
        text: `不勾扫荡可以不输入次数显示的门票是所拥有的-1
瞬杀光闪击打法会根据12层是否是未命中进行替换
不过四倍暴击的次数还是很长`,
        textColor: 16711808,
        x: _0x4e4197.width / 8,
        y: _0x44efa5.y + 100 + 30
      };
      let _0x14a170 = createLabel(_0x18cb3a);
      _0xbee92c.push(_0x14a170);
      _0x5a2838.addAllUis(_0xbee92c);
      _0x4e4197.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5a2838.stop();
      }, function () {
        localStorage.setItem("popeteam1", _0x55bd11.selected);
        localStorage.setItem("popeteam2", _0x21b1c6.selected);
        localStorage.setItem("popeteam3", _0x3fae90.selected);
        localStorage.setItem("popesdstatus", _0x5b5770.selected);
        localStorage.setItem("popesdnum", _0x2b0bb4.text);
        if (_0x55bd11.selected) {
          _0x5a2838.popetask[0] = 1;
        }
        if (_0x21b1c6.selected) {
          _0x5a2838.popetask[1] = 1;
        }
        if (_0x3fae90.selected) {
          _0x5a2838.popetask[2] = 1;
        }
        if (_0x5b5770.selected) {
          if (!Number.isInteger(parseInt(_0x2b0bb4.text))) {
            addGameLog("请输入正确的次数");
          } else if (getSeerItemNum("101199") < parseInt(_0x2b0bb4.text)) {
            addGameLog("请输入正确的次数");
          } else {
            _0x5a2838.popetask[3] = 1;
          }
        }
        _0x5a2838.prcessBody();
      }], null);
      _0x4e4197.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (MFC.attr.getAttr(MFC.attrType.dailyPopeLadderCostTicket) == 0) {
        for (let _0x2dac84 = 0; _0x2dac84 < 3; _0x2dac84++) {
          if (this.popetask[_0x2dac84]) {
            if (_0x2dac84 == 0) {
              await this.chackpopeteam1();
            } else if (_0x2dac84 == 1) {
              await this.chackpopeteam2();
            } else if (_0x2dac84 == 2) {
              await this.chackpopeteam3();
            }
            if (this.popetask[3]) {
              addGameLog("即将进行扫荡");
              if (MFC.userInfo.vipLevel == 0) {
                addGameLog("没有超no无法扫荡");
              } else {
                for (let _0x147b7c = 0; _0x147b7c < parseInt(localStorage.getItem("popesdnum")); _0x147b7c++) {
                  addGameLog("教皇扫荡第" + (_0x147b7c + 1) + "次");
                  await this.send_message("cs_combat_ladder_pope", {
                    type: 5,
                    petList: [],
                    idList: [],
                    saveType: 0
                  });
                }
              }
            }
          }
        }
      } else if (this.popetask[3]) {
        addGameLog("即将进行扫荡");
        if (MFC.userInfo.vipLevel == 0) {
          addGameLog("没有超no无法扫荡");
        } else {
          for (let _0x3faaf2 = 0; _0x3faaf2 < parseInt(localStorage.getItem("popesdnum")) + 1; _0x3faaf2++) {
            addGameLog("教皇扫荡第" + (_0x3faaf2 + 1) + "次");
            await this.send_message("cs_combat_ladder_pope", {
              type: 5,
              petList: [],
              idList: [],
              saveType: 0
            });
          }
        }
      } else {
        for (let _0x33c4ca = 0; _0x33c4ca < 3; _0x33c4ca++) {
          if (this.popetask[_0x33c4ca]) {
            if (_0x33c4ca == 0) {
              await this.chackpopeteam1();
            } else if (_0x33c4ca == 1) {
              await this.chackpopeteam2();
            } else if (_0x33c4ca == 2) {
              await this.chackpopeteam3();
            }
          }
        }
      }
      addGameLog("完成教皇关卡");
      this.stop();
    } catch (_0x4c4080) {}
  }
  async chackpopeteam1() {
    let _0xcc368e = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    if (_0xcc368e.petList.length == 0) {
      if (getSeerItemNum("101199") == 0) {
        addGameLog("教皇挑战券 数量为0,挑战结束");
        this.stop();
      } else {
        let _0x4187ae = PetManager.getInstance().getAllPets().map(_0x6f3c09 => {
          if ((_0x6f3c09.skills.indexOf(10630) != -1 || _0x6f3c09.skills.indexOf(100023) != -1) && _0x6f3c09.skills.indexOf(11783) != -1 && (_0x6f3c09.featureId == 5 || _0x6f3c09.featureId == 6 || _0x6f3c09.featureId == 7 || _0x6f3c09.featureId == 8)) {
            return _0x6f3c09.getTime;
          }
        }).filter(_0x384932 => _0x384932 !== undefined).sort((_0x1ec041, _0x4fa19b) => _0x4fa19b.featureId - _0x1ec041.featureId)[0];
        let _0x2c4e8d = PetManager.getInstance().getAllPets().map(_0x58f64b => {
          if (_0x58f64b.level == 100) {
            if (_0x58f64b.skills.indexOf(10825) != -1 || _0x58f64b.skills.indexOf(100484) != -1) {
              return _0x58f64b.getTime;
            }
          }
        }).filter(_0x1041d9 => _0x1041d9)[0];
        if (_0x4187ae == undefined) {
          addGameLog("背包没有瞬杀光闪击+光烈突击[威力130的招]");
          this.stop();
        } else if (_0x2c4e8d == undefined) {
          addGameLog("背包没有雷伊或者没有装备雷神天明闪");
          this.stop();
        } else {
          const _0x3d2fb4 = {
            type: 1,
            petList: [_0x4187ae, _0x2c4e8d],
            idList: [],
            saveType: 0
          };
          await this.send_message("cs_combat_ladder_pope", _0x3d2fb4);
          await this.popeteam1fight();
        }
      }
    } else if ((_0xcc368e.petList[0].useSkills.find(_0x369b74 => _0x369b74.id === 10630) || _0xcc368e.petList[0].useSkills.find(_0x55f06a => _0x55f06a.id === 100023)) && _0xcc368e.petList[0].useSkills.find(_0x212203 => _0x212203.id === 11783)) {
      if (_0xcc368e.petList[1].useSkills.find(_0xe4563 => _0xe4563.id === 10825) || _0xcc368e.petList[1].useSkills.find(_0x472f61 => _0x472f61.id === 100484)) {
        await this.popeteam1fight();
      } else {
        addGameLog("二号位不是雷伊或技能错误");
        this.stop();
      }
    } else {
      addGameLog("一号位不是瞬杀光闪击+光烈突击[威力130的招]");
      this.stop();
    }
  }
  async popeteam1fight() {
    let _0x24413d = {};
    let _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    let _0x15214f = _0x1fb4d7.levelId;
    while (_0x15214f > 0 && _0x15214f <= 11) {
      _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x5d4e46;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x1fb4d7.petList.find(_0x4638bd => _0x4638bd.useSkills.find(_0x3221aa => _0x3221aa.id === 10630))) {
        _0x5d4e46 = 10630;
      }
      if (_0x1fb4d7.petList.find(_0x9c2082 => _0x9c2082.useSkills.find(_0x56688d => _0x56688d.id === 100023))) {
        _0x5d4e46 = 100023;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [0],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x24413d[_0x1fb4d7.levelId]) {
        _0x24413d[_0x1fb4d7.levelId] = 1;
      } else {
        _0x24413d[_0x1fb4d7.levelId]++;
      }
      addGameLog("目前教皇第" + _0x15214f + "层，尝试第" + _0x24413d[_0x1fb4d7.levelId] + "次瞬杀");
      let _0x2dd811 = await this.useSkill(_0x5d4e46);
      if (_0x2dd811.result.result === 1) {
        _0x15214f++;
        if (_0x15214f == 12) {
          break;
        }
      }
      await wait(300);
      _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
    while (_0x15214f == 12) {
      if (this.popecanmiss) {
        _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        let _0x4cdfab;
        await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        if (_0x1fb4d7.petList.find(_0x4ecb39 => _0x4ecb39.useSkills.find(_0x17a285 => _0x17a285.id === 10825))) {
          _0x4cdfab = 10825;
        }
        if (_0x1fb4d7.petList.find(_0x45e592 => _0x45e592.useSkills.find(_0x501db6 => _0x501db6.id === 100484))) {
          _0x4cdfab = 100484;
        }
        _0x4cdfab = 11783;
        await this.send_message("cs_combat_ladder_pope", {
          type: 3,
          petList: [],
          idList: [1],
          saveType: 0
        });
        let _0x401629 = await this.initBattle();
        let _0xf5bdcd = _0x401629.result.affects.map(_0x4ec3c0 => {
          if (_0x4ec3c0 && _0x4ec3c0.id) {
            return _0x4ec3c0.id;
          } else {
            return null;
          }
        });
        if (_0xf5bdcd.includes(158) || _0xf5bdcd.includes(10024) || _0xf5bdcd.includes(20022)) {
          this.popecanmiss = true;
        } else {
          this.popecanmiss = false;
        }
        if (!_0x24413d[_0x1fb4d7.levelId]) {
          _0x24413d[_0x1fb4d7.levelId] = 1;
        } else {
          _0x24413d[_0x1fb4d7.levelId]++;
        }
        addGameLog("目前教皇第" + _0x15214f + "层，尝试第" + _0x24413d[_0x1fb4d7.levelId] + "次四倍暴");
        _0x401629 = await this.useSkill(_0x4cdfab);
        if (_0x401629.result.result === 1) {
          _0x15214f++;
          if (_0x15214f == 12) {
            break;
          }
        }
        await wait(300);
        _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
      } else {
        _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        let _0xc17ef2;
        await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        if (_0x1fb4d7.petList.find(_0x309879 => _0x309879.useSkills.find(_0x186254 => _0x186254.id === 10630))) {
          _0xc17ef2 = 10630;
        }
        if (_0x1fb4d7.petList.find(_0x14e467 => _0x14e467.useSkills.find(_0x5cf829 => _0x5cf829.id === 100023))) {
          _0xc17ef2 = 100023;
        }
        _0xc17ef2 = 11783;
        await this.send_message("cs_combat_ladder_pope", {
          type: 3,
          petList: [],
          idList: [0],
          saveType: 0
        });
        let _0x1e7807 = await this.initBattle();
        let _0x27ab2f = _0x1e7807.result.affects.map(_0x1449dc => {
          if (_0x1449dc && _0x1449dc.id) {
            return _0x1449dc.id;
          } else {
            return null;
          }
        });
        if (_0x27ab2f.includes(158) || _0x27ab2f.includes(10024) || _0x27ab2f.includes(20022)) {
          this.popecanmiss = true;
        } else {
          this.popecanmiss = false;
        }
        if (!_0x24413d[_0x1fb4d7.levelId]) {
          _0x24413d[_0x1fb4d7.levelId] = 1;
        } else {
          _0x24413d[_0x1fb4d7.levelId]++;
        }
        addGameLog("目前教皇第" + _0x15214f + "层，尝试第" + _0x24413d[_0x1fb4d7.levelId] + "次瞬杀");
        _0x1e7807 = await this.useSkill(_0xc17ef2);
        if (_0x1e7807.result.result === 1) {
          _0x15214f++;
          if (_0x15214f == 12) {
            break;
          }
        }
        await wait(300);
        _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
      }
    }
    while (_0x15214f == 13) {
      _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x3119af;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x1fb4d7.petList.find(_0x1bd9c4 => _0x1bd9c4.useSkills.find(_0x4c8adc => _0x4c8adc.id === 10825))) {
        _0x3119af = 10825;
      }
      if (_0x1fb4d7.petList.find(_0x58ec3c => _0x58ec3c.useSkills.find(_0x23dace => _0x23dace.id === 100484))) {
        _0x3119af = 100484;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [1],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x24413d[_0x1fb4d7.levelId]) {
        _0x24413d[_0x1fb4d7.levelId] = 1;
      } else {
        _0x24413d[_0x1fb4d7.levelId]++;
      }
      addGameLog("目前教皇第" + _0x15214f + "层，尝试第" + _0x24413d[_0x1fb4d7.levelId] + "次瞬杀");
      let _0xa2aa82 = await this.useSkill(_0x3119af);
      if (_0xa2aa82.result.result === 1) {
        _0x15214f++;
        if (_0x15214f == 12) {
          break;
        }
      }
      await wait(300);
      _0x1fb4d7 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
  }
  async chackpopeteam2() {
    let _0x51594c = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    if (_0x51594c.petList.length == 0) {
      if (getSeerItemNum("101199") == 0) {
        addGameLog("教皇挑战券 数量为0,挑战结束");
        this.stop();
      } else {
        let _0x6867e8 = PetManager.getInstance().getAllPets().map(_0x5ed867 => {
          if (_0x5ed867.skills.indexOf(14863) != -1 && _0x5ed867.skills.indexOf(22639) != -1) {
            return _0x5ed867.getTime;
          }
        }).filter(_0x5eab79 => _0x5eab79 !== undefined).sort()[0];
        let _0xf78b5c = PetManager.getInstance().getAllPets().map(_0x4f1ecb => {
          if (_0x4f1ecb.level == 100) {
            if (_0x4f1ecb.skills.indexOf(16891) != -1 && (_0x4f1ecb.skills.indexOf(23798) != -1 || _0x4f1ecb.skills.indexOf(100423) != -1)) {
              return _0x4f1ecb.getTime;
            }
          }
        }).filter(_0x4f02b7 => _0x4f02b7)[0];
        let _0x1ba0a3 = PetManager.getInstance().getAllPets().map(_0x3e9688 => {
          if (_0x3e9688.level == 100) {
            if (_0x3e9688.skills.indexOf(100483) != -1 && (_0x3e9688.skills.indexOf(10825) != -1 || _0x3e9688.skills.indexOf(100484) != -1)) {
              return _0x3e9688.getTime;
            }
          }
        }).filter(_0xc7795e => _0xc7795e)[0];
        if (_0x6867e8 == undefined) {
          addGameLog("背包没有奥斯卡或技能错误");
          this.stop();
        } else if (_0xf78b5c == undefined) {
          addGameLog("背包没有天邪或技能错误");
          this.stop();
        } else if (_0x1ba0a3 == undefined) {
          addGameLog("背包雷伊技能错误");
          this.stop();
        } else {
          const _0x1c0a34 = {
            type: 1,
            petList: [_0x6867e8, _0xf78b5c, _0x1ba0a3],
            idList: [],
            saveType: 0
          };
          await this.send_message("cs_combat_ladder_pope", _0x1c0a34);
          await this.popeteam2fight();
        }
      }
    } else if (_0x51594c.petList[0].useSkills.find(_0xc1b2b3 => _0xc1b2b3.id === 14863) && _0x51594c.petList[0].useSkills.find(_0x30cb81 => _0x30cb81.id === 22639)) {
      if (_0x51594c.petList[1].useSkills.find(_0x987a69 => _0x987a69.id === 16891) && (_0x51594c.petList[1].useSkills.find(_0x4ef4cf => _0x4ef4cf.id === 23798) || _0x51594c.petList[1].useSkills.find(_0x4fe49c => _0x4fe49c.id === 100423))) {
        if (_0x51594c.petList[2].useSkills.find(_0x4fc656 => _0x4fc656.id === 100483) && (_0x51594c.petList[2].useSkills.find(_0x3221ef => _0x3221ef.id === 10825) || _0x51594c.petList[2].useSkills.find(_0x5b5b89 => _0x5b5b89.id === 100484))) {
          await this.popeteam2fight();
        } else {
          addGameLog("三号位不是雷伊或技能错误");
          this.stop();
        }
      } else {
        addGameLog("二号位不是天邪或技能错误");
        this.stop();
      }
    } else {
      addGameLog("一号位不是奥斯卡或技能错误");
      this.stop();
    }
  }
  async popeteam2fight() {
    let _0x1a299c = {};
    let _0x10050f = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    let _0x520294 = _0x10050f.levelId;
    while (_0x520294 > 0 && _0x520294 <= 10) {
      _0x10050f = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x39cd2f = 22639;
      let _0x59ec54 = 14863;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [0],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x1a299c[_0x10050f.levelId]) {
        _0x1a299c[_0x10050f.levelId] = 1;
      } else {
        _0x1a299c[_0x10050f.levelId]++;
      }
      addGameLog("目前教皇第" + _0x520294 + "层，第" + _0x1a299c[_0x10050f.levelId] + "次");
      let _0x5372b1 = await this.useSkill(_0x39cd2f);
      while (_0x5372b1.result.result == 0) {
        let _0x5c9798;
        if (_0x5372b1.result.playerInfos[0].teamFlag == 1) {
          if (this.pp) {
            _0x5c9798 = 5;
            this.pp = false;
          } else {
            _0x5c9798 = _0x5372b1.result.playerInfos[0].petInfos[0].useSkills[_0x5372b1.result.playerInfos[0].petInfos[0].useSkills.findIndex(_0x1bba93 => _0x1bba93.id === 14863)].crtPP;
          }
        } else if (this.pp) {
          _0x5c9798 = 5;
          this.pp = false;
        } else {
          _0x5c9798 = _0x5372b1.result.playerInfos[1].petInfos[0].useSkills[_0x5372b1.result.playerInfos[1].petInfos[0].useSkills.findIndex(_0x30a843 => _0x30a843.id === 14863)].crtPP;
        }
        if (_0x5c9798 == 0) {
          if (getSeerItemNum(2001) > 1) {
            addGameLog("回pp");
            this.pp = true;
            _0x5372b1 = await this.useItem(2001);
          } else if (getSeerItemNum(2002) > 1) {
            addGameLog("回pp");
            this.pp = true;
            _0x5372b1 = await this.useItem(2002);
          } else if (getSeerItemNum(2003) > 1) {
            addGameLog("回pp");
            this.pp = true;
            _0x5372b1 = await this.useItem(2003);
          } else {
            addGameLog("pp不足");
            await this.send_message("cs_quit_battle", {});
            break;
          }
        } else {
          _0x5372b1 = await this.useSkill(_0x59ec54);
        }
      }
      if (getSeerItemNum(2001) > 1) {} else if (getSeerItemNum(2002) > 1) {} else if (getSeerItemNum(2003) > 1) {} else {
        addGameLog("pp不足");
        await this.send_message("cs_quit_battle", {});
        break;
      }
      if (_0x5372b1.result.result === 1) {
        _0x520294++;
        if (_0x520294 == 11) {
          break;
        }
      }
      await wait(300);
      _0x10050f = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
    while (_0x520294 > 10 && _0x520294 <= 12) {
      _0x10050f = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x12a45a;
      let _0x24e8e8 = 16891;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x10050f.petList.find(_0x14a344 => _0x14a344.useSkills.find(_0x25acd3 => _0x25acd3.id === 23798))) {
        _0x12a45a = 23798;
      }
      if (_0x10050f.petList.find(_0x26817c => _0x26817c.useSkills.find(_0x131c90 => _0x131c90.id === 100423))) {
        _0x12a45a = 100423;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [1],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x1a299c[_0x10050f.levelId]) {
        _0x1a299c[_0x10050f.levelId] = 1;
      } else {
        _0x1a299c[_0x10050f.levelId]++;
      }
      addGameLog("目前教皇第" + _0x520294 + "层，第" + _0x1a299c[_0x10050f.levelId] + "次");
      let _0x20c7ff = await this.useSkill(_0x12a45a);
      while (_0x20c7ff.result.result == 0) {
        _0x20c7ff = await this.useSkill(_0x24e8e8);
      }
      if (_0x20c7ff.result.result === 1) {
        _0x520294++;
        if (_0x520294 == 13) {
          break;
        }
      }
      await wait(300);
      _0x10050f = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
    while (_0x520294 == 13) {
      _0x10050f = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x380667 = 100483;
      let _0x3b1ab5;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x10050f.petList.find(_0x596e74 => _0x596e74.useSkills.find(_0x349594 => _0x349594.id === 10825))) {
        _0x3b1ab5 = 10825;
      }
      if (_0x10050f.petList.find(_0x2bacd1 => _0x2bacd1.useSkills.find(_0x4af927 => _0x4af927.id === 100484))) {
        _0x3b1ab5 = 100484;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [2],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x1a299c[_0x10050f.levelId]) {
        _0x1a299c[_0x10050f.levelId] = 1;
      } else {
        _0x1a299c[_0x10050f.levelId]++;
      }
      addGameLog("目前教皇第" + _0x520294 + "层，第" + _0x1a299c[_0x10050f.levelId] + "次");
      let _0x572a1c = await this.useSkill(_0x380667);
      if (_0x572a1c.result.result == 0) {
        _0x572a1c = await this.useSkill(_0x3b1ab5);
      }
      if (_0x572a1c.result.result === 1) {
        _0x520294++;
        if (_0x520294 == 12) {
          break;
        }
      }
      await wait(300);
      _0x10050f = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
  }
  async chackpopeteam3() {
    let _0x4ab869 = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    if (_0x4ab869.petList.length == 0) {
      if (getSeerItemNum("101199") == 0) {
        addGameLog("教皇挑战券 数量为0,挑战结束");
        this.stop();
      } else {
        let _0x594a56 = PetManager.getInstance().getAllPets().map(_0x5ac449 => {
          if ((_0x5ac449.skills.indexOf(10630) != -1 || _0x5ac449.skills.indexOf(100023) != -1) && _0x5ac449.skills.indexOf(11783) != -1 && (_0x5ac449.featureId == 5 || _0x5ac449.featureId == 6 || _0x5ac449.featureId == 7 || _0x5ac449.featureId == 8)) {
            return _0x5ac449.getTime;
          }
        }).filter(_0x2e0aee => _0x2e0aee !== undefined).sort((_0x95d8cc, _0x273529) => _0x273529.featureId - _0x95d8cc.featureId)[0];
        let _0x435733 = PetManager.getInstance().getAllPets().map(_0x1117fe => {
          if (_0x1117fe.level == 100) {
            if (_0x1117fe.skills.indexOf(10825) != -1 || _0x1117fe.skills.indexOf(100484) != -1) {
              return _0x1117fe.getTime;
            }
          }
        }).filter(_0x2182db => _0x2182db)[0];
        let _0x427858 = PetManager.getInstance().getAllPets().map(_0x3c1f4e => {
          if (_0x3c1f4e.level == 100) {
            if (_0x3c1f4e.skills.indexOf(12776) != -1) {
              return _0x3c1f4e.getTime;
            }
          }
        }).filter(_0x4f7d83 => _0x4f7d83)[0];
        if (_0x594a56 == undefined) {
          addGameLog("背包没有瞬杀光闪击+光烈突击[威力130的招]");
          this.stop();
        } else if (_0x435733 == undefined) {
          addGameLog("背包没有雷伊或者没有装备雷神天明闪");
          this.stop();
        } else if (_0x427858 == undefined) {
          addGameLog("背包没有蒙奇克或者没有装备腾云断空击");
          this.stop();
        } else {
          const _0x59f83c = {
            type: 1,
            petList: [_0x594a56, _0x435733, _0x427858],
            idList: [],
            saveType: 0
          };
          await this.send_message("cs_combat_ladder_pope", _0x59f83c);
          await this.popeteam3fight();
        }
      }
    } else if ((_0x4ab869.petList[0].useSkills.find(_0x46d73a => _0x46d73a.id === 10630) || _0x4ab869.petList[0].useSkills.find(_0x535cd7 => _0x535cd7.id === 100023)) && _0x4ab869.petList[0].useSkills.find(_0x5ac5e0 => _0x5ac5e0.id === 11783)) {
      if (_0x4ab869.petList[1].useSkills.find(_0x37c3bc => _0x37c3bc.id === 10825) || _0x4ab869.petList[1].useSkills.find(_0x5566e6 => _0x5566e6.id === 100484)) {
        if (_0x4ab869.petList[1].useSkills.find(_0x220c0c => _0x220c0c.id === 12776)) {
          await this.popeteam3fight();
        }
      } else {
        addGameLog("二号位不是雷伊或技能错误");
        this.stop();
      }
    } else {
      addGameLog("一号位不是瞬杀光闪击+光烈突击[威力130的招]");
      this.stop();
    }
  }
  async popeteam3fight() {
    let _0x4e0a33 = {};
    let _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    let _0x1deb4f = _0x382dc5.levelId;
    while (_0x1deb4f > 0 && _0x1deb4f <= 11) {
      _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x49ee05;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x382dc5.petList.find(_0x2d3d3a => _0x2d3d3a.useSkills.find(_0x156fd7 => _0x156fd7.id === 10630))) {
        _0x49ee05 = 10630;
      }
      if (_0x382dc5.petList.find(_0x5cbc4a => _0x5cbc4a.useSkills.find(_0x3a1463 => _0x3a1463.id === 100023))) {
        _0x49ee05 = 100023;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [0],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x4e0a33[_0x382dc5.levelId]) {
        _0x4e0a33[_0x382dc5.levelId] = 1;
      } else {
        _0x4e0a33[_0x382dc5.levelId]++;
      }
      addGameLog("目前教皇第" + _0x1deb4f + "层，尝试第" + _0x4e0a33[_0x382dc5.levelId] + "次瞬杀");
      let _0x32971d = await this.useSkill(_0x49ee05);
      if (_0x32971d.result.result === 1) {
        _0x1deb4f++;
        if (_0x1deb4f == 12) {
          break;
        }
      }
      await wait(300);
      _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
    while (_0x1deb4f == 12) {
      if (this.popecanmiss) {
        _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        let _0x22f87b;
        await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        if (_0x382dc5.petList.find(_0x2a2c49 => _0x2a2c49.useSkills.find(_0x7b3c7a => _0x7b3c7a.id === 10825))) {
          _0x22f87b = 10825;
        }
        if (_0x382dc5.petList.find(_0x30de7e => _0x30de7e.useSkills.find(_0x1c0854 => _0x1c0854.id === 100484))) {
          _0x22f87b = 100484;
        }
        await this.send_message("cs_combat_ladder_pope", {
          type: 3,
          petList: [],
          idList: [1],
          saveType: 0
        });
        let _0x2b7004 = await this.initBattle();
        let _0x5bc9ac = JSON.parse(a.gameBody[a.gameBody.length - 1].raw).result.affects.map(_0x4bddf0 => {
          if (_0x4bddf0 && _0x4bddf0.id) {
            return _0x4bddf0.id;
          } else {
            return null;
          }
        });
        if (_0x5bc9ac.includes(158) || _0x5bc9ac.includes(10024) || _0x5bc9ac.includes(20022)) {
          this.popecanmiss = true;
        } else {
          this.popecanmiss = false;
        }
        if (!_0x4e0a33[_0x382dc5.levelId]) {
          _0x4e0a33[_0x382dc5.levelId] = 1;
        } else {
          _0x4e0a33[_0x382dc5.levelId]++;
        }
        addGameLog("目前教皇第" + _0x1deb4f + "层，尝试第" + _0x4e0a33[_0x382dc5.levelId] + "次四倍暴");
        _0x2b7004 = await this.useSkill(_0x22f87b);
        if (_0x2b7004.result.result === 1) {
          _0x1deb4f++;
          if (_0x1deb4f == 12) {
            break;
          }
        }
        await wait(300);
        _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
      } else {
        _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        let _0x1febad;
        await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        if (_0x382dc5.petList.find(_0x2f93e1 => _0x2f93e1.useSkills.find(_0x4371e1 => _0x4371e1.id === 10630))) {
          _0x1febad = 10630;
        }
        if (_0x382dc5.petList.find(_0x1b86c3 => _0x1b86c3.useSkills.find(_0x2c004f => _0x2c004f.id === 100023))) {
          _0x1febad = 100023;
        }
        _0x1febad = 11783;
        await this.send_message("cs_combat_ladder_pope", {
          type: 3,
          petList: [],
          idList: [0],
          saveType: 0
        });
        let _0x40ec5c = await this.initBattle();
        let _0x105a14 = _0x40ec5c.result.affects.map(_0x222d27 => {
          if (_0x222d27 && _0x222d27.id) {
            return _0x222d27.id;
          } else {
            return null;
          }
        });
        if (_0x105a14.includes(158) || _0x105a14.includes(10024) || _0x105a14.includes(20022)) {
          this.popecanmiss = true;
        } else {
          this.popecanmiss = false;
        }
        if (!_0x4e0a33[_0x382dc5.levelId]) {
          _0x4e0a33[_0x382dc5.levelId] = 1;
        } else {
          _0x4e0a33[_0x382dc5.levelId]++;
        }
        addGameLog("目前教皇第" + _0x1deb4f + "层，尝试第" + _0x4e0a33[_0x382dc5.levelId] + "次瞬杀");
        _0x40ec5c = await this.useSkill(_0x1febad);
        if (_0x40ec5c.result.result === 1) {
          _0x1deb4f++;
          if (_0x1deb4f == 12) {
            break;
          }
        }
        await wait(300);
        _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
      }
    }
    while (_0x1deb4f == 13) {
      _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x3913ae = 12776;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [2],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x4e0a33[_0x382dc5.levelId]) {
        _0x4e0a33[_0x382dc5.levelId] = 1;
      } else {
        _0x4e0a33[_0x382dc5.levelId]++;
      }
      addGameLog("目前教皇第" + _0x1deb4f + "层，尝试第" + _0x4e0a33[_0x382dc5.levelId] + "次瞬杀");
      let _0xf583c5 = await this.useSkill(_0x3913ae);
      if (_0xf583c5.result.result === 1) {
        _0x1deb4f++;
        if (_0x1deb4f == 12) {
          break;
        }
      }
      await wait(300);
      _0x382dc5 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
  }
}
class LevelCatch extends SuperTask {
  constructor() {
    super();
    this.nowName = "关卡捕捉";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_change_default_team"
    }, {
      watchEventName: "sc_notify_item_change"
    }];
    this.capsuleNames = [{
      capName: "普通",
      capId: 4001
    }, {
      capName: "中级",
      capId: 4002
    }, {
      capName: "高级",
      capId: 4003
    }, {
      capName: "无敌",
      capId: 4004
    }];
    this.switchBtnList = [];
    this.planetPets = [];
    this.petIds = [];
    this.capIds = [];
    this.catchCounts = 0;
    this.stopTalent = 0;
    this.levelId = null;
    this.CatchPetDatas = null;
    this.addCount = 0;
    this.allCatchPets = [];
    this.catchConfigs = [];
    this.goalCatchs = [];
  }
  start() {
    super.start();
    let _0xa45ef4 = this;
    if (!window.noLevelCatchPets) {
      MFC.alert.show("当前关卡没有可捕捉的精灵!");
      this.stop();
      return;
    }
    if (UserManager.getInstance().userInfo.curEnergy < 5) {
      MFC.alert.show("电池不足,任务取消!");
      addGameLog("电池不足,任务取消!");
      this.stop();
      return;
    }
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      var _0x2d9316 = SimpleAlertUi({
        width: 750,
        height: 450
      });
      _0xa45ef4.alertWin = _0x2d9316;
      let _0x471931 = _0x2d9316.width / 15;
      const _0x3f99e3 = {
        text: "关卡精灵捕捉",
        y: _0x2d9316.height / 16
      };
      var _0x29fec7 = createLabel(_0x3f99e3);
      _0x29fec7.x = _0x2d9316.width / 2 - _0x29fec7.width / 2;
      _0x2d9316.addChild(_0x29fec7);
      let _0x87db91 = _0x29fec7.y;
      const _0x1dda26 = {
        text: "注意: 勾选的胶囊会从最低级使用 并且[稀有精灵]会在最后一回合使用选中的最高一档胶囊;",
        x: _0x471931,
        y: _0x87db91 + 25
      };
      let _0x2ff85a = createLabel(_0x1dda26);
      _0x2d9316.addChild(_0x2ff85a);
      const _0x1b06c9 = {
        text: "捕捉会从精灵背包主动调用出精灵战斗 优先级: 波蒂斯加 > [闪光]波克尔 > 熊猫 > 无名;",
        textColor: 16776960,
        x: _0x471931,
        y: _0x2ff85a.y + _0x2ff85a.height + 10
      };
      var _0x1ce014 = createLabel(_0x1b06c9);
      _0x2d9316.addChild(_0x1ce014);
      const _0x1f46e1 = {
        text: "关卡精灵选择",
        y: _0x1ce014.y + _0x1ce014.height + 10
      };
      var _0x29fec7 = createLabel(_0x1f46e1);
      _0x29fec7.x = _0x2d9316.width / 2 - _0x29fec7.width / 2;
      _0x2d9316.addChild(_0x29fec7);
      let _0x40832e = window.noLevelCatchPets.bossID.split("|");
      for (let _0x4a1fc8 = 0; _0x4a1fc8 < _0x40832e.length; _0x4a1fc8++) {
        _0xa45ef4.planetPets.push({
          probability: _0x40832e[_0x4a1fc8].split("_")[1],
          bossId: _0x40832e[_0x4a1fc8].split("_")[0]
        });
      }
      logger(_0xa45ef4.planetPets);
      _0x471931 = _0x2d9316.width / 15;
      let _0x3b6932 = _0x29fec7.y + _0x29fec7.height + 13;
      for (let _0x1e542e = 0; _0x1e542e < _0xa45ef4.planetPets.length; _0x1e542e++) {
        let _0x426cae = xls.pveBoss.getItem(_0xa45ef4.planetPets[_0x1e542e].bossId).petID.split("_")[0];
        const _0x2d8fd7 = {
          x: _0x471931,
          y: _0x3b6932,
          selected: false,
          petId: _0x426cae,
          storageKey: "catchGoal" + _0x426cae
        };
        let _0x31dd3 = createToggle(_0x2d8fd7);
        _0x2d9316.addChild(_0x31dd3);
        const _0x537f1e = {
          petConfBtn: _0x31dd3
        };
        _0xa45ef4.catchConfigs.push(_0x537f1e);
        let _0x2dad49 = createLabel({
          text: PetConfig.getDef(_0x426cae).name + " 概率:(" + _0xa45ef4.planetPets[_0x1e542e].probability + ")",
          x: _0x31dd3.x + _0x31dd3.width + 10,
          y: _0x3b6932,
          textColor: 16776960
        });
        _0x2d9316.addChild(_0x2dad49);
        _0x3b6932 = _0x31dd3.height + _0x31dd3.y + 20;
        let _0x27e4e4 = _0x2d9316.width / 2.5;
        _0xa45ef4.catchConfigs[_0x1e542e].capConfBtn = [];
        for (let _0x205657 = 0; _0x205657 < _0xa45ef4.capsuleNames.length; _0x205657++) {
          const _0x432503 = {
            text: _0xa45ef4.capsuleNames[_0x205657].capName,
            x: _0x27e4e4,
            y: _0x31dd3.y
          };
          let _0x1c301a = createLabel(_0x432503);
          _0x2d9316.addChild(_0x1c301a);
          const _0x52e202 = {
            x: _0x1c301a.x + _0x1c301a.width + 10,
            y: _0x31dd3.y,
            selected: false,
            capId: _0xa45ef4.capsuleNames[_0x205657].capId,
            textValue: _0xa45ef4.capsuleNames[_0x205657].capName
          };
          let _0x5ba3ca = createToggle(_0x52e202);
          if (localStorage.getItem("catchCaps" + _0x426cae) != null) {
            let _0x30e13a = localStorage.getItem("catchCaps" + _0x426cae).split(",");
            logger("存储胶囊ids", _0x30e13a, "目前胶囊id", _0x5ba3ca.capId);
            if (_0x30e13a.indexOf(_0x5ba3ca.capId + "") != -1) {
              _0x5ba3ca.selected = true;
            }
          }
          _0x2d9316.addChild(_0x5ba3ca);
          _0x27e4e4 = _0x5ba3ca.x + _0x5ba3ca.width + 10;
          _0xa45ef4.catchConfigs[_0x1e542e].capConfBtn.push(_0x5ba3ca);
        }
      }
      const _0x5905e2 = {
        prompt: "捕捉只数",
        width: 100,
        x: 30,
        y: _0x2d9316.height / 1.3,
        storageKey: "levelinputCounts"
      };
      var _0x2299a8 = createEdit(_0x5905e2);
      const _0x593ad6 = {
        text: "捕捉只数",
        x: 30,
        y: _0x2299a8.y - _0x2299a8.height + 10
      };
      var _0x29fec7 = createLabel(_0x593ad6);
      _0x2d9316.addChild(_0x2299a8);
      _0x2d9316.addChild(_0x29fec7);
      const _0x3a9f18 = {
        prompt: "停止天赋",
        width: 100,
        x: _0x2299a8.width + 67,
        y: _0x2d9316.height / 1.3,
        storageKey: "levelCatchTalent"
      };
      var _0x8e57f8 = createEdit(_0x3a9f18);
      _0x2d9316.addChild(_0x8e57f8);
      const _0x37f684 = {
        text: "停止天赋",
        x: _0x2299a8.width + 67,
        y: _0x8e57f8.y - _0x8e57f8.height + 10
      };
      var _0x29fec7 = createLabel(_0x37f684);
      _0x2d9316.addChild(_0x29fec7);
      _0x2d9316.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0xa45ef4.stop();
      }, function () {
        try {
          let _0x1a829a = [];
          for (let _0x239026 = 0; _0x239026 < _0xa45ef4.catchConfigs.length; _0x239026++) {
            let _0x42d59e = _0xa45ef4.catchConfigs[_0x239026];
            if (_0x42d59e.petConfBtn.selected) {
              let _0x3a2434 = [];
              _0x42d59e.capConfBtn.forEach(_0x3a8eed => {
                if (_0x3a8eed.selected) {
                  _0x3a2434.push(_0x3a8eed.capId);
                }
              });
              if (!_0x3a2434.length) {
                MFC.bubbleAlert.showAlert(PetConfig.getDef(_0x42d59e.petConfBtn.petId).name + "==>至少设置一种胶囊类型!!!");
                return true;
              }
              const _0x565667 = {
                petId: _0x42d59e.petConfBtn.petId + "",
                capIds: _0x3a2434
              };
              _0x1a829a.push(_0x565667);
              localStorage.setItem("catchGoal" + _0x42d59e.petConfBtn.petId, true);
              localStorage.setItem("catchCaps" + _0x42d59e.petConfBtn.petId, _0x3a2434);
            } else {
              localStorage.setItem("catchGoal" + _0x42d59e.petConfBtn.petId, false);
            }
          }
          logger("goalCatchs", _0x1a829a);
          if (_0x1a829a.length == 0) {
            MFC.bubbleAlert.showAlert("至少设置一种精灵");
            return true;
          }
          _0xa45ef4.goalCatchs = _0x1a829a;
          if (isNaN(parseInt(_0x2299a8.text))) {
            MFC.bubbleAlert.showAlert("请输入有效捕捉次数");
            return true;
          }
          if (isNaN(parseInt(_0x8e57f8.text)) || parseInt(_0x8e57f8.text) > 31 || parseInt(_0x8e57f8.text) < 0) {
            MFC.bubbleAlert.showAlert("请输入有效精灵天赋");
            return true;
          }
          localStorage.setItem("levelCatchTalent", parseInt(_0x8e57f8.text));
          localStorage.setItem("levelinputCounts", parseInt(_0x2299a8.text));
          _0xa45ef4.catchCounts = parseInt(_0x2299a8.text);
          _0xa45ef4.stopTalent = parseInt(_0x8e57f8.text);
          _0xa45ef4.levelId = window.noLevelCatchPets.levelId;
          _0xa45ef4.prcessBody();
        } catch (_0x4be771) {
          logger(_0x4be771);
        }
      }], null);
      _0x2d9316.showAlert();
    });
  }
  async prcessBody() {
    logger("胶囊ids", this.capIds, "精灵ids", this.petIds, "捕捉次数", this.catchCounts, "精灵天赋", this.stopTalent, "关卡", this.levelId);
    try {
      let _0x2c22a7 = this.checkUseCatchPet();
      if (!_0x2c22a7) {
        addGameLog("没有相关满足条件的捕捉精灵，捕捉结束[等级至少60级]");
        this.stop();
        return false;
      }
      await wait(200);
      const _0x2a87a2 = {
        op: 1,
        arrayType: "defaultTeam",
        subArray: 0,
        idx: 1,
        teamUp: 0,
        fightType: 0,
        getTimeList: [_0x2c22a7.getTime]
      };
      await this.send_message("cs_new_change_petArray", _0x2a87a2);
      addGameLog("设置" + PetConfig.getDef(_0x2c22a7.petId).name + "首发成功！");
      while (1) {
        if (UserManager.getInstance().userInfo.curEnergy < 5) {
          this.logAllCatchPets(this.allCatchPets);
          MFC.alert.show("电池不足,任务取消!");
          addGameLog("电池不足,任务取消!");
          this.stop();
          return;
        }
        await this.send_message("cs_pve_planet_start_battle", {
          levelId: this.levelId,
          getTimeList: [_0x2c22a7.getTime],
          attachBattleSkill: []
        });
        let _0x435e43 = await this.waitEvent("sc_battle_notify_load_resource");
        let _0x272d80 = JSON.parse(_0x435e43.gameBody[_0x435e43.gameBody.length - 1].raw);
        _0x435e43.gameBody.splice(0, _0x435e43.gameBody.length);
        await wait(200);
        let _0x4a7b6f = _0x272d80.teamB.players[0].petInfos[0].petID;
        addGameLog("对战精灵: " + PetConfig.getDef(_0x4a7b6f).name);
        logger("精灵数组", this.petIds, "对战精灵", _0x4a7b6f);
        await this.send_message("cs_online_load_resource", {
          groupId: "",
          battleType: 0
        });
        await wait(200);
        if (this.goalCatchs.length) {
          this.petIds = [];
          for (let _0x1ee3b3 = 0; _0x1ee3b3 < this.goalCatchs.length; _0x1ee3b3++) {
            this.petIds.push(this.goalCatchs[_0x1ee3b3].petId);
          }
          logger("目标数组", this.petIds);
        }
        if (this.petIds.indexOf(_0x4a7b6f.toString()) == -1) {
          addGameLog(PetConfig.getDef(_0x4a7b6f).name + " 非目标精灵,逃跑");
          await wait(200);
          await this.send_message("cs_quit_battle", {});
          await wait(200);
          continue;
        } else {
          await this.send_message("cs_online_player_operation", {
            opType: 5,
            data: null,
            groupId: ""
          });
          _0x435e43 = await this.waitEvent("sc_battle_notify_round_result");
          _0x272d80 = JSON.parse(_0x435e43.gameBody[_0x435e43.gameBody.length - 1].raw);
          _0x435e43.gameBody.splice(0, _0x435e43.gameBody.length);
          await wait(200);
          if (_0x272d80.result.result !== 0) {
            addGameLog("怪物已经死亡!!!!");
            continue;
          }
        }
        if (this.goalCatchs.length) {
          this.capIds = [];
          for (let _0x1f7a20 = 0; _0x1f7a20 < this.goalCatchs.length; _0x1f7a20++) {
            if (this.goalCatchs[_0x1f7a20].petId == _0x4a7b6f) {
              let _0x83035e = PetConfig.getDef(_0x4a7b6f).catchRound;
              addGameLog("对战" + PetConfig.getDef(_0x4a7b6f).name + "第 " + (_0x272d80.result.roundNum + 1) + "回合");
              this.capIds = this.goalCatchs[_0x1f7a20].capIds;
              if (_0x83035e == _0x272d80.result.roundNum + 1 && _0x83035e <= 5) {
                addGameLog("到达稀有精灵捕捉最后一回合\n使用选择最高档胶囊!");
                let _0x26380c = this.goalCatchs[_0x1f7a20].capIds;
                this.capIds = [_0x26380c[_0x26380c.length - 1]];
              }
              break;
            }
          }
        }
        var _0xe995c7 = randomCap(this.capIds);
        if (_0xe995c7 == "NoCap") {
          addGameLog("无可用胶囊,捕捉任务结束");
          this.logAllCatchPets(this.allCatchPets);
          await this.send_message("cs_quit_battle", {});
          this.stop();
          return false;
        }
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        await wait(200);
        let _0x4a55af = _0x2c22a7.skillID;
        _0x272d80 = await this.useSkill(_0x4a55af);
        let _0x51fa89 = 0;
        while (1) {
          if (_0x272d80.result.result !== 0) {
            addGameLog("怪物已经死亡!!!!");
            _0x51fa89 = 1;
            break;
          }
          if (_0x272d80.result.playerInfos[0].uid !== MFC.userInfo.uid) {
            if (_0x272d80.result.playerInfos[0].petInfos[0].crtHp <= 1) {
              break;
            }
          } else if (_0x272d80.result.playerInfos[1].petInfos[0].crtHp <= 1) {
            break;
          }
          await this.send_message("cs_online_load_battle_result", {
            groupId: ""
          });
          await wait(200);
          _0x272d80 = await this.useSkill(_0x4a55af);
        }
        if (_0x51fa89 == 1) {
          continue;
        }
        await wait(200);
        addGameLog("怪物血量已经为1,开始捕捉");
        this.CatchPetDatas = null;
        while (_0x272d80.result.result == 0) {
          await this.send_message("cs_online_load_battle_result", {
            groupId: ""
          });
          if (this.goalCatchs.length) {
            this.capIds = [];
            for (let _0x1f06c2 = 0; _0x1f06c2 < this.goalCatchs.length; _0x1f06c2++) {
              if (this.goalCatchs[_0x1f06c2].petId == _0x4a7b6f) {
                let _0x411a45 = PetConfig.getDef(_0x4a7b6f).catchRound;
                addGameLog("对战" + PetConfig.getDef(_0x4a7b6f).name + "第 " + (_0x272d80.result.roundNum + 1) + "回合");
                this.capIds = this.goalCatchs[_0x1f06c2].capIds;
                if (_0x411a45 == _0x272d80.result.roundNum + 1 && _0x411a45 <= 5) {
                  addGameLog("到达稀有精灵捕捉最后一回合\n使用选择最高档胶囊!");
                  let _0xae0426 = this.goalCatchs[_0x1f06c2].capIds;
                  this.capIds = [_0xae0426[_0xae0426.length - 1]];
                }
                break;
              }
            }
          }
          var _0xe995c7 = randomCap(this.capIds);
          if (_0xe995c7 == "NoCap") {
            addGameLog("无可用胶囊,捕捉任务结束");
            await this.send_message("cs_quit_battle", {});
            this.logAllCatchPets(this.allCatchPets);
            this.stop();
            return false;
          }
          await wait(400);
          addGameLog("使用:" + _0xe995c7.name + "胶囊,剩余:" + _0xe995c7.num);
          _0x272d80 = await this.useItem(_0xe995c7.itemId);
          let _0x36e7c7 = await this.waitEvent("sc_notify_item_change");
          _0x36e7c7.gameBody.splice(0, _0x36e7c7.gameBody.length);
          if (this.CatchPetDatas || window.nowTask.CatchPetDatas) {
            if (window.nowTask.CatchPetDatas) {
              this.CatchPetDatas = window.nowTask.CatchPetDatas;
            }
            addGameLog("捕捉成功: " + this.CatchPetDatas.pet.nick + " 天赋:" + this.CatchPetDatas.pet.talent);
            MFC.bubbleAlert.showAlert("捕捉成功: " + this.CatchPetDatas.pet.nick + " 天赋:" + this.CatchPetDatas.pet.talent);
            this.allCatchPets.push({
              nick: this.CatchPetDatas.pet.nick,
              talent: this.CatchPetDatas.pet.talent
            });
            this.addCount++;
            if (this.CatchPetDatas.pet.talent >= this.stopTalent) {
              addGameLog("天赋满足:" + this.stopTalent, "停止");
              this.stop();
              return true;
            }
            break;
          }
        }
        if (this.addCount >= this.catchCounts) {
          addGameLog("捕捉执行完毕:" + this.addCount);
          this.logAllCatchPets(this.allCatchPets);
          this.stop();
          return true;
        }
      }
    } catch (_0x275fc5) {
      logger(_0x275fc5);
      this.logAllCatchPets(this.allCatchPets);
    }
  }
  logAllCatchPets(_0x3576b2) {
    if (_0x3576b2.length > 0) {
      let _0x128bb3 = [];
      for (let _0x5ee4ac = 0; _0x5ee4ac < _0x3576b2.length; _0x5ee4ac++) {
        _0x128bb3.push("\n精灵: " + _0x3576b2[_0x5ee4ac].nick + " 天赋: " + _0x3576b2[_0x5ee4ac].talent);
      }
      addGameLog(_0x128bb3.join(""));
    }
    addGameLog("\n捕捉精灵汇总:");
  }
  checkUseCatchPet() {
    const _0x1f2875 = {
      手下留情Plus: 100125,
      手下留情: 10057,
      真抽打: 31993,
      处处留情: 31598,
      天魔裂空闪: 400005
    };
    const _0x2f0565 = Object.values(_0x1f2875).map(() => false);
    const _0x1957cc = PetManager.getInstance().getAllPets();
    for (let _0x284e41 = 0; _0x284e41 < _0x1957cc.length; _0x284e41++) {
      const _0x5ad364 = _0x1957cc[_0x284e41];
      const _0x134b02 = _0x5ad364.skills;
      if (_0x5ad364.level >= 60) {
        Object.values(_0x1f2875).some((_0x542b61, _0x5f4693) => {
          if (_0x5ad364.nick == "皮皮" && _0x5ad364.skills.indexOf(400005) !== -1) {
            if (_0x5ad364.petTokenGetTimeList[0] !== 0 && _0x5ad364.petTokenGetTimeList[1] !== 0 && _0x5ad364.petTokenGetTimeList[2] !== 0) {
              if (PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x5ad364.petTokenGetTimeList[0]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x5ad364.petTokenGetTimeList[1]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x5ad364.petTokenGetTimeList[2]).ench).enchId == 101) {} else {
                return false;
              }
            } else {
              return false;
            }
          }
          if (_0x134b02.includes(_0x542b61)) {
            const _0x5787dd = {
              getTime: _0x5ad364.getTime,
              skillID: _0x542b61,
              petId: _0x5ad364.petId
            };
            _0x2f0565[_0x5f4693] = _0x5787dd;
            return true;
          }
          return false;
        });
      }
    }
    return _0x2f0565.find(_0x44ca77 => _0x44ca77) || false;
  }
}
class Delegate extends SuperTask {
  constructor() {
    super();
    this.nowName = "一键委派";
    this.attr = 0;
  }
  start() {
    super.start();
    let _0x362c7d = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x1c1388 = [];
      var _0x343976 = SimpleAlertUi({
        height: 450,
        width: 500
      });
      _0x362c7d.alertWin = _0x343976;
      const _0x20e62e = {
        text: "一键委派",
        x: _0x343976.width / 2 - 32,
        y: _0x343976.height / 16
      };
      var _0x4b36aa = createLabel(_0x20e62e);
      _0x1c1388.push(_0x4b36aa);
      const _0x583e74 = {
        text: "注意: 委派商店勾选会自动购买，不要勾选错了哦!!!",
        x: _0x343976.width / 15,
        y: _0x4b36aa.y + 25,
        textColor: 16776960
      };
      let _0x4ec4da = createLabel(_0x583e74);
      _0x1c1388.push(_0x4ec4da);
      const _0x428334 = {
        text: "此功能会自动委派完进行购买~",
        x: _0x343976.width / 15 + 47,
        y: _0x4ec4da.y + _0x4ec4da.height + 10,
        textColor: 16776960
      };
      let _0x2b39d2 = createLabel(_0x428334);
      _0x1c1388.push(_0x2b39d2);
      xls.activityExchange.load();
      let _0x4ee024 = [];
      let _0x4697f7 = [];
      let _0xc0289b = [];
      for (let _0x58b425 = 0; _0x58b425 < 5; _0x58b425++) {
        _0xc0289b[_0x58b425] = xls.activityExchange.getItem(11427 + _0x58b425).name.split("：")[1];
        _0x4ee024[_0x58b425] = createLabel({
          text: _0xc0289b[_0x58b425],
          x: _0x343976.width / 9,
          y: _0x2b39d2.y + (_0x58b425 + 1) * 40
        });
        _0x1c1388.push(_0x4ee024[_0x58b425]);
        _0x4697f7[_0x58b425] = createToggle({
          x: _0x4ee024[_0x58b425].x + 120,
          y: _0x4ee024[_0x58b425].y,
          selected: false,
          storageKey: "waipai" + _0x58b425
        });
        _0x1c1388.push(_0x4697f7[_0x58b425]);
      }
      for (let _0x532c40 = 5; _0x532c40 < 10; _0x532c40++) {
        _0xc0289b[_0x532c40] = xls.activityExchange.getItem(11427 + _0x532c40).name.split("：")[1];
        _0x4ee024[_0x532c40] = createLabel({
          text: _0xc0289b[_0x532c40],
          x: _0x4697f7[1].x + 80,
          y: _0x2b39d2.y + (_0x532c40 - 4) * 40
        });
        _0x1c1388.push(_0x4ee024[_0x532c40]);
        _0x4697f7[_0x532c40] = createToggle({
          x: _0x4ee024[_0x532c40].x + 120,
          y: _0x4ee024[_0x532c40].y,
          selected: false,
          storageKey: "waipai" + _0x532c40
        });
        _0x1c1388.push(_0x4697f7[_0x532c40]);
      }
      let _0x3f3b67 = createLabel({
        text: xls.activityExchange.getItem(22299).name.split("：")[1],
        x: _0x343976.width / 9,
        y: _0x2b39d2.y + 240,
        textColor: 16776960
      });
      _0x1c1388.push(_0x3f3b67);
      const _0x39779e = {
        x: _0x3f3b67.x + 120,
        y: _0x3f3b67.y,
        selected: false,
        storageKey: "waipai" + 10
      };
      _0x4697f7[10] = createToggle(_0x39779e);
      _0x1c1388.push(_0x4697f7[10]);
      _0x362c7d.addAllUis(_0x1c1388);
      _0x343976.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x362c7d.stop();
      }, function () {
        for (let _0x32668f = 0; _0x32668f < 11; _0x32668f++) {
          localStorage.setItem("waipai" + _0x32668f, _0x4697f7[_0x32668f].selected);
        }
        _0x362c7d.prcessBody();
      }], null);
      _0x343976.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x4e6287 = MFC.attr.getAttr(MFC.attrType["foreverNewDispatchEndTime" + 1]) * 1000;
      let _0x27a033 = MFC.attr.getAttr(MFC.attrType["foreverNewDispatchEndTime" + 2]) * 1000;
      let _0xaf6e4d = MFC.attr.getAttr(MFC.attrType["foreverNewDispatchEndTime" + 3]) * 1000;
      let _0x36ff55 = MFC.attr.getAttr(MFC.attrType["foreverNewDispatchEndTime" + 4]) * 1000;
      if (_0x4e6287 == 0) {
        addGameLog("没有正在进行的任务");
      } else if (MFC.serverTimer.getTime() > _0x4e6287) {
        addGameLog("领取第一次派遣奖励");
        await this.send_message("cs_new_dispatch_task", {
          type: 3,
          getTimeList: null,
          taskIdx: 1
        });
        await wait(500);
      } else {
        addGameLog("委派任务还在进行");
      }
      if (_0x27a033 == 0) {
        addGameLog("没有正在进行的任务");
      } else if (MFC.serverTimer.getTime() > _0x27a033) {
        addGameLog("领取第二次派遣奖励");
        await this.send_message("cs_new_dispatch_task", {
          type: 3,
          getTimeList: null,
          taskIdx: 2
        });
        await wait(500);
      } else {
        addGameLog("委派任务还在进行");
      }
      if (_0xaf6e4d == 0) {
        addGameLog("没有正在进行的任务");
      } else if (MFC.serverTimer.getTime() > _0xaf6e4d) {
        addGameLog("领取第三次派遣奖励");
        await this.send_message("cs_new_dispatch_task", {
          type: 3,
          getTimeList: null,
          taskIdx: 3
        });
        await wait(500);
      } else {
        addGameLog("委派任务还在进行");
      }
      if (_0x36ff55 == 0) {
        addGameLog("没有正在进行的任务");
      } else if (MFC.serverTimer.getTime() > _0x36ff55) {
        addGameLog("领取第四次派遣奖励");
        await this.send_message("cs_new_dispatch_task", {
          type: 3,
          getTimeList: null,
          taskIdx: 4
        });
        await wait(500);
      } else {
        addGameLog("委派任务还在进行");
      }
      if (!xls.entrustTask.hasLoaded) {
        xls.entrustTask.load(() => {});
      }
      let _0x4991e7 = await this.send_message("cs_new_dispatch_task", {
        type: 1,
        getTimeList: null,
        taskIdx: 0
      });
      timer.change(1 / 5);
      for (let _0x2db780 = 0; _0x2db780 < 4; _0x2db780++) {
        if (MFC.userInfo.newDispatchTaskGetTimes[_0x2db780].length == 0) {
          if (BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.foreverNewDispatchTaskId), _0x2db780 * 7, (_0x2db780 + 1) * 7) == 0) {
            addGameLog("任务" + (_0x2db780 + 1) + "不存在");
          } else {
            let _0x52a430 = xls.entrustTask.getItem(BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.foreverNewDispatchTaskId), _0x2db780 * 7, (_0x2db780 + 1) * 7)).petNeed.split("|").map(Number);
            logger("任务" + (_0x2db780 + 1) + "需要" + _0x52a430[2] + "只" + _0x52a430[1] + "等级");
            logger(_0x4991e7.needElem[_0x2db780]);
            if (_0x4991e7.needElem[_0x2db780].indexOf("|") !== -1) {
              let _0x25c914 = _0x4991e7.needElem[_0x2db780].split("|");
              let _0x335f0a = [];
              let _0x15e599 = [];
              let _0xb8f11c = 0;
              let _0x1d9a96 = [];
              for (let _0x2551ee = 0; _0x2551ee < _0x25c914.length; _0x2551ee++) {
                let _0xccf04b = _0x25c914[_0x2551ee].split("_");
                let _0x289200 = _0xccf04b[0];
                let _0x31af3c = _0xccf04b[1];
                _0x335f0a.push(parseInt(_0x289200));
                _0x15e599.push(parseInt(_0x31af3c));
              }
              for (let _0x4cb165 = 0; _0x4cb165 < _0x15e599.length; _0x4cb165++) {
                let _0x5cdf6d = PetManager.getInstance().getAllPets().map(_0x5ac701 => {
                  if (PetConfig.getDef(_0x5ac701.petId).elemType == _0x15e599[_0x4cb165] && _0x5ac701.petStatus == 0 && _0x5ac701.level >= _0x52a430[1] && MFC.userInfo.newDispatchTaskGetTimes[0].indexOf(_0x5ac701.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[1].indexOf(_0x5ac701.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[2].indexOf(_0x5ac701.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[3].indexOf(_0x5ac701.getTime) == -1) {
                    return _0x5ac701;
                  }
                }).filter(_0x2b0114 => _0x2b0114).sort((_0x537c03, _0x4a6c38) => _0x537c03.level - _0x4a6c38.level);
                let _0x1a0b3e = PetManager.getInstance().getAllPets().map(_0x13fcb1 => {
                  if (PetConfig.getDef(_0x13fcb1.petId).elemType == _0x15e599[_0x4cb165] && _0x13fcb1.petStatus == 0 && MFC.userInfo.newDispatchTaskGetTimes[0].indexOf(_0x13fcb1.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[1].indexOf(_0x13fcb1.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[2].indexOf(_0x13fcb1.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[3].indexOf(_0x13fcb1.getTime) == -1) {
                    return _0x13fcb1;
                  }
                }).filter(_0x471c1a => _0x471c1a).sort((_0x4e4430, _0x5dad13) => _0x4e4430.level - _0x5dad13.level);
                for (let _0x1ffece = 0; _0x1ffece < _0x335f0a[_0x4cb165]; _0x1ffece++) {
                  if (_0x52a430[2] > _0xb8f11c) {
                    if (_0x5cdf6d.length > 0) {
                      _0x1d9a96.push(_0x5cdf6d.shift().getTime);
                      _0xb8f11c++;
                    } else if (_0x1a0b3e.length > 0) {
                      _0x1d9a96.push(_0x1a0b3e.shift().getTime);
                    }
                  } else if (_0x1a0b3e.length > 0) {
                    _0x1d9a96.push(_0x1a0b3e.shift().getTime);
                  }
                }
              }
              if (_0x1d9a96.length == _0x335f0a.reduce((_0xf7b618, _0x17e4bf) => _0xf7b618 + _0x17e4bf, 0) && _0xb8f11c == _0x52a430[2]) {
                const _0x371265 = {
                  type: 2,
                  getTimeList: _0x1d9a96,
                  taskIdx: _0x2db780 + 1
                };
                await this.send_message("cs_new_dispatch_task", _0x371265);
                await wait(500);
                addGameLog("任务" + (_0x2db780 + 1) + "委派成功");
              } else {
                addGameLog("任务" + (_0x2db780 + 1) + "没有符合条件精灵");
              }
            } else {
              let _0x150097 = _0x4991e7.needElem[_0x2db780].split("_").map(Number);
              logger("数量" + _0x150097[0] + "属性" + _0x150097[1]);
              let _0x31f251 = [];
              let _0x4bf666 = PetManager.getInstance().getAllPets().map(_0x51063e => {
                if (PetConfig.getDef(_0x51063e.petId).elemType == _0x150097[1] && _0x51063e.petStatus == 0 && MFC.userInfo.newDispatchTaskGetTimes[0].indexOf(_0x51063e.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[1].indexOf(_0x51063e.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[2].indexOf(_0x51063e.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[3].indexOf(_0x51063e.getTime) == -1) {
                  return _0x51063e;
                }
              }).filter(_0x36e6c7 => _0x36e6c7).sort((_0x35378b, _0x5ddc4d) => _0x35378b.level - _0x5ddc4d.level);
              let _0x844893 = PetManager.getInstance().getAllPets().map(_0x2e1b81 => {
                if (PetConfig.getDef(_0x2e1b81.petId).elemType == _0x150097[1] && _0x2e1b81.petStatus == 0 && _0x2e1b81.level >= _0x52a430[1] && MFC.userInfo.newDispatchTaskGetTimes[0].indexOf(_0x2e1b81.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[1].indexOf(_0x2e1b81.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[2].indexOf(_0x2e1b81.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[3].indexOf(_0x2e1b81.getTime) == -1) {
                  return _0x2e1b81;
                }
              }).filter(_0x201b03 => _0x201b03).sort((_0x40f7e7, _0x3b1307) => _0x40f7e7.level - _0x3b1307.level);
              for (let _0x14ecba = 0; _0x14ecba < _0x150097[0] - _0x52a430[2]; _0x14ecba++) {
                if (_0x4bf666.length > 0) {
                  _0x31f251.push(_0x4bf666.shift().getTime);
                }
              }
              for (let _0xb847ec = 0; _0xb847ec < _0x52a430[2]; _0xb847ec++) {
                if (_0x844893.length > 0) {
                  _0x31f251.push(_0x844893.shift().getTime);
                }
              }
              if (_0x31f251.length == _0x150097[0]) {
                const _0x2c6c33 = {
                  type: 2,
                  getTimeList: _0x31f251,
                  taskIdx: _0x2db780 + 1
                };
                await this.send_message("cs_new_dispatch_task", _0x2c6c33);
                await wait(500);
                addGameLog("任务" + (_0x2db780 + 1) + "委派成功");
              } else {
                addGameLog("任务" + (_0x2db780 + 1) + "没有符合条件精灵");
              }
            }
          }
        } else {
          addGameLog("任务" + (_0x2db780 + 1) + "不存在或正在进行");
        }
      }
      addGameLog("即将进行商店购买");
      for (let _0x5f0341 = 0; _0x5f0341 < 10; _0x5f0341++) {
        if (localStorage.getItem("waipai" + _0x5f0341).toString() == "true") {
          if (ExchangeUtils.getCurrentExchangeNum(xls.activityExchange.getItem(11427 + _0x5f0341)) == 1) {
            addGameLog(xls.activityExchange.getItem(11427 + _0x5f0341).name.split("：")[1] + "已购买");
          } else if (MFC.attr.getAttr(2010) >= parseInt(xls.activityExchange.getItem(11427 + _0x5f0341).consume.split("_")[1])) {
            const _0x18442e = {
              id: 11427 + _0x5f0341,
              coeff: 1,
              selectIndex: 0,
              subDropIdList: []
            };
            await this.send_message("cs_exchange_activity_reward", _0x18442e);
            await wait(200);
            addGameLog("购买" + xls.activityExchange.getItem(11427 + _0x5f0341).name.split("：")[1]);
          } else {
            addGameLog("委托积分不足以购买" + xls.activityExchange.getItem(11427 + _0x5f0341).name.split("：")[1]);
          }
        }
      }
      if (localStorage.getItem("waipai" + 10).toString() == "true") {
        if (ExchangeUtils.getCurrentExchangeNum(xls.activityExchange.getItem(22299)) == 1) {
          addGameLog(xls.activityExchange.getItem(22299).name.split("：")[1] + "已购买");
        } else if (MFC.attr.getAttr(2010) >= parseInt(xls.activityExchange.getItem(22299).consume.split("_")[1])) {
          await this.send_message("cs_exchange_activity_reward", {
            id: 22299,
            coeff: 1,
            selectIndex: 0,
            subDropIdList: []
          });
          await wait(200);
          addGameLog("购买" + xls.activityExchange.getItem(22299).name.split("：")[1]);
        } else {
          addGameLog("委托积分不足以购买" + xls.activityExchange.getItem(22299).name.split("：")[1]);
        }
      }
      this.stop();
    } catch (_0x6650ad) {}
  }
}
class Activity888 extends SuperTask {
  constructor() {
    super();
    this.nowName = "888活动";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_notify_change_pet"
    }, {
      watchEventName: "sc_change_default_team"
    }, {
      watchEventName: "sc_notify_item_change"
    }];
    this.task = [];
    this.team = [];
    this.pp = false;
    this.hksbattlestatu = 0;
    this.initfldata1 = [];
    this.initfldata2 = [];
  }
  start() {
    super.start();
    let _0x388489 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x349f86 = [];
      var _0x5d68c5 = SimpleAlertUi({
        height: 400,
        width: 460
      });
      _0x388489.alertWin = _0x5d68c5;
      const _0x3d29a6 = {
        text: "888活动",
        x: _0x5d68c5.width / 2 - 28,
        y: _0x5d68c5.height / 16
      };
      var _0xe31bd2 = createLabel(_0x3d29a6);
      _0x349f86.push(_0xe31bd2);
      const _0x56e458 = {
        text: "注意:",
        x: 30,
        y: _0x5d68c5.height / 16,
        textColor: 16776960
      };
      var _0x33bae5 = createLabel(_0x56e458);
      _0x349f86.push(_0x33bae5);
      var _0x33bae5 = createLabel({
        text: "1.斗皇打法光闪击选择青龙会浪费大量pp",
        x: _0x5d68c5.width / 2 - 120,
        y: _0x33bae5.y + 26
      });
      _0x349f86.push(_0x33bae5);
      const _0xdc13f0 = {
        text: "2.魔神用哈肯撒长老水次蒂朵神秘狗",
        x: _0x5d68c5.width / 2 - 120,
        y: _0x33bae5.y + 26
      };
      var _0x311729 = createLabel(_0xdc13f0);
      _0x349f86.push(_0x311729);
      const _0x52e592 = {
        x: 40,
        y: _0x311729.y + 26,
        selected: true,
        storageKey: "douhuang"
      };
      let _0x3175ea = createRadio(_0x52e592);
      _0x349f86.push(_0x3175ea);
      const _0xbb56a6 = {
        text: "飞廉",
        x: _0x3175ea.width + _0x3175ea.x + 10,
        y: _0x3175ea.y
      };
      var _0x876c8b = createLabel(_0xbb56a6);
      _0x349f86.push(_0x876c8b);
      const _0x57cafd = {
        x: _0x876c8b.x + _0x876c8b.width + 80,
        y: _0x3175ea.y,
        selected: false,
        storageKey: "Renault"
      };
      let _0x39b8ab = createRadio(_0x57cafd);
      _0x349f86.push(_0x39b8ab);
      const _0x5eee99 = {
        text: "雷锘",
        x: _0x39b8ab.width + _0x39b8ab.x + 10,
        y: _0x3175ea.y
      };
      var _0x1097f0 = createLabel(_0x5eee99);
      _0x349f86.push(_0x1097f0);
      const _0x1ef26a = {
        x: 40,
        y: _0x311729.y + 52,
        selected: false,
        storageKey: "Mosheny"
      };
      let _0x87cea9 = createRadio(_0x1ef26a);
      _0x349f86.push(_0x87cea9);
      const _0x32b2ab = {
        text: "魔神",
        x: _0x87cea9.width + _0x87cea9.x + 10,
        y: _0x87cea9.y
      };
      var _0x25371c = createLabel(_0x32b2ab);
      _0x349f86.push(_0x25371c);
      const _0x4e3183 = {
        x: _0x876c8b.x + _0x876c8b.width + 80,
        y: _0x87cea9.y,
        selected: false,
        storageKey: "rebirth"
      };
      let _0x7911c = createRadio(_0x4e3183);
      _0x349f86.push(_0x7911c);
      const _0x345114 = {
        text: "耶里梅斯",
        x: _0x39b8ab.width + _0x39b8ab.x + 10,
        y: _0x87cea9.y
      };
      var _0xfa66fe = createLabel(_0x345114);
      _0x349f86.push(_0xfa66fe);
      const _0x41d8a7 = {
        x: 40,
        y: _0x311729.y + 78,
        selected: false,
        storageKey: "aobulei"
      };
      let _0x5067c5 = createRadio(_0x41d8a7);
      _0x349f86.push(_0x5067c5);
      const _0x4a7b48 = {
        text: "奥布雷",
        x: _0x87cea9.width + _0x87cea9.x + 10,
        y: _0x5067c5.y
      };
      var _0x379dd8 = createLabel(_0x4a7b48);
      _0x349f86.push(_0x379dd8);
      const _0x58e1fd = {
        x: _0x876c8b.x + _0x876c8b.width + 80,
        y: _0x5067c5.y,
        selected: false,
        storageKey: "hakensa"
      };
      let _0x1d68b4 = createRadio(_0x58e1fd);
      _0x349f86.push(_0x1d68b4);
      const _0x28aece = {
        text: "哈肯撒",
        x: _0x39b8ab.width + _0x39b8ab.x + 10,
        y: _0x5067c5.y
      };
      var _0x5ad3ba = createLabel(_0x28aece);
      _0x349f86.push(_0x5ad3ba);
      const _0x541742 = {
        x: 40,
        y: _0x311729.y + 104,
        selected: false,
        storageKey: "modi"
      };
      let _0x14c9e0 = createRadio(_0x541742);
      _0x349f86.push(_0x14c9e0);
      const _0x1648f9 = {
        text: "莫迪西斯",
        x: _0x87cea9.width + _0x87cea9.x + 10,
        y: _0x14c9e0.y
      };
      var _0x161268 = createLabel(_0x1648f9);
      _0x349f86.push(_0x161268);
      const _0x3416a4 = {
        x: _0x876c8b.x + _0x876c8b.width + 80,
        y: _0x14c9e0.y,
        selected: false,
        storageKey: "pthl"
      };
      let _0x2fd962 = createRadio(_0x3416a4);
      _0x349f86.push(_0x2fd962);
      const _0x566861 = {
        text: "巨尾狐妖",
        x: _0x39b8ab.width + _0x39b8ab.x + 10,
        y: _0x2fd962.y
      };
      var _0x96c064 = createLabel(_0x566861);
      _0x349f86.push(_0x96c064);
      const _0x2dcb12 = {
        x: 40,
        y: _0x311729.y + 130,
        selected: false,
        storageKey: "zh"
      };
      let _0x16387e = createRadio(_0x2dcb12);
      _0x349f86.push(_0x16387e);
      const _0xe32597 = {
        text: "战皇",
        x: _0x16387e.width + _0x16387e.x + 10,
        y: _0x16387e.y
      };
      var _0x5ce7d1 = createLabel(_0xe32597);
      _0x349f86.push(_0x5ce7d1);
      _0x388489.addAllUis(_0x349f86);
      _0x5d68c5.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x388489.stop();
      }, function () {
        localStorage.setItem("douhuang", _0x3175ea.selected);
        localStorage.setItem("Renault", _0x39b8ab.selected);
        localStorage.setItem("Mosheny", _0x87cea9.selected);
        localStorage.setItem("rebirth", _0x7911c.selected);
        localStorage.setItem("aobulei", _0x5067c5.selected);
        localStorage.setItem("hakensa", _0x1d68b4.selected);
        localStorage.setItem("modi", _0x14c9e0.selected);
        localStorage.setItem("pthl", _0x2fd962.selected);
        localStorage.setItem("zh", _0x2fd962.selected);
        if (_0x3175ea.selected) {
          _0x388489.task[0] = 1;
        }
        if (_0x39b8ab.selected) {
          _0x388489.task[1] = 1;
        }
        if (_0x87cea9.selected) {
          _0x388489.task[2] = 1;
        }
        if (_0x7911c.selected) {
          _0x388489.task[3] = 1;
        }
        if (_0x5067c5.selected) {
          _0x388489.task[4] = 1;
        }
        if (_0x1d68b4.selected) {
          _0x388489.task[5] = 1;
        }
        if (_0x14c9e0.selected) {
          _0x388489.task[6] = 1;
        }
        if (_0x2fd962.selected) {
          _0x388489.task[7] = 1;
        }
        if (_0x16387e.selected) {
          _0x388489.task[8] = 1;
        }
        _0x388489.prcessBody();
      }], null);
      _0x5d68c5.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (this.task[0]) {
        await this.flbigui();
      }
      if (this.task[1]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_12_25 14:05:00") {
          await this.Renaultui();
        } else {
          addGameLog("活动已结束");
          this.stop();
        }
      }
      if (this.task[2]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_07_10 14:05:00") {
          await this.mosheny();
        } else {
          addGameLog("魔神已结束");
          this.stop();
        }
      }
      if (this.task[3]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_07_17 14:05:00") {
          if (MFC.attr.getAttr(MFC.attrType.foreverSpetSelect) == 0) {
            addGameLog("超级集结还未选择");
            this.stop();
          } else {
            await this.rebirthui();
          }
        } else {
          addGameLog("超级集结已结束");
          this.stop();
        }
      }
      if (this.task[4]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_07_17 14:05:00") {
          if (MFC.attr.getAttr(MFC.attrType.foreverSpetSelect) == 0) {
            addGameLog("超级集结还未选择");
            this.stop();
          } else {
            await this.Auberyui();
          }
        } else {
          addGameLog("超级集结已结束");
          this.stop();
        }
      }
      if (this.task[5]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_07_17 14:05:00") {
          if (MFC.attr.getAttr(MFC.attrType.foreverSpetSelect) == 0) {
            addGameLog("超级集结还未选择");
            this.stop();
          } else {
            await this.hksui();
          }
        } else {
          addGameLog("超级集结已结束");
          this.stop();
        }
      }
      if (this.task[6]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_07_17 14:05:00") {
          if (MFC.attr.getAttr(MFC.attrType.foreverSpetSelect) == 0) {
            addGameLog("超级集结还未选择");
            this.stop();
          } else {
            await this.modiui();
          }
        } else {
          addGameLog("超级集结已结束");
          this.stop();
        }
      }
      if (this.task[7]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_07_17 14:05:00") {
          if (MFC.attr.getAttr(MFC.attrType.foreverSpetSelect) == 0) {
            addGameLog("超级集结还未选择");
            this.stop();
          } else {
            await this.pthl();
          }
        } else {
          addGameLog("超级集结已结束");
          this.stop();
        }
      }
      if (this.task[8]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_10_16 14:05:00") {
          addGameLog("运行战皇!");
          await this.zhanhuang();
        } else {
          addGameLog("超级集结已结束");
          this.stop();
        }
      }
    } catch (_0x4dadcc) {}
  }
  async flbigui() {
    super.start();
    let _0x2c1100 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x3200ce = [];
      var _0x15c552 = SimpleAlertUi({
        height: 350,
        width: 400
      });
      _0x2c1100.alertWin = _0x15c552;
      const _0x1fdcd3 = {
        x: _0x15c552.width / 3.75,
        y: _0x15c552.height / 10 + 150,
        selected: true,
        storageKey: "fl1"
      };
      let _0x143cb2 = createRadio(_0x1fdcd3);
      _0x3200ce.push(_0x143cb2);
      const _0x14ec58 = {
        x: _0x15c552.width / 3.75,
        y: _0x15c552.height / 10 + 150 + 50,
        selected: false,
        storageKey: "fl2"
      };
      let _0x2a4013 = createRadio(_0x14ec58);
      _0x3200ce.push(_0x2a4013);
      const _0x135442 = {
        text: `不是15关换技能是第七天那个boss换
贝特卡恩飞廉最后一关技能跟前面不太一样
需要固伤技能前面是先手
目前是嗜血狂暴血怒血煞狂气突
最后一关需更换为嗜血狂暴血怒血煞血气之刃`,
        x: 25 + _0x143cb2.width,
        y: _0x15c552.height / 10
      };
      var _0x5764a6 = createLabel(_0x135442);
      _0x3200ce.push(_0x5764a6);
      const _0x172045 = {
        text: "青龙",
        x: _0x143cb2.x + 10 + _0x143cb2.width,
        y: _0x143cb2.y
      };
      var _0x584ea6 = createLabel(_0x172045);
      _0x3200ce.push(_0x584ea6);
      const _0x17c86b = {
        text: "贝特卡恩",
        x: _0x143cb2.x + 10 + _0x143cb2.width,
        y: _0x2a4013.y
      };
      var _0x1b3117 = createLabel(_0x17c86b);
      _0x3200ce.push(_0x1b3117);
      _0x2c1100.addAllUis(_0x3200ce);
      _0x15c552.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x2c1100.stop();
      }, function () {
        localStorage.setItem("fl1", _0x143cb2.selected);
        localStorage.setItem("fl2", _0x2a4013.selected);
        if (_0x143cb2.selected) {
          _0x2c1100.flui();
        }
        if (_0x2a4013.selected) {
          _0x2c1100.flui2();
        }
      }], null);
      _0x15c552.showAlert();
    });
  }
  async flui() {
    super.start();
    let _0x3faeeb = this;
    MFC.alert.show("确定进行888飞廉吗需要增幅水龙盾敌我青龙", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x23c9e0) {
      _0x3faeeb.stop();
    }, function (_0x4e7f64) {
      _0x3faeeb.fl();
    }]);
  }
  async fl() {
    await this.initfldata();
    await this.initfldata22();
    await this.flyScythefirst();
    await this.flsd();
    await this.flyScythe2();
    await this.flsd1();
    await this.flyScythereward();
    addGameLog("飞廉结束");
    this.stop();
  }
  async flui2() {
    super.start();
    let _0x434a77 = this;
    MFC.alert.show("确定进行888飞廉吗需要增幅贝特卡恩属性嗜血+狂爆攻击血气+血煞", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x2ac3bf) {
      _0x434a77.stop();
    }, function (_0x48b8a6) {
      _0x434a77.fl2();
    }]);
  }
  async fl2() {
    await this.initfldata();
    await this.initfldata22();
    await this.flyScythefirst();
    await this.flsd();
    await this.flbtke();
    await this.flbtke2();
    await this.flsd2();
    await this.flyScythereward();
    addGameLog("飞廉结束");
    this.stop();
  }
  async initfldata() {
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_25 05:00:00") {
      this.initfldata1.push(2401);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_26 05:00:00") {
      this.initfldata1.push(2402);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_27 05:00:00") {
      this.initfldata1.push(2403);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_28 05:00:00") {
      this.initfldata1.push(2404);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_29 05:00:00") {
      this.initfldata1.push(2405);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_30 05:00:00") {
      this.initfldata1.push(2406);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_31 05:00:00") {
      this.initfldata1.push(2407);
    }
  }
  async initfldata22() {
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_25 05:00:00") {
      this.initfldata2.push(2349);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_26 05:00:00") {
      this.initfldata2.push(2350);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_27 05:00:00") {
      this.initfldata2.push(2351);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_28 05:00:00") {
      this.initfldata2.push(2352);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_29 05:00:00") {
      this.initfldata2.push(2353);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_30 05:00:00") {
      this.initfldata2.push(2354);
    }
    if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") >= "2024_12_31 05:00:00") {
      this.initfldata2.push(2355);
    }
  }
  async flyScythereward() {
    let _0x181576 = xls.activityTaskReset.getItems().filter(function (_0x5ea705) {
      return _0x5ea705.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x5ea705.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x5ea705.activityIdentity == 473;
    });
    for (let _0x1fd575 = 0; _0x1fd575 < _0x181576.length; _0x1fd575++) {
      if (NewTaskUtils.getTaskResetStateByIndex(_0x181576[_0x1fd575]) == 1) {
        const _0x2fab95 = {
          carnivalId: _0x181576[_0x1fd575].id,
          recvIndex: 0
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x2fab95);
      } else if (NewTaskUtils.getTaskResetStateByIndex(_0x181576[_0x1fd575]) == 0) {
        addGameLog(_0x181576[_0x1fd575].name + _0x181576[_0x1fd575].task + "未完成");
      }
    }
  }
  async flyScythefirst() {
    for (let _0x15fc60 = 0; _0x15fc60 < this.initfldata1.length; _0x15fc60++) {
      if (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(this.initfldata1[_0x15fc60])) {
        while (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(this.initfldata1[_0x15fc60])) {
          if (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
            await this.send_message("cs_feilian_activity", {
              action: 5,
              levelId: 0,
              gameplay: 0,
              petList: [],
              skillId: 0,
              skillIndexs: []
            });
            addGameLog("重新开始");
          }
          const _0x907de = {
            action: 1,
            levelId: 15 + _0x15fc60,
            gameplay: 1,
            petList: [],
            skillId: 0,
            skillIndexs: []
          };
          await this.send_message("cs_feilian_activity", _0x907de);
          this.id = this.initfldata1[_0x15fc60];
          await this.fl1battle();
        }
      }
    }
  }
  async fl1battle() {
    let _0x1c4f2b = mongoAttr.getFeiLianAttrFeiLian().btlPetGetTimeList;
    let _0x149805 = 0;
    while (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
      if (mongoAttr.getFeiLianAttrFeiLian().progress >= 12 && mongoAttr.getFeiLianAttrFeiLian().progress < 14) {
        await this.send_message("cs_feilian_activity", {
          action: 3,
          levelId: 0,
          gameplay: 0,
          petList: [],
          skillId: 1,
          skillIndexs: []
        });
      } else if (mongoAttr.getFeiLianAttrFeiLian().progress >= 14) {
        addGameLog("终点");
        if (this.id == 2406) {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [this.id],
            petList: [_0x1c4f2b[5], _0x1c4f2b[4], _0x1c4f2b[3], _0x1c4f2b[2], _0x1c4f2b[1], _0x1c4f2b[0]],
            times: 0,
            train: 0
          });
          await this.endbattle1();
        } else if (this.id == 2407) {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [this.id],
            petList: [_0x1c4f2b[5], _0x1c4f2b[0], _0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[3], _0x1c4f2b[4]],
            times: 0,
            train: 0
          });
          await this.endbattle2();
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [this.id],
            petList: [_0x1c4f2b[5], _0x1c4f2b[4], _0x1c4f2b[3], _0x1c4f2b[2], _0x1c4f2b[1], _0x1c4f2b[0]],
            times: 0,
            train: 0
          });
          await this.endbattle();
        }
      } else if (mongoAttr.getFeiLianAttrFeiLian().progress <= 12) {
        if (mongoAttr.getFeiLianAttrFeiLian().progress >= 9 && _0x149805 < 3) {
          await this.send_message("cs_feilian_activity", {
            action: 3,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 2,
            skillIndexs: []
          });
          _0x149805++;
        }
        if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 1) {
          await this.send_message("cs_feilian_activity", {
            action: 2,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
        } else if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 2) {
          if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2356 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2361) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[4], _0x1c4f2b[0], _0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[3], _0x1c4f2b[5]],
              times: 0,
              train: 0
            });
            await this.firstbattle(4, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2357 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2364) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[3], _0x1c4f2b[0], _0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[4], _0x1c4f2b[5]],
              times: 0,
              train: 0
            });
            await this.firstbattle(3, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2358 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2366 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2367 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2368 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2369 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2370) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[5], _0x1c4f2b[0], _0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[4], _0x1c4f2b[3]],
              times: 0,
              train: 0
            });
            await this.firstbattle(5, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2359 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2365) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[0], _0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[4], _0x1c4f2b[3], _0x1c4f2b[5]],
              times: 0,
              train: 0
            });
            await this.firstbattle(0, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2360) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[2], _0x1c4f2b[1], _0x1c4f2b[0], _0x1c4f2b[4], _0x1c4f2b[3], _0x1c4f2b[5]],
              times: 0,
              train: 0
            });
            await this.firstbattle(2, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2362 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2363) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[0], _0x1c4f2b[4], _0x1c4f2b[3], _0x1c4f2b[5]],
              times: 0,
              train: 0
            });
            await this.firstbattle(1, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2379 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2375 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2371 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2373) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[5], _0x1c4f2b[0], _0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[4], _0x1c4f2b[3]],
              times: 0,
              train: 0
            });
            await this.firstbattle(5, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2377 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2376 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2372) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[3], _0x1c4f2b[0], _0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[4], _0x1c4f2b[5]],
              times: 0,
              train: 0
            });
            await this.firstbattle(3, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2374) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[1], _0x1c4f2b[0], _0x1c4f2b[5], _0x1c4f2b[2], _0x1c4f2b[4], _0x1c4f2b[3]],
              times: 0,
              train: 0
            });
            await this.kptfirstbattle(1, 0);
          } else if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2378 || mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs == 2380) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x1c4f2b[0], _0x1c4f2b[5], _0x1c4f2b[1], _0x1c4f2b[2], _0x1c4f2b[4], _0x1c4f2b[3]],
              times: 0,
              train: 0
            });
            await this.firstbattle(0, 0);
          } else {
            break;
          }
        }
      }
      if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 0) {
        break;
      }
    }
  }
  async firstbattle(_0x2ea77b, _0x2a952f) {
    await this.initBattle();
    let _0x4b5804 = xls.pveBoss.getItems().filter(_0x1a8536 => _0x1a8536.name.indexOf("ylfx玩家阵容") !== -1)[_0x2ea77b].skills?.split("|")[_0x2a952f];
    let _0x50539a = await this.useSkill(_0x4b5804);
    while (_0x50539a.result.result === 0) {
      let _0x4874e8 = _0x50539a.result.playerInfos.find(_0x1f4adc => _0x1f4adc.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0x4874e8 !== 1) {
        addGameLog("首发被击败");
        await this.send_message("cs_feilian_activity", {
          action: 5,
          levelId: 0,
          gameplay: 0,
          petList: [],
          skillId: 0,
          skillIndexs: []
        });
        break;
      }
      addGameLog("未击败，继续攻击");
      _0x50539a = await this.useSkill(_0x4b5804);
      if (_0x50539a.result.result == 0 && _0x50539a.result.playerInfos.find(_0x40e0be => _0x40e0be.uid == MFC.userInfo.uid) && _0x50539a.result.playerInfos.find(_0x404f52 => _0x404f52.uid == MFC.userInfo.uid).petInfos[0].useSkills.find(_0x57a5e4 => _0x57a5e4.id == _0x4b5804)?.crtPP == 0) {
        if (getSeerItemNum(2001) > 1) {
          _0x50539a = await this.useItem(2001);
        } else if (getSeerItemNum(2002) > 1) {
          _0x50539a = await this.useItem(2002);
        } else if (getSeerItemNum(2003) > 1) {
          _0x50539a = await this.useItem(2003);
        } else {
          addGameLog("pp不足");
          this.stop();
        }
      }
    }
  }
  async kptfirstbattle(_0x187061, _0x678a16) {
    await this.initBattle();
    let _0x5dd58a = [xls.pveBoss.getItems().filter(_0x184084 => _0x184084.name.indexOf("ylfx玩家阵容") !== -1)[_0x187061].skills?.split("|")[1], xls.pveBoss.getItems().filter(_0xd27e48 => _0xd27e48.name.indexOf("ylfx玩家阵容") !== -1)[_0x187061].skills?.split("|")[0]];
    let _0x56ecc3 = await this.useSkill(_0x5dd58a[0]);
    while (_0x56ecc3.result.result === 0) {
      _0x678a16++;
      let _0x10f7a0 = _0x56ecc3.result.playerInfos.find(_0xfbabbd => _0xfbabbd.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0x10f7a0 !== 1) {
        addGameLog("首发被击败");
        break;
      }
      addGameLog("未击败，继续攻击");
      _0x56ecc3 = await this.useSkill(_0x5dd58a[_0x678a16]);
      if (_0x678a16 == 1) {
        _0x678a16 = 0;
      }
    }
  }
  async endbattle() {
    let _0x59d188 = 5;
    let _0x57cacc = await this.initBattle();
    while (_0x57cacc.result.result === 0) {
      let _0x4da79d = xls.pveBoss.getItems().filter(_0x1a28cb => _0x1a28cb.name.indexOf("ylfx玩家阵容") !== -1)[_0x59d188].skills?.split("|")[0];
      let _0x2b0c45 = _0x57cacc.result.playerInfos.find(_0x33092e => _0x33092e.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0x2b0c45 !== 1) {
        addGameLog("被击败,切换");
        _0x59d188--;
        if (_0x59d188 < 0) {
          await this.send_message("cs_feilian_activity", {
            action: 5,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
          break;
        }
        const _0x14ce84 = {
          petIndex: 5 - _0x59d188
        };
        const _0x54447c = {
          opType: 2,
          data: _0x14ce84,
          groupId: ""
        };
        await this.send_message("cs_online_player_operation", _0x54447c);
      }
      addGameLog("继续攻击");
      _0x57cacc = await this.useSkill(_0x4da79d);
      if (_0x57cacc.result.result == 0 && _0x57cacc.result.playerInfos.find(_0x1568bb => _0x1568bb.uid == MFC.userInfo.uid) && _0x57cacc.result.playerInfos.find(_0x5f03e4 => _0x5f03e4.uid == MFC.userInfo.uid).petInfos[5 - _0x59d188].useSkills.find(_0xf80348 => _0xf80348.id == _0x4da79d)?.crtPP == 0) {
        if (getSeerItemNum(2001) > 1) {
          _0x57cacc = await this.useItem(2001);
        } else if (getSeerItemNum(2002) > 1) {
          _0x57cacc = await this.useItem(2002);
        } else if (getSeerItemNum(2003) > 1) {
          _0x57cacc = await this.useItem(2003);
        } else {
          addGameLog("pp不足");
          this.stop();
        }
      }
    }
    if (_0x57cacc.result.result == 2) {
      await this.send_message("cs_feilian_activity", {
        action: 5,
        levelId: 0,
        gameplay: 0,
        petList: [],
        skillId: 0,
        skillIndexs: []
      });
    }
  }
  async endbattle1() {
    let _0x2918c5 = 5;
    let _0x4538c7 = await this.initBattle();
    _0x4538c7 = await this.useSkill(22746);
    while (_0x4538c7.result.result === 0) {
      let _0x48d565 = xls.pveBoss.getItems().filter(_0xcdb01e => _0xcdb01e.name.indexOf("ylfx玩家阵容") !== -1)[_0x2918c5].skills?.split("|")[0];
      let _0xd53d92 = _0x4538c7.result.playerInfos.find(_0xe8a6fb => _0xe8a6fb.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0xd53d92 !== 1) {
        addGameLog("被击败,切换");
        _0x2918c5--;
        if (_0x2918c5 < 0) {
          await this.send_message("cs_feilian_activity", {
            action: 5,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
          break;
        }
        const _0xe05bf2 = {
          petIndex: 5 - _0x2918c5
        };
        const _0x76322 = {
          opType: 2,
          data: _0xe05bf2,
          groupId: ""
        };
        await this.send_message("cs_online_player_operation", _0x76322);
      }
      addGameLog("继续攻击");
      _0x4538c7 = await this.useSkill(_0x48d565);
      if (_0x4538c7.result.result == 0 && _0x4538c7.result.playerInfos.find(_0x400ced => _0x400ced.uid == MFC.userInfo.uid) && _0x4538c7.result.playerInfos.find(_0x42ac14 => _0x42ac14.uid == MFC.userInfo.uid).petInfos[5 - _0x2918c5].useSkills.find(_0x2f39ed => _0x2f39ed.id == _0x48d565)?.crtPP == 0) {
        if (getSeerItemNum(2001) > 1) {
          _0x4538c7 = await this.useItem(2001);
        } else if (getSeerItemNum(2002) > 1) {
          _0x4538c7 = await this.useItem(2002);
        } else if (getSeerItemNum(2003) > 1) {
          _0x4538c7 = await this.useItem(2003);
        } else {
          addGameLog("pp不足");
          this.stop();
        }
      }
    }
    if (_0x4538c7.result.result == 2) {
      await this.send_message("cs_feilian_activity", {
        action: 5,
        levelId: 0,
        gameplay: 0,
        petList: [],
        skillId: 0,
        skillIndexs: []
      });
    }
  }
  async endbattle2() {
    let _0x4f85d7 = 0;
    let _0x5a2195 = await this.initBattle();
    _0x5a2195 = await this.useSkill(22746);
    while (_0x5a2195.result.result === 0) {
      let _0x1d9ff3;
      if (_0x4f85d7 == 0) {
        _0x1d9ff3 = xls.pveBoss.getItems().filter(_0x15f4dd => _0x15f4dd.name.indexOf("ylfx玩家阵容") !== -1)[5].skills?.split("|")[0];
      } else {
        _0x1d9ff3 = xls.pveBoss.getItems().filter(_0x2112ac => _0x2112ac.name.indexOf("ylfx玩家阵容") !== -1)[_0x4f85d7 - 1].skills?.split("|")[0];
      }
      let _0x44c041 = _0x5a2195.result.playerInfos.find(_0x5971bd => _0x5971bd.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0x44c041 !== 1) {
        addGameLog("被击败,切换");
        _0x4f85d7++;
        if (_0x4f85d7 > 4) {
          await this.send_message("cs_feilian_activity", {
            action: 5,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
          break;
        }
        const _0x5f220f = {
          petIndex: _0x4f85d7
        };
        const _0x3d1a7f = {
          opType: 2,
          data: _0x5f220f,
          groupId: ""
        };
        await this.send_message("cs_online_player_operation", _0x3d1a7f);
      }
      addGameLog("继续攻击");
      _0x5a2195 = await this.useSkill(_0x1d9ff3);
      if (_0x5a2195.result.result == 0) {
        if (_0x4f85d7 == 0) {
          if (_0x5a2195.result.playerInfos.find(_0x653eb9 => _0x653eb9.uid == MFC.userInfo.uid) && _0x5a2195.result.playerInfos.find(_0x58ada4 => _0x58ada4.uid == MFC.userInfo.uid).petInfos[5].useSkills.find(_0x473ceb => _0x473ceb.id == _0x1d9ff3)?.crtPP == 0) {
            if (getSeerItemNum(2001) > 1) {
              _0x5a2195 = await this.useItem(2001);
            } else if (getSeerItemNum(2002) > 1) {
              _0x5a2195 = await this.useItem(2002);
            } else if (getSeerItemNum(2003) > 1) {
              _0x5a2195 = await this.useItem(2003);
            } else {
              addGameLog("pp不足");
              this.stop();
            }
          }
        } else if (_0x5a2195.result.playerInfos.find(_0x380961 => _0x380961.uid == MFC.userInfo.uid) && _0x5a2195.result.playerInfos.find(_0x5197d1 => _0x5197d1.uid == MFC.userInfo.uid).petInfos[_0x4f85d7].useSkills.find(_0xe8b39 => _0xe8b39.id == _0x1d9ff3)?.crtPP == 0) {
          if (getSeerItemNum(2001) > 1) {
            _0x5a2195 = await this.useItem(2001);
          } else if (getSeerItemNum(2002) > 1) {
            _0x5a2195 = await this.useItem(2002);
          } else if (getSeerItemNum(2003) > 1) {
            _0x5a2195 = await this.useItem(2003);
          } else {
            addGameLog("pp不足");
            this.stop();
          }
        }
      }
    }
    if (_0x5a2195.result.result == 2) {
      await this.send_message("cs_feilian_activity", {
        action: 5,
        levelId: 0,
        gameplay: 0,
        petList: [],
        skillId: 0,
        skillIndexs: []
      });
    }
  }
  async flyScythe2() {
    for (let _0x3db9b8 = 0; _0x3db9b8 < this.initfldata2.length; _0x3db9b8++) {
      if (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(this.initfldata2[_0x3db9b8])) {
        while (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(this.initfldata2[_0x3db9b8])) {
          let _0x3c3782 = getGoalPets([{
            skills: [100444, 100446]
          }]);
          if (!_0x3c3782) {
            break;
          }
          if (MFC.userInfo.curEnergy < 15) {
            break;
          }
          if (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
            await this.send_message("cs_feilian_activity", {
              action: 5,
              levelId: 0,
              gameplay: 0,
              petList: [],
              skillId: 0,
              skillIndexs: []
            });
            addGameLog("重新开始");
          }
          this.levelId = 15 + _0x3db9b8;
          this.id = this.initfldata2[_0x3db9b8];
          await this.fl2battle();
        }
      }
    }
  }
  async fl2battle() {
    let _0x48a8d4 = getGoalPets([{
      skills: [100444, 100446]
    }]);
    if (!_0x48a8d4) {
      addGameLog("背包没有敌我符文+水龙盾符文青龙");
    } else if (MFC.userInfo.curEnergy >= 15) {
      await this.send_message("cs_feilian_activity", {
        action: 1,
        levelId: this.levelId,
        gameplay: 2,
        petList: [_0x48a8d4.getTime],
        skillId: 0,
        skillIndexs: []
      });
      while (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
        if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 1) {
          await this.send_message("cs_feilian_activity", {
            action: 2,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
        } else if (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 1) {
          if (mongoAttr.getFeiLianAttrFeiLian().progress >= 14) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [this.id],
              petList: [_0x48a8d4.getTime],
              times: 0,
              train: 0
            });
          } else {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x48a8d4.getTime],
              times: 0,
              train: 0
            });
          }
          await this.initBattle();
          let _0x345202 = [100446, 100446, 100446, 100444, 100444];
          let _0x5430cb;
          if (getSeerItemNum(2001) > 1) {
            _0x5430cb = await this.useItem(2001);
          } else if (getSeerItemNum(2002) > 1) {
            _0x5430cb = await this.useItem(2002);
          } else if (getSeerItemNum(2003) > 1) {
            _0x5430cb = await this.useItem(2003);
          } else {
            addGameLog("pp不足");
            this.stop();
          }
          let _0x7d4515 = 0;
          while (_0x5430cb.result.result === 0) {
            let _0x444787 = _0x5430cb.result.playerInfos.find(_0x31135f => _0x31135f.uid === MFC.userInfo.uid).nextRoundOP;
            if (_0x444787 !== 1) {
              addGameLog("首发被击败");
              await this.send_message("cs_feilian_activity", {
                action: 5,
                levelId: 0,
                gameplay: 0,
                petList: [],
                skillId: 0,
                skillIndexs: []
              });
              break;
            }
            addGameLog("未击败，继续攻击");
            _0x5430cb = await this.useSkill(_0x345202[_0x7d4515]);
            _0x7d4515++;
            if (_0x7d4515 >= 4 && _0x5430cb.result.result === 0) {
              if (getSeerItemNum(2001) > 1) {
                _0x5430cb = await this.useItem(2001);
                _0x7d4515 = 0;
              } else if (getSeerItemNum(2002) > 1) {
                _0x5430cb = await this.useItem(2002);
                _0x7d4515 = 0;
              } else if (getSeerItemNum(2003) > 1) {
                _0x5430cb = await this.useItem(2003);
                _0x7d4515 = 0;
              } else {
                addGameLog("pp不足");
                this.stop();
              }
            }
          }
          if (_0x5430cb.result.result == 2) {
            await this.send_message("cs_feilian_activity", {
              action: 5,
              levelId: 0,
              gameplay: 0,
              petList: [],
              skillId: 0,
              skillIndexs: []
            });
          }
          if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 0) {
            break;
          }
        }
      }
    } else {
      addGameLog("电池不足");
      this.stop();
    }
  }
  async flbtke() {
    let _0x2cd24c = getGoalPets([{
      skills: [100940, 100943, 100939, 100942]
    }]);
    let _0x4e5824 = getGoalPets([{
      skills: [11007]
    }, {
      skills: [100008]
    }]);
    if (_0x2cd24c && _0x4e5824) {
      for (let _0x342acc = 0; _0x342acc < this.initfldata2.length; _0x342acc++) {
        if (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(this.initfldata2[_0x342acc]) && this.initfldata2[_0x342acc] !== 2355) {
          while (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(this.initfldata2[_0x342acc])) {
            if (MFC.userInfo.curEnergy < 15) {
              addGameLog("电池不足");
              break;
            }
            if (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
              await this.send_message("cs_feilian_activity", {
                action: 5,
                levelId: 0,
                gameplay: 0,
                petList: [],
                skillId: 0,
                skillIndexs: []
              });
              addGameLog("重新开始");
            }
            this.levelId = 15 + _0x342acc;
            this.id = this.initfldata2[_0x342acc];
            await this.flbtkebattle(_0x2cd24c, _0x4e5824);
          }
        }
      }
    } else {
      addGameLog("背包没有技能增幅的贝特卡恩或者没带对技能金光绿叶的丽莎步步");
    }
  }
  async flbtke2() {
    let _0x19d238 = getGoalPets([{
      skills: [100940, 100943, 100939, 100941]
    }]);
    if (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(2355) && this.initfldata2.includes(2355)) {
      if (_0x19d238) {
        if (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(2355) && this.initfldata2.includes(2355)) {
          while (!mongoAttr.getFeiLianAttrFeiLian().btlPass.includes(2355)) {
            if (MFC.userInfo.curEnergy < 15) {
              addGameLog("电池不足");
              break;
            }
            if (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
              await this.send_message("cs_feilian_activity", {
                action: 5,
                levelId: 0,
                gameplay: 0,
                petList: [],
                skillId: 0,
                skillIndexs: []
              });
              addGameLog("重新开始");
            }
            this.levelId = 21;
            this.id = 2355;
            await this.flbtkebattle2(_0x19d238);
          }
        }
      } else {
        addGameLog("背包没有技能增幅的贝特卡恩或者没带对技能");
      }
    }
  }
  async flbtkebattle(_0xb9781, _0x15ca1a) {
    if (MFC.userInfo.curEnergy >= 15) {
      await this.send_message("cs_feilian_activity", {
        action: 1,
        levelId: this.levelId,
        gameplay: 2,
        petList: [_0xb9781.getTime, _0x15ca1a.getTime, PetManager.getInstance().getAllPets().filter(_0xfb5299 => _0xfb5299.level == 1)[0].getTime, PetManager.getInstance().getAllPets().filter(_0x4b33fc => _0x4b33fc.level == 1)[1].getTime, PetManager.getInstance().getAllPets().filter(_0x31ecf9 => _0x31ecf9.level == 1)[2].getTime, PetManager.getInstance().getAllPets().filter(_0x1fe09d => _0x1fe09d.level == 1)[3].getTime],
        skillId: 0,
        skillIndexs: []
      });
      let _0x59e31a = 0;
      while (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
        if (mongoAttr.getFeiLianAttrFeiLian().progress >= 14) {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [this.id],
            petList: [_0xb9781.getTime, _0x15ca1a.getTime, PetManager.getInstance().getAllPets().filter(_0x4212a6 => _0x4212a6.level == 1)[0].getTime, PetManager.getInstance().getAllPets().filter(_0x4a3163 => _0x4a3163.level == 1)[1].getTime, PetManager.getInstance().getAllPets().filter(_0x38c84a => _0x38c84a.level == 1)[2].getTime, PetManager.getInstance().getAllPets().filter(_0x306c6c => _0x306c6c.level == 1)[3].getTime],
            times: 0,
            train: 0
          });
          if (this.id == 2353) {
            let _0x28e224;
            if (_0x15ca1a.skills.find(_0xda9243 => _0xda9243 == 100008)) {
              _0x28e224 = 100008;
            } else {
              _0x28e224 = 11007;
            }
            await this.btkebattle3(_0x28e224);
          } else if (this.id == 2354) {
            await this.btkebattle4();
          } else {
            await this.btkebattle();
          }
        } else if (mongoAttr.getFeiLianAttrFeiLian().progress >= 9 && _0x59e31a < 3) {
          await this.send_message("cs_feilian_activity", {
            action: 3,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 2,
            skillIndexs: []
          });
          _0x59e31a++;
          if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 1) {
            await this.send_message("cs_feilian_activity", {
              action: 2,
              levelId: 0,
              gameplay: 0,
              petList: [],
              skillId: 0,
              skillIndexs: []
            });
          } else if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 2) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0xb9781.getTime, _0x15ca1a.getTime, PetManager.getInstance().getAllPets().filter(_0x1b2581 => _0x1b2581.level == 1)[0].getTime, PetManager.getInstance().getAllPets().filter(_0xf39a94 => _0xf39a94.level == 1)[1].getTime, PetManager.getInstance().getAllPets().filter(_0x2b4bf3 => _0x2b4bf3.level == 1)[2].getTime, PetManager.getInstance().getAllPets().filter(_0x2d918a => _0x2d918a.level == 1)[3].getTime],
              times: 0,
              train: 0
            });
            await this.btkebattle();
          }
        } else if (mongoAttr.getFeiLianAttrFeiLian().progress >= 12 && mongoAttr.getFeiLianAttrFeiLian().progress < 14) {
          await this.send_message("cs_feilian_activity", {
            action: 3,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 1,
            skillIndexs: []
          });
        } else if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 1) {
          await this.send_message("cs_feilian_activity", {
            action: 2,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
        } else if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 2) {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
            petList: [_0xb9781.getTime, _0x15ca1a.getTime, PetManager.getInstance().getAllPets().filter(_0x13c0c4 => _0x13c0c4.level == 1)[0].getTime, PetManager.getInstance().getAllPets().filter(_0x265758 => _0x265758.level == 1)[1].getTime, PetManager.getInstance().getAllPets().filter(_0x25c8c7 => _0x25c8c7.level == 1)[2].getTime, PetManager.getInstance().getAllPets().filter(_0x40c9b3 => _0x40c9b3.level == 1)[3].getTime],
            times: 0,
            train: 0
          });
          if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0] == 2364) {
            console.log(mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0], "cs_pve_fight_start");
            await this.btkebattle2();
          } else {
            await this.btkebattle();
          }
        }
      }
    } else {
      addGameLog("电池不足");
      this.stop();
    }
  }
  async flbtkebattle2(_0x4de8e7) {
    if (MFC.userInfo.curEnergy >= 15) {
      await this.send_message("cs_feilian_activity", {
        action: 1,
        levelId: this.levelId,
        gameplay: 2,
        petList: [_0x4de8e7.getTime, PetManager.getInstance().getAllPets().filter(_0x1cebfa => _0x1cebfa.level == 1)[3].getTime],
        skillId: 0,
        skillIndexs: []
      });
      let _0x582ea1 = 0;
      while (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
        if (mongoAttr.getFeiLianAttrFeiLian().progress >= 14) {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [this.id],
            petList: [_0x4de8e7.getTime, PetManager.getInstance().getAllPets().filter(_0x1934d4 => _0x1934d4.level == 1)[3].getTime],
            times: 0,
            train: 0
          });
          if (this.id == 2353) {
            let _0x4882cc;
            if (pet2.skills.find(_0x4f32de => _0x4f32de == 100008)) {
              _0x4882cc = 100008;
            } else {
              _0x4882cc = 11007;
            }
            await this.btkebattle3(_0x4882cc);
          } else if (this.id == 2354) {
            await this.btkebattle4();
          } else if (this.id == 2355) {
            await this.btkebattle5();
          } else {
            await this.btkebattle();
          }
        } else if (mongoAttr.getFeiLianAttrFeiLian().progress >= 9 && _0x582ea1 < 3) {
          await this.send_message("cs_feilian_activity", {
            action: 3,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 2,
            skillIndexs: []
          });
          _0x582ea1++;
          if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 1) {
            await this.send_message("cs_feilian_activity", {
              action: 2,
              levelId: 0,
              gameplay: 0,
              petList: [],
              skillId: 0,
              skillIndexs: []
            });
          } else if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 2) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
              petList: [_0x4de8e7.getTime, PetManager.getInstance().getAllPets().filter(_0x1951f6 => _0x1951f6.level == 1)[3].getTime],
              times: 0,
              train: 0
            });
            await this.btkebattle();
          }
        } else if (mongoAttr.getFeiLianAttrFeiLian().progress >= 12 && mongoAttr.getFeiLianAttrFeiLian().progress < 14) {
          await this.send_message("cs_feilian_activity", {
            action: 3,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 1,
            skillIndexs: []
          });
        } else if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 1) {
          await this.send_message("cs_feilian_activity", {
            action: 2,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
        } else if (mongoAttr.getFeiLianAttrFeiLian().curStatus == 2) {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0]],
            petList: [_0x4de8e7.getTime, PetManager.getInstance().getAllPets().filter(_0x533b0d => _0x533b0d.level == 1)[3].getTime],
            times: 0,
            train: 0
          });
          if (mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0] == 2364) {
            console.log(mongoAttr.getFeiLianAttrFeiLian().lastEvent.eventArgs[0], "cs_pve_fight_start");
            await this.btkebattle2();
          } else {
            await this.btkebattle();
          }
        }
      }
    } else {
      addGameLog("电池不足");
      this.stop();
    }
  }
  async btkebattle() {
    await this.initBattle();
    let _0x1873ea = [100940, 100940, 100940, 100940, 100940, 100940, 100943, 100943, 100943, 100943, 100943, 100939, 100939, 100939, 100939, 100939, 100940];
    let _0x1eeb9d = await this.useSkill(_0x1873ea[0]);
    let _0x20a2b9 = 1;
    while (_0x1eeb9d.result.result === 0) {
      addGameLog("未击败，继续攻击");
      _0x1eeb9d = await this.useSkill(_0x1873ea[_0x20a2b9]);
      _0x20a2b9++;
      if (_0x20a2b9 >= 17) {
        _0x20a2b9 = 11;
      }
      let _0x100616 = _0x1eeb9d.result.playerInfos.find(_0xaa60db => _0xaa60db.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0x100616 !== 1) {
        addGameLog("首发被击败");
        await this.send_message("cs_feilian_activity", {
          action: 5,
          levelId: 0,
          gameplay: 0,
          petList: [],
          skillId: 0,
          skillIndexs: []
        });
        break;
      }
    }
    if (_0x1eeb9d.result.result == 2) {
      await this.send_message("cs_feilian_activity", {
        action: 5,
        levelId: 0,
        gameplay: 0,
        petList: [],
        skillId: 0,
        skillIndexs: []
      });
    }
  }
  async btkebattle2() {
    await this.initBattle();
    let _0x35f539 = [100940, 100939];
    let _0x2d841c = await this.useSkill(_0x35f539[0]);
    let _0x846d2b = 1;
    while (_0x2d841c.result.result === 0) {
      addGameLog("未击败，继续攻击");
      _0x2d841c = await this.useSkill(_0x35f539[_0x846d2b]);
      _0x846d2b++;
      if (_0x846d2b >= 2) {
        _0x846d2b = 0;
      }
      let _0x2d3503 = _0x2d841c.result.playerInfos.find(_0x336718 => _0x336718.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0x2d3503 !== 1) {
        addGameLog("首发被击败");
        await this.send_message("cs_feilian_activity", {
          action: 5,
          levelId: 0,
          gameplay: 0,
          petList: [],
          skillId: 0,
          skillIndexs: []
        });
        break;
      }
    }
    if (_0x2d841c.result.result == 2) {
      await this.send_message("cs_feilian_activity", {
        action: 5,
        levelId: 0,
        gameplay: 0,
        petList: [],
        skillId: 0,
        skillIndexs: []
      });
    }
  }
  async btkebattle3(_0x40fc68) {
    await this.initBattle();
    let _0x506cc2 = await this.useSkill(100939);
    let _0x202766 = [100942, 100939];
    let _0x1c3d05 = 1;
    let _0xd1ab3b = 0;
    let _0x9eb0d = 0;
    let _0x3f3cad = 0;
    while (_0x506cc2.result.result === 0) {
      addGameLog("未击败，继续攻击");
      if (_0x1c3d05 < 3) {
        _0x506cc2 = await this.useSkill(100939);
      } else if (_0xd1ab3b == 0) {
        await this.send_message("cs_online_player_operation", {
          opType: 2,
          data: {
            petIndex: 2
          },
          groupId: ""
        });
        _0x506cc2 = await this.useSkill(PetManager.getInstance().getAllPets().filter(_0x1084b0 => _0x1084b0.level == 1)[0].skills[0]);
        let _0x3fc954 = _0x506cc2.result.playerInfos.find(_0xd9fe86 => _0xd9fe86.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0x3fc954 !== 1) {
          await this.send_message("cs_online_player_operation", {
            opType: 2,
            data: {
              petIndex: 1
            },
            groupId: ""
          });
          _0xd1ab3b++;
        }
      } else if (_0xd1ab3b == 1) {
        await this.send_message("cs_online_player_operation", {
          opType: 2,
          data: {
            petIndex: 1
          },
          groupId: ""
        });
        _0x506cc2 = await this.useSkill(_0x40fc68);
        let _0x1f5d23 = _0x506cc2.result.playerInfos.find(_0x4b84fc => _0x4b84fc.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0x1f5d23 !== 1) {
          await this.send_message("cs_online_player_operation", {
            opType: 2,
            data: {
              petIndex: 0
            },
            groupId: ""
          });
          _0xd1ab3b++;
        }
      } else if (_0xd1ab3b == 2) {
        _0x506cc2 = await this.useSkill(_0x202766[_0x9eb0d]);
        _0x9eb0d++;
        if (_0x9eb0d >= 2) {
          _0x9eb0d = 0;
          _0x3f3cad++;
        }
        if (_0x506cc2.result.result === 0) {
          if (getSeerItemNum(2001) > 1) {
            _0x506cc2 = await this.useItem(2001);
            _0x1c3d05 = 0;
          } else if (getSeerItemNum(2002) > 1) {
            _0x506cc2 = await this.useItem(2002);
            _0x1c3d05 = 0;
          } else if (getSeerItemNum(2003) > 1) {
            _0x506cc2 = await this.useItem(2003);
            _0x1c3d05 = 0;
          } else {
            addGameLog("pp不足");
            this.stop();
          }
        }
        let _0x4f8693 = _0x506cc2.result.playerInfos.find(_0x12685f => _0x12685f.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0x4f8693 !== 1) {
          addGameLog("首发被击败");
          break;
        }
        if (_0x3f3cad == 2) {
          _0xd1ab3b++;
        }
      } else if (_0xd1ab3b == 3) {
        await this.send_message("cs_online_player_operation", {
          opType: 2,
          data: {
            petIndex: 3
          },
          groupId: ""
        });
        _0x506cc2 = await this.useSkill(PetManager.getInstance().getAllPets().filter(_0x14c2e0 => _0x14c2e0.level == 1)[1].skills[0]);
        let _0x2e910b = _0x506cc2.result.playerInfos.find(_0x414016 => _0x414016.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0x2e910b !== 1) {
          await this.send_message("cs_online_player_operation", {
            opType: 2,
            data: {
              petIndex: 0
            },
            groupId: ""
          });
          _0xd1ab3b++;
        }
      } else if (_0xd1ab3b == 4) {
        _0x506cc2 = await this.useSkill(_0x202766[_0x9eb0d]);
        _0x9eb0d++;
        if (_0x9eb0d >= 2) {
          _0x9eb0d = 0;
          _0x3f3cad++;
        }
        if (_0x506cc2.result.result === 0) {
          if (getSeerItemNum(2001) > 1) {
            _0x506cc2 = await this.useItem(2001);
            _0x1c3d05 = 0;
          } else if (getSeerItemNum(2002) > 1) {
            _0x506cc2 = await this.useItem(2002);
            _0x1c3d05 = 0;
          } else if (getSeerItemNum(2003) > 1) {
            _0x506cc2 = await this.useItem(2003);
            _0x1c3d05 = 0;
          } else {
            addGameLog("pp不足");
            this.stop();
          }
        }
        let _0xa9f8c = _0x506cc2.result.playerInfos.find(_0x49abb9 => _0x49abb9.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0xa9f8c !== 1) {
          addGameLog("首发被击败");
          await this.send_message("cs_feilian_activity", {
            action: 5,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
          break;
        }
        if (_0x3f3cad == 2) {
          _0xd1ab3b++;
        }
      } else if (_0xd1ab3b == 5) {
        await this.send_message("cs_online_player_operation", {
          opType: 2,
          data: {
            petIndex: 4
          },
          groupId: ""
        });
        _0x506cc2 = await this.useSkill(PetManager.getInstance().getAllPets().filter(_0x2bf4cc => _0x2bf4cc.level == 1)[2].skills[0]);
        let _0x424713 = _0x506cc2.result.playerInfos.find(_0x2dc479 => _0x2dc479.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0x424713 !== 1) {
          await this.send_message("cs_online_player_operation", {
            opType: 2,
            data: {
              petIndex: 0
            },
            groupId: ""
          });
          _0xd1ab3b++;
        }
      } else if (_0xd1ab3b == 6) {
        _0x506cc2 = await this.useSkill(_0x202766[_0x9eb0d]);
        _0x9eb0d++;
        if (_0x9eb0d >= 2) {
          _0x9eb0d = 0;
          _0x3f3cad++;
        }
        if (_0x506cc2.result.result === 0) {
          if (getSeerItemNum(2001) > 1) {
            _0x506cc2 = await this.useItem(2001);
            _0x1c3d05 = 0;
          } else if (getSeerItemNum(2002) > 1) {
            _0x506cc2 = await this.useItem(2002);
            _0x1c3d05 = 0;
          } else if (getSeerItemNum(2003) > 1) {
            _0x506cc2 = await this.useItem(2003);
            _0x1c3d05 = 0;
          } else {
            addGameLog("pp不足");
            this.stop();
          }
        }
        let _0x5bf8a3 = _0x506cc2.result.playerInfos.find(_0xfc9d6e => _0xfc9d6e.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0x5bf8a3 !== 1) {
          addGameLog("首发被击败");
          await this.send_message("cs_feilian_activity", {
            action: 5,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
          break;
        }
        if (_0x3f3cad == 2) {
          _0xd1ab3b++;
        }
      } else if (_0xd1ab3b == 7) {
        await this.send_message("cs_online_player_operation", {
          opType: 2,
          data: {
            petIndex: 5
          },
          groupId: ""
        });
        _0x506cc2 = await this.useSkill(PetManager.getInstance().getAllPets().filter(_0x189b42 => _0x189b42.level == 1)[3].skills[0]);
        let _0x3b2531 = _0x506cc2.result.playerInfos.find(_0x389bdd => _0x389bdd.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0x3b2531 !== 1) {
          await this.send_message("cs_online_player_operation", {
            opType: 2,
            data: {
              petIndex: 0
            },
            groupId: ""
          });
          _0xd1ab3b++;
        }
      } else if (_0xd1ab3b == 8) {
        _0x506cc2 = await this.useSkill(_0x202766[_0x9eb0d]);
        _0x9eb0d++;
        if (_0x9eb0d >= 2) {
          _0x9eb0d = 0;
          _0x3f3cad++;
        }
        if (_0x506cc2.result.result === 0) {
          if (getSeerItemNum(2001) > 1) {
            _0x506cc2 = await this.useItem(2001);
            _0x1c3d05 = 0;
          } else if (getSeerItemNum(2002) > 1) {
            _0x506cc2 = await this.useItem(2002);
            _0x1c3d05 = 0;
          } else if (getSeerItemNum(2003) > 1) {
            _0x506cc2 = await this.useItem(2003);
            _0x1c3d05 = 0;
          } else {
            addGameLog("pp不足");
            this.stop();
          }
        }
        let _0x1c465a = _0x506cc2.result.playerInfos.find(_0x1104da => _0x1104da.uid === MFC.userInfo.uid).nextRoundOP;
        if (_0x1c465a !== 1) {
          addGameLog("首发被击败");
          await this.send_message("cs_feilian_activity", {
            action: 5,
            levelId: 0,
            gameplay: 0,
            petList: [],
            skillId: 0,
            skillIndexs: []
          });
          break;
        }
        if (_0x3f3cad == 2) {
          _0xd1ab3b++;
        }
      }
      _0x1c3d05++;
    }
    if (_0x506cc2.result.result == 2) {
      await this.send_message("cs_feilian_activity", {
        action: 5,
        levelId: 0,
        gameplay: 0,
        petList: [],
        skillId: 0,
        skillIndexs: []
      });
    }
  }
  async btkebattle4() {
    await this.initBattle();
    let _0x5e0496 = [100942, 100939];
    let _0x4a0fb0 = await this.useSkill(_0x5e0496[0]);
    let _0x2be5a7 = 1;
    let _0x37eae2 = 0;
    while (_0x4a0fb0.result.result === 0) {
      addGameLog("未击败，继续攻击");
      _0x4a0fb0 = await this.useSkill(_0x5e0496[_0x2be5a7]);
      _0x2be5a7++;
      if (_0x2be5a7 >= 2) {
        _0x37eae2++;
        _0x2be5a7 = 0;
      }
      if (_0x4a0fb0.result.playerInfos.find(_0x1075aa => _0x1075aa.uid === MFC.userInfo.uid).petInfos[0].hp < 5000) {
        addGameLog("血量叠不够");
        await this.send_message("cs_feilian_activity", {
          action: 5,
          levelId: 0,
          gameplay: 0,
          petList: [],
          skillId: 0,
          skillIndexs: []
        });
        break;
      }
      if (_0x37eae2 > 4 && _0x4a0fb0.result.result === 0) {
        if (getSeerItemNum(2001) > 1) {
          _0x4a0fb0 = await this.useItem(2001);
          _0x37eae2 = 0;
        } else if (getSeerItemNum(2002) > 1) {
          _0x4a0fb0 = await this.useItem(2002);
          _0x37eae2 = 0;
        } else if (getSeerItemNum(2003) > 1) {
          _0x4a0fb0 = await this.useItem(2003);
          _0x37eae2 = 0;
        } else {
          addGameLog("pp不足");
          this.stop();
        }
      }
      let _0x2e8a6b = _0x4a0fb0.result.playerInfos.find(_0x55a87b => _0x55a87b.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0x2e8a6b !== 1) {
        addGameLog("首发被击败");
        break;
      }
    }
    if (_0x4a0fb0.result.result == 2) {
      await this.send_message("cs_feilian_activity", {
        action: 5,
        levelId: 0,
        gameplay: 0,
        petList: [],
        skillId: 0,
        skillIndexs: []
      });
    }
  }
  async btkebattle5() {
    await this.initBattle();
    let _0x1f7dbf = [100939, 100941, 100943, 100940];
    let _0x5bc7bd = await this.useSkill(_0x1f7dbf[0]);
    let _0x25fdd5 = 1;
    while (_0x5bc7bd.result.result === 0) {
      addGameLog("未击败，继续攻击");
      _0x5bc7bd = await this.useSkill(_0x1f7dbf[_0x25fdd5]);
      _0x25fdd5++;
      if (_0x25fdd5 >= 4) {
        _0x25fdd5 = 0;
      }
      if (_0x5bc7bd.result.playerInfos.find(_0x17cb7a => _0x17cb7a.uid === MFC.userInfo.uid).petInfos[0].hp < 5000) {
        addGameLog("血量叠不够");
        await this.send_message("cs_feilian_activity", {
          action: 5,
          levelId: 0,
          gameplay: 0,
          petList: [],
          skillId: 0,
          skillIndexs: []
        });
        break;
      }
      let _0x3b4e88 = _0x5bc7bd.result.playerInfos.find(_0xa883b5 => _0xa883b5.uid === MFC.userInfo.uid).nextRoundOP;
      if (_0x3b4e88 !== 1) {
        addGameLog("首发被击败");
        break;
      }
    }
    if (_0x5bc7bd.result.result == 2) {
      await this.send_message("cs_feilian_activity", {
        action: 5,
        levelId: 0,
        gameplay: 0,
        petList: [],
        skillId: 0,
        skillIndexs: []
      });
    }
  }
  async flsd() {
    for (let _0x8bf483 = 0; _0x8bf483 < this.initfldata2.length; _0x8bf483++) {
      if (MFC.userInfo.curEnergy >= 15 && this.initfldata2[_0x8bf483] !== 2355) {
        if (pveUtils.GetNewActivityCardOneData(this.initfldata2[_0x8bf483]) && pveUtils.GetNewActivityCardOneData(this.initfldata2[_0x8bf483]).dailyWin !== 1 && pveUtils.GetNewActivityCardOneData(this.initfldata2[_0x8bf483]).firstWin == 1) {}
        await this.send_message("cs_pve_fight_start", {
          type: 3,
          cardId: [this.initfldata2[_0x8bf483]],
          petList: [PetManager.getInstance().getAllPets()[0].getTime],
          times: 1,
          train: 0
        });
      } else {
        addGameLog("电池不足无法扫荡");
      }
    }
  }
  async flsd1() {
    if (MFC.userInfo.curEnergy >= 15) {
      if (pveUtils.GetNewActivityCardOneData(2355) && pveUtils.GetNewActivityCardOneData(2355).dailyWin !== 1 && pveUtils.GetNewActivityCardOneData(2355).firstWin == 1) {
        while (pveUtils.GetNewActivityCardOneData(2355).dailyWin !== 1) {
          let _0x16e0ac = getGoalPets([{
            skills: [100444, 100446]
          }]);
          if (!_0x16e0ac) {
            break;
          }
          if (MFC.userInfo.curEnergy < 15) {
            break;
          }
          if (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
            await this.send_message("cs_feilian_activity", {
              action: 5,
              levelId: 0,
              gameplay: 0,
              petList: [],
              skillId: 0,
              skillIndexs: []
            });
            addGameLog("重新开始");
          }
          this.levelId = 21;
          this.id = 2355;
          await this.fl2battle();
        }
      }
    } else {
      addGameLog("电池不足无法对战");
    }
  }
  async flsd2() {
    if (MFC.userInfo.curEnergy >= 15) {
      if (pveUtils.GetNewActivityCardOneData(2355) && pveUtils.GetNewActivityCardOneData(2355).dailyWin !== 1 && pveUtils.GetNewActivityCardOneData(2355).firstWin == 1) {
        while (pveUtils.GetNewActivityCardOneData(2355).dailyWin !== 1) {
          let _0x5ad890 = getGoalPets([{
            skills: [100940, 100943, 100939, 100941]
          }]);
          if (!_0x5ad890) {
            break;
          }
          if (MFC.userInfo.curEnergy < 15) {
            break;
          }
          if (mongoAttr.getFeiLianAttrFeiLian().curStatus !== 0) {
            await this.send_message("cs_feilian_activity", {
              action: 5,
              levelId: 0,
              gameplay: 0,
              petList: [],
              skillId: 0,
              skillIndexs: []
            });
            addGameLog("重新开始");
          }
          this.levelId = 21;
          this.id = 2355;
          await this.flbtkebattle2(_0x5ad890);
        }
      }
    } else {
      addGameLog("电池不足无法对战");
    }
  }
  async zhanhuang() {
    let _0x18dd74 = 14816;
    const _0x4ef96e = {
      skills: [_0x18dd74]
    };
    let _0x3de219 = getGoalPets([_0x4ef96e]);
    if (!_0x3de219) {
      _0x18dd74 = 32529;
      const _0x2337eb = {
        skills: [_0x18dd74]
      };
      _0x3de219 = getGoalPets([_0x2337eb]);
    }
    if (!_0x3de219) {
      _0x18dd74 = 32127;
      const _0x3f7a61 = {
        skills: [_0x18dd74]
      };
      _0x3de219 = getGoalPets([_0x3f7a61]);
    }
    if (!_0x3de219) {
      this.stop();
      MFC.alert.show(`背包中没有 精灵拥有
奥义断水击 技能 或者
幕夜龙王击 技能 或者
灭世歼星炮 技能`);
      return;
    } else {
      while (1) {
        let _0x3c733d = await this.send_message("cs_zhanhuang_op", {
          op: 1,
          pos: 0,
          type: 0
        });
        if ((_0x3c733d.status == 1 || _0x3c733d.status == 3) && _0x3c733d.randomAffects.length > 0) {
          addGameLog("选择增益!");
          await this.send_message("cs_zhanhuang_op", {
            op: 3,
            pos: 1,
            type: 0
          });
        } else if (_0x3c733d.status == 1 && _0x3c733d.randomAffects.length == 0) {
          addGameLog("选择对战boss!");
          await this.send_message("cs_zhanhuang_op", {
            op: 4,
            pos: 1,
            type: 0
          });
        } else if (_0x3c733d.status == 2) {
          addGameLog("遇到商店 跳过继续 !");
          await this.send_message("cs_zhanhuang_op", {
            op: 9,
            pos: 0,
            type: 0
          });
        } else if (_0x3c733d.status == 3) {
          addGameLog("激活战意!继续前进");
          await wait(200);
          await this.send_message("cs_zhanhuang_op", {
            op: 10,
            pos: 0,
            type: 0
          });
        } else if (_0x3c733d.status == 4) {
          addGameLog("进入对战!");
          for (let _0xdf809a = 0; _0xdf809a < 25; _0xdf809a++) {
            addGameLog("尝试 对战第" + (_0xdf809a + 1) + "次");
            const _0x199e2b = {
              type: 1,
              cardId: [_0x3c733d.cardId],
              petList: [_0x3de219.getTime],
              times: 0,
              train: 0
            };
            let _0x262a7e = await this.send_message("cs_pve_fight_start", _0x199e2b);
            if (JSON.stringify(_0x262a7e).includes("体力不足")) {
              addGameLog("电池不足,战皇结束");
              this.stop();
              return;
            }
            await this.initBattle();
            let _0x1a84c8 = await this.useSkill(_0x18dd74);
            while (_0x1a84c8.result.result == 0) {
              _0x1a84c8 = await this.useSkill(_0x18dd74);
              if (_0x1a84c8.result.roundNum >= 2) {
                addGameLog("回合数过多,逃跑!");
                await this.send_message("cs_quit_battle", {});
                break;
              }
            }
            if (_0x1a84c8.result.result === 1) {
              addGameLog("顺利击杀boss");
              break;
            } else {
              addGameLog("未击败Boss");
            }
            if (_0xdf809a == 13) {
              addGameLog("技能对boss失效 请手动通过");
              MFC.alert.show("技能对本关卡boss失效 请手动通过");
              this.stop();
              return;
            }
          }
        } else if (_0x3c733d.status == 11) {
          addGameLog("到底顶层!挑战胜利");
          await wait(200);
          this.stop();
          return;
        } else {
          addGameLog("特殊情况");
          logger("特殊情况", _0x3c733d);
          break;
        }
        await wait(800);
        addGameLog("进行下一轮操作!");
      }
      this.stop();
      return;
    }
  }
  async Renaultui() {
    super.start();
    let _0x7973d8 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x30660f = [];
      var _0x25ee15 = SimpleAlertUi({
        height: 400,
        width: 500
      });
      _0x7973d8.alertWin = _0x25ee15;
      const _0x57f350 = {
        text: "雷锘",
        x: _0x25ee15.width / 2 - 20,
        y: _0x25ee15.height / 16
      };
      var _0x31876b = createLabel(_0x57f350);
      _0x31876b.size = 20;
      _0x30660f.push(_0x31876b);
      const _0xa086cc = {
        text: "注意:",
        x: 30,
        y: _0x25ee15.height / 16 + 20,
        textColor: 16776960
      };
      var _0x11446a = createLabel(_0xa086cc);
      _0x30660f.push(_0x11446a);
      var _0x11446a = createLabel({
        text: "1.一星二星稳定打法需要比德尔大招冰箱真空与阳电子",
        x: _0x25ee15.width / 2 - 150,
        y: _0x11446a.y + 26
      });
      _0x30660f.push(_0x11446a);
      const _0x35a9f3 = {
        text: "2.强推与轮询最好设置特攻物攻交替放",
        x: _0x25ee15.width / 2 - 150,
        y: _0x11446a.y + 26
      };
      var _0x56e314 = createLabel(_0x35a9f3);
      _0x30660f.push(_0x56e314);
      const _0x2325ac = {
        text: "3.推荐冰箱雷伊6块钱青龙轮询,有高头衔乱杀",
        x: _0x25ee15.width / 2 - 150,
        y: _0x56e314.y + 26
      };
      var _0x2a42b5 = createLabel(_0x2325ac);
      _0x30660f.push(_0x2a42b5);
      const _0x4e2eb0 = {
        text: "4.除强推与轮询外阵容需要冰箱与雷伊",
        x: _0x25ee15.width / 2 - 150,
        y: _0x2a42b5.y + 26
      };
      var _0x329575 = createLabel(_0x4e2eb0);
      _0x30660f.push(_0x329575);
      const _0x1b9e55 = {
        text: "三星需要雷伊彼得尔閃雷",
        x: _0x25ee15.width / 2 - 150,
        y: _0x329575.y + 26
      };
      var _0x24d6ab = createLabel(_0x1b9e55);
      _0x30660f.push(_0x24d6ab);
      var _0x24d6ab = createLabel({
        text: "雷伊配招:雷怒,闪电斗气,充电,电光炽刃",
        x: _0x25ee15.width / 2 - 150,
        y: _0x24d6ab.y + 26
      });
      _0x30660f.push(_0x24d6ab);
      const _0x27902d = {
        x: 40,
        y: _0x24d6ab.y + 26,
        selected: true,
        storageKey: "RenaultBattle1"
      };
      let _0x5ec1cd = createRadio(_0x27902d);
      _0x30660f.push(_0x5ec1cd);
      const _0xdc59c2 = {
        text: "首技能强推",
        x: _0x5ec1cd.width + _0x5ec1cd.x + 10,
        y: _0x5ec1cd.y
      };
      var _0xc0f4ed = createLabel(_0xdc59c2);
      _0x30660f.push(_0xc0f4ed);
      const _0x5d6027 = {
        x: _0xc0f4ed.x + _0xc0f4ed.width + 50,
        y: _0x5ec1cd.y,
        selected: false,
        storageKey: "RenaultBattle2"
      };
      let _0x217543 = createRadio(_0x5d6027);
      _0x30660f.push(_0x217543);
      const _0x22d329 = {
        text: "技能轮询",
        x: _0x217543.width + _0x217543.x + 10,
        y: _0x5ec1cd.y
      };
      var _0x20d565 = createLabel(_0x22d329);
      _0x30660f.push(_0x20d565);
      const _0x4a431d = {
        x: 40,
        y: _0x24d6ab.y + 78,
        selected: false,
        storageKey: "RenaultBattle3"
      };
      let _0x286183 = createRadio(_0x4a431d);
      _0x30660f.push(_0x286183);
      const _0x9893b7 = {
        text: "只打一星二星",
        x: _0x286183.width + _0x286183.x + 10,
        y: _0x286183.y
      };
      var _0x37ff47 = createLabel(_0x9893b7);
      _0x30660f.push(_0x37ff47);
      const _0x5556cb = {
        x: _0xc0f4ed.x + _0xc0f4ed.width + 50,
        y: _0x286183.y,
        selected: false,
        storageKey: "RenaultBattle4"
      };
      let _0x4c1cf1 = createRadio(_0x5556cb);
      _0x30660f.push(_0x4c1cf1);
      const _0x28f8ba = {
        text: "模拟对战",
        x: _0x4c1cf1.width + _0x4c1cf1.x + 10,
        y: _0x286183.y
      };
      var _0x2ac730 = createLabel(_0x28f8ba);
      _0x30660f.push(_0x2ac730);
      const _0x1def06 = {
        x: _0x2ac730.x + _0x2ac730.width + 20,
        y: _0x286183.y,
        selected: false,
        storageKey: "RenaultBattle5"
      };
      let _0x2aee31 = createRadio(_0x1def06);
      _0x30660f.push(_0x2aee31);
      const _0x2b9459 = {
        text: "一星二星稳定打法",
        x: _0x2aee31.width + _0x2aee31.x + 10,
        y: _0x286183.y
      };
      var _0x3fac95 = createLabel(_0x2b9459);
      _0x30660f.push(_0x3fac95);
      const _0x5d08ce = {
        x: _0x2ac730.x + _0x2ac730.width + 20,
        y: _0x5ec1cd.y,
        selected: false,
        storageKey: "RenaultBattle6"
      };
      let _0x2701f5 = createRadio(_0x5d08ce);
      _0x30660f.push(_0x2701f5);
      const _0x24c8bc = {
        text: "三星稳定打法",
        x: _0x2aee31.width + _0x2aee31.x + 10,
        y: _0x5ec1cd.y
      };
      var _0x26ff30 = createLabel(_0x24c8bc);
      _0x30660f.push(_0x26ff30);
      _0x7973d8.addAllUis(_0x30660f);
      _0x25ee15.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x7973d8.stop();
      }, function () {
        localStorage.setItem("RenaultBattle1", _0x5ec1cd.selected);
        localStorage.setItem("RenaultBattle2", _0x217543.selected);
        localStorage.setItem("RenaultBattle3", _0x286183.selected);
        localStorage.setItem("RenaultBattle4", _0x4c1cf1.selected);
        localStorage.setItem("RenaultBattle5", _0x2aee31.selected);
        localStorage.setItem("RenaultBattle6", _0x2701f5.selected);
        if (_0x5ec1cd.selected) {
          _0x7973d8.RenaultBattle1();
        }
        if (_0x217543.selected) {
          _0x7973d8.RenaultBattle2();
        }
        if (_0x286183.selected) {
          _0x7973d8.RenaultBattle3();
        }
        if (_0x4c1cf1.selected) {
          _0x7973d8.moni();
        }
        if (_0x2aee31.selected) {
          _0x7973d8.Renaultonlyonestar();
        }
        if (_0x2701f5.selected) {
          _0x7973d8.Renault3sui();
        }
      }], null);
      _0x25ee15.showAlert();
    });
  }
  async Renaultonlyonestar() {
    let _0x32035d = await this.dispatchSelfPet("比德尔", [32346]);
    let _0x4aaf94 = await this.dispatchSelfPet("闪光雷吉欧斯", [41938, 32298]);
    if (!_0x32035d || !_0x4aaf94) {
      addGameLog("背包没有超动灵破闪比德尔或者冰箱没有闪雷真空与阳电子炮");
      this.stop();
    } else {
      while (true) {
        let _0x4b72ff = await this.send_message("cs_renault_out", {
          index: 0,
          petList: [],
          type: 1
        });
        if (ItemManager.getInstance().getItemNumById(101210) > 0) {
          if (MFC.userInfo.curEnergy > 5) {
            let _0x1b6c7a = _0x4b72ff.bossList.find(_0x29601d => _0x29601d.startsWith("2")) || _0x4b72ff.bossList.find(_0x150557 => _0x150557.startsWith("1"));
            if (!_0x1b6c7a) {
              addGameLog("都是三星关卡");
              break;
            } else {
              let _0x3e1a32 = _0x4b72ff.bossList.indexOf(_0x1b6c7a);
              let _0x5aba33 = BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyRenaultOutStartFlag), 1 + _0x3e1a32);
              if (_0x5aba33 == 0) {
                const _0x358224 = {
                  index: _0x3e1a32,
                  petList: [],
                  type: 5
                };
                await this.send_message("cs_renault_out", _0x358224);
              }
              if (_0x1b6c7a.split("_")[0].indexOf(1) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 800) {
                const _0x92f8e5 = {
                  index: _0x3e1a32,
                  petList: [_0x32035d.getTime, _0x4aaf94.getTime],
                  type: 6
                };
                await this.send_message("cs_renault_out", _0x92f8e5);
                addGameLog("扫荡第" + (_0x3e1a32 + 1) + "关");
              } else if (_0x1b6c7a.split("_")[0].indexOf(2) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 4800) {
                const _0x2296ef = {
                  index: _0x3e1a32,
                  petList: [_0x32035d.getTime, _0x4aaf94.getTime],
                  type: 6
                };
                await this.send_message("cs_renault_out", _0x2296ef);
                addGameLog("扫荡第" + (_0x3e1a32 + 1) + "关");
              } else {
                const _0x374be1 = {
                  index: _0x3e1a32,
                  petList: [_0x32035d.getTime, _0x4aaf94.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x374be1);
                let _0x45eb68 = 0;
                let _0x34059b;
                let _0x3dadda = 0;
                let _0x44e0be = await this.initBattle();
                while (_0x44e0be.result.result == 0) {
                  if (_0x45eb68 == 0) {
                    _0x34059b = 32346;
                  }
                  if (_0x45eb68 > 0) {
                    if (_0x3dadda == 0) {
                      _0x34059b = 41938;
                      _0x3dadda++;
                    } else {
                      _0x34059b = 32298;
                    }
                  }
                  _0x44e0be = await this.useSkill(_0x34059b);
                  if (_0x44e0be.result.result == 0) {
                    let _0x5cd471 = _0x44e0be.result.playerInfos.find(_0x30bfca => _0x30bfca.uid == _0x44e0be.uid__).nextRoundOP;
                    if (_0x5cd471 == 3) {
                      addGameLog("被击败");
                      await this.send_message("cs_online_player_operation", {
                        data: {
                          petIndex: 1
                        },
                        groupId: "",
                        opType: 2
                      });
                      addGameLog("切换精灵");
                      _0x45eb68++;
                    }
                  }
                }
              }
            }
          } else {
            addGameLog("电池数量不够");
            break;
          }
        } else {
          addGameLog("信号破解器数量不够");
          break;
        }
      }
      await this.moni();
    }
  }
  async Renault3sui() {
    super.start();
    let _0x33cd75 = this;
    MFC.alert.show("需要比德尔无限+柔弱+会心一击+超动,雷伊雷怒+增幅闪电斗气+增幅充电+电光大招,闪雷真空+驱动+霰射+电子炮", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x54a716) {
      _0x33cd75.stop();
    }, function (_0x4e49fb) {
      _0x33cd75.Renault3s();
    }]);
  }
  async Renault3s() {
    let _0x200d41 = await this.dispatchSelfPet("比德尔", [42972, 42971, 12186, 32346]);
    let _0x475306 = await this.dispatchSelfPet("闪光雷吉欧斯", [41938, 32298, 32296, 32297]);
    let _0x57f35d = await this.dispatchSelfPet("雷伊", [23245, 100531, 100483, 15894]);
    if (!_0x200d41 || !_0x475306 || !_0x57f35d) {
      if (!_0x200d41) {
        addGameLog("背包没有无限愤怒柔弱身躯会心之击超动灵破闪比德尔");
      }
      if (!_0x475306) {
        addGameLog("背包没有闪雷真空力场驱动冲击霰射闪光阳电子炮");
      }
      if (!_0x57f35d) {
        addGameLog("背包没有雷伊雷神之怒增幅闪电斗气增幅充电电光大招");
      }
      this.stop();
    } else {
      while (true) {
        let _0x3ff5f6 = await this.send_message("cs_renault_out", {
          index: 0,
          petList: [],
          type: 1
        });
        if (ItemManager.getInstance().getItemNumById(101210) > 0) {
          if (MFC.userInfo.curEnergy > 5) {
            let _0x53a478 = _0x3ff5f6.bossList.find(_0x56ec08 => _0x56ec08.startsWith("3"));
            if (_0x53a478) {
              let _0x461d53 = _0x3ff5f6.bossList.indexOf(_0x53a478);
              let _0x834857 = BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyRenaultOutStartFlag), 1 + _0x461d53);
              if (_0x834857 == 0) {
                const _0x1dde55 = {
                  index: _0x461d53,
                  petList: [],
                  type: 5
                };
                await this.send_message("cs_renault_out", _0x1dde55);
              }
              if (_0x53a478.split("_")[1] == 2285 || _0x53a478.split("_")[1] == 1310) {
                const _0x39c811 = {
                  index: _0x461d53,
                  petList: [_0x200d41.getTime, _0x57f35d.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x39c811);
                let _0x383b3b = await this.initBattle();
                let _0x332def = 0;
                while (_0x383b3b.result.result == 0) {
                  if (_0x332def == 0) {
                    _0x383b3b = await this.useSkill(32346);
                  }
                  if (_0x332def == 1) {
                    _0x383b3b = await this.useSkill(32346);
                  }
                  if (_0x332def == 2) {
                    _0x383b3b = await this.useSkill(42971);
                  }
                  if (_0x332def == 3) {
                    _0x383b3b = await this.useSkill(42972);
                  }
                  if (_0x332def == 4) {
                    _0x383b3b = await this.useSkill(32346);
                  }
                  if (_0x332def == 5) {
                    _0x383b3b = await this.useSkill(32346);
                  }
                  if (_0x332def == 6) {
                    await this.send_message("cs_online_player_operation", {
                      data: {
                        petIndex: 1
                      },
                      groupId: "",
                      opType: 2
                    });
                  }
                  if (_0x332def == 7) {
                    _0x383b3b = await this.useSkill(100531);
                  }
                  if (_0x332def == 8) {
                    _0x383b3b = await this.useSkill(23245);
                  }
                  if (_0x332def == 9) {
                    _0x383b3b = await this.useSkill(23245);
                  }
                  if (_0x332def == 10) {
                    _0x383b3b = await this.useSkill(100531);
                  }
                  if (_0x332def == 11) {
                    _0x383b3b = await this.useSkill(100483);
                  }
                  if (_0x332def == 12) {
                    _0x383b3b = await this.useSkill(15894);
                  }
                  if (_0x332def == 13) {
                    _0x383b3b = await this.useSkill(100531);
                  }
                  if (_0x332def == 14) {
                    _0x383b3b = await this.useSkill(100483);
                  }
                  if (_0x332def == 15) {
                    _0x383b3b = await this.useSkill(15894);
                  }
                  if (_0x332def == 16) {
                    break;
                  }
                  if (_0x383b3b.result.result == 0) {
                    let _0x4089f0 = _0x383b3b.result.playerInfos.find(_0x3b8244 => _0x3b8244.uid == _0x383b3b.uid__).nextRoundOP;
                    if (_0x4089f0 == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x242cc1 = _0x383b3b.result.playerInfos.find(_0x163b3f => _0x163b3f.uid !== _0x383b3b.uid__).nextRoundOP;
                    if (_0x242cc1 == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x332def++;
                }
              } else if (_0x53a478.split("_")[1] == 2286 || _0x53a478.split("_")[1] == 1311) {
                const _0x5efde8 = {
                  index: _0x461d53,
                  petList: [_0x200d41.getTime, _0x57f35d.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x5efde8);
                let _0x1d8c79 = await this.initBattle();
                let _0x41781e = 0;
                while (_0x1d8c79.result.result == 0) {
                  if (_0x41781e == 0) {
                    _0x1d8c79 = await this.useSkill(32346);
                  }
                  if (_0x41781e == 1) {
                    _0x1d8c79 = await this.useSkill(32346);
                  }
                  if (_0x41781e == 2) {
                    _0x1d8c79 = await this.useSkill(42971);
                  }
                  if (_0x41781e == 3) {
                    _0x1d8c79 = await this.useSkill(42972);
                  }
                  if (_0x41781e == 4) {
                    _0x1d8c79 = await this.useSkill(42972);
                  }
                  if (_0x41781e == 5) {
                    let _0x5c65ef = 2001;
                    for (let _0x5180c9 = _0x5c65ef; _0x5180c9 < 2004; _0x5180c9++) {
                      if (MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 5600) {
                        break;
                      } else if (ItemManager.getInstance().getItemNumById(_0x5180c9) > 0) {
                        const _0xa4eeb5 = {
                          itemID: _0x5180c9
                        };
                        const _0x86bed6 = {
                          opType: 3,
                          data: _0xa4eeb5,
                          groupId: ""
                        };
                        await this.send_message("cs_online_player_operation", _0x86bed6);
                        break;
                      }
                    }
                    ;
                  }
                  if (_0x41781e == 6) {
                    _0x1d8c79 = await this.useSkill(42971);
                  }
                  if (_0x41781e == 7) {
                    _0x1d8c79 = await this.useSkill(32346);
                  }
                  if (_0x41781e == 8) {
                    _0x1d8c79 = await this.useSkill(32346);
                  }
                  if (_0x41781e == 9) {
                    _0x1d8c79 = await this.useSkill(32346);
                  }
                  if (_0x41781e == 10) {
                    _0x1d8c79 = await this.useSkill(32346);
                  }
                  if (_0x41781e == 11) {
                    break;
                  }
                  if (_0x1d8c79.result.result == 0) {
                    let _0x1828e1 = _0x1d8c79.result.playerInfos.find(_0x558529 => _0x558529.uid == _0x1d8c79.uid__).nextRoundOP;
                    if (_0x1828e1 == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x7b8106 = _0x1d8c79.result.playerInfos.find(_0x2e7da1 => _0x2e7da1.uid !== _0x1d8c79.uid__).nextRoundOP;
                    if (_0x7b8106 == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x41781e++;
                }
              } else if (_0x53a478.split("_")[1] == 2287 || _0x53a478.split("_")[1] == 1312) {
                const _0x1ebb27 = {
                  index: _0x461d53,
                  petList: [_0x200d41.getTime, _0x57f35d.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x1ebb27);
                let _0x15cbef = await this.initBattle();
                let _0x5441e3 = 0;
                while (_0x15cbef.result.result == 0) {
                  if (_0x5441e3 == 0) {
                    _0x15cbef = await this.useSkill(32346);
                  }
                  if (_0x5441e3 == 1) {
                    _0x15cbef = await this.useSkill(32346);
                  }
                  if (_0x5441e3 == 2) {
                    _0x15cbef = await this.useSkill(42971);
                  }
                  if (_0x5441e3 == 3) {
                    _0x15cbef = await this.useSkill(42972);
                  }
                  if (_0x5441e3 == 4) {
                    _0x15cbef = await this.useSkill(42971);
                  }
                  if (_0x5441e3 == 5) {
                    _0x15cbef = await this.useSkill(32346);
                  }
                  if (_0x5441e3 == 6) {
                    _0x15cbef = await this.useSkill(32346);
                  }
                  if (_0x5441e3 == 7) {
                    await this.send_message("cs_online_player_operation", {
                      data: {
                        petIndex: 1
                      },
                      groupId: "",
                      opType: 2
                    });
                  }
                  if (_0x5441e3 == 8) {
                    _0x15cbef = await this.useSkill(100531);
                  }
                  if (_0x5441e3 == 9) {
                    _0x15cbef = await this.useSkill(23245);
                  }
                  if (_0x5441e3 == 10) {
                    _0x15cbef = await this.useSkill(100483);
                  }
                  if (_0x5441e3 == 11) {
                    _0x15cbef = await this.useSkill(15894);
                  }
                  if (_0x5441e3 == 12) {
                    _0x15cbef = await this.useSkill(100531);
                  }
                  if (_0x5441e3 == 13) {
                    _0x15cbef = await this.useSkill(100483);
                  }
                  if (_0x5441e3 == 14) {
                    _0x15cbef = await this.useSkill(15894);
                  }
                  if (_0x5441e3 == 15) {
                    _0x15cbef = await this.useSkill(100531);
                  }
                  if (_0x5441e3 == 16) {
                    _0x15cbef = await this.useSkill(100483);
                  }
                  if (_0x5441e3 == 17) {
                    _0x15cbef = await this.useSkill(15894);
                  }
                  if (_0x5441e3 == 18) {
                    break;
                  }
                  if (_0x15cbef.result.result == 0) {
                    let _0x574fdc = _0x15cbef.result.playerInfos.find(_0x491e9a => _0x491e9a.uid == _0x15cbef.uid__).nextRoundOP;
                    if (_0x574fdc == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x1c5ce8 = _0x15cbef.result.playerInfos.find(_0x2030b8 => _0x2030b8.uid !== _0x15cbef.uid__).nextRoundOP;
                    if (_0x1c5ce8 == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x5441e3++;
                }
              } else if (_0x53a478.split("_")[1] == 2288 || _0x53a478.split("_")[1] == 1313) {
                const _0x50f294 = {
                  index: _0x461d53,
                  petList: [_0x475306.getTime, _0x57f35d.getTime, _0x200d41.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x50f294);
                let _0x18c210 = await this.initBattle();
                let _0x37c828 = 0;
                while (_0x18c210.result.result == 0) {
                  if (_0x37c828 == 0) {
                    _0x18c210 = await this.useSkill(41938);
                  }
                  if (_0x37c828 == 1) {
                    _0x18c210 = await this.useSkill(32296);
                  }
                  if (_0x37c828 == 2) {
                    _0x18c210 = await this.useSkill(32296);
                  }
                  if (_0x37c828 == 3) {
                    _0x18c210 = await this.useSkill(32296);
                  }
                  if (_0x37c828 == 4) {
                    await this.send_message("cs_online_player_operation", {
                      data: {
                        petIndex: 2
                      },
                      groupId: "",
                      opType: 2
                    });
                  }
                  if (_0x37c828 == 5) {
                    _0x18c210 = await this.useSkill(42971);
                  }
                  if (_0x37c828 == 6) {
                    _0x18c210 = await this.useSkill(42972);
                  }
                  if (_0x37c828 == 7) {
                    _0x18c210 = await this.useSkill(42972);
                  }
                  if (_0x37c828 == 8) {
                    _0x18c210 = await this.useSkill(42971);
                  }
                  if (_0x37c828 == 9) {
                    _0x18c210 = await this.useSkill(12186);
                  }
                  if (_0x37c828 == 10) {
                    _0x18c210 = await this.useSkill(12186);
                  }
                  if (_0x37c828 == 11) {
                    _0x18c210 = await this.useSkill(12186);
                  }
                  if (_0x37c828 == 12) {
                    _0x18c210 = await this.useSkill(12186);
                  }
                  if (_0x37c828 == 13) {
                    _0x18c210 = await this.useSkill(32346);
                  }
                  if (_0x37c828 == 14) {
                    _0x18c210 = await this.useSkill(42971);
                  }
                  if (_0x37c828 == 15) {
                    _0x18c210 = await this.useSkill(32346);
                  }
                  if (_0x37c828 == 16) {
                    _0x18c210 = await this.useSkill(32346);
                  }
                  if (_0x37c828 == 17) {
                    _0x18c210 = await this.useSkill(32346);
                  }
                  if (_0x37c828 == 18) {
                    _0x18c210 = await this.useSkill(32346);
                  }
                  if (_0x37c828 == 19) {
                    break;
                  }
                  if (_0x18c210.result.result == 0) {
                    let _0x26190e = _0x18c210.result.playerInfos.find(_0x3d3a97 => _0x3d3a97.uid == _0x18c210.uid__).nextRoundOP;
                    if (_0x26190e == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x2b6369 = _0x18c210.result.playerInfos.find(_0x3b5b15 => _0x3b5b15.uid !== _0x18c210.uid__).nextRoundOP;
                    if (_0x2b6369 == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x37c828++;
                }
              } else if (_0x53a478.split("_")[1] == 2289 || _0x53a478.split("_")[1] == 1314) {
                const _0x2580f0 = {
                  index: _0x461d53,
                  petList: [_0x200d41.getTime, _0x57f35d.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x2580f0);
                let _0x4b9029 = await this.initBattle();
                let _0xe6128e = 0;
                while (_0x4b9029.result.result == 0) {
                  if (_0xe6128e == 0) {
                    _0x4b9029 = await this.useSkill(42972);
                  }
                  if (_0xe6128e == 1) {
                    _0x4b9029 = await this.useSkill(42971);
                  }
                  if (_0xe6128e == 2) {
                    _0x4b9029 = await this.useSkill(32346);
                  }
                  if (_0xe6128e == 3) {
                    _0x4b9029 = await this.useSkill(32346);
                  }
                  if (_0xe6128e == 4) {
                    await this.send_message("cs_online_player_operation", {
                      data: {
                        petIndex: 1
                      },
                      groupId: "",
                      opType: 2
                    });
                  }
                  if (_0xe6128e == 5) {
                    _0x4b9029 = await this.useSkill(100531);
                  }
                  if (_0xe6128e == 6) {
                    _0x4b9029 = await this.useSkill(23245);
                  }
                  if (_0xe6128e == 7) {
                    _0x4b9029 = await this.useSkill(100483);
                  }
                  if (_0xe6128e == 8) {
                    _0x4b9029 = await this.useSkill(15894);
                  }
                  if (_0xe6128e == 9) {
                    _0x4b9029 = await this.useSkill(100531);
                  }
                  if (_0xe6128e == 10) {
                    _0x4b9029 = await this.useSkill(23245);
                  }
                  if (_0xe6128e == 11) {
                    _0x4b9029 = await this.useSkill(100483);
                  }
                  if (_0xe6128e == 12) {
                    _0x4b9029 = await this.useSkill(15894);
                  }
                  if (_0xe6128e == 13) {
                    _0x4b9029 = await this.useSkill(100531);
                  }
                  if (_0xe6128e == 14) {
                    _0x4b9029 = await this.useSkill(23245);
                  }
                  if (_0xe6128e == 15) {
                    _0x4b9029 = await this.useSkill(100483);
                  }
                  if (_0xe6128e == 16) {
                    _0x4b9029 = await this.useSkill(15894);
                  }
                  if (_0xe6128e == 17) {
                    let _0x1d9403 = 2001;
                    for (let _0x2d5fe9 = _0x1d9403; _0x2d5fe9 < 2004; _0x2d5fe9++) {
                      if (MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 5600) {
                        break;
                      } else if (ItemManager.getInstance().getItemNumById(_0x2d5fe9) > 0) {
                        const _0x13b5fb = {
                          itemID: _0x2d5fe9
                        };
                        const _0x16c040 = {
                          opType: 3,
                          data: _0x13b5fb,
                          groupId: ""
                        };
                        await this.send_message("cs_online_player_operation", _0x16c040);
                        break;
                      }
                    }
                    ;
                  }
                  if (_0xe6128e == 18) {
                    _0xe6128e = 5;
                  }
                  if (_0x4b9029.result.result == 0) {
                    let _0x2a7612 = _0x4b9029.result.playerInfos.find(_0x1e4d2f => _0x1e4d2f.uid == _0x4b9029.uid__).nextRoundOP;
                    if (_0x2a7612 == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x227703 = _0x4b9029.result.playerInfos.find(_0x578594 => _0x578594.uid !== _0x4b9029.uid__).nextRoundOP;
                    if (_0x227703 == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0xe6128e++;
                }
              } else if (_0x53a478.split("_")[1] == 2290 || _0x53a478.split("_")[1] == 1315) {
                const _0x1c6344 = {
                  index: _0x461d53,
                  petList: [_0x200d41.getTime, _0x57f35d.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x1c6344);
                let _0x560325 = await this.initBattle();
                let _0x2e7bdf = 0;
                while (_0x560325.result.result == 0) {
                  if (_0x2e7bdf == 0) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 1) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 2) {
                    _0x560325 = await this.useSkill(42971);
                  }
                  if (_0x2e7bdf == 3) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 4) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 5) {
                    _0x560325 = await this.useSkill(42971);
                  }
                  if (_0x2e7bdf == 6) {
                    _0x560325 = await this.useSkill(42972);
                  }
                  if (_0x2e7bdf == 7) {
                    let _0x3e8e4e = 2001;
                    for (let _0x38910e = _0x3e8e4e; _0x38910e < 2004; _0x38910e++) {
                      if (MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 5600) {
                        break;
                      } else if (ItemManager.getInstance().getItemNumById(_0x38910e) > 0) {
                        const _0xe0858c = {
                          itemID: _0x38910e
                        };
                        const _0x4fb736 = {
                          opType: 3,
                          data: _0xe0858c,
                          groupId: ""
                        };
                        await this.send_message("cs_online_player_operation", _0x4fb736);
                        break;
                      }
                    }
                    ;
                  }
                  if (_0x2e7bdf == 8) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 9) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 10) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 11) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 12) {
                    _0x560325 = await this.useSkill(32346);
                  }
                  if (_0x2e7bdf == 13) {
                    break;
                  }
                  if (_0x560325.result.result == 0) {
                    let _0x2865f8 = _0x560325.result.playerInfos.find(_0x1e9145 => _0x1e9145.uid == _0x560325.uid__).nextRoundOP;
                    if (_0x2865f8 == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x254719 = _0x560325.result.playerInfos.find(_0x13ea7c => _0x13ea7c.uid !== _0x560325.uid__).nextRoundOP;
                    if (_0x254719 == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x2e7bdf++;
                }
              } else if (_0x53a478.split("_")[1] == 2291 || _0x53a478.split("_")[1] == 1316) {
                const _0x4ad014 = {
                  index: _0x461d53,
                  petList: [_0x200d41.getTime, _0x57f35d.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x4ad014);
                let _0x343302 = await this.initBattle();
                let _0x9f983 = 0;
                while (_0x343302.result.result == 0) {
                  if (_0x9f983 == 0) {
                    _0x343302 = await this.useSkill(32346);
                  }
                  if (_0x9f983 == 1) {
                    _0x343302 = await this.useSkill(32346);
                  }
                  if (_0x9f983 == 2) {
                    _0x343302 = await this.useSkill(42971);
                  }
                  if (_0x9f983 == 3) {
                    _0x343302 = await this.useSkill(42971);
                  }
                  if (_0x9f983 == 4) {
                    _0x343302 = await this.useSkill(42971);
                  }
                  if (_0x9f983 == 5) {
                    _0x343302 = await this.useSkill(42972);
                  }
                  if (_0x9f983 == 6) {
                    _0x343302 = await this.useSkill(42971);
                  }
                  if (_0x9f983 == 7) {
                    _0x343302 = await this.useSkill(42972);
                  }
                  if (_0x9f983 == 8) {
                    _0x343302 = await this.useSkill(42971);
                  }
                  if (_0x9f983 == 9) {
                    _0x343302 = await this.useSkill(42972);
                  }
                  if (_0x9f983 == 10) {
                    _0x343302 = await this.useSkill(32346);
                  }
                  if (_0x9f983 == 11) {
                    _0x343302 = await this.useSkill(12186);
                  }
                  if (_0x9f983 == 12) {
                    _0x343302 = await this.useSkill(12186);
                  }
                  if (_0x9f983 == 13) {
                    _0x343302 = await this.useSkill(12186);
                  }
                  if (_0x9f983 == 14) {
                    await this.send_message("cs_online_player_operation", {
                      data: {
                        petIndex: 1
                      },
                      groupId: "",
                      opType: 2
                    });
                  }
                  if (_0x9f983 == 15) {
                    _0x343302 = await this.useSkill(100531);
                  }
                  if (_0x9f983 == 16) {
                    _0x343302 = await this.useSkill(23245);
                  }
                  if (_0x9f983 == 17) {
                    _0x343302 = await this.useSkill(100483);
                  }
                  if (_0x9f983 == 18) {
                    _0x343302 = await this.useSkill(15894);
                  }
                  if (_0x9f983 == 19) {
                    _0x343302 = await this.useSkill(100531);
                  }
                  if (_0x9f983 == 20) {
                    _0x343302 = await this.useSkill(23245);
                  }
                  if (_0x9f983 == 21) {
                    _0x343302 = await this.useSkill(100483);
                  }
                  if (_0x9f983 == 22) {
                    _0x343302 = await this.useSkill(15894);
                  }
                  if (_0x9f983 == 23) {
                    break;
                  }
                  if (_0x343302.result.result == 0) {
                    let _0x406488 = _0x343302.result.playerInfos.find(_0x1b2fd9 => _0x1b2fd9.uid == _0x343302.uid__).nextRoundOP;
                    if (_0x406488 == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x9b967f = _0x343302.result.playerInfos.find(_0x566571 => _0x566571.uid !== _0x343302.uid__).nextRoundOP;
                    if (_0x9b967f == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x9f983++;
                }
              } else if (_0x53a478.split("_")[1] == 2292 || _0x53a478.split("_")[1] == 1317) {
                const _0x46bf97 = {
                  index: _0x461d53,
                  petList: [_0x200d41.getTime, _0x57f35d.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x46bf97);
                let _0x33eaed = await this.initBattle();
                let _0x35673c = 0;
                while (_0x33eaed.result.result == 0) {
                  if (_0x35673c == 0) {
                    _0x33eaed = await this.useSkill(42971);
                  }
                  if (_0x35673c == 1) {
                    _0x33eaed = await this.useSkill(42971);
                  }
                  if (_0x35673c == 2) {
                    _0x33eaed = await this.useSkill(42971);
                  }
                  if (_0x35673c == 3) {
                    _0x33eaed = await this.useSkill(42972);
                  }
                  if (_0x35673c == 4) {
                    _0x33eaed = await this.useSkill(42971);
                  }
                  if (_0x35673c == 5) {
                    _0x33eaed = await this.useSkill(42972);
                  }
                  if (_0x35673c == 6) {
                    _0x33eaed = await this.useSkill(42971);
                  }
                  if (_0x35673c == 7) {
                    _0x33eaed = await this.useSkill(42972);
                  }
                  if (_0x35673c == 8) {
                    _0x33eaed = await this.useSkill(42971);
                  }
                  if (_0x35673c == 9) {
                    _0x33eaed = await this.useSkill(32346);
                  }
                  if (_0x35673c == 10) {
                    _0x33eaed = await this.useSkill(12186);
                  }
                  if (_0x35673c == 11) {
                    _0x33eaed = await this.useSkill(32346);
                  }
                  if (_0x35673c == 12) {
                    _0x33eaed = await this.useSkill(32346);
                  }
                  if (_0x35673c == 13) {
                    _0x33eaed = await this.useSkill(32346);
                  }
                  if (_0x35673c == 14) {
                    break;
                  }
                  if (_0x33eaed.result.result == 0) {
                    let _0xbbf8fe = _0x33eaed.result.playerInfos.find(_0x371832 => _0x371832.uid == _0x33eaed.uid__).nextRoundOP;
                    if (_0xbbf8fe == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x242d7b = _0x33eaed.result.playerInfos.find(_0x24ded7 => _0x24ded7.uid !== _0x33eaed.uid__).nextRoundOP;
                    if (_0x242d7b == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x35673c++;
                }
              } else if (_0x53a478.split("_")[1] == 2293 || _0x53a478.split("_")[1] == 1318) {
                const _0x4b221f = {
                  index: _0x461d53,
                  petList: [_0x200d41.getTime, _0x57f35d.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0x4b221f);
                let _0x31119e = await this.initBattle();
                let _0x2c08a1 = 0;
                while (_0x31119e.result.result == 0) {
                  if (_0x2c08a1 == 0) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 1) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 2) {
                    _0x31119e = await this.useSkill(42971);
                  }
                  if (_0x2c08a1 == 3) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 4) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 5) {
                    _0x31119e = await this.useSkill(42971);
                  }
                  if (_0x2c08a1 == 6) {
                    let _0x47396e = 2001;
                    for (let _0x5c5610 = _0x47396e; _0x5c5610 < 2004; _0x5c5610++) {
                      if (MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 5600) {
                        break;
                      } else if (ItemManager.getInstance().getItemNumById(_0x5c5610) > 0) {
                        const _0x2795e3 = {
                          itemID: _0x5c5610
                        };
                        const _0x37e34d = {
                          opType: 3,
                          data: _0x2795e3,
                          groupId: ""
                        };
                        await this.send_message("cs_online_player_operation", _0x37e34d);
                        break;
                      }
                    }
                    ;
                  }
                  if (_0x2c08a1 == 7) {
                    _0x31119e = await this.useSkill(42971);
                  }
                  if (_0x2c08a1 == 8) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 9) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 5) {
                    _0x31119e = await this.useSkill(42971);
                  }
                  if (_0x2c08a1 == 6) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 7) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 8) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 9) {
                    let _0x583d4b = 2001;
                    for (let _0x3827fa = _0x583d4b; _0x3827fa < 2004; _0x3827fa++) {
                      if (MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 5600) {
                        break;
                      } else if (ItemManager.getInstance().getItemNumById(_0x3827fa) > 0) {
                        const _0x26fff8 = {
                          itemID: _0x3827fa
                        };
                        const _0x160c9d = {
                          opType: 3,
                          data: _0x26fff8,
                          groupId: ""
                        };
                        await this.send_message("cs_online_player_operation", _0x160c9d);
                        break;
                      }
                    }
                    ;
                  }
                  if (_0x2c08a1 == 10) {
                    _0x31119e = await this.useSkill(32346);
                  }
                  if (_0x2c08a1 == 11) {
                    break;
                  }
                  if (_0x31119e.result.result == 0) {
                    let _0x192099 = _0x31119e.result.playerInfos.find(_0x158e27 => _0x158e27.uid == _0x31119e.uid__).nextRoundOP;
                    if (_0x192099 == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x293ba7 = _0x31119e.result.playerInfos.find(_0x475e77 => _0x475e77.uid !== _0x31119e.uid__).nextRoundOP;
                    if (_0x293ba7 == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x2c08a1++;
                }
              } else if (_0x53a478.split("_")[1] == 2294 || _0x53a478.split("_")[1] == 1319) {
                const _0xf9d89e = {
                  index: _0x461d53,
                  petList: [_0x57f35d.getTime, _0x200d41.getTime, _0x475306.getTime],
                  type: 3
                };
                await this.send_message("cs_renault_out", _0xf9d89e);
                let _0x41837b = await this.initBattle();
                let _0x34c929 = 0;
                while (_0x41837b.result.result == 0) {
                  if (_0x34c929 == 0) {
                    _0x41837b = await this.useSkill(23245);
                  }
                  if (_0x34c929 == 1) {
                    _0x41837b = await this.useSkill(100531);
                  }
                  if (_0x34c929 == 2) {
                    _0x41837b = await this.useSkill(100483);
                  }
                  if (_0x34c929 == 3) {
                    _0x41837b = await this.useSkill(15894);
                  }
                  if (_0x34c929 == 4) {
                    _0x41837b = await this.useSkill(23245);
                  }
                  if (_0x34c929 == 5) {
                    _0x41837b = await this.useSkill(100531);
                  }
                  if (_0x34c929 == 6) {
                    _0x41837b = await this.useSkill(100483);
                  }
                  if (_0x34c929 == 7) {
                    _0x41837b = await this.useSkill(15894);
                  }
                  if (_0x34c929 == 8) {
                    await this.send_message("cs_online_player_operation", {
                      data: {
                        petIndex: 1
                      },
                      groupId: "",
                      opType: 2
                    });
                  }
                  if (_0x34c929 == 9) {
                    _0x41837b = await this.useSkill(42971);
                  }
                  if (_0x34c929 == 10) {
                    _0x41837b = await this.useSkill(32346);
                  }
                  if (_0x34c929 == 11) {
                    _0x41837b = await this.useSkill(32346);
                  }
                  if (_0x34c929 == 12) {
                    _0x41837b = await this.useSkill(32346);
                  }
                  if (_0x34c929 == 13) {
                    _0x41837b = await this.useSkill(32346);
                  }
                  if (_0x34c929 == 14) {
                    _0x41837b = await this.useSkill(32346);
                  }
                  if (_0x34c929 == 15) {
                    await this.send_message("cs_online_player_operation", {
                      data: {
                        petIndex: 0
                      },
                      groupId: "",
                      opType: 2
                    });
                  }
                  if (_0x34c929 == 16) {
                    _0x41837b = await this.useSkill(100531);
                  }
                  if (_0x34c929 == 17) {
                    _0x41837b = await this.useSkill(23245);
                  }
                  if (_0x34c929 == 18) {
                    _0x41837b = await this.useSkill(100483);
                  }
                  if (_0x34c929 == 19) {
                    _0x41837b = await this.useSkill(15894);
                  }
                  if (_0x34c929 == 20) {
                    break;
                  }
                  if (_0x41837b.result.result == 0) {
                    let _0xe0ade6 = _0x41837b.result.playerInfos.find(_0x2605c5 => _0x2605c5.uid == _0x41837b.uid__).nextRoundOP;
                    if (_0xe0ade6 == 3) {
                      addGameLog("被击败");
                      break;
                    }
                    let _0x4d5bf5 = _0x41837b.result.playerInfos.find(_0xe9a6e5 => _0xe9a6e5.uid !== _0x41837b.uid__).nextRoundOP;
                    if (_0x4d5bf5 == 3) {
                      await this.send_message("cs_online_player_operation", {
                        opType: 4,
                        data: {},
                        groupId: ""
                      });
                    }
                  }
                  _0x34c929++;
                }
              }
            } else {
              _0x53a478 = _0x3ff5f6.bossList.find(_0x25173a => _0x25173a.startsWith("2"));
              if (_0x53a478) {
                let _0x56680a = _0x3ff5f6.bossList.indexOf(_0x53a478);
                let _0x4dd77c = BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyRenaultOutStartFlag), 1 + _0x56680a);
                if (_0x4dd77c == 0) {
                  const _0xee34dc = {
                    index: _0x56680a,
                    petList: [],
                    type: 5
                  };
                  await this.send_message("cs_renault_out", _0xee34dc);
                }
                if (_0x53a478.split("_")[0].indexOf(1) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 800) {
                  const _0x242ac6 = {
                    index: _0x56680a,
                    petList: [_0x200d41.getTime, _0x475306.getTime],
                    type: 6
                  };
                  await this.send_message("cs_renault_out", _0x242ac6);
                  addGameLog("扫荡第" + (_0x56680a + 1) + "关");
                } else if (_0x53a478.split("_")[0].indexOf(2) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 4800) {
                  const _0x5cd3ff = {
                    index: _0x56680a,
                    petList: [_0x200d41.getTime, _0x475306.getTime],
                    type: 6
                  };
                  await this.send_message("cs_renault_out", _0x5cd3ff);
                  addGameLog("扫荡第" + (_0x56680a + 1) + "关");
                } else {
                  const _0x10ab82 = {
                    index: _0x56680a,
                    petList: [_0x200d41.getTime, _0x475306.getTime],
                    type: 3
                  };
                  await this.send_message("cs_renault_out", _0x10ab82);
                  let _0x16c6b9 = 0;
                  let _0x2f6b6e;
                  let _0x24cc26 = 0;
                  let _0x2da11c = await this.initBattle();
                  while (_0x2da11c.result.result == 0) {
                    if (_0x16c6b9 == 0) {
                      _0x2f6b6e = 32346;
                    }
                    if (_0x16c6b9 > 0) {
                      if (_0x24cc26 == 0) {
                        _0x2f6b6e = 41938;
                        _0x24cc26++;
                      } else {
                        _0x2f6b6e = 32298;
                      }
                    }
                    _0x2da11c = await this.useSkill(_0x2f6b6e);
                    if (_0x2da11c.result.result == 0) {
                      let _0xbd360a = _0x2da11c.result.playerInfos.find(_0xb12dbf => _0xb12dbf.uid == _0x2da11c.uid__).nextRoundOP;
                      if (_0xbd360a == 3) {
                        addGameLog("被击败");
                        await this.send_message("cs_online_player_operation", {
                          data: {
                            petIndex: 1
                          },
                          groupId: "",
                          opType: 2
                        });
                        addGameLog("切换精灵");
                        _0x16c6b9++;
                      }
                    }
                  }
                }
              } else {
                _0x53a478 = _0x3ff5f6.bossList.find(_0x481a1d => _0x481a1d.startsWith("1"));
                let _0x587765 = _0x3ff5f6.bossList.indexOf(_0x53a478);
                let _0x3d13ad = BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyRenaultOutStartFlag), 1 + _0x587765);
                if (_0x3d13ad == 0) {
                  const _0x226c10 = {
                    index: _0x587765,
                    petList: [],
                    type: 5
                  };
                  await this.send_message("cs_renault_out", _0x226c10);
                }
                if (_0x53a478.split("_")[0].indexOf(1) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 800) {
                  const _0x3aa224 = {
                    index: _0x587765,
                    petList: [_0x200d41.getTime, _0x475306.getTime],
                    type: 6
                  };
                  await this.send_message("cs_renault_out", _0x3aa224);
                  addGameLog("扫荡第" + (_0x587765 + 1) + "关");
                } else if (_0x53a478.split("_")[0].indexOf(2) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 4800) {
                  const _0x2cfb11 = {
                    index: _0x587765,
                    petList: [_0x200d41.getTime, _0x475306.getTime],
                    type: 6
                  };
                  await this.send_message("cs_renault_out", _0x2cfb11);
                  addGameLog("扫荡第" + (_0x587765 + 1) + "关");
                } else {
                  const _0x156142 = {
                    index: _0x587765,
                    petList: [_0x200d41.getTime, _0x475306.getTime],
                    type: 3
                  };
                  await this.send_message("cs_renault_out", _0x156142);
                  let _0x2bb359 = 0;
                  let _0x7526b2;
                  let _0x16e6d5 = 0;
                  let _0x3f2d0e = await this.initBattle();
                  while (_0x3f2d0e.result.result == 0) {
                    if (_0x2bb359 == 0) {
                      _0x7526b2 = 32346;
                    }
                    if (_0x2bb359 > 0) {
                      if (_0x16e6d5 == 0) {
                        _0x7526b2 = 41938;
                        _0x16e6d5++;
                      } else {
                        _0x7526b2 = 32298;
                      }
                    }
                    _0x3f2d0e = await this.useSkill(_0x7526b2);
                    if (_0x3f2d0e.result.result == 0) {
                      let _0x67a3e8 = _0x3f2d0e.result.playerInfos.find(_0x2216b6 => _0x2216b6.uid == _0x3f2d0e.uid__).nextRoundOP;
                      if (_0x67a3e8 == 3) {
                        addGameLog("被击败");
                        await this.send_message("cs_online_player_operation", {
                          data: {
                            petIndex: 1
                          },
                          groupId: "",
                          opType: 2
                        });
                        addGameLog("切换精灵");
                        _0x2bb359++;
                      }
                    }
                  }
                }
              }
            }
          } else {
            addGameLog("电池数量不够");
            break;
          }
        } else {
          addGameLog("信号破解器数量不够");
          break;
        }
      }
      await this.moni();
    }
  }
  async RenaultBattle1() {
    let _0x48a3fa = MFC.userInfo.defaultTeam;
    while (true) {
      let _0x4d01c8 = await this.send_message("cs_renault_out", {
        index: 0,
        petList: [],
        type: 1
      });
      if (ItemManager.getInstance().getItemNumById(101210) > 0) {
        if (MFC.userInfo.curEnergy > 5) {
          let _0x59b0b4 = _0x4d01c8.bossList.find(_0x462ae8 => _0x462ae8.startsWith("3")) || _0x4d01c8.bossList.find(_0x2d901a => _0x2d901a.startsWith("2")) || _0x4d01c8.bossList.find(_0x259ae7 => _0x259ae7.startsWith("1"));
          let _0x1d8b11 = _0x4d01c8.bossList.indexOf(_0x59b0b4);
          let _0x24e003 = BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyRenaultOutStartFlag), 1 + _0x1d8b11);
          if (_0x24e003 == 0) {
            const _0xa51347 = {
              index: _0x1d8b11,
              petList: [],
              type: 5
            };
            await this.send_message("cs_renault_out", _0xa51347);
          }
          if (_0x59b0b4.split("_")[0].indexOf(1) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 800) {
            const _0x373aa4 = {
              index: _0x1d8b11,
              petList: _0x48a3fa,
              type: 6
            };
            await this.send_message("cs_renault_out", _0x373aa4);
            addGameLog("扫荡第" + (_0x1d8b11 + 1) + "关");
          } else if (_0x59b0b4.split("_")[0].indexOf(2) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 4800) {
            const _0x31e2c1 = {
              index: _0x1d8b11,
              petList: _0x48a3fa,
              type: 6
            };
            await this.send_message("cs_renault_out", _0x31e2c1);
            addGameLog("扫荡第" + (_0x1d8b11 + 1) + "关");
          } else {
            const _0x2ee86a = {
              index: _0x1d8b11,
              petList: _0x48a3fa,
              type: 3
            };
            await this.send_message("cs_renault_out", _0x2ee86a);
            await this.initBattle();
            let _0x2c04ae = 0;
            while (true) {
              if (_0x2c04ae == 5) {
                addGameLog("打不过需更换下阵容");
                await this.send_message("cs_quit_battle", {});
                break;
              }
              let _0x2f23f2 = await this.useSkill(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x2c04ae]).skills[0]);
              if (_0x2f23f2.result.result == 0) {
                if (_0x2f23f2.result.playerInfos[0].uid == MFC.userInfo.uid) {
                  if (_0x2f23f2.result.playerInfos[0].nextRoundOP == 3) {
                    addGameLog("被击败");
                    const _0x5a66c8 = {
                      petIndex: _0x2c04ae + 1
                    };
                    const _0x371179 = {
                      data: _0x5a66c8,
                      groupId: "",
                      opType: 2
                    };
                    await this.send_message("cs_online_player_operation", _0x371179);
                    addGameLog("切换精灵");
                    _0x2c04ae++;
                  } else if (JSON.stringify(_0x2f23f2.result.playerInfos[0].petInfos[_0x2c04ae].useSkills).indexOf(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x2c04ae]).skills[0]) != -1) {
                    let _0x47b728 = _0x2f23f2.result.playerInfos[0].petInfos[_0x2c04ae].useSkills[_0x2f23f2.result.playerInfos[0].petInfos[_0x2c04ae].useSkills.findIndex(_0x19a7de => _0x19a7de.id === PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x2c04ae]).skills[0])].crtPP;
                    if (_0x47b728 == 0) {
                      addGameLog("技能:" + petConfig.SkillConfig.getDef(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x2c04ae]).skills[0]).name + "PP不足,补PP");
                      let _0x162d5d = 2001;
                      for (let _0xbc31c9 = _0x162d5d; _0xbc31c9 < 2004; _0xbc31c9++) {
                        if (ItemManager.getInstance().getItemNumById(_0xbc31c9) > 0) {
                          const _0x57a92a = {
                            itemID: _0xbc31c9
                          };
                          const _0x52cbb7 = {
                            opType: 3,
                            data: _0x57a92a,
                            groupId: ""
                          };
                          _0x2f23f2 = await this.send_message("cs_online_player_operation", _0x52cbb7);
                          break;
                        }
                      }
                    }
                  }
                } else if (_0x2f23f2.result.playerInfos[1].nextRoundOP == 3) {
                  addGameLog("被击败");
                  const _0x3bd297 = {
                    petIndex: _0x2c04ae + 1
                  };
                  const _0x20b4a3 = {
                    data: _0x3bd297,
                    groupId: "",
                    opType: 2
                  };
                  await this.send_message("cs_online_player_operation", _0x20b4a3);
                  addGameLog("切换精灵");
                  _0x2c04ae++;
                } else if (JSON.stringify(_0x2f23f2.result.playerInfos[1].petInfos[_0x2c04ae].useSkills).indexOf(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x2c04ae]).skills[0]) != -1) {
                  let _0x186674 = _0x2f23f2.result.playerInfos[1].petInfos[_0x2c04ae].useSkills[_0x2f23f2.result.playerInfos[1].petInfos[_0x2c04ae].useSkills.findIndex(_0xa10e53 => _0xa10e53.id === PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x2c04ae]).skills[0])].crtPP;
                  if (_0x186674 == 0) {
                    addGameLog("技能:" + petConfig.SkillConfig.getDef(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x2c04ae]).skills[0]).name + "PP不足,补PP");
                    let _0x5e98a1 = 2001;
                    for (let _0x24eee9 = _0x5e98a1; _0x24eee9 < 2004; _0x24eee9++) {
                      if (ItemManager.getInstance().getItemNumById(_0x24eee9) > 0) {
                        const _0x405f31 = {
                          itemID: _0x24eee9
                        };
                        const _0x21dbeb = {
                          opType: 3,
                          data: _0x405f31,
                          groupId: ""
                        };
                        _0x2f23f2 = await this.send_message("cs_online_player_operation", _0x21dbeb);
                        break;
                      }
                    }
                  }
                }
              } else if (_0x2f23f2.result.result == 1) {
                addGameLog("成功击败");
                break;
              } else if (_0x2f23f2.result.result == 2) {
                break;
              }
              if (_0x2f23f2.result && _0x2f23f2.result.roundNum !== undefined) {
                if (_0x2f23f2.result.roundNum > 150) {
                  addGameLog("150回合未击败");
                  break;
                }
              }
            }
          }
        } else {
          addGameLog("电池数量不够");
          break;
        }
      } else {
        addGameLog("信号破解器数量不够");
        break;
      }
    }
    await this.moni();
  }
  async RenaultBattle2() {
    let _0x3ee8bc = MFC.userInfo.defaultTeam;
    while (true) {
      let _0x2d1552 = await this.send_message("cs_renault_out", {
        index: 0,
        petList: [],
        type: 1
      });
      if (ItemManager.getInstance().getItemNumById(101210) > 0) {
        if (MFC.userInfo.curEnergy > 5) {
          let _0x12deba = _0x2d1552.bossList.find(_0x2bda83 => _0x2bda83.startsWith("3")) || _0x2d1552.bossList.find(_0x1d648f => _0x1d648f.startsWith("2")) || _0x2d1552.bossList.find(_0x5de1ac => _0x5de1ac.startsWith("1"));
          let _0x277a2c = _0x2d1552.bossList.indexOf(_0x12deba);
          let _0x2dcd3a = BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyRenaultOutStartFlag), 1 + _0x277a2c);
          if (_0x2dcd3a == 0) {
            const _0x4c4557 = {
              index: _0x277a2c,
              petList: [],
              type: 5
            };
            await this.send_message("cs_renault_out", _0x4c4557);
          }
          if (_0x12deba.split("_")[0].indexOf(1) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 800) {
            const _0x37dce7 = {
              index: _0x277a2c,
              petList: _0x3ee8bc,
              type: 6
            };
            await this.send_message("cs_renault_out", _0x37dce7);
            addGameLog("扫荡第" + (_0x277a2c + 1) + "关");
          } else if (_0x12deba.split("_")[0].indexOf(2) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 4800) {
            const _0xaf340 = {
              index: _0x277a2c,
              petList: _0x3ee8bc,
              type: 6
            };
            await this.send_message("cs_renault_out", _0xaf340);
            addGameLog("扫荡第" + (_0x277a2c + 1) + "关");
          } else {
            const _0xd093bf = {
              index: _0x277a2c,
              petList: _0x3ee8bc,
              type: 3
            };
            await this.send_message("cs_renault_out", _0xd093bf);
            await this.initBattle();
            let _0x524d83 = 0;
            let _0x1f0ac3 = 0;
            while (true) {
              if (_0x524d83 == 5) {
                addGameLog("打不过需更换下阵容");
                await this.send_message("cs_quit_battle", {});
                break;
              }
              let _0x3587bc = await this.useSkill(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x524d83]).skills[_0x1f0ac3]);
              if (_0x3587bc.result.result == 0) {
                if (_0x3587bc.result.playerInfos[0].uid == MFC.userInfo.uid) {
                  if (_0x3587bc.result.playerInfos[0].nextRoundOP == 3) {
                    addGameLog("被击败");
                    const _0x3b79ab = {
                      petIndex: _0x524d83 + 1
                    };
                    const _0x8f49e7 = {
                      data: _0x3b79ab,
                      groupId: "",
                      opType: 2
                    };
                    await this.send_message("cs_online_player_operation", _0x8f49e7);
                    addGameLog("切换精灵");
                    _0x524d83++;
                    _0x1f0ac3 = 0;
                  } else {
                    _0x1f0ac3++;
                    if (_0x1f0ac3 == 4) {
                      if (JSON.stringify(_0x3587bc.result.playerInfos[0].petInfos[_0x524d83].useSkills).indexOf(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x524d83]).skills[_0x1f0ac3 - 1]) != -1) {
                        let _0x2e9504 = _0x3587bc.result.playerInfos[0].petInfos[_0x524d83].useSkills[_0x3587bc.result.playerInfos[0].petInfos[_0x524d83].useSkills.findIndex(_0x415785 => _0x415785.id === PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x524d83]).skills[_0x1f0ac3 - 1])].crtPP;
                        if (_0x2e9504 == 0) {
                          addGameLog("技能:" + petConfig.SkillConfig.getDef(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x524d83]).skills[_0x1f0ac3 - 1]).name + "PP不足,补PP");
                          let _0x6a261a = 2001;
                          for (let _0x1c83eb = _0x6a261a; _0x1c83eb < 2004; _0x1c83eb++) {
                            if (ItemManager.getInstance().getItemNumById(_0x1c83eb) > 0) {
                              const _0x493812 = {
                                itemID: _0x1c83eb
                              };
                              const _0x5b32e6 = {
                                opType: 3,
                                data: _0x493812,
                                groupId: ""
                              };
                              _0x3587bc = await this.send_message("cs_online_player_operation", _0x5b32e6);
                              break;
                            }
                          }
                        }
                      }
                      _0x1f0ac3 = 0;
                    }
                  }
                } else if (_0x3587bc.result.playerInfos[1].nextRoundOP == 3) {
                  addGameLog("被击败");
                  const _0x46f8d1 = {
                    petIndex: _0x524d83 + 1
                  };
                  const _0x5ad79e = {
                    data: _0x46f8d1,
                    groupId: "",
                    opType: 2
                  };
                  await this.send_message("cs_online_player_operation", _0x5ad79e);
                  addGameLog("切换精灵");
                  _0x524d83++;
                  _0x1f0ac3 = 0;
                } else {
                  _0x1f0ac3++;
                  if (_0x1f0ac3 == 4) {
                    if (JSON.stringify(_0x3587bc.result.playerInfos[1].petInfos[_0x524d83].useSkills).indexOf(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x524d83]).skills[_0x1f0ac3 - 1]) != -1) {
                      let _0x57103b = _0x3587bc.result.playerInfos[1].petInfos[_0x524d83].useSkills[_0x3587bc.result.playerInfos[1].petInfos[_0x524d83].useSkills.findIndex(_0x37c0eb => _0x37c0eb.id === PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x524d83]).skills[_0x1f0ac3 - 1])].crtPP;
                      if (_0x57103b == 0) {
                        addGameLog("技能:" + petConfig.SkillConfig.getDef(PetManager.getInstance().getPetInfoByGetTime(MFC.userInfo.defaultTeam[_0x524d83]).skills[_0x1f0ac3 - 1]).name + "PP不足,补PP");
                        let _0x7a8c46 = 2001;
                        for (let _0x250446 = _0x7a8c46; _0x250446 < 2004; _0x250446++) {
                          if (ItemManager.getInstance().getItemNumById(_0x250446) > 0) {
                            const _0x1f2cfd = {
                              itemID: _0x250446
                            };
                            const _0x5e2c49 = {
                              opType: 3,
                              data: _0x1f2cfd,
                              groupId: ""
                            };
                            _0x3587bc = await this.send_message("cs_online_player_operation", _0x5e2c49);
                            break;
                          }
                        }
                      }
                    }
                    _0x1f0ac3 = 0;
                  }
                }
              } else if (_0x3587bc.result.result == 1) {
                addGameLog("成功击败");
                break;
              } else if (_0x3587bc.result.result == 2) {
                break;
              }
              if (_0x3587bc.result && _0x3587bc.result.roundNum !== undefined) {
                if (_0x3587bc.result.roundNum > 150) {
                  addGameLog("150回合未击败");
                  break;
                }
              }
            }
          }
        } else {
          addGameLog("电池数量不够");
          break;
        }
      } else {
        addGameLog("信号破解器数量不够");
        break;
      }
    }
    await this.moni();
  }
  async RenaultBattle3() {
    let _0x40468e = await this.RenaultpetBattle();
    if (!_0x40468e) {
      this.stop();
      return;
    }
    while (true) {
      let _0xab7dcc = await this.send_message("cs_renault_out", {
        index: 0,
        petList: [],
        type: 1
      });
      if (ItemManager.getInstance().getItemNumById(101210) > 0) {
        if (MFC.userInfo.curEnergy > 5) {
          let _0x669cec = _0xab7dcc.bossList.find(_0x6451c3 => _0x6451c3.startsWith("2")) || _0xab7dcc.bossList.find(_0x3b5b75 => _0x3b5b75.startsWith("1"));
          if (!_0x669cec) {
            addGameLog("都是三星关卡");
            break;
          } else {
            let _0x6962b0 = _0xab7dcc.bossList.indexOf(_0x669cec);
            let _0x1379fc = BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyRenaultOutStartFlag), 1 + _0x6962b0);
            if (_0x1379fc == 0) {
              const _0x2a7a90 = {
                index: _0x6962b0,
                petList: [],
                type: 5
              };
              await this.send_message("cs_renault_out", _0x2a7a90);
            }
            if (_0x669cec.split("_")[0].indexOf(1) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 800) {
              await this.send_message("cs_renault_out", {
                index: _0x6962b0,
                petList: [_0x40468e.pet[0].getTime, _0x40468e.pet[1].getTime, PetManager.getInstance().getAllPets()[0].getTime],
                type: 6
              });
              addGameLog("扫荡第" + (_0x6962b0 + 1) + "关");
            } else if (_0x669cec.split("_")[0].indexOf(2) != -1 && MFC.attr.getAttr(MFC.attrType.foreverRenaultOutIntegral) >= 4800) {
              await this.send_message("cs_renault_out", {
                index: _0x6962b0,
                petList: [_0x40468e.pet[0].getTime, _0x40468e.pet[1].getTime, PetManager.getInstance().getAllPets()[0].getTime],
                type: 6
              });
              addGameLog("扫荡第" + (_0x6962b0 + 1) + "关");
            } else {
              await this.send_message("cs_renault_out", {
                index: _0x6962b0,
                petList: [_0x40468e.pet[0].getTime, _0x40468e.pet[1].getTime, PetManager.getInstance().getAllPets()[0].getTime],
                type: 3
              });
              await this.initBattle();
              let _0x3baa2d = 0;
              let _0x407857 = 0;
              while (true) {
                if (_0x3baa2d == 2) {
                  addGameLog("打不过需更换下阵容");
                  await this.send_message("cs_quit_battle", {});
                  break;
                }
                let _0x1f8abb = await this.useSkill(_0x40468e.skillsName[_0x3baa2d][_0x407857]);
                if (_0x1f8abb.result.result == 0) {
                  if (_0x1f8abb.result.playerInfos[0].uid == MFC.userInfo.uid) {
                    if (_0x1f8abb.result.playerInfos[0].nextRoundOP == 3) {
                      addGameLog("被击败");
                      const _0x2b2fb5 = {
                        petIndex: _0x3baa2d + 1
                      };
                      const _0x3b3a26 = {
                        data: _0x2b2fb5,
                        groupId: "",
                        opType: 2
                      };
                      await this.send_message("cs_online_player_operation", _0x3b3a26);
                      addGameLog("切换精灵");
                      _0x3baa2d++;
                      _0x407857 = 0;
                    } else {
                      _0x407857++;
                      if (_0x407857 == 4) {
                        _0x407857 = 0;
                      }
                    }
                  } else if (_0x1f8abb.result.playerInfos[1].nextRoundOP == 3) {
                    addGameLog("被击败");
                    const _0x3570f5 = {
                      petIndex: _0x3baa2d + 1
                    };
                    const _0x449baa = {
                      data: _0x3570f5,
                      groupId: "",
                      opType: 2
                    };
                    await this.send_message("cs_online_player_operation", _0x449baa);
                    addGameLog("切换精灵");
                    _0x3baa2d++;
                    _0x407857 = 0;
                  } else {
                    _0x407857++;
                    if (_0x407857 == 4) {
                      _0x407857 = 0;
                    }
                  }
                } else if (_0x1f8abb.result.result == 1) {
                  addGameLog("成功击败");
                  break;
                } else if (_0x1f8abb.result.result == 2) {
                  break;
                }
                if (_0x1f8abb.result.roundNum > 150) {
                  addGameLog("150回合未击败");
                  break;
                }
              }
            }
          }
        } else {
          addGameLog("电池数量不够");
          break;
        }
      } else {
        addGameLog("信号破解器数量不够");
        break;
      }
    }
    await this.moni();
  }
  async RenaultpetBattle() {
    let _0x43b50e = await this.dispatchSelfPet("闪光雷吉欧斯", [41938, 32298, 32297, 21112]);
    let _0x612891 = await this.dispatchSelfPet("雷伊", [23245, 100531, 100483, 15894]);
    if (_0x43b50e && _0x612891) {
      return {
        pet: [_0x43b50e, _0x612891],
        skillsName: [[41938, 32298, 32297, 21112], [23245, 100531, 100483, 15894]]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async moni() {
    await this.send_message("cs_renault_out", {
      type: 1,
      index: 0,
      petList: []
    });
    let _0x5d5372 = await pveUtils.ConvertNewActivityCardDataToOld([2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303]);
    logger(_0x5d5372);
    let _0x3c88d0 = [2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303];
    let _0x3be5cc = [4674, 4675, 4676, 4677, 4678, 4679, 4680, 4681, 4682];
    while (true) {
      if (ItemManager.getInstance().getItemNumById(101211) > 0) {
        if (_0x5d5372.every(_0x365e03 => _0x365e03.status == 1)) {
          const _0x4e9ca6 = {
            type: 1,
            cardId: [_0x3c88d0[1]],
            petList: [_0x3be5cc[1]],
            times: 0
          };
          await this.send_message("cs_pve_fight_start", _0x4e9ca6);
          await this.initBattle();
          let _0x37a821 = await this.useSkill(32076);
          while (_0x37a821.result.result == 0) {
            _0x37a821 = await this.useSkill(32071);
          }
          if (_0x37a821.result.result == 1) {
            addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[1]));
          }
        } else {
          if (_0x3c88d0[_0x5d5372.findIndex(_0x2f431d => _0x2f431d.status !== 1)] == 2295) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x5558fa => _0x5558fa.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x5a9c4d => _0x5a9c4d.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0x55e871 = await this.useSkill(41077);
            if (_0x55e871.result.result == 0) {
              _0x55e871 = await this.useSkill(41078);
            }
            if (_0x55e871.result.result == 0) {
              _0x55e871 = await this.useSkill(41805);
            }
            if (_0x55e871.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[_0x5d5372.findIndex(_0x242718 => _0x242718.status !== 1)]));
            }
          }
          if (_0x3c88d0[_0x5d5372.findIndex(_0x5762c2 => _0x5762c2.status !== 1)] == 2296) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x279794 => _0x279794.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x3f8754 => _0x3f8754.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0x15898a = await this.useSkill(32076);
            while (_0x15898a.result.result == 0) {
              _0x15898a = await this.useSkill(32071);
            }
            if (_0x15898a.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[1]));
            }
          }
          if (_0x3c88d0[_0x5d5372.findIndex(_0x1b3fe3 => _0x1b3fe3.status !== 1)] == 2297) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x108f02 => _0x108f02.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x5b4bba => _0x5b4bba.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0x3dff96 = await this.useSkill(41077);
            if (_0x3dff96.result.result == 0) {
              _0x3dff96 = await this.useItem(1003);
            }
            if (_0x3dff96.result.result == 0) {
              _0x3dff96 = await this.useSkill(32071);
            }
            if (_0x3dff96.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[_0x5d5372.findIndex(_0x5acd3d => _0x5acd3d.status !== 1)]));
            }
          }
          if (_0x3c88d0[_0x5d5372.findIndex(_0x1e074d => _0x1e074d.status !== 1)] == 2298) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x28da75 => _0x28da75.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x189004 => _0x189004.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0x132cce = await this.useSkill(32076);
            while (_0x132cce.result.result == 0) {
              _0x132cce = await this.useSkill(41805);
            }
            if (_0x132cce.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[_0x5d5372.findIndex(_0x588e46 => _0x588e46.status !== 1)]));
            }
          }
          if (_0x3c88d0[_0x5d5372.findIndex(_0x572365 => _0x572365.status !== 1)] == 2299) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x511fba => _0x511fba.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x178440 => _0x178440.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0x3015f9 = await this.useSkill(41077);
            while (_0x3015f9.result.result == 0) {
              _0x3015f9 = await this.useSkill(32076);
            }
            if (_0x3015f9.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[_0x5d5372.findIndex(_0x1aa342 => _0x1aa342.status !== 1)]));
            }
          }
          if (_0x3c88d0[_0x5d5372.findIndex(_0x3eeaf8 => _0x3eeaf8.status !== 1)] == 2300) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x18fa71 => _0x18fa71.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x3f1878 => _0x3f1878.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0xb0ec85 = await this.useSkill(41078);
            if (_0xb0ec85.result.result == 0) {
              _0xb0ec85 = await this.useSkill(32076);
            }
            if (_0xb0ec85.result.result == 0) {
              _0xb0ec85 = await this.useSkill(41805);
            }
            if (_0xb0ec85.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[_0x5d5372.findIndex(_0x255c0c => _0x255c0c.status !== 1)]));
            }
          }
          if (_0x3c88d0[_0x5d5372.findIndex(_0x37f08f => _0x37f08f.status !== 1)] == 2301) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x23a0bd => _0x23a0bd.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x5207a8 => _0x5207a8.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0x4e36f0 = await this.useSkill(41077);
            if (_0x4e36f0.result.result == 0) {
              _0x4e36f0 = await this.useSkill(41077);
            }
            if (_0x4e36f0.result.result == 0) {
              _0x4e36f0 = await this.useSkill(32075);
            }
            if (_0x4e36f0.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[_0x5d5372.findIndex(_0x1d5ef4 => _0x1d5ef4.status !== 1)]));
            }
          }
          if (_0x3c88d0[_0x5d5372.findIndex(_0x42b503 => _0x42b503.status !== 1)] == 2302) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x1b0844 => _0x1b0844.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x3e1ca8 => _0x3e1ca8.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0x10eb89 = await this.useSkill(41078);
            for (let _0x356bee = 0; _0x356bee < 5; _0x356bee++) {
              if (_0x10eb89.result.result == 0) {
                _0x10eb89 = await this.useSkill(41076);
              }
              if (_0x10eb89.result.result == 0) {
                _0x10eb89 = await this.useSkill(41078);
              }
            }
            if (_0x10eb89.result.result == 0) {
              _0x10eb89 = await this.useSkill(32076);
            }
            if (_0x10eb89.result.result == 0) {
              _0x10eb89 = await this.useSkill(32075);
            }
            if (_0x10eb89.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[_0x5d5372.findIndex(_0x27f090 => _0x27f090.status !== 1)]));
            }
          }
          if (_0x3c88d0[_0x5d5372.findIndex(_0x3ad377 => _0x3ad377.status !== 1)] == 2303) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x3c88d0[_0x5d5372.findIndex(_0x8e5759 => _0x8e5759.status !== 1)]],
              petList: [_0x3be5cc[_0x5d5372.findIndex(_0x5696f3 => _0x5696f3.status !== 1)]],
              times: 0
            });
            await this.initBattle();
            let _0x2ed040 = await this.useSkill(41078);
            for (let _0x270cdb = 0; _0x270cdb < 2; _0x270cdb++) {
              if (_0x2ed040.result.result == 0) {
                _0x2ed040 = await this.useSkill(41078);
              }
            }
            if (_0x2ed040.result.result == 0) {
              _0x2ed040 = await this.useSkill(32075);
            }
            if (_0x2ed040.result.result == 0) {
              _0x2ed040 = await this.useSkill(32071);
            }
            if (_0x2ed040.result.result == 1) {
              addGameLog("顺利通过" + xls.activityCard.getItem(_0x3c88d0[_0x5d5372.findIndex(_0x1ae37d => _0x1ae37d.status !== 1)]));
            }
          }
        }
      } else {
        addGameLog("雷诺模拟试炼结束");
        break;
      }
    }
    if (!xls.activityExchange.hasLoaded) {
      xls.activityExchange.load();
    }
    if (!xls.activityTaskReset.hasLoaded) {
      xls.activityTaskReset.load(function () {});
    }
    let _0x46fba0 = xls.activityExchange.getItems().filter(function (_0x50d214) {
      return _0x50d214.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x50d214.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x50d214.name.indexOf("雷锘活动头衔奖励") !== -1;
    });
    for (let _0x257f93 = 0; _0x257f93 < _0x46fba0.length; _0x257f93++) {
      if (ExchangeUtils.GetExchangeState(_0x46fba0[_0x257f93]) == 1) {
        const _0x5c9933 = {
          id: _0x46fba0[_0x257f93].id,
          selectIndex: 0,
          subDropIdList: []
        };
        await this.send_message("cs_exchange_activity_reward", _0x5c9933);
      } else if (ExchangeUtils.GetExchangeState(_0x46fba0[_0x257f93]) == -1) {
        addGameLog(_0x46fba0[_0x257f93].name + "已领取");
      } else if (ExchangeUtils.GetExchangeState(_0x46fba0[_0x257f93]) == 0) {
        addGameLog(_0x46fba0[_0x257f93].name + "未完成");
      }
    }
    let _0x33fa51 = xls.activityTaskReset.getItems().filter(function (_0x15e0ca) {
      return _0x15e0ca.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x15e0ca.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x15e0ca.name.indexOf("雷锘产出活动") !== -1;
    });
    for (let _0x166c3c = 0; _0x166c3c < _0x33fa51.length; _0x166c3c++) {
      if (TaskUtils.GetRestTaskState(_0x33fa51[_0x166c3c]) == 1) {
        addGameLog("领取" + _0x33fa51[_0x166c3c].task);
        const _0x1bcd57 = {
          carnivalId: _0x33fa51[_0x166c3c].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x1bcd57);
      } else if (TaskUtils.GetRestTaskState(_0x33fa51[_0x166c3c]) == 0) {
        addGameLog(_0x33fa51[_0x166c3c].task + "未完成");
      } else {
        addGameLog(_0x33fa51[_0x166c3c].task + "已完成");
      }
    }
    addGameLog("雷锘副本完成");
    this.stop();
  }
  async dispatchSelfPet(_0x46244e, _0xb30d34, _0x54859) {
    let _0xdf7cc0 = [];
    let _0x3e4d0f = [];
    for (let _0xdaa287 = 0; _0xdaa287 < _0xb30d34.length; _0xdaa287++) {
      _0xdf7cc0.push(_0xb30d34[_0xdaa287]);
      _0x3e4d0f.push(petConfig.SkillConfig.getDef(_0xb30d34[_0xdaa287]).name);
    }
    const _0x525175 = {
      skills: _0xdf7cc0,
      features: _0x54859
    };
    let _0x452587 = await getGoalPets([_0x525175]);
    if (_0x452587) {
      addGameLog("精灵背包中携有" + _0x46244e + "+" + _0x3e4d0f.join("+"));
      return _0x452587;
    } else {
      addGameLog("背包 没有" + _0x46244e + "+" + _0x3e4d0f.join("+"));
      return false;
    }
  }
  async darkwarbattleui() {
    const _0x2d84f8 = {
      zZjvp: "width",
      mYNOa: function (_0x3262a1, _0x3fafe7) {
        return _0x3262a1 + _0x3fafe7;
      },
      lJylO: "nick",
      SXJwc: "talent",
      WPnDD: "pet",
      CjOMJ: function (_0x4d8d92, _0x28256c) {
        return _0x4d8d92 === _0x28256c;
      },
      IOfKe: function (_0x5f4e4a, _0x420280) {
        return _0x5f4e4a < _0x420280;
      },
      FfpfN: function (_0x214008, _0x202d00) {
        return _0x214008 + _0x202d00;
      },
      ZBbDc: function (_0x3fb9b7, _0x8edc5) {
        return _0x3fb9b7 * _0x8edc5;
      },
      IOpqh: "center"
    };
    let _0x424814 = function (_0x4fd1c3) {
      const _0x185fbf = {
        XUykM: "source",
        RvIQz: "_Image1",
        GQGRm: _0x2d84f8.zZjvp,
        DJldq: "height"
      };
      function _0x314c60() {
        _0x4fd1c3.call(this);
        this.skinParts = [];
        this.elementsContent = [this._Image1_i()];
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", _0x185fbf.XUykM, "personal_center_setup_checkbox_up_png"), new eui.SetProperty(_0x185fbf.RvIQz, "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 20), new eui.SetProperty(_0x185fbf.RvIQz, "height", 21)]), new eui.State("down", [new eui.SetProperty("_Image1", _0x185fbf.XUykM, "personal_center_setup_checkbox_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 1), new eui.SetProperty("_Image1", _0x185fbf.GQGRm, 20), new eui.SetProperty("_Image1", _0x185fbf.DJldq, 20)]), new eui.State("disabled", [])];
      }
      __extends(_0x314c60, _0x4fd1c3);
      var _0x461ced = _0x314c60.prototype;
      _0x461ced._Image1_i = function () {
        var _0x3801bc = new eui.Image();
        this._Image1 = _0x3801bc;
        return _0x3801bc;
      };
      return _0x314c60;
    }(eui.Skin);
    super.start();
    let _0x40989e = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x39f545 = new alert.SimpleAlert();
      _0x39f545.initialize(alert.ALERT_ROOT);
      _0x39f545.effectTrigger.showEffect = alert.SHOW_EFFECT;
      _0x39f545.effectTrigger.hideEffect = alert.HIDE_EFFECT;
      _0x40989e.alertWin = _0x39f545;
      _0x39f545._minHeight = 400;
      _0x39f545.height = 400;
      _0x39f545.applicationWidth = 460;
      var _0xac36bc = new eui.Label();
      _0xac36bc.lineSpacing = 3;
      _0xac36bc.size = 16;
      _0xac36bc.text = "暗卡";
      _0xac36bc.textColor = 16777215;
      _0xac36bc.touchEnabled = false;
      _0xac36bc.x = _0x39f545.width / 2 - _0xac36bc.width / 2;
      _0xac36bc.y = _0x39f545.height / 16;
      _0x39f545.addChild(_0xac36bc);
      var _0x2b897b = new eui.Label();
      _0x2b897b.lineSpacing = 3;
      _0x2b897b.size = 16;
      _0x2b897b.text = "注意:";
      _0x2b897b.textColor = 16776960;
      _0x2b897b.touchEnabled = false;
      _0x2b897b.x = 30;
      _0x2b897b.y = _0x39f545.height / 20;
      _0x39f545.addChild(_0x2b897b);
      let _0x21a86f = new eui.Label();
      _0x21a86f.lineSpacing = 3;
      _0x21a86f.size = 16;
      _0x21a86f.text = "1.哈肯撒需要堕落龙力跟幕夜龙王击";
      _0x21a86f.textColor = 16777215;
      _0x21a86f.touchEnabled = false;
      _0x21a86f.x = _0x39f545.width / 2 - _0x21a86f.width / 2;
      _0x21a86f.y = _0x2b897b.y + 10 + _0x2b897b.height;
      _0x39f545.addChild(_0x21a86f);
      let _0x5b1981 = new eui.Label();
      _0x5b1981.lineSpacing = 3;
      _0x5b1981.size = 16;
      _0x5b1981.text = "2.长老需要引爆大招";
      _0x5b1981.textColor = 16777215;
      _0x5b1981.touchEnabled = false;
      _0x5b1981.x = _0x39f545.width / 2 - _0x21a86f.width / 2;
      _0x5b1981.y = _0x21a86f.y + 10 + _0x21a86f.height;
      _0x39f545.addChild(_0x5b1981);
      let _0x527c3b = new eui.Label();
      _0x527c3b.lineSpacing = 3;
      _0x527c3b.size = 16;
      _0x527c3b.text = "3.神秘狗需要灵神归寂和万象归元";
      _0x527c3b.textColor = 16777215;
      _0x527c3b.touchEnabled = false;
      _0x527c3b.x = _0x39f545.width / 2 - _0x21a86f.width / 2;
      _0x527c3b.y = _0x5b1981.y + 10 + _0x5b1981.height;
      _0x39f545.addChild(_0x527c3b);
      let _0x400c95 = new eui.Label();
      _0x400c95.lineSpacing = 3;
      _0x400c95.size = 16;
      _0x400c95.text = "4.水次没有致命一击遇到5星布鲁克克打不过";
      _0x400c95.textColor = 16777215;
      _0x400c95.touchEnabled = false;
      _0x400c95.x = _0x39f545.width / 2 - _0x21a86f.width / 2;
      _0x400c95.y = _0x527c3b.y + 10 + _0x527c3b.height;
      _0x39f545.addChild(_0x400c95);
      let _0x25ecdf = new eui.Label();
      _0x25ecdf.lineSpacing = 3;
      _0x25ecdf.size = 16;
      _0x25ecdf.text = "5.蒂朵遇到5星布鲁克克会停止";
      _0x25ecdf.textColor = 16777215;
      _0x25ecdf.touchEnabled = false;
      _0x25ecdf.x = _0x39f545.width / 2 - _0x21a86f.width / 2;
      _0x25ecdf.y = _0x400c95.y + 10 + _0x400c95.height;
      _0x39f545.addChild(_0x25ecdf);
      let _0x25792d = new eui.RadioButton();
      _0x25792d.skinName = _0x424814;
      _0x25792d.x = 40;
      _0x25792d.y = _0x25ecdf.y + _0x25ecdf.height + 10;
      _0x25792d.selected = true;
      if (localStorage.getItem("1") != null) {
        _0x25792d.selected = JSON.parse(localStorage.getItem("1"));
      }
      _0x25792d.index = 0;
      _0x39f545.addChild(_0x25792d);
      let _0x2aed5d = new eui.Label();
      _0x2aed5d.lineSpacing = 3;
      _0x2aed5d.size = 20;
      _0x2aed5d.text = "哈肯萨";
      _0x2aed5d.textColor = 16777215;
      _0x2aed5d.touchEnabled = false;
      _0x2aed5d.x = _0x25792d.width + _0x25792d.x + 10;
      _0x2aed5d.y = _0x25792d.y;
      _0x39f545.addChild(_0x2aed5d);
      let _0x87e0b9 = new eui.RadioButton();
      _0x87e0b9.skinName = _0x424814;
      _0x87e0b9.x = _0x2aed5d.x + _0x2aed5d.width + 80;
      _0x87e0b9.y = _0x25792d.y;
      _0x87e0b9.selected = false;
      if (localStorage.getItem("2") != null) {
        _0x87e0b9.selected = JSON.parse(localStorage.getItem("2"));
      }
      _0x87e0b9.index = 0;
      _0x39f545.addChild(_0x87e0b9);
      let _0xa5408c = new eui.Label();
      _0xa5408c.lineSpacing = 3;
      _0xa5408c.size = 20;
      _0xa5408c.text = "长老";
      _0xa5408c.textColor = 16777215;
      _0xa5408c.touchEnabled = false;
      _0xa5408c.x = _0x87e0b9.width + _0x87e0b9.x + 10;
      _0xa5408c.y = _0x25792d.y;
      _0x39f545.addChild(_0xa5408c);
      let _0x26f283 = new eui.RadioButton();
      _0x26f283.skinName = _0x424814;
      _0x26f283.x = 40;
      _0x26f283.y = _0x25ecdf.y + _0x25ecdf.height + 50;
      _0x26f283.selected = false;
      if (localStorage.getItem("3") != null) {
        _0x26f283.selected = JSON.parse(localStorage.getItem("3"));
      }
      _0x26f283.index = 0;
      _0x39f545.addChild(_0x26f283);
      let _0x46d201 = new eui.Label();
      _0x46d201.lineSpacing = 3;
      _0x46d201.size = 20;
      _0x46d201.text = "神秘狗";
      _0x46d201.textColor = 16777215;
      _0x46d201.touchEnabled = false;
      _0x46d201.x = _0x25792d.width + _0x25792d.x + 10;
      _0x46d201.y = _0x25ecdf.y + _0x25ecdf.height + 50;
      _0x39f545.addChild(_0x46d201);
      let _0x451a66 = new eui.RadioButton();
      _0x451a66.skinName = _0x424814;
      _0x451a66.x = _0x2aed5d.x + _0x2aed5d.width + 80;
      _0x451a66.y = _0x25ecdf.y + _0x25ecdf.height + 50;
      _0x451a66.selected = false;
      if (localStorage.getItem("4") != null) {
        _0x451a66.selected = JSON.parse(localStorage.getItem("4"));
      }
      _0x451a66.index = 0;
      _0x39f545.addChild(_0x451a66);
      let _0x22d303 = new eui.Label();
      _0x22d303.lineSpacing = 3;
      _0x22d303.size = 20;
      _0x22d303.text = "水次";
      _0x22d303.textColor = 16777215;
      _0x22d303.touchEnabled = false;
      _0x22d303.x = _0x451a66.width + _0x451a66.x + 10;
      _0x22d303.y = _0x25ecdf.y + _0x25ecdf.height + 50;
      _0x39f545.addChild(_0x22d303);
      let _0x3a5c21 = new eui.RadioButton();
      _0x3a5c21.skinName = _0x424814;
      _0x3a5c21.x = 40;
      _0x3a5c21.y = _0x25ecdf.y + _0x25ecdf.height + 90;
      _0x3a5c21.selected = false;
      if (localStorage.getItem("5") != null) {
        _0x3a5c21.selected = JSON.parse(localStorage.getItem("5"));
      }
      _0x3a5c21.index = 0;
      _0x39f545.addChild(_0x3a5c21);
      let _0x2baff3 = new eui.Label();
      _0x2baff3.lineSpacing = 3;
      _0x2baff3.size = 20;
      _0x2baff3.text = "蒂朵";
      _0x2baff3.textColor = 16777215;
      _0x2baff3.touchEnabled = false;
      _0x2baff3.x = _0x25792d.width + _0x25792d.x + 10;
      _0x2baff3.y = _0x25ecdf.y + _0x25ecdf.height + 90;
      _0x39f545.addChild(_0x2baff3);
      _0x39f545.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x40989e.stop();
      }, function () {
        localStorage.setItem("1", _0x25792d.selected);
        localStorage.setItem("2", _0x87e0b9.selected);
        localStorage.setItem("3", _0x26f283.selected);
        localStorage.setItem("4", _0x451a66.selected);
        localStorage.setItem("5", _0x3a5c21.selected);
        if (_0x25792d.selected) {
          _0x40989e.darkwarbattle1();
        }
        if (_0x87e0b9.selected) {
          _0x40989e.darkwarbattle2();
        }
        if (_0x26f283.selected) {
          _0x40989e.darkwarbattle3();
        }
        if (_0x451a66.selected) {
          _0x40989e.darkwarbattle4();
        }
        if (_0x3a5c21.selected) {
          _0x40989e.darkwarbattle5();
        }
      }], null);
      _0x39f545.showAlert();
    });
  }
  async darkwarbattle1() {
    while (true) {
      let _0x4b7766 = await this.send_message("cs_super_boss", {
        fun: 1,
        isSuper: 0,
        getTime: [],
        activityCard: 0,
        activityType: 2,
        friendUid: 0,
        bossLevel: 0
      });
      if (MFC.userInfo.curEnergy < 5) {
        addGameLog("电池不足进行对战");
        break;
      } else {
        await wait(500);
        logger("获取当前boss列表" + _0x4b7766.bossInfo);
        if (_0x4b7766.bossInfo.length == 0) {
          logger("当前未发现boss");
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        } else {
          logger("当前发现boss,数量为" + _0x4b7766.bossInfo.length);
          logger("当前发现boss" + _0x4b7766.bossInfo[0].activityCard);
          let _0x5bf116 = PetManager.getInstance().getAllPets().map(_0xcb24e5 => {
            if (_0xcb24e5.skills.indexOf(14816) != -1 && _0xcb24e5.skills.indexOf(22615) != -1) {
              return _0xcb24e5;
            }
          }).filter(_0xeb3567 => _0xeb3567 !== undefined)[0];
          if (_0x5bf116 == undefined) {
            addGameLog("背包哈肯技能不符合");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x5bf116.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              activityCard: _0x4b7766.bossInfo[0].activityCard,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x5bc8c2 = await this.waitEvent("sc_battle_notify_load_resource");
            _0x5bc8c2.gameBody.splice(0, _0x5bc8c2.gameBody.length);
            await this.send_message("cs_online_load_resource", {
              groupId: "",
              battleType: 0
            });
            await wait(300);
            await this.send_message("cs_online_player_operation", {
              opType: 5,
              data: null,
              groupId: ""
            });
            _0x5bc8c2 = await this.waitEvent("sc_battle_notify_round_result");
            let _0x1106d4 = JSON.parse(_0x5bc8c2.gameBody[_0x5bc8c2.gameBody.length - 1].raw);
            _0x5bc8c2.gameBody.splice(0, _0x5bc8c2.gameBody.length);
            logger("回合开始");
            await wait(300);
            addGameLog("释放技能:" + petConfig.SkillConfig.getDef(22615).name);
            await this.send_message("cs_online_player_operation", {
              opType: 1,
              data: {
                skillID: 22615
              },
              groupId: ""
            });
            _0x5bc8c2 = await this.waitEvent("sc_battle_notify_round_result");
            _0x1106d4 = JSON.parse(_0x5bc8c2.gameBody[_0x5bc8c2.gameBody.length - 1].raw);
            _0x5bc8c2.gameBody.splice(0, _0x5bc8c2.gameBody.length);
            if (_0x1106d4.result.result == 0) {
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(14816).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 14816
                },
                groupId: ""
              });
              _0x5bc8c2 = await this.waitEvent("sc_battle_notify_round_result");
              _0x1106d4 = JSON.parse(_0x5bc8c2.gameBody[_0x5bc8c2.gameBody.length - 1].raw);
              _0x5bc8c2.gameBody.splice(0, _0x5bc8c2.gameBody.length);
            }
            await this.send_message("cs_quit_battle", {});
          }
        }
      }
    }
    addGameLog("暗卡结束");
    this.stop();
  }
  async darkwarbattle2() {
    while (true) {
      let _0x39e127 = await this.send_message("cs_super_boss", {
        fun: 1,
        isSuper: 0,
        getTime: [],
        activityCard: 0,
        activityType: 2,
        friendUid: 0,
        bossLevel: 0
      });
      if (MFC.userInfo.curEnergy < 5) {
        addGameLog("电池不足进行对战");
        break;
      } else {
        await wait(500);
        logger("获取当前boss列表" + _0x39e127.bossInfo);
        if (_0x39e127.bossInfo.length == 0) {
          logger("当前未发现boss");
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        } else {
          logger("当前发现boss,数量为" + _0x39e127.bossInfo.length);
          logger("当前发现boss" + _0x39e127.bossInfo[0].activityCard);
          let _0x74b73d = PetManager.getInstance().getAllPets().map(_0x1596a8 => {
            if (_0x1596a8.skills.indexOf(32127) != -1 && _0x1596a8.skills.indexOf(20592) != -1) {
              return _0x1596a8;
            }
          }).filter(_0x3fecfe => _0x3fecfe !== undefined)[0];
          if (_0x74b73d == undefined) {
            addGameLog("背包长老技能不符合");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x74b73d.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              activityCard: _0x39e127.bossInfo[0].activityCard,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x1e7bcb = await this.waitEvent("sc_battle_notify_load_resource");
            _0x1e7bcb.gameBody.splice(0, _0x1e7bcb.gameBody.length);
            await this.send_message("cs_online_load_resource", {
              groupId: "",
              battleType: 0
            });
            await wait(300);
            await this.send_message("cs_online_player_operation", {
              opType: 5,
              data: null,
              groupId: ""
            });
            _0x1e7bcb = await this.waitEvent("sc_battle_notify_round_result");
            let _0x444c5a = JSON.parse(_0x1e7bcb.gameBody[_0x1e7bcb.gameBody.length - 1].raw);
            _0x1e7bcb.gameBody.splice(0, _0x1e7bcb.gameBody.length);
            logger("回合开始");
            await wait(300);
            addGameLog("释放技能:" + petConfig.SkillConfig.getDef(20592).name);
            await this.send_message("cs_online_player_operation", {
              opType: 1,
              data: {
                skillID: 20592
              },
              groupId: ""
            });
            _0x1e7bcb = await this.waitEvent("sc_battle_notify_round_result");
            _0x444c5a = JSON.parse(_0x1e7bcb.gameBody[_0x1e7bcb.gameBody.length - 1].raw);
            _0x1e7bcb.gameBody.splice(0, _0x1e7bcb.gameBody.length);
            if (_0x444c5a.result.result == 0) {
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(32127).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 32127
                },
                groupId: ""
              });
              _0x1e7bcb = await this.waitEvent("sc_battle_notify_round_result");
              _0x444c5a = JSON.parse(_0x1e7bcb.gameBody[_0x1e7bcb.gameBody.length - 1].raw);
              _0x1e7bcb.gameBody.splice(0, _0x1e7bcb.gameBody.length);
            }
            await this.send_message("cs_quit_battle", {});
          }
        }
      }
    }
    addGameLog("暗卡结束");
    this.stop();
  }
  async darkwarbattle3() {
    while (true) {
      let _0x37a188 = await this.send_message("cs_super_boss", {
        fun: 1,
        isSuper: 0,
        getTime: [],
        activityCard: 0,
        activityType: 2,
        friendUid: 0,
        bossLevel: 0
      });
      if (MFC.userInfo.curEnergy < 5) {
        addGameLog("电池不足进行对战");
        break;
      } else {
        await wait(500);
        logger("获取当前boss列表" + _0x37a188.bossInfo);
        if (_0x37a188.bossInfo.length == 0) {
          logger("当前未发现boss");
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        } else {
          logger("当前发现boss,数量为" + _0x37a188.bossInfo.length);
          logger("当前发现boss" + _0x37a188.bossInfo[0].activityCard);
          let _0x39fded = PetManager.getInstance().getAllPets().map(_0x2b3c79 => {
            if (_0x2b3c79.skills.indexOf(40958) != -1 && _0x2b3c79.skills.indexOf(40957) != -1) {
              return _0x2b3c79;
            }
          }).filter(_0x2c2005 => _0x2c2005 !== undefined)[0];
          if (_0x39fded == undefined) {
            addGameLog("背包神秘狗技能不符合");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x39fded.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              activityCard: _0x37a188.bossInfo[0].activityCard,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x30023b = await this.waitEvent("sc_battle_notify_load_resource");
            _0x30023b.gameBody.splice(0, _0x30023b.gameBody.length);
            await this.send_message("cs_online_load_resource", {
              groupId: "",
              battleType: 0
            });
            await wait(300);
            await this.send_message("cs_online_player_operation", {
              opType: 5,
              data: null,
              groupId: ""
            });
            _0x30023b = await this.waitEvent("sc_battle_notify_round_result");
            let _0x48ee1c = JSON.parse(_0x30023b.gameBody[_0x30023b.gameBody.length - 1].raw);
            _0x30023b.gameBody.splice(0, _0x30023b.gameBody.length);
            logger("回合开始");
            await wait(300);
            addGameLog("释放技能:" + petConfig.SkillConfig.getDef(40958).name);
            await this.send_message("cs_online_player_operation", {
              opType: 1,
              data: {
                skillID: 40958
              },
              groupId: ""
            });
            _0x30023b = await this.waitEvent("sc_battle_notify_round_result");
            _0x48ee1c = JSON.parse(_0x30023b.gameBody[_0x30023b.gameBody.length - 1].raw);
            _0x30023b.gameBody.splice(0, _0x30023b.gameBody.length);
            while (_0x48ee1c.result.result == 0) {
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(40957).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 40957
                },
                groupId: ""
              });
              _0x30023b = await this.waitEvent("sc_battle_notify_round_result");
              _0x48ee1c = JSON.parse(_0x30023b.gameBody[_0x30023b.gameBody.length - 1].raw);
              _0x30023b.gameBody.splice(0, _0x30023b.gameBody.length);
              if (_0x48ee1c.result.roundNum > 6) {
                break;
              }
            }
          }
        }
      }
    }
    addGameLog("暗卡结束");
    this.stop();
  }
  async darkwarbattle4() {
    while (true) {
      let _0x23364d = await this.send_message("cs_super_boss", {
        fun: 1,
        isSuper: 0,
        getTime: [],
        activityCard: 0,
        activityType: 2,
        friendUid: 0,
        bossLevel: 0
      });
      if (MFC.userInfo.curEnergy < 5) {
        addGameLog("电池不足进行对战");
        break;
      } else {
        await wait(500);
        logger("获取当前boss列表" + _0x23364d.bossInfo);
        if (_0x23364d.bossInfo.length == 0) {
          logger("当前未发现boss");
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        } else {
          logger("当前发现boss,数量为" + _0x23364d.bossInfo.length);
          if (xls.activityCard.getItem(_0x23364d.bossInfo[0].activityCard).bossID == 2750) {
            addGameLog("此关卡需要致命一击，水次没有引爆");
            break;
          } else {
            let _0x4b2154 = PetManager.getInstance().getAllPets().map(_0x475eb4 => {
              if (_0x475eb4.skills.indexOf(32529) != -1) {
                return _0x475eb4;
              }
            }).filter(_0x203d24 => _0x203d24 !== undefined)[0];
            if (_0x4b2154 == undefined) {
              addGameLog("背包水次技能不符合");
              break;
            } else {
              await this.send_message("cs_super_boss", {
                fun: 3,
                isSuper: 0,
                getTime: [_0x4b2154.getTime, PetManager.getInstance().getAllPets()[0].getTime],
                activityCard: _0x23364d.bossInfo[0].activityCard,
                activityType: 2,
                friendUid: 0,
                bossLevel: 0
              });
              let _0x5df21c = await this.waitEvent("sc_battle_notify_load_resource");
              _0x5df21c.gameBody.splice(0, _0x5df21c.gameBody.length);
              await this.send_message("cs_online_load_resource", {
                groupId: "",
                battleType: 0
              });
              await wait(300);
              await this.send_message("cs_online_player_operation", {
                opType: 5,
                data: null,
                groupId: ""
              });
              _0x5df21c = await this.waitEvent("sc_battle_notify_round_result");
              let _0x4e9a09 = JSON.parse(_0x5df21c.gameBody[_0x5df21c.gameBody.length - 1].raw);
              _0x5df21c.gameBody.splice(0, _0x5df21c.gameBody.length);
              logger("回合开始");
              await wait(300);
              while (_0x4e9a09.result.result == 0) {
                addGameLog("释放技能:" + petConfig.SkillConfig.getDef(32529).name);
                await this.send_message("cs_online_player_operation", {
                  opType: 1,
                  data: {
                    skillID: 32529
                  },
                  groupId: ""
                });
                _0x5df21c = await this.waitEvent("sc_battle_notify_round_result");
                _0x4e9a09 = JSON.parse(_0x5df21c.gameBody[_0x5df21c.gameBody.length - 1].raw);
                _0x5df21c.gameBody.splice(0, _0x5df21c.gameBody.length);
              }
              await this.send_message("cs_quit_battle", {});
            }
          }
        }
      }
    }
    addGameLog("暗卡结束");
    this.stop();
  }
  async darkwarbattle5() {
    while (true) {
      let _0x230cd5 = await this.send_message("cs_super_boss", {
        fun: 1,
        isSuper: 0,
        getTime: [],
        activityCard: 0,
        activityType: 2,
        friendUid: 0,
        bossLevel: 0
      });
      if (MFC.userInfo.curEnergy < 5) {
        addGameLog("电池不足进行对战");
        break;
      } else {
        await wait(500);
        logger("获取当前boss列表" + _0x230cd5.bossInfo);
        if (_0x230cd5.bossInfo.length == 0) {
          logger("当前未发现boss");
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        } else {
          logger("当前发现boss,数量为" + _0x230cd5.bossInfo.length);
          let _0x92f9a2 = PetManager.getInstance().getAllPets().map(_0x2ff97f => {
            if (_0x2ff97f.skills.indexOf(100604) != -1) {
              return _0x2ff97f;
            }
          }).filter(_0x1c9473 => _0x1c9473 !== undefined)[0];
          if (_0x92f9a2 == undefined) {
            addGameLog("背包蒂朵技能不符合");
            break;
          } else {
            let _0x30067c = PetManager.getInstance().getAllPets().map(_0x203a9f => {
              if (_0x203a9f.skills.indexOf(10630) != -1 || _0x203a9f.skills.indexOf(100023) != -1) {
                return _0x203a9f;
              }
            }).filter(_0x4f46d5 => _0x4f46d5 !== undefined).sort((_0x113d08, _0x1c84b4) => _0x1c84b4.featureId - _0x113d08.featureId)[0];
            if (_0x30067c == undefined) {} else if (xls.activityCard.getItem(_0x230cd5.bossInfo[0].activityCard).bossID == 2750) {
              addGameLog("此关卡需要致命一击");
              break;
            } else {
              await this.send_message("cs_super_boss", {
                fun: 3,
                isSuper: 0,
                getTime: [_0x92f9a2.getTime, _0x30067c.getTime, PetManager.getInstance().getAllPets()[0].getTime],
                activityCard: _0x230cd5.bossInfo[0].activityCard,
                activityType: 2,
                friendUid: 0,
                bossLevel: 0
              });
              let _0x1b0639 = await this.waitEvent("sc_battle_notify_load_resource");
              _0x1b0639.gameBody.splice(0, _0x1b0639.gameBody.length);
              await this.send_message("cs_online_load_resource", {
                groupId: "",
                battleType: 0
              });
              await wait(300);
              await this.send_message("cs_online_player_operation", {
                opType: 5,
                data: null,
                groupId: ""
              });
              _0x1b0639 = await this.waitEvent("sc_battle_notify_round_result");
              let _0x28a40d = JSON.parse(_0x1b0639.gameBody[_0x1b0639.gameBody.length - 1].raw);
              _0x1b0639.gameBody.splice(0, _0x1b0639.gameBody.length);
              logger("回合开始");
              await wait(300);
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(100604).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 100604
                },
                groupId: ""
              });
              _0x1b0639 = await this.waitEvent("sc_battle_notify_round_result");
              _0x28a40d = JSON.parse(_0x1b0639.gameBody[_0x1b0639.gameBody.length - 1].raw);
              _0x1b0639.gameBody.splice(0, _0x1b0639.gameBody.length);
              if (_0x28a40d.result.result == 0) {
                if (_0x28a40d.result.playerInfos[0].uid == MFC.userInfo.uid) {
                  if (_0x28a40d.result.playerInfos[0].nextRoundOP == 3) {
                    await this.send_message("cs_quit_battle", {});
                  } else {
                    await this.send_message("cs_online_player_operation", {
                      data: {
                        petIndex: 1
                      },
                      groupId: "",
                      opType: 2
                    });
                    addGameLog("切换精灵");
                    if (_0x30067c.skills.indexOf(10630) != -1) {
                      addGameLog("释放技能:" + petConfig.SkillConfig.getDef(10630).name);
                      await this.send_message("cs_online_player_operation", {
                        opType: 1,
                        data: {
                          skillID: 10630
                        },
                        groupId: ""
                      });
                    }
                    if (_0x30067c.skills.indexOf(100023) != -1) {
                      addGameLog("释放技能:" + petConfig.SkillConfig.getDef(100023).name);
                      await this.send_message("cs_online_player_operation", {
                        opType: 1,
                        data: {
                          skillID: 100023
                        },
                        groupId: ""
                      });
                    }
                    _0x1b0639 = await this.waitEvent("sc_battle_notify_round_result");
                    _0x28a40d = JSON.parse(_0x1b0639.gameBody[_0x1b0639.gameBody.length - 1].raw);
                    _0x1b0639.gameBody.splice(0, _0x1b0639.gameBody.length);
                    await this.send_message("cs_quit_battle", {});
                  }
                } else if (_0x28a40d.result.playerInfos[1].nextRoundOP == 3) {
                  await this.send_message("cs_quit_battle", {});
                } else {
                  await this.send_message("cs_online_player_operation", {
                    data: {
                      petIndex: 1
                    },
                    groupId: "",
                    opType: 2
                  });
                  addGameLog("切换精灵");
                  if (_0x30067c.skills.indexOf(10630) != -1) {
                    addGameLog("释放技能:" + petConfig.SkillConfig.getDef(10630).name);
                    await this.send_message("cs_online_player_operation", {
                      opType: 1,
                      data: {
                        skillID: 10630
                      },
                      groupId: ""
                    });
                  }
                  if (_0x30067c.skills.indexOf(100023) != -1) {
                    addGameLog("释放技能:" + petConfig.SkillConfig.getDef(100023).name);
                    await this.send_message("cs_online_player_operation", {
                      opType: 1,
                      data: {
                        skillID: 100023
                      },
                      groupId: ""
                    });
                  }
                  _0x1b0639 = await this.waitEvent("sc_battle_notify_round_result");
                  _0x28a40d = JSON.parse(_0x1b0639.gameBody[_0x1b0639.gameBody.length - 1].raw);
                  _0x1b0639.gameBody.splice(0, _0x1b0639.gameBody.length);
                  await this.send_message("cs_quit_battle", {});
                }
              }
            }
          }
        }
      }
    }
    addGameLog("暗卡结束");
    this.stop();
  }
  async darkwarbattle6() {
    let _0x38e412 = [];
    while (true) {
      let _0x17a6a7 = await this.send_message("cs_super_boss", {
        fun: 1,
        isSuper: 0,
        getTime: [],
        activityCard: 0,
        activityType: 2,
        friendUid: 0,
        bossLevel: 0
      });
      if (MFC.userInfo.curEnergy < 5) {
        addGameLog("电池不足进行对战");
        break;
      } else {
        await wait(500);
        logger("获取当前boss列表" + _0x17a6a7.bossInfo);
        if (_0x17a6a7.bossInfo.length == 0) {
          logger("当前未发现boss");
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        }
        for (let _0x49a8a5 = 0; _0x49a8a5 < _0x17a6a7.bossInfo.length; _0x49a8a5++) {
          if (_0x17a6a7.bossInfo[_0x49a8a5].activityCard >= 1737 && _0x17a6a7.bossInfo[_0x49a8a5].activityCard <= 1791) {
            logger("当前发现boss,数量为" + _0x17a6a7.bossInfo.length);
            _0x38e412[_0x49a8a5] = _0x17a6a7.bossInfo[_0x49a8a5].activityCard;
          }
        }
        if (_0x38e412.filter(_0x2a8e9e => _0x2a8e9e !== undefined).length !== 0) {
          logger("低星数量" + _0x38e412.filter(_0x50e4fa => _0x50e4fa !== undefined).length);
          logger("低星" + _0x38e412.filter(_0x4edc3c => _0x4edc3c !== undefined)[0]);
          let _0x4bff2d = PetManager.getInstance().getAllPets().map(_0x50999c => {
            if (_0x50999c.skills.indexOf(11022) != -1) {
              return _0x50999c;
            }
          }).filter(_0x2d7459 => _0x2d7459 !== undefined)[0];
          if (_0x4bff2d == undefined) {
            addGameLog("背包没有绝命火焰");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x4bff2d.getTime, PetManager.getInstance().getAllPets()[1].getTime],
              activityCard: _0x38e412.filter(_0x71f423 => _0x71f423 !== undefined)[0],
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x4c2b5a = await this.waitEvent("sc_battle_notify_load_resource");
            _0x4c2b5a.gameBody.splice(0, _0x4c2b5a.gameBody.length);
            await this.send_message("cs_online_load_resource", {
              groupId: "",
              battleType: 0
            });
            await wait(300);
            await this.send_message("cs_online_player_operation", {
              opType: 5,
              data: null,
              groupId: ""
            });
            _0x4c2b5a = await this.waitEvent("sc_battle_notify_round_result");
            let _0x16ad67 = JSON.parse(_0x4c2b5a.gameBody[_0x4c2b5a.gameBody.length - 1].raw);
            _0x4c2b5a.gameBody.splice(0, _0x4c2b5a.gameBody.length);
            logger("回合开始");
            await wait(300);
            if (_0x16ad67.result.result == 0) {
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(11022).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 11022
                },
                groupId: ""
              });
              _0x4c2b5a = await this.waitEvent("sc_battle_notify_round_result");
              _0x16ad67 = JSON.parse(_0x4c2b5a.gameBody[_0x4c2b5a.gameBody.length - 1].raw);
              _0x4c2b5a.gameBody.splice(0, _0x4c2b5a.gameBody.length);
              if (_0x16ad67.result.result == 1) {
                addGameLog("击败boss");
              }
              if (_0x16ad67.result.result == 2) {
                addGameLog("逃跑");
              }
              await this.send_message("cs_quit_battle", {});
            }
          }
        } else if (_0x17a6a7.bossInfo.length !== 3 && _0x38e412.filter(_0x3f54bb => _0x3f54bb !== undefined).length == 0) {
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        } else {
          addGameLog("全为高星Boss");
          break;
        }
      }
    }
    addGameLog("暗卡结束");
    this.stop();
  }
  async darkwarbattle7() {
    let _0x102715 = [];
    while (true) {
      let _0x3ed693 = await this.send_message("cs_super_boss", {
        fun: 1,
        isSuper: 0,
        getTime: [],
        activityCard: 0,
        activityType: 2,
        friendUid: 0,
        bossLevel: 0
      });
      if (MFC.userInfo.curEnergy < 5) {
        addGameLog("电池不足进行对战");
        break;
      } else {
        await wait(500);
        logger("获取当前boss列表" + _0x3ed693.bossInfo);
        if (_0x3ed693.bossInfo.length == 0) {
          logger("当前未发现boss");
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        }
        for (let _0x1d661e = 0; _0x1d661e < _0x3ed693.bossInfo.length; _0x1d661e++) {
          if (_0x3ed693.bossInfo[_0x1d661e].activityCard !== 1807 && _0x3ed693.bossInfo[_0x1d661e].activityCard !== 1812 && _0x3ed693.bossInfo[_0x1d661e].activityCard !== 1813 && _0x3ed693.bossInfo[_0x1d661e].activityCard !== 1815 && _0x3ed693.bossInfo[_0x1d661e].activityCard !== 1817) {
            logger("当前发现boss,数量为" + _0x3ed693.bossInfo.length);
            _0x102715[_0x1d661e] = _0x3ed693.bossInfo[_0x1d661e].activityCard;
          }
        }
        if (_0x102715.filter(_0x372bf9 => _0x372bf9 !== undefined).length !== 0) {
          logger("boss数量" + _0x102715.filter(_0x14a108 => _0x14a108 !== undefined).length);
          logger("boss" + _0x102715.filter(_0x4f4eac => _0x4f4eac !== undefined)[0]);
          let _0x3f5533 = PetManager.getInstance().getAllPets().map(_0x42ce0b => {
            if (_0x42ce0b.skills.indexOf(23506) != -1 && _0x42ce0b.skills.indexOf(23505) != -1) {
              return _0x42ce0b;
            }
          }).filter(_0x1c88f9 => _0x1c88f9 !== undefined)[0];
          if (_0x3f5533 == undefined) {
            addGameLog("背包缪斯没有苍月或皎月");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x3f5533.getTime, PetManager.getInstance().getAllPets()[1].getTime],
              activityCard: _0x102715.filter(_0x59009d => _0x59009d !== undefined)[0],
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x1d1b5d = await this.waitEvent("sc_battle_notify_load_resource");
            _0x1d1b5d.gameBody.splice(0, _0x1d1b5d.gameBody.length);
            await this.send_message("cs_online_load_resource", {
              groupId: "",
              battleType: 0
            });
            await wait(300);
            await this.send_message("cs_online_player_operation", {
              opType: 5,
              data: null,
              groupId: ""
            });
            _0x1d1b5d = await this.waitEvent("sc_battle_notify_round_result");
            let _0x38b1b3 = JSON.parse(_0x1d1b5d.gameBody[_0x1d1b5d.gameBody.length - 1].raw);
            _0x1d1b5d.gameBody.splice(0, _0x1d1b5d.gameBody.length);
            if (_0x38b1b3.result.result == 0) {
              for (let _0x19f8d5 = 0; _0x19f8d5 < 3; _0x19f8d5++) {
                addGameLog("释放技能:" + petConfig.SkillConfig.getDef(23505).name);
                await this.send_message("cs_online_player_operation", {
                  opType: 1,
                  data: {
                    skillID: 23505
                  },
                  groupId: ""
                });
                _0x1d1b5d = await this.waitEvent("sc_battle_notify_round_result");
                _0x38b1b3 = JSON.parse(_0x1d1b5d.gameBody[_0x1d1b5d.gameBody.length - 1].raw);
                _0x1d1b5d.gameBody.splice(0, _0x1d1b5d.gameBody.length);
                if (_0x38b1b3.result.result !== 0) {
                  break;
                }
              }
              while (_0x38b1b3.result.result == 0) {
                addGameLog("释放技能:" + petConfig.SkillConfig.getDef(23506).name);
                await this.send_message("cs_online_player_operation", {
                  opType: 1,
                  data: {
                    skillID: 23506
                  },
                  groupId: ""
                });
                _0x1d1b5d = await this.waitEvent("sc_battle_notify_round_result");
                _0x38b1b3 = JSON.parse(_0x1d1b5d.gameBody[_0x1d1b5d.gameBody.length - 1].raw);
                _0x1d1b5d.gameBody.splice(0, _0x1d1b5d.gameBody.length);
              }
            }
          }
        } else if (_0x3ed693.bossInfo.length !== 3 && _0x102715.filter(_0x3119f2 => _0x3119f2 !== undefined).length == 0) {
          if (ItemManager.getInstance().getItemNumById(100893) < 2) {
            addGameLog("光明远征不足2");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 2,
              isSuper: 0,
              getTime: [],
              activityCard: 0,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
          }
        } else {
          addGameLog("剩余是打不过的Boss");
          break;
        }
      }
    }
    addGameLog("暗卡结束");
    this.stop();
  }
}
class LimitActivity extends SuperTask {
  constructor() {
    super();
    this.nowName = "限时活动";
    this.skillData = {
      光闪击: 10630,
      光闪击Plus: 100023
    };
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_notify_change_pet"
    }, {
      watchEventName: "sc_change_default_team"
    }, {
      watchEventName: "sc_notify_item_change"
    }, {
      watchEventName: "sc_notify_rouge_change"
    }, {
      watchEventName: "sc_notify_rouge_attr"
    }, {
      watchEventName: "sc_notify_rouge_ctrl"
    }, {
      watchEventName: "sc_notify_nv1_fight_boss_start"
    }, {
      watchEventName: "sc_notify_nv1_battle_end"
    }];
    this.task = [];
    this.countSuccess = 0;
    this.countOpen = 0;
    this.defaultTeam = [];
    this.rewardstatus = 0;
  }
  start() {
    super.start();
    let _0x199b85 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x241a9f = [];
      var _0x2bc520 = SimpleAlertUi({
        height: 400,
        width: 600
      });
      _0x199b85.alertWin = _0x2bc520;
      const _0x4dd8f7 = {
        text: "限时活动",
        x: _0x2bc520.width / 2 - 32,
        y: _0x2bc520.height / 16
      };
      var _0x2de8f7 = createLabel(_0x4dd8f7);
      _0x241a9f.push(_0x2de8f7);
      const _0x31d940 = {
        text: "注意:",
        x: 30,
        y: _0x2bc520.height / 20,
        textColor: 16776960
      };
      var _0x5f9d38 = createLabel(_0x31d940);
      _0x241a9f.push(_0x5f9d38);
      const _0x44cd9f = {
        text: "1.暗黑武斗场需要自己输入次数层数",
        x: 80,
        y: _0x5f9d38.y + 10 + _0x5f9d38.height
      };
      var _0x26e72d = createLabel(_0x44cd9f);
      _0x241a9f.push(_0x26e72d);
      const _0xf301c = {
        text: "2.能量大作战打的困难6块钱需高功",
        x: 80,
        y: _0x26e72d.y + 10 + _0x26e72d.height
      };
      var _0x494ac5 = createLabel(_0xf301c);
      _0x241a9f.push(_0x494ac5);
      const _0x25920d = {
        x: 40,
        y: _0x494ac5.y + _0x494ac5.height + 10,
        selected: true,
        storageKey: "bugNewYear"
      };
      let _0xd47272 = createRadio(_0x25920d);
      _0x241a9f.push(_0xd47272);
      const _0x43a533 = {
        text: "暗黑武斗场",
        x: _0xd47272.width + _0xd47272.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 10
      };
      var _0x5cfc6b = createLabel(_0x43a533);
      _0x241a9f.push(_0x5cfc6b);
      const _0x1a35d1 = {
        x: _0x5cfc6b.x + _0x5cfc6b.width + 10,
        y: _0x494ac5.y + _0x494ac5.height + 10,
        selected: true,
        storageKey: "Raymars"
      };
      let _0x23c167 = createRadio(_0x1a35d1);
      _0x241a9f.push(_0x23c167);
      const _0x244108 = {
        text: "能量大作战",
        x: _0x23c167.width + _0x23c167.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 10
      };
      var _0x1dcaaa = createLabel(_0x244108);
      _0x241a9f.push(_0x1dcaaa);
      const _0x200126 = {
        x: 40,
        y: _0x494ac5.y + _0x494ac5.height + 60,
        selected: false,
        storageKey: "Maskfanpai"
      };
      let _0x45112a = createRadio(_0x200126);
      _0x241a9f.push(_0x45112a);
      const _0x8c2a05 = {
        text: "豆芽依依捕抓",
        x: _0xd47272.width + _0xd47272.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 60
      };
      var _0x3100e1 = createLabel(_0x8c2a05);
      _0x241a9f.push(_0x3100e1);
      const _0x5249bf = {
        x: _0x3100e1.x + _0x3100e1.width + 10,
        y: _0x494ac5.y + _0x494ac5.height + 60,
        selected: false,
        storageKey: "xiayi"
      };
      let _0x209a4a = createRadio(_0x5249bf);
      _0x241a9f.push(_0x209a4a);
      const _0x2bf0d3 = {
        text: "赛罗奥特曼",
        x: _0x209a4a.width + _0x209a4a.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 60
      };
      var _0x46aa16 = createLabel(_0x2bf0d3);
      _0x241a9f.push(_0x46aa16);
      const _0x307851 = {
        x: 40,
        y: _0x494ac5.y + _0x494ac5.height + 100,
        selected: false,
        storageKey: "keluosivistor"
      };
      let _0x501557 = createRadio(_0x307851);
      _0x241a9f.push(_0x501557);
      const _0x44a8e9 = {
        text: "2048小游戏",
        x: _0xd47272.width + _0xd47272.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 100
      };
      var _0x118dc4 = createLabel(_0x44a8e9);
      _0x241a9f.push(_0x118dc4);
      const _0x4009df = {
        x: _0x3100e1.x + _0x3100e1.width + 10,
        y: _0x494ac5.y + _0x494ac5.height + 100,
        selected: false,
        storageKey: "guiwang1"
      };
      let _0x416c7a = createRadio(_0x4009df);
      _0x241a9f.push(_0x416c7a);
      const _0x189832 = {
        text: "豆芽依依3次",
        x: _0x209a4a.width + _0x209a4a.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 100
      };
      var _0x31fecf = createLabel(_0x189832);
      _0x241a9f.push(_0x31fecf);
      const _0x537ec5 = {
        x: _0x31fecf.x + _0x31fecf.width + 10,
        y: _0x494ac5.y + _0x494ac5.height + 100,
        selected: false,
        storageKey: "guiwang1"
      };
      let _0x48dfae = createRadio(_0x537ec5);
      _0x241a9f.push(_0x48dfae);
      const _0x52952f = {
        text: "萨菲罗",
        x: _0x48dfae.width + _0x48dfae.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 100
      };
      var _0x379db1 = createLabel(_0x52952f);
      _0x241a9f.push(_0x379db1);
      const _0x5d3dd2 = {
        x: 40,
        y: _0x494ac5.y + _0x494ac5.height + 140,
        selected: false,
        storageKey: "dongji"
      };
      let _0x510e0a = createRadio(_0x5d3dd2);
      _0x241a9f.push(_0x510e0a);
      const _0x4d9676 = {
        text: "冬季钓鱼/搏击赛",
        x: _0xd47272.width + _0xd47272.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 140
      };
      var _0x43241d = createLabel(_0x4d9676);
      _0x241a9f.push(_0x43241d);
      const _0x442d19 = {
        x: _0x43241d.x + _0x43241d.width + 10,
        y: _0x494ac5.y + _0x494ac5.height + 140,
        selected: false,
        storageKey: "oceanGame"
      };
      let _0x5618df = createRadio(_0x442d19);
      _0x241a9f.push(_0x5618df);
      const _0x59a627 = {
        text: "滑雪",
        x: _0x5618df.width + _0x5618df.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 140
      };
      var _0xcf7cbc = createLabel(_0x59a627);
      _0x241a9f.push(_0xcf7cbc);
      const _0x270d9a = {
        x: _0xcf7cbc.x + _0xcf7cbc.width + 10,
        y: _0x494ac5.y + _0x494ac5.height + 140,
        selected: false,
        storageKey: "wsjgame"
      };
      let _0x1160db = createRadio(_0x270d9a);
      _0x241a9f.push(_0x1160db);
      const _0x4563d7 = {
        text: "万圣节活动",
        x: _0x1160db.width + _0x1160db.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 140
      };
      var _0x3d2184 = createLabel(_0x4563d7);
      _0x241a9f.push(_0x3d2184);
      const _0x3c2b91 = {
        x: _0x3d2184.x + _0x3d2184.width + 10,
        y: _0x494ac5.y + _0x494ac5.height + 140,
        selected: false,
        storageKey: "zetgame"
      };
      let _0x121a2a = createRadio(_0x3c2b91);
      _0x241a9f.push(_0x121a2a);
      const _0x269f83 = {
        text: "灾厄塔",
        x: _0x121a2a.width + _0x121a2a.x + 10,
        y: _0x494ac5.y + _0x494ac5.height + 140
      };
      var _0x4cbb62 = createLabel(_0x269f83);
      _0x241a9f.push(_0x4cbb62);
      _0x199b85.addAllUis(_0x241a9f);
      _0x2bc520.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x199b85.stop();
      }, function () {
        localStorage.setItem("bugNewYear", true);
        localStorage.setItem("Raymars", false);
        localStorage.setItem("Maskfanpai", false);
        localStorage.setItem("xiayi", false);
        localStorage.setItem("bugNewYear", _0xd47272.selected);
        localStorage.setItem("Raymars", _0x23c167.selected);
        localStorage.setItem("Maskfanpai", _0x45112a.selected);
        localStorage.setItem("xiayi", _0x209a4a.selected);
        localStorage.setItem("keluosivistor", _0x501557.selected);
        localStorage.setItem("guiwangjie", _0x416c7a.selected);
        localStorage.setItem("conglin", _0x48dfae.selected);
        localStorage.setItem("dongji", _0x510e0a.selected);
        localStorage.setItem("oceanGame", _0x5618df.selected);
        localStorage.setItem("wsjgame", _0x1160db.selected);
        localStorage.setItem("zetgame", _0x121a2a.selected);
        if (_0xd47272.selected) {
          _0x199b85.task[1] = 1;
        }
        if (_0x23c167.selected) {
          _0x199b85.task[0] = 1;
        }
        if (_0x45112a.selected) {
          _0x199b85.task[2] = 1;
        }
        if (_0x209a4a.selected) {
          _0x199b85.task[3] = 1;
        }
        if (_0x501557.selected) {
          _0x199b85.task[4] = 1;
        }
        if (_0x416c7a.selected) {
          _0x199b85.task[5] = 1;
        }
        if (_0x48dfae.selected) {
          _0x199b85.task[6] = 1;
        }
        if (_0x510e0a.selected) {
          _0x199b85.task[7] = 1;
        }
        if (_0x5618df.selected) {
          _0x199b85.task[8] = 1;
        }
        if (_0x1160db.selected) {
          _0x199b85.task[9] = 1;
        }
        if (_0x121a2a.selected) {
          _0x199b85.task[10] = 1;
        }
        _0x199b85.prcessBody();
      }], null);
      _0x2bc520.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (this.task[0]) {
        await this.expfightui();
      }
      if (this.task[1]) {
        await this.darkui();
      }
      if (this.task[2]) {
        await this.keluosileyuan();
      }
      if (this.task[3]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_11_15 5:00:00") {
          await this.sailuoatm();
        } else {
          addGameLog("活动结束");
          this.stop();
        }
      }
      if (this.task[4]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_11_06 14:05:00") {
          await this.game2048();
        } else {
          addGameLog("活动结束");
        }
      }
      if (this.task[5]) {
        await this.keluosileyuan1();
      }
      if (this.task[6]) {
        await this.cardBattleui();
      }
      if (this.task[7]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_12_25 5:00:00") {
          addGameLog("开始运行冬季运动会");
          await this.dongji();
        } else {
          addGameLog("活动结束");
        }
      }
      if (this.task[8]) {
        await this.huaxue();
        addGameLog("活动结束");
      }
      if (this.task[9]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_11_13 5:00:00") {
          await this.wsjui();
        } else {
          addGameLog("活动结束");
        }
      }
      if (this.task[10]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_11_20 14:05:00") {
          await this.zetui();
        } else {
          addGameLog("活动结束");
        }
      }
    } catch (_0x45a9bf) {
      logger(_0x45a9bf);
    }
  }
  async getSecPets() {
    let _0x810a97 = await this.dispatchSelfPet("蒂朵", [100604]);
    if (_0x810a97) {
      return {
        pet: _0x810a97,
        skillID: 100604
      };
    }
    let _0x2efd38 = await this.dispatchSelfPet("凯西恩", [32529]);
    if (_0x2efd38) {
      return {
        pet: _0x2efd38,
        skillID: 32529
      };
    }
    let _0x11014f = await this.dispatchSelfPet("哈肯萨", [14816]);
    if (_0x11014f) {
      return {
        pet: _0x11014f,
        skillID: 14816
      };
    }
    let _0x3c5e9a = await this.dispatchSelfPet("赫尔卡长老", [32127]);
    if (_0x3c5e9a) {
      return {
        pet: _0x3c5e9a,
        skillID: 32127
      };
    }
    let _0xcd8f98 = await this.dispatchSelfPet("魔焰猩猩", [11022]);
    if (_0xcd8f98) {
      return {
        pet: _0xcd8f98,
        skillID: 11022
      };
    }
  }
  async dongji() {
    while (1) {
      var _0x2fadd5 = 2 - MFC.attr.getAttr(MFC.attrType.dailyWinterFishGameTimes);
      if (_0x2fadd5 > 0) {
        await this.send_message("cs_winter_fishing_game", {
          score: 46
        });
        await wait(600);
      } else {
        break;
      }
    }
    addGameLog("冬季钓鱼已经完成!");
    let _0x3758c3 = deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss");
    addGameLog("开始搏击赛");
    let _0x4f0f08 = xls.activityCard.getItemsByKeyValue("eventId", 162).filter(_0x50140f => _0x50140f.startTime <= _0x3758c3 && _0x50140f.endTime >= _0x3758c3);
    if (!_0x4f0f08.length) {
      MFC.alert.show("当前时间没有搏击精灵!~\n休息中,稍后再来试");
      this.stop();
      return;
    }
    while (1) {
      if (pveUtils.GetNewActivityCardData([_0x4f0f08[0].id])[0].infos[0].dailyWin < 3) {
        let _0x36822f = await this.getSecPets();
        if (!_0x36822f) {
          MFC.alert.show("没有绝命火焰/灭世歼星炮/奥义断水击/幕夜龙王击/异度维护");
          this.stop();
          return;
        }
        while (1) {
          if (MFC.userInfo.curEnergy < 12) {
            MFC.alert.show("电池不足12!");
            this.stop();
            return;
          }
          if (_0x36822f.skillID == 100604) {
            var _0x44275b = await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x4f0f08[0].id],
              petList: [_0x36822f.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              times: 0,
              train: 0
            });
          } else {
            const _0x137884 = {
              type: 1,
              cardId: [_0x4f0f08[0].id],
              petList: [_0x36822f.pet.getTime],
              times: 0,
              train: 0
            };
            var _0x44275b = await this.send_message("cs_pve_fight_start", _0x137884);
          }
          if (_0x44275b.desc) {
            MFC.alert.show("搏击赛当前奖励次数已经用完!");
            this.stop();
            return;
          }
          let _0x5ef06c = await this.initBattle();
          while (_0x5ef06c.result.result == 0) {
            if (_0x5ef06c.result.playerInfos[0].nextRoundOP == 3) {
              addGameLog("被击败退出!");
              await this.send_message("cs_quit_battle", {});
              break;
            } else {
              _0x5ef06c = await this.useSkill(_0x36822f.skillID);
            }
          }
          if (_0x5ef06c.result.result == 1) {
            addGameLog("顺利击败!");
            await wait(200);
            break;
          }
        }
      } else {
        MFC.alert.show("搏击赛当前奖励次数已经用完!");
        this.stop();
        break;
      }
    }
    this.stop();
  }
  async huaxue() {
    if (!xls.activityNewExchange.hasLoaded) {
      xls.activityNewExchange.load(() => {});
    }
    if (!xls.activityTimeLimit.hasLoaded) {
      xls.activityTimeLimit.load(() => {});
    }
    await wait(200);
    let _0x619e6a = [];
    let _0x448e13 = ExchangeUtils.getCurrentExchangeNum(xls.activityNewExchange.getItem(100048));
    let _0x98bdae = 0;
    let _0x4f3400 = MFC.serverTimer.getServerTimeFlagByServerDate(new Date(xls.activityTimeLimit.getItem(326).startTime.replace(/-/g, "/").replace(/_/g, "/")));
    let _0x4bfa75 = MFC.serverTimer.getTime();
    _0x98bdae = Math.floor((_0x4bfa75 - _0x4f3400) / 86400000) + 1;
    for (let _0x1ef4ae = _0x448e13; _0x1ef4ae < _0x98bdae * 5; _0x1ef4ae++) {
      for (let _0x1fd58b = 0; _0x1fd58b < xls.activityNewExchange.getItems().filter(function (_0x463ad8) {
        return _0x463ad8.type == 1005;
      }).length; _0x1fd58b++) {
        if (xls.activityNewExchange.getItems().filter(function (_0x3f56fc) {
          return _0x3f56fc.type == 1005;
        })[_0x1fd58b].bestDrop == _0x1ef4ae + 1) {
          _0x619e6a.push(xls.activityNewExchange.getItems().filter(function (_0x202df6) {
            return _0x202df6.type == 1005;
          })[_0x1fd58b].id);
        }
      }
      _0x619e6a.push(100048);
      addGameLog("滑雪第" + (_0x1ef4ae + 1) + "关");
      if (_0x619e6a.length > 1) {
        const _0x118eb3 = {
          subDropIdList: [],
          groupIds: _0x619e6a
        };
        await this.send_message("cs_new_exchange_activity_reward", _0x118eb3);
      } else {
        await this.send_message("cs_new_exchange_activity_reward", {
          id: 100048,
          coeff: 1,
          selectIndex: 0,
          subDropIdList: [],
          groupIds: []
        });
      }
      _0x619e6a = [];
    }
    addGameLog("滑雪结束");
    this.stop();
  }
  async patchLeiyi() {
    let _0x11c195 = await this.dispatchSelfPet("雷伊", [10825]);
    if (!_0x11c195) {
      _0x11c195 = await this.dispatchSelfPet("雷伊", [100484]);
      if (!_0x11c195) {
        addGameLog("背包未携带雷伊+雷神天明闪");
        this.stop();
        return false;
      }
      _0x11c195.skillId = 100484;
    } else {
      _0x11c195.skillId = 10825;
    }
    this.myxx = _0x11c195;
    return true;
  }
  async oceanGame() {
    addGameLog("口腔清洁");
    await this.send_message("cs_ocean_star_activity", {
      type: 2,
      score: 15
    });
    let _0x4eab21 = await this.patchLeiyi();
    if (!_0x4eab21) {
      return false;
    }
    let _0x174563 = PetManager.getInstance().getAllPets()[0];
    await this.send_message("cs_new_change_petArray", {
      op: 1,
      arrayType: "defaultTeam",
      subArray: 0,
      idx: 1,
      teamUp: 0,
      fightType: 0,
      getTimeList: [this.myxx.getTime, _0x174563.getTime]
    });
    while (1) {
      let _0x5ad5f8 = await this.send_message("cs_get_mapBoss_data", {});
      let _0x4230c1 = _0x5ad5f8.reward["363"];
      if (_0x4230c1 != 3) {
        while (1) {
          await this.send_message("cs_pve_activity_battle", {
            levelId: 363,
            battleType: 3
          });
          let _0x1ca9c9 = await this.initBattle();
          while (_0x1ca9c9.result.result == 0) {
            if (_0x1ca9c9.result.playerInfos[0].nextRoundOP == 3) {
              addGameLog("雷伊被击败退出!");
              await this.send_message("cs_quit_battle", {});
              break;
            } else {
              _0x1ca9c9 = await this.useSkill(this.myxx.skillId);
            }
          }
          if (_0x1ca9c9.result.result == 1) {
            addGameLog("顺利击败!");
            break;
          }
        }
      } else {
        addGameLog("击败黑影完成!");
        break;
      }
    }
    addGameLog("开始清洁海洋污染");
    await this.send_message("cs_mining", {
      id: 38
    });
    await this.send_message("cs_mining", {
      id: 39
    });
    addGameLog("开始大雨吃小鱼");
    await this.send_message("cs_ocean_star_activity", {
      type: 1,
      score: 2000
    });
    await wait(300);
    MFC.alert.show("海洋乐园今日已经完成!");
    this.stop();
  }
  async gang() {
    let _0x2e30d6 = await this.patchLeiyi();
    if (!_0x2e30d6) {
      return false;
    }
    await wait(700);
    let _0x32d7e8 = PetManager.getInstance().getAllPets()[0];
    addGameLog("开始对战钢牙鲨VS魔牙鲨");
    while (1) {
      let _0x16abdd = await this.send_message("sc_pve_fight_start", {
        type: 1,
        cardId: [this.gangId],
        petList: [this.myxx.getTime, _0x32d7e8.getTime],
        times: 0,
        train: 0
      });
      if (JSON.stringify(_0x16abdd).includes("次数不足")) {
        addGameLog("钢牙鲨VS魔牙鲨 已经完成!");
        MFC.alert.show("钢牙鲨VS魔牙鲨 已经完成!");
        this.stop();
      }
      let _0x13a724 = await this.initBattle();
      while (_0x13a724.result.result == 0) {
        if (_0x13a724.result.playerInfos[0].nextRoundOP == 3) {
          addGameLog("雷伊被击败退出!");
          await this.send_message("cs_quit_battle", {});
          break;
        } else {
          _0x13a724 = await this.useSkill(this.myxx.skillId);
        }
      }
    }
  }
  async wsjui() {
    super.start();
    let _0x1b69c2 = this;
    MFC.alert.show("确定进行万圣节吗需要瞬杀光闪击", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x42c8f3) {
      _0x1b69c2.stop();
    }, function (_0x265400) {
      _0x1b69c2.wsjhd();
    }]);
  }
  async wsjhd() {
    let _0xbc1786 = getGoalPets([{
      skills: [10630],
      features: [5, 6, 7, 8]
    }, {
      skills: [100023],
      features: [5, 6, 7, 8]
    }]);
    let _0xa55e27 = getGoalPets([{
      skills: [32529]
    }]);
    let _0x23908e = await this.send_message("cs_pve_fight_start", {
      type: 2,
      cardId: [1597, 1598, 1599, 1600, 1601],
      petList: [],
      times: 0,
      train: 0
    });
    for (let _0x3b5398 = 0; _0x3b5398 < _0x23908e.subIdNumber.length; _0x3b5398++) {
      while (_0x23908e.subIdNumber[_0x3b5398].winNums == 0) {
        if (_0x3b5398 > 3 || _0x3b5398 < 2) {
          if (!_0xa55e27) {
            if (!_0xbc1786) {
              addGameLog("背包中没有水次以及瞬杀");
              break;
            } else {
              let _0x3b777e;
              if (_0xbc1786.skills.indexOf(10630) !== -1) {
                _0x3b777e = 10630;
              } else {
                _0x3b777e = 100023;
              }
              await this.send_message("cs_pve_fight_start", {
                type: 1,
                cardId: [_0x23908e.subIdNumber[_0x3b5398].subId],
                petList: [_0xbc1786.getTime, PetManager.getInstance().getAllPets()[0].getTime],
                times: 0,
                train: 0
              });
              await this.initBattle();
              let _0x5712eb = await this.useSkill(_0x3b777e);
              while (_0x5712eb.result.result === 0) {
                let _0x81dd19 = _0x5712eb.result.playerInfos.find(_0x5d4d84 => _0x5d4d84.uid === MFC.userInfo.uid).nextRoundOP;
                if (_0x81dd19 !== 1) {
                  addGameLog("首发被击败");
                  break;
                }
                addGameLog("未击败，继续攻击");
                _0x5712eb = await this.useSkill(_0x3b777e);
              }
              _0x23908e = await this.send_message("cs_pve_fight_start", {
                type: 2,
                cardId: [1597, 1598, 1599, 1600, 1601],
                petList: [],
                times: 0,
                train: 0
              });
            }
          } else {
            let _0x5b8930 = 32529;
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x23908e.subIdNumber[_0x3b5398].subId],
              petList: [_0xa55e27.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              times: 0,
              train: 0
            });
            await this.initBattle();
            let _0x3887ea = await this.useSkill(_0x5b8930);
            while (_0x3887ea.result.result === 0) {
              let _0x36783b = _0x3887ea.result.playerInfos.find(_0x24d447 => _0x24d447.uid === MFC.userInfo.uid).nextRoundOP;
              if (_0x36783b !== 1) {
                addGameLog("首发被击败");
                break;
              }
              addGameLog("未击败，继续攻击");
              _0x3887ea = await this.useSkill(_0x5b8930);
            }
            _0x23908e = await this.send_message("cs_pve_fight_start", {
              type: 2,
              cardId: [1597, 1598, 1599, 1600, 1601],
              petList: [],
              times: 0,
              train: 0
            });
          }
        } else if (!_0xbc1786) {
          addGameLog("背包中没有瞬杀先制相关精灵");
          break;
        } else {
          let _0x3cd977;
          if (_0xbc1786.skills.indexOf(10630) !== -1) {
            _0x3cd977 = 10630;
          } else {
            _0x3cd977 = 100023;
          }
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [_0x23908e.subIdNumber[_0x3b5398].subId],
            petList: [_0xbc1786.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0,
            train: 0
          });
          await this.initBattle();
          let _0x6d155e = await this.useSkill(_0x3cd977);
          while (_0x6d155e.result.result === 0) {
            let _0x2f2a74 = _0x6d155e.result.playerInfos.find(_0x41b1f3 => _0x41b1f3.uid === MFC.userInfo.uid).nextRoundOP;
            if (_0x2f2a74 !== 1) {
              addGameLog("首发被击败");
              break;
            }
            addGameLog("未击败，继续攻击");
            _0x6d155e = await this.useSkill(_0x3cd977);
          }
          _0x23908e = await this.send_message("cs_pve_fight_start", {
            type: 2,
            cardId: [1597, 1598, 1599, 1600, 1601],
            petList: [],
            times: 0,
            train: 0
          });
        }
      }
    }
    let _0x867eed = await this.send_message("cs_peach_banquet", {
      type: 1
    });
    for (var _0x1e822e = 0; _0x1e822e < _0x867eed.map.length; _0x1e822e++) {
      var _0x4c0c99 = _0x867eed.map[_0x1e822e];
      for (var _0x50a5fe = 0; _0x50a5fe < _0x4c0c99.length; _0x50a5fe++) {
        if (_0x4c0c99[_0x50a5fe] === 1) {
          var _0x2f71a2 = _0x1e822e + "_" + _0x50a5fe;
          await this.send_message("cs_peach_banquet", {
            type: 2,
            index: _0x2f71a2.toString()
          });
        }
      }
    }
    addGameLog("翻牌结束");
    let _0x2fec18 = xls.activityTaskReset.getItems().filter(function (_0x541fb8) {
      return _0x541fb8.activityIdentity == 393;
    });
    for (let _0x5f0dd1 = 0; _0x5f0dd1 < _0x2fec18.length; _0x5f0dd1++) {
      if (TaskUtils.GetRestTaskState(_0x2fec18[_0x5f0dd1]) == 1) {
        const _0x130561 = {
          carnivalId: _0x2fec18[_0x5f0dd1].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x130561);
      } else if (TaskUtils.GetRestTaskState(_0x2fec18[_0x5f0dd1]) == 0) {
        addGameLog(_0x2fec18[_0x5f0dd1].task + "未完成");
      }
    }
    addGameLog("万圣节活动结束");
    this.stop();
  }
  async zetui() {
    super.start();
    let _0x4c18a5 = this;
    MFC.alert.show("确定进行灾厄塔吗(需要绝命火焰,雷伊需要雷怒+充电符文+闪电斗气符文+电光大招)\n还需一只瞬杀精灵", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x9a2b21) {
      _0x4c18a5.stop();
    }, function (_0x27b62e) {
      _0x4c18a5.zet();
    }]);
  }
  async zet() {
    let _0x38e84d = xls.activityTaskReset.getItems().filter(function (_0x2cbda3) {
      return _0x2cbda3.activityIdentity == 164;
    });
    for (let _0x45bd0f = 0; _0x45bd0f < _0x38e84d.length; _0x45bd0f++) {
      if (TaskUtils.GetRestTaskState(_0x38e84d[_0x45bd0f]) == 1) {
        const _0x35154c = {
          carnivalId: _0x38e84d[_0x45bd0f].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x35154c);
      } else if (TaskUtils.GetRestTaskState(_0x38e84d[_0x45bd0f]) == 0) {
        addGameLog(_0x38e84d[_0x45bd0f].task + "未完成");
      }
    }
    let _0x47ff41 = 0;
    let _0x2bdfcd = 1;
    let _0x27c158 = getGoalPets([{
      skills: [11022, 10034]
    }, {
      skills: [11022, 100009]
    }]);
    let _0x79b8c7 = getGoalPets([{
      skills: [10630, 11783],
      features: [5, 6, 7, 8]
    }, {
      skills: [100023, 11783],
      features: [5, 6, 7, 8]
    }]);
    let _0x322e05 = getGoalPets([{
      skills: [100531, 23245, 100483, 15894]
    }]);
    while (1) {
      if (20 - MFC.attr.getAttr(MFC.attrType.dailyChallengeTimes) > 0) {
        if (MFC.attr.getAttr(MFC.attrType.foreverDisasterTowerVitalityValue) >= 10) {
          if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), _0x2bdfcd * 10) == 0) {
            if (_0x47ff41 < 2) {
              if (!_0x27c158) {
                addGameLog("精灵背包中没有魔焰猩猩+绝命火焰，请确保有其条件，再来启动脚本");
                break;
              } else {
                await this.send_message("cs_fight_boss_start_battle", {
                  battleType: 36,
                  getTimeList: [_0x27c158.getTime, PetManager.getInstance().getAllPets().filter(function (_0x1e8856) {
                    return _0x1e8856.getTime !== _0x27c158.getTime;
                  })[0].getTime],
                  subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9)
                });
                let _0x304899 = 11022;
                await this.initBattle();
                let _0x3fbfc0 = await this.useSkill(_0x304899);
                while (_0x3fbfc0.result.result === 0) {
                  let _0x4dc124 = _0x3fbfc0.result.playerInfos.find(_0x54b5b7 => _0x54b5b7.uid === MFC.userInfo.uid).nextRoundOP;
                  if (_0x4dc124 !== 1) {
                    addGameLog("首发被击败");
                    break;
                  }
                  addGameLog("未击败，继续攻击");
                  _0x3fbfc0 = await this.useSkill(_0x304899);
                }
                if (_0x3fbfc0.result.result === 1) {
                  _0x2bdfcd++;
                }
              }
            } else if (_0x47ff41 == 2) {
              if (!_0x322e05) {
                addGameLog("背包中没有雷伊或者没带雷怒+充电符文+闪电斗气符文+电光大招");
                break;
              } else {
                let _0x1c5406 = [23245, 100531, 100483, 15894];
                let _0x5885c1 = 1;
                let _0x19d637 = 1;
                await this.send_message("cs_fight_boss_start_battle", {
                  battleType: 36,
                  getTimeList: [_0x322e05.getTime],
                  subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9)
                });
                await this.initBattle();
                let _0x5d1a47 = await this.useSkill(_0x1c5406[0]);
                while (_0x5d1a47.result.result === 0) {
                  addGameLog("未击败，继续攻击");
                  if (_0x19d637 < 3) {
                    _0x5d1a47 = await this.useSkill(_0x1c5406[_0x5885c1]);
                    _0x5885c1++;
                  } else if (getSeerItemNum(2001) > 1) {
                    addGameLog("回pp");
                    _0x5d1a47 = await this.useItem(2001);
                    _0x19d637 = 1;
                    _0x5885c1 = 0;
                  } else if (getSeerItemNum(2002) > 1) {
                    addGameLog("回pp");
                    _0x5d1a47 = await this.useItem(2002);
                    _0x19d637 = 1;
                    _0x5885c1 = 0;
                  } else if (getSeerItemNum(2003) > 1) {
                    addGameLog("回pp");
                    _0x5d1a47 = await this.useItem(2003);
                    _0x19d637 = 1;
                    _0x5885c1 = 0;
                  } else {
                    addGameLog("pp不足");
                    await this.send_message("cs_quit_battle", {});
                    break;
                  }
                  if (_0x5885c1 > 3) {
                    _0x5885c1 = 0;
                    _0x19d637++;
                  }
                }
              }
            } else if (_0x47ff41 > 2) {
              if (BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9) == 267) {
                if (!_0x322e05) {
                  addGameLog("背包中没有雷伊或者没带雷怒+充电符文+闪电斗气符文+电光大招");
                  break;
                } else {
                  let _0x1d0b1c = [23245, 100531, 100483, 15894];
                  let _0x4f79cd = 1;
                  let _0x310a80 = 1;
                  await this.send_message("cs_fight_boss_start_battle", {
                    battleType: 36,
                    getTimeList: [_0x322e05.getTime],
                    subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9)
                  });
                  await this.initBattle();
                  let _0x268788 = await this.useSkill(_0x1d0b1c[0]);
                  while (_0x268788.result.result === 0) {
                    addGameLog("未击败，继续攻击");
                    if (_0x310a80 < 3) {
                      _0x268788 = await this.useSkill(_0x1d0b1c[_0x4f79cd]);
                      _0x4f79cd++;
                    } else if (getSeerItemNum(2001) > 1) {
                      addGameLog("回pp");
                      _0x268788 = await this.useItem(2001);
                      _0x310a80 = 1;
                      _0x4f79cd = 0;
                    } else if (getSeerItemNum(2002) > 1) {
                      addGameLog("回pp");
                      _0x268788 = await this.useItem(2002);
                      _0x310a80 = 1;
                      _0x4f79cd = 0;
                    } else if (getSeerItemNum(2003) > 1) {
                      addGameLog("回pp");
                      _0x268788 = await this.useItem(2003);
                      _0x310a80 = 1;
                      _0x4f79cd = 0;
                    } else {
                      addGameLog("pp不足");
                      await this.send_message("cs_quit_battle", {});
                      break;
                    }
                    if (_0x4f79cd > 3) {
                      _0x4f79cd = 0;
                      _0x310a80++;
                    }
                  }
                }
              } else if (BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9) == 263) {
                if (!_0x27c158) {
                  addGameLog("背包中没有魔焰猩猩绝命+火焰漩涡");
                  break;
                } else if (!_0x79b8c7) {
                  addGameLog("背包中没有瞬杀蒙多或者没带光烈普通大招");
                  break;
                } else {
                  let _0x4dc8f7;
                  let _0x568c9;
                  if (_0x79b8c7.skills.indexOf(10630) !== -1) {
                    _0x4dc8f7 = 10630;
                  } else {
                    _0x4dc8f7 = 100023;
                  }
                  if (_0x27c158.skills.indexOf(10034) !== -1) {
                    _0x568c9 = 10034;
                  } else {
                    _0x568c9 = 100009;
                  }
                  await this.send_message("cs_fight_boss_start_battle", {
                    battleType: 36,
                    getTimeList: [_0x27c158.getTime, _0x79b8c7.getTime],
                    subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9)
                  });
                  await this.initBattle();
                  let _0x709a65 = await this.useSkill(_0x568c9);
                  let _0x136fb0 = 1;
                  while (_0x709a65.result.result === 0) {
                    if (_0x709a65.result.playerInfos[0].nextRoundOP == 3) {
                      _0x136fb0 = 0;
                      await this.send_message("cs_online_player_operation", {
                        opType: 2,
                        data: {
                          petIndex: 1
                        },
                        groupId: ""
                      });
                    }
                    if (_0x136fb0 == 1) {
                      addGameLog("未击败，继续攻击");
                      _0x709a65 = await this.useSkill(_0x568c9);
                    } else if (_0x136fb0 == 0) {
                      _0x709a65 = await this.useSkill(_0x4dc8f7);
                    }
                  }
                }
              } else if (BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9) == 278) {
                if (!_0x79b8c7) {
                  addGameLog("背包中没有瞬杀先制相关精灵");
                  break;
                } else {
                  let _0x378fb3 = 11783;
                  await this.send_message("cs_fight_boss_start_battle", {
                    battleType: 36,
                    getTimeList: [_0x79b8c7.getTime],
                    subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9)
                  });
                  await this.initBattle();
                  let _0x59fb27 = await this.useSkill(_0x378fb3);
                  while (_0x59fb27.result.result === 0) {
                    addGameLog("未击败，继续攻击");
                    _0x59fb27 = await this.useSkill(_0x378fb3);
                  }
                }
              } else if (!_0x79b8c7) {
                addGameLog("背包中没有瞬杀先制相关精灵");
                break;
              } else {
                let _0x720859;
                if (_0x79b8c7.skills.indexOf(10630) !== -1) {
                  _0x720859 = 10630;
                } else {
                  _0x720859 = 100023;
                }
                await this.send_message("cs_fight_boss_start_battle", {
                  battleType: 36,
                  getTimeList: [_0x79b8c7.getTime],
                  subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x47ff41), (_0x2bdfcd - 1) * 10, (_0x2bdfcd - 1) * 10 + 9)
                });
                await this.initBattle();
                let _0x5ba54b = await this.useSkill(_0x720859);
                while (_0x5ba54b.result.result === 0) {
                  addGameLog("未击败，继续攻击");
                  _0x5ba54b = await this.useSkill(_0x720859);
                }
              }
            } else if (_0x47ff41 > 4) {
              break;
            }
          } else {
            _0x2bdfcd++;
            if (_0x2bdfcd > 3) {
              _0x47ff41++;
              _0x2bdfcd = 1;
            }
            if (_0x47ff41 > 4) {
              break;
            }
          }
        } else {
          addGameLog("活力不足灾厄塔结束");
          break;
        }
      } else {
        addGameLog("挑战次数不足灾厄塔结束");
        break;
      }
    }
    while (1) {
      if (20 - MFC.attr.getAttr(MFC.attrType.dailyChallengeTimes) > 0) {
        if (MFC.attr.getAttr(MFC.attrType.foreverDisasterTowerVitalityValue) >= 10) {
          if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + 4), 30) == 1) {
            await this.send_message("cs_fight_boss_start_battle_sd", {
              battleType: 36,
              subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + 4), 20, 29),
              times: 1
            });
          } else {
            break;
          }
        } else {
          addGameLog("活力不足灾厄塔结束");
          break;
        }
      } else {
        addGameLog("挑战次数不足灾厄塔结束");
        break;
      }
    }
    _0x38e84d = xls.activityTaskReset.getItems().filter(function (_0x4e85c6) {
      return _0x4e85c6.activityIdentity == 161;
    });
    for (let _0x5f5300 = 0; _0x5f5300 < _0x38e84d.length; _0x5f5300++) {
      if (TaskUtils.GetRestTaskState(_0x38e84d[_0x5f5300]) == 1) {
        const _0x587b4b = {
          carnivalId: _0x38e84d[_0x5f5300].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x587b4b);
      } else if (TaskUtils.GetRestTaskState(_0x38e84d[_0x5f5300]) == 0) {
        addGameLog(_0x38e84d[_0x5f5300].task + "未完成");
      }
    }
    _0x38e84d = xls.activityTaskReset.getItems().filter(function (_0x4c8139) {
      return _0x4c8139.activityIdentity == 162;
    });
    for (let _0x25235c = 0; _0x25235c < _0x38e84d.length; _0x25235c++) {
      if (TaskUtils.GetRestTaskState(_0x38e84d[_0x25235c]) == 1) {
        const _0x1690fa = {
          carnivalId: _0x38e84d[_0x25235c].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x1690fa);
      } else if (TaskUtils.GetRestTaskState(_0x38e84d[_0x25235c]) == 0) {
        addGameLog(_0x38e84d[_0x25235c].task + "未完成");
      }
    }
    if (!_0x27c158) {
      addGameLog("背包没有绝命+火焰漩涡请更换");
    }
    if (!_0x79b8c7) {
      addGameLog("背包没有瞬杀光闪击+普通大招光烈突击");
    }
    if (!_0x322e05) {
      addGameLog("背包中没有雷伊或者没带雷怒+充电符文+闪电斗气符文+电光大招");
    }
    addGameLog("灾厄塔结束");
    this.stop();
  }
  async gangui() {
    super.start();
    let _0x5cbf68 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x20b792 = [];
      var _0x4eaf1a = SimpleAlertUi({
        height: 350,
        width: 400
      });
      _0x5cbf68.alertWin = _0x4eaf1a;
      const _0x47846e = {
        text: "钢牙鲨VS魔牙鲨",
        y: _0x4eaf1a.height / 15
      };
      var _0x5771f1 = createLabel(_0x47846e);
      _0x5771f1.x = _0x4eaf1a.width / 2 - _0x5771f1.width / 2;
      _0x20b792.push(_0x5771f1);
      const _0x4f6334 = {
        text: "采用雷伊+雷神天明闪",
        y: _0x5771f1.y + _0x5771f1.height + 20
      };
      var _0x1f6b75 = createLabel(_0x4f6334);
      _0x1f6b75.x = _0x4eaf1a.width / 2 - _0x1f6b75.width / 2;
      _0x20b792.push(_0x1f6b75);
      const _0x4f9644 = {
        text: "钢牙鲨",
        x: _0x4eaf1a.applicationWidth / 8,
        y: _0x1f6b75.y + 40
      };
      var _0xe6ac4e = createLabel(_0x4f9644);
      _0x20b792.push(_0xe6ac4e);
      const _0xd710eb = {
        x: _0xe6ac4e.x + _0xe6ac4e.width + 10,
        y: _0xe6ac4e.y,
        selected: false,
        storageKey: "darkbattler1"
      };
      let _0x3be58d = createRadio(_0xd710eb);
      _0x20b792.push(_0x3be58d);
      const _0x3510d9 = {
        text: "魔牙鲨",
        x: _0x3be58d.x + _0x3be58d.width + 40,
        y: _0xe6ac4e.y
      };
      var _0x4ca5c3 = createLabel(_0x3510d9);
      _0x20b792.push(_0x4ca5c3);
      const _0x3a51fa = {
        x: _0x4ca5c3.x + _0x4ca5c3.width + 10,
        y: _0xe6ac4e.y,
        selected: false,
        storageKey: "darkbattler2"
      };
      let _0x360374 = createRadio(_0x3a51fa);
      _0x20b792.push(_0x360374);
      _0x5cbf68.addAllUis(_0x20b792);
      _0x4eaf1a.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5cbf68.stop();
      }, function () {
        if (_0x3be58d.selected) {
          _0x5cbf68.gangId = 1482;
        }
        if (_0x360374.selected) {
          _0x5cbf68.gangId = 1483;
        }
        _0x5cbf68.gang();
      }], null);
      _0x4eaf1a.showAlert();
    });
  }
  async sailuoatm() {
    let _0x1a0d64 = await this.send_message("cs_super_human", {
      type: 1
    });
    let _0x19a74d = 1;
    while (_0x19a74d < 9) {
      let _0x244451 = await this.sailuoBattle();
      if (!_0x244451) {
        break;
      } else if (_0x1a0d64.cardIds[_0x19a74d] == 1) {
        if (MFC.userInfo.curEnergy >= 5) {
          const _0x555c43 = {
            type: 1,
            cardId: [_0x1a0d64.cardIds[_0x19a74d - 1]],
            petList: [_0x244451.pet.getTime],
            times: 0,
            train: 0
          };
          await this.send_message("cs_pve_fight_start", _0x555c43);
          await this.initBattle();
          let _0x31b9d1 = await this.useSkill(11022);
          while (_0x31b9d1.result.result === 0) {
            addGameLog("未击败，继续攻击");
            _0x31b9d1 = await this.useSkill(11022);
          }
          if (_0x31b9d1.result.result === 1) {
            _0x19a74d += 2;
          } else {
            addGameLog("未击败");
          }
          await wait(300);
        } else {
          addGameLog("电池不足");
          break;
        }
      } else {
        _0x19a74d += 2;
      }
    }
    let _0x4d3abe = xls.activityTaskReset.getItems().filter(function (_0x26a8b8) {
      return _0x26a8b8.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x26a8b8.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x26a8b8.activityIdentity == 442;
    });
    for (let _0x1296ed = 0; _0x1296ed < _0x4d3abe.length; _0x1296ed++) {
      if (TaskUtils.GetRestTaskState(_0x4d3abe[_0x1296ed]) == 1) {
        addGameLog("领取" + _0x4d3abe[_0x1296ed].task);
        const _0x54e9b0 = {
          carnivalId: _0x4d3abe[_0x1296ed].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x54e9b0);
      } else if (TaskUtils.GetRestTaskState(_0x4d3abe[_0x1296ed]) == 0) {
        addGameLog(_0x4d3abe[_0x1296ed].task + "未完成");
      } else {
        addGameLog(_0x4d3abe[_0x1296ed].task + "已完成");
      }
    }
    let _0x328b24 = xls.activityExchange.getItems().filter(function (_0x16aff4) {
      return _0x16aff4.name.indexOf("奥特曼联动：帕拉吉之盾奖励") !== -1;
    });
    for (let _0x56bb37 = 0; _0x56bb37 < _0x328b24.length; _0x56bb37++) {
      if (ExchangeUtils.GetExchangeState(_0x328b24[_0x56bb37]) == 1) {
        const _0x49bcfb = {
          id: _0x328b24[_0x56bb37].id,
          selectIndex: 0,
          subDropIdList: []
        };
        await this.send_message("cs_exchange_activity_reward", _0x49bcfb);
      } else if (ExchangeUtils.GetExchangeState(_0x328b24[_0x56bb37]) == -1) {
        addGameLog(_0x328b24[_0x56bb37].name + "已领取");
      } else if (ExchangeUtils.GetExchangeState(_0x328b24[_0x56bb37]) == 0) {
        addGameLog(_0x328b24[_0x56bb37].name + "未完成");
      }
    }
    addGameLog("赛罗奥特曼完成");
    this.stop();
  }
  async sailuoBattle() {
    let _0x2e67ce = await this.dispatchSelfPet("魔焰猩猩", [11022]);
    if (_0x2e67ce) {
      return {
        pet: _0x2e67ce,
        skillsName: [11022]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async handleCardList() {
    let _0x26b1f5 = await this.send_message("cs_unlock_gongge_fight", {
      fun: 1,
      getTimeList: []
    });
    let _0xd7573e = {
      wayArray: [-1, 0, 1],
      canTouchList: [],
      unlockList: _0x26b1f5.unlock,
      setCanTouchPoint: function () {
        this.unlockList.push(0);
        for (var _0x153156 = 0; _0x153156 < this.unlockList.length; _0x153156++) {
          for (var _0x418b57 = this.findNearlyCell(this.unlockList[_0x153156], 20, 8), _0x41fd52 = 0; _0x41fd52 < _0x418b57.length; _0x41fd52++) {
            if (this.canTouchList.indexOf(_0x418b57[_0x41fd52]) == -1) {
              this.canTouchList.push(_0x418b57[_0x41fd52]);
            }
          }
        }
      },
      findNearlyCell: function (_0x5ccb73, _0x5cc66e, _0xb6d7cb) {
        for (var _0x56a94d = _0x5ccb73 % _0x5cc66e, _0x270ee8 = Math.floor(_0x5ccb73 / _0x5cc66e), _0x188da2 = [], _0x4fc648 = 0; _0x4fc648 < this.wayArray.length; _0x4fc648++) {
          for (var _0x38b0d8 = 0; _0x38b0d8 < this.wayArray.length; _0x38b0d8++) {
            if (_0x56a94d + this.wayArray[_0x4fc648] >= 0 && _0x56a94d + this.wayArray[_0x4fc648] < _0x5cc66e && _0x270ee8 + this.wayArray[_0x38b0d8] >= 0 && _0x270ee8 + this.wayArray[_0x38b0d8] < _0xb6d7cb) {
              var _0x1c5502 = _0x56a94d + this.wayArray[_0x4fc648] + (_0x270ee8 + this.wayArray[_0x38b0d8]) * _0x5cc66e;
              _0x188da2.push(_0x1c5502);
            }
          }
        }
        return _0x188da2;
      }
    };
    _0xd7573e.setCanTouchPoint();
    logger(_0xd7573e.canTouchList);
    let _0x1482aa = _0x26b1f5.BossHpList.filter(_0x2a3b99 => _0xd7573e.canTouchList.includes(_0x2a3b99.index) && _0x2a3b99.hp == 0);
    return _0x1482aa;
  }
  async cardBattleui() {
    super.start();
    let _0x109a7e = this;
    MFC.alert.show("确定进行萨菲罗吗(奥斯卡禁忌加虚空,库贝萨天霸加玄灵\n谱尼元素+圣洁或者熊猫横空裂加熊猫陷阵)", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x585250) {
      _0x109a7e.stop();
    }, function (_0x349c27) {
      _0x109a7e.cardBattle();
    }]);
  }
  async cardBattle() {
    try {
      if (!xls.obtainZafiro.hasLoaded) {
        xls.obtainZafiro.load(() => {});
      }
      await wait(200);
      let _0x3f2224 = 0;
      let _0x33620d = MFC.userInfo.defaultTeam;
      while (1) {
        if (MFC.attr.getAttr(MFC.attrType.foreverSaFeiLuoValue) >= 1000) {
          addGameLog("调度已达1000,即将判断图纸是否领取");
          if (!!MFC.attr.getAttr(MFC.attrType.foreverSaFeiLuoRewardStatus)) {
            addGameLog("萨菲罗图纸已领取");
            addGameLog("萨菲罗结束");
            break;
          } else {
            addGameLog("领取图纸");
            await this.send_message("cs_get_safeiluo_reward", {});
            addGameLog("萨菲罗结束");
            break;
          }
        } else if (MFC.userInfo.curEnergy >= 10) {
          addGameLog("当前boss" + PetConfig.getDef(xls.obtainZafiro.getItem(_0x3f2224 + 1).petId).name);
          if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailySaFeiLuoFightBossStatus), _0x3f2224 + 1) > 0) {
            addGameLog(PetConfig.getDef(xls.obtainZafiro.getItem(_0x3f2224 + 1).petId).name + "已击败");
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 150) {
            let _0xd67e55 = await this.sfl200Battle();
            if (_0xd67e55) {
              const _0xc6e881 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0xd67e55.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0xc6e881);
              const _0x5b6942 = {
                id: _0x3f2224 + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x5b6942);
              await this.initBattle();
              let _0x11a746 = await this.useSkill(_0xd67e55.skillsName[0]);
              if (_0x11a746.result.result == 0) {
                _0x11a746 = await this.useSkill(_0xd67e55.skillsName[0]);
              }
              while (_0x11a746.result.result == 0) {
                _0x11a746 = await this.useSkill(_0xd67e55.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 200) {
            let _0x12e432 = await this.sfl200Battle();
            if (_0x12e432) {
              const _0x17129d = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x12e432.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x17129d);
              const _0xaee5e8 = {
                id: _0x3f2224 + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0xaee5e8);
              await this.initBattle();
              let _0xfdb239 = await this.useSkill(_0x12e432.skillsName[0]);
              if (_0xfdb239.result.result == 0) {
                _0xfdb239 = await this.useSkill(_0x12e432.skillsName[0]);
              }
              while (_0xfdb239.result.result == 0) {
                _0xfdb239 = await this.useSkill(_0x12e432.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 250) {
            let _0x4ffc4e = await this.sfl300Battle();
            if (_0x4ffc4e) {
              const _0x4138d3 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x4ffc4e.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x4138d3);
              const _0x4c4dbe = {
                id: _0x3f2224 + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x4c4dbe);
              await this.initBattle();
              let _0x37e27b = await this.useSkill(_0x4ffc4e.skillsName[1]);
              if (_0x37e27b.result.result == 0) {
                _0x37e27b = await this.useSkill(_0x4ffc4e.skillsName[1]);
              }
              while (_0x37e27b.result.result == 0) {
                _0x37e27b = await this.useSkill(_0x4ffc4e.skillsName[0]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 300) {
            let _0x33f374 = await this.sfl300Battle();
            if (_0x33f374) {
              const _0x2f3913 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x33f374.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x2f3913);
              const _0x21b7b4 = {
                id: _0x3f2224 + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x21b7b4);
              await this.initBattle();
              let _0x5333ab = await this.useSkill(_0x33f374.skillsName[1]);
              if (_0x5333ab.result.result == 0) {
                _0x5333ab = await this.useSkill(_0x33f374.skillsName[1]);
              }
              while (_0x5333ab.result.result == 0) {
                _0x5333ab = await this.useSkill(_0x33f374.skillsName[0]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 350) {
            let _0x54aa08 = await this.sfl50Battle();
            if (_0x54aa08) {
              const _0x44c6a4 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x54aa08.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x44c6a4);
              const _0x4d6306 = {
                id: _0x3f2224 + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x4d6306);
              await this.initBattle();
              let _0x4b76cc = await this.useSkill(_0x54aa08.skillsName[0]);
              if (_0x4b76cc.result.result == 0) {
                _0x4b76cc = await this.useSkill(_0x54aa08.skillsName[1]);
              }
              while (_0x4b76cc.result.result == 0) {
                _0x4b76cc = await this.useSkill(_0x54aa08.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 400) {
            let _0xaf912e = await this.sfl200Battle();
            if (_0xaf912e) {
              const _0x3f0a58 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0xaf912e.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x3f0a58);
              const _0x58e15c = {
                id: _0x3f2224 + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x58e15c);
              await this.initBattle();
              let _0x4b4199 = await this.useSkill(_0xaf912e.skillsName[1]);
              if (_0x4b4199.result.result == 0) {
                _0x4b4199 = await this.useSkill(_0xaf912e.skillsName[0]);
              }
              while (_0x4b4199.result.result == 0) {
                _0x4b4199 = await this.useSkill(_0xaf912e.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 450) {
            let _0x117cf1 = await this.sfl50Battle();
            if (_0x117cf1) {
              const _0x5f2442 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x117cf1.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x5f2442);
              const _0x1cf835 = {
                id: _0x3f2224 + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x1cf835);
              await this.initBattle();
              let _0x45a34d = await this.useSkill(_0x117cf1.skillsName[1]);
              if (_0x45a34d.result.result == 0) {
                _0x45a34d = await this.useSkill(_0x117cf1.skillsName[0]);
              }
              while (_0x45a34d.result.result == 0) {
                _0x45a34d = await this.useSkill(_0x117cf1.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 500 || 150 + Random.getDateRandom(7, 0, 9)[_0x3f2224] * 50 == 550) {
            let _0x72860b = await this.sfl50Battle();
            if (_0x72860b) {
              const _0x5b5e84 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x72860b.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x5b5e84);
              const _0x258045 = {
                id: _0x3f2224 + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x258045);
              await this.initBattle();
              let _0x8dc7cc = await this.useSkill(_0x72860b.skillsName[1]);
              if (_0x8dc7cc.result.result == 0) {
                _0x8dc7cc = await this.useSkill(_0x72860b.skillsName[1]);
              }
              while (_0x8dc7cc.result.result == 0) {
                _0x8dc7cc = await this.useSkill(_0x72860b.skillsName[0]);
              }
            }
          }
          _0x3f2224++;
          if (_0x3f2224 > 6) {
            addGameLog("萨菲罗结束");
            const _0x21b9d6 = {
              op: 1,
              arrayType: "defaultTeam",
              subArray: 0,
              idx: 1,
              teamUp: 0,
              fightType: 0,
              getTimeList: _0x33620d
            };
            await this.send_message("cs_new_change_petArray", _0x21b9d6);
            break;
          }
        } else {
          addGameLog("电池不足");
          break;
        }
      }
      this.stop();
    } catch (_0x41708c) {}
  }
  async sfl50Battle() {
    let _0x2be94c = await this.dispatchSelfPet("奥斯卡", [22637, 22638]);
    if (_0x2be94c) {
      return {
        pet: _0x2be94c,
        skillsName: [22637, 22638]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async sfl200Battle() {
    let _0x1566c1 = await this.dispatchSelfPet("谱尼", [11261, 20605]);
    if (_0x1566c1) {
      return {
        pet: _0x1566c1,
        skillsName: [11261, 20605]
      };
    }
    let _0x68d04b = await this.dispatchSelfPet("熊猫", [41030, 41027]);
    if (_0x68d04b) {
      return {
        pet: _0x68d04b,
        skillsName: [41030, 41027]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async sfl300Battle() {
    let _0x72f11 = await this.dispatchSelfPet("库贝撒", [22197, 22195]);
    if (_0x72f11) {
      return {
        pet: _0x72f11,
        skillsName: [22197, 22195]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async blackrabbitpet() {
    let _0x4a8cf1 = await this.dispatchSelfPet("哈肯萨", [22615, 14816]);
    if (_0x4a8cf1) {
      return {
        pet: _0x4a8cf1,
        skillsName: [22615, 14816]
      };
    }
    let _0x11e990 = await this.dispatchSelfPet("赫尔卡长老", [20592, 32127]);
    if (_0x11e990) {
      return {
        pet: _0x11e990,
        skillsName: [20592, 32127]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async blackrabbitbattle() {
    let _0x4a0fe1 = MFC.userInfo.defaultTeam;
    while (true) {
      if (MFC.attr.getAttr(MFC.attrType.dailyNv1FightFieldBossDamageStart + xls.mapBossChallenge.getItems().filter(function (_0x32b723) {
        var _0x38d36a = new Date((_0x32b723.date + " " + _0x32b723.time.split("-")[0]).replace(/_/g, "/"));
        var _0x884390 = new Date((_0x32b723.date + " " + _0x32b723.time.split("-")[1]).replace(/_/g, "/"));
        return _0x32b723.battleType == 71 && MFC.serverTimer.date > _0x38d36a && MFC.serverTimer.date < _0x884390;
      })[0].activityType - 1) > 150000) {
        let _0x38f1b4 = xls.mapBossChallenge.getItems().filter(function (_0x4111fa) {
          var _0x1ef573 = new Date((_0x4111fa.date + " " + _0x4111fa.time.split("-")[0]).replace(/_/g, "/"));
          var _0x1c6fab = new Date((_0x4111fa.date + " " + _0x4111fa.time.split("-")[1]).replace(/_/g, "/"));
          return _0x4111fa.battleType == 71 && MFC.serverTimer.date > _0x1ef573 && MFC.serverTimer.date < _0x1c6fab;
        })[0].activityType;
        if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x38f1b4 - 1), 4) > 0 && BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x38f1b4 - 1), 3) > 0 && BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x38f1b4 - 1), 2) > 0 && BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x38f1b4 - 1), 1) > 0) {
          addGameLog("夜之诅咒结束");
          break;
        } else {
          for (let _0x35f012 = 0; _0x35f012 < 4; _0x35f012++) {
            if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x38f1b4 - 1), _0x35f012 + 1) == 0) {
              const _0x2df456 = {
                activityType: 2,
                index: _0x35f012 + 1
              };
              await this.send_message("cs_get_nv1_fight_boss_box", _0x2df456);
              addGameLog("领取第" + (_0x35f012 + 1) + "个宝箱");
            }
          }
        }
      } else if (MFC.serverTimer.date.getHours() > 17 && MFC.serverTimer.date.getHours() <= 21) {
        if (MFC.userInfo.curEnergy > 5) {
          let _0x1653d8 = xls.mapBossChallenge.getItems().filter(function (_0x16d3ee) {
            var _0x555962 = new Date((_0x16d3ee.date + " " + _0x16d3ee.time.split("-")[0]).replace(/_/g, "/"));
            var _0x406ef4 = new Date((_0x16d3ee.date + " " + _0x16d3ee.time.split("-")[1]).replace(/_/g, "/"));
            return _0x16d3ee.battleType == 71 && MFC.serverTimer.date > _0x555962 && MFC.serverTimer.date < _0x406ef4;
          })[0].id;
          let _0x369a90 = await this.blackrabbitpet();
          if (!_0x369a90) {
            break;
          }
          const _0xd9377f = {
            op: 1,
            arrayType: "defaultTeam",
            subArray: 0,
            idx: 1,
            teamUp: 0,
            fightType: 0,
            getTimeList: [_0x369a90.pet.getTime]
          };
          await this.send_message("cs_new_change_petArray", _0xd9377f);
          const _0x3c1326 = {
            configId: _0x1653d8,
            btlType: 71
          };
          await this.send_message("cs_leader_nv1_fight_boss_check", _0x3c1326);
          let _0x5a215a = await this.waitEvent("sc_notify_nv1_fight_boss_start");
          let _0x321e87 = JSON.parse(_0x5a215a.gameBody[_0x5a215a.gameBody.length - 1].raw);
          _0x5a215a.gameBody.splice(0, _0x5a215a.gameBody.length);
          const _0x5cdddc = {
            btlType: 71,
            petList: [_0x369a90.pet.getTime],
            id: _0x1653d8,
            btlSvrId: _0x321e87.battleId,
            groupId: _0x321e87.groupId
          };
          await this.send_message("cs_nv1_fight_boss_start_battle", _0x5cdddc);
          await this.send_message("cs_set_match_battle_speed", {
            speed: 2
          });
          let _0x362423 = await this.waitEvent("sc_battle_notify_load_resource");
          _0x362423.gameBody.splice(0, _0x362423.gameBody.length);
          const _0x4352e5 = {
            groupId: _0x321e87.groupId,
            battleType: 157
          };
          await this.send_message("cs_online_load_resource", _0x4352e5);
          await wait(300);
          const _0x423061 = {
            opType: 5,
            data: null,
            groupId: _0x321e87.groupId
          };
          await this.send_message("cs_online_player_operation", _0x423061);
          _0x362423 = await this.waitEvent("sc_battle_notify_round_result");
          let _0x375b1f = JSON.parse(_0x362423.gameBody[_0x362423.gameBody.length - 1].raw);
          _0x362423.gameBody.splice(0, _0x362423.gameBody.length);
          addGameLog("释放技能:" + petConfig.SkillConfig.getDef(_0x369a90.skillsName[0]).name);
          const _0x36066c = {
            skillID: _0x369a90.skillsName[0]
          };
          const _0x1315a8 = {
            opType: 1,
            data: _0x36066c,
            groupId: _0x321e87.groupId
          };
          await this.send_message("cs_online_player_operation", _0x1315a8);
          _0x362423 = await this.waitEvent("sc_battle_notify_round_result");
          _0x375b1f = JSON.parse(_0x362423.gameBody[_0x362423.gameBody.length - 1].raw);
          _0x362423.gameBody.splice(0, _0x362423.gameBody.length);
          while (_0x375b1f.result.result == 0) {
            addGameLog("释放技能:" + petConfig.SkillConfig.getDef(_0x369a90.skillsName[1]).name);
            const _0x4efe65 = {
              skillID: _0x369a90.skillsName[1]
            };
            const _0x3fa4b2 = {
              opType: 1,
              data: _0x4efe65,
              groupId: _0x321e87.groupId
            };
            await this.send_message("cs_online_player_operation", _0x3fa4b2);
            _0x362423 = await this.waitEvent("sc_notify_nv1_battle_end");
            let _0x32d0df = JSON.parse(_0x362423.gameBody[_0x362423.gameBody.length - 1].raw);
            _0x362423.gameBody.splice(0, _0x362423.gameBody.length);
            if (_0x32d0df) {
              break;
            }
          }
        } else {
          addGameLog("体力不足5");
          break;
        }
      } else {
        addGameLog("时间在18~24点开放");
        break;
      }
    }
    addGameLog("将阵容切换回来");
    const _0x53f3fc = {
      op: 1,
      arrayType: "defaultTeam",
      subArray: 0,
      idx: 1,
      teamUp: 0,
      fightType: 0,
      getTimeList: _0x4a0fe1
    };
    await this.send_message("cs_new_change_petArray", _0x53f3fc);
    this.stop();
  }
  async game2048() {
    while (1) {
      if (MFC.attr.getAttr(MFC.attrType.dailySummerFeastDrop) == 2) {
        break;
      }
      let _0x3d8c31 = await this.send_message("cs_summer_feast", {
        type: 1,
        mv: 0
      });
      let _0x63a902 = 0;
      addGameLog("2048游戏第" + (MFC.attr.getAttr(MFC.attrType.dailySummerFeastDrop) + 1) + "次");
      while (1) {
        if (_0x3d8c31.state !== 2) {
          break;
        }
        if (_0x63a902 == 0) {
          _0x63a902++;
          _0x3d8c31 = await this.send_message("cs_summer_feast", {
            type: 2,
            mv: 1
          });
        }
        if (_0x63a902 == 1) {
          _0x63a902++;
          _0x3d8c31 = await this.send_message("cs_summer_feast", {
            type: 2,
            mv: 4
          });
        }
        if (_0x63a902 == 2) {
          _0x63a902++;
          _0x3d8c31 = await this.send_message("cs_summer_feast", {
            type: 2,
            mv: 2
          });
        }
        if (_0x63a902 == 3) {
          _0x63a902 = 0;
          _0x3d8c31 = await this.send_message("cs_summer_feast", {
            type: 2,
            mv: 3
          });
        }
        if (_0x3d8c31.desc) {
          if (_0x3d8c31.desc.indexOf("已经领取过奖励了") !== -1) {
            break;
          } else {
            _0x63a902++;
            _0x3d8c31.state = 2;
          }
        }
        if (_0x3d8c31.state == 1) {
          addGameLog("成功");
          break;
        }
      }
    }
    let _0x100044 = xls.activityTaskReset.getItems().filter(function (_0x8ca32d) {
      return _0x8ca32d.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x8ca32d.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x8ca32d.activityIdentity == 460;
    });
    for (let _0x1faa20 = 0; _0x1faa20 < _0x100044.length; _0x1faa20++) {
      if (NewTaskUtils.getTaskResetStateByIndex(_0x100044[_0x1faa20]) == 1) {
        const _0x155771 = {
          carnivalId: _0x100044[_0x1faa20].id,
          recvIndex: 0
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x155771);
      } else if (NewTaskUtils.getTaskResetStateByIndex(_0x100044[_0x1faa20]) == 0) {
        addGameLog(_0x100044[_0x1faa20].name + _0x100044[_0x1faa20].task + "未完成");
      }
    }
    this.stop();
  }
  async darkui() {
    super.start();
    let _0x4de064 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x14a040 = [];
      var _0x195b9c = SimpleAlertUi({
        height: 350,
        width: 400
      });
      _0x4de064.alertWin = _0x195b9c;
      const _0x3bc1a9 = {
        text: "暗黑武斗场",
        x: _0x195b9c.width / 2 - 32,
        y: _0x195b9c.height / 15
      };
      var _0x2a2a36 = createLabel(_0x3bc1a9);
      _0x14a040.push(_0x2a2a36);
      const _0x2e4992 = {
        text: "请在圆点点击选择挑战难度:",
        x: _0x195b9c.applicationWidth / 2 - 60,
        y: _0x2a2a36.y + _0x2a2a36.height + 20
      };
      var _0x407894 = createLabel(_0x2e4992);
      _0x14a040.push(_0x407894);
      const _0x3a70e5 = {
        text: "简单",
        x: _0x195b9c.applicationWidth / 8,
        y: _0x407894.y + 40
      };
      var _0x5e954e = createLabel(_0x3a70e5);
      _0x14a040.push(_0x5e954e);
      const _0x3f8983 = {
        x: _0x5e954e.x + _0x5e954e.width + 10,
        y: _0x5e954e.y,
        selected: false,
        storageKey: "darkbattler1"
      };
      let _0x103526 = createRadio(_0x3f8983);
      _0x14a040.push(_0x103526);
      const _0x5b7a17 = {
        text: "普通",
        x: _0x103526.x + _0x103526.width + 40,
        y: _0x5e954e.y
      };
      var _0x40b28a = createLabel(_0x5b7a17);
      _0x14a040.push(_0x40b28a);
      const _0x28a400 = {
        x: _0x40b28a.x + _0x40b28a.width + 10,
        y: _0x5e954e.y,
        selected: false,
        storageKey: "darkbattler2"
      };
      let _0x62b887 = createRadio(_0x28a400);
      _0x14a040.push(_0x62b887);
      const _0x46e7fc = {
        text: "困难",
        x: _0x62b887.x + _0x62b887.width + 40,
        y: _0x5e954e.y
      };
      var _0x1230fe = createLabel(_0x46e7fc);
      _0x14a040.push(_0x1230fe);
      const _0x14b972 = {
        x: _0x1230fe.x + _0x1230fe.width + 10,
        y: _0x5e954e.y,
        selected: true,
        storageKey: "darkbattler3"
      };
      let _0x2b152b = createRadio(_0x14b972);
      _0x14a040.push(_0x2b152b);
      const _0x2ab2c4 = {
        x: 70,
        y: _0x5e954e.y + _0x5e954e.width + 10,
        width: 150,
        prompt: "请输入挑战次数",
        storageKey: "darknum"
      };
      var _0x415eac = createEdit(_0x2ab2c4);
      _0x14a040.push(_0x415eac);
      const _0x36d748 = {
        text: "输入数字但不超过",
        x: _0x415eac.x + _0x415eac.width + 10,
        y: _0x415eac.y + 10
      };
      var _0x5eaa60 = createLabel(_0x36d748);
      _0x14a040.push(_0x5eaa60);
      var _0x3132ea = createLabel({
        text: 5 - MFC.attr.getAttr(MFC.attrType.dailyDarknessEnterTimes),
        x: _0x5eaa60.x + _0x5eaa60.width + 5,
        y: _0x415eac.y + 10,
        textColor: 16776960
      });
      _0x14a040.push(_0x3132ea);
      const _0x3dbd7c = {
        x: 70,
        y: _0x415eac.y + _0x415eac.height + 20,
        width: 150,
        prompt: "请输入挑战层数",
        storageKey: "darkfloor"
      };
      var _0xef2a72 = createEdit(_0x3dbd7c);
      _0x14a040.push(_0xef2a72);
      const _0x7afed0 = {
        text: "输入数字在",
        x: _0xef2a72.x + _0xef2a72.width + 10,
        y: _0xef2a72.y + 10
      };
      var _0x41a49b = createLabel(_0x7afed0);
      _0x14a040.push(_0x41a49b);
      const _0xbfeb26 = {
        text: "1 ~ 14",
        x: _0x41a49b.x + _0x41a49b.width + 5,
        y: _0xef2a72.y + 10,
        textColor: 16776960
      };
      var _0xac5fa2 = createLabel(_0xbfeb26);
      _0x14a040.push(_0xac5fa2);
      const _0x9c8c85 = {
        text: "暗黑武斗场用的绝命火焰",
        x: _0x195b9c.applicationWidth / 2 - 55,
        y: _0xef2a72.y + 46,
        textColor: 16711680
      };
      var _0x6d46f9 = createLabel(_0x9c8c85);
      _0x14a040.push(_0x6d46f9);
      _0x4de064.addAllUis(_0x14a040);
      _0x195b9c.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x4de064.stop();
      }, function () {
        localStorage.setItem("darkbattler1", _0x103526.selected);
        localStorage.setItem("darkbattler2", _0x62b887.selected);
        localStorage.setItem("darkbattler3", _0x2b152b.selected);
        localStorage.setItem("darknum", _0x415eac.text);
        localStorage.setItem("darkfloor", _0xef2a72.text);
        if (_0x103526.selected) {
          _0x4de064.diffcult = 1;
        }
        if (_0x62b887.selected) {
          _0x4de064.diffcult = 2;
        }
        if (_0x2b152b.selected) {
          _0x4de064.diffcult = 3;
        }
        if (_0x415eac.text.length == 0) {
          MFC.bubbleAlert.showAlert("请输入挑战次数");
          return true;
        }
        if (!Number.isInteger(parseInt(_0x415eac.text)) || _0x415eac.text > 5 - MFC.attr.getAttr(MFC.attrType.dailyDarknessEnterTimes) || parseInt(_0x415eac.text) < 0) {
          MFC.bubbleAlert.showAlert("挑战次数错误");
          return true;
        }
        localStorage.setItem("darknum", _0x415eac.text);
        if (_0xef2a72.text.length == 0) {
          MFC.bubbleAlert.showAlert("请输入挑战层数");
          return true;
        }
        if (!Number.isInteger(parseInt(_0xef2a72.text)) || parseInt(_0xef2a72.text) > 14 || parseInt(_0xef2a72.text) <= 0) {
          MFC.bubbleAlert.showAlert("挑战层数错误");
          return true;
        }
        localStorage.setItem("darkfloor", _0xef2a72.text);
        _0x4de064.Darkbattle();
      }], null);
      _0x195b9c.showAlert();
    });
  }
  async Darkbattle() {
    if (localStorage.getItem("darknum") * 20 > MFC.userInfo.curEnergy) {
      addGameLog("电池不够");
      this.stop();
    } else {
      let _0xd61a4f = PetManager.getInstance().getAllPets().map(_0x40ce72 => {
        if (_0x40ce72.level == 100) {
          if (_0x40ce72.skills.indexOf(11022) != -1) {
            return _0x40ce72.getTime;
          }
        }
      }).filter(_0x9271dd => _0x9271dd)[0];
      if (_0xd61a4f == undefined) {
        addGameLog("背包没有绝命火焰");
        this.stop();
      } else {
        let _0x505b70 = 0;
        while (true) {
          let _0xe338f0 = parseInt(localStorage.getItem("darknum")) - 1;
          let _0x31118f = 0;
          let _0x35dda5 = [0, 2, 4];
          if (_0x505b70 > _0xe338f0) {
            break;
          } else {
            const _0x8d7a8e = {
              op: 1,
              arrayType: "defaultTeam",
              subArray: 0,
              idx: 1,
              teamUp: 0,
              fightType: 0,
              getTimeList: [_0xd61a4f]
            };
            await this.send_message("cs_new_change_petArray", _0x8d7a8e);
            await this.send_message("cs_darkness_difficult_rank", {
              difficult: this.diffcult,
              type: 1
            });
            await this.send_message("cs_darkness_enter", {
              diffculty: this.diffcult,
              floor: parseInt(localStorage.getItem("darkfloor"))
            });
            addGameLog("第" + localStorage.getItem("darkfloor") + "层;难度:" + this.diffcult);
            await this.send_message("cs_darkness_open", {
              index: 0,
              method: 0
            });
            await this.send_message("cs_darkness_open", {
              index: 2,
              method: 0
            });
            await this.send_message("cs_darkness_open", {
              index: 4,
              method: 0
            });
            await wait(200);
            while (_0x31118f < 3) {
              const _0x30b075 = {
                petList: [_0xd61a4f],
                bossIndex: _0x35dda5[_0x31118f]
              };
              await this.send_message("cs_darkness_start_battle", _0x30b075);
              await this.initBattle();
              let _0x332a16 = await this.useSkill(11022);
              while (_0x332a16.result.result == 0) {
                if (_0x332a16.result.playerInfos[0].uid == MFC.userInfo.uid) {
                  if (_0x332a16.result.playerInfos[0].nextRoundOP !== 1) {
                    addGameLog("首发被击败");
                    break;
                  }
                } else if (_0x332a16.result.playerInfos[1].nextRoundOP !== 1) {
                  addGameLog("首发被击败");
                  break;
                }
                if (_0x332a16.result.roundNum > 5) {
                  break;
                }
                logger("未击败，继续攻击");
                _0x332a16 = await this.useSkill(11022);
              }
              if (_0x332a16.result.result == 1) {
                _0x31118f++;
              }
              await wait(300);
            }
            let _0x56bc1c = _0x505b70 + 1;
            addGameLog("成功完成第" + _0x56bc1c + "次");
            _0x505b70++;
          }
        }
        addGameLog("暗黑武斗场完成");
        this.stop();
      }
    }
  }
  async expfightui() {
    super.start();
    let _0x533135 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x2f0599 = [];
      var _0x280c59 = SimpleAlertUi({
        height: 350,
        width: 500
      });
      _0x533135.alertWin = _0x280c59;
      const _0x4ea83e = {
        text: "能量大作战",
        x: _0x280c59.width / 2 - 32,
        y: _0x280c59.height / 15
      };
      var _0x5657f9 = createLabel(_0x4ea83e);
      _0x5657f9.size = 20;
      _0x2f0599.push(_0x5657f9);
      const _0x3b11a7 = {
        text: `默认选择困难难度;神秘狗灵神加万象;
蒂朵异维需要符文
比德尔6块钱柔弱无限超动灵破闪记得充能给特功刻印`,
        x: _0x280c59.applicationWidth / 2 - 235,
        y: _0x5657f9.y + _0x5657f9.height + 20
      };
      var _0x4ac4e5 = createLabel(_0x3b11a7);
      _0x2f0599.push(_0x4ac4e5);
      const _0x311d9e = {
        text: "神秘狗",
        x: _0x280c59.applicationWidth / 2 - 48,
        y: _0x4ac4e5.y + _0x4ac4e5.height + 20
      };
      var _0x143c5d = createLabel(_0x311d9e);
      _0x2f0599.push(_0x143c5d);
      const _0x57bcbd = {
        x: _0x143c5d.x + 70,
        y: _0x143c5d.y,
        selected: true,
        storageKey: "expfightteam1"
      };
      let _0x5a4949 = createToggle(_0x57bcbd);
      _0x2f0599.push(_0x5a4949);
      const _0x4738f3 = {
        text: "蒂朵",
        x: _0x143c5d.x,
        y: _0x143c5d.y + 40
      };
      var _0x1f37c9 = createLabel(_0x4738f3);
      _0x2f0599.push(_0x1f37c9);
      const _0x1f758b = {
        x: _0x1f37c9.x + 70,
        y: _0x1f37c9.y,
        selected: false,
        storageKey: "expfightteam2"
      };
      let _0x136614 = createToggle(_0x1f758b);
      _0x2f0599.push(_0x136614);
      const _0x584da1 = {
        text: "比德尔",
        x: _0x143c5d.x,
        y: _0x1f37c9.y + 40
      };
      var _0x4e7c02 = createLabel(_0x584da1);
      _0x2f0599.push(_0x4e7c02);
      const _0xe99289 = {
        x: _0x4e7c02.x + 70,
        y: _0x4e7c02.y,
        selected: false,
        storageKey: "expfightteam3"
      };
      let _0x33ca8f = createToggle(_0xe99289);
      _0x2f0599.push(_0x33ca8f);
      _0x533135.addAllUis(_0x2f0599);
      _0x280c59.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x533135.stop();
      }, function () {
        localStorage.setItem("expfightteam1", _0x5a4949.selected);
        localStorage.setItem("expfightteam2", _0x136614.selected);
        localStorage.setItem("expfightteam3", _0x33ca8f.selected);
        if (_0x5a4949.selected && _0x136614.selected || _0x136614.selected && _0x33ca8f.selected || _0x5a4949.selected && _0x33ca8f.selected || _0x5a4949.selected && _0x136614.selected && _0x33ca8f.selected) {
          addGameLog("请不要同时选中多个阵容");
          _0x533135.stop();
        } else if (_0x5a4949.selected || _0x136614.selected || _0x33ca8f.selected) {
          if (xls.activityTimeLimit.getItems()[30].startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= xls.activityTimeLimit.getItems()[30].endTime) {
            if (_0x5a4949.selected) {
              _0x533135.expfight1();
            }
            if (_0x136614.selected) {
              _0x533135.expfight2();
            }
            if (_0x33ca8f.selected) {
              _0x533135.expfight3();
            }
          } else {
            addGameLog(xls.activityTimeLimit.getItems()[30].activityName + "时间在" + xls.activityTimeLimit.getItems()[30].startTime + "~" + xls.activityTimeLimit.getItems()[30].endTime);
            addGameLog("不在活动时间内");
            _0x533135.stop();
          }
        }
        if (_0x5a4949.selected == false && _0x136614.selected == false && _0x33ca8f.selected == false) {
          addGameLog("请选择阵容");
          _0x533135.stop();
        }
      }], null);
      _0x280c59.showAlert();
    });
  }
  async expfight1() {
    let _0x5ba7db;
    switch (VIPManager.getInstance().vipLevel) {
      case 0:
        _0x5ba7db = 4;
        break;
      case 1:
        _0x5ba7db = 5;
        break;
      case 2:
      case 3:
        _0x5ba7db = 6;
        break;
      case 4:
      case 5:
        _0x5ba7db = 7;
        break;
      case 6:
      case 7:
        _0x5ba7db = 8;
        break;
      case 8:
      case 9:
        _0x5ba7db = 9;
        break;
      case 10:
        _0x5ba7db = 10;
        break;
    }
    logger("boss" + (40 + MFC.serverTimer.date.getDay()) + "与" + (33 + MFC.serverTimer.date.getDay()));
    while (true) {
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 3) == 0) {
        addGameLog("坚持到底困难还未首胜");
        let _0x2a9e11 = PetManager.getInstance().getAllPets().map(_0x1a0cb6 => {
          if (_0x1a0cb6.nick.indexOf("SP艾诺尔") != -1) {
            return _0x1a0cb6;
          }
        }).filter(_0x140112 => _0x140112 !== undefined)[0];
        if (_0x2a9e11 !== undefined) {
          if (_0x2a9e11.skills.indexOf(40958) != -1) {
            if (_0x2a9e11.skills.indexOf(40957) != -1) {
              if (_0x2a9e11.skills.indexOf(31943) != -1 || _0x2a9e11.skills.indexOf(31940) != -1) {
                addGameLog("SP艾诺尔技能符合");
              } else {
                addGameLog("没有回影虚光灭或神影辉光");
                this.stop();
              }
            } else {
              addGameLog("没有万象归元");
              this.stop();
            }
          } else {
            addGameLog("没有灵神归寂");
            this.stop();
          }
        } else {
          addGameLog("没有SP艾诺尔");
          this.stop();
        }
        const _0x530a0d = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x2a9e11.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x530a0d);
        await this.expbattle12();
        touchBtn(sta);
      } else {
        addGameLog("坚持到底困难已首胜");
      }
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 6) == 0) {
        addGameLog("不惧反弹困难还未首胜");
        let _0x529f51 = PetManager.getInstance().getAllPets().map(_0x208b37 => {
          if (_0x208b37.nick.indexOf("SP艾诺尔") != -1) {
            return _0x208b37;
          }
        }).filter(_0x524f13 => _0x524f13 !== undefined)[0];
        if (_0x529f51 !== undefined) {
          if (_0x529f51.skills.indexOf(40958) != -1) {
            if (_0x529f51.skills.indexOf(40957) != -1) {
              if (_0x529f51.skills.indexOf(31943) != -1 || _0x529f51.skills.indexOf(31940) != -1) {
                addGameLog("SP艾诺尔技能符合");
              } else {
                addGameLog("没有回影虚光灭或神影辉光");
                this.stop();
              }
            } else {
              addGameLog("没有万象归元");
              this.stop();
            }
          } else {
            addGameLog("没有灵神归寂");
            this.stop();
          }
        } else {
          addGameLog("没有SP艾诺尔");
          this.stop();
        }
        let _0x1be49d = PetManager.getInstance().getAllPets().map(_0x169e68 => {
          if (_0x169e68.level == 100) {
            return _0x169e68;
          }
        }).filter(_0x2a17fd => _0x2a17fd !== undefined)[0];
        const _0x3da34f = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x529f51.getTime, _0x1be49d.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x3da34f);
        await this.expbattle1();
        touchBtn(sta);
      } else {
        addGameLog("不惧反弹困难已首胜");
        addGameLog("即将进行扫荡");
        if (_0x5ba7db - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount) > 0) {
          for (let _0x5efdb0 = 0; _0x5efdb0 < _0x5ba7db - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount); _0x5efdb0++) {
            await this.send_message("cs_energy_fight_boss", {
              getTime: 3,
              index: 40 + MFC.serverTimer.date.getDay(),
              sdFlag: 1
            });
            await wait(200);
            touchBtn(sta);
          }
        } else {
          break;
        }
      }
    }
    addGameLog("能量大作战结束");
    this.stop();
  }
  async expbattle1() {
    await this.send_message("cs_energy_fight_boss", {
      getTime: 3,
      index: 40 + MFC.serverTimer.date.getDay()
    });
    await this.initBattle();
    let _0x232445 = await this.useSkill(40958);
    while (_0x232445.result.result == 0) {
      _0x232445 = await this.useSkill(40957);
      if (_0x232445.result.roundNum > 7) {
        break;
      }
    }
    addGameLog("成功击败");
  }
  async expbattle12() {
    await this.send_message("cs_energy_fight_boss", {
      getTime: 3,
      index: 33 + MFC.serverTimer.date.getDay()
    });
    await this.initBattle();
    let _0x5700eb = this.useSkill(40958);
    for (let _0x28cb84 = 0; _0x28cb84 < 4; _0x28cb84++) {
      if (_0x5700eb.result.result == 0) {
        if (PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills.indexOf(31943) != -1) {
          _0x5700eb = this.useSkill(31943);
        } else {
          _0x5700eb = this.useSkill(31940);
        }
      } else {
        break;
      }
    }
    if (_0x5700eb.result.result == 0) {
      _0x5700eb = this.useSkill(40957);
      if (_0x5700eb.result.result !== 0) {
        addGameLog("成功击败");
      }
    }
  }
  async expfight2() {
    let _0x1c2cda;
    switch (VIPManager.getInstance().vipLevel) {
      case 0:
        _0x1c2cda = 4;
        break;
      case 1:
        _0x1c2cda = 5;
        break;
      case 2:
      case 3:
        _0x1c2cda = 6;
        break;
      case 4:
      case 5:
        _0x1c2cda = 7;
        break;
      case 6:
      case 7:
        _0x1c2cda = 8;
        break;
      case 8:
      case 9:
        _0x1c2cda = 9;
        break;
      case 10:
        _0x1c2cda = 10;
        break;
    }
    logger("boss" + (40 + MFC.serverTimer.date.getDay()) + "与" + (33 + MFC.serverTimer.date.getDay()));
    while (true) {
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 3) == 0) {
        addGameLog("坚持到底困难还未首胜");
        let _0x3cb4c9 = PetManager.getInstance().getAllPets().map(_0x237336 => {
          if (_0x237336.nick.indexOf("蒂朵") != -1) {
            if (_0x237336.skills.indexOf(100604) != -1) {
              return _0x237336;
            }
          }
        }).filter(_0x346e5b => _0x346e5b !== undefined)[0];
        if (_0x3cb4c9 !== undefined) {
          addGameLog("有异维守护蒂朵");
        } else {
          addGameLog("没有异维守护蒂朵");
          this.stop();
        }
        let _0x5b68d7 = PetManager.getInstance().getAllPets().map(_0x431297 => {
          if (_0x431297.level == 100) {
            return _0x431297;
          }
        }).filter(_0x216739 => _0x216739 !== undefined)[0];
        const _0x2455e2 = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x3cb4c9.getTime, _0x5b68d7.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x2455e2);
        await this.expbattle22();
        touchBtn(sta);
      } else {
        addGameLog("坚持到底困难已首胜");
      }
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 6) == 0) {
        addGameLog("不惧反弹困难还未首胜");
        let _0x3ad7e4 = PetManager.getInstance().getAllPets().map(_0x43566d => {
          if (_0x43566d.nick.indexOf("蒂朵") != -1) {
            if (_0x43566d.skills.indexOf(100604) != -1) {
              return _0x43566d;
            }
          }
        }).filter(_0x58c9c9 => _0x58c9c9 !== undefined)[0];
        if (_0x3ad7e4 !== undefined) {
          addGameLog("有异维守护蒂朵");
        } else {
          addGameLog("没有异维守护蒂朵");
          this.stop();
        }
        let _0x3c8720 = PetManager.getInstance().getAllPets().map(_0x173b09 => {
          if (_0x173b09.level == 100) {
            return _0x173b09;
          }
        }).filter(_0x1a972a => _0x1a972a !== undefined)[0];
        const _0x53bc64 = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x3ad7e4.getTime, _0x3c8720.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x53bc64);
        await this.expbattle21();
        touchBtn(sta);
      } else {
        addGameLog("不惧反弹困难已首胜");
        addGameLog("即将进行扫荡");
        if (_0x1c2cda - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount) > 0) {
          for (let _0x39f41f = 0; _0x39f41f < _0x1c2cda - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount); _0x39f41f++) {
            await this.send_message("cs_energy_fight_boss", {
              getTime: 3,
              index: 40 + MFC.serverTimer.date.getDay(),
              sdFlag: 1
            });
            await wait(200);
            touchBtn(sta);
          }
        } else {
          break;
        }
      }
    }
    addGameLog("能量大作战结束");
    this.stop();
  }
  async expbattle21() {
    await this.send_message("cs_energy_fight_boss", {
      getTime: 3,
      index: 40 + MFC.serverTimer.date.getDay()
    });
    await this.initBattle();
    let _0x31ce21 = await this.useSkill(100604);
    if (_0x31ce21.result.result == 0) {
      _0x31ce21 = await this.useSkill(100604);
    }
    if (_0x31ce21.result.result == 0) {
      await this.expbattle21();
    } else {
      addGameLog("成功击败");
    }
  }
  async expbattle22() {
    await this.send_message("cs_energy_fight_boss", {
      getTime: 3,
      index: 33 + MFC.serverTimer.date.getDay()
    });
    await this.initBattle();
    let _0x2643a3 = await this.useSkill(100604);
    if (_0x2643a3.result.result == 0) {
      _0x2643a3 = await this.useSkill(100604);
    }
    if (_0x2643a3.result.result == 0) {
      await this.expbattle22();
    } else {
      addGameLog("成功击败");
    }
  }
  async expfight3() {
    let _0x58d7a4;
    switch (VIPManager.getInstance().vipLevel) {
      case 0:
        _0x58d7a4 = 4;
        break;
      case 1:
        _0x58d7a4 = 5;
        break;
      case 2:
      case 3:
        _0x58d7a4 = 6;
        break;
      case 4:
      case 5:
        _0x58d7a4 = 7;
        break;
      case 6:
      case 7:
        _0x58d7a4 = 8;
        break;
      case 8:
      case 9:
        _0x58d7a4 = 9;
        break;
      case 10:
        _0x58d7a4 = 10;
        break;
    }
    logger("boss" + (40 + MFC.serverTimer.date.getDay()) + "与" + (33 + MFC.serverTimer.date.getDay()));
    while (true) {
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 3) == 0) {
        addGameLog("坚持到底困难还未首胜");
        let _0x579094 = PetManager.getInstance().getAllPets().map(_0x3912dd => {
          if (_0x3912dd.skills.indexOf(42971) != -1 && _0x3912dd.skills.indexOf(42972) != -1 && _0x3912dd.skills.indexOf(32346) != -1 && _0x3912dd.level == 100) {
            return _0x3912dd;
          }
        }).filter(_0x583455 => _0x583455 !== undefined)[0];
        let _0x3de7f3 = PetManager.getInstance().getAllPets().map(_0x73f4e5 => {
          if (_0x73f4e5.level == 100) {
            return _0x73f4e5;
          }
        }).filter(_0x38de5f => _0x38de5f !== undefined)[0];
        if (_0x579094 !== undefined) {
          if (_0x579094.skills.indexOf(42971) != -1) {
            if (_0x579094.skills.indexOf(42972) != -1) {
              if (_0x579094.skills.indexOf(32346) != -1) {
                addGameLog("比德尔符合");
              } else {
                addGameLog("没有超动灵破闪");
                this.stop();
              }
            } else {
              addGameLog("没有无限愤怒");
              this.stop();
            }
          } else {
            addGameLog("没有柔弱身躯");
            this.stop();
          }
        } else {
          addGameLog("比德尔或没有100级");
          this.stop();
        }
        const _0x182dd7 = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x579094.getTime, _0x3de7f3.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x182dd7);
        await this.expbattle32();
        touchBtn(sta);
      } else {
        addGameLog("坚持到底困难已首胜");
      }
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 6) == 0) {
        addGameLog("不惧反弹困难还未首胜");
        let _0x54b04e = PetManager.getInstance().getAllPets().map(_0x1e9901 => {
          if (_0x1e9901.skills.indexOf(42971) != -1 && _0x1e9901.skills.indexOf(42972) != -1 && _0x1e9901.skills.indexOf(32346) != -1 && _0x1e9901.level == 100) {
            return _0x1e9901;
          }
        }).filter(_0xbb3158 => _0xbb3158 !== undefined)[0];
        let _0xdc428f = PetManager.getInstance().getAllPets().map(_0x2157cf => {
          if (_0x2157cf.level == 100) {
            return _0x2157cf;
          }
        }).filter(_0xc26705 => _0xc26705 !== undefined)[0];
        if (_0x54b04e !== undefined) {
          if (_0x54b04e.skills.indexOf(42971) != -1) {
            if (_0x54b04e.skills.indexOf(42972) != -1) {
              if (_0x54b04e.skills.indexOf(32346) != -1) {
                addGameLog("比德尔符合");
              } else {
                addGameLog("没有超动灵破闪");
                this.stop();
              }
            } else {
              addGameLog("没有无限愤怒");
              this.stop();
            }
          } else {
            addGameLog("没有柔弱身躯");
            this.stop();
          }
        } else {
          addGameLog("比德尔或没有100级");
          this.stop();
        }
        const _0x2ff377 = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x54b04e.getTime, _0xdc428f.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x2ff377);
        await this.expbattle31();
        touchBtn(sta);
      } else {
        addGameLog("不惧反弹困难已首胜");
        addGameLog("即将进行扫荡");
        if (_0x58d7a4 - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount) > 0) {
          for (let _0xe93e1a = 0; _0xe93e1a < _0x58d7a4 - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount); _0xe93e1a++) {
            await this.send_message("cs_energy_fight_boss", {
              getTime: 3,
              index: 40 + MFC.serverTimer.date.getDay(),
              sdFlag: 1
            });
            await wait(200);
            touchBtn(sta);
          }
        } else {
          break;
        }
      }
    }
    addGameLog("能量大作战结束");
    this.stop();
  }
  async expbattle31() {
    await this.send_message("cs_energy_fight_boss", {
      getTime: 3,
      index: 40 + MFC.serverTimer.date.getDay()
    });
    let _0x45beb2 = await this.initBattle();
    for (let _0x3091b9 = 0; _0x3091b9 < 3; _0x3091b9++) {
      if (_0x45beb2.result.result == 0) {
        _0x45beb2 = await this.useSkill(42971);
      }
    }
    if (_0x45beb2.result.result == 0) {
      _0x45beb2 = await this.useSkill(42972);
    }
    if (_0x45beb2.result.result == 0) {
      _0x45beb2 = await this.useSkill(42971);
    }
    if (_0x45beb2.result.result == 0) {
      _0x45beb2 = await this.useSkill(42972);
    }
    if (_0x45beb2.result.result == 0) {
      _0x45beb2 = await this.useSkill(42971);
    }
    if (_0x45beb2.result.result == 0) {
      _0x45beb2 = await this.useSkill(42972);
    }
    if (_0x45beb2.result.result == 0) {
      _0x45beb2 = await this.useSkill(32346);
    }
    if (_0x45beb2.result.result == 0) {
      await this.expbattle31();
    } else {
      addGameLog("成功击败");
    }
  }
  async expbattle32() {
    await this.send_message("cs_energy_fight_boss", {
      getTime: 3,
      index: 33 + MFC.serverTimer.date.getDay()
    });
    let _0x98f10 = await this.initBattle();
    for (let _0xd38eba = 0; _0xd38eba < 3; _0xd38eba++) {
      if (_0x98f10.result.result == 0) {
        _0x98f10 = await this.useSkill(42971);
      }
    }
    if (_0x98f10.result.result == 0) {
      _0x98f10 = await this.useSkill(42972);
    }
    if (_0x98f10.result.result == 0) {
      _0x98f10 = await this.useSkill(42971);
    }
    if (_0x98f10.result.result == 0) {
      _0x98f10 = await this.useSkill(42972);
    }
    if (_0x98f10.result.result == 0) {
      _0x98f10 = await this.useSkill(42971);
    }
    if (_0x98f10.result.result == 0) {
      _0x98f10 = await this.useSkill(42972);
    }
    while (_0x98f10.result.result == 0) {
      _0x98f10 = await this.useSkill(32346);
    }
    if (_0x98f10.result.result !== 1) {
      await this.expbattle32();
    } else {
      addGameLog("成功击败");
    }
  }
  async keluosileyuan() {
    while (1) {
      let _0x53e42f = await this.send_message("cs_get_mapBoss_data", {
        planetId: 1
      });
      if (_0x53e42f.reward[361] < 3 || _0x53e42f.reward[361] == undefined) {
        let _0x36e04f = new MapCatch();
        _0x36e04f.capIds = [4001, 4002, 4003];
        _0x36e04f.levelIds = [361];
        _0x36e04f.catchCounts = 1;
        _0x36e04f.stopTalent = 31;
        _0x36e04f.petteamstatus = true;
        await _0x36e04f.prcessBody();
      } else {
        addGameLog("抓小豆芽完成");
        break;
      }
    }
    while (1) {
      let _0x57ee55 = await this.send_message("cs_get_mapBoss_data", {
        planetId: 1
      });
      if (_0x57ee55.reward[360] < 3 || _0x57ee55.reward[360] == undefined) {
        let _0x108206 = new MapCatch();
        _0x108206.capIds = [4001, 4002, 4003];
        _0x108206.levelIds = [360];
        _0x108206.catchCounts = 1;
        _0x108206.stopTalent = 31;
        _0x108206.petteamstatus = true;
        await _0x108206.prcessBody();
      } else {
        addGameLog("抓依依完成");
        break;
      }
    }
    this.stop();
  }
  async keluosileyuan1() {
    while (1) {
      let _0x4d3173 = await this.send_message("cs_get_mapBoss_data", {
        planetId: 1
      });
      if (_0x4d3173.reward[361] < 3 || _0x4d3173.reward[361] == undefined) {
        let _0x4619a3 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam1[0]).skills[0];
        await this.send_message("cs_pve_activity_battle", {
          levelId: 361,
          battleType: 3
        });
        await this.initBattle();
        let _0x1f4ad7 = await this.useSkill(_0x4619a3);
        while (_0x1f4ad7.result.result === 0) {
          let _0x1b05ab = _0x1f4ad7.result.playerInfos.find(_0x184a6d => _0x184a6d.uid === MFC.userInfo.uid);
          let _0x3acd29 = _0x1b05ab ? _0x1b05ab.nextRoundOP : _0x1f4ad7.result.playerInfos[1].nextRoundOP;
          if (_0x3acd29 !== 1) {
            addGameLog("首发被击败");
            break;
          }
          if (_0x1f4ad7.result.roundNum > 5) {
            break;
          }
          addGameLog("未击败，继续攻击");
          _0x1f4ad7 = await this.useSkill(_0x4619a3);
        }
        await wait(300);
      } else {
        addGameLog("小豆芽完成");
        break;
      }
    }
    while (1) {
      let _0x380b7b = await this.send_message("cs_get_mapBoss_data", {
        planetId: 1
      });
      if (_0x380b7b.reward[360] < 3 || _0x380b7b.reward[360] == undefined) {
        let _0x3d3a79 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam1[0]).skills[0];
        await this.send_message("cs_pve_activity_battle", {
          levelId: 360,
          battleType: 3
        });
        await this.initBattle();
        let _0x577591 = await this.useSkill(_0x3d3a79);
        while (_0x577591.result.result === 0) {
          let _0x555628 = _0x577591.result.playerInfos.find(_0x1e6fa3 => _0x1e6fa3.uid === MFC.userInfo.uid);
          let _0x1a4a83 = _0x555628 ? _0x555628.nextRoundOP : _0x577591.result.playerInfos[1].nextRoundOP;
          if (_0x1a4a83 !== 1) {
            addGameLog("首发被击败");
            break;
          }
          if (_0x577591.result.roundNum > 5) {
            break;
          }
          addGameLog("未击败，继续攻击");
          _0x577591 = await this.useSkill(_0x3d3a79);
        }
        await wait(300);
      } else {
        addGameLog("依依完成");
        break;
      }
    }
    this.stop();
  }
  async bingbingpet() {
    let _0x3b1839 = XlsUtils.getItemsByKeyValue("mapMonster", "mapId", 50082).filter(function (_0x1af744) {
      return _0x1af744.date.split("|")[0] == deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_M_d") || _0x1af744.date.split("|")[1] == deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_M_d");
    });
    for (let _0x487f1b = 0; _0x487f1b < _0x3b1839.length; _0x487f1b++) {
      while (1) {
        const _0x187413 = {
          planetId: undefined
        };
        let _0x4ba290 = await this.send_message("cs_get_mapBoss_data", _0x187413);
        if (_0x4ba290.reward[_0x3b1839[_0x487f1b].id.toString()] < 5 || _0x4ba290.reward[_0x3b1839[_0x487f1b].id.toString()] == undefined) {
          let _0x3ae0cb = UserManager.getInstance().userInfo.defaultTeam[0];
          let _0x2f1190 = PetManager.getInstance().getPetInfoByGetTime(_0x3ae0cb).skills[0];
          await wait(300);
          const _0x308fb0 = {
            levelId: _0x3b1839[_0x487f1b].id,
            battleType: 3
          };
          await this.send_message("cs_pve_activity_battle", _0x308fb0);
          await this.initBattle();
          let _0x1e2334 = await this.useSkill(_0x2f1190);
          while (_0x1e2334.result.result === 0) {
            let _0x64284c = _0x1e2334.result.playerInfos.find(_0x3013e2 => _0x3013e2.uid === MFC.userInfo.uid).nextRoundOP;
            if (_0x64284c !== 1) {
              addGameLog("首发被击败");
              break;
            }
            addGameLog("未击败，继续攻击");
            _0x1e2334 = await this.useSkill(_0x2f1190);
          }
          await wait(300);
        } else {
          break;
        }
      }
    }
    addGameLog("闪光精灵大派对完成");
    this.stop();
  }
  async keluosivisitor() {
    addGameLog("开始进行对赌左轮!");
    while (1) {
      let _0x2a622b = await this.send_message("cs_PerilousRoulette", {
        op: 1,
        action: 0,
        itemId: 0,
        target: 0
      });
      if (JSON.stringify(_0x2a622b).includes("游戏未结束")) {
        await this.send_message("cs_PerilousRoulette", {
          op: 2,
          action: 3,
          itemId: 0,
          target: 0
        });
        await this.send_message("cs_PerilousRoulette", {
          op: 1,
          action: 0,
          itemId: 0,
          target: 0
        });
      }
      let _0x5e070c = 0;
      while (1) {
        let _0x52ea95 = await this.send_message("cs_PerilousRoulette", {
          op: 2,
          action: 1,
          itemId: 0,
          target: 2
        });
        if (_0x52ea95.real) {
          _0x5e070c++;
        }
        if (JSON.stringify(_0x52ea95).includes("目标已阵亡")) {
          await this.send_message("cs_PerilousRoulette", {
            op: 2,
            action: 3,
            itemId: 0,
            target: 0
          });
          break;
        }
        if (_0x5e070c >= 3) {
          addGameLog("已经获胜,见好就收!!");
          await this.send_message("cs_PerilousRoulette", {
            op: 2,
            action: 3,
            itemId: 0,
            target: 0
          });
        }
      }
      var _0x2857d5 = +xls.item.getItem(101391).dailyLimit;
      var _0x49769e = 30;
      var _0x47d609 = Math.min(_0x2857d5, ItemManager.getInstance().getDailyNumById(101391));
      var _0x30a5e7 = Math.min(mongoAttr.getPerilousRouletteAttrperilousRoulette().dropNum, _0x49769e);
      addGameLog("每日印记掉落：" + _0x47d609 + "/" + _0x2857d5 + "\n每日随机掉落：" + _0x30a5e7 + "/" + _0x49769e);
      if (_0x47d609 == _0x2857d5 && _0x30a5e7 == _0x49769e) {
        addGameLog("对赌左轮完成!!");
        break;
      }
    }
    this.stop();
  }
  async msyBattle() {
    let _0x577e75 = await this.dispatchSelfPet("水次", [32529, 32529]);
    if (_0x577e75) {
      return {
        pet: _0x577e75,
        skillsName: [32529, 32529]
      };
    }
    let _0x28fba1 = await this.dispatchSelfPet("熊猫", [31998, 31998]);
    if (_0x28fba1) {
      return {
        pet: _0x28fba1,
        skillsName: [31998, 31998]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async pipibigbattleui() {
    super.start();
    let _0x2349c8 = this;
    MFC.alert.show("确保有100闪光皮皮还有大招,100缪斯皎月苍月,100二巡卡修斯,丽莎布布", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x56f1e9) {
      _0x2349c8.stop();
    }, function (_0x20d98d) {
      _0x2349c8.pipibigbattle();
    }]);
  }
  async pipibigbattle() {
    while (1) {
      if (MFC.userInfo.curEnergy < 10) {
        break;
      }
      if (pveUtils.GetNewActivityCardData([1982])[0].infos.filter(_0x401a04 => _0x401a04.cardId == 1982)[0].dailyWin == 0) {
        let _0xe3dce2 = await this.pipibigBattle1();
        if (!_0xe3dce2) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1982],
            petList: [_0xe3dce2.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x2b251d = await this.useSkill(_0xe3dce2.skillsName);
          while (_0x2b251d.result.result == 0) {
            if (_0x2b251d.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x2b251d.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x2b251d.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x2b251d = await this.useSkill(_0xe3dce2.skillsName);
          }
        }
      } else {
        break;
      }
    }
    while (1) {
      if (MFC.userInfo.curEnergy < 10) {
        break;
      }
      if (pveUtils.GetNewActivityCardData([1983])[0].infos.filter(_0x57a072 => _0x57a072.cardId == 1983)[0].dailyWin == 0) {
        let _0x155f24 = await this.pipibigBattle2();
        if (!_0x155f24) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1983],
            petList: [_0x155f24.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x3e8bfc = await this.useSkill(23505);
          if (_0x3e8bfc.result.result == 0) {
            _0x3e8bfc = await this.useSkill(23505);
          }
          while (_0x3e8bfc.result.result == 0) {
            if (_0x3e8bfc.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x3e8bfc.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x3e8bfc.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x3e8bfc = await this.useSkill(23506);
          }
        }
      } else {
        break;
      }
    }
    while (1) {
      if (MFC.userInfo.curEnergy < 10) {
        break;
      }
      if (pveUtils.GetNewActivityCardData([1985])[0].infos.filter(_0x4fb694 => _0x4fb694.cardId == 1985)[0].dailyWin == 0) {
        let _0x5c04a6 = await this.pipibigBattle2();
        if (!_0x5c04a6) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1985],
            petList: [_0x5c04a6.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x3231e2 = await this.useSkill(23505);
          if (_0x3231e2.result.result == 0) {
            _0x3231e2 = await this.useSkill(23505);
          }
          while (_0x3231e2.result.result == 0) {
            if (_0x3231e2.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x3231e2.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x3231e2.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x3231e2 = await this.useSkill(23506);
          }
        }
      } else {
        break;
      }
    }
    while (1) {
      if (MFC.userInfo.curEnergy < 10) {
        break;
      }
      if (pveUtils.GetNewActivityCardData([1987])[0].infos.filter(_0x2d7b3c => _0x2d7b3c.cardId == 1987)[0].dailyWin == 0) {
        let _0x491490 = await this.pipibigBattle2();
        if (!_0x491490) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1987],
            petList: [_0x491490.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x8668f7 = await this.useSkill(23505);
          if (_0x8668f7.result.result == 0) {
            _0x8668f7 = await this.useSkill(23505);
          }
          while (_0x8668f7.result.result == 0) {
            if (_0x8668f7.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x8668f7.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x8668f7.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x8668f7 = await this.useSkill(23506);
          }
        }
      } else {
        break;
      }
    }
    while (1) {
      if (MFC.userInfo.curEnergy < 10) {
        break;
      }
      if (pveUtils.GetNewActivityCardData([1984])[0].infos.filter(_0x34648f => _0x34648f.cardId == 1984)[0].dailyWin == 0) {
        let _0xf59125 = await this.pipibigBattle3();
        if (!_0xf59125) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1984],
            petList: [_0xf59125.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x2de410 = await this.useSkill(42968);
          while (_0x2de410.result.result == 0) {
            if (_0x2de410.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x2de410.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x2de410.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x2de410 = await this.useSkill(32340);
          }
        }
      } else {
        break;
      }
    }
    while (1) {
      if (MFC.userInfo.curEnergy < 10) {
        break;
      }
      if (pveUtils.GetNewActivityCardData([1986])[0].infos.filter(_0x383b53 => _0x383b53.cardId == 1986)[0].dailyWin == 0) {
        let _0x3e3129 = await this.pipibigBattle4();
        if (!_0x3e3129) {
          break;
        } else {
          if (_0x3e3129.pet.getTime == PetManager.getInstance().getAllPets()[0].getTime) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [1986],
              petList: [_0x3e3129.pet.getTime, PetManager.getInstance().getAllPets()[1].getTime],
              times: 0
            });
          } else {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [1986],
              petList: [_0x3e3129.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              times: 0
            });
          }
          await this.initBattle();
          let _0x563751 = await this.useSkill(11006);
          let _0x2357b9 = 0;
          let _0x2c9a62 = 20504;
          while (_0x563751.result.result == 0) {
            if (_0x2357b9 == 0) {
              _0x2c9a62 = 20504;
            }
            if (_0x2357b9 == 1) {
              if (_0x3e3129.skillsName.indexOf(100008) !== -1) {
                _0x2c9a62 = 100008;
              } else {
                _0x2c9a62 = 11007;
              }
            }
            if (_0x2357b9 == 2) {
              _0x2c9a62 = 11006;
            }
            if (_0x2357b9 == 3) {
              _0x2c9a62 = 11006;
            }
            if (_0x2357b9 == 4) {
              _0x2c9a62 = 11006;
            }
            if (_0x2357b9 == 5) {
              if (_0x3e3129.skillsName.indexOf(100486) !== -1) {
                _0x2c9a62 = 100486;
              } else {
                _0x2c9a62 = 20009;
              }
            }
            _0x563751 = await this.useSkill(_0x2c9a62);
            let _0x5eed14 = _0x563751.result.playerInfos;
            if (_0x563751.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x563751.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x563751.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            let _0x43e0db = "";
            for (let _0x15c2c0 = 0; _0x15c2c0 < _0x5eed14.length; _0x15c2c0++) {
              if (_0x5eed14[_0x15c2c0].uid == UserManager.getInstance().userInfo.uid) {
                _0x43e0db = _0x5eed14[_0x15c2c0].petInfos[0];
                break;
              }
            }
            let _0x33f44f = _0x43e0db.useSkills.find(_0x4982e0 => _0x4982e0.id === _0x2c9a62).crtPP;
            if (_0x33f44f <= 1) {
              addGameLog("技能次数不足,回复pp");
              if (getSeerItemNum(2001) > 1) {
                addGameLog("回pp");
                this.pp = true;
                _0x563751 = await this.useItem(2001);
              } else if (getSeerItemNum(2002) > 1) {
                addGameLog("回pp");
                this.pp = true;
                _0x563751 = await this.useItem(2002);
              } else if (getSeerItemNum(2003) > 1) {
                addGameLog("回pp");
                this.pp = true;
                _0x563751 = await this.useItem(2003);
              } else {
                addGameLog("pp药不足");
                await this.send_message("cs_quit_battle", {});
                break;
              }
            }
            _0x2357b9++;
            if (_0x2357b9 > 5) {
              _0x2357b9 = 0;
            }
          }
        }
      } else {
        break;
      }
    }
    addGameLog("皮皮大作战结束");
    this.stop();
  }
  async pipibigBattle1() {
    let _0x2c7937 = await this.dispatchSelfPet("闪光皮皮", [10486]);
    if (_0x2c7937) {
      return {
        pet: _0x2c7937,
        skillsName: [10486]
      };
    }
    let _0x71b461 = await this.dispatchSelfPet("闪光皮皮", [100015]);
    if (_0x71b461) {
      return {
        pet: _0x71b461,
        skillsName: [100015]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async pipibigBattle2() {
    let _0x1ef0f4 = await this.dispatchSelfPet("缪斯", [23505, 23506]);
    if (_0x1ef0f4) {
      return {
        pet: _0x1ef0f4,
        skillsName: [23505, 23506]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async pipibigBattle3() {
    let _0x27e3dc = await this.dispatchSelfPet("卡修斯", [42968, 32340]);
    if (_0x27e3dc) {
      return {
        pet: _0x27e3dc,
        skillsName: [42968, 32340]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async pipibigBattle4() {
    let _0xe6bb81 = await this.dispatchSelfPet("丽莎布布", [11006, 20504, 11007, 20009]);
    if (_0xe6bb81) {
      return {
        pet: _0xe6bb81,
        skillsName: [11006, 20504, 11007, 20009]
      };
    }
    let _0x1bf6d5 = await this.dispatchSelfPet("丽莎布布", [11006, 20504, 11007, 100486]);
    if (_0x1bf6d5) {
      return {
        pet: _0x1bf6d5,
        skillsName: [11006, 20504, 11007, 100486]
      };
    }
    let _0x4c3397 = await this.dispatchSelfPet("丽莎布布", [11006, 20504, 100008, 100486]);
    if (_0x4c3397) {
      return {
        pet: _0x4c3397,
        skillsName: [11006, 20504, 100008, 100486]
      };
    }
    let _0x3da0ed = await this.dispatchSelfPet("丽莎布布", [11006, 20504, 100008, 20009]);
    if (_0x3da0ed) {
      return {
        pet: _0x3da0ed,
        skillsName: [11006, 20504, 100008, 20009]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async guiwangjieui() {
    super.start();
    let _0xf332 = this;
    MFC.alert.show("此活动需要水次或者哈肯撒或者长老,单局500000可能得手打一下", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x5c8f69) {
      _0xf332.stop();
    }, function (_0x4a028c) {
      _0xf332.guiwangjie();
    }]);
  }
  async guiwangjie() {
    if (!xls.activityCard.hasLoaded) {
      xls.activityCard.load({});
    }
    while (1) {
      if (Math.max(0, 5 - MFC.attr.getAttr(MFC.attrType.dailyHellwayBattleTime)) > 0) {
        if (MFC.userInfo.curEnergy > 10) {
          let _0x22e763 = xls.activityCard.getItemsByKeyValue("eventId", 146);
          for (var _0x33b693 = MFC.serverTimer.getTime(), _0x54864c = 0; _0x54864c < _0x22e763.length; _0x54864c++) {
            var _0x2315c1 = _0x22e763[_0x54864c];
            var _0x456bcd = MFC.serverTimer.getServerTimeFlagByServerDate(new Date(_0x2315c1.startTime.replace(/-/g, "/").replace(/_/g, "/")));
            var _0x1955a1 = MFC.serverTimer.getServerTimeFlagByServerDate(new Date(_0x2315c1.endTime.replace(/-/g, "/").replace(/_/g, "/")));
            if (_0x33b693 >= _0x456bcd && _0x1955a1 >= _0x33b693) {
              _0x22e763 = _0x2315c1;
              break;
            }
          }
          if (_0x22e763.id == 2070 || _0x22e763.id == 2077 || _0x22e763.id == 2084 || _0x22e763.id == 2071 || _0x22e763.id == 2078 || _0x22e763.id == 2076 || _0x22e763.id == 2083 || _0x22e763.id == 2075 || _0x22e763.id == 2082) {
            let _0x367e14 = await this.guiwangjiebattle11();
            if (!_0x367e14) {
              break;
            }
            const _0x4d9238 = {
              type: 1,
              cardId: [_0x22e763.id],
              petList: [_0x367e14.pet.getTime],
              times: 0,
              train: 0
            };
            await this.send_message("cs_pve_fight_start", _0x4d9238);
            await this.initBattle();
            let _0x2b4283 = await this.useSkill(_0x367e14.skillsName[0]);
            while (_0x2b4283.result.result == 0) {
              _0x2b4283 = await this.useSkill(_0x367e14.skillsName[1]);
              let _0x39d26d = _0x2b4283.result.playerInfos;
              let _0xbd015b = "";
              for (let _0xb32883 = 0; _0xb32883 < _0x39d26d.length; _0xb32883++) {
                if (_0x39d26d[_0xb32883].uid == UserManager.getInstance().userInfo.uid) {
                  _0xbd015b = _0x39d26d[_0xb32883].petInfos[0];
                  break;
                }
              }
              let _0x387f09 = _0xbd015b.useSkills.find(_0x39184e => _0x39184e.id === _0x367e14.skillsName[1]).crtPP;
              if (_0x387f09 == 0) {
                if (getSeerItemNum(2001) > 1) {
                  addGameLog("回pp");
                  _0x2b4283 = await this.useItem(2001);
                } else if (getSeerItemNum(2002) > 1) {
                  addGameLog("回pp");
                  _0x2b4283 = await this.useItem(2002);
                } else if (getSeerItemNum(2003) > 1) {
                  addGameLog("回pp");
                  _0x2b4283 = await this.useItem(2003);
                } else {
                  addGameLog("pp不足");
                  await this.send_message("cs_quit_battle", {});
                  break;
                }
              }
            }
          } else if (_0x22e763.id == 2072 || _0x22e763.id == 2079 || _0x22e763.id == 2074 || _0x22e763.id == 2081 || _0x22e763.id == 2073 || _0x22e763.id == 2080) {
            let _0xc41b7 = await this.guiwangjiebattle12();
            if (!_0xc41b7) {
              break;
            }
            const _0x1f9e46 = {
              type: 1,
              cardId: [_0x22e763.id],
              petList: [_0xc41b7.pet.getTime],
              times: 0,
              train: 0
            };
            await this.send_message("cs_pve_fight_start", _0x1f9e46);
            await this.initBattle();
            let _0x30feee = 0;
            let _0x1227a5;
            let _0xdb23f7 = await this.useSkill(_0xc41b7.skillsName[0]);
            while (_0xdb23f7.result.result == 0) {
              if (_0x30feee == 3) {
                _0x30feee = 0;
              }
              if (_0x30feee == 0) {
                _0x1227a5 = _0xc41b7.skillsName[1];
              }
              if (_0x30feee == 1) {
                _0x1227a5 = _0xc41b7.skillsName[0];
              }
              _0xdb23f7 = await this.useSkill(_0x1227a5);
              let _0x13b2c7 = _0xdb23f7.result.playerInfos;
              let _0x993610 = "";
              for (let _0x254ee1 = 0; _0x254ee1 < _0x13b2c7.length; _0x254ee1++) {
                if (_0x13b2c7[_0x254ee1].uid == UserManager.getInstance().userInfo.uid) {
                  _0x993610 = _0x13b2c7[_0x254ee1].petInfos[0];
                  break;
                }
              }
              let _0x467be8 = _0x993610.useSkills.find(_0x15bff2 => _0x15bff2.id === _0x1227a5).crtPP;
              if (_0x467be8 == 0) {
                if (getSeerItemNum(2001) > 1) {
                  addGameLog("回pp");
                  _0xdb23f7 = await this.useItem(2001);
                } else if (getSeerItemNum(2002) > 1) {
                  addGameLog("回pp");
                  _0xdb23f7 = await this.useItem(2002);
                } else if (getSeerItemNum(2003) > 1) {
                  addGameLog("回pp");
                  _0xdb23f7 = await this.useItem(2003);
                } else {
                  addGameLog("pp不足");
                  await this.send_message("cs_quit_battle", {});
                  break;
                }
              }
              _0x30feee++;
            }
          }
        } else {
          addGameLog("电池不足");
          break;
        }
      } else {
        addGameLog("次数不足");
        break;
      }
    }
    if (!xls.activityTaskReset.hasLoaded) {
      xls.activityTaskReset.load({});
    }
    if (!xls.activityBattlePassTask.hasLoaded) {
      xls.activityBattlePassTask.load({});
    }
    if (!xls.activityExchange.hasLoaded) {
      xls.activityExchange.load({});
    }
    let _0x304180 = xls.activityTaskReset.getItems().filter(function (_0xef49c9) {
      return _0xef49c9.activityIdentity == 310;
    });
    for (let _0x4667eb = 0; _0x4667eb < _0x304180.length; _0x4667eb++) {
      if (TaskUtils.GetRestTaskState(_0x304180[_0x4667eb]) == -1) {
        addGameLog(_0x304180[_0x4667eb].task + "已领取");
      } else if (TaskUtils.GetRestTaskState(_0x304180[_0x4667eb]) == 0) {
        addGameLog(_0x304180[_0x4667eb].task + "未完成");
      } else {
        addGameLog(_0x304180[_0x4667eb].task + "已完成");
        addGameLog("即将进行领取=>\n领取" + _0x304180[_0x4667eb].task);
        const _0x26d7f8 = {
          carnivalId: _0x304180[_0x4667eb].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x26d7f8);
      }
    }
    let _0x170322 = xls.activityBattlePassTask.getItems().filter(function (_0x2a850b) {
      return _0x2a850b.activityIdentity == 419;
    });
    for (let _0x53709e = 0; _0x53709e < _0x170322.length; _0x53709e++) {
      if (BattlePassTaskUtils.GetBattlePassTaskState(_0x170322[_0x53709e]) == -1) {
        addGameLog(_0x170322[_0x53709e].describe + "已领取");
      } else if (BattlePassTaskUtils.GetBattlePassTaskState(_0x170322[_0x53709e]) == 0) {
        addGameLog(_0x170322[_0x53709e].describe + "未完成");
      } else {
        addGameLog(_0x170322[_0x53709e].describe + "已完成");
        addGameLog("即将进行领取=>\n领取" + _0x170322[_0x53709e].describe);
        const _0x973a7e = {
          activityId: 419,
          taskId: _0x170322[_0x53709e].id
        };
        await this.send_message("cs_activity_battle_pass_op_reward", _0x973a7e);
        await this.send_message("cs_activity_battle_pass_op_reward", {
          activityId: 419
        });
      }
    }
    let _0x2c68a3 = xls.activityExchange.getItems().filter(function (_0x2a6e14) {
      return _0x2a6e14.type == 637 && _0x2a6e14.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss").toString() && _0x2a6e14.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss").toString() && _0x2a6e14.name.indexOf("伤害达到") !== -1;
    });
    for (let _0x31afe6 = 0; _0x31afe6 < _0x2c68a3.length; _0x31afe6++) {
      if (ExchangeUtils.GetExchangeState(_0x2c68a3[_0x31afe6]) == 1) {
        const _0x5d428b = {
          id: _0x2c68a3[_0x31afe6].id,
          selectIndex: 0,
          subDropIdList: []
        };
        await this.send_message("cs_exchange_activity_reward", _0x5d428b);
      } else if (ExchangeUtils.GetExchangeState(_0x2c68a3[_0x31afe6]) == -1) {
        addGameLog(_0x2c68a3[_0x31afe6].name + "已领取");
      } else if (ExchangeUtils.GetExchangeState(_0x2c68a3[_0x31afe6]) == 0) {
        addGameLog(_0x2c68a3[_0x31afe6].name + "未完成");
      }
    }
    addGameLog("归亡节完成");
    this.stop();
  }
  async guiwangjiebattle11() {
    let _0x577e2c = await this.dispatchSelfPet("哈肯萨", [22615, 14816]);
    if (_0x577e2c) {
      return {
        pet: _0x577e2c,
        skillsName: [22615, 14816]
      };
    }
    let _0x38b742 = await this.dispatchSelfPet("赫尔卡长老", [20592, 32127]);
    if (_0x38b742) {
      return {
        pet: _0x38b742,
        skillsName: [20592, 32127]
      };
    }
    let _0x168da9 = await this.dispatchSelfPet("水次", [32528, 32529]);
    if (_0x168da9) {
      return {
        pet: _0x168da9,
        skillsName: [32528, 32529]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async guiwangjiebattle12() {
    let _0x1c5435 = await this.dispatchSelfPet("哈肯萨", [22615, 14816]);
    if (_0x1c5435) {
      return {
        pet: _0x1c5435,
        skillsName: [22615, 14816]
      };
    }
    let _0x5d0a73 = await this.dispatchSelfPet("赫尔卡长老", [20592, 32127]);
    if (_0x5d0a73) {
      return {
        pet: _0x5d0a73,
        skillsName: [20592, 32127]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async dispatchSelfPet(_0xd231a1, _0x10a047, _0x22d1bf) {
    let _0x4f6f1f = [];
    let _0x5c1fe9 = [];
    for (let _0x432359 = 0; _0x432359 < _0x10a047.length; _0x432359++) {
      _0x4f6f1f.push(_0x10a047[_0x432359]);
      _0x5c1fe9.push(petConfig.SkillConfig.getDef(_0x10a047[_0x432359]).name);
    }
    const _0x2d1187 = {
      skills: _0x4f6f1f,
      features: _0x22d1bf
    };
    let _0x4aa549 = await getGoalPets([_0x2d1187]);
    if (_0x4aa549) {
      addGameLog("精灵背包中携有" + _0xd231a1 + "+" + _0x5c1fe9.join("+"));
      return _0x4aa549;
    } else {
      addGameLog("背包 没有" + _0xd231a1 + "+" + _0x5c1fe9.join("+"));
      return false;
    }
  }
  async haoli() {
    let _0x101eda = this;
    MFC.alert.show("确定进行开学季每日在线领好礼计时器吗?", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x290e78) {
      _0x101eda.stop();
    }, function (_0xd3b0c4) {
      _0x101eda.haoli1();
      _0x101eda.stop();
    }]);
  }
  async haoli1() {
    if (typeof newSchoolTermSign === "undefined") {
      MFC.moduleManager.openModule(1376);
      MFC.moduleManager.closeModule(1376);
    }
    let _0x5482d8 = // TOLOOK
    setInterval(() => {
      try {
        if (!xls.onlineReward.hasLoaded) {
          xls.onlineReward.load(() => {});
        }
        if (mongoAttr.getOnlineRewardonlineReward()[0].rewards) {
          if (mongoAttr.getOnlineRewardonlineReward()[0].rewards.siteArray.filter(function (_0x2a58fc) {
            _0x2a58fc !== 0;
          }).length !== 8) {
            for (let _0x100933 = 0; _0x100933 < 8; _0x100933++) {
              const _0x1ec4b0 = {
                op: 1,
                level: 0,
                site: _0x100933 + 1
              };
              GlobalSocket.PROTOCOL_SOCKET.send(10693, _0x1ec4b0);
            }
          } else {
            clearInterval(_0x5482d8);
          }
        }
      } catch (_0x3c7e18) {}
    }, 600000);
    addGameLog("开学季每日在线领好礼计时器开启");
  }
}
class Paitepet extends SuperTask {
  constructor() {
    super();
    this.nowName = "研究计划";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_notify_change_pet"
    }, {
      watchEventName: "sc_change_default_team"
    }, {
      watchEventName: "sc_notify_item_change"
    }];
    this.task = [];
    this.CatchPetDatas = null;
    this.addCount = 0;
  }
  start() {
    super.start();
    let _0xa1d38f = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x4a425f = [];
      var _0x359987 = SimpleAlertUi({
        height: 300,
        width: 460
      });
      _0xa1d38f.alertWin = _0x359987;
      const _0x12252 = {
        text: "精灵研究计划",
        x: _0x359987.width / 2 - 48,
        y: _0x359987.height / 16
      };
      var _0x4ff675 = createLabel(_0x12252);
      _0x4a425f.push(_0x4ff675);
      const _0x39bfcb = {
        text: "注意:",
        x: 30,
        y: _0x4ff675.y + _0x4ff675.height + 12,
        textColor: 16776960
      };
      var _0x25db83 = createLabel(_0x39bfcb);
      _0x4a425f.push(_0x25db83);
      const _0xdad9c7 = {
        text: "请确保有胶囊可以捕抓",
        x: 40,
        y: _0x25db83.y + _0x25db83.height + 10
      };
      var _0x32e39c = createLabel(_0xdad9c7);
      _0x4a425f.push(_0x32e39c);
      const _0x452eec = {
        text: "请确保有电池可以捕抓地图抓捕不到的",
        x: 40,
        y: _0x32e39c.y + _0x32e39c.height + 10
      };
      var _0x31563e = createLabel(_0x452eec);
      _0x4a425f.push(_0x31563e);
      const _0x32c93e = {
        text: "用电池捕抓的会每一只都抓",
        x: 40,
        y: _0x31563e.y + _0x31563e.height + 10
      };
      var _0x4d6414 = createLabel(_0x32c93e);
      _0x4a425f.push(_0x4d6414);
      const _0x12c883 = {
        text: "无敌胶囊达到需要自己领取",
        x: 40,
        y: _0x4d6414.y + _0x4d6414.height + 10
      };
      var _0x30521e = createLabel(_0x12c883);
      _0x4a425f.push(_0x30521e);
      const _0x3d70d3 = {
        x: 70,
        y: _0x30521e.y + _0x30521e.height + 10,
        width: 100,
        prompt: "请输入天赋",
        storageKey: "cptalent"
      };
      var _0x4ff9df = createEdit(_0x3d70d3);
      _0x4a425f.push(_0x4ff9df);
      const _0x391b42 = {
        text: "比如输入30就抓到30跟31不兑换",
        x: _0x4ff9df.x + _0x4ff9df.width + 30,
        y: _0x4ff9df.y + 10
      };
      var _0x5eeb6f = createLabel(_0x391b42);
      _0x4a425f.push(_0x5eeb6f);
      _0xa1d38f.addAllUis(_0x4a425f);
      _0x359987.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0xa1d38f.stop();
      }, function () {
        if (_0x4ff9df.text.length == 0) {
          MFC.bubbleAlert.showAlert("请输入天赋");
          return true;
        }
        if (!Number.isInteger(parseInt(_0x4ff9df.text)) || _0x4ff9df.text > 31 || parseInt(_0x4ff9df.text) < 0) {
          MFC.bubbleAlert.showAlert("天赋错误");
          return true;
        }
        localStorage.setItem("cptalent", _0x4ff9df.text);
        _0xa1d38f.prcessBody();
      }], null);
      _0x359987.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (!xls.eventPetAnaysis.hasLoaded) {
        xls.eventPetAnaysis.load(() => {});
      }
      await wait(200);
      if (xls.eventPetAnaysis.getItems()[0].date <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd") && xls.eventPetAnaysis.getItem(xls.eventPetAnaysis.getItems().length).date >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd")) {
        if (MFC.serverTimer.date.getHours() < 5) {
          MFC.moduleManager.closeModule(xls.ModuleConst.ACTIVITIES_PANEL, {});
          MFC.alert.show("派特博士去休息啦，请5点之后再来哟~");
          this.stop();
        } else {
          var _0x5b38db = MFC.attr.getAttr(MFC.attrType.dailyPetResearchFinishStatus);
          if (_0x5b38db >= 3) {
            if (_0x5b38db >= 4) {
              addGameLog("宝箱已经打开");
              MFC.bubbleAlert.showAlert("今天任务已经完成，不能再提交精灵了！");
              this.stop();
            }
            await this.send_message("cs_pet_research_get_reward", {});
            MFC.bubbleAlert.showAlert("今天任务已经完成，不能再提交精灵了！");
            this.stop();
          } else {
            let _0x3e3264 = [];
            for (let _0x898b12 = 0; _0x898b12 < 3 - _0x5b38db; _0x898b12++) {
              _0x3e3264[_0x898b12] = xls.eventPetAnaysis.getItems().map(_0x33c788 => {
                if (_0x33c788.date == deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd")) {
                  return _0x33c788;
                }
              }).filter(_0x522b70 => _0x522b70 !== undefined)[_0x898b12 + _0x5b38db];
            }
            logger(_0x3e3264);
            for (let _0xfa1e5e = 0; _0xfa1e5e < _0x3e3264.length; _0xfa1e5e++) {
              this.CatchPetDatas = null;
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("皮皮") !== -1) {
                await wait(200);
                let _0x318df2 = new MapCatch();
                _0x318df2.capIds = [4001, 4002];
                _0x318df2.levelIds = [1];
                _0x318df2.catchCounts = 1;
                _0x318df2.stopTalent = 31;
                await _0x318df2.prcessBody();
                let _0x487ea7 = _0x318df2.CatchPetDatas.pet.talent;
                let _0x508124 = _0x318df2.CatchPetDatas.pet.getTime;
                while (_0x487ea7 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x5416c1 = new MapCatch();
                  _0x5416c1.capIds = [4001, 4002];
                  _0x5416c1.levelIds = [1];
                  _0x5416c1.catchCounts = 1;
                  _0x5416c1.stopTalent = 31;
                  await _0x5416c1.prcessBody();
                  _0x487ea7 = _0x5416c1.CatchPetDatas.pet.talent;
                  _0x508124 = _0x5416c1.CatchPetDatas.pet.getTime;
                }
                if (_0x508124.toString().length > 0) {
                  const _0x16bd44 = {
                    getTime: _0x508124
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x16bd44);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("仙人球") !== -1) {
                await wait(200);
                let _0x516ecb = new MapCatch();
                _0x516ecb.capIds = [4001, 4002];
                _0x516ecb.levelIds = [2];
                _0x516ecb.catchCounts = 1;
                _0x516ecb.stopTalent = 31;
                await _0x516ecb.prcessBody();
                let _0x5e8adb = _0x516ecb.CatchPetDatas.pet.talent;
                let _0x139c20 = _0x516ecb.CatchPetDatas.pet.getTime;
                while (_0x5e8adb > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x38876f = new MapCatch();
                  _0x38876f.capIds = [4001, 4002];
                  _0x38876f.levelIds = [2];
                  _0x38876f.catchCounts = 1;
                  _0x38876f.stopTalent = 31;
                  await _0x38876f.prcessBody();
                  _0x5e8adb = _0x38876f.CatchPetDatas.pet.talent;
                  _0x139c20 = _0x38876f.CatchPetDatas.pet.getTime;
                }
                if (_0x139c20.toString().length > 0) {
                  const _0x2c55a7 = {
                    getTime: _0x139c20
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x2c55a7);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("贝尔") !== -1) {
                await wait(200);
                let _0x529892 = new MapCatch();
                _0x529892.capIds = [4001, 4002];
                _0x529892.levelIds = [9];
                _0x529892.catchCounts = 1;
                _0x529892.stopTalent = 31;
                await _0x529892.prcessBody();
                let _0xaa3ae3 = _0x529892.CatchPetDatas.pet.talent;
                let _0x5a0111 = _0x529892.CatchPetDatas.pet.getTime;
                while (_0xaa3ae3 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x498443 = new MapCatch();
                  _0x498443.capIds = [4001, 4002];
                  _0x498443.levelIds = [9];
                  _0x498443.catchCounts = 1;
                  _0x498443.stopTalent = 31;
                  await _0x498443.prcessBody();
                  _0xaa3ae3 = _0x498443.CatchPetDatas.pet.talent;
                  _0x5a0111 = _0x498443.CatchPetDatas.pet.getTime;
                }
                if (_0x5a0111.toString().length > 0) {
                  const _0x3f7d98 = {
                    getTime: _0x5a0111
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x3f7d98);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("小鳍鱼") !== -1) {
                await wait(200);
                let _0x400ff1 = new MapCatch();
                _0x400ff1.capIds = [4001, 4002];
                _0x400ff1.levelIds = [10];
                _0x400ff1.catchCounts = 1;
                _0x400ff1.stopTalent = 31;
                await _0x400ff1.prcessBody();
                let _0x4636b5 = _0x400ff1.CatchPetDatas.pet.talent;
                let _0x5c30a7 = _0x400ff1.CatchPetDatas.pet.getTime;
                while (_0x4636b5 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0xdfdc31 = new MapCatch();
                  _0xdfdc31.capIds = [4001, 4002];
                  _0xdfdc31.levelIds = [10];
                  _0xdfdc31.catchCounts = 1;
                  _0xdfdc31.stopTalent = 31;
                  await _0xdfdc31.prcessBody();
                  _0x4636b5 = _0xdfdc31.CatchPetDatas.pet.talent;
                  _0x5c30a7 = _0xdfdc31.CatchPetDatas.pet.getTime;
                }
                if (_0x5c30a7.toString().length > 0) {
                  const _0x592bb2 = {
                    getTime: _0x5c30a7
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x592bb2);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("吉尔") !== -1) {
                await wait(200);
                let _0x5d80cf = new MapCatch();
                _0x5d80cf.capIds = [4001, 4002];
                _0x5d80cf.levelIds = [13];
                _0x5d80cf.catchCounts = 1;
                _0x5d80cf.stopTalent = 31;
                await _0x5d80cf.prcessBody();
                let _0xad51fb = _0x5d80cf.CatchPetDatas.pet.talent;
                let _0x748bc6 = _0x5d80cf.CatchPetDatas.pet.getTime;
                while (_0xad51fb > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x26ffa4 = new MapCatch();
                  _0x26ffa4.capIds = [4001, 4002];
                  _0x26ffa4.levelIds = [13];
                  _0x26ffa4.catchCounts = 1;
                  _0x26ffa4.stopTalent = 31;
                  await _0x26ffa4.prcessBody();
                  _0xad51fb = _0x26ffa4.CatchPetDatas.pet.talent;
                  _0x748bc6 = _0x26ffa4.CatchPetDatas.pet.getTime;
                }
                if (_0x748bc6.toString().length > 0) {
                  const _0x51149f = {
                    getTime: _0x748bc6
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x51149f);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("火炎贝") !== -1) {
                await wait(200);
                let _0x2b46c6 = new MapCatch();
                _0x2b46c6.capIds = [4001, 4002];
                _0x2b46c6.levelIds = [12];
                _0x2b46c6.catchCounts = 1;
                _0x2b46c6.stopTalent = 31;
                await _0x2b46c6.prcessBody();
                let _0x10967c = _0x2b46c6.CatchPetDatas.pet.talent;
                let _0x582647 = _0x2b46c6.CatchPetDatas.pet.getTime;
                while (_0x10967c > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x57e6a5 = new MapCatch();
                  _0x57e6a5.capIds = [4001, 4002];
                  _0x57e6a5.levelIds = [12];
                  _0x57e6a5.catchCounts = 1;
                  _0x57e6a5.stopTalent = 31;
                  await _0x57e6a5.prcessBody();
                  _0x10967c = _0x57e6a5.CatchPetDatas.pet.talent;
                  _0x582647 = _0x57e6a5.CatchPetDatas.pet.getTime;
                }
                if (_0x582647.toString().length > 0) {
                  const _0xa4cf49 = {
                    getTime: _0x582647
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0xa4cf49);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("巴多") !== -1) {
                await wait(200);
                let _0x2bec94 = new MapCatch();
                _0x2bec94.capIds = [4001, 4002];
                _0x2bec94.levelIds = [72];
                _0x2bec94.catchCounts = 1;
                _0x2bec94.stopTalent = 31;
                await _0x2bec94.prcessBody();
                let _0x15cd1d = _0x2bec94.CatchPetDatas.pet.talent;
                let _0x208921 = _0x2bec94.CatchPetDatas.pet.getTime;
                while (_0x15cd1d > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x1e2933 = new MapCatch();
                  _0x1e2933.capIds = [4001, 4002];
                  _0x1e2933.levelIds = [72];
                  _0x1e2933.catchCounts = 1;
                  _0x1e2933.stopTalent = 31;
                  await _0x1e2933.prcessBody();
                  _0x15cd1d = _0x1e2933.CatchPetDatas.pet.talent;
                  _0x208921 = _0x1e2933.CatchPetDatas.pet.getTime;
                }
                if (_0x208921.toString().length > 0) {
                  const _0x394583 = {
                    getTime: _0x208921
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x394583);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("卡卡") !== -1) {
                await wait(200);
                let _0x946cd0 = new MapCatch();
                _0x946cd0.capIds = [4001, 4002];
                _0x946cd0.levelIds = [21];
                _0x946cd0.catchCounts = 1;
                _0x946cd0.stopTalent = 31;
                await _0x946cd0.prcessBody();
                let _0x4da3af = _0x946cd0.CatchPetDatas.pet.talent;
                let _0xc7a288 = _0x946cd0.CatchPetDatas.pet.getTime;
                while (_0x4da3af > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x411a9b = new MapCatch();
                  _0x411a9b.capIds = [4001, 4002];
                  _0x411a9b.levelIds = [21];
                  _0x411a9b.catchCounts = 1;
                  _0x411a9b.stopTalent = 31;
                  await _0x411a9b.prcessBody();
                  _0x4da3af = _0x411a9b.CatchPetDatas.pet.talent;
                  _0xc7a288 = _0x411a9b.CatchPetDatas.pet.getTime;
                }
                if (_0xc7a288.toString().length > 0) {
                  const _0x214f5c = {
                    getTime: _0xc7a288
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x214f5c);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("玄冰兽") !== -1) {
                await wait(200);
                let _0x15be55 = new MapCatch();
                _0x15be55.capIds = [4001, 4002];
                _0x15be55.levelIds = [22];
                _0x15be55.catchCounts = 1;
                _0x15be55.stopTalent = 31;
                await _0x15be55.prcessBody();
                let _0x48153e = _0x15be55.CatchPetDatas.pet.talent;
                let _0x1ff53d = _0x15be55.CatchPetDatas.pet.getTime;
                while (_0x48153e > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x1bcfcd = new MapCatch();
                  _0x1bcfcd.capIds = [4001, 4002];
                  _0x1bcfcd.levelIds = [22];
                  _0x1bcfcd.catchCounts = 1;
                  _0x1bcfcd.stopTalent = 31;
                  await _0x1bcfcd.prcessBody();
                  _0x48153e = _0x1bcfcd.CatchPetDatas.pet.talent;
                  _0x1ff53d = _0x1bcfcd.CatchPetDatas.pet.getTime;
                }
                if (_0x1ff53d.toString().length > 0) {
                  const _0x203c3d = {
                    getTime: _0x1ff53d
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x203c3d);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("幽浮") !== -1) {
                await wait(200);
                let _0x37b0b0 = new MapCatch();
                _0x37b0b0.capIds = [4001, 4002];
                _0x37b0b0.levelIds = [34];
                _0x37b0b0.catchCounts = 1;
                _0x37b0b0.stopTalent = 31;
                await _0x37b0b0.prcessBody();
                let _0x375f86 = _0x37b0b0.CatchPetDatas.pet.talent;
                let _0x114467 = _0x37b0b0.CatchPetDatas.pet.getTime;
                while (_0x375f86 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x21f0de = new MapCatch();
                  _0x21f0de.capIds = [4001, 4002];
                  _0x21f0de.levelIds = [34];
                  _0x21f0de.catchCounts = 1;
                  _0x21f0de.stopTalent = 31;
                  await _0x21f0de.prcessBody();
                  _0x375f86 = _0x21f0de.CatchPetDatas.pet.talent;
                  _0x114467 = _0x21f0de.CatchPetDatas.pet.getTime;
                }
                if (_0x114467.toString().length > 0) {
                  const _0x5c0bf3 = {
                    getTime: _0x114467
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x5c0bf3);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("丁格") !== -1) {
                await wait(200);
                let _0x448f4a = new MapCatch();
                _0x448f4a.capIds = [4001, 4002];
                _0x448f4a.levelIds = [60];
                _0x448f4a.catchCounts = 1;
                _0x448f4a.stopTalent = 31;
                await _0x448f4a.prcessBody();
                let _0x42873a = _0x448f4a.CatchPetDatas.pet.talent;
                let _0x53d922 = _0x448f4a.CatchPetDatas.pet.getTime;
                while (_0x42873a > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0xc513b5 = new MapCatch();
                  _0xc513b5.capIds = [4001, 4002];
                  _0xc513b5.levelIds = [60];
                  _0xc513b5.catchCounts = 1;
                  _0xc513b5.stopTalent = 31;
                  await _0xc513b5.prcessBody();
                  _0x42873a = _0xc513b5.CatchPetDatas.pet.talent;
                  _0x53d922 = _0xc513b5.CatchPetDatas.pet.getTime;
                }
                if (_0x53d922.toString().length > 0) {
                  const _0x205bfb = {
                    getTime: _0x53d922
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x205bfb);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("卡西") !== -1) {
                await wait(200);
                let _0x15fb87 = new MapCatch();
                _0x15fb87.capIds = [4001, 4002];
                _0x15fb87.levelIds = [62];
                _0x15fb87.catchCounts = 1;
                _0x15fb87.stopTalent = 31;
                await _0x15fb87.prcessBody();
                let _0x599a79 = _0x15fb87.CatchPetDatas.pet.talent;
                let _0x2da4e1 = _0x15fb87.CatchPetDatas.pet.getTime;
                while (_0x599a79 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x287ff1 = new MapCatch();
                  _0x287ff1.capIds = [4001, 4002];
                  _0x287ff1.levelIds = [62];
                  _0x287ff1.catchCounts = 1;
                  _0x287ff1.stopTalent = 31;
                  await _0x287ff1.prcessBody();
                  _0x599a79 = _0x287ff1.CatchPetDatas.pet.talent;
                  _0x2da4e1 = _0x287ff1.CatchPetDatas.pet.getTime;
                }
                if (_0x2da4e1.toString().length > 0) {
                  const _0x3946e0 = {
                    getTime: _0x2da4e1
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x3946e0);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("莫顿") !== -1) {
                await wait(200);
                let _0x59f523 = new MapCatch();
                _0x59f523.capIds = [4001, 4002];
                _0x59f523.levelIds = [64];
                _0x59f523.catchCounts = 1;
                _0x59f523.stopTalent = 31;
                await _0x59f523.prcessBody();
                let _0x9fcbf1 = _0x59f523.CatchPetDatas.pet.talent;
                let _0xc49a45 = _0x59f523.CatchPetDatas.pet.getTime;
                while (_0x9fcbf1 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0xce22e0 = new MapCatch();
                  _0xce22e0.capIds = [4001, 4002];
                  _0xce22e0.levelIds = [64];
                  _0xce22e0.catchCounts = 1;
                  _0xce22e0.stopTalent = 31;
                  await _0xce22e0.prcessBody();
                  _0x9fcbf1 = _0xce22e0.CatchPetDatas.pet.talent;
                  _0xc49a45 = _0xce22e0.CatchPetDatas.pet.getTime;
                }
                if (_0xc49a45.toString().length > 0) {
                  const _0x1eb7e3 = {
                    getTime: _0xc49a45
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x1eb7e3);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("依依") !== -1) {
                await wait(200);
                let _0x12f88b = new MapCatch();
                _0x12f88b.capIds = [4001, 4002];
                _0x12f88b.levelIds = [360];
                _0x12f88b.catchCounts = 1;
                _0x12f88b.stopTalent = 31;
                await _0x12f88b.prcessBody();
                let _0x572423 = _0x12f88b.CatchPetDatas.pet.talent;
                let _0x1a05c3 = _0x12f88b.CatchPetDatas.pet.getTime;
                while (_0x572423 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x4f1ba8 = new MapCatch();
                  _0x4f1ba8.capIds = [4001, 4002];
                  _0x4f1ba8.levelIds = [1];
                  _0x4f1ba8.catchCounts = 1;
                  _0x4f1ba8.stopTalent = 31;
                  await _0x4f1ba8.prcessBody();
                  _0x572423 = _0x4f1ba8.CatchPetDatas.pet.talent;
                  _0x1a05c3 = _0x4f1ba8.CatchPetDatas.pet.getTime;
                }
                if (_0x1a05c3.toString().length > 0) {
                  const _0x55aa64 = {
                    getTime: _0x1a05c3
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x55aa64);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("毛毛") !== -1) {
                let _0x1cd7bb = false;
                while (true) {
                  if (UserManager.getInstance().userInfo.curEnergy < 5) {
                    MFC.alert.show("电池不足,任务取消!");
                    addGameLog("电池不足,任务取消!");
                    this.stop();
                  }
                  this.CatchPetDatas = null;
                  await wait(200);
                  let _0x1a45ba = new LevelCatch();
                  _0x1a45ba.capIds = [4001, 4002];
                  _0x1a45ba.catchCounts = 1;
                  _0x1a45ba.stopTalent = 31;
                  _0x1a45ba.levelId = 27;
                  _0x1a45ba.petIds = ["22", "26", "249", "153", "53"];
                  await _0x1a45ba.prcessBody();
                  let _0x4aaad8 = _0x1a45ba.CatchPetDatas.pet.talent;
                  let _0x3a0031 = _0x1a45ba.CatchPetDatas.pet.getTime;
                  let _0xd1cd52 = _0x1a45ba.CatchPetDatas.pet.nick;
                  logger(_0xd1cd52);
                  if (_0xd1cd52.indexOf("毛毛") !== -1) {
                    const _0x4fba45 = {
                      getTime: _0x3a0031
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x4fba45);
                    break;
                  }
                  while (_0x4aaad8 > localStorage.getItem("cptalent")) {
                    this.CatchPetDatas = null;
                    await wait(200);
                    let _0xda72c8 = new LevelCatch();
                    _0xda72c8.capIds = [4001, 4002];
                    _0xda72c8.catchCounts = 1;
                    _0xda72c8.stopTalent = 31;
                    _0xda72c8.levelId = 27;
                    _0xda72c8.addCount = 0;
                    _0xda72c8.petIds = ["22", "26", "249", "153", "53"];
                    await _0xda72c8.prcessBody();
                    _0x4aaad8 = _0xda72c8.CatchPetDatas.pet.talent;
                    _0x3a0031 = _0xda72c8.CatchPetDatas.pet.getTime;
                    _0xd1cd52 = _0xda72c8.CatchPetDatas.pet.nick;
                    if (_0xd1cd52.indexOf("毛毛") !== -1) {
                      _0x1cd7bb = true;
                      break;
                    }
                  }
                  if (_0x1cd7bb) {
                    const _0x5d26e4 = {
                      getTime: _0x3a0031
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x5d26e4);
                    break;
                  }
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("浮空苗") !== -1) {
                let _0x473e34 = false;
                while (true) {
                  if (UserManager.getInstance().userInfo.curEnergy < 5) {
                    MFC.alert.show("电池不足,任务取消!");
                    addGameLog("电池不足,任务取消!");
                    this.stop();
                  }
                  this.CatchPetDatas = null;
                  await wait(200);
                  let _0x3fd559 = new LevelCatch();
                  _0x3fd559.capIds = [4001, 4002];
                  _0x3fd559.catchCounts = 1;
                  _0x3fd559.stopTalent = 31;
                  _0x3fd559.levelId = 27;
                  _0x3fd559.petIds = ["22", "26", "249", "153", "53"];
                  await _0x3fd559.prcessBody();
                  let _0x1d290c = _0x3fd559.CatchPetDatas.pet.talent;
                  let _0x155723 = _0x3fd559.CatchPetDatas.pet.getTime;
                  let _0x2e424c = _0x3fd559.CatchPetDatas.pet.nick;
                  logger(_0x2e424c);
                  if (_0x2e424c.indexOf("浮空苗") !== -1) {
                    const _0x3adb07 = {
                      getTime: _0x155723
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x3adb07);
                    break;
                  }
                  while (_0x1d290c > localStorage.getItem("cptalent")) {
                    this.CatchPetDatas = null;
                    await wait(200);
                    let _0x389c74 = new LevelCatch();
                    _0x389c74.capIds = [4001, 4002];
                    _0x389c74.catchCounts = 1;
                    _0x389c74.stopTalent = 31;
                    _0x389c74.levelId = 27;
                    _0x389c74.addCount = 0;
                    _0x389c74.petIds = ["22", "26", "249", "153", "53"];
                    await _0x389c74.prcessBody();
                    _0x1d290c = _0x389c74.CatchPetDatas.pet.talent;
                    _0x155723 = _0x389c74.CatchPetDatas.pet.getTime;
                    _0x2e424c = _0x389c74.CatchPetDatas.pet.nick;
                    if (_0x2e424c.indexOf("浮空苗") !== -1) {
                      _0x473e34 = true;
                      break;
                    }
                  }
                  if (_0x473e34) {
                    const _0x8c9b0c = {
                      getTime: _0x155723
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x8c9b0c);
                    break;
                  }
                }
              }
              if (_0x3e3264[_0xfa1e5e].petName.indexOf("米隆") !== -1) {
                let _0x410738 = false;
                while (true) {
                  if (UserManager.getInstance().userInfo.curEnergy < 5) {
                    MFC.alert.show("电池不足,任务取消!");
                    addGameLog("电池不足,任务取消!");
                    this.stop();
                  }
                  this.CatchPetDatas = null;
                  await wait(200);
                  let _0x3671c0 = new LevelCatch();
                  _0x3671c0.capIds = [4001, 4002];
                  _0x3671c0.catchCounts = 1;
                  _0x3671c0.stopTalent = 31;
                  _0x3671c0.levelId = 34;
                  _0x3671c0.petIds = ["107", "99", "236", "64"];
                  await _0x3671c0.prcessBody();
                  let _0x171908 = _0x3671c0.CatchPetDatas.pet.talent;
                  let _0x58b0fd = _0x3671c0.CatchPetDatas.pet.getTime;
                  let _0x41e3b5 = _0x3671c0.CatchPetDatas.pet.nick;
                  logger(_0x41e3b5);
                  if (_0x41e3b5.indexOf("米隆") !== -1) {
                    const _0x21c14a = {
                      getTime: _0x58b0fd
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x21c14a);
                    break;
                  }
                  while (_0x171908 > localStorage.getItem("cptalent")) {
                    this.CatchPetDatas = null;
                    await wait(200);
                    let _0x4d6959 = new LevelCatch();
                    _0x4d6959.capIds = [4001, 4002];
                    _0x4d6959.catchCounts = 1;
                    _0x4d6959.stopTalent = 31;
                    _0x4d6959.levelId = 34;
                    _0x4d6959.addCount = 0;
                    _0x4d6959.petIds = ["107", "99", "236", "64"];
                    await _0x4d6959.prcessBody();
                    _0x171908 = _0x4d6959.CatchPetDatas.pet.talent;
                    _0x58b0fd = _0x4d6959.CatchPetDatas.pet.getTime;
                    _0x41e3b5 = _0x4d6959.CatchPetDatas.pet.nick;
                    if (_0x41e3b5.indexOf("米隆") !== -1) {
                      _0x410738 = true;
                      break;
                    }
                  }
                  if (_0x410738) {
                    const _0x244b72 = {
                      getTime: _0x58b0fd
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x244b72);
                    break;
                  }
                }
              }
            }
            _0x5b38db = MFC.attr.getAttr(MFC.attrType.dailyPetResearchFinishStatus);
            if (_0x5b38db >= 3) {
              if (_0x5b38db >= 4) {
                addGameLog("宝箱已经打开");
                MFC.bubbleAlert.showAlert("今天任务已经完成，不能再提交精灵了！");
                this.stop();
              }
              await this.send_message("cs_pet_research_get_reward", {});
              MFC.bubbleAlert.showAlert("今天任务已经完成，不能再提交精灵了！");
              this.stop();
            }
            addGameLog("精灵研究计划完成");
            this.stop();
          }
        }
      } else {
        MFC.bubbleAlert.showAlert("活动已结束！");
        MFC.moduleManager.closeModule(xls.ModuleConst.ACTIVITIES_PANEL, {});
        this.stop();
      }
    } catch (_0xebf33d) {
      logger(_0xebf33d);
    }
  }
}
class Timetask extends SuperTask {
  constructor() {
    super();
    this.nowName = "精灵探索";
    this.type = null;
    this.task = [];
  }
  start() {
    super.start();
    let _0x2e84cb = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x352889 = [];
      var _0x3031dd = SimpleAlertUi({
        height: 350,
        width: 400
      });
      _0x2e84cb.alertWin = _0x3031dd;
      const _0x2e46b6 = {
        text: "精灵探索小分队",
        x: _0x3031dd.applicationWidth / 2 - 35,
        y: _0x3031dd.height / 15
      };
      let _0x3e8a2e = createLabel(_0x2e46b6);
      _0x3e8a2e.size = 20;
      _0x352889.push(_0x3e8a2e);
      const _0x1d9901 = {
        x: 70,
        y: _0x3e8a2e.y + 50,
        width: 100,
        prompt: "输入系别",
        storageKey: "text"
      };
      var _0x5f0fcb = createEdit(_0x1d9901);
      _0x352889.push(_0x5f0fcb);
      const _0x37dd3f = {
        text: "比如草系就输入草\n双属性输入水超",
        x: _0x5f0fcb.x + _0x5f0fcb.width + 50,
        y: _0x5f0fcb.y
      };
      let _0x2945af = createLabel(_0x37dd3f);
      _0x352889.push(_0x2945af);
      const _0x45925d = {
        text: "初级",
        x: _0x3031dd.width / 2 - 60,
        y: _0x5f0fcb.y + 60
      };
      let _0x2b80df = createLabel(_0x45925d);
      _0x2b80df.size = 20;
      _0x352889.push(_0x2b80df);
      const _0x383898 = {
        x: _0x2b80df.x + 70,
        y: _0x2b80df.y,
        selected: true,
        storageKey: "cjpq"
      };
      let _0x137092 = createToggle(_0x383898);
      _0x352889.push(_0x137092);
      const _0x88af2a = {
        text: "中级",
        x: _0x2b80df.x,
        y: _0x2b80df.y + 40
      };
      let _0x4effc8 = createLabel(_0x88af2a);
      _0x4effc8.size = 20;
      _0x352889.push(_0x4effc8);
      const _0x1a679e = {
        x: _0x4effc8.x + 70,
        y: _0x4effc8.y,
        selected: true,
        storageKey: "zjpq"
      };
      let _0x1a7f02 = createToggle(_0x1a679e);
      _0x352889.push(_0x1a7f02);
      const _0x2a61b2 = {
        text: "高级",
        x: _0x2b80df.x,
        y: _0x4effc8.y + 40
      };
      let _0x594f3a = createLabel(_0x2a61b2);
      _0x594f3a.size = 20;
      _0x352889.push(_0x594f3a);
      const _0x5c110a = {
        x: _0x594f3a.x + 70,
        y: _0x594f3a.y,
        selected: true,
        storageKey: "gjpq"
      };
      let _0x539441 = createToggle(_0x5c110a);
      _0x352889.push(_0x539441);
      _0x2e84cb.addAllUis(_0x352889);
      _0x3031dd.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x2e84cb.stop();
      }, function () {
        localStorage.setItem("cjpq", _0x137092.selected);
        localStorage.setItem("zjpq", _0x1a7f02.selected);
        localStorage.setItem("gjpq", _0x539441.selected);
        localStorage.setItem("text", _0x5f0fcb.text);
        if (_0x5f0fcb.text.length == 0 || _0x5f0fcb.text.indexOf("系") != -1) {
          MFC.bubbleAlert.showAlert("请输入有效系别");
          return true;
        } else if (petConfig.ElemTypesConfig.getSingleType().filter(function (_0x4affb1) {
          return _0x4affb1.cn.indexOf(_0x5f0fcb.text) !== -1;
        }).length == 0 && petConfig.ElemTypesConfig.getDoubbleType().filter(function (_0x13f9f2) {
          return _0x13f9f2.cn.indexOf(_0x5f0fcb.text) !== -1;
        }).length == 0) {
          MFC.bubbleAlert.showAlert("有效系别没有" + _0x5f0fcb.text);
          return true;
        }
        if (_0x137092.selected && _0x1a7f02.selected && _0x539441.selected || _0x137092.selected && _0x1a7f02.selected || _0x137092.selected && _0x539441.selected || _0x1a7f02.selected && _0x539441.selected) {
          MFC.bubbleAlert.showAlert("只能勾选一个等级");
          return true;
        }
        if (_0x137092.selected == false && _0x1a7f02.selected == false && _0x539441.selected == false) {
          MFC.bubbleAlert.showAlert("请勾选一个等级");
          return true;
        }
        _0x2e84cb.type = _0x5f0fcb.text.toString();
        if (_0x137092.selected) {
          _0x2e84cb.task[0] = 1;
          addGameLog("已选择" + _0x5f0fcb.text + "初级");
        }
        if (_0x1a7f02.selected) {
          _0x2e84cb.task[1] = 1;
          addGameLog("已选择" + _0x5f0fcb.text + "中级");
        }
        if (_0x539441.selected) {
          _0x2e84cb.task[2] = 1;
          addGameLog("已选择" + _0x5f0fcb.text + "高级");
        }
        _0x2e84cb.prcessBody();
      }], null);
      _0x3031dd.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x2d9b89;
      let _0x3985e5 = this.type.toString();
      let _0x358257 = await this.send_message("cs_get_pet_explore_list", {});
      if (_0x358257.petExploreList[0] || _0x358257.petExploreList[1]) {
        if (MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) > 0) {
          addGameLog("普通委派已放置");
          if (_0x358257.petExploreList[0].endTime * 1000 - MFC.serverTimer.date.getTime() > 0) {
            addGameLog("普通委派正在进行");
          } else {
            addGameLog("领取普通委派");
            await this.send_message("cs_get_pet_explore_back", {
              petPosition: 0
            });
          }
        }
        if (MFC.userInfo.vipLevel !== 0) {
          if (MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) > 0) {
            addGameLog("超no委派已放置");
            if (_0x358257.petExploreList[1].endTime * 1000 - MFC.serverTimer.date.getTime() > 0) {
              addGameLog("超no委派正在进行");
            } else {
              addGameLog("领取超no委派");
              await this.send_message("cs_get_pet_explore_back", {
                petPosition: 1
              });
            }
          }
        }
      }
      if (this.task[0]) {
        _0x2d9b89 = PetManager.getInstance().getAllPets().filter(function (_0x62a0cf) {
          return _0x62a0cf.level >= 20 && _0x62a0cf.level < 40 && _0x62a0cf.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) && _0x62a0cf.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) && petConfig.ElemTypesConfig.getDef(PetConfig.getDef(_0x62a0cf.petId).elemType).cn.replace(/\s/g, "").indexOf(_0x3985e5.toString()) !== -1 && MFC.userInfo.defaultTeam.indexOf(_0x62a0cf.getTime) == -1 && MFC.userInfo.defaultTeam1.indexOf(_0x62a0cf.getTime) == -1 && MFC.userInfo.defaultTeam2.indexOf(_0x62a0cf.getTime) == -1 && MFC.userInfo.defaultTeam3.indexOf(_0x62a0cf.getTime) == -1 && MFC.userInfo.defaultTeam4.indexOf(_0x62a0cf.getTime) == -1 && MFC.userInfo.defaultTeam5.indexOf(_0x62a0cf.getTime) == -1 && MFC.userInfo.defaultTeam6.indexOf(_0x62a0cf.getTime) == -1 && MFC.userInfo.campaignDefaultTeam.indexOf(_0x62a0cf.getTime) == -1 && MFC.userInfo.expeditionTeam.indexOf(_0x62a0cf.getTime) == -1;
        });
      }
      if (this.task[1]) {
        _0x2d9b89 = PetManager.getInstance().getAllPets().filter(function (_0x3ebba9) {
          return _0x3ebba9.level >= 40 && _0x3ebba9.level < 60 && _0x3ebba9.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) && _0x3ebba9.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) && petConfig.ElemTypesConfig.getDef(PetConfig.getDef(_0x3ebba9.petId).elemType).cn.replace(/\s/g, "").indexOf(_0x3985e5.toString()) !== -1 && MFC.userInfo.defaultTeam.indexOf(_0x3ebba9.getTime) == -1 && MFC.userInfo.defaultTeam1.indexOf(_0x3ebba9.getTime) == -1 && MFC.userInfo.defaultTeam2.indexOf(_0x3ebba9.getTime) == -1 && MFC.userInfo.defaultTeam3.indexOf(_0x3ebba9.getTime) == -1 && MFC.userInfo.defaultTeam4.indexOf(_0x3ebba9.getTime) == -1 && MFC.userInfo.defaultTeam5.indexOf(_0x3ebba9.getTime) == -1 && MFC.userInfo.defaultTeam6.indexOf(_0x3ebba9.getTime) == -1 && MFC.userInfo.campaignDefaultTeam.indexOf(_0x3ebba9.getTime) == -1 && MFC.userInfo.expeditionTeam.indexOf(_0x3ebba9.getTime) == -1;
        });
      }
      if (this.task[2]) {
        _0x2d9b89 = PetManager.getInstance().getAllPets().filter(function (_0x14d5d5) {
          return _0x14d5d5.level >= 60 && _0x14d5d5.level <= 100 && _0x14d5d5.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) && _0x14d5d5.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) && petConfig.ElemTypesConfig.getDef(PetConfig.getDef(_0x14d5d5.petId).elemType).cn.replace(/\s/g, "").indexOf(_0x3985e5.toString()) !== -1 && MFC.userInfo.defaultTeam.indexOf(_0x14d5d5.getTime) == -1 && MFC.userInfo.defaultTeam1.indexOf(_0x14d5d5.getTime) == -1 && MFC.userInfo.defaultTeam2.indexOf(_0x14d5d5.getTime) == -1 && MFC.userInfo.defaultTeam3.indexOf(_0x14d5d5.getTime) == -1 && MFC.userInfo.defaultTeam4.indexOf(_0x14d5d5.getTime) == -1 && MFC.userInfo.defaultTeam5.indexOf(_0x14d5d5.getTime) == -1 && MFC.userInfo.defaultTeam6.indexOf(_0x14d5d5.getTime) == -1 && MFC.userInfo.campaignDefaultTeam.indexOf(_0x14d5d5.getTime) == -1 && MFC.userInfo.expeditionTeam.indexOf(_0x14d5d5.getTime) == -1;
        });
      }
      if (_0x2d9b89.filter(_0x22690e => _0x22690e !== undefined).length == 0) {
        addGameLog("该系别没放置背包的等级宠物数量为0");
        this.stop();
      }
      if (!_0x358257.petExploreList[0] && !_0x358257.petExploreList[1]) {
        addGameLog("没有派遣任务正在进行");
        if (MFC.userInfo.vipLevel == 0) {
          addGameLog("没有VIP,只派遣普通探索");
          const _0x2b5636 = {
            petGetTime: _0x2d9b89[0].getTime,
            explorePosition: 0
          };
          await this.send_message("cs_pet_explore", _0x2b5636);
          addGameLog("放置" + _0x2d9b89[0].nick);
        } else if (_0x2d9b89.length < 2) {
          addGameLog("该属性精灵只有1只,只进行普通派遣");
          const _0x37e074 = {
            petGetTime: _0x2d9b89[0].getTime,
            explorePosition: 0
          };
          await this.send_message("cs_pet_explore", _0x37e074);
          addGameLog("放置" + _0x2d9b89[0].nick);
        } else {
          const _0x14e753 = {
            petGetTime: _0x2d9b89[0].getTime,
            explorePosition: 0
          };
          await this.send_message("cs_pet_explore", _0x14e753);
          const _0x14279a = {
            petGetTime: _0x2d9b89[1].getTime,
            explorePosition: 1
          };
          await this.send_message("cs_pet_explore", _0x14279a);
          addGameLog("放置" + _0x2d9b89[0].nick);
          addGameLog("放置" + _0x2d9b89[1].nick);
        }
      } else {
        if (MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) > 0) {
          addGameLog("普通委派已放置");
          if (_0x358257.petExploreList[0].endTime * 1000 - MFC.serverTimer.date.getTime() > 0) {
            addGameLog("普通委派正在进行");
          } else {
            addGameLog("领取普通委派");
            await this.send_message("cs_get_pet_explore_back", {
              petPosition: 0
            });
            await wait(500);
            const _0x539080 = {
              petGetTime: _0x2d9b89[0].getTime,
              explorePosition: 0
            };
            await this.send_message("cs_pet_explore", _0x539080);
            addGameLog("放置" + _0x2d9b89[0].nick);
          }
        } else {
          addGameLog("普通委派未放置");
          await wait(500);
          const _0x544f2c = {
            petGetTime: _0x2d9b89[0].getTime,
            explorePosition: 0
          };
          await this.send_message("cs_pet_explore", _0x544f2c);
          addGameLog("放置" + _0x2d9b89[0].nick);
        }
        if (MFC.userInfo.vipLevel == 0) {
          addGameLog("没有VIP,只派遣普通探索");
        } else if (MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) > 0) {
          addGameLog("超no委派已放置");
          if (_0x358257.petExploreList[1].endTime * 1000 - MFC.serverTimer.date.getTime() > 0) {
            addGameLog("超no委派正在进行");
          } else {
            addGameLog("领取超no委派");
            await this.send_message("cs_get_pet_explore_back", {
              petPosition: 1
            });
            await wait(500);
            const _0x8987ec = {
              petGetTime: _0x2d9b89[1].getTime,
              explorePosition: 1
            };
            await this.send_message("cs_pet_explore", _0x8987ec);
            addGameLog("放置" + _0x2d9b89[1].nick);
          }
        } else {
          addGameLog("超no委派未放置");
          await wait(500);
          const _0x2a3e13 = {
            petGetTime: _0x2d9b89[1].getTime,
            explorePosition: 1
          };
          await this.send_message("cs_pet_explore", _0x2a3e13);
          addGameLog("放置" + _0x2d9b89[1].nick);
        }
      }
      addGameLog("精灵探索小分队完成");
      this.stop();
    } catch (_0x272723) {}
  }
}
class MergeHelper extends SuperTask {
  constructor() {
    super();
    this.nowName = "融合扫荡";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    this.fightCount = 0;
    this.userBattry;
    this.goalItem;
    this.levelId;
    this.levelName;
    this.userBattryAll = 0;
  }
  start() {
    super.start();
    let _0x16681f = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x6b8b28 = SimpleAlertUi({});
      let _0x14492d = createLabel({
        text: "确定进行扫荡吗?",
        y: 25
      });
      _0x14492d.x = _0x6b8b28.width / 2 - _0x14492d.width / 2;
      _0x6b8b28.addChild(_0x14492d);
      const _0x5c352f = {
        text: "预计获取" + _0x16681f.goalItem.name + "数量: " + _0x16681f.goalItem.needNum,
        y: _0x14492d.y + _0x14492d.height + 15
      };
      let _0x2bd11f = createLabel(_0x5c352f);
      _0x2bd11f.x = _0x6b8b28.width / 2 - _0x2bd11f.width / 2;
      _0x6b8b28.addChild(_0x2bd11f);
      _0x6b8b28.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x16681f.stop();
      }, function () {
        _0x16681f.prcessBody();
      }], null);
      _0x6b8b28.showAlert();
    });
  }
  async prcessBody() {
    let _0x3a0c0b = {};
    let _0x3dc4c7 = 0;
    let _0x2bbd61 = 0;
    try {
      addGameLog("开始进行扫荡: " + this.levelName);
      while (1) {
        if (UserManager.getInstance().userInfo.curEnergy >= this.userBattry) {
          let _0x412c02 = await this.send_message("cs_sd_pve_battle", {
            levelId: this.levelId,
            loop: 1
          });
          _0x3dc4c7 = _0x3dc4c7 + 1;
          await wait(300);
          let _0x36460e = _0x412c02.dropInfo.drops[0].itemList;
          let _0x190008 = "";
          _0x36460e.forEach(_0x149953 => {
            _0x190008 = _0x190008 + "\n" + xls.item.getItem(_0x149953.itemId).name + "数量 :" + _0x149953.itemNum;
            if (!_0x3a0c0b.hasOwnProperty(_0x149953.itemId)) {
              _0x3a0c0b[_0x149953.itemId + ""] = _0x149953.itemNum;
            } else {
              _0x3a0c0b[_0x149953.itemId + ""] = _0x3a0c0b[_0x149953.itemId + ""] + _0x149953.itemNum;
            }
            if (_0x149953.itemId == this.goalItem.itemId) {
              _0x2bbd61 = _0x2bbd61 + _0x149953.itemNum;
            }
          });
          addGameLog("本次扫荡\n" + _0x190008);
          addGameLog("========");
          if (_0x2bbd61 >= this.goalItem.needNum) {
            let _0x11b07d = "";
            for (let _0x42da8b in _0x3a0c0b) {
              if (_0x3a0c0b.hasOwnProperty(_0x42da8b)) {
                _0x11b07d = _0x11b07d + "\n" + xls.item.getItem(_0x42da8b).name + "数量 :" + _0x3a0c0b[_0x42da8b];
              }
            }
            _0x11b07d = _0x11b07d + "\n花费电池数 :" + _0x3dc4c7 * this.userBattry;
            addGameLog("扫荡总计: \n" + _0x11b07d);
            break;
          }
        } else {
          addGameLog("电池不足,停止扫荡");
          let _0x27e331 = "";
          for (let _0x144b89 in _0x3a0c0b) {
            if (_0x3a0c0b.hasOwnProperty(_0x144b89)) {
              _0x27e331 = _0x27e331 + "\n" + xls.item.getItem(_0x144b89).name + "数量 :" + _0x3a0c0b[_0x144b89];
            }
          }
          _0x27e331 = _0x27e331 + "\n花费电池数 :" + _0x3dc4c7 * this.userBattry;
          addGameLog("扫荡总计: \n" + _0x27e331);
          break;
        }
      }
      this.stop();
    } catch (_0x26eea1) {
      let _0x5dcae1 = "";
      for (let _0x535479 in _0x3a0c0b) {
        if (_0x3a0c0b.hasOwnProperty(_0x535479)) {
          _0x5dcae1 = _0x5dcae1 + "\n" + xls.item.getItem(_0x535479).name + "数量 :" + _0x3a0c0b[_0x535479];
        }
      }
      _0x5dcae1 = _0x5dcae1 + "\n花费电池数 :" + _0x3dc4c7 * this.userBattry;
      addGameLog("扫荡总计: \n" + _0x5dcae1);
      this.stop();
    }
  }
}
class Kloswamp extends SuperTask {
  constructor() {
    super();
    this.nowName = "刷水滴";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
  }
  start() {
    super.start();
    let _0x4c8ef9 = this;
    MFC.alert.show("确定进行一键刷水滴吗?(请确保挑战阵容1首位技能是大招)", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x486fc2) {
      _0x4c8ef9.stop();
    }, function (_0x1b0318) {
      _0x4c8ef9.prcessBody();
    }]);
  }
  async waterfight() {
    let _0x16d471 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam1[0]).skills[0];
    await this.send_message("cs_pve_activity_battle", {
      levelId: 5,
      battleType: 3
    });
    await this.initBattle();
    let _0x31b50a = await this.useSkill(_0x16d471);
    while (_0x31b50a.result.result === 0) {
      let _0x33fda6 = _0x31b50a.result.playerInfos.find(_0x44d70d => _0x44d70d.uid === MFC.userInfo.uid);
      let _0xf54fd5 = _0x33fda6 ? _0x33fda6.nextRoundOP : _0x31b50a.result.playerInfos[1].nextRoundOP;
      if (_0xf54fd5 !== 1) {
        addGameLog("首发被击败");
        break;
      }
      if (_0x31b50a.result.roundNum > 5) {
        break;
      }
      addGameLog("未击败，继续攻击");
      _0x31b50a = await this.useSkill(_0x16d471);
    }
    await wait(300);
  }
  async treefight() {
    let _0x3f72a4 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
    await this.send_message("cs_pve_activity_battle", {
      levelId: [5, 6, 7, 8][Math.floor(Math.random() * 4)],
      battleType: 3
    });
    await this.initBattle();
    let _0x50f658 = await this.useSkill(_0x3f72a4);
    while (_0x50f658.result.result === 0) {
      let _0x1ea402 = _0x50f658.result.playerInfos.find(_0x35d11b => _0x35d11b.uid === MFC.userInfo.uid);
      let _0x33c462 = _0x1ea402 ? _0x1ea402.nextRoundOP : _0x50f658.result.playerInfos[1].nextRoundOP;
      if (_0x33c462 !== 1) {
        addGameLog("首发被击败");
        break;
      }
      if (_0x50f658.result.roundNum > 5) {
        break;
      }
      addGameLog("未击败，继续攻击");
      _0x50f658 = await this.useSkill(_0x3f72a4);
    }
    await wait(300);
  }
  async prcessBody() {
    try {
      let _0x13cc33 = 0;
      while (true) {
        let _0x32eec6 = await this.send_message("cs_get_mapBoss_data", {
          planetId: 1
        });
        _0x13cc33 = _0x32eec6.reward["6"] + _0x32eec6.reward["7"] + _0x32eec6.reward["8"];
        if (_0x13cc33 > 4) {
          addGameLog("浇水次数已达上限");
          addGameLog("一键浇水完成");
          break;
        } else if (UserManager.getInstance().userInfo.defaultTeam[0].length == 0) {
          addGameLog("请设置阵容");
          break;
        } else if (getSeerItemNum(100021) == 5) {
          addGameLog("水滴已达上限");
          addGameLog("即将进行浇水");
          await this.send_message("cs_check_enter_battle", {
            type: 17,
            subType: 3,
            bossId: [5, 6, 7, 8][Math.floor(Math.random() * 4)]
          });
          await this.treefight();
        } else {
          await this.waterfight();
        }
      }
      this.stop();
    } catch (_0x147604) {}
  }
}
class Ladder extends SuperTask {
  constructor() {
    super();
    this.nowName = "阶梯";
    this.attr = 0;
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    this.choice = [];
    this.team = [];
    this.rebuff = false;
  }
  start() {
    super.start();
    let _0x4c9777 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x46c8af = [];
      var _0x33615e = SimpleAlertUi({
        height: 450,
        width: 450
      });
      _0x4c9777.alertWin = _0x33615e;
      const _0x12aecd = {
        text: "战斗阶梯",
        x: _0x33615e.width / 2 - 32,
        y: _0x33615e.height / 16
      };
      var _0x18d496 = createLabel(_0x12aecd);
      _0x46c8af.push(_0x18d496);
      const _0xf9465e = {
        text: `1.艾姐阵容是艾尔伊洛增幅幻化利刃1号位
  瞬杀光闪击2号
  奥斯卡圣灵击3号(100级)
  绝命火焰4号
  艾姐固伤打不到260有可能在第8卡关哦`,
        x: _0x33615e.width / 15 + 47,
        y: _0x18d496.y + _0x18d496.height + 2,
        textColor: 16776960
      };
      let _0x37f448 = createLabel(_0xf9465e);
      _0x46c8af.push(_0x37f448);
      const _0x3053fe = {
        text: `2.塞维尔阵容是塞维尔增幅女王之鞭1号位
  瞬杀光闪击2号
  奥斯卡圣灵击3号(100级)
  绝命火焰4号`,
        x: _0x33615e.width / 15 + 47,
        y: _0x37f448.y + _0x37f448.height + 10,
        textColor: 16776960
      };
      let _0x258506 = createLabel(_0x3053fe);
      _0x46c8af.push(_0x258506);
      const _0x5606a4 = {
        text: `3.最下面阵容是给没有艾姐跟塞维尔的
  瞬杀光闪击1号位(100级)
  奥斯卡圣灵击2号(100级)
  绝命火焰3号`,
        x: _0x33615e.width / 15 + 47,
        y: _0x258506.y + _0x258506.height + 10,
        textColor: 16776960
      };
      let _0x33cd8c = createLabel(_0x5606a4);
      _0x46c8af.push(_0x33cd8c);
      const _0x1a0800 = {
        text: `注意:如果没有艾姐跟塞维尔可以手动打过前8关
并且阵容位置准确条件下选择两个阵容其中一个开始
此功能会自动识别上阵`,
        x: _0x33615e.width / 15,
        y: _0x33cd8c.y + _0x33cd8c.height + 10,
        textColor: 16711808
      };
      let _0x37d138 = createLabel(_0x1a0800);
      _0x46c8af.push(_0x37d138);
      _0x4c9777.addAllUis(_0x46c8af);
      _0x33615e.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x4c9777.stop();
      }, function () {
        _0x4c9777.prcessBody();
      }], null);
      _0x33615e.showAlert();
    });
  }
  async ui() {
    super.start();
    let _0xef498 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x1fabb4 = [];
      var _0x209c78 = SimpleAlertUi({
        height: 200,
        width: 300
      });
      _0xef498.alertWin = _0x209c78;
      const _0xb2345a = {
        x: _0x209c78.width / 3.75,
        y: _0x209c78.height / 4.25,
        selected: true,
        storageKey: "jtchois1"
      };
      let _0x1884c1 = createRadio(_0xb2345a);
      _0x1fabb4.push(_0x1884c1);
      const _0x2f913c = {
        x: _0x209c78.width / 3.75,
        y: _0x209c78.height / 2.35,
        selected: false,
        storageKey: "jtchois2"
      };
      let _0x23502d = createRadio(_0x2f913c);
      _0x1fabb4.push(_0x23502d);
      const _0x4bdf2d = {
        text: "请在圆点点击选择战斗阶梯类型",
        x: 25 + _0x1884c1.width,
        y: _0x209c78.height / 10
      };
      var _0x47ee98 = createLabel(_0x4bdf2d);
      _0x1fabb4.push(_0x47ee98);
      const _0x37206a = {
        text: "黄金十二宫",
        x: _0x1884c1.x + 10 + _0x1884c1.width,
        y: _0x209c78.height / 4.5
      };
      var _0x410f64 = createLabel(_0x37206a);
      _0x1fabb4.push(_0x410f64);
      const _0x417672 = {
        text: "冥界十二宫",
        x: _0x1884c1.x + 10 + _0x1884c1.width,
        y: _0x410f64.y * 1.5 + _0x209c78.height / 11
      };
      var _0x221483 = createLabel(_0x417672);
      _0x1fabb4.push(_0x221483);
      _0xef498.addAllUis(_0x1fabb4);
      _0x209c78.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {}, function () {
        localStorage.setItem("jtchois1", _0x1884c1.selected);
        localStorage.setItem("jtchois2", _0x23502d.selected);
        if (_0x1884c1.selected) {
          _0xef498.choice[0] = 1;
          _0xef498.Choice();
        }
        if (_0x23502d.selected) {
          _0xef498.choice[1] = 1;
          _0xef498.Choice();
        }
      }], null);
      _0x209c78.showAlert();
    });
  }
  async Choice() {
    if (this.choice[0]) {
      await this.send_message("cs_combat_ladder_GhostDom", {
        type: 2,
        choice: 1
      });
      MFC.bubbleAlert.showAlert("已选择黄金十二宫");
    }
    if (this.choice[1]) {
      await this.send_message("cs_combat_ladder_GhostDom", {
        type: 2,
        choice: 2
      });
      MFC.bubbleAlert.showAlert("已选择冥界十二宫");
    }
    await this.prcessBody();
  }
  async ui2() {
    super.start();
    let _0x38edab = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x537232 = [];
      var _0x5f598a = SimpleAlertUi({
        height: 250,
        width: 350
      });
      _0x38edab.alertWin = _0x5f598a;
      const _0x15f4e7 = {
        text: "请选择对战阵容",
        x: _0x5f598a.applicationWidth / 2 - 70,
        y: _0x5f598a.height / 15
      };
      let _0xd54d3f = createLabel(_0x15f4e7);
      _0xd54d3f.size = 20;
      _0x537232.push(_0xd54d3f);
      const _0x54432c = {
        text: "艾姐阵容",
        x: _0x5f598a.applicationWidth / 2 - 40,
        y: _0xd54d3f.y + 40
      };
      let _0xc8b475 = createLabel(_0x54432c);
      _0x537232.push(_0xc8b475);
      const _0x56f28e = {
        x: _0xc8b475.x + 70,
        y: _0xc8b475.y,
        selected: true,
        storageKey: "jt1"
      };
      let _0x1b9b0d = createToggle(_0x56f28e);
      _0x537232.push(_0x1b9b0d);
      const _0x17c0bc = {
        text: "塞维尔阵容",
        x: _0x5f598a.applicationWidth / 2 - 50,
        y: _0xc8b475.y + 40
      };
      let _0x352727 = createLabel(_0x17c0bc);
      _0x537232.push(_0x352727);
      const _0x14e3c0 = {
        x: _0x1b9b0d.x,
        y: _0x352727.y,
        selected: true,
        storageKey: "jt2"
      };
      let _0x3cab12 = createToggle(_0x14e3c0);
      _0x537232.push(_0x3cab12);
      const _0x59f580 = {
        text: "光闪击+奥斯卡+绝命",
        x: _0x5f598a.applicationWidth / 2 - 120,
        y: _0x352727.y + 40
      };
      let _0x290336 = createLabel(_0x59f580);
      _0x537232.push(_0x290336);
      const _0x356929 = {
        x: _0x3cab12.x,
        y: _0x290336.y,
        selected: true,
        storageKey: "jt3"
      };
      let _0x7c8df0 = createToggle(_0x356929);
      _0x537232.push(_0x7c8df0);
      _0x38edab.addAllUis(_0x537232);
      _0x5f598a.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x38edab.stop();
      }, function () {
        localStorage.setItem("jt1", _0x1b9b0d.selected);
        localStorage.setItem("jt2", _0x3cab12.selected);
        localStorage.setItem("jt3", _0x7c8df0.selected);
        if (_0x1b9b0d.selected && _0x3cab12.selected && _0x7c8df0.selected || _0x1b9b0d.selected && _0x3cab12.selected || _0x3cab12.selected && _0x7c8df0.selected || _0x1b9b0d.selected && _0x7c8df0.selected) {
          addGameLog("不要选择多个阵容");
          _0x38edab.stop();
        } else if (_0x1b9b0d.selected || _0x3cab12.selected || _0x7c8df0.selected) {
          if (_0x1b9b0d.selected) {
            _0x38edab.team[0] = 1;
          }
          if (_0x3cab12.selected) {
            _0x38edab.team[1] = 1;
          }
          if (_0x7c8df0.selected) {
            _0x38edab.team[2] = 1;
          }
        } else {
          addGameLog("请选择阵容");
          _0x38edab.stop();
        }
        _0x38edab.teamchoice();
      }], null);
      _0x5f598a.showAlert();
    });
  }
  async teamchoice() {
    if (this.team[0] && this.team[1]) {
      MFC.alert.show("请不要同时选中两个阵容");
      await this.stop();
    } else {
      if (this.team[0]) {
        addGameLog("已选择艾姐阵容");
        await this.chackteam1();
      }
      if (this.team[1]) {
        addGameLog("已选择塞维尔阵容");
        await this.chackteam2();
      }
      if (this.team[2]) {
        addGameLog("已选择光闪击+奥斯卡+绝命");
        await this.chackteam3();
      }
    }
  }
  async chackteam1() {
    if (MFC.userInfo.vipLevel >= 8) {
      logger("超能nono等级为8，有保存阵容");
      let _0x2cb700 = await this.send_message("cs_combat_ladder_query_battle", {});
      let _0x4d3bc8 = await this.send_message("cs_combat_ladder_save_record", {
        type: 3
      });
      if (_0x2cb700.petList.length == 0) {
        logger("还没有确认阵容");
        if (_0x4d3bc8.petList.find(_0x331cea => _0x331cea.useSkills.find(_0x48c037 => _0x48c037.id === 10630)) || _0x4d3bc8.petList.find(_0x5c7aec => _0x5c7aec.useSkills.find(_0x4f741e => _0x4f741e.id === 100023))) {
          logger("阵容有光闪击");
          if (_0x4d3bc8.petList.find(_0x57a7ae => _0x57a7ae.useSkills.find(_0x99a010 => _0x99a010.id === 14861))) {
            logger("阵容有圣灵击");
            if (_0x4d3bc8.petList.find(_0x31332f => _0x31332f.useSkills.find(_0x5068ca => _0x5068ca.id === 11022))) {
              logger("阵容有绝命火焰");
              if (_0x4d3bc8.petList.find(_0x4456a1 => _0x4456a1.useSkills.find(_0x26b40b => _0x26b40b.id === 100377)) || _0x4d3bc8.petList.find(_0xeb2737 => _0xeb2737.useSkills.find(_0x175356 => _0x175356.id === 10864))) {
                addGameLog("阵容符合要求");
                await this.send_message("cs_combat_ladder_save_record", {
                  type: 2
                });
                await this.fight1();
                await this.fight();
              } else {
                addGameLog("阵容内没有幻化利刃Plus");
                addGameLog("即将进行阵容更换");
                await this.setteam1();
                await this.fight1();
                await this.fight();
              }
            } else {
              addGameLog("阵容内没有绝命火焰");
              addGameLog("即将进行阵容更换");
              await this.setteam1();
              await this.fight1();
              await this.fight();
            }
          } else {
            addGameLog("阵容内没有圣灵击");
            addGameLog("即将进行阵容更换");
            await this.setteam1();
            await this.fight1();
            await this.fight();
          }
        } else {
          addGameLog("阵容内没有光闪击");
          addGameLog("即将进行阵容更换");
          await this.setteam1();
          await this.fight1();
          await this.fight();
        }
      } else {
        logger("已经确认阵容");
        if (_0x2cb700.petList.find(_0xddffba => _0xddffba.useSkills.find(_0xc6c9e5 => _0xc6c9e5.id === 10630)) || _0x2cb700.petList.find(_0x80e896 => _0x80e896.useSkills.find(_0x2f9f79 => _0x2f9f79.id === 100023))) {
          logger("阵容有光闪击");
          if (_0x2cb700.petList.find(_0x10bfcd => _0x10bfcd.useSkills.find(_0x5bfc8e => _0x5bfc8e.id === 14861))) {
            logger("阵容有圣灵击");
            if (_0x2cb700.petList.find(_0x4196e2 => _0x4196e2.useSkills.find(_0x527e69 => _0x527e69.id === 11022))) {
              logger("阵容有绝命火焰");
              if (_0x2cb700.levelId > 9) {
                addGameLog("阵容符合要求");
                await this.fight();
              } else if (_0x2cb700.petList.find(_0x12cb78 => _0x12cb78.useSkills.find(_0x41afbc => _0x41afbc.id === 100377)) || _0x4d3bc8.petList.find(_0x227dac => _0x227dac.useSkills.find(_0x35673e => _0x35673e.id === 10864))) {
                addGameLog("阵容符合要求");
                await this.fight1();
                await this.fight();
              } else {
                addGameLog("阵容内没有幻化利刃Plus");
                addGameLog("阵容不符合要求");
                this.stop();
              }
            } else {
              addGameLog("阵容内没有绝命火焰");
              addGameLog("阵容不符合要求");
              this.stop();
            }
          } else {
            addGameLog("阵容内没有圣灵击");
            addGameLog("阵容不符合要求");
            this.stop();
          }
        } else {
          addGameLog("阵容内没有光闪击");
          addGameLog("阵容不符合要求");
          this.stop();
        }
      }
    } else {
      logger("超能nono等级为" + MFC.userInfo.vipLevel + "，没有保存阵容");
      let _0x400580 = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x400580);
      if (_0x400580.petList.length == 0) {
        await this.setteam1();
        await this.fight1();
        await this.fight();
      } else {
        logger("阵容已设置");
        await this.fight1();
        await this.fight();
      }
    }
  }
  async chackteam2() {
    if (MFC.userInfo.vipLevel >= 8) {
      logger("超能nono等级为8，有保存阵容");
      let _0x1aff9d = await this.send_message("cs_combat_ladder_query_battle", {});
      let _0x5bdec9 = await this.send_message("cs_combat_ladder_save_record", {
        type: 3
      });
      if (_0x1aff9d.petList.length == 0) {
        logger("还没有确认阵容");
        if (_0x5bdec9.petList.find(_0x1c4b1d => _0x1c4b1d.useSkills.find(_0x16b15e => _0x16b15e.id === 10630)) || _0x5bdec9.petList.find(_0x4d5af0 => _0x4d5af0.useSkills.find(_0x2163dc => _0x2163dc.id === 100023))) {
          logger("阵容有光闪击");
          if (_0x5bdec9.petList.find(_0x3b30cb => _0x3b30cb.useSkills.find(_0x2ff80d => _0x2ff80d.id === 14861))) {
            logger("阵容有圣灵击");
            if (_0x5bdec9.petList.find(_0x246509 => _0x246509.useSkills.find(_0x22f22b => _0x22f22b.id === 11022))) {
              logger("阵容有绝命火焰");
              if (_0x5bdec9.petList.find(_0x5154db => _0x5154db.useSkills.find(_0x48fe45 => _0x48fe45.id === 100181))) {
                addGameLog("阵容符合要求");
                await this.send_message("cs_combat_ladder_save_record", {
                  type: 2
                });
                await this.fight2();
                await this.fight();
              } else {
                addGameLog("阵容内没有女王之鞭Plus");
                addGameLog("即将进行阵容更换");
                await this.setteam2();
                await this.fight2();
                await this.fight();
              }
            } else {
              addGameLog("阵容内没有绝命火焰");
              addGameLog("即将进行阵容更换");
              await this.setteam2();
              await this.fight2();
              await this.fight();
            }
          } else {
            addGameLog("阵容内没有圣灵击");
            addGameLog("即将进行阵容更换");
            await this.setteam2();
            await this.fight2();
            await this.fight();
          }
        } else {
          addGameLog("阵容内没有光闪击");
          addGameLog("即将进行阵容更换");
          await this.setteam2();
          await this.fight2();
          await this.fight();
        }
      } else {
        logger("已经确认阵容");
        if (_0x1aff9d.petList.find(_0x35aa8f => _0x35aa8f.useSkills.find(_0x13e49f => _0x13e49f.id === 10630)) || _0x1aff9d.petList.find(_0x52337a => _0x52337a.useSkills.find(_0x2f3634 => _0x2f3634.id === 100023))) {
          logger("阵容有光闪击");
          if (_0x1aff9d.petList.find(_0x43bf13 => _0x43bf13.useSkills.find(_0x2b69c7 => _0x2b69c7.id === 14861))) {
            logger("阵容有圣灵击");
            if (_0x1aff9d.petList.find(_0x85344b => _0x85344b.useSkills.find(_0x2b25eb => _0x2b25eb.id === 11022))) {
              logger("阵容有绝命火焰");
              if (_0x1aff9d.levelId > 9) {
                addGameLog("阵容符合要求");
                await this.fight();
              } else if (_0x1aff9d.petList.find(_0x2f9e4b => _0x2f9e4b.useSkills.find(_0xd2990c => _0xd2990c.id === 100181))) {
                addGameLog("阵容符合要求");
                await this.fight2();
                await this.fight();
              } else {
                addGameLog("阵容内没有女王之鞭Plus");
                addGameLog("阵容不符合要求");
                this.stop();
              }
            } else {
              addGameLog("阵容内没有绝命火焰");
              addGameLog("阵容不符合要求");
              this.stop();
            }
          } else {
            addGameLog("阵容内没有圣灵击");
            addGameLog("阵容不符合要求");
            this.stop();
          }
        } else {
          addGameLog("阵容内没有光闪击");
          addGameLog("阵容不符合要求");
          this.stop();
        }
      }
    } else {
      logger("超能nono等级为" + MFC.userInfo.vipLevel + "，没有保存阵容");
      let _0x39a18b = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x39a18b);
      if (_0x39a18b.petList.length == 0) {
        await this.setteam2();
        await this.fight2();
        await this.fight();
      } else {
        logger("阵容已设置");
        await this.fight2();
        await this.fight();
      }
    }
  }
  async setteam1() {
    let _0x3166c1 = PetManager.getInstance().getAllPets().map(_0x497f35 => {
      if (_0x497f35.level == 100) {
        if (_0x497f35.skills.indexOf(100377) != -1 || _0x497f35.skills.indexOf(10864) != -1) {
          return _0x497f35.getTime;
        }
      }
    }).filter(_0x1d8a90 => _0x1d8a90)[0];
    let _0x4a1c97 = PetManager.getInstance().getAllPets().map(_0x525179 => {
      if (_0x525179.featureId == 5 || _0x525179.featureId == 6 || _0x525179.featureId == 7 || _0x525179.featureId == 8) {
        if (_0x525179.battleValues[0] > 200) {
          if (_0x525179.skills.indexOf(100023) != -1 || _0x525179.skills.indexOf(10630) != -1) {
            return _0x525179.getTime;
          }
        }
      }
    }).filter(_0x550c54 => _0x550c54 !== undefined).sort((_0x2734b3, _0x5e516a) => _0x5e516a.featureId - _0x2734b3.featureId)[0];
    let _0x2a92c5 = PetManager.getInstance().getAllPets().map(_0x34d568 => {
      if (_0x34d568.level == 100) {
        if (_0x34d568.skills.indexOf(14861) != -1) {
          return _0x34d568.getTime;
        }
      }
    }).filter(_0x185cd2 => _0x185cd2)[0];
    let _0x5cfbe6 = PetManager.getInstance().getAllPets().map(_0x8f407f => {
      if (_0x8f407f.level == 100) {
        if (_0x8f407f.skills.indexOf(11022) != -1) {
          return _0x8f407f.getTime;
        }
      }
    }).filter(_0x4cbd9f => _0x4cbd9f)[0];
    if (_0x3166c1 == undefined) {
      addGameLog("背包没有艾尔伊洛或者没有装备技能");
      this.stop();
    } else if (_0x4a1c97 == undefined) {
      addGameLog("背包没有瞬杀光闪击或者没有装备技能");
      this.stop();
    } else if (_0x2a92c5 == undefined) {
      addGameLog("背包没有奥斯卡或者没有装备技能");
      this.stop();
    } else if (_0x5cfbe6 == undefined) {
      addGameLog("背包没有绝命火焰或者没有装备技能");
      this.stop();
    } else {
      const _0x45022a = {
        petList: [_0x3166c1, _0x4a1c97, _0x2a92c5, _0x5cfbe6]
      };
      await this.send_message("cs_combat_ladder_set_array", _0x45022a);
      addGameLog("阵容设置完成");
    }
  }
  async setteam2() {
    let _0x411e8c = PetManager.getInstance().getAllPets().map(_0x3998a7 => {
      if (_0x3998a7.level > 60) {
        if (_0x3998a7.skills.indexOf(100181) != -1) {
          return _0x3998a7.getTime;
        }
      }
    }).filter(_0xd28612 => _0xd28612)[0];
    let _0x233670 = PetManager.getInstance().getAllPets().map(_0x17ebbe => {
      if (_0x17ebbe.featureId == 5 || _0x17ebbe.featureId == 6 || _0x17ebbe.featureId == 7 || _0x17ebbe.featureId == 8) {
        if (_0x17ebbe.battleValues[0] > 200) {
          if (_0x17ebbe.skills.indexOf(100023) != -1 || _0x17ebbe.skills.indexOf(10630) != -1) {
            return _0x17ebbe.getTime;
          }
        }
      }
    }).filter(_0x5ab502 => _0x5ab502 !== undefined).sort((_0x34850c, _0x3a8092) => _0x3a8092.featureId - _0x34850c.featureId)[0];
    let _0x1abb5e = PetManager.getInstance().getAllPets().map(_0x205bfc => {
      if (_0x205bfc.level == 100) {
        if (_0x205bfc.skills.indexOf(14861) != -1) {
          return _0x205bfc.getTime;
        }
      }
    }).filter(_0x21b70e => _0x21b70e)[0];
    let _0x1402a9 = PetManager.getInstance().getAllPets().map(_0x4609d5 => {
      if (_0x4609d5.level == 100) {
        if (_0x4609d5.skills.indexOf(11022) != -1) {
          return _0x4609d5.getTime;
        }
      }
    }).filter(_0x1acb4d => _0x1acb4d)[0];
    if (_0x411e8c == undefined) {
      addGameLog("背包没有塞维尔或者没有装备技能");
      this.stop();
    } else if (_0x233670 == undefined) {
      addGameLog("背包没有瞬杀光闪击或者没有装备技能");
      this.stop();
    } else if (_0x1abb5e == undefined) {
      addGameLog("背包没有奥斯卡或者没有装备技能");
      this.stop();
    } else if (_0x1402a9 == undefined) {
      addGameLog("背包没有绝命火焰或者没有装备技能");
      this.stop();
    } else {
      const _0x38a655 = {
        petList: [_0x411e8c, _0x233670, _0x1abb5e, _0x1402a9]
      };
      await this.send_message("cs_combat_ladder_set_array", _0x38a655);
      addGameLog("阵容设置完成");
    }
  }
  async fight() {
    let _0x2c6d56 = await this.send_message("cs_combat_ladder_query_battle", {});
    let _0x5e4ff5 = {};
    while (_0x2c6d56.levelId > 8 && _0x2c6d56.levelId <= 28) {
      if (_0x2c6d56.petList.find(_0x233887 => _0x233887.useSkills.find(_0x2d8443 => _0x2d8443.id === 10630)) || _0x2c6d56.petList.find(_0x46a469 => _0x46a469.useSkills.find(_0x568664 => _0x568664.id === 100023))) {
        if (_0x2c6d56.petList.find(_0x6599fe => _0x6599fe.useSkills.find(_0x27d901 => _0x27d901.id === 14861))) {
          if (this.rebuff) {
            await this.send_message("cs_combat_ladder_start_battle", {
              idList: [2]
            });
            await this.send_message("cs_set_match_battle_speed", {
              speed: 2
            });
            let _0x460b05 = await this.waitEvent("sc_battle_notify_load_resource");
            _0x460b05.gameBody.splice(0, _0x460b05.gameBody.length);
            await this.send_message("cs_online_load_resource", {
              groupId: "",
              battleType: 0
            });
            await this.send_message("cs_online_player_operation", {
              opType: 5,
              data: null,
              groupId: ""
            });
            _0x460b05 = await this.waitEvent("sc_battle_notify_round_result");
            let _0x542449 = JSON.parse(_0x460b05.gameBody[_0x460b05.gameBody.length - 1].raw).result.processQueue.find(_0x5d8f65 => _0x5d8f65.uid !== MFC.userInfo.uid).affects.filter(function (_0x320f46) {
              if (_0x320f46.id == 143 || _0x320f46.id == 67) {
                return _0x320f46;
              }
            });
            if (_0x542449.length > 0) {
              this.rebuff = true;
            } else {
              this.rebuff = false;
            }
            if (!_0x5e4ff5[_0x2c6d56.levelId]) {
              _0x5e4ff5[_0x2c6d56.levelId] = 1;
            } else {
              _0x5e4ff5[_0x2c6d56.levelId]++;
            }
            addGameLog("目前阶梯第" + _0x2c6d56.levelId + "层，进行第" + _0x5e4ff5[_0x2c6d56.levelId] + "次战斗");
            _0x542449 = await this.useSkill(14861);
            _0x2c6d56 = await this.send_message("cs_combat_ladder_query_battle", {});
          } else {
            await this.send_message("cs_combat_ladder_start_battle", {
              idList: [1]
            });
            let _0x4071a5 = await this.initBattle();
            let _0x1e2df0 = _0x4071a5.result.processQueue.find(_0x53bff4 => _0x53bff4.uid !== MFC.userInfo.uid).affects.filter(function (_0x3500ca) {
              if (_0x3500ca.id == 143 || _0x3500ca.id == 67) {
                return _0x3500ca;
              }
            });
            if (_0x1e2df0.length > 0) {
              this.rebuff = true;
            } else {
              this.rebuff = false;
            }
            if (!_0x5e4ff5[_0x2c6d56.levelId]) {
              _0x5e4ff5[_0x2c6d56.levelId] = 1;
            } else {
              _0x5e4ff5[_0x2c6d56.levelId]++;
            }
            addGameLog("目前阶梯第" + _0x2c6d56.levelId + "层，进行第" + _0x5e4ff5[_0x2c6d56.levelId] + "次战斗");
            if (_0x2c6d56.petList.find(_0x215842 => _0x215842.useSkills.find(_0x5e31d5 => _0x5e31d5.id === 10630))) {
              _0x4071a5 = await this.useSkill(10630);
            }
            if (_0x2c6d56.petList.find(_0x2cdaa1 => _0x2cdaa1.useSkills.find(_0x238465 => _0x238465.id === 100023))) {
              _0x4071a5 = await this.useSkill(100023);
            }
            _0x2c6d56 = await this.send_message("cs_combat_ladder_query_battle", {});
          }
        } else {
          addGameLog("阵容内没有圣灵击");
          this.stop();
          break;
        }
      } else {
        addGameLog("阵容内没有光闪击");
        this.stop();
        break;
      }
      _0x2c6d56 = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x2c6d56.levelId);
    }
    while (_0x2c6d56.levelId > 28 && _0x2c6d56.levelId <= 30) {
      if (_0x2c6d56.petList.find(_0x315349 => _0x315349.useSkills.find(_0x8dd0ee => _0x8dd0ee.id === 11022))) {
        await this.send_message("cs_combat_ladder_start_battle", {
          idList: [3]
        });
        await this.initBattle();
        if (!_0x5e4ff5[_0x2c6d56.levelId]) {
          _0x5e4ff5[_0x2c6d56.levelId] = 1;
        } else {
          _0x5e4ff5[_0x2c6d56.levelId]++;
        }
        addGameLog("目前阶梯第" + _0x2c6d56.levelId + "层，进行第" + _0x5e4ff5[_0x2c6d56.levelId] + "次战斗");
        let _0x316463 = await this.useSkill(11022);
        if (_0x316463.result.result === 1) {
          if (_0x2c6d56.levelId == 30) {
            break;
          }
        }
        _0x2c6d56 = await this.send_message("cs_combat_ladder_query_battle", {});
      } else {
        addGameLog("阵容内没有绝命火焰");
        this.stop();
        break;
      }
    }
    addGameLog("阶梯结束");
    this.stop();
  }
  async fight1() {
    let _0xa1505d = await this.send_message("cs_combat_ladder_query_battle", {});
    let _0x5688a3 = {};
    while (_0xa1505d.levelId < 9) {
      if (_0xa1505d.petList.find(_0x173467 => _0x173467.useSkills.find(_0x2edb22 => _0x2edb22.id === 100377)) || _0xa1505d.petList.find(_0x315b36 => _0x315b36.useSkills.find(_0x39a7d4 => _0x39a7d4.id === 10864))) {
        logger("阵容有幻化利刃plus");
        await this.send_message("cs_combat_ladder_start_battle", {
          idList: [0]
        });
        await this.initBattle();
        if (!_0x5688a3[_0xa1505d.levelId]) {
          _0x5688a3[_0xa1505d.levelId] = 1;
        } else {
          _0x5688a3[_0xa1505d.levelId]++;
        }
        addGameLog("目前阶梯第" + _0xa1505d.levelId + "层，进行第" + _0x5688a3[_0xa1505d.levelId] + "次战斗");
        if (_0xa1505d.petList.find(_0x1b7803 => _0x1b7803.useSkills.find(_0x25a9f6 => _0x25a9f6.id === 100377))) {
          await this.useSkill(100377);
        }
        if (_0xa1505d.petList.find(_0x53c768 => _0x53c768.useSkills.find(_0x42f4d2 => _0x42f4d2.id === 10864))) {
          await this.useSkill(10864);
        }
        _0xa1505d = await this.send_message("cs_combat_ladder_query_battle", {});
      } else {
        addGameLog("阵容缺乏幻化利刃plus");
        this.stop();
        break;
      }
    }
  }
  async fight2() {
    let _0x3ba17c = await this.send_message("cs_combat_ladder_query_battle", {});
    let _0x3b9854 = {};
    while (_0x3ba17c.levelId < 9) {
      if (_0x3ba17c.petList.find(_0x38664f => _0x38664f.useSkills.find(_0x55e5c0 => _0x55e5c0.id === 100181))) {
        logger("阵容有女王之鞭plus");
        await this.send_message("cs_combat_ladder_start_battle", {
          idList: [0]
        });
        await this.initBattle();
        if (!_0x3b9854[_0x3ba17c.levelId]) {
          _0x3b9854[_0x3ba17c.levelId] = 1;
        } else {
          _0x3b9854[_0x3ba17c.levelId]++;
        }
        addGameLog("目前阶梯第" + _0x3ba17c.levelId + "层，进行第" + _0x3b9854[_0x3ba17c.levelId] + "次战斗");
        await this.useSkill(100181);
        _0x3ba17c = await this.send_message("cs_combat_ladder_query_battle", {});
      } else {
        addGameLog("阵容缺乏女王之鞭plus");
        this.stop();
        break;
      }
    }
  }
  async chackteam3() {
    if (MFC.userInfo.vipLevel >= 8) {
      logger("超能nono等级为8，有保存阵容");
      let _0x23aca6 = await this.send_message("cs_combat_ladder_query_battle", {});
      let _0x52b152 = await this.send_message("cs_combat_ladder_save_record", {
        type: 3
      });
      if (_0x23aca6.petList.length == 0) {
        if (_0x52b152.petList.useSkills) {
          if (_0x52b152.petList.useSkills.find(_0x4ff77d => _0x4ff77d.id === 10630) || _0x52b152.petList.useSkills.find(_0x3e36f8 => _0x3e36f8.id === 100023)) {
            if (_0x52b152.petList.useSkills.find(_0x565ace => _0x565ace.id === 14816)) {
              logger("阵容有圣灵击");
              if (_0x52b152.petList.useSkills.find(_0xdb009e => _0xdb009e.id === 11022)) {
                addGameLog("阵容符合要求");
                await this.send_message("cs_combat_ladder_save_record", {
                  type: 2
                });
                await this.fight3();
              } else {
                addGameLog("阵容内没有绝命火焰");
                addGameLog("即将进行阵容更换");
                await this.setteam3();
                await this.fight3();
              }
            } else {
              addGameLog("阵容内没有圣灵击");
              addGameLog("即将进行阵容更换");
              await this.setteam3();
              await this.fight3();
            }
          } else {
            addGameLog("阵容内没有光闪击");
            addGameLog("即将进行阵容更换");
            await this.setteam3();
            await this.fight3();
          }
        } else {
          await this.setteam3();
          await this.fight3();
        }
      } else if (_0x23aca6.petList[0].useSkills.find(_0x52c990 => _0x52c990.id === 10630) || _0x23aca6.petList[0].useSkills.find(_0x23ffa4 => _0x23ffa4.id === 100023)) {
        if (_0x23aca6.petList[1].useSkills.find(_0x39ffbb => _0x39ffbb.id === 14861)) {
          if (_0x23aca6.petList[2].useSkills.find(_0x177c66 => _0x177c66.id === 11022)) {
            addGameLog("阵容符合要求");
            await this.fight3();
          } else {
            addGameLog("阵容内没有绝命火焰");
            addGameLog("阵容不符合要求");
            this.stop();
          }
        } else {
          addGameLog("阵容内没有圣灵击");
          addGameLog("阵容不符合要求");
          this.stop();
        }
      } else {
        addGameLog("阵容内没有光闪击");
        addGameLog("阵容不符合要求");
        this.stop();
      }
    } else {
      logger("超能nono等级为" + MFC.userInfo.vipLevel + "，没有保存阵容");
      let _0x3e2407 = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x3e2407);
      if (_0x3e2407.petList.length == 0) {
        await this.setteam3();
        await this.fight3();
      } else {
        logger("阵容已设置");
        await this.setteam3();
        await this.fight3();
      }
    }
  }
  async setteam3() {
    let _0x3dccff = PetManager.getInstance().getAllPets().map(_0xc564c3 => {
      if (_0xc564c3.featureId == 5 || _0xc564c3.featureId == 6 || _0xc564c3.featureId == 7 || _0xc564c3.featureId == 8) {
        if (_0xc564c3.battleValues[0] > 200) {
          if (_0xc564c3.skills.indexOf(100023) != -1 || _0xc564c3.skills.indexOf(10630) != -1) {
            return _0xc564c3.getTime;
          }
        }
      }
    }).filter(_0x4f52b2 => _0x4f52b2 !== undefined).sort((_0x449d51, _0xd914c0) => _0xd914c0.featureId - _0x449d51.featureId)[0];
    let _0x234245 = PetManager.getInstance().getAllPets().map(_0x10eba7 => {
      if (_0x10eba7.level == 100) {
        if (_0x10eba7.skills.indexOf(14861) != -1) {
          return _0x10eba7.getTime;
        }
      }
    }).filter(_0x46340a => _0x46340a)[0];
    let _0x4abf33 = PetManager.getInstance().getAllPets().map(_0x96d708 => {
      if (_0x96d708.level == 100) {
        if (_0x96d708.skills.indexOf(11022) != -1) {
          return _0x96d708.getTime;
        }
      }
    }).filter(_0x18b0ac => _0x18b0ac)[0];
    if (_0x3dccff == undefined) {
      addGameLog("背包没有瞬杀光闪击或者没有装备技能");
      this.stop();
    } else if (_0x234245 == undefined) {
      addGameLog("背包没有奥斯卡或者没有装备技能");
      this.stop();
    } else if (_0x4abf33 == undefined) {
      addGameLog("背包没有绝命火焰或者没有装备技能");
      this.stop();
    } else {
      const _0x358b4e = {
        petList: [_0x3dccff, _0x234245, _0x4abf33]
      };
      await this.send_message("cs_combat_ladder_set_array", _0x358b4e);
      addGameLog("阵容设置完成");
    }
  }
  async fight3() {
    let _0x3ad1de = await this.send_message("cs_combat_ladder_query_battle", {});
    let _0x4738e1 = {};
    while (_0x3ad1de.levelId > 0 && _0x3ad1de.levelId <= 28) {
      if (_0x3ad1de.petList.find(_0x4e7373 => _0x4e7373.useSkills.find(_0x1d8624 => _0x1d8624.id === 10630)) || _0x3ad1de.petList.find(_0x54a76a => _0x54a76a.useSkills.find(_0x456ea3 => _0x456ea3.id === 100023))) {
        if (_0x3ad1de.petList.find(_0x52972a => _0x52972a.useSkills.find(_0x27234c => _0x27234c.id === 14861))) {
          if (this.rebuff) {
            await this.send_message("cs_combat_ladder_start_battle", {
              idList: [1]
            });
            let _0x53ea91 = await this.initBattle();
            let _0x1220b0 = _0x53ea91.result.affects.map(_0x4290af => {
              if (_0x4290af && _0x4290af.id) {
                return _0x4290af.id;
              } else {
                return null;
              }
            });
            if (_0x1220b0.includes(143) || _0x1220b0.includes(67) || _0x1220b0.includes(71) || _0x3ad1de.levelId == 10 || _0x3ad1de.levelId == 11 || _0x3ad1de.levelId == 14 || _0x3ad1de.levelId == 15 || _0x3ad1de.levelId == 21 || _0x3ad1de.levelId == 22) {
              this.rebuff = true;
            } else {
              this.rebuff = false;
            }
            if (!_0x4738e1[_0x3ad1de.levelId]) {
              _0x4738e1[_0x3ad1de.levelId] = 1;
            } else {
              _0x4738e1[_0x3ad1de.levelId]++;
            }
            addGameLog("目前阶梯第" + _0x3ad1de.levelId + "层，进行第" + _0x4738e1[_0x3ad1de.levelId] + "次战斗");
            _0x53ea91 = await this.useSkill(14861);
            _0x3ad1de = await this.send_message("cs_combat_ladder_query_battle", {});
          } else {
            await this.send_message("cs_combat_ladder_start_battle", {
              idList: [0]
            });
            let _0x1274ba = await this.initBattle();
            let _0x4d7b8c = _0x1274ba.result.affects.map(_0x21643d => {
              if (_0x21643d && _0x21643d.id) {
                return _0x21643d.id;
              } else {
                return null;
              }
            });
            if (_0x4d7b8c.includes(143) || _0x4d7b8c.includes(67) || _0x4d7b8c.includes(71) || _0x3ad1de.levelId == 10 || _0x3ad1de.levelId == 11 || _0x3ad1de.levelId == 14 || _0x3ad1de.levelId == 15 || _0x3ad1de.levelId == 21 || _0x3ad1de.levelId == 22) {
              this.rebuff = true;
            } else {
              this.rebuff = false;
            }
            if (!_0x4738e1[_0x3ad1de.levelId]) {
              _0x4738e1[_0x3ad1de.levelId] = 1;
            } else {
              _0x4738e1[_0x3ad1de.levelId]++;
            }
            addGameLog("目前阶梯第" + _0x3ad1de.levelId + "层，进行第" + _0x4738e1[_0x3ad1de.levelId] + "次战斗");
            if (_0x3ad1de.petList.find(_0x366252 => _0x366252.useSkills.find(_0xa2a8b4 => _0xa2a8b4.id === 10630))) {
              _0x1274ba = await this.useSkill(10630);
            }
            if (_0x3ad1de.petList.find(_0x47fda1 => _0x47fda1.useSkills.find(_0x365a35 => _0x365a35.id === 100023))) {
              _0x1274ba = await this.useSkill(100023);
            }
            _0x3ad1de = await this.send_message("cs_combat_ladder_query_battle", {});
          }
        } else {
          addGameLog("阵容内没有圣灵击");
          this.stop();
          break;
        }
      } else {
        addGameLog("阵容内没有光闪击");
        this.stop();
        break;
      }
      _0x3ad1de = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x3ad1de.levelId);
    }
    while (_0x3ad1de.levelId > 28 && _0x3ad1de.levelId <= 30) {
      if (_0x3ad1de.petList.find(_0x836923 => _0x836923.useSkills.find(_0x16280b => _0x16280b.id === 11022))) {
        await this.send_message("cs_combat_ladder_start_battle", {
          idList: [2]
        });
        await this.send_message("cs_set_match_battle_speed", {
          speed: 2
        });
        await this.initBattle();
        if (!_0x4738e1[_0x3ad1de.levelId]) {
          _0x4738e1[_0x3ad1de.levelId] = 1;
        } else {
          _0x4738e1[_0x3ad1de.levelId]++;
        }
        addGameLog("目前阶梯第" + _0x3ad1de.levelId + "层，进行第" + _0x4738e1[_0x3ad1de.levelId] + "次战斗");
        let _0x5d6f8f = await this.useSkill(11022);
        if (_0x5d6f8f.result.result === 1) {
          if (_0x3ad1de.levelId == 30) {
            break;
          }
        }
        _0x3ad1de = await this.send_message("cs_combat_ladder_query_battle", {});
      } else {
        addGameLog("阵容内没有绝命火焰");
        this.stop();
        break;
      }
    }
    addGameLog("阶梯结束");
    this.stop();
  }
  async prcessBody() {
    try {
      xls.battleLadder.load(() => {});
      let _0x1c3f49 = await this.send_message("cs_combat_ladder_GhostDom", {
        type: 1,
        choice: 0
      });
      if (_0x1c3f49.choice == 0) {
        logger("战斗阶梯未选择");
        await this.ui();
      } else {
        logger("战斗阶梯已选择");
        if (_0x1c3f49.choice == 1) {
          addGameLog("已选择黄金十二宫");
          await this.ui2();
        }
        if (_0x1c3f49.choice == 2) {
          addGameLog("已选择冥界十二宫");
          await this.ui2();
        }
      }
    } catch (_0x124945) {}
  }
}
class Misc extends SuperTask {
  constructor() {
    super();
    this.nowName = "杂项";
    this.task = [];
    this.input2Pwd = null;
  }
  start() {
    super.start();
    let _0x6fdf18 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x5a60b7 = [];
      var _0x38685d = SimpleAlertUi({
        height: 460,
        width: 400
      });
      _0x6fdf18.alertWin = _0x38685d;
      const _0x416300 = {
        text: "一键杂项",
        x: _0x38685d.applicationWidth / 2 - 20,
        y: _0x38685d.height / 15
      };
      let _0x43e6b7 = createLabel(_0x416300);
      _0x43e6b7.size = 20;
      _0x5a60b7.push(_0x43e6b7);
      const _0x2a0b3d = {
        text: "电池分享",
        x: _0x38685d.width / 5,
        y: _0x43e6b7.y + 40
      };
      let _0xf7cedd = createLabel(_0x2a0b3d);
      _0x5a60b7.push(_0xf7cedd);
      const _0x235ea6 = {
        x: _0xf7cedd.x + 70,
        y: _0xf7cedd.y,
        selected: true,
        storageKey: "bt1"
      };
      let _0x119971 = createToggle(_0x235ea6);
      _0x5a60b7.push(_0x119971);
      const _0x5448a0 = {
        text: "揍bug",
        x: _0x119971.x + 70,
        y: _0xf7cedd.y
      };
      let _0x23d294 = createLabel(_0x5448a0);
      _0x5a60b7.push(_0x23d294);
      const _0x3e7b94 = {
        x: _0x23d294.x + 60,
        y: _0xf7cedd.y,
        selected: true,
        storageKey: "bt2"
      };
      let _0x1d48ae = createToggle(_0x3e7b94);
      _0x5a60b7.push(_0x1d48ae);
      const _0x1c775b = {
        text: "小屋点赞",
        x: _0x38685d.width / 5,
        y: _0xf7cedd.y + 40
      };
      let _0x582d61 = createLabel(_0x1c775b);
      _0x5a60b7.push(_0x582d61);
      const _0x42b8c2 = {
        x: _0x582d61.x + 70,
        y: _0x582d61.y,
        selected: true,
        storageKey: "bt3"
      };
      let _0x37d5a3 = createToggle(_0x42b8c2);
      _0x5a60b7.push(_0x37d5a3);
      const _0x7844c9 = {
        text: "每日电池",
        x: _0x119971.x + 60,
        y: _0x582d61.y
      };
      let _0x5a4324 = createLabel(_0x7844c9);
      _0x5a60b7.push(_0x5a4324);
      const _0x49c50a = {
        x: _0x5a4324.x + 70,
        y: _0x582d61.y,
        selected: true,
        storageKey: "bt4"
      };
      let _0x10aa1c = createToggle(_0x49c50a);
      _0x5a60b7.push(_0x10aa1c);
      const _0x1c12f4 = {
        text: "经验剧情",
        x: _0x38685d.width / 5,
        y: _0x582d61.y + 40
      };
      let _0x2cf3a3 = createLabel(_0x1c12f4);
      _0x5a60b7.push(_0x2cf3a3);
      const _0x4da6e6 = {
        x: _0x2cf3a3.x + 70,
        y: _0x2cf3a3.y,
        selected: true,
        storageKey: "bt5"
      };
      let _0x7f602 = createToggle(_0x4da6e6);
      _0x5a60b7.push(_0x7f602);
      const _0x10d2ee = {
        text: "豆子剧情",
        x: _0x119971.x + 60,
        y: _0x2cf3a3.y
      };
      let _0x573208 = createLabel(_0x10d2ee);
      _0x5a60b7.push(_0x573208);
      const _0x2dd39c = {
        x: _0x573208.x + 70,
        y: _0x573208.y,
        selected: true,
        storageKey: "bt6"
      };
      let _0x3851df = createToggle(_0x2dd39c);
      _0x5a60b7.push(_0x3851df);
      const _0x1030a4 = {
        text: "挖取矿物",
        x: _0x38685d.width / 5,
        y: _0x2cf3a3.y + 40
      };
      let _0x54d651 = createLabel(_0x1030a4);
      _0x5a60b7.push(_0x54d651);
      const _0x49b78a = {
        x: _0x54d651.x + 70,
        y: _0x54d651.y,
        selected: true,
        storageKey: "bt7"
      };
      let _0x4535f7 = createToggle(_0x49b78a);
      _0x5a60b7.push(_0x4535f7);
      const _0x4218b4 = {
        text: "光暗狮子",
        x: _0x119971.x + 60,
        y: _0x54d651.y
      };
      let _0x5bc239 = createLabel(_0x4218b4);
      _0x5a60b7.push(_0x5bc239);
      const _0x4f08e3 = {
        x: _0x5bc239.x + 70,
        y: _0x5bc239.y,
        selected: true,
        storageKey: "bt8"
      };
      let _0x1eeb4c = createToggle(_0x4f08e3);
      _0x5a60b7.push(_0x1eeb4c);
      const _0x230519 = {
        text: "好友点赞",
        x: _0x38685d.width / 5,
        y: _0x54d651.y + 40
      };
      let _0x40b927 = createLabel(_0x230519);
      _0x5a60b7.push(_0x40b927);
      const _0x5b0a3f = {
        x: _0x40b927.x + 70,
        y: _0x40b927.y,
        selected: true,
        storageKey: "bt9"
      };
      let _0x865370 = createToggle(_0x5b0a3f);
      _0x5a60b7.push(_0x865370);
      const _0x307e68 = {
        text: "教皇领取",
        x: _0x119971.x + 60,
        y: _0x40b927.y
      };
      let _0xeee1fc = createLabel(_0x307e68);
      _0x5a60b7.push(_0xeee1fc);
      const _0x114e96 = {
        x: _0xeee1fc.x + 70,
        y: _0xeee1fc.y,
        selected: true,
        storageKey: "bt10"
      };
      let _0x835d53 = createToggle(_0x114e96);
      _0x5a60b7.push(_0x835d53);
      const _0xeabeb9 = {
        text: "忍魂活动",
        x: _0x40b927.x,
        y: _0x40b927.y + 40
      };
      let _0x54fe86 = createLabel(_0xeabeb9);
      _0x5a60b7.push(_0x54fe86);
      const _0x204a5d = {
        x: _0x54fe86.x + 70,
        y: _0x54fe86.y,
        selected: true,
        storageKey: "ninja"
      };
      let _0x2c7afc = createToggle(_0x204a5d);
      _0x5a60b7.push(_0x2c7afc);
      const _0x3e3726 = {
        text: "兑换cdk",
        x: _0x119971.x + 60,
        y: _0x54fe86.y
      };
      let _0x3c799a = createLabel(_0x3e3726);
      _0x5a60b7.push(_0x3c799a);
      const _0x338f64 = {
        x: _0x3c799a.x + 70,
        y: _0x3c799a.y,
        selected: false,
        storageKey: "cdk"
      };
      let _0x33b80e = createToggle(_0x338f64);
      _0x5a60b7.push(_0x33b80e);
      const _0x612451 = {
        text: "分解符文",
        x: _0x54fe86.x,
        y: _0x54fe86.y + 40
      };
      let _0x4bbe7a = createLabel(_0x612451);
      _0x5a60b7.push(_0x4bbe7a);
      const _0x367d7f = {
        x: _0x4bbe7a.x + 70,
        y: _0x4bbe7a.y,
        selected: false,
        storageKey: "rune"
      };
      let _0x12480c = createToggle(_0x367d7f);
      _0x5a60b7.push(_0x12480c);
      const _0x43c5a9 = {
        text: "瞩目扫荡",
        x: _0x119971.x + 60,
        y: _0x4bbe7a.y
      };
      let _0x2bed4f = createLabel(_0x43c5a9);
      _0x5a60b7.push(_0x2bed4f);
      const _0x3ceea5 = {
        x: _0x3c799a.x + 70,
        y: _0x2bed4f.y,
        selected: false,
        storageKey: "zmsd"
      };
      let _0x4a1a9d = createToggle(_0x3ceea5);
      _0x5a60b7.push(_0x4a1a9d);
      const _0x36ee14 = {
        text: "奥特分享",
        x: _0x54fe86.x,
        y: _0x4bbe7a.y + 40
      };
      let _0x4741e5 = createLabel(_0x36ee14);
      const _0x5b74be = {
        x: _0x4bbe7a.x + 70,
        y: _0x4741e5.y,
        selected: false,
        storageKey: "atshare"
      };
      let _0x1e090f = createToggle(_0x5b74be);
      _0x6fdf18.addAllUis(_0x5a60b7);
      _0x38685d.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x6fdf18.stop();
      }, function () {
        localStorage.setItem("bt1", _0x119971.selected);
        localStorage.setItem("bt2", _0x1d48ae.selected);
        localStorage.setItem("bt3", _0x37d5a3.selected);
        localStorage.setItem("bt4", _0x10aa1c.selected);
        localStorage.setItem("bt5", _0x7f602.selected);
        localStorage.setItem("bt6", _0x3851df.selected);
        localStorage.setItem("bt7", _0x4535f7.selected);
        localStorage.setItem("bt8", _0x1eeb4c.selected);
        localStorage.setItem("bt9", _0x865370.selected);
        localStorage.setItem("bt10", _0x835d53.selected);
        localStorage.setItem("ninja", _0x2c7afc.selected);
        localStorage.setItem("cdk", _0x33b80e.selected);
        localStorage.setItem("rune", _0x12480c.selected);
        localStorage.setItem("zmsd", _0x4a1a9d.selected);
        localStorage.setItem("atshare", _0x1e090f.selected);
        let _0x5d48c5 = [_0x119971, _0x1d48ae, _0x37d5a3, _0x10aa1c, _0x7f602, _0x3851df, _0x4535f7, _0x1eeb4c, _0x865370, _0x835d53, _0x2c7afc, _0x33b80e, _0x12480c, _0x4a1a9d, _0x1e090f];
        for (let _0x4f83e8 = 0; _0x4f83e8 < _0x5d48c5.length; _0x4f83e8++) {
          if (_0x5d48c5[_0x4f83e8].selected) {
            _0x6fdf18.task[_0x4f83e8] = 1;
          }
        }
        _0x6fdf18.prcessBody();
      }], null);
      _0x38685d.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (this.task[0]) {
        await this.send_message("cs_share_succeed", {});
        await wait(200);
        addGameLog("分享电池完成");
      }
      if (this.task[13]) {
        let _0x59a43d = xls.monthPveBoss.getItems().filter(function (_0x273281) {
          return _0x273281.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x273281.endTime;
        });
        if (_0x59a43d.length <= 0) {
          addGameLog("瞩目精灵活动暂未开启");
        } else {
          for (let _0xc222b0 = 0; _0xc222b0 < _0x59a43d.length; _0xc222b0++) {
            if (MFC.attr.getAttr((_0x59a43d[_0xc222b0].id >= 13 ? 5224038 : MFC.attrType.foreverMonthPveActivityStart) + _0x59a43d[_0xc222b0].activityType - 1) >= 2100) {
              addGameLog("瞩目精灵活动活力值已达标");
              let _0x3235e7 = MonthPveBossUtils.V_GetPveBossCost(xls.monthPveBoss.getItems().filter(function (_0x505529) {
                return _0x505529.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x505529.endTime;
              })[_0xc222b0]);
              if (BitUtils.getBit(MFC.attr.getAttr(_0x3235e7.progressFinishAttr), _0x3235e7.progressFinishIdx)) {
                addGameLog("图纸已领取");
              } else {
                const _0x28a3ba = {
                  type: 2,
                  id: _0x59a43d[_0xc222b0].activityType,
                  progressDropId: 1,
                  petList: []
                };
                await this.send_message("cs_month_pve", _0x28a3ba);
                addGameLog("图纸已领取");
              }
            } else {
              let _0x28b65f = MonthPveBossUtils.V_GetPveBossCost(xls.monthPveBoss.getItems().filter(function (_0x24f0db) {
                return _0x24f0db.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x24f0db.endTime;
              })[_0xc222b0]);
              let _0x4b1d0e = 1;
              let _0x525236 = 3326;
              if (_0x59a43d[_0xc222b0].id >= 13) {
                _0x525236 = 5223990;
                _0x525236 = _0x525236 + _0x59a43d[_0xc222b0].activityType - 1;
              }
              let _0x5b3c4b = MFC.attr.getAttr(_0x525236);
              if (BitUtils.getBit(_0x5b3c4b, 3) > 0) {
                while (1) {
                  if (Math.max(0, _0x28b65f.dailyLimit + BitUtils.getBits(MFC.attr.getAttr((_0x59a43d[_0xc222b0].id < 13 ? 11361 : 5002353) + _0x59a43d[_0xc222b0].activityType - 1), 16, 16) - BitUtils.getBits(MFC.attr.getAttr((_0x59a43d[_0xc222b0].id < 13 ? 11361 : 5002353) + _0x59a43d[_0xc222b0].activityType - 1), 0, 16)) > 0) {
                    if (VIPManager.V_GetIsNoPlus()) {
                      const _0x2d8636 = {
                        type: 5,
                        id: _0x59a43d[_0xc222b0].id,
                        difficultRank: 3,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x2d8636);
                      addGameLog("扫荡第" + _0x4b1d0e + "次");
                      _0x4b1d0e++;
                    } else if (VIPManager.getInstance().isVip) {
                      if (MFC.userInfo.curEnergy >= _0x28b65f.cardDatas._maps[3].costEnergy * 5 * 0.5) {
                        const _0x58b899 = {
                          type: 5,
                          id: _0x59a43d[_0xc222b0].id,
                          difficultRank: 3,
                          petList: [],
                          sweepTime: 1
                        };
                        await this.send_message("cs_month_pve", _0x58b899);
                        addGameLog("扫荡第" + _0x4b1d0e + "次");
                        _0x4b1d0e++;
                      } else {
                        addGameLog("电池不足");
                        break;
                      }
                    } else if (MFC.userInfo.curEnergy >= _0x28b65f.cardDatas._maps[3].costEnergy * 5) {
                      const _0x3ed711 = {
                        type: 5,
                        id: _0x59a43d[_0xc222b0].id,
                        difficultRank: 3,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x3ed711);
                      addGameLog("扫荡第" + _0x4b1d0e + "次");
                      _0x4b1d0e++;
                    } else {
                      addGameLog("电池不足");
                      break;
                    }
                  } else {
                    addGameLog("次数不足");
                    break;
                  }
                  if (MFC.attr.getAttr((_0x59a43d[_0xc222b0].id >= 13 ? 5224038 : MFC.attrType.foreverMonthPveActivityStart) + _0x59a43d[_0xc222b0].activityType - 1) >= 2100) {
                    addGameLog("瞩目精灵活动活力值已达标");
                    if (BitUtils.getBit(MFC.attr.getAttr(_0x28b65f.progressFinishAttr), _0x28b65f.progressFinishIdx)) {
                      addGameLog("图纸已领取");
                    } else {
                      const _0x5cead2 = {
                        type: 2,
                        id: _0x59a43d[_0xc222b0].activityType,
                        progressDropId: 1,
                        petList: []
                      };
                      await this.send_message("cs_month_pve", _0x5cead2);
                      addGameLog("图纸已领取");
                    }
                    break;
                  }
                }
              } else if (BitUtils.getBit(_0x5b3c4b, 2) > 0) {
                while (1) {
                  if (Math.max(0, _0x28b65f.dailyLimit + BitUtils.getBits(MFC.attr.getAttr((_0x59a43d[_0xc222b0].id < 13 ? 11361 : 5002353) + _0x59a43d[_0xc222b0].activityType - 1), 16, 16) - BitUtils.getBits(MFC.attr.getAttr((_0x59a43d[_0xc222b0].id < 13 ? 11361 : 5002353) + _0x59a43d[_0xc222b0].activityType - 1), 0, 16)) > 0) {
                    if (VIPManager.V_GetIsNoPlus()) {
                      const _0x33eb47 = {
                        type: 5,
                        id: _0x59a43d[_0xc222b0].id,
                        difficultRank: 2,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x33eb47);
                      addGameLog("扫荡第" + _0x4b1d0e + "次");
                      _0x4b1d0e++;
                    } else if (VIPManager.getInstance().isVip) {
                      if (MFC.userInfo.curEnergy >= _0x28b65f.cardDatas._maps[2].costEnergy * 5 * 0.5) {
                        const _0x42f728 = {
                          type: 5,
                          id: _0x59a43d[_0xc222b0].id,
                          difficultRank: 2,
                          petList: [],
                          sweepTime: 1
                        };
                        await this.send_message("cs_month_pve", _0x42f728);
                        addGameLog("扫荡第" + _0x4b1d0e + "次");
                        _0x4b1d0e++;
                      } else {
                        addGameLog("电池不足");
                        break;
                      }
                    } else if (MFC.userInfo.curEnergy >= _0x28b65f.cardDatas._maps[2].costEnergy * 5) {
                      const _0x18288f = {
                        type: 5,
                        id: _0x59a43d[_0xc222b0].id,
                        difficultRank: 2,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x18288f);
                      addGameLog("扫荡第" + _0x4b1d0e + "次");
                      _0x4b1d0e++;
                    } else {
                      addGameLog("电池不足");
                      break;
                    }
                  } else {
                    addGameLog("次数不足");
                    break;
                  }
                  if (MFC.attr.getAttr((_0x59a43d[_0xc222b0].id >= 13 ? 5224038 : MFC.attrType.foreverMonthPveActivityStart) + _0x59a43d[_0xc222b0].activityType - 1) >= 2100) {
                    addGameLog("瞩目精灵活动活力值已达标");
                    if (BitUtils.getBit(MFC.attr.getAttr(_0x28b65f.progressFinishAttr), _0x28b65f.progressFinishIdx)) {
                      addGameLog("图纸已领取");
                    } else {
                      const _0x58e722 = {
                        type: 2,
                        id: _0x59a43d[_0xc222b0].activityType,
                        progressDropId: 1,
                        petList: []
                      };
                      await this.send_message("cs_month_pve", _0x58e722);
                      addGameLog("图纸已领取");
                    }
                    break;
                  }
                }
              } else if (BitUtils.getBit(_0x5b3c4b, 1) > 0) {
                while (1) {
                  if (Math.max(0, _0x28b65f.dailyLimit + BitUtils.getBits(MFC.attr.getAttr((_0x59a43d[_0xc222b0].id < 13 ? 11361 : 5002353) + _0x59a43d[_0xc222b0].activityType - 1), 16, 16) - BitUtils.getBits(MFC.attr.getAttr((_0x59a43d[_0xc222b0].id < 13 ? 11361 : 5002353) + _0x59a43d[_0xc222b0].activityType - 1), 0, 16)) > 0) {
                    if (VIPManager.V_GetIsNoPlus()) {
                      const _0x545f1f = {
                        type: 5,
                        id: _0x59a43d[_0xc222b0].id,
                        difficultRank: 1,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x545f1f);
                      addGameLog("扫荡第" + _0x4b1d0e + "次");
                      _0x4b1d0e++;
                    } else if (VIPManager.getInstance().isVip) {
                      if (MFC.userInfo.curEnergy >= _0x28b65f.cardDatas._maps[1].costEnergy * 5 * 0.5) {
                        const _0x26bd18 = {
                          type: 5,
                          id: _0x59a43d[_0xc222b0].id,
                          difficultRank: 1,
                          petList: [],
                          sweepTime: 1
                        };
                        await this.send_message("cs_month_pve", _0x26bd18);
                        addGameLog("扫荡第" + _0x4b1d0e + "次");
                        _0x4b1d0e++;
                      } else {
                        addGameLog("电池不足");
                        break;
                      }
                    } else if (MFC.userInfo.curEnergy >= _0x28b65f.cardDatas._maps[1].costEnergy * 5) {
                      const _0x2ef061 = {
                        type: 5,
                        id: _0x59a43d[_0xc222b0].id,
                        difficultRank: 1,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x2ef061);
                      addGameLog("扫荡第" + _0x4b1d0e + "次");
                      _0x4b1d0e++;
                    } else {
                      addGameLog("电池不足");
                      break;
                    }
                  } else {
                    addGameLog("次数不足");
                    break;
                  }
                  if (MFC.attr.getAttr((_0x59a43d[_0xc222b0].id >= 13 ? 5224038 : MFC.attrType.foreverMonthPveActivityStart) + _0x59a43d[_0xc222b0].activityType - 1) >= 2100) {
                    addGameLog("瞩目精灵活动活力值已达标");
                    if (BitUtils.getBit(MFC.attr.getAttr(_0x28b65f.progressFinishAttr), _0x28b65f.progressFinishIdx)) {
                      addGameLog("图纸已领取");
                    } else {
                      const _0x34de3b = {
                        type: 2,
                        id: _0x59a43d[_0xc222b0].activityType,
                        progressDropId: 1,
                        petList: []
                      };
                      await this.send_message("cs_month_pve", _0x34de3b);
                      addGameLog("图纸已领取");
                    }
                    break;
                  }
                }
              } else {
                addGameLog("瞩目暂未通过任意星级难度。");
              }
            }
          }
        }
        addGameLog("瞩目扫荡结束");
      }
      if (this.task[14]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") < "2024_10_18 5:00:00") {
          if (ExchangeUtils.getCurrentExchangeNum(xls.activityExchange.getItem(11781)) == 1) {
            addGameLog(xls.activityExchange.getItem(11781).name + "已领取");
          } else {
            await this.send_message("cs_exchange_activity_reward", {
              id: 11781,
              coeff: 1,
              selectIndex: 0,
              subDropIdList: []
            });
            await wait(200);
            addGameLog("领取" + xls.activityExchange.getItem(11781).name);
          }
        } else {
          addGameLog(xls.activityExchange.getItem(11781).name + "已结束");
        }
      }
      if (this.task[1]) {
        if (MFC.attr.getAttr(MFC.attrType.dailyActivityFightBugStatus) == 0) {
          await this.send_message("cs_fight_bug", {});
          touchBtn(sta);
          await wait(200);
          addGameLog("揍bug完成");
        } else {
          addGameLog("揍bug完成");
        }
      }
      if (this.task[2]) {
        if (MFC.attr.getAttr(MFC.attrType.dailyHouseLikeLength) >= 10) {
          addGameLog("小屋点赞完成");
        } else {
          let _0x13c12c = await this.send_message("cs_house_praise_vistors", {
            type: 1,
            pageNo: 1,
            pageSize: 10
          });
          logger(_0x13c12c.vistors.length);
          for (let _0x5afe94 = 0; _0x5afe94 < _0x13c12c.vistors.length; _0x5afe94++) {
            _0x13c12c.vistors[0].userId = 5674485;
            _0x13c12c.vistors[1].userId = 4816491;
            _0x13c12c.vistors[2].userId = 8966352;
            _0x13c12c.vistors[3].userId = 1967823;
            _0x13c12c.vistors[4].userId = 5037279;
            _0x13c12c.vistors[5].userId = 13644029;
            _0x13c12c.vistors[6].userId = 1658936;
            _0x13c12c.vistors[7].userId = 6661395;
            _0x13c12c.vistors[8].userId = 5789350;
            _0x13c12c.vistors[9].userId = 10069566;
            const _0x222f48 = {
              uid: _0x13c12c.vistors[_0x5afe94].userId
            };
            await this.send_message("cs_house_like", _0x222f48);
            touchBtn(sta);
            await wait(200);
            addGameLog("点赞" + _0x13c12c.vistors[_0x5afe94].roleNick);
          }
          await wait(200);
          addGameLog("小屋点赞完成");
        }
      }
      if (this.task[3]) {
        if (MFC.serverTimer.date.getHours() < 12) {
          MFC.alert.show("未到电池领取时间");
        }
        if (MFC.serverTimer.date.getHours() >= 12 && MFC.serverTimer.date.getHours() < 18) {
          if (MFC.attr.getAttr(MFC.attrType.dailyGetPhysicalRecovery) == 0) {
            await this.send_message("cs_physical_recovery", {});
            touchBtn(sta);
            await wait(200);
          } else {
            addGameLog("每日电池已领取");
          }
        }
        if (MFC.serverTimer.date.getHours() >= 18 && MFC.serverTimer.date.getHours() <= 23) {
          if (MFC.attr.getAttr(MFC.attrType.dailyGetPhysicalRecovery) == 0) {
            await this.send_message("cs_physical_recovery", {});
            touchBtn(sta);
            await wait(200);
            await this.send_message("cs_physical_recovery", {});
            touchBtn(sta);
            await wait(200);
          } else if (MFC.attr.getAttr(MFC.attrType.dailyGetPhysicalRecovery) == 1) {
            await this.send_message("cs_physical_recovery", {});
            touchBtn(sta);
            await wait(200);
          } else {
            addGameLog("每日电池已领取");
          }
        }
      }
      if (this.task[4]) {
        let _0x21f427 = xls.activityPetStory.getItems().map(_0x346f77 => {
          if (_0x346f77.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x346f77.endTime) {
            var _0x1a47e9 = _0x346f77.endTime;
            var _0x50e911 = deden.DateUtil.create(_0x1a47e9);
            _0x50e911.setHours(_0x50e911.getHours() - 15);
            var _0x15dc4e = deden.DateUtil.dateFormat(_0x50e911, "yyyy_MM_dd hh:mm:ss");
            if (_0x15dc4e >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss")) {
              if (_0x346f77.name[_0x346f77.name.length - 1] != "篇") {
                return _0x346f77;
              }
            }
          }
        }).sort().filter(_0x20a431 => _0x20a431 != undefined);
        for (let _0x1c04da = 0; _0x1c04da < _0x21f427.length; _0x1c04da++) {
          if (SpritePlotManager.getInstance().getPlotStateById(_0x21f427[_0x1c04da].id) == 3) {
            addGameLog(_0x21f427[_0x1c04da].name + _0x21f427[_0x1c04da].stepNumber + "已完成");
          } else if (SpritePlotManager.getInstance().getPlotStateById(_0x21f427[_0x1c04da].id) == 2) {
            const _0x3d7c25 = {
              id: _0x21f427[_0x1c04da].id,
              type: 2,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x3d7c25);
            touchBtn(sta);
            await wait(200);
          } else if (SpritePlotManager.getInstance().getPlotStateById(_0x21f427[_0x1c04da].id) == 0) {
            logger(_0x21f427[_0x1c04da].name + "未解锁");
          } else {
            logger(_0x21f427[_0x1c04da].id);
            const _0x236779 = {
              id: _0x21f427[_0x1c04da].id,
              type: 1,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x236779);
            await wait(200);
            const _0x4d8b59 = {
              id: _0x21f427[_0x1c04da].id,
              type: 2,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x4d8b59);
            touchBtn(sta);
            await wait(200);
            addGameLog(_0x21f427[_0x1c04da].name + _0x21f427[_0x1c04da].stepNumber + "已完成");
          }
        }
      }
      if (this.task[5]) {
        let _0x4fb202 = xls.activityPetStory.getItems().map(_0x36a364 => {
          if (_0x36a364.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x36a364.endTime) {
            var _0x59add4 = _0x36a364.endTime;
            var _0x450b48 = deden.DateUtil.create(_0x59add4);
            _0x450b48.setHours(_0x450b48.getHours() - 15);
            var _0x3a5d5a = deden.DateUtil.dateFormat(_0x450b48, "yyyy_MM_dd hh:mm:ss");
            if (_0x3a5d5a >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss")) {
              if (_0x36a364.name[_0x36a364.name.length - 1] == "篇") {
                return _0x36a364;
              }
            }
          }
        }).sort().filter(_0x30e70b => _0x30e70b != undefined);
        for (let _0x37ca12 = 0; _0x37ca12 < _0x4fb202.length; _0x37ca12++) {
          if (SpritePlotManager.getInstance().getPlotStateById(_0x4fb202[_0x37ca12].id) == 3) {
            addGameLog(_0x4fb202[_0x37ca12].name + _0x4fb202[_0x37ca12].stepNumber + "已完成");
          } else if (SpritePlotManager.getInstance().getPlotStateById(_0x4fb202[_0x37ca12].id) == 2) {
            const _0x519cac = {
              id: _0x4fb202[_0x37ca12].id,
              type: 2,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x519cac);
            touchBtn(sta);
            await wait(200);
          } else if (SpritePlotManager.getInstance().getPlotStateById(_0x4fb202[_0x37ca12].id) == 0) {
            logger(_0x4fb202[_0x37ca12].name + "未解锁");
          } else {
            logger(_0x4fb202[_0x37ca12].id);
            const _0x2b9a36 = {
              id: _0x4fb202[_0x37ca12].id,
              type: 1,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x2b9a36);
            await wait(200);
            const _0x436cbf = {
              id: _0x4fb202[_0x37ca12].id,
              type: 2,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x436cbf);
            touchBtn(sta);
            await wait(200);
            addGameLog(_0x4fb202[_0x37ca12].name + _0x4fb202[_0x37ca12].stepNumber + "已完成");
          }
        }
      }
      if (this.task[6]) {
        const _0x55564c = xls.collect.getItems().map(_0x134828 => {
          if (_0x134828.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") <= _0x134828.endTime) {
            return _0x134828.id;
          }
        }).filter(_0x4ea41e => _0x4ea41e !== undefined);
        const _0x5e76f7 = xls.collect.getItems().map(_0x5d5a80 => {
          if (_0x5d5a80.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") <= _0x5d5a80.endTime) {
            return _0x5d5a80.dailyLimit;
          }
        }).filter(_0x2e4a4f => _0x2e4a4f !== undefined);
        const _0x415cd6 = _0x55564c.map(_0x4b7994 => {
          return MFC.attr.getAttr(parseInt(MFC.attrType.dailyMiningStart) + _0x4b7994);
        });
        let _0xd9e03d = 0;
        while (_0xd9e03d < _0x55564c.length) {
          if (_0x415cd6[_0xd9e03d] < _0x5e76f7[_0xd9e03d]) {
            const _0x156af9 = {
              id: _0x55564c[_0xd9e03d]
            };
            await this.send_message("cs_mining", _0x156af9);
            await wait(500);
            _0x415cd6[_0xd9e03d]++;
          } else {
            let _0x38c4be = xls.collect.getItem(_0x55564c[_0xd9e03d]).name;
            addGameLog(_0x38c4be + "采集完毕");
            _0xd9e03d++;
          }
        }
      }
      if (this.task[7]) {
        if (parseInt(getSeerItemNum(15019)) >= 5) {
          if (parseInt(MFC.attr.getAttr([MFC.attrType.foreverJaynesHp, MFC.attrType.foreverBaennaHp][0])) < 1000) {
            while (MFC.attr.getAttr(11842) < 5) {
              await this.send_message("cs_light_shadow", {
                itemId: 15019,
                op: 1,
                type: 1
              });
              touchBtn(sta);
              await wait(200);
              touchBtn(sta);
            }
            addGameLog("光狮子完成。");
          } else {
            MFC.alert.show("光狮子已经满血");
          }
        } else {
          MFC.alert.show("光明精华不足5");
        }
        if (parseInt(getSeerItemNum(15009)) >= 5) {
          if (parseInt(MFC.attr.getAttr([MFC.attrType.foreverJaynesHp, MFC.attrType.foreverBaennaHp][1])) < 1000) {
            while (MFC.attr.getAttr(11844) < 5) {
              await this.send_message("cs_light_shadow", {
                itemId: 15009,
                op: 1,
                type: 2
              });
              touchBtn(sta);
              await wait(200);
              touchBtn(sta);
            }
            addGameLog("暗狮子完成。");
          } else {
            MFC.alert.show("暗狮子已经满血");
          }
        } else {
          MFC.alert.show("暗黑精华不足5");
        }
      }
      if (this.task[8]) {
        if (MFC.attr.getAttr(MFC.attrType.dailyLikeFriendEventTimes) >= 5) {
          addGameLog("好友点赞完成");
        } else {
          let _0x4e6763 = await this.send_message("cs_get_friend_event", {});
          logger(_0x4e6763.dynEventList);
          if (_0x4e6763.dynEventList.length < 5) {
            for (let _0x3bb05d = 0; _0x3bb05d < _0x4e6763.dynEventList.length; _0x3bb05d++) {
              if (_0x4e6763.dynEventList[_0x3bb05d].likeTimes == 0) {
                const _0x124cb6 = {
                  order: _0x4e6763.dynEventList[_0x3bb05d].order,
                  userId: _0x4e6763.dynEventList[_0x3bb05d].userId
                };
                await this.send_message("cs_like_friend_event", _0x124cb6);
                touchBtn(sta);
                await wait(200);
              }
            }
          } else {
            for (let _0x57887c = 0; _0x57887c < 5; _0x57887c++) {
              const _0xf6b814 = {
                order: _0x4e6763.dynEventList[_0x57887c].order,
                userId: _0x4e6763.dynEventList[_0x57887c].userId
              };
              await this.send_message("cs_like_friend_event", _0xf6b814);
              touchBtn(sta);
              await wait(200);
            }
          }
          await wait(200);
          addGameLog("好友点赞完成");
        }
      }
      if (this.task[9]) {
        var _0x20fc79 = MFC.userInfo.vipLevel;
        if (parseInt(_0x20fc79) > 0) {
          if (Math.min(Math.max(TaskUtils.GetRestTaskCurrentProgress(xls.activityTaskReset.getItem(10711)) - 1, 0), xls.activityTaskReset.getItem(10711).parameter) == 1) {
            addGameLog("教皇券领取完成");
          } else {
            await this.send_message("cs_get_activity_task_reset_reward", {
              carnivalId: 10711
            });
            touchBtn(sta);
            addGameLog("教皇券领取完成");
          }
        } else {
          addGameLog("没有超No");
        }
      }
      if (this.task[10]) {
        if (MFC.attr.getAttr(17000) == 10) {
          addGameLog("忍魂活动次数已达10次");
        } else {
          while (true) {
            if (MFC.attr.getAttr(17000) < 10) {
              if (MFC.attr.getAttr(MFC.attrType.foreverRenhunrenzheBAttr1 + 0) < 100) {
                touchBtn(sta);
                await this.send_message("cs_exchange_activity_reward", {
                  id: 10504,
                  subDropIdList: []
                });
                touchBtn(sta);
              } else if (MFC.attr.getAttr(MFC.attrType.foreverRenhunrenzheBAttr1 + 1) < 100) {
                touchBtn(sta);
                await this.send_message("cs_exchange_activity_reward", {
                  id: 10512,
                  subDropIdList: []
                });
                touchBtn(sta);
              } else if (MFC.attr.getAttr(MFC.attrType.foreverRenhunrenzheBAttr1 + 2) < 100) {
                touchBtn(sta);
                await this.send_message("cs_exchange_activity_reward", {
                  id: 10520,
                  subDropIdList: []
                });
                touchBtn(sta);
              } else if (MFC.attr.getAttr(MFC.attrType.foreverRenhunrenzheBAttr1 + 4) < 100) {
                touchBtn(sta);
                await this.send_message("cs_exchange_activity_reward", {
                  id: 10536,
                  subDropIdList: []
                });
                touchBtn(sta);
              } else {
                touchBtn(sta);
                if (ItemManager.getInstance().getItemNumById(15017) > 10) {
                  await this.send_message("cs_exchange_activity_reward", {
                    id: 10528,
                    subDropIdList: []
                  });
                } else if (ItemManager.getInstance().getItemNumById(15015) > 10) {
                  await this.send_message("cs_exchange_activity_reward", {
                    id: 10504,
                    subDropIdList: []
                  });
                } else if (ItemManager.getInstance().getItemNumById(15027) > 10) {
                  await this.send_message("cs_exchange_activity_reward", {
                    id: 10512,
                    subDropIdList: []
                  });
                } else if (ItemManager.getInstance().getItemNumById(15011) > 10) {
                  await this.send_message("cs_exchange_activity_reward", {
                    id: 10520,
                    subDropIdList: []
                  });
                } else if (ItemManager.getInstance().getItemNumById(15001) > 10) {
                  await this.send_message("cs_exchange_activity_reward", {
                    id: 10536,
                    subDropIdList: []
                  });
                }
                touchBtn(sta);
              }
            } else {
              break;
            }
          }
          addGameLog("忍魂活动完成");
        }
      }
      if (this.task[11]) {
        let _0x38d3d4 = ["蓓丽安特", "克雷弗德", "阿特米克", "奥瑞亚", "群星之集", "工业学会", "勇无止境冲破群星", "SEER61HAPPY", "SQHP"];
        for (let _0x37838c = 0; _0x37838c < _0x38d3d4.length; _0x37838c++) {
          const _0x50d8cc = {
            code: _0x38d3d4[_0x37838c]
          };
          await this.send_message("cs_get_secret_code_rward", _0x50d8cc);
          touchBtn(sta);
        }
      }
      if (this.task[12]) {
        super.start();
        let _0x31571d = this;
        RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
          let _0x4c2bb4 = [];
          var _0x55e2e2 = SimpleAlertUi({
            height: 350,
            width: 460
          });
          _0x31571d.alertWin = _0x55e2e2;
          const _0x3e097e = {
            text: "分解符文",
            x: _0x55e2e2.applicationWidth / 2 - 20,
            y: _0x55e2e2.height / 15
          };
          let _0x4a41eb = createLabel(_0x3e097e);
          _0x4a41eb.size = 20;
          _0x4c2bb4.push(_0x4a41eb);
          const _0x445135 = {
            prompt: "二级密码",
            x: _0x55e2e2.applicationWidth / 6,
            y: _0x55e2e2.height / 15 + 40,
            width: 100
          };
          var _0x4ed883 = createEdit(_0x445135);
          _0x4c2bb4.push(_0x4ed883);
          const _0x1443ae = {
            text: "[二级密码没有不填写]",
            x: _0x55e2e2.applicationWidth / 3 + 25,
            y: _0x55e2e2.height / 15 + 45
          };
          let _0x5493c0 = createLabel(_0x1443ae);
          _0x5493c0.size = 20;
          _0x5493c0.textColor = 16711680;
          _0x4c2bb4.push(_0x5493c0);
          const _0x2f1ee0 = {
            x: _0x55e2e2.applicationWidth / 6,
            y: _0x4ed883.y + 60,
            selected: true,
            storageKey: "rune1"
          };
          let _0x1b8e8b = createRadio(_0x2f1ee0);
          _0x4c2bb4.push(_0x1b8e8b);
          const _0x3b3ec5 = {
            text: "分解随机符文可获得的",
            x: _0x1b8e8b.x + 40,
            y: _0x1b8e8b.y
          };
          let _0x277238 = createLabel(_0x3b3ec5);
          _0x4c2bb4.push(_0x277238);
          const _0x45154b = {
            x: _0x55e2e2.applicationWidth / 6,
            y: _0x1b8e8b.y + 40,
            selected: false,
            storageKey: "rune2"
          };
          let _0x2f34c0 = createRadio(_0x45154b);
          _0x4c2bb4.push(_0x2f34c0);
          const _0x511476 = {
            text: "分解低级符文",
            x: _0x2f34c0.x + 40,
            y: _0x2f34c0.y
          };
          let _0x2d32c5 = createLabel(_0x511476);
          _0x4c2bb4.push(_0x2d32c5);
          const _0x4d63c0 = {
            text: `分解随机符文就是分解随机符文商店里面所描述的
分解低级就是购买不超过1200以下都分解
不会分解已绑定不分解玩水`,
            x: _0x1b8e8b.x,
            y: _0x2f34c0.y + 40
          };
          let _0x546f58 = createLabel(_0x4d63c0);
          _0x546f58.textColor = 13612347;
          _0x4c2bb4.push(_0x546f58);
          _0x31571d.addAllUis(_0x4c2bb4);
          _0x55e2e2.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
            _0x31571d.stop();
          }, function () {
            localStorage.setItem("rune1", _0x1b8e8b.selected);
            localStorage.setItem("rune2", _0x2f34c0.selected);
            if (_0x4ed883.text != "") {
              if (_0x4ed883.text.toString().length != 6) {
                MFC.bubbleAlert.showAlert("请输入有效二级密码");
                _0x31571d.prcessBody(_0x31571d.task[12] = 1);
              } else {
                _0x31571d.input2Pwd = parseInt(_0x4ed883.text);
                logger("二级 密码" + _0x31571d.input2Pwd);
                if (_0x1b8e8b.selected) {
                  _0x31571d.disrune1();
                } else {
                  _0x31571d.disrune2();
                }
              }
            } else if (_0x1b8e8b.selected) {
              _0x31571d.disrune1();
            } else {
              _0x31571d.disrune2();
            }
          }], null);
          _0x55e2e2.showAlert();
        });
      } else {
        touchBtn(sta);
        addGameLog("一键杂项完成");
        this.stop();
      }
    } catch (_0x598cca) {}
  }
  async disrune1() {
    if (this.input2Pwd != null) {
      if (this.input2Pwd.toString().length == 6) {
        let _0x1912be = await this.send_message("cs_2nd_passwd", {
          option: 2,
          param: this.input2Pwd.toString()
        });
        if (JSON.stringify(_0x1912be).indexOf("二级密码解锁失败") != -1) {
          addGameLog("二级密码错误");
          MFC.bubbleAlert.showAlert("二级密码错误");
          await this.prcessBody(this.task[12] = 1);
        } else {
          let _0x459d51 = [];
          for (let _0x16c129 = 0; _0x16c129 < xls.dropUnit.getItem(8316).skillRune.split("|").length; _0x16c129++) {
            _0x459d51.push(parseInt(xls.dropUnit.getItem(8316).skillRune.split("|")[_0x16c129].split("_")[0]));
          }
          let _0x213c32 = SkillRuneManager.getAllRunes().map(_0x24bd8c => {
            if (_0x459d51.indexOf(_0x24bd8c.id) != -1 && _0x24bd8c.bindPet == 0) {
              return _0x24bd8c;
            }
          }).sort().filter(_0x5585c3 => _0x5585c3 != undefined);
          if (_0x213c32.length == 0) {
            addGameLog("没有符文可分解");
          } else {
            for (let _0x1185c5 = 0; _0x1185c5 < _0x213c32.length; _0x1185c5++) {
              addGameLog("分解符文=>\n" + SkillRuneManager.getNormalRuneConfs().find(_0x2199f6 => _0x2199f6.id === _0x213c32[_0x1185c5].id).name);
              const _0xbe7364 = {
                op: 2,
                runeGetTime: _0x213c32[_0x1185c5].getTime,
                runeId: _0x213c32[_0x1185c5].id
              };
              await this.send_message("cs_pet_skill_rune", _0xbe7364);
              touchBtn(sta);
            }
          }
          addGameLog("分解结束");
          addGameLog("一键杂项完成");
          this.stop();
        }
      }
    } else {
      let _0x5373fa = SkillRuneManager.getNormalRuneConfs().map(_0xfcbf20 => {
        return _0xfcbf20.id;
      });
      let _0x3bad18 = SkillRuneManager.getAllRunes().map(_0x1f8719 => {
        if (_0x5373fa.indexOf(_0x1f8719.id) != -1 && SkillRuneManager.getNormalRuneConfs()[_0x5373fa.indexOf(_0x1f8719.id)].decompose > 0 && SkillRuneManager.getNormalRuneConfs()[_0x5373fa.indexOf(_0x1f8719.id)].decompose < 300 && _0x1f8719.bindPet == 0 && _0x1f8719.id != 205) {
          return _0x1f8719;
        }
      }).sort().filter(_0x3d0749 => _0x3d0749 != undefined);
      if (_0x3bad18.length == 0) {
        addGameLog("没有符文可分解");
      } else {
        for (let _0x4f565f = 0; _0x4f565f < _0x3bad18.length; _0x4f565f++) {
          addGameLog("分解符文=>\n" + SkillRuneManager.getNormalRuneConfs().find(_0x4f9126 => _0x4f9126.id === _0x3bad18[_0x4f565f].id).name);
          const _0x2b7969 = {
            op: 2,
            runeGetTime: _0x3bad18[_0x4f565f].getTime,
            runeId: _0x3bad18[_0x4f565f].id
          };
          await this.send_message("cs_pet_skill_rune", _0x2b7969);
          touchBtn(sta);
        }
      }
      addGameLog("分解结束");
      addGameLog("一键杂项完成");
      this.stop();
    }
  }
  async disrune2() {
    if (this.input2Pwd != null) {
      if (this.input2Pwd.toString().length == 6) {
        let _0x556b3d = await this.send_message("cs_2nd_passwd", {
          option: 2,
          param: this.input2Pwd.toString()
        });
        if (JSON.stringify(_0x556b3d).indexOf("二级密码解锁失败") != -1) {
          addGameLog("二级密码错误");
          MFC.bubbleAlert.showAlert("二级密码错误");
          await this.prcessBody(this.task[12] = 1);
        } else {
          let _0x4d0c01 = SkillRuneManager.getNormalRuneConfs().map(_0x86d4fd => {
            return _0x86d4fd.id;
          });
          let _0x30eb9c = SkillRuneManager.getAllRunes().map(_0x2e1a3c => {
            if (_0x4d0c01.indexOf(_0x2e1a3c.id) != -1 && SkillRuneManager.getNormalRuneConfs()[_0x4d0c01.indexOf(_0x2e1a3c.id)].decompose > 0 && SkillRuneManager.getNormalRuneConfs()[_0x4d0c01.indexOf(_0x2e1a3c.id)].decompose < 300 && _0x2e1a3c.bindPet == 0 && _0x2e1a3c.id != 205) {
              return _0x2e1a3c;
            }
          }).sort().filter(_0x1a07a0 => _0x1a07a0 != undefined);
          if (_0x30eb9c.length == 0) {
            addGameLog("没有符文可分解");
          } else {
            for (let _0xbd3563 = 0; _0xbd3563 < _0x30eb9c.length; _0xbd3563++) {
              addGameLog("分解符文=>\n" + SkillRuneManager.getNormalRuneConfs().find(_0x58e771 => _0x58e771.id === _0x30eb9c[_0xbd3563].id).name);
              const _0x44ae06 = {
                op: 2,
                runeGetTime: _0x30eb9c[_0xbd3563].getTime,
                runeId: _0x30eb9c[_0xbd3563].id
              };
              await this.send_message("cs_pet_skill_rune", _0x44ae06);
              touchBtn(sta);
            }
          }
          addGameLog("分解结束");
          addGameLog("一键杂项完成");
          this.stop();
        }
      }
    } else {
      let _0x137108 = SkillRuneManager.getNormalRuneConfs().map(_0x5ebfa => {
        return _0x5ebfa.id;
      });
      let _0x29bdb9 = SkillRuneManager.getAllRunes().map(_0x393c7c => {
        if (_0x137108.indexOf(_0x393c7c.id) != -1 && SkillRuneManager.getNormalRuneConfs()[_0x137108.indexOf(_0x393c7c.id)].decompose > 0 && SkillRuneManager.getNormalRuneConfs()[_0x137108.indexOf(_0x393c7c.id)].decompose < 300 && _0x393c7c.bindPet == 0 && _0x393c7c.id != 205) {
          return _0x393c7c;
        }
      }).sort().filter(_0x1b56a => _0x1b56a != undefined);
      if (_0x29bdb9.length == 0) {
        addGameLog("没有符文可分解");
      } else {
        for (let _0x11d365 = 0; _0x11d365 < _0x29bdb9.length; _0x11d365++) {
          addGameLog("分解符文=>\n" + SkillRuneManager.getNormalRuneConfs().find(_0x18cc54 => _0x18cc54.id === _0x29bdb9[_0x11d365].id).name);
          const _0x330082 = {
            op: 2,
            runeGetTime: _0x29bdb9[_0x11d365].getTime,
            runeId: _0x29bdb9[_0x11d365].id
          };
          await this.send_message("cs_pet_skill_rune", _0x330082);
          touchBtn(sta);
        }
      }
      addGameLog("分解结束");
      addGameLog("一键杂项完成");
      this.stop();
    }
  }
}
class talentAll31 extends SuperTask {
  constructor() {
    super();
    this.nowName = "金灿灿";
    this.selectedvalue = 0;
  }
  start() {
    super.start();
    let _0x4e57fb = this;
    MFC.alert.show(`确定进行背包一键金灿灿吗
背包里面所有精灵都会变为31天赋
娱乐功能无实际作用
恢复需刷新`, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x700bb) {
      _0x4e57fb.stop();
    }, function (_0x42b466) {
      _0x4e57fb.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x582908 = PetManager.getInstance().getAllPets();
      for (let _0x225949 = 0; _0x225949 < _0x582908.length; _0x225949++) {
        _0x582908[_0x225949].talent = 31;
      }
      addGameLog("金灿灿完毕!");
      this.stop();
    } catch (_0x190b1a) {
      logger(_0x190b1a);
    }
  }
}
class Pool extends SuperTask {
  constructor() {
    super();
    this.nowName = "抽轮盘";
    this.task = [];
  }
  start() {
    super.start();
    let _0x57b336 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x195bd7 = [];
      var _0x5110e1 = SimpleAlertUi({
        width: 400,
        height: 470
      });
      _0x57b336.alertWin = _0x5110e1;
      const _0x2a7ac2 = {
        text: "抽轮盘",
        y: _0x5110e1.height / 15
      };
      let _0x4626c7 = createLabel(_0x2a7ac2);
      _0x4626c7.x = _0x5110e1.applicationWidth / 2 - _0x4626c7.width / 2;
      _0x4626c7.size = 20;
      _0x195bd7.push(_0x4626c7);
      const _0x4538fe = {
        text: "克洛斯星",
        x: _0x5110e1.width / 5 - 40,
        y: _0x4626c7.y + 40
      };
      let _0x3a96e5 = createLabel(_0x4538fe);
      _0x195bd7.push(_0x3a96e5);
      const _0x296391 = {
        x: _0x3a96e5.x + 100,
        y: _0x3a96e5.y,
        selected: false,
        storageKey: "klsxq"
      };
      let _0x1f3340 = createToggle(_0x296391);
      _0x195bd7.push(_0x1f3340);
      const _0xdf5e2e = {
        text: "海洋星低级",
        x: _0x1f3340.x + 70,
        y: _0x3a96e5.y
      };
      let _0x12801c = createLabel(_0xdf5e2e);
      _0x195bd7.push(_0x12801c);
      const _0x1438e7 = {
        x: _0x12801c.x + 100,
        y: _0x3a96e5.y,
        selected: false,
        storageKey: "hyxq1"
      };
      let _0x202b63 = createToggle(_0x1438e7);
      _0x195bd7.push(_0x202b63);
      const _0xdb299f = {
        text: "海洋星高级",
        x: _0x3a96e5.x,
        y: _0x3a96e5.y + 40
      };
      let _0x35ffbd = createLabel(_0xdb299f);
      _0x195bd7.push(_0x35ffbd);
      const _0x2584be = {
        x: _0x1f3340.x,
        y: _0x35ffbd.y,
        selected: false,
        storageKey: "hyxq2"
      };
      let _0x111f60 = createToggle(_0x2584be);
      _0x195bd7.push(_0x111f60);
      const _0x279c1e = {
        text: "火山星低级",
        x: _0x12801c.x,
        y: _0x35ffbd.y
      };
      let _0x1217c4 = createLabel(_0x279c1e);
      _0x195bd7.push(_0x1217c4);
      const _0x5a5676 = {
        x: _0x202b63.x,
        y: _0x35ffbd.y,
        selected: false,
        storageKey: "hsxq1"
      };
      let _0x55cc0b = createToggle(_0x5a5676);
      _0x195bd7.push(_0x55cc0b);
      const _0x24f991 = {
        text: "火山星高级",
        x: _0x3a96e5.x,
        y: _0x35ffbd.y + 40
      };
      let _0x47a606 = createLabel(_0x24f991);
      _0x195bd7.push(_0x47a606);
      const _0x18eeca = {
        x: _0x1f3340.x,
        y: _0x47a606.y,
        selected: false,
        storageKey: "hsxq2"
      };
      let _0x30c8a7 = createToggle(_0x18eeca);
      _0x195bd7.push(_0x30c8a7);
      const _0x54a59b = {
        text: "云霄星低级",
        x: _0x12801c.x,
        y: _0x47a606.y
      };
      let _0x10f249 = createLabel(_0x54a59b);
      _0x195bd7.push(_0x10f249);
      const _0x54f9ae = {
        x: _0x202b63.x,
        y: _0x10f249.y,
        selected: false,
        storageKey: "yxxq1"
      };
      let _0x42e6ec = createToggle(_0x54f9ae);
      _0x195bd7.push(_0x42e6ec);
      const _0xfed470 = {
        text: "云霄星高级",
        x: _0x3a96e5.x,
        y: _0x47a606.y + 40
      };
      let _0x14fd84 = createLabel(_0xfed470);
      _0x195bd7.push(_0x14fd84);
      const _0x345e6e = {
        x: _0x1f3340.x,
        y: _0x14fd84.y,
        selected: false,
        storageKey: "yxxq2"
      };
      let _0x7c0fc7 = createToggle(_0x345e6e);
      _0x195bd7.push(_0x7c0fc7);
      const _0x30dd3b = {
        text: "阿尔法星低级",
        x: _0x12801c.x,
        y: _0x14fd84.y
      };
      let _0x1d05a7 = createLabel(_0x30dd3b);
      _0x195bd7.push(_0x1d05a7);
      const _0x36f180 = {
        x: _0x202b63.x,
        y: _0x14fd84.y,
        selected: false,
        storageKey: "aefxq1"
      };
      let _0x3286e7 = createToggle(_0x36f180);
      _0x195bd7.push(_0x3286e7);
      const _0x3c22fd = {
        text: "阿尔法星高级",
        x: _0x3a96e5.x,
        y: _0x14fd84.y + 40
      };
      let _0x12afcb = createLabel(_0x3c22fd);
      _0x195bd7.push(_0x12afcb);
      const _0x3617ec = {
        x: _0x1f3340.x,
        y: _0x12afcb.y,
        selected: false,
        storageKey: "aefxq2"
      };
      let _0x10cf8a = createToggle(_0x3617ec);
      _0x195bd7.push(_0x10cf8a);
      const _0xb53802 = {
        text: "拜伦号低级",
        x: _0x12801c.x,
        y: _0x12afcb.y
      };
      let _0x1115a1 = createLabel(_0xb53802);
      _0x195bd7.push(_0x1115a1);
      const _0x270d98 = {
        x: _0x202b63.x,
        y: _0x12afcb.y,
        selected: false,
        storageKey: "blxq1"
      };
      let _0x2bf028 = createToggle(_0x270d98);
      _0x195bd7.push(_0x2bf028);
      const _0x2c204c = {
        text: "拜伦号高级",
        x: _0x3a96e5.x,
        y: _0x12afcb.y + 40
      };
      let _0x3be4f6 = createLabel(_0x2c204c);
      _0x195bd7.push(_0x3be4f6);
      const _0x311e47 = {
        x: _0x1f3340.x,
        y: _0x3be4f6.y,
        selected: false,
        storageKey: "blxq2"
      };
      let _0x3c4087 = createToggle(_0x311e47);
      _0x195bd7.push(_0x3c4087);
      const _0x3acdd8 = {
        x: _0x3a96e5.x,
        y: _0x3be4f6.y + 40,
        width: 100,
        text: "请输入电池",
        storageKey: "poolstatus"
      };
      var _0x3d3ff1 = createEdit(_0x3acdd8);
      _0x195bd7.push(_0x3d3ff1);
      const _0x2bc5c3 = {
        text: "达到输入电池数停止",
        x: _0x3a96e5.x + 72 + 40,
        y: _0x3be4f6.y + 45
      };
      let _0x4bb8c8 = createLabel(_0x2bc5c3);
      _0x4bb8c8.textColor = 16776960;
      _0x195bd7.push(_0x4bb8c8);
      const _0xe448d7 = {
        x: _0x202b63.x,
        y: _0x4bb8c8.y,
        selected: false,
        storageKey: "poolstatusnum"
      };
      let _0x437477 = createToggle(_0xe448d7);
      _0x195bd7.push(_0x437477);
      const _0x41afd2 = {
        text: "注意:如果不要求达到多少电池就不用输入与勾选\n     停止电池数为左上角头像旁边那个数",
        x: _0x3a96e5.x,
        y: _0x4bb8c8.y + 40
      };
      let _0x103584 = createLabel(_0x41afd2);
      _0x103584.textColor = 16711808;
      _0x195bd7.push(_0x103584);
      _0x57b336.addAllUis(_0x195bd7);
      _0x5110e1.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x57b336.stop();
      }, function () {
        localStorage.setItem("klsxq", _0x1f3340.selected);
        localStorage.setItem("hyxq1", _0x202b63.selected);
        localStorage.setItem("hyxq2", _0x111f60.selected);
        localStorage.setItem("hsxq1", _0x55cc0b.selected);
        localStorage.setItem("hsxq2", _0x30c8a7.selected);
        localStorage.setItem("yxxq1", _0x42e6ec.selected);
        localStorage.setItem("yxxq2", _0x7c0fc7.selected);
        localStorage.setItem("aefxq1", _0x3286e7.selected);
        localStorage.setItem("aefxq2", _0x10cf8a.selected);
        localStorage.setItem("blxq1", _0x2bf028.selected);
        localStorage.setItem("blxq2", _0x3c4087.selected);
        localStorage.setItem("poolstatusnum", _0x437477.selected);
        localStorage.setItem("poolstatus", _0x3d3ff1.text);
        let _0xedf62a = [_0x1f3340.selected, _0x202b63.selected, _0x111f60.selected, _0x55cc0b.selected, _0x30c8a7.selected, _0x42e6ec.selected, _0x7c0fc7.selected, _0x3286e7.selected, _0x10cf8a.selected, _0x2bf028.selected, _0x3c4087.selected, _0x437477.selected];
        _0xedf62a.forEach(function (_0x5ea1ac, _0x3a7708) {
          if (_0x5ea1ac) {
            _0x57b336.task[_0x3a7708] = 1;
          }
        });
        if (_0x437477.selected) {
          if (_0x3d3ff1.text.length == 0) {
            MFC.bubbleAlert.showAlert("请输入电池数量");
            return true;
          } else if (!Number.isInteger(parseInt(_0x3d3ff1.text))) {
            MFC.bubbleAlert.showAlert("请输入正确的电池数量");
            return true;
          } else {
            _0x57b336.prcessBody();
          }
        } else {
          _0x57b336.prcessBody();
        }
      }], null);
      _0x5110e1.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x54d824 = 0;
      let _0x5303cd = false;
      let _0x10385b = [{
        name: "克洛斯星",
        levelId: 1,
        prizePool: 1,
        itemIds: [100014],
        num: [5]
      }, {
        name: "海洋星普通",
        levelId: 2,
        prizePool: 1,
        itemIds: [100015, 100016],
        num: [2, 1]
      }, {
        name: "海洋星高级",
        levelId: 2,
        prizePool: 2,
        itemIds: [100015, 100016, 100017],
        num: [2, 1, 1]
      }, {
        name: "火山星普通",
        levelId: 3,
        prizePool: 1,
        itemIds: [100029, 100030],
        num: [1, 2]
      }, {
        name: "火山星高级",
        levelId: 3,
        prizePool: 2,
        itemIds: [100031],
        num: [1]
      }, {
        name: "云霄星普通",
        levelId: 5,
        prizePool: 1,
        itemIds: [100076],
        num: [2]
      }, {
        name: "云霄星高级",
        levelId: 5,
        prizePool: 2,
        itemIds: [100077, 100078],
        num: [2, 1]
      }, {
        name: "双子阿尔法星初级",
        levelId: 6,
        prizePool: 1,
        itemIds: [100191, 100193],
        num: [1, 1]
      }, {
        name: "双子阿尔法星高级",
        levelId: 6,
        prizePool: 2,
        itemIds: [100195],
        num: [1]
      }, {
        name: "拜伦号初级",
        levelId: 8,
        prizePool: 1,
        itemIds: [100313],
        num: [2]
      }, {
        name: "拜伦号高级",
        levelId: 8,
        prizePool: 2,
        itemIds: [100315],
        num: [1]
      }];
      for (let _0x5f38e3 = 0; _0x5f38e3 < _0x10385b.length; _0x5f38e3++) {
        if (this.task[_0x5f38e3]) {
          while (true) {
            if (this.task[11]) {
              if (MFC.userInfo.curEnergy > parseInt(localStorage.getItem("poolstatus"))) {
                addGameLog("已达目标电池");
                break;
              }
            }
            for (let _0x5d8b70 = 0; _0x5d8b70 < _0x10385b[_0x5f38e3].itemIds.length; _0x5d8b70++) {
              if (getSeerItemNum(_0x10385b[_0x5f38e3].itemIds[_0x5d8b70]) >= _0x10385b[_0x5f38e3].num[_0x5d8b70]) {
                _0x5303cd = true;
              } else {
                _0x5303cd = false;
                addGameLog(_0x10385b[_0x5f38e3].name + "轮盘清空!");
                break;
              }
            }
            if (_0x5303cd) {
              _0x54d824++;
              addGameLog(_0x10385b[_0x5f38e3].name + "轮盘第" + _0x54d824 + "次");
              await wait(200);
              const _0x49f083 = {
                levelId: _0x10385b[_0x5f38e3].levelId,
                prizePool: _0x10385b[_0x5f38e3].prizePool
              };
              await this.send_message("cs_time_travel", _0x49f083);
              touchBtn(sta);
              await wait(200);
            } else {
              break;
            }
          }
        }
      }
      this.stop();
    } catch (_0x4675c6) {}
  }
}
class Team extends SuperTask {
  constructor() {
    super();
    this.nowName = "战队任务";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    this.task = [];
  }
  start() {
    super.start();
    let _0x1152b0 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x2008e4 = [];
      var _0x485b95 = SimpleAlertUi({
        width: 460,
        height: 400
      });
      _0x1152b0.alertWin = _0x485b95;
      const _0x13569f = {
        text: "一键战队任务",
        y: _0x485b95.height / 16
      };
      let _0x3d8a21 = createLabel(_0x13569f);
      _0x3d8a21.x = _0x485b95.applicationWidth / 2 - _0x3d8a21.width / 2;
      _0x2008e4.push(_0x3d8a21);
      const _0x1b80a = {
        text: "注意:",
        textColor: 16776960,
        x: 30,
        y: _0x3d8a21.y + _0x3d8a21.height + 12
      };
      var _0xc35606 = createLabel(_0x1b80a);
      _0x2008e4.push(_0xc35606);
      const _0x46726d = {
        text: "雇佣任务需要小号完成:",
        textColor: 16776960,
        x: 40,
        y: _0xc35606.y + _0xc35606.height + 10
      };
      var _0x201650 = createLabel(_0x46726d);
      _0x2008e4.push(_0x201650);
      const _0x19bfc3 = {
        text: "商店默认购买60小型梦幻结晶",
        x: 40,
        y: _0x201650.y + _0x201650.height + 10
      };
      var _0x8bc29e = createLabel(_0x19bfc3);
      _0x2008e4.push(_0x8bc29e);
      const _0xf18f3 = {
        text: "科技点会按照时间获得顺序给100级点一次体力",
        x: 40,
        y: _0x8bc29e.y + _0x8bc29e.height + 10
      };
      var _0x57db4d = createLabel(_0xf18f3);
      _0x2008e4.push(_0x57db4d);
      const _0x1c93ae = {
        text: "如果普通捐献和钻石捐献同时勾选会根据次数对半捐",
        x: 40,
        y: _0x57db4d.y + _0x57db4d.height + 10
      };
      var _0x12b0af = createLabel(_0x1c93ae);
      _0x2008e4.push(_0x12b0af);
      const _0x35d8c4 = {
        x: 70,
        y: _0x12b0af.y + _0x12b0af.height + 10,
        width: 100,
        prompt: "请输入捐献次数",
        storageKey: "teamcontributenum"
      };
      var _0x22e494 = createEdit(_0x35d8c4);
      _0x2008e4.push(_0x22e494);
      const _0x117787 = {
        text: "输入数字但不超过",
        x: _0x22e494.x + _0x22e494.width + 30,
        y: _0x22e494.y + 10
      };
      var _0x1d0f12 = createLabel(_0x117787);
      _0x2008e4.push(_0x1d0f12);
      var _0x58cb51 = createLabel({
        text: VIPManager.getInstance().getVipPrivilegeInfoByLv(VIPManager.getInstance().vipLevel).teamContribute - MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes),
        textColor: 16776960,
        x: _0x22e494.x + _0x22e494.width + 30 + _0x1d0f12.width + 5,
        y: _0x22e494.y + 10
      });
      _0x58cb51.size = 20;
      _0x2008e4.push(_0x58cb51);
      const _0x59644e = {
        text: "普通捐献",
        x: 70,
        y: _0x58cb51.y + _0x58cb51.height + 20
      };
      var _0x4e89ea = createLabel(_0x59644e);
      _0x2008e4.push(_0x4e89ea);
      const _0x5a4312 = {
        x: _0x4e89ea.x + 70,
        y: _0x4e89ea.y,
        selected: false,
        storageKey: "ptc"
      };
      let _0x1131a8 = createToggle(_0x5a4312);
      _0x2008e4.push(_0x1131a8);
      const _0x17e177 = {
        text: "钻石捐献",
        x: _0x1131a8.x + _0x1131a8.width + 20,
        y: _0x4e89ea.y
      };
      var _0x5515af = createLabel(_0x17e177);
      _0x2008e4.push(_0x5515af);
      const _0x2187bf = {
        x: _0x5515af.x + 70,
        y: _0x5515af.y,
        selected: false,
        storageKey: "zsc"
      };
      let _0x234540 = createToggle(_0x2187bf);
      _0x2008e4.push(_0x234540);
      const _0x127f25 = {
        text: "商店购买",
        x: _0x4e89ea.x,
        y: _0x4e89ea.y + 40
      };
      var _0x1ffa65 = createLabel(_0x127f25);
      _0x2008e4.push(_0x1ffa65);
      const _0x178d2b = {
        x: _0x1ffa65.x + 70,
        y: _0x1ffa65.y,
        selected: false,
        storageKey: "tbuy"
      };
      let _0x48431d = createToggle(_0x178d2b);
      _0x2008e4.push(_0x48431d);
      const _0x3b8015 = {
        text: "科技加点",
        x: _0x1131a8.x + _0x1131a8.width + 20,
        y: _0x4e89ea.y + 40
      };
      var _0x347704 = createLabel(_0x3b8015);
      _0x2008e4.push(_0x347704);
      const _0x3115ab = {
        x: _0x347704.x + 70,
        y: _0x347704.y,
        selected: false,
        storageKey: "tp"
      };
      let _0x4a0ab8 = createToggle(_0x3115ab);
      _0x2008e4.push(_0x4a0ab8);
      _0x1152b0.addAllUis(_0x2008e4);
      _0x485b95.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x1152b0.stop();
      }, function () {
        if (_0x22e494.text.length == 0) {
          MFC.bubbleAlert.showAlert("请输入捐献次数");
          return true;
        }
        if (!Number.isInteger(parseInt(_0x22e494.text)) || _0x22e494.text > VIPManager.getInstance().getVipPrivilegeInfoByLv(VIPManager.getInstance().vipLevel).teamContribute - MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) || parseInt(_0x22e494.text) < 0) {
          MFC.bubbleAlert.showAlert("捐献次数错误");
          return true;
        }
        localStorage.setItem("teamcontributenum", _0x22e494.text);
        localStorage.setItem("ptc", _0x1131a8.selected);
        localStorage.setItem("zsc", _0x234540.selected);
        localStorage.setItem("tbuy", _0x48431d.selected);
        localStorage.setItem("tp", _0x4a0ab8.selected);
        if (_0x1131a8.selected) {
          _0x1152b0.task[0] = 1;
        }
        if (_0x234540.selected) {
          _0x1152b0.task[1] = 1;
        }
        if (_0x48431d.selected) {
          _0x1152b0.task[2] = 1;
        }
        if (_0x4a0ab8.selected) {
          _0x1152b0.task[3] = 1;
        }
        _0x1152b0.prcessBody();
      }], null);
      _0x485b95.showAlert();
    });
  }
  async teamcontribute() {
    let _0x3d72cc = MFC.userInfo.coin;
    let _0x4628f5 = VIPManager.getInstance().getVipPrivilegeInfoByLv(VIPManager.getInstance().vipLevel).teamContribute;
    let _0x52cd77 = MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes);
    if (_0x3d72cc < parseInt(localStorage.getItem("teamcontributenum")) * 20000) {
      MFC.alert.show("赛尔豆不足" + _0x4628f5 + "次捐献");
    } else if (_0x52cd77 >= _0x4628f5) {
      MFC.alert.show("已经捐献" + _0x52cd77 + "次");
    } else if (this.task[0] || this.task[1]) {
      if (this.task[0] && this.task[1]) {
        for (let _0x3f3ca2 = 0; _0x3f3ca2 < Math.floor(parseInt(localStorage.getItem("teamcontributenum")) / 2) + parseInt(localStorage.getItem("teamcontributenum")) % 2; _0x3f3ca2++) {
          let _0x5219b1 = await this.send_message("cs_team_get_equip_info", {
            teamId: TeamManager.getInstance()._teamInfo.teamId,
            flag: 0
          });
          _0x5219b1 = _0x5219b1.equipInfoList.filter(function (_0x3b949e) {
            return _0x3b949e.energy !== 0;
          }).sort((_0x1e2106, _0x3b99db) => _0x1e2106.energy - _0x3b99db.energy)[0].type;
          let _0x5102cf = "";
          if (_0x5219b1 == 0) {
            _0x5102cf = "战队科技中心";
          }
          if (_0x5219b1 == 1) {
            _0x5102cf = "战队物资装置";
          }
          if (_0x5219b1 == 2) {
            _0x5102cf = "战队商店";
          }
          if (_0x5219b1 == 3) {
            _0x5102cf = "精灵改造仪";
          }
          addGameLog("捐献" + _0x5102cf + "第" + MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) + "次");
          const _0x55609d = {
            type: _0x5219b1,
            flag: 0
          };
          await this.send_message("cs_team_contribute", _0x55609d);
        }
        if (MFC.userInfo.diamond >= Math.floor(parseInt(localStorage.getItem("teamcontributenum")) / 2) * 20) {
          for (let _0x16a228 = 0; _0x16a228 < Math.floor(parseInt(localStorage.getItem("teamcontributenum")) / 2); _0x16a228++) {
            let _0x2f2107 = await this.send_message("cs_team_get_equip_info", {
              teamId: TeamManager.getInstance()._teamInfo.teamId,
              flag: 0
            });
            _0x2f2107 = _0x2f2107.equipInfoList.filter(function (_0x239c61) {
              return _0x239c61.energy !== 0;
            }).sort((_0x2ebb28, _0x3b70f5) => _0x2ebb28.energy - _0x3b70f5.energy)[0].type;
            let _0x48310c = "";
            if (_0x2f2107 == 0) {
              _0x48310c = "战队科技中心";
            }
            if (_0x2f2107 == 1) {
              _0x48310c = "战队物资装置";
            }
            if (_0x2f2107 == 2) {
              _0x48310c = "战队商店";
            }
            if (_0x2f2107 == 3) {
              _0x48310c = "精灵改造仪";
            }
            addGameLog("捐献" + _0x48310c + "第" + MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) + "次");
            const _0x460ba9 = {
              type: _0x2f2107,
              flag: 1
            };
            await this.send_message("cs_team_contribute", _0x460ba9);
          }
        } else {
          MFC.alert.show("钻石不足" + parseInt(localStorage.getItem("teamcontributenum")) + "次捐献");
        }
      } else if (this.task[0]) {
        for (let _0x4839a2 = 0; _0x4839a2 < parseInt(localStorage.getItem("teamcontributenum")); _0x4839a2++) {
          let _0x3d9262 = await this.send_message("cs_team_get_equip_info", {
            teamId: TeamManager.getInstance()._teamInfo.teamId,
            flag: 0
          });
          _0x3d9262 = _0x3d9262.equipInfoList.filter(function (_0x5115c8) {
            return _0x5115c8.energy !== 0;
          }).sort((_0x291167, _0x54dbdf) => _0x291167.energy - _0x54dbdf.energy)[0].type;
          let _0x5e06a0 = "";
          if (_0x3d9262 == 0) {
            _0x5e06a0 = "战队科技中心";
          }
          if (_0x3d9262 == 1) {
            _0x5e06a0 = "战队物资装置";
          }
          if (_0x3d9262 == 2) {
            _0x5e06a0 = "战队商店";
          }
          if (_0x3d9262 == 3) {
            _0x5e06a0 = "精灵改造仪";
          }
          addGameLog("捐献" + _0x5e06a0 + "第" + MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) + "次");
          const _0x2fd438 = {
            type: _0x3d9262,
            flag: 0
          };
          await this.send_message("cs_team_contribute", _0x2fd438);
        }
      } else if (this.task[1]) {
        for (let _0x502cb2 = 0; _0x502cb2 < parseInt(localStorage.getItem("teamcontributenum")); _0x502cb2++) {
          let _0x4dc218 = await this.send_message("cs_team_get_equip_info", {
            teamId: TeamManager.getInstance()._teamInfo.teamId,
            flag: 0
          });
          _0x4dc218 = _0x4dc218.equipInfoList.filter(function (_0x43621f) {
            return _0x43621f.energy !== 0;
          }).sort((_0x4898cb, _0x1f37e8) => _0x4898cb.energy - _0x1f37e8.energy)[0].type;
          let _0x25fe95 = "";
          if (_0x4dc218 == 0) {
            _0x25fe95 = "战队科技中心";
          }
          if (_0x4dc218 == 1) {
            _0x25fe95 = "战队物资装置";
          }
          if (_0x4dc218 == 2) {
            _0x25fe95 = "战队商店";
          }
          if (_0x4dc218 == 3) {
            _0x25fe95 = "精灵改造仪";
          }
          addGameLog("捐献" + _0x25fe95 + "第" + MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) + "次");
          const _0x2e1d73 = {
            type: _0x4dc218,
            flag: 1
          };
          await this.send_message("cs_team_contribute", _0x2e1d73);
        }
      }
    }
  }
  async teamfight() {
    let _0x4368b8 = [PetSort.getPetList(PetManager.getInstance().getAllPets()).map(_0x46a628 => {
      if (_0x46a628.level < 100) {
        return _0x46a628;
      }
    }).sort((_0x1356f4, _0x2f098f) => _0x1356f4.battleValues[0] - _0x2f098f.battleValues[0])[0].getTime.toString()];
    const _0x5f1490 = {
      op: 1,
      petList: _0x4368b8
    };
    await this.send_message("cs_team_league_new", _0x5f1490);
    let _0x50b886 = PetSort.getPetList(PetManager.getInstance().getAllPets()).map(_0x532c37 => {
      if (_0x532c37.level < 100) {
        return _0x532c37;
      }
    }).sort((_0x5c30e1, _0x42f514) => _0x5c30e1.battleValues[0] - _0x42f514.battleValues[0])[0].skills[0];
    logger("阵容更换完毕");
    await this.send_message("cs_team_league_new", {
      op: 2
    });
    await this.send_message("cs_team_league_new", {
      op: 3
    });
    await this.initBattle();
    let _0x1dadcc = await this.useSkill(_0x50b886);
    while (_0x1dadcc.result.result == 0) {
      addGameLog("未被击败，继续攻击");
      _0x1dadcc = await this.useSkill(_0x50b886);
    }
  }
  async fight2() {
    let _0x3fa5a5 = await this.send_message("cs_get_campaign_pet_challenge_boss", {});
    let _0x1240ba = await this.send_message("cs_new_get_hire_pet_list", {
      teamPageNo: 1,
      teamPageSize: 1000
    });
    let _0xa4d0c3 = _0x1240ba.teamHireList.map(_0x258d37 => {
      if (_0x258d37.petLevel == 1) {
        for (let _0x39dd17 of _0x3fa5a5.todayLimitAttr) {
          if (_0x39dd17 == PetConfig.getDef(_0x258d37.petId).elemType) {
            return _0x258d37;
          }
        }
      }
    }).filter(_0x439a67 => _0x439a67);
    let _0x1e5880 = 0;
    if (_0xa4d0c3.length == 0) {
      addGameLog("战斗没有1级符合属性的可以雇佣");
      _0x1e5880 = 1;
      _0xa4d0c3 = _0x1240ba.teamHireList.map(_0xc550ad => {
        if (_0xc550ad.petLevel == 1) {
          return _0xc550ad;
        }
      }).filter(_0x5bdc34 => _0x5bdc34);
    }
    if (_0xa4d0c3.length !== 0) {
      let _0x5152dd = _0xa4d0c3[0].getTime;
      let _0x3362bb = _0x3fa5a5.times;
      let _0x4ec597 = _0xa4d0c3[0].userId + "_" + _0xa4d0c3[0].type + "_" + _0xa4d0c3[0].pos;
      const _0x459bf4 = {
        type: _0xa4d0c3[0].type,
        pos: _0xa4d0c3[0].pos,
        targetUid: _0xa4d0c3[0].userId
      };
      let _0x4752a7 = await this.send_message("cs_new_get_hire_pet_info", _0x459bf4);
      if (_0x3362bb < 1 || _0x1e5880 == 1) {
        MFC.alert.show("极限挑战次数不足1，雇佣需要耗费体力");
        if (MFC.userInfo.curEnergy < 5) {
          MFC.alert.show("体力不足5");
        } else {
          const _0x4b05df = {
            petId: _0xa4d0c3[0].petId,
            level: 1,
            skillList: _0x4752a7.pet.skills,
            getTime: _0x5152dd,
            otherUid: _0xa4d0c3[0].userId,
            type: _0xa4d0c3[0].type
          };
          const _0x304559 = {
            levelId: 2,
            getTimeList: [_0x4ec597],
            attachBattleSkill: [_0x4b05df]
          };
          await this.send_message("cs_pve_planet_start_battle", _0x304559);
          await this.initBattle();
          let _0x409903 = await this.useSkill(_0x4752a7.pet.skills[0]);
          while (_0x409903.result.result == 0) {
            addGameLog("未被击败，继续攻击");
            _0x409903 = await this.useSkill(_0x4752a7.pet.skills[0]);
          }
        }
      } else {
        const _0x354604 = {
          type: _0xa4d0c3[0].type,
          pos: _0xa4d0c3[0].pos,
          targetUid: _0xa4d0c3[0].userId
        };
        await this.send_message("cs_new_get_hire_pet_info", _0x354604);
        const _0x5372ec = {
          petId: _0xa4d0c3[0].petId,
          level: 1,
          skillList: _0x4752a7.pet.skills,
          getTime: _0x5152dd,
          otherUid: _0xa4d0c3[0].userId,
          type: _0xa4d0c3[0].type
        };
        const _0x19b4d2 = {
          levelId: 5,
          hirePetList: [_0x4ec597],
          attachBattleSkill: [_0x5372ec]
        };
        await this.send_message("cs_start_campaign_pet_challenge", _0x19b4d2);
        await this.initBattle();
        let _0x19d597 = await this.useSkill(_0x4752a7.pet.skills[0]);
        while (_0x19d597.result.result == 0) {
          addGameLog("未被击败，继续攻击");
          _0x19d597 = await this.useSkill(_0x4752a7.pet.skills[0]);
        }
      }
    }
  }
  async cheak() {
    let _0x4e7fe0 = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10450));
    let _0x4d2f01 = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10451));
    let _0x3e418b = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10452));
    let _0x2ee685 = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10453));
    let _0x20ff8a = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10454));
    switch (_0x4e7fe0) {
      case 0:
        logger("未完成");
        await this.teamfight();
        addGameLog("领取" + xls.activityTaskReset.getItem(10450).task);
        await this.send_message("cs_get_activity_task_reset_reward", {
          carnivalId: 10450
        });
        break;
      case -1:
        addGameLog(xls.activityTaskReset.getItem(10450).task + "已领取");
        break;
      case 1:
        addGameLog("领取" + xls.activityTaskReset.getItem(10450).task);
        await this.send_message("cs_get_activity_task_reset_reward", {
          carnivalId: 10450
        });
        break;
    }
    switch (_0x4d2f01) {
      case 0:
        logger("未完成");
        await this.fight2();
        await this.fight2();
        addGameLog("领取" + xls.activityTaskReset.getItem(10451).task);
        await this.send_message("cs_get_activity_task_reset_reward", {
          carnivalId: 10451
        });
        addGameLog(xls.activityTaskReset.getItem(10451).task + "已领取");
        break;
      case -1:
        addGameLog(xls.activityTaskReset.getItem(10451).task + "已领取");
        break;
      case 1:
        addGameLog("领取" + xls.activityTaskReset.getItem(10451).task);
        await this.send_message("cs_get_activity_task_reset_reward", {
          carnivalId: 10451
        });
        break;
    }
    switch (_0x3e418b) {
      case 0:
        logger("未完成");
        MFC.alert.show("请使用雇佣功能后点击");
        break;
      case -1:
        addGameLog(xls.activityTaskReset.getItem(10452).task + "已领取");
        break;
      case 1:
        addGameLog("领取" + xls.activityTaskReset.getItem(10452).task);
        await this.send_message("cs_get_activity_task_reset_reward", {
          carnivalId: 10452
        });
        break;
    }
    switch (_0x2ee685) {
      case 0:
        if (this.task[3]) {
          logger("未完成");
          await this.teamtechlearn();
          await this.send_message("cs_get_activity_task_reset_reward", {
            carnivalId: 10453
          });
          addGameLog("领取" + xls.activityTaskReset.getItem(10453).task);
          break;
        } else {
          break;
        }
      case -1:
        addGameLog(xls.activityTaskReset.getItem(10453).task + "已领取");
        break;
      case 1:
        addGameLog("领取" + xls.activityTaskReset.getItem(10453).task);
        await this.send_message("cs_get_activity_task_reset_reward", {
          carnivalId: 10453
        });
        break;
    }
    switch (_0x20ff8a) {
      case 0:
        if (this.task[2]) {
          logger("未完成");
          GlobalSocket.PROTOCOL_SOCKET.send(4115, {
            freshType: 0
          });
          await wait(50);
          await wait(50);
          GlobalSocket.PROTOCOL_SOCKET.send(4116, {
            pos: 4
          });
          await wait(1000);
          await this.send_message("cs_get_activity_task_reset_reward", {
            carnivalId: 10454
          });
          addGameLog("领取" + xls.activityTaskReset.getItem(10454).task);
          break;
        } else {
          break;
        }
      case -1:
        addGameLog(xls.activityTaskReset.getItem(10454).task + "已领取");
        break;
      case 1:
        addGameLog("领取" + xls.activityTaskReset.getItem(10454).task);
        await this.send_message("cs_get_activity_task_reset_reward", {
          carnivalId: 10454
        });
        break;
    }
  }
  async weektask() {
    let _0x57f6a8 = MFC.attr.getAttr(MFC.attrType.weeklyTeamTaskTimes);
    if (_0x57f6a8 >= 10) {
      addGameLog("本周已完成任务数量：" + _0x57f6a8);
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.weeklyTeamTaskBoxStatus), 1) == 0) {
        await this.send_message("cs_team_task_box_get", {
          i: 0
        });
        MFC.alert.show("一键任务已完成");
      }
      if (_0x57f6a8 >= 15) {
        addGameLog("本周已完成任务数量：" + _0x57f6a8);
        if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.weeklyTeamTaskBoxStatus), 2) == 0) {
          await this.send_message("cs_team_task_box_get", {
            i: 1
          });
          MFC.alert.show("一键任务已完成");
        }
      }
    } else {
      addGameLog("本周已完成任务数量：" + _0x57f6a8);
    }
    MFC.alert.show("一键任务已完成");
  }
  async teamtechlearn() {
    let _0x56d65b = PetSort.getPetList(PetManager.getInstance().getAllPets()).map(_0x34765d => {
      if (_0x34765d.level == 100 && _0x34765d.teamTechLearnTimes[0] < 5) {
        return _0x34765d;
      }
    }).sort((_0x7e4910, _0x13ae9c) => _0x7e4910.battleValues[0] - _0x13ae9c.battleValues[0])[0].getTime;
    const _0x3ad830 = {
      getTime: _0x56d65b,
      idx: 0,
      flag: 1,
      num: 1
    };
    GlobalSocket.PROTOCOL_SOCKET.send(4630, _0x3ad830);
    await wait(500);
  }
  async prcessBody() {
    try {
      if (TeamManager.getInstance().teamId == 0) {
        MFC.alert.show("对不起您还未加入战队");
      } else {
        await this.teamcontribute();
        await this.cheak();
        await this.weektask();
      }
      this.stop();
    } catch (_0x4e2cbd) {}
  }
}
class lukeAct extends SuperTask {
  constructor() {
    super();
    this.nowName = "鲁克的补给";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
  }
  start() {
    super.start();
    let _0x1194e2 = this;
    MFC.alert.show("确认进行鲁克的物资补给吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x3b1455) {
      _0x1194e2.stop();
    }, function (_0x681784) {
      _0x1194e2.prcessBody();
    }]);
  }
  async fight() {
    if (UserManager.getInstance().userInfo.defaultTeam[0].length == 0) {
      addGameLog("请设置阵容");
      this.stop();
    } else {
      let _0x408360 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
      await this.send_message("cs_pve_activity_battle", {
        levelId: this.levelId,
        battleType: 3
      });
      await this.initBattle();
      let _0x325c47 = await this.useSkill(_0x408360);
      while (_0x325c47.result.result === 0) {
        let _0x2b8009 = _0x325c47.result.playerInfos.find(_0x45cbf9 => _0x45cbf9.uid === MFC.userInfo.uid);
        let _0x40d417 = _0x2b8009 ? _0x2b8009.nextRoundOP : _0x325c47.result.playerInfos[1].nextRoundOP;
        if (_0x40d417 !== 1) {
          addGameLog("首发被击败");
          break;
        }
        if (_0x325c47.result.roundNum > 5) {
          break;
        }
        addGameLog("未击败，继续攻击");
        _0x325c47 = await this.useSkill(_0x408360);
      }
      await wait(300);
    }
  }
  async prcessBody() {
    try {
      let _0x51642a = deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss");
      let _0x4042f2 = xls.activityTimeLimit.getItems()[5].startTime;
      let _0x56b808 = xls.activityTimeLimit.getItems()[5].endTime;
      if (_0x4042f2 <= _0x51642a && _0x51642a <= _0x56b808) {
        let _0x237eeb = parseInt(MFC.serverTimer.date.getHours());
        let _0x34800b = [322, 323, 324];
        let _0x16085c = ["322", "323", "324"];
        if (_0x237eeb >= 5 && _0x237eeb <= 23) {
          let _0x112965 = _0x237eeb < 12 ? 0 : _0x237eeb < 18 ? 1 : 2;
          let _0xea5d49 = _0x34800b[_0x112965];
          let _0xb4ad75 = _0x16085c[_0x112965];
          addGameLog("鲁克" + ["早上", "下午", "晚上"][_0x112965] + "开始");
          while (true) {
            let _0x36861f = await this.send_message("cs_get_mapBoss_data", {
              planetId: 6
            });
            let _0x20ad08 = _0x36861f.reward[_0xb4ad75];
            if (_0x20ad08 === undefined) {
              addGameLog("鲁克第1次奖励！");
            } else if (_0x20ad08 < 10) {
              addGameLog("鲁克第" + _0x20ad08 + "次奖励！");
            } else {
              addGameLog("鲁克完成！");
              break;
            }
            this.levelId = _0xea5d49;
            await this.fight();
            touchBtn(sta);
            await wait(200);
          }
          this.stop();
        } else {
          MFC.alert.show("不在活动时间内");
          this.stop();
        }
      } else {
        addGameLog("鲁克活动时间在 " + _0x4042f2 + "~" + _0x56b808);
        addGameLog("不在活动时间内");
        this.stop();
      }
    } catch (_0x254900) {}
  }
}
class Exploratorymaterials extends SuperTask {
  constructor() {
    super();
    this.nowName = "时光之旅";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
  }
  start() {
    super.start();
    let _0x104c93 = this;
    MFC.alert.show("确定进行转盘材料收集吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x49a290) {
      _0x104c93.stop();
    }, function (_0x12dc95) {
      _0x104c93.prcessBody();
    }]);
  }
  async seniorbossui() {
    super.start();
    let _0x56e475 = this;
    MFC.alert.show("确定进行高级转盘材料收集吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x1b5617) {
      _0x56e475.stop();
    }, function (_0x23bf00) {
      _0x56e475.fight2();
    }]);
  }
  async fight() {
    let _0x282b48 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
    await this.send_message("cs_pve_activity_battle", {
      levelId: this.levelId,
      battleType: 3
    });
    await this.initBattle();
    let _0x2d1cd7 = await this.useSkill(_0x282b48);
    while (_0x2d1cd7.result.result === 0) {
      let _0x201392 = _0x2d1cd7.result.playerInfos.find(_0x23eb7e => _0x23eb7e.uid === MFC.userInfo.uid);
      let _0x4fbe99 = _0x201392 ? _0x201392.nextRoundOP : _0x2d1cd7.result.playerInfos[1].nextRoundOP;
      if (_0x4fbe99 !== 1) {
        addGameLog("首发被击败");
        break;
      }
      if (_0x2d1cd7.result.roundNum > 5) {
        break;
      }
      addGameLog("未击败，继续攻击");
      _0x2d1cd7 = await this.useSkill(_0x282b48);
    }
    await wait(300);
  }
  async fight2() {
    if (petConfig.SkillConfig.getDef(PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam1[0]).skills[0]).skillPower < 130) {
      MFC.alert.show("挑战阵容1首技能不是大招");
      this.stop();
    } else {
      let _0x5059ce = [{
        levelId: 178,
        planetId: 6,
        itemId: 100194,
        times: 3,
        logPrefix: "双子阿尔法星2"
      }, {
        levelId: 233,
        planetId: 8,
        itemId: 100314,
        times: 3,
        logPrefix: "暗影星2"
      }];
      for (let _0xe66304 of _0x5059ce) {
        while (true) {
          if (getSeerItemNum(_0xe66304.itemId) > 1) {
            const _0x24a488 = {
              planetId: _0xe66304.planetId
            };
            let _0x44f57d = await this.send_message("cs_get_mapBoss_data", _0x24a488);
            if (_0x44f57d.reward[_0xe66304.levelId.toString()] == undefined) {
              addGameLog(_0xe66304.logPrefix + "第1次奖励!");
            } else if (_0x44f57d.reward[_0xe66304.levelId.toString()] < _0xe66304.times) {
              addGameLog(_0xe66304.logPrefix + "第" + _0x44f57d.reward[_0xe66304.levelId.toString()] + "次奖励!");
            } else {
              addGameLog(_0xe66304.logPrefix + "完成！");
              break;
            }
            this.levelId = _0xe66304.levelId;
            await this.fight();
            await wait(200);
            if (!xls.timeTraveView.hasLoaded) {
              xls.timeTraveView.load(() => {});
            }
            if (!xls.mapMonster.hasLoaded) {
              xls.mapMonster.load(() => {});
            }
            if (!xls.item.hasLoaded) {
              xls.item.load(() => {});
            }
            let _0x372084 = xls.timeTraveView.getItems().find(_0x365124 => _0x365124.dropItem.includes(xls.mapMonster.getItem(this.levelId).mapId)).items.split(",");
            let _0x48f6b9 = "拥有:\n";
            _0x48f6b9 += xls.item.getItem(_0x372084[_0x372084.length - 1]).name + ":" + getSeerItemNum(_0x372084[_0x372084.length - 1]) + "\n";
            addGameLog(_0x48f6b9);
          } else {
            addGameLog("高级材料不足无法进行对战!");
            break;
          }
        }
      }
      this.stop();
    }
  }
  async prcessBody() {
    try {
      let _0x184e01 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
      let _0x39912c = petConfig.SkillConfig.getDef(_0x184e01).elemType;
      if (parseInt(_0x39912c) == 5 || parseInt(_0x39912c) == 7 || parseInt(_0x39912c) == 12) {
        MFC.alert.show("首发技能为光系、电系或地面,请切换不为光系、电系或地面系技能!");
        this.stop();
      } else {
        let _0x48cab0 = [{
          planetId: 1,
          levels: [1, 2, 3, 4],
          logPrefix: "皮皮星",
          itemindex: [0]
        }, {
          planetId: 2,
          levels: [9, 10, 11],
          logPrefix: "海洋星",
          itemindex: [0, 1, 2]
        }, {
          planetId: 3,
          levels: [12, 13, 14],
          logPrefix: "火山星",
          itemindex: [0, 1, 2]
        }, {
          planetId: 5,
          levels: [33, 34, 35],
          logPrefix: "云霄星",
          itemindex: [0, 1, 2]
        }, {
          planetId: 6,
          levels: [179, 60],
          logPrefix: "喷泉星",
          itemindex: [0, 1]
        }, {
          planetId: 8,
          levels: [66],
          logPrefix: "暗影星",
          itemindex: [0]
        }];
        for (let _0x4233c4 of _0x48cab0) {
          let _0x7ee49 = 0;
          for (let _0x34e5ac of _0x4233c4.levels) {
            while (true) {
              const _0x5880a9 = {
                planetId: _0x4233c4.planetId
              };
              let _0x1fd740 = await this.send_message("cs_get_mapBoss_data", _0x5880a9);
              let _0x1c6006 = _0x4233c4.levels.indexOf(_0x34e5ac) + 1;
              if (_0x1fd740.reward[_0x34e5ac.toString()] == undefined) {
                addGameLog(_0x4233c4.logPrefix + _0x1c6006 + "第1次奖励!");
              } else if (_0x1fd740.reward[_0x34e5ac.toString()] < 20 && (_0x34e5ac == 9 || _0x34e5ac == 13 || _0x34e5ac == 33 || _0x34e5ac == 66)) {
                addGameLog(_0x4233c4.logPrefix + _0x1c6006 + "第" + _0x1fd740.reward[_0x34e5ac.toString()] + "次奖励!");
              } else if (_0x1fd740.reward[_0x34e5ac.toString()] < 10 && (_0x34e5ac == 1 || _0x34e5ac == 2 || _0x34e5ac == 10 || _0x34e5ac == 12 || _0x34e5ac == 34 || _0x34e5ac == 179 || _0x34e5ac == 60)) {
                addGameLog(_0x4233c4.logPrefix + _0x1c6006 + "第" + _0x1fd740.reward[_0x34e5ac.toString()] + "次奖励!");
              } else if (_0x1fd740.reward[_0x34e5ac.toString()] < 5 && (_0x34e5ac == 3 || _0x34e5ac == 35)) {
                addGameLog(_0x4233c4.logPrefix + _0x1c6006 + "第" + _0x1fd740.reward[_0x34e5ac.toString()] + "次奖励!");
              } else if (_0x1fd740.reward[_0x34e5ac.toString()] < 5 && _0x34e5ac == 4) {
                addGameLog(_0x4233c4.logPrefix + (_0x1c6006 - 1) + "第" + (_0x1fd740.reward[_0x34e5ac.toString()] + _0x1fd740.reward[(_0x34e5ac - 1).toString()]) + "次奖励!");
              } else if (_0x1fd740.reward[_0x34e5ac.toString()] < 3 && (_0x34e5ac == 11 || _0x34e5ac == 14)) {
                addGameLog(_0x4233c4.logPrefix + _0x1c6006 + "第" + _0x1fd740.reward[_0x34e5ac.toString()] + "次奖励!");
              } else {
                if (_0x34e5ac == 4) {
                  addGameLog(_0x4233c4.logPrefix + (_0x1c6006 - 1) + "完成！");
                } else {
                  addGameLog(_0x4233c4.logPrefix + _0x1c6006 + "完成！");
                }
                break;
              }
              this.levelId = _0x34e5ac;
              await this.fight();
              if (!xls.timeTraveView.hasLoaded) {
                xls.timeTraveView.load(() => {});
              }
              if (!xls.mapMonster.hasLoaded) {
                xls.mapMonster.load(() => {});
              }
              if (!xls.item.hasLoaded) {
                xls.item.load(() => {});
              }
              let _0x3c9fc7 = xls.timeTraveView.getItems().find(_0x52e87d => _0x52e87d.dropItem.includes(xls.mapMonster.getItem(_0x34e5ac).mapId)).items.split(",");
              let _0x13358d = "拥有:\n";
              if (_0x7ee49 < _0x4233c4.itemindex.length) {
                _0x13358d += xls.item.getItem(_0x3c9fc7[_0x7ee49]).name + ":" + getSeerItemNum(_0x3c9fc7[_0x7ee49]) + "\n";
              } else {
                _0x13358d += xls.item.getItem(_0x3c9fc7[0]).name + ":" + getSeerItemNum(_0x3c9fc7[0]) + "\n";
              }
              addGameLog(_0x13358d);
              await wait(200);
            }
            _0x7ee49++;
          }
        }
        await this.seniorbossui();
        await wait(200);
      }
      await wait(200);
    } catch (_0x80b801) {
      logger(_0x80b801);
    }
  }
}
class ReleasePets extends SuperTask {
  constructor() {
    super();
    this.nowName = "放生";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    this.nowPetData = null;
    this.goalTalent = null;
    this.input2Pwd = null;
  }
  start() {
    super.start();
    let _0x520b97 = this;
    var _0x4f4d40 = getTouchs("_source", "release_selected_png");
    if (!_0x4f4d40) {
      MFC.alert.show("请先前往精灵放生仓库\n勾选一只目标精灵!");
      _0x520b97.stop();
      return;
    }
    let _0x2a68fc = _0x4f4d40[0].parent.$parent._data;
    logger(_0x2a68fc);
    this.nowPetData = _0x2a68fc;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x2897c7 = SimpleAlertUi({});
      const _0x1a467a = {
        text: "一键放生[二级密码没有不填写]",
        y: _0x2897c7.height / 11
      };
      var _0x53f47d = createLabel(_0x1a467a);
      _0x53f47d.x = _0x2897c7.width / 2 - _0x53f47d.width / 2;
      _0x2897c7.addChild(_0x53f47d);
      const _0x5d60f4 = {
        text: "锁定精灵也会放生喔\n批量放生目标精灵: " + _0x520b97.nowPetData.nick,
        y: _0x53f47d.y + 30,
        textColor: 16776960
      };
      var _0x206d4d = createLabel(_0x5d60f4);
      _0x206d4d.x = _0x2897c7.width / 2 - _0x206d4d.width / 2;
      _0x2897c7.addChild(_0x206d4d);
      const _0x30bef5 = {
        prompt: "天赋上限",
        x: 40,
        y: _0x2897c7.height / 2.2,
        width: 100
      };
      var _0x35156a = createEdit(_0x30bef5);
      _0x2897c7.addChild(_0x35156a);
      const _0x5211ad = {
        prompt: "二级密码",
        x: _0x35156a.x + _0x35156a.width + 15,
        y: _0x2897c7.height / 2.2,
        width: 100
      };
      var _0x231893 = createEdit(_0x5211ad);
      _0x2897c7.addChild(_0x231893);
      _0x2897c7.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x520b97.stop();
      }, async function () {
        if (isNaN(parseInt(_0x35156a.text)) || parseInt(_0x35156a.text) > 31 || parseInt(_0x35156a.text) < 0) {
          MFC.bubbleAlert.showAlert("请输入有效精灵天赋");
          return true;
        }
        if (_0x231893.text != "") {
          if (isNaN(parseInt(_0x231893.text)) && parseInt(_0x231893.text).length == 6) {
            MFC.bubbleAlert.showAlert("请输入有效二级密码");
            return true;
          }
          _0x520b97.input2Pwd = parseInt(_0x231893.text) + "";
          logger("二级 密码" + _0x520b97.input2Pwd);
          let _0x1d9587 = await _0x520b97.send_message("cs_2nd_passwd", {
            option: 2,
            param: _0x520b97.input2Pwd
          });
          if (JSON.stringify(_0x1d9587).indexOf("二级密码解锁失败") != -1) {
            addGameLog("二级密码错误");
            MFC.bubbleAlert.showAlert("二级密码错误");
          }
        }
        _0x520b97.goalTalent = parseInt(_0x35156a.text);
        _0x520b97.prcessBody();
      }], null);
      _0x2897c7.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x2e1e48 = PetManager.getInstance().getAllPets();
      let _0x25fd81 = [];
      for (let _0x56f04d = 0; _0x56f04d < _0x2e1e48.length; _0x56f04d++) {
        if (this.goalTalent >= _0x2e1e48[_0x56f04d].talent && _0x2e1e48[_0x56f04d].petId == this.nowPetData.petId) {
          if (_0x2e1e48[_0x56f04d].lockFlag == 1) {
            const _0x188504 = {
              getTime: _0x2e1e48[_0x56f04d].getTime,
              attrList: [{
                type: "lockFlag",
                value: 0
              }]
            };
            await this.send_message("cs_set_pet_info", _0x188504);
          }
          _0x25fd81.push(_0x2e1e48[_0x56f04d].getTime);
        }
      }
      let _0x3e9005 = _0x25fd81;
      let _0x27b209 = splitArray(_0x3e9005, 100);
      for (let _0x40d06a = 0; _0x40d06a < _0x27b209.length; _0x40d06a++) {
        addGameLog("开始放生!" + _0x27b209[_0x40d06a].length + "只");
        const _0x1d0e37 = {
          getTime: _0x27b209[_0x40d06a]
        };
        var _0x17ea86 = await this.send_message("cs_free_pet", _0x1d0e37);
        if (JSON.stringify(_0x17ea86).indexOf("二级密码") != -1) {
          addGameLog("请设置二级密码");
          return;
        }
      }
      addGameLog("放生成功 " + this.nowPetData.nick + " " + _0x25fd81.length + " 只");
      this.stop();
    } catch (_0x557df3) {
      logger(_0x557df3);
    }
  }
}
// TOLOOK
// setInterval(function () {
//   _0x1077e4();
// }, 4000);
function splitArray(_0x511577, _0x48f867 = 100) {
  let _0x386daf = [];
  for (let _0x5a73ae = 0; _0x5a73ae < _0x511577.length; _0x5a73ae += _0x48f867) {
    _0x386daf.push(_0x511577.slice(_0x5a73ae, _0x5a73ae + _0x48f867));
  }
  return _0x386daf;
}
class Expstory extends SuperTask {
  constructor() {
    super();
    this.nowName = "经验剧情";
  }
  start() {
    super.start();
    let _0x978e4d = this;
    MFC.alert.show("确定进行一键经验剧情吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x476e1a) {
      _0x978e4d.stop();
    }, function (_0x3fdf97) {
      _0x978e4d.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x3f7ab9 = xls.activityPetStory.getItems().map(_0x4de5dc => {
        if (_0x4de5dc.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x4de5dc.endTime) {
          var _0x535d2f = _0x4de5dc.endTime;
          var _0x499094 = deden.DateUtil.create(_0x535d2f);
          _0x499094.setHours(_0x499094.getHours() - 15);
          var _0x25f537 = deden.DateUtil.dateFormat(_0x499094, "yyyy_MM_dd hh:mm:ss");
          if (_0x25f537 >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss")) {
            if (_0x4de5dc.name[_0x4de5dc.name.length - 1] != "篇") {
              return _0x4de5dc;
            }
          }
        }
      }).sort().filter(_0x168b4a => _0x168b4a != undefined);
      for (let _0xc5905b = 0; _0xc5905b < _0x3f7ab9.length; _0xc5905b++) {
        if (SpritePlotManager.getInstance().getPlotStateById(_0x3f7ab9[_0xc5905b].id) == 3) {
          addGameLog(_0x3f7ab9[_0xc5905b].name + _0x3f7ab9[_0xc5905b].stepNumber + "已完成");
        } else if (SpritePlotManager.getInstance().getPlotStateById(_0x3f7ab9[_0xc5905b].id) == 2) {
          const _0xddc8a = {
            id: _0x3f7ab9[_0xc5905b].id,
            type: 2,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0xddc8a);
        } else if (SpritePlotManager.getInstance().getPlotStateById(_0x3f7ab9[_0xc5905b].id) == 0) {
          logger(_0x3f7ab9[_0xc5905b].name + "未解锁");
        } else {
          logger(_0x3f7ab9[_0xc5905b].id);
          const _0x4d9ffd = {
            id: _0x3f7ab9[_0xc5905b].id,
            type: 1,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x4d9ffd);
          const _0x5cb305 = {
            id: _0x3f7ab9[_0xc5905b].id,
            type: 2,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x5cb305);
          addGameLog(_0x3f7ab9[_0xc5905b].name + _0x3f7ab9[_0xc5905b].stepNumber + "已完成");
        }
      }
      this.stop();
    } catch (_0x3209d0) {}
  }
}
class Pvpremind extends SuperTask {
  constructor() {
    super();
    this.nowName = "PVP记牌器";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_notify_change_pet"
    }, {
      watchEventName: "sc_change_default_team"
    }, {
      watchEventName: "sc_notify_item_change"
    }, {
      watchEventName: "sc_query_tianti_extra_status"
    }];
    this.task = [];
  }
  start() {
    super.start();
    if (pokers) {
      let _0x5890cc = this;
      MFC.alert.show("确定关闭记牌器吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x4a5afe) {
        _0x5890cc.stop();
      }, function (_0xaf1a52) {
        if (pokers != null) {
          BC.removeEvent(pokers);
          MFC.rootLayer.removeChild(pokers);
          pokers = null;
        }
        addGameLog("巅峰记牌器已经关闭!");
        _0x5890cc.stop();
      }]);
    } else {
      let _0x3a7c98 = this;
      MFC.alert.show("确定启动巅峰记牌器吗？\n!!!记牌器文字可以进行拖动!!!", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x166c74) {
        _0x3a7c98.stop();
      }, function (_0x32dcee) {
        _0x3a7c98.prcessBody();
      }]);
    }
  }
  async prcessBody() {
    try {
      pokers = new eui.Button();
      pokers.y = 80;
      pokers.x = 20;
      pokers.skinName = getTextBtnNullImageSkinName("巅峰记牌器已开启");
      MFC.rootLayer.addChild(pokers);
      xls.enchanting.load(() => {});
      addGameLog("巅峰记牌器已开启!可进行拖动");
      BC.addEvent(pokers, pokers, egret.TouchEvent.TOUCH_BEGIN, _0x1751e0 => {
        pokers.oldx = _0x1751e0.stageX;
        pokers.oldy = _0x1751e0.stageY;
      });
      BC.addEvent(pokers, pokers, egret.TouchEvent.TOUCH_MOVE, _0x4def3f => {
        if (pokers.oldx) {
          pokers.x = _0x4def3f.stageX - pokers.oldx + pokers.x;
        }
        if (pokers.oldy) {
          pokers.y = _0x4def3f.stageY - pokers.oldy + pokers.y;
        }
        pokers.oldx = _0x4def3f.stageX;
        pokers.oldy = _0x4def3f.stageY;
        if (pokers.$children[pokers.$children.length - 1].textArr[0].text != "巅峰记牌器已开启") {
          pokers.definex = pokers.x;
          pokers.definey = pokers.y;
        }
      });
      this.stop();
    } catch (_0x418c5c) {}
  }
}
class RongHeHelper extends SuperTask {
  constructor() {
    super();
    this.nowName = "融合助手";
    this.recvList = [];
    this.task = [];
  }
  start() {
    super.start();
    if (rongheStatus) {
      let _0x334fd4 = this;
      MFC.alert.show("确定关闭融合助手吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x20a767) {
        _0x334fd4.stop();
      }, function (_0x1296d0) {
        if (rongheStatus != null) {
          rongheStatus = null;
        }
        addGameLog("融合助手已经关闭!");
        _0x334fd4.stop();
      }]);
    } else {
      let _0x5e96e5 = this;
      MFC.alert.show("确定启动融合助手吗？", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x343308) {
        _0x5e96e5.stop();
      }, function (_0x518032) {
        _0x5e96e5.prcessBody();
      }]);
    }
  }
  async prcessBody() {
    try {
      rongheStatus = 1;
      this.stop();
    } catch (_0x4ac458) {}
  }
}
class Coinstory extends SuperTask {
  constructor() {
    super();
    this.nowName = "豆子剧情";
  }
  start() {
    super.start();
    let _0x24bb64 = this;
    MFC.alert.show("确定进行一键赛尔豆剧情吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0xb3c99b) {
      _0x24bb64.stop();
    }, function (_0xc7d07) {
      _0x24bb64.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x356a76 = xls.activityPetStory.getItems().map(_0x338331 => {
        if (_0x338331.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x338331.endTime) {
          var _0x157150 = _0x338331.endTime;
          var _0x1348e6 = deden.DateUtil.create(_0x157150);
          _0x1348e6.setHours(_0x1348e6.getHours() - 15);
          var _0x4de4d5 = deden.DateUtil.dateFormat(_0x1348e6, "yyyy_MM_dd hh:mm:ss");
          if (_0x4de4d5 >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss")) {
            if (_0x338331.name[_0x338331.name.length - 1] == "篇") {
              return _0x338331;
            }
          }
        }
      }).sort().filter(_0x5788b5 => _0x5788b5 != undefined);
      for (let _0x3635fd = 0; _0x3635fd < _0x356a76.length; _0x3635fd++) {
        if (SpritePlotManager.getInstance().getPlotStateById(_0x356a76[_0x3635fd].id) == 3) {
          addGameLog(_0x356a76[_0x3635fd].name + _0x356a76[_0x3635fd].stepNumber + "已完成");
        } else if (SpritePlotManager.getInstance().getPlotStateById(_0x356a76[_0x3635fd].id) == 2) {
          const _0x5059f3 = {
            id: _0x356a76[_0x3635fd].id,
            type: 2,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x5059f3);
        } else if (SpritePlotManager.getInstance().getPlotStateById(_0x356a76[_0x3635fd].id) == 0) {
          logger(_0x356a76[_0x3635fd].name + "未解锁");
        } else {
          logger(_0x356a76[_0x3635fd].id);
          const _0x4d4b38 = {
            id: _0x356a76[_0x3635fd].id,
            type: 1,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x4d4b38);
          const _0x42efa0 = {
            id: _0x356a76[_0x3635fd].id,
            type: 2,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x42efa0);
          addGameLog(_0x356a76[_0x3635fd].name + _0x356a76[_0x3635fd].stepNumber + "已完成");
        }
      }
      this.stop();
    } catch (_0x2a58a8) {}
  }
}
class learnAdd extends SuperTask {
  constructor() {
    super();
    this.nowName = "学习力任务";
    this.nowAddLearns = [];
  }
  start() {
    super.start();
    let _0x4c6e0c = this;
    if (!window.nowCheckBagPet) {
      MFC.alert.show("请先从精灵背包打开\n需要点学习力的精灵的详情页!");
      this.stop();
      return;
    }
    let _0xb533c1 = 0;
    for (let _0x2dbcdd = 0; _0x2dbcdd < window.nowCheckBagPet.effortValues.length; _0x2dbcdd++) {
      _0xb533c1 = _0xb533c1 + window.nowCheckBagPet.effortValues[_0x2dbcdd];
    }
    if (_0xb533c1 >= 510) {
      MFC.alert.show("当前精灵分配学习力已满,请重新选择精灵!");
      this.stop();
      return;
    }
    if (window.learnTimeId != null) {
      MFC.alert.show("学习力任务在后台执行\n是否结束学习力任务?", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x5ecc20) {
        _0x4c6e0c.stop();
      }, function (_0x596d30) {
        clearInterval(learnTimeId);
        window.learnTimeId = null;
        _0x4c6e0c.learnUi();
      }]);
    } else {
      this.learnUi();
    }
  }
  learnUi() {
    addGameLog("开始新的分配方案!");
    let _0x2a96f8 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("分配学习力面板");
      var _0x301d5f = SimpleAlertUi({
        width: 550,
        height: 350
      });
      this.alertWin = _0x301d5f;
      const _0x6e4557 = {
        text: "分配の学习力",
        y: _0x301d5f.height / 16
      };
      var _0x43f228 = createLabel(_0x6e4557);
      _0x43f228.x = _0x301d5f.width / 2 - _0x43f228.width / 2;
      _0x301d5f.addChild(_0x43f228);
      const _0x1bcf15 = {
        text: "当前精灵:",
        x: 40,
        y: _0x43f228.y + _0x43f228.height + 15
      };
      var _0x2db871 = createLabel(_0x1bcf15);
      _0x301d5f.addChild(_0x2db871);
      var _0xa4350e = createLabel({
        text: PetConfig.getDef(window.nowCheckBagPet.petId).name,
        x: _0x2db871.x + _0x2db871.width + 15,
        y: _0x43f228.y + _0x43f228.height + 15,
        textColor: 16776960
      });
      _0x301d5f.addChild(_0xa4350e);
      const _0x1dce61 = {
        text: "天赋:",
        x: _0xa4350e.x + _0xa4350e.width + 15,
        y: _0x43f228.y + _0x43f228.height + 15
      };
      var _0x81a66e = createLabel(_0x1dce61);
      _0x301d5f.addChild(_0x81a66e);
      const _0x303c93 = {
        text: window.nowCheckBagPet.talent,
        x: _0x81a66e.x + _0x81a66e.width + 15,
        y: _0x43f228.y + _0x43f228.height + 15,
        textColor: 16776960
      };
      var _0x4f69c1 = createLabel(_0x303c93);
      _0x301d5f.addChild(_0x4f69c1);
      const _0x123eb6 = {
        text: "特性:",
        x: _0x4f69c1.x + _0x4f69c1.width + 15,
        y: _0x43f228.y + _0x43f228.height + 15
      };
      var _0x4298d6 = createLabel(_0x123eb6);
      _0x301d5f.addChild(_0x4298d6);
      const _0x44bcf1 = {
        text: window.nowCheckBagPet.talent,
        x: _0x4298d6.x + _0x4298d6.width + 15,
        y: _0x43f228.y + _0x43f228.height + 15,
        textColor: 16776960
      };
      var _0x2c6a34 = createLabel(_0x44bcf1);
      if (window.nowCheckBagPet.featureId == 0) {
        _0x2c6a34.text = "无";
      } else {
        _0x2c6a34.text = xls.features.getItem(window.nowCheckBagPet.featureId).name;
      }
      _0x301d5f.addChild(_0x2c6a34);
      const _0x5c7538 = {
        text: "等级:",
        x: _0x2c6a34.x + _0x2c6a34.width + 15,
        y: _0x43f228.y + _0x43f228.height + 15
      };
      var _0xc68772 = createLabel(_0x5c7538);
      _0x301d5f.addChild(_0xc68772);
      const _0x3e70ee = {
        text: window.nowCheckBagPet.level,
        x: _0xc68772.x + _0xc68772.width + 15,
        y: _0x43f228.y + _0x43f228.height + 15,
        textColor: 16776960
      };
      var _0x1346c6 = createLabel(_0x3e70ee);
      _0x301d5f.addChild(_0x1346c6);
      let _0x23a6db = [{
        label: {
          text: "攻击"
        },
        input: {
          storageKey: "gongji"
        }
      }, {
        label: {
          text: "防御"
        },
        input: {
          storageKey: "fangyu"
        }
      }, {
        label: {
          text: "特攻"
        },
        input: {
          storageKey: "tegong"
        }
      }, {
        label: {
          text: "特防"
        },
        input: {
          storageKey: "tefang"
        }
      }, {
        label: {
          text: "速度"
        },
        input: {
          storageKey: "sudu"
        }
      }, {
        label: {
          text: "体力"
        },
        input: {
          storageKey: "tili"
        }
      }];
      let _0xc5252c = 40;
      let _0x1bea25 = _0xa4350e.y + _0xa4350e.height + 25;
      let _0x3a6f54 = [];
      for (let _0x10a092 = 0; _0x10a092 < _0x23a6db.length; _0x10a092++) {
        const _0x32834f = {
          text: _0x23a6db[_0x10a092].label.text,
          x: _0xc5252c,
          y: _0x1bea25
        };
        let _0x47f36c = createLabel(_0x32834f);
        const _0xbe2497 = {
          x: _0x47f36c.x + _0x47f36c.width + 15,
          y: _0x1bea25 - 5,
          prompt: "请输入0-255",
          storageKey: _0x23a6db[_0x10a092].input.storageKey
        };
        let _0x1fa3f6 = createEdit(_0xbe2497);
        _0x3a6f54.push(_0x1fa3f6);
        _0x301d5f.addChild(_0x47f36c);
        _0x301d5f.addChild(_0x1fa3f6);
        _0xc5252c = _0xc5252c + _0x47f36c.width + 15 + _0x1fa3f6.width + 15;
        if ((_0x10a092 + 1) % 3 == 0) {
          _0x1bea25 = _0x1bea25 + _0x1fa3f6.height + 10;
          _0xc5252c = 40;
        }
      }
      const _0x22f5fa = {
        text: "注意:",
        x: 30,
        y: _0x1bea25 + 20,
        textColor: 16776960
      };
      let _0x3b2200 = createLabel(_0x22f5fa);
      _0x301d5f.addChild(_0x3b2200);
      const _0xfff6a1 = {
        text: "执行过后后台会每间隔1分钟,进行加点对应精灵\n必须都要输入",
        x: 40,
        y: _0x3b2200.y + 10 + _0x3b2200.height,
        textColor: 16777215
      };
      let _0x31b914 = createLabel(_0xfff6a1);
      _0x301d5f.addChild(_0x31b914);
      _0x301d5f.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x2a96f8.stop();
      }, function () {
        _0x2a96f8.nowAddLearns = [];
        _0x2a96f8.nowAddLearns.push(_0x3a6f54[_0x3a6f54.length - 1].text);
        for (let _0x3f2ee9 = 0; _0x3f2ee9 < _0x3a6f54.length - 1; _0x3f2ee9++) {
          _0x2a96f8.nowAddLearns.push(_0x3a6f54[_0x3f2ee9].text);
        }
        logger("学习力分配情况:", _0x2a96f8.nowAddLearns);
        let _0xabcf36 = 0;
        for (var _0x3646aa = 0; _0x3646aa < _0x2a96f8.nowAddLearns.length; _0x3646aa++) {
          let _0x2dd690 = _0x2a96f8.nowAddLearns[_0x3646aa];
          if (window.nowCheckBagPet.effortValues[_0x3646aa] > _0x2dd690) {
            if (_0x3646aa == 0) {
              MFC.bubbleAlert.showAlert("当前精灵体力学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x3646aa == 1) {
              MFC.bubbleAlert.showAlert("当前精灵攻击学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x3646aa == 2) {
              MFC.bubbleAlert.showAlert("当前精灵防御学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x3646aa == 3) {
              MFC.bubbleAlert.showAlert("当前精灵特攻学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x3646aa == 4) {
              MFC.bubbleAlert.showAlert("当前精灵特防学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x3646aa == 5) {
              MFC.bubbleAlert.showAlert("当前精灵速度学习力比设置的大,请重新设置");
              return true;
            }
          }
          if (isNaN(parseInt(_0x2dd690)) || parseInt(_0x2dd690) > 255 || parseInt(_0x2dd690) < 0) {
            MFC.bubbleAlert.showAlert("请输入有效学习力,输入框都要输入,可以输入0");
            return true;
          }
          _0xabcf36 = _0xabcf36 + parseInt(_0x2dd690);
        }
        logger("学习力总:", _0xabcf36);
        if (_0xabcf36 > 510) {
          MFC.bubbleAlert.showAlert("总学习力大于510,请重新设置学习力分配!");
          return true;
        }
        window.nowAddLearns = _0x2a96f8.nowAddLearns;
        _0x3a6f54.forEach(_0x311c08 => localStorage.setItem(_0x311c08.storageKey, _0x311c08.text));
        _0x2a96f8.prcessBody();
      }], null);
      _0x301d5f.showAlert();
    });
  }
  async prcessBody() {
    try {
      addGameLog("学习力任务已经后台开启!");
      window.addPet = window.nowCheckBagPet;
      learnTimeId = // TOLOOK
      setInterval(async () => {
        try {
          window.addPet.haveLearns = null;
          let _0x296a25 = new window.cs_get_effort_value();
          Object.assign(_0x296a25, {});
          MFC.online.send(_0x296a25);
          while (1) {
            if (window.addPet.haveLearns != null) {
              break;
            } else {
              await wait(500);
            }
          }
          let _0x5c587e = PetManager.getInstance().getPetInfoByGetTime(window.addPet.getTime).effortValues;
          let _0x21031e = 0;
          for (let _0x26cc48 = 0; _0x26cc48 < _0x5c587e.length; _0x26cc48++) {
            if (_0x5c587e[_0x26cc48] < window.nowAddLearns[_0x26cc48]) {
              let _0x55dbb8;
              let _0x239893 = "";
              if (_0x26cc48 == 0) {
                _0x55dbb8 = 6;
                _0x239893 = "体力";
              }
              if (_0x26cc48 == 1) {
                _0x55dbb8 = 1;
                _0x239893 = "攻击";
              }
              if (_0x26cc48 == 2) {
                _0x55dbb8 = 2;
                _0x239893 = "防御";
              }
              if (_0x26cc48 == 3) {
                _0x55dbb8 = 3;
                _0x239893 = "特攻";
              }
              if (_0x26cc48 == 4) {
                _0x55dbb8 = 4;
                _0x239893 = "特防";
              }
              if (_0x26cc48 == 5) {
                _0x55dbb8 = 5;
                _0x239893 = "速度";
              }
              if (window.nowAddLearns[_0x26cc48] - _0x5c587e[_0x26cc48] >= window.addPet.haveLearns) {
                addGameLog("精灵: " + PetConfig.getDef(window.addPet.petId).name + " 加点" + _0x239893 + ": " + window.addPet.haveLearns);
                let _0x2aaed7 = new window.cs_add_effort_value();
                const _0x11d56b = {
                  getTime: window.addPet.getTime,
                  effortValue: [{
                    idx: _0x26cc48,
                    value: window.addPet.haveLearns
                  }]
                };
                Object.assign(_0x2aaed7, _0x11d56b);
                MFC.online.send(_0x2aaed7);
                _0x21031e = 1;
                break;
              } else if (window.nowAddLearns[_0x26cc48] - _0x5c587e[_0x26cc48] > 0) {
                addGameLog("精灵: " + PetConfig.getDef(window.addPet.petId).name + " 加点" + _0x239893 + ": " + (window.nowAddLearns[_0x26cc48] - _0x5c587e[_0x26cc48]));
                _0x21031e = 1;
                let _0x29a9ca = new window.cs_add_effort_value();
                const _0x3050b1 = {
                  getTime: window.addPet.getTime,
                  effortValue: [{
                    idx: _0x26cc48,
                    value: window.nowAddLearns[_0x26cc48] - _0x5c587e[_0x26cc48]
                  }]
                };
                Object.assign(_0x29a9ca, _0x3050b1);
                MFC.online.send(_0x29a9ca);
                break;
              }
            }
          }
          if (_0x21031e == 0) {
            addGameLog("学习力任务已经分配完成!");
            clearInterval(learnTimeId);
            window.learnTimeId = null;
          }
        } catch (_0x336029) {
          logger(_0x336029);
        }
      }, 20000);
    } catch (_0x3a1dc3) {}
    this.stop();
  }
}
class CoinBigBattle extends SuperTask {
  constructor() {
    super();
    this.nowName = "豆子作战";
    this.skillData = {
      堕龙之力: 22615,
      幕夜龙王击: 14816,
      灭世歼星炮: 32127,
      奥义断水击: 32529,
      光闪击: 10630,
      光闪击Plus: 100023
    };
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    this.infoTimes = "cs_get_campaign_pet_fight_infos";
  }
  start() {
    super.start();
    let _0x345384 = this;
    MFC.alert.show(`确定进行赛尔豆大作战吗
自动调出背包:
哈肯萨/赫尔卡长老/水次/瞬杀蒙多
[都没有会尝试进行租借]`, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x16d80d) {
      _0x345384.stop();
    }, function (_0x2bf76e) {
      _0x345384.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x49b992 = await this.send_message("cs_get_campaign_pet_fight_infos", {});
      let _0x2ac1e5 = _0x49b992.times;
      let _0x2b579d = _0x49b992.bossType;
      if (_0x2ac1e5 == 0) {
        addGameLog("塞尔豆大作战无对战次数");
        this.stop();
        return;
      } else {
        let _0x1ce52a = await this.getCoinBossId(_0x2b579d);
        let _0x499fdb = await this.coinBattle();
        if (!_0x499fdb) {
          this.stop();
          return;
        }
        let _0x114695 = _0x499fdb.skillsName;
        while (1) {
          let _0x71df2c = await this.send_message("cs_get_campaign_pet_fight_infos", {});
          let _0xa236c6 = _0x71df2c.times;
          if (_0xa236c6 == 0) {
            addGameLog("豆子作战无对战次数");
            break;
          }
          while (1) {
            let _0x8e285 = await this.actionCoin(_0x499fdb.pet, _0x1ce52a);
            if (!_0x8e285) {
              this.stop();
              return;
            }
            await this.initBattle();
            let _0x2de76f = await this.useSkill(this.skillData[_0x114695[0]]);
            while (_0x2de76f.result.result == 0) {
              _0x2de76f = await this.useSkill(this.skillData[_0x114695[1]]);
              let _0xaa0046 = _0x2de76f.result.playerInfos;
              let _0xac5b3 = "";
              for (let _0x3d68dc = 0; _0x3d68dc < _0xaa0046.length; _0x3d68dc++) {
                if (_0xaa0046[_0x3d68dc].uid == UserManager.getInstance().userInfo.uid) {
                  _0xac5b3 = _0xaa0046[_0x3d68dc].petInfos[0];
                  break;
                }
              }
              let _0x35431a = _0xac5b3.useSkills.find(_0x5a66da => _0x5a66da.id === this.skillData[_0x114695[1]]).crtPP;
              if (_0x35431a <= 1) {
                addGameLog("大招技能次数不足,退出战斗");
                await this.send_message("cs_quit_battle", {});
                break;
              }
              if (_0xac5b3.crtHp <= 40) {
                addGameLog("血量不足,退出战斗");
                await this.send_message("cs_quit_battle", {});
                break;
              }
              if (_0x2de76f.result.roundNum >= 4) {
                addGameLog("回合数过多,重进!");
                await this.send_message("cs_quit_battle", {});
                break;
              }
            }
            if (_0x2de76f.result.result === 1) {
              addGameLog("顺利击杀赛尔豆boss");
            } else {
              addGameLog("未击败豆子Boss");
            }
            if (_0x2de76f.result.result != 1) {
              addGameLog("继续打豆子作战");
            } else {
              break;
            }
          }
          await wait(200);
        }
      }
      this.stop();
    } catch (_0x5b975c) {
      logger(_0x5b975c);
    }
  }
  async getCoinBossId(_0x22c0e3) {
    try {
      xls.petTest.load(() => {});
    } catch (_0x33e42b) {}
    while (1) {
      let _0x91d5b3 = xls.petTest.getItems();
      if (_0x91d5b3.length >= 35) {
        break;
      } else {
        await wait(400);
      }
    }
    let _0x327480 = xls.petTest.getItems();
    for (let _0x3c26bf = 0; _0x3c26bf < _0x327480.length; _0x3c26bf++) {
      let _0x783de6 = _0x327480[_0x3c26bf];
      if (_0x783de6.difficulty == 5 && _0x783de6.bossType == _0x22c0e3) {
        logger(_0x783de6);
        return _0x783de6.id;
      }
    }
  }
  async actionCoin(_0x3a78e2, _0x48e45c) {
    logger(_0x3a78e2);
    if (_0x3a78e2.userId) {
      addGameLog("进行租借对战");
      let _0x549f32 = await this.send_message("cs_start_campaign_pet_fight", {
        levelId: _0x48e45c,
        hirePetList: [_0x3a78e2.userId + "_" + _0x3a78e2.type + "_" + _0x3a78e2.pos, PetManager.getInstance().getAllPets()[0].getTime],
        attachBattleSkill: [{
          petId: _0x3a78e2.petId,
          level: _0x3a78e2.level,
          skillList: _0x3a78e2.skills,
          getTime: _0x3a78e2.getTime,
          otherUid: _0x3a78e2.userId,
          type: _0x3a78e2.type
        }]
      });
      if (JSON.stringify(_0x549f32).indexOf("不是开放时间") != -1) {
        addGameLog("切换回合模式");
        _0x549f32 = await this.send_message("cs_start_campaign_pet_test", {
          levelId: _0x48e45c,
          hirePetList: [_0x3a78e2.userId + "_" + _0x3a78e2.type + "_" + _0x3a78e2.pos, PetManager.getInstance().getAllPets()[0].getTime],
          attachBattleSkill: [{
            petId: _0x3a78e2.petId,
            level: _0x3a78e2.level,
            skillList: _0x3a78e2.skills,
            getTime: _0x3a78e2.getTime,
            otherUid: _0x3a78e2.userId,
            type: _0x3a78e2.type
          }]
        });
      }
      if (JSON.stringify(_0x549f32).indexOf("没有解锁") != -1) {
        addGameLog("难度没解锁,运行停止");
        return false;
      }
      if (JSON.stringify(_0x549f32).indexOf("挑战次数已用完") != -1) {
        addGameLog("挑战次数已用完");
        return false;
      }
    } else {
      addGameLog("进行对战");
      await wait(300);
      await this.send_message("cs_new_change_petArray", {
        op: 1,
        arrayType: "campaignDefaultTeam",
        subArray: 0,
        idx: 1,
        teamUp: 0,
        fightType: 0,
        getTimeList: [_0x3a78e2.getTime, PetManager.getInstance().getAllPets()[0].getTime]
      });
      let _0x381c36 = await this.send_message("cs_start_campaign_pet_fight", {
        levelId: _0x48e45c,
        hirePetList: [_0x3a78e2.getTime, PetManager.getInstance().getAllPets()[0].getTime],
        attachBattleSkill: []
      });
      await wait(300);
      if (JSON.stringify(_0x381c36).indexOf("不是开放时间") != -1) {
        addGameLog("切换回合模式");
        _0x381c36 = await this.send_message("cs_start_campaign_pet_test", {
          levelId: _0x48e45c,
          hirePetList: [_0x3a78e2.getTime, PetManager.getInstance().getAllPets()[0].getTime],
          attachBattleSkill: []
        });
      }
      if (JSON.stringify(_0x381c36).indexOf("没有解锁") != -1) {
        addGameLog("难度没解锁,运行停止");
        return false;
      }
      if (JSON.stringify(_0x381c36).indexOf("挑战次数已用完") != -1) {
        addGameLog("挑战次数已用完,运行停止");
        return false;
      }
    }
    return true;
  }
  async coinBattle() {
    let _0x50f4d8 = await this.dispatchSelfPet("哈肯萨", ["堕龙之力", "幕夜龙王击"]);
    if (_0x50f4d8) {
      return {
        pet: _0x50f4d8,
        skillsName: ["堕龙之力", "幕夜龙王击"]
      };
    }
    let _0x29a94b = await this.dispatchSelfPet("赫尔卡长老", ["灭世歼星炮"]);
    if (_0x29a94b) {
      return {
        pet: _0x29a94b,
        skillsName: ["灭世歼星炮", "灭世歼星炮"]
      };
    }
    let _0xac4123 = await this.dispatchSelfPet("凯西恩", ["奥义断水击"]);
    if (_0xac4123) {
      return {
        pet: _0xac4123,
        skillsName: ["奥义断水击", "奥义断水击"]
      };
    }
    let _0x44cd6a = await this.dispatchSelfPet("蒙多", ["光闪击"], [5, 6, 7, 8]);
    if (_0x44cd6a) {
      return {
        pet: _0x44cd6a,
        skillsName: ["光闪击", "光闪击"]
      };
    }
    let _0x26bc9f = await this.dispatchSelfPet("蒙多", ["光闪击Plus"], [5, 6, 7, 8]);
    if (_0x26bc9f) {
      return {
        pet: _0x26bc9f,
        skillsName: ["光闪击Plus", "光闪击Plus"]
      };
    }
    let _0xd1aa02 = await this.dispatchHirePet("哈肯萨", ["堕龙之力", "幕夜龙王击"]);
    if (_0xd1aa02) {
      return {
        pet: _0xd1aa02,
        skillsName: ["堕龙之力", "幕夜龙王击"]
      };
    }
    let _0x3eedc0 = await this.dispatchHirePet("赫尔卡长老", ["灭世歼星炮"]);
    if (_0x3eedc0) {
      return {
        pet: _0x3eedc0,
        skillsName: ["灭世歼星炮", "灭世歼星炮"]
      };
    }
    let _0x453e0d = await this.dispatchHirePet("凯西恩", ["奥义断水击"]);
    if (_0x453e0d) {
      return {
        pet: _0x453e0d,
        skillsName: ["奥义断水击", "奥义断水击"]
      };
    }
    let _0xe9070b = await this.dispatchHirePet("蒙多", ["光闪击"], [5, 6, 7, 8]);
    if (_0xe9070b) {
      return {
        pet: _0xe9070b,
        skillsName: ["光闪击", "光闪击"]
      };
    }
    let _0x38f568 = await this.dispatchHirePet("蒙多", ["光闪击Plus"], [5, 6, 7, 8]);
    if (_0x38f568) {
      return {
        pet: _0x38f568,
        skillsName: ["光闪击Plus", "光闪击Plus"]
      };
    }
    addGameLog("没有符合条件的精灵进行豆子作战");
    return false;
  }
  async dispatchHirePet(_0x26a091, _0x110486, _0x4d8393) {
    let _0xedacbf = [];
    for (let _0x36be3c = 0; _0x36be3c < _0x110486.length; _0x36be3c++) {
      _0xedacbf.push(this.skillData[_0x110486[_0x36be3c]]);
    }
    let _0x974c9 = await this.fromHireGetPetbyskillIdArr(_0xedacbf, _0x4d8393);
    if (!_0x974c9) {
      addGameLog("租借列表没有: " + _0x26a091);
      return false;
    }
    addGameLog("找到租借精灵: " + _0x26a091);
    return _0x974c9;
  }
  async dispatchSelfPet(_0x59614c, _0x687254, _0x11f362) {
    let _0x5807c6 = [];
    for (let _0x30785c = 0; _0x30785c < _0x687254.length; _0x30785c++) {
      _0x5807c6.push(this.skillData[_0x687254[_0x30785c]]);
    }
    const _0x592188 = {
      skills: _0x5807c6,
      features: _0x11f362
    };
    let _0x4ae7a2 = await getGoalPets([_0x592188]);
    if (_0x4ae7a2) {
      addGameLog("精灵背包中携有" + _0x59614c + "+" + _0x687254.join("+"));
      return _0x4ae7a2;
    } else {
      addGameLog("背包 没有" + _0x59614c + "+" + _0x687254.join("+"));
      return false;
    }
  }
  async fromHireGetPetbyskillIdArr(_0x2768fd, _0x49487c) {
    addGameLog("检测租借列表中..稍等");
    let _0x5b5a4a = await this.send_message("cs_new_get_hire_pet_list", {
      friendPageNo: 1,
      friendPageSize: 1000,
      teamPageNo: 1,
      teamPageSize: 1000
    });
    let _0x480e4d = _0x5b5a4a.friendHireList;
    for (let _0x15b928 = 0; _0x15b928 < _0x480e4d.length; _0x15b928++) {
      let _0x2c84bc = _0x480e4d[_0x15b928];
      const _0x3f2834 = {
        type: _0x2c84bc.type,
        pos: _0x2c84bc.pos,
        targetUid: _0x2c84bc.userId
      };
      let _0x405a64 = await this.send_message("cs_new_get_hire_pet_info", _0x3f2834);
      let _0x1feea2 = _0x405a64.pet.skills;
      let _0x23b11a = false;
      for (let _0x5581cb = 0; _0x5581cb < _0x2768fd.length; _0x5581cb++) {
        if (_0x49487c) {
          if (_0x49487c.indexOf(_0x405a64.pet.featureId) != -1) {
            if (_0x1feea2.indexOf(_0x2768fd[_0x5581cb]) != -1) {
              _0x23b11a = true;
            } else {
              _0x23b11a = false;
            }
          }
        } else if (_0x1feea2.indexOf(_0x2768fd[_0x5581cb]) != -1) {
          _0x23b11a = true;
        } else {
          _0x23b11a = false;
        }
      }
      if (_0x23b11a) {
        _0x2c84bc.skills = _0x405a64.pet.skills;
        return _0x2c84bc;
      }
    }
    let _0x5c4ab9 = _0x5b5a4a.teamHireList;
    for (let _0x171b07 = 0; _0x171b07 < _0x5c4ab9.length; _0x171b07++) {
      let _0x26b14d = _0x5c4ab9[_0x171b07];
      const _0x21dee0 = {
        type: _0x26b14d.type,
        pos: _0x26b14d.pos,
        targetUid: _0x26b14d.userId
      };
      let _0x63d725 = await this.send_message("cs_new_get_hire_pet_info", _0x21dee0);
      let _0x3fb865 = _0x63d725.pet.skills;
      let _0x1aa57f = false;
      for (let _0x5c6348 = 0; _0x5c6348 < _0x2768fd.length; _0x5c6348++) {
        if (_0x3fb865.indexOf(_0x2768fd[_0x5c6348]) != -1) {
          _0x1aa57f = true;
        } else {
          _0x1aa57f = false;
        }
      }
      if (_0x1aa57f) {
        _0x26b14d.skills = _0x63d725.pet.skills;
        return _0x26b14d;
      }
    }
    return false;
  }
  async checkSkillPetTeam(_0x59d1cc, _0x2371bc) {
    let _0x46a000 = PetManager.getInstance().getAllPets();
    for (let _0x2866ec = 0; _0x2866ec < _0x46a000.length; _0x2866ec++) {
      let _0x4e67a0 = _0x46a000[_0x2866ec];
      let _0x257edc = _0x4e67a0.skills;
      let _0x5491d0 = false;
      for (let _0x5a6253 = 0; _0x5a6253 < _0x59d1cc.length; _0x5a6253++) {
        if (_0x2371bc) {
          if (_0x2371bc.indexOf(_0x4e67a0.featureId) != -1) {
            if (_0x257edc.indexOf(_0x59d1cc[_0x5a6253]) != -1) {
              _0x5491d0 = true;
            } else {
              _0x5491d0 = false;
            }
          }
        } else if (_0x257edc.indexOf(_0x59d1cc[_0x5a6253]) != -1) {
          _0x5491d0 = true;
        } else {
          _0x5491d0 = false;
        }
      }
      if (_0x5491d0) {
        return _0x4e67a0;
      }
    }
    return false;
  }
}
class dianfeng extends SuperTask {
  constructor() {
    super();
    this.nowName = "巅峰挂机";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_pvp_notify_match_success"
    }];
    this.PvpC = 0;
    this.giveUp = 1;
    this.dianfengStyle = "kuangye";
    this.nowUi;
  }
  start() {
    super.start();
    let _0x9746b = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x5e7efd = SimpleAlertUi({
        height: 250
      });
      _0x9746b.alertWin = _0x5e7efd;
      const _0x5e11d5 = {
        text: "确定进行[巅峰]模式挂机吗?",
        y: _0x5e7efd.height / 11
      };
      var _0x1df5a7 = createLabel(_0x5e11d5);
      _0x1df5a7.x = _0x5e7efd.width / 2 - _0x1df5a7.width / 2;
      _0x5e7efd.addChild(_0x1df5a7);
      const _0x9cf371 = {
        text: "[初次安装也许会卡,重启即可]",
        y: _0x1df5a7.y + 30,
        textColor: 16776960
      };
      var _0x117557 = createLabel(_0x9cf371);
      _0x117557.x = _0x5e7efd.width / 2 - _0x117557.width / 2;
      _0x5e7efd.addChild(_0x117557);
      const _0x58d8b6 = {
        text: "十回合自动投降",
        x: 45,
        y: _0x117557.y + 32
      };
      let _0xedf0a6 = createLabel(_0x58d8b6);
      const _0x49d1e0 = {
        x: 76,
        y: _0xedf0a6.y + _0xedf0a6.height + 10,
        selected: false,
        storageKey: "jingji"
      };
      let _0x566eb6 = createRadio(_0x49d1e0);
      _0x5e7efd.addChild(_0x566eb6);
      const _0x5e4731 = {
        text: "竞技",
        x: _0x566eb6.width + _0x566eb6.x + 10,
        y: _0xedf0a6.y + _0xedf0a6.height + 10
      };
      var _0xab36da = createLabel(_0x5e4731);
      _0x5e7efd.addChild(_0xab36da);
      const _0x14c500 = {
        x: _0xab36da.width + _0xab36da.x + 20,
        y: _0xedf0a6.y + _0xedf0a6.height + 10,
        selected: true,
        storageKey: "kuangye"
      };
      let _0x52de7b = createRadio(_0x14c500);
      _0x5e7efd.addChild(_0x52de7b);
      const _0x10a1c9 = {
        text: "狂野",
        x: _0x52de7b.width + _0x52de7b.x + 10,
        y: _0xedf0a6.y + _0xedf0a6.height + 10
      };
      var _0x23bdfb = createLabel(_0x10a1c9);
      _0x5e7efd.addChild(_0x23bdfb);
      const _0x353968 = {
        x: _0xedf0a6.x + _0xedf0a6.width + 15,
        y: _0x117557.y + 30,
        selected: true
      };
      let _0x111545 = createToggle(_0x353968);
      _0x5e7efd.addChild(_0xedf0a6);
      _0x5e7efd.addChild(_0x111545);
      const _0x4d3ff9 = {
        text: "对战次数",
        x: 60,
        y: _0x1df5a7.y + _0x1df5a7.height + 110
      };
      var _0x2fd710 = createLabel(_0x4d3ff9);
      _0x5e7efd.addChild(_0x2fd710);
      const _0x16be55 = {
        prompt: "对战次数",
        width: 100,
        x: 30 + _0x2fd710.width + _0x2fd710.x,
        y: _0x1df5a7.y + _0x1df5a7.height + 105,
        storageKey: "inputDf"
      };
      var _0xe6af36 = createEdit(_0x16be55);
      _0x5e7efd.addChild(_0xe6af36);
      _0x5e7efd.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x9746b.stop();
      }, function () {
        if (!_0x111545.selected) {
          _0x9746b.giveUp = 0;
        }
        if (_0x566eb6.selected) {
          _0x9746b.dianfengStyle = "jingji";
          localStorage.setItem("jingji", true);
        }
        if (_0x52de7b.selected) {
          _0x9746b.dianfengStyle = "kuangye";
          localStorage.setItem("kuangye", true);
        }
        if (isNaN(parseInt(_0xe6af36.text))) {
          MFC.bubbleAlert.showAlert("请输入有效对战次数");
          return true;
        }
        localStorage.setItem("inputDf", parseInt(_0xe6af36.text));
        _0x9746b.inputDf = parseInt(_0xe6af36.text);
        _0x9746b.prcessBody();
      }], null);
      _0x5e7efd.showAlert();
    });
  }
  getFirstSkillId(_0x4317b1) {
    let _0xd550d4 = _0x4317b1.useSkills;
    for (var _0x418bee = 0; _0x418bee < _0xd550d4.length; _0x418bee++) {
      let _0x25930a = petConfig.SkillConfig.getDef(_0xd550d4[_0x418bee].id);
      if (_0xd550d4[_0x418bee].crtPP > 0 && _0x25930a.atkType != 5 && _0x25930a.atkType != 6) {
        return _0xd550d4[_0x418bee].id;
      }
    }
    return 0;
  }
  getPetIndex(_0x2222ea, _0x57a160) {
    for (var _0x101bc9 = 0; _0x101bc9 < _0x2222ea.length; _0x101bc9++) {
      var _0x26a73a = _0x2222ea[_0x101bc9];
      if (_0x26a73a.crtHp > 0 && _0x101bc9 != _0x57a160) {
        return _0x101bc9;
      }
    }
    return 0;
  }
  async changePet(_0x136eae, _0x38f1eb) {
    let _0x14e781 = this.getPetIndex(_0x136eae, _0x38f1eb);
    await this.send_message("cs_online_load_battle_result", {
      groupId: ""
    });
    addGameLog("切换精灵index " + _0x14e781);
    const _0xed43c = {
      petIndex: _0x14e781
    };
    const _0x21a78b = {
      opType: 2,
      data: _0xed43c,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x21a78b);
    let _0x255bbf = await this.waitEvent("sc_battle_notify_round_result");
    let _0x25eeba = JSON.parse(_0x255bbf.gameBody[_0x255bbf.gameBody.length - 1].raw);
    _0x255bbf.gameBody.splice(0, _0x255bbf.gameBody.length);
    return _0x25eeba;
  }
  async V_GetLevel(_0x15bc68) {
    let _0x2df26b = xls.pvpLevel.getItems();
    var _0x43a8bc = 0;
    var _0x3fde65 = 0;
    var _0x43f434 = xls.pvpLevel.getItem(_0x2df26b.length).newReqCredit;
    switch (_0x15bc68) {
      case 1:
        _0x43a8bc = MFC.userInfo.pvpPoint;
        _0x3fde65 = false && _0x43a8bc >= _0x43f434 ? 1 : 0;
        break;
      case 2:
        _0x43a8bc = MFC.userInfo.pvpPointWild;
        _0x3fde65 = false && _0x43a8bc >= _0x43f434 ? 1 : 0;
    }
    if (_0x3fde65 == 1) {
      return _0x2df26b.length;
    }
    for (var _0x11796f = 1, _0x397a9b = _0x2df26b, _0x36d309 = 0; _0x36d309 < _0x397a9b.length - 1; _0x36d309++) {
      if (!(_0x43a8bc >= _0x397a9b[_0x36d309].newReqCredit)) {
        return _0x11796f || 1;
      }
      _0x11796f = _0x397a9b[_0x36d309].id;
    }
    return _0x11796f || 1;
  }
  getHaveGet(_0x7e4546) {
    let _0x1d26e7 = MFC.attr.getAttr(_0x7e4546 >= 32 ? 5226122 : 7924);
    let _0x3adcbe = _0x7e4546 >= 32 ? _0x7e4546 - 32 + 1 : _0x7e4546;
    return BitUtils.getBit(_0x1d26e7, _0x3adcbe);
  }
  async getRankAward() {
    let _0x4bed84 = await this.V_GetLevel(1);
    let _0x575252 = await this.V_GetLevel(2);
    let _0x2bf8c5 = Math.max(_0x4bed84, _0x575252);
    let _0x3b8be8 = xls.pvpLevel.getItems();
    for (let _0x34c0ca = 0; _0x34c0ca < _0x3b8be8.length; _0x34c0ca++) {
      if (_0x2bf8c5 >= _0x3b8be8[_0x34c0ca].id && _0x3b8be8[_0x34c0ca].id != 1) {
        let _0x61da55 = this.getHaveGet(_0x3b8be8[_0x34c0ca].id);
        if (!_0x61da55) {
          addGameLog("满足段位: " + _0x3b8be8[_0x34c0ca].name + ",领取奖励!");
          const _0x44ee17 = {
            id: _0x3b8be8[_0x34c0ca].id
          };
          await this.send_message("cs_ladder_rank_get_award", _0x44ee17);
        }
      }
    }
    if (MFC.attr.getAttr(11923) == 3) {
      addGameLog("领取 每日3场巅峰胜利奖励!");
      await this.send_message("cs_get_festival_carnival_award", {
        carnivalId: 10024
      });
    }
    if (MFC.attr.getAttr(11924) == 5) {
      addGameLog("领取 每日5场巅峰对战奖励!");
      await this.send_message("cs_get_festival_carnival_award", {
        carnivalId: 10025
      });
    }
    if (MFC.attr.getAttr(7194) == 1) {
      addGameLog("领取 赛季皮肤卡!");
      await this.send_message("cs_get_tianti_extra_reward", {});
    }
  }
  async prcessBody() {
    try {
      await wait(1200);
      let _0x35ff4d = 0;
      let _0x42efc6 = 0;
      let _0x2d1e17 = new Date().getTime() / 1000;
      this.nowUi = createLabel({
        text: "巅峰  回合数:0|耗时:0分0秒|总局数:" + _0x42efc6 + "|胜场:" + _0x35ff4d + "|胜率:" + 0 .toFixed(2) + "% ",
        y: 65,
        textColor: 16776960
      });
      this.nowUi.background = true;
      this.nowUi.backgroundColor = 43775;
      this.nowUi.x = MFC.rootLayer.width / 2 - this.nowUi.width / 2;
      MFC.rootLayer.addChild(this.nowUi);
      while (1) {
        MFC.moduleManager.closeModule(249);
        await wait(300);
        if (winLog.x < 0) {
          winLog.onOpenPanel();
        }
        addGameLog("开始匹配....");
        if (this.dianfengStyle.includes("kuangye")) {
          var _0x36d9a5 = await this.send_message("cs_pvp_match_rival", {
            pvpType: 5
          });
          if (JSON.stringify(_0x36d9a5).includes("匹配类型与巅峰段位不匹配")) {
            var _0x36d9a5 = await this.send_message("cs_pvp_match_rival", {
              pvpType: 2
            });
          }
        }
        if (this.dianfengStyle.includes("jingji")) {
          var _0x36d9a5 = await this.send_message("cs_pvp_match_rival", {
            pvpType: 2001
          });
          if (JSON.stringify(_0x36d9a5).includes("匹配类型与巅峰段位不匹配")) {
            var _0x36d9a5 = await this.send_message("cs_pvp_match_rival", {
              pvpType: 2000
            });
          }
        }
        if (JSON.stringify(_0x36d9a5).includes("内部错误")) {
          MFC.show.alert("早退行为被限制!~,请稍后重试");
          this.stop();
          return;
        }
        let _0x5b1964 = await this.waitEvent("sc_pvp_notify_match_success");
        var _0x36d9a5 = JSON.parse(_0x5b1964.gameBody[_0x5b1964.gameBody.length - 1].raw);
        _0x5b1964.gameBody.splice(0, _0x5b1964.gameBody.length);
        _0x2d1e17 = new Date().getTime() / 1000;
        let _0x378d0b = _0x36d9a5.teamA.players[0].userId == _0x36d9a5.uid__ ? _0x36d9a5.teamB.players[0].rickNick : _0x36d9a5.teamA.players[0].rickNick;
        addGameLog("匹配对手:" + _0x378d0b + "  对战中...");
        let _0x96f6d4 = await this.initBattle();
        while (!_0x96f6d4.result.result) {
          if (this.giveUp && _0x96f6d4.result.roundNum >= 9 || _0x96f6d4.result.roundNum >= 30) {
            addGameLog("十回合投降/30回合 发起投降");
            await this.send_message("cs_online_player_surrender", {});
            let _0x549644 = await this.waitEvent("sc_battle_notify_round_result");
            _0x549644.gameBody.splice(0, _0x549644.gameBody.length);
            break;
          }
          let _0x1314d7 = _0x96f6d4.result.playerInfos.find(_0xff2e33 => _0xff2e33.uid == _0x96f6d4.uid__);
          let _0x491ce4 = _0x1314d7.crtPetIndex;
          let _0x2ba468 = _0x96f6d4.result.playerInfos.find(_0x43d439 => _0x43d439.uid == _0x96f6d4.uid__).nextRoundOP;
          if (_0x2ba468 == 3) {
            addGameLog("被击败,更换精灵!");
            _0x96f6d4 = await this.changePet(_0x1314d7.petInfos, _0x491ce4);
          } else {
            let _0x317e30 = _0x1314d7.petInfos[_0x491ce4];
            let _0x577e26 = this.getFirstSkillId(_0x317e30);
            await wait(1500);
            _0x96f6d4 = await this.useSkill(_0x577e26);
          }
        }
        _0x42efc6++;
        if (_0x96f6d4.result.result == 1) {
          addGameLog("战斗胜利!");
          _0x35ff4d++;
        } else {
          addGameLog("战斗失败!");
        }
        let _0x82446c = new Date().getTime() / 1000;
        var _0x38aa8d = Math.floor((_0x82446c - _0x2d1e17) / 60);
        var _0x4730b6 = ((_0x82446c - _0x2d1e17) % 60).toFixed(2);
        addGameLog("回合数:" + _0x96f6d4.result.roundNum + "|耗时:" + _0x38aa8d + "分" + _0x4730b6 + "秒|总局数:" + _0x42efc6 + "|胜场:" + _0x35ff4d + "|胜率:" + (_0x35ff4d / _0x42efc6 * 100).toFixed(2) + "%");
        MFC.rootLayer.removeChild(this.nowUi);
        this.nowUi.text = "巅峰 回合数:" + _0x96f6d4.result.roundNum + "|耗时:" + _0x38aa8d + "分" + _0x4730b6 + "秒|总局数:" + _0x42efc6 + "|胜场:" + _0x35ff4d + "|胜率:" + (_0x35ff4d / _0x42efc6 * 100).toFixed(2) + "% ";
        MFC.rootLayer.addChild(this.nowUi);
        await wait(1300);
        await this.send_message("cs_get_effort_value", {});
        await this.send_message("cs_query_some_fight_info", {
          type: 1
        });
        await this.send_message("cs_query_some_fight_info", {
          type: 2
        });
        await this.getRankAward();
        if (_0x42efc6 >= this.inputDf) {
          addGameLog("到达目标局数,竞技结束");
          break;
        }
      }
      this.stop();
    } catch (_0x145073) {
      logger(_0x145073);
    }
  }
}
class luandou extends SuperTask {
  constructor() {
    super();
    this.nowName = "乱斗挂机";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_pvp_notify_match_success"
    }, {
      watchEventName: "sc_pvp_notify_enter_battle"
    }];
    this.PvpC = 0;
    this.giveUp = 1;
    this.nowUi;
    this.luandType = 0;
  }
  start() {
    super.start();
    let _0x48b1ea = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x302448 = SimpleAlertUi({
        height: 250
      });
      const _0x17b00d = {
        text: "确定进行[乱斗]挂机吗?\n等战斗结束再停脚本 以防禁赛",
        y: _0x302448.height / 11
      };
      var _0x59aeae = createLabel(_0x17b00d);
      _0x59aeae.x = _0x302448.width / 2 - _0x59aeae.width / 2;
      _0x302448.addChild(_0x59aeae);
      const _0x4f57e4 = {
        x: 57,
        y: _0x59aeae.y + _0x59aeae.height + 10,
        selected: false,
        storageKey: "luandou1"
      };
      let _0x364b80 = createRadio(_0x4f57e4);
      _0x302448.addChild(_0x364b80);
      const _0x13e4e6 = {
        text: "经典模式",
        x: _0x364b80.width + _0x364b80.x + 10,
        y: _0x59aeae.y + _0x59aeae.height + 10
      };
      var _0x32de24 = createLabel(_0x13e4e6);
      _0x302448.addChild(_0x32de24);
      const _0x5f3d66 = {
        x: _0x32de24.width + _0x32de24.x + 20,
        y: _0x59aeae.y + _0x59aeae.height + 10,
        selected: true,
        storageKey: "luandou2"
      };
      let _0x25ced3 = createRadio(_0x5f3d66);
      _0x302448.addChild(_0x25ced3);
      const _0x45ca4b = {
        text: "主场模式",
        x: _0x25ced3.width + _0x25ced3.x + 10,
        y: _0x59aeae.y + _0x59aeae.height + 10
      };
      var _0x32790b = createLabel(_0x45ca4b);
      _0x302448.addChild(_0x32790b);
      const _0x511097 = {
        text: "对战次数",
        x: 60,
        y: _0x59aeae.y + _0x59aeae.height + 45
      };
      var _0x2182f3 = createLabel(_0x511097);
      _0x302448.addChild(_0x2182f3);
      const _0x474e3f = {
        prompt: "对战次数",
        width: 100,
        x: 30 + _0x2182f3.width + _0x2182f3.x,
        y: _0x59aeae.y + _0x59aeae.height + 40,
        storageKey: "inputld"
      };
      var _0x281901 = createEdit(_0x474e3f);
      _0x302448.addChild(_0x281901);
      var _0x2a7d83 = createLabel({
        text: "十回合自动投降",
        x: 57
      });
      _0x2a7d83.y = _0x302448.height / 2 - _0x2a7d83.height / 2 + 20;
      const _0x2cc2e7 = {
        x: _0x2a7d83.x + _0x2a7d83.width + 15,
        y: _0x302448.height / 2 - _0x2a7d83.height / 2 + 20,
        selected: true
      };
      let _0x14b3b4 = createToggle(_0x2cc2e7);
      _0x302448.addChild(_0x2a7d83);
      _0x302448.addChild(_0x14b3b4);
      _0x302448.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x48b1ea.stop();
      }, function () {
        if (isNaN(parseInt(_0x281901.text))) {
          MFC.bubbleAlert.showAlert("请输入有效对战次数");
          return true;
        }
        if (!_0x14b3b4.selected) {
          _0x48b1ea.giveUp = 0;
        }
        if (_0x364b80.selected) {
          _0x48b1ea.luandType = 3;
          localStorage.setItem("luandou1", true);
        }
        if (_0x25ced3.selected) {
          _0x48b1ea.luandType = 16;
          localStorage.setItem("luandou2", true);
        }
        localStorage.setItem("inputld", parseInt(_0x281901.text));
        _0x48b1ea.inputld = parseInt(_0x281901.text);
        _0x48b1ea.prcessBody();
      }], null);
      _0x302448.showAlert();
    });
  }
  getFirstSkillId(_0x34b60f) {
    let _0x3ea230 = _0x34b60f.useSkills;
    for (var _0x3b8a34 = 0; _0x3b8a34 < _0x3ea230.length; _0x3b8a34++) {
      let _0x216499 = petConfig.SkillConfig.getDef(_0x3ea230[_0x3b8a34].id);
      if (_0x3ea230[_0x3b8a34].crtPP > 0 && _0x216499.atkType != 5 && _0x216499.atkType != 6) {
        return _0x3ea230[_0x3b8a34].id;
      }
    }
    return 0;
  }
  getPetIndex(_0x3c25f1, _0x6cb264) {
    for (var _0x27ce2e = 0; _0x27ce2e < _0x3c25f1.length; _0x27ce2e++) {
      var _0x568b30 = _0x3c25f1[_0x27ce2e];
      if (_0x568b30.crtHp > 0 && _0x27ce2e != _0x6cb264) {
        return _0x27ce2e;
      }
    }
    return 0;
  }
  async changePet(_0x45c72a, _0x2e5ccc) {
    let _0x51945c = this.getPetIndex(_0x45c72a, _0x2e5ccc);
    await this.send_message("cs_online_load_battle_result", {
      groupId: ""
    });
    addGameLog("切换精灵index " + _0x51945c);
    const _0x265f06 = {
      petIndex: _0x51945c
    };
    const _0x450b97 = {
      opType: 2,
      data: _0x265f06,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x450b97);
    let _0x1af8a6 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x45b485 = JSON.parse(_0x1af8a6.gameBody[_0x1af8a6.gameBody.length - 1].raw);
    _0x1af8a6.gameBody.splice(0, _0x1af8a6.gameBody.length);
    return _0x45b485;
  }
  async prcessBody() {
    try {
      await wait(1200);
      let _0x4e1a09 = 0;
      let _0x1d4a8a = 0;
      let _0x54a888 = new Date().getTime() / 1000;
      this.nowUi = createLabel({
        text: "乱斗 回合数:0|耗时:0分0秒|总局数:" + _0x1d4a8a + "|胜场:" + _0x4e1a09 + "|胜率:" + 0 .toFixed(2) + "%",
        y: 65,
        textColor: 16776960
      });
      this.nowUi.background = true;
      this.nowUi.backgroundColor = 6710886;
      this.nowUi.x = MFC.rootLayer.width / 2 - this.nowUi.width / 2;
      MFC.rootLayer.addChild(this.nowUi);
      while (1) {
        await this.send_message("cs_query_pvp_melee", {});
        MFC.moduleManager.closeModule(1368);
        await wait(300);
        if (winLog.x < 0) {
          winLog.onOpenPanel();
        }
        var _0x3d80cd = await this.send_message("cs_pvp_match_rival", {
          pvpType: this.luandType
        });
        if (JSON.stringify(_0x3d80cd).includes("内部错误")) {
          MFC.show.alert("早退行为被限制!~,请稍后重试");
          this.stop();
          return;
        }
        let _0x3d81b2 = await this.waitEvent("sc_pvp_notify_match_success");
        var _0x3d80cd = JSON.parse(_0x3d81b2.gameBody[_0x3d81b2.gameBody.length - 1].raw);
        _0x3d81b2.gameBody.splice(0, _0x3d81b2.gameBody.length);
        _0x54a888 = new Date().getTime() / 1000;
        let _0x2fcf48 = _0x3d80cd.teamA.players[0].userId == _0x3d80cd.uid__ ? _0x3d80cd.teamB.players[0].rickNick : _0x3d80cd.teamA.players[0].rickNick;
        addGameLog("匹配对手:" + _0x2fcf48 + "  对战中...");
        let _0x27ba8d = await this.initBattle();
        while (!_0x27ba8d.result.result) {
          if (this.giveUp && _0x27ba8d.result.roundNum >= 9 || _0x27ba8d.result.roundNum >= 30) {
            addGameLog("十回合投降/30回合 发起投降");
            await this.send_message("cs_online_player_surrender", {});
            let _0x2dce38 = await this.waitEvent("sc_battle_notify_round_result");
            _0x2dce38.gameBody.splice(0, _0x2dce38.gameBody.length);
            break;
          }
          let _0x553673 = _0x27ba8d.result.playerInfos.find(_0x3f2032 => _0x3f2032.uid == _0x27ba8d.uid__);
          let _0x579c58 = _0x553673.crtPetIndex;
          let _0xb1f2a1 = _0x27ba8d.result.playerInfos.find(_0x518fc3 => _0x518fc3.uid == _0x27ba8d.uid__).nextRoundOP;
          if (_0xb1f2a1 == 3) {
            addGameLog("被击败,更换精灵!");
            _0x27ba8d = await this.changePet(_0x553673.petInfos, _0x579c58);
          } else {
            let _0x22ef39 = _0x553673.petInfos[_0x579c58];
            let _0x12bcbc = this.getFirstSkillId(_0x22ef39);
            await wait(300);
            _0x27ba8d = await this.useSkill(_0x12bcbc);
          }
        }
        _0x1d4a8a++;
        if (_0x27ba8d.result.result == 1) {
          addGameLog("战斗胜利!");
          _0x4e1a09++;
        } else {
          addGameLog("战斗失败!");
        }
        let _0x7c54fd = new Date().getTime() / 1000;
        var _0x1f88c9 = Math.floor((_0x7c54fd - _0x54a888) / 60);
        var _0x2f1fad = ((_0x7c54fd - _0x54a888) % 60).toFixed(2);
        addGameLog("回合数:" + _0x27ba8d.result.roundNum + "|耗时:" + _0x1f88c9 + "分" + _0x2f1fad + "秒|总局数:" + _0x1d4a8a + "|胜场:" + _0x4e1a09 + "|胜率:" + (_0x4e1a09 / _0x1d4a8a * 100).toFixed(2) + "%");
        MFC.rootLayer.removeChild(this.nowUi);
        this.nowUi.text = "乱斗 回合数:" + _0x27ba8d.result.roundNum + "|耗时:" + _0x1f88c9 + "分" + _0x2f1fad + "秒|总局数:" + _0x1d4a8a + "|胜场:" + _0x4e1a09 + "|胜率:" + (_0x4e1a09 / _0x1d4a8a * 100).toFixed(2) + "%";
        MFC.rootLayer.addChild(this.nowUi);
        await wait(1300);
        await this.send_message("cs_get_effort_value", {});
        await this.send_message("cs_query_some_fight_info", {
          type: 1
        });
        await this.send_message("cs_query_some_fight_info", {
          type: 2
        });
        await this.send_message("cs_query_pvp_melee", {});
        if (_0x1d4a8a >= this.inputld) {
          addGameLog("到达目标局数,乱斗结束");
          break;
        }
      }
      this.stop();
    } catch (_0x35a441) {
      logger(_0x35a441);
    }
  }
}
class jingji extends SuperTask {
  constructor() {
    super();
    this.nowName = "竞技挂机";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }, {
      watchEventName: "sc_pvp_notify_match_success"
    }, {
      watchEventName: "sc_pvp_notify_enter_battle"
    }];
    this.PvpC = 0;
    this.giveUp = 1;
    this.nowUi;
    this.luandType = 0;
  }
  start() {
    super.start();
    let _0x387d74 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x451ac8 = SimpleAlertUi({
        height: 250
      });
      const _0xf7ef22 = {
        text: "确定进行[竞技]挂机吗?\n等战斗结束再停脚本 以防禁赛",
        y: _0x451ac8.height / 11
      };
      var _0x6f1715 = createLabel(_0xf7ef22);
      _0x6f1715.x = _0x451ac8.width / 2 - _0x6f1715.width / 2;
      _0x451ac8.addChild(_0x6f1715);
      const _0x130a57 = {
        text: "对战次数",
        x: 60,
        y: _0x6f1715.y + _0x6f1715.height + 45
      };
      var _0x3cf8e2 = createLabel(_0x130a57);
      _0x451ac8.addChild(_0x3cf8e2);
      const _0x31b16f = {
        prompt: "对战次数",
        width: 100,
        x: 30 + _0x3cf8e2.width + _0x3cf8e2.x,
        y: _0x6f1715.y + _0x6f1715.height + 40,
        storageKey: "inputjj"
      };
      var _0x4d2ee9 = createEdit(_0x31b16f);
      _0x451ac8.addChild(_0x4d2ee9);
      var _0xcb9448 = createLabel({
        text: "十回合自动投降",
        x: 57
      });
      _0xcb9448.y = _0x451ac8.height / 2 - _0xcb9448.height / 2 + 20;
      const _0x17ba2c = {
        x: _0xcb9448.x + _0xcb9448.width + 15,
        y: _0x451ac8.height / 2 - _0xcb9448.height / 2 + 20,
        selected: true
      };
      let _0x2547ee = createToggle(_0x17ba2c);
      _0x451ac8.addChild(_0xcb9448);
      _0x451ac8.addChild(_0x2547ee);
      _0x451ac8.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x387d74.stop();
      }, function () {
        if (isNaN(parseInt(_0x4d2ee9.text))) {
          MFC.bubbleAlert.showAlert("请输入有效对战次数");
          return true;
        }
        if (!_0x2547ee.selected) {
          _0x387d74.giveUp = 0;
        }
        localStorage.setItem("inputjj", parseInt(_0x4d2ee9.text));
        _0x387d74.inputjj = parseInt(_0x4d2ee9.text);
        _0x387d74.prcessBody();
      }], null);
      _0x451ac8.showAlert();
    });
  }
  getFirstSkillId(_0x374afb) {
    let _0x1d0028 = _0x374afb.useSkills;
    for (var _0x56c64d = 0; _0x56c64d < _0x1d0028.length; _0x56c64d++) {
      let _0x8931ce = petConfig.SkillConfig.getDef(_0x1d0028[_0x56c64d].id);
      if (_0x1d0028[_0x56c64d].crtPP > 0 && _0x8931ce.atkType != 5 && _0x8931ce.atkType != 6) {
        return _0x1d0028[_0x56c64d].id;
      }
    }
    return 0;
  }
  getPetIndex(_0x493da6, _0x17ca7e) {
    for (var _0x42519a = 0; _0x42519a < _0x493da6.length; _0x42519a++) {
      var _0x3c08cd = _0x493da6[_0x42519a];
      if (_0x3c08cd.crtHp > 0 && _0x42519a != _0x17ca7e) {
        return _0x42519a;
      }
    }
    return 0;
  }
  async changePet(_0x2c0938, _0x39f9b9) {
    let _0x14e26e = this.getPetIndex(_0x2c0938, _0x39f9b9);
    await this.send_message("cs_online_load_battle_result", {
      groupId: ""
    });
    addGameLog("切换精灵index " + _0x14e26e);
    const _0x55f125 = {
      petIndex: _0x14e26e
    };
    const _0x5a3539 = {
      opType: 2,
      data: _0x55f125,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x5a3539);
    let _0x52c921 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x458990 = JSON.parse(_0x52c921.gameBody[_0x52c921.gameBody.length - 1].raw);
    _0x52c921.gameBody.splice(0, _0x52c921.gameBody.length);
    return _0x458990;
  }
  async getCastAward() {
    let _0x59052a = [{
      id: 11650,
      pos: 0,
      type: 1,
      count: 1,
      name: "每日1胜"
    }, {
      id: 11650,
      pos: 1,
      type: 1,
      count: 2,
      name: "每日2胜"
    }, {
      id: 20110,
      pos: 0,
      type: 2,
      count: 6,
      name: "每周6胜"
    }, {
      id: 20110,
      pos: 1,
      type: 2,
      count: 12,
      name: "每周12胜"
    }, {
      id: 20110,
      pos: 2,
      type: 2,
      count: 18,
      name: "每周18胜"
    }];
    for (let _0x3ecfb0 = 0; _0x3ecfb0 < _0x59052a.length; _0x3ecfb0++) {
      await this.gainCastPosAward(_0x59052a[_0x3ecfb0]);
    }
  }
  async gainCastPosAward(_0x5f5880) {
    if (MFC.attr.getAttr(_0x5f5880.id) >= _0x5f5880.count && this.getCastFlag(_0x5f5880.id + 1, _0x5f5880.pos)) {
      addGameLog("领取 " + _0x5f5880.name + "竞技奖励!");
      const _0x546622 = {
        type: _0x5f5880.type,
        pos: _0x5f5880.pos + 1
      };
      await this.send_message("cs_get_cast_reward", _0x546622);
    }
  }
  getCastFlag(_0x37203d, _0x275866) {
    var _0x4ef23b = MFC.attr.getAttr(_0x37203d);
    var _0x1a1e9d = BitUtils.getBit(_0x4ef23b, _0x275866 + 1);
    var _0x42feb9 = _0x1a1e9d ? -1 : 1;
    if (_0x42feb9 == 1) {
      return true;
    }
    return false;
  }
  async prcessBody() {
    try {
      await wait(1200);
      let _0x5e1509 = 0;
      let _0x5d9064 = 0;
      let _0x32a589 = new Date().getTime() / 1000;
      this.nowUi = createLabel({
        text: "竞技  回合数:0|耗时:0分0秒|总局数:" + _0x5d9064 + "|胜场:" + _0x5e1509 + "|胜率:" + 0 .toFixed(2) + "% 当日获取竞技币数:" + MFC.attr.getAttr(2100462),
        y: 65,
        textColor: 16776960
      });
      this.nowUi.background = true;
      this.nowUi.backgroundColor = 43775;
      this.nowUi.x = MFC.rootLayer.width / 2 - this.nowUi.width / 2;
      MFC.rootLayer.addChild(this.nowUi);
      while (1) {
        MFC.moduleManager.closeModule(249);
        await wait(300);
        if (winLog.x < 0) {
          winLog.onOpenPanel();
        }
        var _0x4311bc = await this.send_message("cs_pvp_match_rival", {
          pvpType: 9
        });
        if (JSON.stringify(_0x4311bc).includes("内部错误")) {
          MFC.show.alert("早退行为被限制!~,请稍后重试");
          this.stop();
          return;
        }
        let _0x3e5e4a = await this.waitEvent("sc_pvp_notify_match_success");
        var _0x4311bc = JSON.parse(_0x3e5e4a.gameBody[_0x3e5e4a.gameBody.length - 1].raw);
        _0x3e5e4a.gameBody.splice(0, _0x3e5e4a.gameBody.length);
        _0x32a589 = new Date().getTime() / 1000;
        let _0x8cfce2 = _0x4311bc.teamA.players[0].userId == _0x4311bc.uid__ ? _0x4311bc.teamB.players[0].rickNick : _0x4311bc.teamA.players[0].rickNick;
        addGameLog("匹配对手:" + _0x8cfce2 + "  对战中...");
        let _0x6fb506 = await this.initBattle();
        while (!_0x6fb506.result.result) {
          if (this.giveUp && _0x6fb506.result.roundNum >= 9 || _0x6fb506.result.roundNum >= 30) {
            addGameLog("十回合投降/30回合 发起投降");
            await this.send_message("cs_online_player_surrender", {});
            let _0x580238 = await this.waitEvent("sc_battle_notify_round_result");
            _0x580238.gameBody.splice(0, _0x580238.gameBody.length);
            break;
          }
          let _0x1a4d49 = _0x6fb506.result.playerInfos.find(_0x3856c2 => _0x3856c2.uid == _0x6fb506.uid__);
          let _0x516ae7 = _0x1a4d49.crtPetIndex;
          let _0x2da40a = _0x6fb506.result.playerInfos.find(_0x27a264 => _0x27a264.uid == _0x6fb506.uid__).nextRoundOP;
          if (_0x2da40a == 3) {
            addGameLog("被击败,更换精灵!");
            _0x6fb506 = await this.changePet(_0x1a4d49.petInfos, _0x516ae7);
          } else {
            let _0x3fe269 = _0x1a4d49.petInfos[_0x516ae7];
            let _0x389fc7 = this.getFirstSkillId(_0x3fe269);
            await wait(300);
            _0x6fb506 = await this.useSkill(_0x389fc7);
          }
        }
        _0x5d9064++;
        if (_0x6fb506.result.result == 1) {
          addGameLog("战斗胜利!");
          _0x5e1509++;
        } else {
          addGameLog("战斗失败!");
        }
        let _0x43716e = new Date().getTime() / 1000;
        var _0x4a3d49 = Math.floor((_0x43716e - _0x32a589) / 60);
        var _0x3ce559 = ((_0x43716e - _0x32a589) % 60).toFixed(2);
        addGameLog("回合数:" + _0x6fb506.result.roundNum + "|耗时:" + _0x4a3d49 + "分" + _0x3ce559 + "秒|总局数:" + _0x5d9064 + "|胜场:" + _0x5e1509 + "|胜率:" + (_0x5e1509 / _0x5d9064 * 100).toFixed(2) + "%");
        MFC.rootLayer.removeChild(this.nowUi);
        this.nowUi.text = "竞技 回合数:" + _0x6fb506.result.roundNum + "|耗时:" + _0x4a3d49 + "分" + _0x3ce559 + "秒|总局数:" + _0x5d9064 + "|胜场:" + _0x5e1509 + "|胜率:" + (_0x5e1509 / _0x5d9064 * 100).toFixed(2) + "% 当日获取竞技币数:" + MFC.attr.getAttr(2100462);
        MFC.rootLayer.addChild(this.nowUi);
        await wait(1300);
        await this.send_message("cs_get_effort_value", {});
        await this.send_message("cs_query_some_fight_info", {
          type: 1
        });
        await this.send_message("cs_query_some_fight_info", {
          type: 2
        });
        await this.getCastAward();
        if (_0x5d9064 >= this.inputjj) {
          addGameLog("到达目标局数,竞技结束");
          break;
        }
      }
      this.stop();
    } catch (_0x503cbf) {
      logger(_0x503cbf);
    }
  }
}
class ziyou extends SuperTask {
  constructor() {
    super();
    this.nowName = "自由挂机";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    this.PvpC = 0;
    this.giveUp = 1;
    this.goalTaskCounts = 0;
    this.nowUi;
  }
  start() {
    super.start();
    let _0x5c79ac = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x4d40d5 = SimpleAlertUi({});
      const _0x1c94f5 = {
        text: "确定进行[自由对战]挂机吗?",
        y: _0x4d40d5.height / 11
      };
      var _0x47b593 = createLabel(_0x1c94f5);
      _0x47b593.x = _0x4d40d5.width / 2 - _0x47b593.width / 2;
      _0x4d40d5.addChild(_0x47b593);
      const _0x429dbe = {
        text: "[记得确保自由对战阵容设置完毕]",
        y: _0x47b593.y + 30,
        textColor: 16776960
      };
      var _0x195e98 = createLabel(_0x429dbe);
      _0x195e98.x = _0x4d40d5.width / 2 - _0x195e98.width / 2;
      _0x4d40d5.addChild(_0x195e98);
      const _0x42fa75 = {
        text: "十回合自动投降",
        x: 45,
        y: _0x195e98.y + 30
      };
      let _0x2c0aea = createLabel(_0x42fa75);
      const _0x3baf79 = {
        x: _0x2c0aea.x + _0x2c0aea.width + 15,
        y: _0x195e98.y + 30,
        selected: false
      };
      let _0x37283d = createToggle(_0x3baf79);
      _0x4d40d5.addChild(_0x2c0aea);
      _0x4d40d5.addChild(_0x37283d);
      _0x4d40d5.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5c79ac.stop();
      }, function () {
        if (!_0x37283d.selected) {
          _0x5c79ac.giveUp = 0;
        }
        _0x5c79ac.prcessBody();
      }], null);
      _0x4d40d5.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (window.nowTask.constructor.name == "ziyou") {
        this.nowUi = createLabel({
          text: "自由次数 ==> " + this.PvpC + "次",
          y: 65,
          textColor: 16776960
        });
        this.nowUi.x = MFC.rootLayer.width / 2 - this.nowUi.width / 2;
        MFC.rootLayer.addChild(this.nowUi);
      }
      timer.change(1);
      addGameLog("设置默认速度1X");
      while (1) {
        while (1) {
          if (!window.nowTask) {
            _this.stop();
            break;
          }
          await wait(100);
          var _0x1cc0f8 = getTouchs("_source", "arena_img_go_png");
          if (_0x1cc0f8) {
            touchBtn(_0x1cc0f8[3]);
            await wait(1000);
            addGameLog("前往自由对战");
          }
          var _0x1cc0f8 = getTouchs("_source", "arena_06_png");
          if (_0x1cc0f8) {
            break;
          } else {
            MFC.moduleManager.openModule(249);
            await wait(300);
          }
          var _0x1cc0f8 = getTouchs("_source", "arena_77_png");
          if (_0x1cc0f8) {
            var _0x288cfe = await findUIs("_source", "close_button_nor_png");
            addGameLog("关闭乱斗窗口");
            touchBtn(_0x288cfe[0].$parent);
          }
          var _0x1cc0f8 = getTouchs("_source", "arena_top_fight_img_btn_pipei_png");
          if (_0x1cc0f8) {
            var _0x288cfe = await findUIs("_source", "arena_top_fight_img_close_png");
            addGameLog("关闭巅峰窗口");
            touchBtn(_0x288cfe[0]);
          }
        }
        if (!window.nowTask) {
          _this.stop();
          return;
        }
        logger("到达自由面板");
        await wait(800);
        var _0x288cfe = await findUIs("_source", "arena_06_png");
        addGameLog("点击自由匹配");
        touchBtn(_0x288cfe[0].$parent);
        if (!window.nowTask) {
          _this.stop();
          return;
        }
        await wait(800);
        if (!window.nowTask) {
          _this.stop();
          return;
        }
        var _0x288cfe = await findUIs("_source", "toolbar_auto_battle_off_png");
        addGameLog("开始自动战斗");
        await wait(800);
        touchBtn(_0x288cfe[0]);
        if (!window.nowTask) {
          _this.stop();
          return;
        }
        while (1) {
          if (!window.nowTask) {
            _this.stop();
            return;
          }
          let _0x1bb271 = await this.waitEvent("sc_battle_notify_round_result");
          let _0xeca40d = JSON.parse(_0x1bb271.gameBody[_0x1bb271.gameBody.length - 1].raw);
          _0x1bb271.gameBody.splice(0, _0x1bb271.gameBody.length);
          await wait(50);
          if (this.giveUp) {
            logger("勾选放弃,判断是否到达十回合");
            if (_0xeca40d.result.roundNum >= 10) {
              addGameLog("到达十回合 发起投降");
              MFC.battleManager.surrenderPvp({
                type: 10,
                cmd: null,
                mapID: 1001
              });
              break;
            }
          } else {
            logger("未勾选放弃!");
          }
          if (_0xeca40d.result.result != 0) {
            logger("战斗完成");
            break;
          }
        }
        addGameLog("自由战斗结束");
        this.PvpC++;
        addGameLog("PVP 自由: " + this.PvpC + "次");
        if (window.nowTask.constructor.name == "ziyou") {
          MFC.rootLayer.removeChild(this.nowUi);
          this.nowUi.text = "自由次数 ==> " + this.PvpC + "次";
          MFC.rootLayer.addChild(this.nowUi);
        }
        if (this.goalTaskCounts > 0) {
          if (this.PvpC >= this.goalTaskCounts) {
            addGameLog(this.goalTaskCounts + "次对战完成");
            while (1) {
              if (!window.nowTask) {
                _this.stop();
                return;
              }
              await wait(900);
              let _0x3b8cce = sta.$screen.stage.$stageWidth / 5;
              let _0x1bf363 = sta.$screen.stage.$stageHeight / 4;
              nnnn.touch.onTouchBegin(_0x3b8cce, _0x1bf363, 0);
              nnnn.touch.onTouchEnd(_0x3b8cce, _0x1bf363, 0);
              var _0x1cc0f8 = getTouchs("_source", "button_yellow_up_100_png");
              if (_0x1cc0f8) {
                addGameLog("升段提示,点击确认");
                touchBtn(_0x1cc0f8[0]);
                await wait(800);
              }
              var _0x1cc0f8 = getTouchs("_source", "arena_06_png");
              if (_0x1cc0f8) {
                break;
              }
            }
            return;
          }
        }
        while (1) {
          if (!window.nowTask) {
            _this.stop();
            return;
          }
          await wait(900);
          let _0xc115a8 = sta.$screen.stage.$stageWidth / 5;
          let _0x279a50 = sta.$screen.stage.$stageHeight / 4;
          nnnn.touch.onTouchBegin(_0xc115a8, _0x279a50, 0);
          nnnn.touch.onTouchEnd(_0xc115a8, _0x279a50, 0);
          var _0x1cc0f8 = getTouchs("_source", "button_yellow_up_100_png");
          if (_0x1cc0f8) {
            addGameLog("升段提示,点击确认");
            touchBtn(_0x1cc0f8[0]);
            await wait(800);
          }
          var _0x1cc0f8 = getTouchs("_source", "arena_06_png");
          if (_0x1cc0f8) {
            break;
          }
        }
      }
    } catch (_0x501d8a) {
      logger(_0x501d8a);
    }
  }
}
class Shop extends SuperTask {
  constructor() {
    super();
    this.nowName = "商店购买";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    this.nowPetData = null;
    this.switchBtnList = [];
  }
  start() {
    super.start();
    let _0x20886b = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0xad3901 = SimpleAlertUi({
        height: 480,
        width: 760
      });
      _0x20886b.alertWin = _0xad3901;
      let _0x12a5dc = [];
      var _0x5e88c7 = createLabel({
        text: "乱斗商店",
        textColor: 16776960,
        x: 30,
        y: 15
      });
      _0x12a5dc.push(_0x5e88c7);
      const _0xe4d791 = {
        selected: true,
        storageKey: "chujiswitch",
        msgData: {
          logData: "初级融合结晶",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 2,
            itemId: 3
          },
          needCoin: 10
        }
      };
      const _0x1fb859 = {
        label: {
          text: "初级结晶"
        },
        switch: _0xe4d791
      };
      const _0x9f2409 = {
        selected: true,
        storageKey: "zhongjiswitch",
        msgData: {
          logData: "中级融合结晶",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 2,
            itemId: 4
          },
          needCoin: 10
        }
      };
      const _0xf21a2a = {
        label: {
          text: "中级结晶"
        },
        switch: _0x9f2409
      };
      const _0x1cb78f = {
        selected: true,
        storageKey: "jinhuasswitch",
        msgData: {
          logData: "万能进化石",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 2,
            itemId: 5
          },
          needCoin: 10
        }
      };
      const _0x157bbf = {
        label: {
          text: "进化石"
        },
        switch: _0x1cb78f
      };
      const _0x1fe9bd = {
        selected: true,
        storageKey: "jinhuayswitch",
        msgData: {
          logData: "万能进化玉",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 2,
            itemId: 6
          },
          needCoin: 10
        }
      };
      const _0x2d5ad7 = {
        label: {
          text: "进化玉"
        },
        switch: _0x1fe9bd
      };
      const _0x27b98d = {
        selected: true,
        storageKey: "kztswitch",
        msgData: {
          logData: "肯札特图纸碎片",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 2,
            itemId: 7
          },
          needCoin: 10
        }
      };
      const _0x26c9df = {
        label: {
          text: "肯札特图纸"
        },
        switch: _0x27b98d
      };
      var _0x2b0fdb = [_0x1fb859, _0xf21a2a, _0x157bbf, _0x2d5ad7, _0x26c9df];
      let _0x1d853e = 40;
      let _0x3396af = _0x5e88c7.y + _0x5e88c7.height + 10;
      for (let _0x371ff8 = 0; _0x371ff8 < _0x2b0fdb.length; _0x371ff8++) {
        const _0x24e488 = {
          text: _0x2b0fdb[_0x371ff8].label.text,
          x: _0x1d853e,
          y: _0x3396af
        };
        let _0x86b573 = createLabel(_0x24e488);
        const _0x37c8e2 = {
          x: _0x86b573.x + _0x86b573.width + 10,
          y: _0x3396af,
          selected: true,
          storageKey: _0x2b0fdb[_0x371ff8].switch.storageKey,
          msgData: _0x2b0fdb[_0x371ff8].switch.msgData
        };
        let _0x15b757 = createToggle(_0x37c8e2);
        _0x1d853e = _0x1d853e + _0x86b573.width + 10 + _0x15b757.width + 10;
        this.switchBtnList.push(_0x15b757);
        _0x12a5dc.push(_0x86b573);
        _0x12a5dc.push(_0x15b757);
        if (_0x371ff8 == _0x2b0fdb.length - 1) {
          _0x3396af = _0x86b573.y + _0x86b573.height + 12;
        }
      }
      const _0x462dd4 = {
        text: "巅峰商店",
        textColor: 16776960,
        x: 30,
        y: _0x3396af
      };
      var _0x5d7187 = createLabel(_0x462dd4);
      _0x3396af = _0x3396af + _0x5e88c7.height + 10;
      _0x12a5dc.push(_0x5d7187);
      const _0x1748b9 = {
        selected: true,
        storageKey: "HPswitch",
        msgData: {
          logData: "巅峰HP药",
          name: "cs_buy_new_shop_item",
          body: {
            id: 12101,
            shopType: 2,
            buy_times: 1
          },
          needCoin: 10
        }
      };
      const _0xe0ec2c = {
        label: {
          text: "巅峰HP药"
        },
        switch: _0x1748b9
      };
      const _0x11a984 = {
        selected: true,
        storageKey: "PPswitch",
        msgData: {
          logData: "巅峰PP药",
          name: "cs_buy_new_shop_item",
          body: {
            id: 12102,
            shopType: 2,
            buy_times: 1
          },
          needCoin: 10
        }
      };
      const _0x2cd750 = {
        label: {
          text: "巅峰PP药"
        },
        switch: _0x11a984
      };
      const _0x1117f0 = {
        selected: true,
        storageKey: "Strongswitch",
        msgData: {
          logData: "强力增幅器",
          name: "cs_buy_new_shop_item",
          body: {
            id: 12104,
            shopType: 2,
            buy_times: 1
          },
          needCoin: 100
        }
      };
      const _0x3b403e = {
        label: {
          text: "增幅器"
        },
        switch: _0x1117f0
      };
      const _0x395619 = {
        selected: true,
        storageKey: "RandomSkillswitch",
        msgData: {
          logData: "随机符文",
          name: "cs_buy_new_shop_item",
          body: {
            id: 13201,
            shopType: 2,
            buy_times: 1
          },
          needCoin: 100
        }
      };
      const _0x2776c8 = {
        label: {
          text: "符文"
        },
        switch: _0x395619
      };
      const _0x5e31c2 = {
        selected: true,
        storageKey: "kaluLabelswitch",
        msgData: {
          logData: "卡鲁图纸",
          name: "cs_buy_new_shop_item",
          body: {
            id: 12004,
            shopType: 2,
            buy_times: 1
          },
          needCoin: 100
        }
      };
      const _0x1fbfcd = {
        label: {
          text: "卡鲁图纸"
        },
        switch: _0x5e31c2
      };
      const _0xd848e3 = {
        selected: true,
        storageKey: "jimiLabelswitch",
        msgData: {
          logData: "吉米图纸",
          name: "cs_buy_new_shop_item",
          body: {
            id: 12001,
            shopType: 2,
            buy_times: 1
          },
          needCoin: 100
        }
      };
      const _0x580561 = {
        label: {
          text: "吉米图纸"
        },
        switch: _0xd848e3
      };
      const _0x2416ab = {
        selected: true,
        storageKey: "ngsLabelswitch",
        msgData: {
          logData: "尼古斯图纸",
          name: "cs_buy_new_shop_item",
          body: {
            id: 12036,
            shopType: 2,
            buy_times: 1
          },
          needCoin: 100
        }
      };
      const _0x3410ee = {
        label: {
          text: "尼古斯图纸"
        },
        switch: _0x2416ab
      };
      var _0x2b0fdb = [_0xe0ec2c, _0x2cd750, _0x3b403e, _0x2776c8, _0x1fbfcd, _0x580561, _0x3410ee];
      _0x1d853e = 40;
      for (let _0x265964 = 0; _0x265964 < _0x2b0fdb.length; _0x265964++) {
        const _0x26aee6 = {
          text: _0x2b0fdb[_0x265964].label.text,
          x: _0x1d853e,
          y: _0x3396af
        };
        let _0xca2b9a = createLabel(_0x26aee6);
        const _0x20d5dd = {
          x: _0xca2b9a.x + _0xca2b9a.width + 10,
          y: _0x3396af,
          selected: true,
          storageKey: _0x2b0fdb[_0x265964].switch.storageKey,
          msgData: _0x2b0fdb[_0x265964].switch.msgData
        };
        let _0x470265 = createToggle(_0x20d5dd);
        _0x1d853e = _0x1d853e + _0xca2b9a.width + 10 + _0x470265.width + 10;
        this.switchBtnList.push(_0x470265);
        _0x12a5dc.push(_0xca2b9a);
        _0x12a5dc.push(_0x470265);
        if (_0x265964 == _0x2b0fdb.length - 1) {
          _0x3396af = _0xca2b9a.y + _0xca2b9a.height + 12;
        }
        if (_0x265964 == 3) {
          _0x1d853e = 40;
          _0x3396af = _0x3396af + _0x5e88c7.height + 10;
        }
      }
      const _0x59d78d = {
        text: "竞技商店",
        textColor: 16776960,
        x: 30,
        y: _0x3396af
      };
      var _0x454728 = createLabel(_0x59d78d);
      _0x3396af = _0x3396af + _0x454728.height + 10;
      _0x12a5dc.push(_0x454728);
      const _0x59b7e8 = {
        selected: true,
        storageKey: "expswitch",
        msgData: {
          logData: "大型能量包",
          name: "cs_buy_new_shop_item",
          body: {
            id: 13001,
            shopType: 3,
            buy_times: 1
          },
          needCoin: 50
        }
      };
      const _0x18cb57 = {
        label: {
          text: "能量包"
        },
        switch: _0x59b7e8
      };
      const _0x1923bd = {
        selected: true,
        storageKey: "Energyswitch",
        msgData: {
          logData: "小型能源晶块",
          name: "cs_buy_new_shop_item",
          body: {
            id: 13002,
            shopType: 3,
            buy_times: 1
          },
          needCoin: 35
        }
      };
      const _0x10a02e = {
        label: {
          text: "小型能源"
        },
        switch: _0x1923bd
      };
      const _0x5e423a = {
        selected: true,
        storageKey: "normalSwitch",
        msgData: {
          logData: "初级胶囊",
          name: "cs_buy_new_shop_item",
          body: {
            id: 13004,
            shopType: 3,
            buy_times: 1
          },
          needCoin: 35
        }
      };
      const _0x160847 = {
        label: {
          text: "初级胶囊"
        },
        switch: _0x5e423a
      };
      const _0x54ed52 = {
        selected: true,
        storageKey: "EnchantmentSwitch",
        msgData: {
          logData: "随机附魔",
          name: "cs_buy_new_shop_item",
          body: {
            id: 13202,
            shopType: 3,
            buy_times: 1
          },
          needCoin: 30
        }
      };
      const _0x454017 = {
        label: {
          text: "随机附魔"
        },
        switch: _0x54ed52
      };
      const _0x37b030 = {
        selected: true,
        storageKey: "mengSwitch",
        msgData: {
          logData: "小型梦幻晶",
          name: "cs_buy_new_shop_item",
          body: {
            id: 13003,
            shopType: 3,
            buy_times: 1
          },
          needCoin: 35
        }
      };
      const _0x4bc8aa = {
        label: {
          text: "梦幻晶"
        },
        switch: _0x37b030
      };
      var _0x2b0fdb = [_0x18cb57, _0x10a02e, _0x160847, _0x454017, _0x4bc8aa];
      _0x1d853e = 40;
      for (let _0xa481a8 = 0; _0xa481a8 < _0x2b0fdb.length; _0xa481a8++) {
        const _0x1078f7 = {
          text: _0x2b0fdb[_0xa481a8].label.text,
          x: _0x1d853e,
          y: _0x3396af
        };
        let _0x3b23ac = createLabel(_0x1078f7);
        const _0x3cba9f = {
          x: _0x3b23ac.x + _0x3b23ac.width + 10,
          y: _0x3396af,
          selected: true,
          storageKey: _0x2b0fdb[_0xa481a8].switch.storageKey,
          msgData: _0x2b0fdb[_0xa481a8].switch.msgData
        };
        let _0x3e51e8 = createToggle(_0x3cba9f);
        _0x1d853e = _0x1d853e + _0x3b23ac.width + 10 + _0x3e51e8.width + 10;
        this.switchBtnList.push(_0x3e51e8);
        _0x12a5dc.push(_0x3b23ac);
        _0x12a5dc.push(_0x3e51e8);
        if (_0xa481a8 == _0x2b0fdb.length - 1) {
          _0x3396af = _0x3b23ac.y + _0x3b23ac.height + 12;
        }
      }
      const _0x5891bd = {
        text: "教皇商店",
        textColor: 16776960,
        x: 30,
        y: _0x3396af
      };
      var _0x578da3 = createLabel(_0x5891bd);
      _0x3396af = _0x3396af + _0x454728.height + 10;
      _0x12a5dc.push(_0x578da3);
      const _0x2963f7 = {
        selected: true,
        storageKey: "stoneSwitch",
        msgData: {
          logData: "万能进化石",
          name: "cs_exchange_activity_reward",
          body: {
            id: 11391,
            coeff: 2,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 2
        }
      };
      const _0x196657 = {
        label: {
          text: "进化石"
        },
        switch: _0x2963f7
      };
      const _0x10e587 = {
        selected: true,
        storageKey: "JadeSwitch",
        msgData: {
          logData: "万能进化玉",
          name: "cs_exchange_activity_reward",
          body: {
            id: 11392,
            coeff: 2,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 5
        }
      };
      const _0x46a43d = {
        label: {
          text: "进化玉"
        },
        switch: _0x10e587
      };
      const _0x3485c6 = {
        selected: true,
        storageKey: "popeEncySwitch",
        msgData: {
          logData: "大型能量包",
          name: "cs_exchange_activity_reward",
          body: {
            id: 11393,
            coeff: 2,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 6
        }
      };
      const _0x8c3592 = {
        label: {
          text: "能量包"
        },
        switch: _0x3485c6
      };
      const _0x3a7e5d = {
        selected: true,
        storageKey: "popeCoinSwitch",
        msgData: {
          logData: "小型能源晶块",
          name: "cs_exchange_activity_reward",
          body: {
            id: 11394,
            coeff: 2,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 5
        }
      };
      const _0x187fc5 = {
        label: {
          text: "能源晶块"
        },
        switch: _0x3a7e5d
      };
      const _0x5469e2 = {
        selected: true,
        storageKey: "pcapSwitch",
        msgData: {
          logData: "初级胶囊",
          name: "cs_exchange_activity_reward",
          body: {
            id: 11395,
            coeff: 2,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 5
        }
      };
      const _0x3e1d55 = {
        label: {
          text: "初级胶囊"
        },
        switch: _0x5469e2
      };
      var _0x2b0fdb = [_0x196657, _0x46a43d, _0x8c3592, _0x187fc5, _0x3e1d55];
      _0x1d853e = 40;
      for (let _0x68481e = 0; _0x68481e < _0x2b0fdb.length; _0x68481e++) {
        const _0xecaa80 = {
          text: _0x2b0fdb[_0x68481e].label.text,
          x: _0x1d853e,
          y: _0x3396af
        };
        let _0x5e8408 = createLabel(_0xecaa80);
        const _0x79fffd = {
          x: _0x5e8408.x + _0x5e8408.width + 10,
          y: _0x3396af,
          selected: true,
          storageKey: _0x2b0fdb[_0x68481e].switch.storageKey,
          msgData: _0x2b0fdb[_0x68481e].switch.msgData
        };
        let _0x2a8f46 = createToggle(_0x79fffd);
        _0x1d853e = _0x1d853e + _0x5e8408.width + 10 + _0x2a8f46.width + 10;
        this.switchBtnList.push(_0x2a8f46);
        _0x12a5dc.push(_0x5e8408);
        _0x12a5dc.push(_0x2a8f46);
        if (_0x68481e == _0x2b0fdb.length - 1) {
          _0x3396af = _0x5e8408.y + _0x5e8408.height + 12;
        }
      }
      const _0x58948e = {
        text: "阶梯商店",
        textColor: 16776960,
        x: 30,
        y: _0x3396af
      };
      var _0x2d23ef = createLabel(_0x58948e);
      _0x3396af = _0x3396af + _0x454728.height + 10;
      _0x12a5dc.push(_0x2d23ef);
      const _0x4c15b4 = {
        selected: true,
        storageKey: "FstoneSwitch",
        msgData: {
          logData: "万能进化石",
          name: "cs_exchange_activity_reward",
          body: {
            id: 10131,
            coeff: 1,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 50
        }
      };
      const _0x2b23d9 = {
        label: {
          text: "进化石"
        },
        switch: _0x4c15b4
      };
      const _0x3ac901 = {
        selected: true,
        storageKey: "FJadeSwitch",
        msgData: {
          logData: "万能进化玉",
          name: "cs_exchange_activity_reward",
          body: {
            id: 10132,
            coeff: 1,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 250
        }
      };
      const _0x33874b = {
        label: {
          text: "进化玉"
        },
        switch: _0x3ac901
      };
      const _0x53b4c7 = {
        selected: true,
        storageKey: "FEncySwitch",
        msgData: {
          logData: "大型能量包",
          name: "cs_exchange_activity_reward",
          body: {
            id: 10129,
            coeff: 1,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 200
        }
      };
      const _0x2dea36 = {
        label: {
          text: "能量包"
        },
        switch: _0x53b4c7
      };
      const _0x4e3bca = {
        selected: true,
        storageKey: "FCoinSwitch",
        msgData: {
          logData: "小型能源晶块",
          name: "cs_exchange_activity_reward",
          body: {
            id: 10130,
            coeff: 1,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 100
        }
      };
      const _0x1408a5 = {
        label: {
          text: "能源晶块"
        },
        switch: _0x4e3bca
      };
      const _0x42bd6a = {
        selected: true,
        storageKey: "FTicketSwitch",
        msgData: {
          logData: "教皇门票",
          name: "cs_exchange_activity_reward",
          body: {
            id: 11158,
            coeff: 1,
            selectIndex: 0,
            subDropIdList: []
          },
          needCoin: 100
        }
      };
      const _0x1229d5 = {
        label: {
          text: "教皇门票"
        },
        switch: _0x42bd6a
      };
      var _0x2b0fdb = [_0x2b23d9, _0x33874b, _0x2dea36, _0x1408a5, _0x1229d5];
      _0x1d853e = 40;
      for (let _0x35bd36 = 0; _0x35bd36 < _0x2b0fdb.length; _0x35bd36++) {
        const _0x5345f2 = {
          text: _0x2b0fdb[_0x35bd36].label.text,
          x: _0x1d853e,
          y: _0x3396af
        };
        let _0x256842 = createLabel(_0x5345f2);
        const _0x4ce505 = {
          x: _0x256842.x + _0x256842.width + 10,
          y: _0x3396af,
          selected: true,
          storageKey: _0x2b0fdb[_0x35bd36].switch.storageKey,
          msgData: _0x2b0fdb[_0x35bd36].switch.msgData
        };
        let _0x2e8e7b = createToggle(_0x4ce505);
        _0x1d853e = _0x1d853e + _0x256842.width + 10 + _0x2e8e7b.width + 10;
        this.switchBtnList.push(_0x2e8e7b);
        _0x12a5dc.push(_0x256842);
        _0x12a5dc.push(_0x2e8e7b);
        if (_0x35bd36 == _0x2b0fdb.length - 1) {
          _0x3396af = _0x256842.y + _0x256842.height + 12;
        }
      }
      const _0xcaf1b9 = {
        text: "普通商店",
        textColor: 16776960,
        x: 30,
        y: _0x3396af
      };
      var _0x3da11a = createLabel(_0xcaf1b9);
      _0x3396af = _0x3396af + _0x454728.height + 10;
      _0x12a5dc.push(_0x3da11a);
      const _0x26deb7 = {
        selected: true,
        storageKey: "CoinNormalSwitch",
        msgData: {
          logData: "初级胶囊",
          itemId: 4001,
          name: "cs_buy_shop_item",
          body: {
            pos: null,
            num: 1
          },
          needCoin: 10000
        }
      };
      const _0x143b42 = {
        label: {
          text: "初级胶囊"
        },
        switch: _0x26deb7
      };
      const _0x447464 = {
        selected: true,
        storageKey: "CoinMiddleSwitch",
        msgData: {
          logData: "中级胶囊",
          itemId: 4002,
          name: "cs_buy_shop_item",
          body: {
            pos: null,
            num: 1
          },
          needCoin: 25000
        }
      };
      const _0x26ae6e = {
        label: {
          text: "中级胶囊"
        },
        switch: _0x447464
      };
      const _0x5346b3 = {
        selected: true,
        storageKey: "CoinHighSwitch",
        msgData: {
          logData: "高级胶囊",
          itemId: 4003,
          name: "cs_buy_shop_item",
          body: {
            pos: null,
            num: 1
          },
          needCoin: 20000
        }
      };
      const _0x1fd73f = {
        label: {
          text: "高级胶囊"
        },
        switch: _0x5346b3
      };
      var _0x2b0fdb = [_0x143b42, _0x26ae6e, _0x1fd73f];
      _0x1d853e = 40;
      for (let _0x5328c6 = 0; _0x5328c6 < _0x2b0fdb.length; _0x5328c6++) {
        const _0x26f147 = {
          text: _0x2b0fdb[_0x5328c6].label.text,
          x: _0x1d853e,
          y: _0x3396af
        };
        let _0x1e5cbe = createLabel(_0x26f147);
        const _0x5c05a9 = {
          x: _0x1e5cbe.x + _0x1e5cbe.width + 10,
          y: _0x3396af,
          selected: true,
          storageKey: _0x2b0fdb[_0x5328c6].switch.storageKey,
          msgData: _0x2b0fdb[_0x5328c6].switch.msgData
        };
        let _0x597b9d = createToggle(_0x5c05a9);
        _0x1d853e = _0x1d853e + _0x1e5cbe.width + 10 + _0x597b9d.width + 10;
        this.switchBtnList.push(_0x597b9d);
        _0x12a5dc.push(_0x1e5cbe);
        _0x12a5dc.push(_0x597b9d);
        if (_0x5328c6 == _0x2b0fdb.length - 1) {
          const _0x3e52de = {
            text: "迷航商店",
            textColor: 16776960,
            x: _0x1d853e + 30,
            y: _0x3396af - (_0x454728.height + 8)
          };
          var _0x47eedd = createLabel(_0x3e52de);
          _0x12a5dc.push(_0x47eedd);
          const _0x447f58 = {
            text: "重塑胶囊",
            x: _0x47eedd.x + 10,
            y: _0x3396af
          };
          let _0x2012b5 = createLabel(_0x447f58);
          const _0x18e49e = {
            x: _0x2012b5.x + _0x2012b5.width + 10,
            y: _0x3396af,
            selected: true,
            storageKey: "resetSwitch",
            msgData: {
              logData: "重塑胶囊",
              name: "cs_purchase_shop_item",
              body: {
                shopType: 6,
                itemId: 11
              }
            }
          };
          let _0x1b21d3 = createToggle(_0x18e49e);
          this.switchBtnList.push(_0x1b21d3);
          _0x12a5dc.push(_0x2012b5);
          _0x12a5dc.push(_0x1b21d3);
          _0x3396af = _0x2012b5.y + _0x2012b5.height + 12;
        }
      }
      const _0x558f50 = {
        text: "放生商店",
        textColor: 16776960,
        x: 30,
        y: _0x3396af
      };
      var _0x3e4850 = createLabel(_0x558f50);
      _0x3396af = _0x3396af + _0x454728.height + 10;
      _0x12a5dc.push(_0x3e4850);
      const _0x5ad578 = {
        selected: true,
        storageKey: "releaseNormalSwitch",
        msgData: {
          logData: "初级胶囊",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 5,
            itemId: 1
          }
        }
      };
      const _0xf7a3a5 = {
        label: {
          text: "初级胶囊"
        },
        switch: _0x5ad578
      };
      const _0x31e5d6 = {
        selected: true,
        storageKey: "releaseMiddlelSwitch",
        msgData: {
          logData: "中级胶囊",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 5,
            itemId: 2
          }
        }
      };
      const _0x1b53c5 = {
        label: {
          text: "中级胶囊"
        },
        switch: _0x31e5d6
      };
      const _0x20880c = {
        selected: true,
        storageKey: "releaseHighSwitch",
        msgData: {
          logData: "高级胶囊",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 5,
            itemId: 3
          }
        }
      };
      const _0x457003 = {
        label: {
          text: "高级胶囊"
        },
        switch: _0x20880c
      };
      const _0x5ca81e = {
        selected: true,
        storageKey: "releaseSuperSwitch",
        msgData: {
          logData: "无敌胶囊",
          name: "cs_purchase_shop_item",
          body: {
            shopType: 5,
            itemId: 4
          }
        }
      };
      const _0x1a9884 = {
        label: {
          text: "无敌胶囊"
        },
        switch: _0x5ca81e
      };
      const _0x53f134 = {
        selected: true,
        storageKey: "stoneExchangeSwitch",
        msgData: {
          logData: "矿物换豆",
          name: "cs_exchange_activity_reward",
          body: {
            id: 10207,
            coeff: 1,
            selectIndex: 0,
            subDropIdList: []
          }
        }
      };
      const _0x1f8498 = {
        label: {
          text: "矿物换豆"
        },
        switch: _0x53f134
      };
      var _0x2b0fdb = [_0xf7a3a5, _0x1b53c5, _0x457003, _0x1a9884, _0x1f8498];
      _0x1d853e = 40;
      for (let _0x2f2151 = 0; _0x2f2151 < _0x2b0fdb.length; _0x2f2151++) {
        const _0x245149 = {
          text: _0x2b0fdb[_0x2f2151].label.text,
          x: _0x1d853e,
          y: _0x3396af
        };
        let _0x4ca26d = createLabel(_0x245149);
        const _0x5b7957 = {
          x: _0x4ca26d.x + _0x4ca26d.width + 10,
          y: _0x3396af,
          selected: true,
          storageKey: _0x2b0fdb[_0x2f2151].switch.storageKey,
          msgData: _0x2b0fdb[_0x2f2151].switch.msgData
        };
        let _0x1315f1 = createToggle(_0x5b7957);
        _0x1d853e = _0x1d853e + _0x4ca26d.width + 10 + _0x1315f1.width + 10;
        this.switchBtnList.push(_0x1315f1);
        _0x12a5dc.push(_0x4ca26d);
        _0x12a5dc.push(_0x1315f1);
        if (_0x2f2151 == _0x2b0fdb.length - 1) {
          _0x3396af = _0x4ca26d.y + _0x4ca26d.height + 12;
        }
      }
      this.addAllUis(_0x12a5dc);
      _0xad3901.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x20886b.stop();
      }, function () {
        _0x20886b.switchBtnList.forEach(_0xdde577 => localStorage.setItem(_0xdde577.storageKey, _0xdde577.selected));
        _0x20886b.prcessBody();
      }], null);
      _0xad3901.showAlert();
      logger(_0xad3901);
    });
  }
  async prcessBody() {
    try {
      GlobalDispatcher.getInstance().dispatchEventWith(GameEvent.OPEN_MODULE, false, {
        id: 1081,
        type: 2
      });
      addGameLog("打开商店");
      await wait(200);
      await this.send_message("cs_query_shop_item", {
        shopType: 2
      });
      await wait(200);
      await this.send_message("cs_query_shop_item", {
        shopType: 3
      });
      await wait(200);
      await this.send_message("cs_query_shop_item", {
        shopType: 5
      });
      await wait(200);
      await this.send_message("cs_query_shop_item", {
        shopType: 6
      });
      let _0x2afb7a = [];
      for (let _0x38ebbb = 0; _0x38ebbb < this.switchBtnList.length; _0x38ebbb++) {
        if (this.switchBtnList[_0x38ebbb].selected) {
          _0x2afb7a.push(this.switchBtnList[_0x38ebbb]);
        }
      }
      for (let _0x419aaa = 0; _0x419aaa < _0x2afb7a.length; _0x419aaa++) {
        await wait(100);
        let _0x44c897 = _0x2afb7a[_0x419aaa].msgData;
        if (_0x44c897.name == "cs_buy_new_shop_item") {
          const _0x52f60d = {
            shopType: _0x44c897.body.shopType
          };
          let _0x2b2375 = await this.send_message("cs_get_new_shop_item", _0x52f60d);
          let _0x337a3a = _0x2b2375.shop_items;
          let _0x457ee3 = 0;
          for (let _0x5cba28 = 0; _0x5cba28 < _0x337a3a.length; _0x5cba28++) {
            if (_0x337a3a[_0x5cba28].idx == _0x44c897.body.id) {
              if (_0x337a3a[_0x5cba28].buyNum) {
                _0x457ee3 = 1;
              }
              break;
            }
          }
          if (_0x457ee3 == 1) {
            addGameLog("已经购买过 =>" + _0x44c897.logData);
            continue;
          }
          if (_0x44c897.body.shopType == 2) {
            if (_0x2b2375.balance >= _0x44c897.needCoin) {
              await this.send_message(_0x44c897.name, _0x44c897.body);
              addGameLog("购买成功 =>" + _0x44c897.logData);
            } else {
              addGameLog("代币不足  跳过购买=>" + _0x44c897.logData);
            }
          }
          if (_0x44c897.body.shopType == 3) {
            await this.send_message(_0x44c897.name, _0x44c897.body);
            addGameLog("尝试购买  =>" + _0x44c897.logData);
          }
        }
        if (_0x44c897.name == "cs_buy_shop_item") {
          if (UserManager.getInstance().userInfo.coin < _0x44c897.needCoin) {
            addGameLog("代币不足  跳过购买=>" + _0x44c897.logData);
            continue;
          }
          let _0xb02809 = await this.send_message("cs_get_shop_item", {
            freshType: 0
          });
          let _0x52a310 = _0xb02809.shop_items;
          let _0x31fb8f = 0;
          for (let _0x286dd9 = 0; _0x286dd9 < _0x52a310.length; _0x286dd9++) {
            if (_0x52a310[_0x286dd9].itemId == _0x44c897.itemId) {
              if (_0x52a310[_0x286dd9].buyState) {
                _0x31fb8f = 1;
              } else {
                _0x44c897.body.pos = _0x52a310[_0x286dd9].pos;
                await this.send_message(_0x44c897.name, _0x44c897.body);
                addGameLog("购买成功 =>" + _0x44c897.logData);
              }
            }
          }
          if (_0x31fb8f == 1) {
            addGameLog("已经购买过 =>" + _0x44c897.logData);
            continue;
          }
          await wait(200);
        }
        if (_0x44c897.name == "cs_exchange_activity_reward") {
          addGameLog("尝试购买: " + _0x44c897.logData);
          await this.send_message(_0x44c897.name, _0x44c897.body);
          if (_0x44c897.logData == "教皇门票") {
            await wait(200);
            await this.send_message("cs_combat_ladder_GhostDom", {
              type: 1,
              choice: 0
            });
            await wait(100);
            const _0x589c0b = [100975, 100976, 100977, 100978, 100979, 100980, 100981, 100982, 100983, 100984, 100985, 100986];
            let _0x46c105 = NumUtils.curStarSign() - 1;
            let _0x53cc3f = xls.activityExchange.getItems().find(_0x2d08c8 => _0x2d08c8.consume == _0x589c0b[_0x46c105] + "_20");
            if (_0x53cc3f) {
              _0x44c897.body.id = _0x53cc3f.id;
              await this.send_message(_0x44c897.name, _0x44c897.body);
            }
            const _0xf6ffe5 = [101282, 101283, 101284, 101285, 101286, 101287, 101288, 101289, 101290, 101291, 101292, 101293];
            let _0x3379b6 = xls.activityExchange.getItems().find(_0x4718e8 => _0x4718e8.consume == _0xf6ffe5[_0x46c105] + "_20");
            if (_0x3379b6) {
              _0x44c897.body.id = _0x3379b6.id;
              await this.send_message(_0x44c897.name, _0x44c897.body);
            }
          }
          await wait(200);
        }
        if (_0x44c897.name == "cs_purchase_shop_item") {
          addGameLog("尝试购买: " + _0x44c897.logData);
          await this.send_message(_0x44c897.name, _0x44c897.body);
          await wait(200);
        }
      }
      this.stop();
    } catch (_0x1f90ba) {
      logger(_0x1f90ba);
    }
  }
}
class LearnSkill extends SuperTask {
  constructor() {
    super();
    this.nowName = "技能学习";
    this.recvList = [];
  }
  start() {
    super.start();
    let _0x168c8b = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x1bc449 = SimpleAlertUi({});
      const _0x26cf64 = {
        text: "确定进行一键技能学习吗?",
        y: _0x1bc449.height / 11
      };
      var _0x4a9ea1 = createLabel(_0x26cf64);
      _0x4a9ea1.x = _0x1bc449.width / 2 - _0x4a9ea1.width / 2;
      _0x1bc449.addChild(_0x4a9ea1);
      const _0x5bf268 = {
        text: "当前赛尔豆数量",
        y: _0x4a9ea1.y + 30
      };
      var _0x1c0325 = createLabel(_0x5bf268);
      _0x1c0325.x = _0x4a9ea1.x;
      _0x1bc449.addChild(_0x1c0325);
      const _0x475326 = {
        text: MFC.userInfo._coin,
        y: _0x4a9ea1.y + 30,
        textColor: 16776960
      };
      var _0x219dd0 = createLabel(_0x475326);
      _0x219dd0.x = _0x1c0325.x + _0x1c0325.width + 10;
      _0x1bc449.addChild(_0x219dd0);
      const _0x31db07 = {
        text: "消耗赛尔豆数量",
        y: _0x1c0325.y + 30
      };
      var _0x7a6b08 = createLabel(_0x31db07);
      _0x7a6b08.x = _0x4a9ea1.x;
      _0x1bc449.addChild(_0x7a6b08);
      let _0x585596 = petProperty.PetPropertyManager.getInstance().getAllSkillList();
      let _0x150689 = petProperty.PetPropertyManager.getInstance()._curPetInfo.petId;
      for (let _0x3460a5 = 0; _0x3460a5 < petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills.length; _0x3460a5++) {
        if (_0x585596.indexOf(petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills[_0x3460a5]) !== -1) {
          _0x585596.splice(_0x585596.indexOf(petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills[_0x3460a5]), 1);
        }
      }
      let _0xf803f1 = 0;
      for (let _0x43bd8c = 0; _0x43bd8c < _0x585596.length; _0x43bd8c++) {
        _0xf803f1 = _0xf803f1 + PetLearnSkillManager.getLearnSkillInfo(_0x585596[_0x43bd8c], _0x150689).coin;
      }
      const _0x1ccb5a = {
        text: _0xf803f1,
        y: _0x1c0325.y + 30,
        textColor: 16776960
      };
      var _0x3af031 = createLabel(_0x1ccb5a);
      _0x3af031.x = _0x1c0325.x + _0x1c0325.width + 10;
      _0x1bc449.addChild(_0x3af031);
      const _0x3a961a = {
        text: "剩余赛尔豆数量",
        y: _0x7a6b08.y + 30
      };
      var _0x56dd4f = createLabel(_0x3a961a);
      _0x56dd4f.x = _0x4a9ea1.x;
      _0x1bc449.addChild(_0x56dd4f);
      const _0x404a94 = {
        text: MFC.userInfo._coin - _0xf803f1,
        y: _0x7a6b08.y + 30,
        textColor: 16776960
      };
      var _0x3b075e = createLabel(_0x404a94);
      _0x3b075e.x = _0x1c0325.x + _0x1c0325.width + 10;
      _0x1bc449.addChild(_0x3b075e);
      _0x1bc449.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x168c8b.stop();
      }, function () {
        _0x168c8b.prcessBody();
      }], null);
      _0x1bc449.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x426256 = petProperty.PetPropertyManager.getInstance().getAllSkillList();
      let _0x586eea = petProperty.PetPropertyManager.getInstance()._curPetInfo.getTime;
      let _0x248e46 = petProperty.PetPropertyManager.getInstance()._curPetInfo.petId;
      let _0xc4a748 = petProperty.PetPropertyManager.getInstance()._curPetInfo.level;
      for (let _0x42fb7a = 0; _0x42fb7a < petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills.length; _0x42fb7a++) {
        if (_0x426256.indexOf(petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills[_0x42fb7a]) !== -1) {
          _0x426256.splice(_0x426256.indexOf(petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills[_0x42fb7a]), 1);
        }
      }
      while (true) {
        if (_0x426256.length == 0) {
          break;
        }
        if (PetLearnSkillManager.getLearnSkillInfo(_0x426256[0], _0x248e46).level <= _0xc4a748) {
          if (UserManager.getInstance().userInfo.coin >= PetLearnSkillManager.getLearnSkillInfo(_0x426256[0], _0x248e46).coin) {
            if (PetLearnSkillManager.getLearnSkillInfo(_0x426256[0], _0x248e46).items) {
              if (ItemManager.getInstance().getItemNumById(PetLearnSkillManager.getLearnSkillInfo(_0x426256[0], _0x248e46).items.split("_")[0]) < PetLearnSkillManager.getLearnSkillInfo(_0x426256[0], _0x248e46).items.split("_")[1]) {
                addGameLog("缺少物品" + xls.item.getItem(PetLearnSkillManager.getLearnSkillInfo(_0x426256[0], _0x248e46).items.split("_")[0]).name);
                break;
              }
            }
            if (_0x426256[0] >= 70001 && _0x426256[0] <= 70005) {
              if (MFC.attr.getAttr(MFC.attrType.foreverLeagueExecutionEnter) == 0) {
                addGameLog("审判任务未完成");
                break;
              }
            }
            addGameLog("开始学习=>\n" + petConfig.SkillConfig.getDef(_0x426256[0]).name);
            const _0xb7abf0 = {
              getTime: _0x586eea,
              skillId: _0x426256[0]
            };
            await this.send_message("cs_learn_skill", _0xb7abf0);
            _0x426256.shift();
          } else {
            addGameLog("赛尔豆不足");
            break;
          }
        } else {
          break;
        }
      }
      addGameLog("技能学习完毕");
      this.stop();
    } catch (_0x5b8eb4) {
      logger(_0x5b8eb4);
    }
  }
}
class ExpUp extends SuperTask {
  constructor() {
    super();
    this.nowName = "经验升级";
    this.recvList = [];
    this.levelupnum = 0;
  }
  start() {
    super.start();
    let _0xf8d4d0 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x16d886 = SimpleAlertUi({});
      const _0x2783f1 = {
        text: "自定义经验升级(当前精灵等级",
        y: _0x16d886.height / 11
      };
      var _0x1bb883 = createLabel(_0x2783f1);
      _0x1bb883.x = _0x16d886.width / 2 - _0x1bb883.width / 2 - 10;
      _0x16d886.addChild(_0x1bb883);
      var _0x5c27b4 = createLabel({
        text: expDevice.ExpDeviceManager.getInstance().curPet.level,
        y: _0x16d886.height / 11,
        textColor: 16776960,
        size: 20
      });
      _0x5c27b4.x = _0x1bb883.x + _0x1bb883.width + 5;
      _0x16d886.addChild(_0x5c27b4);
      const _0x2c6fc6 = {
        text: ")",
        y: _0x16d886.height / 11
      };
      var _0x5e4887 = createLabel(_0x2c6fc6);
      _0x5e4887.x = _0x5c27b4.x + _0x5c27b4.width + 5;
      _0x16d886.addChild(_0x5e4887);
      const _0x448746 = {
        prompt: "请输入等级",
        width: 100,
        x: 30,
        y: _0x1bb883.y + 30,
        storageKey: "inputzdyexp"
      };
      var _0x124a6d = createEdit(_0x448746);
      _0x16d886.addChild(_0x124a6d);
      const _0x42e52b = {
        text: "输入等级不超过100\n输入等级不低于当前等级",
        y: _0x1bb883.y + 30,
        textColor: 16776960,
        size: 12
      };
      var _0x1b0833 = createLabel(_0x42e52b);
      _0x1b0833.x = _0x124a6d.x + _0x124a6d.width + 20;
      _0x16d886.addChild(_0x1b0833);
      const _0x1ec907 = {
        text: "说明:比如精灵59,输入65,\n     就会升到65",
        y: _0x1b0833.y + 40,
        textColor: 16776960,
        size: 16
      };
      var _0x15531d = createLabel(_0x1ec907);
      _0x15531d.x = 30;
      _0x16d886.addChild(_0x15531d);
      _0x16d886.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0xf8d4d0.stop();
      }, function () {
        localStorage.setItem("inputzdyexp", _0x124a6d.text);
        if (isNaN(parseInt(_0x124a6d.text))) {
          MFC.bubbleAlert.showAlert("请输入有效等级");
          return true;
        } else if (parseInt(_0x124a6d.text) > 100 || parseInt(_0x124a6d.text) <= expDevice.ExpDeviceManager.getInstance().curPet.level) {
          MFC.bubbleAlert.showAlert("输入等级错误");
          return true;
        } else {
          _0xf8d4d0.levelupnum = parseInt(_0x124a6d.text) - expDevice.ExpDeviceManager.getInstance().curPet.level;
        }
        _0xf8d4d0.upui();
      }], null);
      _0x16d886.showAlert();
    });
  }
  async upui() {
    super.start();
    let _0x5639a4 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x4158ee = SimpleAlertUi({});
      const _0xc8415e = {
        text: "确定进行经验升级吗?",
        y: _0x4158ee.height / 11
      };
      var _0x4ed822 = createLabel(_0xc8415e);
      _0x4ed822.x = _0x4158ee.width / 2 - _0x4ed822.width / 2;
      _0x4158ee.addChild(_0x4ed822);
      const _0x511e78 = {
        text: "当前拥有经验",
        y: _0x4ed822.y + 30
      };
      var _0x3f4f73 = createLabel(_0x511e78);
      _0x3f4f73.x = _0x4ed822.x;
      _0x4158ee.addChild(_0x3f4f73);
      var _0x26f9fd = createLabel({
        text: expDevice.ExpDeviceManager.getInstance().totalExp,
        y: _0x4ed822.y + 30,
        textColor: 16776960
      });
      _0x26f9fd.x = _0x3f4f73.x + _0x3f4f73.width + 10;
      _0x4158ee.addChild(_0x26f9fd);
      const _0x1c7388 = {
        text: "升级所需经验",
        y: _0x3f4f73.y + 30
      };
      var _0x10bb7b = createLabel(_0x1c7388);
      _0x10bb7b.x = _0x4ed822.x;
      _0x4158ee.addChild(_0x10bb7b);
      let _0x255103 = 0;
      for (let _0x4124ea = 0; _0x4124ea < this.levelupnum; _0x4124ea++) {
        if (expDevice.ExpDeviceManager.getInstance().curPet.level + _0x4124ea == 100) {
          break;
        } else if (_0x4124ea == 0) {
          _0x255103 = _0x255103 + Math.round(xls.exp.getItem(expDevice.ExpDeviceManager.getInstance().curPet.level).exp * PetConfig.getDef(expDevice.ExpDeviceManager.getInstance().curPet.petId).expNum) - expDevice.ExpDeviceManager.getInstance().curPet.exp;
        } else {
          _0x255103 = _0x255103 + Math.round(xls.exp.getItem(expDevice.ExpDeviceManager.getInstance().curPet.level + _0x4124ea).exp * PetConfig.getDef(expDevice.ExpDeviceManager.getInstance().curPet.petId).expNum);
        }
      }
      const _0x3c696e = {
        text: _0x255103,
        y: _0x3f4f73.y + 30,
        textColor: 16776960
      };
      var _0x14c6c3 = createLabel(_0x3c696e);
      _0x14c6c3.x = _0x3f4f73.x + _0x3f4f73.width + 10;
      _0x4158ee.addChild(_0x14c6c3);
      const _0x5d67c5 = {
        text: "剩余经验",
        y: _0x10bb7b.y + 30
      };
      var _0x476b3f = createLabel(_0x5d67c5);
      _0x476b3f.x = _0x4ed822.x;
      _0x4158ee.addChild(_0x476b3f);
      var _0x20d44d = createLabel({
        text: expDevice.ExpDeviceManager.getInstance().totalExp - _0x255103,
        y: _0x10bb7b.y + 30,
        textColor: 16776960
      });
      _0x20d44d.x = _0x3f4f73.x + _0x3f4f73.width + 10;
      _0x4158ee.addChild(_0x20d44d);
      _0x4158ee.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5639a4.stop();
      }, function () {
        _0x5639a4.prcessBody();
      }], null);
      _0x4158ee.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x45f3a9 = 0;
      for (let _0x185a0c = 0; _0x185a0c < this.levelupnum; _0x185a0c++) {
        if (expDevice.ExpDeviceManager.getInstance().curPet.level + _0x185a0c == 100) {
          break;
        } else if (_0x185a0c == 0) {
          _0x45f3a9 = _0x45f3a9 + Math.round(xls.exp.getItem(expDevice.ExpDeviceManager.getInstance().curPet.level).exp * PetConfig.getDef(expDevice.ExpDeviceManager.getInstance().curPet.petId).expNum) - expDevice.ExpDeviceManager.getInstance().curPet.exp;
        } else {
          _0x45f3a9 = _0x45f3a9 + Math.round(xls.exp.getItem(expDevice.ExpDeviceManager.getInstance().curPet.level + _0x185a0c).exp * PetConfig.getDef(expDevice.ExpDeviceManager.getInstance().curPet.petId).expNum);
        }
      }
      if (_0x45f3a9 > expDevice.ExpDeviceManager.getInstance().totalExp) {
        addGameLog("所拥有经验不足以提升" + this.levelupnum + "级");
        let _0x5e41c2 = this;
        MFC.alert.show("确定将所有经验进行升级吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x3b866b) {
          _0x5e41c2.stop();
        }, function (_0x382fb8) {
          _0x5e41c2.send_message("cs_pet_inject_exp", {
            getTime: expDevice.ExpDeviceManager.getInstance().curPet.getTime,
            addExp: expDevice.ExpDeviceManager.getInstance().totalExp
          });
          addGameLog("经验升级完毕");
          _0x5e41c2.stop();
        }]);
      } else {
        await this.send_message("cs_pet_inject_exp", {
          getTime: expDevice.ExpDeviceManager.getInstance().curPet.getTime,
          addExp: _0x45f3a9
        });
        addGameLog("经验升级完毕");
        this.stop();
      }
    } catch (_0x5e9c72) {}
  }
}
class Cztalent extends SuperTask {
  constructor() {
    super();
    this.nowName = "基因重组";
    this.recvList = [];
    this.nowpet = null;
    this.input2Pwd = null;
    this.costtalent = null;
    this.stoptalent = null;
    this.coinnum = null;
    this.cznum = null;
    this.needcoin = null;
    this.parent = null;
  }
  start() {
    super.start();
    let _0x5ad4ac = this;
    var _0x557a37 = getTouchs("_source", "item_frame_1_mask_png");
    if (_0x557a37.filter(function (_0x58b927) {
      return _0x58b927.$explicitBitmapHeight == 183 && _0x58b927.$explicitBitmapWidth == 144;
    })[0].$parent._combinPetInfo == undefined) {
      MFC.alert.show("请先前往选择精灵\n选择一只目标精灵!");
      _0x5ad4ac.stop();
      return;
    } else {
      _0x5ad4ac.nowpet = _0x557a37.filter(function (_0x12a7b7) {
        return _0x12a7b7.$explicitBitmapHeight == 183 && _0x12a7b7.$explicitBitmapWidth == 144;
      })[0].$parent._combinPetInfo;
      _0x5ad4ac.needcoin = _0x557a37.filter(function (_0x5165d6) {
        return _0x5165d6.$explicitBitmapHeight == 183 && _0x5165d6.$explicitBitmapWidth == 144;
      })[0].$parent._needCoin;
      _0x5ad4ac.parent = _0x557a37.filter(function (_0x2c79e2) {
        return _0x2c79e2.$explicitBitmapHeight == 183 && _0x2c79e2.$explicitBitmapWidth == 144;
      })[0].$parent;
    }
    if (!xls.item.hasLoaded) {
      xls.item.load(() => {});
    }
    if (!xls.geneRecombine.hasLoaded) {
      xls.geneRecombine.load(() => {});
    }
    if (!xls.petEgg.hasLoaded) {
      xls.petEgg.load(() => {});
    }
    logger(_0x557a37.filter(function (_0x3711d5) {
      return _0x3711d5.$explicitBitmapHeight == 183 && _0x3711d5.$explicitBitmapWidth == 144;
    })[0].$parent._combinPetInfo);
    logger(_0x557a37.filter(function (_0x34eb65) {
      return _0x34eb65.$explicitBitmapHeight == 183 && _0x34eb65.$explicitBitmapWidth == 144;
    })[0].$parent);
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x3246aa = SimpleAlertUi({
        width: 400,
        height: 350
      });
      const _0x4a5e92 = {
        text: "确定进行一键基因重组吗?",
        y: _0x3246aa.height / 11
      };
      var _0x281fbe = createLabel(_0x4a5e92);
      _0x281fbe.x = _0x3246aa.width / 2 - _0x281fbe.width / 2;
      _0x3246aa.addChild(_0x281fbe);
      const _0x3fdb1d = {
        prompt: "二级密码",
        x: 40,
        y: _0x281fbe.y + 30,
        width: 100
      };
      var _0x48d1a2 = createEdit(_0x3fdb1d);
      _0x3246aa.addChild(_0x48d1a2);
      const _0x3e5970 = {
        text: "[没有二级密码不输入]",
        x: _0x48d1a2.x + 120,
        y: _0x48d1a2.y + 5
      };
      var _0x7fe2d0 = createLabel(_0x3e5970);
      _0x3246aa.addChild(_0x7fe2d0);
      testBtn = new eui.Button();
      testBtn.x = _0x48d1a2.x + 140 + _0x7fe2d0.width;
      testBtn.y = _0x48d1a2.y;
      testBtn.skinName = gethelpBtnSkinName();
      BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
        var _0x1dd33e = new geneCombin.GeneCombinRule();
        _0x1dd33e.$children[1].$children[1].textArr[0].text = "没有二级密码不输入\n二级密码为6位";
        _0x1dd33e.$children[1].$children[0].height = 61;
        _0x1dd33e.showRule();
        MFC.rootLayer.addChild(_0x1dd33e);
      });
      _0x3246aa.addChild(testBtn);
      if (xls.geneRecombine.getItem(PetConfig.getDef(_0x5ad4ac.nowpet.petId).petClass).recombine == "1") {
        var _0x32f851 = createLabel({
          text: "当前精灵需消耗" + _0x557a37.filter(function (_0x4e95f1) {
            return _0x4e95f1.$explicitBitmapHeight == 183 && _0x4e95f1.$explicitBitmapWidth == 144;
          })[0].$parent._combinPetInfo.nick + "重组",
          x: 40,
          y: _0x48d1a2.y + 50
        });
        _0x3246aa.addChild(_0x32f851);
        const _0x4ab086 = {
          prompt: "消耗精灵天赋",
          x: _0x32f851.x + _0x32f851.width + 10,
          y: _0x32f851.y,
          width: 100,
          storageKey: "costtalent"
        };
        var _0x25e335 = createEdit(_0x4ab086);
        _0x3246aa.addChild(_0x25e335);
        testBtn = new eui.Button();
        testBtn.x = _0x48d1a2.x + 140 + _0x7fe2d0.width;
        testBtn.y = _0x32f851.y;
        testBtn.skinName = gethelpBtnSkinName();
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          var _0x246e31 = new geneCombin.GeneCombinRule();
          _0x246e31.$children[1].$children[1].textArr[0].text = "如果天赋输入26只会消耗26以下精灵重组(不包括26)";
          _0x246e31.showRule();
          MFC.rootLayer.addChild(_0x246e31);
        });
        _0x3246aa.addChild(testBtn);
      } else if (xls.geneRecombine.getItem(PetConfig.getDef(_0x5ad4ac.nowpet.petId).petClass).recombine == "2") {
        var _0x32f851 = createLabel({
          text: "当前精灵需消耗精元" + xls.petEgg.getItem(xls.geneRecombine.getItem(PetConfig.getDef(this.nowpet.petId).petClass).eggId.split("_")[0]).name + "重组",
          x: 40,
          y: _0x48d1a2.y + 50
        });
        _0x3246aa.addChild(_0x32f851);
      } else {
        var _0x32f851 = createLabel({
          text: "当前精灵需消耗物品" + xls.item.getItem(xls.geneRecombine.getItem(PetConfig.getDef(this.nowpet.petId).petClass).itemId.split("_")[0]).name + "重组",
          x: 40,
          y: _0x48d1a2.y + 50
        });
        _0x3246aa.addChild(_0x32f851);
      }
      const _0x135ac6 = {
        prompt: "输入停止天赋",
        x: 40,
        y: _0x32f851.y + 40,
        width: 100,
        storageKey: "stoptalent"
      };
      var _0x4d3be4 = createEdit(_0x135ac6);
      _0x3246aa.addChild(_0x4d3be4);
      testBtn = new eui.Button();
      testBtn.x = _0x4d3be4.x + _0x4d3be4.width + 30;
      testBtn.y = _0x4d3be4.y;
      testBtn.skinName = gethelpBtnSkinName();
      BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
        var _0x57647a = new geneCombin.GeneCombinRule();
        _0x57647a.$children[1].$children[1].textArr[0].text = "如果天赋输入26会在重组达到26及以上停止(包括26!!!必须输入)";
        _0x57647a.showRule();
        MFC.rootLayer.addChild(_0x57647a);
      });
      _0x3246aa.addChild(testBtn);
      const _0x1f7c4d = {
        prompt: "输入重组次数",
        x: _0x4d3be4.x + _0x4d3be4.width + 80,
        y: _0x32f851.y + 40,
        width: 100,
        storageKey: "cznum"
      };
      var _0x3210c0 = createEdit(_0x1f7c4d);
      _0x3246aa.addChild(_0x3210c0);
      testBtn = new eui.Button();
      testBtn.x = _0x3210c0.x + _0x3210c0.width + 20;
      testBtn.y = _0x4d3be4.y;
      testBtn.skinName = gethelpBtnSkinName();
      BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
        var _0x4a90cc = new geneCombin.GeneCombinRule();
        _0x4a90cc.$children[1].$children[1].textArr[0].text = "(不必须输入)输入次数不超过拥有数";
        _0x4a90cc.showRule();
        MFC.rootLayer.addChild(_0x4a90cc);
      });
      _0x3246aa.addChild(testBtn);
      const _0x4be132 = {
        text: "当前赛尔豆数量",
        x: 40,
        y: _0x3210c0.y + 40
      };
      var _0x1f4f8b = createLabel(_0x4be132);
      _0x3246aa.addChild(_0x1f4f8b);
      const _0x2234f0 = {
        text: MFC.userInfo._coin,
        x: _0x1f4f8b.x + _0x1f4f8b.width + 20,
        y: _0x3210c0.y + 40
      };
      var _0x3ff15a = createLabel(_0x2234f0);
      _0x3ff15a.textColor = 16776960;
      _0x3246aa.addChild(_0x3ff15a);
      const _0x1bcde1 = {
        prompt: "输入赛尔豆",
        x: 40,
        y: _0x1f4f8b.y + 40,
        width: 100,
        storageKey: "coinnum"
      };
      var _0x1dfbc4 = createEdit(_0x1bcde1);
      _0x3246aa.addChild(_0x1dfbc4);
      testBtn = new eui.Button();
      testBtn.x = _0x4d3be4.x + _0x4d3be4.width + 30;
      testBtn.y = _0x1dfbc4.y;
      testBtn.skinName = gethelpBtnSkinName();
      BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
        var _0x35ded0 = new geneCombin.GeneCombinRule();
        _0x35ded0.$children[1].$children[1].textArr[0].text = "(不必须输入)决定会不会破产关键,不输入会重组到豆子不足停止";
        _0x35ded0.showRule();
        MFC.rootLayer.addChild(_0x35ded0);
      });
      _0x3246aa.addChild(testBtn);
      _0x3246aa.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5ad4ac.stop();
      }, function () {
        if (xls.geneRecombine.getItem(PetConfig.getDef(_0x5ad4ac.nowpet.petId).petClass).recombine == "1") {
          if (isNaN(parseInt(_0x25e335.text)) || parseInt(_0x25e335.text) > 31 || parseInt(_0x25e335.text) < 0) {
            MFC.bubbleAlert.showAlert("请输入有效消耗天赋");
            addGameLog("请输入有效消耗天赋");
            this.stop();
          } else {
            localStorage.setItem("costtalent", _0x25e335.text);
            _0x5ad4ac.costtalent = parseInt(_0x25e335.text);
          }
        }
        if (isNaN(parseInt(_0x4d3be4.text)) || parseInt(_0x4d3be4.text) > 31 || parseInt(_0x4d3be4.text) < 0) {
          MFC.bubbleAlert.showAlert("请输入有效停止天赋");
          addGameLog("请输入有效停止天赋");
          this.stop();
        } else {
          localStorage.setItem("stoptalent", _0x4d3be4.text);
          _0x5ad4ac.stoptalent = parseInt(_0x4d3be4.text);
        }
        if (_0x3210c0.text != "") {
          if (isNaN(parseInt(_0x3210c0.text))) {
            MFC.bubbleAlert.showAlert("请输入有效重组次数");
            addGameLog("请输入有效重组次数");
            this.stop();
          } else {
            localStorage.setItem("cznum", _0x3210c0.text);
            _0x5ad4ac.cznum = parseInt(_0x3210c0.text);
          }
        }
        if (_0x1dfbc4.text != "") {
          if (isNaN(parseInt(_0x1dfbc4.text))) {
            MFC.bubbleAlert.showAlert("请输入有效赛尔豆数");
            addGameLog("请输入有效赛尔豆数");
            this.stop();
          } else {
            localStorage.setItem("coinnum", _0x1dfbc4.text);
            _0x5ad4ac.coinnum = parseInt(_0x1dfbc4.text);
          }
        }
        if (_0x48d1a2.text != "") {
          if (isNaN(parseInt(_0x48d1a2.text)) || _0x48d1a2.text.length !== 6) {
            MFC.bubbleAlert.showAlert("请输入有效二级密码");
            addGameLog("请输入有效二级密码");
            this.stop();
          }
          _0x5ad4ac.input2Pwd = parseInt(_0x48d1a2.text) + "";
        }
        _0x5ad4ac.prcessBody();
      }], null);
      _0x3246aa.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x517e67 = false;
      if (this.input2Pwd) {
        let _0x461d9b = await this.send_message("cs_2nd_passwd", {
          option: 2,
          param: this.input2Pwd
        });
        if (JSON.stringify(_0x461d9b).indexOf("二级密码解锁失败") != -1) {
          addGameLog("二级密码错误");
          MFC.bubbleAlert.showAlert("二级密码错误");
        } else {
          _0x517e67 = true;
        }
      } else {
        _0x517e67 = true;
      }
      if (_0x517e67) {
        if (!this.cznum) {
          this.cznum = 99999;
        }
        if (!this.coinnum) {
          this.coinnum = 0;
        }
        let _0x33a9ef = 0;
        while (1) {
          let _0x837130 = this.costtalent;
          if (MFC.userInfo._coin < this.coinnum) {
            addGameLog("赛尔豆达到停止");
            break;
          } else if (this.nowpet.talent >= this.stoptalent) {
            addGameLog("天赋达到停止");
            break;
          } else if (_0x33a9ef > this.cznum) {
            addGameLog("次数达到停止");
            break;
          } else {
            if (this.needcoin > MFC.userInfo._coin) {
              addGameLog("赛尔豆不足");
              break;
            } else if (xls.geneRecombine.getItem(PetConfig.getDef(this.nowpet.petId).petClass).recombine == "1") {
              if (this.parent._currPetList.filter(function (_0x2a16c0) {
                return _0x2a16c0.talent < _0x837130;
              }).length == 0) {
                addGameLog("没有精灵可以重组");
                break;
              } else {
                let _0x513c4c = this.parent._currPetList.filter(function (_0xda24bb) {
                  return _0xda24bb.talent < _0x837130;
                }).sort((_0x282322, _0x2d4b7a) => _0x282322.talent - _0x2d4b7a.talent);
                addGameLog("即将消耗" + _0x513c4c[0].nick + "天赋" + _0x513c4c[0].talent);
                let _0x15ec6c = await this.send_message("cs_gene_reconf", {
                  getTime: this.nowpet.getTime,
                  costType: 1,
                  param: [_0x513c4c[0].getTime]
                });
                if (JSON.stringify(_0x15ec6c).indexOf("请先解锁二级密码") != -1) {
                  addGameLog("二级密码错误");
                  MFC.bubbleAlert.showAlert("二级密码错误");
                  break;
                }
                addGameLog("剩余赛尔豆" + MFC.userInfo._coin);
              }
            } else if (xls.geneRecombine.getItem(PetConfig.getDef(this.nowpet.petId).petClass).recombine == "2") {
              let _0x5ae9f8 = this.parent.combinInfo.eggId.split("_")[0];
              let _0x4fcec5 = this.parent.combinInfo.eggId.split("_")[1];
              if (PetManager.getInstance().getAllEggs().filter(function (_0x57cb84) {
                return _0x57cb84.eggId == _0x5ae9f8;
              }).length < _0x4fcec5) {
                addGameLog(xls.petEgg.getItem(_0x5ae9f8).name + "不足");
                break;
              } else {
                let _0x3fb2f4 = await this.send_message("cs_gene_reconf", {
                  getTime: this.nowpet.getTime,
                  costType: 2,
                  param: [PetManager.getInstance().getAllEggs().filter(function (_0x250ada) {
                    return _0x250ada.eggId == _0x5ae9f8;
                  })[0].getTime]
                });
                if (JSON.stringify(_0x3fb2f4).indexOf("请先解锁二级密码") != -1) {
                  addGameLog("二级密码错误");
                  MFC.bubbleAlert.showAlert("二级密码错误");
                  break;
                }
                addGameLog("剩余赛尔豆" + MFC.userInfo._coin);
              }
            } else {
              let _0x4993b1 = this.parent.combinInfo.itemId.split("_")[0];
              let _0x3d3b36 = this.parent.combinInfo.itemId.split("_")[1];
              let _0x483a3a = this.nowpet.petId;
              if (ItemManager.getInstance().getItemNumById(_0x4993b1) < _0x3d3b36) {
                addGameLog(xls.item.getItem(xls.geneRecombine.getItem(PetConfig.getDef(_0x483a3a).petClass).itemId.split("_")[0]).name + "不足");
                break;
              } else {
                let _0x3f90bf = await this.send_message("cs_gene_reconf", {
                  getTime: this.nowpet.getTime,
                  costType: 3,
                  param: []
                });
                if (JSON.stringify(_0x3f90bf).indexOf("请先解锁二级密码") != -1) {
                  addGameLog("二级密码错误");
                  MFC.bubbleAlert.showAlert("二级密码错误");
                  break;
                }
                addGameLog("剩余赛尔豆" + MFC.userInfo._coin);
              }
            }
            _0x33a9ef++;
          }
        }
      }
      addGameLog("基因重组完毕");
      this.stop();
    } catch (_0x556066) {}
  }
}
class Relicsfj extends SuperTask {
  constructor() {
    super();
    this.nowName = "分解遗物";
    this.recvList = [];
    this.fjstatus = null;
  }
  start() {
    super.start();
    let _0x5784d1 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0xb6c0ac = SimpleAlertUi({
        height: 230,
        width: 300
      });
      const _0x557a00 = {
        text: "分解遗物",
        y: _0xb6c0ac.height / 11
      };
      var _0xde5775 = createLabel(_0x557a00);
      _0xde5775.x = _0xb6c0ac.width / 2 - _0xde5775.width / 2;
      _0xb6c0ac.addChild(_0xde5775);
      const _0xeaee8e = {
        text: "当前遗物:",
        x: 40,
        y: _0xde5775.y + 30
      };
      var _0x447581 = createLabel(_0xeaee8e);
      _0xb6c0ac.addChild(_0x447581);
      var _0x5562a4 = createLabel({
        text: xls.itemRelic.getItem(holeRelicBag.crtSeRelics).name,
        x: _0x447581.x + _0x447581.width + 10,
        y: _0xde5775.y + 20,
        bold: true,
        stroke: 1,
        strokeColor: 9297,
        textColor: 16711680,
        size: 23,
        fontFamily: "楷体",
        bold: 1
      });
      _0xb6c0ac.addChild(_0x5562a4);
      const _0x431d15 = {
        text: "遗物数量:",
        x: 40,
        y: _0x447581.y + 30
      };
      var _0x2c792f = createLabel(_0x431d15);
      _0xb6c0ac.addChild(_0x2c792f);
      var _0x41a2e7 = createLabel({
        text: HoleItemManager.getInstance().getItemNumById(holeRelicBag.crtSeRelics[0]),
        x: _0x447581.x + _0x447581.width + 10,
        y: _0x2c792f.y,
        bold: true,
        stroke: 1,
        strokeColor: 9297,
        textColor: 16711680,
        size: 23,
        fontFamily: "楷体",
        bold: 1
      });
      _0xb6c0ac.addChild(_0x41a2e7);
      const _0x15eb25 = {
        text: "是否保留一个",
        x: 40,
        y: _0x41a2e7.y + 30
      };
      var _0x3a09d4 = createLabel(_0x15eb25);
      _0xb6c0ac.addChild(_0x3a09d4);
      const _0x5bfb7e = {
        x: _0x3a09d4.x + _0x3a09d4.width + 10,
        y: _0x3a09d4.y,
        selected: true,
        storageKey: "yiwufenjie"
      };
      var _0x1515db = createToggle(_0x5bfb7e);
      _0xb6c0ac.addChild(_0x1515db);
      _0xb6c0ac.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5784d1.stop();
      }, function () {
        localStorage.setItem("yiwufenjie", _0x1515db.selected);
        _0x5784d1.fjstatus = _0x1515db.selected;
        _0x5784d1.prcessBody();
      }], null);
      _0xb6c0ac.showAlert();
    });
  }
  async prcessBody() {
    if (this.fjstatus) {
      if (HoleItemManager.getInstance().getItemNumById(holeRelicBag.crtSeRelics[0]) <= 1) {
        addGameLog(xls.itemRelic.getItem(holeRelicBag.crtSeRelics).name + "数量不超过1");
      } else {
        await this.send_message("cs_rogue_relic_decompose", {
          relics: [{
            i: holeRelicBag.crtSeRelics[0],
            n: HoleItemManager.getInstance().getItemNumById(holeRelicBag.crtSeRelics[0]) - 1
          }],
          version: 202310
        });
      }
    } else {
      await this.send_message("cs_rogue_relic_decompose", {
        relics: [{
          i: holeRelicBag.crtSeRelics[0],
          n: HoleItemManager.getInstance().getItemNumById(holeRelicBag.crtSeRelics[0])
        }],
        version: 202310
      });
    }
    addGameLog("分解遗物结束");
    this.stop();
  }
}
function wait(_0x520f06) {
  return new Promise(_0x27835d => // TOLOOK
  setTimeout(() => _0x27835d(), _0x520f06));
}
function SimpleAlertUi(_0x6512c7) {
  let _0xbe6b07 = new alert.SimpleAlert();
  _0xbe6b07.initialize(alert.ALERT_ROOT);
  _0xbe6b07.effectTrigger.showEffect = alert.SHOW_EFFECT;
  _0xbe6b07.effectTrigger.hideEffect = alert.HIDE_EFFECT;
  if (_0x6512c7.width) {
    _0xbe6b07.applicationWidth = _0x6512c7.width;
  }
  if (_0x6512c7.height) {
    _0xbe6b07._minHeight = _0x6512c7.height;
    _0xbe6b07.height = _0x6512c7.height;
  }
  return _0xbe6b07;
}
function createLabel(_0x11ce99) {
  let _0x38d966 = new eui.Label();
  _0x38d966.lineSpacing = 3;
  _0x38d966.size = 16;
  _0x38d966.textColor = 16777215;
  _0x38d966.touchEnabled = false;
  Object.keys(_0x11ce99).forEach(_0x79a96e => {
    _0x38d966[_0x79a96e] = _0x11ce99[_0x79a96e];
  });
  return _0x38d966;
}
function gethelpBtnSkinName() {
  return function (_0x2f6339) {
    function _0x15f972() {
      _0x2f6339.call(this);
      this.skinParts = [];
      this.elementsContent = [this._Image1_i()];
      this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_hd_questionmark_button_nor2_png")])];
    }
    __extends(_0x15f972, _0x2f6339);
    _0x15f972.prototype._Image1_i = function () {
      let _0x160425 = new eui.Image();
      this._Image1 = _0x160425;
      _0x160425.scaleX = 0.5;
      _0x160425.scaleY = 0.5;
      _0x160425.source = "common_hd_questionmark_button_nor1_png";
      return _0x160425;
    };
    return _0x15f972;
  }(eui.Skin);
}
function createToggle(_0x1b1309) {
  let _0x2212b5 = new eui.ToggleButton();
  _0x2212b5.skinName = getCheckBoxSkinName();
  Object.keys(_0x1b1309).forEach(_0x24e9a9 => {
    _0x2212b5[_0x24e9a9] = _0x1b1309[_0x24e9a9];
  });
  if (_0x1b1309.storageKey) {
    if (_0x1b1309.selected != undefined) {
      _0x2212b5.selected = localStorage.getItem(_0x1b1309.storageKey) !== null ? JSON.parse(localStorage.getItem(_0x1b1309.storageKey)) : _0x2212b5.selected;
    } else {
      _0x2212b5.selected = localStorage.getItem(_0x1b1309.storageKey) !== null ? JSON.parse(localStorage.getItem(_0x1b1309.storageKey)) : false;
    }
  }
  return _0x2212b5;
}
function createRadio(_0x2b663d) {
  let _0x3d33a9 = new eui.RadioButton();
  _0x3d33a9.skinName = getRadioBoxSkinName();
  Object.keys(_0x2b663d).forEach(_0x2c3fb6 => {
    _0x3d33a9[_0x2c3fb6] = _0x2b663d[_0x2c3fb6];
  });
  if (_0x2b663d.storageKey) {
    if (_0x2b663d.selected != undefined) {
      _0x3d33a9.selected = localStorage.getItem(_0x2b663d.storageKey) !== null ? JSON.parse(localStorage.getItem(_0x2b663d.storageKey)) : _0x2b663d.selected;
    } else {
      _0x3d33a9.selected = localStorage.getItem(_0x2b663d.storageKey) !== null ? JSON.parse(localStorage.getItem(_0x2b663d.storageKey)) : false;
    }
  }
  return _0x3d33a9;
}
function createEdit(_0x790301) {
  let _0x4da9fe = new eui.EditableText();
  _0x4da9fe.alpha = 1;
  _0x4da9fe.blendMode = "blendMode";
  _0x4da9fe.lineSpacing = 3;
  _0x4da9fe.prompt = "对战次数";
  _0x4da9fe.promptColor = 16777215;
  _0x4da9fe.size = 16;
  _0x4da9fe.textAlign = "center";
  _0x4da9fe.textColor = 16777215;
  _0x4da9fe.verticalAlign = "middle";
  _0x4da9fe.background = true;
  _0x4da9fe.backgroundColor = 6710886;
  Object.keys(_0x790301).forEach(_0x13d1e5 => {
    _0x4da9fe[_0x13d1e5] = _0x790301[_0x13d1e5];
  });
  if (_0x790301.storageKey) {
    _0x4da9fe.text = localStorage.getItem(_0x790301.storageKey);
  }
  return _0x4da9fe;
}
function getCheckBoxSkinName() {
  return function (_0x5ee468) {
    function _0xd78f5a() {
      _0x5ee468.call(this);
      this.skinParts = [];
      this.elementsContent = [this._Image1_i()];
      this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "personal_center_setup_toggle_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 53), new eui.SetProperty("_Image1", "height", 20)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "personal_center_setup_toggle_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 53), new eui.SetProperty("_Image1", "height", 20)]), new eui.State("disabled", [])];
    }
    __extends(_0xd78f5a, _0x5ee468);
    _0xd78f5a.prototype._Image1_i = function () {
      let _0x1bd864 = new eui.Image();
      this._Image1 = _0x1bd864;
      return _0x1bd864;
    };
    return _0xd78f5a;
  }(eui.Skin);
}
function getTextBtnSkinName(_0x16d829) {
  return function (_0x54c090) {
    function _0x5bcc4a() {
      _0x54c090.call(this);
      this.skinParts = [];
      const _0x492ab5 = {
        text: _0x16d829,
        x: 20,
        y: 10,
        bold: true,
        stroke: 1,
        strokeColor: 9297,
        textColor: 14745599,
        size: 17,
        fontFamily: "楷体",
        bold: 1,
        textAlign: "center"
      };
      let _0x5b9dfa = createLabel(_0x492ab5);
      _0x5b9dfa.x = 50 - _0x5b9dfa.width / 2;
      this.elementsContent = [this._Image1_i(), _0x5b9dfa];
      this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_blue_down_105_png"), new eui.SetProperty("_Image2", "source", "lineup_txt_hover_png")])];
    }
    __extends(_0x5bcc4a, _0x54c090);
    _0x5bcc4a.prototype._Image1_i = function () {
      let _0x1214b5 = new eui.Image();
      this._Image1 = _0x1214b5;
      _0x1214b5.source = "button_blue_up_105_png";
      return _0x1214b5;
    };
    return _0x5bcc4a;
  }(eui.Skin);
}
function getTextBtnNullImageSkinName(_0x4a30e0) {
  return function (_0x14d8e2) {
    function _0x47c08a() {
      _0x14d8e2.call(this);
      this.skinParts = [];
      let _0x2a91cc = _0x4a30e0.split("\n");
      let _0xdc45bf = [];
      let _0xbfbf46 = 0;
      _0x2a91cc.forEach(_0x385d9d => {
        if (_0x385d9d.includes("HP: 0")) {
          const _0x38a326 = {
            text: _0x385d9d,
            x: 0,
            y: 0,
            bold: true,
            stroke: 1,
            strokeColor: 9297,
            textColor: 12632256,
            size: 16,
            fontFamily: "楷体",
            bold: 1,
            textAlign: "center"
          };
          let _0x1f7148 = createLabel(_0x38a326);
          _0x1f7148.y = _0xbfbf46;
          _0xdc45bf.push(_0x1f7148);
          _0xbfbf46 += _0x1f7148.height + 10;
        } else {
          const _0x374417 = {
            text: _0x385d9d,
            x: 0,
            y: 0,
            bold: true,
            stroke: 1,
            strokeColor: 9297,
            textColor: 16776960,
            size: 16,
            fontFamily: "楷体",
            bold: 1,
            textAlign: "center"
          };
          let _0x8041f7 = createLabel(_0x374417);
          _0x8041f7.y = _0xbfbf46;
          _0xdc45bf.push(_0x8041f7);
          _0xbfbf46 += _0x8041f7.height + 10;
        }
      });
      this.elementsContent = _0xdc45bf;
      this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_blue_down_105_png"), new eui.SetProperty("_Image2", "source", "lineup_txt_hover_png")])];
    }
    __extends(_0x47c08a, _0x14d8e2);
    return _0x47c08a;
  }(eui.Skin);
}
function getRealAndBeReal(_0x255a27) {
  if (_0x255a27 == 1) {
    _0x255a27 = {
      color: 65535,
      text: "普通 " + _0x255a27
    };
  }
  if (_0x255a27 < 1) {
    _0x255a27 = {
      color: 13882323,
      text: "微弱 " + _0x255a27
    };
  }
  if (_0x255a27 > 1) {
    _0x255a27 = {
      color: 16711680,
      text: "克制 " + _0x255a27
    };
  }
  return _0x255a27;
}
function getRadioBoxSkinName() {
  let _0x21b278 = function (_0x1ea7c0) {
    function _0x3687ab() {
      _0x1ea7c0.call(this);
      this.skinParts = [];
      this.elementsContent = [this._Image1_i()];
      this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "personal_center_setup_checkbox_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 20), new eui.SetProperty("_Image1", "height", 21)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "personal_center_setup_checkbox_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 1), new eui.SetProperty("_Image1", "width", 20), new eui.SetProperty("_Image1", "height", 20)]), new eui.State("disabled", [])];
    }
    __extends(_0x3687ab, _0x1ea7c0);
    _0x3687ab.prototype._Image1_i = function () {
      let _0x4b698e = new eui.Image();
      this._Image1 = _0x4b698e;
      return _0x4b698e;
    };
    return _0x3687ab;
  }(eui.Skin);
  return _0x21b278;
}
function produceLog() {
  winLog = new WatchChatList();
  winLog.skinName = "WatchChatListSkin";
  winLog.strMsg = "";
  winLog.y = 100;
  RES.loadConfig("resource/ui/battle.json", "resource/ui/").then(() => {
    MFC.rootLayer.addChild(winLog);
    winLog.btnApply.visible = false;
    winLog.btnExt.visible = false;
    winLog.$children[1].visible = false;
    winLog.$children[3].visible = false;
    winLog.$children[8].visible = false;
    winLog.btnOpen.y = 50;
    winLog.txtWatcher.x = 10;
    winLog.txtWatcher.text = "正在执行:无";
    winLog.scroller.height = 200;
    winLog.$children[2].height = 200;
    winLog.txtWatcher.width = winLog.width;
    logger(winLog.txtWatcher);
    winLog.txtWatcher.textColor = 65535;
    winLog.onOpenPanel();
    winLog.btnOpen.selected = false;
    winLog.strMsg = "<font color='#FFFF00'>[更新日志]\n" + gameVersion + "</font><font color='#FF0000'>\n</font><font color='#97FFFF'>" + 开发日志 + "</font>";
    let _0x1e8ff7 = egret.HtmlTextParser;
    winLog.txtMsg.textFlow = new _0x1e8ff7().parser(winLog.strMsg);
    window.gameLog = winLog;
    sta = winLog.$stage;
  });
}
function addGameLog(_0x3b7566) {
  try {
    if (winLog.strMsg.split("\n").length > 255) {
      let _0x244796 = winLog.strMsg.split("\n");
      _0x244796.splice(_0x244796.length - 100);
      winLog.strMsg = _0x244796.join("\n");
    }
  } catch (_0x54ce36) {
    console.error(_0x54ce36);
  }
  winLog.strMsg = "<font color='#bbff00'>[" + formatTime(new Date().getTime()) + "]</font><font color='#FFFFFF'>" + _0x3b7566 + "</font>\n" + winLog.strMsg;
  let _0x41b3d2 = egret.HtmlTextParser;
  winLog.txtMsg.textFlow = new _0x41b3d2().parser(winLog.strMsg);
}
function formatTime(_0x2d3e6d) {
  var _0x37809b = new Date(_0x2d3e6d);
  var _0x44d89b = _0x37809b.getHours();
  var _0x230066 = _0x37809b.getMinutes();
  var _0x365126 = _0x37809b.getSeconds();
  if (_0x44d89b < 10) {
    _0x44d89b = "0" + _0x44d89b;
  }
  if (_0x230066 < 10) {
    _0x230066 = "0" + _0x230066;
  }
  if (_0x365126 < 10) {
    _0x365126 = "0" + _0x365126;
  }
  return _0x44d89b + ":" + _0x230066 + ":" + _0x365126;
}
function getSeerItemNum(_0x45821e) {
  return ItemManager.getInstance().getItemNumById(_0x45821e);
}
function randomCap(_0x1e562a) {
  let _0x27848c = [];
  for (let _0x3b2ecb = 0; _0x3b2ecb < _0x1e562a.length; _0x3b2ecb++) {
    if (getSeerItemNum(_0x1e562a[_0x3b2ecb]) > 0) {
      _0x27848c.push(_0x1e562a[_0x3b2ecb]);
    }
  }
  if (_0x27848c.length == 0) {
    return "NoCap";
  }
  let _0x434d90 = _0x27848c[0];
  let _0x31fa7f = _0x434d90 == "4001" ? "普通" : _0x434d90 == "4002" ? "中级" : _0x434d90 == "4003" ? "高级" : _0x434d90 == "4004" ? "无敌" : "";
  return {
    name: _0x31fa7f,
    num: getSeerItemNum(_0x434d90),
    itemId: _0x434d90
  };
}
function getTouchs(_0x3ed19d, _0x25be84) {
  var _0x17241b = [];
  function _0x3c9c00(_0x37f312) {
    var _0x9c74fd = _0x37f312.$children;
    for (var _0x45922a = 0; _0x45922a < _0x9c74fd.length; _0x45922a++) {
      var _0x2e18b4 = _0x9c74fd[_0x45922a];
      if (_0x2e18b4 instanceof egret.DisplayObjectContainer) {
        _0x17241b.push(_0x2e18b4);
        _0x3c9c00(_0x2e18b4);
      } else {}
    }
  }
  _0x3c9c00(sta);
  var _0x41c986 = [];
  for (let _0x4f2b3a = 0; _0x4f2b3a < _0x17241b.length; _0x4f2b3a++) {
    let _0x116b06 = _0x17241b[_0x4f2b3a];
    if (_0x116b06.$children) {
      let _0x186ada = _0x116b06.$children;
      _0x186ada.forEach(_0x101a58 => {
        try {
          if (_0x101a58[_0x3ed19d + ""] && _0x101a58[_0x3ed19d + ""] == _0x25be84) {
            _0x41c986.push(_0x101a58);
          }
        } catch (_0x405cc7) {}
      });
    }
  }
  if (_0x41c986.length == 0) {
    return false;
  }
  return _0x41c986;
}
function touchBtn(_0x4fc801) {
  egret.TouchEvent.dispatchTouchEvent(_0x4fc801, egret.TouchEvent.TOUCH_BEGIN, true, true, 111, 111, 0, true);
  egret.TouchEvent.dispatchTouchEvent(_0x4fc801, egret.TouchEvent.TOUCH_TAP, true, true, 111, 111, 0, true);
  egret.TouchEvent.dispatchTouchEvent(_0x4fc801, egret.TouchEvent.TOUCH_END, true, true, 111, 111, 0, true);
}
function splitArray(_0x3acc8d, _0x3f11e5) {
  const _0x43cf14 = [];
  for (let _0x22cbea = 0; _0x22cbea < _0x3acc8d.length; _0x22cbea += _0x3f11e5) {
    _0x43cf14.push(_0x3acc8d.slice(_0x22cbea, _0x22cbea + _0x3f11e5));
  }
  return _0x43cf14;
}
async function findUIs(_0x3369f6, _0x52cab5) {
  while (1) {
    await wait(100);
    var _0x5b4561 = getTouchs(_0x3369f6, _0x52cab5);
    if (_0x5b4561) {
      return _0x5b4561;
    }
    if (!window.nowTask) {
      return false;
    }
  }
}
function getGoalPets(_0x4d17c7) {
  let _0x1c946d = PetManager.getInstance().getAllPets();
  let _0x5472e8 = _0x1c946d.find(_0x350b5a => {
    for (let _0x585624 = 0; _0x585624 < _0x4d17c7.length; _0x585624++) {
      let _0x39c631 = _0x4d17c7[_0x585624].skills.every(_0x2c4b8b => _0x350b5a.skills.includes(_0x2c4b8b)) && (_0x4d17c7[_0x585624].features ? _0x4d17c7[_0x585624].features.includes(_0x350b5a.featureId) : true);
      if (_0x39c631) {
        return _0x39c631;
      }
    }
  });
  return _0x5472e8;
}
function fixBattleRes(_0x2f120d) {
  let _0x18e95b = _0x2f120d.result.playerInfos.find(_0x3cb575 => _0x3cb575.uid == _0x2f120d.uid__);
  if (!_0x18e95b) {
    return _0x2f120d;
  }
  let _0x47e237 = _0x18e95b.teamFlag;
  let _0x1820f7 = _0x2f120d.result.processQueue.find(_0x4b8fe9 => _0x4b8fe9.uid == _0x2f120d.uid__);
  if (_0x2f120d.result.result != 0) {
    if (_0x47e237 == 2 && (_0x2f120d.result.result == 1 || _0x2f120d.result.result == 2)) {
      _0x2f120d.result.result = 3 - _0x2f120d.result.result;
    }
    return _0x2f120d;
  }
  let _0x4651bf = _0x18e95b.crtPetIndex;
  if (_0x1820f7) {
    let _0x54eb76 = _0x1820f7.opInfo;
    if (_0x54eb76 && _0x54eb76.opID == 1) {
      _0x4651bf = _0x54eb76.petIndex;
    }
  } else if (_0x2f120d.result.affects) {
    let _0x547d7e = _0x2f120d.result.affects.find(_0x1a636a => _0x1a636a.crtPetIndex != undefined && _0x1a636a.uid == _0x2f120d.uid__);
    if (_0x547d7e) {
      _0x4651bf = _0x547d7e.crtPetIndex;
    }
  }
  let _0x3cb15c = _0x2f120d.result.playerInfos.findIndex(_0x1ecda9 => _0x1ecda9.teamFlag === _0x47e237);
  _0x2f120d.result.playerInfos[_0x3cb15c].crtPetIndex = _0x4651bf;
  if (_0x1820f7) {
    let _0x2d3a23 = _0x1820f7.opInfo;
    if (_0x2d3a23) {
      if (_0x2d3a23.opID == 2) {
        let _0x1eb21d = _0x1820f7.opInfo.addPP;
        if (_0x1eb21d) {
          let _0xf0caab = _0x18e95b.petInfos[_0x4651bf].useSkills;
          for (let _0x2bf0ef = 0; _0x2bf0ef < _0xf0caab.length; _0x2bf0ef++) {
            _0xf0caab[_0x2bf0ef].crtPP = _0xf0caab[_0x2bf0ef].crtPP + _0x1eb21d;
            let _0x800a59 = petConfig.SkillConfig.getDef(_0xf0caab[_0x2bf0ef]);
            let _0x3e1c90 = parseInt(_0x800a59.maxPP);
            if (_0xf0caab[_0x2bf0ef].crtPP > _0x3e1c90) {
              _0xf0caab[_0x2bf0ef].crtPP = _0x3e1c90;
            }
          }
          _0x18e95b.petInfos[_0x4651bf].useSkills = _0xf0caab;
        }
      }
      if (_0x2d3a23.skillID) {
        _0x18e95b.petInfos[_0x4651bf].useSkills.forEach(_0xb522bb => {
          if (_0xb522bb.id == _0x2d3a23.skillID) {
            _0xb522bb.crtPP--;
          } else {
            "";
          }
        });
      }
    }
  }
  let _0x50e403 = _0x18e95b.petInfos[_0x4651bf].useSkills;
  let _0x7f48ba = [];
  for (let _0x6d44e2 = 0; _0x6d44e2 < _0x50e403.length; _0x6d44e2++) {
    let _0x4e6c74 = petConfig.SkillConfig.getDef(_0x50e403[_0x6d44e2].id);
    _0x7f48ba.push(_0x4e6c74);
  }
  let _0x5836f3 = Array.prototype.concat.apply([], _0x2f120d.result.processQueue.map(_0x35137d => _0x35137d.affects)).filter(_0x148e08 => _0x148e08.uid == _0x2f120d.uid__).map(_0x32cb41 => {
    if (_0x32cb41.onlySkill.length > 0) {
      _0x18e95b.petInfos[_0x4651bf].useSkills.forEach(_0x49fce6 => {
        if (_0x32cb41.onlySkill.indexOf(_0x49fce6.id) != -1) {
          _0x49fce6.crtPP = _0x49fce6.crtPP + _0x32cb41.ppChange;
          let _0x3c2d17 = _0x7f48ba.find(_0x23bc16 => _0x23bc16.id == _0x49fce6.id);
          if (_0x49fce6.crtPP > _0x3c2d17.maxPP) {
            _0x49fce6.crtPP = parseInt(_0x3c2d17.maxPP);
          }
          if (_0x49fce6.crtPP < 0) {
            _0x49fce6.crtPP = 0;
          }
        }
      });
      return 0;
    } else {
      return _0x32cb41.ppChange;
    }
  });
  let _0x143d1f = _0x5836f3.reduce((_0xc1f556, _0x4b0191) => {
    return _0xc1f556 + _0x4b0191;
  }, 0);
  let _0x4ec0ae = _0x2f120d.result.affects.filter(_0x48399f => _0x48399f.uid == _0x2f120d.uid__).map(_0x572397 => {
    if (_0x572397.onlySkill.length > 0) {
      _0x18e95b.petInfos[_0x4651bf].useSkills.forEach(_0x3f6933 => {
        if (_0x572397.onlySkill.indexOf(_0x3f6933.id) != -1) {
          _0x3f6933.crtPP = _0x3f6933.crtPP + _0x572397.ppChange;
          let _0x263b96 = _0x7f48ba.find(_0x2278c8 => _0x2278c8.id == _0x3f6933.id);
          if (_0x3f6933.crtPP > _0x263b96.maxPP) {
            _0x3f6933.crtPP = parseInt(_0x263b96.maxPP);
          }
          if (_0x3f6933.crtPP < 0) {
            _0x3f6933.crtPP = 0;
          }
        }
      });
      return 0;
    } else {
      return _0x572397.ppChange;
    }
  });
  let _0x2a61c3 = _0x4ec0ae.reduce((_0x16614d, _0x4bf091) => {
    return _0x16614d + _0x4bf091;
  }, 0);
  _0x18e95b.petInfos[_0x4651bf].useSkills.forEach(_0x208f73 => {
    _0x208f73.crtPP = _0x208f73.crtPP + _0x143d1f + _0x2a61c3;
    let _0x271b3c = _0x7f48ba.find(_0x23092b => _0x23092b.id == _0x208f73.id);
    if (_0x208f73.crtPP > _0x271b3c.maxPP) {
      _0x208f73.crtPP = parseInt(_0x271b3c.maxPP);
    }
    if (_0x208f73.crtPP < 0) {
      _0x208f73.crtPP = 0;
    }
  });
  _0x2f120d.result.playerInfos[_0x3cb15c].petInfos = _0x18e95b.petInfos;
  return _0x2f120d;
}
if (!window.navigator.userAgent.includes("echo-seer")) {
  $("body").append(`
<div style="position: absolute; z-index: 9999999999999999999999999; top: 20px; left: 40px; " id="menu">
<div id="app">
<el-button id="menu-btn" @click="clickLove" class="custom-button-background" v-if="show_love" style="
                        border-radius: 50%;
                    "></el-button>
<el-button id="menu-btn" v-if="!show_love" @click="clickLove" style="width: 100px !important;"
    class="custom-button-background rounded-border">
</el-button>
<div v-show="!show_love" class="slider-demo-block">
    <el-menu :unique-opened="true">
        <el-menu-item class="rounded-rate" @click="stopTask">
            <span slot="title">停止任务</span>
        </el-menu-item>
        <el-menu-item class="rounded-rate" @click="showLog">
        <span slot="title">弹出日志</span>
    </el-menu-item>
        <el-menu-item index="rate" class="rounded-rate"
            style=" border-bottom: none;height: 20px !important;">
            <i class="el-icon-d-arrow-left" style="font-size: 10px !important;margin: 0 auto !important;"
                @click="doneRate"></i>
            <span style="padding: 0 20px;" @click="resetRate">{{nowRate}}</span>
            <i class="el-icon-d-arrow-right" style="font-size: 10px !important" @click="addRate"></i>
        </el-menu-item>
        <el-menu-item index="rate_index" class="rounded-rate-bar" style="height: 20px !important;">
            <div>
                <el-slider v-model="nowRate" :min="1" :max="128" @input="inputRate" @change="changeRate"
                    :show-tooltip="false" />
            </div>
        </el-menu-item>
    </el-menu>
    <el-scrollbar style="height: 180px !important;">
        <el-menu :unique-opened="true">
            <template v-for="(task, taskIndex) in tasks">
                <el-menu-item v-if="!task.subtasks.length" :index="'end-' + taskIndex"
                    class="rounded-border" @click="task.onClick" :key="'task - ' + taskIndex">
                    {{ task.title }}
                </el-menu-item>

                <el-popover v-else trigger="click" placement="right" :key="'popover - ' + taskIndex">
                    <el-scrollbar style="height:auto !important;max-height: 120px !important;">
                        <el-menu class="scrollbar_list">
                            <el-menu-item v-for="(subtask, subtaskIndex) in task.subtasks"
                                :key="'subtask - ' + taskIndex + ' - ' + subtaskIndex"
                                class="rounded-border" @click="subtask.onClick">
                                {{ subtask.title }}
                            </el-menu-item>
                        </el-menu>
                    </el-scrollbar>
                    <el-menu-item slot="reference" class="rounded-border">{{ task.title
                        }}</el-menu-item>
                </el-popover>
            </template>
        </el-menu>
    </el-scrollbar>
</div>
<el-dialog title="echo官网" :visible.sync="addVis" width="60%" >
    <span>{{address}}</span>&nbsp;
    <br>
    <span>点击确认复制网址,浏览器打开</span>&nbsp;
    <span slot="footer" class="dialog-footer">
        <el-button  @click="CopyContent(1)">确 定</el-button>
    </span>
</el-dialog>

<el-dialog title="echo交流群" :visible.sync="QQGroupsVis" width="60%" >
    <span>{{groups[0]}}</span>&nbsp;
    <span>{{groups[1]}}</span>&nbsp;
    <br>
    <span>{{groups[2]}}</span>&nbsp;
    <span>{{groups[3]}}</span>&nbsp;
    <br>
    <span>{{groups[4]}}</span>&nbsp;
    <br>
    <br>
    <span>点击确认复制群号</span>&nbsp;
    <span slot="footer" class="dialog-footer">
        <el-button  @click="CopyContent(2)">确 定</el-button>
    </span>
</el-dialog>

<el-dialog title="输入变速倍率" :visible.sync="dialogSpeedVisible">
      <el-input v-model="txtNowRate" autocomplete="off"></el-input>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogSpeedVisible = false">取 消</el-button>
    <el-button type="primary" @click="changeByIput">确 定</el-button>
  </div>
</el-dialog>


</div>
</div>
`);
  let fixDialog = // TOLOOK
  setInterval(() => {
    if (document.getElementsByClassName("taomeesdk-dialog__body")[0]) {
      document.getElementsByClassName("taomeesdk-dialog__body")[0].style.width = "";
      document.getElementsByClassName("taomeesdk-dialog__body")[0].style.height = "300px";
      clearInterval(fixDialog);
    }
  }, 200);
  new Vue({
    el: "#app",
    data() {
      const _0x40a672 = {
        groups: ["①群:283260916", "②群:113884358", "③群:744308936", "④群:235816877", "⑤群:435644842"],
        address: "http://www.echo61.online",
        QQGroupsVis: false,
        addVis: false,
        rate: 1,
        nowRate: 1,
        txtNowRate: "1",
        dialogSpeedVisible: false,
        tasks: [{
          title: "常用功能",
          subtasks: [{
            title: "融合助手",
            taskName: "RongHeHelper"
          }, {
            title: "时光之旅",
            taskName: "Exploratorymaterials"
          }, {
            title: "抽轮盘",
            taskName: "Pool"
          }, {
            title: "打野怪",
            taskName: "FightMapBoss"
          }, {
            title: "学习力自动",
            taskName: "learnAdd"
          }, {
            title: "雇佣刷豆",
            taskName: "HireCoin"
          }, {
            title: "赛尔豆作战",
            taskName: "CoinBigBattle"
          }, {
            title: "星际迷航",
            taskName: "Trek"
          }, {
            title: "关卡捕捉",
            taskName: "LevelCatch"
          }, {
            title: "地图捕捉",
            taskName: "MapCatch"
          }, {
            title: "战斗阶梯",
            taskName: "Ladder"
          }, {
            title: "教皇",
            taskName: "Pope"
          }, {
            title: "采矿",
            taskName: "Mine"
          }]
        }, {
          title: "一键专区",
          subtasks: [{
            title: "一键日常",
            taskName: "DailyTask"
          }, {
            title: "一键杂项",
            taskName: "Misc"
          }, {
            title: "一键战队任务",
            taskName: "Team"
          }, {
            title: "一键委派",
            taskName: "Delegate"
          }, {
            title: "一键商店",
            taskName: "Shop"
          }, {
            title: "一键放生",
            taskName: "ReleasePets"
          }, {
            title: "一键刷水滴",
            taskName: "Kloswamp"
          }]
        }, {
          title: "PVP专区",
          subtasks: [{
            title: "乱斗挂机",
            taskName: "luandou"
          }, {
            title: "巅峰挂机",
            taskName: "dianfeng"
          }, {
            title: "竞技挂机",
            taskName: "jingji"
          }, {
            title: "自由挂机",
            taskName: "ziyou"
          }, {
            title: "巅峰记牌器",
            taskName: "Pvpremind"
          }]
        }, {
          title: "常规活动",
          subtasks: [{
            title: "豆子剧情",
            taskName: "Coinstory"
          }, {
            title: "经验剧情",
            taskName: "Expstory"
          }, {
            title: "鲁克补给",
            taskName: "lukeAct"
          }, {
            title: "探索小分队",
            taskName: "Timetask"
          }, {
            title: "派特博士",
            taskName: "Paitepet"
          }]
        }, {
          title: "默认配置",
          subtasks: [],
          taskName: "Defaultsetup"
        }, {
          title: "888活动",
          subtasks: [],
          taskName: "Activity888"
        }, {
          title: "限时活动",
          subtasks: [],
          taskName: "LimitActivity"
        }, {
          title: "娱乐功能",
          subtasks: [{
            title: "金灿灿",
            taskName: "talentAll31"
          }]
        }, {
          title: "关于",
          subtasks: [{
            title: "echo官网"
          }, {
            title: "交流群"
          }]
        }],
        more_menu: false,
        show_love: true,
        activeIndex: "1",
        activeIndex2: "1"
      };
      return _0x40a672;
    },
    methods: {
      showLog() {
        if (winLog) {
          winLog.onOpenPanel();
        }
      },
      changeByIput() {
        if (!isNaN(this.txtNowRate.trim())) {
          this.nowRate = parseInt(this.txtNowRate);
          this.dialogSpeedVisible = false;
        }
      },
      stopTask() {
        try {
          window.nowTask.stop();
          0;
        } catch (_0x229530) {
          MFC.bubbleAlert.showAlert("当前无任务");
        }
      },
      CopyContent(_0x3e0326) {
        if (_0x3e0326 == 1) {
          var _0x73b3d2 = this.address;
          this.addVis = false;
        }
        if (_0x3e0326 == 2) {
          var _0x73b3d2 = this.groups.join("\n");
          this.QQGroupsVis = false;
        }
        let _0x4a4358 = document.createElement("input");
        document.body.appendChild(_0x4a4358);
        _0x4a4358.setAttribute("value", _0x73b3d2);
        _0x4a4358.select();
        if (document.execCommand("copy")) {
          document.execCommand("copy");
        }
        document.body.removeChild(_0x4a4358);
      },
      doneRate() {
        if (this.nowRate - 2 > 0) {
          this.nowRate = this.nowRate - 2;
          return;
        }
        if (this.nowRate - 2 <= 0) {
          this.nowRate = 1;
        }
      },
      addRate() {
        if (this.nowRate + 2 <= 128) {
          this.nowRate = this.nowRate + 2;
          return;
        }
        if (this.nowRate + 2 == 128) {
          this.nowRate = 128;
        }
      },
      resetRate() {
        this.dialogSpeedVisible = true;
      },
      inputRate() {
        try {
          global.timer.change(1 / this.nowRate);
        } catch (_0x94aa9) {}
      },
      changeRate(_0xcb410c) {
        this.nowRate = parseFloat(_0xcb410c);
      },
      clickLove() {
        if (!this.show_love) {
          this.show_love = true;
        } else {
          this.show_love = false;
        }
      },
      handleTaskClick(_0x45c61c) {
        console.log(_0x45c61c.title + " clicked");
        let _0x55a7b2 = this.tasks.find(_0x5d6709 => _0x5d6709.title == _0x45c61c.title);
        this.excuteTask(_0x55a7b2);
      },
      handleSubtaskClick(_0x53ea0a) {
        console.log(_0x53ea0a.title + " clicked");
        let _0x3bf817 = this.tasks.flatMap(_0x5dad9c => _0x5dad9c.subtasks).find(_0x232e7d => _0x232e7d.title === _0x53ea0a.title);
        console.log(_0x3bf817);
        this.excuteTask(_0x3bf817);
      },
      excuteTask(_0x21c8cb) {
        if (_0x21c8cb.title == "交流群") {
          this.QQGroupsVis = true;
          return;
        }
        if (_0x21c8cb.title == "echo官网") {
          this.addVis = true;
          return;
        }
        if (UserManager.getInstance().userInfo) {
          try {
            if (echoServerTime == "null") {
              MFC.bubbleAlert.showCustomAlert("设备并未登录!");
              return;
            }
            if (echoServerTime && echoNowTime) {
              let _0x302bef = new Date(echoServerTime).getTime();
              if (_0x302bef <= echoNowTime) {
                MFC.bubbleAlert.showCustomAlert("已到期,请前往echo官网进行续费,并重启echo");
                return;
              }
            } else {
              MFC.bubbleAlert.showCustomAlert("请稍等,正在加载配置!");
              return;
            }
          } catch (_0x45a812) {}
          if (window.nowTask) {
            MFC.bubbleAlert.showCustomAlert("当前已有任务正在运行!请先停止");
            addGameLog("当前已有任务正在运行,请先停止!");
          } else {
            eval("window.nowTask = new " + _0x21c8cb.taskName + "(); window.nowTask.start()");
          }
        } else {
          MFC.bubbleAlert.showCustomAlert("请先登录!");
        }
      },
      initializeTaskHandlers() {
        this.tasks.forEach(_0x1c0914 => {
          _0x1c0914.onClick = () => this.handleTaskClick(_0x1c0914);
          _0x1c0914.subtasks.forEach(_0x157760 => {
            _0x157760.onClick = () => this.handleSubtaskClick(_0x157760);
          });
        });
      }
    },
    mounted() {},
    created() {
      this.initializeTaskHandlers();
    }
  });
  const menuEl = document.getElementById("menu");
  const menu_btn = document.getElementById("menu-btn");
  const pageWidth = window.innerWidth;
  const pageHeight = window.innerHeight;
  menu_btn.addEventListener("mousedown", dragMouseDown);
  menu_btn.addEventListener("touchstart", touchStart);
  function dragMouseDown(_0x280b79) {
    _0x280b79.preventDefault();
    document.addEventListener("mousemove", _0x2dc0ff);
    document.addEventListener("mouseup", _0x39eb32);
    let _0xb822a4 = _0x280b79.clientX;
    let _0x4c517c = _0x280b79.clientY;
    function _0x2dc0ff(_0x15106b) {
      _0x15106b.preventDefault();
      const _0x12c819 = _0xb822a4 - _0x15106b.clientX;
      const _0x5c7068 = _0x4c517c - _0x15106b.clientY;
      _0xb822a4 = _0x15106b.clientX;
      _0x4c517c = _0x15106b.clientY;
      let _0x24942f = menuEl.offsetTop - _0x5c7068;
      let _0x195f17 = menuEl.offsetLeft - _0x12c819;
      _0x24942f = Math.max(0, Math.min(_0x24942f, pageHeight - menuEl.offsetHeight));
      _0x195f17 = Math.max(0, Math.min(_0x195f17, pageWidth - menuEl.offsetWidth));
      menuEl.style.top = _0x24942f + "px";
      menuEl.style.left = _0x195f17 + "px";
    }
    function _0x39eb32() {
      document.removeEventListener("mouseup", _0x39eb32);
      document.removeEventListener("mousemove", _0x2dc0ff);
    }
  }
  function touchStart(_0xf8de8c) {
    startX = _0xf8de8c.touches[0].clientX;
    startY = _0xf8de8c.touches[0].clientY;
    menuEl.addEventListener("touchmove", touchMove);
    menuEl.addEventListener("touchend", touchEnd);
    menuEl.addEventListener("touchcancel", touchCancel);
  }
  function touchMove(_0x12a0d8) {
    const _0x17dc20 = _0x12a0d8.touches[0].clientX;
    const _0x47d4b0 = _0x12a0d8.touches[0].clientY;
    const _0x5ecfa7 = _0x17dc20 - startX;
    const _0xbebff6 = _0x47d4b0 - startY;
    let _0x438646 = menuEl.offsetTop + _0xbebff6;
    let _0x1e0c64 = menuEl.offsetLeft + _0x5ecfa7;
    _0x438646 = Math.max(0, Math.min(_0x438646, pageHeight - menuEl.offsetHeight));
    _0x1e0c64 = Math.max(0, Math.min(_0x1e0c64, pageWidth - menuEl.offsetWidth));
    menuEl.style.top = _0x438646 + "px";
    menuEl.style.left = _0x1e0c64 + "px";
    startX = _0x17dc20;
    startY = _0x47d4b0;
  }
  function touchEnd(_0x23b90d) {
    menuEl.removeEventListener("touchmove", touchMove);
    menuEl.removeEventListener("touchend", touchEnd);
    menuEl.removeEventListener("touchcancel", touchCancel);
  }
  function touchCancel(_0x314c9c) {
    menuEl.removeEventListener("touchmove", touchMove);
    menuEl.removeEventListener("touchend", touchEnd);
    menuEl.removeEventListener("touchcancel", touchCancel);
  }
}
  
