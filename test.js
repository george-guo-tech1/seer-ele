let testBtn = new eui.Button();
testBtn.x = MFC.rootLayer.width / 2 - 145;
testBtn.y = 60;
testBtn.skinName = getCheckBoxSkinName("捕   捉")
BC.addEvent(testBtn, testBtn, egret.TouchEvent.TOUCH_TAP, ()=>{
    MFC.alert.show("捕捉")
}),
MFC.rootLayer.addChild(testBtn)



function getCheckBoxSkinName(text) {
    return function (Base) {
        function Skin() {
            Base.call(this);
            this.skinParts = [];
            let label = new eui.Label();
            label.lineSpacing = 3;
            label.size = 17;
            label.textColor = 14745599;
            label.touchEnabled = false;
            label.textAlign = "center";
            label.text = text;
            label.x = 20;
            label.y = 10;
            label.bold = true;
            this.elementsContent = [this._Image1_i(), label];
            this.states = [
                new eui.State("up", []),
                new eui.State("down", [
                    new eui.SetProperty("_Image1", "source", "button_blue_down_105_png"),
                    new eui.SetProperty("_Image2", "source", "lineup_txt_hover_png")
                ])
            ];
        }
        __extends(Skin, Base);
        Skin.prototype._Image1_i = function () {
            let img = new eui.Image();
            this._Image1 = img;
            img.source = "button_blue_up_105_png";
            return img;
        };
        return Skin;
    }(eui.Skin);
}
