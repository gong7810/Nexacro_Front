(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("currentAssetselectform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_asset", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","87.00","13","167","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("차량");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"휴먼엑스포\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","58","310","262",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_asset");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"155\"/><Column size=\"155\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산코드\"/><Cell col=\"1\" text=\"자산명\"/></Band><Band id=\"body\"><Cell text=\"bind:ASSET_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ASSET_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("currentAssetselectform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\popup\currentAssetselectform.xfdl
        /* 작 성 일 자 : 2024/01/26
        /* 작 성 자 명 : S.U
        /* 설       명 : 차량선택 폼
        /*************************************************************/

        application = nexacro.getApplication();

        this.currentAssetselectform_onload = function (obj,e)
        {
        	var id = "findCarAsset";
        	var url = "svcOperate::findCarAsset";
        	var reqData = "";
        	var resData = "ds_asset=ds_asset";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);
        };

        // 그리드 더블클릭
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var assetCode = this.Grid00.getCellText(this.Grid00.currentrow, 0);
        	var assetName = this.Grid00.getCellText(this.Grid00.currentrow, 1);

        	application.gv_assetCode = assetCode;
        	application.gv_assetName = assetName;

        	trace(application.gv_assetCode);
        	trace(application.gv_assetName);

        	this.close();
        };

        // esc로 창 닫기
        this.currentAssetselectform_onkeydown = function(obj,e)
        {
        	const a=e.keycode;
        	if(a==27){
        		this.close('esc');
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.currentAssetselectform_onload,this);
            this.addEventHandler("onkeydown",this.currentAssetselectform_onkeydown,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("currentAssetselectform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
