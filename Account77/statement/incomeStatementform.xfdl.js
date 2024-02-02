(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("incomestatementform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_incomestatement", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"INCOME_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"EARLY_INCOME\" type=\"STRING\" size=\"256\"/><Column id=\"EARLY_INCOME_SUMMARY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","40","120","1080","507",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_incomestatement");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"2\" text=\"당기\"/><Cell col=\"3\" colspan=\"2\" text=\"전기\"/><Cell row=\"1\" text=\"과목\"/><Cell row=\"1\" col=\"1\" text=\"금액\"/><Cell row=\"1\" col=\"2\" text=\"잔액\"/><Cell row=\"1\" col=\"3\" text=\"금액\"/><Cell row=\"1\" col=\"4\" text=\"잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:INCOME\" textAlign=\"center\" displaytype=\"number\" maskeditformat=\"#,###0\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:INCOME_SUMMARY\" textAlign=\"center\" displaytype=\"number\" maskeditformat=\"#,###0\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:EARLY_INCOME\" textAlign=\"center\" displaytype=\"number\" maskeditformat=\"#,###0\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:EARLY_INCOME_SUMMARY\" textAlign=\"center\" displaytype=\"number\" maskeditformat=\"#,###0\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","800.00","76","228","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("회계기수를 조회해주세요.");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_font("bold 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1040.00","76","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_background("#5170ad");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","39.00","19","191","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","54.00","29","164","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("손익계산서");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"함초롬돋움\"");
            obj.set_border("3px none #000000");
            obj.set_background("transparent");
            obj.set_borderRadius("0px");
            obj.set_color("#fcfbfd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("incomeStatementform.xfdl","scripts::commonDate.xjs");
        this.registerScript("incomeStatementform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        application = nexacro.getApplication();

        this.incomestatementform_onload = function(obj,e){
        			application.gds_period.clearData();
        };



        this.Button00_onclick = function(obj,e){
        	application.gv_currentPeriod = application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");
        	var period = application.gv_currentPeriod;
        	var callresult = "SEARCH";

        		var id = "incomestatement";
        		var url = "svcStatement::incomestatement";
        		var resData = "";
        		var reqData = "ds_incomestatement=ds_incomestatement";
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
        	}
        	else if(trid=="incomestatement"){
         		if(ErrorCode<0){
         			alert("회계년도를 입력해 주세요 : "+ErrorMsg)
        			this.gfnOpen("periodpopup", "popup::periodpopupform.xfdl", "callback", null);
         		}

        	}
        	}



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.incomestatementform_onload,this);
            this.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("incomeStatementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
