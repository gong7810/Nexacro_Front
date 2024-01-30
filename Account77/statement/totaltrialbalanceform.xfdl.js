(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("totaltrialbalanceForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_totaltrialbalance", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEBITS_SUM_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"DEBITS_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREDITS_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CREDITS_SUM_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","1000","75","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_color("white");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            obj.set_background("#5170ad");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","120","1080","510",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_totaltrialbalance");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"차변\"/><Cell col=\"2\"/><Cell col=\"3\" colspan=\"2\" text=\"대변\"/><Cell row=\"1\" text=\"잔액\"/><Cell row=\"1\" col=\"1\" text=\"합계\"/><Cell row=\"1\" col=\"2\" text=\"과목\"/><Cell row=\"1\" col=\"3\" text=\"합계\"/><Cell row=\"1\" col=\"4\" text=\"잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:DEBITS_SUM_BALANCE\" textAlign=\"center\" maskeditformat=\"#,###0\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:DEBITS_SUM\" textAlign=\"center\" maskeditformat=\"#,###0\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"3\" text=\"bind:CREDITS_SUM\" textAlign=\"center\" maskeditformat=\"#,###0\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:CREDITS_SUM_BALANCE\" textAlign=\"center\" maskeditformat=\"#,###0\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","750","75","228","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("회계기수를 조회해주세요.");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_font("bold 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","-1","-1","191","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","14","9","164","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("합계잔액시산표");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"함초롬돋움\"");
            obj.set_border("3px none #000000");
            obj.set_background("transparent");
            obj.set_borderRadius("0px");
            obj.set_color("#fcfbfd");
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
        this.addIncludeScript("totaltrialbalanceform.xfdl","scripts::commonDate.xjs");
        this.registerScript("totaltrialbalanceform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        application = nexacro.getApplication();

        this.totaltrialbalanceForm_onload = function(obj,e)
        {
        	application.gds_period.clearData();
        	/*var period = application.gv_currentPeriod;
        	var callresult = "SEARCH";

        		var id = "totaltrialbalance";
        		var url = "svcSettlement::totaltrialbalance";
        		var resData = "";
        		var reqData = "ds_totaltrialbalance=ds_totaltrialbalance";
        		var args = "period='"+period+"' callresult='"+callresult+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);*/

        };

         this.Button00_onclick = function(obj,e)
         {

         	var accountPeriodNo=application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");
         	var callresult = "SEARCH";

         		var id = "totaltrialbalance";
         		var url = "svcStatement::totaltrialbalance";
        		var reqData = "";
         		var resData = "ds_totaltrialbalance=ds_totaltrialbalance1"; // 좌 넥사 ,  우 부트
        // 		var reqData = "ds_totaltrialbalance=ds_totaltrialbalance"; //  빠가 새끼들이 반대로 쳐 적어놨네
        //  		var resData = ""; // 조회 불가 수정 완료
         		var args = "accountPeriodNo='"+accountPeriodNo+"' callresult='"+callresult+"'";
         		var callback = "callback";
         		this.transaction(id, url, reqData, resData, args, callback);

         };


        this.Edit00_oneditclick = function(obj,e)
        {
        	this.gfnOpen("periodpopup", "popup::periodpopupform.xfdl", "callback", null);

        };



        this.callback = function(trid, ErrorCode, ErrorMsg){
         	 if(trid == "periodpopup"){
        	this.Edit00.set_value(application.gds_period.getColumn(0,"FISCAL_YEAR"));
        	}
        	else if(trid=="totaltrialbalance"){
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
            this.addEventHandler("onload",this.totaltrialbalanceForm_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("totaltrialbalanceform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
