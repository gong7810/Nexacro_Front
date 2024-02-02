(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("depreciationScheduleform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_assetList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DEPRECIATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NORMAL_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCUMULATED_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assetDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_COST\" type=\"STRING\" size=\"256\"/><Column id=\"DEPRECIATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NORMAL_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCUMULATED_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","365.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("감가상각비 현황");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("currentAsset_information","23.00","103","1000","157",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_assetList");
            obj.set_nodatatext("조회된 자산이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정코드\"/><Cell col=\"1\" text=\"계정과목\"/><Cell col=\"2\" text=\"기초가액\"/><Cell col=\"3\" text=\"전기말상각누계액\"/><Cell col=\"4\" text=\"전기말장부가액\"/><Cell col=\"5\" text=\"감가상각비누계액\"/><Cell col=\"6\" text=\"당기말상각누계액\"/><Cell col=\"7\" text=\"미상각잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_CODE\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"2\" text=\"bind:ACQUISITION_COST\"/><Cell col=\"3\" text=\"bind:DEPRECIATION\"/><Cell col=\"4\" text=\"bind:BOOK_VALUE\"/><Cell col=\"5\" text=\"bind:NORMAL_AMORTIZATION\"/><Cell col=\"6\" text=\"bind:ACCUMULATED_AMORTIZATION\"/><Cell col=\"7\" text=\"bind:BOOK_VALUE_END\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("currentAssetDetail_information","23.00","310","1000","157",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_assetDetailList");
            obj.set_nodatatext("자산을 선택해주세요");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산코드\"/><Cell col=\"1\" text=\"자산명\"/><Cell col=\"2\" text=\"기초가액\"/><Cell col=\"3\" text=\"전기말상각누계액\"/><Cell col=\"4\" text=\"전기말장부가액\"/><Cell col=\"5\" text=\"감가상각비누계액\"/><Cell col=\"6\" text=\"당기말상각누계액\"/><Cell col=\"7\" text=\"미상각잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:ASSET_CODE\"/><Cell col=\"1\" text=\"bind:ASSET_NAME\"/><Cell col=\"2\" text=\"bind:ACQUISITION_COST\"/><Cell col=\"3\" text=\"bind:DEPRECIATION\"/><Cell col=\"4\" text=\"bind:BOOK_VALUE\"/><Cell col=\"5\" text=\"bind:NORMAL_AMORTIZATION\"/><Cell col=\"6\" text=\"bind:ACCUMULATED_AMORTIZATION\"/><Cell col=\"7\" text=\"bind:BOOK_VALUE_END\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,600,this,function(p){});
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
        this.registerScript("depreciationScheduleform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\operate\depreciationScheduleform.xfdl
        /* 작 성 일 자 : 2024/01/22
        /* 작 성 자 명 : S.U
        /* 설       명 : 감가상각비 현황 폼
        /*************************************************************/

        this.depreciationScheduleform_onload = function ()
        {
        	var id = "findDepreciationList";
        	var url = "svcOperate::findDepreciationList";
        	var reqData ="";
        	var resData ="ds_assetList=ds_asset";
        	var args = "";
        	var callback = "onload_callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);
        };

        // 계정별 자산목록
        this.currentAsset_information_oncellclick = function (obj,e)
        {
        	var accountCode = this.currentAsset_information.getCellText(this.currentAsset_information.currentrow, 0); // 행의 header의 index로 접근해 값 추출
        	trace(accountCode);

        	var id = "selectDepreciationList";
        	var url = "svcOperate::selectDepreciationList";
        	var reqData ="";
        	var resData ="ds_assetDetailList=ds_asset";
        	var args = "accountCode="+accountCode;
        	var callback = "onload_callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.depreciationScheduleform_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.currentAsset_information.addEventHandler("oncellclick",this.currentAsset_information_oncellclick,this);
        };
        this.loadIncludeScript("depreciationScheduleform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
