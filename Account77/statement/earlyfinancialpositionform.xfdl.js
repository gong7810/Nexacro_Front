(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("financialpositionform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_financialposition", this);
            obj._setContents("<ColumnInfo><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_BALANCE_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_BALANCE_SUMMARY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","75","31","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전기분재무상태표");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1000","76","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","120","1080","510",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_financialposition");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"270\"/><Column size=\"270\"/><Column size=\"270\"/><Column size=\"270\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"/><Cell col=\"2\" colspan=\"2\" text=\"당기\"/><Cell row=\"1\" text=\"분류\"/><Cell row=\"1\" col=\"1\" text=\"계정과목\"/><Cell row=\"1\" col=\"2\" text=\"세부금액\"/><Cell row=\"1\" col=\"3\" text=\"합계금액\"/></Band><Band id=\"body\"><Cell text=\"bind:CATEGORY\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BALANCE_DETAIL\"/><Cell col=\"3\" text=\"bind:BALANCE_SUMMARY\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","760","76","228","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("회계기수를 조회해주세요.");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_font("bold 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("earlyfinancialpositionform.xfdl","scripts::commonDate.xjs");
        this.registerScript("earlyfinancialpositionform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        application = nexacro.getApplication();

        this.financialpositionform_onload = function(obj,e)
        {
        	application.gds_period.clearData()

        };

        this.Button00_onclick = function(obj,e)
        {
        	var period=application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO")-1;
        	//alert("  선택한 기수 :"+period);
        	var callresult = "SEARCH";

        		var id = "selectfinancialposition";
        		var url = "svcStatement::financialposition";
        		var resData = "";
        		var reqData = "ds_financialposition=ds_financialposition";
        		var args = "period='"+period+"' callresult='"+callresult+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);
        };
        this.Edit00_oneditclick = function(obj,e)
        {
        	this.gfnOpen("periodpopup", "popup::periodpopupform.xfdl", "callback", null);
        };

        this.callback = function(trid, ErrorCode, ErrorMsg){

           if(trid == "periodpopup"){
        	this.Edit00.set_value(application.gds_period.getColumn(0,"FISCAL_YEAR"));
        	//this.Edit00.set_enable("false");
              if(ErrorCode<0){
                 alert("조회 실패 : "+ErrorMsg);
              }
           }
           }


        this.Edit00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.financialpositionform_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
        };
        this.loadIncludeScript("earlyfinancialpositionform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
