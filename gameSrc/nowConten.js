var obfuscator = "https://uutool.cn/js/";
var gameVersion = "v3.5.85 2024/11/29\necho 用热爱铸成";
var 开发日志 = `0.巅峰狂野模式竞技模式  调整为后台运行,支持倍速,自动领取周胜利奖励,自动领取日胜利奖励,段位奖励 
1.竞技挂机调整为后台运行,支持倍速,自动领取周胜利奖励,自动领取日胜利奖励
2.乱斗挂机调整为后台运行,并新增主场模式,增加设置对战次数 和显示对战情况 回合数大于30强制投降
3.限时活动新增滑雪
4.限时活动新增古王特调
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
  } catch (_0x3ca005) {}
}, 200);
let getLoginToken = // TOLOOK
setInterval(() => {
  try {
    if (personalCenter.PersonalCenterSetup) {
      var _0x217ec1 = personalCenter.PersonalCenterSetup.prototype.childrenCreated;
      personalCenter.PersonalCenterSetup.prototype.childrenCreated = function () {
        let _0x2b4cab = new eui.Button();
        _0x2b4cab.x = this.parent.width / 2 - _0x2b4cab.width / 2 + 10;
        _0x2b4cab.y = 50;
        _0x2b4cab.skinName = getTextBtnSkinName("令   牌");
        BC.addEvent(_0x2b4cab, _0x2b4cab, egret.TouchEvent.TOUCH_TAP, () => {
          try {
            let _0x51c139 = document.createElement("input");
            document.body.appendChild(_0x51c139);
            const _0x2bfd47 = {
              mimiID: localStorage["mimiID" + MFC.userInfo.uid],
              duid: localStorage["taomee-sdk-duid"]
            };
            let _0x139b04 = _0x2bfd47;
            _0x51c139.setAttribute("value", JSON.stringify(_0x139b04));
            _0x51c139.select();
            if (document.execCommand("copy")) {
              document.execCommand("copy");
            }
            document.body.removeChild(_0x51c139);
            MFC.bubbleAlert.showAlert("复制令牌参数成功!");
          } catch (_0x1e0e92) {
            MFC.bubbleAlert.showAlert("复制异常,请重新启动再尝试!");
          }
        });
        this.parent.addChild(_0x2b4cab);
        _0x217ec1.call(this);
      };
      clearInterval(getLoginToken);
    }
  } catch (_0x1f23a) {}
}, 200);
var testBtn;
var rongheData;
let selectPetTimer = // TOLOOK
setInterval(() => {
  try {
    if (selectPet.SelectPet.prototype.childrenCreated) {
      var _0x3b01d7 = selectPet.SelectPet.prototype.childrenCreated;
      selectPet.SelectPet.prototype.childrenCreated = function () {
        testBtn = new eui.Button();
        testBtn.x = this.parent.width / 2 - 145;
        testBtn.y = -180;
        testBtn.skinName = getTextBtnSkinName("获   取");
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          GlobalDispatcher.getInstance().dispatchEventWith("open_module", false, rongheData);
        });
        this.parent.addChild(testBtn);
        _0x3b01d7.call(this);
      };
      clearInterval(selectPetTimer);
    }
  } catch (_0x7ea0e7) {}
}, 200);
var ptChangeLists = null;
let realgetConfTimer = // TOLOOK
setInterval(() => {
  try {
    if (BaseSkinnableContainer.prototype.childrenCreated) {
      var _0x53bd5e = BaseSkinnableContainer.prototype.childrenCreated;
      BaseSkinnableContainer.prototype.childrenCreated = function () {
        if (this.$Component && this.$Component[1] == "PetListBarItemSkin") {
          ptChangeLists = this;
        }
        return _0x53bd5e.call(this);
      };
      clearInterval(realgetConfTimer);
    }
  } catch (_0x2ae757) {
    logger(_0x2ae757);
  }
}, 200);
let timeStop = // TOLOOK
setInterval(() => {
  try {
    if (preFight.PreFight) {
      var _0x5e7f72 = preFight.PreFight.prototype.stopMove;
      preFight.PreFight.prototype.stopMove = function (_0x4b5311) {
        this.startTime = 99999999;
        return _0x5e7f72.call(this, _0x4b5311);
      };
      clearInterval(timeStop);
    }
  } catch (_0x3cf915) {}
}, 200);
let learnskillTimer = // TOLOOK
setInterval(() => {
  try {
    if (petProperty.PetProperty.prototype.childrenCreated) {
      var _0x23c4b4 = petProperty.PetProperty.prototype.childrenCreated;
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
          let _0x5c0d19 = new Date(window.nowCheckBagPet.getTime * 1000);
          testTxt = createLabel({
            text: "获得时间 " + deden.DateUtil.dateFormat(_0x5c0d19, "yyyy-MM-dd hh:mm:ss"),
            y: 65,
            textColor: 9960957
          });
          testTxt.x = this.parent.width / 2 - 300;
          testTxt.y = 13;
          this.parent.addChild(testTxt);
        } catch (_0x48a19a) {}
        _0x23c4b4.call(this);
      };
      clearInterval(learnskillTimer);
    }
  } catch (_0x48a894) {}
}, 200);
let relationTimer = // TOLOOK
setInterval(() => {
  try {
    if (preFight.PreFight.prototype.childrenCreated) {
      var _0x2f2bbb = preFight.PreFight.prototype.childrenCreated;
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
        _0x2f2bbb.call(this);
      };
      clearInterval(relationTimer);
    }
  } catch (_0x453c0d) {}
}, 200);
let cztalentTimer = // TOLOOK
setInterval(() => {
  try {
    if (geneCombin.GeneCombin.prototype.childrenCreated) {
      var _0x183317 = geneCombin.GeneCombin.prototype.childrenCreated;
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
        _0x183317.call(this);
      };
      clearInterval(cztalentTimer);
    }
  } catch (_0x20148f) {}
}, 200);
let expUpTimer = // TOLOOK
setInterval(() => {
  try {
    if (expDevice.ExpDevice.prototype.childrenCreated) {
      var _0x267704 = expDevice.ExpDevice.prototype.childrenCreated;
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
        _0x267704.call(this);
      };
      clearInterval(expUpTimer);
    }
  } catch (_0x46f9d6) {}
}, 200);
let relicsfjTimer = // TOLOOK
setInterval(() => {
  try {
    if (holeRelicBag.HoleRelicBag.prototype.childrenCreated) {
      var _0x154a14 = holeRelicBag.HoleRelicBag.prototype.childrenCreated;
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
        _0x154a14.call(this);
      };
      clearInterval(relicsfjTimer);
    }
  } catch (_0x1e53eb) {}
}, 200);
var xiangzi = 0;
document.title = "赛尔号启航 Echo登录器";
let timeID = // TOLOOK
setInterval(() => {
  try {
    if (UserManager.getInstance().userInfo) {
      let _0x2722c5 = UserManager.getInstance().userInfo;
      let _0x1390a9 = "当前状态:在线 用户:" + _0x2722c5.roleNick + " 【uid " + _0x2722c5.uid + "】 超No等级:" + _0x2722c5.vipLevel;
      document.title = _0x1390a9;
      MFC.bubbleAlert.showAlert("欢迎" + _0x2722c5.roleNick + "进入启航!");
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
      var _0x5760ff = new cs_set_invitation_status();
      if (localStorage.getItem("setup4") === "true") {
        _0x5760ff.status = MFC.userInfo.isInvitationPVP = 1;
      } else {
        _0x5760ff.status = MFC.userInfo.isInvitationPVP = 0;
      }
      MFC.online.send(_0x5760ff, function (_0x4be83e) {
        if (_0x4be83e) {
          MFC.userInfo.isInvitationPVP = _0x4be83e.isInvitationPVP;
        }
      });
      let _0x4d4f4d = localStorage.getItem("setup5") === "true" ? "close" : "open";
      egret.localStorage.setItem(MFC.userInfo.uid + "_BattleEmoji", _0x4d4f4d);
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
      let _0x5d31ea = [8, 10, 12, 14, 16, 18, 20];
      let _0xdbc87 = MFC.serverTimer.date;
      let _0x2c7084 = "" + _0xdbc87.getFullYear() + _0xdbc87.getMonth() + _0xdbc87.getDate();
      let _0x1e122c = _0x5d31ea.splice(Math.floor((Number(_0x2c7084) * 9301 + 49297) % 233280 / 233280 * _0x5d31ea.length), 1)[0];
      let _0x2dd02d = _0x5d31ea.splice(Math.floor((Number(_0x2c7084 + 1) * 9301 + 49297) % 233280 / 233280 * _0x5d31ea.length), 1)[0];
      addGameLog("布莱克出现时间" + _0x1e122c + "点和" + _0x2dd02d + "点");
      clearInterval(timeID);
    }
  } catch (_0x29fb3d) {
    logger(_0x29fb3d);
  }
}, 1000);
var pvpContent = "";
var petgroups = {};
var mergeItem = "";
var petfumo = [];
if (window.location.href.startsWith("https://s.61.com")) {
  window.recv_message = function (_0x1950ac, _0x1b8134) {
    if (window.nowTask && window.nowTask.recvList && Array.isArray(window.nowTask.recvList)) {
      window.nowTask.recvList.forEach(_0xfdc9f9 => {
        if (_0xfdc9f9.watchEventName === _0x1950ac) {
          if (!_0xfdc9f9.gameBody) {
            _0xfdc9f9.gameBody = [];
          }
          _0xfdc9f9.gameBody.push(_0x1b8134);
        }
      });
    }
    try {
      if (_0x1950ac == "on_user_manager_change" && (_0x1b8134.key == "pvpPointWild" || _0x1b8134.key == "pvpPoint")) {
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
    } catch (_0x487fc0) {
      logger(_0x487fc0);
    }
    try {
      logger("接受", _0x1950ac, _0x1b8134, eval(_0x1950ac).prototype.constructor.__cmd);
    } catch (_0x2e2cf2) {
      logger("事件读取cmd异常");
    }
    if (_0x1950ac == "sc_get_mapBoss_data") {
      try {
        window.nowTask.reward = JSON.parse(_0x1b8134.raw).reward;
      } catch (_0xeead2a) {}
    }
    if (_0x1950ac == "sc_notify_change_pet") {
      try {
        const _0x2b8056 = JSON.parse(_0x1b8134.raw);
        const _0x1afc93 = _0x2b8056.pet;
        if (_0x1afc93 && _0x1afc93.level === 1) {
          window.nowTask.CatchPetDatas = _0x2b8056;
        }
      } catch (_0x4b3c66) {}
    }
    if (_0x1950ac == "sc_get_campaign_pet_challenge_boss") {
      try {
        let _0x32d35c = JSON.parse(_0x1b8134.raw);
        let _0xd87a4b = _0x32d35c.todayLimitAttr.map(_0x2900a3 => petConfig.ElemTypesConfig.getDef(_0x2900a3).cn);
        addGameLog("当前极限挑战属性: " + _0xd87a4b.join(","));
      } catch (_0x2c9ccf) {}
    }
    if (_0x1950ac == "sc_get_effort_value") {
      try {
        logger("监听到了学习力!!!");
        let _0x27d073 = JSON.parse(_0x1b8134.raw);
        if (window.addPet != null) {
          window.addPet.haveLearns = _0x27d073.curEffortValue;
        }
      } catch (_0x13d925) {}
    }
    if (_0x1950ac == "sc_pvp_notify_enter_battle" && (JSON.parse(_0x1b8134.raw).pvpType == 2001 || JSON.parse(_0x1b8134.raw).pvpType == 5 || JSON.parse(_0x1b8134.raw).pvpType == 2000 || JSON.parse(_0x1b8134.raw).pvpType == 2)) {
      dianfengstatus = true;
    }
    if (_0x1950ac == "sc_battle_notify_round_result") {
      // TOLOOK
      setTimeout(() => {
        try {
          let _0x4903d2 = ClientOPManager.getInstance().result.playerInfos[0].getPetInfos();
          let _0x2f99ef = ClientOPManager.getInstance().result.playerInfos[1].getOPPetInfo().elemType;
          _0x4903d2.forEach(_0x5b5ded => {
            let _0x2d877d = ptChangeLists.parent.$children.find(_0x140dea => _0x140dea.$name == "PetListBarItem_" + _0x5b5ded.petID);
            if (_0x2d877d) {
              let _0x50a485 = petConfig.RelationManager.getInstance().getRelationValue(_0x2f99ef, _0x5b5ded.elemType);
              let _0x2eaa26 = petConfig.RelationManager.getInstance().getRelationValue(_0x5b5ded.elemType, _0x2f99ef);
              _0x50a485 = getRealAndBeReal(_0x50a485);
              _0x2eaa26 = getRealAndBeReal(_0x2eaa26);
              if (_0x2d877d.$children.length > 12) {
                _0x2d877d.$children[11].text = _0x2eaa26.text + " >";
                _0x2d877d.$children[11].textColor = _0x2eaa26.color;
                _0x2d877d.$children[12].text = "< " + _0x50a485.text;
                _0x2d877d.$children[12].textColor = _0x50a485.color;
              } else {
                const _0x236749 = {
                  text: _0x2eaa26.text + " >",
                  y: -40,
                  bold: true,
                  stroke: 1,
                  strokeColor: 9297,
                  textColor: _0x2eaa26.color,
                  size: 14,
                  fontFamily: "楷体",
                  bold: 1,
                  textAlign: "center"
                };
                let _0x59cab1 = createLabel(_0x236749);
                _0x59cab1.x = _0x2d877d.width / 2 - _0x59cab1.width / 2;
                const _0x5074e5 = {
                  text: "< " + _0x50a485.text,
                  y: -20,
                  bold: true,
                  stroke: 1,
                  strokeColor: 9297,
                  textColor: _0x50a485.color,
                  size: 14,
                  fontFamily: "楷体",
                  bold: 1,
                  textAlign: "center"
                };
                let _0x49e295 = createLabel(_0x5074e5);
                _0x49e295.x = _0x2d877d.width / 2 - _0x49e295.width / 2;
                _0x2d877d.addChild(_0x59cab1);
                _0x2d877d.addChild(_0x49e295);
              }
            }
          });
        } catch (_0x2c0bfd) {}
      }, 1400);
      logger("##############对战结果###############", JSON.parse(_0x1b8134.raw).result.result);
      logger("对战OP!" + JSON.parse(_0x1b8134.raw).result.playerInfos.find(_0x441faf => _0x441faf.uid == MFC.userInfo.uid).nextRoundOP);
      if (JSON.parse(_0x1b8134.raw).result.result != 0) {
        if (pokers != null) {
          let _0x51a05c = // TOLOOK
          setInterval(() => {
            let _0x411f60 = MFC.rootLayer.removeChild(pokers);
            if (_0x411f60 != null) {
              pokers.y = 80;
              pokers.x = 20;
              pokers.oldy = null;
              pokers.oldx = null;
              pokers.skinName = getTextBtnNullImageSkinName("巅峰记牌器已开启");
              MFC.rootLayer.addChild(pokers);
              clearInterval(_0x51a05c);
            }
          }, 1000);
        }
      }
      if (JSON.parse(_0x1b8134.raw).result.result == 1 || JSON.parse(_0x1b8134.raw).result.result == 2) {
        dianfengstatus = false;
      }
      try {
        if (dianfengstatus) {
          if (JSON.parse(_0x1b8134.raw).result.roundNum == 0) {
            petgroups = new Map();
            let _0x1f919b = JSON.parse(_0x1b8134.raw).result.playerInfos;
            pvpContent = _0x1f919b[0].uid === MFC.userInfo.uid ? _0x1f919b[1] : _0x1f919b[0];
            if (_0x1f919b[0].uid === MFC.userInfo.uid) {
              if (_0x1f919b[0].crtPetIndex == -1) {
                _0x1f919b[0].crtPetIndex = 0;
              }
            } else if (_0x1f919b[1].crtPetIndex == -1) {
              _0x1f919b[1].crtPetIndex = 0;
            }
            let _0x47fe0b = _0x1f919b[0].uid === MFC.userInfo.uid ? _0x1f919b[0].petInfos[_0x1f919b[0].crtPetIndex].elemType : _0x1f919b[1].petInfos[_0x1f919b[1].crtPetIndex].elemType;
            let _0x2f917c = JSON.parse(_0x1b8134.raw).result.processQueue[0].uid === MFC.userInfo.uid ? JSON.parse(_0x1b8134.raw).result.processQueue[1].affects : JSON.parse(_0x1b8134.raw).result.processQueue[0].affects;
            let _0x209149 = _0x2f917c.filter(function (_0x334ada) {
              return _0x334ada.id >= 110001 && xls.enchanting.getItems().filter(function (_0x23ff81) {
                return _0x23ff81.Affects.slice(0, 6).indexOf(_0x334ada.id) !== -1;
              }).length > 0;
            });
            let _0x79cf0c;
            if (_0x209149.length > 0) {
              _0x79cf0c = xls.enchanting.getItems().filter(function (_0x4383c8) {
                return _0x4383c8.Affects.slice(0, 6).indexOf(_0x209149[0].id) !== -1;
              })[0].name;
            } else {
              _0x79cf0c = "无。";
            }
            pvpContent = pvpContent.petInfos;
            outputStr = "";
            for (var _0x55e746 = 0; _0x55e746 < pvpContent.length; _0x55e746++) {
              if (pvpContent[_0x55e746].getTime) {
                let _0x26934 = pvpContent[_0x55e746].getTime.toString();
                petgroups.set(_0x26934, pvpContent[_0x55e746]);
                petgroups.get(_0x26934).name = PetConfig.getDef(pvpContent[_0x55e746].petID).name;
                petgroups.get(_0x26934).kezhi = petConfig.RelationManager.getInstance().getRelationValue(_0x47fe0b, pvpContent[_0x55e746].elemType);
                petgroups.get(_0x26934).fumo = _0x79cf0c;
                if (_0x79cf0c.indexOf("无") == -1) {
                  petfumo[_0x26934] = _0x79cf0c;
                }
              }
            }
            if (pokers != null) {
              outputStr = "";
              let _0x5540c6 = Array.from(petgroups.keys());
              _0x5540c6.forEach(_0x3b34e9 => {
                outputStr = outputStr + ("\n" + PetConfig.getDef(petgroups.get(_0x3b34e9).petID).name + " HP: " + petgroups.get(_0x3b34e9).crtHp + " 伤害系数:" + petgroups.get(_0x3b34e9).kezhi + " 附魔:" + petgroups.get(_0x3b34e9).fumo);
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
            let _0x3ce59a = JSON.parse(_0x1b8134.raw).result.playerInfos;
            pvpContent = _0x3ce59a[0].uid === MFC.userInfo.uid ? _0x3ce59a[1] : _0x3ce59a[0];
            pvpContent = pvpContent.petInfos;
            if (_0x3ce59a[0].uid === MFC.userInfo.uid) {
              if (_0x3ce59a[0].crtPetIndex == -1) {
                _0x3ce59a[0].crtPetIndex = 0;
              }
            } else if (_0x3ce59a[1].crtPetIndex == -1) {
              _0x3ce59a[1].crtPetIndex = 0;
            }
            let _0x5dd862 = _0x3ce59a[0].uid === MFC.userInfo.uid ? _0x3ce59a[0].petInfos[_0x3ce59a[0].crtPetIndex].elemType : _0x3ce59a[1].petInfos[_0x3ce59a[1].crtPetIndex].elemType;
            let _0x529664 = [];
            if (JSON.parse(_0x1b8134.raw).result.processQueue[0].uid === MFC.userInfo.uid) {
              if (JSON.parse(_0x1b8134.raw).result.processQueue[1]) {
                _0x529664 = JSON.parse(_0x1b8134.raw).result.processQueue[1].affects;
              }
            } else if (JSON.parse(_0x1b8134.raw).result.processQueue[0]) {
              _0x529664 = JSON.parse(_0x1b8134.raw).result.processQueue[0].affects;
            }
            let _0x4a3e5e = _0x529664.filter(function (_0x1e464d) {
              return _0x1e464d.id >= 110001 && xls.enchanting.getItems().filter(function (_0x119242) {
                return _0x119242.Affects.slice(0, 6).indexOf(_0x1e464d.id) !== -1;
              }).length > 0;
            });
            let _0xd19025;
            if (_0x4a3e5e.length > 0) {
              _0xd19025 = xls.enchanting.getItems().filter(function (_0x2c29d6) {
                return _0x2c29d6.Affects.slice(0, 6).indexOf(_0x4a3e5e[0].id) !== -1;
              })[0].name;
            } else {
              _0xd19025 = "无。";
            }
            for (var _0x55e746 = 0; _0x55e746 < pvpContent.length; _0x55e746++) {
              if (pvpContent[_0x55e746].getTime) {
                let _0x5937c3 = pvpContent[_0x55e746].getTime.toString();
                petgroups.set(_0x5937c3, pvpContent[_0x55e746]);
                petgroups.get(_0x5937c3).name = PetConfig.getDef(pvpContent[_0x55e746].petID).name;
                petgroups.get(_0x5937c3).kezhi = petConfig.RelationManager.getInstance().getRelationValue(_0x5dd862, pvpContent[_0x55e746].elemType);
                petgroups.get(_0x5937c3).fumo = petfumo[_0x5937c3] !== undefined ? petfumo[_0x5937c3] : "无。";
                if (_0xd19025.indexOf("无") == -1) {
                  petfumo[_0x5937c3] = _0xd19025;
                }
              }
            }
            if (pokers != null) {
              outputStr = "";
              if (JSON.parse(_0x1b8134.raw).result.processQueue.length == 1 && JSON.parse(_0x1b8134.raw).result.processQueue[0].uid !== MFC.userInfo.uid) {
                let _0x1be83c = JSON.parse(_0x1b8134.raw).result.processQueue[0].uid == MFC.userInfo.uid ? JSON.parse(_0x1b8134.raw).result.processQueue[1].opInfo.petIndex : JSON.parse(_0x1b8134.raw).result.processQueue[0].opInfo.petIndex;
                let _0x21ff1b = play[0].uid == MFC.userInfo.uid ? play[1].petInfos[_0x1be83c].getTime : play[0].petInfos[_0x1be83c].getTime;
                let _0x1446ef = _0x21ff1b.toString();
                if (_0xd19025.indexOf("无") == -1) {
                  petfumo[_0x1446ef] = _0xd19025;
                }
              } else {
                let _0x1d9c71 = Array.from(petgroups.keys());
                _0x1d9c71.forEach(_0x529844 => {
                  outputStr = outputStr + ("\n" + PetConfig.getDef(petgroups.get(_0x529844).petID).name + " HP: " + petgroups.get(_0x529844).crtHp + " 伤害系数:" + petgroups.get(_0x529844).kezhi + " 附魔:" + petgroups.get(_0x529844).fumo);
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
      } catch (_0x1de748) {
        logger(_0x1de748);
      }
    }
  };
  window.send_message = function (_0x2dc9b7, _0x2aa408) {
    try {
      logger("发送", _0x2dc9b7, _0x2aa408, eval(_0x2dc9b7).prototype.constructor.__cmd);
    } catch (_0x22b01d) {
      logger(_0x22b01d);
    }
  };
  var intervalId = // TOLOOK
  setInterval(listen_socket, 500);
  function listen_socket() {
    console.log("当前intervalId:" + intervalId);
    const _0x53d8cc = {
      KelAZ: "undefined",
      BsONg: function (_0x56ffe2, _0x1bb7ec) {
        return _0x56ffe2 !== _0x1bb7ec;
      },
      Ylsoc: function (_0x6a634d, _0x30dfe2) {
        return _0x6a634d !== _0x30dfe2;
      },
      ZtiHW: ".egret-player"
    };
    if (typeof GlobalSocket !== _0x53d8cc.KelAZ && _0x53d8cc.BsONg(typeof GlobalSocket.PROTOCOL_SOCKET, "undefined") && typeof GlobalSocket.PROTOCOL_SOCKET.socket !== "undefined" && _0x53d8cc.Ylsoc(typeof GlobalSocket.PROTOCOL_SOCKET.socket.socket, _0x53d8cc.KelAZ) && typeof GlobalSocket.PROTOCOL_SOCKET.socket.socket.socket !== "undefined") {
      logger("hook封包 成功 " + intervalId);
      if (!winLog) {
        produceLog();
      }
      clearInterval(intervalId);
      $(_0x53d8cc.ZtiHW).css("z-index", 0);
      intervalId = null;
      let _0x136390 = GlobalSocket.PROTOCOL_SOCKET.socket.socket.socket;
      _0x136390.onmessage = new Proxy(_0x136390.onmessage, {
        apply: function (_0x3479d3, _0x5d4809, _0x57610b) {
          try {
            let _0xc71c7e = _0x57610b[0].data;
            let _0x3a0144 = new DataView(_0xc71c7e);
            let _0x19aa7c = _0x3a0144.getUint32(8, true);
            let _0x263a40 = new TextDecoder().decode(_0xc71c7e.slice(25));
            let _0x5a4217 = ProtocolUtils._sc_cmds[Number(_0x19aa7c)].prototype.__class__;
            const _0x544c2d = {
              raw: _0x263a40
            };
            window.recv_message(_0x5a4217, _0x544c2d);
          } catch (_0x3c5569) {}
          return _0x3479d3.apply(_0x5d4809, _0x57610b);
        }
      });
      _0x136390.send = new Proxy(_0x136390.send, {
        apply: function (_0x1cef33, _0xc2e744, _0x370901) {
          try {
            let _0x148487 = _0x370901[0];
            const _0x51c699 = new DataView(_0x148487);
            const _0x12f681 = _0x148487.slice(34);
            let _0xbfe5b1 = new TextDecoder().decode(_0x12f681);
            let _0x218d14 = _0x51c699.getUint32(17, true);
            let _0x131f89 = ProtocolUtils._cs_cmds[Number(_0x218d14)].prototype.__class__;
            window.send_message(_0x131f89, _0xbfe5b1);
          } catch (_0x243eeb) {}
          return _0x1cef33.apply(_0xc2e744, _0x370901);
        }
      });
      _0x136390.close = new Proxy(_0x136390.close, {
        apply: function (_0x1a9bdd, _0x149ae3, _0x55e8b2) {
          logger("socket 断开!");
          GlobalSocket.PROTOCOL_SOCKET.socket.socket.socket = undefined;
          intervalId = // TOLOOK
          setInterval(listen_socket, 100);
          window.gameLog = null;
          return _0x1a9bdd.apply(_0x149ae3, _0x55e8b2);
        }
      });
      let _0x447878;
      var _0x5c0164 = GlobalDispatcher.prototype.dispatchEventWith;
      GlobalDispatcher.prototype.dispatchEventWith = function (_0x288b65, _0x516ff3, _0x1667b2) {
        logger(_0x288b65, _0x516ff3, _0x1667b2);
        try {
          if (_0x288b65 == "open_module" && _0x1667b2.id === 257) {
            addGameLog("当前天赋药历史使用第" + MFC.attr.getAttr(MFC.attrType.foreverNatureReformTimes) + "瓶\n距离31保底天赋还剩余" + (6 - MFC.attr.getAttr(MFC.attrType.foreverNatureReformTimes)) + "瓶");
          }
          try {
            if (rongheStatus) {
              if (_0x288b65 == "show_panel" && _0x1667b2.name == "pve.Pve" && _0x1667b2.data.type == 1 && !_0x1667b2.RedictC && xls.pvePlanet.getItem(_0x1667b2.data.args).canCatch) {
                RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
                  GlobalDispatcher.getInstance().dispatchEventWith("clear_module_bg", false, {
                    type: 2,
                    id: 215
                  });
                  var _0x1f15a3 = SimpleAlertUi({});
                  let _0x421c29 = createLabel({
                    text: "确定通过助手捕捉吗",
                    textColor: 16776960,
                    x: 30,
                    y: 70
                  });
                  _0x421c29.x = _0x1f15a3.width / 2 - _0x421c29.width / 2;
                  _0x1f15a3.addChild(_0x421c29);
                  _0x1f15a3.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
                    _0x1667b2.RedictC = 1;
                    GlobalDispatcher.getInstance().dispatchEventWith(_0x288b65, _0x516ff3, _0x1667b2);
                  }, function () {
                    _0x1667b2.RedictC = 0;
                    let _0x3c0ce4 = xls.pvePlanet.getItem(_0x1667b2.data.args).bossID;
                    if (_0x3c0ce4.indexOf("_") != -1) {
                      window.noLevelCatchPets = {};
                      window.noLevelCatchPets.bossID = _0x3c0ce4;
                      window.noLevelCatchPets.levelId = _0x1667b2.data.args;
                    } else {
                      window.noLevelCatchPets = null;
                    }
                    window.nowTask = new LevelCatch();
                    window.nowTask.start();
                  }], null);
                  _0x1f15a3.showAlert();
                });
                return;
              }
            }
            if (_0x288b65 == "open_module" && _0x1667b2.id === 242 && _0x1667b2.data.hasOwnProperty("lvLimit") && _0x1667b2.data.hasOwnProperty("filter")) {
              const _0x5def65 = {
                type: 0,
                id: _0x1667b2.data.ids[0]
              };
              const _0x5b734f = {
                id: 243,
                data: _0x5def65
              };
              rongheData = _0x5b734f;
            }
          } catch (_0x34aff5) {
            logger(_0x34aff5);
          }
          try {
            if (rongheStatus) {
              if (_0x288b65 == "obtain_item_click_item" && _0x1667b2.type == 1) {
                const _0x4e7bf2 = {
                  id: _0x1667b2.id,
                  num: _0x1667b2.num
                };
                mergeItem = _0x4e7bf2;
              }
              if (_0x288b65 == "on_show_panel_complete" && _0x1667b2.data.type == 1 && _0x1667b2.name == "obtainItem.ObtainItem") {
                const _0x557277 = {
                  id: _0x1667b2.data.id,
                  num: 0
                };
                mergeItem = _0x557277;
              }
              if (_0x288b65 == "hide_panel" && _0x1667b2.name == "battleEndPanel.BattleEndPanel") {
                _0x447878 = false;
              }
              if (_0x288b65 == "update_pve" && _0x1667b2.type == 1) {
                _0x447878 = true;
              }
              if (_0x447878) {
                if (_0x288b65 == "show_panel" && _0x1667b2.name == "pve.Pve" && _0x1667b2.data.type == 1 && !_0x1667b2.doneMerge && !_0x1667b2.data.result && !_0x1667b2.data.state && !xls.pvePlanet.getItem(_0x1667b2.data.args).canCatch) {
                  logger("前往融合", _0x1667b2.data.args, mergeItem);
                  RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
                    GlobalDispatcher.getInstance().dispatchEventWith("clear_module_bg", false, {
                      type: 2,
                      id: 215
                    });
                    var _0x407ebc = SimpleAlertUi({
                      width: 360,
                      height: 320
                    });
                    let _0x839740 = createLabel({
                      text: "融合便捷助手",
                      y: 20
                    });
                    _0x839740.x = _0x407ebc.width / 2 - _0x839740.width / 2;
                    _0x407ebc.addChild(_0x839740);
                    let _0x50d34c = createLabel({
                      text: xls.pvePlanet.getItem(_0x1667b2.data.args).planet_name + " | " + xls.pvePlanet.getItem(_0x1667b2.data.args).levelName,
                      textColor: 16776960,
                      y: _0x839740.y + _0x839740.height + 20
                    });
                    _0x50d34c.x = _0x407ebc.width / 2 - _0x50d34c.width / 2;
                    _0x407ebc.addChild(_0x50d34c);
                    let _0x78ab95 = createLabel({
                      text: xls.item.getItem(mergeItem.id).name,
                      y: _0x50d34c.y + _0x50d34c.height + 20,
                      bold: true,
                      x: 20,
                      textColor: 16711765
                    });
                    _0x407ebc.addChild(_0x78ab95);
                    const _0x205013 = {
                      text: "合成整件需: " + mergeItem.num + "个",
                      y: _0x50d34c.y + _0x50d34c.height + 20,
                      x: _0x407ebc.width / 2 + 15,
                      textColor: 16776960
                    };
                    let _0xdbcc10 = createLabel(_0x205013);
                    _0x407ebc.addChild(_0xdbcc10);
                    let _0x1d34c1 = getSeerItemNum(mergeItem.id);
                    const _0x1efed3 = {
                      text: "拥有数: " + _0x1d34c1,
                      y: _0xdbcc10.height + _0xdbcc10.y + 20,
                      x: 20,
                      textColor: 16776960
                    };
                    let _0x1fc61d = createLabel(_0x1efed3);
                    _0x407ebc.addChild(_0x1fc61d);
                    let _0x2cad9d = createLabel({
                      text: "关卡消耗电池数: " + xls.pvePlanet.getItem(_0x1667b2.data.args).costEnergy.split("_")[0],
                      y: _0xdbcc10.height + _0xdbcc10.y + 20,
                      bold: true,
                      x: _0x407ebc.width / 2 + 15,
                      textColor: 16776960
                    });
                    _0x407ebc.addChild(_0x2cad9d);
                    const _0x21ab3b = {
                      text: "----------------------------",
                      y: _0x2cad9d.height + _0x2cad9d.y + 10,
                      x: 20,
                      textColor: 16776960
                    };
                    let _0xfe0778 = createLabel(_0x21ab3b);
                    _0x407ebc.addChild(_0xfe0778);
                    let _0x333dae = createLabel({
                      text: "拥有电池数: " + UserManager.getInstance().userInfo.curEnergy,
                      x: 20,
                      y: _0xfe0778.height + _0xfe0778.y + 5,
                      textColor: 16776960
                    });
                    _0x333dae.x = _0x407ebc.width / 2 - _0x333dae.width / 2 - 10;
                    _0x407ebc.addChild(_0x333dae);
                    const _0x192810 = {
                      text: "获取数量  ==>",
                      x: 77,
                      y: _0x407ebc.height / 1.55 + 6,
                      textColor: 16776960
                    };
                    let _0x4b694e = createLabel(_0x192810);
                    _0x407ebc.addChild(_0x4b694e);
                    const _0x19ba06 = {
                      prompt: "获取数量",
                      x: _0x407ebc.width / 2 + 15,
                      y: _0x407ebc.height / 1.55,
                      width: 100
                    };
                    let _0x5d0aea = createEdit(_0x19ba06);
                    _0x407ebc.addChild(_0x5d0aea);
                    _0x407ebc.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
                      _0x1667b2.doneMerge = 1;
                      const _0x2a2b72 = {
                        type: 2,
                        id: 215,
                        hasOpen: false
                      };
                      GlobalDispatcher.getInstance().dispatchEventWith("set_module_bg", false, _0x2a2b72);
                      GlobalDispatcher.getInstance().dispatchEventWith(_0x288b65, _0x516ff3, _0x1667b2);
                    }, function () {
                      GlobalDispatcher.getInstance().dispatchEventWith("close_module", false, {
                        id: 215
                      });
                      if (isNaN(parseInt(_0x5d0aea.text)) || parseInt(_0x5d0aea.text) <= 0) {
                        MFC.bubbleAlert.showAlert("请输入有效获取数量");
                        return true;
                      }
                      window.nowTask = new MergeHelper();
                      window.nowTask.levelId = _0x1667b2.data.args;
                      window.nowTask.levelName = xls.pvePlanet.getItem(_0x1667b2.data.args).levelName;
                      window.nowTask.userBattry = parseInt(xls.pvePlanet.getItem(_0x1667b2.data.args).costEnergy.split("_")[0]);
                      window.nowTask.goalItem = {
                        itemId: mergeItem.id,
                        name: xls.item.getItem(mergeItem.id).name,
                        num: mergeItem.num,
                        needNum: parseInt(_0x5d0aea.text)
                      };
                      window.nowTask.start();
                    }], null);
                    _0x407ebc.showAlert();
                  });
                  return;
                }
              }
            }
          } catch (_0x49ed95) {}
          if (_0x288b65 == "pet_bag_click_cell") {
            window.nowCheckBagPet = _0x1667b2;
          }
          if (_0x288b65 == "hide_panel" && JSON.stringify(_0x1667b2).indexOf("petProperty.PetProperty") != -1) {
            window.nowCheckBagPet = null;
          }
          if (_0x1667b2.key == "ChooseLevel" && _0x1667b2.targetName == "ChooseLevelItem") {
            logger("直接前往");
            if (_0x1667b2.panel._crtData.bossID.indexOf("_") != -1) {
              window.noLevelCatchPets = {};
              window.noLevelCatchPets.levelId = _0x1667b2.panel._crtData.id;
              window.noLevelCatchPets.bossID = _0x1667b2.panel._crtData.bossID;
            } else {
              window.noLevelCatchPets = null;
            }
          }
          if (_0x1667b2.key == "ChooseLevel" && _0x1667b2.targetName == "preBtn") {
            window.noLevelCatchPets = null;
          }
          if (_0x1667b2.key == "ChooseLevel" && _0x1667b2.targetName == "nextBtn") {
            if (_0x1667b2.panel._crtData.bossID.indexOf("_") != -1) {
              window.noLevelCatchPets = {};
              window.noLevelCatchPets.levelId = _0x1667b2.panel._crtData.id;
              window.noLevelCatchPets.bossID = _0x1667b2.panel._crtData.bossID;
            } else {
              window.noLevelCatchPets = null;
            }
          }
          if (_0x1667b2.key == "ChoosePlanet" && _0x1667b2.targetName == "Planet") {
            let _0x2ce065 = xls.pvePlanet.getItem(_0x1667b2.panel._data.level).bossID;
            if (_0x2ce065.indexOf("_") != -1) {
              window.noLevelCatchPets = {};
              window.noLevelCatchPets.bossID = _0x2ce065;
              window.noLevelCatchPets.levelId = _0x1667b2.panel._data.level;
            } else {
              window.noLevelCatchPets = null;
            }
          }
          if (JSON.stringify(_0x1667b2).includes("teamDefend.TeamDefend")) {
            ;
            (async function () {
              let _0x1e45e6 = new window.cs_get_campaign_pet_challenge_boss();
              Object.assign(_0x1e45e6, {});
              MFC.online.send(_0x1e45e6);
            })();
          }
        } catch (_0x10e07b) {}
        _0x5c0164.call(this, _0x288b65, _0x516ff3, _0x1667b2);
      };
      var _0x1149ce;
      var _0x535201 = egret.web.WebTouchHandler.prototype;
      _0x1149ce = _0x535201.getLocation;
      _0x535201.getLocation = function (_0x1f418e) {
        nnnn = this;
        var _0x1ed096 = _0x1149ce.call(this, _0x1f418e);
        return _0x1ed096;
      };
      var _0x20afc8 = rewardManager.RewardManager.prototype.showReward;
      rewardManager.RewardManager.prototype.showReward = function () {
        const _0x1ee21c = [100236, 100237, 100238, 100239, 100240, 100241, 100777, 100272, 100021, 100014, 100015, 100016, 100017, 100029, 100030, 100031, 100076, 100077, 100078, 100191, 100193, 100195, 100313, 100315];
        if (this.list.length > 0 && this.list[0].data.length > 0) {
          if (_0x1ee21c.includes(this.list[0].data[0].i) && this.list[0].display == 1) {
            this.list.shift();
          } else {
            _0x20afc8.call(this);
          }
        } else {
          _0x20afc8.call(this);
        }
      };
      var _0x417ab5 = MFC.alert.show;
      MFC.alert.show = function (_0x1c8334, _0x1f1888, _0x40a932, _0x953b6e, _0x2a7534) {
        logger(_0x1c8334, _0x1f1888, _0x40a932, _0x953b6e, _0x2a7534);
        if (_0x1c8334.includes("不是开放时间，请稍后再试") && _0x1c8334.includes("6000502") || _0x1c8334.includes("挑战次数已用完") && _0x1c8334.includes("6000501") || _0x1c8334.includes("次数已用完") && _0x1c8334.includes("6000141") || _0x1c8334.includes("战斗已结束") && _0x1c8334.includes("6005002") || _0x1c8334.includes("等待CD时间结束") && _0x1c8334.includes("6000910") || _0x1c8334.includes("已经领取过") && _0x1c8334.includes("6002903") || _0x1c8334.includes("该任务尚未完成") && _0x1c8334.includes("6002902") || _0x1c8334.includes("不能重复领取") && _0x1c8334.includes("6000239") || _0x1c8334.includes("未达到领取条件") && _0x1c8334.includes("6000238") || _0x1c8334.includes("肖恩工程师检修代码") || _0x1c8334.includes("道具数量不足") && _0x1c8334.includes("6001205") || _0x1c8334.includes("余额不足") && _0x1c8334.includes("请充值") || _0x1c8334.includes("道具不足") && _0x1c8334.includes("6000113") || _0x1c8334.includes("物品不足") && _0x1c8334.includes("6400005") || _0x1c8334.includes("商品已卖完") || _0x1c8334.includes("已经兑换过该奖励") && _0x1c8334.includes("6008006") || _0x1c8334.includes("没有历史存档记录") && _0x1c8334.includes("-1") || _0x1c8334.includes("不合法的数据") && _0x1c8334.includes("6106031") || _0x1c8334.includes("已经兑换过该奖励") || _0x1c8334.includes("不能重复领取") || _0x1c8334.includes("未达到领取条件") || _0x1c8334.includes("目标已阵亡") || _0x1c8334.includes("游戏未结束") || _0x1c8334.includes("精灵等级不满足条件") && _0x1c8334.includes("6010002")) {} else if (_0x1c8334.includes("神奇密码已使用") && _0x1c8334.includes("6008034")) {
          addGameLog("神奇密码已使用");
        } else {
          var _0x39ab6b = _0x417ab5.call(this, _0x1c8334, _0x1f1888, _0x40a932, _0x953b6e, _0x2a7534);
          return _0x39ab6b;
        }
        if (_0x1c8334.includes("网络波动~等待超时啦")) {
          (async function () {
            await wait(1200);
            var _0x407308 = await findUIs("_className", "Cls_btn_QueRen");
            touchBtn(_0x407308[0]);
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
    let _0x296a6c = UserManager.getInstance().userInfo;
    if (_0x296a6c.defaultTeam.length == 0) {
      for (let _0x5e0e29 = 1; _0x5e0e29 <= 6; _0x5e0e29++) {
        if (_0x296a6c["defaultTeam" + _0x5e0e29].length > 0) {
          _0x296a6c.defaultTeam = _0x296a6c["defaultTeam" + _0x5e0e29];
          break;
        }
      }
    }
  }
  async send_message(_0x32a2a2, _0x3af964) {
    if (window.nowTask !== this && window.nowTask.constructor.name != "DailyTask" && window.nowTask.constructor.name != "Paitepet" && window.nowTask.constructor.name != "LimitActivity") {
      logger("停止执行！");
      throw new Error("任务运行停止！");
    }
    let _0x4ba86d = new window[_0x32a2a2]();
    Object.assign(_0x4ba86d, _0x3af964);
    MFC.online.send(_0x4ba86d);
    _0x32a2a2 = "sc" + _0x32a2a2.slice(2);
    if (!window.nowTask.recvList.find(_0x1ffce1 => _0x1ffce1.watchEventName === _0x32a2a2)) {
      const _0x50f6dc = {
        watchEventName: _0x32a2a2
      };
      this.recvList.push(_0x50f6dc);
      const _0x5d9967 = {
        watchEventName: _0x32a2a2
      };
      window.nowTask.recvList.push(_0x5d9967);
    }
    let _0x5cdd91 = await this.waitEvent(_0x32a2a2);
    let _0x41ea76 = JSON.parse(_0x5cdd91.gameBody[_0x5cdd91.gameBody.length - 1].raw);
    _0x5cdd91.gameBody.splice(0, _0x5cdd91.gameBody.length);
    logger("this.recvList", this.recvList.length);
    return _0x41ea76;
  }
  async waitEvent(_0x1e75fc) {
    let _0x5eae71 = window.nowTask.recvList.find(_0x40d053 => _0x40d053.watchEventName === _0x1e75fc);
    if (!_0x5eae71) {
      throw new Error("缺少配置！" + _0x1e75fc);
    }
    while (window.nowTask === this || window.nowTask.constructor.name == "DailyTask" || window.nowTask.constructor.name == "Paitepet" || window.nowTask.constructor.name == "LimitActivity") {
      await wait(100);
      if (_0x5eae71.gameBody && _0x5eae71.gameBody.length > 0) {
        if (_0x1e75fc == "sc_battle_notify_round_result") {
          let _0x237b40 = JSON.parse(_0x5eae71.gameBody[_0x5eae71.gameBody.length - 1].raw);
          try {
            _0x237b40 = fixBattleRes(_0x237b40);
            _0x5eae71.gameBody[_0x5eae71.gameBody.length - 1].raw = JSON.stringify(_0x237b40);
          } catch (_0x5d825d) {
            logger(_0x5d825d);
          }
        }
        return _0x5eae71;
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
    let _0x510778 = await this.waitEvent("sc_battle_notify_load_resource");
    _0x510778.gameBody.splice(0, _0x510778.gameBody.length);
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
    _0x510778 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x3f1d8b = JSON.parse(_0x510778.gameBody[_0x510778.gameBody.length - 1].raw);
    _0x510778.gameBody.splice(0, _0x510778.gameBody.length);
    logger("回合开始");
    await wait(200);
    return _0x3f1d8b;
  }
  async useSkill(_0x4a80cd) {
    await wait(100);
    await this.send_message("cs_online_load_battle_result", {
      groupId: ""
    });
    addGameLog("释放技能:" + petConfig.SkillConfig.getDef(_0x4a80cd).name);
    const _0x1e47b2 = {
      skillID: _0x4a80cd
    };
    const _0x2d822f = {
      opType: 1,
      data: _0x1e47b2,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x2d822f);
    let _0x4049c5 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x3033a7 = JSON.parse(_0x4049c5.gameBody[_0x4049c5.gameBody.length - 1].raw);
    _0x4049c5.gameBody.splice(0, _0x4049c5.gameBody.length);
    return _0x3033a7;
  }
  async useItem(_0x11af88) {
    const _0x2ba659 = {
      itemID: _0x11af88
    };
    const _0x591a64 = {
      opType: 3,
      data: _0x2ba659,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x591a64);
    let _0x39d8a5 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x2e6c65 = JSON.parse(_0x39d8a5.gameBody[_0x39d8a5.gameBody.length - 1].raw);
    _0x39d8a5.gameBody.splice(0, _0x39d8a5.gameBody.length);
    return _0x2e6c65;
  }
  addAllUis(_0x59e681) {
    _0x59e681.forEach(_0x12d58a => {
      this.alertWin.addChild(_0x12d58a);
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
    let _0x2d8c5e = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x51c9cf = [];
      var _0x516496 = SimpleAlertUi({
        width: 450,
        height: 400
      });
      _0x2d8c5e.alertWin = _0x516496;
      const _0x3e2fbb = {
        text: "注意:",
        textColor: 16776960,
        x: 30,
        y: _0x516496.height / 20
      };
      var _0x15cbbb = createLabel(_0x3e2fbb);
      _0x51c9cf.push(_0x15cbbb);
      const _0x2ad63e = {
        text: "[默认设置]下次进入游戏会按照此次选择设置",
        textColor: 16711680,
        x: 40,
        y: _0x15cbbb.y + 10 + _0x15cbbb.height
      };
      var _0x495ba4 = createLabel(_0x2ad63e);
      _0x51c9cf.push(_0x495ba4);
      const _0x5efc3e = {
        text: "默认设置",
        y: _0x495ba4.y + 10 + _0x495ba4.height,
        size: 20
      };
      let _0x3c64de = createLabel(_0x5efc3e);
      _0x3c64de.x = _0x516496.applicationWidth / 2 - _0x3c64de.width / 2;
      _0x51c9cf.push(_0x3c64de);
      const _0x41b44b = {
        text: "开启声音",
        x: _0x516496.width / 10,
        y: _0x3c64de.y + 40
      };
      let _0x24fadc = createLabel(_0x41b44b);
      _0x51c9cf.push(_0x24fadc);
      const _0x58a858 = {
        x: _0x24fadc.x + _0x24fadc.width + 42,
        y: _0x3c64de.y + 40,
        selected: true,
        storageKey: "setup1"
      };
      let _0xda8ffc = createToggle(_0x58a858);
      _0x51c9cf.push(_0xda8ffc);
      const _0x26ef0f = {
        text: "屏蔽其他玩家",
        x: _0x516496.width / 10,
        y: _0x3c64de.y + 80
      };
      let _0x5b53c8 = createLabel(_0x26ef0f);
      _0x51c9cf.push(_0x5b53c8);
      const _0x1e2df7 = {
        x: _0x5b53c8.x + _0x5b53c8.width + 10,
        y: _0x3c64de.y + 80,
        selected: true,
        storageKey: "setup2"
      };
      let _0x162c1a = createToggle(_0x1e2df7);
      _0x51c9cf.push(_0x162c1a);
      const _0x34945f = {
        text: "屏蔽组队邀请",
        x: _0x162c1a.x + _0x162c1a.width + 10,
        y: _0x3c64de.y + 80
      };
      let _0x320cff = createLabel(_0x34945f);
      _0x51c9cf.push(_0x320cff);
      const _0x5da9d1 = {
        x: _0x320cff.x + _0x320cff.width + 10,
        y: _0x3c64de.y + 80,
        selected: true,
        storageKey: "setup3"
      };
      let _0x4b0e06 = createToggle(_0x5da9d1);
      _0x51c9cf.push(_0x4b0e06);
      const _0x53e504 = {
        text: "屏蔽挑战邀请",
        x: _0x516496.width / 10,
        y: _0x3c64de.y + 120
      };
      let _0x3fcf7b = createLabel(_0x53e504);
      _0x51c9cf.push(_0x3fcf7b);
      const _0x3b57d7 = {
        x: _0x3fcf7b.x + _0x3fcf7b.width + 10,
        y: _0x3c64de.y + 120,
        selected: true,
        storageKey: "setup4"
      };
      let _0x1fb80c = createToggle(_0x3b57d7);
      _0x51c9cf.push(_0x1fb80c);
      const _0x256efa = {
        text: "屏蔽战斗表情",
        x: _0x1fb80c.x + _0x1fb80c.width + 10,
        y: _0x3c64de.y + 120
      };
      let _0x8ce534 = createLabel(_0x256efa);
      _0x51c9cf.push(_0x8ce534);
      const _0x358116 = {
        x: _0x8ce534.x + _0x8ce534.width + 10,
        y: _0x3c64de.y + 120,
        selected: true,
        storageKey: "setup5"
      };
      let _0xf3f4a8 = createToggle(_0x358116);
      _0x51c9cf.push(_0xf3f4a8);
      const _0x249cd1 = {
        text: "观战设置",
        y: _0x8ce534.y + 40
      };
      let _0x406a25 = createLabel(_0x249cd1);
      _0x406a25.x = _0x516496.applicationWidth / 2 - _0x406a25.width / 2;
      _0x51c9cf.push(_0x406a25);
      const _0x39aa5d = {
        x: _0x516496.width / 10,
        y: _0x406a25.y + 40,
        selected: false,
        storageKey: "selfwatch1"
      };
      let _0x54c30b = createRadio(_0x39aa5d);
      _0x51c9cf.push(_0x54c30b);
      const _0xa0fb1e = {
        text: "所有玩家",
        x: _0x54c30b.x + _0x54c30b.width + 10,
        y: _0x54c30b.y
      };
      let _0x37c196 = createLabel(_0xa0fb1e);
      _0x51c9cf.push(_0x37c196);
      const _0x44aed6 = {
        x: _0x37c196.x + _0x37c196.width + 30,
        y: _0x54c30b.y,
        selected: false,
        storageKey: "selfwatch2"
      };
      let _0xa79ae9 = createRadio(_0x44aed6);
      _0x51c9cf.push(_0xa79ae9);
      const _0xe54ccc = {
        text: "仅好友1",
        x: _0xa79ae9.x + _0xa79ae9.width + 10,
        y: _0x54c30b.y
      };
      let _0x1ebba3 = createLabel(_0xe54ccc);
      _0x51c9cf.push(_0x1ebba3);
      const _0x28e4c1 = {
        x: _0x1ebba3.x + _0x1ebba3.width + 30,
        y: _0x54c30b.y,
        selected: true,
        storageKey: "selfwatch3"
      };
      let _0x40f1f0 = createRadio(_0x28e4c1);
      _0x51c9cf.push(_0x40f1f0);
      const _0x51a8be = {
        text: "不允许观战",
        x: _0x40f1f0.x + _0x40f1f0.width + 10,
        y: _0x54c30b.y
      };
      let _0x5bb93a = createLabel(_0x51a8be);
      _0x51c9cf.push(_0x5bb93a);
      _0x2d8c5e.addAllUis(_0x51c9cf);
      _0x516496.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x2d8c5e.stop();
      }, function () {
        try {
          localStorage.setItem("setup1", _0xda8ffc.selected);
          localStorage.setItem("setup2", _0x162c1a.selected);
          localStorage.setItem("setup3", _0x4b0e06.selected);
          localStorage.setItem("setup4", _0x1fb80c.selected);
          localStorage.setItem("setup5", _0xf3f4a8.selected);
          localStorage.setItem("selfwatch1", _0x54c30b.selected);
          localStorage.setItem("selfwatch2", _0xa79ae9.selected);
          localStorage.setItem("selfwatch3", _0x40f1f0.selected);
          if (_0xda8ffc.selected) {
            addGameLog("开启游戏声音");
            MFC.sound.isEffectsMute = true;
            MFC.sound.isBackgroudMute = false;
          } else {
            addGameLog("关闭游戏声音");
            MFC.sound.isEffectsMute = true;
            MFC.sound.isBackgroudMute = true;
          }
          MFC.sound.saveStatus();
          if (_0x162c1a.selected) {
            addGameLog("开启其他玩家屏蔽");
            MFC.mapManager.userManager.hideOthers();
          } else {
            addGameLog("关闭其他玩家屏蔽");
            MFC.mapManager.userManager.showOthers();
          }
          if (_0x4b0e06.selected) {
            addGameLog("开启组队邀请屏蔽");
            MFC.partyManager.refuseInvite = 2;
          } else {
            addGameLog("关闭组队邀请屏蔽");
            MFC.partyManager.refuseInvite = 0;
          }
          var _0x145776 = new cs_set_invitation_status();
          _0x145776.status = MFC.userInfo.isInvitationPVP = _0x1fb80c.selected ? (addGameLog("开启挑战邀请屏蔽"), 1) : (addGameLog("关闭挑战邀请屏蔽"), 0);
          MFC.online.send(_0x145776, function (_0x4d2961) {
            if (_0x4d2961) {
              MFC.userInfo.isInvitationPVP = _0x4d2961.isInvitationPVP;
            }
          });
          if (_0xf3f4a8.selected) {
            addGameLog("开启战斗表情屏蔽");
            egret.localStorage.setItem(MFC.userInfo.uid + "_BattleEmoji", "close");
          } else {
            addGameLog("关闭战斗表情屏蔽");
            egret.localStorage.setItem(MFC.userInfo.uid + "_BattleEmoji", "open");
          }
          if (_0x54c30b.selected) {
            _0x2d8c5e.selfwatch[0] = 1;
          }
          if (_0xa79ae9.selected) {
            _0x2d8c5e.selfwatch[1] = 1;
          }
          if (_0x40f1f0.selected) {
            _0x2d8c5e.selfwatch[2] = 1;
          }
        } catch (_0x785fa9) {
          localStorage.clear();
        }
        _0x2d8c5e.prcessBody();
      }], null);
      _0x516496.showAlert();
    });
  }
  async changePer(_0x5b05d3) {
    const _0x367c25 = {
      match_permissions: _0x5b05d3
    };
    await this.send_message("cs_set_match_permissions", _0x367c25);
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
    } catch (_0x408c11) {}
  }
}
class FightMapBoss extends SuperTask {
  constructor(_0x315203) {
    super();
    this.nowName = "打野怪";
    this.recvList = [{
      watchEventName: "sc_battle_notify_round_result"
    }, {
      watchEventName: "sc_battle_notify_load_resource"
    }];
    if (_0x315203) {
      this.fightCounts = _0x315203;
    } else {
      this.fightCounts = 120;
    }
    this.levelId = 9;
    this.mapBossList = [];
    this.switchBtnList = [];
  }
  async start() {
    super.start();
    let _0x19a319 = [];
    MFC.mapManager._bossManager.bossDataList.forEach(_0x5655e3 => {
      if (_0x19a319.indexOf(_0x5655e3.sweepShow) === -1) {
        let _0x546fcf = PetConfig.getDef(_0x5655e3.sweepShow).name;
        const _0x30eb33 = {
          name: _0x546fcf,
          levelId: _0x5655e3.id,
          PetbookId: _0x5655e3.sweepShow
        };
        this.mapBossList.push(_0x30eb33);
        _0x19a319.push(_0x5655e3.sweepShow);
      }
    });
    if (this.mapBossList.length === 0) {
      MFC.alert.show("当前地图场景没有可对战的精灵!");
      this.stop();
      return;
    }
    let _0x16cecf = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x2f16cc = [];
      addGameLog("开始进行");
      var _0x72d747 = SimpleAlertUi({});
      _0x16cecf.alertWin = _0x72d747;
      const _0x3b597a = {
        text: "        场景对战野怪\n[默认使用首发精灵的首发技能]",
        y: _0x72d747.height / 16
      };
      var _0x568e6b = createLabel(_0x3b597a);
      _0x568e6b.x = _0x72d747.width / 2 - _0x568e6b.width / 2;
      _0x2f16cc.push(_0x568e6b);
      let _0x2ac4c7 = _0x72d747.width / 15;
      let _0x2e1121;
      _0x16cecf.mapBossList.forEach((_0x1ecd27, _0x11ca70) => {
        const _0xb542ac = {
          text: _0x1ecd27.name,
          x: _0x2ac4c7,
          y: _0x72d747.height / 3,
          textColor: 16776960
        };
        let _0x302f73 = createLabel(_0xb542ac);
        const _0x38c693 = {
          x: _0x2ac4c7 + _0x302f73.width + 5,
          y: _0x72d747.height / 3,
          selected: _0x11ca70 === 0,
          levelId: _0x1ecd27.levelId
        };
        _0x2e1121 = createToggle(_0x38c693);
        _0x2f16cc.push(_0x302f73);
        _0x2f16cc.push(_0x2e1121);
        _0x2ac4c7 = _0x2ac4c7 + _0x2e1121.x + _0x2e1121.width + 10;
        _0x16cecf.switchBtnList.push(_0x2e1121);
      });
      const _0x1d5c1d = {
        text: "对战次数 =>",
        x: 40,
        y: _0x2e1121.y + _0x2e1121.height + 13,
        textColor: 16776960
      };
      let _0x2e30f0 = createLabel(_0x1d5c1d);
      _0x2f16cc.push(_0x2e30f0);
      const _0x5b271d = {
        x: _0x2e30f0.width + _0x2e30f0.x + 40,
        y: _0x2e1121.y + _0x2e1121.height + 7,
        width: 80,
        text: "120",
        storageKey: "iptC"
      };
      var _0x2f2898 = createEdit(_0x5b271d);
      _0x2f16cc.push(_0x2f2898);
      _0x16cecf.addAllUis(_0x2f16cc);
      _0x72d747.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [() => _0x16cecf.stop(), () => {
        localStorage.setItem("iptC", _0x2f2898.text);
        _0x16cecf.fightCounts = parseInt(_0x2f2898.text);
        _0x16cecf.prcessBody();
      }], null);
      _0x72d747.showAlert();
    });
  }
  async prcessBody() {
    try {
      for (let _0x49cde6 = 0; _0x49cde6 < this.fightCounts; _0x49cde6++) {
        let _0x3d0481 = UserManager.getInstance().userInfo.defaultTeam[0];
        let _0xb5ddb = PetManager.getInstance().getPetInfoByGetTime(_0x3d0481).skills[0];
        await wait(300);
        if (window.nowTask.constructor.name == "FightMapBoss") {
          var _0x35338d = this.mapBossList[Math.floor(Math.random() * this.mapBossList.length)];
          addGameLog("对战: " + _0x35338d.name);
          const _0x403257 = {
            levelId: _0x35338d.levelId,
            battleType: 3
          };
          await this.send_message("cs_pve_activity_battle", _0x403257);
        } else {
          await this.send_message("cs_pve_activity_battle", {
            levelId: this.levelId,
            battleType: 3
          });
        }
        await this.initBattle();
        let _0x311832 = await this.useSkill(_0xb5ddb);
        while (_0x311832.result.result === 0) {
          let _0x589e87 = _0x311832.result.playerInfos.find(_0x2f48a8 => _0x2f48a8.uid === MFC.userInfo.uid).nextRoundOP;
          if (_0x589e87 !== 1) {
            addGameLog("首发被击败");
            break;
          }
          addGameLog("未击败，继续攻击");
          _0x311832 = await this.useSkill(_0xb5ddb);
        }
        if (_0x311832.result.result === 1) {
          addGameLog("顺利野怪第" + (_0x49cde6 + 1) + "次");
        } else {
          _0x49cde6--;
          addGameLog("被野怪击败");
        }
        await wait(300);
      }
      this.stop();
    } catch (_0x2009b8) {
      logger(_0x2009b8);
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
          let _0x17f5c4 = await this.send_message("cs_get_daily_task_list", {});
          let _0x327bae = _0x17f5c4.dailyTask.find(_0x147a04 => _0x147a04.taskId === 22).taskProcess;
          if (_0x327bae == 5) {
            addGameLog("勇者之塔完成!");
            break;
          } else {
            let _0x34e14b = await this.send_message("cs_get_brave_tower_data", {});
            let _0x32389d = _0x34e14b.tower.curFloor;
            let _0x4c3230 = _0x34e14b.tower.floor_level.find(_0xcf003 => _0xcf003.isPass != 0);
            let _0x1335eb = _0x4c3230.levelId;
            if (UserManager.getInstance().userInfo.curEnergy < 1) {
              addGameLog("电池不足,勇者之塔结束!");
              break;
            } else {
              let _0x5fde78 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
              await wait(300);
              const _0x445913 = {
                floor: _0x32389d,
                levelId: _0x1335eb
              };
              await this.send_message("cs_brave_tower_fight", _0x445913);
              await this.initBattle();
              let _0x271fc6 = await this.useSkill(_0x5fde78);
              while (_0x271fc6.result.result == 0) {
                if (_0x271fc6.result.playerInfos[0].uid == MFC.userInfo.uid) {
                  if (_0x271fc6.result.playerInfos[0].nextRoundOP !== 1) {
                    addGameLog("首发被击败");
                    break;
                  }
                } else if (_0x271fc6.result.playerInfos[1].nextRoundOP !== 1) {
                  addGameLog("首发被击败");
                  break;
                }
                addGameLog("未击败，继续攻击");
                _0x271fc6 = await this.useSkill(_0x5fde78);
              }
              if (_0x271fc6.result.result === 1) {
                addGameLog("顺利打败勇者之塔");
              } else {
                addGameLog("被勇者之塔击败");
              }
              await wait(300);
            }
          }
        }
      }
    } catch (_0x107b53) {
      logger(_0x107b53);
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
      let _0x40ab33 = await this.getLimits();
      let _0x5c601b = PetManager.getInstance().getAllPets();
      let _0x5808d6 = "";
      for (let _0x45892f = 0; _0x45892f < _0x5c601b.length; _0x45892f++) {
        if (_0x5c601b[_0x45892f].level == 1 && _0x40ab33.indexOf(PetConfig.getDef(_0x5c601b[_0x45892f].petId).elemType) != -1) {
          _0x5808d6 = _0x5c601b[_0x45892f];
          break;
        }
      }
      if (_0x5808d6 == "") {
        addGameLog("背包没1级满足极限挑战属性的精灵");
      } else {
        let _0x56dd9d = _0x5808d6.skills[0];
        const _0x366322 = {
          op: 1,
          arrayType: "campaignDefaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x5808d6.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x366322);
        await wait(300);
        addGameLog("派出: " + _0x5808d6.nick);
        const _0x2521a2 = {
          levelId: 5,
          hirePetList: [_0x5808d6.getTime],
          attachBattleSkill: []
        };
        await this.send_message("cs_start_campaign_pet_challenge", _0x2521a2);
        await this.initBattle();
        let _0x3c3c2b = await this.useSkill(_0x56dd9d);
        while (_0x3c3c2b.result.result == 0) {
          addGameLog("未被击败，继续攻击");
          _0x3c3c2b = await this.useSkill(_0x56dd9d);
        }
        if (_0x3c3c2b.result.result === 1) {
          addGameLog("打过boss,按理不会触发");
        } else {
          addGameLog("被Boss击败,完成极限挑战!");
        }
        if (_0x3c3c2b.result.result == 2) {
          let _0x41869e = UserManager.getInstance().userInfo.defaultTeam;
          await wait(300);
          await this.send_message("cs_get_daily_task_prize", {
            taskId: this.taskId
          });
          const _0x3afe25 = {
            op: 1,
            arrayType: "defaultTeam",
            subArray: 0,
            idx: 1,
            teamUp: 0,
            fightType: 0,
            getTimeList: _0x41869e
          };
          await this.send_message("cs_new_change_petArray", _0x3afe25);
        }
        await wait(200);
      }
    } catch (_0xc4f14a) {
      logger(_0xc4f14a);
    }
  }
  async getLimits() {
    let _0x33cba7 = await this.send_message("cs_get_campaign_pet_challenge_boss", {});
    let _0x1091bf = _0x33cba7.todayLimitAttr;
    return _0x1091bf;
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
    let _0x4cff22 = [];
    MFC.mapManager._bossManager.bossDataList.forEach(_0x59cd16 => {
      if (_0x59cd16.canCatch && _0x4cff22.indexOf(_0x59cd16.sweepShow) == -1) {
        let _0x232159 = PetConfig.getDef(_0x59cd16.sweepShow).name;
        const _0x4cf30c = {
          name: _0x232159,
          levelId: _0x59cd16.id,
          PetbookId: _0x59cd16.sweepShow
        };
        this.mapBossList.push(_0x4cf30c);
        if (_0x232159.indexOf("皮皮") !== -1) {}
        if (_0x232159.indexOf("皮皮") !== -1) {}
        _0x4cff22.push(_0x59cd16.sweepShow);
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
    let _0x4410fa = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      var _0x2aa01f = SimpleAlertUi({
        width: 680,
        height: 450
      });
      _0x4410fa.alertWin = _0x2aa01f;
      let _0x2bbaa4 = _0x2aa01f.width / 15;
      let _0x5ad196 = [];
      const _0xa4e4de = {
        text: "1.胶囊选择  2.精灵选择  3.使用精灵",
        y: _0x2aa01f.height / 11
      };
      var _0x597e4a = createLabel(_0xa4e4de);
      _0x597e4a.x = _0x2aa01f.width / 2 - _0x597e4a.width / 2;
      _0x5ad196.push(_0x597e4a);
      for (let _0x3abce1 = 0; _0x3abce1 < _0x4410fa.capsuleNames.length; _0x3abce1++) {
        const _0xb30a4f = {
          text: _0x4410fa.capsuleNames[_0x3abce1].capName,
          x: _0x2bbaa4,
          y: _0x2aa01f.height / 5
        };
        var _0x597e4a = createLabel(_0xb30a4f);
        const _0x5873b5 = {
          capId: _0x4410fa.capsuleNames[_0x3abce1].capId,
          x: _0x2bbaa4 + 60,
          y: _0x2aa01f.height / 5
        };
        let _0x48fb17 = createToggle(_0x5873b5);
        _0x48fb17.selected = true;
        if (_0x3abce1) {
          _0x48fb17.selected = false;
        }
        _0x5ad196.push(_0x597e4a);
        _0x5ad196.push(_0x48fb17);
        _0x2bbaa4 = _0x2bbaa4 + 150;
        _0x4410fa.switchBtnList.push(_0x48fb17);
      }
      let _0xfc17df = _0x2aa01f.height / 3.5;
      _0x2bbaa4 = _0x2aa01f.width / 15;
      if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_11_13 5:00:00") {
        let _0x3eef52 = _0x4410fa.mapBossList.find(_0x2ca63e => _0x2ca63e.name == "贝尔");
        if (_0x3eef52) {
          _0x4410fa.mapBossList.push({
            name: "活动精灵 克里",
            levelId: 364
          });
        }
      }
      for (let _0x4ce773 = 0; _0x4ce773 < _0x4410fa.mapBossList.length; _0x4ce773++) {
        if (_0x4410fa.mapBossList[_0x4ce773].name == "") {
          continue;
        }
        if (_0x4ce773 != 0 && _0x4ce773 % 4 == 0) {
          _0xfc17df = _0xfc17df + 30;
          _0x2bbaa4 = _0x2aa01f.width / 15;
        }
        const _0x3885b8 = {
          text: _0x4410fa.mapBossList[_0x4ce773].name,
          textColor: 16776960,
          x: _0x2bbaa4,
          y: _0xfc17df
        };
        let _0x460e27 = createLabel(_0x3885b8);
        const _0x3f3b32 = {
          levelId: _0x4410fa.mapBossList[_0x4ce773].levelId,
          x: _0x2bbaa4 + _0x460e27.width + 15,
          y: _0xfc17df
        };
        let _0x12c95a = createToggle(_0x3f3b32);
        _0x12c95a.selected = true;
        if (_0x4ce773) {
          _0x12c95a.selected = false;
        }
        _0x5ad196.push(_0x460e27);
        _0x5ad196.push(_0x12c95a);
        _0x2bbaa4 = _0x2bbaa4 + 150;
        _0x4410fa.switchBtnList.push(_0x12c95a);
      }
      _0x2bbaa4 = _0x2aa01f.width / 15;
      _0xfc17df = _0xfc17df + 30;
      for (let _0x4cb941 = 0; _0x4cb941 < _0x4410fa.canCatchPets.length; _0x4cb941++) {
        if (_0x4cb941 != 0 && _0x4cb941 % 3 == 0) {
          _0xfc17df = _0xfc17df + 30;
          _0x2bbaa4 = _0x2aa01f.width / 15;
        }
        const _0x2d9e3e = {
          x: _0x2bbaa4,
          y: _0xfc17df,
          pet: _0x4410fa.canCatchPets[_0x4cb941]
        };
        let _0x29c394 = createRadio(_0x2d9e3e);
        try {
          if (localStorage.getItem("map:" + _0x4410fa.canCatchPets[_0x4cb941].getTime) != null) {
            _0x29c394.selected = JSON.parse(localStorage.getItem("map:" + _0x4410fa.canCatchPets[_0x4cb941].getTime));
          } else {
            _0x29c394.selected = false;
          }
        } catch (_0x20adb0) {
          localStorage.removeItem("map:" + _0x4410fa.canCatchPets[_0x4cb941].getTime);
          _0x29c394.selected = false;
        }
        if (!(typeof JSON.parse(localStorage.getItem("map:" + _0x4410fa.canCatchPets[_0x4cb941].getTime)) == "boolean")) {
          localStorage.removeItem("map:" + _0x4410fa.canCatchPets[_0x4cb941].getTime);
          _0x29c394.selected = false;
        }
        let _0x59b581 = createLabel({
          text: PetConfig.getDef(_0x4410fa.canCatchPets[_0x4cb941].petId).name + ("(Lv" + PetManager.getInstance().getPetInfoByGetTime(_0x4410fa.canCatchPets[_0x4cb941].getTime).level + ")"),
          textColor: 16776960,
          x: _0x2bbaa4 + _0x29c394.width + 15,
          y: _0xfc17df
        });
        _0x2bbaa4 = _0x59b581.x + _0x59b581.width + 20;
        _0x5ad196.push(_0x59b581);
        _0x5ad196.push(_0x29c394);
        _0x4410fa.radioBtnList.push(_0x29c394);
      }
      const _0x243590 = {
        prompt: "捕捉只数",
        width: 100,
        x: 30,
        y: _0x2aa01f.height / 1.35,
        storageKey: "inputCountsMap"
      };
      var _0xa9cb2d = createEdit(_0x243590);
      const _0x33ee00 = {
        prompt: "停止天赋",
        width: 100,
        x: _0xa9cb2d.width + 67,
        y: _0x2aa01f.height / 1.35,
        storageKey: "inputTalentMap"
      };
      var _0x18c3a3 = createEdit(_0x33ee00);
      _0x5ad196.push(_0xa9cb2d);
      _0x5ad196.push(_0x18c3a3);
      const _0x2a0715 = {
        text: "捕捉只数",
        textColor: 16776960,
        x: 30,
        y: _0x2aa01f.height / 1.35 - 30
      };
      var _0x5335d1 = createLabel(_0x2a0715);
      const _0x3b0a27 = {
        text: "捕捉天赋",
        textColor: 16776960,
        x: _0xa9cb2d.width + 67,
        y: _0x2aa01f.height / 1.35 - 30
      };
      var _0x3a55b7 = createLabel(_0x3b0a27);
      const _0x40a289 = {
        text: "是否上阵多精灵",
        textColor: 16776960,
        x: _0x18c3a3.x + 150,
        y: _0x2aa01f.height / 1.35 - 30
      };
      var _0x577d99 = createLabel(_0x40a289);
      const _0x4044 = {
        text: "胶囊使用次数\n(不输入会使用到抓到)",
        textColor: 16776960,
        x: _0x577d99.x + 140,
        y: _0x2aa01f.height / 1.35 - 45
      };
      var _0x4bcda0 = createLabel(_0x4044);
      _0x5ad196.push(_0x5335d1);
      _0x5ad196.push(_0x3a55b7);
      _0x5ad196.push(_0x577d99);
      _0x5ad196.push(_0x4bcda0);
      const _0x3b6935 = {
        x: _0x577d99.x,
        y: _0x2aa01f.height / 1.35,
        selected: false,
        storageKey: "petteamstatu"
      };
      let _0x17b57c = createToggle(_0x3b6935);
      _0x5ad196.push(_0x17b57c);
      const _0x4c1aab = {
        prompt: "胶囊次数",
        width: 100,
        x: _0x577d99.x + 140,
        y: _0x2aa01f.height / 1.35,
        storageKey: "inputcapNum"
      };
      var _0x1cd301 = createEdit(_0x4c1aab);
      _0x5ad196.push(_0x1cd301);
      _0x4410fa.addAllUis(_0x5ad196);
      _0x2aa01f.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x4410fa.stop();
      }, function () {
        let _0x443905 = 0;
        for (let _0x1cf3d7 = 0; _0x1cf3d7 < _0x4410fa.radioBtnList.length; _0x1cf3d7++) {
          if (_0x4410fa.radioBtnList[_0x1cf3d7].selected) {
            _0x443905 = 1;
          }
          localStorage.setItem("map:" + _0x4410fa.radioBtnList[_0x1cf3d7].pet.getTime, _0x4410fa.radioBtnList[_0x1cf3d7].selected);
        }
        localStorage.setItem("inputTalentMap", _0x18c3a3.text);
        localStorage.setItem("inputCountsMap", _0xa9cb2d.text);
        localStorage.setItem("inputcapNum", _0x1cd301.text);
        localStorage.setItem("petteamstatu", _0x17b57c.selected);
        if (_0x17b57c.selected) {
          _0x4410fa.petteamstatus = true;
        } else {
          _0x4410fa.petteamstatus = false;
        }
        if (_0x443905 == 0) {
          MFC.bubbleAlert.showAlert("请勾选使用捕捉精灵的精灵!");
          return true;
        }
        let _0x10ddc7 = [];
        let _0x32a8f0 = [];
        for (let _0x545d17 = 0; _0x545d17 < _0x4410fa.switchBtnList.length; _0x545d17++) {
          if (_0x545d17 <= 3 && _0x4410fa.switchBtnList[_0x545d17].selected) {
            _0x10ddc7.push(_0x4410fa.switchBtnList[_0x545d17].capId);
          }
          if (_0x545d17 > 3 && _0x4410fa.switchBtnList[_0x545d17].selected) {
            _0x32a8f0.push(_0x4410fa.switchBtnList[_0x545d17].levelId);
          }
        }
        if (_0x10ddc7.length == 0) {
          MFC.bubbleAlert.showAlert("至少设置一种胶囊类型");
          return true;
        }
        if (_0x32a8f0.length == 0) {
          MFC.bubbleAlert.showAlert("至少设置一种精灵");
          return true;
        }
        if (isNaN(parseInt(_0xa9cb2d.text))) {
          MFC.bubbleAlert.showAlert("请输入有效捕捉次数");
          return true;
        }
        if (isNaN(parseInt(_0x18c3a3.text)) || parseInt(_0x18c3a3.text) > 31 || parseInt(_0x18c3a3.text) < 0) {
          MFC.bubbleAlert.showAlert("请输入有效精灵天赋");
          return true;
        }
        _0x4410fa.capIds = _0x10ddc7;
        _0x4410fa.levelIds = _0x32a8f0;
        if (!isNaN(parseInt(_0x1cd301.text))) {
          _0x4410fa.defaultNum = parseInt(_0x1cd301.text);
        }
        _0x4410fa.catchCounts = parseInt(_0xa9cb2d.text);
        _0x4410fa.stopTalent = parseInt(_0x18c3a3.text);
        _0x4410fa.prcessBody();
      }], null);
      _0x2aa01f.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (this.canCatchPets.length == 0) {
        var _0x1b2b12 = this.checkUseCatchPet();
      } else {
        var _0x1b2b12;
        for (let _0x26e556 = 0; _0x26e556 < this.radioBtnList.length; _0x26e556++) {
          if (this.radioBtnList[_0x26e556].selected) {
            var _0x1b2b12 = this.radioBtnList[_0x26e556].pet;
            break;
          }
        }
      }
      if (!_0x1b2b12) {
        addGameLog("没有相关满足条件的捕捉精灵，捕捉结束");
        this.stop();
        return false;
      }
      await wait(200);
      let _0x3c8109 = [];
      _0x3c8109.push(_0x1b2b12.getTime);
      let _0x3fe938 = PetManager.getInstance().getAllPets().map(_0x24c446 => {
        if (_0x24c446.level <= PetManager.getInstance().getPetInfoByGetTime(_0x1b2b12.getTime).level && _0x24c446.petid !== 1656 && _0x24c446.petid !== 10746 && _0x24c446.nick.indexOf("无名") == -1 && _0x24c446.getTime !== _0x1b2b12.getTime && _0x24c446.nick.indexOf("熊猫") == -1 && _0x24c446.nick.indexOf("阿勇") == -1) {
          return _0x24c446;
        }
      }).filter(_0x424f0b => _0x424f0b).sort((_0x50f86d, _0x3417a) => _0x3417a.battleValues[0] - _0x50f86d.battleValues[0]);
      if (this.petteamstatus) {
        if (_0x3fe938.length > 4) {
          for (let _0x3d87aa = 0; _0x3d87aa < 4; _0x3d87aa++) {
            _0x3c8109.push(_0x3fe938[_0x3d87aa].getTime);
          }
        } else {
          addGameLog("没有4只等级低于" + _0x1b2b12.nick + "的精灵");
        }
      }
      const _0x4b2cd0 = {
        op: 1,
        arrayType: "defaultTeam",
        subArray: 0,
        idx: 1,
        teamUp: 0,
        fightType: 0,
        getTimeList: _0x3c8109
      };
      await this.send_message("cs_new_change_petArray", _0x4b2cd0);
      addGameLog("设置" + PetConfig.getDef(_0x1b2b12.petId).name + "首发成功！");
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
      let _0x42e061 = await this.send_message("cs_pve_activity_battle", {
        levelId: this.levelIds[this.petIndex],
        battleType: 3
      });
      if (JSON.stringify(_0x42e061).includes("不是开放时间")) {
        MFC.alert.show("当前精灵不是开放时间\n请等待时间开放");
        this.stop();
      }
      await this.initBattle();
      let _0x15f9db = randomCap(this.capIds);
      if (_0x15f9db == "NoCap") {
        addGameLog("无可用胶囊,捕捉任务结束");
        this.stop();
        return false;
      }
      await this.send_message("cs_online_load_battle_result", {
        groupId: ""
      });
      await wait(200);
      let _0x107f0b = _0x1b2b12.skillID;
      let _0x51ad07 = await this.useSkill(_0x107f0b);
      let _0x3ca41c = true;
      while (1) {
        if (_0x51ad07.result.result !== 0) {
          addGameLog("怪物已经死亡!!!!");
          await this.prcessBody();
          return false;
        }
        addGameLog("未击败，继续攻击");
        if (_0x51ad07.result.playerInfos[0].uid == MFC.userInfo.uid) {
          if (_0x51ad07.result.playerInfos[0].nextRoundOP !== 1) {
            addGameLog("首发被击败");
            _0x3ca41c = false;
            break;
          }
        } else if (_0x51ad07.result.playerInfos[1].nextRoundOP !== 1) {
          addGameLog("首发被击败");
          _0x3ca41c = false;
          break;
        }
        if (_0x51ad07.result.playerInfos[0].uid !== MFC.userInfo.uid) {
          addGameLog("怪物当前血量:" + _0x51ad07.result.playerInfos[0].petInfos[0].crtHp);
          if (_0x51ad07.result.playerInfos[0].petInfos[0].crtHp <= 1) {
            break;
          }
        } else {
          addGameLog("怪物当前血量:" + _0x51ad07.result.playerInfos[1].petInfos[0].crtHp);
          if (_0x51ad07.result.playerInfos[1].petInfos[0].crtHp <= 1) {
            break;
          }
        }
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        await wait(200);
        _0x51ad07 = await this.useSkill(_0x107f0b);
      }
      await wait(200);
      this.CatchPetDatas = null;
      let _0x4c3f7f = 1;
      let _0x4eea5b = 0;
      while (_0x51ad07.result.result == 0) {
        if (_0x3ca41c) {
          if (_0x51ad07.result.playerInfos[0].uid == MFC.userInfo.uid) {
            if (_0x51ad07.result.playerInfos[0].nextRoundOP !== 1) {
              addGameLog("首发被击败,切换精灵");
              await this.send_message("cs_online_load_battle_result", {
                groupId: ""
              });
              const _0x196249 = {
                petIndex: _0x4c3f7f
              };
              const _0x4b15b4 = {
                opType: 2,
                data: _0x196249,
                groupId: ""
              };
              await this.send_message("cs_online_player_operation", _0x4b15b4);
              _0x4c3f7f++;
              if (_0x4c3f7f == 4) {
                break;
              }
            }
          } else if (_0x51ad07.result.playerInfos[1].nextRoundOP !== 1) {
            addGameLog("首发被击败,切换精灵");
            await this.send_message("cs_online_load_battle_result", {
              groupId: ""
            });
            const _0x4a9575 = {
              petIndex: _0x4c3f7f
            };
            const _0x3f1772 = {
              opType: 2,
              data: _0x4a9575,
              groupId: ""
            };
            await this.send_message("cs_online_player_operation", _0x3f1772);
            _0x4c3f7f++;
            if (_0x4c3f7f == 4) {
              break;
            }
          }
        } else if (_0x51ad07.result.playerInfos[0].uid == MFC.userInfo.uid) {
          if (_0x51ad07.result.playerInfos[0].nextRoundOP !== 1) {
            addGameLog("首发被击败,野怪未达1血");
            break;
          }
        } else if (_0x51ad07.result.playerInfos[1].nextRoundOP !== 1) {
          addGameLog("首发被击败,野怪未达1血");
          break;
        }
        addGameLog("怪物血量已经为1,开始捕捉");
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        let _0x18b7b3 = randomCap(this.capIds);
        if (_0x18b7b3 == "NoCap") {
          addGameLog("无可用胶囊,捕捉任务结束");
          this.logAllCatchPets(this.allCatchPets);
          this.stop();
          return false;
        }
        await wait(400);
        if (this.defaultNum > _0x4eea5b) {
          addGameLog("使用:" + _0x18b7b3.name + "胶囊,剩余:" + _0x18b7b3.num);
          _0x51ad07 = await this.useItem(_0x18b7b3.itemId);
          let _0x449362 = await this.waitEvent("sc_notify_item_change");
          _0x449362.gameBody.splice(0, _0x449362.gameBody.length);
          _0x4eea5b++;
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
      if (_0x51ad07.result.result === 2) {
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
    } catch (_0x173795) {
      logger(_0x173795);
      this.logAllCatchPets(this.allCatchPets);
    }
  }
  logAllCatchPets(_0x279ecd) {
    if (_0x279ecd.length > 0) {
      let _0x160550 = [];
      for (let _0x43e658 = 0; _0x43e658 < _0x279ecd.length; _0x43e658++) {
        _0x160550.push("\n精灵: " + _0x279ecd[_0x43e658].nick + " 天赋: " + _0x279ecd[_0x43e658].talent);
      }
      addGameLog(_0x160550.join(""));
    }
    addGameLog("\n捕捉精灵汇总:");
  }
  getUseCatchPets() {
    const _0x53995c = {
      处处留情: 31598,
      真抽打: 31993,
      手下留情: 10057,
      手下留情Plus: 100125,
      天魔裂空闪: 400005
    };
    const _0x34331f = PetManager.getInstance().getAllPets();
    const _0x4f3643 = _0x34331f.flatMap(_0x209e2f => Object.entries(_0x53995c).filter(([_0x3a8f33, _0x1b74bc]) => _0x209e2f.skills.includes(_0x1b74bc)).map(([_0x2dc41f, _0x121849]) => ({
      getTime: _0x209e2f.getTime,
      skillID: _0x121849,
      petId: _0x209e2f.petId,
      petTokenGetTimeList: _0x209e2f.petTokenGetTimeList,
      skills: _0x209e2f.skills,
      nick: _0x209e2f.nick
    }))).filter(function (_0x2d0a55) {
      if (_0x2d0a55.nick == "皮皮" && _0x2d0a55.skills.indexOf(400005) !== -1) {
        if (_0x2d0a55.petTokenGetTimeList[0] !== 0 && _0x2d0a55.petTokenGetTimeList[1] !== 0 && _0x2d0a55.petTokenGetTimeList[2] !== 0) {
          if (PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x2d0a55.petTokenGetTimeList[0]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x2d0a55.petTokenGetTimeList[1]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x2d0a55.petTokenGetTimeList[2]).ench).enchId == 101) {
            return _0x2d0a55;
          }
        }
      } else {
        return _0x2d0a55;
      }
    });
    if (_0x4f3643.length) {
      return _0x4f3643;
    } else {
      return false;
    }
  }
  checkUseCatchPet() {
    const _0x5f5af2 = {
      处处留情: 31598,
      真抽打: 31993,
      手下留情: 10057,
      手下留情Plus: 100125,
      天魔裂空闪: 400005
    };
    const _0x50f771 = Object.values(_0x5f5af2).map(() => false);
    const _0x56dec6 = PetManager.getInstance().getAllPets();
    for (let _0x36438a = 0; _0x36438a < _0x56dec6.length; _0x36438a++) {
      const _0x11bdc8 = _0x56dec6[_0x36438a];
      const _0x294498 = _0x11bdc8.skills;
      if (_0x11bdc8.level >= 6) {
        Object.values(_0x5f5af2).some((_0x1cfed6, _0x5e9a62) => {
          if (_0x11bdc8.nick == "皮皮" && _0x11bdc8.skills.indexOf(400005) !== -1) {
            if (_0x11bdc8.petTokenGetTimeList[0] !== 0 && _0x11bdc8.petTokenGetTimeList[1] !== 0 && _0x11bdc8.petTokenGetTimeList[2] !== 0) {
              if (PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x11bdc8.petTokenGetTimeList[0]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x11bdc8.petTokenGetTimeList[1]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x11bdc8.petTokenGetTimeList[2]).ench).enchId == 101) {} else {
                return false;
              }
            } else {
              return false;
            }
          }
          if (_0x294498.includes(_0x1cfed6)) {
            const _0x198760 = {
              getTime: _0x11bdc8.getTime,
              skillID: _0x1cfed6,
              petId: _0x11bdc8.petId
            };
            _0x50f771[_0x5e9a62] = _0x198760;
            return true;
          }
          return false;
        });
      }
    }
    return _0x50f771.find(_0x18f6be => _0x18f6be) || false;
  }
}
class Mine extends SuperTask {
  constructor() {
    super();
    this.nowName = "采矿";
  }
  start() {
    super.start();
    let _0x23b4fb = this;
    MFC.alert.show("确定进行采矿吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x3f4df4) {
      _0x23b4fb.stop();
    }, function (_0x2105a6) {
      _0x23b4fb.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      const _0x1e7055 = xls.collect.getItems().map(_0x2ba9a1 => {
        if (_0x2ba9a1.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") <= _0x2ba9a1.endTime) {
          return _0x2ba9a1.id;
        }
      }).filter(_0x2c8ec6 => _0x2c8ec6 !== undefined);
      const _0x34201a = xls.collect.getItems().map(_0x1fe6b0 => {
        if (_0x1fe6b0.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") <= _0x1fe6b0.endTime) {
          return _0x1fe6b0.dailyLimit;
        }
      }).filter(_0x27be49 => _0x27be49 !== undefined);
      const _0x5cb953 = _0x1e7055.map(_0x40581b => {
        return MFC.attr.getAttr(parseInt(MFC.attrType.dailyMiningStart) + _0x40581b);
      });
      let _0x1cf1cc = 0;
      while (_0x1cf1cc < _0x1e7055.length) {
        logger(_0x1cf1cc);
        if (_0x5cb953[_0x1cf1cc] < _0x34201a[_0x1cf1cc]) {
          const _0x8e1df5 = {
            id: _0x1e7055[_0x1cf1cc]
          };
          await this.send_message("cs_mining", _0x8e1df5);
          _0x5cb953[_0x1cf1cc]++;
        } else {
          let _0x4c34d3 = xls.collect.getItem(_0x1e7055[_0x1cf1cc]).name;
          addGameLog(_0x4c34d3 + "采集完毕");
          _0x1cf1cc++;
        }
      }
      addGameLog("所有采集执行完毕");
      this.stop();
    } catch (_0x1e0cec) {}
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
    let _0x50e146 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x4e4a6b = SimpleAlertUi({
        width: 460,
        height: 460
      });
      _0x50e146.alertWin = _0x4e4a6b;
      let _0x498331 = [];
      const _0x4a4b1a = {
        text: "一键日常",
        y: _0x4e4a6b.height / 16
      };
      var _0x1996cc = createLabel(_0x4a4b1a);
      _0x1996cc.x = _0x4e4a6b.width / 2 - _0x1996cc.width / 2;
      _0x498331.push(_0x1996cc);
      const _0x30e247 = {
        text: "注意:",
        textColor: 16776960,
        x: 30,
        y: _0x1996cc.y + _0x1996cc.height + 12
      };
      var _0x1b0ee5 = createLabel(_0x30e247);
      _0x498331.push(_0x1b0ee5);
      const _0x3ba5d4 = {
        text: "[使用挑战阵容1]请确保将强力的精灵设置首发",
        textColor: 16777215,
        x: 40,
        y: _0x1b0ee5.y + _0x1b0ee5.height + 10
      };
      var _0x1b6940 = createLabel(_0x3ba5d4);
      _0x498331.push(_0x1b6940);
      const _0x2e77e2 = {
        text: "请确保首发技能为威力最大的技能",
        textColor: 16777215,
        x: 40,
        y: _0x1b6940.y + _0x1b6940.height + 10
      };
      var _0x3655c3 = createLabel(_0x2e77e2);
      _0x498331.push(_0x3655c3);
      const _0x4a36aa = {
        text: "进化达人为幽浮,会消耗经验至20级.并消耗6个羽之石\n勇者之塔需要首发未满100级,否则勇者之塔不会完成5次",
        textColor: 16776960,
        x: 40,
        y: _0x3655c3.y + _0x3655c3.height + 10
      };
      var _0x5ccf40 = createLabel(_0x4a36aa);
      _0x498331.push(_0x5ccf40);
      let _0x262e26 = [{
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
      let _0x537d8c = 30;
      let _0x5985f9 = _0x5ccf40.y + _0x5ccf40.height + 20;
      for (let _0x77d2eb = 0; _0x77d2eb < _0x262e26.length; _0x77d2eb++) {
        const _0x56fd99 = {
          text: _0x262e26[_0x77d2eb].label.text,
          x: _0x537d8c,
          y: _0x5985f9
        };
        let _0x365565 = createLabel(_0x56fd99);
        const _0xc69114 = {
          x: _0x365565.x + _0x365565.width + 10,
          y: _0x5985f9,
          selected: true,
          storageKey: _0x262e26[_0x77d2eb].switch.storageKey,
          taskId: _0x262e26[_0x77d2eb].switch.taskId,
          taskName: _0x262e26[_0x77d2eb].switch.taskName
        };
        let _0x30ea5a = createToggle(_0xc69114);
        _0x537d8c = _0x537d8c + _0x365565.width + 10 + _0x30ea5a.width + 10;
        this.switchBtnList.push(_0x30ea5a);
        _0x498331.push(_0x365565);
        _0x498331.push(_0x30ea5a);
        if ((_0x77d2eb + 1) % 3 == 0) {
          _0x5985f9 = _0x5985f9 + _0x30ea5a.height + 10;
          _0x537d8c = 30;
        }
      }
      _0x50e146.addAllUis(_0x498331);
      _0x4e4a6b.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x50e146.stop();
      }, function () {
        _0x50e146.switchBtnList.forEach(_0x399707 => localStorage.setItem(_0x399707.storageKey, _0x399707.selected));
        _0x50e146.prcessBody();
      }], null);
      _0x4e4a6b.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x50ffca = await this.send_message("cs_get_daily_task_list", {});
      for (let _0x3473ca = 0; _0x3473ca < this.switchBtnList.length; _0x3473ca++) {
        if (this.switchBtnList[_0x3473ca].taskName == "mapMonster10" && this.switchBtnList[_0x3473ca].selected) {
          let _0x3a3ec1 = this.switchBtnList[_0x3473ca].taskId;
          let _0xe9face = _0x50ffca.dailyTask.find(_0x3df557 => _0x3df557.taskId === _0x3a3ec1).taskProcess;
          if (_0xe9face < 10) {
            addGameLog("执行野怪10次");
            let _0x126740 = new FightMapBoss(10);
            await _0x126740.prcessBody();
            await wait(300);
            const _0x152fae = {
              taskId: _0x3a3ec1
            };
            await this.send_message("cs_get_daily_task_prize", _0x152fae);
          } else if (_0xe9face == 10) {
            await wait(300);
            addGameLog("野怪10次已完成");
            const _0xe7203e = {
              taskId: _0x3a3ec1
            };
            await this.send_message("cs_get_daily_task_prize", _0xe7203e);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "shareBattery" && this.switchBtnList[_0x3473ca].selected) {
          let _0x666db = this.switchBtnList[_0x3473ca].taskId;
          let _0x354255 = _0x50ffca.dailyTask.find(_0x5804d2 => _0x5804d2.taskId === _0x666db).taskProcess;
          if (_0x354255 < 1) {
            await wait(300);
            addGameLog("执行分享电池");
            await this.send_message("cs_share_succeed", {});
            await wait(300);
            const _0x2048aa = {
              taskId: _0x666db
            };
            await this.send_message("cs_get_daily_task_prize", _0x2048aa);
          } else if (_0x354255 == 1) {
            await wait(300);
            addGameLog("分享电池完成");
            const _0x574ff6 = {
              taskId: _0x666db
            };
            await this.send_message("cs_get_daily_task_prize", _0x574ff6);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "lookBattle" && this.switchBtnList[_0x3473ca].selected) {
          let _0x20bcd8 = this.switchBtnList[_0x3473ca].taskId;
          let _0x261204 = _0x50ffca.dailyTask.find(_0x1b508a => _0x1b508a.taskId === _0x20bcd8).taskProcess;
          if (_0x261204 < 1) {
            addGameLog("执行观战");
            let _0xce3602 = await this.send_message("sc_battle_watch_get_room", {
              type: 1,
              start: 0,
              end: 15,
              battleType: 1
            });
            logger(_0xce3602);
            let _0x4ca2f1 = "";
            for (let _0x232adc = 0; _0x232adc < _0xce3602.ranking.length; _0x232adc++) {
              if (_0xce3602.ranking[_0x232adc].combatantA.match_permissions == "1") {
                _0x4ca2f1 = _0xce3602.ranking[_0x232adc].roomId;
              }
            }
            addGameLog("进入对战房间");
            if (_0x4ca2f1 == "") {
              addGameLog("无符合条件的观战");
            } else {
              await wait(300);
              await this.send_message("cs_battle_watch", {
                watchId: _0x4ca2f1,
                type: 1,
                watchUid: _0x4ca2f1.split("_")[0]
              });
              await wait(200);
              winLog.onOpenPanel();
              await this.send_message("cs_battle_watch", {
                watchId: _0x4ca2f1,
                type: 2,
                watchUid: _0x4ca2f1.split("_")[0]
              });
              winLog.txtWatcher.text = "正在执行:" + window.nowTask.nowName;
              await wait(300);
              const _0x1c171e = {
                taskId: _0x20bcd8
              };
              await this.send_message("cs_get_daily_task_prize", _0x1c171e);
            }
          } else if (_0x261204 == 1) {
            await wait(300);
            addGameLog("观战完成");
            const _0x2c3739 = {
              taskId: _0x20bcd8
            };
            await this.send_message("cs_get_daily_task_prize", _0x2c3739);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "sptBattle" && this.switchBtnList[_0x3473ca].selected) {
          let _0x3ff2b8 = this.switchBtnList[_0x3473ca].taskId;
          let _0x2cd6be = _0x50ffca.dailyTask.find(_0x5a626b => _0x5a626b.taskId === _0x3ff2b8).taskProcess;
          if (_0x2cd6be < 1) {
            addGameLog("执行spt挑战");
            if (UserManager.getInstance().userInfo.curEnergy < 20) {
              addGameLog("电池不足,取消spt挑战!");
              continue;
            }
            let _0x3e97e1 = PetManager.getInstance().getAllPets();
            let _0x26e960 = "";
            for (let _0x1dc5ad = 0; _0x1dc5ad < _0x3e97e1.length; _0x1dc5ad++) {
              if (_0x3e97e1[_0x1dc5ad].level == 1) {
                _0x26e960 = _0x3e97e1[_0x1dc5ad];
                break;
              }
            }
            if (_0x26e960 == "") {
              addGameLog("背包没1级精灵");
            } else {
              let _0x454ee5 = _0x26e960.skills[0];
              let _0x142954 = UserManager.getInstance().userInfo.defaultTeam;
              await this.send_message("cs_new_change_petArray", {
                op: 2,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: []
              });
              const _0xf14cf0 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x26e960.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0xf14cf0);
              await wait(300);
              addGameLog("派出: " + _0x26e960.nick + " 对战: 里奥斯");
              const _0x141002 = {
                levelId: 3,
                getTimeList: [_0x26e960.getTime]
              };
              await this.send_message("cs_pve_planet_spt_start_battle", _0x141002);
              await this.initBattle();
              let _0x41f8ba = await this.useSkill(_0x454ee5);
              while (_0x41f8ba.result.result == 0) {
                addGameLog("未被击败，继续攻击");
                _0x41f8ba = await this.useSkill(_0x454ee5);
              }
              if (_0x41f8ba.result.result === 1) {
                addGameLog("打过boss,按理不会触发");
              } else {
                addGameLog("被Boss击败,完成spt挑战!");
              }
              addGameLog("将阵容切换回来");
              await wait(200);
              const _0x219b91 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: _0x142954
              };
              await this.send_message("cs_new_change_petArray", _0x219b91);
              await wait(200);
              const _0x247af2 = {
                taskId: _0x3ff2b8
              };
              await this.send_message("cs_get_daily_task_prize", _0x247af2);
            }
          } else if (_0x2cd6be == 1) {
            await wait(300);
            addGameLog("spt完成");
            const _0x4efd1f = {
              taskId: _0x3ff2b8
            };
            await this.send_message("cs_get_daily_task_prize", _0x4efd1f);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "normalLevel" && this.switchBtnList[_0x3473ca].selected) {
          let _0x59136b = this.switchBtnList[_0x3473ca].taskId;
          let _0x292992 = _0x50ffca.dailyTask.find(_0x25c9eb => _0x25c9eb.taskId === _0x59136b).taskProcess;
          if (_0x292992 < 5) {
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
              const _0x45335e = {
                taskId: _0x59136b
              };
              await this.send_message("cs_get_daily_task_prize", _0x45335e);
            }
          } else if (_0x292992 == 5) {
            await wait(300);
            addGameLog("普通关卡5次完成");
            const _0x250a2a = {
              taskId: _0x59136b
            };
            await this.send_message("cs_get_daily_task_prize", _0x250a2a);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "catchPet1" && this.switchBtnList[_0x3473ca].selected) {
          let _0x271798 = UserManager.getInstance().userInfo.defaultTeam;
          let _0x5249df = this.switchBtnList[_0x3473ca].taskId;
          let _0x49f31b = _0x50ffca.dailyTask.find(_0xf8387 => _0xf8387.taskId === _0x5249df).taskProcess;
          if (_0x49f31b < 1) {
            addGameLog("开始捕捉幽浮");
            await wait(200);
            let _0x4ef45f = new MapCatch();
            _0x4ef45f.capIds = [4001, 4002];
            _0x4ef45f.levelIds = [34];
            _0x4ef45f.catchCounts = 1;
            _0x4ef45f.stopTalent = 31;
            await _0x4ef45f.prcessBody();
            addGameLog("将阵容切换回来");
            await wait(200);
            const _0x5c5085 = {
              op: 1,
              arrayType: "defaultTeam",
              subArray: 0,
              idx: 1,
              teamUp: 0,
              fightType: 0,
              getTimeList: _0x271798
            };
            await this.send_message("cs_new_change_petArray", _0x5c5085);
            let _0x4d1085 = await this.send_message("cs_get_daily_task_list", {});
            let _0x4fd0cb = _0x4d1085.dailyTask.find(_0x5eac3e => _0x5eac3e.taskId === _0x5249df).taskProcess;
            if (_0x4fd0cb == 1) {
              await wait(300);
              const _0x3ec382 = {
                taskId: _0x5249df
              };
              await this.send_message("cs_get_daily_task_prize", _0x3ec382);
            }
          } else if (_0x49f31b == 1) {
            await wait(300);
            addGameLog("捕捉达人完成");
            const _0x14e456 = {
              taskId: _0x5249df
            };
            await this.send_message("cs_get_daily_task_prize", _0x14e456);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "evolution" && this.switchBtnList[_0x3473ca].selected) {
          let _0x32919f = this.switchBtnList[_0x3473ca].taskId;
          let _0x16c48d = _0x50ffca.dailyTask.find(_0xd2eec4 => _0xd2eec4.taskId === _0x32919f).taskProcess;
          if (_0x16c48d < 1) {
            addGameLog("开始进化幽浮");
            let _0x16548b = PetManager.getInstance().getAllPets();
            let _0x218724 = "";
            for (let _0x10dfbf = 0; _0x10dfbf < _0x16548b.length; _0x10dfbf++) {
              let _0x272d21 = _0x16548b[_0x10dfbf];
              if (_0x272d21.petId == 25) {
                _0x218724 = _0x272d21;
                break;
              }
            }
            if (_0x218724 == "") {
              addGameLog("背包中没有幽浮");
              let _0x1269f2 = UserManager.getInstance().userInfo.defaultTeam;
              addGameLog("开始捕捉幽浮");
              await wait(200);
              let _0x3ac859 = new MapCatch();
              _0x3ac859.capIds = [4001, 4002];
              _0x3ac859.levelIds = [34];
              _0x3ac859.catchCounts = 1;
              _0x3ac859.stopTalent = 31;
              await _0x3ac859.prcessBody();
              addGameLog("将阵容切换回来");
              await wait(200);
              const _0x2eb701 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: _0x1269f2
              };
              await this.send_message("cs_new_change_petArray", _0x2eb701);
              _0x16548b = PetManager.getInstance().getAllPets();
              let _0x53af06 = "";
              for (let _0x471429 = 0; _0x471429 < _0x16548b.length; _0x471429++) {
                let _0x4bb868 = _0x16548b[_0x471429];
                if (_0x4bb868.petId == 25) {
                  _0x53af06 = _0x4bb868;
                  break;
                }
              }
              let _0x5109f3 = 0;
              if (getSeerItemNum(30031) < 6) {
                addGameLog("羽之石不足6个,停止进化");
              } else {
                addGameLog("选中幽浮 等级: " + _0x53af06.level);
                if (_0x53af06.level >= 20) {
                  addGameLog("等级达到,直接进化!");
                  _0x5109f3 = 1;
                } else {
                  while (1) {
                    let _0x15222b = await this.send_message("cs_query_exp", {
                      flag: 1
                    });
                    if (_0x15222b.exp < 300) {
                      addGameLog("经验仓经验不足300,停止进化");
                      break;
                    }
                    const _0x37be9e = {
                      getTime: _0x53af06.getTime,
                      addExp: 300
                    };
                    await this.send_message("cs_pet_inject_exp", _0x37be9e);
                    addGameLog("加经验300");
                    let _0x20d002 = await this.waitEvent("sc_notify_change_pet");
                    let _0x569220 = JSON.parse(_0x20d002.gameBody[_0x20d002.gameBody.length - 1].raw);
                    _0x20d002.gameBody.splice(0, _0x20d002.gameBody.length);
                    if (_0x569220.pet.level >= 20) {
                      addGameLog("等级达到20级,停止经验注入");
                      _0x5109f3 = 1;
                      break;
                    }
                  }
                }
              }
              if (_0x5109f3 == 1) {
                const _0x205865 = {
                  getTime: _0x53af06.getTime,
                  id: 21
                };
                await this.send_message("cs_pet_evolve", _0x205865);
                addGameLog("进化成功!");
                await wait(300);
                const _0x3ef234 = {
                  taskId: _0x32919f
                };
                await this.send_message("cs_get_daily_task_prize", _0x3ef234);
              }
            } else {
              let _0x24815c = 0;
              if (getSeerItemNum(30031) < 6) {
                addGameLog("羽之石不足6个,停止进化");
              } else {
                addGameLog("选中幽浮 等级: " + _0x218724.level);
                if (_0x218724.level >= 20) {
                  addGameLog("等级达到,直接进化!");
                  _0x24815c = 1;
                } else {
                  while (1) {
                    let _0xfd7949 = await this.send_message("cs_query_exp", {
                      flag: 1
                    });
                    if (_0xfd7949.exp < 300) {
                      addGameLog("经验仓经验不足300,停止进化");
                      break;
                    }
                    const _0x1417de = {
                      getTime: _0x218724.getTime,
                      addExp: 300
                    };
                    await this.send_message("cs_pet_inject_exp", _0x1417de);
                    addGameLog("加经验300");
                    let _0xc5e2d1 = await this.waitEvent("sc_notify_change_pet");
                    let _0x6c80bf = JSON.parse(_0xc5e2d1.gameBody[_0xc5e2d1.gameBody.length - 1].raw);
                    _0xc5e2d1.gameBody.splice(0, _0xc5e2d1.gameBody.length);
                    if (_0x6c80bf.pet.level >= 20) {
                      addGameLog("等级达到20级,停止经验注入");
                      _0x24815c = 1;
                      break;
                    }
                  }
                }
              }
              if (_0x24815c == 1) {
                const _0x45cdbc = {
                  getTime: _0x218724.getTime,
                  id: 21
                };
                await this.send_message("cs_pet_evolve", _0x45cdbc);
                addGameLog("进化成功!");
                await wait(300);
                const _0x12e805 = {
                  taskId: _0x32919f
                };
                await this.send_message("cs_get_daily_task_prize", _0x12e805);
              }
            }
          } else if (_0x16c48d == 1) {
            await wait(300);
            addGameLog("进化幽浮完成");
            const _0x15ff06 = {
              taskId: _0x32919f
            };
            await this.send_message("cs_get_daily_task_prize", _0x15ff06);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "buyCoin" && this.switchBtnList[_0x3473ca].selected) {
          let _0x408a28 = this.switchBtnList[_0x3473ca].taskId;
          let _0x451e90 = _0x50ffca.dailyTask.find(_0x148175 => _0x148175.taskId === _0x408a28).taskProcess;
          if (_0x451e90 < 1) {
            await wait(200);
            await this.send_message("cs_buy_coin", {});
            addGameLog("购买赛尔豆成功");
            await wait(300);
            const _0x1c8d8e = {
              taskId: _0x408a28
            };
            await this.send_message("cs_get_daily_task_prize", _0x1c8d8e);
          } else if (_0x451e90 == 1) {
            await wait(300);
            addGameLog("购买赛尔豆完成");
            const _0x583aed = {
              taskId: _0x408a28
            };
            await this.send_message("cs_get_daily_task_prize", _0x583aed);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "superLevel" && this.switchBtnList[_0x3473ca].selected) {
          let _0x51fb15 = this.switchBtnList[_0x3473ca].taskId;
          let _0x15861f = _0x50ffca.dailyTask.find(_0x396960 => _0x396960.taskId === _0x51fb15).taskProcess;
          if (_0x15861f < 3) {
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
              const _0x562615 = {
                taskId: _0x51fb15
              };
              await this.send_message("cs_get_daily_task_prize", _0x562615);
            }
          } else if (_0x15861f == 3) {
            await wait(300);
            addGameLog("扫荡三次洛克斯星林间精英关卡完毕");
            const _0x1be3b1 = {
              taskId: _0x51fb15
            };
            await this.send_message("cs_get_daily_task_prize", _0x1be3b1);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "TrekBattle" && this.switchBtnList[_0x3473ca].selected) {
          let _0x1decf4 = this.switchBtnList[_0x3473ca].taskId;
          let _0xd5b17 = _0x50ffca.dailyTask.find(_0x4d4778 => _0x4d4778.taskId === _0x1decf4).taskProcess;
          if (_0xd5b17 < 1) {
            addGameLog("开始星际迷航");
            let _0x20964a = new Trek();
            await _0x20964a.prcessBody();
            let _0x3093df = await this.send_message("cs_get_daily_task_list", {});
            let _0x2f7529 = _0x3093df.dailyTask.find(_0x10a8dd => _0x10a8dd.taskId === _0x1decf4).taskProcess;
            if (_0x2f7529 == 1) {
              await wait(300);
              const _0x1c4381 = {
                taskId: _0x1decf4
              };
              await this.send_message("cs_get_daily_task_prize", _0x1c4381);
            }
          } else if (_0xd5b17 == 1) {
            await wait(300);
            addGameLog("星际迷航完成");
            const _0x4c9282 = {
              taskId: _0x1decf4
            };
            await this.send_message("cs_get_daily_task_prize", _0x4c9282);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "CoinBattle" && this.switchBtnList[_0x3473ca].selected) {
          let _0x59d4be = this.switchBtnList[_0x3473ca].taskId;
          let _0x1b4ab8 = _0x50ffca.dailyTask.find(_0x3091ca => _0x3091ca.taskId === _0x59d4be).taskProcess;
          if (_0x1b4ab8 < 1) {
            addGameLog("开始豆子大作战");
            let _0x5c86f5 = new CoinBigBattle();
            await _0x5c86f5.prcessBody();
            let _0x1c9932 = await this.send_message("cs_get_daily_task_list", {});
            let _0x4902bf = _0x1c9932.dailyTask.find(_0x30e5f4 => _0x30e5f4.taskId === _0x59d4be).taskProcess;
            if (_0x4902bf == 1) {
              await wait(300);
              const _0x1f3696 = {
                taskId: _0x59d4be
              };
              await this.send_message("cs_get_daily_task_prize", _0x1f3696);
            }
          } else if (_0x1b4ab8 == 1) {
            await wait(300);
            addGameLog("赛尔豆大作战完成");
            const _0x148410 = {
              taskId: _0x59d4be
            };
            await this.send_message("cs_get_daily_task_prize", _0x148410);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "limitBattle" && this.switchBtnList[_0x3473ca].selected) {
          let _0x40c1e4 = this.switchBtnList[_0x3473ca].taskId;
          let _0xc74be = _0x50ffca.dailyTask.find(_0x3e4a78 => _0x3e4a78.taskId === _0x40c1e4).taskProcess;
          if (_0xc74be < 1) {
            addGameLog("开始极限挑战");
            let _0x7aecd8 = new LimitBattle();
            _0x7aecd8.taskId = _0x40c1e4;
            await _0x7aecd8.prcessBody();
            await wait(2000);
          } else if (_0xc74be == 1) {
            await wait(300);
            addGameLog("极限挑战完成");
            const _0x46090e = {
              taskId: _0x40c1e4
            };
            await this.send_message("cs_get_daily_task_prize", _0x46090e);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "PVP3" && this.switchBtnList[_0x3473ca].selected) {
          if (UserManager.getInstance().userInfo.pvp3V3Team.length < 3) {
            addGameLog("检测到3v3并未配置完成,自动进行配置");
            let _0x39f72f = PetManager.getInstance().getAllPets();
            const _0x4740ee = {
              op: 1,
              arrayType: "pvp3V3Team",
              subArray: 0,
              idx: 1,
              teamUp: 0,
              fightType: 0,
              getTimeList: [_0x39f72f[0].getTime, _0x39f72f[1].getTime, _0x39f72f[2].getTime]
            };
            this.send_message("cs_new_change_petArray", _0x4740ee);
            await wait(300);
          }
          let _0x40de0d = this.switchBtnList[_0x3473ca].taskId;
          let _0x3d3872 = _0x50ffca.dailyTask.find(_0x550abb => _0x550abb.taskId === _0x40de0d).taskProcess;
          if (_0x3d3872 < 3) {
            addGameLog("开始自由对战3次,注意设置阵容");
            let _0x10c3df = new ziyou();
            _0x10c3df.goalTaskCounts = 3;
            await _0x10c3df.prcessBody();
            await wait(2000);
            const _0x4d45dc = {
              taskId: _0x40de0d
            };
            await this.send_message("cs_get_daily_task_prize", _0x4d45dc);
          } else if (_0x3d3872 == 3) {
            await wait(300);
            addGameLog("PVP3次完成");
            const _0x4452c2 = {
              taskId: _0x40de0d
            };
            await this.send_message("cs_get_daily_task_prize", _0x4452c2);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "bravery" && this.switchBtnList[_0x3473ca].selected) {
          let _0x23ac3d = this.switchBtnList[_0x3473ca].taskId;
          let _0x1c4e50 = _0x50ffca.dailyTask.find(_0x1ec6c5 => _0x1ec6c5.taskId === _0x23ac3d).taskProcess;
          if (_0x1c4e50 < 5) {
            addGameLog("开始勇者之塔5次");
            let _0x489b34 = new braveryBattle();
            await _0x489b34.prcessBody();
            await wait(2000);
            const _0x3f74ec = {
              taskId: _0x23ac3d
            };
            await this.send_message("cs_get_daily_task_prize", _0x3f74ec);
          } else if (_0x1c4e50 == 5) {
            await wait(300);
            addGameLog("勇者之塔五次完成");
            const _0x91ad02 = {
              taskId: _0x23ac3d
            };
            await this.send_message("cs_get_daily_task_prize", _0x91ad02);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "nl5" && this.switchBtnList[_0x3473ca].selected) {
          let _0x35c745 = this.switchBtnList[_0x3473ca].taskId;
          let _0x24880f = _0x50ffca.dailyTask.find(_0x43a0b9 => _0x43a0b9.taskId === _0x35c745).taskProcess;
          if (_0x24880f < 5) {
            addGameLog("5次能量包定时器已经开启");
            let _0x1a98ae = MFC.attr.getAttr(MFC.attrType.dailyFreeNormalLotteryTimes);
            let _0xd4995a = MFC.attr.getAttr(MFC.attrType.dailyNextFreeNormalLotteryTime) * 1000;
            let _0x4294d5 = // TOLOOK
            setInterval(() => {
              try {
                let _0x45eac5 = MFC.attr.getAttr(MFC.attrType.dailyFreeNormalLotteryTimes);
                if (_0x1a98ae >= _0x45eac5) {
                  if (_0x1a98ae < 5) {
                    if (_0xd4995a < MFC.serverTimer.date.getTime() - 30000) {
                      addGameLog("即将进行能量补给第" + (_0x1a98ae + 1) + "次获取");
                      GlobalSocket.PROTOCOL_SOCKET.send(10612, {
                        id: 1
                      });
                      _0xd4995a = MFC.serverTimer.date.getTime() + 330000;
                      _0x1a98ae++;
                    }
                  } else {
                    if (MFC.attr.getAttr(MFC.attrType.dailyTaskProcess2) == 5) {
                      addGameLog("购买5次能量包任务领取");
                      GlobalSocket.PROTOCOL_SOCKET.send(1793, {
                        taskId: 2
                      });
                    }
                    addGameLog("能量补给获取结束");
                    clearInterval(_0x4294d5);
                  }
                } else if (_0x1a98ae < _0x45eac5) {
                  _0xd4995a = MFC.serverTimer.date.getTime() + 330000;
                  _0x1a98ae++;
                }
              } catch (_0x28988c) {}
            }, 300000);
          } else if (_0x24880f == 5) {
            await wait(300);
            addGameLog("五次免费能量包,已经完成");
            const _0x351d89 = {
              taskId: _0x35c745
            };
            await this.send_message("cs_get_daily_task_prize", _0x351d89);
          }
        } else if (this.switchBtnList[_0x3473ca].taskName == "sd" && this.switchBtnList[_0x3473ca].selected) {
          let _0x1bb599 = new Kloswamp();
          await _0x1bb599.prcessBody();
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
      let _0x3d997d = [];
      let _0x5099f4 = taskPanel.DailyTaskService.getActive();
      let _0xe8ab43 = taskPanel.DailyTaskService.getBoxStatus();
      if (_0x5099f4 >= 750 && _0xe8ab43[4] == 0) {
        _0x3d997d.push(4);
      }
      if (_0x5099f4 >= 600 && _0xe8ab43[3] == 0) {
        _0x3d997d.push(3);
      }
      if (_0x5099f4 >= 450 && _0xe8ab43[2] == 0) {
        _0x3d997d.push(2);
      }
      if (_0x5099f4 >= 300 && _0xe8ab43[1] == 0) {
        _0x3d997d.push(1);
      }
      if (_0x5099f4 >= 150 && _0xe8ab43[0] == 0) {
        _0x3d997d.push(0);
      }
      for (let _0x2c7c31 = 0; _0x2c7c31 < _0x3d997d.length; _0x2c7c31++) {
        const _0x3ed7e8 = {
          prizeId: _0x3d997d[_0x2c7c31]
        };
        await this.send_message("cs_get_daily_active_prize", _0x3ed7e8);
        addGameLog("领取第" + (_0x3d997d[_0x2c7c31] + 1) + "档日常活跃奖励");
        await wait(200);
      }
      await wait(100);
      MFC.moduleManager.closeModule(xls.ModuleConst.TASK_PANEL);
      addGameLog("日常执行完毕!");
      this.stop();
    } catch (_0x48b22a) {
      logger(_0x48b22a);
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
    let _0x56f4fc = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      var _0x2705c3 = SimpleAlertUi({});
      _0x56f4fc.alertWin = _0x2705c3;
      const _0x208d0e = {
        text: "极限挑战 雇佣20w赛尔豆",
        y: _0x2705c3.height / 11
      };
      const _0x66c20b = {
        label: _0x208d0e
      };
      const _0x5d28d5 = {
        text: "当前账号会租借大号精灵进行对战",
        y: _0x2705c3.height / 5
      };
      const _0x34d47a = {
        label: _0x5d28d5
      };
      const _0x1c0230 = {
        text: "大号驻守精灵需1级,方便送死极限挑战",
        y: _0x2705c3.height / 3
      };
      const _0x27d6d3 = {
        label: _0x1c0230
      };
      let _0x5c9df3 = [_0x66c20b, _0x34d47a, _0x27d6d3];
      for (let _0x1b900a = 0; _0x1b900a < _0x5c9df3.length; _0x1b900a++) {
        let _0x3648a4 = createLabel(_0x5c9df3[_0x1b900a].label);
        _0x3648a4.x = _0x2705c3.width / 2 - _0x3648a4.width / 2;
        _0x2705c3.addChild(_0x3648a4);
      }
      const _0x3a8c5a = {
        prompt: "输入大号uid",
        storageKey: "coinId",
        width: 120,
        y: _0x2705c3.height / 2
      };
      var _0x23580a = createEdit(_0x3a8c5a);
      _0x23580a.x = _0x2705c3.width / 2 - _0x23580a.width / 2;
      _0x2705c3.addChild(_0x23580a);
      _0x2705c3.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x56f4fc.stop();
      }, function () {
        _0x56f4fc.uid = _0x23580a.text;
        if (isNaN(parseInt(_0x56f4fc.uid.trim())) || parseInt(_0x56f4fc.uid.trim()) < 0) {
          MFC.bubbleAlert.showAlert("输入uid有误,请重新输入!");
          return true;
        }
        if (parseInt(_0x56f4fc.uid.trim()) == UserManager.getInstance().userInfo.uid) {
          MFC.bubbleAlert.showAlert("请勿输入当前账号的uid!");
          return true;
        }
        localStorage.setItem("coinId", _0x56f4fc.uid);
        _0x56f4fc.prcessBody();
      }], null);
      _0x2705c3.showAlert();
    });
  }
  async prcessBody() {
    try {
      while (1) {
        let _0x1e6b86 = await this.send_message("sc_get_campaign_pet_challenge_boss");
        if (_0x1e6b86.times <= 0) {
          MFC.bubbleAlert.showAlert("极限挑战次数已经用完,请更换其他账号");
          this.stop();
          return false;
        }
        let _0x5eda66 = _0x1e6b86.todayLimitAttr;
        let _0x3ec612 = await this.send_message("cs_new_get_hire_pet_list", {
          friendPageNo: 1,
          friendPageSize: 1000,
          teamPageNo: 1,
          teamPageSize: 1000
        });
        let _0x3ce1c1 = [];
        let _0x25821b = [];
        let _0x4fc38e = _0x3ec612.teamHireList;
        _0x4fc38e.forEach(_0x58b3c1 => {
          if (_0x58b3c1.userId == parseInt(this.uid)) {
            console.log(_0x58b3c1);
            _0x58b3c1.hireType = "team";
            _0x25821b.push(_0x58b3c1);
            addGameLog("战队精灵: " + PetConfig.getDef(_0x58b3c1.petId).name + " 雇佣次数: " + _0x58b3c1.petHireTimes);
            if (_0x58b3c1.petHireTimes < 10) {
              _0x3ce1c1.push(_0x58b3c1);
            }
          }
        });
        let _0x4c0c6f = _0x3ec612.friendHireList;
        _0x4c0c6f.forEach(_0x18847a => {
          if (_0x18847a.userId == parseInt(this.uid)) {
            console.log(_0x18847a);
            _0x25821b.push(_0x18847a);
            _0x18847a.hireType = "firend";
            addGameLog("好友精灵: " + PetConfig.getDef(_0x18847a.petId).name + " 雇佣次数: " + _0x18847a.petHireTimes);
            if (_0x18847a.petHireTimes < 3 && _0x18847a.petLevel <= 40) {
              _0x3ce1c1.push(_0x18847a);
            }
          }
        });
        logger(_0x25821b);
        if (_0x25821b.length == 0) {
          addGameLog("好友/战队租借列表均未找到: " + this.uid + "的精灵!");
          MFC.bubbleAlert.showAlert("好友/战队租借列表均未找到: " + this.uid + "的精灵!");
          this.stop();
          return false;
        }
        let _0x20f14d = [];
        for (let _0x40dc05 = 0; _0x40dc05 < _0x3ce1c1.length; _0x40dc05++) {
          if (_0x5eda66.indexOf(PetConfig.getDef(_0x3ce1c1[_0x40dc05].petId).elemType) !== -1) {
            _0x20f14d.push(_0x3ce1c1[_0x40dc05]);
          }
        }
        logger(_0x20f14d, "!!!!!!!!!!!!!!!!!!!!!!2");
        if (_0x20f14d.length == 0) {
          addGameLog("雇佣完毕!");
          this.stop();
          return false;
        }
        for (let _0x211f65 = 0; _0x211f65 < _0x20f14d.length; _0x211f65++) {
          if (_0x20f14d[_0x211f65].petHireTimes < 10) {
            let _0x5923f8 = await this.send_message("cs_new_get_hire_pet_info", {
              type: _0x20f14d[_0x211f65].type,
              pos: _0x20f14d[_0x211f65].pos,
              targetUid: parseInt(this.uid)
            });
            let _0x52581c = _0x5923f8.pet;
            await this.send_message("cs_start_campaign_pet_challenge", {
              levelId: 5,
              hirePetList: [this.uid + "_" + _0x20f14d[_0x211f65].type + "_" + _0x20f14d[_0x211f65].pos],
              attachBattleSkill: [{
                petId: _0x52581c.petId,
                level: _0x52581c.level,
                skillList: _0x52581c.skills,
                getTime: _0x20f14d[_0x211f65].getTime,
                otherUid: this.uid,
                type: _0x20f14d[_0x211f65].type
              }]
            });
            let _0x1e9929 = await this.waitEvent("sc_battle_notify_load_resource");
            _0x1e9929.gameBody.splice(0, _0x1e9929.gameBody.length);
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
            _0x1e9929 = await this.waitEvent("sc_battle_notify_round_result");
            _0x1e9929.gameBody.splice(0, _0x1e9929.gameBody.length);
            await wait(200);
            await this.send_message("cs_online_load_battle_result", {
              groupId: ""
            });
            await wait(200);
            let _0x2d5876 = _0x52581c.skills[0];
            const _0x330086 = {
              skillID: _0x2d5876
            };
            const _0x46f590 = {
              opType: 1,
              data: _0x330086,
              groupId: ""
            };
            await this.send_message("cs_online_player_operation", _0x46f590);
            _0x1e9929 = await this.waitEvent("sc_battle_notify_round_result");
            break;
          }
        }
      }
    } catch (_0x12286d) {
      logger(_0x12286d);
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
    let _0x19319b = this;
    MFC.alert.show(`星际迷航[自动上阵]
迷航每天5点-24点开启
前9关魔焰猩猩绝命火焰+后面采用光闪击瞬杀精灵+水次来通过
[未满足条件会自动进行租借]`, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0xea4c4b) {
      _0x19319b.stop();
    }, function (_0x3ff8e5) {
      _0x19319b.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x2542a6 = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      if (_0x2542a6.starMedal == 0) {
        addGameLog("迷航未开启,进行开启迷航");
        let _0x14ce62 = MFC.userInfo.vipLevel;
        if (_0x14ce62 < 8) {
          addGameLog("超能nono没到达8级");
          let _0x4f7585 = await this.openTrek();
          if (!_0x4f7585) {
            addGameLog("迷航停止!");
            await this.stop();
            return false;
          }
          _0x2542a6 = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        } else {
          let _0x522cd3 = await this.send_message("cs_pve_expedition_query_battle", {
            type: 1
          });
          if (_0x522cd3.desc && _0x522cd3.desc.indexOf("没有历史存档记录") !== -1) {
            addGameLog("没有历史存档记录");
            let _0x50b9aa = await this.openTrek();
            if (!_0x50b9aa) {
              addGameLog("迷航停止!");
              await this.stop();
              return false;
            }
            _0x2542a6 = await this.send_message("cs_pve_expedition_query_battle", {
              type: 0
            });
          } else if (_0x522cd3.petList.filter(function (_0xf36f49) {
            return _0xf36f49 && _0xf36f49.useSkills && _0xf36f49.useSkills.some(function (_0x85bedf) {
              return _0x85bedf.id === 100023 || _0x85bedf.id === 10630;
            });
          }).length > 0) {
            if (_0x522cd3.petList.filter(function (_0xfcaa7c) {
              return _0xfcaa7c && _0xfcaa7c.useSkills && _0xfcaa7c.useSkills.some(function (_0x55f219) {
                return _0x55f219.id === 100023 || _0x55f219.id === 10630;
              });
            })[0].fightAffects.split("_")[0] == 10002 && _0x522cd3.petList.filter(function (_0x2565e8) {
              return _0x2565e8 && _0x2565e8.useSkills && _0x2565e8.useSkills.some(function (_0x13b050) {
                return _0x13b050.id === 11022;
              });
            }).length > 0) {
              let _0x1fc730 = [];
              for (let _0x5b8334 = 0; _0x5b8334 < 12; _0x5b8334++) {
                if (_0x522cd3.petList[_0x5b8334]) {
                  _0x1fc730[_0x5b8334] = _0x522cd3.petList[_0x5b8334].getTime;
                } else {
                  _0x1fc730[_0x5b8334] = 0;
                }
              }
              await this.send_message("cs_pve_expedition_save_record", {
                type: 1
              });
              const _0x5d1c0e = {
                petList: _0x1fc730,
                attachBattleSkill: []
              };
              await this.send_message("cs_pve_expedition_set_array", _0x5d1c0e);
              addGameLog("使用保存阵容");
            } else {
              addGameLog("没瞬杀光闪击");
              let _0x43c1e6 = await this.openTrek();
              if (!_0x43c1e6) {
                addGameLog("迷航停止!");
                await this.stop();
                return false;
              }
              _0x2542a6 = await this.send_message("cs_pve_expedition_query_battle", {
                type: 0
              });
            }
          } else {
            addGameLog("没光闪击");
            let _0x1cdede = await this.openTrek();
            if (!_0x1cdede) {
              addGameLog("迷航停止!");
              await this.stop();
              return false;
            }
            _0x2542a6 = await this.send_message("cs_pve_expedition_query_battle", {
              type: 0
            });
          }
        }
        _0x2542a6 = await this.send_message("cs_pve_expedition_query_battle", {
          type: 0
        });
        if (JSON.stringify(_0x2542a6).indexOf(this.skillData.奥义断水击) !== -1) {
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
        if (JSON.stringify(_0x2542a6).indexOf(this.skillData.绝命火焰) != -1) {
          if (JSON.stringify(_0x2542a6).indexOf(this.skillData.光闪击Plus) != -1 || JSON.stringify(_0x2542a6).indexOf(this.skillData.光闪击) != -1) {} else {
            addGameLog("迷航目前阵容中没有检测到光闪击，迷航停止");
            await this.stop();
            return false;
          }
        } else {
          addGameLog("迷航目前阵容中没有检测到绝命火焰，迷航停止");
          await this.stop();
          return false;
        }
        if (JSON.stringify(_0x2542a6).indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("迷航阵容符合水次阵容，Going迷航");
          await this.actionStarTrek2();
          addGameLog("星际迷航已经完成!");
        } else {
          addGameLog("迷航阵容符合标准，Going迷航");
          await this.actionStarTrek();
          addGameLog("星际迷航已经完成!");
        }
      }
    } catch (_0xa1f90a) {
      logger(_0xa1f90a);
    }
  }
  async openTrek() {
    let _0x111db6;
    let _0x2639a9;
    let _0x47b1ee;
    let _0x5e3327 = 0;
    let _0x3b50f7 = 0;
    const _0x5404c9 = {
      skills: [this.skillData.绝命火焰]
    };
    let _0x301005 = getGoalPets([_0x5404c9]);
    if (!_0x301005) {
      addGameLog("精灵背包中没有魔焰猩猩+绝命火焰，请确保有其条件，再来启动脚本");
      return false;
    } else {
      addGameLog("背包中携有 魔焰猩猩 + 绝命火焰:" + _0x301005.nick);
      _0x3b50f7 = 1;
    }
    _0x2639a9 = _0x301005.getTime;
    let _0x419851 = getGoalPets([{
      skills: [10630],
      features: [8, 7, 6, 5]
    }, {
      skills: [100023],
      features: [8, 7, 6, 5]
    }]);
    const _0x4097ab = {
      skills: [this.skillData.奥义断水击]
    };
    let _0x32e303 = getGoalPets([_0x4097ab]);
    if (!_0x419851) {
      addGameLog("背包中没有瞬杀先制相关精灵，尝试进行好友/战队雇佣");
    } else {
      addGameLog("背包中携有 瞬杀+光闪击精灵:" + _0x419851.nick);
      _0x111db6 = _0x419851.getTime;
      _0x5e3327 = 1;
    }
    if (_0x3b50f7 == 1 && _0x5e3327 == 1) {
      if (!_0x32e303) {
        addGameLog("背包中没有水次水次奥义断水击，尝试进行好友/战队雇佣");
        _0x5e3327 = 2;
      } else {
        addGameLog("背包中携有水次奥义断水击:" + _0x32e303.nick);
        _0x47b1ee = _0x32e303.getTime;
        _0x5e3327 = 3;
      }
    }
    if (_0x3b50f7 == 1 && _0x5e3327 == 3) {
      const _0x1a0b0b = {
        petList: [_0x2639a9, _0x111db6, _0x47b1ee, "0", "0", "0"],
        attachBattleSkill: []
      };
      await this.send_message("cs_pve_expedition_set_array", _0x1a0b0b);
      await wait(200);
      addGameLog("迷航开启成功!");
      return true;
    } else if (_0x3b50f7 == 1 && _0x5e3327 == 2) {
      let _0x46c1e7 = await this.fromHireGetscPet();
      if (!_0x46c1e7) {
        addGameLog("战队/好友雇佣系统都无水次奥义断水击");
        _0x5e3327 = 1;
      } else {
        addGameLog("战队/好友雇佣系统有水次奥义断水击");
        addGameLog("雇佣水次迷航开启成功!");
        const _0x157eb1 = {
          petList: [_0x2639a9, _0x111db6, _0x46c1e7.userId + "_" + _0x46c1e7.type + "_" + _0x46c1e7.pos, "0", "0", "0"],
          attachBattleSkill: [{
            petId: _0x46c1e7.petId,
            level: _0x46c1e7.petLevel,
            skillList: _0x46c1e7.skills,
            getTime: _0x46c1e7.getTime,
            otherUid: _0x46c1e7.userId,
            type: _0x46c1e7.type
          }]
        };
        await this.send_message("cs_pve_expedition_set_array", _0x157eb1);
        return true;
      }
    }
    if (_0x3b50f7 == 1 && _0x5e3327 == 1) {
      const _0x2c3100 = {
        petList: [_0x2639a9, _0x111db6, "0", "0", "0", "0"],
        attachBattleSkill: []
      };
      await this.send_message("cs_pve_expedition_set_array", _0x2c3100);
      await wait(200);
      addGameLog("迷航开启成功!");
      return true;
    } else if (_0x3b50f7 == 1 && _0x5e3327 == 0) {
      let _0x138cc0 = await this.fromHireGetGuanPet();
      if (!_0x138cc0) {
        addGameLog("战队/好友雇佣系统都无瞬杀光闪击精灵，操作结束");
        return false;
      } else {
        addGameLog("战队/好友雇佣系统有瞬杀光闪击精灵");
        addGameLog("雇佣迷航开启成功!");
        const _0x3e234e = {
          petList: [_0x2639a9, _0x138cc0.userId + "_" + _0x138cc0.type + "_" + _0x138cc0.pos, "0", "0", "0", "0"],
          attachBattleSkill: [{
            petId: _0x138cc0.petId,
            level: _0x138cc0.petLevel,
            skillList: _0x138cc0.skills,
            getTime: _0x138cc0.getTime,
            otherUid: _0x138cc0.userId,
            type: _0x138cc0.type
          }]
        };
        await this.send_message("cs_pve_expedition_set_array", _0x3e234e);
        return true;
      }
    }
  }
  async fromHireGetscPet() {
    addGameLog("正在检测中....");
    let _0x225b24 = await this.send_message("cs_new_get_hire_pet_list", {
      friendPageNo: 1,
      friendPageSize: 1000,
      teamPageNo: 1,
      teamPageSize: 1000
    });
    let _0x210b15 = _0x225b24.friendHireList;
    for (let _0x42af0b = 0; _0x42af0b < _0x210b15.length; _0x42af0b++) {
      let _0x7cd7eb = _0x210b15[_0x42af0b];
      if (_0x7cd7eb.petId == 2135) {
        const _0x243c0e = {
          type: _0x7cd7eb.type,
          pos: _0x7cd7eb.pos,
          targetUid: _0x7cd7eb.userId
        };
        let _0x358562 = await this.send_message("cs_new_get_hire_pet_info", _0x243c0e);
        let _0x1092c5 = _0x358562.pet.skills;
        if (_0x1092c5.indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("好友雇佣列表存在水次奥义断水击:" + _0x358562.pet.nick);
          _0x7cd7eb.skills = _0x358562.pet.skills;
          return _0x7cd7eb;
        }
      }
    }
    let _0x4d4d75 = _0x225b24.teamHireList;
    for (let _0x472bd8 = 0; _0x472bd8 < _0x4d4d75.length; _0x472bd8++) {
      let _0x322126 = _0x4d4d75[_0x472bd8];
      if (_0x322126.petId == 2135) {
        const _0x34dc4b = {
          type: _0x322126.type,
          pos: _0x322126.pos,
          targetUid: _0x322126.userId
        };
        let _0xc6ef7a = await this.send_message("cs_new_get_hire_pet_info", _0x34dc4b);
        let _0x51b610 = _0xc6ef7a.pet.skills;
        if (_0x51b610.indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("好友雇佣列表存在水次奥义断水击:" + _0xc6ef7a.pet.nick);
          _0x322126.skills = _0xc6ef7a.pet.skills;
          return _0x322126;
        }
      }
    }
    for (let _0x3d6a03 = 0; _0x3d6a03 < _0x210b15.length; _0x3d6a03++) {
      let _0x4b8877 = _0x210b15[_0x3d6a03];
      if (_0x4b8877.petId == 2135) {
        const _0x34679c = {
          type: _0x4b8877.type,
          pos: _0x4b8877.pos,
          targetUid: _0x4b8877.userId
        };
        let _0x1b396b = await this.send_message("cs_new_get_hire_pet_info", _0x34679c);
        let _0x2f3be7 = _0x1b396b.pet.skills;
        if (_0x2f3be7.indexOf(this.skillData.奥义断水击) !== -1) {
          addGameLog("好友雇佣列表存在水次奥义断水击:" + _0x1b396b.pet.nick);
          _0x4b8877.skills = _0x1b396b.pet.skills;
          return _0x4b8877;
        }
      }
    }
    for (let _0x37987d = 0; _0x37987d < _0x4d4d75.length; _0x37987d++) {
      let _0x4422ff = _0x4d4d75[_0x37987d];
      if (_0x4422ff.petId == 2135) {
        const _0x4b92eb = {
          type: _0x4422ff.type,
          pos: _0x4422ff.pos,
          targetUid: _0x4422ff.userId
        };
        let _0x68d5cd = await this.send_message("cs_new_get_hire_pet_info", _0x4b92eb);
        let _0x29954e = _0x68d5cd.pet.skills;
        if (_0x29954e.indexOf(this.skillData.光闪击Plus) !== -1 || _0x29954e.indexOf(this.skillData.光闪击) !== -1) {
          addGameLog("好友雇佣列表存在水次奥义断水击:" + _0x68d5cd.pet.nick);
          _0x4422ff.skills = _0x68d5cd.pet.skills;
          return _0x4422ff;
        }
      }
    }
  }
  async fromHireGetGuanPet() {
    addGameLog("正在检测中....");
    let _0x3bfe37 = await this.send_message("cs_new_get_hire_pet_list", {
      friendPageNo: 1,
      friendPageSize: 1000,
      teamPageNo: 1,
      teamPageSize: 1000
    });
    let _0x318000 = _0x3bfe37.friendHireList;
    for (let _0x686eb7 = 0; _0x686eb7 < _0x318000.length; _0x686eb7++) {
      let _0x32da37 = _0x318000[_0x686eb7];
      if (_0x32da37.petId == 733) {
        const _0x1e6a30 = {
          type: _0x32da37.type,
          pos: _0x32da37.pos,
          targetUid: _0x32da37.userId
        };
        let _0x265ee8 = await this.send_message("cs_new_get_hire_pet_info", _0x1e6a30);
        let _0x2109ab = _0x265ee8.pet.skills;
        if (_0x2109ab.indexOf(this.skillData.光闪击Plus) !== -1 || _0x2109ab.indexOf(this.skillData.光闪击) !== -1) {
          if (_0x265ee8.pet.featureId == 8) {
            addGameLog("好友雇佣列表存在三星瞬杀光闪击精灵:" + _0x265ee8.pet.nick);
            _0x32da37.skills = _0x265ee8.pet.skills;
            return _0x32da37;
          }
        }
      }
    }
    let _0x3edc67 = _0x3bfe37.teamHireList;
    for (let _0x518156 = 0; _0x518156 < _0x3edc67.length; _0x518156++) {
      let _0x15d323 = _0x3edc67[_0x518156];
      if (_0x15d323.petId == 733) {
        const _0x2611a1 = {
          type: _0x15d323.type,
          pos: _0x15d323.pos,
          targetUid: _0x15d323.userId
        };
        let _0x566e4a = await this.send_message("cs_new_get_hire_pet_info", _0x2611a1);
        let _0x2c4cc7 = _0x566e4a.pet.skills;
        if (_0x2c4cc7.indexOf(this.skillData.光闪击Plus) !== -1 || _0x2c4cc7.indexOf(this.skillData.光闪击) !== -1) {
          if (_0x566e4a.pet.featureId == 8) {
            addGameLog("战队雇佣列表存在三星瞬杀光闪击精灵:" + _0x566e4a.pet.nick);
            _0x15d323.skills = _0x566e4a.pet.skills;
            return _0x15d323;
          }
        }
      }
    }
    for (let _0x2db6a7 = 0; _0x2db6a7 < _0x318000.length; _0x2db6a7++) {
      let _0x552ae3 = _0x318000[_0x2db6a7];
      if (_0x552ae3.petId == 733) {
        const _0x12cdd5 = {
          type: _0x552ae3.type,
          pos: _0x552ae3.pos,
          targetUid: _0x552ae3.userId
        };
        let _0x2df075 = await this.send_message("cs_new_get_hire_pet_info", _0x12cdd5);
        let _0x406098 = _0x2df075.pet.skills;
        if (_0x406098.indexOf(this.skillData.光闪击Plus) !== -1 || _0x406098.indexOf(this.skillData.光闪击) !== -1) {
          if (_0x2df075.pet.featureId == 7 || _0x2df075.pet.featureId == 6 || _0x2df075.pet.featureId == 5) {
            addGameLog("好友雇佣列表存在瞬杀光闪击精灵:" + _0x2df075.pet.nick);
            _0x552ae3.skills = _0x2df075.pet.skills;
            return _0x552ae3;
          }
        }
      }
    }
    for (let _0x267099 = 0; _0x267099 < _0x3edc67.length; _0x267099++) {
      let _0x4a1388 = _0x3edc67[_0x267099];
      if (_0x4a1388.petId == 733) {
        const _0x3e36b4 = {
          type: _0x4a1388.type,
          pos: _0x4a1388.pos,
          targetUid: _0x4a1388.userId
        };
        let _0x11356f = await this.send_message("cs_new_get_hire_pet_info", _0x3e36b4);
        let _0x1f4c14 = _0x11356f.pet.skills;
        if (_0x1f4c14.indexOf(this.skillData.光闪击Plus) !== -1 || _0x1f4c14.indexOf(this.skillData.光闪击) !== -1) {
          if (_0x11356f.pet.featureId == 7 || _0x11356f.pet.featureId == 6 || _0x11356f.pet.featureId == 5) {
            addGameLog("战队雇佣列表存瞬杀光闪击精灵:" + _0x11356f.pet.nick);
            _0x4a1388.skills = _0x11356f.pet.skills;
            return _0x4a1388;
          }
        }
      }
    }
  }
  moveNumToFirst(_0xd9134c, _0x3e17eb) {
    let _0x2e34dc = _0xd9134c.indexOf(_0x3e17eb);
    _0xd9134c.splice(_0x2e34dc, 1);
    _0xd9134c.unshift(_0x3e17eb);
    return _0xd9134c;
  }
  async actionStarTrek() {
    let _0x44764a = await this.send_message("cs_pve_expedition_query_battle", {
      type: 0
    });
    let _0x12485d;
    let _0x4910b8;
    let _0x1abb3a = [];
    logger(_0x44764a);
    for (let _0x1710b4 = 0; _0x1710b4 < _0x44764a.petList.length; _0x1710b4++) {
      if (_0x44764a.petList[_0x1710b4] == null) {
        _0x1abb3a.push(0);
      } else {
        _0x1abb3a.push(_0x44764a.petList[_0x1710b4].getTime);
        let _0x2bd125 = _0x44764a.petList[_0x1710b4].useSkills;
        if (JSON.stringify(_0x2bd125).indexOf(this.skillData.绝命火焰) != -1) {
          _0x12485d = _0x44764a.petList[_0x1710b4].getTime;
        }
        if (JSON.stringify(_0x2bd125).indexOf(this.skillData.光闪击Plus) != -1 || JSON.stringify(_0x2bd125).indexOf(this.skillData.光闪击) != -1) {
          _0x4910b8 = _0x44764a.petList[_0x1710b4].getTime;
        }
      }
    }
    await wait(100);
    _0x44764a = await this.send_message("cs_pve_expedition_query_battle", {
      type: 0
    });
    while (1) {
      if (parseInt(_0x44764a.levelId) + 1 == 16) {
        addGameLog("迷航已经通关");
        this.stop();
        return true;
      }
      addGameLog("迷航进度: 第" + (parseInt(_0x44764a.levelId) + 1) + "关卡");
      if (parseInt(_0x44764a.levelId) + 1 <= 8) {
        var _0x4b858c;
        if (_0x44764a.petList[0] == null) {
          _0x4b858c = {};
        } else {
          _0x4b858c = _0x44764a.petList[0].useSkills;
        }
        if (JSON.stringify(_0x4b858c).indexOf(this.skillData.绝命火焰) == -1) {
          addGameLog("前8关卡非魔焰首发，更换首发为魔焰");
          _0x1abb3a = this.moveNumToFirst(_0x1abb3a, _0x12485d);
          const _0x55536d = {
            petList: _0x1abb3a,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x55536d);
          _0x44764a = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else {
        var _0x4b858c;
        if (_0x44764a.petList[0] == null) {
          _0x4b858c = {};
        } else {
          _0x4b858c = _0x44764a.petList[0].useSkills;
        }
        if (JSON.stringify(_0x4b858c).indexOf(this.skillData.光闪击Plus) == -1 && JSON.stringify(_0x4b858c).indexOf(this.skillData.光闪击) == -1) {
          addGameLog("9关卡后非光闪击精灵首发，更换为目标精灵");
          logger(_0x1abb3a);
          _0x1abb3a = this.moveNumToFirst(_0x1abb3a, _0x4910b8);
          const _0x29bd26 = {
            petList: _0x1abb3a,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x29bd26);
          _0x44764a = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      }
      let _0x9dd4a1;
      var _0x4b858c = _0x44764a.petList[0].useSkills;
      if (JSON.stringify(_0x4b858c).indexOf(this.skillData.光闪击Plus) != -1) {
        _0x9dd4a1 = this.skillData.光闪击Plus;
      }
      if (JSON.stringify(_0x4b858c).indexOf(this.skillData.绝命火焰) != -1) {
        _0x9dd4a1 = this.skillData.绝命火焰;
      }
      if (JSON.stringify(_0x4b858c).indexOf(this.skillData.光闪击) != -1) {
        _0x9dd4a1 = this.skillData.光闪击;
      }
      while (1) {
        let _0x30ce6b = await this.send_message("cs_pve_expedition_query_battle", {
          type: 0
        });
        if (JSON.stringify(_0x30ce6b).indexOf("已达最大关卡") != -1) {
          addGameLog("已达最大关卡");
          this.stop();
          return true;
        }
        const _0x3ac2b4 = {
          getTimeList: _0x1abb3a
        };
        await this.send_message("cs_pve_expedition_start_battle", _0x3ac2b4);
        await this.initBattle();
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        await wait(200);
        addGameLog("进度: " + (parseInt(_0x44764a.levelId) + 1) + "关");
        let _0x3b9fa5 = await this.useSkill(_0x9dd4a1);
        if (_0x3b9fa5.result.result == 1) {
          addGameLog("获胜,进入下一层");
          break;
        } else {
          logger("未获胜,重写进入关卡");
        }
      }
      _0x44764a = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      addGameLog("战斗顺利: 星际迷航第" + parseInt(_0x44764a.levelId) + "关卡");
      if (parseInt(_0x44764a.levelId) == 15) {
        addGameLog("完成迷航，进行领取");
        await wait(200);
        await this.send_message("cs_pve_expedition_all_box", {});
        this.stop();
        break;
      }
    }
  }
  async actionStarTrek2() {
    let _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
      type: 0
    });
    let _0x457442;
    let _0x2c5c5c;
    let _0x359d3e;
    let _0x5a3459 = [];
    for (let _0x5ec7ea = 0; _0x5ec7ea < _0x4cd73f.petList.length; _0x5ec7ea++) {
      if (_0x4cd73f.petList[_0x5ec7ea] == null) {
        _0x5a3459.push(0);
      } else {
        _0x5a3459.push(_0x4cd73f.petList[_0x5ec7ea].getTime);
        let _0x66d875 = _0x4cd73f.petList[_0x5ec7ea].useSkills;
        if (JSON.stringify(_0x66d875).indexOf(this.skillData.绝命火焰) != -1) {
          _0x457442 = _0x4cd73f.petList[_0x5ec7ea].getTime;
        }
        if (JSON.stringify(_0x66d875).indexOf(this.skillData.光闪击Plus) != -1 || JSON.stringify(_0x66d875).indexOf(this.skillData.光闪击) != -1) {
          _0x2c5c5c = _0x4cd73f.petList[_0x5ec7ea].getTime;
        }
        if (JSON.stringify(_0x66d875).indexOf(this.skillData.奥义断水击) != -1) {
          _0x359d3e = _0x4cd73f.petList[_0x5ec7ea].getTime;
        }
      }
    }
    while (1) {
      _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      if (parseInt(_0x4cd73f.levelId) + 1 == 16) {
        addGameLog("迷航已经通关");
        await this.send_message("cs_pve_expedition_all_box", {});
        this.stop();
        return true;
      }
      addGameLog("迷航进度: 第" + (parseInt(_0x4cd73f.levelId) + 1) + "关卡");
      if (parseInt(_0x4cd73f.levelId) <= 7) {
        var _0x4d89c2;
        if (_0x4cd73f.petList[0] == null) {
          _0x4d89c2 = {};
        } else {
          _0x4d89c2 = _0x4cd73f.petList[0].useSkills;
        }
        if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.绝命火焰) == -1) {
          addGameLog("前8关卡非魔焰首发，更换首发为魔焰");
          _0x5a3459 = this.moveNumToFirst(_0x5a3459, _0x457442);
          const _0x962f52 = {
            petList: _0x5a3459,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x962f52);
          _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else if (parseInt(_0x4cd73f.levelId) > 7 && parseInt(_0x4cd73f.levelId) <= 9) {
        var _0x4d89c2;
        if (_0x4cd73f.petList[0] == null) {
          _0x4d89c2 = {};
        } else {
          _0x4d89c2 = _0x4cd73f.petList[0].useSkills;
        }
        if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.光闪击Plus) == -1 && JSON.stringify(_0x4d89c2).indexOf(this.skillData.光闪击) == -1) {
          addGameLog("9关卡后非光闪击精灵首发，更换为目标精灵");
          _0x5a3459 = this.moveNumToFirst(_0x5a3459, _0x2c5c5c);
          const _0x302ab3 = {
            petList: _0x5a3459,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x302ab3);
          _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else if (parseInt(_0x4cd73f.levelId) > 9 && parseInt(_0x4cd73f.levelId) <= 12) {
        var _0x4d89c2;
        if (_0x4cd73f.petList[0] == null) {
          _0x4d89c2 = {};
        } else {
          _0x4d89c2 = _0x4cd73f.petList[0].useSkills;
        }
        if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.奥义断水击) == -1) {
          addGameLog("10关卡后非水次首发，更换为目标精灵");
          _0x5a3459 = this.moveNumToFirst(_0x5a3459, _0x359d3e);
          const _0x23f73d = {
            petList: _0x5a3459,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x23f73d);
          _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else if (parseInt(_0x4cd73f.levelId) == 13) {
        var _0x4d89c2;
        if (_0x4cd73f.petList[0] == null) {
          _0x4d89c2 = {};
        } else {
          _0x4d89c2 = _0x4cd73f.petList[0].useSkills;
        }
        if (_0x4cd73f.petList.filter(function (_0x5194b7) {
          return _0x5194b7;
        }).filter(function (_0x139493) {
          return _0x139493.petID == 2135;
        })[0].crtHp <= 100) {
          if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.光闪击Plus) == -1 && JSON.stringify(_0x4d89c2).indexOf(this.skillData.光闪击) == -1) {
            addGameLog("14关卡非光闪击精灵首发，更换为目标精灵");
            _0x5a3459 = this.moveNumToFirst(_0x5a3459, _0x2c5c5c);
            const _0x2b099f = {
              petList: _0x5a3459,
              attachBattleSkill: []
            };
            await this.send_message("cs_pve_expedition_set_array", _0x2b099f);
            _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
              type: 0
            });
          }
        } else if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.奥义断水击) == -1) {
          addGameLog("14关卡非水次首发，更换为目标精灵");
          _0x5a3459 = this.moveNumToFirst(_0x5a3459, _0x359d3e);
          const _0x51ac9e = {
            petList: _0x5a3459,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0x51ac9e);
          _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      } else if (parseInt(_0x4cd73f.levelId) == 14) {
        var _0x4d89c2;
        if (_0x4cd73f.petList[0] == null) {
          _0x4d89c2 = {};
        } else {
          _0x4d89c2 = _0x4cd73f.petList[0].useSkills;
        }
        if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.奥义断水击) == -1) {
          addGameLog("10关卡后非水次首发，更换为目标精灵");
          _0x5a3459 = this.moveNumToFirst(_0x5a3459, _0x359d3e);
          const _0xf26d09 = {
            petList: _0x5a3459,
            attachBattleSkill: []
          };
          await this.send_message("cs_pve_expedition_set_array", _0xf26d09);
          _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
            type: 0
          });
        }
      }
      _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      let _0x1325a7;
      var _0x4d89c2 = _0x4cd73f.petList[0].useSkills;
      if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.光闪击Plus) != -1) {
        _0x1325a7 = this.skillData.光闪击Plus;
      }
      if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.光闪击) != -1) {
        _0x1325a7 = this.skillData.光闪击;
      }
      if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.绝命火焰) != -1) {
        _0x1325a7 = this.skillData.绝命火焰;
      }
      if (JSON.stringify(_0x4d89c2).indexOf(this.skillData.奥义断水击) != -1) {
        _0x1325a7 = this.skillData.奥义断水击;
      }
      while (1) {
        let _0x3803dc = await this.send_message("cs_pve_expedition_query_battle", {
          type: 0
        });
        if (JSON.stringify(_0x3803dc).indexOf("已达最大关卡") != -1) {
          addGameLog("已达最大关卡");
          this.stop();
          return true;
        }
        const _0x33abd4 = {
          getTimeList: _0x5a3459
        };
        await this.send_message("cs_pve_expedition_start_battle", _0x33abd4);
        await this.initBattle();
        await this.send_message("cs_online_load_battle_result", {
          groupId: ""
        });
        await wait(200);
        addGameLog("进度: " + (parseInt(_0x4cd73f.levelId) + 1) + "关");
        let _0x4803ec = await this.useSkill(_0x1325a7);
        if (_0x4803ec.result.result == 1) {
          addGameLog("战斗顺利: 星际迷航第" + (parseInt(_0x4cd73f.levelId) + 1) + "关卡");
          addGameLog("获胜,进入下一层");
          break;
        } else {
          logger("未获胜,重写进入关卡");
        }
      }
      _0x4cd73f = await this.send_message("cs_pve_expedition_query_battle", {
        type: 0
      });
      if (parseInt(_0x4cd73f.levelId) == 15) {
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
    let _0x45f3df = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x5a67c2 = [];
      var _0x3f8726 = SimpleAlertUi({
        height: 400,
        width: 450
      });
      _0x45f3df.alertWin = _0x3f8726;
      const _0x1348ba = {
        text: "教皇",
        y: _0x3f8726.height / 20
      };
      let _0x1cb30f = createLabel(_0x1348ba);
      _0x1cb30f.x = _0x3f8726.applicationWidth / 2 - _0x1cb30f.width / 2;
      _0x5a67c2.push(_0x1cb30f);
      const _0x2f1759 = {
        text: "注意:",
        textColor: 16776960,
        x: 30,
        y: _0x1cb30f.y + _0x1cb30f.height + 10
      };
      var _0x4b93a8 = createLabel(_0x2f1759);
      _0x5a67c2.push(_0x4b93a8);
      const _0x523ebc = {
        text: "不是13回合通关需要奥斯卡天邪雷伊会回pp",
        textColor: 16711680,
        x: 40,
        y: _0x4b93a8.y + 10 + _0x4b93a8.height
      };
      var _0x5f40a3 = createLabel(_0x523ebc);
      _0x5a67c2.push(_0x5f40a3);
      const _0x372d6d = {
        text: "奥斯卡永恒加灵光天邪荒芜加万恶雷伊充电加雷神",
        textColor: 16711680,
        x: 40,
        y: _0x5f40a3.y + _0x5f40a3.height + 10
      };
      var _0x5343ff = createLabel(_0x372d6d);
      _0x5a67c2.push(_0x5343ff);
      const _0x2b7d20 = {
        text: "瞬杀光闪击+雷伊",
        x: _0x3f8726.width / 8,
        y: _0x5343ff.y + _0x5343ff.height + 20
      };
      var _0x309aa6 = createLabel(_0x2b7d20);
      _0x5a67c2.push(_0x309aa6);
      const _0x2205b8 = {
        x: _0x309aa6.x + _0x309aa6.width + 10,
        y: _0x309aa6.y - 1,
        selected: true,
        storageKey: "popeteam1"
      };
      let _0x334b28 = createRadio(_0x2205b8);
      _0x5a67c2.push(_0x334b28);
      const _0x5a0680 = {
        text: "13回合以上打法",
        x: _0x334b28.x + _0x334b28.width + 10,
        y: _0x5343ff.y + _0x5343ff.height + 20
      };
      var _0x3bc92e = createLabel(_0x5a0680);
      _0x5a67c2.push(_0x3bc92e);
      const _0x5b1f7a = {
        x: _0x3bc92e.x + _0x3bc92e.width + 10,
        y: _0x309aa6.y - 1,
        selected: false,
        storageKey: "popeteam2"
      };
      let _0x2fcd6b = createRadio(_0x5b1f7a);
      _0x5a67c2.push(_0x2fcd6b);
      const _0x1e8856 = {
        text: "蒙奇克",
        x: _0x3f8726.width / 8,
        y: _0x309aa6.y + 30
      };
      var _0x5533a3 = createLabel(_0x1e8856);
      _0x5a67c2.push(_0x5533a3);
      const _0x3a1cdc = {
        x: _0x5533a3.x + _0x5533a3.width + 10,
        y: _0x5533a3.y - 1,
        selected: false,
        storageKey: "popeteam3"
      };
      let _0x10997f = createRadio(_0x3a1cdc);
      _0x5a67c2.push(_0x10997f);
      const _0x400c05 = {
        text: "是否进行扫荡",
        textColor: 16776960,
        x: _0x3f8726.width / 8,
        y: _0x309aa6.y + 60 + 5
      };
      var _0x1e50df = createLabel(_0x400c05);
      _0x5a67c2.push(_0x1e50df);
      const _0xa71b26 = {
        x: _0x1e50df.x + _0x1e50df.width + 5,
        y: _0x1e50df.y,
        selected: false,
        storageKey: "popesdstatus"
      };
      let _0x209039 = createToggle(_0xa71b26);
      _0x5a67c2.push(_0x209039);
      const _0x234cf0 = {
        x: _0x209039.x + _0x209039.width + 20,
        y: _0x1e50df.y - 5,
        width: 100,
        prompt: "请输入次数",
        storageKey: "popesdnum"
      };
      var _0x55808f = createEdit(_0x234cf0);
      _0x5a67c2.push(_0x55808f);
      const _0x2a4284 = {
        text: "注意:当前教皇门票有",
        textColor: 16776960,
        x: _0x3f8726.width / 8,
        y: _0x309aa6.y + 100
      };
      let _0x111ece = createLabel(_0x2a4284);
      _0x5a67c2.push(_0x111ece);
      let _0x4c9a8c = createLabel({
        text: getSeerItemNum("101199") - 1,
        textColor: 16711680,
        x: _0x111ece.x + _0x111ece.width,
        y: _0x111ece.y
      });
      _0x5a67c2.push(_0x4c9a8c);
      const _0x571b3c = {
        text: "数量不要输入超过了哦",
        textColor: 16776960,
        x: _0x4c9a8c.x + _0x4c9a8c.width + 20,
        y: _0x309aa6.y + 100
      };
      let _0x1c31e6 = createLabel(_0x571b3c);
      _0x5a67c2.push(_0x1c31e6);
      const _0x58ec44 = {
        text: `不勾扫荡可以不输入次数显示的门票是所拥有的-1
瞬杀光闪击打法会根据12层是否是未命中进行替换
不过四倍暴击的次数还是很长`,
        textColor: 16711808,
        x: _0x3f8726.width / 8,
        y: _0x309aa6.y + 100 + 30
      };
      let _0x110daa = createLabel(_0x58ec44);
      _0x5a67c2.push(_0x110daa);
      _0x45f3df.addAllUis(_0x5a67c2);
      _0x3f8726.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x45f3df.stop();
      }, function () {
        localStorage.setItem("popeteam1", _0x334b28.selected);
        localStorage.setItem("popeteam2", _0x2fcd6b.selected);
        localStorage.setItem("popeteam3", _0x10997f.selected);
        localStorage.setItem("popesdstatus", _0x209039.selected);
        localStorage.setItem("popesdnum", _0x55808f.text);
        if (_0x334b28.selected) {
          _0x45f3df.popetask[0] = 1;
        }
        if (_0x2fcd6b.selected) {
          _0x45f3df.popetask[1] = 1;
        }
        if (_0x10997f.selected) {
          _0x45f3df.popetask[2] = 1;
        }
        if (_0x209039.selected) {
          if (!Number.isInteger(parseInt(_0x55808f.text))) {
            addGameLog("请输入正确的次数");
          } else if (getSeerItemNum("101199") < parseInt(_0x55808f.text)) {
            addGameLog("请输入正确的次数");
          } else {
            _0x45f3df.popetask[3] = 1;
          }
        }
        _0x45f3df.prcessBody();
      }], null);
      _0x3f8726.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (MFC.attr.getAttr(MFC.attrType.dailyPopeLadderCostTicket) == 0) {
        for (let _0x32e374 = 0; _0x32e374 < 3; _0x32e374++) {
          if (this.popetask[_0x32e374]) {
            if (_0x32e374 == 0) {
              await this.chackpopeteam1();
            } else if (_0x32e374 == 1) {
              await this.chackpopeteam2();
            } else if (_0x32e374 == 2) {
              await this.chackpopeteam3();
            }
            if (this.popetask[3]) {
              addGameLog("即将进行扫荡");
              if (MFC.userInfo.vipLevel == 0) {
                addGameLog("没有超no无法扫荡");
              } else {
                for (let _0x3d0ad8 = 0; _0x3d0ad8 < parseInt(localStorage.getItem("popesdnum")); _0x3d0ad8++) {
                  addGameLog("教皇扫荡第" + (_0x3d0ad8 + 1) + "次");
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
          for (let _0x20e4d2 = 0; _0x20e4d2 < parseInt(localStorage.getItem("popesdnum")) + 1; _0x20e4d2++) {
            addGameLog("教皇扫荡第" + (_0x20e4d2 + 1) + "次");
            await this.send_message("cs_combat_ladder_pope", {
              type: 5,
              petList: [],
              idList: [],
              saveType: 0
            });
          }
        }
      } else {
        for (let _0x245951 = 0; _0x245951 < 3; _0x245951++) {
          if (this.popetask[_0x245951]) {
            if (_0x245951 == 0) {
              await this.chackpopeteam1();
            } else if (_0x245951 == 1) {
              await this.chackpopeteam2();
            } else if (_0x245951 == 2) {
              await this.chackpopeteam3();
            }
          }
        }
      }
      addGameLog("完成教皇关卡");
      this.stop();
    } catch (_0xcb9733) {}
  }
  async chackpopeteam1() {
    let _0x12258d = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    if (_0x12258d.petList.length == 0) {
      if (getSeerItemNum("101199") == 0) {
        addGameLog("教皇挑战券 数量为0,挑战结束");
        this.stop();
      } else {
        let _0x46aa94 = PetManager.getInstance().getAllPets().map(_0x216661 => {
          if ((_0x216661.skills.indexOf(10630) != -1 || _0x216661.skills.indexOf(100023) != -1) && _0x216661.skills.indexOf(11783) != -1 && (_0x216661.featureId == 5 || _0x216661.featureId == 6 || _0x216661.featureId == 7 || _0x216661.featureId == 8)) {
            return _0x216661.getTime;
          }
        }).filter(_0x1c942b => _0x1c942b !== undefined).sort((_0x264766, _0x5e2c58) => _0x5e2c58.featureId - _0x264766.featureId)[0];
        let _0xd66d9c = PetManager.getInstance().getAllPets().map(_0x167dda => {
          if (_0x167dda.level == 100) {
            if (_0x167dda.skills.indexOf(10825) != -1 || _0x167dda.skills.indexOf(100484) != -1) {
              return _0x167dda.getTime;
            }
          }
        }).filter(_0x5d292d => _0x5d292d)[0];
        if (_0x46aa94 == undefined) {
          addGameLog("背包没有瞬杀光闪击+光烈突击[威力130的招]");
          this.stop();
        } else if (_0xd66d9c == undefined) {
          addGameLog("背包没有雷伊或者没有装备雷神天明闪");
          this.stop();
        } else {
          const _0x26a832 = {
            type: 1,
            petList: [_0x46aa94, _0xd66d9c],
            idList: [],
            saveType: 0
          };
          await this.send_message("cs_combat_ladder_pope", _0x26a832);
          await this.popeteam1fight();
        }
      }
    } else if ((_0x12258d.petList[0].useSkills.find(_0x19baeb => _0x19baeb.id === 10630) || _0x12258d.petList[0].useSkills.find(_0x5bbf27 => _0x5bbf27.id === 100023)) && _0x12258d.petList[0].useSkills.find(_0x1157d1 => _0x1157d1.id === 11783)) {
      if (_0x12258d.petList[1].useSkills.find(_0x2221c5 => _0x2221c5.id === 10825) || _0x12258d.petList[1].useSkills.find(_0x5af5f4 => _0x5af5f4.id === 100484)) {
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
    let _0x13d4e3 = {};
    let _0x248eee = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    let _0x11d4ef = _0x248eee.levelId;
    while (_0x11d4ef > 0 && _0x11d4ef <= 11) {
      _0x248eee = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x2e9307;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x248eee.petList.find(_0x50b7a8 => _0x50b7a8.useSkills.find(_0x1e2ba5 => _0x1e2ba5.id === 10630))) {
        _0x2e9307 = 10630;
      }
      if (_0x248eee.petList.find(_0x3a2b00 => _0x3a2b00.useSkills.find(_0x45f3a4 => _0x45f3a4.id === 100023))) {
        _0x2e9307 = 100023;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [0],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x13d4e3[_0x248eee.levelId]) {
        _0x13d4e3[_0x248eee.levelId] = 1;
      } else {
        _0x13d4e3[_0x248eee.levelId]++;
      }
      addGameLog("目前教皇第" + _0x11d4ef + "层，尝试第" + _0x13d4e3[_0x248eee.levelId] + "次瞬杀");
      let _0x2a5bf3 = await this.useSkill(_0x2e9307);
      if (_0x2a5bf3.result.result === 1) {
        _0x11d4ef++;
        if (_0x11d4ef == 12) {
          break;
        }
      }
      await wait(300);
      _0x248eee = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
    while (_0x11d4ef == 12) {
      if (this.popecanmiss) {
        _0x248eee = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        let _0x25fad0;
        await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        if (_0x248eee.petList.find(_0x4aa219 => _0x4aa219.useSkills.find(_0x5f0891 => _0x5f0891.id === 10825))) {
          _0x25fad0 = 10825;
        }
        if (_0x248eee.petList.find(_0x5e6f93 => _0x5e6f93.useSkills.find(_0x3cac95 => _0x3cac95.id === 100484))) {
          _0x25fad0 = 100484;
        }
        _0x25fad0 = 11783;
        await this.send_message("cs_combat_ladder_pope", {
          type: 3,
          petList: [],
          idList: [1],
          saveType: 0
        });
        let _0x59047d = await this.initBattle();
        let _0x5900 = _0x59047d.result.affects.map(_0x4ab17d => {
          if (_0x4ab17d && _0x4ab17d.id) {
            return _0x4ab17d.id;
          } else {
            return null;
          }
        });
        if (_0x5900.includes(158) || _0x5900.includes(10024) || _0x5900.includes(20022)) {
          this.popecanmiss = true;
        } else {
          this.popecanmiss = false;
        }
        if (!_0x13d4e3[_0x248eee.levelId]) {
          _0x13d4e3[_0x248eee.levelId] = 1;
        } else {
          _0x13d4e3[_0x248eee.levelId]++;
        }
        addGameLog("目前教皇第" + _0x11d4ef + "层，尝试第" + _0x13d4e3[_0x248eee.levelId] + "次四倍暴");
        _0x59047d = await this.useSkill(_0x25fad0);
        if (_0x59047d.result.result === 1) {
          _0x11d4ef++;
          if (_0x11d4ef == 12) {
            break;
          }
        }
        await wait(300);
        _0x248eee = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
      } else {
        _0x248eee = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        let _0xae86bd;
        await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        if (_0x248eee.petList.find(_0xcea3ac => _0xcea3ac.useSkills.find(_0x48e48f => _0x48e48f.id === 10630))) {
          _0xae86bd = 10630;
        }
        if (_0x248eee.petList.find(_0x1ef4f0 => _0x1ef4f0.useSkills.find(_0x48672e => _0x48672e.id === 100023))) {
          _0xae86bd = 100023;
        }
        _0xae86bd = 11783;
        await this.send_message("cs_combat_ladder_pope", {
          type: 3,
          petList: [],
          idList: [0],
          saveType: 0
        });
        let _0x23bf42 = await this.initBattle();
        let _0x1f039c = _0x23bf42.result.affects.map(_0x48905b => {
          if (_0x48905b && _0x48905b.id) {
            return _0x48905b.id;
          } else {
            return null;
          }
        });
        if (_0x1f039c.includes(158) || _0x1f039c.includes(10024) || _0x1f039c.includes(20022)) {
          this.popecanmiss = true;
        } else {
          this.popecanmiss = false;
        }
        if (!_0x13d4e3[_0x248eee.levelId]) {
          _0x13d4e3[_0x248eee.levelId] = 1;
        } else {
          _0x13d4e3[_0x248eee.levelId]++;
        }
        addGameLog("目前教皇第" + _0x11d4ef + "层，尝试第" + _0x13d4e3[_0x248eee.levelId] + "次瞬杀");
        _0x23bf42 = await this.useSkill(_0xae86bd);
        if (_0x23bf42.result.result === 1) {
          _0x11d4ef++;
          if (_0x11d4ef == 12) {
            break;
          }
        }
        await wait(300);
        _0x248eee = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
      }
    }
    while (_0x11d4ef == 13) {
      _0x248eee = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x2d5334;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x248eee.petList.find(_0x1f0390 => _0x1f0390.useSkills.find(_0x145be7 => _0x145be7.id === 10825))) {
        _0x2d5334 = 10825;
      }
      if (_0x248eee.petList.find(_0x58585c => _0x58585c.useSkills.find(_0x2312e4 => _0x2312e4.id === 100484))) {
        _0x2d5334 = 100484;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [1],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x13d4e3[_0x248eee.levelId]) {
        _0x13d4e3[_0x248eee.levelId] = 1;
      } else {
        _0x13d4e3[_0x248eee.levelId]++;
      }
      addGameLog("目前教皇第" + _0x11d4ef + "层，尝试第" + _0x13d4e3[_0x248eee.levelId] + "次瞬杀");
      let _0x3eec74 = await this.useSkill(_0x2d5334);
      if (_0x3eec74.result.result === 1) {
        _0x11d4ef++;
        if (_0x11d4ef == 12) {
          break;
        }
      }
      await wait(300);
      _0x248eee = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
  }
  async chackpopeteam2() {
    let _0x2a5ceb = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    if (_0x2a5ceb.petList.length == 0) {
      if (getSeerItemNum("101199") == 0) {
        addGameLog("教皇挑战券 数量为0,挑战结束");
        this.stop();
      } else {
        let _0x48f8f0 = PetManager.getInstance().getAllPets().map(_0x2e42e4 => {
          if (_0x2e42e4.skills.indexOf(14863) != -1 && _0x2e42e4.skills.indexOf(22639) != -1) {
            return _0x2e42e4.getTime;
          }
        }).filter(_0x4a25bd => _0x4a25bd !== undefined).sort()[0];
        let _0x330b05 = PetManager.getInstance().getAllPets().map(_0x50542b => {
          if (_0x50542b.level == 100) {
            if (_0x50542b.skills.indexOf(16891) != -1 && (_0x50542b.skills.indexOf(23798) != -1 || _0x50542b.skills.indexOf(100423) != -1)) {
              return _0x50542b.getTime;
            }
          }
        }).filter(_0x4b92f5 => _0x4b92f5)[0];
        let _0x28d256 = PetManager.getInstance().getAllPets().map(_0x2c7c34 => {
          if (_0x2c7c34.level == 100) {
            if (_0x2c7c34.skills.indexOf(100483) != -1 && (_0x2c7c34.skills.indexOf(10825) != -1 || _0x2c7c34.skills.indexOf(100484) != -1)) {
              return _0x2c7c34.getTime;
            }
          }
        }).filter(_0x4af650 => _0x4af650)[0];
        if (_0x48f8f0 == undefined) {
          addGameLog("背包没有奥斯卡或技能错误");
          this.stop();
        } else if (_0x330b05 == undefined) {
          addGameLog("背包没有天邪或技能错误");
          this.stop();
        } else if (_0x28d256 == undefined) {
          addGameLog("背包雷伊技能错误");
          this.stop();
        } else {
          const _0x4dee6c = {
            type: 1,
            petList: [_0x48f8f0, _0x330b05, _0x28d256],
            idList: [],
            saveType: 0
          };
          await this.send_message("cs_combat_ladder_pope", _0x4dee6c);
          await this.popeteam2fight();
        }
      }
    } else if (_0x2a5ceb.petList[0].useSkills.find(_0x25ea53 => _0x25ea53.id === 14863) && _0x2a5ceb.petList[0].useSkills.find(_0x24bb18 => _0x24bb18.id === 22639)) {
      if (_0x2a5ceb.petList[1].useSkills.find(_0x5772fb => _0x5772fb.id === 16891) && (_0x2a5ceb.petList[1].useSkills.find(_0x125a7b => _0x125a7b.id === 23798) || _0x2a5ceb.petList[1].useSkills.find(_0x28b9af => _0x28b9af.id === 100423))) {
        if (_0x2a5ceb.petList[2].useSkills.find(_0x236e13 => _0x236e13.id === 100483) && (_0x2a5ceb.petList[2].useSkills.find(_0x37ca6c => _0x37ca6c.id === 10825) || _0x2a5ceb.petList[2].useSkills.find(_0x55b5e => _0x55b5e.id === 100484))) {
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
    let _0x36f123 = {};
    let _0x5c39b3 = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    let _0x3455d5 = _0x5c39b3.levelId;
    while (_0x3455d5 > 0 && _0x3455d5 <= 10) {
      _0x5c39b3 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x4c0ea9 = 22639;
      let _0x486319 = 14863;
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
      if (!_0x36f123[_0x5c39b3.levelId]) {
        _0x36f123[_0x5c39b3.levelId] = 1;
      } else {
        _0x36f123[_0x5c39b3.levelId]++;
      }
      addGameLog("目前教皇第" + _0x3455d5 + "层，第" + _0x36f123[_0x5c39b3.levelId] + "次");
      let _0x31b4f0 = await this.useSkill(_0x4c0ea9);
      while (_0x31b4f0.result.result == 0) {
        let _0x2256dc;
        if (_0x31b4f0.result.playerInfos[0].teamFlag == 1) {
          if (this.pp) {
            _0x2256dc = 5;
            this.pp = false;
          } else {
            _0x2256dc = _0x31b4f0.result.playerInfos[0].petInfos[0].useSkills[_0x31b4f0.result.playerInfos[0].petInfos[0].useSkills.findIndex(_0x388d5d => _0x388d5d.id === 14863)].crtPP;
          }
        } else if (this.pp) {
          _0x2256dc = 5;
          this.pp = false;
        } else {
          _0x2256dc = _0x31b4f0.result.playerInfos[1].petInfos[0].useSkills[_0x31b4f0.result.playerInfos[1].petInfos[0].useSkills.findIndex(_0x63b985 => _0x63b985.id === 14863)].crtPP;
        }
        if (_0x2256dc == 0) {
          if (getSeerItemNum(2001) > 1) {
            addGameLog("回pp");
            this.pp = true;
            _0x31b4f0 = await this.useItem(2001);
          } else if (getSeerItemNum(2002) > 1) {
            addGameLog("回pp");
            this.pp = true;
            _0x31b4f0 = await this.useItem(2002);
          } else if (getSeerItemNum(2003) > 1) {
            addGameLog("回pp");
            this.pp = true;
            _0x31b4f0 = await this.useItem(2003);
          } else {
            addGameLog("pp不足");
            await this.send_message("cs_quit_battle", {});
            break;
          }
        } else {
          _0x31b4f0 = await this.useSkill(_0x486319);
        }
      }
      if (getSeerItemNum(2001) > 1) {} else if (getSeerItemNum(2002) > 1) {} else if (getSeerItemNum(2003) > 1) {} else {
        addGameLog("pp不足");
        await this.send_message("cs_quit_battle", {});
        break;
      }
      if (_0x31b4f0.result.result === 1) {
        _0x3455d5++;
        if (_0x3455d5 == 11) {
          break;
        }
      }
      await wait(300);
      _0x5c39b3 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
    while (_0x3455d5 > 10 && _0x3455d5 <= 12) {
      _0x5c39b3 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x5702f8;
      let _0x776a55 = 16891;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x5c39b3.petList.find(_0x3e3228 => _0x3e3228.useSkills.find(_0x453e8f => _0x453e8f.id === 23798))) {
        _0x5702f8 = 23798;
      }
      if (_0x5c39b3.petList.find(_0x479cd8 => _0x479cd8.useSkills.find(_0xa5d09 => _0xa5d09.id === 100423))) {
        _0x5702f8 = 100423;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [1],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x36f123[_0x5c39b3.levelId]) {
        _0x36f123[_0x5c39b3.levelId] = 1;
      } else {
        _0x36f123[_0x5c39b3.levelId]++;
      }
      addGameLog("目前教皇第" + _0x3455d5 + "层，第" + _0x36f123[_0x5c39b3.levelId] + "次");
      let _0x15f763 = await this.useSkill(_0x5702f8);
      while (_0x15f763.result.result == 0) {
        _0x15f763 = await this.useSkill(_0x776a55);
      }
      if (_0x15f763.result.result === 1) {
        _0x3455d5++;
        if (_0x3455d5 == 13) {
          break;
        }
      }
      await wait(300);
      _0x5c39b3 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
    while (_0x3455d5 == 13) {
      _0x5c39b3 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x400819 = 100483;
      let _0x278867;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x5c39b3.petList.find(_0x4fb58f => _0x4fb58f.useSkills.find(_0x4a34b6 => _0x4a34b6.id === 10825))) {
        _0x278867 = 10825;
      }
      if (_0x5c39b3.petList.find(_0x3806ae => _0x3806ae.useSkills.find(_0x1ed306 => _0x1ed306.id === 100484))) {
        _0x278867 = 100484;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [2],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x36f123[_0x5c39b3.levelId]) {
        _0x36f123[_0x5c39b3.levelId] = 1;
      } else {
        _0x36f123[_0x5c39b3.levelId]++;
      }
      addGameLog("目前教皇第" + _0x3455d5 + "层，第" + _0x36f123[_0x5c39b3.levelId] + "次");
      let _0x3f0a34 = await this.useSkill(_0x400819);
      if (_0x3f0a34.result.result == 0) {
        _0x3f0a34 = await this.useSkill(_0x278867);
      }
      if (_0x3f0a34.result.result === 1) {
        _0x3455d5++;
        if (_0x3455d5 == 12) {
          break;
        }
      }
      await wait(300);
      _0x5c39b3 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
  }
  async chackpopeteam3() {
    let _0x1782a6 = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    if (_0x1782a6.petList.length == 0) {
      if (getSeerItemNum("101199") == 0) {
        addGameLog("教皇挑战券 数量为0,挑战结束");
        this.stop();
      } else {
        let _0x2247cc = PetManager.getInstance().getAllPets().map(_0x3b0d32 => {
          if ((_0x3b0d32.skills.indexOf(10630) != -1 || _0x3b0d32.skills.indexOf(100023) != -1) && _0x3b0d32.skills.indexOf(11783) != -1 && (_0x3b0d32.featureId == 5 || _0x3b0d32.featureId == 6 || _0x3b0d32.featureId == 7 || _0x3b0d32.featureId == 8)) {
            return _0x3b0d32.getTime;
          }
        }).filter(_0x520dba => _0x520dba !== undefined).sort((_0x39234d, _0x4efc73) => _0x4efc73.featureId - _0x39234d.featureId)[0];
        let _0x4004a3 = PetManager.getInstance().getAllPets().map(_0x566cd9 => {
          if (_0x566cd9.level == 100) {
            if (_0x566cd9.skills.indexOf(10825) != -1 || _0x566cd9.skills.indexOf(100484) != -1) {
              return _0x566cd9.getTime;
            }
          }
        }).filter(_0x5533fc => _0x5533fc)[0];
        let _0x3aaa17 = PetManager.getInstance().getAllPets().map(_0x3f05e5 => {
          if (_0x3f05e5.level == 100) {
            if (_0x3f05e5.skills.indexOf(12776) != -1) {
              return _0x3f05e5.getTime;
            }
          }
        }).filter(_0x5d3351 => _0x5d3351)[0];
        if (_0x2247cc == undefined) {
          addGameLog("背包没有瞬杀光闪击+光烈突击[威力130的招]");
          this.stop();
        } else if (_0x4004a3 == undefined) {
          addGameLog("背包没有雷伊或者没有装备雷神天明闪");
          this.stop();
        } else if (_0x3aaa17 == undefined) {
          addGameLog("背包没有蒙奇克或者没有装备腾云断空击");
          this.stop();
        } else {
          const _0x285d2f = {
            type: 1,
            petList: [_0x2247cc, _0x4004a3, _0x3aaa17],
            idList: [],
            saveType: 0
          };
          await this.send_message("cs_combat_ladder_pope", _0x285d2f);
          await this.popeteam3fight();
        }
      }
    } else if ((_0x1782a6.petList[0].useSkills.find(_0x289292 => _0x289292.id === 10630) || _0x1782a6.petList[0].useSkills.find(_0x5cfca2 => _0x5cfca2.id === 100023)) && _0x1782a6.petList[0].useSkills.find(_0x52fb55 => _0x52fb55.id === 11783)) {
      if (_0x1782a6.petList[1].useSkills.find(_0x27d2f3 => _0x27d2f3.id === 10825) || _0x1782a6.petList[1].useSkills.find(_0x371149 => _0x371149.id === 100484)) {
        if (_0x1782a6.petList[1].useSkills.find(_0x514640 => _0x514640.id === 12776)) {
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
    let _0x10526c = {};
    let _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
      type: 2,
      petList: [],
      idList: [],
      saveType: 0
    });
    let _0x12aa52 = _0x3a1de8.levelId;
    while (_0x12aa52 > 0 && _0x12aa52 <= 11) {
      _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x5ba6ee;
      await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      if (_0x3a1de8.petList.find(_0x18a83b => _0x18a83b.useSkills.find(_0x302da4 => _0x302da4.id === 10630))) {
        _0x5ba6ee = 10630;
      }
      if (_0x3a1de8.petList.find(_0x134d99 => _0x134d99.useSkills.find(_0xa68da6 => _0xa68da6.id === 100023))) {
        _0x5ba6ee = 100023;
      }
      await this.send_message("cs_combat_ladder_pope", {
        type: 3,
        petList: [],
        idList: [0],
        saveType: 0
      });
      await this.initBattle();
      if (!_0x10526c[_0x3a1de8.levelId]) {
        _0x10526c[_0x3a1de8.levelId] = 1;
      } else {
        _0x10526c[_0x3a1de8.levelId]++;
      }
      addGameLog("目前教皇第" + _0x12aa52 + "层，尝试第" + _0x10526c[_0x3a1de8.levelId] + "次瞬杀");
      let _0x33521a = await this.useSkill(_0x5ba6ee);
      if (_0x33521a.result.result === 1) {
        _0x12aa52++;
        if (_0x12aa52 == 12) {
          break;
        }
      }
      await wait(300);
      _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
    }
    while (_0x12aa52 == 12) {
      if (this.popecanmiss) {
        _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        let _0x22cebc;
        await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        if (_0x3a1de8.petList.find(_0x4b0d23 => _0x4b0d23.useSkills.find(_0x5d662b => _0x5d662b.id === 10825))) {
          _0x22cebc = 10825;
        }
        if (_0x3a1de8.petList.find(_0x79440d => _0x79440d.useSkills.find(_0x52ab40 => _0x52ab40.id === 100484))) {
          _0x22cebc = 100484;
        }
        await this.send_message("cs_combat_ladder_pope", {
          type: 3,
          petList: [],
          idList: [1],
          saveType: 0
        });
        let _0x5b13d6 = await this.initBattle();
        let _0x2c2a12 = JSON.parse(a.gameBody[a.gameBody.length - 1].raw).result.affects.map(_0x802005 => {
          if (_0x802005 && _0x802005.id) {
            return _0x802005.id;
          } else {
            return null;
          }
        });
        if (_0x2c2a12.includes(158) || _0x2c2a12.includes(10024) || _0x2c2a12.includes(20022)) {
          this.popecanmiss = true;
        } else {
          this.popecanmiss = false;
        }
        if (!_0x10526c[_0x3a1de8.levelId]) {
          _0x10526c[_0x3a1de8.levelId] = 1;
        } else {
          _0x10526c[_0x3a1de8.levelId]++;
        }
        addGameLog("目前教皇第" + _0x12aa52 + "层，尝试第" + _0x10526c[_0x3a1de8.levelId] + "次四倍暴");
        _0x5b13d6 = await this.useSkill(_0x22cebc);
        if (_0x5b13d6.result.result === 1) {
          _0x12aa52++;
          if (_0x12aa52 == 12) {
            break;
          }
        }
        await wait(300);
        _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
      } else {
        _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        let _0x23f264;
        await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
        if (_0x3a1de8.petList.find(_0x1c1965 => _0x1c1965.useSkills.find(_0x146892 => _0x146892.id === 10630))) {
          _0x23f264 = 10630;
        }
        if (_0x3a1de8.petList.find(_0x2962fc => _0x2962fc.useSkills.find(_0x14f602 => _0x14f602.id === 100023))) {
          _0x23f264 = 100023;
        }
        _0x23f264 = 11783;
        await this.send_message("cs_combat_ladder_pope", {
          type: 3,
          petList: [],
          idList: [0],
          saveType: 0
        });
        let _0x1600b7 = await this.initBattle();
        let _0x427af2 = _0x1600b7.result.affects.map(_0x22640 => {
          if (_0x22640 && _0x22640.id) {
            return _0x22640.id;
          } else {
            return null;
          }
        });
        if (_0x427af2.includes(158) || _0x427af2.includes(10024) || _0x427af2.includes(20022)) {
          this.popecanmiss = true;
        } else {
          this.popecanmiss = false;
        }
        if (!_0x10526c[_0x3a1de8.levelId]) {
          _0x10526c[_0x3a1de8.levelId] = 1;
        } else {
          _0x10526c[_0x3a1de8.levelId]++;
        }
        addGameLog("目前教皇第" + _0x12aa52 + "层，尝试第" + _0x10526c[_0x3a1de8.levelId] + "次瞬杀");
        _0x1600b7 = await this.useSkill(_0x23f264);
        if (_0x1600b7.result.result === 1) {
          _0x12aa52++;
          if (_0x12aa52 == 12) {
            break;
          }
        }
        await wait(300);
        _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
          type: 2,
          petList: [],
          idList: [],
          saveType: 0
        });
      }
    }
    while (_0x12aa52 == 13) {
      _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
        type: 2,
        petList: [],
        idList: [],
        saveType: 0
      });
      let _0x203c6d = 12776;
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
      if (!_0x10526c[_0x3a1de8.levelId]) {
        _0x10526c[_0x3a1de8.levelId] = 1;
      } else {
        _0x10526c[_0x3a1de8.levelId]++;
      }
      addGameLog("目前教皇第" + _0x12aa52 + "层，尝试第" + _0x10526c[_0x3a1de8.levelId] + "次瞬杀");
      let _0x577ea5 = await this.useSkill(_0x203c6d);
      if (_0x577ea5.result.result === 1) {
        _0x12aa52++;
        if (_0x12aa52 == 12) {
          break;
        }
      }
      await wait(300);
      _0x3a1de8 = await this.send_message("cs_combat_ladder_pope", {
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
    let _0x3c879e = this;
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
      var _0x1570c5 = SimpleAlertUi({
        width: 750,
        height: 450
      });
      _0x3c879e.alertWin = _0x1570c5;
      let _0x356d9e = _0x1570c5.width / 15;
      const _0x19435c = {
        text: "关卡精灵捕捉",
        y: _0x1570c5.height / 16
      };
      var _0x41554b = createLabel(_0x19435c);
      _0x41554b.x = _0x1570c5.width / 2 - _0x41554b.width / 2;
      _0x1570c5.addChild(_0x41554b);
      let _0x3e6e87 = _0x41554b.y;
      const _0x89eda3 = {
        text: "注意: 勾选的胶囊会从最低级使用 并且[稀有精灵]会在最后一回合使用选中的最高一档胶囊;",
        x: _0x356d9e,
        y: _0x3e6e87 + 25
      };
      let _0x2b82bd = createLabel(_0x89eda3);
      _0x1570c5.addChild(_0x2b82bd);
      const _0xb1c823 = {
        text: "捕捉会从精灵背包主动调用出精灵战斗 优先级: 波蒂斯加 > [闪光]波克尔 > 熊猫 > 无名;",
        textColor: 16776960,
        x: _0x356d9e,
        y: _0x2b82bd.y + _0x2b82bd.height + 10
      };
      var _0x129ef4 = createLabel(_0xb1c823);
      _0x1570c5.addChild(_0x129ef4);
      const _0x357044 = {
        text: "关卡精灵选择",
        y: _0x129ef4.y + _0x129ef4.height + 10
      };
      var _0x41554b = createLabel(_0x357044);
      _0x41554b.x = _0x1570c5.width / 2 - _0x41554b.width / 2;
      _0x1570c5.addChild(_0x41554b);
      let _0x1a2fbb = window.noLevelCatchPets.bossID.split("|");
      for (let _0x1c87df = 0; _0x1c87df < _0x1a2fbb.length; _0x1c87df++) {
        _0x3c879e.planetPets.push({
          probability: _0x1a2fbb[_0x1c87df].split("_")[1],
          bossId: _0x1a2fbb[_0x1c87df].split("_")[0]
        });
      }
      logger(_0x3c879e.planetPets);
      _0x356d9e = _0x1570c5.width / 15;
      let _0x43a2c1 = _0x41554b.y + _0x41554b.height + 13;
      for (let _0x320df8 = 0; _0x320df8 < _0x3c879e.planetPets.length; _0x320df8++) {
        let _0x39bc84 = xls.pveBoss.getItem(_0x3c879e.planetPets[_0x320df8].bossId).petID.split("_")[0];
        const _0x11b0ad = {
          x: _0x356d9e,
          y: _0x43a2c1,
          selected: false,
          petId: _0x39bc84,
          storageKey: "catchGoal" + _0x39bc84
        };
        let _0x208d41 = createToggle(_0x11b0ad);
        _0x1570c5.addChild(_0x208d41);
        const _0x27c89c = {
          petConfBtn: _0x208d41
        };
        _0x3c879e.catchConfigs.push(_0x27c89c);
        let _0x5dd13e = createLabel({
          text: PetConfig.getDef(_0x39bc84).name + " 概率:(" + _0x3c879e.planetPets[_0x320df8].probability + ")",
          x: _0x208d41.x + _0x208d41.width + 10,
          y: _0x43a2c1,
          textColor: 16776960
        });
        _0x1570c5.addChild(_0x5dd13e);
        _0x43a2c1 = _0x208d41.height + _0x208d41.y + 20;
        let _0x1515d5 = _0x1570c5.width / 2.5;
        _0x3c879e.catchConfigs[_0x320df8].capConfBtn = [];
        for (let _0x33dce4 = 0; _0x33dce4 < _0x3c879e.capsuleNames.length; _0x33dce4++) {
          const _0x2a867e = {
            text: _0x3c879e.capsuleNames[_0x33dce4].capName,
            x: _0x1515d5,
            y: _0x208d41.y
          };
          let _0x348040 = createLabel(_0x2a867e);
          _0x1570c5.addChild(_0x348040);
          const _0x5b3cff = {
            x: _0x348040.x + _0x348040.width + 10,
            y: _0x208d41.y,
            selected: false,
            capId: _0x3c879e.capsuleNames[_0x33dce4].capId,
            textValue: _0x3c879e.capsuleNames[_0x33dce4].capName
          };
          let _0xbbf355 = createToggle(_0x5b3cff);
          if (localStorage.getItem("catchCaps" + _0x39bc84) != null) {
            let _0x1c5f40 = localStorage.getItem("catchCaps" + _0x39bc84).split(",");
            logger("存储胶囊ids", _0x1c5f40, "目前胶囊id", _0xbbf355.capId);
            if (_0x1c5f40.indexOf(_0xbbf355.capId + "") != -1) {
              _0xbbf355.selected = true;
            }
          }
          _0x1570c5.addChild(_0xbbf355);
          _0x1515d5 = _0xbbf355.x + _0xbbf355.width + 10;
          _0x3c879e.catchConfigs[_0x320df8].capConfBtn.push(_0xbbf355);
        }
      }
      const _0x321bc6 = {
        prompt: "捕捉只数",
        width: 100,
        x: 30,
        y: _0x1570c5.height / 1.3,
        storageKey: "levelinputCounts"
      };
      var _0x5d2bd6 = createEdit(_0x321bc6);
      const _0x5dba76 = {
        text: "捕捉只数",
        x: 30,
        y: _0x5d2bd6.y - _0x5d2bd6.height + 10
      };
      var _0x41554b = createLabel(_0x5dba76);
      _0x1570c5.addChild(_0x5d2bd6);
      _0x1570c5.addChild(_0x41554b);
      const _0x4794f7 = {
        prompt: "停止天赋",
        width: 100,
        x: _0x5d2bd6.width + 67,
        y: _0x1570c5.height / 1.3,
        storageKey: "levelCatchTalent"
      };
      var _0x539e0d = createEdit(_0x4794f7);
      _0x1570c5.addChild(_0x539e0d);
      const _0x4dcbb4 = {
        text: "停止天赋",
        x: _0x5d2bd6.width + 67,
        y: _0x539e0d.y - _0x539e0d.height + 10
      };
      var _0x41554b = createLabel(_0x4dcbb4);
      _0x1570c5.addChild(_0x41554b);
      _0x1570c5.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x3c879e.stop();
      }, function () {
        try {
          let _0x1ba64b = [];
          for (let _0x2c0387 = 0; _0x2c0387 < _0x3c879e.catchConfigs.length; _0x2c0387++) {
            let _0x250135 = _0x3c879e.catchConfigs[_0x2c0387];
            if (_0x250135.petConfBtn.selected) {
              let _0x5aba1c = [];
              _0x250135.capConfBtn.forEach(_0x583df0 => {
                if (_0x583df0.selected) {
                  _0x5aba1c.push(_0x583df0.capId);
                }
              });
              if (!_0x5aba1c.length) {
                MFC.bubbleAlert.showAlert(PetConfig.getDef(_0x250135.petConfBtn.petId).name + "==>至少设置一种胶囊类型!!!");
                return true;
              }
              const _0x4c6c3f = {
                petId: _0x250135.petConfBtn.petId + "",
                capIds: _0x5aba1c
              };
              _0x1ba64b.push(_0x4c6c3f);
              localStorage.setItem("catchGoal" + _0x250135.petConfBtn.petId, true);
              localStorage.setItem("catchCaps" + _0x250135.petConfBtn.petId, _0x5aba1c);
            } else {
              localStorage.setItem("catchGoal" + _0x250135.petConfBtn.petId, false);
            }
          }
          logger("goalCatchs", _0x1ba64b);
          if (_0x1ba64b.length == 0) {
            MFC.bubbleAlert.showAlert("至少设置一种精灵");
            return true;
          }
          _0x3c879e.goalCatchs = _0x1ba64b;
          if (isNaN(parseInt(_0x5d2bd6.text))) {
            MFC.bubbleAlert.showAlert("请输入有效捕捉次数");
            return true;
          }
          if (isNaN(parseInt(_0x539e0d.text)) || parseInt(_0x539e0d.text) > 31 || parseInt(_0x539e0d.text) < 0) {
            MFC.bubbleAlert.showAlert("请输入有效精灵天赋");
            return true;
          }
          localStorage.setItem("levelCatchTalent", parseInt(_0x539e0d.text));
          localStorage.setItem("levelinputCounts", parseInt(_0x5d2bd6.text));
          _0x3c879e.catchCounts = parseInt(_0x5d2bd6.text);
          _0x3c879e.stopTalent = parseInt(_0x539e0d.text);
          _0x3c879e.levelId = window.noLevelCatchPets.levelId;
          _0x3c879e.prcessBody();
        } catch (_0x51dfe6) {
          logger(_0x51dfe6);
        }
      }], null);
      _0x1570c5.showAlert();
    });
  }
  async prcessBody() {
    logger("胶囊ids", this.capIds, "精灵ids", this.petIds, "捕捉次数", this.catchCounts, "精灵天赋", this.stopTalent, "关卡", this.levelId);
    try {
      let _0x347f9b = this.checkUseCatchPet();
      if (!_0x347f9b) {
        addGameLog("没有相关满足条件的捕捉精灵，捕捉结束[等级至少60级]");
        this.stop();
        return false;
      }
      await wait(200);
      const _0x57a560 = {
        op: 1,
        arrayType: "defaultTeam",
        subArray: 0,
        idx: 1,
        teamUp: 0,
        fightType: 0,
        getTimeList: [_0x347f9b.getTime]
      };
      await this.send_message("cs_new_change_petArray", _0x57a560);
      addGameLog("设置" + PetConfig.getDef(_0x347f9b.petId).name + "首发成功！");
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
          getTimeList: [_0x347f9b.getTime],
          attachBattleSkill: []
        });
        let _0x22b07e = await this.waitEvent("sc_battle_notify_load_resource");
        let _0x5cf2ff = JSON.parse(_0x22b07e.gameBody[_0x22b07e.gameBody.length - 1].raw);
        _0x22b07e.gameBody.splice(0, _0x22b07e.gameBody.length);
        await wait(200);
        let _0x19fcc3 = _0x5cf2ff.teamB.players[0].petInfos[0].petID;
        addGameLog("对战精灵: " + PetConfig.getDef(_0x19fcc3).name);
        logger("精灵数组", this.petIds, "对战精灵", _0x19fcc3);
        await this.send_message("cs_online_load_resource", {
          groupId: "",
          battleType: 0
        });
        await wait(200);
        if (this.goalCatchs.length) {
          this.petIds = [];
          for (let _0x576d36 = 0; _0x576d36 < this.goalCatchs.length; _0x576d36++) {
            this.petIds.push(this.goalCatchs[_0x576d36].petId);
          }
          logger("目标数组", this.petIds);
        }
        if (this.petIds.indexOf(_0x19fcc3.toString()) == -1) {
          addGameLog(PetConfig.getDef(_0x19fcc3).name + " 非目标精灵,逃跑");
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
          _0x22b07e = await this.waitEvent("sc_battle_notify_round_result");
          _0x5cf2ff = JSON.parse(_0x22b07e.gameBody[_0x22b07e.gameBody.length - 1].raw);
          _0x22b07e.gameBody.splice(0, _0x22b07e.gameBody.length);
          await wait(200);
          if (_0x5cf2ff.result.result !== 0) {
            addGameLog("怪物已经死亡!!!!");
            continue;
          }
        }
        if (this.goalCatchs.length) {
          this.capIds = [];
          for (let _0x197ebb = 0; _0x197ebb < this.goalCatchs.length; _0x197ebb++) {
            if (this.goalCatchs[_0x197ebb].petId == _0x19fcc3) {
              let _0x27b9aa = PetConfig.getDef(_0x19fcc3).catchRound;
              addGameLog("对战" + PetConfig.getDef(_0x19fcc3).name + "第 " + (_0x5cf2ff.result.roundNum + 1) + "回合");
              this.capIds = this.goalCatchs[_0x197ebb].capIds;
              if (_0x27b9aa == _0x5cf2ff.result.roundNum + 1 && _0x27b9aa <= 5) {
                addGameLog("到达稀有精灵捕捉最后一回合\n使用选择最高档胶囊!");
                let _0x2446a1 = this.goalCatchs[_0x197ebb].capIds;
                this.capIds = [_0x2446a1[_0x2446a1.length - 1]];
              }
              break;
            }
          }
        }
        var _0x1dcc16 = randomCap(this.capIds);
        if (_0x1dcc16 == "NoCap") {
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
        let _0x11eb77 = _0x347f9b.skillID;
        _0x5cf2ff = await this.useSkill(_0x11eb77);
        let _0x2e6da3 = 0;
        while (1) {
          if (_0x5cf2ff.result.result !== 0) {
            addGameLog("怪物已经死亡!!!!");
            _0x2e6da3 = 1;
            break;
          }
          if (_0x5cf2ff.result.playerInfos[0].uid !== MFC.userInfo.uid) {
            if (_0x5cf2ff.result.playerInfos[0].petInfos[0].crtHp <= 1) {
              break;
            }
          } else if (_0x5cf2ff.result.playerInfos[1].petInfos[0].crtHp <= 1) {
            break;
          }
          await this.send_message("cs_online_load_battle_result", {
            groupId: ""
          });
          await wait(200);
          _0x5cf2ff = await this.useSkill(_0x11eb77);
        }
        if (_0x2e6da3 == 1) {
          continue;
        }
        await wait(200);
        addGameLog("怪物血量已经为1,开始捕捉");
        this.CatchPetDatas = null;
        while (_0x5cf2ff.result.result == 0) {
          await this.send_message("cs_online_load_battle_result", {
            groupId: ""
          });
          if (this.goalCatchs.length) {
            this.capIds = [];
            for (let _0x3a0c44 = 0; _0x3a0c44 < this.goalCatchs.length; _0x3a0c44++) {
              if (this.goalCatchs[_0x3a0c44].petId == _0x19fcc3) {
                let _0x3eb5bf = PetConfig.getDef(_0x19fcc3).catchRound;
                addGameLog("对战" + PetConfig.getDef(_0x19fcc3).name + "第 " + (_0x5cf2ff.result.roundNum + 1) + "回合");
                this.capIds = this.goalCatchs[_0x3a0c44].capIds;
                if (_0x3eb5bf == _0x5cf2ff.result.roundNum + 1 && _0x3eb5bf <= 5) {
                  addGameLog("到达稀有精灵捕捉最后一回合\n使用选择最高档胶囊!");
                  let _0x163582 = this.goalCatchs[_0x3a0c44].capIds;
                  this.capIds = [_0x163582[_0x163582.length - 1]];
                }
                break;
              }
            }
          }
          var _0x1dcc16 = randomCap(this.capIds);
          if (_0x1dcc16 == "NoCap") {
            addGameLog("无可用胶囊,捕捉任务结束");
            await this.send_message("cs_quit_battle", {});
            this.logAllCatchPets(this.allCatchPets);
            this.stop();
            return false;
          }
          await wait(400);
          addGameLog("使用:" + _0x1dcc16.name + "胶囊,剩余:" + _0x1dcc16.num);
          _0x5cf2ff = await this.useItem(_0x1dcc16.itemId);
          let _0x58f08a = await this.waitEvent("sc_notify_item_change");
          _0x58f08a.gameBody.splice(0, _0x58f08a.gameBody.length);
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
    } catch (_0x41726d) {
      logger(_0x41726d);
      this.logAllCatchPets(this.allCatchPets);
    }
  }
  logAllCatchPets(_0x29cf1f) {
    if (_0x29cf1f.length > 0) {
      let _0x46fe58 = [];
      for (let _0x258daf = 0; _0x258daf < _0x29cf1f.length; _0x258daf++) {
        _0x46fe58.push("\n精灵: " + _0x29cf1f[_0x258daf].nick + " 天赋: " + _0x29cf1f[_0x258daf].talent);
      }
      addGameLog(_0x46fe58.join(""));
    }
    addGameLog("\n捕捉精灵汇总:");
  }
  checkUseCatchPet() {
    const _0x1e791e = {
      手下留情Plus: 100125,
      手下留情: 10057,
      真抽打: 31993,
      处处留情: 31598,
      天魔裂空闪: 400005
    };
    const _0x508ba4 = Object.values(_0x1e791e).map(() => false);
    const _0x16ad16 = PetManager.getInstance().getAllPets();
    for (let _0x583793 = 0; _0x583793 < _0x16ad16.length; _0x583793++) {
      const _0x1731ff = _0x16ad16[_0x583793];
      const _0x3fa961 = _0x1731ff.skills;
      if (_0x1731ff.level >= 60) {
        Object.values(_0x1e791e).some((_0x3e074a, _0x135989) => {
          if (_0x1731ff.nick == "皮皮" && _0x1731ff.skills.indexOf(400005) !== -1) {
            if (_0x1731ff.petTokenGetTimeList[0] !== 0 && _0x1731ff.petTokenGetTimeList[1] !== 0 && _0x1731ff.petTokenGetTimeList[2] !== 0) {
              if (PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x1731ff.petTokenGetTimeList[0]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x1731ff.petTokenGetTimeList[1]).ench).enchId == 101 && PetTokenManager.getInstance().calcEnchValue(PetTokenManager.getInstance().getTokenInfo(_0x1731ff.petTokenGetTimeList[2]).ench).enchId == 101) {} else {
                return false;
              }
            } else {
              return false;
            }
          }
          if (_0x3fa961.includes(_0x3e074a)) {
            const _0x4c7628 = {
              getTime: _0x1731ff.getTime,
              skillID: _0x3e074a,
              petId: _0x1731ff.petId
            };
            _0x508ba4[_0x135989] = _0x4c7628;
            return true;
          }
          return false;
        });
      }
    }
    return _0x508ba4.find(_0x245111 => _0x245111) || false;
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
    let _0x468aa9 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x10a797 = [];
      var _0x237934 = SimpleAlertUi({
        height: 450,
        width: 500
      });
      _0x468aa9.alertWin = _0x237934;
      const _0x192a94 = {
        text: "一键委派",
        x: _0x237934.width / 2 - 32,
        y: _0x237934.height / 16
      };
      var _0x396c67 = createLabel(_0x192a94);
      _0x10a797.push(_0x396c67);
      const _0x7d8f83 = {
        text: "注意: 委派商店勾选会自动购买，不要勾选错了哦!!!",
        x: _0x237934.width / 15,
        y: _0x396c67.y + 25,
        textColor: 16776960
      };
      let _0x11c6e3 = createLabel(_0x7d8f83);
      _0x10a797.push(_0x11c6e3);
      const _0x375fb0 = {
        text: "此功能会自动委派完进行购买~",
        x: _0x237934.width / 15 + 47,
        y: _0x11c6e3.y + _0x11c6e3.height + 10,
        textColor: 16776960
      };
      let _0x13396b = createLabel(_0x375fb0);
      _0x10a797.push(_0x13396b);
      xls.activityExchange.load();
      let _0x634316 = [];
      let _0x45967c = [];
      let _0x11948c = [];
      for (let _0x441944 = 0; _0x441944 < 5; _0x441944++) {
        _0x11948c[_0x441944] = xls.activityExchange.getItem(11427 + _0x441944).name.split("：")[1];
        _0x634316[_0x441944] = createLabel({
          text: _0x11948c[_0x441944],
          x: _0x237934.width / 9,
          y: _0x13396b.y + (_0x441944 + 1) * 40
        });
        _0x10a797.push(_0x634316[_0x441944]);
        _0x45967c[_0x441944] = createToggle({
          x: _0x634316[_0x441944].x + 120,
          y: _0x634316[_0x441944].y,
          selected: false,
          storageKey: "waipai" + _0x441944
        });
        _0x10a797.push(_0x45967c[_0x441944]);
      }
      for (let _0x470e3f = 5; _0x470e3f < 10; _0x470e3f++) {
        _0x11948c[_0x470e3f] = xls.activityExchange.getItem(11427 + _0x470e3f).name.split("：")[1];
        _0x634316[_0x470e3f] = createLabel({
          text: _0x11948c[_0x470e3f],
          x: _0x45967c[1].x + 80,
          y: _0x13396b.y + (_0x470e3f - 4) * 40
        });
        _0x10a797.push(_0x634316[_0x470e3f]);
        _0x45967c[_0x470e3f] = createToggle({
          x: _0x634316[_0x470e3f].x + 120,
          y: _0x634316[_0x470e3f].y,
          selected: false,
          storageKey: "waipai" + _0x470e3f
        });
        _0x10a797.push(_0x45967c[_0x470e3f]);
      }
      let _0x119708 = createLabel({
        text: xls.activityExchange.getItem(22299).name.split("：")[1],
        x: _0x237934.width / 9,
        y: _0x13396b.y + 240,
        textColor: 16776960
      });
      _0x10a797.push(_0x119708);
      const _0x451dd6 = {
        x: _0x119708.x + 120,
        y: _0x119708.y,
        selected: false,
        storageKey: "waipai" + 10
      };
      _0x45967c[10] = createToggle(_0x451dd6);
      _0x10a797.push(_0x45967c[10]);
      _0x468aa9.addAllUis(_0x10a797);
      _0x237934.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x468aa9.stop();
      }, function () {
        for (let _0x303d85 = 0; _0x303d85 < 11; _0x303d85++) {
          localStorage.setItem("waipai" + _0x303d85, _0x45967c[_0x303d85].selected);
        }
        _0x468aa9.prcessBody();
      }], null);
      _0x237934.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x5e51c1 = MFC.attr.getAttr(MFC.attrType["foreverNewDispatchEndTime" + 1]) * 1000;
      let _0x3e7cde = MFC.attr.getAttr(MFC.attrType["foreverNewDispatchEndTime" + 2]) * 1000;
      let _0xdd0058 = MFC.attr.getAttr(MFC.attrType["foreverNewDispatchEndTime" + 3]) * 1000;
      let _0x1af6e8 = MFC.attr.getAttr(MFC.attrType["foreverNewDispatchEndTime" + 4]) * 1000;
      if (_0x5e51c1 == 0) {
        addGameLog("没有正在进行的任务");
      } else if (MFC.serverTimer.getTime() > _0x5e51c1) {
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
      if (_0x3e7cde == 0) {
        addGameLog("没有正在进行的任务");
      } else if (MFC.serverTimer.getTime() > _0x3e7cde) {
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
      if (_0xdd0058 == 0) {
        addGameLog("没有正在进行的任务");
      } else if (MFC.serverTimer.getTime() > _0xdd0058) {
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
      if (_0x1af6e8 == 0) {
        addGameLog("没有正在进行的任务");
      } else if (MFC.serverTimer.getTime() > _0x1af6e8) {
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
      let _0x437f39 = await this.send_message("cs_new_dispatch_task", {
        type: 1,
        getTimeList: null,
        taskIdx: 0
      });
      timer.change(1 / 5);
      for (let _0x54d807 = 0; _0x54d807 < 4; _0x54d807++) {
        if (MFC.userInfo.newDispatchTaskGetTimes[_0x54d807].length == 0) {
          if (BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.foreverNewDispatchTaskId), _0x54d807 * 7, (_0x54d807 + 1) * 7) == 0) {
            addGameLog("任务" + (_0x54d807 + 1) + "不存在");
          } else {
            let _0x5babd6 = xls.entrustTask.getItem(BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.foreverNewDispatchTaskId), _0x54d807 * 7, (_0x54d807 + 1) * 7)).petNeed.split("|").map(Number);
            logger("任务" + (_0x54d807 + 1) + "需要" + _0x5babd6[2] + "只" + _0x5babd6[1] + "等级");
            logger(_0x437f39.needElem[_0x54d807]);
            if (_0x437f39.needElem[_0x54d807].indexOf("|") !== -1) {
              let _0x329130 = _0x437f39.needElem[_0x54d807].split("|");
              let _0x4fa86c = [];
              let _0x19f49a = [];
              let _0x332b45 = 0;
              let _0x2bd7be = [];
              for (let _0x25aca0 = 0; _0x25aca0 < _0x329130.length; _0x25aca0++) {
                let _0x57ce84 = _0x329130[_0x25aca0].split("_");
                let _0x43e911 = _0x57ce84[0];
                let _0x484bd3 = _0x57ce84[1];
                _0x4fa86c.push(parseInt(_0x43e911));
                _0x19f49a.push(parseInt(_0x484bd3));
              }
              for (let _0x4a4ee7 = 0; _0x4a4ee7 < _0x19f49a.length; _0x4a4ee7++) {
                let _0x1db867 = PetManager.getInstance().getAllPets().map(_0x33185a => {
                  if (PetConfig.getDef(_0x33185a.petId).elemType == _0x19f49a[_0x4a4ee7] && _0x33185a.petStatus == 0 && _0x33185a.level >= _0x5babd6[1] && MFC.userInfo.newDispatchTaskGetTimes[0].indexOf(_0x33185a.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[1].indexOf(_0x33185a.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[2].indexOf(_0x33185a.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[3].indexOf(_0x33185a.getTime) == -1) {
                    return _0x33185a;
                  }
                }).filter(_0x452d4e => _0x452d4e).sort((_0x2c57a6, _0x5c384c) => _0x2c57a6.level - _0x5c384c.level);
                let _0x4cbdf5 = PetManager.getInstance().getAllPets().map(_0x2cdc1c => {
                  if (PetConfig.getDef(_0x2cdc1c.petId).elemType == _0x19f49a[_0x4a4ee7] && _0x2cdc1c.petStatus == 0 && MFC.userInfo.newDispatchTaskGetTimes[0].indexOf(_0x2cdc1c.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[1].indexOf(_0x2cdc1c.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[2].indexOf(_0x2cdc1c.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[3].indexOf(_0x2cdc1c.getTime) == -1) {
                    return _0x2cdc1c;
                  }
                }).filter(_0x534a10 => _0x534a10).sort((_0x4d98fc, _0x27f870) => _0x4d98fc.level - _0x27f870.level);
                for (let _0x3a832b = 0; _0x3a832b < _0x4fa86c[_0x4a4ee7]; _0x3a832b++) {
                  if (_0x5babd6[2] > _0x332b45) {
                    if (_0x1db867.length > 0) {
                      _0x2bd7be.push(_0x1db867.shift().getTime);
                      _0x332b45++;
                    } else if (_0x4cbdf5.length > 0) {
                      _0x2bd7be.push(_0x4cbdf5.shift().getTime);
                    }
                  } else if (_0x4cbdf5.length > 0) {
                    _0x2bd7be.push(_0x4cbdf5.shift().getTime);
                  }
                }
              }
              if (_0x2bd7be.length == _0x4fa86c.reduce((_0x9cac76, _0x5ee4c9) => _0x9cac76 + _0x5ee4c9, 0) && _0x332b45 == _0x5babd6[2]) {
                const _0x15ce87 = {
                  type: 2,
                  getTimeList: _0x2bd7be,
                  taskIdx: _0x54d807 + 1
                };
                await this.send_message("cs_new_dispatch_task", _0x15ce87);
                await wait(500);
                addGameLog("任务" + (_0x54d807 + 1) + "委派成功");
              } else {
                addGameLog("任务" + (_0x54d807 + 1) + "没有符合条件精灵");
              }
            } else {
              let _0x4388ec = _0x437f39.needElem[_0x54d807].split("_").map(Number);
              logger("数量" + _0x4388ec[0] + "属性" + _0x4388ec[1]);
              let _0x3d8fe6 = [];
              let _0x408c5e = PetManager.getInstance().getAllPets().map(_0x38c663 => {
                if (PetConfig.getDef(_0x38c663.petId).elemType == _0x4388ec[1] && _0x38c663.petStatus == 0 && MFC.userInfo.newDispatchTaskGetTimes[0].indexOf(_0x38c663.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[1].indexOf(_0x38c663.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[2].indexOf(_0x38c663.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[3].indexOf(_0x38c663.getTime) == -1) {
                  return _0x38c663;
                }
              }).filter(_0x37fda8 => _0x37fda8).sort((_0xddda5b, _0x37236f) => _0xddda5b.level - _0x37236f.level);
              let _0x5ba9f9 = PetManager.getInstance().getAllPets().map(_0x55dfd9 => {
                if (PetConfig.getDef(_0x55dfd9.petId).elemType == _0x4388ec[1] && _0x55dfd9.petStatus == 0 && _0x55dfd9.level >= _0x5babd6[1] && MFC.userInfo.newDispatchTaskGetTimes[0].indexOf(_0x55dfd9.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[1].indexOf(_0x55dfd9.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[2].indexOf(_0x55dfd9.getTime) == -1 && MFC.userInfo.newDispatchTaskGetTimes[3].indexOf(_0x55dfd9.getTime) == -1) {
                  return _0x55dfd9;
                }
              }).filter(_0xc56ef9 => _0xc56ef9).sort((_0x2838fc, _0x64bb7c) => _0x2838fc.level - _0x64bb7c.level);
              for (let _0x1bab5a = 0; _0x1bab5a < _0x4388ec[0] - _0x5babd6[2]; _0x1bab5a++) {
                if (_0x408c5e.length > 0) {
                  _0x3d8fe6.push(_0x408c5e.shift().getTime);
                }
              }
              for (let _0x31f5bb = 0; _0x31f5bb < _0x5babd6[2]; _0x31f5bb++) {
                if (_0x5ba9f9.length > 0) {
                  _0x3d8fe6.push(_0x5ba9f9.shift().getTime);
                }
              }
              if (_0x3d8fe6.length == _0x4388ec[0]) {
                const _0x4e92db = {
                  type: 2,
                  getTimeList: _0x3d8fe6,
                  taskIdx: _0x54d807 + 1
                };
                await this.send_message("cs_new_dispatch_task", _0x4e92db);
                await wait(500);
                addGameLog("任务" + (_0x54d807 + 1) + "委派成功");
              } else {
                addGameLog("任务" + (_0x54d807 + 1) + "没有符合条件精灵");
              }
            }
          }
        } else {
          addGameLog("任务" + (_0x54d807 + 1) + "不存在或正在进行");
        }
      }
      addGameLog("即将进行商店购买");
      for (let _0x2e11c1 = 0; _0x2e11c1 < 10; _0x2e11c1++) {
        if (localStorage.getItem("waipai" + _0x2e11c1).toString() == "true") {
          if (ExchangeUtils.getCurrentExchangeNum(xls.activityExchange.getItem(11427 + _0x2e11c1)) == 1) {
            addGameLog(xls.activityExchange.getItem(11427 + _0x2e11c1).name.split("：")[1] + "已购买");
          } else if (MFC.attr.getAttr(2010) >= parseInt(xls.activityExchange.getItem(11427 + _0x2e11c1).consume.split("_")[1])) {
            const _0x26ab0f = {
              id: 11427 + _0x2e11c1,
              coeff: 1,
              selectIndex: 0,
              subDropIdList: []
            };
            await this.send_message("cs_exchange_activity_reward", _0x26ab0f);
            await wait(200);
            addGameLog("购买" + xls.activityExchange.getItem(11427 + _0x2e11c1).name.split("：")[1]);
          } else {
            addGameLog("委托积分不足以购买" + xls.activityExchange.getItem(11427 + _0x2e11c1).name.split("：")[1]);
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
    } catch (_0x1030af) {}
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
  }
  start() {
    super.start();
    let _0x561d35 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x503d22 = [];
      var _0x56e132 = SimpleAlertUi({
        height: 400,
        width: 460
      });
      _0x561d35.alertWin = _0x56e132;
      const _0x321332 = {
        text: "888活动",
        x: _0x56e132.width / 2 - 28,
        y: _0x56e132.height / 16
      };
      var _0x2752ad = createLabel(_0x321332);
      _0x503d22.push(_0x2752ad);
      const _0x216695 = {
        text: "注意:",
        x: 30,
        y: _0x56e132.height / 16,
        textColor: 16776960
      };
      var _0x344c44 = createLabel(_0x216695);
      _0x503d22.push(_0x344c44);
      var _0x344c44 = createLabel({
        text: "1.斗皇打法光闪击选择青龙会浪费大量pp",
        x: _0x56e132.width / 2 - 120,
        y: _0x344c44.y + 26
      });
      _0x503d22.push(_0x344c44);
      const _0x460b97 = {
        text: "2.魔神用哈肯撒长老水次蒂朵神秘狗",
        x: _0x56e132.width / 2 - 120,
        y: _0x344c44.y + 26
      };
      var _0x11bd30 = createLabel(_0x460b97);
      _0x503d22.push(_0x11bd30);
      const _0x4bc6bd = {
        x: 40,
        y: _0x11bd30.y + 26,
        selected: true,
        storageKey: "douhuang"
      };
      let _0x559afd = createRadio(_0x4bc6bd);
      _0x503d22.push(_0x559afd);
      const _0x42e3d7 = {
        text: "暗卡",
        x: _0x559afd.width + _0x559afd.x + 10,
        y: _0x559afd.y
      };
      var _0x24705f = createLabel(_0x42e3d7);
      _0x503d22.push(_0x24705f);
      const _0x5b6707 = {
        x: _0x24705f.x + _0x24705f.width + 80,
        y: _0x559afd.y,
        selected: false,
        storageKey: "Renault"
      };
      let _0x3255ba = createRadio(_0x5b6707);
      _0x503d22.push(_0x3255ba);
      const _0x8e4a7a = {
        text: "雷锘",
        x: _0x3255ba.width + _0x3255ba.x + 10,
        y: _0x559afd.y
      };
      var _0x5a19ca = createLabel(_0x8e4a7a);
      _0x503d22.push(_0x5a19ca);
      const _0x27bf21 = {
        x: 40,
        y: _0x11bd30.y + 52,
        selected: false,
        storageKey: "Mosheny"
      };
      let _0x342a2d = createRadio(_0x27bf21);
      _0x503d22.push(_0x342a2d);
      const _0x42b24f = {
        text: "魔神",
        x: _0x342a2d.width + _0x342a2d.x + 10,
        y: _0x342a2d.y
      };
      var _0x350a9f = createLabel(_0x42b24f);
      _0x503d22.push(_0x350a9f);
      const _0x3310f9 = {
        x: _0x24705f.x + _0x24705f.width + 80,
        y: _0x342a2d.y,
        selected: false,
        storageKey: "rebirth"
      };
      let _0xe3353d = createRadio(_0x3310f9);
      _0x503d22.push(_0xe3353d);
      const _0x112396 = {
        text: "耶里梅斯",
        x: _0x3255ba.width + _0x3255ba.x + 10,
        y: _0x342a2d.y
      };
      var _0x48df87 = createLabel(_0x112396);
      _0x503d22.push(_0x48df87);
      const _0x21eacb = {
        x: 40,
        y: _0x11bd30.y + 78,
        selected: false,
        storageKey: "aobulei"
      };
      let _0x36cb32 = createRadio(_0x21eacb);
      _0x503d22.push(_0x36cb32);
      const _0x334457 = {
        text: "奥布雷",
        x: _0x342a2d.width + _0x342a2d.x + 10,
        y: _0x36cb32.y
      };
      var _0x1f9200 = createLabel(_0x334457);
      _0x503d22.push(_0x1f9200);
      const _0x51ebb5 = {
        x: _0x24705f.x + _0x24705f.width + 80,
        y: _0x36cb32.y,
        selected: false,
        storageKey: "hakensa"
      };
      let _0x272781 = createRadio(_0x51ebb5);
      _0x503d22.push(_0x272781);
      const _0x2dad93 = {
        text: "哈肯撒",
        x: _0x3255ba.width + _0x3255ba.x + 10,
        y: _0x36cb32.y
      };
      var _0x4f0b07 = createLabel(_0x2dad93);
      _0x503d22.push(_0x4f0b07);
      const _0x18d086 = {
        x: 40,
        y: _0x11bd30.y + 104,
        selected: false,
        storageKey: "modi"
      };
      let _0x237c9c = createRadio(_0x18d086);
      _0x503d22.push(_0x237c9c);
      const _0x46e5c8 = {
        text: "莫迪西斯",
        x: _0x342a2d.width + _0x342a2d.x + 10,
        y: _0x237c9c.y
      };
      var _0x24d817 = createLabel(_0x46e5c8);
      _0x503d22.push(_0x24d817);
      const _0x32279b = {
        x: _0x24705f.x + _0x24705f.width + 80,
        y: _0x237c9c.y,
        selected: false,
        storageKey: "pthl"
      };
      let _0x1077dd = createRadio(_0x32279b);
      _0x503d22.push(_0x1077dd);
      const _0x2a99be = {
        text: "巨尾狐妖",
        x: _0x3255ba.width + _0x3255ba.x + 10,
        y: _0x1077dd.y
      };
      var _0xb7eb9 = createLabel(_0x2a99be);
      _0x503d22.push(_0xb7eb9);
      const _0x43f5d7 = {
        x: 40,
        y: _0x11bd30.y + 130,
        selected: false,
        storageKey: "zh"
      };
      let _0x381b5a = createRadio(_0x43f5d7);
      _0x503d22.push(_0x381b5a);
      const _0x46bf2d = {
        text: "战皇",
        x: _0x381b5a.width + _0x381b5a.x + 10,
        y: _0x381b5a.y
      };
      var _0x3abdab = createLabel(_0x46bf2d);
      _0x503d22.push(_0x3abdab);
      _0x561d35.addAllUis(_0x503d22);
      _0x56e132.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x561d35.stop();
      }, function () {
        localStorage.setItem("douhuang", _0x559afd.selected);
        localStorage.setItem("Renault", _0x3255ba.selected);
        localStorage.setItem("Mosheny", _0x342a2d.selected);
        localStorage.setItem("rebirth", _0xe3353d.selected);
        localStorage.setItem("aobulei", _0x36cb32.selected);
        localStorage.setItem("hakensa", _0x272781.selected);
        localStorage.setItem("modi", _0x237c9c.selected);
        localStorage.setItem("pthl", _0x1077dd.selected);
        localStorage.setItem("zh", _0x1077dd.selected);
        if (_0x559afd.selected) {
          _0x561d35.task[0] = 1;
        }
        if (_0x3255ba.selected) {
          _0x561d35.task[1] = 1;
        }
        if (_0x342a2d.selected) {
          _0x561d35.task[2] = 1;
        }
        if (_0xe3353d.selected) {
          _0x561d35.task[3] = 1;
        }
        if (_0x36cb32.selected) {
          _0x561d35.task[4] = 1;
        }
        if (_0x272781.selected) {
          _0x561d35.task[5] = 1;
        }
        if (_0x237c9c.selected) {
          _0x561d35.task[6] = 1;
        }
        if (_0x1077dd.selected) {
          _0x561d35.task[7] = 1;
        }
        if (_0x381b5a.selected) {
          _0x561d35.task[8] = 1;
        }
        _0x561d35.prcessBody();
      }], null);
      _0x56e132.showAlert();
    });
  }
  async prcessBody() {
    try {
      if (this.task[0]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_09_04 5:00:00") {
          await this.darkwarbattleui();
        } else {
          addGameLog("暗卡已结束");
          this.stop();
        }
      }
      if (this.task[1]) {
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_07_17 14:05:00") {
          if (MFC.attr.getAttr(MFC.attrType.foreverSpetSelect) == 0) {
            addGameLog("超级集结还未选择");
            this.stop();
          } else {
            await this.Renaultui();
          }
        } else {
          addGameLog("超级集结已结束");
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
    } catch (_0x2063b4) {}
  }
  async zhanhuang() {
    let _0x30ec78 = 14816;
    const _0x5f46e2 = {
      skills: [_0x30ec78]
    };
    let _0x4b92ae = getGoalPets([_0x5f46e2]);
    if (!_0x4b92ae) {
      _0x30ec78 = 32529;
      const _0x7198e5 = {
        skills: [_0x30ec78]
      };
      _0x4b92ae = getGoalPets([_0x7198e5]);
    }
    if (!_0x4b92ae) {
      _0x30ec78 = 32127;
      const _0x3ed250 = {
        skills: [_0x30ec78]
      };
      _0x4b92ae = getGoalPets([_0x3ed250]);
    }
    if (!_0x4b92ae) {
      this.stop();
      MFC.alert.show(`背包中没有 精灵拥有 
奥义断水击 技能 或者 
幕夜龙王击 技能 或者 
灭世歼星炮 技能`);
      return;
    } else {
      while (1) {
        let _0x129fbb = await this.send_message("cs_zhanhuang_op", {
          op: 1,
          pos: 0,
          type: 0
        });
        if ((_0x129fbb.status == 1 || _0x129fbb.status == 3) && _0x129fbb.randomAffects.length > 0) {
          addGameLog("选择增益!");
          await this.send_message("cs_zhanhuang_op", {
            op: 3,
            pos: 1,
            type: 0
          });
        } else if (_0x129fbb.status == 1 && _0x129fbb.randomAffects.length == 0) {
          addGameLog("选择对战boss!");
          await this.send_message("cs_zhanhuang_op", {
            op: 4,
            pos: 1,
            type: 0
          });
        } else if (_0x129fbb.status == 2) {
          addGameLog("遇到商店 跳过继续 !");
          await this.send_message("cs_zhanhuang_op", {
            op: 9,
            pos: 0,
            type: 0
          });
        } else if (_0x129fbb.status == 3) {
          addGameLog("激活战意!继续前进");
          await wait(200);
          await this.send_message("cs_zhanhuang_op", {
            op: 10,
            pos: 0,
            type: 0
          });
        } else if (_0x129fbb.status == 4) {
          addGameLog("进入对战!");
          for (let _0x287e3e = 0; _0x287e3e < 25; _0x287e3e++) {
            addGameLog("尝试 对战第" + (_0x287e3e + 1) + "次");
            const _0x1cb45d = {
              type: 1,
              cardId: [_0x129fbb.cardId],
              petList: [_0x4b92ae.getTime],
              times: 0,
              train: 0
            };
            let _0x4f3f8b = await this.send_message("cs_pve_fight_start", _0x1cb45d);
            if (JSON.stringify(_0x4f3f8b).includes("体力不足")) {
              addGameLog("电池不足,战皇结束");
              this.stop();
              return;
            }
            await this.initBattle();
            let _0x5d5a0b = await this.useSkill(_0x30ec78);
            while (_0x5d5a0b.result.result == 0) {
              _0x5d5a0b = await this.useSkill(_0x30ec78);
              if (_0x5d5a0b.result.roundNum >= 2) {
                addGameLog("回合数过多,逃跑!");
                await this.send_message("cs_quit_battle", {});
                break;
              }
            }
            if (_0x5d5a0b.result.result === 1) {
              addGameLog("顺利击杀boss");
              break;
            } else {
              addGameLog("未击败Boss");
            }
            if (_0x287e3e == 13) {
              addGameLog("技能对boss失效 请手动通过");
              MFC.alert.show("技能对本关卡boss失效 请手动通过");
              this.stop();
              return;
            }
          }
        } else if (_0x129fbb.status == 11) {
          addGameLog("到底顶层!挑战胜利");
          await wait(200);
          this.stop();
          return;
        } else {
          addGameLog("特殊情况");
          logger("特殊情况", _0x129fbb);
          break;
        }
        await wait(800);
        addGameLog("进行下一轮操作!");
      }
      this.stop();
      return;
    }
  }
  async darkwarbattleui() {
    const _0x3aea07 = {
      zZjvp: "width",
      mYNOa: function (_0x5e5925, _0x3dd95a) {
        return _0x5e5925 + _0x3dd95a;
      },
      lJylO: "nick",
      SXJwc: "talent",
      WPnDD: "pet",
      CjOMJ: function (_0x3d7427, _0x1ec3cf) {
        return _0x3d7427 === _0x1ec3cf;
      },
      IOfKe: function (_0x2dc3be, _0x24e16c) {
        return _0x2dc3be < _0x24e16c;
      },
      FfpfN: function (_0x242e97, _0x4c7542) {
        return _0x242e97 + _0x4c7542;
      },
      ZBbDc: function (_0x1e0264, _0x2eaad0) {
        return _0x1e0264 * _0x2eaad0;
      },
      IOpqh: "center"
    };
    let _0x542976 = function (_0x576a5a) {
      const _0x444447 = {
        XUykM: "source",
        RvIQz: "_Image1",
        GQGRm: _0x3aea07.zZjvp,
        DJldq: "height"
      };
      function _0x126ace() {
        _0x576a5a.call(this);
        this.skinParts = [];
        this.elementsContent = [this._Image1_i()];
        this.states = [new eui.State("up", [new eui.SetProperty("_Image1", _0x444447.XUykM, "personal_center_setup_checkbox_up_png"), new eui.SetProperty(_0x444447.RvIQz, "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 20), new eui.SetProperty(_0x444447.RvIQz, "height", 21)]), new eui.State("down", [new eui.SetProperty("_Image1", _0x444447.XUykM, "personal_center_setup_checkbox_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 1), new eui.SetProperty("_Image1", _0x444447.GQGRm, 20), new eui.SetProperty("_Image1", _0x444447.DJldq, 20)]), new eui.State("disabled", [])];
      }
      __extends(_0x126ace, _0x576a5a);
      var _0x12182e = _0x126ace.prototype;
      _0x12182e._Image1_i = function () {
        var _0x1f4225 = new eui.Image();
        this._Image1 = _0x1f4225;
        return _0x1f4225;
      };
      return _0x126ace;
    }(eui.Skin);
    super.start();
    let _0x54f8f1 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x5b9898 = new alert.SimpleAlert();
      _0x5b9898.initialize(alert.ALERT_ROOT);
      _0x5b9898.effectTrigger.showEffect = alert.SHOW_EFFECT;
      _0x5b9898.effectTrigger.hideEffect = alert.HIDE_EFFECT;
      _0x54f8f1.alertWin = _0x5b9898;
      _0x5b9898._minHeight = 400;
      _0x5b9898.height = 400;
      _0x5b9898.applicationWidth = 460;
      var _0x29fb14 = new eui.Label();
      _0x29fb14.lineSpacing = 3;
      _0x29fb14.size = 16;
      _0x29fb14.text = "暗卡";
      _0x29fb14.textColor = 16777215;
      _0x29fb14.touchEnabled = false;
      _0x29fb14.x = _0x5b9898.width / 2 - _0x29fb14.width / 2;
      _0x29fb14.y = _0x5b9898.height / 16;
      _0x5b9898.addChild(_0x29fb14);
      var _0xcd89c5 = new eui.Label();
      _0xcd89c5.lineSpacing = 3;
      _0xcd89c5.size = 16;
      _0xcd89c5.text = "注意:";
      _0xcd89c5.textColor = 16776960;
      _0xcd89c5.touchEnabled = false;
      _0xcd89c5.x = 30;
      _0xcd89c5.y = _0x5b9898.height / 20;
      _0x5b9898.addChild(_0xcd89c5);
      let _0x3c427c = new eui.Label();
      _0x3c427c.lineSpacing = 3;
      _0x3c427c.size = 16;
      _0x3c427c.text = "1.哈肯撒需要堕落龙力跟幕夜龙王击";
      _0x3c427c.textColor = 16777215;
      _0x3c427c.touchEnabled = false;
      _0x3c427c.x = _0x5b9898.width / 2 - _0x3c427c.width / 2;
      _0x3c427c.y = _0xcd89c5.y + 10 + _0xcd89c5.height;
      _0x5b9898.addChild(_0x3c427c);
      let _0x53ce2e = new eui.Label();
      _0x53ce2e.lineSpacing = 3;
      _0x53ce2e.size = 16;
      _0x53ce2e.text = "2.长老需要引爆大招";
      _0x53ce2e.textColor = 16777215;
      _0x53ce2e.touchEnabled = false;
      _0x53ce2e.x = _0x5b9898.width / 2 - _0x3c427c.width / 2;
      _0x53ce2e.y = _0x3c427c.y + 10 + _0x3c427c.height;
      _0x5b9898.addChild(_0x53ce2e);
      let _0x11ecb6 = new eui.Label();
      _0x11ecb6.lineSpacing = 3;
      _0x11ecb6.size = 16;
      _0x11ecb6.text = "3.神秘狗需要灵神归寂和万象归元";
      _0x11ecb6.textColor = 16777215;
      _0x11ecb6.touchEnabled = false;
      _0x11ecb6.x = _0x5b9898.width / 2 - _0x3c427c.width / 2;
      _0x11ecb6.y = _0x53ce2e.y + 10 + _0x53ce2e.height;
      _0x5b9898.addChild(_0x11ecb6);
      let _0x33f8c8 = new eui.Label();
      _0x33f8c8.lineSpacing = 3;
      _0x33f8c8.size = 16;
      _0x33f8c8.text = "4.水次没有致命一击遇到5星布鲁克克打不过";
      _0x33f8c8.textColor = 16777215;
      _0x33f8c8.touchEnabled = false;
      _0x33f8c8.x = _0x5b9898.width / 2 - _0x3c427c.width / 2;
      _0x33f8c8.y = _0x11ecb6.y + 10 + _0x11ecb6.height;
      _0x5b9898.addChild(_0x33f8c8);
      let _0x342237 = new eui.Label();
      _0x342237.lineSpacing = 3;
      _0x342237.size = 16;
      _0x342237.text = "5.蒂朵遇到5星布鲁克克会停止";
      _0x342237.textColor = 16777215;
      _0x342237.touchEnabled = false;
      _0x342237.x = _0x5b9898.width / 2 - _0x3c427c.width / 2;
      _0x342237.y = _0x33f8c8.y + 10 + _0x33f8c8.height;
      _0x5b9898.addChild(_0x342237);
      let _0x566935 = new eui.RadioButton();
      _0x566935.skinName = _0x542976;
      _0x566935.x = 40;
      _0x566935.y = _0x342237.y + _0x342237.height + 10;
      _0x566935.selected = true;
      if (localStorage.getItem("1") != null) {
        _0x566935.selected = JSON.parse(localStorage.getItem("1"));
      }
      _0x566935.index = 0;
      _0x5b9898.addChild(_0x566935);
      let _0x41d597 = new eui.Label();
      _0x41d597.lineSpacing = 3;
      _0x41d597.size = 20;
      _0x41d597.text = "哈肯萨";
      _0x41d597.textColor = 16777215;
      _0x41d597.touchEnabled = false;
      _0x41d597.x = _0x566935.width + _0x566935.x + 10;
      _0x41d597.y = _0x566935.y;
      _0x5b9898.addChild(_0x41d597);
      let _0x4a420b = new eui.RadioButton();
      _0x4a420b.skinName = _0x542976;
      _0x4a420b.x = _0x41d597.x + _0x41d597.width + 80;
      _0x4a420b.y = _0x566935.y;
      _0x4a420b.selected = false;
      if (localStorage.getItem("2") != null) {
        _0x4a420b.selected = JSON.parse(localStorage.getItem("2"));
      }
      _0x4a420b.index = 0;
      _0x5b9898.addChild(_0x4a420b);
      let _0x34c631 = new eui.Label();
      _0x34c631.lineSpacing = 3;
      _0x34c631.size = 20;
      _0x34c631.text = "长老";
      _0x34c631.textColor = 16777215;
      _0x34c631.touchEnabled = false;
      _0x34c631.x = _0x4a420b.width + _0x4a420b.x + 10;
      _0x34c631.y = _0x566935.y;
      _0x5b9898.addChild(_0x34c631);
      let _0x59203a = new eui.RadioButton();
      _0x59203a.skinName = _0x542976;
      _0x59203a.x = 40;
      _0x59203a.y = _0x342237.y + _0x342237.height + 50;
      _0x59203a.selected = false;
      if (localStorage.getItem("3") != null) {
        _0x59203a.selected = JSON.parse(localStorage.getItem("3"));
      }
      _0x59203a.index = 0;
      _0x5b9898.addChild(_0x59203a);
      let _0x18b822 = new eui.Label();
      _0x18b822.lineSpacing = 3;
      _0x18b822.size = 20;
      _0x18b822.text = "神秘狗";
      _0x18b822.textColor = 16777215;
      _0x18b822.touchEnabled = false;
      _0x18b822.x = _0x566935.width + _0x566935.x + 10;
      _0x18b822.y = _0x342237.y + _0x342237.height + 50;
      _0x5b9898.addChild(_0x18b822);
      let _0x28a539 = new eui.RadioButton();
      _0x28a539.skinName = _0x542976;
      _0x28a539.x = _0x41d597.x + _0x41d597.width + 80;
      _0x28a539.y = _0x342237.y + _0x342237.height + 50;
      _0x28a539.selected = false;
      if (localStorage.getItem("4") != null) {
        _0x28a539.selected = JSON.parse(localStorage.getItem("4"));
      }
      _0x28a539.index = 0;
      _0x5b9898.addChild(_0x28a539);
      let _0x50de21 = new eui.Label();
      _0x50de21.lineSpacing = 3;
      _0x50de21.size = 20;
      _0x50de21.text = "水次";
      _0x50de21.textColor = 16777215;
      _0x50de21.touchEnabled = false;
      _0x50de21.x = _0x28a539.width + _0x28a539.x + 10;
      _0x50de21.y = _0x342237.y + _0x342237.height + 50;
      _0x5b9898.addChild(_0x50de21);
      let _0x465d25 = new eui.RadioButton();
      _0x465d25.skinName = _0x542976;
      _0x465d25.x = 40;
      _0x465d25.y = _0x342237.y + _0x342237.height + 90;
      _0x465d25.selected = false;
      if (localStorage.getItem("5") != null) {
        _0x465d25.selected = JSON.parse(localStorage.getItem("5"));
      }
      _0x465d25.index = 0;
      _0x5b9898.addChild(_0x465d25);
      let _0x5829f5 = new eui.Label();
      _0x5829f5.lineSpacing = 3;
      _0x5829f5.size = 20;
      _0x5829f5.text = "蒂朵";
      _0x5829f5.textColor = 16777215;
      _0x5829f5.touchEnabled = false;
      _0x5829f5.x = _0x566935.width + _0x566935.x + 10;
      _0x5829f5.y = _0x342237.y + _0x342237.height + 90;
      _0x5b9898.addChild(_0x5829f5);
      _0x5b9898.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x54f8f1.stop();
      }, function () {
        localStorage.setItem("1", _0x566935.selected);
        localStorage.setItem("2", _0x4a420b.selected);
        localStorage.setItem("3", _0x59203a.selected);
        localStorage.setItem("4", _0x28a539.selected);
        localStorage.setItem("5", _0x465d25.selected);
        if (_0x566935.selected) {
          _0x54f8f1.darkwarbattle1();
        }
        if (_0x4a420b.selected) {
          _0x54f8f1.darkwarbattle2();
        }
        if (_0x59203a.selected) {
          _0x54f8f1.darkwarbattle3();
        }
        if (_0x28a539.selected) {
          _0x54f8f1.darkwarbattle4();
        }
        if (_0x465d25.selected) {
          _0x54f8f1.darkwarbattle5();
        }
      }], null);
      _0x5b9898.showAlert();
    });
  }
  async darkwarbattle1() {
    while (true) {
      let _0x3574d2 = await this.send_message("cs_super_boss", {
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
        logger("获取当前boss列表" + _0x3574d2.bossInfo);
        if (_0x3574d2.bossInfo.length == 0) {
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
          logger("当前发现boss,数量为" + _0x3574d2.bossInfo.length);
          logger("当前发现boss" + _0x3574d2.bossInfo[0].activityCard);
          let _0x30895a = PetManager.getInstance().getAllPets().map(_0x43c78b => {
            if (_0x43c78b.skills.indexOf(14816) != -1 && _0x43c78b.skills.indexOf(22615) != -1) {
              return _0x43c78b;
            }
          }).filter(_0x8fb943 => _0x8fb943 !== undefined)[0];
          if (_0x30895a == undefined) {
            addGameLog("背包哈肯技能不符合");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x30895a.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              activityCard: _0x3574d2.bossInfo[0].activityCard,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x21f2c8 = await this.waitEvent("sc_battle_notify_load_resource");
            _0x21f2c8.gameBody.splice(0, _0x21f2c8.gameBody.length);
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
            _0x21f2c8 = await this.waitEvent("sc_battle_notify_round_result");
            let _0x139338 = JSON.parse(_0x21f2c8.gameBody[_0x21f2c8.gameBody.length - 1].raw);
            _0x21f2c8.gameBody.splice(0, _0x21f2c8.gameBody.length);
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
            _0x21f2c8 = await this.waitEvent("sc_battle_notify_round_result");
            _0x139338 = JSON.parse(_0x21f2c8.gameBody[_0x21f2c8.gameBody.length - 1].raw);
            _0x21f2c8.gameBody.splice(0, _0x21f2c8.gameBody.length);
            if (_0x139338.result.result == 0) {
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(14816).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 14816
                },
                groupId: ""
              });
              _0x21f2c8 = await this.waitEvent("sc_battle_notify_round_result");
              _0x139338 = JSON.parse(_0x21f2c8.gameBody[_0x21f2c8.gameBody.length - 1].raw);
              _0x21f2c8.gameBody.splice(0, _0x21f2c8.gameBody.length);
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
      let _0xdf378e = await this.send_message("cs_super_boss", {
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
        logger("获取当前boss列表" + _0xdf378e.bossInfo);
        if (_0xdf378e.bossInfo.length == 0) {
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
          logger("当前发现boss,数量为" + _0xdf378e.bossInfo.length);
          logger("当前发现boss" + _0xdf378e.bossInfo[0].activityCard);
          let _0x228f61 = PetManager.getInstance().getAllPets().map(_0x5f2098 => {
            if (_0x5f2098.skills.indexOf(32127) != -1 && _0x5f2098.skills.indexOf(20592) != -1) {
              return _0x5f2098;
            }
          }).filter(_0x400ced => _0x400ced !== undefined)[0];
          if (_0x228f61 == undefined) {
            addGameLog("背包长老技能不符合");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x228f61.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              activityCard: _0xdf378e.bossInfo[0].activityCard,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x541ed8 = await this.waitEvent("sc_battle_notify_load_resource");
            _0x541ed8.gameBody.splice(0, _0x541ed8.gameBody.length);
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
            _0x541ed8 = await this.waitEvent("sc_battle_notify_round_result");
            let _0x326308 = JSON.parse(_0x541ed8.gameBody[_0x541ed8.gameBody.length - 1].raw);
            _0x541ed8.gameBody.splice(0, _0x541ed8.gameBody.length);
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
            _0x541ed8 = await this.waitEvent("sc_battle_notify_round_result");
            _0x326308 = JSON.parse(_0x541ed8.gameBody[_0x541ed8.gameBody.length - 1].raw);
            _0x541ed8.gameBody.splice(0, _0x541ed8.gameBody.length);
            if (_0x326308.result.result == 0) {
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(32127).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 32127
                },
                groupId: ""
              });
              _0x541ed8 = await this.waitEvent("sc_battle_notify_round_result");
              _0x326308 = JSON.parse(_0x541ed8.gameBody[_0x541ed8.gameBody.length - 1].raw);
              _0x541ed8.gameBody.splice(0, _0x541ed8.gameBody.length);
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
      let _0xb8cc10 = await this.send_message("cs_super_boss", {
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
        logger("获取当前boss列表" + _0xb8cc10.bossInfo);
        if (_0xb8cc10.bossInfo.length == 0) {
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
          logger("当前发现boss,数量为" + _0xb8cc10.bossInfo.length);
          logger("当前发现boss" + _0xb8cc10.bossInfo[0].activityCard);
          let _0xa41d87 = PetManager.getInstance().getAllPets().map(_0x4f8d55 => {
            if (_0x4f8d55.skills.indexOf(40958) != -1 && _0x4f8d55.skills.indexOf(40957) != -1) {
              return _0x4f8d55;
            }
          }).filter(_0x418a0f => _0x418a0f !== undefined)[0];
          if (_0xa41d87 == undefined) {
            addGameLog("背包神秘狗技能不符合");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0xa41d87.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              activityCard: _0xb8cc10.bossInfo[0].activityCard,
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x3e0a52 = await this.waitEvent("sc_battle_notify_load_resource");
            _0x3e0a52.gameBody.splice(0, _0x3e0a52.gameBody.length);
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
            _0x3e0a52 = await this.waitEvent("sc_battle_notify_round_result");
            let _0xce7432 = JSON.parse(_0x3e0a52.gameBody[_0x3e0a52.gameBody.length - 1].raw);
            _0x3e0a52.gameBody.splice(0, _0x3e0a52.gameBody.length);
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
            _0x3e0a52 = await this.waitEvent("sc_battle_notify_round_result");
            _0xce7432 = JSON.parse(_0x3e0a52.gameBody[_0x3e0a52.gameBody.length - 1].raw);
            _0x3e0a52.gameBody.splice(0, _0x3e0a52.gameBody.length);
            while (_0xce7432.result.result == 0) {
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(40957).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 40957
                },
                groupId: ""
              });
              _0x3e0a52 = await this.waitEvent("sc_battle_notify_round_result");
              _0xce7432 = JSON.parse(_0x3e0a52.gameBody[_0x3e0a52.gameBody.length - 1].raw);
              _0x3e0a52.gameBody.splice(0, _0x3e0a52.gameBody.length);
              if (_0xce7432.result.roundNum > 6) {
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
      let _0x96cb25 = await this.send_message("cs_super_boss", {
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
        logger("获取当前boss列表" + _0x96cb25.bossInfo);
        if (_0x96cb25.bossInfo.length == 0) {
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
          logger("当前发现boss,数量为" + _0x96cb25.bossInfo.length);
          if (xls.activityCard.getItem(_0x96cb25.bossInfo[0].activityCard).bossID == 2750) {
            addGameLog("此关卡需要致命一击，水次没有引爆");
            break;
          } else {
            let _0x47bc69 = PetManager.getInstance().getAllPets().map(_0xe36a36 => {
              if (_0xe36a36.skills.indexOf(32529) != -1) {
                return _0xe36a36;
              }
            }).filter(_0x3a6e34 => _0x3a6e34 !== undefined)[0];
            if (_0x47bc69 == undefined) {
              addGameLog("背包水次技能不符合");
              break;
            } else {
              await this.send_message("cs_super_boss", {
                fun: 3,
                isSuper: 0,
                getTime: [_0x47bc69.getTime, PetManager.getInstance().getAllPets()[0].getTime],
                activityCard: _0x96cb25.bossInfo[0].activityCard,
                activityType: 2,
                friendUid: 0,
                bossLevel: 0
              });
              let _0x1879c7 = await this.waitEvent("sc_battle_notify_load_resource");
              _0x1879c7.gameBody.splice(0, _0x1879c7.gameBody.length);
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
              _0x1879c7 = await this.waitEvent("sc_battle_notify_round_result");
              let _0x2accdb = JSON.parse(_0x1879c7.gameBody[_0x1879c7.gameBody.length - 1].raw);
              _0x1879c7.gameBody.splice(0, _0x1879c7.gameBody.length);
              logger("回合开始");
              await wait(300);
              while (_0x2accdb.result.result == 0) {
                addGameLog("释放技能:" + petConfig.SkillConfig.getDef(32529).name);
                await this.send_message("cs_online_player_operation", {
                  opType: 1,
                  data: {
                    skillID: 32529
                  },
                  groupId: ""
                });
                _0x1879c7 = await this.waitEvent("sc_battle_notify_round_result");
                _0x2accdb = JSON.parse(_0x1879c7.gameBody[_0x1879c7.gameBody.length - 1].raw);
                _0x1879c7.gameBody.splice(0, _0x1879c7.gameBody.length);
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
      let _0x4c4b5a = await this.send_message("cs_super_boss", {
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
        logger("获取当前boss列表" + _0x4c4b5a.bossInfo);
        if (_0x4c4b5a.bossInfo.length == 0) {
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
          logger("当前发现boss,数量为" + _0x4c4b5a.bossInfo.length);
          let _0x4ecd47 = PetManager.getInstance().getAllPets().map(_0x1c0527 => {
            if (_0x1c0527.skills.indexOf(100604) != -1) {
              return _0x1c0527;
            }
          }).filter(_0xd4de35 => _0xd4de35 !== undefined)[0];
          if (_0x4ecd47 == undefined) {
            addGameLog("背包蒂朵技能不符合");
            break;
          } else {
            let _0x1e7a92 = PetManager.getInstance().getAllPets().map(_0xb5dfdb => {
              if (_0xb5dfdb.skills.indexOf(10630) != -1 || _0xb5dfdb.skills.indexOf(100023) != -1) {
                return _0xb5dfdb;
              }
            }).filter(_0x399712 => _0x399712 !== undefined).sort((_0x48c60f, _0x18d59a) => _0x18d59a.featureId - _0x48c60f.featureId)[0];
            if (_0x1e7a92 == undefined) {} else if (xls.activityCard.getItem(_0x4c4b5a.bossInfo[0].activityCard).bossID == 2750) {
              addGameLog("此关卡需要致命一击");
              break;
            } else {
              await this.send_message("cs_super_boss", {
                fun: 3,
                isSuper: 0,
                getTime: [_0x4ecd47.getTime, _0x1e7a92.getTime, PetManager.getInstance().getAllPets()[0].getTime],
                activityCard: _0x4c4b5a.bossInfo[0].activityCard,
                activityType: 2,
                friendUid: 0,
                bossLevel: 0
              });
              let _0x1bac80 = await this.waitEvent("sc_battle_notify_load_resource");
              _0x1bac80.gameBody.splice(0, _0x1bac80.gameBody.length);
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
              _0x1bac80 = await this.waitEvent("sc_battle_notify_round_result");
              let _0x5e5a59 = JSON.parse(_0x1bac80.gameBody[_0x1bac80.gameBody.length - 1].raw);
              _0x1bac80.gameBody.splice(0, _0x1bac80.gameBody.length);
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
              _0x1bac80 = await this.waitEvent("sc_battle_notify_round_result");
              _0x5e5a59 = JSON.parse(_0x1bac80.gameBody[_0x1bac80.gameBody.length - 1].raw);
              _0x1bac80.gameBody.splice(0, _0x1bac80.gameBody.length);
              if (_0x5e5a59.result.result == 0) {
                if (_0x5e5a59.result.playerInfos[0].uid == MFC.userInfo.uid) {
                  if (_0x5e5a59.result.playerInfos[0].nextRoundOP == 3) {
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
                    if (_0x1e7a92.skills.indexOf(10630) != -1) {
                      addGameLog("释放技能:" + petConfig.SkillConfig.getDef(10630).name);
                      await this.send_message("cs_online_player_operation", {
                        opType: 1,
                        data: {
                          skillID: 10630
                        },
                        groupId: ""
                      });
                    }
                    if (_0x1e7a92.skills.indexOf(100023) != -1) {
                      addGameLog("释放技能:" + petConfig.SkillConfig.getDef(100023).name);
                      await this.send_message("cs_online_player_operation", {
                        opType: 1,
                        data: {
                          skillID: 100023
                        },
                        groupId: ""
                      });
                    }
                    _0x1bac80 = await this.waitEvent("sc_battle_notify_round_result");
                    _0x5e5a59 = JSON.parse(_0x1bac80.gameBody[_0x1bac80.gameBody.length - 1].raw);
                    _0x1bac80.gameBody.splice(0, _0x1bac80.gameBody.length);
                    await this.send_message("cs_quit_battle", {});
                  }
                } else if (_0x5e5a59.result.playerInfos[1].nextRoundOP == 3) {
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
                  if (_0x1e7a92.skills.indexOf(10630) != -1) {
                    addGameLog("释放技能:" + petConfig.SkillConfig.getDef(10630).name);
                    await this.send_message("cs_online_player_operation", {
                      opType: 1,
                      data: {
                        skillID: 10630
                      },
                      groupId: ""
                    });
                  }
                  if (_0x1e7a92.skills.indexOf(100023) != -1) {
                    addGameLog("释放技能:" + petConfig.SkillConfig.getDef(100023).name);
                    await this.send_message("cs_online_player_operation", {
                      opType: 1,
                      data: {
                        skillID: 100023
                      },
                      groupId: ""
                    });
                  }
                  _0x1bac80 = await this.waitEvent("sc_battle_notify_round_result");
                  _0x5e5a59 = JSON.parse(_0x1bac80.gameBody[_0x1bac80.gameBody.length - 1].raw);
                  _0x1bac80.gameBody.splice(0, _0x1bac80.gameBody.length);
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
    let _0x133dd4 = [];
    while (true) {
      let _0x196a10 = await this.send_message("cs_super_boss", {
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
        logger("获取当前boss列表" + _0x196a10.bossInfo);
        if (_0x196a10.bossInfo.length == 0) {
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
        for (let _0x230762 = 0; _0x230762 < _0x196a10.bossInfo.length; _0x230762++) {
          if (_0x196a10.bossInfo[_0x230762].activityCard >= 1737 && _0x196a10.bossInfo[_0x230762].activityCard <= 1791) {
            logger("当前发现boss,数量为" + _0x196a10.bossInfo.length);
            _0x133dd4[_0x230762] = _0x196a10.bossInfo[_0x230762].activityCard;
          }
        }
        if (_0x133dd4.filter(_0x5f1568 => _0x5f1568 !== undefined).length !== 0) {
          logger("低星数量" + _0x133dd4.filter(_0x2c665b => _0x2c665b !== undefined).length);
          logger("低星" + _0x133dd4.filter(_0x9521e8 => _0x9521e8 !== undefined)[0]);
          let _0x540c5f = PetManager.getInstance().getAllPets().map(_0x2a5695 => {
            if (_0x2a5695.skills.indexOf(11022) != -1) {
              return _0x2a5695;
            }
          }).filter(_0x3d85f6 => _0x3d85f6 !== undefined)[0];
          if (_0x540c5f == undefined) {
            addGameLog("背包没有绝命火焰");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x540c5f.getTime, PetManager.getInstance().getAllPets()[1].getTime],
              activityCard: _0x133dd4.filter(_0x3c0691 => _0x3c0691 !== undefined)[0],
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x13c6d0 = await this.waitEvent("sc_battle_notify_load_resource");
            _0x13c6d0.gameBody.splice(0, _0x13c6d0.gameBody.length);
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
            _0x13c6d0 = await this.waitEvent("sc_battle_notify_round_result");
            let _0x51b7a9 = JSON.parse(_0x13c6d0.gameBody[_0x13c6d0.gameBody.length - 1].raw);
            _0x13c6d0.gameBody.splice(0, _0x13c6d0.gameBody.length);
            logger("回合开始");
            await wait(300);
            if (_0x51b7a9.result.result == 0) {
              addGameLog("释放技能:" + petConfig.SkillConfig.getDef(11022).name);
              await this.send_message("cs_online_player_operation", {
                opType: 1,
                data: {
                  skillID: 11022
                },
                groupId: ""
              });
              _0x13c6d0 = await this.waitEvent("sc_battle_notify_round_result");
              _0x51b7a9 = JSON.parse(_0x13c6d0.gameBody[_0x13c6d0.gameBody.length - 1].raw);
              _0x13c6d0.gameBody.splice(0, _0x13c6d0.gameBody.length);
              if (_0x51b7a9.result.result == 1) {
                addGameLog("击败boss");
              }
              if (_0x51b7a9.result.result == 2) {
                addGameLog("逃跑");
              }
              await this.send_message("cs_quit_battle", {});
            }
          }
        } else if (_0x196a10.bossInfo.length !== 3 && _0x133dd4.filter(_0x3cf5d5 => _0x3cf5d5 !== undefined).length == 0) {
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
    let _0x4aa40d = [];
    while (true) {
      let _0x39fd56 = await this.send_message("cs_super_boss", {
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
        logger("获取当前boss列表" + _0x39fd56.bossInfo);
        if (_0x39fd56.bossInfo.length == 0) {
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
        for (let _0x2ad75b = 0; _0x2ad75b < _0x39fd56.bossInfo.length; _0x2ad75b++) {
          if (_0x39fd56.bossInfo[_0x2ad75b].activityCard !== 1807 && _0x39fd56.bossInfo[_0x2ad75b].activityCard !== 1812 && _0x39fd56.bossInfo[_0x2ad75b].activityCard !== 1813 && _0x39fd56.bossInfo[_0x2ad75b].activityCard !== 1815 && _0x39fd56.bossInfo[_0x2ad75b].activityCard !== 1817) {
            logger("当前发现boss,数量为" + _0x39fd56.bossInfo.length);
            _0x4aa40d[_0x2ad75b] = _0x39fd56.bossInfo[_0x2ad75b].activityCard;
          }
        }
        if (_0x4aa40d.filter(_0x573092 => _0x573092 !== undefined).length !== 0) {
          logger("boss数量" + _0x4aa40d.filter(_0x19d70f => _0x19d70f !== undefined).length);
          logger("boss" + _0x4aa40d.filter(_0xc1834c => _0xc1834c !== undefined)[0]);
          let _0x2ba245 = PetManager.getInstance().getAllPets().map(_0x39c5d6 => {
            if (_0x39c5d6.skills.indexOf(23506) != -1 && _0x39c5d6.skills.indexOf(23505) != -1) {
              return _0x39c5d6;
            }
          }).filter(_0x146b2b => _0x146b2b !== undefined)[0];
          if (_0x2ba245 == undefined) {
            addGameLog("背包缪斯没有苍月或皎月");
            break;
          } else {
            await this.send_message("cs_super_boss", {
              fun: 3,
              isSuper: 0,
              getTime: [_0x2ba245.getTime, PetManager.getInstance().getAllPets()[1].getTime],
              activityCard: _0x4aa40d.filter(_0x2e989b => _0x2e989b !== undefined)[0],
              activityType: 2,
              friendUid: 0,
              bossLevel: 0
            });
            let _0x5cb122 = await this.waitEvent("sc_battle_notify_load_resource");
            _0x5cb122.gameBody.splice(0, _0x5cb122.gameBody.length);
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
            _0x5cb122 = await this.waitEvent("sc_battle_notify_round_result");
            let _0x2e0b11 = JSON.parse(_0x5cb122.gameBody[_0x5cb122.gameBody.length - 1].raw);
            _0x5cb122.gameBody.splice(0, _0x5cb122.gameBody.length);
            if (_0x2e0b11.result.result == 0) {
              for (let _0x4daf85 = 0; _0x4daf85 < 3; _0x4daf85++) {
                addGameLog("释放技能:" + petConfig.SkillConfig.getDef(23505).name);
                await this.send_message("cs_online_player_operation", {
                  opType: 1,
                  data: {
                    skillID: 23505
                  },
                  groupId: ""
                });
                _0x5cb122 = await this.waitEvent("sc_battle_notify_round_result");
                _0x2e0b11 = JSON.parse(_0x5cb122.gameBody[_0x5cb122.gameBody.length - 1].raw);
                _0x5cb122.gameBody.splice(0, _0x5cb122.gameBody.length);
                if (_0x2e0b11.result.result !== 0) {
                  break;
                }
              }
              while (_0x2e0b11.result.result == 0) {
                addGameLog("释放技能:" + petConfig.SkillConfig.getDef(23506).name);
                await this.send_message("cs_online_player_operation", {
                  opType: 1,
                  data: {
                    skillID: 23506
                  },
                  groupId: ""
                });
                _0x5cb122 = await this.waitEvent("sc_battle_notify_round_result");
                _0x2e0b11 = JSON.parse(_0x5cb122.gameBody[_0x5cb122.gameBody.length - 1].raw);
                _0x5cb122.gameBody.splice(0, _0x5cb122.gameBody.length);
              }
            }
          }
        } else if (_0x39fd56.bossInfo.length !== 3 && _0x4aa40d.filter(_0x188ec7 => _0x188ec7 !== undefined).length == 0) {
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
    let _0x4e98a6 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x49b28c = [];
      var _0x52623a = SimpleAlertUi({
        height: 400,
        width: 600
      });
      _0x4e98a6.alertWin = _0x52623a;
      const _0x15191c = {
        text: "限时活动",
        x: _0x52623a.width / 2 - 32,
        y: _0x52623a.height / 16
      };
      var _0x527ca4 = createLabel(_0x15191c);
      _0x49b28c.push(_0x527ca4);
      const _0x426b16 = {
        text: "注意:",
        x: 30,
        y: _0x52623a.height / 20,
        textColor: 16776960
      };
      var _0x4cc657 = createLabel(_0x426b16);
      _0x49b28c.push(_0x4cc657);
      const _0x2317f7 = {
        text: "1.暗黑武斗场需要自己输入次数层数",
        x: 80,
        y: _0x4cc657.y + 10 + _0x4cc657.height
      };
      var _0x27115b = createLabel(_0x2317f7);
      _0x49b28c.push(_0x27115b);
      const _0x3eb3e6 = {
        text: "2.能量大作战打的困难6块钱需高功",
        x: 80,
        y: _0x27115b.y + 10 + _0x27115b.height
      };
      var _0x54046c = createLabel(_0x3eb3e6);
      _0x49b28c.push(_0x54046c);
      const _0x42a909 = {
        x: 40,
        y: _0x54046c.y + _0x54046c.height + 10,
        selected: true,
        storageKey: "bugNewYear"
      };
      let _0x3c756f = createRadio(_0x42a909);
      _0x49b28c.push(_0x3c756f);
      const _0x1d8b5c = {
        text: "暗黑武斗场",
        x: _0x3c756f.width + _0x3c756f.x + 10,
        y: _0x54046c.y + _0x54046c.height + 10
      };
      var _0x451f60 = createLabel(_0x1d8b5c);
      _0x49b28c.push(_0x451f60);
      const _0x206856 = {
        x: _0x451f60.x + _0x451f60.width + 10,
        y: _0x54046c.y + _0x54046c.height + 10,
        selected: true,
        storageKey: "Raymars"
      };
      let _0x551e28 = createRadio(_0x206856);
      _0x49b28c.push(_0x551e28);
      const _0x482c8f = {
        text: "能量大作战",
        x: _0x551e28.width + _0x551e28.x + 10,
        y: _0x54046c.y + _0x54046c.height + 10
      };
      var _0x5aed63 = createLabel(_0x482c8f);
      _0x49b28c.push(_0x5aed63);
      const _0x1507dc = {
        x: 40,
        y: _0x54046c.y + _0x54046c.height + 60,
        selected: false,
        storageKey: "Maskfanpai"
      };
      let _0x7d7294 = createRadio(_0x1507dc);
      _0x49b28c.push(_0x7d7294);
      const _0x234ecc = {
        text: "豆芽依依捕抓",
        x: _0x3c756f.width + _0x3c756f.x + 10,
        y: _0x54046c.y + _0x54046c.height + 60
      };
      var _0x50cae = createLabel(_0x234ecc);
      _0x49b28c.push(_0x50cae);
      const _0x12f1fb = {
        x: _0x50cae.x + _0x50cae.width + 10,
        y: _0x54046c.y + _0x54046c.height + 60,
        selected: false,
        storageKey: "xiayi"
      };
      let _0x40ef62 = createRadio(_0x12f1fb);
      _0x49b28c.push(_0x40ef62);
      const _0x496e83 = {
        text: "赛罗奥特曼",
        x: _0x40ef62.width + _0x40ef62.x + 10,
        y: _0x54046c.y + _0x54046c.height + 60
      };
      var _0x34187b = createLabel(_0x496e83);
      _0x49b28c.push(_0x34187b);
      const _0x3c3f8a = {
        x: 40,
        y: _0x54046c.y + _0x54046c.height + 100,
        selected: false,
        storageKey: "keluosivistor"
      };
      let _0xf5d233 = createRadio(_0x3c3f8a);
      _0x49b28c.push(_0xf5d233);
      const _0x10d79c = {
        text: "2048小游戏",
        x: _0x3c756f.width + _0x3c756f.x + 10,
        y: _0x54046c.y + _0x54046c.height + 100
      };
      var _0x457978 = createLabel(_0x10d79c);
      _0x49b28c.push(_0x457978);
      const _0x57a04e = {
        x: _0x50cae.x + _0x50cae.width + 10,
        y: _0x54046c.y + _0x54046c.height + 100,
        selected: false,
        storageKey: "guiwang1"
      };
      let _0x51f46a = createRadio(_0x57a04e);
      _0x49b28c.push(_0x51f46a);
      const _0x3c1237 = {
        text: "豆芽依依3次",
        x: _0x40ef62.width + _0x40ef62.x + 10,
        y: _0x54046c.y + _0x54046c.height + 100
      };
      var _0x37414a = createLabel(_0x3c1237);
      _0x49b28c.push(_0x37414a);
      const _0x159f9b = {
        x: _0x37414a.x + _0x37414a.width + 10,
        y: _0x54046c.y + _0x54046c.height + 100,
        selected: false,
        storageKey: "guiwang1"
      };
      let _0x512580 = createRadio(_0x159f9b);
      _0x49b28c.push(_0x512580);
      const _0x352a70 = {
        text: "萨菲罗",
        x: _0x512580.width + _0x512580.x + 10,
        y: _0x54046c.y + _0x54046c.height + 100
      };
      var _0x333de6 = createLabel(_0x352a70);
      _0x49b28c.push(_0x333de6);
      const _0x2a3619 = {
        x: 40,
        y: _0x54046c.y + _0x54046c.height + 140,
        selected: false,
        storageKey: "guwang"
      };
      let _0x8c42cf = createRadio(_0x2a3619);
      _0x49b28c.push(_0x8c42cf);
      const _0x1d6de9 = {
        text: "古王特调",
        x: _0x3c756f.width + _0x3c756f.x + 10,
        y: _0x54046c.y + _0x54046c.height + 140
      };
      var _0x2a37fd = createLabel(_0x1d6de9);
      _0x49b28c.push(_0x2a37fd);
      const _0x514feb = {
        x: _0x2a37fd.x + _0x2a37fd.width + 10,
        y: _0x54046c.y + _0x54046c.height + 140,
        selected: false,
        storageKey: "oceanGame"
      };
      let _0x2044b4 = createRadio(_0x514feb);
      _0x49b28c.push(_0x2044b4);
      const _0x538c43 = {
        text: "滑雪",
        x: _0x2044b4.width + _0x2044b4.x + 10,
        y: _0x54046c.y + _0x54046c.height + 140
      };
      var _0x53770a = createLabel(_0x538c43);
      _0x49b28c.push(_0x53770a);
      const _0x28759e = {
        x: _0x53770a.x + _0x53770a.width + 10,
        y: _0x54046c.y + _0x54046c.height + 140,
        selected: false,
        storageKey: "wsjgame"
      };
      let _0x5c84d0 = createRadio(_0x28759e);
      _0x49b28c.push(_0x5c84d0);
      const _0x23c7df = {
        text: "万圣节活动",
        x: _0x5c84d0.width + _0x5c84d0.x + 10,
        y: _0x54046c.y + _0x54046c.height + 140
      };
      var _0x3a510f = createLabel(_0x23c7df);
      _0x49b28c.push(_0x3a510f);
      const _0x24b8f9 = {
        x: _0x3a510f.x + _0x3a510f.width + 10,
        y: _0x54046c.y + _0x54046c.height + 140,
        selected: false,
        storageKey: "zetgame"
      };
      let _0x3c77e3 = createRadio(_0x24b8f9);
      _0x49b28c.push(_0x3c77e3);
      const _0x3c5247 = {
        text: "灾厄塔",
        x: _0x3c77e3.width + _0x3c77e3.x + 10,
        y: _0x54046c.y + _0x54046c.height + 140
      };
      var _0x426ac8 = createLabel(_0x3c5247);
      _0x49b28c.push(_0x426ac8);
      _0x4e98a6.addAllUis(_0x49b28c);
      _0x52623a.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x4e98a6.stop();
      }, function () {
        localStorage.setItem("bugNewYear", true);
        localStorage.setItem("Raymars", false);
        localStorage.setItem("Maskfanpai", false);
        localStorage.setItem("xiayi", false);
        localStorage.setItem("bugNewYear", _0x3c756f.selected);
        localStorage.setItem("Raymars", _0x551e28.selected);
        localStorage.setItem("Maskfanpai", _0x7d7294.selected);
        localStorage.setItem("xiayi", _0x40ef62.selected);
        localStorage.setItem("keluosivistor", _0xf5d233.selected);
        localStorage.setItem("guiwangjie", _0x51f46a.selected);
        localStorage.setItem("conglin", _0x512580.selected);
        localStorage.setItem("guwang", _0x8c42cf.selected);
        localStorage.setItem("oceanGame", _0x2044b4.selected);
        localStorage.setItem("wsjgame", _0x5c84d0.selected);
        localStorage.setItem("zetgame", _0x3c77e3.selected);
        if (_0x3c756f.selected) {
          _0x4e98a6.task[1] = 1;
        }
        if (_0x551e28.selected) {
          _0x4e98a6.task[0] = 1;
        }
        if (_0x7d7294.selected) {
          _0x4e98a6.task[2] = 1;
        }
        if (_0x40ef62.selected) {
          _0x4e98a6.task[3] = 1;
        }
        if (_0xf5d233.selected) {
          _0x4e98a6.task[4] = 1;
        }
        if (_0x51f46a.selected) {
          _0x4e98a6.task[5] = 1;
        }
        if (_0x512580.selected) {
          _0x4e98a6.task[6] = 1;
        }
        if (_0x8c42cf.selected) {
          _0x4e98a6.task[7] = 1;
        }
        if (_0x2044b4.selected) {
          _0x4e98a6.task[8] = 1;
        }
        if (_0x5c84d0.selected) {
          _0x4e98a6.task[9] = 1;
        }
        if (_0x3c77e3.selected) {
          _0x4e98a6.task[10] = 1;
        }
        _0x4e98a6.prcessBody();
      }], null);
      _0x52623a.showAlert();
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
        if (deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= "2024_12_01 5:00:00") {
          addGameLog("开始运行骨王特调");
          await this.guwang();
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
    } catch (_0x30ce96) {
      logger(_0x30ce96);
    }
  }
  async guwang() {
    if (!xls.delivery.hasLoaded) {
      xls.delivery.load(() => {});
    }
    await wait(200);
    while (Math.min(mongoAttr.getActivityAttrKuwangAttr().dailyRewardTime, 10) < 10) {
      if (timer.__percentage !== 0.25) {
        timer.change(1 / 4);
      }
      await this.send_message("cs_kuwang_activity", {
        op: 6,
        id: 0,
        steps: []
      });
      if (xls.delivery.getItem(mongoAttr.getActivityAttrKuwangAttr().orderId[0]).drop !== 17120) {
        await this.send_message("cs_kuwang_activity", {
          op: 5,
          id: 1,
          steps: []
        });
        await wait(1000);
      } else {
        if (xls.delivery.getItem(mongoAttr.getActivityAttrKuwangAttr().orderId[0]).capacity == 4) {
          if (xls.delivery.getItem(mongoAttr.getActivityAttrKuwangAttr().orderId[0]).capacity == 4 && mongoAttr.getActivityAttrKuwangAttr().orderId[0] == 1) {
            await this.send_message("cs_kuwang_activity", {
              op: 1,
              id: 1,
              steps: [{
                type: 1,
                id: 3
              }, {
                type: 2,
                id: 2
              }, {
                type: 2,
                id: 2
              }, {
                type: 2,
                id: 2
              }, {
                type: 2,
                id: 2
              }, {
                type: 4,
                id: 6
              }]
            });
          } else {
            await this.send_message("cs_kuwang_activity", {
              op: 1,
              id: 1,
              steps: [{
                type: 1,
                id: 3
              }, {
                type: 2,
                id: 1
              }, {
                type: 2,
                id: 2
              }, {
                type: 2,
                id: 3
              }, {
                type: 2,
                id: 4
              }, {
                type: 4,
                id: 1
              }]
            });
          }
        }
        if (xls.delivery.getItem(mongoAttr.getActivityAttrKuwangAttr().orderId[0]).capacity == 3) {
          await this.send_message("cs_kuwang_activity", {
            op: 1,
            id: 1,
            steps: [{
              type: 1,
              id: 2
            }, {
              type: 2,
              id: 1
            }, {
              type: 2,
              id: 3
            }, {
              type: 2,
              id: 2
            }, {
              type: 4,
              id: 1
            }]
          });
        }
        if (xls.delivery.getItem(mongoAttr.getActivityAttrKuwangAttr().orderId[0]).capacity == 2) {
          await this.send_message("cs_kuwang_activity", {
            op: 1,
            id: 1,
            steps: [{
              type: 1,
              id: 2
            }, {
              type: 2,
              id: 1
            }, {
              type: 2,
              id: 3
            }, {
              type: 4,
              id: 1
            }]
          });
        }
        addGameLog("刷新任务");
        await this.send_message("cs_kuwang_activity", {
          op: 5,
          id: 1,
          steps: []
        });
        await wait(1000);
      }
    }
    let _0x1385ca = mongoAttr.getActivityAttrKuwangAttr();
    for (let _0x4b95ca = 0; _0x4b95ca < _0x1385ca.guests.length; _0x4b95ca++) {
      if (_0x1385ca.drinksReward.indexOf(_0x1385ca.guests[_0x4b95ca].guestId) == -1) {
        const _0x40cd6e = {
          op: 3,
          id: _0x1385ca.guests[_0x4b95ca].guestId,
          steps: []
        };
        await this.send_message("cs_kuwang_activity", _0x40cd6e);
      }
    }
    for (let _0x1b13b2 = 0; _0x1b13b2 < _0x1385ca.guests.length; _0x1b13b2++) {
      if (_0x1385ca.guests[_0x1b13b2].rewardFlag !== 1) {
        const _0xed53c8 = {
          op: 4,
          id: _0x1385ca.guests[_0x1b13b2].guestId,
          steps: []
        };
        await this.send_message("cs_kuwang_activity", _0xed53c8);
      }
    }
    let _0x500d67 = xls.activityTaskReset.getItems().filter(function (_0x375af2) {
      return _0x375af2.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x375af2.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x375af2.name.indexOf("古王列奥特调每日任务") !== -1;
    });
    for (let _0x715c17 = 0; _0x715c17 < _0x500d67.length; _0x715c17++) {
      if (NewTaskUtils.getTaskResetStateByIndex(_0x500d67[_0x715c17]) == 1) {
        const _0x544e20 = {
          carnivalId: _0x500d67[_0x715c17].id,
          recvIndex: 0
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x544e20);
        addGameLog("领取" + _0x500d67[_0x715c17].name + _0x500d67[_0x715c17].task);
      } else if (NewTaskUtils.getTaskResetStateByIndex(_0x500d67[_0x715c17]) == 0) {
        addGameLog(_0x500d67[_0x715c17].name + _0x500d67[_0x715c17].task + "未完成");
      }
    }
    for (let _0x2f894d = 0; _0x2f894d < pveUtils.GetNewActivityCardDataByEventId(158)[0].infos.length; _0x2f894d++) {
      if (pveUtils.GetNewActivityCardDataByEventId(158)[0].infos[_0x2f894d].firstWin > 0) {
        if (pveUtils.GetNewActivityCardDataByEventId(158)[0].infos[_0x2f894d].dailyWin > 0) {
          addGameLog("已扫荡" + xls.activityCard.getItem(pveUtils.GetNewActivityCardDataByEventId(158)[0].infos[_0x2f894d].cardId).levelID);
        } else if (MFC.userInfo.curEnergy > 9) {
          await this.send_message("cs_pve_fight_start", {
            type: 3,
            cardId: [pveUtils.GetNewActivityCardDataByEventId(158)[0].infos[_0x2f894d].cardId],
            petList: MFC.userInfo.defaultTeam,
            times: 1,
            train: 0
          });
          addGameLog("扫荡" + xls.activityCard.getItem(pveUtils.GetNewActivityCardDataByEventId(158)[0].infos[_0x2f894d].cardId).levelID);
        } else {
          addGameLog("电池不足");
        }
      }
    }
    addGameLog("古王特调完成");
    timer.change(1);
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
    let _0xfcd85e = [];
    let _0x22fe1f = ExchangeUtils.getCurrentExchangeNum(xls.activityNewExchange.getItem(100048));
    let _0x1ab699 = 0;
    let _0x34403b = MFC.serverTimer.getServerTimeFlagByServerDate(new Date(xls.activityTimeLimit.getItem(326).startTime.replace(/-/g, "/").replace(/_/g, "/")));
    let _0x15a075 = MFC.serverTimer.getTime();
    _0x1ab699 = Math.floor((_0x15a075 - _0x34403b) / 86400000) + 1;
    for (let _0x5171ed = _0x22fe1f; _0x5171ed < _0x1ab699 * 5; _0x5171ed++) {
      for (let _0x5ced7a = 0; _0x5ced7a < xls.activityNewExchange.getItems().filter(function (_0x4f44d6) {
        return _0x4f44d6.type == 1005;
      }).length; _0x5ced7a++) {
        if (xls.activityNewExchange.getItems().filter(function (_0x37f5e7) {
          return _0x37f5e7.type == 1005;
        })[_0x5ced7a].bestDrop == _0x5171ed + 1) {
          _0xfcd85e.push(xls.activityNewExchange.getItems().filter(function (_0xd484e9) {
            return _0xd484e9.type == 1005;
          })[_0x5ced7a].id);
        }
      }
      _0xfcd85e.push(100048);
      addGameLog("滑雪第" + (_0x5171ed + 1) + "关");
      if (_0xfcd85e.length > 1) {
        const _0x5782df = {
          subDropIdList: [],
          groupIds: _0xfcd85e
        };
        await this.send_message("cs_new_exchange_activity_reward", _0x5782df);
      } else {
        await this.send_message("cs_new_exchange_activity_reward", {
          id: 100048,
          coeff: 1,
          selectIndex: 0,
          subDropIdList: [],
          groupIds: []
        });
      }
      _0xfcd85e = [];
    }
    addGameLog("滑雪结束");
    this.stop();
  }
  async patchLeiyi() {
    let _0x5ebe35 = await this.dispatchSelfPet("雷伊", [10825]);
    if (!_0x5ebe35) {
      _0x5ebe35 = await this.dispatchSelfPet("雷伊", [100484]);
      if (!_0x5ebe35) {
        addGameLog("背包未携带雷伊+雷神天明闪");
        this.stop();
        return false;
      }
      _0x5ebe35.skillId = 100484;
    } else {
      _0x5ebe35.skillId = 10825;
    }
    this.myxx = _0x5ebe35;
    return true;
  }
  async oceanGame() {
    addGameLog("口腔清洁");
    await this.send_message("cs_ocean_star_activity", {
      type: 2,
      score: 15
    });
    let _0x10d515 = await this.patchLeiyi();
    if (!_0x10d515) {
      return false;
    }
    let _0x20b16f = PetManager.getInstance().getAllPets()[0];
    await this.send_message("cs_new_change_petArray", {
      op: 1,
      arrayType: "defaultTeam",
      subArray: 0,
      idx: 1,
      teamUp: 0,
      fightType: 0,
      getTimeList: [this.myxx.getTime, _0x20b16f.getTime]
    });
    while (1) {
      let _0x4f22c3 = await this.send_message("cs_get_mapBoss_data", {});
      let _0x6425fc = _0x4f22c3.reward["363"];
      if (_0x6425fc != 3) {
        while (1) {
          await this.send_message("cs_pve_activity_battle", {
            levelId: 363,
            battleType: 3
          });
          let _0x546229 = await this.initBattle();
          while (_0x546229.result.result == 0) {
            if (_0x546229.result.playerInfos[0].nextRoundOP == 3) {
              addGameLog("雷伊被击败退出!");
              await this.send_message("cs_quit_battle", {});
              break;
            } else {
              _0x546229 = await this.useSkill(this.myxx.skillId);
            }
          }
          if (_0x546229.result.result == 1) {
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
    let _0x3919a7 = await this.patchLeiyi();
    if (!_0x3919a7) {
      return false;
    }
    await wait(700);
    let _0xd03749 = PetManager.getInstance().getAllPets()[0];
    addGameLog("开始对战钢牙鲨VS魔牙鲨");
    while (1) {
      let _0x3d586a = await this.send_message("sc_pve_fight_start", {
        type: 1,
        cardId: [this.gangId],
        petList: [this.myxx.getTime, _0xd03749.getTime],
        times: 0,
        train: 0
      });
      if (JSON.stringify(_0x3d586a).includes("次数不足")) {
        addGameLog("钢牙鲨VS魔牙鲨 已经完成!");
        MFC.alert.show("钢牙鲨VS魔牙鲨 已经完成!");
        this.stop();
      }
      let _0xf2e17c = await this.initBattle();
      while (_0xf2e17c.result.result == 0) {
        if (_0xf2e17c.result.playerInfos[0].nextRoundOP == 3) {
          addGameLog("雷伊被击败退出!");
          await this.send_message("cs_quit_battle", {});
          break;
        } else {
          _0xf2e17c = await this.useSkill(this.myxx.skillId);
        }
      }
    }
  }
  async wsjui() {
    super.start();
    let _0x295a46 = this;
    MFC.alert.show("确定进行万圣节吗需要瞬杀光闪击", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x350c7a) {
      _0x295a46.stop();
    }, function (_0x1204a6) {
      _0x295a46.wsjhd();
    }]);
  }
  async wsjhd() {
    let _0x985266 = getGoalPets([{
      skills: [10630],
      features: [5, 6, 7, 8]
    }, {
      skills: [100023],
      features: [5, 6, 7, 8]
    }]);
    let _0x12a336 = getGoalPets([{
      skills: [32529]
    }]);
    let _0x173e4c = await this.send_message("cs_pve_fight_start", {
      type: 2,
      cardId: [1597, 1598, 1599, 1600, 1601],
      petList: [],
      times: 0,
      train: 0
    });
    for (let _0x13525c = 0; _0x13525c < _0x173e4c.subIdNumber.length; _0x13525c++) {
      while (_0x173e4c.subIdNumber[_0x13525c].winNums == 0) {
        if (_0x13525c > 3 || _0x13525c < 2) {
          if (!_0x12a336) {
            if (!_0x985266) {
              addGameLog("背包中没有水次以及瞬杀");
              break;
            } else {
              let _0x3f135b;
              if (_0x985266.skills.indexOf(10630) !== -1) {
                _0x3f135b = 10630;
              } else {
                _0x3f135b = 100023;
              }
              await this.send_message("cs_pve_fight_start", {
                type: 1,
                cardId: [_0x173e4c.subIdNumber[_0x13525c].subId],
                petList: [_0x985266.getTime, PetManager.getInstance().getAllPets()[0].getTime],
                times: 0,
                train: 0
              });
              await this.initBattle();
              let _0xa09581 = await this.useSkill(_0x3f135b);
              while (_0xa09581.result.result === 0) {
                let _0x447352 = _0xa09581.result.playerInfos.find(_0xbc3392 => _0xbc3392.uid === MFC.userInfo.uid).nextRoundOP;
                if (_0x447352 !== 1) {
                  addGameLog("首发被击败");
                  break;
                }
                addGameLog("未击败，继续攻击");
                _0xa09581 = await this.useSkill(_0x3f135b);
              }
              _0x173e4c = await this.send_message("cs_pve_fight_start", {
                type: 2,
                cardId: [1597, 1598, 1599, 1600, 1601],
                petList: [],
                times: 0,
                train: 0
              });
            }
          } else {
            let _0x2a295f = 32529;
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [_0x173e4c.subIdNumber[_0x13525c].subId],
              petList: [_0x12a336.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              times: 0,
              train: 0
            });
            await this.initBattle();
            let _0x4026cd = await this.useSkill(_0x2a295f);
            while (_0x4026cd.result.result === 0) {
              let _0x1e5ab5 = _0x4026cd.result.playerInfos.find(_0x230017 => _0x230017.uid === MFC.userInfo.uid).nextRoundOP;
              if (_0x1e5ab5 !== 1) {
                addGameLog("首发被击败");
                break;
              }
              addGameLog("未击败，继续攻击");
              _0x4026cd = await this.useSkill(_0x2a295f);
            }
            _0x173e4c = await this.send_message("cs_pve_fight_start", {
              type: 2,
              cardId: [1597, 1598, 1599, 1600, 1601],
              petList: [],
              times: 0,
              train: 0
            });
          }
        } else if (!_0x985266) {
          addGameLog("背包中没有瞬杀先制相关精灵");
          break;
        } else {
          let _0x353f18;
          if (_0x985266.skills.indexOf(10630) !== -1) {
            _0x353f18 = 10630;
          } else {
            _0x353f18 = 100023;
          }
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [_0x173e4c.subIdNumber[_0x13525c].subId],
            petList: [_0x985266.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0,
            train: 0
          });
          await this.initBattle();
          let _0x52e435 = await this.useSkill(_0x353f18);
          while (_0x52e435.result.result === 0) {
            let _0x5b554f = _0x52e435.result.playerInfos.find(_0x2a31a9 => _0x2a31a9.uid === MFC.userInfo.uid).nextRoundOP;
            if (_0x5b554f !== 1) {
              addGameLog("首发被击败");
              break;
            }
            addGameLog("未击败，继续攻击");
            _0x52e435 = await this.useSkill(_0x353f18);
          }
          _0x173e4c = await this.send_message("cs_pve_fight_start", {
            type: 2,
            cardId: [1597, 1598, 1599, 1600, 1601],
            petList: [],
            times: 0,
            train: 0
          });
        }
      }
    }
    let _0xde2df9 = await this.send_message("cs_peach_banquet", {
      type: 1
    });
    for (var _0x2d2b03 = 0; _0x2d2b03 < _0xde2df9.map.length; _0x2d2b03++) {
      var _0x154aac = _0xde2df9.map[_0x2d2b03];
      for (var _0x3836dc = 0; _0x3836dc < _0x154aac.length; _0x3836dc++) {
        if (_0x154aac[_0x3836dc] === 1) {
          var _0x4a7f6a = _0x2d2b03 + "_" + _0x3836dc;
          await this.send_message("cs_peach_banquet", {
            type: 2,
            index: _0x4a7f6a.toString()
          });
        }
      }
    }
    addGameLog("翻牌结束");
    let _0x5bf4b1 = xls.activityTaskReset.getItems().filter(function (_0x40e59d) {
      return _0x40e59d.activityIdentity == 393;
    });
    for (let _0x814e18 = 0; _0x814e18 < _0x5bf4b1.length; _0x814e18++) {
      if (TaskUtils.GetRestTaskState(_0x5bf4b1[_0x814e18]) == 1) {
        const _0x14a895 = {
          carnivalId: _0x5bf4b1[_0x814e18].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x14a895);
      } else if (TaskUtils.GetRestTaskState(_0x5bf4b1[_0x814e18]) == 0) {
        addGameLog(_0x5bf4b1[_0x814e18].task + "未完成");
      }
    }
    addGameLog("万圣节活动结束");
    this.stop();
  }
  async zetui() {
    super.start();
    let _0x4cb345 = this;
    MFC.alert.show("确定进行灾厄塔吗(需要绝命火焰,雷伊需要雷怒+充电符文+闪电斗气符文+电光大招)\n还需一只瞬杀精灵", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0xa86f0c) {
      _0x4cb345.stop();
    }, function (_0x52cbe8) {
      _0x4cb345.zet();
    }]);
  }
  async zet() {
    let _0x1046d2 = xls.activityTaskReset.getItems().filter(function (_0x278397) {
      return _0x278397.activityIdentity == 164;
    });
    for (let _0x3377b9 = 0; _0x3377b9 < _0x1046d2.length; _0x3377b9++) {
      if (TaskUtils.GetRestTaskState(_0x1046d2[_0x3377b9]) == 1) {
        const _0x3cff05 = {
          carnivalId: _0x1046d2[_0x3377b9].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x3cff05);
      } else if (TaskUtils.GetRestTaskState(_0x1046d2[_0x3377b9]) == 0) {
        addGameLog(_0x1046d2[_0x3377b9].task + "未完成");
      }
    }
    let _0x10c38d = 0;
    let _0x10f02e = 1;
    let _0x57b242 = getGoalPets([{
      skills: [11022, 10034]
    }, {
      skills: [11022, 100009]
    }]);
    let _0x5c1a7f = getGoalPets([{
      skills: [10630, 11783],
      features: [5, 6, 7, 8]
    }, {
      skills: [100023, 11783],
      features: [5, 6, 7, 8]
    }]);
    let _0x533446 = getGoalPets([{
      skills: [100531, 23245, 100483, 15894]
    }]);
    while (1) {
      if (20 - MFC.attr.getAttr(MFC.attrType.dailyChallengeTimes) > 0) {
        if (MFC.attr.getAttr(MFC.attrType.foreverDisasterTowerVitalityValue) >= 10) {
          if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), _0x10f02e * 10) == 0) {
            if (_0x10c38d < 2) {
              if (!_0x57b242) {
                addGameLog("精灵背包中没有魔焰猩猩+绝命火焰，请确保有其条件，再来启动脚本");
                break;
              } else {
                await this.send_message("cs_fight_boss_start_battle", {
                  battleType: 36,
                  getTimeList: [_0x57b242.getTime, PetManager.getInstance().getAllPets().filter(function (_0x2c37c8) {
                    return _0x2c37c8.getTime !== _0x57b242.getTime;
                  })[0].getTime],
                  subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9)
                });
                let _0x47599c = 11022;
                await this.initBattle();
                let _0x3249f4 = await this.useSkill(_0x47599c);
                while (_0x3249f4.result.result === 0) {
                  let _0x2109d6 = _0x3249f4.result.playerInfos.find(_0x2e327f => _0x2e327f.uid === MFC.userInfo.uid).nextRoundOP;
                  if (_0x2109d6 !== 1) {
                    addGameLog("首发被击败");
                    break;
                  }
                  addGameLog("未击败，继续攻击");
                  _0x3249f4 = await this.useSkill(_0x47599c);
                }
                if (_0x3249f4.result.result === 1) {
                  _0x10f02e++;
                }
              }
            } else if (_0x10c38d == 2) {
              if (!_0x533446) {
                addGameLog("背包中没有雷伊或者没带雷怒+充电符文+闪电斗气符文+电光大招");
                break;
              } else {
                let _0x546829 = [23245, 100531, 100483, 15894];
                let _0x41eb80 = 1;
                let _0xb35042 = 1;
                await this.send_message("cs_fight_boss_start_battle", {
                  battleType: 36,
                  getTimeList: [_0x533446.getTime],
                  subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9)
                });
                await this.initBattle();
                let _0x4fb87 = await this.useSkill(_0x546829[0]);
                while (_0x4fb87.result.result === 0) {
                  addGameLog("未击败，继续攻击");
                  if (_0xb35042 < 3) {
                    _0x4fb87 = await this.useSkill(_0x546829[_0x41eb80]);
                    _0x41eb80++;
                  } else if (getSeerItemNum(2001) > 1) {
                    addGameLog("回pp");
                    _0x4fb87 = await this.useItem(2001);
                    _0xb35042 = 1;
                    _0x41eb80 = 0;
                  } else if (getSeerItemNum(2002) > 1) {
                    addGameLog("回pp");
                    _0x4fb87 = await this.useItem(2002);
                    _0xb35042 = 1;
                    _0x41eb80 = 0;
                  } else if (getSeerItemNum(2003) > 1) {
                    addGameLog("回pp");
                    _0x4fb87 = await this.useItem(2003);
                    _0xb35042 = 1;
                    _0x41eb80 = 0;
                  } else {
                    addGameLog("pp不足");
                    await this.send_message("cs_quit_battle", {});
                    break;
                  }
                  if (_0x41eb80 > 3) {
                    _0x41eb80 = 0;
                    _0xb35042++;
                  }
                }
              }
            } else if (_0x10c38d > 2) {
              if (BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9) == 267) {
                if (!_0x533446) {
                  addGameLog("背包中没有雷伊或者没带雷怒+充电符文+闪电斗气符文+电光大招");
                  break;
                } else {
                  let _0x515624 = [23245, 100531, 100483, 15894];
                  let _0x526549 = 1;
                  let _0x5832d2 = 1;
                  await this.send_message("cs_fight_boss_start_battle", {
                    battleType: 36,
                    getTimeList: [_0x533446.getTime],
                    subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9)
                  });
                  await this.initBattle();
                  let _0x3fa847 = await this.useSkill(_0x515624[0]);
                  while (_0x3fa847.result.result === 0) {
                    addGameLog("未击败，继续攻击");
                    if (_0x5832d2 < 3) {
                      _0x3fa847 = await this.useSkill(_0x515624[_0x526549]);
                      _0x526549++;
                    } else if (getSeerItemNum(2001) > 1) {
                      addGameLog("回pp");
                      _0x3fa847 = await this.useItem(2001);
                      _0x5832d2 = 1;
                      _0x526549 = 0;
                    } else if (getSeerItemNum(2002) > 1) {
                      addGameLog("回pp");
                      _0x3fa847 = await this.useItem(2002);
                      _0x5832d2 = 1;
                      _0x526549 = 0;
                    } else if (getSeerItemNum(2003) > 1) {
                      addGameLog("回pp");
                      _0x3fa847 = await this.useItem(2003);
                      _0x5832d2 = 1;
                      _0x526549 = 0;
                    } else {
                      addGameLog("pp不足");
                      await this.send_message("cs_quit_battle", {});
                      break;
                    }
                    if (_0x526549 > 3) {
                      _0x526549 = 0;
                      _0x5832d2++;
                    }
                  }
                }
              } else if (BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9) == 263) {
                if (!_0x57b242) {
                  addGameLog("背包中没有魔焰猩猩绝命+火焰漩涡");
                  break;
                } else if (!_0x5c1a7f) {
                  addGameLog("背包中没有瞬杀蒙多或者没带光烈普通大招");
                  break;
                } else {
                  let _0x25baad;
                  let _0x3c4f19;
                  if (_0x5c1a7f.skills.indexOf(10630) !== -1) {
                    _0x25baad = 10630;
                  } else {
                    _0x25baad = 100023;
                  }
                  if (_0x57b242.skills.indexOf(10034) !== -1) {
                    _0x3c4f19 = 10034;
                  } else {
                    _0x3c4f19 = 100009;
                  }
                  await this.send_message("cs_fight_boss_start_battle", {
                    battleType: 36,
                    getTimeList: [_0x57b242.getTime, _0x5c1a7f.getTime],
                    subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9)
                  });
                  await this.initBattle();
                  let _0x6b4c22 = await this.useSkill(_0x3c4f19);
                  let _0x3c9658 = 1;
                  while (_0x6b4c22.result.result === 0) {
                    if (_0x6b4c22.result.playerInfos[0].nextRoundOP == 3) {
                      _0x3c9658 = 0;
                      await this.send_message("cs_online_player_operation", {
                        opType: 2,
                        data: {
                          petIndex: 1
                        },
                        groupId: ""
                      });
                    }
                    if (_0x3c9658 == 1) {
                      addGameLog("未击败，继续攻击");
                      _0x6b4c22 = await this.useSkill(_0x3c4f19);
                    } else if (_0x3c9658 == 0) {
                      _0x6b4c22 = await this.useSkill(_0x25baad);
                    }
                  }
                }
              } else if (BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9) == 278) {
                if (!_0x5c1a7f) {
                  addGameLog("背包中没有瞬杀先制相关精灵");
                  break;
                } else {
                  let _0x57455d = 11783;
                  await this.send_message("cs_fight_boss_start_battle", {
                    battleType: 36,
                    getTimeList: [_0x5c1a7f.getTime],
                    subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9)
                  });
                  await this.initBattle();
                  let _0x4dc490 = await this.useSkill(_0x57455d);
                  while (_0x4dc490.result.result === 0) {
                    addGameLog("未击败，继续攻击");
                    _0x4dc490 = await this.useSkill(_0x57455d);
                  }
                }
              } else if (!_0x5c1a7f) {
                addGameLog("背包中没有瞬杀先制相关精灵");
                break;
              } else {
                let _0xa76626;
                if (_0x5c1a7f.skills.indexOf(10630) !== -1) {
                  _0xa76626 = 10630;
                } else {
                  _0xa76626 = 100023;
                }
                await this.send_message("cs_fight_boss_start_battle", {
                  battleType: 36,
                  getTimeList: [_0x5c1a7f.getTime],
                  subId: BitUtils.getBitsValue(MFC.attr.getAttr(MFC.attrType.dailyChallengeCardRecordstart + _0x10c38d), (_0x10f02e - 1) * 10, (_0x10f02e - 1) * 10 + 9)
                });
                await this.initBattle();
                let _0x575b12 = await this.useSkill(_0xa76626);
                while (_0x575b12.result.result === 0) {
                  addGameLog("未击败，继续攻击");
                  _0x575b12 = await this.useSkill(_0xa76626);
                }
              }
            } else if (_0x10c38d > 4) {
              break;
            }
          } else {
            _0x10f02e++;
            if (_0x10f02e > 3) {
              _0x10c38d++;
              _0x10f02e = 1;
            }
            if (_0x10c38d > 4) {
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
    _0x1046d2 = xls.activityTaskReset.getItems().filter(function (_0x108d41) {
      return _0x108d41.activityIdentity == 161;
    });
    for (let _0x451321 = 0; _0x451321 < _0x1046d2.length; _0x451321++) {
      if (TaskUtils.GetRestTaskState(_0x1046d2[_0x451321]) == 1) {
        const _0x3de20d = {
          carnivalId: _0x1046d2[_0x451321].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x3de20d);
      } else if (TaskUtils.GetRestTaskState(_0x1046d2[_0x451321]) == 0) {
        addGameLog(_0x1046d2[_0x451321].task + "未完成");
      }
    }
    _0x1046d2 = xls.activityTaskReset.getItems().filter(function (_0x83e974) {
      return _0x83e974.activityIdentity == 162;
    });
    for (let _0x19fdce = 0; _0x19fdce < _0x1046d2.length; _0x19fdce++) {
      if (TaskUtils.GetRestTaskState(_0x1046d2[_0x19fdce]) == 1) {
        const _0x450bd6 = {
          carnivalId: _0x1046d2[_0x19fdce].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x450bd6);
      } else if (TaskUtils.GetRestTaskState(_0x1046d2[_0x19fdce]) == 0) {
        addGameLog(_0x1046d2[_0x19fdce].task + "未完成");
      }
    }
    if (!_0x57b242) {
      addGameLog("背包没有绝命+火焰漩涡请更换");
    }
    if (!_0x5c1a7f) {
      addGameLog("背包没有瞬杀光闪击+普通大招光烈突击");
    }
    if (!_0x533446) {
      addGameLog("背包中没有雷伊或者没带雷怒+充电符文+闪电斗气符文+电光大招");
    }
    addGameLog("灾厄塔结束");
    this.stop();
  }
  async gangui() {
    super.start();
    let _0x26d6d1 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x97073a = [];
      var _0x25350a = SimpleAlertUi({
        height: 350,
        width: 400
      });
      _0x26d6d1.alertWin = _0x25350a;
      const _0x2f5743 = {
        text: "钢牙鲨VS魔牙鲨",
        y: _0x25350a.height / 15
      };
      var _0x413f4b = createLabel(_0x2f5743);
      _0x413f4b.x = _0x25350a.width / 2 - _0x413f4b.width / 2;
      _0x97073a.push(_0x413f4b);
      const _0x5929a5 = {
        text: "采用雷伊+雷神天明闪",
        y: _0x413f4b.y + _0x413f4b.height + 20
      };
      var _0x327abc = createLabel(_0x5929a5);
      _0x327abc.x = _0x25350a.width / 2 - _0x327abc.width / 2;
      _0x97073a.push(_0x327abc);
      const _0x112f4b = {
        text: "钢牙鲨",
        x: _0x25350a.applicationWidth / 8,
        y: _0x327abc.y + 40
      };
      var _0x3925b8 = createLabel(_0x112f4b);
      _0x97073a.push(_0x3925b8);
      const _0x31dbb6 = {
        x: _0x3925b8.x + _0x3925b8.width + 10,
        y: _0x3925b8.y,
        selected: false,
        storageKey: "darkbattler1"
      };
      let _0xd6abc5 = createRadio(_0x31dbb6);
      _0x97073a.push(_0xd6abc5);
      const _0xbbab28 = {
        text: "魔牙鲨",
        x: _0xd6abc5.x + _0xd6abc5.width + 40,
        y: _0x3925b8.y
      };
      var _0x1ae32e = createLabel(_0xbbab28);
      _0x97073a.push(_0x1ae32e);
      const _0x4e0e78 = {
        x: _0x1ae32e.x + _0x1ae32e.width + 10,
        y: _0x3925b8.y,
        selected: false,
        storageKey: "darkbattler2"
      };
      let _0x1e6e63 = createRadio(_0x4e0e78);
      _0x97073a.push(_0x1e6e63);
      _0x26d6d1.addAllUis(_0x97073a);
      _0x25350a.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x26d6d1.stop();
      }, function () {
        if (_0xd6abc5.selected) {
          _0x26d6d1.gangId = 1482;
        }
        if (_0x1e6e63.selected) {
          _0x26d6d1.gangId = 1483;
        }
        _0x26d6d1.gang();
      }], null);
      _0x25350a.showAlert();
    });
  }
  async sailuoatm() {
    let _0x5e2623 = await this.send_message("cs_super_human", {
      type: 1
    });
    let _0x1a4562 = 1;
    while (_0x1a4562 < 9) {
      let _0x3a33b3 = await this.sailuoBattle();
      if (!_0x3a33b3) {
        break;
      } else if (_0x5e2623.cardIds[_0x1a4562] == 1) {
        if (MFC.userInfo.curEnergy >= 5) {
          const _0x5d09f8 = {
            type: 1,
            cardId: [_0x5e2623.cardIds[_0x1a4562 - 1]],
            petList: [_0x3a33b3.pet.getTime],
            times: 0,
            train: 0
          };
          await this.send_message("cs_pve_fight_start", _0x5d09f8);
          await this.initBattle();
          let _0x34f777 = await this.useSkill(11022);
          while (_0x34f777.result.result === 0) {
            addGameLog("未击败，继续攻击");
            _0x34f777 = await this.useSkill(11022);
          }
          if (_0x34f777.result.result === 1) {
            _0x1a4562 += 2;
          } else {
            addGameLog("未击败");
          }
          await wait(300);
        } else {
          addGameLog("电池不足");
          break;
        }
      } else {
        _0x1a4562 += 2;
      }
    }
    let _0x1f1a0a = xls.activityTaskReset.getItems().filter(function (_0xa82642) {
      return _0xa82642.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0xa82642.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0xa82642.activityIdentity == 442;
    });
    for (let _0x45b237 = 0; _0x45b237 < _0x1f1a0a.length; _0x45b237++) {
      if (TaskUtils.GetRestTaskState(_0x1f1a0a[_0x45b237]) == 1) {
        addGameLog("领取" + _0x1f1a0a[_0x45b237].task);
        const _0x314c0e = {
          carnivalId: _0x1f1a0a[_0x45b237].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x314c0e);
      } else if (TaskUtils.GetRestTaskState(_0x1f1a0a[_0x45b237]) == 0) {
        addGameLog(_0x1f1a0a[_0x45b237].task + "未完成");
      } else {
        addGameLog(_0x1f1a0a[_0x45b237].task + "已完成");
      }
    }
    let _0x9921fc = xls.activityExchange.getItems().filter(function (_0x37f01d) {
      return _0x37f01d.name.indexOf("奥特曼联动：帕拉吉之盾奖励") !== -1;
    });
    for (let _0x35ba09 = 0; _0x35ba09 < _0x9921fc.length; _0x35ba09++) {
      if (ExchangeUtils.GetExchangeState(_0x9921fc[_0x35ba09]) == 1) {
        const _0x3f9f61 = {
          id: _0x9921fc[_0x35ba09].id,
          selectIndex: 0,
          subDropIdList: []
        };
        await this.send_message("cs_exchange_activity_reward", _0x3f9f61);
      } else if (ExchangeUtils.GetExchangeState(_0x9921fc[_0x35ba09]) == -1) {
        addGameLog(_0x9921fc[_0x35ba09].name + "已领取");
      } else if (ExchangeUtils.GetExchangeState(_0x9921fc[_0x35ba09]) == 0) {
        addGameLog(_0x9921fc[_0x35ba09].name + "未完成");
      }
    }
    addGameLog("赛罗奥特曼完成");
    this.stop();
  }
  async sailuoBattle() {
    let _0x22b255 = await this.dispatchSelfPet("魔焰猩猩", [11022]);
    if (_0x22b255) {
      return {
        pet: _0x22b255,
        skillsName: [11022]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async handleCardList() {
    let _0xd21036 = await this.send_message("cs_unlock_gongge_fight", {
      fun: 1,
      getTimeList: []
    });
    let _0x2dc748 = {
      wayArray: [-1, 0, 1],
      canTouchList: [],
      unlockList: _0xd21036.unlock,
      setCanTouchPoint: function () {
        this.unlockList.push(0);
        for (var _0x21426c = 0; _0x21426c < this.unlockList.length; _0x21426c++) {
          for (var _0xed6dc = this.findNearlyCell(this.unlockList[_0x21426c], 20, 8), _0x17351c = 0; _0x17351c < _0xed6dc.length; _0x17351c++) {
            if (this.canTouchList.indexOf(_0xed6dc[_0x17351c]) == -1) {
              this.canTouchList.push(_0xed6dc[_0x17351c]);
            }
          }
        }
      },
      findNearlyCell: function (_0x2d46f0, _0x2db79e, _0x26156f) {
        for (var _0xf2d6ab = _0x2d46f0 % _0x2db79e, _0x1572af = Math.floor(_0x2d46f0 / _0x2db79e), _0x45c088 = [], _0x11f3dc = 0; _0x11f3dc < this.wayArray.length; _0x11f3dc++) {
          for (var _0x463739 = 0; _0x463739 < this.wayArray.length; _0x463739++) {
            if (_0xf2d6ab + this.wayArray[_0x11f3dc] >= 0 && _0xf2d6ab + this.wayArray[_0x11f3dc] < _0x2db79e && _0x1572af + this.wayArray[_0x463739] >= 0 && _0x1572af + this.wayArray[_0x463739] < _0x26156f) {
              var _0x4ef125 = _0xf2d6ab + this.wayArray[_0x11f3dc] + (_0x1572af + this.wayArray[_0x463739]) * _0x2db79e;
              _0x45c088.push(_0x4ef125);
            }
          }
        }
        return _0x45c088;
      }
    };
    _0x2dc748.setCanTouchPoint();
    logger(_0x2dc748.canTouchList);
    let _0x490ce6 = _0xd21036.BossHpList.filter(_0x448f13 => _0x2dc748.canTouchList.includes(_0x448f13.index) && _0x448f13.hp == 0);
    return _0x490ce6;
  }
  async cardBattleui() {
    super.start();
    let _0x56a255 = this;
    MFC.alert.show("确定进行萨菲罗吗(奥斯卡禁忌加虚空,库贝萨天霸加玄灵\n谱尼元素+圣洁或者熊猫横空裂加熊猫陷阵)", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x2a10f8) {
      _0x56a255.stop();
    }, function (_0x5eb549) {
      _0x56a255.cardBattle();
    }]);
  }
  async cardBattle() {
    try {
      if (!xls.obtainZafiro.hasLoaded) {
        xls.obtainZafiro.load(() => {});
      }
      await wait(200);
      let _0x4e1e3d = 0;
      let _0x4a83d0 = MFC.userInfo.defaultTeam;
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
          addGameLog("当前boss" + PetConfig.getDef(xls.obtainZafiro.getItem(_0x4e1e3d + 1).petId).name);
          if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailySaFeiLuoFightBossStatus), _0x4e1e3d + 1) > 0) {
            addGameLog(PetConfig.getDef(xls.obtainZafiro.getItem(_0x4e1e3d + 1).petId).name + "已击败");
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 150) {
            let _0x1d54da = await this.sfl200Battle();
            if (_0x1d54da) {
              const _0x2dade9 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x1d54da.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x2dade9);
              const _0x2dc924 = {
                id: _0x4e1e3d + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x2dc924);
              await this.initBattle();
              let _0x4aa2a7 = await this.useSkill(_0x1d54da.skillsName[0]);
              if (_0x4aa2a7.result.result == 0) {
                _0x4aa2a7 = await this.useSkill(_0x1d54da.skillsName[0]);
              }
              while (_0x4aa2a7.result.result == 0) {
                _0x4aa2a7 = await this.useSkill(_0x1d54da.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 200) {
            let _0x313490 = await this.sfl200Battle();
            if (_0x313490) {
              const _0x57512e = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x313490.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x57512e);
              const _0x31fbfc = {
                id: _0x4e1e3d + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x31fbfc);
              await this.initBattle();
              let _0x5bde6f = await this.useSkill(_0x313490.skillsName[0]);
              if (_0x5bde6f.result.result == 0) {
                _0x5bde6f = await this.useSkill(_0x313490.skillsName[0]);
              }
              while (_0x5bde6f.result.result == 0) {
                _0x5bde6f = await this.useSkill(_0x313490.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 250) {
            let _0x193372 = await this.sfl300Battle();
            if (_0x193372) {
              const _0x178c98 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x193372.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x178c98);
              const _0xfc386f = {
                id: _0x4e1e3d + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0xfc386f);
              await this.initBattle();
              let _0x4d9b06 = await this.useSkill(_0x193372.skillsName[1]);
              if (_0x4d9b06.result.result == 0) {
                _0x4d9b06 = await this.useSkill(_0x193372.skillsName[1]);
              }
              while (_0x4d9b06.result.result == 0) {
                _0x4d9b06 = await this.useSkill(_0x193372.skillsName[0]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 300) {
            let _0x9cb512 = await this.sfl300Battle();
            if (_0x9cb512) {
              const _0x46d93f = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x9cb512.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x46d93f);
              const _0x2e88f1 = {
                id: _0x4e1e3d + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x2e88f1);
              await this.initBattle();
              let _0x55c6d8 = await this.useSkill(_0x9cb512.skillsName[1]);
              if (_0x55c6d8.result.result == 0) {
                _0x55c6d8 = await this.useSkill(_0x9cb512.skillsName[1]);
              }
              while (_0x55c6d8.result.result == 0) {
                _0x55c6d8 = await this.useSkill(_0x9cb512.skillsName[0]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 350) {
            let _0x3e18f5 = await this.sfl50Battle();
            if (_0x3e18f5) {
              const _0x8ba53 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x3e18f5.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x8ba53);
              const _0x4c076d = {
                id: _0x4e1e3d + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x4c076d);
              await this.initBattle();
              let _0x4d432a = await this.useSkill(_0x3e18f5.skillsName[0]);
              if (_0x4d432a.result.result == 0) {
                _0x4d432a = await this.useSkill(_0x3e18f5.skillsName[1]);
              }
              while (_0x4d432a.result.result == 0) {
                _0x4d432a = await this.useSkill(_0x3e18f5.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 400) {
            let _0x1732fc = await this.sfl200Battle();
            if (_0x1732fc) {
              const _0x3e3774 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x1732fc.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x3e3774);
              const _0x475699 = {
                id: _0x4e1e3d + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x475699);
              await this.initBattle();
              let _0x3d6707 = await this.useSkill(_0x1732fc.skillsName[1]);
              if (_0x3d6707.result.result == 0) {
                _0x3d6707 = await this.useSkill(_0x1732fc.skillsName[0]);
              }
              while (_0x3d6707.result.result == 0) {
                _0x3d6707 = await this.useSkill(_0x1732fc.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 450) {
            let _0x5a69ef = await this.sfl50Battle();
            if (_0x5a69ef) {
              const _0xc8d8a8 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x5a69ef.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0xc8d8a8);
              const _0x34f45b = {
                id: _0x4e1e3d + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x34f45b);
              await this.initBattle();
              let _0xcff3f8 = await this.useSkill(_0x5a69ef.skillsName[1]);
              if (_0xcff3f8.result.result == 0) {
                _0xcff3f8 = await this.useSkill(_0x5a69ef.skillsName[0]);
              }
              while (_0xcff3f8.result.result == 0) {
                _0xcff3f8 = await this.useSkill(_0x5a69ef.skillsName[1]);
              }
            }
          } else if (150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 500 || 150 + Random.getDateRandom(7, 0, 9)[_0x4e1e3d] * 50 == 550) {
            let _0x46cf27 = await this.sfl50Battle();
            if (_0x46cf27) {
              const _0x4dea88 = {
                op: 1,
                arrayType: "defaultTeam",
                subArray: 0,
                idx: 1,
                teamUp: 0,
                fightType: 0,
                getTimeList: [_0x46cf27.pet.getTime]
              };
              await this.send_message("cs_new_change_petArray", _0x4dea88);
              const _0x35433b = {
                id: _0x4e1e3d + 1
              };
              await this.send_message("cs_safeiluo_start_fight", _0x35433b);
              await this.initBattle();
              let _0x258f22 = await this.useSkill(_0x46cf27.skillsName[1]);
              if (_0x258f22.result.result == 0) {
                _0x258f22 = await this.useSkill(_0x46cf27.skillsName[1]);
              }
              while (_0x258f22.result.result == 0) {
                _0x258f22 = await this.useSkill(_0x46cf27.skillsName[0]);
              }
            }
          }
          _0x4e1e3d++;
          if (_0x4e1e3d > 6) {
            addGameLog("萨菲罗结束");
            const _0x184abe = {
              op: 1,
              arrayType: "defaultTeam",
              subArray: 0,
              idx: 1,
              teamUp: 0,
              fightType: 0,
              getTimeList: _0x4a83d0
            };
            await this.send_message("cs_new_change_petArray", _0x184abe);
            break;
          }
        } else {
          addGameLog("电池不足");
          break;
        }
      }
      this.stop();
    } catch (_0x206957) {}
  }
  async sfl50Battle() {
    let _0x2c7d62 = await this.dispatchSelfPet("奥斯卡", [22637, 22638]);
    if (_0x2c7d62) {
      return {
        pet: _0x2c7d62,
        skillsName: [22637, 22638]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async sfl200Battle() {
    let _0x4409fd = await this.dispatchSelfPet("谱尼", [11261, 20605]);
    if (_0x4409fd) {
      return {
        pet: _0x4409fd,
        skillsName: [11261, 20605]
      };
    }
    let _0x3cc408 = await this.dispatchSelfPet("熊猫", [41030, 41027]);
    if (_0x3cc408) {
      return {
        pet: _0x3cc408,
        skillsName: [41030, 41027]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async sfl300Battle() {
    let _0x221253 = await this.dispatchSelfPet("库贝撒", [22197, 22195]);
    if (_0x221253) {
      return {
        pet: _0x221253,
        skillsName: [22197, 22195]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async blackrabbitpet() {
    let _0x112737 = await this.dispatchSelfPet("哈肯萨", [22615, 14816]);
    if (_0x112737) {
      return {
        pet: _0x112737,
        skillsName: [22615, 14816]
      };
    }
    let _0x4d6d1d = await this.dispatchSelfPet("赫尔卡长老", [20592, 32127]);
    if (_0x4d6d1d) {
      return {
        pet: _0x4d6d1d,
        skillsName: [20592, 32127]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async blackrabbitbattle() {
    let _0x207ab8 = MFC.userInfo.defaultTeam;
    while (true) {
      if (MFC.attr.getAttr(MFC.attrType.dailyNv1FightFieldBossDamageStart + xls.mapBossChallenge.getItems().filter(function (_0x2ded8e) {
        var _0x2d6804 = new Date((_0x2ded8e.date + " " + _0x2ded8e.time.split("-")[0]).replace(/_/g, "/"));
        var _0x1420aa = new Date((_0x2ded8e.date + " " + _0x2ded8e.time.split("-")[1]).replace(/_/g, "/"));
        return _0x2ded8e.battleType == 71 && MFC.serverTimer.date > _0x2d6804 && MFC.serverTimer.date < _0x1420aa;
      })[0].activityType - 1) > 150000) {
        let _0x352a59 = xls.mapBossChallenge.getItems().filter(function (_0x2086d4) {
          var _0x19edbf = new Date((_0x2086d4.date + " " + _0x2086d4.time.split("-")[0]).replace(/_/g, "/"));
          var _0x4b05d7 = new Date((_0x2086d4.date + " " + _0x2086d4.time.split("-")[1]).replace(/_/g, "/"));
          return _0x2086d4.battleType == 71 && MFC.serverTimer.date > _0x19edbf && MFC.serverTimer.date < _0x4b05d7;
        })[0].activityType;
        if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x352a59 - 1), 4) > 0 && BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x352a59 - 1), 3) > 0 && BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x352a59 - 1), 2) > 0 && BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x352a59 - 1), 1) > 0) {
          addGameLog("夜之诅咒结束");
          break;
        } else {
          for (let _0x572929 = 0; _0x572929 < 4; _0x572929++) {
            if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyNv1FightBossRewardStatusStart + _0x352a59 - 1), _0x572929 + 1) == 0) {
              const _0xfebe47 = {
                activityType: 2,
                index: _0x572929 + 1
              };
              await this.send_message("cs_get_nv1_fight_boss_box", _0xfebe47);
              addGameLog("领取第" + (_0x572929 + 1) + "个宝箱");
            }
          }
        }
      } else if (MFC.serverTimer.date.getHours() > 17 && MFC.serverTimer.date.getHours() <= 21) {
        if (MFC.userInfo.curEnergy > 5) {
          let _0x2d334a = xls.mapBossChallenge.getItems().filter(function (_0x1b61ee) {
            var _0x173692 = new Date((_0x1b61ee.date + " " + _0x1b61ee.time.split("-")[0]).replace(/_/g, "/"));
            var _0x9815ba = new Date((_0x1b61ee.date + " " + _0x1b61ee.time.split("-")[1]).replace(/_/g, "/"));
            return _0x1b61ee.battleType == 71 && MFC.serverTimer.date > _0x173692 && MFC.serverTimer.date < _0x9815ba;
          })[0].id;
          let _0x232fe8 = await this.blackrabbitpet();
          if (!_0x232fe8) {
            break;
          }
          const _0x13fb26 = {
            op: 1,
            arrayType: "defaultTeam",
            subArray: 0,
            idx: 1,
            teamUp: 0,
            fightType: 0,
            getTimeList: [_0x232fe8.pet.getTime]
          };
          await this.send_message("cs_new_change_petArray", _0x13fb26);
          const _0x1b3bce = {
            configId: _0x2d334a,
            btlType: 71
          };
          await this.send_message("cs_leader_nv1_fight_boss_check", _0x1b3bce);
          let _0x3a54f9 = await this.waitEvent("sc_notify_nv1_fight_boss_start");
          let _0xa95b0d = JSON.parse(_0x3a54f9.gameBody[_0x3a54f9.gameBody.length - 1].raw);
          _0x3a54f9.gameBody.splice(0, _0x3a54f9.gameBody.length);
          const _0x5582e1 = {
            btlType: 71,
            petList: [_0x232fe8.pet.getTime],
            id: _0x2d334a,
            btlSvrId: _0xa95b0d.battleId,
            groupId: _0xa95b0d.groupId
          };
          await this.send_message("cs_nv1_fight_boss_start_battle", _0x5582e1);
          await this.send_message("cs_set_match_battle_speed", {
            speed: 2
          });
          let _0x436810 = await this.waitEvent("sc_battle_notify_load_resource");
          _0x436810.gameBody.splice(0, _0x436810.gameBody.length);
          const _0x5895fc = {
            groupId: _0xa95b0d.groupId,
            battleType: 157
          };
          await this.send_message("cs_online_load_resource", _0x5895fc);
          await wait(300);
          const _0x1a25a2 = {
            opType: 5,
            data: null,
            groupId: _0xa95b0d.groupId
          };
          await this.send_message("cs_online_player_operation", _0x1a25a2);
          _0x436810 = await this.waitEvent("sc_battle_notify_round_result");
          let _0x1c623c = JSON.parse(_0x436810.gameBody[_0x436810.gameBody.length - 1].raw);
          _0x436810.gameBody.splice(0, _0x436810.gameBody.length);
          addGameLog("释放技能:" + petConfig.SkillConfig.getDef(_0x232fe8.skillsName[0]).name);
          const _0x16c297 = {
            skillID: _0x232fe8.skillsName[0]
          };
          const _0x266050 = {
            opType: 1,
            data: _0x16c297,
            groupId: _0xa95b0d.groupId
          };
          await this.send_message("cs_online_player_operation", _0x266050);
          _0x436810 = await this.waitEvent("sc_battle_notify_round_result");
          _0x1c623c = JSON.parse(_0x436810.gameBody[_0x436810.gameBody.length - 1].raw);
          _0x436810.gameBody.splice(0, _0x436810.gameBody.length);
          while (_0x1c623c.result.result == 0) {
            addGameLog("释放技能:" + petConfig.SkillConfig.getDef(_0x232fe8.skillsName[1]).name);
            const _0x36f53f = {
              skillID: _0x232fe8.skillsName[1]
            };
            const _0x2c8e1f = {
              opType: 1,
              data: _0x36f53f,
              groupId: _0xa95b0d.groupId
            };
            await this.send_message("cs_online_player_operation", _0x2c8e1f);
            _0x436810 = await this.waitEvent("sc_notify_nv1_battle_end");
            let _0x17f7b8 = JSON.parse(_0x436810.gameBody[_0x436810.gameBody.length - 1].raw);
            _0x436810.gameBody.splice(0, _0x436810.gameBody.length);
            if (_0x17f7b8) {
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
    const _0x4ddebe = {
      op: 1,
      arrayType: "defaultTeam",
      subArray: 0,
      idx: 1,
      teamUp: 0,
      fightType: 0,
      getTimeList: _0x207ab8
    };
    await this.send_message("cs_new_change_petArray", _0x4ddebe);
    this.stop();
  }
  async game2048() {
    while (1) {
      if (MFC.attr.getAttr(MFC.attrType.dailySummerFeastDrop) == 2) {
        break;
      }
      let _0x4090a8 = await this.send_message("cs_summer_feast", {
        type: 1,
        mv: 0
      });
      let _0x481416 = 0;
      addGameLog("2048游戏第" + (MFC.attr.getAttr(MFC.attrType.dailySummerFeastDrop) + 1) + "次");
      while (1) {
        if (_0x4090a8.state !== 2) {
          break;
        }
        if (_0x481416 == 0) {
          _0x481416++;
          _0x4090a8 = await this.send_message("cs_summer_feast", {
            type: 2,
            mv: 1
          });
        }
        if (_0x481416 == 1) {
          _0x481416++;
          _0x4090a8 = await this.send_message("cs_summer_feast", {
            type: 2,
            mv: 4
          });
        }
        if (_0x481416 == 2) {
          _0x481416++;
          _0x4090a8 = await this.send_message("cs_summer_feast", {
            type: 2,
            mv: 2
          });
        }
        if (_0x481416 == 3) {
          _0x481416 = 0;
          _0x4090a8 = await this.send_message("cs_summer_feast", {
            type: 2,
            mv: 3
          });
        }
        if (_0x4090a8.desc) {
          if (_0x4090a8.desc.indexOf("已经领取过奖励了") !== -1) {
            break;
          } else {
            _0x481416++;
            _0x4090a8.state = 2;
          }
        }
        if (_0x4090a8.state == 1) {
          addGameLog("成功");
          break;
        }
      }
    }
    let _0x1b3e06 = xls.activityTaskReset.getItems().filter(function (_0x5ef999) {
      return _0x5ef999.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x5ef999.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss").toString() && _0x5ef999.activityIdentity == 460;
    });
    for (let _0x102ed2 = 0; _0x102ed2 < _0x1b3e06.length; _0x102ed2++) {
      if (NewTaskUtils.getTaskResetStateByIndex(_0x1b3e06[_0x102ed2]) == 1) {
        const _0xaf407d = {
          carnivalId: _0x1b3e06[_0x102ed2].id,
          recvIndex: 0
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0xaf407d);
      } else if (NewTaskUtils.getTaskResetStateByIndex(_0x1b3e06[_0x102ed2]) == 0) {
        addGameLog(_0x1b3e06[_0x102ed2].name + _0x1b3e06[_0x102ed2].task + "未完成");
      }
    }
    this.stop();
  }
  async darkui() {
    super.start();
    let _0x5937f3 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x43176c = [];
      var _0x317b0c = SimpleAlertUi({
        height: 350,
        width: 400
      });
      _0x5937f3.alertWin = _0x317b0c;
      const _0x14daed = {
        text: "暗黑武斗场",
        x: _0x317b0c.width / 2 - 32,
        y: _0x317b0c.height / 15
      };
      var _0x26b9c6 = createLabel(_0x14daed);
      _0x43176c.push(_0x26b9c6);
      const _0x20ec29 = {
        text: "请在圆点点击选择挑战难度:",
        x: _0x317b0c.applicationWidth / 2 - 60,
        y: _0x26b9c6.y + _0x26b9c6.height + 20
      };
      var _0x210a43 = createLabel(_0x20ec29);
      _0x43176c.push(_0x210a43);
      const _0x2a6feb = {
        text: "简单",
        x: _0x317b0c.applicationWidth / 8,
        y: _0x210a43.y + 40
      };
      var _0x2fedda = createLabel(_0x2a6feb);
      _0x43176c.push(_0x2fedda);
      const _0x35491a = {
        x: _0x2fedda.x + _0x2fedda.width + 10,
        y: _0x2fedda.y,
        selected: false,
        storageKey: "darkbattler1"
      };
      let _0x4b8115 = createRadio(_0x35491a);
      _0x43176c.push(_0x4b8115);
      const _0xc3dfd6 = {
        text: "普通",
        x: _0x4b8115.x + _0x4b8115.width + 40,
        y: _0x2fedda.y
      };
      var _0x372fe5 = createLabel(_0xc3dfd6);
      _0x43176c.push(_0x372fe5);
      const _0x10b3b8 = {
        x: _0x372fe5.x + _0x372fe5.width + 10,
        y: _0x2fedda.y,
        selected: false,
        storageKey: "darkbattler2"
      };
      let _0x3c14d4 = createRadio(_0x10b3b8);
      _0x43176c.push(_0x3c14d4);
      const _0x287146 = {
        text: "困难",
        x: _0x3c14d4.x + _0x3c14d4.width + 40,
        y: _0x2fedda.y
      };
      var _0x286eae = createLabel(_0x287146);
      _0x43176c.push(_0x286eae);
      const _0x78773e = {
        x: _0x286eae.x + _0x286eae.width + 10,
        y: _0x2fedda.y,
        selected: true,
        storageKey: "darkbattler3"
      };
      let _0x81b405 = createRadio(_0x78773e);
      _0x43176c.push(_0x81b405);
      const _0xcc5c97 = {
        x: 70,
        y: _0x2fedda.y + _0x2fedda.width + 10,
        width: 150,
        prompt: "请输入挑战次数",
        storageKey: "darknum"
      };
      var _0x298774 = createEdit(_0xcc5c97);
      _0x43176c.push(_0x298774);
      const _0x3383d9 = {
        text: "输入数字但不超过",
        x: _0x298774.x + _0x298774.width + 10,
        y: _0x298774.y + 10
      };
      var _0x13158e = createLabel(_0x3383d9);
      _0x43176c.push(_0x13158e);
      var _0x4f02f4 = createLabel({
        text: 5 - MFC.attr.getAttr(MFC.attrType.dailyDarknessEnterTimes),
        x: _0x13158e.x + _0x13158e.width + 5,
        y: _0x298774.y + 10,
        textColor: 16776960
      });
      _0x43176c.push(_0x4f02f4);
      const _0x109ac3 = {
        x: 70,
        y: _0x298774.y + _0x298774.height + 20,
        width: 150,
        prompt: "请输入挑战层数",
        storageKey: "darkfloor"
      };
      var _0x11b3b4 = createEdit(_0x109ac3);
      _0x43176c.push(_0x11b3b4);
      const _0x21e415 = {
        text: "输入数字在",
        x: _0x11b3b4.x + _0x11b3b4.width + 10,
        y: _0x11b3b4.y + 10
      };
      var _0x1e5354 = createLabel(_0x21e415);
      _0x43176c.push(_0x1e5354);
      const _0x1d9ab2 = {
        text: "1 ~ 14",
        x: _0x1e5354.x + _0x1e5354.width + 5,
        y: _0x11b3b4.y + 10,
        textColor: 16776960
      };
      var _0x67a4db = createLabel(_0x1d9ab2);
      _0x43176c.push(_0x67a4db);
      const _0x1a4cd5 = {
        text: "暗黑武斗场用的绝命火焰",
        x: _0x317b0c.applicationWidth / 2 - 55,
        y: _0x11b3b4.y + 46,
        textColor: 16711680
      };
      var _0x277936 = createLabel(_0x1a4cd5);
      _0x43176c.push(_0x277936);
      _0x5937f3.addAllUis(_0x43176c);
      _0x317b0c.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5937f3.stop();
      }, function () {
        localStorage.setItem("darkbattler1", _0x4b8115.selected);
        localStorage.setItem("darkbattler2", _0x3c14d4.selected);
        localStorage.setItem("darkbattler3", _0x81b405.selected);
        localStorage.setItem("darknum", _0x298774.text);
        localStorage.setItem("darkfloor", _0x11b3b4.text);
        if (_0x4b8115.selected) {
          _0x5937f3.diffcult = 1;
        }
        if (_0x3c14d4.selected) {
          _0x5937f3.diffcult = 2;
        }
        if (_0x81b405.selected) {
          _0x5937f3.diffcult = 3;
        }
        if (_0x298774.text.length == 0) {
          MFC.bubbleAlert.showAlert("请输入挑战次数");
          return true;
        }
        if (!Number.isInteger(parseInt(_0x298774.text)) || _0x298774.text > 5 - MFC.attr.getAttr(MFC.attrType.dailyDarknessEnterTimes) || parseInt(_0x298774.text) < 0) {
          MFC.bubbleAlert.showAlert("挑战次数错误");
          return true;
        }
        localStorage.setItem("darknum", _0x298774.text);
        if (_0x11b3b4.text.length == 0) {
          MFC.bubbleAlert.showAlert("请输入挑战层数");
          return true;
        }
        if (!Number.isInteger(parseInt(_0x11b3b4.text)) || parseInt(_0x11b3b4.text) > 14 || parseInt(_0x11b3b4.text) <= 0) {
          MFC.bubbleAlert.showAlert("挑战层数错误");
          return true;
        }
        localStorage.setItem("darkfloor", _0x11b3b4.text);
        _0x5937f3.Darkbattle();
      }], null);
      _0x317b0c.showAlert();
    });
  }
  async Darkbattle() {
    if (localStorage.getItem("darknum") * 20 > MFC.userInfo.curEnergy) {
      addGameLog("电池不够");
      this.stop();
    } else {
      let _0x3e401a = PetManager.getInstance().getAllPets().map(_0x501b35 => {
        if (_0x501b35.level == 100) {
          if (_0x501b35.skills.indexOf(11022) != -1) {
            return _0x501b35.getTime;
          }
        }
      }).filter(_0x1a6e3e => _0x1a6e3e)[0];
      if (_0x3e401a == undefined) {
        addGameLog("背包没有绝命火焰");
        this.stop();
      } else {
        let _0xdfaf16 = 0;
        while (true) {
          let _0x42badd = parseInt(localStorage.getItem("darknum")) - 1;
          let _0x297d06 = 0;
          let _0x24b1f7 = [0, 2, 4];
          if (_0xdfaf16 > _0x42badd) {
            break;
          } else {
            const _0xa1546e = {
              op: 1,
              arrayType: "defaultTeam",
              subArray: 0,
              idx: 1,
              teamUp: 0,
              fightType: 0,
              getTimeList: [_0x3e401a]
            };
            await this.send_message("cs_new_change_petArray", _0xa1546e);
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
            while (_0x297d06 < 3) {
              const _0x3b5bb9 = {
                petList: [_0x3e401a],
                bossIndex: _0x24b1f7[_0x297d06]
              };
              await this.send_message("cs_darkness_start_battle", _0x3b5bb9);
              await this.initBattle();
              let _0x40d23d = await this.useSkill(11022);
              while (_0x40d23d.result.result == 0) {
                if (_0x40d23d.result.playerInfos[0].uid == MFC.userInfo.uid) {
                  if (_0x40d23d.result.playerInfos[0].nextRoundOP !== 1) {
                    addGameLog("首发被击败");
                    break;
                  }
                } else if (_0x40d23d.result.playerInfos[1].nextRoundOP !== 1) {
                  addGameLog("首发被击败");
                  break;
                }
                if (_0x40d23d.result.roundNum > 5) {
                  break;
                }
                logger("未击败，继续攻击");
                _0x40d23d = await this.useSkill(11022);
              }
              if (_0x40d23d.result.result == 1) {
                _0x297d06++;
              }
              await wait(300);
            }
            let _0x49a38f = _0xdfaf16 + 1;
            addGameLog("成功完成第" + _0x49a38f + "次");
            _0xdfaf16++;
          }
        }
        addGameLog("暗黑武斗场完成");
        this.stop();
      }
    }
  }
  async expfightui() {
    super.start();
    let _0x1220af = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x3e3bef = [];
      var _0x1a7592 = SimpleAlertUi({
        height: 350,
        width: 500
      });
      _0x1220af.alertWin = _0x1a7592;
      const _0x4251bc = {
        text: "能量大作战",
        x: _0x1a7592.width / 2 - 32,
        y: _0x1a7592.height / 15
      };
      var _0x5376df = createLabel(_0x4251bc);
      _0x5376df.size = 20;
      _0x3e3bef.push(_0x5376df);
      const _0xa290a2 = {
        text: `默认选择困难难度;神秘狗灵神加万象;
蒂朵异维需要符文
比德尔6块钱柔弱无限超动灵破闪记得充能给特功刻印`,
        x: _0x1a7592.applicationWidth / 2 - 235,
        y: _0x5376df.y + _0x5376df.height + 20
      };
      var _0x49ade6 = createLabel(_0xa290a2);
      _0x3e3bef.push(_0x49ade6);
      const _0x26f67a = {
        text: "神秘狗",
        x: _0x1a7592.applicationWidth / 2 - 48,
        y: _0x49ade6.y + _0x49ade6.height + 20
      };
      var _0x55879b = createLabel(_0x26f67a);
      _0x3e3bef.push(_0x55879b);
      const _0x228110 = {
        x: _0x55879b.x + 70,
        y: _0x55879b.y,
        selected: true,
        storageKey: "expfightteam1"
      };
      let _0x387779 = createToggle(_0x228110);
      _0x3e3bef.push(_0x387779);
      const _0x52e135 = {
        text: "蒂朵",
        x: _0x55879b.x,
        y: _0x55879b.y + 40
      };
      var _0xde234c = createLabel(_0x52e135);
      _0x3e3bef.push(_0xde234c);
      const _0x4a0a3a = {
        x: _0xde234c.x + 70,
        y: _0xde234c.y,
        selected: false,
        storageKey: "expfightteam2"
      };
      let _0x4319e4 = createToggle(_0x4a0a3a);
      _0x3e3bef.push(_0x4319e4);
      const _0x2c0aea = {
        text: "比德尔",
        x: _0x55879b.x,
        y: _0xde234c.y + 40
      };
      var _0x176b9d = createLabel(_0x2c0aea);
      _0x3e3bef.push(_0x176b9d);
      const _0x4a2a0f = {
        x: _0x176b9d.x + 70,
        y: _0x176b9d.y,
        selected: false,
        storageKey: "expfightteam3"
      };
      let _0xfa2c03 = createToggle(_0x4a2a0f);
      _0x3e3bef.push(_0xfa2c03);
      _0x1220af.addAllUis(_0x3e3bef);
      _0x1a7592.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x1220af.stop();
      }, function () {
        localStorage.setItem("expfightteam1", _0x387779.selected);
        localStorage.setItem("expfightteam2", _0x4319e4.selected);
        localStorage.setItem("expfightteam3", _0xfa2c03.selected);
        if (_0x387779.selected && _0x4319e4.selected || _0x4319e4.selected && _0xfa2c03.selected || _0x387779.selected && _0xfa2c03.selected || _0x387779.selected && _0x4319e4.selected && _0xfa2c03.selected) {
          addGameLog("请不要同时选中多个阵容");
          _0x1220af.stop();
        } else if (_0x387779.selected || _0x4319e4.selected || _0xfa2c03.selected) {
          if (xls.activityTimeLimit.getItems()[30].startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= xls.activityTimeLimit.getItems()[30].endTime) {
            if (_0x387779.selected) {
              _0x1220af.expfight1();
            }
            if (_0x4319e4.selected) {
              _0x1220af.expfight2();
            }
            if (_0xfa2c03.selected) {
              _0x1220af.expfight3();
            }
          } else {
            addGameLog(xls.activityTimeLimit.getItems()[30].activityName + "时间在" + xls.activityTimeLimit.getItems()[30].startTime + "~" + xls.activityTimeLimit.getItems()[30].endTime);
            addGameLog("不在活动时间内");
            _0x1220af.stop();
          }
        }
        if (_0x387779.selected == false && _0x4319e4.selected == false && _0xfa2c03.selected == false) {
          addGameLog("请选择阵容");
          _0x1220af.stop();
        }
      }], null);
      _0x1a7592.showAlert();
    });
  }
  async expfight1() {
    let _0x469d4e;
    switch (VIPManager.getInstance().vipLevel) {
      case 0:
        _0x469d4e = 4;
        break;
      case 1:
        _0x469d4e = 5;
        break;
      case 2:
      case 3:
        _0x469d4e = 6;
        break;
      case 4:
      case 5:
        _0x469d4e = 7;
        break;
      case 6:
      case 7:
        _0x469d4e = 8;
        break;
      case 8:
      case 9:
        _0x469d4e = 9;
        break;
      case 10:
        _0x469d4e = 10;
        break;
    }
    logger("boss" + (40 + MFC.serverTimer.date.getDay()) + "与" + (33 + MFC.serverTimer.date.getDay()));
    while (true) {
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 3) == 0) {
        addGameLog("坚持到底困难还未首胜");
        let _0x288c5e = PetManager.getInstance().getAllPets().map(_0x3945ea => {
          if (_0x3945ea.nick.indexOf("SP艾诺尔") != -1) {
            return _0x3945ea;
          }
        }).filter(_0x1709fa => _0x1709fa !== undefined)[0];
        if (_0x288c5e !== undefined) {
          if (_0x288c5e.skills.indexOf(40958) != -1) {
            if (_0x288c5e.skills.indexOf(40957) != -1) {
              if (_0x288c5e.skills.indexOf(31943) != -1 || _0x288c5e.skills.indexOf(31940) != -1) {
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
        const _0x2892d4 = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x288c5e.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x2892d4);
        await this.expbattle12();
        touchBtn(sta);
      } else {
        addGameLog("坚持到底困难已首胜");
      }
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 6) == 0) {
        addGameLog("不惧反弹困难还未首胜");
        let _0x5101c2 = PetManager.getInstance().getAllPets().map(_0x230896 => {
          if (_0x230896.nick.indexOf("SP艾诺尔") != -1) {
            return _0x230896;
          }
        }).filter(_0x5518a1 => _0x5518a1 !== undefined)[0];
        if (_0x5101c2 !== undefined) {
          if (_0x5101c2.skills.indexOf(40958) != -1) {
            if (_0x5101c2.skills.indexOf(40957) != -1) {
              if (_0x5101c2.skills.indexOf(31943) != -1 || _0x5101c2.skills.indexOf(31940) != -1) {
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
        let _0x4efcbf = PetManager.getInstance().getAllPets().map(_0x331536 => {
          if (_0x331536.level == 100) {
            return _0x331536;
          }
        }).filter(_0x2504fa => _0x2504fa !== undefined)[0];
        const _0x3e8ccb = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x5101c2.getTime, _0x4efcbf.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x3e8ccb);
        await this.expbattle1();
        touchBtn(sta);
      } else {
        addGameLog("不惧反弹困难已首胜");
        addGameLog("即将进行扫荡");
        if (_0x469d4e - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount) > 0) {
          for (let _0x24ce59 = 0; _0x24ce59 < _0x469d4e - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount); _0x24ce59++) {
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
    let _0x42efe5 = await this.useSkill(40958);
    while (_0x42efe5.result.result == 0) {
      _0x42efe5 = await this.useSkill(40957);
      if (_0x42efe5.result.roundNum > 7) {
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
    let _0x5fc1bc = this.useSkill(40958);
    for (let _0x287a46 = 0; _0x287a46 < 4; _0x287a46++) {
      if (_0x5fc1bc.result.result == 0) {
        if (PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills.indexOf(31943) != -1) {
          _0x5fc1bc = this.useSkill(31943);
        } else {
          _0x5fc1bc = this.useSkill(31940);
        }
      } else {
        break;
      }
    }
    if (_0x5fc1bc.result.result == 0) {
      _0x5fc1bc = this.useSkill(40957);
      if (_0x5fc1bc.result.result !== 0) {
        addGameLog("成功击败");
      }
    }
  }
  async expfight2() {
    let _0x22f802;
    switch (VIPManager.getInstance().vipLevel) {
      case 0:
        _0x22f802 = 4;
        break;
      case 1:
        _0x22f802 = 5;
        break;
      case 2:
      case 3:
        _0x22f802 = 6;
        break;
      case 4:
      case 5:
        _0x22f802 = 7;
        break;
      case 6:
      case 7:
        _0x22f802 = 8;
        break;
      case 8:
      case 9:
        _0x22f802 = 9;
        break;
      case 10:
        _0x22f802 = 10;
        break;
    }
    logger("boss" + (40 + MFC.serverTimer.date.getDay()) + "与" + (33 + MFC.serverTimer.date.getDay()));
    while (true) {
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 3) == 0) {
        addGameLog("坚持到底困难还未首胜");
        let _0xa569c5 = PetManager.getInstance().getAllPets().map(_0x175f4c => {
          if (_0x175f4c.nick.indexOf("蒂朵") != -1) {
            if (_0x175f4c.skills.indexOf(100604) != -1) {
              return _0x175f4c;
            }
          }
        }).filter(_0x365f20 => _0x365f20 !== undefined)[0];
        if (_0xa569c5 !== undefined) {
          addGameLog("有异维守护蒂朵");
        } else {
          addGameLog("没有异维守护蒂朵");
          this.stop();
        }
        let _0x2cb3ea = PetManager.getInstance().getAllPets().map(_0x5b4b30 => {
          if (_0x5b4b30.level == 100) {
            return _0x5b4b30;
          }
        }).filter(_0x5e1477 => _0x5e1477 !== undefined)[0];
        const _0x187d2a = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0xa569c5.getTime, _0x2cb3ea.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x187d2a);
        await this.expbattle22();
        touchBtn(sta);
      } else {
        addGameLog("坚持到底困难已首胜");
      }
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 6) == 0) {
        addGameLog("不惧反弹困难还未首胜");
        let _0x4f0d4a = PetManager.getInstance().getAllPets().map(_0x19ad9e => {
          if (_0x19ad9e.nick.indexOf("蒂朵") != -1) {
            if (_0x19ad9e.skills.indexOf(100604) != -1) {
              return _0x19ad9e;
            }
          }
        }).filter(_0x318fd6 => _0x318fd6 !== undefined)[0];
        if (_0x4f0d4a !== undefined) {
          addGameLog("有异维守护蒂朵");
        } else {
          addGameLog("没有异维守护蒂朵");
          this.stop();
        }
        let _0x1913b2 = PetManager.getInstance().getAllPets().map(_0x47d018 => {
          if (_0x47d018.level == 100) {
            return _0x47d018;
          }
        }).filter(_0x386f59 => _0x386f59 !== undefined)[0];
        const _0x5294f5 = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x4f0d4a.getTime, _0x1913b2.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x5294f5);
        await this.expbattle21();
        touchBtn(sta);
      } else {
        addGameLog("不惧反弹困难已首胜");
        addGameLog("即将进行扫荡");
        if (_0x22f802 - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount) > 0) {
          for (let _0xba8470 = 0; _0xba8470 < _0x22f802 - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount); _0xba8470++) {
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
    let _0x2136de = await this.useSkill(100604);
    if (_0x2136de.result.result == 0) {
      _0x2136de = await this.useSkill(100604);
    }
    if (_0x2136de.result.result == 0) {
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
    let _0xbfabbf = await this.useSkill(100604);
    if (_0xbfabbf.result.result == 0) {
      _0xbfabbf = await this.useSkill(100604);
    }
    if (_0xbfabbf.result.result == 0) {
      await this.expbattle22();
    } else {
      addGameLog("成功击败");
    }
  }
  async expfight3() {
    let _0x43f97a;
    switch (VIPManager.getInstance().vipLevel) {
      case 0:
        _0x43f97a = 4;
        break;
      case 1:
        _0x43f97a = 5;
        break;
      case 2:
      case 3:
        _0x43f97a = 6;
        break;
      case 4:
      case 5:
        _0x43f97a = 7;
        break;
      case 6:
      case 7:
        _0x43f97a = 8;
        break;
      case 8:
      case 9:
        _0x43f97a = 9;
        break;
      case 10:
        _0x43f97a = 10;
        break;
    }
    logger("boss" + (40 + MFC.serverTimer.date.getDay()) + "与" + (33 + MFC.serverTimer.date.getDay()));
    while (true) {
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 3) == 0) {
        addGameLog("坚持到底困难还未首胜");
        let _0x4dc99f = PetManager.getInstance().getAllPets().map(_0x3996fc => {
          if (_0x3996fc.skills.indexOf(42971) != -1 && _0x3996fc.skills.indexOf(42972) != -1 && _0x3996fc.skills.indexOf(32346) != -1 && _0x3996fc.level == 100) {
            return _0x3996fc;
          }
        }).filter(_0x413c59 => _0x413c59 !== undefined)[0];
        let _0x134f37 = PetManager.getInstance().getAllPets().map(_0x2f679e => {
          if (_0x2f679e.level == 100) {
            return _0x2f679e;
          }
        }).filter(_0xcaf7f6 => _0xcaf7f6 !== undefined)[0];
        if (_0x4dc99f !== undefined) {
          if (_0x4dc99f.skills.indexOf(42971) != -1) {
            if (_0x4dc99f.skills.indexOf(42972) != -1) {
              if (_0x4dc99f.skills.indexOf(32346) != -1) {
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
        const _0x1f02c6 = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x4dc99f.getTime, _0x134f37.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x1f02c6);
        await this.expbattle32();
        touchBtn(sta);
      } else {
        addGameLog("坚持到底困难已首胜");
      }
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.dailyEnergyFightCompletionSign), 6) == 0) {
        addGameLog("不惧反弹困难还未首胜");
        let _0x8ca2a3 = PetManager.getInstance().getAllPets().map(_0x411c3b => {
          if (_0x411c3b.skills.indexOf(42971) != -1 && _0x411c3b.skills.indexOf(42972) != -1 && _0x411c3b.skills.indexOf(32346) != -1 && _0x411c3b.level == 100) {
            return _0x411c3b;
          }
        }).filter(_0x36f4ac => _0x36f4ac !== undefined)[0];
        let _0xa3ad89 = PetManager.getInstance().getAllPets().map(_0x43f4c8 => {
          if (_0x43f4c8.level == 100) {
            return _0x43f4c8;
          }
        }).filter(_0x1e4df7 => _0x1e4df7 !== undefined)[0];
        if (_0x8ca2a3 !== undefined) {
          if (_0x8ca2a3.skills.indexOf(42971) != -1) {
            if (_0x8ca2a3.skills.indexOf(42972) != -1) {
              if (_0x8ca2a3.skills.indexOf(32346) != -1) {
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
        const _0x32011d = {
          op: 1,
          arrayType: "defaultTeam",
          subArray: 0,
          idx: 1,
          teamUp: 0,
          fightType: 0,
          getTimeList: [_0x8ca2a3.getTime, _0xa3ad89.getTime]
        };
        await this.send_message("cs_new_change_petArray", _0x32011d);
        await this.expbattle31();
        touchBtn(sta);
      } else {
        addGameLog("不惧反弹困难已首胜");
        addGameLog("即将进行扫荡");
        if (_0x43f97a - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount) > 0) {
          for (let _0xc68e3 = 0; _0xc68e3 < _0x43f97a - MFC.attr.getAttr(MFC.attrType.dailyEnergyFightExtraCount); _0xc68e3++) {
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
    let _0x221334 = await this.initBattle();
    for (let _0x4e4489 = 0; _0x4e4489 < 3; _0x4e4489++) {
      if (_0x221334.result.result == 0) {
        _0x221334 = await this.useSkill(42971);
      }
    }
    if (_0x221334.result.result == 0) {
      _0x221334 = await this.useSkill(42972);
    }
    if (_0x221334.result.result == 0) {
      _0x221334 = await this.useSkill(42971);
    }
    if (_0x221334.result.result == 0) {
      _0x221334 = await this.useSkill(42972);
    }
    if (_0x221334.result.result == 0) {
      _0x221334 = await this.useSkill(42971);
    }
    if (_0x221334.result.result == 0) {
      _0x221334 = await this.useSkill(42972);
    }
    if (_0x221334.result.result == 0) {
      _0x221334 = await this.useSkill(32346);
    }
    if (_0x221334.result.result == 0) {
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
    let _0x498419 = await this.initBattle();
    for (let _0x3588db = 0; _0x3588db < 3; _0x3588db++) {
      if (_0x498419.result.result == 0) {
        _0x498419 = await this.useSkill(42971);
      }
    }
    if (_0x498419.result.result == 0) {
      _0x498419 = await this.useSkill(42972);
    }
    if (_0x498419.result.result == 0) {
      _0x498419 = await this.useSkill(42971);
    }
    if (_0x498419.result.result == 0) {
      _0x498419 = await this.useSkill(42972);
    }
    if (_0x498419.result.result == 0) {
      _0x498419 = await this.useSkill(42971);
    }
    if (_0x498419.result.result == 0) {
      _0x498419 = await this.useSkill(42972);
    }
    while (_0x498419.result.result == 0) {
      _0x498419 = await this.useSkill(32346);
    }
    if (_0x498419.result.result !== 1) {
      await this.expbattle32();
    } else {
      addGameLog("成功击败");
    }
  }
  async keluosileyuan() {
    while (1) {
      let _0xb2150b = await this.send_message("cs_get_mapBoss_data", {
        planetId: 1
      });
      if (_0xb2150b.reward[361] < 3 || _0xb2150b.reward[361] == undefined) {
        let _0x387715 = new MapCatch();
        _0x387715.capIds = [4001, 4002, 4003];
        _0x387715.levelIds = [361];
        _0x387715.catchCounts = 1;
        _0x387715.stopTalent = 31;
        _0x387715.petteamstatus = true;
        await _0x387715.prcessBody();
      } else {
        addGameLog("抓小豆芽完成");
        break;
      }
    }
    while (1) {
      let _0x2627eb = await this.send_message("cs_get_mapBoss_data", {
        planetId: 1
      });
      if (_0x2627eb.reward[360] < 3 || _0x2627eb.reward[360] == undefined) {
        let _0x46495c = new MapCatch();
        _0x46495c.capIds = [4001, 4002, 4003];
        _0x46495c.levelIds = [360];
        _0x46495c.catchCounts = 1;
        _0x46495c.stopTalent = 31;
        _0x46495c.petteamstatus = true;
        await _0x46495c.prcessBody();
      } else {
        addGameLog("抓依依完成");
        break;
      }
    }
    this.stop();
  }
  async keluosileyuan1() {
    while (1) {
      let _0x151e1b = await this.send_message("cs_get_mapBoss_data", {
        planetId: 1
      });
      if (_0x151e1b.reward[361] < 3 || _0x151e1b.reward[361] == undefined) {
        let _0x34f7dc = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam1[0]).skills[0];
        await this.send_message("cs_pve_activity_battle", {
          levelId: 361,
          battleType: 3
        });
        await this.initBattle();
        let _0x2b3c83 = await this.useSkill(_0x34f7dc);
        while (_0x2b3c83.result.result === 0) {
          let _0x559d4b = _0x2b3c83.result.playerInfos.find(_0x510592 => _0x510592.uid === MFC.userInfo.uid);
          let _0x2f3558 = _0x559d4b ? _0x559d4b.nextRoundOP : _0x2b3c83.result.playerInfos[1].nextRoundOP;
          if (_0x2f3558 !== 1) {
            addGameLog("首发被击败");
            break;
          }
          if (_0x2b3c83.result.roundNum > 5) {
            break;
          }
          addGameLog("未击败，继续攻击");
          _0x2b3c83 = await this.useSkill(_0x34f7dc);
        }
        await wait(300);
      } else {
        addGameLog("小豆芽完成");
        break;
      }
    }
    while (1) {
      let _0x2550c6 = await this.send_message("cs_get_mapBoss_data", {
        planetId: 1
      });
      if (_0x2550c6.reward[360] < 3 || _0x2550c6.reward[360] == undefined) {
        let _0x132c74 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam1[0]).skills[0];
        await this.send_message("cs_pve_activity_battle", {
          levelId: 360,
          battleType: 3
        });
        await this.initBattle();
        let _0x48cbcf = await this.useSkill(_0x132c74);
        while (_0x48cbcf.result.result === 0) {
          let _0x4bacdc = _0x48cbcf.result.playerInfos.find(_0x548ec3 => _0x548ec3.uid === MFC.userInfo.uid);
          let _0x4be11c = _0x4bacdc ? _0x4bacdc.nextRoundOP : _0x48cbcf.result.playerInfos[1].nextRoundOP;
          if (_0x4be11c !== 1) {
            addGameLog("首发被击败");
            break;
          }
          if (_0x48cbcf.result.roundNum > 5) {
            break;
          }
          addGameLog("未击败，继续攻击");
          _0x48cbcf = await this.useSkill(_0x132c74);
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
    let _0x2c14d6 = XlsUtils.getItemsByKeyValue("mapMonster", "mapId", 50082).filter(function (_0x3ddf37) {
      return _0x3ddf37.date.split("|")[0] == deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_M_d") || _0x3ddf37.date.split("|")[1] == deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_M_d");
    });
    for (let _0x22b691 = 0; _0x22b691 < _0x2c14d6.length; _0x22b691++) {
      while (1) {
        const _0x3e7086 = {
          planetId: undefined
        };
        let _0x258542 = await this.send_message("cs_get_mapBoss_data", _0x3e7086);
        if (_0x258542.reward[_0x2c14d6[_0x22b691].id.toString()] < 5 || _0x258542.reward[_0x2c14d6[_0x22b691].id.toString()] == undefined) {
          let _0x19b746 = UserManager.getInstance().userInfo.defaultTeam[0];
          let _0x2e31d2 = PetManager.getInstance().getPetInfoByGetTime(_0x19b746).skills[0];
          await wait(300);
          const _0x24e91c = {
            levelId: _0x2c14d6[_0x22b691].id,
            battleType: 3
          };
          await this.send_message("cs_pve_activity_battle", _0x24e91c);
          await this.initBattle();
          let _0x3482f2 = await this.useSkill(_0x2e31d2);
          while (_0x3482f2.result.result === 0) {
            let _0x44f92d = _0x3482f2.result.playerInfos.find(_0x42ac81 => _0x42ac81.uid === MFC.userInfo.uid).nextRoundOP;
            if (_0x44f92d !== 1) {
              addGameLog("首发被击败");
              break;
            }
            addGameLog("未击败，继续攻击");
            _0x3482f2 = await this.useSkill(_0x2e31d2);
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
      let _0x3a2300 = await this.send_message("cs_PerilousRoulette", {
        op: 1,
        action: 0,
        itemId: 0,
        target: 0
      });
      if (JSON.stringify(_0x3a2300).includes("游戏未结束")) {
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
      let _0x146b01 = 0;
      while (1) {
        let _0x30cfd8 = await this.send_message("cs_PerilousRoulette", {
          op: 2,
          action: 1,
          itemId: 0,
          target: 2
        });
        if (_0x30cfd8.real) {
          _0x146b01++;
        }
        if (JSON.stringify(_0x30cfd8).includes("目标已阵亡")) {
          await this.send_message("cs_PerilousRoulette", {
            op: 2,
            action: 3,
            itemId: 0,
            target: 0
          });
          break;
        }
        if (_0x146b01 >= 3) {
          addGameLog("已经获胜,见好就收!!");
          await this.send_message("cs_PerilousRoulette", {
            op: 2,
            action: 3,
            itemId: 0,
            target: 0
          });
        }
      }
      var _0xf29ea5 = +xls.item.getItem(101391).dailyLimit;
      var _0x36c51c = 30;
      var _0x4ea8d5 = Math.min(_0xf29ea5, ItemManager.getInstance().getDailyNumById(101391));
      var _0x3a53b1 = Math.min(mongoAttr.getPerilousRouletteAttrperilousRoulette().dropNum, _0x36c51c);
      addGameLog("每日印记掉落：" + _0x4ea8d5 + "/" + _0xf29ea5 + "\n每日随机掉落：" + _0x3a53b1 + "/" + _0x36c51c);
      if (_0x4ea8d5 == _0xf29ea5 && _0x3a53b1 == _0x36c51c) {
        addGameLog("对赌左轮完成!!");
        break;
      }
    }
    this.stop();
  }
  async msyBattle() {
    let _0x3fe7ed = await this.dispatchSelfPet("水次", [32529, 32529]);
    if (_0x3fe7ed) {
      return {
        pet: _0x3fe7ed,
        skillsName: [32529, 32529]
      };
    }
    let _0x128398 = await this.dispatchSelfPet("熊猫", [31998, 31998]);
    if (_0x128398) {
      return {
        pet: _0x128398,
        skillsName: [31998, 31998]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async pipibigbattleui() {
    super.start();
    let _0x183a4e = this;
    MFC.alert.show("确保有100闪光皮皮还有大招,100缪斯皎月苍月,100二巡卡修斯,丽莎布布", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x42a252) {
      _0x183a4e.stop();
    }, function (_0x24500b) {
      _0x183a4e.pipibigbattle();
    }]);
  }
  async pipibigbattle() {
    while (1) {
      if (MFC.userInfo.curEnergy < 10) {
        break;
      }
      if (pveUtils.GetNewActivityCardData([1982])[0].infos.filter(_0x3b7afc => _0x3b7afc.cardId == 1982)[0].dailyWin == 0) {
        let _0x4fc40e = await this.pipibigBattle1();
        if (!_0x4fc40e) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1982],
            petList: [_0x4fc40e.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x5ce5d4 = await this.useSkill(_0x4fc40e.skillsName);
          while (_0x5ce5d4.result.result == 0) {
            if (_0x5ce5d4.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x5ce5d4.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x5ce5d4.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x5ce5d4 = await this.useSkill(_0x4fc40e.skillsName);
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
      if (pveUtils.GetNewActivityCardData([1983])[0].infos.filter(_0x42aea0 => _0x42aea0.cardId == 1983)[0].dailyWin == 0) {
        let _0x598e30 = await this.pipibigBattle2();
        if (!_0x598e30) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1983],
            petList: [_0x598e30.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x2f6f99 = await this.useSkill(23505);
          if (_0x2f6f99.result.result == 0) {
            _0x2f6f99 = await this.useSkill(23505);
          }
          while (_0x2f6f99.result.result == 0) {
            if (_0x2f6f99.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x2f6f99.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x2f6f99.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x2f6f99 = await this.useSkill(23506);
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
      if (pveUtils.GetNewActivityCardData([1985])[0].infos.filter(_0x56ca24 => _0x56ca24.cardId == 1985)[0].dailyWin == 0) {
        let _0x5a19d7 = await this.pipibigBattle2();
        if (!_0x5a19d7) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1985],
            petList: [_0x5a19d7.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x183f63 = await this.useSkill(23505);
          if (_0x183f63.result.result == 0) {
            _0x183f63 = await this.useSkill(23505);
          }
          while (_0x183f63.result.result == 0) {
            if (_0x183f63.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x183f63.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x183f63.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x183f63 = await this.useSkill(23506);
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
      if (pveUtils.GetNewActivityCardData([1987])[0].infos.filter(_0x21424c => _0x21424c.cardId == 1987)[0].dailyWin == 0) {
        let _0x5c5238 = await this.pipibigBattle2();
        if (!_0x5c5238) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1987],
            petList: [_0x5c5238.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x46fb90 = await this.useSkill(23505);
          if (_0x46fb90.result.result == 0) {
            _0x46fb90 = await this.useSkill(23505);
          }
          while (_0x46fb90.result.result == 0) {
            if (_0x46fb90.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x46fb90.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x46fb90.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x46fb90 = await this.useSkill(23506);
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
      if (pveUtils.GetNewActivityCardData([1984])[0].infos.filter(_0x3a123b => _0x3a123b.cardId == 1984)[0].dailyWin == 0) {
        let _0x373c3a = await this.pipibigBattle3();
        if (!_0x373c3a) {
          break;
        } else {
          await this.send_message("cs_pve_fight_start", {
            type: 1,
            cardId: [1984],
            petList: [_0x373c3a.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
            times: 0
          });
          await this.initBattle();
          let _0x1628e2 = await this.useSkill(42968);
          while (_0x1628e2.result.result == 0) {
            if (_0x1628e2.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x1628e2.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x1628e2.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            _0x1628e2 = await this.useSkill(32340);
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
      if (pveUtils.GetNewActivityCardData([1986])[0].infos.filter(_0x465356 => _0x465356.cardId == 1986)[0].dailyWin == 0) {
        let _0x3e7e9b = await this.pipibigBattle4();
        if (!_0x3e7e9b) {
          break;
        } else {
          if (_0x3e7e9b.pet.getTime == PetManager.getInstance().getAllPets()[0].getTime) {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [1986],
              petList: [_0x3e7e9b.pet.getTime, PetManager.getInstance().getAllPets()[1].getTime],
              times: 0
            });
          } else {
            await this.send_message("cs_pve_fight_start", {
              type: 1,
              cardId: [1986],
              petList: [_0x3e7e9b.pet.getTime, PetManager.getInstance().getAllPets()[0].getTime],
              times: 0
            });
          }
          await this.initBattle();
          let _0x5438d3 = await this.useSkill(11006);
          let _0x20c02d = 0;
          let _0x407c00 = 20504;
          while (_0x5438d3.result.result == 0) {
            if (_0x20c02d == 0) {
              _0x407c00 = 20504;
            }
            if (_0x20c02d == 1) {
              if (_0x3e7e9b.skillsName.indexOf(100008) !== -1) {
                _0x407c00 = 100008;
              } else {
                _0x407c00 = 11007;
              }
            }
            if (_0x20c02d == 2) {
              _0x407c00 = 11006;
            }
            if (_0x20c02d == 3) {
              _0x407c00 = 11006;
            }
            if (_0x20c02d == 4) {
              _0x407c00 = 11006;
            }
            if (_0x20c02d == 5) {
              if (_0x3e7e9b.skillsName.indexOf(100486) !== -1) {
                _0x407c00 = 100486;
              } else {
                _0x407c00 = 20009;
              }
            }
            _0x5438d3 = await this.useSkill(_0x407c00);
            let _0x3e5289 = _0x5438d3.result.playerInfos;
            if (_0x5438d3.result.playerInfos[0].uid == MFC.userInfo.uid) {
              if (_0x5438d3.result.playerInfos[0].nextRoundOP !== 1) {
                addGameLog("首发被击败");
                break;
              }
            } else if (_0x5438d3.result.playerInfos[1].nextRoundOP !== 1) {
              addGameLog("首发被击败");
              break;
            }
            let _0x113b59 = "";
            for (let _0x2c82dd = 0; _0x2c82dd < _0x3e5289.length; _0x2c82dd++) {
              if (_0x3e5289[_0x2c82dd].uid == UserManager.getInstance().userInfo.uid) {
                _0x113b59 = _0x3e5289[_0x2c82dd].petInfos[0];
                break;
              }
            }
            let _0x2d2f54 = _0x113b59.useSkills.find(_0x59c0a0 => _0x59c0a0.id === _0x407c00).crtPP;
            if (_0x2d2f54 <= 1) {
              addGameLog("技能次数不足,回复pp");
              if (getSeerItemNum(2001) > 1) {
                addGameLog("回pp");
                this.pp = true;
                _0x5438d3 = await this.useItem(2001);
              } else if (getSeerItemNum(2002) > 1) {
                addGameLog("回pp");
                this.pp = true;
                _0x5438d3 = await this.useItem(2002);
              } else if (getSeerItemNum(2003) > 1) {
                addGameLog("回pp");
                this.pp = true;
                _0x5438d3 = await this.useItem(2003);
              } else {
                addGameLog("pp药不足");
                await this.send_message("cs_quit_battle", {});
                break;
              }
            }
            _0x20c02d++;
            if (_0x20c02d > 5) {
              _0x20c02d = 0;
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
    let _0x3d57a5 = await this.dispatchSelfPet("闪光皮皮", [10486]);
    if (_0x3d57a5) {
      return {
        pet: _0x3d57a5,
        skillsName: [10486]
      };
    }
    let _0x12566c = await this.dispatchSelfPet("闪光皮皮", [100015]);
    if (_0x12566c) {
      return {
        pet: _0x12566c,
        skillsName: [100015]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async pipibigBattle2() {
    let _0x190e91 = await this.dispatchSelfPet("缪斯", [23505, 23506]);
    if (_0x190e91) {
      return {
        pet: _0x190e91,
        skillsName: [23505, 23506]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async pipibigBattle3() {
    let _0x32dfe2 = await this.dispatchSelfPet("卡修斯", [42968, 32340]);
    if (_0x32dfe2) {
      return {
        pet: _0x32dfe2,
        skillsName: [42968, 32340]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async pipibigBattle4() {
    let _0x1d088a = await this.dispatchSelfPet("丽莎布布", [11006, 20504, 11007, 20009]);
    if (_0x1d088a) {
      return {
        pet: _0x1d088a,
        skillsName: [11006, 20504, 11007, 20009]
      };
    }
    let _0x3a0482 = await this.dispatchSelfPet("丽莎布布", [11006, 20504, 11007, 100486]);
    if (_0x3a0482) {
      return {
        pet: _0x3a0482,
        skillsName: [11006, 20504, 11007, 100486]
      };
    }
    let _0x5634fa = await this.dispatchSelfPet("丽莎布布", [11006, 20504, 100008, 100486]);
    if (_0x5634fa) {
      return {
        pet: _0x5634fa,
        skillsName: [11006, 20504, 100008, 100486]
      };
    }
    let _0x5541d6 = await this.dispatchSelfPet("丽莎布布", [11006, 20504, 100008, 20009]);
    if (_0x5541d6) {
      return {
        pet: _0x5541d6,
        skillsName: [11006, 20504, 100008, 20009]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async guiwangjieui() {
    super.start();
    let _0x42fa25 = this;
    MFC.alert.show("此活动需要水次或者哈肯撒或者长老,单局500000可能得手打一下", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x31617a) {
      _0x42fa25.stop();
    }, function (_0xce2e09) {
      _0x42fa25.guiwangjie();
    }]);
  }
  async guiwangjie() {
    if (!xls.activityCard.hasLoaded) {
      xls.activityCard.load({});
    }
    while (1) {
      if (Math.max(0, 5 - MFC.attr.getAttr(MFC.attrType.dailyHellwayBattleTime)) > 0) {
        if (MFC.userInfo.curEnergy > 10) {
          let _0x567067 = xls.activityCard.getItemsByKeyValue("eventId", 146);
          for (var _0xc1f6b = MFC.serverTimer.getTime(), _0x145aa2 = 0; _0x145aa2 < _0x567067.length; _0x145aa2++) {
            var _0x1a6952 = _0x567067[_0x145aa2];
            var _0x2672d8 = MFC.serverTimer.getServerTimeFlagByServerDate(new Date(_0x1a6952.startTime.replace(/-/g, "/").replace(/_/g, "/")));
            var _0x11b233 = MFC.serverTimer.getServerTimeFlagByServerDate(new Date(_0x1a6952.endTime.replace(/-/g, "/").replace(/_/g, "/")));
            if (_0xc1f6b >= _0x2672d8 && _0x11b233 >= _0xc1f6b) {
              _0x567067 = _0x1a6952;
              break;
            }
          }
          if (_0x567067.id == 2070 || _0x567067.id == 2077 || _0x567067.id == 2084 || _0x567067.id == 2071 || _0x567067.id == 2078 || _0x567067.id == 2076 || _0x567067.id == 2083 || _0x567067.id == 2075 || _0x567067.id == 2082) {
            let _0x4f53f3 = await this.guiwangjiebattle11();
            if (!_0x4f53f3) {
              break;
            }
            const _0x5d5cbc = {
              type: 1,
              cardId: [_0x567067.id],
              petList: [_0x4f53f3.pet.getTime],
              times: 0,
              train: 0
            };
            await this.send_message("cs_pve_fight_start", _0x5d5cbc);
            await this.initBattle();
            let _0x380630 = await this.useSkill(_0x4f53f3.skillsName[0]);
            while (_0x380630.result.result == 0) {
              _0x380630 = await this.useSkill(_0x4f53f3.skillsName[1]);
              let _0x5a121b = _0x380630.result.playerInfos;
              let _0x5154ad = "";
              for (let _0x286a91 = 0; _0x286a91 < _0x5a121b.length; _0x286a91++) {
                if (_0x5a121b[_0x286a91].uid == UserManager.getInstance().userInfo.uid) {
                  _0x5154ad = _0x5a121b[_0x286a91].petInfos[0];
                  break;
                }
              }
              let _0x158e6d = _0x5154ad.useSkills.find(_0x2c1e71 => _0x2c1e71.id === _0x4f53f3.skillsName[1]).crtPP;
              if (_0x158e6d == 0) {
                if (getSeerItemNum(2001) > 1) {
                  addGameLog("回pp");
                  _0x380630 = await this.useItem(2001);
                } else if (getSeerItemNum(2002) > 1) {
                  addGameLog("回pp");
                  _0x380630 = await this.useItem(2002);
                } else if (getSeerItemNum(2003) > 1) {
                  addGameLog("回pp");
                  _0x380630 = await this.useItem(2003);
                } else {
                  addGameLog("pp不足");
                  await this.send_message("cs_quit_battle", {});
                  break;
                }
              }
            }
          } else if (_0x567067.id == 2072 || _0x567067.id == 2079 || _0x567067.id == 2074 || _0x567067.id == 2081 || _0x567067.id == 2073 || _0x567067.id == 2080) {
            let _0x57f630 = await this.guiwangjiebattle12();
            if (!_0x57f630) {
              break;
            }
            const _0x131c08 = {
              type: 1,
              cardId: [_0x567067.id],
              petList: [_0x57f630.pet.getTime],
              times: 0,
              train: 0
            };
            await this.send_message("cs_pve_fight_start", _0x131c08);
            await this.initBattle();
            let _0x1a49f7 = 0;
            let _0x1a254c;
            let _0x114ea7 = await this.useSkill(_0x57f630.skillsName[0]);
            while (_0x114ea7.result.result == 0) {
              if (_0x1a49f7 == 3) {
                _0x1a49f7 = 0;
              }
              if (_0x1a49f7 == 0) {
                _0x1a254c = _0x57f630.skillsName[1];
              }
              if (_0x1a49f7 == 1) {
                _0x1a254c = _0x57f630.skillsName[0];
              }
              _0x114ea7 = await this.useSkill(_0x1a254c);
              let _0x44b989 = _0x114ea7.result.playerInfos;
              let _0x35e625 = "";
              for (let _0x2fa255 = 0; _0x2fa255 < _0x44b989.length; _0x2fa255++) {
                if (_0x44b989[_0x2fa255].uid == UserManager.getInstance().userInfo.uid) {
                  _0x35e625 = _0x44b989[_0x2fa255].petInfos[0];
                  break;
                }
              }
              let _0x568119 = _0x35e625.useSkills.find(_0x26ce3d => _0x26ce3d.id === _0x1a254c).crtPP;
              if (_0x568119 == 0) {
                if (getSeerItemNum(2001) > 1) {
                  addGameLog("回pp");
                  _0x114ea7 = await this.useItem(2001);
                } else if (getSeerItemNum(2002) > 1) {
                  addGameLog("回pp");
                  _0x114ea7 = await this.useItem(2002);
                } else if (getSeerItemNum(2003) > 1) {
                  addGameLog("回pp");
                  _0x114ea7 = await this.useItem(2003);
                } else {
                  addGameLog("pp不足");
                  await this.send_message("cs_quit_battle", {});
                  break;
                }
              }
              _0x1a49f7++;
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
    let _0x1c998e = xls.activityTaskReset.getItems().filter(function (_0x9d2040) {
      return _0x9d2040.activityIdentity == 310;
    });
    for (let _0x375164 = 0; _0x375164 < _0x1c998e.length; _0x375164++) {
      if (TaskUtils.GetRestTaskState(_0x1c998e[_0x375164]) == -1) {
        addGameLog(_0x1c998e[_0x375164].task + "已领取");
      } else if (TaskUtils.GetRestTaskState(_0x1c998e[_0x375164]) == 0) {
        addGameLog(_0x1c998e[_0x375164].task + "未完成");
      } else {
        addGameLog(_0x1c998e[_0x375164].task + "已完成");
        addGameLog("即将进行领取=>\n领取" + _0x1c998e[_0x375164].task);
        const _0x4e8297 = {
          carnivalId: _0x1c998e[_0x375164].id
        };
        await this.send_message("cs_get_activity_task_reset_reward", _0x4e8297);
      }
    }
    let _0x337e64 = xls.activityBattlePassTask.getItems().filter(function (_0x7889bf) {
      return _0x7889bf.activityIdentity == 419;
    });
    for (let _0x2c64d0 = 0; _0x2c64d0 < _0x337e64.length; _0x2c64d0++) {
      if (BattlePassTaskUtils.GetBattlePassTaskState(_0x337e64[_0x2c64d0]) == -1) {
        addGameLog(_0x337e64[_0x2c64d0].describe + "已领取");
      } else if (BattlePassTaskUtils.GetBattlePassTaskState(_0x337e64[_0x2c64d0]) == 0) {
        addGameLog(_0x337e64[_0x2c64d0].describe + "未完成");
      } else {
        addGameLog(_0x337e64[_0x2c64d0].describe + "已完成");
        addGameLog("即将进行领取=>\n领取" + _0x337e64[_0x2c64d0].describe);
        const _0x22f6ad = {
          activityId: 419,
          taskId: _0x337e64[_0x2c64d0].id
        };
        await this.send_message("cs_activity_battle_pass_op_reward", _0x22f6ad);
        await this.send_message("cs_activity_battle_pass_op_reward", {
          activityId: 419
        });
      }
    }
    let _0x2d8e27 = xls.activityExchange.getItems().filter(function (_0x113cf0) {
      return _0x113cf0.type == 637 && _0x113cf0.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss").toString() && _0x113cf0.endTime >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss").toString() && _0x113cf0.name.indexOf("伤害达到") !== -1;
    });
    for (let _0x541a4d = 0; _0x541a4d < _0x2d8e27.length; _0x541a4d++) {
      if (ExchangeUtils.GetExchangeState(_0x2d8e27[_0x541a4d]) == 1) {
        const _0x228a2a = {
          id: _0x2d8e27[_0x541a4d].id,
          selectIndex: 0,
          subDropIdList: []
        };
        await this.send_message("cs_exchange_activity_reward", _0x228a2a);
      } else if (ExchangeUtils.GetExchangeState(_0x2d8e27[_0x541a4d]) == -1) {
        addGameLog(_0x2d8e27[_0x541a4d].name + "已领取");
      } else if (ExchangeUtils.GetExchangeState(_0x2d8e27[_0x541a4d]) == 0) {
        addGameLog(_0x2d8e27[_0x541a4d].name + "未完成");
      }
    }
    addGameLog("归亡节完成");
    this.stop();
  }
  async guiwangjiebattle11() {
    let _0xf59f94 = await this.dispatchSelfPet("哈肯萨", [22615, 14816]);
    if (_0xf59f94) {
      return {
        pet: _0xf59f94,
        skillsName: [22615, 14816]
      };
    }
    let _0x26ef37 = await this.dispatchSelfPet("赫尔卡长老", [20592, 32127]);
    if (_0x26ef37) {
      return {
        pet: _0x26ef37,
        skillsName: [20592, 32127]
      };
    }
    let _0x9cbc37 = await this.dispatchSelfPet("水次", [32528, 32529]);
    if (_0x9cbc37) {
      return {
        pet: _0x9cbc37,
        skillsName: [32528, 32529]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async guiwangjiebattle12() {
    let _0x58cf34 = await this.dispatchSelfPet("哈肯萨", [22615, 14816]);
    if (_0x58cf34) {
      return {
        pet: _0x58cf34,
        skillsName: [22615, 14816]
      };
    }
    let _0x344fdf = await this.dispatchSelfPet("赫尔卡长老", [20592, 32127]);
    if (_0x344fdf) {
      return {
        pet: _0x344fdf,
        skillsName: [20592, 32127]
      };
    }
    addGameLog("没有符合条件的精灵");
    return false;
  }
  async dispatchSelfPet(_0x2254e5, _0x27bfe4, _0x59db3a) {
    let _0x58bf60 = [];
    let _0x4412ea = [];
    for (let _0x337cba = 0; _0x337cba < _0x27bfe4.length; _0x337cba++) {
      _0x58bf60.push(_0x27bfe4[_0x337cba]);
      _0x4412ea.push(petConfig.SkillConfig.getDef(_0x27bfe4[_0x337cba]).name);
    }
    const _0x3db8e4 = {
      skills: _0x58bf60,
      features: _0x59db3a
    };
    let _0x267a89 = await getGoalPets([_0x3db8e4]);
    if (_0x267a89) {
      addGameLog("精灵背包中携有" + _0x2254e5 + "+" + _0x4412ea.join("+"));
      return _0x267a89;
    } else {
      addGameLog("背包 没有" + _0x2254e5 + "+" + _0x4412ea.join("+"));
      return false;
    }
  }
  async haoli() {
    let _0x4424cc = this;
    MFC.alert.show("确定进行开学季每日在线领好礼计时器吗?", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x2c3df6) {
      _0x4424cc.stop();
    }, function (_0x3fa512) {
      _0x4424cc.haoli1();
      _0x4424cc.stop();
    }]);
  }
  async haoli1() {
    if (typeof newSchoolTermSign === "undefined") {
      MFC.moduleManager.openModule(1376);
      MFC.moduleManager.closeModule(1376);
    }
    let _0x3edcca = // TOLOOK
    setInterval(() => {
      try {
        if (!xls.onlineReward.hasLoaded) {
          xls.onlineReward.load(() => {});
        }
        if (mongoAttr.getOnlineRewardonlineReward()[0].rewards) {
          if (mongoAttr.getOnlineRewardonlineReward()[0].rewards.siteArray.filter(function (_0x7c925a) {
            _0x7c925a !== 0;
          }).length !== 8) {
            for (let _0x31ca4a = 0; _0x31ca4a < 8; _0x31ca4a++) {
              const _0x44b294 = {
                op: 1,
                level: 0,
                site: _0x31ca4a + 1
              };
              GlobalSocket.PROTOCOL_SOCKET.send(10693, _0x44b294);
            }
          } else {
            clearInterval(_0x3edcca);
          }
        }
      } catch (_0x370a36) {}
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
    let _0x3926c5 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x1ad880 = [];
      var _0x5d0827 = SimpleAlertUi({
        height: 300,
        width: 460
      });
      _0x3926c5.alertWin = _0x5d0827;
      const _0x46d86a = {
        text: "精灵研究计划",
        x: _0x5d0827.width / 2 - 48,
        y: _0x5d0827.height / 16
      };
      var _0x58b893 = createLabel(_0x46d86a);
      _0x1ad880.push(_0x58b893);
      const _0x4244a9 = {
        text: "注意:",
        x: 30,
        y: _0x58b893.y + _0x58b893.height + 12,
        textColor: 16776960
      };
      var _0x1b5957 = createLabel(_0x4244a9);
      _0x1ad880.push(_0x1b5957);
      const _0x1ee6cb = {
        text: "请确保有胶囊可以捕抓",
        x: 40,
        y: _0x1b5957.y + _0x1b5957.height + 10
      };
      var _0x4d33b3 = createLabel(_0x1ee6cb);
      _0x1ad880.push(_0x4d33b3);
      const _0x3dd4fa = {
        text: "请确保有电池可以捕抓地图抓捕不到的",
        x: 40,
        y: _0x4d33b3.y + _0x4d33b3.height + 10
      };
      var _0x55853e = createLabel(_0x3dd4fa);
      _0x1ad880.push(_0x55853e);
      const _0x538fd7 = {
        text: "用电池捕抓的会每一只都抓",
        x: 40,
        y: _0x55853e.y + _0x55853e.height + 10
      };
      var _0x56b218 = createLabel(_0x538fd7);
      _0x1ad880.push(_0x56b218);
      const _0x209243 = {
        text: "无敌胶囊达到需要自己领取",
        x: 40,
        y: _0x56b218.y + _0x56b218.height + 10
      };
      var _0x6993f5 = createLabel(_0x209243);
      _0x1ad880.push(_0x6993f5);
      const _0x3c400b = {
        x: 70,
        y: _0x6993f5.y + _0x6993f5.height + 10,
        width: 100,
        prompt: "请输入天赋",
        storageKey: "cptalent"
      };
      var _0x140549 = createEdit(_0x3c400b);
      _0x1ad880.push(_0x140549);
      const _0x139d57 = {
        text: "比如输入30就抓到30跟31不兑换",
        x: _0x140549.x + _0x140549.width + 30,
        y: _0x140549.y + 10
      };
      var _0x5f0c3d = createLabel(_0x139d57);
      _0x1ad880.push(_0x5f0c3d);
      _0x3926c5.addAllUis(_0x1ad880);
      _0x5d0827.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x3926c5.stop();
      }, function () {
        if (_0x140549.text.length == 0) {
          MFC.bubbleAlert.showAlert("请输入天赋");
          return true;
        }
        if (!Number.isInteger(parseInt(_0x140549.text)) || _0x140549.text > 31 || parseInt(_0x140549.text) < 0) {
          MFC.bubbleAlert.showAlert("天赋错误");
          return true;
        }
        localStorage.setItem("cptalent", _0x140549.text);
        _0x3926c5.prcessBody();
      }], null);
      _0x5d0827.showAlert();
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
          var _0x2cc2f8 = MFC.attr.getAttr(MFC.attrType.dailyPetResearchFinishStatus);
          if (_0x2cc2f8 >= 3) {
            if (_0x2cc2f8 >= 4) {
              addGameLog("宝箱已经打开");
              MFC.bubbleAlert.showAlert("今天任务已经完成，不能再提交精灵了！");
              this.stop();
            }
            await this.send_message("cs_pet_research_get_reward", {});
            MFC.bubbleAlert.showAlert("今天任务已经完成，不能再提交精灵了！");
            this.stop();
          } else {
            let _0x963c2f = [];
            for (let _0x1ce65e = 0; _0x1ce65e < 3 - _0x2cc2f8; _0x1ce65e++) {
              _0x963c2f[_0x1ce65e] = xls.eventPetAnaysis.getItems().map(_0x3f8ea1 => {
                if (_0x3f8ea1.date == deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd")) {
                  return _0x3f8ea1;
                }
              }).filter(_0x386354 => _0x386354 !== undefined)[_0x1ce65e + _0x2cc2f8];
            }
            logger(_0x963c2f);
            for (let _0x395da8 = 0; _0x395da8 < _0x963c2f.length; _0x395da8++) {
              this.CatchPetDatas = null;
              if (_0x963c2f[_0x395da8].petName.indexOf("皮皮") !== -1) {
                await wait(200);
                let _0x5c51a2 = new MapCatch();
                _0x5c51a2.capIds = [4001, 4002];
                _0x5c51a2.levelIds = [1];
                _0x5c51a2.catchCounts = 1;
                _0x5c51a2.stopTalent = 31;
                await _0x5c51a2.prcessBody();
                let _0x548ca2 = _0x5c51a2.CatchPetDatas.pet.talent;
                let _0x3ca4f1 = _0x5c51a2.CatchPetDatas.pet.getTime;
                while (_0x548ca2 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x5cbc84 = new MapCatch();
                  _0x5cbc84.capIds = [4001, 4002];
                  _0x5cbc84.levelIds = [1];
                  _0x5cbc84.catchCounts = 1;
                  _0x5cbc84.stopTalent = 31;
                  await _0x5cbc84.prcessBody();
                  _0x548ca2 = _0x5cbc84.CatchPetDatas.pet.talent;
                  _0x3ca4f1 = _0x5cbc84.CatchPetDatas.pet.getTime;
                }
                if (_0x3ca4f1.toString().length > 0) {
                  const _0x3387ab = {
                    getTime: _0x3ca4f1
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x3387ab);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("仙人球") !== -1) {
                await wait(200);
                let _0x5bca1c = new MapCatch();
                _0x5bca1c.capIds = [4001, 4002];
                _0x5bca1c.levelIds = [2];
                _0x5bca1c.catchCounts = 1;
                _0x5bca1c.stopTalent = 31;
                await _0x5bca1c.prcessBody();
                let _0x523322 = _0x5bca1c.CatchPetDatas.pet.talent;
                let _0x4314f8 = _0x5bca1c.CatchPetDatas.pet.getTime;
                while (_0x523322 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x317f4e = new MapCatch();
                  _0x317f4e.capIds = [4001, 4002];
                  _0x317f4e.levelIds = [2];
                  _0x317f4e.catchCounts = 1;
                  _0x317f4e.stopTalent = 31;
                  await _0x317f4e.prcessBody();
                  _0x523322 = _0x317f4e.CatchPetDatas.pet.talent;
                  _0x4314f8 = _0x317f4e.CatchPetDatas.pet.getTime;
                }
                if (_0x4314f8.toString().length > 0) {
                  const _0x3fb125 = {
                    getTime: _0x4314f8
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x3fb125);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("贝尔") !== -1) {
                await wait(200);
                let _0x44224d = new MapCatch();
                _0x44224d.capIds = [4001, 4002];
                _0x44224d.levelIds = [9];
                _0x44224d.catchCounts = 1;
                _0x44224d.stopTalent = 31;
                await _0x44224d.prcessBody();
                let _0x2f4a24 = _0x44224d.CatchPetDatas.pet.talent;
                let _0x29abbe = _0x44224d.CatchPetDatas.pet.getTime;
                while (_0x2f4a24 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x5a156a = new MapCatch();
                  _0x5a156a.capIds = [4001, 4002];
                  _0x5a156a.levelIds = [9];
                  _0x5a156a.catchCounts = 1;
                  _0x5a156a.stopTalent = 31;
                  await _0x5a156a.prcessBody();
                  _0x2f4a24 = _0x5a156a.CatchPetDatas.pet.talent;
                  _0x29abbe = _0x5a156a.CatchPetDatas.pet.getTime;
                }
                if (_0x29abbe.toString().length > 0) {
                  const _0x9dda36 = {
                    getTime: _0x29abbe
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x9dda36);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("小鳍鱼") !== -1) {
                await wait(200);
                let _0x5bb5bb = new MapCatch();
                _0x5bb5bb.capIds = [4001, 4002];
                _0x5bb5bb.levelIds = [10];
                _0x5bb5bb.catchCounts = 1;
                _0x5bb5bb.stopTalent = 31;
                await _0x5bb5bb.prcessBody();
                let _0x2d1bba = _0x5bb5bb.CatchPetDatas.pet.talent;
                let _0x8c24a9 = _0x5bb5bb.CatchPetDatas.pet.getTime;
                while (_0x2d1bba > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x1d99ca = new MapCatch();
                  _0x1d99ca.capIds = [4001, 4002];
                  _0x1d99ca.levelIds = [10];
                  _0x1d99ca.catchCounts = 1;
                  _0x1d99ca.stopTalent = 31;
                  await _0x1d99ca.prcessBody();
                  _0x2d1bba = _0x1d99ca.CatchPetDatas.pet.talent;
                  _0x8c24a9 = _0x1d99ca.CatchPetDatas.pet.getTime;
                }
                if (_0x8c24a9.toString().length > 0) {
                  const _0x53f8a2 = {
                    getTime: _0x8c24a9
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x53f8a2);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("吉尔") !== -1) {
                await wait(200);
                let _0x51d842 = new MapCatch();
                _0x51d842.capIds = [4001, 4002];
                _0x51d842.levelIds = [13];
                _0x51d842.catchCounts = 1;
                _0x51d842.stopTalent = 31;
                await _0x51d842.prcessBody();
                let _0x170feb = _0x51d842.CatchPetDatas.pet.talent;
                let _0x35b40c = _0x51d842.CatchPetDatas.pet.getTime;
                while (_0x170feb > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x1f1dbc = new MapCatch();
                  _0x1f1dbc.capIds = [4001, 4002];
                  _0x1f1dbc.levelIds = [13];
                  _0x1f1dbc.catchCounts = 1;
                  _0x1f1dbc.stopTalent = 31;
                  await _0x1f1dbc.prcessBody();
                  _0x170feb = _0x1f1dbc.CatchPetDatas.pet.talent;
                  _0x35b40c = _0x1f1dbc.CatchPetDatas.pet.getTime;
                }
                if (_0x35b40c.toString().length > 0) {
                  const _0x638c33 = {
                    getTime: _0x35b40c
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x638c33);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("火炎贝") !== -1) {
                await wait(200);
                let _0x5581ce = new MapCatch();
                _0x5581ce.capIds = [4001, 4002];
                _0x5581ce.levelIds = [12];
                _0x5581ce.catchCounts = 1;
                _0x5581ce.stopTalent = 31;
                await _0x5581ce.prcessBody();
                let _0xf6beb6 = _0x5581ce.CatchPetDatas.pet.talent;
                let _0xe960fa = _0x5581ce.CatchPetDatas.pet.getTime;
                while (_0xf6beb6 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x22ffa6 = new MapCatch();
                  _0x22ffa6.capIds = [4001, 4002];
                  _0x22ffa6.levelIds = [12];
                  _0x22ffa6.catchCounts = 1;
                  _0x22ffa6.stopTalent = 31;
                  await _0x22ffa6.prcessBody();
                  _0xf6beb6 = _0x22ffa6.CatchPetDatas.pet.talent;
                  _0xe960fa = _0x22ffa6.CatchPetDatas.pet.getTime;
                }
                if (_0xe960fa.toString().length > 0) {
                  const _0x56e1dd = {
                    getTime: _0xe960fa
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x56e1dd);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("巴多") !== -1) {
                await wait(200);
                let _0xa31c61 = new MapCatch();
                _0xa31c61.capIds = [4001, 4002];
                _0xa31c61.levelIds = [72];
                _0xa31c61.catchCounts = 1;
                _0xa31c61.stopTalent = 31;
                await _0xa31c61.prcessBody();
                let _0x21dff8 = _0xa31c61.CatchPetDatas.pet.talent;
                let _0x32a6ec = _0xa31c61.CatchPetDatas.pet.getTime;
                while (_0x21dff8 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x5d9f4c = new MapCatch();
                  _0x5d9f4c.capIds = [4001, 4002];
                  _0x5d9f4c.levelIds = [72];
                  _0x5d9f4c.catchCounts = 1;
                  _0x5d9f4c.stopTalent = 31;
                  await _0x5d9f4c.prcessBody();
                  _0x21dff8 = _0x5d9f4c.CatchPetDatas.pet.talent;
                  _0x32a6ec = _0x5d9f4c.CatchPetDatas.pet.getTime;
                }
                if (_0x32a6ec.toString().length > 0) {
                  const _0x53cf58 = {
                    getTime: _0x32a6ec
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x53cf58);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("卡卡") !== -1) {
                await wait(200);
                let _0x3b06d2 = new MapCatch();
                _0x3b06d2.capIds = [4001, 4002];
                _0x3b06d2.levelIds = [21];
                _0x3b06d2.catchCounts = 1;
                _0x3b06d2.stopTalent = 31;
                await _0x3b06d2.prcessBody();
                let _0x1d14e8 = _0x3b06d2.CatchPetDatas.pet.talent;
                let _0x500068 = _0x3b06d2.CatchPetDatas.pet.getTime;
                while (_0x1d14e8 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x14fdbf = new MapCatch();
                  _0x14fdbf.capIds = [4001, 4002];
                  _0x14fdbf.levelIds = [21];
                  _0x14fdbf.catchCounts = 1;
                  _0x14fdbf.stopTalent = 31;
                  await _0x14fdbf.prcessBody();
                  _0x1d14e8 = _0x14fdbf.CatchPetDatas.pet.talent;
                  _0x500068 = _0x14fdbf.CatchPetDatas.pet.getTime;
                }
                if (_0x500068.toString().length > 0) {
                  const _0x5d160e = {
                    getTime: _0x500068
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x5d160e);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("玄冰兽") !== -1) {
                await wait(200);
                let _0x3ab319 = new MapCatch();
                _0x3ab319.capIds = [4001, 4002];
                _0x3ab319.levelIds = [22];
                _0x3ab319.catchCounts = 1;
                _0x3ab319.stopTalent = 31;
                await _0x3ab319.prcessBody();
                let _0x38d5c8 = _0x3ab319.CatchPetDatas.pet.talent;
                let _0x21bb26 = _0x3ab319.CatchPetDatas.pet.getTime;
                while (_0x38d5c8 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0xa45c20 = new MapCatch();
                  _0xa45c20.capIds = [4001, 4002];
                  _0xa45c20.levelIds = [22];
                  _0xa45c20.catchCounts = 1;
                  _0xa45c20.stopTalent = 31;
                  await _0xa45c20.prcessBody();
                  _0x38d5c8 = _0xa45c20.CatchPetDatas.pet.talent;
                  _0x21bb26 = _0xa45c20.CatchPetDatas.pet.getTime;
                }
                if (_0x21bb26.toString().length > 0) {
                  const _0x9a0f5 = {
                    getTime: _0x21bb26
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x9a0f5);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("幽浮") !== -1) {
                await wait(200);
                let _0x5e2464 = new MapCatch();
                _0x5e2464.capIds = [4001, 4002];
                _0x5e2464.levelIds = [34];
                _0x5e2464.catchCounts = 1;
                _0x5e2464.stopTalent = 31;
                await _0x5e2464.prcessBody();
                let _0x3349a9 = _0x5e2464.CatchPetDatas.pet.talent;
                let _0x306b4d = _0x5e2464.CatchPetDatas.pet.getTime;
                while (_0x3349a9 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x5991e7 = new MapCatch();
                  _0x5991e7.capIds = [4001, 4002];
                  _0x5991e7.levelIds = [34];
                  _0x5991e7.catchCounts = 1;
                  _0x5991e7.stopTalent = 31;
                  await _0x5991e7.prcessBody();
                  _0x3349a9 = _0x5991e7.CatchPetDatas.pet.talent;
                  _0x306b4d = _0x5991e7.CatchPetDatas.pet.getTime;
                }
                if (_0x306b4d.toString().length > 0) {
                  const _0x3bd071 = {
                    getTime: _0x306b4d
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x3bd071);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("丁格") !== -1) {
                await wait(200);
                let _0x38b7dc = new MapCatch();
                _0x38b7dc.capIds = [4001, 4002];
                _0x38b7dc.levelIds = [60];
                _0x38b7dc.catchCounts = 1;
                _0x38b7dc.stopTalent = 31;
                await _0x38b7dc.prcessBody();
                let _0x3b1eba = _0x38b7dc.CatchPetDatas.pet.talent;
                let _0x1f4f4f = _0x38b7dc.CatchPetDatas.pet.getTime;
                while (_0x3b1eba > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x44fe8f = new MapCatch();
                  _0x44fe8f.capIds = [4001, 4002];
                  _0x44fe8f.levelIds = [60];
                  _0x44fe8f.catchCounts = 1;
                  _0x44fe8f.stopTalent = 31;
                  await _0x44fe8f.prcessBody();
                  _0x3b1eba = _0x44fe8f.CatchPetDatas.pet.talent;
                  _0x1f4f4f = _0x44fe8f.CatchPetDatas.pet.getTime;
                }
                if (_0x1f4f4f.toString().length > 0) {
                  const _0x2da52f = {
                    getTime: _0x1f4f4f
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x2da52f);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("卡西") !== -1) {
                await wait(200);
                let _0x128d84 = new MapCatch();
                _0x128d84.capIds = [4001, 4002];
                _0x128d84.levelIds = [62];
                _0x128d84.catchCounts = 1;
                _0x128d84.stopTalent = 31;
                await _0x128d84.prcessBody();
                let _0xaca136 = _0x128d84.CatchPetDatas.pet.talent;
                let _0x48dc7f = _0x128d84.CatchPetDatas.pet.getTime;
                while (_0xaca136 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0xd240a = new MapCatch();
                  _0xd240a.capIds = [4001, 4002];
                  _0xd240a.levelIds = [62];
                  _0xd240a.catchCounts = 1;
                  _0xd240a.stopTalent = 31;
                  await _0xd240a.prcessBody();
                  _0xaca136 = _0xd240a.CatchPetDatas.pet.talent;
                  _0x48dc7f = _0xd240a.CatchPetDatas.pet.getTime;
                }
                if (_0x48dc7f.toString().length > 0) {
                  const _0x3f9eef = {
                    getTime: _0x48dc7f
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x3f9eef);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("莫顿") !== -1) {
                await wait(200);
                let _0x292e0d = new MapCatch();
                _0x292e0d.capIds = [4001, 4002];
                _0x292e0d.levelIds = [64];
                _0x292e0d.catchCounts = 1;
                _0x292e0d.stopTalent = 31;
                await _0x292e0d.prcessBody();
                let _0x192889 = _0x292e0d.CatchPetDatas.pet.talent;
                let _0x517633 = _0x292e0d.CatchPetDatas.pet.getTime;
                while (_0x192889 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0xbf234c = new MapCatch();
                  _0xbf234c.capIds = [4001, 4002];
                  _0xbf234c.levelIds = [64];
                  _0xbf234c.catchCounts = 1;
                  _0xbf234c.stopTalent = 31;
                  await _0xbf234c.prcessBody();
                  _0x192889 = _0xbf234c.CatchPetDatas.pet.talent;
                  _0x517633 = _0xbf234c.CatchPetDatas.pet.getTime;
                }
                if (_0x517633.toString().length > 0) {
                  const _0x496228 = {
                    getTime: _0x517633
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x496228);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("依依") !== -1) {
                await wait(200);
                let _0x16d34b = new MapCatch();
                _0x16d34b.capIds = [4001, 4002];
                _0x16d34b.levelIds = [360];
                _0x16d34b.catchCounts = 1;
                _0x16d34b.stopTalent = 31;
                await _0x16d34b.prcessBody();
                let _0x55ae51 = _0x16d34b.CatchPetDatas.pet.talent;
                let _0x2e8afb = _0x16d34b.CatchPetDatas.pet.getTime;
                while (_0x55ae51 > localStorage.getItem("cptalent")) {
                  await wait(200);
                  let _0x529a00 = new MapCatch();
                  _0x529a00.capIds = [4001, 4002];
                  _0x529a00.levelIds = [1];
                  _0x529a00.catchCounts = 1;
                  _0x529a00.stopTalent = 31;
                  await _0x529a00.prcessBody();
                  _0x55ae51 = _0x529a00.CatchPetDatas.pet.talent;
                  _0x2e8afb = _0x529a00.CatchPetDatas.pet.getTime;
                }
                if (_0x2e8afb.toString().length > 0) {
                  const _0x35c362 = {
                    getTime: _0x2e8afb
                  };
                  await this.send_message("cs_pet_research_submit_pet", _0x35c362);
                } else {
                  addGameLog("没有胶囊没抓到精灵");
                  this.stop();
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("毛毛") !== -1) {
                let _0xa6a4be = false;
                while (true) {
                  if (UserManager.getInstance().userInfo.curEnergy < 5) {
                    MFC.alert.show("电池不足,任务取消!");
                    addGameLog("电池不足,任务取消!");
                    this.stop();
                  }
                  this.CatchPetDatas = null;
                  await wait(200);
                  let _0x3245e8 = new LevelCatch();
                  _0x3245e8.capIds = [4001, 4002];
                  _0x3245e8.catchCounts = 1;
                  _0x3245e8.stopTalent = 31;
                  _0x3245e8.levelId = 27;
                  _0x3245e8.petIds = ["22", "26", "249", "153", "53"];
                  await _0x3245e8.prcessBody();
                  let _0x11d110 = _0x3245e8.CatchPetDatas.pet.talent;
                  let _0x17d15f = _0x3245e8.CatchPetDatas.pet.getTime;
                  let _0x3a7fd0 = _0x3245e8.CatchPetDatas.pet.nick;
                  logger(_0x3a7fd0);
                  if (_0x3a7fd0.indexOf("毛毛") !== -1) {
                    const _0x2d5dcd = {
                      getTime: _0x17d15f
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x2d5dcd);
                    break;
                  }
                  while (_0x11d110 > localStorage.getItem("cptalent")) {
                    this.CatchPetDatas = null;
                    await wait(200);
                    let _0x53c136 = new LevelCatch();
                    _0x53c136.capIds = [4001, 4002];
                    _0x53c136.catchCounts = 1;
                    _0x53c136.stopTalent = 31;
                    _0x53c136.levelId = 27;
                    _0x53c136.addCount = 0;
                    _0x53c136.petIds = ["22", "26", "249", "153", "53"];
                    await _0x53c136.prcessBody();
                    _0x11d110 = _0x53c136.CatchPetDatas.pet.talent;
                    _0x17d15f = _0x53c136.CatchPetDatas.pet.getTime;
                    _0x3a7fd0 = _0x53c136.CatchPetDatas.pet.nick;
                    if (_0x3a7fd0.indexOf("毛毛") !== -1) {
                      _0xa6a4be = true;
                      break;
                    }
                  }
                  if (_0xa6a4be) {
                    const _0x3a6713 = {
                      getTime: _0x17d15f
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x3a6713);
                    break;
                  }
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("浮空苗") !== -1) {
                let _0x7cd73 = false;
                while (true) {
                  if (UserManager.getInstance().userInfo.curEnergy < 5) {
                    MFC.alert.show("电池不足,任务取消!");
                    addGameLog("电池不足,任务取消!");
                    this.stop();
                  }
                  this.CatchPetDatas = null;
                  await wait(200);
                  let _0x219fe0 = new LevelCatch();
                  _0x219fe0.capIds = [4001, 4002];
                  _0x219fe0.catchCounts = 1;
                  _0x219fe0.stopTalent = 31;
                  _0x219fe0.levelId = 27;
                  _0x219fe0.petIds = ["22", "26", "249", "153", "53"];
                  await _0x219fe0.prcessBody();
                  let _0x1141b4 = _0x219fe0.CatchPetDatas.pet.talent;
                  let _0x156ca8 = _0x219fe0.CatchPetDatas.pet.getTime;
                  let _0x28244e = _0x219fe0.CatchPetDatas.pet.nick;
                  logger(_0x28244e);
                  if (_0x28244e.indexOf("浮空苗") !== -1) {
                    const _0x17ad97 = {
                      getTime: _0x156ca8
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x17ad97);
                    break;
                  }
                  while (_0x1141b4 > localStorage.getItem("cptalent")) {
                    this.CatchPetDatas = null;
                    await wait(200);
                    let _0x2be9e5 = new LevelCatch();
                    _0x2be9e5.capIds = [4001, 4002];
                    _0x2be9e5.catchCounts = 1;
                    _0x2be9e5.stopTalent = 31;
                    _0x2be9e5.levelId = 27;
                    _0x2be9e5.addCount = 0;
                    _0x2be9e5.petIds = ["22", "26", "249", "153", "53"];
                    await _0x2be9e5.prcessBody();
                    _0x1141b4 = _0x2be9e5.CatchPetDatas.pet.talent;
                    _0x156ca8 = _0x2be9e5.CatchPetDatas.pet.getTime;
                    _0x28244e = _0x2be9e5.CatchPetDatas.pet.nick;
                    if (_0x28244e.indexOf("浮空苗") !== -1) {
                      _0x7cd73 = true;
                      break;
                    }
                  }
                  if (_0x7cd73) {
                    const _0x1d4a8a = {
                      getTime: _0x156ca8
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x1d4a8a);
                    break;
                  }
                }
              }
              if (_0x963c2f[_0x395da8].petName.indexOf("米隆") !== -1) {
                let _0xcad05b = false;
                while (true) {
                  if (UserManager.getInstance().userInfo.curEnergy < 5) {
                    MFC.alert.show("电池不足,任务取消!");
                    addGameLog("电池不足,任务取消!");
                    this.stop();
                  }
                  this.CatchPetDatas = null;
                  await wait(200);
                  let _0x16a443 = new LevelCatch();
                  _0x16a443.capIds = [4001, 4002];
                  _0x16a443.catchCounts = 1;
                  _0x16a443.stopTalent = 31;
                  _0x16a443.levelId = 34;
                  _0x16a443.petIds = ["107", "99", "236", "64"];
                  await _0x16a443.prcessBody();
                  let _0x1212da = _0x16a443.CatchPetDatas.pet.talent;
                  let _0x5021fe = _0x16a443.CatchPetDatas.pet.getTime;
                  let _0x50617a = _0x16a443.CatchPetDatas.pet.nick;
                  logger(_0x50617a);
                  if (_0x50617a.indexOf("米隆") !== -1) {
                    const _0x20c6d0 = {
                      getTime: _0x5021fe
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x20c6d0);
                    break;
                  }
                  while (_0x1212da > localStorage.getItem("cptalent")) {
                    this.CatchPetDatas = null;
                    await wait(200);
                    let _0x41f179 = new LevelCatch();
                    _0x41f179.capIds = [4001, 4002];
                    _0x41f179.catchCounts = 1;
                    _0x41f179.stopTalent = 31;
                    _0x41f179.levelId = 34;
                    _0x41f179.addCount = 0;
                    _0x41f179.petIds = ["107", "99", "236", "64"];
                    await _0x41f179.prcessBody();
                    _0x1212da = _0x41f179.CatchPetDatas.pet.talent;
                    _0x5021fe = _0x41f179.CatchPetDatas.pet.getTime;
                    _0x50617a = _0x41f179.CatchPetDatas.pet.nick;
                    if (_0x50617a.indexOf("米隆") !== -1) {
                      _0xcad05b = true;
                      break;
                    }
                  }
                  if (_0xcad05b) {
                    const _0x2b5f36 = {
                      getTime: _0x5021fe
                    };
                    await this.send_message("cs_pet_research_submit_pet", _0x2b5f36);
                    break;
                  }
                }
              }
            }
            _0x2cc2f8 = MFC.attr.getAttr(MFC.attrType.dailyPetResearchFinishStatus);
            if (_0x2cc2f8 >= 3) {
              if (_0x2cc2f8 >= 4) {
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
    } catch (_0x2ec3e1) {
      logger(_0x2ec3e1);
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
    let _0x46ea96 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x2594f5 = [];
      var _0x419bdf = SimpleAlertUi({
        height: 350,
        width: 400
      });
      _0x46ea96.alertWin = _0x419bdf;
      const _0x54a3f0 = {
        text: "精灵探索小分队",
        x: _0x419bdf.applicationWidth / 2 - 35,
        y: _0x419bdf.height / 15
      };
      let _0x49855c = createLabel(_0x54a3f0);
      _0x49855c.size = 20;
      _0x2594f5.push(_0x49855c);
      const _0x324a5b = {
        x: 70,
        y: _0x49855c.y + 50,
        width: 100,
        prompt: "输入系别",
        storageKey: "text"
      };
      var _0x25069f = createEdit(_0x324a5b);
      _0x2594f5.push(_0x25069f);
      const _0x80247c = {
        text: "比如草系就输入草\n双属性输入水超",
        x: _0x25069f.x + _0x25069f.width + 50,
        y: _0x25069f.y
      };
      let _0x43ec0f = createLabel(_0x80247c);
      _0x2594f5.push(_0x43ec0f);
      const _0x479a7f = {
        text: "初级",
        x: _0x419bdf.width / 2 - 60,
        y: _0x25069f.y + 60
      };
      let _0x1e962a = createLabel(_0x479a7f);
      _0x1e962a.size = 20;
      _0x2594f5.push(_0x1e962a);
      const _0x384f8c = {
        x: _0x1e962a.x + 70,
        y: _0x1e962a.y,
        selected: true,
        storageKey: "cjpq"
      };
      let _0x127c21 = createToggle(_0x384f8c);
      _0x2594f5.push(_0x127c21);
      const _0x26e231 = {
        text: "中级",
        x: _0x1e962a.x,
        y: _0x1e962a.y + 40
      };
      let _0x3ae683 = createLabel(_0x26e231);
      _0x3ae683.size = 20;
      _0x2594f5.push(_0x3ae683);
      const _0x1a4080 = {
        x: _0x3ae683.x + 70,
        y: _0x3ae683.y,
        selected: true,
        storageKey: "zjpq"
      };
      let _0x12269c = createToggle(_0x1a4080);
      _0x2594f5.push(_0x12269c);
      const _0x168740 = {
        text: "高级",
        x: _0x1e962a.x,
        y: _0x3ae683.y + 40
      };
      let _0x4ec2b9 = createLabel(_0x168740);
      _0x4ec2b9.size = 20;
      _0x2594f5.push(_0x4ec2b9);
      const _0x5443a9 = {
        x: _0x4ec2b9.x + 70,
        y: _0x4ec2b9.y,
        selected: true,
        storageKey: "gjpq"
      };
      let _0xed5135 = createToggle(_0x5443a9);
      _0x2594f5.push(_0xed5135);
      _0x46ea96.addAllUis(_0x2594f5);
      _0x419bdf.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x46ea96.stop();
      }, function () {
        localStorage.setItem("cjpq", _0x127c21.selected);
        localStorage.setItem("zjpq", _0x12269c.selected);
        localStorage.setItem("gjpq", _0xed5135.selected);
        localStorage.setItem("text", _0x25069f.text);
        if (_0x25069f.text.length == 0 || _0x25069f.text.indexOf("系") != -1) {
          MFC.bubbleAlert.showAlert("请输入有效系别");
          return true;
        } else if (petConfig.ElemTypesConfig.getSingleType().filter(function (_0x480850) {
          return _0x480850.cn.indexOf(_0x25069f.text) !== -1;
        }).length == 0 && petConfig.ElemTypesConfig.getDoubbleType().filter(function (_0x5491e9) {
          return _0x5491e9.cn.indexOf(_0x25069f.text) !== -1;
        }).length == 0) {
          MFC.bubbleAlert.showAlert("有效系别没有" + _0x25069f.text);
          return true;
        }
        if (_0x127c21.selected && _0x12269c.selected && _0xed5135.selected || _0x127c21.selected && _0x12269c.selected || _0x127c21.selected && _0xed5135.selected || _0x12269c.selected && _0xed5135.selected) {
          MFC.bubbleAlert.showAlert("只能勾选一个等级");
          return true;
        }
        if (_0x127c21.selected == false && _0x12269c.selected == false && _0xed5135.selected == false) {
          MFC.bubbleAlert.showAlert("请勾选一个等级");
          return true;
        }
        _0x46ea96.type = _0x25069f.text.toString();
        if (_0x127c21.selected) {
          _0x46ea96.task[0] = 1;
          addGameLog("已选择" + _0x25069f.text + "初级");
        }
        if (_0x12269c.selected) {
          _0x46ea96.task[1] = 1;
          addGameLog("已选择" + _0x25069f.text + "中级");
        }
        if (_0xed5135.selected) {
          _0x46ea96.task[2] = 1;
          addGameLog("已选择" + _0x25069f.text + "高级");
        }
        _0x46ea96.prcessBody();
      }], null);
      _0x419bdf.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x24ab10;
      let _0x450a7e = this.type.toString();
      let _0x2bf86b = await this.send_message("cs_get_pet_explore_list", {});
      if (_0x2bf86b.petExploreList[0] || _0x2bf86b.petExploreList[1]) {
        if (MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) > 0) {
          addGameLog("普通委派已放置");
          if (_0x2bf86b.petExploreList[0].endTime * 1000 - MFC.serverTimer.date.getTime() > 0) {
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
            if (_0x2bf86b.petExploreList[1].endTime * 1000 - MFC.serverTimer.date.getTime() > 0) {
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
        _0x24ab10 = PetManager.getInstance().getAllPets().filter(function (_0x24045f) {
          return _0x24045f.level >= 20 && _0x24045f.level < 40 && _0x24045f.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) && _0x24045f.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) && petConfig.ElemTypesConfig.getDef(PetConfig.getDef(_0x24045f.petId).elemType).cn.replace(/\s/g, "").indexOf(_0x450a7e.toString()) !== -1 && MFC.userInfo.defaultTeam.indexOf(_0x24045f.getTime) == -1 && MFC.userInfo.defaultTeam1.indexOf(_0x24045f.getTime) == -1 && MFC.userInfo.defaultTeam2.indexOf(_0x24045f.getTime) == -1 && MFC.userInfo.defaultTeam3.indexOf(_0x24045f.getTime) == -1 && MFC.userInfo.defaultTeam4.indexOf(_0x24045f.getTime) == -1 && MFC.userInfo.defaultTeam5.indexOf(_0x24045f.getTime) == -1 && MFC.userInfo.defaultTeam6.indexOf(_0x24045f.getTime) == -1 && MFC.userInfo.campaignDefaultTeam.indexOf(_0x24045f.getTime) == -1 && MFC.userInfo.expeditionTeam.indexOf(_0x24045f.getTime) == -1;
        });
      }
      if (this.task[1]) {
        _0x24ab10 = PetManager.getInstance().getAllPets().filter(function (_0x53f802) {
          return _0x53f802.level >= 40 && _0x53f802.level < 60 && _0x53f802.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) && _0x53f802.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) && petConfig.ElemTypesConfig.getDef(PetConfig.getDef(_0x53f802.petId).elemType).cn.replace(/\s/g, "").indexOf(_0x450a7e.toString()) !== -1 && MFC.userInfo.defaultTeam.indexOf(_0x53f802.getTime) == -1 && MFC.userInfo.defaultTeam1.indexOf(_0x53f802.getTime) == -1 && MFC.userInfo.defaultTeam2.indexOf(_0x53f802.getTime) == -1 && MFC.userInfo.defaultTeam3.indexOf(_0x53f802.getTime) == -1 && MFC.userInfo.defaultTeam4.indexOf(_0x53f802.getTime) == -1 && MFC.userInfo.defaultTeam5.indexOf(_0x53f802.getTime) == -1 && MFC.userInfo.defaultTeam6.indexOf(_0x53f802.getTime) == -1 && MFC.userInfo.campaignDefaultTeam.indexOf(_0x53f802.getTime) == -1 && MFC.userInfo.expeditionTeam.indexOf(_0x53f802.getTime) == -1;
        });
      }
      if (this.task[2]) {
        _0x24ab10 = PetManager.getInstance().getAllPets().filter(function (_0x2db7bb) {
          return _0x2db7bb.level >= 60 && _0x2db7bb.level <= 100 && _0x2db7bb.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) && _0x2db7bb.getTime != MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) && petConfig.ElemTypesConfig.getDef(PetConfig.getDef(_0x2db7bb.petId).elemType).cn.replace(/\s/g, "").indexOf(_0x450a7e.toString()) !== -1 && MFC.userInfo.defaultTeam.indexOf(_0x2db7bb.getTime) == -1 && MFC.userInfo.defaultTeam1.indexOf(_0x2db7bb.getTime) == -1 && MFC.userInfo.defaultTeam2.indexOf(_0x2db7bb.getTime) == -1 && MFC.userInfo.defaultTeam3.indexOf(_0x2db7bb.getTime) == -1 && MFC.userInfo.defaultTeam4.indexOf(_0x2db7bb.getTime) == -1 && MFC.userInfo.defaultTeam5.indexOf(_0x2db7bb.getTime) == -1 && MFC.userInfo.defaultTeam6.indexOf(_0x2db7bb.getTime) == -1 && MFC.userInfo.campaignDefaultTeam.indexOf(_0x2db7bb.getTime) == -1 && MFC.userInfo.expeditionTeam.indexOf(_0x2db7bb.getTime) == -1;
        });
      }
      if (_0x24ab10.filter(_0x41d25f => _0x41d25f !== undefined).length == 0) {
        addGameLog("该系别没放置背包的等级宠物数量为0");
        this.stop();
      }
      if (!_0x2bf86b.petExploreList[0] && !_0x2bf86b.petExploreList[1]) {
        addGameLog("没有派遣任务正在进行");
        if (MFC.userInfo.vipLevel == 0) {
          addGameLog("没有VIP,只派遣普通探索");
          const _0x21a214 = {
            petGetTime: _0x24ab10[0].getTime,
            explorePosition: 0
          };
          await this.send_message("cs_pet_explore", _0x21a214);
          addGameLog("放置" + _0x24ab10[0].nick);
        } else if (_0x24ab10.length < 2) {
          addGameLog("该属性精灵只有1只,只进行普通派遣");
          const _0x448b83 = {
            petGetTime: _0x24ab10[0].getTime,
            explorePosition: 0
          };
          await this.send_message("cs_pet_explore", _0x448b83);
          addGameLog("放置" + _0x24ab10[0].nick);
        } else {
          const _0x49b548 = {
            petGetTime: _0x24ab10[0].getTime,
            explorePosition: 0
          };
          await this.send_message("cs_pet_explore", _0x49b548);
          const _0x20f44c = {
            petGetTime: _0x24ab10[1].getTime,
            explorePosition: 1
          };
          await this.send_message("cs_pet_explore", _0x20f44c);
          addGameLog("放置" + _0x24ab10[0].nick);
          addGameLog("放置" + _0x24ab10[1].nick);
        }
      } else {
        if (MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdStart) > 0) {
          addGameLog("普通委派已放置");
          if (_0x2bf86b.petExploreList[0].endTime * 1000 - MFC.serverTimer.date.getTime() > 0) {
            addGameLog("普通委派正在进行");
          } else {
            addGameLog("领取普通委派");
            await this.send_message("cs_get_pet_explore_back", {
              petPosition: 0
            });
            await wait(500);
            const _0x168c16 = {
              petGetTime: _0x24ab10[0].getTime,
              explorePosition: 0
            };
            await this.send_message("cs_pet_explore", _0x168c16);
            addGameLog("放置" + _0x24ab10[0].nick);
          }
        } else {
          addGameLog("普通委派未放置");
          await wait(500);
          const _0x426202 = {
            petGetTime: _0x24ab10[0].getTime,
            explorePosition: 0
          };
          await this.send_message("cs_pet_explore", _0x426202);
          addGameLog("放置" + _0x24ab10[0].nick);
        }
        if (MFC.userInfo.vipLevel == 0) {
          addGameLog("没有VIP,只派遣普通探索");
        } else if (MFC.attr.getAttr(MFC.attrType.foreverPetExploreIdEnd) > 0) {
          addGameLog("超no委派已放置");
          if (_0x2bf86b.petExploreList[1].endTime * 1000 - MFC.serverTimer.date.getTime() > 0) {
            addGameLog("超no委派正在进行");
          } else {
            addGameLog("领取超no委派");
            await this.send_message("cs_get_pet_explore_back", {
              petPosition: 1
            });
            await wait(500);
            const _0x1757a1 = {
              petGetTime: _0x24ab10[1].getTime,
              explorePosition: 1
            };
            await this.send_message("cs_pet_explore", _0x1757a1);
            addGameLog("放置" + _0x24ab10[1].nick);
          }
        } else {
          addGameLog("超no委派未放置");
          await wait(500);
          const _0x3fbd5c = {
            petGetTime: _0x24ab10[1].getTime,
            explorePosition: 1
          };
          await this.send_message("cs_pet_explore", _0x3fbd5c);
          addGameLog("放置" + _0x24ab10[1].nick);
        }
      }
      addGameLog("精灵探索小分队完成");
      this.stop();
    } catch (_0xa500ff) {}
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
    let _0x8421b9 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x44b4c1 = SimpleAlertUi({});
      let _0x52711c = createLabel({
        text: "确定进行扫荡吗?",
        y: 25
      });
      _0x52711c.x = _0x44b4c1.width / 2 - _0x52711c.width / 2;
      _0x44b4c1.addChild(_0x52711c);
      const _0x560a30 = {
        text: "预计获取" + _0x8421b9.goalItem.name + "数量: " + _0x8421b9.goalItem.needNum,
        y: _0x52711c.y + _0x52711c.height + 15
      };
      let _0x39089d = createLabel(_0x560a30);
      _0x39089d.x = _0x44b4c1.width / 2 - _0x39089d.width / 2;
      _0x44b4c1.addChild(_0x39089d);
      _0x44b4c1.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x8421b9.stop();
      }, function () {
        _0x8421b9.prcessBody();
      }], null);
      _0x44b4c1.showAlert();
    });
  }
  async prcessBody() {
    let _0x5485bd = {};
    let _0x2808c4 = 0;
    let _0x3085c3 = 0;
    try {
      addGameLog("开始进行扫荡: " + this.levelName);
      while (1) {
        if (UserManager.getInstance().userInfo.curEnergy >= this.userBattry) {
          let _0x3011e0 = await this.send_message("cs_sd_pve_battle", {
            levelId: this.levelId,
            loop: 1
          });
          _0x2808c4 = _0x2808c4 + 1;
          await wait(300);
          let _0x1831fe = _0x3011e0.dropInfo.drops[0].itemList;
          let _0x1d74a7 = "";
          _0x1831fe.forEach(_0x137029 => {
            _0x1d74a7 = _0x1d74a7 + "\n" + xls.item.getItem(_0x137029.itemId).name + "数量 :" + _0x137029.itemNum;
            if (!_0x5485bd.hasOwnProperty(_0x137029.itemId)) {
              _0x5485bd[_0x137029.itemId + ""] = _0x137029.itemNum;
            } else {
              _0x5485bd[_0x137029.itemId + ""] = _0x5485bd[_0x137029.itemId + ""] + _0x137029.itemNum;
            }
            if (_0x137029.itemId == this.goalItem.itemId) {
              _0x3085c3 = _0x3085c3 + _0x137029.itemNum;
            }
          });
          addGameLog("本次扫荡\n" + _0x1d74a7);
          addGameLog("========");
          if (_0x3085c3 >= this.goalItem.needNum) {
            let _0x3820d4 = "";
            for (let _0x8c0e9a in _0x5485bd) {
              if (_0x5485bd.hasOwnProperty(_0x8c0e9a)) {
                _0x3820d4 = _0x3820d4 + "\n" + xls.item.getItem(_0x8c0e9a).name + "数量 :" + _0x5485bd[_0x8c0e9a];
              }
            }
            _0x3820d4 = _0x3820d4 + "\n花费电池数 :" + _0x2808c4 * this.userBattry;
            addGameLog("扫荡总计: \n" + _0x3820d4);
            break;
          }
        } else {
          addGameLog("电池不足,停止扫荡");
          let _0x4b9415 = "";
          for (let _0x5ef713 in _0x5485bd) {
            if (_0x5485bd.hasOwnProperty(_0x5ef713)) {
              _0x4b9415 = _0x4b9415 + "\n" + xls.item.getItem(_0x5ef713).name + "数量 :" + _0x5485bd[_0x5ef713];
            }
          }
          _0x4b9415 = _0x4b9415 + "\n花费电池数 :" + _0x2808c4 * this.userBattry;
          addGameLog("扫荡总计: \n" + _0x4b9415);
          break;
        }
      }
      this.stop();
    } catch (_0x533157) {
      let _0x4f46da = "";
      for (let _0x14f99c in _0x5485bd) {
        if (_0x5485bd.hasOwnProperty(_0x14f99c)) {
          _0x4f46da = _0x4f46da + "\n" + xls.item.getItem(_0x14f99c).name + "数量 :" + _0x5485bd[_0x14f99c];
        }
      }
      _0x4f46da = _0x4f46da + "\n花费电池数 :" + _0x2808c4 * this.userBattry;
      addGameLog("扫荡总计: \n" + _0x4f46da);
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
    let _0x6f6dc2 = this;
    MFC.alert.show("确定进行一键刷水滴吗?(请确保挑战阵容1首位技能是大招)", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x3c2444) {
      _0x6f6dc2.stop();
    }, function (_0x2385b5) {
      _0x6f6dc2.prcessBody();
    }]);
  }
  async waterfight() {
    let _0x25e94a = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam1[0]).skills[0];
    await this.send_message("cs_pve_activity_battle", {
      levelId: 5,
      battleType: 3
    });
    await this.initBattle();
    let _0x1b0472 = await this.useSkill(_0x25e94a);
    while (_0x1b0472.result.result === 0) {
      let _0x48a1f6 = _0x1b0472.result.playerInfos.find(_0xf18c8d => _0xf18c8d.uid === MFC.userInfo.uid);
      let _0x427cf4 = _0x48a1f6 ? _0x48a1f6.nextRoundOP : _0x1b0472.result.playerInfos[1].nextRoundOP;
      if (_0x427cf4 !== 1) {
        addGameLog("首发被击败");
        break;
      }
      if (_0x1b0472.result.roundNum > 5) {
        break;
      }
      addGameLog("未击败，继续攻击");
      _0x1b0472 = await this.useSkill(_0x25e94a);
    }
    await wait(300);
  }
  async treefight() {
    let _0x28b82f = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
    await this.send_message("cs_pve_activity_battle", {
      levelId: [5, 6, 7, 8][Math.floor(Math.random() * 4)],
      battleType: 3
    });
    await this.initBattle();
    let _0x322b3a = await this.useSkill(_0x28b82f);
    while (_0x322b3a.result.result === 0) {
      let _0x1afbc6 = _0x322b3a.result.playerInfos.find(_0x43bf90 => _0x43bf90.uid === MFC.userInfo.uid);
      let _0x3843d5 = _0x1afbc6 ? _0x1afbc6.nextRoundOP : _0x322b3a.result.playerInfos[1].nextRoundOP;
      if (_0x3843d5 !== 1) {
        addGameLog("首发被击败");
        break;
      }
      if (_0x322b3a.result.roundNum > 5) {
        break;
      }
      addGameLog("未击败，继续攻击");
      _0x322b3a = await this.useSkill(_0x28b82f);
    }
    await wait(300);
  }
  async prcessBody() {
    try {
      let _0x7beb9b = 0;
      while (true) {
        let _0x282291 = await this.send_message("cs_get_mapBoss_data", {
          planetId: 1
        });
        _0x7beb9b = _0x282291.reward["6"] + _0x282291.reward["7"] + _0x282291.reward["8"];
        if (_0x7beb9b > 4) {
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
    } catch (_0x59f301) {}
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
    let _0x39cbbb = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x2a4054 = [];
      var _0x3c7b41 = SimpleAlertUi({
        height: 450,
        width: 450
      });
      _0x39cbbb.alertWin = _0x3c7b41;
      const _0x453b16 = {
        text: "战斗阶梯",
        x: _0x3c7b41.width / 2 - 32,
        y: _0x3c7b41.height / 16
      };
      var _0x4ce7c8 = createLabel(_0x453b16);
      _0x2a4054.push(_0x4ce7c8);
      const _0x595175 = {
        text: `1.艾姐阵容是艾尔伊洛增幅幻化利刃1号位
  瞬杀光闪击2号
  奥斯卡圣灵击3号(100级)
  绝命火焰4号
  艾姐固伤打不到260有可能在第8卡关哦`,
        x: _0x3c7b41.width / 15 + 47,
        y: _0x4ce7c8.y + _0x4ce7c8.height + 2,
        textColor: 16776960
      };
      let _0x4ffb1b = createLabel(_0x595175);
      _0x2a4054.push(_0x4ffb1b);
      const _0x1e00a2 = {
        text: `2.塞维尔阵容是塞维尔增幅女王之鞭1号位
  瞬杀光闪击2号
  奥斯卡圣灵击3号(100级)
  绝命火焰4号`,
        x: _0x3c7b41.width / 15 + 47,
        y: _0x4ffb1b.y + _0x4ffb1b.height + 10,
        textColor: 16776960
      };
      let _0xb71ab3 = createLabel(_0x1e00a2);
      _0x2a4054.push(_0xb71ab3);
      const _0x687165 = {
        text: `3.最下面阵容是给没有艾姐跟塞维尔的
  瞬杀光闪击1号位
  奥斯卡圣灵击2号(100级)
  绝命火焰3号`,
        x: _0x3c7b41.width / 15 + 47,
        y: _0xb71ab3.y + _0xb71ab3.height + 10,
        textColor: 16776960
      };
      let _0x1bbb92 = createLabel(_0x687165);
      _0x2a4054.push(_0x1bbb92);
      const _0xfde588 = {
        text: `注意:如果没有艾姐跟塞维尔可以手动打过前8关
并且阵容位置准确条件下选择两个阵容其中一个开始
此功能会自动识别上阵`,
        x: _0x3c7b41.width / 15,
        y: _0x1bbb92.y + _0x1bbb92.height + 10,
        textColor: 16711808
      };
      let _0x4bbc93 = createLabel(_0xfde588);
      _0x2a4054.push(_0x4bbc93);
      _0x39cbbb.addAllUis(_0x2a4054);
      _0x3c7b41.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x39cbbb.stop();
      }, function () {
        _0x39cbbb.prcessBody();
      }], null);
      _0x3c7b41.showAlert();
    });
  }
  async ui() {
    super.start();
    let _0x1f66bf = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x4f0701 = [];
      var _0x2a0e37 = SimpleAlertUi({
        height: 200,
        width: 300
      });
      _0x1f66bf.alertWin = _0x2a0e37;
      const _0x49aa2a = {
        x: _0x2a0e37.width / 3.75,
        y: _0x2a0e37.height / 4.25,
        selected: true,
        storageKey: "jtchois1"
      };
      let _0x565565 = createRadio(_0x49aa2a);
      _0x4f0701.push(_0x565565);
      const _0x4e6634 = {
        x: _0x2a0e37.width / 3.75,
        y: _0x2a0e37.height / 2.35,
        selected: false,
        storageKey: "jtchois2"
      };
      let _0x149bd8 = createRadio(_0x4e6634);
      _0x4f0701.push(_0x149bd8);
      const _0x6eda72 = {
        text: "请在圆点点击选择战斗阶梯类型",
        x: 25 + _0x565565.width,
        y: _0x2a0e37.height / 10
      };
      var _0x104e0b = createLabel(_0x6eda72);
      _0x4f0701.push(_0x104e0b);
      const _0xe7a8bb = {
        text: "黄金十二宫",
        x: _0x565565.x + 10 + _0x565565.width,
        y: _0x2a0e37.height / 4.5
      };
      var _0x271c1d = createLabel(_0xe7a8bb);
      _0x4f0701.push(_0x271c1d);
      const _0x27fa6d = {
        text: "冥界十二宫",
        x: _0x565565.x + 10 + _0x565565.width,
        y: _0x271c1d.y * 1.5 + _0x2a0e37.height / 11
      };
      var _0x38fe33 = createLabel(_0x27fa6d);
      _0x4f0701.push(_0x38fe33);
      _0x1f66bf.addAllUis(_0x4f0701);
      _0x2a0e37.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {}, function () {
        localStorage.setItem("jtchois1", _0x565565.selected);
        localStorage.setItem("jtchois2", _0x149bd8.selected);
        if (_0x565565.selected) {
          _0x1f66bf.choice[0] = 1;
          _0x1f66bf.Choice();
        }
        if (_0x149bd8.selected) {
          _0x1f66bf.choice[1] = 1;
          _0x1f66bf.Choice();
        }
      }], null);
      _0x2a0e37.showAlert();
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
    let _0x3b86e4 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      let _0x56ad4a = [];
      var _0x2d7746 = SimpleAlertUi({
        height: 250,
        width: 350
      });
      _0x3b86e4.alertWin = _0x2d7746;
      const _0x10407c = {
        text: "请选择对战阵容",
        x: _0x2d7746.applicationWidth / 2 - 70,
        y: _0x2d7746.height / 15
      };
      let _0x247404 = createLabel(_0x10407c);
      _0x247404.size = 20;
      _0x56ad4a.push(_0x247404);
      const _0x31b938 = {
        text: "艾姐阵容",
        x: _0x2d7746.applicationWidth / 2 - 40,
        y: _0x247404.y + 40
      };
      let _0xc1d70 = createLabel(_0x31b938);
      _0x56ad4a.push(_0xc1d70);
      const _0x443f10 = {
        x: _0xc1d70.x + 70,
        y: _0xc1d70.y,
        selected: true,
        storageKey: "jt1"
      };
      let _0x395681 = createToggle(_0x443f10);
      _0x56ad4a.push(_0x395681);
      const _0x261e72 = {
        text: "塞维尔阵容",
        x: _0x2d7746.applicationWidth / 2 - 50,
        y: _0xc1d70.y + 40
      };
      let _0x3ab50d = createLabel(_0x261e72);
      _0x56ad4a.push(_0x3ab50d);
      const _0x5f1a67 = {
        x: _0x395681.x,
        y: _0x3ab50d.y,
        selected: true,
        storageKey: "jt2"
      };
      let _0xd2c9e4 = createToggle(_0x5f1a67);
      _0x56ad4a.push(_0xd2c9e4);
      const _0x23cb46 = {
        text: "光闪击+奥斯卡+绝命",
        x: _0x2d7746.applicationWidth / 2 - 120,
        y: _0x3ab50d.y + 40
      };
      let _0x3ef0bf = createLabel(_0x23cb46);
      _0x56ad4a.push(_0x3ef0bf);
      const _0x4e10e6 = {
        x: _0xd2c9e4.x,
        y: _0x3ef0bf.y,
        selected: true,
        storageKey: "jt3"
      };
      let _0x474637 = createToggle(_0x4e10e6);
      _0x56ad4a.push(_0x474637);
      _0x3b86e4.addAllUis(_0x56ad4a);
      _0x2d7746.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x3b86e4.stop();
      }, function () {
        localStorage.setItem("jt1", _0x395681.selected);
        localStorage.setItem("jt2", _0xd2c9e4.selected);
        localStorage.setItem("jt3", _0x474637.selected);
        if (_0x395681.selected && _0xd2c9e4.selected && _0x474637.selected || _0x395681.selected && _0xd2c9e4.selected || _0xd2c9e4.selected && _0x474637.selected || _0x395681.selected && _0x474637.selected) {
          addGameLog("不要选择多个阵容");
          _0x3b86e4.stop();
        } else if (_0x395681.selected || _0xd2c9e4.selected || _0x474637.selected) {
          if (_0x395681.selected) {
            _0x3b86e4.team[0] = 1;
          }
          if (_0xd2c9e4.selected) {
            _0x3b86e4.team[1] = 1;
          }
          if (_0x474637.selected) {
            _0x3b86e4.team[2] = 1;
          }
        } else {
          addGameLog("请选择阵容");
          _0x3b86e4.stop();
        }
        _0x3b86e4.teamchoice();
      }], null);
      _0x2d7746.showAlert();
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
      let _0x28bb0d = await this.send_message("cs_combat_ladder_query_battle", {});
      let _0xa7a00f = await this.send_message("cs_combat_ladder_save_record", {
        type: 3
      });
      if (_0x28bb0d.petList.length == 0) {
        logger("还没有确认阵容");
        if (_0xa7a00f.petList.find(_0x19a933 => _0x19a933.useSkills.find(_0x13f387 => _0x13f387.id === 10630)) || _0xa7a00f.petList.find(_0x431f79 => _0x431f79.useSkills.find(_0x1ee00c => _0x1ee00c.id === 100023))) {
          logger("阵容有光闪击");
          if (_0xa7a00f.petList.find(_0x57f512 => _0x57f512.useSkills.find(_0x52f454 => _0x52f454.id === 14861))) {
            logger("阵容有圣灵击");
            if (_0xa7a00f.petList.find(_0xcd0858 => _0xcd0858.useSkills.find(_0x25a1a5 => _0x25a1a5.id === 11022))) {
              logger("阵容有绝命火焰");
              if (_0xa7a00f.petList.find(_0x4e1cac => _0x4e1cac.useSkills.find(_0x45a40c => _0x45a40c.id === 100377)) || _0xa7a00f.petList.find(_0x200ab2 => _0x200ab2.useSkills.find(_0x12f6a0 => _0x12f6a0.id === 10864))) {
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
        if (_0x28bb0d.petList.find(_0x4fdc55 => _0x4fdc55.useSkills.find(_0x443169 => _0x443169.id === 10630)) || _0x28bb0d.petList.find(_0xd1b94c => _0xd1b94c.useSkills.find(_0x286094 => _0x286094.id === 100023))) {
          logger("阵容有光闪击");
          if (_0x28bb0d.petList.find(_0x2b20d0 => _0x2b20d0.useSkills.find(_0x342501 => _0x342501.id === 14861))) {
            logger("阵容有圣灵击");
            if (_0x28bb0d.petList.find(_0x470cef => _0x470cef.useSkills.find(_0x4c1ddb => _0x4c1ddb.id === 11022))) {
              logger("阵容有绝命火焰");
              if (_0x28bb0d.levelId > 9) {
                addGameLog("阵容符合要求");
                await this.fight();
              } else if (_0x28bb0d.petList.find(_0x34038e => _0x34038e.useSkills.find(_0xc890d7 => _0xc890d7.id === 100377)) || _0xa7a00f.petList.find(_0x490675 => _0x490675.useSkills.find(_0x33a2df => _0x33a2df.id === 10864))) {
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
      let _0x316e73 = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x316e73);
      if (_0x316e73.petList.length == 0) {
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
      let _0x18ab7b = await this.send_message("cs_combat_ladder_query_battle", {});
      let _0xd97450 = await this.send_message("cs_combat_ladder_save_record", {
        type: 3
      });
      if (_0x18ab7b.petList.length == 0) {
        logger("还没有确认阵容");
        if (_0xd97450.petList.find(_0x3ed13f => _0x3ed13f.useSkills.find(_0x2e13aa => _0x2e13aa.id === 10630)) || _0xd97450.petList.find(_0x944953 => _0x944953.useSkills.find(_0xb099eb => _0xb099eb.id === 100023))) {
          logger("阵容有光闪击");
          if (_0xd97450.petList.find(_0xf7f1b => _0xf7f1b.useSkills.find(_0x4cb474 => _0x4cb474.id === 14861))) {
            logger("阵容有圣灵击");
            if (_0xd97450.petList.find(_0x2048e0 => _0x2048e0.useSkills.find(_0x4fd8ac => _0x4fd8ac.id === 11022))) {
              logger("阵容有绝命火焰");
              if (_0xd97450.petList.find(_0x5b72fc => _0x5b72fc.useSkills.find(_0x4099a2 => _0x4099a2.id === 100181))) {
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
        if (_0x18ab7b.petList.find(_0x38b8db => _0x38b8db.useSkills.find(_0x479c0f => _0x479c0f.id === 10630)) || _0x18ab7b.petList.find(_0x276d02 => _0x276d02.useSkills.find(_0x27ebc3 => _0x27ebc3.id === 100023))) {
          logger("阵容有光闪击");
          if (_0x18ab7b.petList.find(_0xb1a7a5 => _0xb1a7a5.useSkills.find(_0x124915 => _0x124915.id === 14861))) {
            logger("阵容有圣灵击");
            if (_0x18ab7b.petList.find(_0x24473d => _0x24473d.useSkills.find(_0xe8965d => _0xe8965d.id === 11022))) {
              logger("阵容有绝命火焰");
              if (_0x18ab7b.levelId > 9) {
                addGameLog("阵容符合要求");
                await this.fight();
              } else if (_0x18ab7b.petList.find(_0x5ab4fb => _0x5ab4fb.useSkills.find(_0x20eb19 => _0x20eb19.id === 100181))) {
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
      let _0x465c60 = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x465c60);
      if (_0x465c60.petList.length == 0) {
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
    let _0x4d37e9 = PetManager.getInstance().getAllPets().map(_0x4017de => {
      if (_0x4017de.level == 100) {
        if (_0x4017de.skills.indexOf(100377) != -1 || _0x4017de.skills.indexOf(10864) != -1) {
          return _0x4017de.getTime;
        }
      }
    }).filter(_0xe25662 => _0xe25662)[0];
    let _0x543be8 = PetManager.getInstance().getAllPets().map(_0x597cba => {
      if (_0x597cba.featureId == 5 || _0x597cba.featureId == 6 || _0x597cba.featureId == 7 || _0x597cba.featureId == 8) {
        if (_0x597cba.battleValues[0] > 200) {
          if (_0x597cba.skills.indexOf(100023) != -1 || _0x597cba.skills.indexOf(10630) != -1) {
            return _0x597cba.getTime;
          }
        }
      }
    }).filter(_0x342745 => _0x342745 !== undefined).sort((_0x15da79, _0x2aa6dd) => _0x2aa6dd.featureId - _0x15da79.featureId)[0];
    let _0x54dd1d = PetManager.getInstance().getAllPets().map(_0x4858d9 => {
      if (_0x4858d9.level == 100) {
        if (_0x4858d9.skills.indexOf(14861) != -1) {
          return _0x4858d9.getTime;
        }
      }
    }).filter(_0x408e7f => _0x408e7f)[0];
    let _0xe83dba = PetManager.getInstance().getAllPets().map(_0x37e62e => {
      if (_0x37e62e.level == 100) {
        if (_0x37e62e.skills.indexOf(11022) != -1) {
          return _0x37e62e.getTime;
        }
      }
    }).filter(_0x1b27a6 => _0x1b27a6)[0];
    if (_0x4d37e9 == undefined) {
      addGameLog("背包没有艾尔伊洛或者没有装备技能");
      this.stop();
    } else if (_0x543be8 == undefined) {
      addGameLog("背包没有瞬杀光闪击或者没有装备技能");
      this.stop();
    } else if (_0x54dd1d == undefined) {
      addGameLog("背包没有奥斯卡或者没有装备技能");
      this.stop();
    } else if (_0xe83dba == undefined) {
      addGameLog("背包没有绝命火焰或者没有装备技能");
      this.stop();
    } else {
      const _0x3ef78b = {
        petList: [_0x4d37e9, _0x543be8, _0x54dd1d, _0xe83dba]
      };
      await this.send_message("cs_combat_ladder_set_array", _0x3ef78b);
      addGameLog("阵容设置完成");
    }
  }
  async setteam2() {
    let _0x4dca92 = PetManager.getInstance().getAllPets().map(_0x588bcb => {
      if (_0x588bcb.level > 60) {
        if (_0x588bcb.skills.indexOf(100181) != -1) {
          return _0x588bcb.getTime;
        }
      }
    }).filter(_0x2e1c8f => _0x2e1c8f)[0];
    let _0x36cbfb = PetManager.getInstance().getAllPets().map(_0xbbc1bf => {
      if (_0xbbc1bf.featureId == 5 || _0xbbc1bf.featureId == 6 || _0xbbc1bf.featureId == 7 || _0xbbc1bf.featureId == 8) {
        if (_0xbbc1bf.battleValues[0] > 200) {
          if (_0xbbc1bf.skills.indexOf(100023) != -1 || _0xbbc1bf.skills.indexOf(10630) != -1) {
            return _0xbbc1bf.getTime;
          }
        }
      }
    }).filter(_0x4be64a => _0x4be64a !== undefined).sort((_0x414b83, _0x176af3) => _0x176af3.featureId - _0x414b83.featureId)[0];
    let _0x6ba7c = PetManager.getInstance().getAllPets().map(_0x558f52 => {
      if (_0x558f52.level == 100) {
        if (_0x558f52.skills.indexOf(14861) != -1) {
          return _0x558f52.getTime;
        }
      }
    }).filter(_0x4de97e => _0x4de97e)[0];
    let _0x36f917 = PetManager.getInstance().getAllPets().map(_0x1a97f1 => {
      if (_0x1a97f1.level == 100) {
        if (_0x1a97f1.skills.indexOf(11022) != -1) {
          return _0x1a97f1.getTime;
        }
      }
    }).filter(_0x164df8 => _0x164df8)[0];
    if (_0x4dca92 == undefined) {
      addGameLog("背包没有塞维尔或者没有装备技能");
      this.stop();
    } else if (_0x36cbfb == undefined) {
      addGameLog("背包没有瞬杀光闪击或者没有装备技能");
      this.stop();
    } else if (_0x6ba7c == undefined) {
      addGameLog("背包没有奥斯卡或者没有装备技能");
      this.stop();
    } else if (_0x36f917 == undefined) {
      addGameLog("背包没有绝命火焰或者没有装备技能");
      this.stop();
    } else {
      const _0x3c4621 = {
        petList: [_0x4dca92, _0x36cbfb, _0x6ba7c, _0x36f917]
      };
      await this.send_message("cs_combat_ladder_set_array", _0x3c4621);
      addGameLog("阵容设置完成");
    }
  }
  async fight() {
    let _0x4f9ef4 = await this.send_message("cs_combat_ladder_query_battle", {});
    let _0x8b774e = {};
    while (_0x4f9ef4.levelId > 8 && _0x4f9ef4.levelId <= 28) {
      if (_0x4f9ef4.petList.find(_0x4be6fa => _0x4be6fa.useSkills.find(_0x5ece55 => _0x5ece55.id === 10630)) || _0x4f9ef4.petList.find(_0x274053 => _0x274053.useSkills.find(_0x46fdfe => _0x46fdfe.id === 100023))) {
        if (_0x4f9ef4.petList.find(_0xa5b66 => _0xa5b66.useSkills.find(_0x5c5984 => _0x5c5984.id === 14861))) {
          if (this.rebuff) {
            await this.send_message("cs_combat_ladder_start_battle", {
              idList: [2]
            });
            await this.send_message("cs_set_match_battle_speed", {
              speed: 2
            });
            let _0x42febe = await this.waitEvent("sc_battle_notify_load_resource");
            _0x42febe.gameBody.splice(0, _0x42febe.gameBody.length);
            await this.send_message("cs_online_load_resource", {
              groupId: "",
              battleType: 0
            });
            await this.send_message("cs_online_player_operation", {
              opType: 5,
              data: null,
              groupId: ""
            });
            _0x42febe = await this.waitEvent("sc_battle_notify_round_result");
            let _0x3cd103 = JSON.parse(_0x42febe.gameBody[_0x42febe.gameBody.length - 1].raw).result.processQueue.find(_0xfffc91 => _0xfffc91.uid !== MFC.userInfo.uid).affects.filter(function (_0x15ca2e) {
              if (_0x15ca2e.id == 143 || _0x15ca2e.id == 67) {
                return _0x15ca2e;
              }
            });
            if (_0x3cd103.length > 0) {
              this.rebuff = true;
            } else {
              this.rebuff = false;
            }
            if (!_0x8b774e[_0x4f9ef4.levelId]) {
              _0x8b774e[_0x4f9ef4.levelId] = 1;
            } else {
              _0x8b774e[_0x4f9ef4.levelId]++;
            }
            addGameLog("目前阶梯第" + _0x4f9ef4.levelId + "层，进行第" + _0x8b774e[_0x4f9ef4.levelId] + "次战斗");
            _0x3cd103 = await this.useSkill(14861);
            _0x4f9ef4 = await this.send_message("cs_combat_ladder_query_battle", {});
          } else {
            await this.send_message("cs_combat_ladder_start_battle", {
              idList: [1]
            });
            let _0xe7132d = await this.initBattle();
            let _0x1dae3e = _0xe7132d.result.processQueue.find(_0x570409 => _0x570409.uid !== MFC.userInfo.uid).affects.filter(function (_0x545959) {
              if (_0x545959.id == 143 || _0x545959.id == 67) {
                return _0x545959;
              }
            });
            if (_0x1dae3e.length > 0) {
              this.rebuff = true;
            } else {
              this.rebuff = false;
            }
            if (!_0x8b774e[_0x4f9ef4.levelId]) {
              _0x8b774e[_0x4f9ef4.levelId] = 1;
            } else {
              _0x8b774e[_0x4f9ef4.levelId]++;
            }
            addGameLog("目前阶梯第" + _0x4f9ef4.levelId + "层，进行第" + _0x8b774e[_0x4f9ef4.levelId] + "次战斗");
            if (_0x4f9ef4.petList.find(_0x1170ad => _0x1170ad.useSkills.find(_0x2584b5 => _0x2584b5.id === 10630))) {
              _0xe7132d = await this.useSkill(10630);
            }
            if (_0x4f9ef4.petList.find(_0xd968e9 => _0xd968e9.useSkills.find(_0x2c2bf8 => _0x2c2bf8.id === 100023))) {
              _0xe7132d = await this.useSkill(100023);
            }
            _0x4f9ef4 = await this.send_message("cs_combat_ladder_query_battle", {});
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
      _0x4f9ef4 = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x4f9ef4.levelId);
    }
    while (_0x4f9ef4.levelId > 28 && _0x4f9ef4.levelId <= 30) {
      if (_0x4f9ef4.petList.find(_0x3a8764 => _0x3a8764.useSkills.find(_0x3de0a1 => _0x3de0a1.id === 11022))) {
        await this.send_message("cs_combat_ladder_start_battle", {
          idList: [3]
        });
        await this.initBattle();
        if (!_0x8b774e[_0x4f9ef4.levelId]) {
          _0x8b774e[_0x4f9ef4.levelId] = 1;
        } else {
          _0x8b774e[_0x4f9ef4.levelId]++;
        }
        addGameLog("目前阶梯第" + _0x4f9ef4.levelId + "层，进行第" + _0x8b774e[_0x4f9ef4.levelId] + "次战斗");
        let _0x164ff2 = await this.useSkill(11022);
        if (_0x164ff2.result.result === 1) {
          if (_0x4f9ef4.levelId == 30) {
            break;
          }
        }
        _0x4f9ef4 = await this.send_message("cs_combat_ladder_query_battle", {});
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
    let _0x4b4ff5 = await this.send_message("cs_combat_ladder_query_battle", {});
    let _0xb059f6 = {};
    while (_0x4b4ff5.levelId < 9) {
      if (_0x4b4ff5.petList.find(_0x5229e9 => _0x5229e9.useSkills.find(_0x1c70ca => _0x1c70ca.id === 100377)) || _0x4b4ff5.petList.find(_0x33cbcb => _0x33cbcb.useSkills.find(_0x2286f6 => _0x2286f6.id === 10864))) {
        logger("阵容有幻化利刃plus");
        await this.send_message("cs_combat_ladder_start_battle", {
          idList: [0]
        });
        await this.initBattle();
        if (!_0xb059f6[_0x4b4ff5.levelId]) {
          _0xb059f6[_0x4b4ff5.levelId] = 1;
        } else {
          _0xb059f6[_0x4b4ff5.levelId]++;
        }
        addGameLog("目前阶梯第" + _0x4b4ff5.levelId + "层，进行第" + _0xb059f6[_0x4b4ff5.levelId] + "次战斗");
        if (_0x4b4ff5.petList.find(_0x284f9a => _0x284f9a.useSkills.find(_0x9bcd76 => _0x9bcd76.id === 100377))) {
          await this.useSkill(100377);
        }
        if (_0x4b4ff5.petList.find(_0x4417e2 => _0x4417e2.useSkills.find(_0x48d7de => _0x48d7de.id === 10864))) {
          await this.useSkill(10864);
        }
        _0x4b4ff5 = await this.send_message("cs_combat_ladder_query_battle", {});
      } else {
        addGameLog("阵容缺乏幻化利刃plus");
        this.stop();
        break;
      }
    }
  }
  async fight2() {
    let _0x18fd98 = await this.send_message("cs_combat_ladder_query_battle", {});
    let _0x2f4903 = {};
    while (_0x18fd98.levelId < 9) {
      if (_0x18fd98.petList.find(_0x1258c8 => _0x1258c8.useSkills.find(_0x73aa9 => _0x73aa9.id === 100181))) {
        logger("阵容有女王之鞭plus");
        await this.send_message("cs_combat_ladder_start_battle", {
          idList: [0]
        });
        await this.initBattle();
        if (!_0x2f4903[_0x18fd98.levelId]) {
          _0x2f4903[_0x18fd98.levelId] = 1;
        } else {
          _0x2f4903[_0x18fd98.levelId]++;
        }
        addGameLog("目前阶梯第" + _0x18fd98.levelId + "层，进行第" + _0x2f4903[_0x18fd98.levelId] + "次战斗");
        await this.useSkill(100181);
        _0x18fd98 = await this.send_message("cs_combat_ladder_query_battle", {});
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
      let _0x1d5c33 = await this.send_message("cs_combat_ladder_query_battle", {});
      let _0x23d570 = await this.send_message("cs_combat_ladder_save_record", {
        type: 3
      });
      if (_0x1d5c33.petList.length == 0) {
        if (_0x23d570.petList.useSkills) {
          if (_0x23d570.petList.useSkills.find(_0x1173c3 => _0x1173c3.id === 10630) || _0x23d570.petList.useSkills.find(_0x356c3f => _0x356c3f.id === 100023)) {
            if (_0x23d570.petList.useSkills.find(_0x4de621 => _0x4de621.id === 14816)) {
              logger("阵容有圣灵击");
              if (_0x23d570.petList.useSkills.find(_0x476b12 => _0x476b12.id === 11022)) {
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
      } else if (_0x1d5c33.petList[0].useSkills.find(_0x139eb9 => _0x139eb9.id === 10630) || _0x1d5c33.petList[0].useSkills.find(_0x48e42c => _0x48e42c.id === 100023)) {
        if (_0x1d5c33.petList[1].useSkills.find(_0x21ed79 => _0x21ed79.id === 14861)) {
          if (_0x1d5c33.petList[2].useSkills.find(_0x1b135a => _0x1b135a.id === 11022)) {
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
      let _0x4644fc = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x4644fc);
      if (_0x4644fc.petList.length == 0) {
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
    let _0x44c9c3 = PetManager.getInstance().getAllPets().map(_0x3347bf => {
      if (_0x3347bf.featureId == 5 || _0x3347bf.featureId == 6 || _0x3347bf.featureId == 7 || _0x3347bf.featureId == 8) {
        if (_0x3347bf.battleValues[0] > 200) {
          if (_0x3347bf.skills.indexOf(100023) != -1 || _0x3347bf.skills.indexOf(10630) != -1) {
            return _0x3347bf.getTime;
          }
        }
      }
    }).filter(_0x10a218 => _0x10a218 !== undefined).sort((_0x5addf7, _0xa37ce3) => _0xa37ce3.featureId - _0x5addf7.featureId)[0];
    let _0x17c033 = PetManager.getInstance().getAllPets().map(_0x3be8d7 => {
      if (_0x3be8d7.level == 100) {
        if (_0x3be8d7.skills.indexOf(14861) != -1) {
          return _0x3be8d7.getTime;
        }
      }
    }).filter(_0xf3adc8 => _0xf3adc8)[0];
    let _0x4844ab = PetManager.getInstance().getAllPets().map(_0x15a631 => {
      if (_0x15a631.level == 100) {
        if (_0x15a631.skills.indexOf(11022) != -1) {
          return _0x15a631.getTime;
        }
      }
    }).filter(_0xfa9e7c => _0xfa9e7c)[0];
    if (_0x44c9c3 == undefined) {
      addGameLog("背包没有瞬杀光闪击或者没有装备技能");
      this.stop();
    } else if (_0x17c033 == undefined) {
      addGameLog("背包没有奥斯卡或者没有装备技能");
      this.stop();
    } else if (_0x4844ab == undefined) {
      addGameLog("背包没有绝命火焰或者没有装备技能");
      this.stop();
    } else {
      const _0x3faf2a = {
        petList: [_0x44c9c3, _0x17c033, _0x4844ab]
      };
      await this.send_message("cs_combat_ladder_set_array", _0x3faf2a);
      addGameLog("阵容设置完成");
    }
  }
  async fight3() {
    let _0x27ba8f = await this.send_message("cs_combat_ladder_query_battle", {});
    let _0x56fcb3 = {};
    while (_0x27ba8f.levelId > 0 && _0x27ba8f.levelId <= 28) {
      if (_0x27ba8f.petList.find(_0x48cfd4 => _0x48cfd4.useSkills.find(_0x3ce802 => _0x3ce802.id === 10630)) || _0x27ba8f.petList.find(_0x13a15f => _0x13a15f.useSkills.find(_0x301d58 => _0x301d58.id === 100023))) {
        if (_0x27ba8f.petList.find(_0x372863 => _0x372863.useSkills.find(_0x503b1c => _0x503b1c.id === 14861))) {
          if (this.rebuff) {
            await this.send_message("cs_combat_ladder_start_battle", {
              idList: [1]
            });
            let _0x5e7996 = await this.initBattle();
            let _0x5e941d = _0x5e7996.result.affects.map(_0x39b034 => {
              if (_0x39b034 && _0x39b034.id) {
                return _0x39b034.id;
              } else {
                return null;
              }
            });
            if (_0x5e941d.includes(143) || _0x5e941d.includes(67) || _0x5e941d.includes(71) || _0x27ba8f.levelId == 10 || _0x27ba8f.levelId == 11 || _0x27ba8f.levelId == 14 || _0x27ba8f.levelId == 15 || _0x27ba8f.levelId == 21 || _0x27ba8f.levelId == 22) {
              this.rebuff = true;
            } else {
              this.rebuff = false;
            }
            if (!_0x56fcb3[_0x27ba8f.levelId]) {
              _0x56fcb3[_0x27ba8f.levelId] = 1;
            } else {
              _0x56fcb3[_0x27ba8f.levelId]++;
            }
            addGameLog("目前阶梯第" + _0x27ba8f.levelId + "层，进行第" + _0x56fcb3[_0x27ba8f.levelId] + "次战斗");
            _0x5e7996 = await this.useSkill(14861);
            _0x27ba8f = await this.send_message("cs_combat_ladder_query_battle", {});
          } else {
            await this.send_message("cs_combat_ladder_start_battle", {
              idList: [0]
            });
            let _0x93f9ee = await this.initBattle();
            let _0x496d18 = _0x93f9ee.result.affects.map(_0x434164 => {
              if (_0x434164 && _0x434164.id) {
                return _0x434164.id;
              } else {
                return null;
              }
            });
            if (_0x496d18.includes(143) || _0x496d18.includes(67) || _0x496d18.includes(71) || _0x27ba8f.levelId == 10 || _0x27ba8f.levelId == 11 || _0x27ba8f.levelId == 14 || _0x27ba8f.levelId == 15 || _0x27ba8f.levelId == 21 || _0x27ba8f.levelId == 22) {
              this.rebuff = true;
            } else {
              this.rebuff = false;
            }
            if (!_0x56fcb3[_0x27ba8f.levelId]) {
              _0x56fcb3[_0x27ba8f.levelId] = 1;
            } else {
              _0x56fcb3[_0x27ba8f.levelId]++;
            }
            addGameLog("目前阶梯第" + _0x27ba8f.levelId + "层，进行第" + _0x56fcb3[_0x27ba8f.levelId] + "次战斗");
            if (_0x27ba8f.petList.find(_0x5d7e0f => _0x5d7e0f.useSkills.find(_0x4d5b45 => _0x4d5b45.id === 10630))) {
              _0x93f9ee = await this.useSkill(10630);
            }
            if (_0x27ba8f.petList.find(_0x540428 => _0x540428.useSkills.find(_0xe882b2 => _0xe882b2.id === 100023))) {
              _0x93f9ee = await this.useSkill(100023);
            }
            _0x27ba8f = await this.send_message("cs_combat_ladder_query_battle", {});
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
      _0x27ba8f = await this.send_message("cs_combat_ladder_query_battle", {});
      logger(_0x27ba8f.levelId);
    }
    while (_0x27ba8f.levelId > 28 && _0x27ba8f.levelId <= 30) {
      if (_0x27ba8f.petList.find(_0x12a70c => _0x12a70c.useSkills.find(_0x32ce69 => _0x32ce69.id === 11022))) {
        await this.send_message("cs_combat_ladder_start_battle", {
          idList: [2]
        });
        await this.send_message("cs_set_match_battle_speed", {
          speed: 2
        });
        await this.initBattle();
        if (!_0x56fcb3[_0x27ba8f.levelId]) {
          _0x56fcb3[_0x27ba8f.levelId] = 1;
        } else {
          _0x56fcb3[_0x27ba8f.levelId]++;
        }
        addGameLog("目前阶梯第" + _0x27ba8f.levelId + "层，进行第" + _0x56fcb3[_0x27ba8f.levelId] + "次战斗");
        let _0x136042 = await this.useSkill(11022);
        if (_0x136042.result.result === 1) {
          if (_0x27ba8f.levelId == 30) {
            break;
          }
        }
        _0x27ba8f = await this.send_message("cs_combat_ladder_query_battle", {});
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
      let _0x122ba2 = await this.send_message("cs_combat_ladder_GhostDom", {
        type: 1,
        choice: 0
      });
      if (_0x122ba2.choice == 0) {
        logger("战斗阶梯未选择");
        await this.ui();
      } else {
        logger("战斗阶梯已选择");
        if (_0x122ba2.choice == 1) {
          addGameLog("已选择黄金十二宫");
          await this.ui2();
        }
        if (_0x122ba2.choice == 2) {
          addGameLog("已选择冥界十二宫");
          await this.ui2();
        }
      }
    } catch (_0x5efdf6) {}
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
    let _0x502ed8 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x10bacc = [];
      var _0x29d4c6 = SimpleAlertUi({
        height: 460,
        width: 400
      });
      _0x502ed8.alertWin = _0x29d4c6;
      const _0x469453 = {
        text: "一键杂项",
        x: _0x29d4c6.applicationWidth / 2 - 20,
        y: _0x29d4c6.height / 15
      };
      let _0x121bd9 = createLabel(_0x469453);
      _0x121bd9.size = 20;
      _0x10bacc.push(_0x121bd9);
      const _0x5e5526 = {
        text: "电池分享",
        x: _0x29d4c6.width / 5,
        y: _0x121bd9.y + 40
      };
      let _0xa48f80 = createLabel(_0x5e5526);
      _0x10bacc.push(_0xa48f80);
      const _0x344175 = {
        x: _0xa48f80.x + 70,
        y: _0xa48f80.y,
        selected: true,
        storageKey: "bt1"
      };
      let _0x233593 = createToggle(_0x344175);
      _0x10bacc.push(_0x233593);
      const _0xe8d01b = {
        text: "揍bug",
        x: _0x233593.x + 70,
        y: _0xa48f80.y
      };
      let _0x58ffe4 = createLabel(_0xe8d01b);
      _0x10bacc.push(_0x58ffe4);
      const _0x304ebb = {
        x: _0x58ffe4.x + 60,
        y: _0xa48f80.y,
        selected: true,
        storageKey: "bt2"
      };
      let _0x5456f2 = createToggle(_0x304ebb);
      _0x10bacc.push(_0x5456f2);
      const _0x3997d7 = {
        text: "小屋点赞",
        x: _0x29d4c6.width / 5,
        y: _0xa48f80.y + 40
      };
      let _0x134056 = createLabel(_0x3997d7);
      _0x10bacc.push(_0x134056);
      const _0x54272f = {
        x: _0x134056.x + 70,
        y: _0x134056.y,
        selected: true,
        storageKey: "bt3"
      };
      let _0xe8aa01 = createToggle(_0x54272f);
      _0x10bacc.push(_0xe8aa01);
      const _0x1422d8 = {
        text: "每日电池",
        x: _0x233593.x + 60,
        y: _0x134056.y
      };
      let _0x2b23bd = createLabel(_0x1422d8);
      _0x10bacc.push(_0x2b23bd);
      const _0xd2fa52 = {
        x: _0x2b23bd.x + 70,
        y: _0x134056.y,
        selected: true,
        storageKey: "bt4"
      };
      let _0x3ac2ee = createToggle(_0xd2fa52);
      _0x10bacc.push(_0x3ac2ee);
      const _0x45ca4d = {
        text: "经验剧情",
        x: _0x29d4c6.width / 5,
        y: _0x134056.y + 40
      };
      let _0x16dc4a = createLabel(_0x45ca4d);
      _0x10bacc.push(_0x16dc4a);
      const _0x2a5c02 = {
        x: _0x16dc4a.x + 70,
        y: _0x16dc4a.y,
        selected: true,
        storageKey: "bt5"
      };
      let _0x17cc08 = createToggle(_0x2a5c02);
      _0x10bacc.push(_0x17cc08);
      const _0x4314b7 = {
        text: "豆子剧情",
        x: _0x233593.x + 60,
        y: _0x16dc4a.y
      };
      let _0x44a56e = createLabel(_0x4314b7);
      _0x10bacc.push(_0x44a56e);
      const _0x2dc0c0 = {
        x: _0x44a56e.x + 70,
        y: _0x44a56e.y,
        selected: true,
        storageKey: "bt6"
      };
      let _0x16cf33 = createToggle(_0x2dc0c0);
      _0x10bacc.push(_0x16cf33);
      const _0x107874 = {
        text: "挖取矿物",
        x: _0x29d4c6.width / 5,
        y: _0x16dc4a.y + 40
      };
      let _0x39d1a1 = createLabel(_0x107874);
      _0x10bacc.push(_0x39d1a1);
      const _0x117e5d = {
        x: _0x39d1a1.x + 70,
        y: _0x39d1a1.y,
        selected: true,
        storageKey: "bt7"
      };
      let _0x164acb = createToggle(_0x117e5d);
      _0x10bacc.push(_0x164acb);
      const _0x184f3e = {
        text: "光暗狮子",
        x: _0x233593.x + 60,
        y: _0x39d1a1.y
      };
      let _0x49c79b = createLabel(_0x184f3e);
      _0x10bacc.push(_0x49c79b);
      const _0x20ec23 = {
        x: _0x49c79b.x + 70,
        y: _0x49c79b.y,
        selected: true,
        storageKey: "bt8"
      };
      let _0x153267 = createToggle(_0x20ec23);
      _0x10bacc.push(_0x153267);
      const _0x5c9731 = {
        text: "好友点赞",
        x: _0x29d4c6.width / 5,
        y: _0x39d1a1.y + 40
      };
      let _0x49d64b = createLabel(_0x5c9731);
      _0x10bacc.push(_0x49d64b);
      const _0x2befe2 = {
        x: _0x49d64b.x + 70,
        y: _0x49d64b.y,
        selected: true,
        storageKey: "bt9"
      };
      let _0x317199 = createToggle(_0x2befe2);
      _0x10bacc.push(_0x317199);
      const _0x5d07fc = {
        text: "教皇领取",
        x: _0x233593.x + 60,
        y: _0x49d64b.y
      };
      let _0x1ceed3 = createLabel(_0x5d07fc);
      _0x10bacc.push(_0x1ceed3);
      const _0x451b4f = {
        x: _0x1ceed3.x + 70,
        y: _0x1ceed3.y,
        selected: true,
        storageKey: "bt10"
      };
      let _0x4cf082 = createToggle(_0x451b4f);
      _0x10bacc.push(_0x4cf082);
      const _0x345941 = {
        text: "忍魂活动",
        x: _0x49d64b.x,
        y: _0x49d64b.y + 40
      };
      let _0xf89391 = createLabel(_0x345941);
      _0x10bacc.push(_0xf89391);
      const _0x4dee4c = {
        x: _0xf89391.x + 70,
        y: _0xf89391.y,
        selected: true,
        storageKey: "ninja"
      };
      let _0x32b67a = createToggle(_0x4dee4c);
      _0x10bacc.push(_0x32b67a);
      const _0x323c8d = {
        text: "兑换cdk",
        x: _0x233593.x + 60,
        y: _0xf89391.y
      };
      let _0x317b26 = createLabel(_0x323c8d);
      _0x10bacc.push(_0x317b26);
      const _0x360e83 = {
        x: _0x317b26.x + 70,
        y: _0x317b26.y,
        selected: false,
        storageKey: "cdk"
      };
      let _0x2f5e10 = createToggle(_0x360e83);
      _0x10bacc.push(_0x2f5e10);
      const _0x1af086 = {
        text: "分解符文",
        x: _0xf89391.x,
        y: _0xf89391.y + 40
      };
      let _0xa6e3c = createLabel(_0x1af086);
      _0x10bacc.push(_0xa6e3c);
      const _0x4881cd = {
        x: _0xa6e3c.x + 70,
        y: _0xa6e3c.y,
        selected: false,
        storageKey: "rune"
      };
      let _0x50cf5d = createToggle(_0x4881cd);
      _0x10bacc.push(_0x50cf5d);
      const _0x16953f = {
        text: "瞩目扫荡",
        x: _0x233593.x + 60,
        y: _0xa6e3c.y
      };
      let _0x4f18e9 = createLabel(_0x16953f);
      _0x10bacc.push(_0x4f18e9);
      const _0x436669 = {
        x: _0x317b26.x + 70,
        y: _0x4f18e9.y,
        selected: false,
        storageKey: "zmsd"
      };
      let _0xae927c = createToggle(_0x436669);
      _0x10bacc.push(_0xae927c);
      const _0x168f3a = {
        text: "奥特分享",
        x: _0xf89391.x,
        y: _0xa6e3c.y + 40
      };
      let _0x508775 = createLabel(_0x168f3a);
      const _0x33e8d8 = {
        x: _0xa6e3c.x + 70,
        y: _0x508775.y,
        selected: false,
        storageKey: "atshare"
      };
      let _0x382247 = createToggle(_0x33e8d8);
      _0x502ed8.addAllUis(_0x10bacc);
      _0x29d4c6.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x502ed8.stop();
      }, function () {
        localStorage.setItem("bt1", _0x233593.selected);
        localStorage.setItem("bt2", _0x5456f2.selected);
        localStorage.setItem("bt3", _0xe8aa01.selected);
        localStorage.setItem("bt4", _0x3ac2ee.selected);
        localStorage.setItem("bt5", _0x17cc08.selected);
        localStorage.setItem("bt6", _0x16cf33.selected);
        localStorage.setItem("bt7", _0x164acb.selected);
        localStorage.setItem("bt8", _0x153267.selected);
        localStorage.setItem("bt9", _0x317199.selected);
        localStorage.setItem("bt10", _0x4cf082.selected);
        localStorage.setItem("ninja", _0x32b67a.selected);
        localStorage.setItem("cdk", _0x2f5e10.selected);
        localStorage.setItem("rune", _0x50cf5d.selected);
        localStorage.setItem("zmsd", _0xae927c.selected);
        localStorage.setItem("atshare", _0x382247.selected);
        let _0x45f30c = [_0x233593, _0x5456f2, _0xe8aa01, _0x3ac2ee, _0x17cc08, _0x16cf33, _0x164acb, _0x153267, _0x317199, _0x4cf082, _0x32b67a, _0x2f5e10, _0x50cf5d, _0xae927c, _0x382247];
        for (let _0x109086 = 0; _0x109086 < _0x45f30c.length; _0x109086++) {
          if (_0x45f30c[_0x109086].selected) {
            _0x502ed8.task[_0x109086] = 1;
          }
        }
        _0x502ed8.prcessBody();
      }], null);
      _0x29d4c6.showAlert();
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
        let _0x14cd91 = xls.monthPveBoss.getItems().filter(function (_0x44b01c) {
          return _0x44b01c.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x44b01c.endTime;
        });
        if (_0x14cd91.length <= 0) {
          addGameLog("瞩目精灵活动暂未开启");
        } else {
          for (let _0x371326 = 0; _0x371326 < _0x14cd91.length; _0x371326++) {
            if (MFC.attr.getAttr((_0x14cd91[_0x371326].id >= 13 ? 5224038 : MFC.attrType.foreverMonthPveActivityStart) + _0x14cd91[_0x371326].activityType - 1) >= 2100) {
              addGameLog("瞩目精灵活动活力值已达标");
              let _0x181da5 = MonthPveBossUtils.V_GetPveBossCost(xls.monthPveBoss.getItems().filter(function (_0x54d9d9) {
                return _0x54d9d9.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x54d9d9.endTime;
              })[_0x371326]);
              if (BitUtils.getBit(MFC.attr.getAttr(_0x181da5.progressFinishAttr), _0x181da5.progressFinishIdx)) {
                addGameLog("图纸已领取");
              } else {
                const _0x31574f = {
                  type: 2,
                  id: _0x14cd91[_0x371326].activityType,
                  progressDropId: 1,
                  petList: []
                };
                await this.send_message("cs_month_pve", _0x31574f);
                addGameLog("图纸已领取");
              }
            } else {
              let _0x32f1ad = MonthPveBossUtils.V_GetPveBossCost(xls.monthPveBoss.getItems().filter(function (_0x5a4a04) {
                return _0x5a4a04.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x5a4a04.endTime;
              })[_0x371326]);
              let _0x405b58 = 1;
              let _0x3ed9ad = 3326;
              if (_0x14cd91[_0x371326].id >= 13) {
                _0x3ed9ad = 5223990;
                _0x3ed9ad = _0x3ed9ad + _0x14cd91[_0x371326].activityType - 1;
              }
              let _0x215520 = MFC.attr.getAttr(_0x3ed9ad);
              if (BitUtils.getBit(_0x215520, 3) > 0) {
                while (1) {
                  if (Math.max(0, _0x32f1ad.dailyLimit + BitUtils.getBits(MFC.attr.getAttr((_0x14cd91[_0x371326].id < 13 ? 11361 : 5002353) + _0x14cd91[_0x371326].activityType - 1), 16, 16) - BitUtils.getBits(MFC.attr.getAttr((_0x14cd91[_0x371326].id < 13 ? 11361 : 5002353) + _0x14cd91[_0x371326].activityType - 1), 0, 16)) > 0) {
                    if (VIPManager.V_GetIsNoPlus()) {
                      const _0x3961c4 = {
                        type: 5,
                        id: _0x14cd91[_0x371326].id,
                        difficultRank: 3,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x3961c4);
                      addGameLog("扫荡第" + _0x405b58 + "次");
                      _0x405b58++;
                    } else if (VIPManager.getInstance().isVip) {
                      if (MFC.userInfo.curEnergy >= _0x32f1ad.cardDatas._maps[3].costEnergy * 5 * 0.5) {
                        const _0x44df89 = {
                          type: 5,
                          id: _0x14cd91[_0x371326].id,
                          difficultRank: 3,
                          petList: [],
                          sweepTime: 1
                        };
                        await this.send_message("cs_month_pve", _0x44df89);
                        addGameLog("扫荡第" + _0x405b58 + "次");
                        _0x405b58++;
                      } else {
                        addGameLog("电池不足");
                        break;
                      }
                    } else if (MFC.userInfo.curEnergy >= _0x32f1ad.cardDatas._maps[3].costEnergy * 5) {
                      const _0x1f31a2 = {
                        type: 5,
                        id: _0x14cd91[_0x371326].id,
                        difficultRank: 3,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x1f31a2);
                      addGameLog("扫荡第" + _0x405b58 + "次");
                      _0x405b58++;
                    } else {
                      addGameLog("电池不足");
                      break;
                    }
                  } else {
                    addGameLog("次数不足");
                    break;
                  }
                  if (MFC.attr.getAttr((_0x14cd91[_0x371326].id >= 13 ? 5224038 : MFC.attrType.foreverMonthPveActivityStart) + _0x14cd91[_0x371326].activityType - 1) >= 2100) {
                    addGameLog("瞩目精灵活动活力值已达标");
                    if (BitUtils.getBit(MFC.attr.getAttr(_0x32f1ad.progressFinishAttr), _0x32f1ad.progressFinishIdx)) {
                      addGameLog("图纸已领取");
                    } else {
                      const _0x4ceb05 = {
                        type: 2,
                        id: _0x14cd91[_0x371326].activityType,
                        progressDropId: 1,
                        petList: []
                      };
                      await this.send_message("cs_month_pve", _0x4ceb05);
                      addGameLog("图纸已领取");
                    }
                    break;
                  }
                }
              } else if (BitUtils.getBit(_0x215520, 2) > 0) {
                while (1) {
                  if (Math.max(0, _0x32f1ad.dailyLimit + BitUtils.getBits(MFC.attr.getAttr((_0x14cd91[_0x371326].id < 13 ? 11361 : 5002353) + _0x14cd91[_0x371326].activityType - 1), 16, 16) - BitUtils.getBits(MFC.attr.getAttr((_0x14cd91[_0x371326].id < 13 ? 11361 : 5002353) + _0x14cd91[_0x371326].activityType - 1), 0, 16)) > 0) {
                    if (VIPManager.V_GetIsNoPlus()) {
                      const _0x273534 = {
                        type: 5,
                        id: _0x14cd91[_0x371326].id,
                        difficultRank: 2,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x273534);
                      addGameLog("扫荡第" + _0x405b58 + "次");
                      _0x405b58++;
                    } else if (VIPManager.getInstance().isVip) {
                      if (MFC.userInfo.curEnergy >= _0x32f1ad.cardDatas._maps[2].costEnergy * 5 * 0.5) {
                        const _0x416016 = {
                          type: 5,
                          id: _0x14cd91[_0x371326].id,
                          difficultRank: 2,
                          petList: [],
                          sweepTime: 1
                        };
                        await this.send_message("cs_month_pve", _0x416016);
                        addGameLog("扫荡第" + _0x405b58 + "次");
                        _0x405b58++;
                      } else {
                        addGameLog("电池不足");
                        break;
                      }
                    } else if (MFC.userInfo.curEnergy >= _0x32f1ad.cardDatas._maps[2].costEnergy * 5) {
                      const _0x2963d4 = {
                        type: 5,
                        id: _0x14cd91[_0x371326].id,
                        difficultRank: 2,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x2963d4);
                      addGameLog("扫荡第" + _0x405b58 + "次");
                      _0x405b58++;
                    } else {
                      addGameLog("电池不足");
                      break;
                    }
                  } else {
                    addGameLog("次数不足");
                    break;
                  }
                  if (MFC.attr.getAttr((_0x14cd91[_0x371326].id >= 13 ? 5224038 : MFC.attrType.foreverMonthPveActivityStart) + _0x14cd91[_0x371326].activityType - 1) >= 2100) {
                    addGameLog("瞩目精灵活动活力值已达标");
                    if (BitUtils.getBit(MFC.attr.getAttr(_0x32f1ad.progressFinishAttr), _0x32f1ad.progressFinishIdx)) {
                      addGameLog("图纸已领取");
                    } else {
                      const _0x4c5044 = {
                        type: 2,
                        id: _0x14cd91[_0x371326].activityType,
                        progressDropId: 1,
                        petList: []
                      };
                      await this.send_message("cs_month_pve", _0x4c5044);
                      addGameLog("图纸已领取");
                    }
                    break;
                  }
                }
              } else if (BitUtils.getBit(_0x215520, 1) > 0) {
                while (1) {
                  if (Math.max(0, _0x32f1ad.dailyLimit + BitUtils.getBits(MFC.attr.getAttr((_0x14cd91[_0x371326].id < 13 ? 11361 : 5002353) + _0x14cd91[_0x371326].activityType - 1), 16, 16) - BitUtils.getBits(MFC.attr.getAttr((_0x14cd91[_0x371326].id < 13 ? 11361 : 5002353) + _0x14cd91[_0x371326].activityType - 1), 0, 16)) > 0) {
                    if (VIPManager.V_GetIsNoPlus()) {
                      const _0x7db242 = {
                        type: 5,
                        id: _0x14cd91[_0x371326].id,
                        difficultRank: 1,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x7db242);
                      addGameLog("扫荡第" + _0x405b58 + "次");
                      _0x405b58++;
                    } else if (VIPManager.getInstance().isVip) {
                      if (MFC.userInfo.curEnergy >= _0x32f1ad.cardDatas._maps[1].costEnergy * 5 * 0.5) {
                        const _0x107af8 = {
                          type: 5,
                          id: _0x14cd91[_0x371326].id,
                          difficultRank: 1,
                          petList: [],
                          sweepTime: 1
                        };
                        await this.send_message("cs_month_pve", _0x107af8);
                        addGameLog("扫荡第" + _0x405b58 + "次");
                        _0x405b58++;
                      } else {
                        addGameLog("电池不足");
                        break;
                      }
                    } else if (MFC.userInfo.curEnergy >= _0x32f1ad.cardDatas._maps[1].costEnergy * 5) {
                      const _0x4ad302 = {
                        type: 5,
                        id: _0x14cd91[_0x371326].id,
                        difficultRank: 1,
                        petList: [],
                        sweepTime: 1
                      };
                      await this.send_message("cs_month_pve", _0x4ad302);
                      addGameLog("扫荡第" + _0x405b58 + "次");
                      _0x405b58++;
                    } else {
                      addGameLog("电池不足");
                      break;
                    }
                  } else {
                    addGameLog("次数不足");
                    break;
                  }
                  if (MFC.attr.getAttr((_0x14cd91[_0x371326].id >= 13 ? 5224038 : MFC.attrType.foreverMonthPveActivityStart) + _0x14cd91[_0x371326].activityType - 1) >= 2100) {
                    addGameLog("瞩目精灵活动活力值已达标");
                    if (BitUtils.getBit(MFC.attr.getAttr(_0x32f1ad.progressFinishAttr), _0x32f1ad.progressFinishIdx)) {
                      addGameLog("图纸已领取");
                    } else {
                      const _0x51e8ac = {
                        type: 2,
                        id: _0x14cd91[_0x371326].activityType,
                        progressDropId: 1,
                        petList: []
                      };
                      await this.send_message("cs_month_pve", _0x51e8ac);
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
          let _0x4dd007 = await this.send_message("cs_house_praise_vistors", {
            type: 1,
            pageNo: 1,
            pageSize: 10
          });
          logger(_0x4dd007.vistors.length);
          for (let _0x11e1a7 = 0; _0x11e1a7 < _0x4dd007.vistors.length; _0x11e1a7++) {
            _0x4dd007.vistors[0].userId = 5674485;
            _0x4dd007.vistors[1].userId = 4816491;
            _0x4dd007.vistors[2].userId = 8966352;
            _0x4dd007.vistors[3].userId = 1967823;
            _0x4dd007.vistors[4].userId = 5037279;
            _0x4dd007.vistors[5].userId = 13644029;
            _0x4dd007.vistors[6].userId = 1658936;
            _0x4dd007.vistors[7].userId = 6661395;
            _0x4dd007.vistors[8].userId = 5789350;
            _0x4dd007.vistors[9].userId = 10069566;
            const _0xc87011 = {
              uid: _0x4dd007.vistors[_0x11e1a7].userId
            };
            await this.send_message("cs_house_like", _0xc87011);
            touchBtn(sta);
            await wait(200);
            addGameLog("点赞" + _0x4dd007.vistors[_0x11e1a7].roleNick);
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
        let _0x2e5494 = xls.activityPetStory.getItems().map(_0x4cb327 => {
          if (_0x4cb327.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x4cb327.endTime) {
            var _0x3f43ad = _0x4cb327.endTime;
            var _0x227902 = deden.DateUtil.create(_0x3f43ad);
            _0x227902.setHours(_0x227902.getHours() - 15);
            var _0x1cb6de = deden.DateUtil.dateFormat(_0x227902, "yyyy_MM_dd hh:mm:ss");
            if (_0x1cb6de >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss")) {
              if (_0x4cb327.name[_0x4cb327.name.length - 1] != "篇") {
                return _0x4cb327;
              }
            }
          }
        }).sort().filter(_0x2862ec => _0x2862ec != undefined);
        for (let _0x5033ab = 0; _0x5033ab < _0x2e5494.length; _0x5033ab++) {
          if (SpritePlotManager.getInstance().getPlotStateById(_0x2e5494[_0x5033ab].id) == 3) {
            addGameLog(_0x2e5494[_0x5033ab].name + _0x2e5494[_0x5033ab].stepNumber + "已完成");
          } else if (SpritePlotManager.getInstance().getPlotStateById(_0x2e5494[_0x5033ab].id) == 2) {
            const _0x428ce0 = {
              id: _0x2e5494[_0x5033ab].id,
              type: 2,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x428ce0);
            touchBtn(sta);
            await wait(200);
          } else if (SpritePlotManager.getInstance().getPlotStateById(_0x2e5494[_0x5033ab].id) == 0) {
            logger(_0x2e5494[_0x5033ab].name + "未解锁");
          } else {
            logger(_0x2e5494[_0x5033ab].id);
            const _0x4ceb29 = {
              id: _0x2e5494[_0x5033ab].id,
              type: 1,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x4ceb29);
            await wait(200);
            const _0x590d3a = {
              id: _0x2e5494[_0x5033ab].id,
              type: 2,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x590d3a);
            touchBtn(sta);
            await wait(200);
            addGameLog(_0x2e5494[_0x5033ab].name + _0x2e5494[_0x5033ab].stepNumber + "已完成");
          }
        }
      }
      if (this.task[5]) {
        let _0x278d4f = xls.activityPetStory.getItems().map(_0x246cda => {
          if (_0x246cda.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x246cda.endTime) {
            var _0x4622dd = _0x246cda.endTime;
            var _0x1f036f = deden.DateUtil.create(_0x4622dd);
            _0x1f036f.setHours(_0x1f036f.getHours() - 15);
            var _0x5bb866 = deden.DateUtil.dateFormat(_0x1f036f, "yyyy_MM_dd hh:mm:ss");
            if (_0x5bb866 >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss")) {
              if (_0x246cda.name[_0x246cda.name.length - 1] == "篇") {
                return _0x246cda;
              }
            }
          }
        }).sort().filter(_0x1ce164 => _0x1ce164 != undefined);
        for (let _0x129f0d = 0; _0x129f0d < _0x278d4f.length; _0x129f0d++) {
          if (SpritePlotManager.getInstance().getPlotStateById(_0x278d4f[_0x129f0d].id) == 3) {
            addGameLog(_0x278d4f[_0x129f0d].name + _0x278d4f[_0x129f0d].stepNumber + "已完成");
          } else if (SpritePlotManager.getInstance().getPlotStateById(_0x278d4f[_0x129f0d].id) == 2) {
            const _0x3d1341 = {
              id: _0x278d4f[_0x129f0d].id,
              type: 2,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x3d1341);
            touchBtn(sta);
            await wait(200);
          } else if (SpritePlotManager.getInstance().getPlotStateById(_0x278d4f[_0x129f0d].id) == 0) {
            logger(_0x278d4f[_0x129f0d].name + "未解锁");
          } else {
            logger(_0x278d4f[_0x129f0d].id);
            const _0xc641ab = {
              id: _0x278d4f[_0x129f0d].id,
              type: 1,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0xc641ab);
            await wait(200);
            const _0x210e82 = {
              id: _0x278d4f[_0x129f0d].id,
              type: 2,
              getTimeList: []
            };
            await this.send_message("cs_new_pet_story", _0x210e82);
            touchBtn(sta);
            await wait(200);
            addGameLog(_0x278d4f[_0x129f0d].name + _0x278d4f[_0x129f0d].stepNumber + "已完成");
          }
        }
      }
      if (this.task[6]) {
        const _0x16fc2c = xls.collect.getItems().map(_0x8f3ea9 => {
          if (_0x8f3ea9.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") <= _0x8f3ea9.endTime) {
            return _0x8f3ea9.id;
          }
        }).filter(_0x1a6d1b => _0x1a6d1b !== undefined);
        const _0x18064b = xls.collect.getItems().map(_0x74601c => {
          if (_0x74601c.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy-MM-dd hh:mm:ss") <= _0x74601c.endTime) {
            return _0x74601c.dailyLimit;
          }
        }).filter(_0xd4ff56 => _0xd4ff56 !== undefined);
        const _0x4e1f63 = _0x16fc2c.map(_0x26bfc1 => {
          return MFC.attr.getAttr(parseInt(MFC.attrType.dailyMiningStart) + _0x26bfc1);
        });
        let _0x28ddbd = 0;
        while (_0x28ddbd < _0x16fc2c.length) {
          if (_0x4e1f63[_0x28ddbd] < _0x18064b[_0x28ddbd]) {
            const _0x3cd476 = {
              id: _0x16fc2c[_0x28ddbd]
            };
            await this.send_message("cs_mining", _0x3cd476);
            await wait(500);
            _0x4e1f63[_0x28ddbd]++;
          } else {
            let _0x487876 = xls.collect.getItem(_0x16fc2c[_0x28ddbd]).name;
            addGameLog(_0x487876 + "采集完毕");
            _0x28ddbd++;
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
          let _0x410858 = await this.send_message("cs_get_friend_event", {});
          logger(_0x410858.dynEventList);
          if (_0x410858.dynEventList.length < 5) {
            for (let _0xae8ef2 = 0; _0xae8ef2 < _0x410858.dynEventList.length; _0xae8ef2++) {
              if (_0x410858.dynEventList[_0xae8ef2].likeTimes == 0) {
                const _0x41ff1d = {
                  order: _0x410858.dynEventList[_0xae8ef2].order,
                  userId: _0x410858.dynEventList[_0xae8ef2].userId
                };
                await this.send_message("cs_like_friend_event", _0x41ff1d);
                touchBtn(sta);
                await wait(200);
              }
            }
          } else {
            for (let _0xb88426 = 0; _0xb88426 < 5; _0xb88426++) {
              const _0x187657 = {
                order: _0x410858.dynEventList[_0xb88426].order,
                userId: _0x410858.dynEventList[_0xb88426].userId
              };
              await this.send_message("cs_like_friend_event", _0x187657);
              touchBtn(sta);
              await wait(200);
            }
          }
          await wait(200);
          addGameLog("好友点赞完成");
        }
      }
      if (this.task[9]) {
        var _0x44b1d2 = MFC.userInfo.vipLevel;
        if (parseInt(_0x44b1d2) > 0) {
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
        let _0x3802b7 = ["蓓丽安特", "克雷弗德", "阿特米克", "奥瑞亚", "群星之集", "工业学会", "勇无止境冲破群星", "SEER61HAPPY", "SQHP"];
        for (let _0x1c1ebe = 0; _0x1c1ebe < _0x3802b7.length; _0x1c1ebe++) {
          const _0x5337c8 = {
            code: _0x3802b7[_0x1c1ebe]
          };
          await this.send_message("cs_get_secret_code_rward", _0x5337c8);
          touchBtn(sta);
        }
      }
      if (this.task[12]) {
        super.start();
        let _0x165528 = this;
        RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
          let _0x571e62 = [];
          var _0x117821 = SimpleAlertUi({
            height: 350,
            width: 460
          });
          _0x165528.alertWin = _0x117821;
          const _0x2fc03f = {
            text: "分解符文",
            x: _0x117821.applicationWidth / 2 - 20,
            y: _0x117821.height / 15
          };
          let _0x4b5593 = createLabel(_0x2fc03f);
          _0x4b5593.size = 20;
          _0x571e62.push(_0x4b5593);
          const _0x2a5de3 = {
            prompt: "二级密码",
            x: _0x117821.applicationWidth / 6,
            y: _0x117821.height / 15 + 40,
            width: 100
          };
          var _0x824b5e = createEdit(_0x2a5de3);
          _0x571e62.push(_0x824b5e);
          const _0x3dfddc = {
            text: "[二级密码没有不填写]",
            x: _0x117821.applicationWidth / 3 + 25,
            y: _0x117821.height / 15 + 45
          };
          let _0x469f54 = createLabel(_0x3dfddc);
          _0x469f54.size = 20;
          _0x469f54.textColor = 16711680;
          _0x571e62.push(_0x469f54);
          const _0x46202d = {
            x: _0x117821.applicationWidth / 6,
            y: _0x824b5e.y + 60,
            selected: true,
            storageKey: "rune1"
          };
          let _0x4674e3 = createRadio(_0x46202d);
          _0x571e62.push(_0x4674e3);
          const _0x474e77 = {
            text: "分解随机符文可获得的",
            x: _0x4674e3.x + 40,
            y: _0x4674e3.y
          };
          let _0x124ee0 = createLabel(_0x474e77);
          _0x571e62.push(_0x124ee0);
          const _0x389706 = {
            x: _0x117821.applicationWidth / 6,
            y: _0x4674e3.y + 40,
            selected: false,
            storageKey: "rune2"
          };
          let _0x52c3a5 = createRadio(_0x389706);
          _0x571e62.push(_0x52c3a5);
          const _0x3064d9 = {
            text: "分解低级符文",
            x: _0x52c3a5.x + 40,
            y: _0x52c3a5.y
          };
          let _0x4fc91f = createLabel(_0x3064d9);
          _0x571e62.push(_0x4fc91f);
          const _0x542f05 = {
            text: `分解随机符文就是分解随机符文商店里面所描述的
分解低级就是购买不超过1200以下都分解
不会分解已绑定不分解玩水`,
            x: _0x4674e3.x,
            y: _0x52c3a5.y + 40
          };
          let _0x32c5fa = createLabel(_0x542f05);
          _0x32c5fa.textColor = 13612347;
          _0x571e62.push(_0x32c5fa);
          _0x165528.addAllUis(_0x571e62);
          _0x117821.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
            _0x165528.stop();
          }, function () {
            localStorage.setItem("rune1", _0x4674e3.selected);
            localStorage.setItem("rune2", _0x52c3a5.selected);
            if (_0x824b5e.text != "") {
              if (_0x824b5e.text.toString().length != 6) {
                MFC.bubbleAlert.showAlert("请输入有效二级密码");
                _0x165528.prcessBody(_0x165528.task[12] = 1);
              } else {
                _0x165528.input2Pwd = parseInt(_0x824b5e.text);
                logger("二级 密码" + _0x165528.input2Pwd);
                if (_0x4674e3.selected) {
                  _0x165528.disrune1();
                } else {
                  _0x165528.disrune2();
                }
              }
            } else if (_0x4674e3.selected) {
              _0x165528.disrune1();
            } else {
              _0x165528.disrune2();
            }
          }], null);
          _0x117821.showAlert();
        });
      } else {
        touchBtn(sta);
        addGameLog("一键杂项完成");
        this.stop();
      }
    } catch (_0x5bc6be) {}
  }
  async disrune1() {
    if (this.input2Pwd != null) {
      if (this.input2Pwd.toString().length == 6) {
        let _0x4516c2 = await this.send_message("cs_2nd_passwd", {
          option: 2,
          param: this.input2Pwd.toString()
        });
        if (JSON.stringify(_0x4516c2).indexOf("二级密码解锁失败") != -1) {
          addGameLog("二级密码错误");
          MFC.bubbleAlert.showAlert("二级密码错误");
          await this.prcessBody(this.task[12] = 1);
        } else {
          let _0x1036fd = [];
          for (let _0x5f2a41 = 0; _0x5f2a41 < xls.dropUnit.getItem(8316).skillRune.split("|").length; _0x5f2a41++) {
            _0x1036fd.push(parseInt(xls.dropUnit.getItem(8316).skillRune.split("|")[_0x5f2a41].split("_")[0]));
          }
          let _0x122bb8 = SkillRuneManager.getAllRunes().map(_0x25efbb => {
            if (_0x1036fd.indexOf(_0x25efbb.id) != -1 && _0x25efbb.bindPet == 0) {
              return _0x25efbb;
            }
          }).sort().filter(_0x2a9592 => _0x2a9592 != undefined);
          if (_0x122bb8.length == 0) {
            addGameLog("没有符文可分解");
          } else {
            for (let _0x273f4c = 0; _0x273f4c < _0x122bb8.length; _0x273f4c++) {
              addGameLog("分解符文=>\n" + SkillRuneManager.getNormalRuneConfs().find(_0x3be781 => _0x3be781.id === _0x122bb8[_0x273f4c].id).name);
              const _0x5d05d2 = {
                op: 2,
                runeGetTime: _0x122bb8[_0x273f4c].getTime,
                runeId: _0x122bb8[_0x273f4c].id
              };
              await this.send_message("cs_pet_skill_rune", _0x5d05d2);
              touchBtn(sta);
            }
          }
          addGameLog("分解结束");
          addGameLog("一键杂项完成");
          this.stop();
        }
      }
    } else {
      let _0x20e5ef = SkillRuneManager.getNormalRuneConfs().map(_0x1194f5 => {
        return _0x1194f5.id;
      });
      let _0x59ae96 = SkillRuneManager.getAllRunes().map(_0x22e73d => {
        if (_0x20e5ef.indexOf(_0x22e73d.id) != -1 && SkillRuneManager.getNormalRuneConfs()[_0x20e5ef.indexOf(_0x22e73d.id)].decompose > 0 && SkillRuneManager.getNormalRuneConfs()[_0x20e5ef.indexOf(_0x22e73d.id)].decompose < 300 && _0x22e73d.bindPet == 0 && _0x22e73d.id != 205) {
          return _0x22e73d;
        }
      }).sort().filter(_0x2f84ca => _0x2f84ca != undefined);
      if (_0x59ae96.length == 0) {
        addGameLog("没有符文可分解");
      } else {
        for (let _0x306ee1 = 0; _0x306ee1 < _0x59ae96.length; _0x306ee1++) {
          addGameLog("分解符文=>\n" + SkillRuneManager.getNormalRuneConfs().find(_0x485e2d => _0x485e2d.id === _0x59ae96[_0x306ee1].id).name);
          const _0xb13a11 = {
            op: 2,
            runeGetTime: _0x59ae96[_0x306ee1].getTime,
            runeId: _0x59ae96[_0x306ee1].id
          };
          await this.send_message("cs_pet_skill_rune", _0xb13a11);
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
        let _0x29efb2 = await this.send_message("cs_2nd_passwd", {
          option: 2,
          param: this.input2Pwd.toString()
        });
        if (JSON.stringify(_0x29efb2).indexOf("二级密码解锁失败") != -1) {
          addGameLog("二级密码错误");
          MFC.bubbleAlert.showAlert("二级密码错误");
          await this.prcessBody(this.task[12] = 1);
        } else {
          let _0x3dda4b = SkillRuneManager.getNormalRuneConfs().map(_0x2db918 => {
            return _0x2db918.id;
          });
          let _0x5457b1 = SkillRuneManager.getAllRunes().map(_0x45dcf7 => {
            if (_0x3dda4b.indexOf(_0x45dcf7.id) != -1 && SkillRuneManager.getNormalRuneConfs()[_0x3dda4b.indexOf(_0x45dcf7.id)].decompose > 0 && SkillRuneManager.getNormalRuneConfs()[_0x3dda4b.indexOf(_0x45dcf7.id)].decompose < 300 && _0x45dcf7.bindPet == 0 && _0x45dcf7.id != 205) {
              return _0x45dcf7;
            }
          }).sort().filter(_0x4ded1f => _0x4ded1f != undefined);
          if (_0x5457b1.length == 0) {
            addGameLog("没有符文可分解");
          } else {
            for (let _0x86afae = 0; _0x86afae < _0x5457b1.length; _0x86afae++) {
              addGameLog("分解符文=>\n" + SkillRuneManager.getNormalRuneConfs().find(_0x2d4f16 => _0x2d4f16.id === _0x5457b1[_0x86afae].id).name);
              const _0x592eab = {
                op: 2,
                runeGetTime: _0x5457b1[_0x86afae].getTime,
                runeId: _0x5457b1[_0x86afae].id
              };
              await this.send_message("cs_pet_skill_rune", _0x592eab);
              touchBtn(sta);
            }
          }
          addGameLog("分解结束");
          addGameLog("一键杂项完成");
          this.stop();
        }
      }
    } else {
      let _0x905547 = SkillRuneManager.getNormalRuneConfs().map(_0x16dd15 => {
        return _0x16dd15.id;
      });
      let _0x1b75f3 = SkillRuneManager.getAllRunes().map(_0x357a6e => {
        if (_0x905547.indexOf(_0x357a6e.id) != -1 && SkillRuneManager.getNormalRuneConfs()[_0x905547.indexOf(_0x357a6e.id)].decompose > 0 && SkillRuneManager.getNormalRuneConfs()[_0x905547.indexOf(_0x357a6e.id)].decompose < 300 && _0x357a6e.bindPet == 0 && _0x357a6e.id != 205) {
          return _0x357a6e;
        }
      }).sort().filter(_0x419ded => _0x419ded != undefined);
      if (_0x1b75f3.length == 0) {
        addGameLog("没有符文可分解");
      } else {
        for (let _0x35e359 = 0; _0x35e359 < _0x1b75f3.length; _0x35e359++) {
          addGameLog("分解符文=>\n" + SkillRuneManager.getNormalRuneConfs().find(_0xa23347 => _0xa23347.id === _0x1b75f3[_0x35e359].id).name);
          const _0x3e6b38 = {
            op: 2,
            runeGetTime: _0x1b75f3[_0x35e359].getTime,
            runeId: _0x1b75f3[_0x35e359].id
          };
          await this.send_message("cs_pet_skill_rune", _0x3e6b38);
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
    let _0x5473c5 = this;
    MFC.alert.show(`确定进行背包一键金灿灿吗
背包里面所有精灵都会变为31天赋
娱乐功能无实际作用
恢复需刷新`, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x3456f4) {
      _0x5473c5.stop();
    }, function (_0xf5259c) {
      _0x5473c5.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x2975db = PetManager.getInstance().getAllPets();
      for (let _0x549c17 = 0; _0x549c17 < _0x2975db.length; _0x549c17++) {
        _0x2975db[_0x549c17].talent = 31;
      }
      addGameLog("金灿灿完毕!");
      this.stop();
    } catch (_0x3346a3) {
      logger(_0x3346a3);
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
    let _0x3afd8b = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0xa87b67 = [];
      var _0x16a752 = SimpleAlertUi({
        width: 400,
        height: 470
      });
      _0x3afd8b.alertWin = _0x16a752;
      const _0x1bf57d = {
        text: "抽轮盘",
        y: _0x16a752.height / 15
      };
      let _0x4f7b00 = createLabel(_0x1bf57d);
      _0x4f7b00.x = _0x16a752.applicationWidth / 2 - _0x4f7b00.width / 2;
      _0x4f7b00.size = 20;
      _0xa87b67.push(_0x4f7b00);
      const _0x2736f3 = {
        text: "克洛斯星",
        x: _0x16a752.width / 5 - 40,
        y: _0x4f7b00.y + 40
      };
      let _0x5e154a = createLabel(_0x2736f3);
      _0xa87b67.push(_0x5e154a);
      const _0x2cb697 = {
        x: _0x5e154a.x + 100,
        y: _0x5e154a.y,
        selected: false,
        storageKey: "klsxq"
      };
      let _0xebd107 = createToggle(_0x2cb697);
      _0xa87b67.push(_0xebd107);
      const _0x5b8e1d = {
        text: "海洋星低级",
        x: _0xebd107.x + 70,
        y: _0x5e154a.y
      };
      let _0x4c4e94 = createLabel(_0x5b8e1d);
      _0xa87b67.push(_0x4c4e94);
      const _0x211e7b = {
        x: _0x4c4e94.x + 100,
        y: _0x5e154a.y,
        selected: false,
        storageKey: "hyxq1"
      };
      let _0x334440 = createToggle(_0x211e7b);
      _0xa87b67.push(_0x334440);
      const _0x2444e7 = {
        text: "海洋星高级",
        x: _0x5e154a.x,
        y: _0x5e154a.y + 40
      };
      let _0x83e5ca = createLabel(_0x2444e7);
      _0xa87b67.push(_0x83e5ca);
      const _0x157e21 = {
        x: _0xebd107.x,
        y: _0x83e5ca.y,
        selected: false,
        storageKey: "hyxq2"
      };
      let _0x358013 = createToggle(_0x157e21);
      _0xa87b67.push(_0x358013);
      const _0x53103c = {
        text: "火山星低级",
        x: _0x4c4e94.x,
        y: _0x83e5ca.y
      };
      let _0xca1b1 = createLabel(_0x53103c);
      _0xa87b67.push(_0xca1b1);
      const _0x10f460 = {
        x: _0x334440.x,
        y: _0x83e5ca.y,
        selected: false,
        storageKey: "hsxq1"
      };
      let _0x4f4d57 = createToggle(_0x10f460);
      _0xa87b67.push(_0x4f4d57);
      const _0x212ff1 = {
        text: "火山星高级",
        x: _0x5e154a.x,
        y: _0x83e5ca.y + 40
      };
      let _0x15d5d8 = createLabel(_0x212ff1);
      _0xa87b67.push(_0x15d5d8);
      const _0x407f86 = {
        x: _0xebd107.x,
        y: _0x15d5d8.y,
        selected: false,
        storageKey: "hsxq2"
      };
      let _0x1757c5 = createToggle(_0x407f86);
      _0xa87b67.push(_0x1757c5);
      const _0x2f7763 = {
        text: "云霄星低级",
        x: _0x4c4e94.x,
        y: _0x15d5d8.y
      };
      let _0x1d78ab = createLabel(_0x2f7763);
      _0xa87b67.push(_0x1d78ab);
      const _0x1f59cc = {
        x: _0x334440.x,
        y: _0x1d78ab.y,
        selected: false,
        storageKey: "yxxq1"
      };
      let _0x3ad992 = createToggle(_0x1f59cc);
      _0xa87b67.push(_0x3ad992);
      const _0x1eb39c = {
        text: "云霄星高级",
        x: _0x5e154a.x,
        y: _0x15d5d8.y + 40
      };
      let _0xbf9263 = createLabel(_0x1eb39c);
      _0xa87b67.push(_0xbf9263);
      const _0x3f3d47 = {
        x: _0xebd107.x,
        y: _0xbf9263.y,
        selected: false,
        storageKey: "yxxq2"
      };
      let _0x4df064 = createToggle(_0x3f3d47);
      _0xa87b67.push(_0x4df064);
      const _0x50ddad = {
        text: "阿尔法星低级",
        x: _0x4c4e94.x,
        y: _0xbf9263.y
      };
      let _0x385cae = createLabel(_0x50ddad);
      _0xa87b67.push(_0x385cae);
      const _0x17a201 = {
        x: _0x334440.x,
        y: _0xbf9263.y,
        selected: false,
        storageKey: "aefxq1"
      };
      let _0x2fc823 = createToggle(_0x17a201);
      _0xa87b67.push(_0x2fc823);
      const _0x488a0c = {
        text: "阿尔法星高级",
        x: _0x5e154a.x,
        y: _0xbf9263.y + 40
      };
      let _0x5a212b = createLabel(_0x488a0c);
      _0xa87b67.push(_0x5a212b);
      const _0x481403 = {
        x: _0xebd107.x,
        y: _0x5a212b.y,
        selected: false,
        storageKey: "aefxq2"
      };
      let _0x378f1b = createToggle(_0x481403);
      _0xa87b67.push(_0x378f1b);
      const _0xea9a00 = {
        text: "拜伦号低级",
        x: _0x4c4e94.x,
        y: _0x5a212b.y
      };
      let _0x48f5b4 = createLabel(_0xea9a00);
      _0xa87b67.push(_0x48f5b4);
      const _0x11702f = {
        x: _0x334440.x,
        y: _0x5a212b.y,
        selected: false,
        storageKey: "blxq1"
      };
      let _0x5094bb = createToggle(_0x11702f);
      _0xa87b67.push(_0x5094bb);
      const _0x3918a6 = {
        text: "拜伦号高级",
        x: _0x5e154a.x,
        y: _0x5a212b.y + 40
      };
      let _0x3ac9ed = createLabel(_0x3918a6);
      _0xa87b67.push(_0x3ac9ed);
      const _0x40394c = {
        x: _0xebd107.x,
        y: _0x3ac9ed.y,
        selected: false,
        storageKey: "blxq2"
      };
      let _0xbe34cc = createToggle(_0x40394c);
      _0xa87b67.push(_0xbe34cc);
      const _0x53ae8a = {
        x: _0x5e154a.x,
        y: _0x3ac9ed.y + 40,
        width: 100,
        text: "请输入电池",
        storageKey: "poolstatus"
      };
      var _0x58c30c = createEdit(_0x53ae8a);
      _0xa87b67.push(_0x58c30c);
      const _0x4f8962 = {
        text: "达到输入电池数停止",
        x: _0x5e154a.x + 72 + 40,
        y: _0x3ac9ed.y + 45
      };
      let _0x1406e5 = createLabel(_0x4f8962);
      _0x1406e5.textColor = 16776960;
      _0xa87b67.push(_0x1406e5);
      const _0x592184 = {
        x: _0x334440.x,
        y: _0x1406e5.y,
        selected: false,
        storageKey: "poolstatusnum"
      };
      let _0x66fe9d = createToggle(_0x592184);
      _0xa87b67.push(_0x66fe9d);
      const _0xe30f46 = {
        text: "注意:如果不要求达到多少电池就不用输入与勾选\n     停止电池数为左上角头像旁边那个数",
        x: _0x5e154a.x,
        y: _0x1406e5.y + 40
      };
      let _0x22133a = createLabel(_0xe30f46);
      _0x22133a.textColor = 16711808;
      _0xa87b67.push(_0x22133a);
      _0x3afd8b.addAllUis(_0xa87b67);
      _0x16a752.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x3afd8b.stop();
      }, function () {
        localStorage.setItem("klsxq", _0xebd107.selected);
        localStorage.setItem("hyxq1", _0x334440.selected);
        localStorage.setItem("hyxq2", _0x358013.selected);
        localStorage.setItem("hsxq1", _0x4f4d57.selected);
        localStorage.setItem("hsxq2", _0x1757c5.selected);
        localStorage.setItem("yxxq1", _0x3ad992.selected);
        localStorage.setItem("yxxq2", _0x4df064.selected);
        localStorage.setItem("aefxq1", _0x2fc823.selected);
        localStorage.setItem("aefxq2", _0x378f1b.selected);
        localStorage.setItem("blxq1", _0x5094bb.selected);
        localStorage.setItem("blxq2", _0xbe34cc.selected);
        localStorage.setItem("poolstatusnum", _0x66fe9d.selected);
        localStorage.setItem("poolstatus", _0x58c30c.text);
        let _0x12468f = [_0xebd107.selected, _0x334440.selected, _0x358013.selected, _0x4f4d57.selected, _0x1757c5.selected, _0x3ad992.selected, _0x4df064.selected, _0x2fc823.selected, _0x378f1b.selected, _0x5094bb.selected, _0xbe34cc.selected, _0x66fe9d.selected];
        _0x12468f.forEach(function (_0x1ea3d1, _0x30dd03) {
          if (_0x1ea3d1) {
            _0x3afd8b.task[_0x30dd03] = 1;
          }
        });
        if (_0x66fe9d.selected) {
          if (_0x58c30c.text.length == 0) {
            MFC.bubbleAlert.showAlert("请输入电池数量");
            return true;
          } else if (!Number.isInteger(parseInt(_0x58c30c.text))) {
            MFC.bubbleAlert.showAlert("请输入正确的电池数量");
            return true;
          } else {
            _0x3afd8b.prcessBody();
          }
        } else {
          _0x3afd8b.prcessBody();
        }
      }], null);
      _0x16a752.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0xe23614 = 0;
      let _0x5ece12 = false;
      let _0x4f83cc = [{
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
      for (let _0x46b27d = 0; _0x46b27d < _0x4f83cc.length; _0x46b27d++) {
        if (this.task[_0x46b27d]) {
          while (true) {
            if (this.task[11]) {
              if (MFC.userInfo.curEnergy > parseInt(localStorage.getItem("poolstatus"))) {
                addGameLog("已达目标电池");
                break;
              }
            }
            for (let _0x2726b5 = 0; _0x2726b5 < _0x4f83cc[_0x46b27d].itemIds.length; _0x2726b5++) {
              if (getSeerItemNum(_0x4f83cc[_0x46b27d].itemIds[_0x2726b5]) >= _0x4f83cc[_0x46b27d].num[_0x2726b5]) {
                _0x5ece12 = true;
              } else {
                _0x5ece12 = false;
                addGameLog(_0x4f83cc[_0x46b27d].name + "轮盘清空!");
                break;
              }
            }
            if (_0x5ece12) {
              _0xe23614++;
              addGameLog(_0x4f83cc[_0x46b27d].name + "轮盘第" + _0xe23614 + "次");
              await wait(200);
              const _0x57bb31 = {
                levelId: _0x4f83cc[_0x46b27d].levelId,
                prizePool: _0x4f83cc[_0x46b27d].prizePool
              };
              await this.send_message("cs_time_travel", _0x57bb31);
              touchBtn(sta);
              await wait(200);
            } else {
              break;
            }
          }
        }
      }
      this.stop();
    } catch (_0x955541) {}
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
    let _0x2bc39e = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("开始进行");
      let _0x374476 = [];
      var _0x8df00c = SimpleAlertUi({
        width: 460,
        height: 400
      });
      _0x2bc39e.alertWin = _0x8df00c;
      const _0x5c33cd = {
        text: "一键战队任务",
        y: _0x8df00c.height / 16
      };
      let _0x2a41b0 = createLabel(_0x5c33cd);
      _0x2a41b0.x = _0x8df00c.applicationWidth / 2 - _0x2a41b0.width / 2;
      _0x374476.push(_0x2a41b0);
      const _0x3c11a1 = {
        text: "注意:",
        textColor: 16776960,
        x: 30,
        y: _0x2a41b0.y + _0x2a41b0.height + 12
      };
      var _0x28f764 = createLabel(_0x3c11a1);
      _0x374476.push(_0x28f764);
      const _0x7dcd2 = {
        text: "雇佣任务需要小号完成:",
        textColor: 16776960,
        x: 40,
        y: _0x28f764.y + _0x28f764.height + 10
      };
      var _0x3b5bfc = createLabel(_0x7dcd2);
      _0x374476.push(_0x3b5bfc);
      const _0xf425e9 = {
        text: "商店默认购买60小型梦幻结晶",
        x: 40,
        y: _0x3b5bfc.y + _0x3b5bfc.height + 10
      };
      var _0x1d9e69 = createLabel(_0xf425e9);
      _0x374476.push(_0x1d9e69);
      const _0x2f1c52 = {
        text: "科技点会按照时间获得顺序给100级点一次体力",
        x: 40,
        y: _0x1d9e69.y + _0x1d9e69.height + 10
      };
      var _0x33e855 = createLabel(_0x2f1c52);
      _0x374476.push(_0x33e855);
      const _0x40bc87 = {
        text: "如果普通捐献和钻石捐献同时勾选会根据次数对半捐",
        x: 40,
        y: _0x33e855.y + _0x33e855.height + 10
      };
      var _0x258b42 = createLabel(_0x40bc87);
      _0x374476.push(_0x258b42);
      const _0x3c87ee = {
        x: 70,
        y: _0x258b42.y + _0x258b42.height + 10,
        width: 100,
        prompt: "请输入捐献次数",
        storageKey: "teamcontributenum"
      };
      var _0x4d60c7 = createEdit(_0x3c87ee);
      _0x374476.push(_0x4d60c7);
      const _0x5ad8c0 = {
        text: "输入数字但不超过",
        x: _0x4d60c7.x + _0x4d60c7.width + 30,
        y: _0x4d60c7.y + 10
      };
      var _0x1d3f97 = createLabel(_0x5ad8c0);
      _0x374476.push(_0x1d3f97);
      var _0x17e626 = createLabel({
        text: VIPManager.getInstance().getVipPrivilegeInfoByLv(VIPManager.getInstance().vipLevel).teamContribute - MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes),
        textColor: 16776960,
        x: _0x4d60c7.x + _0x4d60c7.width + 30 + _0x1d3f97.width + 5,
        y: _0x4d60c7.y + 10
      });
      _0x17e626.size = 20;
      _0x374476.push(_0x17e626);
      const _0x41056b = {
        text: "普通捐献",
        x: 70,
        y: _0x17e626.y + _0x17e626.height + 20
      };
      var _0x31f3fb = createLabel(_0x41056b);
      _0x374476.push(_0x31f3fb);
      const _0x398eb8 = {
        x: _0x31f3fb.x + 70,
        y: _0x31f3fb.y,
        selected: false,
        storageKey: "ptc"
      };
      let _0xcec169 = createToggle(_0x398eb8);
      _0x374476.push(_0xcec169);
      const _0x4d5cec = {
        text: "钻石捐献",
        x: _0xcec169.x + _0xcec169.width + 20,
        y: _0x31f3fb.y
      };
      var _0x2205f5 = createLabel(_0x4d5cec);
      _0x374476.push(_0x2205f5);
      const _0x35bc2b = {
        x: _0x2205f5.x + 70,
        y: _0x2205f5.y,
        selected: false,
        storageKey: "zsc"
      };
      let _0x598417 = createToggle(_0x35bc2b);
      _0x374476.push(_0x598417);
      const _0x274e57 = {
        text: "商店购买",
        x: _0x31f3fb.x,
        y: _0x31f3fb.y + 40
      };
      var _0x52f186 = createLabel(_0x274e57);
      _0x374476.push(_0x52f186);
      const _0x17f3bc = {
        x: _0x52f186.x + 70,
        y: _0x52f186.y,
        selected: false,
        storageKey: "tbuy"
      };
      let _0x57aebb = createToggle(_0x17f3bc);
      _0x374476.push(_0x57aebb);
      const _0x3fdcb3 = {
        text: "科技加点",
        x: _0xcec169.x + _0xcec169.width + 20,
        y: _0x31f3fb.y + 40
      };
      var _0x13b485 = createLabel(_0x3fdcb3);
      _0x374476.push(_0x13b485);
      const _0x459107 = {
        x: _0x13b485.x + 70,
        y: _0x13b485.y,
        selected: false,
        storageKey: "tp"
      };
      let _0x2a0699 = createToggle(_0x459107);
      _0x374476.push(_0x2a0699);
      _0x2bc39e.addAllUis(_0x374476);
      _0x8df00c.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x2bc39e.stop();
      }, function () {
        if (_0x4d60c7.text.length == 0) {
          MFC.bubbleAlert.showAlert("请输入捐献次数");
          return true;
        }
        if (!Number.isInteger(parseInt(_0x4d60c7.text)) || _0x4d60c7.text > VIPManager.getInstance().getVipPrivilegeInfoByLv(VIPManager.getInstance().vipLevel).teamContribute - MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) || parseInt(_0x4d60c7.text) < 0) {
          MFC.bubbleAlert.showAlert("捐献次数错误");
          return true;
        }
        localStorage.setItem("teamcontributenum", _0x4d60c7.text);
        localStorage.setItem("ptc", _0xcec169.selected);
        localStorage.setItem("zsc", _0x598417.selected);
        localStorage.setItem("tbuy", _0x57aebb.selected);
        localStorage.setItem("tp", _0x2a0699.selected);
        if (_0xcec169.selected) {
          _0x2bc39e.task[0] = 1;
        }
        if (_0x598417.selected) {
          _0x2bc39e.task[1] = 1;
        }
        if (_0x57aebb.selected) {
          _0x2bc39e.task[2] = 1;
        }
        if (_0x2a0699.selected) {
          _0x2bc39e.task[3] = 1;
        }
        _0x2bc39e.prcessBody();
      }], null);
      _0x8df00c.showAlert();
    });
  }
  async teamcontribute() {
    let _0xcbbc3a = MFC.userInfo.coin;
    let _0x130855 = VIPManager.getInstance().getVipPrivilegeInfoByLv(VIPManager.getInstance().vipLevel).teamContribute;
    let _0x18c8d1 = MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes);
    if (_0xcbbc3a < parseInt(localStorage.getItem("teamcontributenum")) * 20000) {
      MFC.alert.show("赛尔豆不足" + _0x130855 + "次捐献");
    } else if (_0x18c8d1 >= _0x130855) {
      MFC.alert.show("已经捐献" + _0x18c8d1 + "次");
    } else if (this.task[0] || this.task[1]) {
      if (this.task[0] && this.task[1]) {
        for (let _0x24045e = 0; _0x24045e < Math.floor(parseInt(localStorage.getItem("teamcontributenum")) / 2) + parseInt(localStorage.getItem("teamcontributenum")) % 2; _0x24045e++) {
          let _0x6d506e = await this.send_message("cs_team_get_equip_info", {
            teamId: TeamManager.getInstance()._teamInfo.teamId,
            flag: 0
          });
          _0x6d506e = _0x6d506e.equipInfoList.filter(function (_0x19c1a7) {
            return _0x19c1a7.energy !== 0;
          }).sort((_0x50c8f9, _0x5ca89e) => _0x50c8f9.energy - _0x5ca89e.energy)[0].type;
          let _0x23e9cb = "";
          if (_0x6d506e == 0) {
            _0x23e9cb = "战队科技中心";
          }
          if (_0x6d506e == 1) {
            _0x23e9cb = "战队物资装置";
          }
          if (_0x6d506e == 2) {
            _0x23e9cb = "战队商店";
          }
          if (_0x6d506e == 3) {
            _0x23e9cb = "精灵改造仪";
          }
          addGameLog("捐献" + _0x23e9cb + "第" + MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) + "次");
          const _0x629982 = {
            type: _0x6d506e,
            flag: 0
          };
          await this.send_message("cs_team_contribute", _0x629982);
        }
        if (MFC.userInfo.diamond >= Math.floor(parseInt(localStorage.getItem("teamcontributenum")) / 2) * 20) {
          for (let _0x486e37 = 0; _0x486e37 < Math.floor(parseInt(localStorage.getItem("teamcontributenum")) / 2); _0x486e37++) {
            let _0x581572 = await this.send_message("cs_team_get_equip_info", {
              teamId: TeamManager.getInstance()._teamInfo.teamId,
              flag: 0
            });
            _0x581572 = _0x581572.equipInfoList.filter(function (_0x507b33) {
              return _0x507b33.energy !== 0;
            }).sort((_0x97121, _0x5d444b) => _0x97121.energy - _0x5d444b.energy)[0].type;
            let _0x5be11f = "";
            if (_0x581572 == 0) {
              _0x5be11f = "战队科技中心";
            }
            if (_0x581572 == 1) {
              _0x5be11f = "战队物资装置";
            }
            if (_0x581572 == 2) {
              _0x5be11f = "战队商店";
            }
            if (_0x581572 == 3) {
              _0x5be11f = "精灵改造仪";
            }
            addGameLog("捐献" + _0x5be11f + "第" + MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) + "次");
            const _0x257f6f = {
              type: _0x581572,
              flag: 1
            };
            await this.send_message("cs_team_contribute", _0x257f6f);
          }
        } else {
          MFC.alert.show("钻石不足" + parseInt(localStorage.getItem("teamcontributenum")) + "次捐献");
        }
      } else if (this.task[0]) {
        for (let _0x1afef3 = 0; _0x1afef3 < parseInt(localStorage.getItem("teamcontributenum")); _0x1afef3++) {
          let _0x1e5023 = await this.send_message("cs_team_get_equip_info", {
            teamId: TeamManager.getInstance()._teamInfo.teamId,
            flag: 0
          });
          _0x1e5023 = _0x1e5023.equipInfoList.filter(function (_0xac3e42) {
            return _0xac3e42.energy !== 0;
          }).sort((_0x5550f3, _0x19fcf5) => _0x5550f3.energy - _0x19fcf5.energy)[0].type;
          let _0x40a4b2 = "";
          if (_0x1e5023 == 0) {
            _0x40a4b2 = "战队科技中心";
          }
          if (_0x1e5023 == 1) {
            _0x40a4b2 = "战队物资装置";
          }
          if (_0x1e5023 == 2) {
            _0x40a4b2 = "战队商店";
          }
          if (_0x1e5023 == 3) {
            _0x40a4b2 = "精灵改造仪";
          }
          addGameLog("捐献" + _0x40a4b2 + "第" + MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) + "次");
          const _0x41b54b = {
            type: _0x1e5023,
            flag: 0
          };
          await this.send_message("cs_team_contribute", _0x41b54b);
        }
      } else if (this.task[1]) {
        for (let _0x2d5fa9 = 0; _0x2d5fa9 < parseInt(localStorage.getItem("teamcontributenum")); _0x2d5fa9++) {
          let _0x4d762b = await this.send_message("cs_team_get_equip_info", {
            teamId: TeamManager.getInstance()._teamInfo.teamId,
            flag: 0
          });
          _0x4d762b = _0x4d762b.equipInfoList.filter(function (_0x3696e2) {
            return _0x3696e2.energy !== 0;
          }).sort((_0x25c337, _0x3befad) => _0x25c337.energy - _0x3befad.energy)[0].type;
          let _0x3c4d27 = "";
          if (_0x4d762b == 0) {
            _0x3c4d27 = "战队科技中心";
          }
          if (_0x4d762b == 1) {
            _0x3c4d27 = "战队物资装置";
          }
          if (_0x4d762b == 2) {
            _0x3c4d27 = "战队商店";
          }
          if (_0x4d762b == 3) {
            _0x3c4d27 = "精灵改造仪";
          }
          addGameLog("捐献" + _0x3c4d27 + "第" + MFC.attr.getAttr(MFC.attrType.dailyTeamContributeTimes) + "次");
          const _0x557cb4 = {
            type: _0x4d762b,
            flag: 1
          };
          await this.send_message("cs_team_contribute", _0x557cb4);
        }
      }
    }
  }
  async teamfight() {
    let _0x2a75e7 = [PetSort.getPetList(PetManager.getInstance().getAllPets()).map(_0x2b30fc => {
      if (_0x2b30fc.level < 100) {
        return _0x2b30fc;
      }
    }).sort((_0x1c36be, _0x282bea) => _0x1c36be.battleValues[0] - _0x282bea.battleValues[0])[0].getTime.toString()];
    const _0x692765 = {
      op: 1,
      petList: _0x2a75e7
    };
    await this.send_message("cs_team_league_new", _0x692765);
    let _0x3b3546 = PetSort.getPetList(PetManager.getInstance().getAllPets()).map(_0x56b63c => {
      if (_0x56b63c.level < 100) {
        return _0x56b63c;
      }
    }).sort((_0x3c86e3, _0x155bdc) => _0x3c86e3.battleValues[0] - _0x155bdc.battleValues[0])[0].skills[0];
    logger("阵容更换完毕");
    await this.send_message("cs_team_league_new", {
      op: 2
    });
    await this.send_message("cs_team_league_new", {
      op: 3
    });
    await this.initBattle();
    let _0x74e76 = await this.useSkill(_0x3b3546);
    while (_0x74e76.result.result == 0) {
      addGameLog("未被击败，继续攻击");
      _0x74e76 = await this.useSkill(_0x3b3546);
    }
  }
  async fight2() {
    let _0xc284d6 = await this.send_message("cs_get_campaign_pet_challenge_boss", {});
    let _0x3f8ddb = await this.send_message("cs_new_get_hire_pet_list", {
      teamPageNo: 1,
      teamPageSize: 1000
    });
    let _0xcfccdb = _0x3f8ddb.teamHireList.map(_0x2881a0 => {
      if (_0x2881a0.petLevel == 1) {
        for (let _0x209851 of _0xc284d6.todayLimitAttr) {
          if (_0x209851 == PetConfig.getDef(_0x2881a0.petId).elemType) {
            return _0x2881a0;
          }
        }
      }
    }).filter(_0x5eb216 => _0x5eb216);
    let _0x3c5156 = 0;
    if (_0xcfccdb.length == 0) {
      addGameLog("战斗没有1级符合属性的可以雇佣");
      _0x3c5156 = 1;
      _0xcfccdb = _0x3f8ddb.teamHireList.map(_0x3972b4 => {
        if (_0x3972b4.petLevel == 1) {
          return _0x3972b4;
        }
      }).filter(_0x375233 => _0x375233);
    }
    if (_0xcfccdb.length !== 0) {
      let _0x3d2966 = _0xcfccdb[0].getTime;
      let _0x13cfcc = _0xc284d6.times;
      let _0x226f8c = _0xcfccdb[0].userId + "_" + _0xcfccdb[0].type + "_" + _0xcfccdb[0].pos;
      const _0x554489 = {
        type: _0xcfccdb[0].type,
        pos: _0xcfccdb[0].pos,
        targetUid: _0xcfccdb[0].userId
      };
      let _0xc037a0 = await this.send_message("cs_new_get_hire_pet_info", _0x554489);
      if (_0x13cfcc < 1 || _0x3c5156 == 1) {
        MFC.alert.show("极限挑战次数不足1，雇佣需要耗费体力");
        if (MFC.userInfo.curEnergy < 5) {
          MFC.alert.show("体力不足5");
        } else {
          const _0x160727 = {
            petId: _0xcfccdb[0].petId,
            level: 1,
            skillList: _0xc037a0.pet.skills,
            getTime: _0x3d2966,
            otherUid: _0xcfccdb[0].userId,
            type: _0xcfccdb[0].type
          };
          const _0x351c51 = {
            levelId: 2,
            getTimeList: [_0x226f8c],
            attachBattleSkill: [_0x160727]
          };
          await this.send_message("cs_pve_planet_start_battle", _0x351c51);
          await this.initBattle();
          let _0x19ca38 = await this.useSkill(_0xc037a0.pet.skills[0]);
          while (_0x19ca38.result.result == 0) {
            addGameLog("未被击败，继续攻击");
            _0x19ca38 = await this.useSkill(_0xc037a0.pet.skills[0]);
          }
        }
      } else {
        const _0x3aa316 = {
          type: _0xcfccdb[0].type,
          pos: _0xcfccdb[0].pos,
          targetUid: _0xcfccdb[0].userId
        };
        await this.send_message("cs_new_get_hire_pet_info", _0x3aa316);
        const _0x50dbc6 = {
          petId: _0xcfccdb[0].petId,
          level: 1,
          skillList: _0xc037a0.pet.skills,
          getTime: _0x3d2966,
          otherUid: _0xcfccdb[0].userId,
          type: _0xcfccdb[0].type
        };
        const _0x92fc1a = {
          levelId: 5,
          hirePetList: [_0x226f8c],
          attachBattleSkill: [_0x50dbc6]
        };
        await this.send_message("cs_start_campaign_pet_challenge", _0x92fc1a);
        await this.initBattle();
        let _0x1aff6f = await this.useSkill(_0xc037a0.pet.skills[0]);
        while (_0x1aff6f.result.result == 0) {
          addGameLog("未被击败，继续攻击");
          _0x1aff6f = await this.useSkill(_0xc037a0.pet.skills[0]);
        }
      }
    }
  }
  async cheak() {
    let _0x6ab6b3 = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10450));
    let _0x3bd142 = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10451));
    let _0x43d3c4 = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10452));
    let _0x124bcf = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10453));
    let _0x3a1c8a = TaskUtils.GetRestTaskState(xls.activityTaskReset.getItem(10454));
    switch (_0x6ab6b3) {
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
    switch (_0x3bd142) {
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
    switch (_0x43d3c4) {
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
    switch (_0x124bcf) {
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
    switch (_0x3a1c8a) {
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
    let _0x3b7378 = MFC.attr.getAttr(MFC.attrType.weeklyTeamTaskTimes);
    if (_0x3b7378 >= 10) {
      addGameLog("本周已完成任务数量：" + _0x3b7378);
      if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.weeklyTeamTaskBoxStatus), 1) == 0) {
        await this.send_message("cs_team_task_box_get", {
          i: 0
        });
        MFC.alert.show("一键任务已完成");
      }
      if (_0x3b7378 >= 15) {
        addGameLog("本周已完成任务数量：" + _0x3b7378);
        if (BitUtils.getBit(MFC.attr.getAttr(MFC.attrType.weeklyTeamTaskBoxStatus), 2) == 0) {
          await this.send_message("cs_team_task_box_get", {
            i: 1
          });
          MFC.alert.show("一键任务已完成");
        }
      }
    } else {
      addGameLog("本周已完成任务数量：" + _0x3b7378);
    }
    MFC.alert.show("一键任务已完成");
  }
  async teamtechlearn() {
    let _0x55bfa9 = PetSort.getPetList(PetManager.getInstance().getAllPets()).map(_0x229959 => {
      if (_0x229959.level == 100 && _0x229959.teamTechLearnTimes[0] < 5) {
        return _0x229959;
      }
    }).sort((_0x308f51, _0x39f548) => _0x308f51.battleValues[0] - _0x39f548.battleValues[0])[0].getTime;
    const _0x554868 = {
      getTime: _0x55bfa9,
      idx: 0,
      flag: 1,
      num: 1
    };
    GlobalSocket.PROTOCOL_SOCKET.send(4630, _0x554868);
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
    } catch (_0x11f46b) {}
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
    let _0x4c0992 = this;
    MFC.alert.show("确认进行鲁克的物资补给吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x5eb847) {
      _0x4c0992.stop();
    }, function (_0x536108) {
      _0x4c0992.prcessBody();
    }]);
  }
  async fight() {
    if (UserManager.getInstance().userInfo.defaultTeam[0].length == 0) {
      addGameLog("请设置阵容");
      this.stop();
    } else {
      let _0x4db999 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
      await this.send_message("cs_pve_activity_battle", {
        levelId: this.levelId,
        battleType: 3
      });
      await this.initBattle();
      let _0x173359 = await this.useSkill(_0x4db999);
      while (_0x173359.result.result === 0) {
        let _0x2f182a = _0x173359.result.playerInfos.find(_0x21b549 => _0x21b549.uid === MFC.userInfo.uid);
        let _0x2dbbf4 = _0x2f182a ? _0x2f182a.nextRoundOP : _0x173359.result.playerInfos[1].nextRoundOP;
        if (_0x2dbbf4 !== 1) {
          addGameLog("首发被击败");
          break;
        }
        if (_0x173359.result.roundNum > 5) {
          break;
        }
        addGameLog("未击败，继续攻击");
        _0x173359 = await this.useSkill(_0x4db999);
      }
      await wait(300);
    }
  }
  async prcessBody() {
    try {
      let _0x3b00d3 = deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss");
      let _0x255912 = xls.activityTimeLimit.getItems()[5].startTime;
      let _0x4c92b0 = xls.activityTimeLimit.getItems()[5].endTime;
      if (_0x255912 <= _0x3b00d3 && _0x3b00d3 <= _0x4c92b0) {
        let _0x1620b3 = parseInt(MFC.serverTimer.date.getHours());
        let _0x19af62 = [322, 323, 324];
        let _0x47b316 = ["322", "323", "324"];
        if (_0x1620b3 > 5 && _0x1620b3 <= 23) {
          let _0x840707 = _0x1620b3 < 12 ? 0 : _0x1620b3 < 18 ? 1 : 2;
          let _0x5e9f4d = _0x19af62[_0x840707];
          let _0x478814 = _0x47b316[_0x840707];
          addGameLog("鲁克" + ["早上", "下午", "晚上"][_0x840707] + "开始");
          while (true) {
            let _0x34cf1c = await this.send_message("cs_get_mapBoss_data", {
              planetId: 6
            });
            let _0x47b9f5 = _0x34cf1c.reward[_0x478814];
            if (_0x47b9f5 === undefined) {
              addGameLog("鲁克第1次奖励！");
            } else if (_0x47b9f5 < 10) {
              addGameLog("鲁克第" + _0x47b9f5 + "次奖励！");
            } else {
              addGameLog("鲁克完成！");
              break;
            }
            this.levelId = _0x5e9f4d;
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
        addGameLog("鲁克活动时间在 " + _0x255912 + "~" + _0x4c92b0);
        addGameLog("不在活动时间内");
        this.stop();
      }
    } catch (_0x5b9a9f) {}
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
    let _0x4aa726 = this;
    MFC.alert.show("确定进行转盘材料收集吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x2f94e5) {
      _0x4aa726.stop();
    }, function (_0x4d2116) {
      _0x4aa726.prcessBody();
    }]);
  }
  async seniorbossui() {
    super.start();
    let _0x506f28 = this;
    MFC.alert.show("确定进行高级转盘材料收集吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x18b9a1) {
      _0x506f28.stop();
    }, function (_0x161c1a) {
      _0x506f28.fight2();
    }]);
  }
  async fight() {
    let _0x33c669 = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
    await this.send_message("cs_pve_activity_battle", {
      levelId: this.levelId,
      battleType: 3
    });
    await this.initBattle();
    let _0x11d007 = await this.useSkill(_0x33c669);
    while (_0x11d007.result.result === 0) {
      let _0x5a4f33 = _0x11d007.result.playerInfos.find(_0x106e33 => _0x106e33.uid === MFC.userInfo.uid);
      let _0x381dfd = _0x5a4f33 ? _0x5a4f33.nextRoundOP : _0x11d007.result.playerInfos[1].nextRoundOP;
      if (_0x381dfd !== 1) {
        addGameLog("首发被击败");
        break;
      }
      if (_0x11d007.result.roundNum > 5) {
        break;
      }
      addGameLog("未击败，继续攻击");
      _0x11d007 = await this.useSkill(_0x33c669);
    }
    await wait(300);
  }
  async fight2() {
    if (petConfig.SkillConfig.getDef(PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam1[0]).skills[0]).skillPower < 130) {
      MFC.alert.show("挑战阵容1首技能不是大招");
      this.stop();
    } else {
      let _0x105171 = [{
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
      for (let _0x267e1c of _0x105171) {
        while (true) {
          if (getSeerItemNum(_0x267e1c.itemId) > 1) {
            const _0x2f71de = {
              planetId: _0x267e1c.planetId
            };
            let _0x2c91e2 = await this.send_message("cs_get_mapBoss_data", _0x2f71de);
            if (_0x2c91e2.reward[_0x267e1c.levelId.toString()] == undefined) {
              addGameLog(_0x267e1c.logPrefix + "第1次奖励!");
            } else if (_0x2c91e2.reward[_0x267e1c.levelId.toString()] < _0x267e1c.times) {
              addGameLog(_0x267e1c.logPrefix + "第" + _0x2c91e2.reward[_0x267e1c.levelId.toString()] + "次奖励!");
            } else {
              addGameLog(_0x267e1c.logPrefix + "完成！");
              break;
            }
            this.levelId = _0x267e1c.levelId;
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
            let _0x178f94 = xls.timeTraveView.getItems().find(_0x31183c => _0x31183c.dropItem.includes(xls.mapMonster.getItem(this.levelId).mapId)).items.split(",");
            let _0x4578cc = "拥有:\n";
            _0x4578cc += xls.item.getItem(_0x178f94[_0x178f94.length - 1]).name + ":" + getSeerItemNum(_0x178f94[_0x178f94.length - 1]) + "\n";
            addGameLog(_0x4578cc);
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
      let _0x2dd7bd = PetManager.getInstance().getPetInfoByGetTime(UserManager.getInstance().userInfo.defaultTeam[0]).skills[0];
      let _0x5749a4 = petConfig.SkillConfig.getDef(_0x2dd7bd).elemType;
      if (parseInt(_0x5749a4) == 5 || parseInt(_0x5749a4) == 7 || parseInt(_0x5749a4) == 12) {
        MFC.alert.show("首发技能为光系、电系或地面,请切换不为光系、电系或地面系技能!");
        this.stop();
      } else {
        let _0x1c7b49 = [{
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
        for (let _0x2e7ed3 of _0x1c7b49) {
          let _0x22a380 = 0;
          for (let _0x3182b7 of _0x2e7ed3.levels) {
            while (true) {
              const _0x508134 = {
                planetId: _0x2e7ed3.planetId
              };
              let _0x2e6629 = await this.send_message("cs_get_mapBoss_data", _0x508134);
              let _0x96d7a6 = _0x2e7ed3.levels.indexOf(_0x3182b7) + 1;
              if (_0x2e6629.reward[_0x3182b7.toString()] == undefined) {
                addGameLog(_0x2e7ed3.logPrefix + _0x96d7a6 + "第1次奖励!");
              } else if (_0x2e6629.reward[_0x3182b7.toString()] < 20 && (_0x3182b7 == 9 || _0x3182b7 == 13 || _0x3182b7 == 33 || _0x3182b7 == 66)) {
                addGameLog(_0x2e7ed3.logPrefix + _0x96d7a6 + "第" + _0x2e6629.reward[_0x3182b7.toString()] + "次奖励!");
              } else if (_0x2e6629.reward[_0x3182b7.toString()] < 10 && (_0x3182b7 == 1 || _0x3182b7 == 2 || _0x3182b7 == 10 || _0x3182b7 == 12 || _0x3182b7 == 34 || _0x3182b7 == 179 || _0x3182b7 == 60)) {
                addGameLog(_0x2e7ed3.logPrefix + _0x96d7a6 + "第" + _0x2e6629.reward[_0x3182b7.toString()] + "次奖励!");
              } else if (_0x2e6629.reward[_0x3182b7.toString()] < 5 && (_0x3182b7 == 3 || _0x3182b7 == 35)) {
                addGameLog(_0x2e7ed3.logPrefix + _0x96d7a6 + "第" + _0x2e6629.reward[_0x3182b7.toString()] + "次奖励!");
              } else if (_0x2e6629.reward[_0x3182b7.toString()] < 5 && _0x3182b7 == 4) {
                addGameLog(_0x2e7ed3.logPrefix + (_0x96d7a6 - 1) + "第" + (_0x2e6629.reward[_0x3182b7.toString()] + _0x2e6629.reward[(_0x3182b7 - 1).toString()]) + "次奖励!");
              } else if (_0x2e6629.reward[_0x3182b7.toString()] < 3 && (_0x3182b7 == 11 || _0x3182b7 == 14)) {
                addGameLog(_0x2e7ed3.logPrefix + _0x96d7a6 + "第" + _0x2e6629.reward[_0x3182b7.toString()] + "次奖励!");
              } else {
                if (_0x3182b7 == 4) {
                  addGameLog(_0x2e7ed3.logPrefix + (_0x96d7a6 - 1) + "完成！");
                } else {
                  addGameLog(_0x2e7ed3.logPrefix + _0x96d7a6 + "完成！");
                }
                break;
              }
              this.levelId = _0x3182b7;
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
              let _0x96b0b8 = xls.timeTraveView.getItems().find(_0x472cc8 => _0x472cc8.dropItem.includes(xls.mapMonster.getItem(_0x3182b7).mapId)).items.split(",");
              let _0xaab7f4 = "拥有:\n";
              if (_0x22a380 < _0x2e7ed3.itemindex.length) {
                _0xaab7f4 += xls.item.getItem(_0x96b0b8[_0x22a380]).name + ":" + getSeerItemNum(_0x96b0b8[_0x22a380]) + "\n";
              } else {
                _0xaab7f4 += xls.item.getItem(_0x96b0b8[0]).name + ":" + getSeerItemNum(_0x96b0b8[0]) + "\n";
              }
              addGameLog(_0xaab7f4);
              await wait(200);
            }
            _0x22a380++;
          }
        }
        await this.seniorbossui();
        await wait(200);
      }
      await wait(200);
    } catch (_0x371c7f) {
      logger(_0x371c7f);
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
    let _0x25d5fc = this;
    var _0x4a8931 = getTouchs("_source", "release_selected_png");
    if (!_0x4a8931) {
      MFC.alert.show("请先前往精灵放生仓库\n勾选一只目标精灵!");
      _0x25d5fc.stop();
      return;
    }
    let _0x14f88f = _0x4a8931[0].parent.$parent._data;
    logger(_0x14f88f);
    this.nowPetData = _0x14f88f;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x30ff6c = SimpleAlertUi({});
      const _0x49887d = {
        text: "一键放生[二级密码没有不填写]",
        y: _0x30ff6c.height / 11
      };
      var _0x277aa5 = createLabel(_0x49887d);
      _0x277aa5.x = _0x30ff6c.width / 2 - _0x277aa5.width / 2;
      _0x30ff6c.addChild(_0x277aa5);
      const _0xc41531 = {
        text: "批量放生目标精灵: " + _0x25d5fc.nowPetData.nick,
        y: _0x277aa5.y + 30,
        textColor: 16776960
      };
      var _0x3081e4 = createLabel(_0xc41531);
      _0x3081e4.x = _0x30ff6c.width / 2 - _0x3081e4.width / 2;
      _0x30ff6c.addChild(_0x3081e4);
      const _0x50989a = {
        prompt: "天赋上限",
        x: 40,
        y: _0x30ff6c.height / 2.2,
        width: 100
      };
      var _0x199d61 = createEdit(_0x50989a);
      _0x30ff6c.addChild(_0x199d61);
      const _0x3253b1 = {
        prompt: "二级密码",
        x: _0x199d61.x + _0x199d61.width + 15,
        y: _0x30ff6c.height / 2.2,
        width: 100
      };
      var _0x5f4ebf = createEdit(_0x3253b1);
      _0x30ff6c.addChild(_0x5f4ebf);
      _0x30ff6c.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x25d5fc.stop();
      }, async function () {
        if (isNaN(parseInt(_0x199d61.text)) || parseInt(_0x199d61.text) > 31 || parseInt(_0x199d61.text) < 0) {
          MFC.bubbleAlert.showAlert("请输入有效精灵天赋");
          return true;
        }
        if (_0x5f4ebf.text != "") {
          if (isNaN(parseInt(_0x5f4ebf.text)) && parseInt(_0x5f4ebf.text).length == 6) {
            MFC.bubbleAlert.showAlert("请输入有效二级密码");
            return true;
          }
          _0x25d5fc.input2Pwd = parseInt(_0x5f4ebf.text) + "";
          logger("二级 密码" + _0x25d5fc.input2Pwd);
          let _0x1e0604 = await _0x25d5fc.send_message("cs_2nd_passwd", {
            option: 2,
            param: _0x25d5fc.input2Pwd
          });
          if (JSON.stringify(_0x1e0604).indexOf("二级密码解锁失败") != -1) {
            addGameLog("二级密码错误");
            MFC.bubbleAlert.showAlert("二级密码错误");
          }
        }
        _0x25d5fc.goalTalent = parseInt(_0x199d61.text);
        _0x25d5fc.prcessBody();
      }], null);
      _0x30ff6c.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0xdc2112 = PetManager.getInstance().getAllPets();
      let _0x30bf1d = [];
      for (let _0x59daf7 = 0; _0x59daf7 < _0xdc2112.length; _0x59daf7++) {
        if (this.goalTalent >= _0xdc2112[_0x59daf7].talent && _0xdc2112[_0x59daf7].petId == this.nowPetData.petId) {
          _0x30bf1d.push(_0xdc2112[_0x59daf7].getTime);
        }
      }
      let _0x566ed7 = _0x30bf1d;
      let _0x36b792 = splitArray(_0x566ed7, 100);
      for (let _0x5a48ad = 0; _0x5a48ad < _0x36b792.length; _0x5a48ad++) {
        addGameLog("开始放生!" + _0x36b792[_0x5a48ad].length + "只");
        const _0x2ad381 = {
          getTime: _0x36b792[_0x5a48ad]
        };
        var _0x32855d = await this.send_message("cs_free_pet", _0x2ad381);
        if (JSON.stringify(_0x32855d).indexOf("二级密码") != -1) {
          addGameLog("请设置二级密码");
          return;
        }
      }
      addGameLog("放生成功 " + this.nowPetData.nick + " " + _0x30bf1d.length + " 只");
      this.stop();
    } catch (_0xd2858c) {
      logger(_0xd2858c);
    }
  }
}
function splitArray(_0x372e08, _0x3d810d = 100) {
  let _0x576f3e = [];
  for (let _0x26cf54 = 0; _0x26cf54 < _0x372e08.length; _0x26cf54 += _0x3d810d) {
    _0x576f3e.push(_0x372e08.slice(_0x26cf54, _0x26cf54 + _0x3d810d));
  }
  return _0x576f3e;
}
class Expstory extends SuperTask {
  constructor() {
    super();
    this.nowName = "经验剧情";
  }
  start() {
    super.start();
    let _0x4ff438 = this;
    MFC.alert.show("确定进行一键经验剧情吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x355e16) {
      _0x4ff438.stop();
    }, function (_0x3f4c05) {
      _0x4ff438.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x14bede = xls.activityPetStory.getItems().map(_0x55364f => {
        if (_0x55364f.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x55364f.endTime) {
          var _0x3f3454 = _0x55364f.endTime;
          var _0x5a848b = deden.DateUtil.create(_0x3f3454);
          _0x5a848b.setHours(_0x5a848b.getHours() - 15);
          var _0xbe238 = deden.DateUtil.dateFormat(_0x5a848b, "yyyy_MM_dd hh:mm:ss");
          if (_0xbe238 >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss")) {
            if (_0x55364f.name[_0x55364f.name.length - 1] != "篇") {
              return _0x55364f;
            }
          }
        }
      }).sort().filter(_0x45bd63 => _0x45bd63 != undefined);
      for (let _0x242297 = 0; _0x242297 < _0x14bede.length; _0x242297++) {
        if (SpritePlotManager.getInstance().getPlotStateById(_0x14bede[_0x242297].id) == 3) {
          addGameLog(_0x14bede[_0x242297].name + _0x14bede[_0x242297].stepNumber + "已完成");
        } else if (SpritePlotManager.getInstance().getPlotStateById(_0x14bede[_0x242297].id) == 2) {
          const _0x4d6e0c = {
            id: _0x14bede[_0x242297].id,
            type: 2,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x4d6e0c);
        } else if (SpritePlotManager.getInstance().getPlotStateById(_0x14bede[_0x242297].id) == 0) {
          logger(_0x14bede[_0x242297].name + "未解锁");
        } else {
          logger(_0x14bede[_0x242297].id);
          const _0x3a2910 = {
            id: _0x14bede[_0x242297].id,
            type: 1,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x3a2910);
          const _0x458caf = {
            id: _0x14bede[_0x242297].id,
            type: 2,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x458caf);
          addGameLog(_0x14bede[_0x242297].name + _0x14bede[_0x242297].stepNumber + "已完成");
        }
      }
      this.stop();
    } catch (_0x2c2ef3) {}
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
      let _0x4f5678 = this;
      MFC.alert.show("确定关闭记牌器吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x54fab8) {
        _0x4f5678.stop();
      }, function (_0x320779) {
        if (pokers != null) {
          BC.removeEvent(pokers);
          MFC.rootLayer.removeChild(pokers);
          pokers = null;
        }
        addGameLog("巅峰记牌器已经关闭!");
        _0x4f5678.stop();
      }]);
    } else {
      let _0x3486df = this;
      MFC.alert.show("确定启动巅峰记牌器吗？\n!!!记牌器文字可以进行拖动!!!", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x3869f0) {
        _0x3486df.stop();
      }, function (_0x1849df) {
        _0x3486df.prcessBody();
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
      BC.addEvent(pokers, pokers, egret.TouchEvent.TOUCH_BEGIN, _0xc8c65f => {
        pokers.oldx = _0xc8c65f.stageX;
        pokers.oldy = _0xc8c65f.stageY;
      });
      BC.addEvent(pokers, pokers, egret.TouchEvent.TOUCH_MOVE, _0x388203 => {
        if (pokers.oldx) {
          pokers.x = _0x388203.stageX - pokers.oldx + pokers.x;
        }
        if (pokers.oldy) {
          pokers.y = _0x388203.stageY - pokers.oldy + pokers.y;
        }
        pokers.oldx = _0x388203.stageX;
        pokers.oldy = _0x388203.stageY;
        if (pokers.$children[0].textArr[0].text != "巅峰记牌器已开启") {
          pokers.definex = pokers.x;
          pokers.definey = pokers.y;
        }
      });
      this.stop();
    } catch (_0x24dea4) {}
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
      let _0x333b12 = this;
      MFC.alert.show("确定关闭融合助手吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x1e878e) {
        _0x333b12.stop();
      }, function (_0x513afd) {
        if (rongheStatus != null) {
          rongheStatus = null;
        }
        addGameLog("融合助手已经关闭!");
        _0x333b12.stop();
      }]);
    } else {
      let _0x4dcd58 = this;
      MFC.alert.show("确定启动融合助手吗？", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x3a8a7d) {
        _0x4dcd58.stop();
      }, function (_0xc743ef) {
        _0x4dcd58.prcessBody();
      }]);
    }
  }
  async prcessBody() {
    try {
      rongheStatus = 1;
      this.stop();
    } catch (_0x9d9052) {}
  }
}
class Coinstory extends SuperTask {
  constructor() {
    super();
    this.nowName = "豆子剧情";
  }
  start() {
    super.start();
    let _0x371020 = this;
    MFC.alert.show("确定进行一键赛尔豆剧情吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x54988c) {
      _0x371020.stop();
    }, function (_0x6ed284) {
      _0x371020.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x127fb2 = xls.activityPetStory.getItems().map(_0x3d953a => {
        if (_0x3d953a.startTime <= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") && deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss") <= _0x3d953a.endTime) {
          var _0x31c158 = _0x3d953a.endTime;
          var _0x2505db = deden.DateUtil.create(_0x31c158);
          _0x2505db.setHours(_0x2505db.getHours() - 15);
          var _0x5a9826 = deden.DateUtil.dateFormat(_0x2505db, "yyyy_MM_dd hh:mm:ss");
          if (_0x5a9826 >= deden.DateUtil.dateFormat(MFC.serverTimer.date, "yyyy_MM_dd hh:mm:ss")) {
            if (_0x3d953a.name[_0x3d953a.name.length - 1] == "篇") {
              return _0x3d953a;
            }
          }
        }
      }).sort().filter(_0x274346 => _0x274346 != undefined);
      for (let _0xcc277a = 0; _0xcc277a < _0x127fb2.length; _0xcc277a++) {
        if (SpritePlotManager.getInstance().getPlotStateById(_0x127fb2[_0xcc277a].id) == 3) {
          addGameLog(_0x127fb2[_0xcc277a].name + _0x127fb2[_0xcc277a].stepNumber + "已完成");
        } else if (SpritePlotManager.getInstance().getPlotStateById(_0x127fb2[_0xcc277a].id) == 2) {
          const _0x494fb0 = {
            id: _0x127fb2[_0xcc277a].id,
            type: 2,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x494fb0);
        } else if (SpritePlotManager.getInstance().getPlotStateById(_0x127fb2[_0xcc277a].id) == 0) {
          logger(_0x127fb2[_0xcc277a].name + "未解锁");
        } else {
          logger(_0x127fb2[_0xcc277a].id);
          const _0x295dfa = {
            id: _0x127fb2[_0xcc277a].id,
            type: 1,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x295dfa);
          const _0x580445 = {
            id: _0x127fb2[_0xcc277a].id,
            type: 2,
            getTimeList: []
          };
          await this.send_message("cs_new_pet_story", _0x580445);
          addGameLog(_0x127fb2[_0xcc277a].name + _0x127fb2[_0xcc277a].stepNumber + "已完成");
        }
      }
      this.stop();
    } catch (_0x51200c) {}
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
    let _0x94804b = this;
    if (!window.nowCheckBagPet) {
      MFC.alert.show("请先从精灵背包打开\n需要点学习力的精灵的详情页!");
      this.stop();
      return;
    }
    let _0x3b404e = 0;
    for (let _0x21b6fa = 0; _0x21b6fa < window.nowCheckBagPet.effortValues.length; _0x21b6fa++) {
      _0x3b404e = _0x3b404e + window.nowCheckBagPet.effortValues[_0x21b6fa];
    }
    if (_0x3b404e >= 510) {
      MFC.alert.show("当前精灵分配学习力已满,请重新选择精灵!");
      this.stop();
      return;
    }
    if (window.learnTimeId != null) {
      MFC.alert.show("学习力任务在后台执行\n是否结束学习力任务?", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x2be62e) {
        _0x94804b.stop();
      }, function (_0xdc88c0) {
        clearInterval(learnTimeId);
        window.learnTimeId = null;
        _0x94804b.learnUi();
      }]);
    } else {
      this.learnUi();
    }
  }
  learnUi() {
    addGameLog("开始新的分配方案!");
    let _0x4de523 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      addGameLog("分配学习力面板");
      var _0x25b611 = SimpleAlertUi({
        width: 550,
        height: 350
      });
      this.alertWin = _0x25b611;
      const _0x205c2a = {
        text: "分配の学习力",
        y: _0x25b611.height / 16
      };
      var _0x3d2625 = createLabel(_0x205c2a);
      _0x3d2625.x = _0x25b611.width / 2 - _0x3d2625.width / 2;
      _0x25b611.addChild(_0x3d2625);
      const _0x2eb40e = {
        text: "当前精灵:",
        x: 40,
        y: _0x3d2625.y + _0x3d2625.height + 15
      };
      var _0x4bee81 = createLabel(_0x2eb40e);
      _0x25b611.addChild(_0x4bee81);
      var _0x474137 = createLabel({
        text: PetConfig.getDef(window.nowCheckBagPet.petId).name,
        x: _0x4bee81.x + _0x4bee81.width + 15,
        y: _0x3d2625.y + _0x3d2625.height + 15,
        textColor: 16776960
      });
      _0x25b611.addChild(_0x474137);
      const _0x7b417e = {
        text: "天赋:",
        x: _0x474137.x + _0x474137.width + 15,
        y: _0x3d2625.y + _0x3d2625.height + 15
      };
      var _0x4da4bb = createLabel(_0x7b417e);
      _0x25b611.addChild(_0x4da4bb);
      const _0x53fa54 = {
        text: window.nowCheckBagPet.talent,
        x: _0x4da4bb.x + _0x4da4bb.width + 15,
        y: _0x3d2625.y + _0x3d2625.height + 15,
        textColor: 16776960
      };
      var _0x5070a0 = createLabel(_0x53fa54);
      _0x25b611.addChild(_0x5070a0);
      const _0x290e66 = {
        text: "特性:",
        x: _0x5070a0.x + _0x5070a0.width + 15,
        y: _0x3d2625.y + _0x3d2625.height + 15
      };
      var _0x173b2a = createLabel(_0x290e66);
      _0x25b611.addChild(_0x173b2a);
      const _0x2f49af = {
        text: window.nowCheckBagPet.talent,
        x: _0x173b2a.x + _0x173b2a.width + 15,
        y: _0x3d2625.y + _0x3d2625.height + 15,
        textColor: 16776960
      };
      var _0x4a359f = createLabel(_0x2f49af);
      if (window.nowCheckBagPet.featureId == 0) {
        _0x4a359f.text = "无";
      } else {
        _0x4a359f.text = xls.features.getItem(window.nowCheckBagPet.featureId).name;
      }
      _0x25b611.addChild(_0x4a359f);
      const _0x2757b0 = {
        text: "等级:",
        x: _0x4a359f.x + _0x4a359f.width + 15,
        y: _0x3d2625.y + _0x3d2625.height + 15
      };
      var _0x7aad9a = createLabel(_0x2757b0);
      _0x25b611.addChild(_0x7aad9a);
      const _0x380f95 = {
        text: window.nowCheckBagPet.level,
        x: _0x7aad9a.x + _0x7aad9a.width + 15,
        y: _0x3d2625.y + _0x3d2625.height + 15,
        textColor: 16776960
      };
      var _0x437891 = createLabel(_0x380f95);
      _0x25b611.addChild(_0x437891);
      let _0x54b663 = [{
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
      let _0x1d4357 = 40;
      let _0x489aa5 = _0x474137.y + _0x474137.height + 25;
      let _0x15638e = [];
      for (let _0x116edb = 0; _0x116edb < _0x54b663.length; _0x116edb++) {
        const _0x28c015 = {
          text: _0x54b663[_0x116edb].label.text,
          x: _0x1d4357,
          y: _0x489aa5
        };
        let _0x1f9b51 = createLabel(_0x28c015);
        const _0x1fc4cb = {
          x: _0x1f9b51.x + _0x1f9b51.width + 15,
          y: _0x489aa5 - 5,
          prompt: "请输入0-255",
          storageKey: _0x54b663[_0x116edb].input.storageKey
        };
        let _0x15a084 = createEdit(_0x1fc4cb);
        _0x15638e.push(_0x15a084);
        _0x25b611.addChild(_0x1f9b51);
        _0x25b611.addChild(_0x15a084);
        _0x1d4357 = _0x1d4357 + _0x1f9b51.width + 15 + _0x15a084.width + 15;
        if ((_0x116edb + 1) % 3 == 0) {
          _0x489aa5 = _0x489aa5 + _0x15a084.height + 10;
          _0x1d4357 = 40;
        }
      }
      const _0x49d46c = {
        text: "注意:",
        x: 30,
        y: _0x489aa5 + 20,
        textColor: 16776960
      };
      let _0x86c4d2 = createLabel(_0x49d46c);
      _0x25b611.addChild(_0x86c4d2);
      const _0x5e1d04 = {
        text: "执行过后后台会每间隔1分钟,进行加点对应精灵\n必须都要输入",
        x: 40,
        y: _0x86c4d2.y + 10 + _0x86c4d2.height,
        textColor: 16777215
      };
      let _0x107ff0 = createLabel(_0x5e1d04);
      _0x25b611.addChild(_0x107ff0);
      _0x25b611.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x4de523.stop();
      }, function () {
        _0x4de523.nowAddLearns = [];
        _0x4de523.nowAddLearns.push(_0x15638e[_0x15638e.length - 1].text);
        for (let _0x3e313c = 0; _0x3e313c < _0x15638e.length - 1; _0x3e313c++) {
          _0x4de523.nowAddLearns.push(_0x15638e[_0x3e313c].text);
        }
        logger("学习力分配情况:", _0x4de523.nowAddLearns);
        let _0x10d030 = 0;
        for (var _0x281ab1 = 0; _0x281ab1 < _0x4de523.nowAddLearns.length; _0x281ab1++) {
          let _0x11ef20 = _0x4de523.nowAddLearns[_0x281ab1];
          if (window.nowCheckBagPet.effortValues[_0x281ab1] > _0x11ef20) {
            if (_0x281ab1 == 0) {
              MFC.bubbleAlert.showAlert("当前精灵体力学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x281ab1 == 1) {
              MFC.bubbleAlert.showAlert("当前精灵攻击学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x281ab1 == 2) {
              MFC.bubbleAlert.showAlert("当前精灵防御学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x281ab1 == 3) {
              MFC.bubbleAlert.showAlert("当前精灵特攻学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x281ab1 == 4) {
              MFC.bubbleAlert.showAlert("当前精灵特防学习力比设置的大,请重新设置");
              return true;
            }
            if (_0x281ab1 == 5) {
              MFC.bubbleAlert.showAlert("当前精灵速度学习力比设置的大,请重新设置");
              return true;
            }
          }
          if (isNaN(parseInt(_0x11ef20)) || parseInt(_0x11ef20) > 255 || parseInt(_0x11ef20) < 0) {
            MFC.bubbleAlert.showAlert("请输入有效学习力,输入框都要输入,可以输入0");
            return true;
          }
          _0x10d030 = _0x10d030 + parseInt(_0x11ef20);
        }
        logger("学习力总:", _0x10d030);
        if (_0x10d030 > 510) {
          MFC.bubbleAlert.showAlert("总学习力大于510,请重新设置学习力分配!");
          return true;
        }
        window.nowAddLearns = _0x4de523.nowAddLearns;
        _0x15638e.forEach(_0x8aaee => localStorage.setItem(_0x8aaee.storageKey, _0x8aaee.text));
        _0x4de523.prcessBody();
      }], null);
      _0x25b611.showAlert();
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
          let _0x20f22c = new window.cs_get_effort_value();
          Object.assign(_0x20f22c, {});
          MFC.online.send(_0x20f22c);
          while (1) {
            if (window.addPet.haveLearns != null) {
              break;
            } else {
              await wait(500);
            }
          }
          let _0x245478 = PetManager.getInstance().getPetInfoByGetTime(window.addPet.getTime).effortValues;
          let _0x523334 = 0;
          for (let _0x3a76cb = 0; _0x3a76cb < _0x245478.length; _0x3a76cb++) {
            if (_0x245478[_0x3a76cb] < window.nowAddLearns[_0x3a76cb]) {
              let _0xe6eb0e;
              let _0x9868fe = "";
              if (_0x3a76cb == 0) {
                _0xe6eb0e = 6;
                _0x9868fe = "体力";
              }
              if (_0x3a76cb == 1) {
                _0xe6eb0e = 1;
                _0x9868fe = "攻击";
              }
              if (_0x3a76cb == 2) {
                _0xe6eb0e = 2;
                _0x9868fe = "防御";
              }
              if (_0x3a76cb == 3) {
                _0xe6eb0e = 3;
                _0x9868fe = "特攻";
              }
              if (_0x3a76cb == 4) {
                _0xe6eb0e = 4;
                _0x9868fe = "特防";
              }
              if (_0x3a76cb == 5) {
                _0xe6eb0e = 5;
                _0x9868fe = "速度";
              }
              if (window.nowAddLearns[_0x3a76cb] - _0x245478[_0x3a76cb] >= window.addPet.haveLearns) {
                addGameLog("精灵: " + PetConfig.getDef(window.addPet.petId).name + " 加点" + _0x9868fe + ": " + window.addPet.haveLearns);
                let _0x53c231 = new window.cs_add_effort_value();
                const _0x33cdc1 = {
                  getTime: window.addPet.getTime,
                  effortValue: [{
                    idx: _0x3a76cb,
                    value: window.addPet.haveLearns
                  }]
                };
                Object.assign(_0x53c231, _0x33cdc1);
                MFC.online.send(_0x53c231);
                _0x523334 = 1;
                break;
              } else if (window.nowAddLearns[_0x3a76cb] - _0x245478[_0x3a76cb] > 0) {
                addGameLog("精灵: " + PetConfig.getDef(window.addPet.petId).name + " 加点" + _0x9868fe + ": " + (window.nowAddLearns[_0x3a76cb] - _0x245478[_0x3a76cb]));
                _0x523334 = 1;
                let _0x3b9964 = new window.cs_add_effort_value();
                const _0x5028ab = {
                  getTime: window.addPet.getTime,
                  effortValue: [{
                    idx: _0x3a76cb,
                    value: window.nowAddLearns[_0x3a76cb] - _0x245478[_0x3a76cb]
                  }]
                };
                Object.assign(_0x3b9964, _0x5028ab);
                MFC.online.send(_0x3b9964);
                break;
              }
            }
          }
          if (_0x523334 == 0) {
            addGameLog("学习力任务已经分配完成!");
            clearInterval(learnTimeId);
            window.learnTimeId = null;
          }
        } catch (_0x2b9c64) {
          logger(_0x2b9c64);
        }
      }, 20000);
    } catch (_0x2956dd) {}
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
    let _0x184172 = this;
    MFC.alert.show(`确定进行赛尔豆大作战吗
自动调出背包:
哈肯萨/赫尔卡长老/水次/瞬杀蒙多
[都没有会尝试进行租借]`, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x15f8a7) {
      _0x184172.stop();
    }, function (_0x4e1b8f) {
      _0x184172.prcessBody();
    }]);
  }
  async prcessBody() {
    try {
      let _0x10fbad = await this.send_message("cs_get_campaign_pet_fight_infos", {});
      let _0x2718e3 = _0x10fbad.times;
      let _0x13f3cd = _0x10fbad.bossType;
      if (_0x2718e3 == 0) {
        addGameLog("塞尔豆大作战无对战次数");
        this.stop();
        return;
      } else {
        let _0x4d77d3 = await this.getCoinBossId(_0x13f3cd);
        let _0x931278 = await this.coinBattle();
        if (!_0x931278) {
          this.stop();
          return;
        }
        let _0x2e4a4 = _0x931278.skillsName;
        while (1) {
          let _0x5e48bb = await this.send_message("cs_get_campaign_pet_fight_infos", {});
          let _0xdcbdfb = _0x5e48bb.times;
          if (_0xdcbdfb == 0) {
            addGameLog("豆子作战无对战次数");
            break;
          }
          while (1) {
            let _0x328194 = await this.actionCoin(_0x931278.pet, _0x4d77d3);
            if (!_0x328194) {
              this.stop();
              return;
            }
            await this.initBattle();
            let _0xfe5142 = await this.useSkill(this.skillData[_0x2e4a4[0]]);
            while (_0xfe5142.result.result == 0) {
              _0xfe5142 = await this.useSkill(this.skillData[_0x2e4a4[1]]);
              let _0x16d3ad = _0xfe5142.result.playerInfos;
              let _0xc6539d = "";
              for (let _0x21cc6b = 0; _0x21cc6b < _0x16d3ad.length; _0x21cc6b++) {
                if (_0x16d3ad[_0x21cc6b].uid == UserManager.getInstance().userInfo.uid) {
                  _0xc6539d = _0x16d3ad[_0x21cc6b].petInfos[0];
                  break;
                }
              }
              let _0x179f60 = _0xc6539d.useSkills.find(_0x4528f0 => _0x4528f0.id === this.skillData[_0x2e4a4[1]]).crtPP;
              if (_0x179f60 <= 1) {
                addGameLog("大招技能次数不足,退出战斗");
                await this.send_message("cs_quit_battle", {});
                break;
              }
              if (_0xc6539d.crtHp <= 40) {
                addGameLog("血量不足,退出战斗");
                await this.send_message("cs_quit_battle", {});
                break;
              }
              if (_0xfe5142.result.roundNum >= 4) {
                addGameLog("回合数过多,重进!");
                await this.send_message("cs_quit_battle", {});
                break;
              }
            }
            if (_0xfe5142.result.result === 1) {
              addGameLog("顺利击杀赛尔豆boss");
            } else {
              addGameLog("未击败豆子Boss");
            }
            if (_0xfe5142.result.result != 1) {
              addGameLog("继续打豆子作战");
            } else {
              break;
            }
          }
          await wait(200);
        }
      }
      this.stop();
    } catch (_0x313a86) {
      logger(_0x313a86);
    }
  }
  async getCoinBossId(_0x381270) {
    try {
      xls.petTest.load(() => {});
    } catch (_0x356812) {}
    while (1) {
      let _0x686747 = xls.petTest.getItems();
      if (_0x686747.length >= 35) {
        break;
      } else {
        await wait(400);
      }
    }
    let _0x3bb7c3 = xls.petTest.getItems();
    for (let _0x20f960 = 0; _0x20f960 < _0x3bb7c3.length; _0x20f960++) {
      let _0x465bc0 = _0x3bb7c3[_0x20f960];
      if (_0x465bc0.difficulty == 5 && _0x465bc0.bossType == _0x381270) {
        logger(_0x465bc0);
        return _0x465bc0.id;
      }
    }
  }
  async actionCoin(_0x55b230, _0xe438e5) {
    logger(_0x55b230);
    if (_0x55b230.userId) {
      addGameLog("进行租借对战");
      let _0x2ed6bb = await this.send_message("cs_start_campaign_pet_fight", {
        levelId: _0xe438e5,
        hirePetList: [_0x55b230.userId + "_" + _0x55b230.type + "_" + _0x55b230.pos, PetManager.getInstance().getAllPets()[0].getTime],
        attachBattleSkill: [{
          petId: _0x55b230.petId,
          level: _0x55b230.level,
          skillList: _0x55b230.skills,
          getTime: _0x55b230.getTime,
          otherUid: _0x55b230.userId,
          type: _0x55b230.type
        }]
      });
      if (JSON.stringify(_0x2ed6bb).indexOf("不是开放时间") != -1) {
        addGameLog("切换回合模式");
        _0x2ed6bb = await this.send_message("cs_start_campaign_pet_test", {
          levelId: _0xe438e5,
          hirePetList: [_0x55b230.userId + "_" + _0x55b230.type + "_" + _0x55b230.pos, PetManager.getInstance().getAllPets()[0].getTime],
          attachBattleSkill: [{
            petId: _0x55b230.petId,
            level: _0x55b230.level,
            skillList: _0x55b230.skills,
            getTime: _0x55b230.getTime,
            otherUid: _0x55b230.userId,
            type: _0x55b230.type
          }]
        });
      }
      if (JSON.stringify(_0x2ed6bb).indexOf("没有解锁") != -1) {
        addGameLog("难度没解锁,运行停止");
        return false;
      }
      if (JSON.stringify(_0x2ed6bb).indexOf("挑战次数已用完") != -1) {
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
        getTimeList: [_0x55b230.getTime, PetManager.getInstance().getAllPets()[0].getTime]
      });
      let _0x1e12ef = await this.send_message("cs_start_campaign_pet_fight", {
        levelId: _0xe438e5,
        hirePetList: [_0x55b230.getTime, PetManager.getInstance().getAllPets()[0].getTime],
        attachBattleSkill: []
      });
      await wait(300);
      if (JSON.stringify(_0x1e12ef).indexOf("不是开放时间") != -1) {
        addGameLog("切换回合模式");
        _0x1e12ef = await this.send_message("cs_start_campaign_pet_test", {
          levelId: _0xe438e5,
          hirePetList: [_0x55b230.getTime, PetManager.getInstance().getAllPets()[0].getTime],
          attachBattleSkill: []
        });
      }
      if (JSON.stringify(_0x1e12ef).indexOf("没有解锁") != -1) {
        addGameLog("难度没解锁,运行停止");
        return false;
      }
      if (JSON.stringify(_0x1e12ef).indexOf("挑战次数已用完") != -1) {
        addGameLog("挑战次数已用完,运行停止");
        return false;
      }
    }
    return true;
  }
  async coinBattle() {
    let _0xf8b141 = await this.dispatchSelfPet("哈肯萨", ["堕龙之力", "幕夜龙王击"]);
    if (_0xf8b141) {
      return {
        pet: _0xf8b141,
        skillsName: ["堕龙之力", "幕夜龙王击"]
      };
    }
    let _0x564926 = await this.dispatchSelfPet("赫尔卡长老", ["灭世歼星炮"]);
    if (_0x564926) {
      return {
        pet: _0x564926,
        skillsName: ["灭世歼星炮", "灭世歼星炮"]
      };
    }
    let _0x164c75 = await this.dispatchSelfPet("凯西恩", ["奥义断水击"]);
    if (_0x164c75) {
      return {
        pet: _0x164c75,
        skillsName: ["奥义断水击", "奥义断水击"]
      };
    }
    let _0x4b8589 = await this.dispatchSelfPet("蒙多", ["光闪击"], [5, 6, 7, 8]);
    if (_0x4b8589) {
      return {
        pet: _0x4b8589,
        skillsName: ["光闪击", "光闪击"]
      };
    }
    let _0xb9f0eb = await this.dispatchSelfPet("蒙多", ["光闪击Plus"], [5, 6, 7, 8]);
    if (_0xb9f0eb) {
      return {
        pet: _0xb9f0eb,
        skillsName: ["光闪击Plus", "光闪击Plus"]
      };
    }
    let _0x377667 = await this.dispatchHirePet("哈肯萨", ["堕龙之力", "幕夜龙王击"]);
    if (_0x377667) {
      return {
        pet: _0x377667,
        skillsName: ["堕龙之力", "幕夜龙王击"]
      };
    }
    let _0x484d08 = await this.dispatchHirePet("赫尔卡长老", ["灭世歼星炮"]);
    if (_0x484d08) {
      return {
        pet: _0x484d08,
        skillsName: ["灭世歼星炮", "灭世歼星炮"]
      };
    }
    let _0x25606f = await this.dispatchHirePet("凯西恩", ["奥义断水击"]);
    if (_0x25606f) {
      return {
        pet: _0x25606f,
        skillsName: ["奥义断水击", "奥义断水击"]
      };
    }
    let _0x23bacd = await this.dispatchHirePet("蒙多", ["光闪击"], [5, 6, 7, 8]);
    if (_0x23bacd) {
      return {
        pet: _0x23bacd,
        skillsName: ["光闪击", "光闪击"]
      };
    }
    let _0x4fb893 = await this.dispatchHirePet("蒙多", ["光闪击Plus"], [5, 6, 7, 8]);
    if (_0x4fb893) {
      return {
        pet: _0x4fb893,
        skillsName: ["光闪击Plus", "光闪击Plus"]
      };
    }
    addGameLog("没有符合条件的精灵进行豆子作战");
    return false;
  }
  async dispatchHirePet(_0x185303, _0x7c6e65, _0x5f8b1e) {
    let _0x36d7c9 = [];
    for (let _0x426225 = 0; _0x426225 < _0x7c6e65.length; _0x426225++) {
      _0x36d7c9.push(this.skillData[_0x7c6e65[_0x426225]]);
    }
    let _0x274b7b = await this.fromHireGetPetbyskillIdArr(_0x36d7c9, _0x5f8b1e);
    if (!_0x274b7b) {
      addGameLog("租借列表没有: " + _0x185303);
      return false;
    }
    addGameLog("找到租借精灵: " + _0x185303);
    return _0x274b7b;
  }
  async dispatchSelfPet(_0x98749e, _0xd32acf, _0x1c2077) {
    let _0x550ea8 = [];
    for (let _0x42591d = 0; _0x42591d < _0xd32acf.length; _0x42591d++) {
      _0x550ea8.push(this.skillData[_0xd32acf[_0x42591d]]);
    }
    const _0x4d1db0 = {
      skills: _0x550ea8,
      features: _0x1c2077
    };
    let _0x5d9204 = await getGoalPets([_0x4d1db0]);
    if (_0x5d9204) {
      addGameLog("精灵背包中携有" + _0x98749e + "+" + _0xd32acf.join("+"));
      return _0x5d9204;
    } else {
      addGameLog("背包 没有" + _0x98749e + "+" + _0xd32acf.join("+"));
      return false;
    }
  }
  async fromHireGetPetbyskillIdArr(_0x530a42, _0x1aa5cd) {
    addGameLog("检测租借列表中..稍等");
    let _0x2aefa9 = await this.send_message("cs_new_get_hire_pet_list", {
      friendPageNo: 1,
      friendPageSize: 1000,
      teamPageNo: 1,
      teamPageSize: 1000
    });
    let _0x7d5d6d = _0x2aefa9.friendHireList;
    for (let _0x5059b3 = 0; _0x5059b3 < _0x7d5d6d.length; _0x5059b3++) {
      let _0x1e768c = _0x7d5d6d[_0x5059b3];
      const _0x47c747 = {
        type: _0x1e768c.type,
        pos: _0x1e768c.pos,
        targetUid: _0x1e768c.userId
      };
      let _0x335a71 = await this.send_message("cs_new_get_hire_pet_info", _0x47c747);
      let _0x1de95e = _0x335a71.pet.skills;
      let _0x255b19 = false;
      for (let _0x1a6b9a = 0; _0x1a6b9a < _0x530a42.length; _0x1a6b9a++) {
        if (_0x1aa5cd) {
          if (_0x1aa5cd.indexOf(_0x335a71.pet.featureId) != -1) {
            if (_0x1de95e.indexOf(_0x530a42[_0x1a6b9a]) != -1) {
              _0x255b19 = true;
            } else {
              _0x255b19 = false;
            }
          }
        } else if (_0x1de95e.indexOf(_0x530a42[_0x1a6b9a]) != -1) {
          _0x255b19 = true;
        } else {
          _0x255b19 = false;
        }
      }
      if (_0x255b19) {
        _0x1e768c.skills = _0x335a71.pet.skills;
        return _0x1e768c;
      }
    }
    let _0x4497a9 = _0x2aefa9.teamHireList;
    for (let _0x52134e = 0; _0x52134e < _0x4497a9.length; _0x52134e++) {
      let _0xdf23fc = _0x4497a9[_0x52134e];
      const _0xc5c7ca = {
        type: _0xdf23fc.type,
        pos: _0xdf23fc.pos,
        targetUid: _0xdf23fc.userId
      };
      let _0x3e432a = await this.send_message("cs_new_get_hire_pet_info", _0xc5c7ca);
      let _0x408f13 = _0x3e432a.pet.skills;
      let _0x45734c = false;
      for (let _0x4f9720 = 0; _0x4f9720 < _0x530a42.length; _0x4f9720++) {
        if (_0x408f13.indexOf(_0x530a42[_0x4f9720]) != -1) {
          _0x45734c = true;
        } else {
          _0x45734c = false;
        }
      }
      if (_0x45734c) {
        _0xdf23fc.skills = _0x3e432a.pet.skills;
        return _0xdf23fc;
      }
    }
    return false;
  }
  async checkSkillPetTeam(_0x29890f, _0x4d28e9) {
    let _0x413525 = PetManager.getInstance().getAllPets();
    for (let _0x2610f7 = 0; _0x2610f7 < _0x413525.length; _0x2610f7++) {
      let _0x67cacd = _0x413525[_0x2610f7];
      let _0x36daf = _0x67cacd.skills;
      let _0xee34d7 = false;
      for (let _0x22bc77 = 0; _0x22bc77 < _0x29890f.length; _0x22bc77++) {
        if (_0x4d28e9) {
          if (_0x4d28e9.indexOf(_0x67cacd.featureId) != -1) {
            if (_0x36daf.indexOf(_0x29890f[_0x22bc77]) != -1) {
              _0xee34d7 = true;
            } else {
              _0xee34d7 = false;
            }
          }
        } else if (_0x36daf.indexOf(_0x29890f[_0x22bc77]) != -1) {
          _0xee34d7 = true;
        } else {
          _0xee34d7 = false;
        }
      }
      if (_0xee34d7) {
        return _0x67cacd;
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
    let _0x2bb825 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x4a5927 = SimpleAlertUi({
        height: 250
      });
      _0x2bb825.alertWin = _0x4a5927;
      const _0x165931 = {
        text: "确定进行[巅峰]模式挂机吗?",
        y: _0x4a5927.height / 11
      };
      var _0x19df74 = createLabel(_0x165931);
      _0x19df74.x = _0x4a5927.width / 2 - _0x19df74.width / 2;
      _0x4a5927.addChild(_0x19df74);
      const _0x21d3b3 = {
        text: "[初次安装也许会卡,重启即可]",
        y: _0x19df74.y + 30,
        textColor: 16776960
      };
      var _0x517768 = createLabel(_0x21d3b3);
      _0x517768.x = _0x4a5927.width / 2 - _0x517768.width / 2;
      _0x4a5927.addChild(_0x517768);
      const _0x5679bd = {
        text: "十回合自动投降",
        x: 45,
        y: _0x517768.y + 32
      };
      let _0x575c0c = createLabel(_0x5679bd);
      const _0x39e548 = {
        x: 76,
        y: _0x575c0c.y + _0x575c0c.height + 10,
        selected: false,
        storageKey: "jingji"
      };
      let _0x187ff9 = createRadio(_0x39e548);
      _0x4a5927.addChild(_0x187ff9);
      const _0x5a1fff = {
        text: "竞技",
        x: _0x187ff9.width + _0x187ff9.x + 10,
        y: _0x575c0c.y + _0x575c0c.height + 10
      };
      var _0x5ed9d9 = createLabel(_0x5a1fff);
      _0x4a5927.addChild(_0x5ed9d9);
      const _0x1f14cb = {
        x: _0x5ed9d9.width + _0x5ed9d9.x + 20,
        y: _0x575c0c.y + _0x575c0c.height + 10,
        selected: true,
        storageKey: "kuangye"
      };
      let _0x324a4a = createRadio(_0x1f14cb);
      _0x4a5927.addChild(_0x324a4a);
      const _0x58f05a = {
        text: "狂野",
        x: _0x324a4a.width + _0x324a4a.x + 10,
        y: _0x575c0c.y + _0x575c0c.height + 10
      };
      var _0x4e2452 = createLabel(_0x58f05a);
      _0x4a5927.addChild(_0x4e2452);
      const _0x38d43e = {
        x: _0x575c0c.x + _0x575c0c.width + 15,
        y: _0x517768.y + 30,
        selected: true
      };
      let _0x30f922 = createToggle(_0x38d43e);
      _0x4a5927.addChild(_0x575c0c);
      _0x4a5927.addChild(_0x30f922);
      const _0xa4e3ed = {
        text: "对战次数",
        x: 60,
        y: _0x19df74.y + _0x19df74.height + 110
      };
      var _0x10999b = createLabel(_0xa4e3ed);
      _0x4a5927.addChild(_0x10999b);
      const _0x1cd8be = {
        prompt: "对战次数",
        width: 100,
        x: 30 + _0x10999b.width + _0x10999b.x,
        y: _0x19df74.y + _0x19df74.height + 105,
        storageKey: "inputDf"
      };
      var _0x557ea6 = createEdit(_0x1cd8be);
      _0x4a5927.addChild(_0x557ea6);
      _0x4a5927.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x2bb825.stop();
      }, function () {
        if (!_0x30f922.selected) {
          _0x2bb825.giveUp = 0;
        }
        if (_0x187ff9.selected) {
          _0x2bb825.dianfengStyle = "jingji";
          localStorage.setItem("jingji", true);
        }
        if (_0x324a4a.selected) {
          _0x2bb825.dianfengStyle = "kuangye";
          localStorage.setItem("kuangye", true);
        }
        if (isNaN(parseInt(_0x557ea6.text))) {
          MFC.bubbleAlert.showAlert("请输入有效对战次数");
          return true;
        }
        localStorage.setItem("inputDf", parseInt(_0x557ea6.text));
        _0x2bb825.inputDf = parseInt(_0x557ea6.text);
        _0x2bb825.prcessBody();
      }], null);
      _0x4a5927.showAlert();
    });
  }
  getFirstSkillId(_0x29958d) {
    let _0x4e5e29 = _0x29958d.useSkills;
    for (var _0x5725f5 = 0; _0x5725f5 < _0x4e5e29.length; _0x5725f5++) {
      let _0x3a454b = petConfig.SkillConfig.getDef(_0x4e5e29[_0x5725f5].id);
      if (_0x4e5e29[_0x5725f5].crtPP > 0 && _0x3a454b.atkType != 5 && _0x3a454b.atkType != 6) {
        return _0x4e5e29[_0x5725f5].id;
      }
    }
    return 0;
  }
  getPetIndex(_0x513633, _0x394c6f) {
    for (var _0x5b9517 = 0; _0x5b9517 < _0x513633.length; _0x5b9517++) {
      var _0x48dbbf = _0x513633[_0x5b9517];
      if (_0x48dbbf.crtHp > 0 && _0x5b9517 != _0x394c6f) {
        return _0x5b9517;
      }
    }
    return 0;
  }
  async changePet(_0x583266, _0xb556f2) {
    let _0x15b884 = this.getPetIndex(_0x583266, _0xb556f2);
    await this.send_message("cs_online_load_battle_result", {
      groupId: ""
    });
    addGameLog("切换精灵index " + _0x15b884);
    const _0x48e16a = {
      petIndex: _0x15b884
    };
    const _0x35df5d = {
      opType: 2,
      data: _0x48e16a,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x35df5d);
    let _0x1c7f59 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x5c176f = JSON.parse(_0x1c7f59.gameBody[_0x1c7f59.gameBody.length - 1].raw);
    _0x1c7f59.gameBody.splice(0, _0x1c7f59.gameBody.length);
    return _0x5c176f;
  }
  async V_GetLevel(_0xfa6e25) {
    let _0x50d240 = xls.pvpLevel.getItems();
    var _0x1d088b = 0;
    var _0x4221b4 = 0;
    var _0xe6583b = xls.pvpLevel.getItem(_0x50d240.length).newReqCredit;
    switch (_0xfa6e25) {
      case 1:
        _0x1d088b = MFC.userInfo.pvpPoint;
        _0x4221b4 = false && _0x1d088b >= _0xe6583b ? 1 : 0;
        break;
      case 2:
        _0x1d088b = MFC.userInfo.pvpPointWild;
        _0x4221b4 = false && _0x1d088b >= _0xe6583b ? 1 : 0;
    }
    if (_0x4221b4 == 1) {
      return _0x50d240.length;
    }
    for (var _0x188757 = 1, _0x58387a = _0x50d240, _0x123b8f = 0; _0x123b8f < _0x58387a.length - 1; _0x123b8f++) {
      if (!(_0x1d088b >= _0x58387a[_0x123b8f].newReqCredit)) {
        return _0x188757 || 1;
      }
      _0x188757 = _0x58387a[_0x123b8f].id;
    }
    return _0x188757 || 1;
  }
  getHaveGet(_0x4c8be9) {
    let _0x13e9ee = MFC.attr.getAttr(_0x4c8be9 >= 32 ? 5226122 : 7924);
    let _0x56478d = _0x4c8be9 >= 32 ? _0x4c8be9 - 32 + 1 : _0x4c8be9;
    return BitUtils.getBit(_0x13e9ee, _0x56478d);
  }
  async getRankAward() {
    let _0x131516 = await this.V_GetLevel(1);
    let _0x494c4f = await this.V_GetLevel(2);
    let _0x576193 = Math.max(_0x131516, _0x494c4f);
    let _0x1dfc2c = xls.pvpLevel.getItems();
    for (let _0x21cfe1 = 0; _0x21cfe1 < _0x1dfc2c.length; _0x21cfe1++) {
      if (_0x576193 >= _0x1dfc2c[_0x21cfe1].id && _0x1dfc2c[_0x21cfe1].id != 1) {
        let _0x170b42 = this.getHaveGet(_0x1dfc2c[_0x21cfe1].id);
        if (!_0x170b42) {
          addGameLog("满足段位: " + _0x1dfc2c[_0x21cfe1].name + ",领取奖励!");
          const _0x553f57 = {
            id: _0x1dfc2c[_0x21cfe1].id
          };
          await this.send_message("cs_ladder_rank_get_award", _0x553f57);
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
      let _0x1001e0 = 0;
      let _0x471f48 = 0;
      let _0x333834 = new Date().getTime() / 1000;
      this.nowUi = createLabel({
        text: "巅峰  回合数:0|耗时:0分0秒|总局数:" + _0x471f48 + "|胜场:" + _0x1001e0 + "|胜率:" + 0 .toFixed(2) + "% ",
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
          var _0x5ea3b5 = await this.send_message("cs_pvp_match_rival", {
            pvpType: 5
          });
          if (JSON.stringify(_0x5ea3b5).includes("匹配类型与巅峰段位不匹配")) {
            var _0x5ea3b5 = await this.send_message("cs_pvp_match_rival", {
              pvpType: 2
            });
          }
        }
        if (this.dianfengStyle.includes("jingji")) {
          var _0x5ea3b5 = await this.send_message("cs_pvp_match_rival", {
            pvpType: 2001
          });
          if (JSON.stringify(_0x5ea3b5).includes("匹配类型与巅峰段位不匹配")) {
            var _0x5ea3b5 = await this.send_message("cs_pvp_match_rival", {
              pvpType: 2000
            });
          }
        }
        if (JSON.stringify(_0x5ea3b5).includes("内部错误")) {
          MFC.show.alert("早退行为被限制!~,请稍后重试");
          this.stop();
          return;
        }
        let _0x1c4e94 = await this.waitEvent("sc_pvp_notify_match_success");
        var _0x5ea3b5 = JSON.parse(_0x1c4e94.gameBody[_0x1c4e94.gameBody.length - 1].raw);
        _0x1c4e94.gameBody.splice(0, _0x1c4e94.gameBody.length);
        _0x333834 = new Date().getTime() / 1000;
        let _0x3a5c8e = _0x5ea3b5.teamA.players[0].userId == _0x5ea3b5.uid__ ? _0x5ea3b5.teamB.players[0].rickNick : _0x5ea3b5.teamA.players[0].rickNick;
        addGameLog("匹配对手:" + _0x3a5c8e + "  对战中...");
        let _0x1f9244 = await this.initBattle();
        while (!_0x1f9244.result.result) {
          if (this.giveUp && _0x1f9244.result.roundNum >= 9 || _0x1f9244.result.roundNum >= 30) {
            addGameLog("十回合投降/30回合 发起投降");
            await this.send_message("cs_online_player_surrender", {});
            let _0x36cc23 = await this.waitEvent("sc_battle_notify_round_result");
            _0x36cc23.gameBody.splice(0, _0x36cc23.gameBody.length);
            break;
          }
          let _0x3ed493 = _0x1f9244.result.playerInfos.find(_0x3b0d5e => _0x3b0d5e.uid == _0x1f9244.uid__);
          let _0x64b10b = _0x3ed493.crtPetIndex;
          let _0x5e00cd = _0x1f9244.result.playerInfos.find(_0x1d9c2e => _0x1d9c2e.uid == _0x1f9244.uid__).nextRoundOP;
          if (_0x5e00cd == 3) {
            addGameLog("被击败,更换精灵!");
            _0x1f9244 = await this.changePet(_0x3ed493.petInfos, _0x64b10b);
          } else {
            let _0x5147ea = _0x3ed493.petInfos[_0x64b10b];
            let _0x1e31c8 = this.getFirstSkillId(_0x5147ea);
            await wait(1500);
            _0x1f9244 = await this.useSkill(_0x1e31c8);
          }
        }
        _0x471f48++;
        if (_0x1f9244.result.result == 1) {
          addGameLog("战斗胜利!");
          _0x1001e0++;
        } else {
          addGameLog("战斗失败!");
        }
        let _0x4cae7c = new Date().getTime() / 1000;
        var _0x3cc362 = Math.floor((_0x4cae7c - _0x333834) / 60);
        var _0x9775e5 = ((_0x4cae7c - _0x333834) % 60).toFixed(2);
        addGameLog("回合数:" + _0x1f9244.result.roundNum + "|耗时:" + _0x3cc362 + "分" + _0x9775e5 + "秒|总局数:" + _0x471f48 + "|胜场:" + _0x1001e0 + "|胜率:" + (_0x1001e0 / _0x471f48 * 100).toFixed(2) + "%");
        MFC.rootLayer.removeChild(this.nowUi);
        this.nowUi.text = "巅峰 回合数:" + _0x1f9244.result.roundNum + "|耗时:" + _0x3cc362 + "分" + _0x9775e5 + "秒|总局数:" + _0x471f48 + "|胜场:" + _0x1001e0 + "|胜率:" + (_0x1001e0 / _0x471f48 * 100).toFixed(2) + "% ";
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
        if (_0x471f48 >= this.inputDf) {
          addGameLog("到达目标局数,竞技结束");
          break;
        }
      }
      this.stop();
    } catch (_0x56eb06) {
      logger(_0x56eb06);
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
    let _0xa0b04e = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x353c85 = SimpleAlertUi({
        height: 250
      });
      const _0x4d5333 = {
        text: "确定进行[乱斗]挂机吗?\n等战斗结束再停脚本 以防禁赛",
        y: _0x353c85.height / 11
      };
      var _0x50ca5c = createLabel(_0x4d5333);
      _0x50ca5c.x = _0x353c85.width / 2 - _0x50ca5c.width / 2;
      _0x353c85.addChild(_0x50ca5c);
      const _0x36a7ad = {
        x: 57,
        y: _0x50ca5c.y + _0x50ca5c.height + 10,
        selected: false,
        storageKey: "luandou1"
      };
      let _0x4ef2ad = createRadio(_0x36a7ad);
      _0x353c85.addChild(_0x4ef2ad);
      const _0x71500 = {
        text: "经典模式",
        x: _0x4ef2ad.width + _0x4ef2ad.x + 10,
        y: _0x50ca5c.y + _0x50ca5c.height + 10
      };
      var _0x4eee11 = createLabel(_0x71500);
      _0x353c85.addChild(_0x4eee11);
      const _0x40a388 = {
        x: _0x4eee11.width + _0x4eee11.x + 20,
        y: _0x50ca5c.y + _0x50ca5c.height + 10,
        selected: true,
        storageKey: "luandou2"
      };
      let _0x59bc4b = createRadio(_0x40a388);
      _0x353c85.addChild(_0x59bc4b);
      const _0x4d28b0 = {
        text: "主场模式",
        x: _0x59bc4b.width + _0x59bc4b.x + 10,
        y: _0x50ca5c.y + _0x50ca5c.height + 10
      };
      var _0x149d15 = createLabel(_0x4d28b0);
      _0x353c85.addChild(_0x149d15);
      const _0x192e99 = {
        text: "对战次数",
        x: 60,
        y: _0x50ca5c.y + _0x50ca5c.height + 45
      };
      var _0x1f1069 = createLabel(_0x192e99);
      _0x353c85.addChild(_0x1f1069);
      const _0x4c340f = {
        prompt: "对战次数",
        width: 100,
        x: 30 + _0x1f1069.width + _0x1f1069.x,
        y: _0x50ca5c.y + _0x50ca5c.height + 40,
        storageKey: "inputld"
      };
      var _0x58dd4b = createEdit(_0x4c340f);
      _0x353c85.addChild(_0x58dd4b);
      var _0x15cd5d = createLabel({
        text: "十回合自动投降",
        x: 57
      });
      _0x15cd5d.y = _0x353c85.height / 2 - _0x15cd5d.height / 2 + 20;
      const _0x431e00 = {
        x: _0x15cd5d.x + _0x15cd5d.width + 15,
        y: _0x353c85.height / 2 - _0x15cd5d.height / 2 + 20,
        selected: true
      };
      let _0x121336 = createToggle(_0x431e00);
      _0x353c85.addChild(_0x15cd5d);
      _0x353c85.addChild(_0x121336);
      _0x353c85.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0xa0b04e.stop();
      }, function () {
        if (isNaN(parseInt(_0x58dd4b.text))) {
          MFC.bubbleAlert.showAlert("请输入有效对战次数");
          return true;
        }
        if (!_0x121336.selected) {
          _0xa0b04e.giveUp = 0;
        }
        if (_0x4ef2ad.selected) {
          _0xa0b04e.luandType = 3;
          localStorage.setItem("luandou1", true);
        }
        if (_0x59bc4b.selected) {
          _0xa0b04e.luandType = 16;
          localStorage.setItem("luandou2", true);
        }
        localStorage.setItem("inputld", parseInt(_0x58dd4b.text));
        _0xa0b04e.inputld = parseInt(_0x58dd4b.text);
        _0xa0b04e.prcessBody();
      }], null);
      _0x353c85.showAlert();
    });
  }
  getFirstSkillId(_0x2867a7) {
    let _0x45510f = _0x2867a7.useSkills;
    for (var _0x12395a = 0; _0x12395a < _0x45510f.length; _0x12395a++) {
      let _0x1d618f = petConfig.SkillConfig.getDef(_0x45510f[_0x12395a].id);
      if (_0x45510f[_0x12395a].crtPP > 0 && _0x1d618f.atkType != 5 && _0x1d618f.atkType != 6) {
        return _0x45510f[_0x12395a].id;
      }
    }
    return 0;
  }
  getPetIndex(_0x1693a4, _0x5b3016) {
    for (var _0x63a6c4 = 0; _0x63a6c4 < _0x1693a4.length; _0x63a6c4++) {
      var _0x3c7d9b = _0x1693a4[_0x63a6c4];
      if (_0x3c7d9b.crtHp > 0 && _0x63a6c4 != _0x5b3016) {
        return _0x63a6c4;
      }
    }
    return 0;
  }
  async changePet(_0x2ac6d2, _0x5926fe) {
    let _0x3d3548 = this.getPetIndex(_0x2ac6d2, _0x5926fe);
    await this.send_message("cs_online_load_battle_result", {
      groupId: ""
    });
    addGameLog("切换精灵index " + _0x3d3548);
    const _0x552ea0 = {
      petIndex: _0x3d3548
    };
    const _0x373cf9 = {
      opType: 2,
      data: _0x552ea0,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x373cf9);
    let _0x4f3ef3 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x18c865 = JSON.parse(_0x4f3ef3.gameBody[_0x4f3ef3.gameBody.length - 1].raw);
    _0x4f3ef3.gameBody.splice(0, _0x4f3ef3.gameBody.length);
    return _0x18c865;
  }
  async prcessBody() {
    try {
      await wait(1200);
      let _0xb9d32c = 0;
      let _0x553a37 = 0;
      let _0x26b7ff = new Date().getTime() / 1000;
      this.nowUi = createLabel({
        text: "乱斗 回合数:0|耗时:0分0秒|总局数:" + _0x553a37 + "|胜场:" + _0xb9d32c + "|胜率:" + 0 .toFixed(2) + "%",
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
        var _0x9b9485 = await this.send_message("cs_pvp_match_rival", {
          pvpType: this.luandType
        });
        if (JSON.stringify(_0x9b9485).includes("内部错误")) {
          MFC.show.alert("早退行为被限制!~,请稍后重试");
          this.stop();
          return;
        }
        let _0x2e8452 = await this.waitEvent("sc_pvp_notify_match_success");
        var _0x9b9485 = JSON.parse(_0x2e8452.gameBody[_0x2e8452.gameBody.length - 1].raw);
        _0x2e8452.gameBody.splice(0, _0x2e8452.gameBody.length);
        _0x26b7ff = new Date().getTime() / 1000;
        let _0x217761 = _0x9b9485.teamA.players[0].userId == _0x9b9485.uid__ ? _0x9b9485.teamB.players[0].rickNick : _0x9b9485.teamA.players[0].rickNick;
        addGameLog("匹配对手:" + _0x217761 + "  对战中...");
        let _0x4e5886 = await this.initBattle();
        while (!_0x4e5886.result.result) {
          if (this.giveUp && _0x4e5886.result.roundNum >= 9 || _0x4e5886.result.roundNum >= 30) {
            addGameLog("十回合投降/30回合 发起投降");
            await this.send_message("cs_online_player_surrender", {});
            let _0x3365bb = await this.waitEvent("sc_battle_notify_round_result");
            _0x3365bb.gameBody.splice(0, _0x3365bb.gameBody.length);
            break;
          }
          let _0x12b2ca = _0x4e5886.result.playerInfos.find(_0x22601f => _0x22601f.uid == _0x4e5886.uid__);
          let _0x4ffd8c = _0x12b2ca.crtPetIndex;
          let _0xd275e5 = _0x4e5886.result.playerInfos.find(_0x3ed712 => _0x3ed712.uid == _0x4e5886.uid__).nextRoundOP;
          if (_0xd275e5 == 3) {
            addGameLog("被击败,更换精灵!");
            _0x4e5886 = await this.changePet(_0x12b2ca.petInfos, _0x4ffd8c);
          } else {
            let _0x25c34c = _0x12b2ca.petInfos[_0x4ffd8c];
            let _0x3ea5bb = this.getFirstSkillId(_0x25c34c);
            await wait(300);
            _0x4e5886 = await this.useSkill(_0x3ea5bb);
          }
        }
        _0x553a37++;
        if (_0x4e5886.result.result == 1) {
          addGameLog("战斗胜利!");
          _0xb9d32c++;
        } else {
          addGameLog("战斗失败!");
        }
        let _0x4a9735 = new Date().getTime() / 1000;
        var _0x265a38 = Math.floor((_0x4a9735 - _0x26b7ff) / 60);
        var _0x5f16af = ((_0x4a9735 - _0x26b7ff) % 60).toFixed(2);
        addGameLog("回合数:" + _0x4e5886.result.roundNum + "|耗时:" + _0x265a38 + "分" + _0x5f16af + "秒|总局数:" + _0x553a37 + "|胜场:" + _0xb9d32c + "|胜率:" + (_0xb9d32c / _0x553a37 * 100).toFixed(2) + "%");
        MFC.rootLayer.removeChild(this.nowUi);
        this.nowUi.text = "乱斗 回合数:" + _0x4e5886.result.roundNum + "|耗时:" + _0x265a38 + "分" + _0x5f16af + "秒|总局数:" + _0x553a37 + "|胜场:" + _0xb9d32c + "|胜率:" + (_0xb9d32c / _0x553a37 * 100).toFixed(2) + "%";
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
        if (_0x553a37 >= this.inputld) {
          addGameLog("到达目标局数,乱斗结束");
          break;
        }
      }
      this.stop();
    } catch (_0x5c409d) {
      logger(_0x5c409d);
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
    let _0x27e0cc = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x1a56d6 = SimpleAlertUi({
        height: 250
      });
      const _0x6ac8e6 = {
        text: "确定进行[竞技]挂机吗?\n等战斗结束再停脚本 以防禁赛",
        y: _0x1a56d6.height / 11
      };
      var _0x295411 = createLabel(_0x6ac8e6);
      _0x295411.x = _0x1a56d6.width / 2 - _0x295411.width / 2;
      _0x1a56d6.addChild(_0x295411);
      const _0x1bdda0 = {
        text: "对战次数",
        x: 60,
        y: _0x295411.y + _0x295411.height + 45
      };
      var _0x52c2c6 = createLabel(_0x1bdda0);
      _0x1a56d6.addChild(_0x52c2c6);
      const _0x3bfe88 = {
        prompt: "对战次数",
        width: 100,
        x: 30 + _0x52c2c6.width + _0x52c2c6.x,
        y: _0x295411.y + _0x295411.height + 40,
        storageKey: "inputjj"
      };
      var _0x508aa5 = createEdit(_0x3bfe88);
      _0x1a56d6.addChild(_0x508aa5);
      var _0x3d418a = createLabel({
        text: "十回合自动投降",
        x: 57
      });
      _0x3d418a.y = _0x1a56d6.height / 2 - _0x3d418a.height / 2 + 20;
      const _0x41c1a1 = {
        x: _0x3d418a.x + _0x3d418a.width + 15,
        y: _0x1a56d6.height / 2 - _0x3d418a.height / 2 + 20,
        selected: true
      };
      let _0x37ea9a = createToggle(_0x41c1a1);
      _0x1a56d6.addChild(_0x3d418a);
      _0x1a56d6.addChild(_0x37ea9a);
      _0x1a56d6.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x27e0cc.stop();
      }, function () {
        if (isNaN(parseInt(_0x508aa5.text))) {
          MFC.bubbleAlert.showAlert("请输入有效对战次数");
          return true;
        }
        if (!_0x37ea9a.selected) {
          _0x27e0cc.giveUp = 0;
        }
        localStorage.setItem("inputjj", parseInt(_0x508aa5.text));
        _0x27e0cc.inputjj = parseInt(_0x508aa5.text);
        _0x27e0cc.prcessBody();
      }], null);
      _0x1a56d6.showAlert();
    });
  }
  getFirstSkillId(_0x591e06) {
    let _0x53e39c = _0x591e06.useSkills;
    for (var _0x39cb13 = 0; _0x39cb13 < _0x53e39c.length; _0x39cb13++) {
      let _0x1f0c16 = petConfig.SkillConfig.getDef(_0x53e39c[_0x39cb13].id);
      if (_0x53e39c[_0x39cb13].crtPP > 0 && _0x1f0c16.atkType != 5 && _0x1f0c16.atkType != 6) {
        return _0x53e39c[_0x39cb13].id;
      }
    }
    return 0;
  }
  getPetIndex(_0x4d6f30, _0x18270f) {
    for (var _0x127b7b = 0; _0x127b7b < _0x4d6f30.length; _0x127b7b++) {
      var _0x232374 = _0x4d6f30[_0x127b7b];
      if (_0x232374.crtHp > 0 && _0x127b7b != _0x18270f) {
        return _0x127b7b;
      }
    }
    return 0;
  }
  async changePet(_0x16ea7a, _0x53f114) {
    let _0x1880f5 = this.getPetIndex(_0x16ea7a, _0x53f114);
    await this.send_message("cs_online_load_battle_result", {
      groupId: ""
    });
    addGameLog("切换精灵index " + _0x1880f5);
    const _0x201562 = {
      petIndex: _0x1880f5
    };
    const _0x2ac485 = {
      opType: 2,
      data: _0x201562,
      groupId: ""
    };
    await this.send_message("cs_online_player_operation", _0x2ac485);
    let _0xc63659 = await this.waitEvent("sc_battle_notify_round_result");
    let _0x1b308d = JSON.parse(_0xc63659.gameBody[_0xc63659.gameBody.length - 1].raw);
    _0xc63659.gameBody.splice(0, _0xc63659.gameBody.length);
    return _0x1b308d;
  }
  async getCastAward() {
    let _0x2f5add = [{
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
    for (let _0x20db29 = 0; _0x20db29 < _0x2f5add.length; _0x20db29++) {
      await this.gainCastPosAward(_0x2f5add[_0x20db29]);
    }
  }
  async gainCastPosAward(_0x55d81a) {
    if (MFC.attr.getAttr(_0x55d81a.id) >= _0x55d81a.count && this.getCastFlag(_0x55d81a.id + 1, _0x55d81a.pos)) {
      addGameLog("领取 " + _0x55d81a.name + "竞技奖励!");
      const _0xec180f = {
        type: _0x55d81a.type,
        pos: _0x55d81a.pos + 1
      };
      await this.send_message("cs_get_cast_reward", _0xec180f);
    }
  }
  getCastFlag(_0x479bdb, _0x128c7f) {
    var _0x4776c0 = MFC.attr.getAttr(_0x479bdb);
    var _0x5b7928 = BitUtils.getBit(_0x4776c0, _0x128c7f + 1);
    var _0x531a49 = _0x5b7928 ? -1 : 1;
    if (_0x531a49 == 1) {
      return true;
    }
    return false;
  }
  async prcessBody() {
    try {
      await wait(1200);
      let _0x15cebc = 0;
      let _0x308dc6 = 0;
      let _0x4e3392 = new Date().getTime() / 1000;
      this.nowUi = createLabel({
        text: "竞技  回合数:0|耗时:0分0秒|总局数:" + _0x308dc6 + "|胜场:" + _0x15cebc + "|胜率:" + 0 .toFixed(2) + "% 当日获取竞技币数:" + MFC.attr.getAttr(2100462),
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
        var _0x413159 = await this.send_message("cs_pvp_match_rival", {
          pvpType: 9
        });
        if (JSON.stringify(_0x413159).includes("内部错误")) {
          MFC.show.alert("早退行为被限制!~,请稍后重试");
          this.stop();
          return;
        }
        let _0x2bceb9 = await this.waitEvent("sc_pvp_notify_match_success");
        var _0x413159 = JSON.parse(_0x2bceb9.gameBody[_0x2bceb9.gameBody.length - 1].raw);
        _0x2bceb9.gameBody.splice(0, _0x2bceb9.gameBody.length);
        _0x4e3392 = new Date().getTime() / 1000;
        let _0x34e723 = _0x413159.teamA.players[0].userId == _0x413159.uid__ ? _0x413159.teamB.players[0].rickNick : _0x413159.teamA.players[0].rickNick;
        addGameLog("匹配对手:" + _0x34e723 + "  对战中...");
        let _0x4f606b = await this.initBattle();
        while (!_0x4f606b.result.result) {
          if (this.giveUp && _0x4f606b.result.roundNum >= 9 || _0x4f606b.result.roundNum >= 30) {
            addGameLog("十回合投降/30回合 发起投降");
            await this.send_message("cs_online_player_surrender", {});
            let _0x16ee91 = await this.waitEvent("sc_battle_notify_round_result");
            _0x16ee91.gameBody.splice(0, _0x16ee91.gameBody.length);
            break;
          }
          let _0x4d0b62 = _0x4f606b.result.playerInfos.find(_0x2a0af4 => _0x2a0af4.uid == _0x4f606b.uid__);
          let _0x49e2a0 = _0x4d0b62.crtPetIndex;
          let _0x22c2cd = _0x4f606b.result.playerInfos.find(_0x483323 => _0x483323.uid == _0x4f606b.uid__).nextRoundOP;
          if (_0x22c2cd == 3) {
            addGameLog("被击败,更换精灵!");
            _0x4f606b = await this.changePet(_0x4d0b62.petInfos, _0x49e2a0);
          } else {
            let _0x1d1dc4 = _0x4d0b62.petInfos[_0x49e2a0];
            let _0x55169b = this.getFirstSkillId(_0x1d1dc4);
            await wait(300);
            _0x4f606b = await this.useSkill(_0x55169b);
          }
        }
        _0x308dc6++;
        if (_0x4f606b.result.result == 1) {
          addGameLog("战斗胜利!");
          _0x15cebc++;
        } else {
          addGameLog("战斗失败!");
        }
        let _0x3d1cc6 = new Date().getTime() / 1000;
        var _0x3368f3 = Math.floor((_0x3d1cc6 - _0x4e3392) / 60);
        var _0x47ca28 = ((_0x3d1cc6 - _0x4e3392) % 60).toFixed(2);
        addGameLog("回合数:" + _0x4f606b.result.roundNum + "|耗时:" + _0x3368f3 + "分" + _0x47ca28 + "秒|总局数:" + _0x308dc6 + "|胜场:" + _0x15cebc + "|胜率:" + (_0x15cebc / _0x308dc6 * 100).toFixed(2) + "%");
        MFC.rootLayer.removeChild(this.nowUi);
        this.nowUi.text = "竞技 回合数:" + _0x4f606b.result.roundNum + "|耗时:" + _0x3368f3 + "分" + _0x47ca28 + "秒|总局数:" + _0x308dc6 + "|胜场:" + _0x15cebc + "|胜率:" + (_0x15cebc / _0x308dc6 * 100).toFixed(2) + "% 当日获取竞技币数:" + MFC.attr.getAttr(2100462);
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
        if (_0x308dc6 >= this.inputjj) {
          addGameLog("到达目标局数,竞技结束");
          break;
        }
      }
      this.stop();
    } catch (_0x15a181) {
      logger(_0x15a181);
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
    let _0x265183 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x4f17d9 = SimpleAlertUi({});
      const _0x4cc1e4 = {
        text: "确定进行[自由对战]挂机吗?",
        y: _0x4f17d9.height / 11
      };
      var _0x51711b = createLabel(_0x4cc1e4);
      _0x51711b.x = _0x4f17d9.width / 2 - _0x51711b.width / 2;
      _0x4f17d9.addChild(_0x51711b);
      const _0x40a3da = {
        text: "[记得确保自由对战阵容设置完毕]",
        y: _0x51711b.y + 30,
        textColor: 16776960
      };
      var _0x2c1c23 = createLabel(_0x40a3da);
      _0x2c1c23.x = _0x4f17d9.width / 2 - _0x2c1c23.width / 2;
      _0x4f17d9.addChild(_0x2c1c23);
      const _0x6600d2 = {
        text: "十回合自动投降",
        x: 45,
        y: _0x2c1c23.y + 30
      };
      let _0x1b94b5 = createLabel(_0x6600d2);
      const _0x145953 = {
        x: _0x1b94b5.x + _0x1b94b5.width + 15,
        y: _0x2c1c23.y + 30,
        selected: false
      };
      let _0x19e342 = createToggle(_0x145953);
      _0x4f17d9.addChild(_0x1b94b5);
      _0x4f17d9.addChild(_0x19e342);
      _0x4f17d9.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x265183.stop();
      }, function () {
        if (!_0x19e342.selected) {
          _0x265183.giveUp = 0;
        }
        _0x265183.prcessBody();
      }], null);
      _0x4f17d9.showAlert();
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
          var _0x3f4059 = getTouchs("_source", "arena_img_go_png");
          if (_0x3f4059) {
            touchBtn(_0x3f4059[3]);
            await wait(1000);
            addGameLog("前往自由对战");
          }
          var _0x3f4059 = getTouchs("_source", "arena_06_png");
          if (_0x3f4059) {
            break;
          } else {
            MFC.moduleManager.openModule(249);
            await wait(300);
          }
          var _0x3f4059 = getTouchs("_source", "arena_77_png");
          if (_0x3f4059) {
            var _0x4d6ac2 = await findUIs("_source", "close_button_nor_png");
            addGameLog("关闭乱斗窗口");
            touchBtn(_0x4d6ac2[0].$parent);
          }
          var _0x3f4059 = getTouchs("_source", "arena_top_fight_img_btn_pipei_png");
          if (_0x3f4059) {
            var _0x4d6ac2 = await findUIs("_source", "arena_top_fight_img_close_png");
            addGameLog("关闭巅峰窗口");
            touchBtn(_0x4d6ac2[0]);
          }
        }
        if (!window.nowTask) {
          _this.stop();
          return;
        }
        logger("到达自由面板");
        await wait(800);
        var _0x4d6ac2 = await findUIs("_source", "arena_06_png");
        addGameLog("点击自由匹配");
        touchBtn(_0x4d6ac2[0].$parent);
        if (!window.nowTask) {
          _this.stop();
          return;
        }
        await wait(800);
        if (!window.nowTask) {
          _this.stop();
          return;
        }
        var _0x4d6ac2 = await findUIs("_source", "toolbar_auto_battle_off_png");
        addGameLog("开始自动战斗");
        await wait(800);
        touchBtn(_0x4d6ac2[0]);
        if (!window.nowTask) {
          _this.stop();
          return;
        }
        while (1) {
          if (!window.nowTask) {
            _this.stop();
            return;
          }
          let _0x3a4323 = await this.waitEvent("sc_battle_notify_round_result");
          let _0x184c17 = JSON.parse(_0x3a4323.gameBody[_0x3a4323.gameBody.length - 1].raw);
          _0x3a4323.gameBody.splice(0, _0x3a4323.gameBody.length);
          await wait(50);
          if (this.giveUp) {
            logger("勾选放弃,判断是否到达十回合");
            if (_0x184c17.result.roundNum >= 10) {
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
          if (_0x184c17.result.result != 0) {
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
              let _0x2bd1f0 = sta.$screen.stage.$stageWidth / 5;
              let _0x4c4e2b = sta.$screen.stage.$stageHeight / 4;
              nnnn.touch.onTouchBegin(_0x2bd1f0, _0x4c4e2b, 0);
              nnnn.touch.onTouchEnd(_0x2bd1f0, _0x4c4e2b, 0);
              var _0x3f4059 = getTouchs("_source", "button_yellow_up_100_png");
              if (_0x3f4059) {
                addGameLog("升段提示,点击确认");
                touchBtn(_0x3f4059[0]);
                await wait(800);
              }
              var _0x3f4059 = getTouchs("_source", "arena_06_png");
              if (_0x3f4059) {
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
          let _0x2212dd = sta.$screen.stage.$stageWidth / 5;
          let _0x3f9adc = sta.$screen.stage.$stageHeight / 4;
          nnnn.touch.onTouchBegin(_0x2212dd, _0x3f9adc, 0);
          nnnn.touch.onTouchEnd(_0x2212dd, _0x3f9adc, 0);
          var _0x3f4059 = getTouchs("_source", "button_yellow_up_100_png");
          if (_0x3f4059) {
            addGameLog("升段提示,点击确认");
            touchBtn(_0x3f4059[0]);
            await wait(800);
          }
          var _0x3f4059 = getTouchs("_source", "arena_06_png");
          if (_0x3f4059) {
            break;
          }
        }
      }
    } catch (_0x560ae9) {
      logger(_0x560ae9);
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
    let _0x5ef14d = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x4aad64 = SimpleAlertUi({
        height: 480,
        width: 760
      });
      _0x5ef14d.alertWin = _0x4aad64;
      let _0x388be0 = [];
      var _0x325a92 = createLabel({
        text: "乱斗商店",
        textColor: 16776960,
        x: 30,
        y: 15
      });
      _0x388be0.push(_0x325a92);
      const _0x39c115 = {
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
      const _0x6123df = {
        label: {
          text: "初级结晶"
        },
        switch: _0x39c115
      };
      const _0xf5b184 = {
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
      const _0x5b0622 = {
        label: {
          text: "中级结晶"
        },
        switch: _0xf5b184
      };
      const _0xb27c1b = {
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
      const _0x5e4be0 = {
        label: {
          text: "进化石"
        },
        switch: _0xb27c1b
      };
      const _0x472572 = {
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
      const _0x232238 = {
        label: {
          text: "进化玉"
        },
        switch: _0x472572
      };
      const _0x83b756 = {
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
      const _0x4dd074 = {
        label: {
          text: "肯札特图纸"
        },
        switch: _0x83b756
      };
      var _0x4df948 = [_0x6123df, _0x5b0622, _0x5e4be0, _0x232238, _0x4dd074];
      let _0x1477f4 = 40;
      let _0x45f3c7 = _0x325a92.y + _0x325a92.height + 10;
      for (let _0x5eeab6 = 0; _0x5eeab6 < _0x4df948.length; _0x5eeab6++) {
        const _0x2cf7c7 = {
          text: _0x4df948[_0x5eeab6].label.text,
          x: _0x1477f4,
          y: _0x45f3c7
        };
        let _0x3ec56a = createLabel(_0x2cf7c7);
        const _0x4909fe = {
          x: _0x3ec56a.x + _0x3ec56a.width + 10,
          y: _0x45f3c7,
          selected: true,
          storageKey: _0x4df948[_0x5eeab6].switch.storageKey,
          msgData: _0x4df948[_0x5eeab6].switch.msgData
        };
        let _0x5f260e = createToggle(_0x4909fe);
        _0x1477f4 = _0x1477f4 + _0x3ec56a.width + 10 + _0x5f260e.width + 10;
        this.switchBtnList.push(_0x5f260e);
        _0x388be0.push(_0x3ec56a);
        _0x388be0.push(_0x5f260e);
        if (_0x5eeab6 == _0x4df948.length - 1) {
          _0x45f3c7 = _0x3ec56a.y + _0x3ec56a.height + 12;
        }
      }
      const _0x34f8a3 = {
        text: "巅峰商店",
        textColor: 16776960,
        x: 30,
        y: _0x45f3c7
      };
      var _0x39a741 = createLabel(_0x34f8a3);
      _0x45f3c7 = _0x45f3c7 + _0x325a92.height + 10;
      _0x388be0.push(_0x39a741);
      const _0x2ec22b = {
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
      const _0x4d6861 = {
        label: {
          text: "巅峰HP药"
        },
        switch: _0x2ec22b
      };
      const _0x34b7cc = {
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
      const _0x56bb08 = {
        label: {
          text: "巅峰PP药"
        },
        switch: _0x34b7cc
      };
      const _0x29eebe = {
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
      const _0x5df9ef = {
        label: {
          text: "增幅器"
        },
        switch: _0x29eebe
      };
      const _0x270d68 = {
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
      const _0x9b7259 = {
        label: {
          text: "符文"
        },
        switch: _0x270d68
      };
      const _0xb61b9d = {
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
      const _0x169193 = {
        label: {
          text: "卡鲁图纸"
        },
        switch: _0xb61b9d
      };
      const _0x470725 = {
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
      const _0x3858b2 = {
        label: {
          text: "吉米图纸"
        },
        switch: _0x470725
      };
      const _0xa496e6 = {
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
      const _0x12af7 = {
        label: {
          text: "尼古斯图纸"
        },
        switch: _0xa496e6
      };
      var _0x4df948 = [_0x4d6861, _0x56bb08, _0x5df9ef, _0x9b7259, _0x169193, _0x3858b2, _0x12af7];
      _0x1477f4 = 40;
      for (let _0x2b7716 = 0; _0x2b7716 < _0x4df948.length; _0x2b7716++) {
        const _0x29c269 = {
          text: _0x4df948[_0x2b7716].label.text,
          x: _0x1477f4,
          y: _0x45f3c7
        };
        let _0x402c3d = createLabel(_0x29c269);
        const _0xed6cc1 = {
          x: _0x402c3d.x + _0x402c3d.width + 10,
          y: _0x45f3c7,
          selected: true,
          storageKey: _0x4df948[_0x2b7716].switch.storageKey,
          msgData: _0x4df948[_0x2b7716].switch.msgData
        };
        let _0x581bea = createToggle(_0xed6cc1);
        _0x1477f4 = _0x1477f4 + _0x402c3d.width + 10 + _0x581bea.width + 10;
        this.switchBtnList.push(_0x581bea);
        _0x388be0.push(_0x402c3d);
        _0x388be0.push(_0x581bea);
        if (_0x2b7716 == _0x4df948.length - 1) {
          _0x45f3c7 = _0x402c3d.y + _0x402c3d.height + 12;
        }
        if (_0x2b7716 == 3) {
          _0x1477f4 = 40;
          _0x45f3c7 = _0x45f3c7 + _0x325a92.height + 10;
        }
      }
      const _0x3533d8 = {
        text: "竞技商店",
        textColor: 16776960,
        x: 30,
        y: _0x45f3c7
      };
      var _0x1e7836 = createLabel(_0x3533d8);
      _0x45f3c7 = _0x45f3c7 + _0x1e7836.height + 10;
      _0x388be0.push(_0x1e7836);
      const _0x33a244 = {
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
      const _0x4eda25 = {
        label: {
          text: "能量包"
        },
        switch: _0x33a244
      };
      const _0x495842 = {
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
      const _0x45fc91 = {
        label: {
          text: "小型能源"
        },
        switch: _0x495842
      };
      const _0x1416c8 = {
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
      const _0x2abab2 = {
        label: {
          text: "初级胶囊"
        },
        switch: _0x1416c8
      };
      const _0x4815d5 = {
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
      const _0x413b18 = {
        label: {
          text: "随机附魔"
        },
        switch: _0x4815d5
      };
      const _0x3d7b69 = {
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
      const _0x39b89d = {
        label: {
          text: "梦幻晶"
        },
        switch: _0x3d7b69
      };
      var _0x4df948 = [_0x4eda25, _0x45fc91, _0x2abab2, _0x413b18, _0x39b89d];
      _0x1477f4 = 40;
      for (let _0x29817e = 0; _0x29817e < _0x4df948.length; _0x29817e++) {
        const _0x42f7bb = {
          text: _0x4df948[_0x29817e].label.text,
          x: _0x1477f4,
          y: _0x45f3c7
        };
        let _0x2a560a = createLabel(_0x42f7bb);
        const _0x6ade2 = {
          x: _0x2a560a.x + _0x2a560a.width + 10,
          y: _0x45f3c7,
          selected: true,
          storageKey: _0x4df948[_0x29817e].switch.storageKey,
          msgData: _0x4df948[_0x29817e].switch.msgData
        };
        let _0xe21f21 = createToggle(_0x6ade2);
        _0x1477f4 = _0x1477f4 + _0x2a560a.width + 10 + _0xe21f21.width + 10;
        this.switchBtnList.push(_0xe21f21);
        _0x388be0.push(_0x2a560a);
        _0x388be0.push(_0xe21f21);
        if (_0x29817e == _0x4df948.length - 1) {
          _0x45f3c7 = _0x2a560a.y + _0x2a560a.height + 12;
        }
      }
      const _0x37c6ab = {
        text: "教皇商店",
        textColor: 16776960,
        x: 30,
        y: _0x45f3c7
      };
      var _0x20fa03 = createLabel(_0x37c6ab);
      _0x45f3c7 = _0x45f3c7 + _0x1e7836.height + 10;
      _0x388be0.push(_0x20fa03);
      const _0x3c86a6 = {
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
      const _0x3642c8 = {
        label: {
          text: "进化石"
        },
        switch: _0x3c86a6
      };
      const _0x11e39a = {
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
      const _0x44e45 = {
        label: {
          text: "进化玉"
        },
        switch: _0x11e39a
      };
      const _0x2f255b = {
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
      const _0x4a6b45 = {
        label: {
          text: "能量包"
        },
        switch: _0x2f255b
      };
      const _0x2dae0f = {
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
      const _0x394714 = {
        label: {
          text: "能源晶块"
        },
        switch: _0x2dae0f
      };
      const _0x37a172 = {
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
      const _0x21ebc4 = {
        label: {
          text: "初级胶囊"
        },
        switch: _0x37a172
      };
      var _0x4df948 = [_0x3642c8, _0x44e45, _0x4a6b45, _0x394714, _0x21ebc4];
      _0x1477f4 = 40;
      for (let _0xf1f9f6 = 0; _0xf1f9f6 < _0x4df948.length; _0xf1f9f6++) {
        const _0x354df7 = {
          text: _0x4df948[_0xf1f9f6].label.text,
          x: _0x1477f4,
          y: _0x45f3c7
        };
        let _0xd1aacd = createLabel(_0x354df7);
        const _0x2c36f2 = {
          x: _0xd1aacd.x + _0xd1aacd.width + 10,
          y: _0x45f3c7,
          selected: true,
          storageKey: _0x4df948[_0xf1f9f6].switch.storageKey,
          msgData: _0x4df948[_0xf1f9f6].switch.msgData
        };
        let _0x312542 = createToggle(_0x2c36f2);
        _0x1477f4 = _0x1477f4 + _0xd1aacd.width + 10 + _0x312542.width + 10;
        this.switchBtnList.push(_0x312542);
        _0x388be0.push(_0xd1aacd);
        _0x388be0.push(_0x312542);
        if (_0xf1f9f6 == _0x4df948.length - 1) {
          _0x45f3c7 = _0xd1aacd.y + _0xd1aacd.height + 12;
        }
      }
      const _0x18b63e = {
        text: "阶梯商店",
        textColor: 16776960,
        x: 30,
        y: _0x45f3c7
      };
      var _0x296b7f = createLabel(_0x18b63e);
      _0x45f3c7 = _0x45f3c7 + _0x1e7836.height + 10;
      _0x388be0.push(_0x296b7f);
      const _0x985473 = {
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
      const _0x196363 = {
        label: {
          text: "进化石"
        },
        switch: _0x985473
      };
      const _0x15572e = {
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
      const _0x30552d = {
        label: {
          text: "进化玉"
        },
        switch: _0x15572e
      };
      const _0x1eb330 = {
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
      const _0x32679c = {
        label: {
          text: "能量包"
        },
        switch: _0x1eb330
      };
      const _0x560f2f = {
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
      const _0x517d2f = {
        label: {
          text: "能源晶块"
        },
        switch: _0x560f2f
      };
      const _0x5c852e = {
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
      const _0x250f6b = {
        label: {
          text: "教皇门票"
        },
        switch: _0x5c852e
      };
      var _0x4df948 = [_0x196363, _0x30552d, _0x32679c, _0x517d2f, _0x250f6b];
      _0x1477f4 = 40;
      for (let _0x360bdd = 0; _0x360bdd < _0x4df948.length; _0x360bdd++) {
        const _0x268eb8 = {
          text: _0x4df948[_0x360bdd].label.text,
          x: _0x1477f4,
          y: _0x45f3c7
        };
        let _0x2faa25 = createLabel(_0x268eb8);
        const _0x51bf2d = {
          x: _0x2faa25.x + _0x2faa25.width + 10,
          y: _0x45f3c7,
          selected: true,
          storageKey: _0x4df948[_0x360bdd].switch.storageKey,
          msgData: _0x4df948[_0x360bdd].switch.msgData
        };
        let _0x3d1409 = createToggle(_0x51bf2d);
        _0x1477f4 = _0x1477f4 + _0x2faa25.width + 10 + _0x3d1409.width + 10;
        this.switchBtnList.push(_0x3d1409);
        _0x388be0.push(_0x2faa25);
        _0x388be0.push(_0x3d1409);
        if (_0x360bdd == _0x4df948.length - 1) {
          _0x45f3c7 = _0x2faa25.y + _0x2faa25.height + 12;
        }
      }
      const _0x4f11c1 = {
        text: "普通商店",
        textColor: 16776960,
        x: 30,
        y: _0x45f3c7
      };
      var _0x55f872 = createLabel(_0x4f11c1);
      _0x45f3c7 = _0x45f3c7 + _0x1e7836.height + 10;
      _0x388be0.push(_0x55f872);
      const _0x4fe49d = {
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
      const _0x2de587 = {
        label: {
          text: "初级胶囊"
        },
        switch: _0x4fe49d
      };
      const _0x4ee48a = {
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
      const _0x3a8336 = {
        label: {
          text: "中级胶囊"
        },
        switch: _0x4ee48a
      };
      const _0x3eb44d = {
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
      const _0x49e8d8 = {
        label: {
          text: "高级胶囊"
        },
        switch: _0x3eb44d
      };
      var _0x4df948 = [_0x2de587, _0x3a8336, _0x49e8d8];
      _0x1477f4 = 40;
      for (let _0x3ae24c = 0; _0x3ae24c < _0x4df948.length; _0x3ae24c++) {
        const _0x1d4e43 = {
          text: _0x4df948[_0x3ae24c].label.text,
          x: _0x1477f4,
          y: _0x45f3c7
        };
        let _0x52d0cc = createLabel(_0x1d4e43);
        const _0x565ade = {
          x: _0x52d0cc.x + _0x52d0cc.width + 10,
          y: _0x45f3c7,
          selected: true,
          storageKey: _0x4df948[_0x3ae24c].switch.storageKey,
          msgData: _0x4df948[_0x3ae24c].switch.msgData
        };
        let _0xec3a10 = createToggle(_0x565ade);
        _0x1477f4 = _0x1477f4 + _0x52d0cc.width + 10 + _0xec3a10.width + 10;
        this.switchBtnList.push(_0xec3a10);
        _0x388be0.push(_0x52d0cc);
        _0x388be0.push(_0xec3a10);
        if (_0x3ae24c == _0x4df948.length - 1) {
          const _0x43f89d = {
            text: "迷航商店",
            textColor: 16776960,
            x: _0x1477f4 + 30,
            y: _0x45f3c7 - (_0x1e7836.height + 8)
          };
          var _0x541067 = createLabel(_0x43f89d);
          _0x388be0.push(_0x541067);
          const _0x3427f0 = {
            text: "重塑胶囊",
            x: _0x541067.x + 10,
            y: _0x45f3c7
          };
          let _0x3723bc = createLabel(_0x3427f0);
          const _0x37c1d4 = {
            x: _0x3723bc.x + _0x3723bc.width + 10,
            y: _0x45f3c7,
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
          let _0xc33a71 = createToggle(_0x37c1d4);
          this.switchBtnList.push(_0xc33a71);
          _0x388be0.push(_0x3723bc);
          _0x388be0.push(_0xc33a71);
          _0x45f3c7 = _0x3723bc.y + _0x3723bc.height + 12;
        }
      }
      const _0x475461 = {
        text: "放生商店",
        textColor: 16776960,
        x: 30,
        y: _0x45f3c7
      };
      var _0x5e84b9 = createLabel(_0x475461);
      _0x45f3c7 = _0x45f3c7 + _0x1e7836.height + 10;
      _0x388be0.push(_0x5e84b9);
      const _0x2fe566 = {
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
      const _0x30fd4e = {
        label: {
          text: "初级胶囊"
        },
        switch: _0x2fe566
      };
      const _0x4db1c5 = {
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
      const _0x152721 = {
        label: {
          text: "中级胶囊"
        },
        switch: _0x4db1c5
      };
      const _0x3aa120 = {
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
      const _0xaf4b7b = {
        label: {
          text: "高级胶囊"
        },
        switch: _0x3aa120
      };
      const _0x25de19 = {
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
      const _0x54cd8b = {
        label: {
          text: "无敌胶囊"
        },
        switch: _0x25de19
      };
      const _0x2dd3dd = {
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
      const _0x2b994c = {
        label: {
          text: "矿物换豆"
        },
        switch: _0x2dd3dd
      };
      var _0x4df948 = [_0x30fd4e, _0x152721, _0xaf4b7b, _0x54cd8b, _0x2b994c];
      _0x1477f4 = 40;
      for (let _0x48ead3 = 0; _0x48ead3 < _0x4df948.length; _0x48ead3++) {
        const _0x4fe791 = {
          text: _0x4df948[_0x48ead3].label.text,
          x: _0x1477f4,
          y: _0x45f3c7
        };
        let _0x505cc = createLabel(_0x4fe791);
        const _0x39598e = {
          x: _0x505cc.x + _0x505cc.width + 10,
          y: _0x45f3c7,
          selected: true,
          storageKey: _0x4df948[_0x48ead3].switch.storageKey,
          msgData: _0x4df948[_0x48ead3].switch.msgData
        };
        let _0x339623 = createToggle(_0x39598e);
        _0x1477f4 = _0x1477f4 + _0x505cc.width + 10 + _0x339623.width + 10;
        this.switchBtnList.push(_0x339623);
        _0x388be0.push(_0x505cc);
        _0x388be0.push(_0x339623);
        if (_0x48ead3 == _0x4df948.length - 1) {
          _0x45f3c7 = _0x505cc.y + _0x505cc.height + 12;
        }
      }
      this.addAllUis(_0x388be0);
      _0x4aad64.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x5ef14d.stop();
      }, function () {
        _0x5ef14d.switchBtnList.forEach(_0x5efebb => localStorage.setItem(_0x5efebb.storageKey, _0x5efebb.selected));
        _0x5ef14d.prcessBody();
      }], null);
      _0x4aad64.showAlert();
      logger(_0x4aad64);
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
      let _0xa2fd23 = [];
      for (let _0x2258a3 = 0; _0x2258a3 < this.switchBtnList.length; _0x2258a3++) {
        if (this.switchBtnList[_0x2258a3].selected) {
          _0xa2fd23.push(this.switchBtnList[_0x2258a3]);
        }
      }
      for (let _0x128c32 = 0; _0x128c32 < _0xa2fd23.length; _0x128c32++) {
        await wait(100);
        let _0x390977 = _0xa2fd23[_0x128c32].msgData;
        if (_0x390977.name == "cs_buy_new_shop_item") {
          const _0x408e2e = {
            shopType: _0x390977.body.shopType
          };
          let _0x15c5e6 = await this.send_message("cs_get_new_shop_item", _0x408e2e);
          let _0x9dbdb0 = _0x15c5e6.shop_items;
          let _0x16dd35 = 0;
          for (let _0x85edea = 0; _0x85edea < _0x9dbdb0.length; _0x85edea++) {
            if (_0x9dbdb0[_0x85edea].idx == _0x390977.body.id) {
              if (_0x9dbdb0[_0x85edea].buyNum) {
                _0x16dd35 = 1;
              }
              break;
            }
          }
          if (_0x16dd35 == 1) {
            addGameLog("已经购买过 =>" + _0x390977.logData);
            continue;
          }
          if (_0x390977.body.shopType == 2) {
            if (_0x15c5e6.balance >= _0x390977.needCoin) {
              await this.send_message(_0x390977.name, _0x390977.body);
              addGameLog("购买成功 =>" + _0x390977.logData);
            } else {
              addGameLog("代币不足  跳过购买=>" + _0x390977.logData);
            }
          }
          if (_0x390977.body.shopType == 3) {
            await this.send_message(_0x390977.name, _0x390977.body);
            addGameLog("尝试购买  =>" + _0x390977.logData);
          }
        }
        if (_0x390977.name == "cs_buy_shop_item") {
          if (UserManager.getInstance().userInfo.coin < _0x390977.needCoin) {
            addGameLog("代币不足  跳过购买=>" + _0x390977.logData);
            continue;
          }
          let _0x2236eb = await this.send_message("cs_get_shop_item", {
            freshType: 0
          });
          let _0x4bd232 = _0x2236eb.shop_items;
          let _0x128f98 = 0;
          for (let _0x101acf = 0; _0x101acf < _0x4bd232.length; _0x101acf++) {
            if (_0x4bd232[_0x101acf].itemId == _0x390977.itemId) {
              if (_0x4bd232[_0x101acf].buyState) {
                _0x128f98 = 1;
              } else {
                _0x390977.body.pos = _0x4bd232[_0x101acf].pos;
                await this.send_message(_0x390977.name, _0x390977.body);
                addGameLog("购买成功 =>" + _0x390977.logData);
              }
            }
          }
          if (_0x128f98 == 1) {
            addGameLog("已经购买过 =>" + _0x390977.logData);
            continue;
          }
          await wait(200);
        }
        if (_0x390977.name == "cs_exchange_activity_reward") {
          addGameLog("尝试购买: " + _0x390977.logData);
          await this.send_message(_0x390977.name, _0x390977.body);
          if (_0x390977.logData == "教皇门票") {
            await wait(200);
            await this.send_message("cs_combat_ladder_GhostDom", {
              type: 1,
              choice: 0
            });
            await wait(100);
            const _0x2ccd5f = [100975, 100976, 100977, 100978, 100979, 100980, 100981, 100982, 100983, 100984, 100985, 100986];
            let _0x3a8da3 = NumUtils.curStarSign() - 1;
            let _0x34a799 = xls.activityExchange.getItems().find(_0x176173 => _0x176173.consume == _0x2ccd5f[_0x3a8da3] + "_20");
            if (_0x34a799) {
              _0x390977.body.id = _0x34a799.id;
              await this.send_message(_0x390977.name, _0x390977.body);
            }
            const _0x37fa99 = [101282, 101283, 101284, 101285, 101286, 101287, 101288, 101289, 101290, 101291, 101292, 101293];
            let _0x4f9878 = xls.activityExchange.getItems().find(_0x28661e => _0x28661e.consume == _0x37fa99[_0x3a8da3] + "_20");
            if (_0x4f9878) {
              _0x390977.body.id = _0x4f9878.id;
              await this.send_message(_0x390977.name, _0x390977.body);
            }
          }
          await wait(200);
        }
        if (_0x390977.name == "cs_purchase_shop_item") {
          addGameLog("尝试购买: " + _0x390977.logData);
          await this.send_message(_0x390977.name, _0x390977.body);
          await wait(200);
        }
      }
      this.stop();
    } catch (_0x12b499) {
      logger(_0x12b499);
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
    let _0x35726e = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x5d1807 = SimpleAlertUi({});
      const _0x309ede = {
        text: "确定进行一键技能学习吗?",
        y: _0x5d1807.height / 11
      };
      var _0x89e9c1 = createLabel(_0x309ede);
      _0x89e9c1.x = _0x5d1807.width / 2 - _0x89e9c1.width / 2;
      _0x5d1807.addChild(_0x89e9c1);
      const _0x2f3fee = {
        text: "当前赛尔豆数量",
        y: _0x89e9c1.y + 30
      };
      var _0x303189 = createLabel(_0x2f3fee);
      _0x303189.x = _0x89e9c1.x;
      _0x5d1807.addChild(_0x303189);
      const _0x1e1efb = {
        text: MFC.userInfo._coin,
        y: _0x89e9c1.y + 30,
        textColor: 16776960
      };
      var _0x17d710 = createLabel(_0x1e1efb);
      _0x17d710.x = _0x303189.x + _0x303189.width + 10;
      _0x5d1807.addChild(_0x17d710);
      const _0x13dfdb = {
        text: "消耗赛尔豆数量",
        y: _0x303189.y + 30
      };
      var _0x3d7799 = createLabel(_0x13dfdb);
      _0x3d7799.x = _0x89e9c1.x;
      _0x5d1807.addChild(_0x3d7799);
      let _0x38e146 = petProperty.PetPropertyManager.getInstance().getAllSkillList();
      let _0x29cdac = petProperty.PetPropertyManager.getInstance()._curPetInfo.petId;
      for (let _0x3ac68a = 0; _0x3ac68a < petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills.length; _0x3ac68a++) {
        if (_0x38e146.indexOf(petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills[_0x3ac68a]) !== -1) {
          _0x38e146.splice(_0x38e146.indexOf(petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills[_0x3ac68a]), 1);
        }
      }
      let _0x805790 = 0;
      for (let _0x5aef2b = 0; _0x5aef2b < _0x38e146.length; _0x5aef2b++) {
        _0x805790 = _0x805790 + PetLearnSkillManager.getLearnSkillInfo(_0x38e146[_0x5aef2b], _0x29cdac).coin;
      }
      const _0x1d5bbd = {
        text: _0x805790,
        y: _0x303189.y + 30,
        textColor: 16776960
      };
      var _0x2713c7 = createLabel(_0x1d5bbd);
      _0x2713c7.x = _0x303189.x + _0x303189.width + 10;
      _0x5d1807.addChild(_0x2713c7);
      const _0x266087 = {
        text: "剩余赛尔豆数量",
        y: _0x3d7799.y + 30
      };
      var _0x34b96b = createLabel(_0x266087);
      _0x34b96b.x = _0x89e9c1.x;
      _0x5d1807.addChild(_0x34b96b);
      const _0x3147e3 = {
        text: MFC.userInfo._coin - _0x805790,
        y: _0x3d7799.y + 30,
        textColor: 16776960
      };
      var _0x319b84 = createLabel(_0x3147e3);
      _0x319b84.x = _0x303189.x + _0x303189.width + 10;
      _0x5d1807.addChild(_0x319b84);
      _0x5d1807.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x35726e.stop();
      }, function () {
        _0x35726e.prcessBody();
      }], null);
      _0x5d1807.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x12e712 = petProperty.PetPropertyManager.getInstance().getAllSkillList();
      let _0x54ae36 = petProperty.PetPropertyManager.getInstance()._curPetInfo.getTime;
      let _0x4c53c1 = petProperty.PetPropertyManager.getInstance()._curPetInfo.petId;
      let _0x503d9e = petProperty.PetPropertyManager.getInstance()._curPetInfo.level;
      for (let _0x2f50dc = 0; _0x2f50dc < petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills.length; _0x2f50dc++) {
        if (_0x12e712.indexOf(petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills[_0x2f50dc]) !== -1) {
          _0x12e712.splice(_0x12e712.indexOf(petProperty.PetPropertyManager.getInstance()._curPetInfo.totalSkills[_0x2f50dc]), 1);
        }
      }
      while (true) {
        if (_0x12e712.length == 0) {
          break;
        }
        if (PetLearnSkillManager.getLearnSkillInfo(_0x12e712[0], _0x4c53c1).level <= _0x503d9e) {
          if (UserManager.getInstance().userInfo.coin >= PetLearnSkillManager.getLearnSkillInfo(_0x12e712[0], _0x4c53c1).coin) {
            if (PetLearnSkillManager.getLearnSkillInfo(_0x12e712[0], _0x4c53c1).items) {
              if (ItemManager.getInstance().getItemNumById(PetLearnSkillManager.getLearnSkillInfo(_0x12e712[0], _0x4c53c1).items.split("_")[0]) < PetLearnSkillManager.getLearnSkillInfo(_0x12e712[0], _0x4c53c1).items.split("_")[1]) {
                addGameLog("缺少物品" + xls.item.getItem(PetLearnSkillManager.getLearnSkillInfo(_0x12e712[0], _0x4c53c1).items.split("_")[0]).name);
                break;
              }
            }
            if (_0x12e712[0] >= 70001 && _0x12e712[0] <= 70005) {
              if (MFC.attr.getAttr(MFC.attrType.foreverLeagueExecutionEnter) == 0) {
                addGameLog("审判任务未完成");
                break;
              }
            }
            addGameLog("开始学习=>\n" + petConfig.SkillConfig.getDef(_0x12e712[0]).name);
            const _0x455821 = {
              getTime: _0x54ae36,
              skillId: _0x12e712[0]
            };
            await this.send_message("cs_learn_skill", _0x455821);
            _0x12e712.shift();
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
    } catch (_0x350ddf) {
      logger(_0x350ddf);
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
    let _0x53a2bb = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x1a3c28 = SimpleAlertUi({});
      const _0x3db1d3 = {
        text: "自定义经验升级(当前精灵等级",
        y: _0x1a3c28.height / 11
      };
      var _0x4d22c3 = createLabel(_0x3db1d3);
      _0x4d22c3.x = _0x1a3c28.width / 2 - _0x4d22c3.width / 2 - 10;
      _0x1a3c28.addChild(_0x4d22c3);
      var _0x3211c3 = createLabel({
        text: expDevice.ExpDeviceManager.getInstance().curPet.level,
        y: _0x1a3c28.height / 11,
        textColor: 16776960,
        size: 20
      });
      _0x3211c3.x = _0x4d22c3.x + _0x4d22c3.width + 5;
      _0x1a3c28.addChild(_0x3211c3);
      const _0xa38e44 = {
        text: ")",
        y: _0x1a3c28.height / 11
      };
      var _0x32c35c = createLabel(_0xa38e44);
      _0x32c35c.x = _0x3211c3.x + _0x3211c3.width + 5;
      _0x1a3c28.addChild(_0x32c35c);
      const _0x35ef95 = {
        prompt: "请输入等级",
        width: 100,
        x: 30,
        y: _0x4d22c3.y + 30,
        storageKey: "inputzdyexp"
      };
      var _0x48828e = createEdit(_0x35ef95);
      _0x1a3c28.addChild(_0x48828e);
      const _0x1ef715 = {
        text: "输入等级不超过100\n输入等级不低于当前等级",
        y: _0x4d22c3.y + 30,
        textColor: 16776960,
        size: 12
      };
      var _0x4c7c26 = createLabel(_0x1ef715);
      _0x4c7c26.x = _0x48828e.x + _0x48828e.width + 20;
      _0x1a3c28.addChild(_0x4c7c26);
      const _0x29c052 = {
        text: "说明:比如精灵59,输入65,\n     就会升到65",
        y: _0x4c7c26.y + 40,
        textColor: 16776960,
        size: 16
      };
      var _0x7b97bc = createLabel(_0x29c052);
      _0x7b97bc.x = 30;
      _0x1a3c28.addChild(_0x7b97bc);
      _0x1a3c28.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x53a2bb.stop();
      }, function () {
        localStorage.setItem("inputzdyexp", _0x48828e.text);
        if (isNaN(parseInt(_0x48828e.text))) {
          MFC.bubbleAlert.showAlert("请输入有效等级");
          return true;
        } else if (parseInt(_0x48828e.text) > 100 || parseInt(_0x48828e.text) <= expDevice.ExpDeviceManager.getInstance().curPet.level) {
          MFC.bubbleAlert.showAlert("输入等级错误");
          return true;
        } else {
          _0x53a2bb.levelupnum = parseInt(_0x48828e.text) - expDevice.ExpDeviceManager.getInstance().curPet.level;
        }
        _0x53a2bb.upui();
      }], null);
      _0x1a3c28.showAlert();
    });
  }
  async upui() {
    super.start();
    let _0x3ef146 = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x4496fa = SimpleAlertUi({});
      const _0x452608 = {
        text: "确定进行经验升级吗?",
        y: _0x4496fa.height / 11
      };
      var _0x188b7b = createLabel(_0x452608);
      _0x188b7b.x = _0x4496fa.width / 2 - _0x188b7b.width / 2;
      _0x4496fa.addChild(_0x188b7b);
      const _0x2ec642 = {
        text: "当前拥有经验",
        y: _0x188b7b.y + 30
      };
      var _0x49ad30 = createLabel(_0x2ec642);
      _0x49ad30.x = _0x188b7b.x;
      _0x4496fa.addChild(_0x49ad30);
      var _0x28d3e7 = createLabel({
        text: expDevice.ExpDeviceManager.getInstance().totalExp,
        y: _0x188b7b.y + 30,
        textColor: 16776960
      });
      _0x28d3e7.x = _0x49ad30.x + _0x49ad30.width + 10;
      _0x4496fa.addChild(_0x28d3e7);
      const _0x58c975 = {
        text: "升级所需经验",
        y: _0x49ad30.y + 30
      };
      var _0xb9a213 = createLabel(_0x58c975);
      _0xb9a213.x = _0x188b7b.x;
      _0x4496fa.addChild(_0xb9a213);
      let _0x489eb1 = 0;
      for (let _0x590843 = 0; _0x590843 < this.levelupnum; _0x590843++) {
        if (expDevice.ExpDeviceManager.getInstance().curPet.level + _0x590843 == 100) {
          break;
        } else if (_0x590843 == 0) {
          _0x489eb1 = _0x489eb1 + Math.round(xls.exp.getItem(expDevice.ExpDeviceManager.getInstance().curPet.level).exp * PetConfig.getDef(expDevice.ExpDeviceManager.getInstance().curPet.petId).expNum) - expDevice.ExpDeviceManager.getInstance().curPet.exp;
        } else {
          _0x489eb1 = _0x489eb1 + Math.round(xls.exp.getItem(expDevice.ExpDeviceManager.getInstance().curPet.level + _0x590843).exp * PetConfig.getDef(expDevice.ExpDeviceManager.getInstance().curPet.petId).expNum);
        }
      }
      const _0x3f0335 = {
        text: _0x489eb1,
        y: _0x49ad30.y + 30,
        textColor: 16776960
      };
      var _0x22c4ea = createLabel(_0x3f0335);
      _0x22c4ea.x = _0x49ad30.x + _0x49ad30.width + 10;
      _0x4496fa.addChild(_0x22c4ea);
      const _0x229169 = {
        text: "剩余经验",
        y: _0xb9a213.y + 30
      };
      var _0x1d2115 = createLabel(_0x229169);
      _0x1d2115.x = _0x188b7b.x;
      _0x4496fa.addChild(_0x1d2115);
      var _0x377a51 = createLabel({
        text: expDevice.ExpDeviceManager.getInstance().totalExp - _0x489eb1,
        y: _0xb9a213.y + 30,
        textColor: 16776960
      });
      _0x377a51.x = _0x49ad30.x + _0x49ad30.width + 10;
      _0x4496fa.addChild(_0x377a51);
      _0x4496fa.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x3ef146.stop();
      }, function () {
        _0x3ef146.prcessBody();
      }], null);
      _0x4496fa.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x397f01 = 0;
      for (let _0x2249d8 = 0; _0x2249d8 < this.levelupnum; _0x2249d8++) {
        if (expDevice.ExpDeviceManager.getInstance().curPet.level + _0x2249d8 == 100) {
          break;
        } else if (_0x2249d8 == 0) {
          _0x397f01 = _0x397f01 + Math.round(xls.exp.getItem(expDevice.ExpDeviceManager.getInstance().curPet.level).exp * PetConfig.getDef(expDevice.ExpDeviceManager.getInstance().curPet.petId).expNum) - expDevice.ExpDeviceManager.getInstance().curPet.exp;
        } else {
          _0x397f01 = _0x397f01 + Math.round(xls.exp.getItem(expDevice.ExpDeviceManager.getInstance().curPet.level + _0x2249d8).exp * PetConfig.getDef(expDevice.ExpDeviceManager.getInstance().curPet.petId).expNum);
        }
      }
      if (_0x397f01 > expDevice.ExpDeviceManager.getInstance().totalExp) {
        addGameLog("所拥有经验不足以提升" + this.levelupnum + "级");
        let _0x183bd4 = this;
        MFC.alert.show("确定将所有经验进行升级吗", null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function (_0x20c863) {
          _0x183bd4.stop();
        }, function (_0x3a2c1f) {
          _0x183bd4.send_message("cs_pet_inject_exp", {
            getTime: expDevice.ExpDeviceManager.getInstance().curPet.getTime,
            addExp: expDevice.ExpDeviceManager.getInstance().totalExp
          });
          addGameLog("经验升级完毕");
          _0x183bd4.stop();
        }]);
      } else {
        await this.send_message("cs_pet_inject_exp", {
          getTime: expDevice.ExpDeviceManager.getInstance().curPet.getTime,
          addExp: _0x397f01
        });
        addGameLog("经验升级完毕");
        this.stop();
      }
    } catch (_0x2793ba) {}
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
    let _0x2240d7 = this;
    var _0x59a9e5 = getTouchs("_source", "item_frame_1_mask_png");
    if (_0x59a9e5.filter(function (_0x323739) {
      return _0x323739.$explicitBitmapHeight == 183 && _0x323739.$explicitBitmapWidth == 144;
    })[0].$parent._combinPetInfo == undefined) {
      MFC.alert.show("请先前往选择精灵\n选择一只目标精灵!");
      _0x2240d7.stop();
      return;
    } else {
      _0x2240d7.nowpet = _0x59a9e5.filter(function (_0x5a2c84) {
        return _0x5a2c84.$explicitBitmapHeight == 183 && _0x5a2c84.$explicitBitmapWidth == 144;
      })[0].$parent._combinPetInfo;
      _0x2240d7.needcoin = _0x59a9e5.filter(function (_0x40e07e) {
        return _0x40e07e.$explicitBitmapHeight == 183 && _0x40e07e.$explicitBitmapWidth == 144;
      })[0].$parent._needCoin;
      _0x2240d7.parent = _0x59a9e5.filter(function (_0x4feb4f) {
        return _0x4feb4f.$explicitBitmapHeight == 183 && _0x4feb4f.$explicitBitmapWidth == 144;
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
    logger(_0x59a9e5.filter(function (_0x309afe) {
      return _0x309afe.$explicitBitmapHeight == 183 && _0x309afe.$explicitBitmapWidth == 144;
    })[0].$parent._combinPetInfo);
    logger(_0x59a9e5.filter(function (_0x5e6371) {
      return _0x5e6371.$explicitBitmapHeight == 183 && _0x5e6371.$explicitBitmapWidth == 144;
    })[0].$parent);
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x2e17ba = SimpleAlertUi({
        width: 400,
        height: 350
      });
      const _0x27c0ff = {
        text: "确定进行一键基因重组吗?",
        y: _0x2e17ba.height / 11
      };
      var _0x3f1dc4 = createLabel(_0x27c0ff);
      _0x3f1dc4.x = _0x2e17ba.width / 2 - _0x3f1dc4.width / 2;
      _0x2e17ba.addChild(_0x3f1dc4);
      const _0x117dd3 = {
        prompt: "二级密码",
        x: 40,
        y: _0x3f1dc4.y + 30,
        width: 100
      };
      var _0x186922 = createEdit(_0x117dd3);
      _0x2e17ba.addChild(_0x186922);
      const _0x575864 = {
        text: "[没有二级密码不输入]",
        x: _0x186922.x + 120,
        y: _0x186922.y + 5
      };
      var _0x23a275 = createLabel(_0x575864);
      _0x2e17ba.addChild(_0x23a275);
      testBtn = new eui.Button();
      testBtn.x = _0x186922.x + 140 + _0x23a275.width;
      testBtn.y = _0x186922.y;
      testBtn.skinName = gethelpBtnSkinName();
      BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
        var _0x5b2eef = new geneCombin.GeneCombinRule();
        _0x5b2eef.$children[1].$children[1].textArr[0].text = "没有二级密码不输入\n二级密码为6位";
        _0x5b2eef.$children[1].$children[0].height = 61;
        _0x5b2eef.showRule();
        MFC.rootLayer.addChild(_0x5b2eef);
      });
      _0x2e17ba.addChild(testBtn);
      if (xls.geneRecombine.getItem(PetConfig.getDef(_0x2240d7.nowpet.petId).petClass).recombine == "1") {
        var _0x511a94 = createLabel({
          text: "当前精灵需消耗" + _0x59a9e5.filter(function (_0x1e64f4) {
            return _0x1e64f4.$explicitBitmapHeight == 183 && _0x1e64f4.$explicitBitmapWidth == 144;
          })[0].$parent._combinPetInfo.nick + "重组",
          x: 40,
          y: _0x186922.y + 50
        });
        _0x2e17ba.addChild(_0x511a94);
        const _0x2f20e7 = {
          prompt: "消耗精灵天赋",
          x: _0x511a94.x + _0x511a94.width + 10,
          y: _0x511a94.y,
          width: 100,
          storageKey: "costtalent"
        };
        var _0x3d2e3e = createEdit(_0x2f20e7);
        _0x2e17ba.addChild(_0x3d2e3e);
        testBtn = new eui.Button();
        testBtn.x = _0x186922.x + 140 + _0x23a275.width;
        testBtn.y = _0x511a94.y;
        testBtn.skinName = gethelpBtnSkinName();
        BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
          var _0x5351fc = new geneCombin.GeneCombinRule();
          _0x5351fc.$children[1].$children[1].textArr[0].text = "如果天赋输入26只会消耗26以下精灵重组(不包括26)";
          _0x5351fc.showRule();
          MFC.rootLayer.addChild(_0x5351fc);
        });
        _0x2e17ba.addChild(testBtn);
      } else if (xls.geneRecombine.getItem(PetConfig.getDef(_0x2240d7.nowpet.petId).petClass).recombine == "2") {
        var _0x511a94 = createLabel({
          text: "当前精灵需消耗精元" + xls.petEgg.getItem(xls.geneRecombine.getItem(PetConfig.getDef(this.nowpet.petId).petClass).eggId.split("_")[0]).name + "重组",
          x: 40,
          y: _0x186922.y + 50
        });
        _0x2e17ba.addChild(_0x511a94);
      } else {
        var _0x511a94 = createLabel({
          text: "当前精灵需消耗物品" + xls.item.getItem(xls.geneRecombine.getItem(PetConfig.getDef(this.nowpet.petId).petClass).itemId.split("_")[0]).name + "重组",
          x: 40,
          y: _0x186922.y + 50
        });
        _0x2e17ba.addChild(_0x511a94);
      }
      const _0x313bb1 = {
        prompt: "输入停止天赋",
        x: 40,
        y: _0x511a94.y + 40,
        width: 100,
        storageKey: "stoptalent"
      };
      var _0x27fcb8 = createEdit(_0x313bb1);
      _0x2e17ba.addChild(_0x27fcb8);
      testBtn = new eui.Button();
      testBtn.x = _0x27fcb8.x + _0x27fcb8.width + 30;
      testBtn.y = _0x27fcb8.y;
      testBtn.skinName = gethelpBtnSkinName();
      BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
        var _0x5f4b71 = new geneCombin.GeneCombinRule();
        _0x5f4b71.$children[1].$children[1].textArr[0].text = "如果天赋输入26会在重组达到26及以上停止(包括26!!!必须输入)";
        _0x5f4b71.showRule();
        MFC.rootLayer.addChild(_0x5f4b71);
      });
      _0x2e17ba.addChild(testBtn);
      const _0x5035dc = {
        prompt: "输入重组次数",
        x: _0x27fcb8.x + _0x27fcb8.width + 80,
        y: _0x511a94.y + 40,
        width: 100,
        storageKey: "cznum"
      };
      var _0x221b78 = createEdit(_0x5035dc);
      _0x2e17ba.addChild(_0x221b78);
      testBtn = new eui.Button();
      testBtn.x = _0x221b78.x + _0x221b78.width + 20;
      testBtn.y = _0x27fcb8.y;
      testBtn.skinName = gethelpBtnSkinName();
      BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
        var _0x45b3c5 = new geneCombin.GeneCombinRule();
        _0x45b3c5.$children[1].$children[1].textArr[0].text = "(不必须输入)输入次数不超过拥有数";
        _0x45b3c5.showRule();
        MFC.rootLayer.addChild(_0x45b3c5);
      });
      _0x2e17ba.addChild(testBtn);
      const _0x3ed8de = {
        text: "当前赛尔豆数量",
        x: 40,
        y: _0x221b78.y + 40
      };
      var _0xfda138 = createLabel(_0x3ed8de);
      _0x2e17ba.addChild(_0xfda138);
      const _0x186158 = {
        text: MFC.userInfo._coin,
        x: _0xfda138.x + _0xfda138.width + 20,
        y: _0x221b78.y + 40
      };
      var _0x361d92 = createLabel(_0x186158);
      _0x361d92.textColor = 16776960;
      _0x2e17ba.addChild(_0x361d92);
      const _0x16f609 = {
        prompt: "输入赛尔豆",
        x: 40,
        y: _0xfda138.y + 40,
        width: 100,
        storageKey: "coinnum"
      };
      var _0x18d6d9 = createEdit(_0x16f609);
      _0x2e17ba.addChild(_0x18d6d9);
      testBtn = new eui.Button();
      testBtn.x = _0x27fcb8.x + _0x27fcb8.width + 30;
      testBtn.y = _0x18d6d9.y;
      testBtn.skinName = gethelpBtnSkinName();
      BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, () => {
        var _0x560aa8 = new geneCombin.GeneCombinRule();
        _0x560aa8.$children[1].$children[1].textArr[0].text = "(不必须输入)决定会不会破产关键,不输入会重组到豆子不足停止";
        _0x560aa8.showRule();
        MFC.rootLayer.addChild(_0x560aa8);
      });
      _0x2e17ba.addChild(testBtn);
      _0x2e17ba.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x2240d7.stop();
      }, function () {
        if (xls.geneRecombine.getItem(PetConfig.getDef(_0x2240d7.nowpet.petId).petClass).recombine == "1") {
          if (isNaN(parseInt(_0x3d2e3e.text)) || parseInt(_0x3d2e3e.text) > 31 || parseInt(_0x3d2e3e.text) < 0) {
            MFC.bubbleAlert.showAlert("请输入有效消耗天赋");
            addGameLog("请输入有效消耗天赋");
            this.stop();
          } else {
            localStorage.setItem("costtalent", _0x3d2e3e.text);
            _0x2240d7.costtalent = parseInt(_0x3d2e3e.text);
          }
        }
        if (isNaN(parseInt(_0x27fcb8.text)) || parseInt(_0x27fcb8.text) > 31 || parseInt(_0x27fcb8.text) < 0) {
          MFC.bubbleAlert.showAlert("请输入有效停止天赋");
          addGameLog("请输入有效停止天赋");
          this.stop();
        } else {
          localStorage.setItem("stoptalent", _0x27fcb8.text);
          _0x2240d7.stoptalent = parseInt(_0x27fcb8.text);
        }
        if (_0x221b78.text != "") {
          if (isNaN(parseInt(_0x221b78.text))) {
            MFC.bubbleAlert.showAlert("请输入有效重组次数");
            addGameLog("请输入有效重组次数");
            this.stop();
          } else {
            localStorage.setItem("cznum", _0x221b78.text);
            _0x2240d7.cznum = parseInt(_0x221b78.text);
          }
        }
        if (_0x18d6d9.text != "") {
          if (isNaN(parseInt(_0x18d6d9.text))) {
            MFC.bubbleAlert.showAlert("请输入有效赛尔豆数");
            addGameLog("请输入有效赛尔豆数");
            this.stop();
          } else {
            localStorage.setItem("coinnum", _0x18d6d9.text);
            _0x2240d7.coinnum = parseInt(_0x18d6d9.text);
          }
        }
        if (_0x186922.text != "") {
          if (isNaN(parseInt(_0x186922.text)) || _0x186922.text.length !== 6) {
            MFC.bubbleAlert.showAlert("请输入有效二级密码");
            addGameLog("请输入有效二级密码");
            this.stop();
          }
          _0x2240d7.input2Pwd = parseInt(_0x186922.text) + "";
        }
        _0x2240d7.prcessBody();
      }], null);
      _0x2e17ba.showAlert();
    });
  }
  async prcessBody() {
    try {
      let _0x485350 = false;
      if (this.input2Pwd) {
        let _0x47cc72 = await this.send_message("cs_2nd_passwd", {
          option: 2,
          param: this.input2Pwd
        });
        if (JSON.stringify(_0x47cc72).indexOf("二级密码解锁失败") != -1) {
          addGameLog("二级密码错误");
          MFC.bubbleAlert.showAlert("二级密码错误");
        } else {
          _0x485350 = true;
        }
      } else {
        _0x485350 = true;
      }
      if (_0x485350) {
        if (!this.cznum) {
          this.cznum = 99999;
        }
        if (!this.coinnum) {
          this.coinnum = 0;
        }
        let _0x1eb7a3 = 0;
        while (1) {
          let _0x561442 = this.costtalent;
          if (MFC.userInfo._coin < this.coinnum) {
            addGameLog("赛尔豆达到停止");
            break;
          } else if (this.nowpet.talent >= this.stoptalent) {
            addGameLog("天赋达到停止");
            break;
          } else if (_0x1eb7a3 > this.cznum) {
            addGameLog("次数达到停止");
            break;
          } else {
            if (this.needcoin > MFC.userInfo._coin) {
              addGameLog("赛尔豆不足");
              break;
            } else if (xls.geneRecombine.getItem(PetConfig.getDef(this.nowpet.petId).petClass).recombine == "1") {
              if (this.parent._currPetList.filter(function (_0x465db9) {
                return _0x465db9.talent < _0x561442;
              }).length == 0) {
                addGameLog("没有精灵可以重组");
                break;
              } else {
                let _0x456134 = this.parent._currPetList.filter(function (_0x464050) {
                  return _0x464050.talent < _0x561442;
                }).sort((_0x15923c, _0xe174b4) => _0x15923c.talent - _0xe174b4.talent);
                addGameLog("即将消耗" + _0x456134[0].nick + "天赋" + _0x456134[0].talent);
                let _0x38047f = await this.send_message("cs_gene_reconf", {
                  getTime: this.nowpet.getTime,
                  costType: 1,
                  param: [_0x456134[0].getTime]
                });
                if (JSON.stringify(_0x38047f).indexOf("请先解锁二级密码") != -1) {
                  addGameLog("二级密码错误");
                  MFC.bubbleAlert.showAlert("二级密码错误");
                  break;
                }
                addGameLog("剩余赛尔豆" + MFC.userInfo._coin);
              }
            } else if (xls.geneRecombine.getItem(PetConfig.getDef(this.nowpet.petId).petClass).recombine == "2") {
              let _0x4b76da = this.parent.combinInfo.eggId.split("_")[0];
              let _0x2b4ec7 = this.parent.combinInfo.eggId.split("_")[1];
              if (PetManager.getInstance().getAllEggs().filter(function (_0x84508b) {
                return _0x84508b.eggId == _0x4b76da;
              }).length < _0x2b4ec7) {
                addGameLog(xls.petEgg.getItem(_0x4b76da).name + "不足");
                break;
              } else {
                let _0x11495b = await this.send_message("cs_gene_reconf", {
                  getTime: this.nowpet.getTime,
                  costType: 2,
                  param: [PetManager.getInstance().getAllEggs().filter(function (_0x310020) {
                    return _0x310020.eggId == _0x4b76da;
                  })[0].getTime]
                });
                if (JSON.stringify(_0x11495b).indexOf("请先解锁二级密码") != -1) {
                  addGameLog("二级密码错误");
                  MFC.bubbleAlert.showAlert("二级密码错误");
                  break;
                }
                addGameLog("剩余赛尔豆" + MFC.userInfo._coin);
              }
            } else {
              let _0x57a888 = this.parent.combinInfo.itemId.split("_")[0];
              let _0x54a908 = this.parent.combinInfo.itemId.split("_")[1];
              let _0x3d9573 = this.nowpet.petId;
              if (ItemManager.getInstance().getItemNumById(_0x57a888) < _0x54a908) {
                addGameLog(xls.item.getItem(xls.geneRecombine.getItem(PetConfig.getDef(_0x3d9573).petClass).itemId.split("_")[0]).name + "不足");
                break;
              } else {
                let _0x137ca6 = await this.send_message("cs_gene_reconf", {
                  getTime: this.nowpet.getTime,
                  costType: 3,
                  param: []
                });
                if (JSON.stringify(_0x137ca6).indexOf("请先解锁二级密码") != -1) {
                  addGameLog("二级密码错误");
                  MFC.bubbleAlert.showAlert("二级密码错误");
                  break;
                }
                addGameLog("剩余赛尔豆" + MFC.userInfo._coin);
              }
            }
            _0x1eb7a3++;
          }
        }
      }
      addGameLog("基因重组完毕");
      this.stop();
    } catch (_0x2bff8c) {}
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
    let _0x1ea7ee = this;
    RES.loadConfig("resource/ui/personal_center.json", "resource/ui/").then(() => {
      var _0x62e456 = SimpleAlertUi({
        height: 230,
        width: 300
      });
      const _0x301ab2 = {
        text: "分解遗物",
        y: _0x62e456.height / 11
      };
      var _0x434074 = createLabel(_0x301ab2);
      _0x434074.x = _0x62e456.width / 2 - _0x434074.width / 2;
      _0x62e456.addChild(_0x434074);
      const _0x53212a = {
        text: "当前遗物:",
        x: 40,
        y: _0x434074.y + 30
      };
      var _0x20f208 = createLabel(_0x53212a);
      _0x62e456.addChild(_0x20f208);
      var _0x47b88e = createLabel({
        text: xls.itemRelic.getItem(holeRelicBag.crtSeRelics).name,
        x: _0x20f208.x + _0x20f208.width + 10,
        y: _0x434074.y + 20,
        bold: true,
        stroke: 1,
        strokeColor: 9297,
        textColor: 16711680,
        size: 23,
        fontFamily: "楷体",
        bold: 1
      });
      _0x62e456.addChild(_0x47b88e);
      const _0x1d1472 = {
        text: "遗物数量:",
        x: 40,
        y: _0x20f208.y + 30
      };
      var _0x3cd5d4 = createLabel(_0x1d1472);
      _0x62e456.addChild(_0x3cd5d4);
      var _0x5bf6fb = createLabel({
        text: HoleItemManager.getInstance().getItemNumById(holeRelicBag.crtSeRelics[0]),
        x: _0x20f208.x + _0x20f208.width + 10,
        y: _0x3cd5d4.y,
        bold: true,
        stroke: 1,
        strokeColor: 9297,
        textColor: 16711680,
        size: 23,
        fontFamily: "楷体",
        bold: 1
      });
      _0x62e456.addChild(_0x5bf6fb);
      const _0x1eb836 = {
        text: "是否保留一个",
        x: 40,
        y: _0x5bf6fb.y + 30
      };
      var _0x47daba = createLabel(_0x1eb836);
      _0x62e456.addChild(_0x47daba);
      const _0x4b923b = {
        x: _0x47daba.x + _0x47daba.width + 10,
        y: _0x47daba.y,
        selected: true,
        storageKey: "yiwufenjie"
      };
      var _0x4d4b1c = createToggle(_0x4b923b);
      _0x62e456.addChild(_0x4d4b1c);
      _0x62e456.setContent(null, null, [alert.BUTTONS.btn_QuXiao, alert.BUTTONS.btn_QueRen], [function () {
        _0x1ea7ee.stop();
      }, function () {
        localStorage.setItem("yiwufenjie", _0x4d4b1c.selected);
        _0x1ea7ee.fjstatus = _0x4d4b1c.selected;
        _0x1ea7ee.prcessBody();
      }], null);
      _0x62e456.showAlert();
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
// TOLOOK
setInterval(function () {
  _0x127f93();
}, 4000);
function wait(_0x314afa) {
  return new Promise(_0x52ebcb => // TOLOOK
  setTimeout(() => _0x52ebcb(), _0x314afa));
}
function SimpleAlertUi(_0x1924bf) {
  let _0x352a5c = new alert.SimpleAlert();
  _0x352a5c.initialize(alert.ALERT_ROOT);
  _0x352a5c.effectTrigger.showEffect = alert.SHOW_EFFECT;
  _0x352a5c.effectTrigger.hideEffect = alert.HIDE_EFFECT;
  if (_0x1924bf.width) {
    _0x352a5c.applicationWidth = _0x1924bf.width;
  }
  if (_0x1924bf.height) {
    _0x352a5c._minHeight = _0x1924bf.height;
    _0x352a5c.height = _0x1924bf.height;
  }
  return _0x352a5c;
}
function createLabel(_0x348cfe) {
  let _0x5d2400 = new eui.Label();
  _0x5d2400.lineSpacing = 3;
  _0x5d2400.size = 16;
  _0x5d2400.textColor = 16777215;
  _0x5d2400.touchEnabled = false;
  Object.keys(_0x348cfe).forEach(_0x51cc25 => {
    _0x5d2400[_0x51cc25] = _0x348cfe[_0x51cc25];
  });
  return _0x5d2400;
}
function gethelpBtnSkinName() {
  return function (_0x22b429) {
    function _0x520f75() {
      _0x22b429.call(this);
      this.skinParts = [];
      this.elementsContent = [this._Image1_i()];
      this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "common_hd_questionmark_button_nor2_png")])];
    }
    __extends(_0x520f75, _0x22b429);
    _0x520f75.prototype._Image1_i = function () {
      let _0x24ba8a = new eui.Image();
      this._Image1 = _0x24ba8a;
      _0x24ba8a.scaleX = 0.5;
      _0x24ba8a.scaleY = 0.5;
      _0x24ba8a.source = "common_hd_questionmark_button_nor1_png";
      return _0x24ba8a;
    };
    return _0x520f75;
  }(eui.Skin);
}
function createToggle(_0x1a8b69) {
  let _0x28723e = new eui.ToggleButton();
  _0x28723e.skinName = getCheckBoxSkinName();
  Object.keys(_0x1a8b69).forEach(_0x185f8e => {
    _0x28723e[_0x185f8e] = _0x1a8b69[_0x185f8e];
  });
  if (_0x1a8b69.storageKey) {
    if (_0x1a8b69.selected != undefined) {
      _0x28723e.selected = localStorage.getItem(_0x1a8b69.storageKey) !== null ? JSON.parse(localStorage.getItem(_0x1a8b69.storageKey)) : _0x28723e.selected;
    } else {
      _0x28723e.selected = localStorage.getItem(_0x1a8b69.storageKey) !== null ? JSON.parse(localStorage.getItem(_0x1a8b69.storageKey)) : false;
    }
  }
  return _0x28723e;
}
function createRadio(_0x73a064) {
  let _0x1a8fbc = new eui.RadioButton();
  _0x1a8fbc.skinName = getRadioBoxSkinName();
  Object.keys(_0x73a064).forEach(_0x174228 => {
    _0x1a8fbc[_0x174228] = _0x73a064[_0x174228];
  });
  if (_0x73a064.storageKey) {
    if (_0x73a064.selected != undefined) {
      _0x1a8fbc.selected = localStorage.getItem(_0x73a064.storageKey) !== null ? JSON.parse(localStorage.getItem(_0x73a064.storageKey)) : _0x73a064.selected;
    } else {
      _0x1a8fbc.selected = localStorage.getItem(_0x73a064.storageKey) !== null ? JSON.parse(localStorage.getItem(_0x73a064.storageKey)) : false;
    }
  }
  return _0x1a8fbc;
}
function createEdit(_0x1329f7) {
  let _0x28970c = new eui.EditableText();
  _0x28970c.alpha = 1;
  _0x28970c.blendMode = "blendMode";
  _0x28970c.lineSpacing = 3;
  _0x28970c.prompt = "对战次数";
  _0x28970c.promptColor = 16777215;
  _0x28970c.size = 16;
  _0x28970c.textAlign = "center";
  _0x28970c.textColor = 16777215;
  _0x28970c.verticalAlign = "middle";
  _0x28970c.background = true;
  _0x28970c.backgroundColor = 6710886;
  Object.keys(_0x1329f7).forEach(_0x5bf20a => {
    _0x28970c[_0x5bf20a] = _0x1329f7[_0x5bf20a];
  });
  if (_0x1329f7.storageKey) {
    _0x28970c.text = localStorage.getItem(_0x1329f7.storageKey);
  }
  return _0x28970c;
}
function getCheckBoxSkinName() {
  return function (_0x17b329) {
    function _0x479ad8() {
      _0x17b329.call(this);
      this.skinParts = [];
      this.elementsContent = [this._Image1_i()];
      this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "personal_center_setup_toggle_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 53), new eui.SetProperty("_Image1", "height", 20)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "personal_center_setup_toggle_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 53), new eui.SetProperty("_Image1", "height", 20)]), new eui.State("disabled", [])];
    }
    __extends(_0x479ad8, _0x17b329);
    _0x479ad8.prototype._Image1_i = function () {
      let _0x47f947 = new eui.Image();
      this._Image1 = _0x47f947;
      return _0x47f947;
    };
    return _0x479ad8;
  }(eui.Skin);
}
function getTextBtnSkinName(_0x23b241) {
  return function (_0x196ec6) {
    function _0x234cd2() {
      _0x196ec6.call(this);
      this.skinParts = [];
      const _0x447cae = {
        text: _0x23b241,
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
      let _0x79b638 = createLabel(_0x447cae);
      _0x79b638.x = 50 - _0x79b638.width / 2;
      this.elementsContent = [this._Image1_i(), _0x79b638];
      this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_blue_down_105_png"), new eui.SetProperty("_Image2", "source", "lineup_txt_hover_png")])];
    }
    __extends(_0x234cd2, _0x196ec6);
    _0x234cd2.prototype._Image1_i = function () {
      let _0x9e769b = new eui.Image();
      this._Image1 = _0x9e769b;
      _0x9e769b.source = "button_blue_up_105_png";
      return _0x9e769b;
    };
    return _0x234cd2;
  }(eui.Skin);
}
function getTextBtnNullImageSkinName(_0xc1bba4) {
  return function (_0x5ef088) {
    function _0x382ddf() {
      _0x5ef088.call(this);
      this.skinParts = [];
      const _0x5994c0 = {
        text: _0xc1bba4,
        x: 0,
        y: 0,
        bold: true,
        stroke: 1,
        strokeColor: 9297,
        textColor: 16776960,
        size: 14,
        fontFamily: "楷体",
        bold: 1,
        textAlign: "center"
      };
      let _0x238149 = createLabel(_0x5994c0);
      this.elementsContent = [_0x238149];
      this.states = [new eui.State("up", []), new eui.State("down", [new eui.SetProperty("_Image1", "source", "button_blue_down_105_png"), new eui.SetProperty("_Image2", "source", "lineup_txt_hover_png")])];
    }
    __extends(_0x382ddf, _0x5ef088);
    return _0x382ddf;
  }(eui.Skin);
}
function getRealAndBeReal(_0x43a3a2) {
  if (_0x43a3a2 == 1) {
    _0x43a3a2 = {
      color: 65535,
      text: "普通 " + _0x43a3a2
    };
  }
  if (_0x43a3a2 < 1) {
    _0x43a3a2 = {
      color: 13882323,
      text: "微弱 " + _0x43a3a2
    };
  }
  if (_0x43a3a2 > 1) {
    _0x43a3a2 = {
      color: 16711680,
      text: "克制 " + _0x43a3a2
    };
  }
  return _0x43a3a2;
}
function getRadioBoxSkinName() {
  let _0x4c6ae4 = function (_0x5dbd5b) {
    function _0x3a29e4() {
      _0x5dbd5b.call(this);
      this.skinParts = [];
      this.elementsContent = [this._Image1_i()];
      this.states = [new eui.State("up", [new eui.SetProperty("_Image1", "source", "personal_center_setup_checkbox_up_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 0), new eui.SetProperty("_Image1", "width", 20), new eui.SetProperty("_Image1", "height", 21)]), new eui.State("down", [new eui.SetProperty("_Image1", "source", "personal_center_setup_checkbox_down_png"), new eui.SetProperty("_Image1", "x", 0), new eui.SetProperty("_Image1", "y", 1), new eui.SetProperty("_Image1", "width", 20), new eui.SetProperty("_Image1", "height", 20)]), new eui.State("disabled", [])];
    }
    __extends(_0x3a29e4, _0x5dbd5b);
    _0x3a29e4.prototype._Image1_i = function () {
      let _0x3c55fa = new eui.Image();
      this._Image1 = _0x3c55fa;
      return _0x3c55fa;
    };
    return _0x3a29e4;
  }(eui.Skin);
  return _0x4c6ae4;
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
    let _0x13e7d3 = egret.HtmlTextParser;
    winLog.txtMsg.textFlow = new _0x13e7d3().parser(winLog.strMsg);
    window.gameLog = winLog;
    sta = winLog.$stage;
  });
}
function addGameLog(_0xe40ced) {
  try {
    if (winLog.strMsg.split("\n").length > 255) {
      let _0xf443db = winLog.strMsg.split("\n");
      _0xf443db.splice(_0xf443db.length - 100);
      winLog.strMsg = _0xf443db.join("\n");
    }
  } catch (_0x631eb8) {
    console.error(_0x631eb8);
  }
  winLog.strMsg = "<font color='#bbff00'>[" + formatTime(new Date().getTime()) + "]</font><font color='#FFFFFF'>" + _0xe40ced + "</font>\n" + winLog.strMsg;
  let _0x510c84 = egret.HtmlTextParser;
  winLog.txtMsg.textFlow = new _0x510c84().parser(winLog.strMsg);
}
function formatTime(_0x42e3a3) {
  var _0x580750 = new Date(_0x42e3a3);
  var _0x34a6c6 = _0x580750.getHours();
  var _0x5d4f5d = _0x580750.getMinutes();
  var _0x384fb3 = _0x580750.getSeconds();
  if (_0x34a6c6 < 10) {
    _0x34a6c6 = "0" + _0x34a6c6;
  }
  if (_0x5d4f5d < 10) {
    _0x5d4f5d = "0" + _0x5d4f5d;
  }
  if (_0x384fb3 < 10) {
    _0x384fb3 = "0" + _0x384fb3;
  }
  return _0x34a6c6 + ":" + _0x5d4f5d + ":" + _0x384fb3;
}
function getSeerItemNum(_0x2a3163) {
  return ItemManager.getInstance().getItemNumById(_0x2a3163);
}
function randomCap(_0x4fe30e) {
  let _0x4f8225 = [];
  for (let _0x24ab36 = 0; _0x24ab36 < _0x4fe30e.length; _0x24ab36++) {
    if (getSeerItemNum(_0x4fe30e[_0x24ab36]) > 0) {
      _0x4f8225.push(_0x4fe30e[_0x24ab36]);
    }
  }
  if (_0x4f8225.length == 0) {
    return "NoCap";
  }
  let _0x3f02f9 = _0x4f8225[0];
  let _0x10f061 = _0x3f02f9 == "4001" ? "普通" : _0x3f02f9 == "4002" ? "中级" : _0x3f02f9 == "4003" ? "高级" : _0x3f02f9 == "4004" ? "无敌" : "";
  return {
    name: _0x10f061,
    num: getSeerItemNum(_0x3f02f9),
    itemId: _0x3f02f9
  };
}
function getTouchs(_0x47f45c, _0x3a6a7a) {
  var _0x4ff18c = [];
  function _0x5d1bc8(_0x1f3325) {
    var _0x1b1836 = _0x1f3325.$children;
    for (var _0x6de139 = 0; _0x6de139 < _0x1b1836.length; _0x6de139++) {
      var _0x229000 = _0x1b1836[_0x6de139];
      if (_0x229000 instanceof egret.DisplayObjectContainer) {
        _0x4ff18c.push(_0x229000);
        _0x5d1bc8(_0x229000);
      } else {}
    }
  }
  _0x5d1bc8(sta);
  var _0xa61a77 = [];
  for (let _0x4a6638 = 0; _0x4a6638 < _0x4ff18c.length; _0x4a6638++) {
    let _0x262464 = _0x4ff18c[_0x4a6638];
    if (_0x262464.$children) {
      let _0x105793 = _0x262464.$children;
      _0x105793.forEach(_0x37a5b0 => {
        try {
          if (_0x37a5b0[_0x47f45c + ""] && _0x37a5b0[_0x47f45c + ""] == _0x3a6a7a) {
            _0xa61a77.push(_0x37a5b0);
          }
        } catch (_0x436340) {}
      });
    }
  }
  if (_0xa61a77.length == 0) {
    return false;
  }
  return _0xa61a77;
}
function touchBtn(_0x19cdcd) {
  egret.TouchEvent.dispatchTouchEvent(_0x19cdcd, egret.TouchEvent.TOUCH_BEGIN, true, true, 111, 111, 0, true);
  egret.TouchEvent.dispatchTouchEvent(_0x19cdcd, egret.TouchEvent.TOUCH_TAP, true, true, 111, 111, 0, true);
  egret.TouchEvent.dispatchTouchEvent(_0x19cdcd, egret.TouchEvent.TOUCH_END, true, true, 111, 111, 0, true);
}
function splitArray(_0x4638a1, _0xb7781d) {
  const _0x1baf9f = [];
  for (let _0x58b187 = 0; _0x58b187 < _0x4638a1.length; _0x58b187 += _0xb7781d) {
    _0x1baf9f.push(_0x4638a1.slice(_0x58b187, _0x58b187 + _0xb7781d));
  }
  return _0x1baf9f;
}
async function findUIs(_0x4953a6, _0x2af4ff) {
  while (1) {
    await wait(100);
    var _0x77841a = getTouchs(_0x4953a6, _0x2af4ff);
    if (_0x77841a) {
      return _0x77841a;
    }
    if (!window.nowTask) {
      return false;
    }
  }
}
function getGoalPets(_0x2341c6) {
  let _0x7278ae = PetManager.getInstance().getAllPets();
  let _0x2556a2 = _0x7278ae.find(_0x487064 => {
    for (let _0x1c613c = 0; _0x1c613c < _0x2341c6.length; _0x1c613c++) {
      let _0x1032c8 = _0x2341c6[_0x1c613c].skills.every(_0x41a1c1 => _0x487064.skills.includes(_0x41a1c1)) && (_0x2341c6[_0x1c613c].features ? _0x2341c6[_0x1c613c].features.includes(_0x487064.featureId) : true);
      if (_0x1032c8) {
        return _0x1032c8;
      }
    }
  });
  return _0x2556a2;
}
function fixBattleRes(_0x598452) {
  let _0xdaf21f = _0x598452.result.playerInfos.find(_0x579955 => _0x579955.uid == _0x598452.uid__);
  if (!_0xdaf21f) {
    return _0x598452;
  }
  let _0x21ba75 = _0xdaf21f.teamFlag;
  let _0x2400f2 = _0x598452.result.processQueue.find(_0x9c1177 => _0x9c1177.uid == _0x598452.uid__);
  if (_0x598452.result.result != 0) {
    if (_0x21ba75 == 2 && (_0x598452.result.result == 1 || _0x598452.result.result == 2)) {
      _0x598452.result.result = 3 - _0x598452.result.result;
    }
    return _0x598452;
  }
  let _0x38ea71 = _0xdaf21f.crtPetIndex;
  if (_0x2400f2) {
    let _0x8b14c9 = _0x2400f2.opInfo;
    if (_0x8b14c9 && _0x8b14c9.opID == 1) {
      _0x38ea71 = _0x8b14c9.petIndex;
    }
  } else if (_0x598452.result.affects) {
    let _0x273047 = _0x598452.result.affects.find(_0x106b10 => _0x106b10.crtPetIndex != undefined && _0x106b10.uid == _0x598452.uid__);
    if (_0x273047) {
      _0x38ea71 = _0x273047.crtPetIndex;
    }
  }
  let _0x299fd7 = _0x598452.result.playerInfos.findIndex(_0x9cfc02 => _0x9cfc02.teamFlag === _0x21ba75);
  _0x598452.result.playerInfos[_0x299fd7].crtPetIndex = _0x38ea71;
  if (_0x2400f2) {
    let _0x3a91d8 = _0x2400f2.opInfo;
    if (_0x3a91d8) {
      if (_0x3a91d8.opID == 2) {
        let _0x298a9a = _0x2400f2.opInfo.addPP;
        if (_0x298a9a) {
          let _0x3499cb = _0xdaf21f.petInfos[_0x38ea71].useSkills;
          for (let _0x2fa277 = 0; _0x2fa277 < _0x3499cb.length; _0x2fa277++) {
            _0x3499cb[_0x2fa277].crtPP = _0x3499cb[_0x2fa277].crtPP + _0x298a9a;
            let _0x5d062c = petConfig.SkillConfig.getDef(j.id);
            let _0x8879b7 = parseInt(_0x5d062c.maxPP);
            if (_0x3499cb[_0x2fa277].crtPP > _0x8879b7) {
              _0x3499cb[_0x2fa277].crtPP = _0x8879b7;
            }
          }
          _0xdaf21f.petInfos[_0x38ea71].useSkills = _0x3499cb;
        }
      }
      if (_0x3a91d8.skillID) {
        _0xdaf21f.petInfos[_0x38ea71].useSkills.forEach(_0x268aa0 => {
          if (_0x268aa0.id == _0x3a91d8.skillID) {
            _0x268aa0.crtPP--;
          } else {
            "";
          }
        });
      }
    }
  }
  let _0x5c3fe3 = _0xdaf21f.petInfos[_0x38ea71].useSkills;
  let _0x1793b4 = [];
  for (let _0x370345 = 0; _0x370345 < _0x5c3fe3.length; _0x370345++) {
    let _0x1eae95 = petConfig.SkillConfig.getDef(_0x5c3fe3[_0x370345].id);
    _0x1793b4.push(_0x1eae95);
  }
  let _0x41c019 = Array.prototype.concat.apply([], _0x598452.result.processQueue.map(_0x32cecf => _0x32cecf.affects)).filter(_0x521907 => _0x521907.uid == _0x598452.uid__).map(_0xd3b719 => {
    if (_0xd3b719.onlySkill.length > 0) {
      _0xdaf21f.petInfos[_0x38ea71].useSkills.forEach(_0x163ff3 => {
        if (_0xd3b719.onlySkill.indexOf(_0x163ff3.id) != -1) {
          _0x163ff3.crtPP = _0x163ff3.crtPP + _0xd3b719.ppChange;
          let _0x135744 = _0x1793b4.find(_0xb4184b => _0xb4184b.id == _0x163ff3.id);
          if (_0x163ff3.crtPP > _0x135744.maxPP) {
            _0x163ff3.crtPP = parseInt(_0x135744.maxPP);
          }
          if (_0x163ff3.crtPP < 0) {
            _0x163ff3.crtPP = 0;
          }
        }
      });
      return 0;
    } else {
      return _0xd3b719.ppChange;
    }
  });
  let _0x192c87 = _0x41c019.reduce((_0x4a4025, _0x2c0cdc) => {
    return _0x4a4025 + _0x2c0cdc;
  }, 0);
  let _0x4584c2 = _0x598452.result.affects.filter(_0xb8a8ca => _0xb8a8ca.uid == _0x598452.uid__).map(_0x2e62dd => {
    if (_0x2e62dd.onlySkill.length > 0) {
      _0xdaf21f.petInfos[_0x38ea71].useSkills.forEach(_0x3dfcce => {
        if (_0x2e62dd.onlySkill.indexOf(_0x3dfcce.id) != -1) {
          _0x3dfcce.crtPP = _0x3dfcce.crtPP + _0x2e62dd.ppChange;
          let _0xc929b8 = _0x1793b4.find(_0xbd760f => _0xbd760f.id == _0x3dfcce.id);
          if (_0x3dfcce.crtPP > _0xc929b8.maxPP) {
            _0x3dfcce.crtPP = parseInt(_0xc929b8.maxPP);
          }
          if (_0x3dfcce.crtPP < 0) {
            _0x3dfcce.crtPP = 0;
          }
        }
      });
      return 0;
    } else {
      return _0x2e62dd.ppChange;
    }
  });
  let _0x303fda = _0x4584c2.reduce((_0x4af048, _0x18b206) => {
    return _0x4af048 + _0x18b206;
  }, 0);
  _0xdaf21f.petInfos[_0x38ea71].useSkills.forEach(_0x139271 => {
    _0x139271.crtPP = _0x139271.crtPP + _0x192c87 + _0x303fda;
    let _0x598471 = _0x1793b4.find(_0xeda367 => _0xeda367.id == _0x139271.id);
    if (_0x139271.crtPP > _0x598471.maxPP) {
      _0x139271.crtPP = parseInt(_0x598471.maxPP);
    }
    if (_0x139271.crtPP < 0) {
      _0x139271.crtPP = 0;
    }
  });
  _0x598452.result.playerInfos[_0x299fd7].petInfos = _0xdaf21f.petInfos;
  return _0x598452;
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
      const _0x1605c8 = {
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
      return _0x1605c8;
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
        } catch (_0x2ce75f) {
          MFC.bubbleAlert.showAlert("当前无任务");
        }
      },
      CopyContent(_0x4c6a9e) {
        if (_0x4c6a9e == 1) {
          var _0x208931 = this.address;
          this.addVis = false;
        }
        if (_0x4c6a9e == 2) {
          var _0x208931 = this.groups.join("\n");
          this.QQGroupsVis = false;
        }
        let _0x31c17b = document.createElement("input");
        document.body.appendChild(_0x31c17b);
        _0x31c17b.setAttribute("value", _0x208931);
        _0x31c17b.select();
        if (document.execCommand("copy")) {
          document.execCommand("copy");
        }
        document.body.removeChild(_0x31c17b);
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
        } catch (_0x64c934) {}
      },
      changeRate(_0xca8711) {
        this.nowRate = parseFloat(_0xca8711);
      },
      clickLove() {
        if (!this.show_love) {
          this.show_love = true;
        } else {
          this.show_love = false;
        }
      },
      handleTaskClick(_0x5e8f40) {
        console.log(_0x5e8f40.title + " clicked");
        let _0x36e466 = this.tasks.find(_0x41b5c3 => _0x41b5c3.title == _0x5e8f40.title);
        this.excuteTask(_0x36e466);
      },
      handleSubtaskClick(_0x139e93) {
        console.log(_0x139e93.title + " clicked");
        let _0x4f861c = this.tasks.flatMap(_0x14ca85 => _0x14ca85.subtasks).find(_0x43c4b8 => _0x43c4b8.title === _0x139e93.title);
        console.log(_0x4f861c);
        this.excuteTask(_0x4f861c);
      },
      excuteTask(_0x35bcd7) {
        if (_0x35bcd7.title == "交流群") {
          this.QQGroupsVis = true;
          return;
        }
        if (_0x35bcd7.title == "echo官网") {
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
              let _0x3d6385 = new Date(echoServerTime).getTime();
              if (_0x3d6385 <= echoNowTime) {
                MFC.bubbleAlert.showCustomAlert("已到期,请前往echo官网进行续费,并重启echo");
                return;
              }
            } else {
              MFC.bubbleAlert.showCustomAlert("请稍等,正在加载配置!");
              return;
            }
          } catch (_0x464439) {}
          if (window.nowTask) {
            MFC.bubbleAlert.showCustomAlert("当前已有任务正在运行!请先停止");
            addGameLog("当前已有任务正在运行,请先停止!");
          } else {
            eval("window.nowTask = new " + _0x35bcd7.taskName + "(); window.nowTask.start()");
          }
        } else {
          MFC.bubbleAlert.showCustomAlert("请先登录!");
        }
      },
      initializeTaskHandlers() {
        this.tasks.forEach(_0x3eefed => {
          _0x3eefed.onClick = () => this.handleTaskClick(_0x3eefed);
          _0x3eefed.subtasks.forEach(_0x3e8a0c => {
            _0x3e8a0c.onClick = () => this.handleSubtaskClick(_0x3e8a0c);
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
  function dragMouseDown(_0x281fc2) {
    _0x281fc2.preventDefault();
    document.addEventListener("mousemove", _0x4279fd);
    document.addEventListener("mouseup", _0x9e3b52);
    let _0x5e1551 = _0x281fc2.clientX;
    let _0x4d2af7 = _0x281fc2.clientY;
    function _0x4279fd(_0x13b6ec) {
      _0x13b6ec.preventDefault();
      const _0x14c771 = _0x5e1551 - _0x13b6ec.clientX;
      const _0xa59f55 = _0x4d2af7 - _0x13b6ec.clientY;
      _0x5e1551 = _0x13b6ec.clientX;
      _0x4d2af7 = _0x13b6ec.clientY;
      let _0x3e0f8a = menuEl.offsetTop - _0xa59f55;
      let _0x4240a2 = menuEl.offsetLeft - _0x14c771;
      _0x3e0f8a = Math.max(0, Math.min(_0x3e0f8a, pageHeight - menuEl.offsetHeight));
      _0x4240a2 = Math.max(0, Math.min(_0x4240a2, pageWidth - menuEl.offsetWidth));
      menuEl.style.top = _0x3e0f8a + "px";
      menuEl.style.left = _0x4240a2 + "px";
    }
    function _0x9e3b52() {
      document.removeEventListener("mouseup", _0x9e3b52);
      document.removeEventListener("mousemove", _0x4279fd);
    }
  }
  function touchStart(_0x151532) {
    startX = _0x151532.touches[0].clientX;
    startY = _0x151532.touches[0].clientY;
    menuEl.addEventListener("touchmove", touchMove);
    menuEl.addEventListener("touchend", touchEnd);
    menuEl.addEventListener("touchcancel", touchCancel);
  }
  function touchMove(_0x3e03ef) {
    const _0x18847d = _0x3e03ef.touches[0].clientX;
    const _0x434005 = _0x3e03ef.touches[0].clientY;
    const _0x1927aa = _0x18847d - startX;
    const _0x12734d = _0x434005 - startY;
    let _0x51ff8e = menuEl.offsetTop + _0x12734d;
    let _0x2b5113 = menuEl.offsetLeft + _0x1927aa;
    _0x51ff8e = Math.max(0, Math.min(_0x51ff8e, pageHeight - menuEl.offsetHeight));
    _0x2b5113 = Math.max(0, Math.min(_0x2b5113, pageWidth - menuEl.offsetWidth));
    menuEl.style.top = _0x51ff8e + "px";
    menuEl.style.left = _0x2b5113 + "px";
    startX = _0x18847d;
    startY = _0x434005;
  }
  function touchEnd(_0x315942) {
    menuEl.removeEventListener("touchmove", touchMove);
    menuEl.removeEventListener("touchend", touchEnd);
    menuEl.removeEventListener("touchcancel", touchCancel);
  }
  function touchCancel(_0x50efca) {
    menuEl.removeEventListener("touchmove", touchMove);
    menuEl.removeEventListener("touchend", touchEnd);
    menuEl.removeEventListener("touchcancel", touchCancel);
  }
}