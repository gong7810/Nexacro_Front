(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("currentAssetManagementform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_assetList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRESS\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DEPRECIATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NORMAL_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCUMULATED_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","405.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고정자산관리대장");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("currentAsset_information","40.00","85","1020","405",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_nodatatext("조회된 자산이 없습니다");
            obj.set_binddataset("ds_assetList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정코드\"/><Cell col=\"1\" text=\"계정과목\"/><Cell col=\"2\" text=\"자산코드\"/><Cell col=\"3\" text=\"자산명\"/><Cell col=\"4\" text=\"취득일자\"/><Cell col=\"5\" text=\"기초가액\"/><Cell col=\"6\" text=\"전기말상각누계액\"/><Cell col=\"7\" text=\"전기말장부가액\"/><Cell col=\"8\" text=\"당기감가상각비\"/><Cell col=\"9\" text=\"당기말상각누계액\"/><Cell col=\"10\" text=\"당기말장부가액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_CODE\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"2\" text=\"bind:ASSET_CODE\"/><Cell col=\"3\" text=\"bind:ASSET_NAME\"/><Cell col=\"4\" text=\"bind:PROGRESS\"/><Cell col=\"5\" text=\"bind:ACQUISITION_COST\"/><Cell col=\"6\" text=\"bind:DEPRECIATION\"/><Cell col=\"7\" text=\"bind:BOOK_VALUE\"/><Cell col=\"8\" text=\"bind:NORMAL_AMORTIZATION\"/><Cell col=\"9\" text=\"bind:ACCUMULATED_AMORTIZATION\"/><Cell col=\"10\" text=\"bind:BOOK_VALUE_END\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("currentAssetManagementform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\operate\currentAssetManagementform.xfdl
        /* 작 성 일 자 : 2024/01/23
        /* 작 성 자 명 : S.U
        /* 설       명 : 고정자산관리대장 폼
        /*************************************************************/

        this.currentAssetManagementform_onload = function (obj,e)
        {
        	var id = "findCurrentAssetLedgerList";
        	var url = "svcOperate::findCurrentAssetLedgerList";
        	var resData ="";
        	var reqData ="ds_assetList=ds_asset";
        	var args = "";
        	var callback = "onload_callbackFunc";

        	this.transaction(id, url, resData, reqData, args, callback);


        	application.ds_assetList.filter('');
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.currentAssetManagementform_onload,this);
            this.currentAsset_information.addEventHandler("oncelldblclick",this.currentAsset_information_oncelldblclick,this);
        };
        this.loadIncludeScript("currentAssetManagementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
