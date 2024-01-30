(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("budgetapplform");
            this.set_titletext("New Form");
            this.set_borderRadius("10px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_budget", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGETING_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"M1BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M2BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M3BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M4BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M5BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M6BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M7BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M8BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M9BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M10BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M11BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M12BUDGET\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_budget1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGETING_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"M1BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M2BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M3BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M4BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M5BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M6BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M7BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M8BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M9BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M10BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M11BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M12BUDGET\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_budgetCode", this);
            obj._setContents("<ColumnInfo><Column id=\"BUDGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_03","202","65","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","-1","-1","178","60",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","98","89","80","14",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_background("#5eb2d3");
            obj.set_borderRadius("2px");
            obj.set_boxShadow("2px 2px 10px 0px #46babe");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","446","89","80","14",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_background("#5eb2d3");
            obj.set_borderRadius("2px");
            obj.set_boxShadow("2px 2px 10px 0px #46babe");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","806","109","117","13",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_background("#5eb2d3");
            obj.set_borderRadius("2px");
            obj.set_boxShadow("2px 2px 10px 0px #46babe");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","443","16","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","583","16","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","302","16","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","21","108","279","430",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_account");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"117\"/><Column size=\"143\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정 코드\"/><Cell col=\"1\" text=\"계정 과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","11","8","151","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("예산 신청");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"함초롬돋움\"");
            obj.set_border("3px none #000000");
            obj.set_background("transparent");
            obj.set_borderRadius("0px");
            obj.set_color("#fcfbfd");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","670","140","366","371",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_budget1");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"132\"/><Column size=\"50\"/><Column size=\"132\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" text=\"금액\"/><Cell col=\"2\" text=\"월\"/><Cell col=\"3\" text=\"금액\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"01\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:M1BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell col=\"2\" textAlign=\"center\" text=\"04\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:M4BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"1\" textAlign=\"center\" text=\"02\"/><Cell row=\"1\" col=\"1\" textAlign=\"center\" text=\"bind:M2BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"1\" col=\"2\" textAlign=\"center\" text=\"05\"/><Cell row=\"1\" col=\"3\" textAlign=\"center\" text=\"bind:M5BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"2\" textAlign=\"center\" text=\"03\"/><Cell row=\"2\" col=\"1\" textAlign=\"center\" text=\"bind:M3BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"2\" col=\"2\" textAlign=\"center\" text=\"06\"/><Cell row=\"2\" col=\"3\" textAlign=\"center\" text=\"bind:M6BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"3\" textAlign=\"center\" text=\"1분기\" font=\"normal 600 10pt/normal &quot;Arial&quot;\"/><Cell row=\"3\" col=\"1\" textAlign=\"center\" expr=\"parseInt(M1BUDGET)+parseInt(M2BUDGET)+parseInt(M3BUDGET)\" displaytype=\"number\"/><Cell row=\"3\" col=\"2\" textAlign=\"center\" text=\"2분기\" font=\"normal 600 10pt/normal &quot;Arial&quot;\"/><Cell row=\"3\" col=\"3\" textAlign=\"center\" expr=\"parseInt(M4BUDGET)+parseInt(M5BUDGET)+parseInt(M6BUDGET)\" displaytype=\"number\"/><Cell row=\"4\" textAlign=\"center\" text=\"07\"/><Cell row=\"4\" col=\"1\" textAlign=\"center\" text=\"bind:M7BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"4\" col=\"2\" textAlign=\"center\" text=\"10\"/><Cell row=\"4\" col=\"3\" textAlign=\"center\" text=\"bind:M10BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"5\" textAlign=\"center\" text=\"08\"/><Cell row=\"5\" col=\"1\" textAlign=\"center\" text=\"bind:M8BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"5\" col=\"2\" textAlign=\"center\" text=\"11\"/><Cell row=\"5\" col=\"3\" textAlign=\"center\" text=\"bind:M11BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"6\" textAlign=\"center\" text=\"09\"/><Cell row=\"6\" col=\"1\" textAlign=\"center\" text=\"bind:M9BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"6\" col=\"2\" textAlign=\"center\" text=\"12\"/><Cell row=\"6\" col=\"3\" textAlign=\"center\" text=\"bind:M12BUDGET\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"7\" textAlign=\"center\" text=\"3분기\" font=\"normal 600 10pt/normal &quot;Arial&quot;\"/><Cell row=\"7\" col=\"1\" textAlign=\"center\" expr=\"parseInt(M7BUDGET)+parseInt(M8BUDGET)+parseInt(M9BUDGET)\" displaytype=\"number\"/><Cell row=\"7\" col=\"2\" textAlign=\"center\" text=\"4분기\" font=\"normal 600 10pt/normal &quot;Arial&quot;\"/><Cell row=\"7\" col=\"3\" textAlign=\"center\" expr=\"parseInt(M10BUDGET)+parseInt(M11BUDGET)+parseInt(M12BUDGET)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","940","50","113","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("예산 신청 등록");
            obj.set_borderRadius("5px");
            obj.set_font("normal 500 14px/normal \"함초롬돋움\"");
            obj.set_color("#ffffff");
            obj.set_background("#5170ad");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","806","93","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("월별 예산 기입");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_workplace","456","26","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("사업장 선택");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_deptCode","596","27","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("부서 선택");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_period","316","27","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("회계연도");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj.set_autoselect("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_02","351","109","279","430",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("gds_account_detail");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"134\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정 코드\"/><Cell col=\"1\" text=\"계정 과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","80","73","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("계정 과목");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","428","74","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("계정 상세");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("searchButton","215","75","55","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
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
        this.addIncludeScript("budgetRequestform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("budgetRequestform.xfdl", function() {
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();

        // var period = "6";
        // var budgetCode;
        // var budgetingCode = "2";
        this.budgetapplform_onload = function(obj,e)
        {
        // 		var id = "budgetcode";
        // 		var url = "svcBudget::budgetcode";
        // 		var resData = "";
        // 		var reqData = "ds_budgetCode=ds_budgetCode";
        // 		var args = "";
        // 		var callback = "callback";
        // 		this.transaction(id, url, resData, reqData, args, callback);
         			this.ds_budget1.addRow();

        };
        		this.callback = function(trid , ErrorCode, ErrorMsg){

        		strXml = this.ds_budget.saveXML();
        		}

        //예산 신청 등록
        this.Button01_onclick = function(obj,e)
        {
        		var deptCode = gb_deptCode;
        		var workplaceCode = gb_workplaceCode;
        		var accountPeriodNo = application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");
        		var accountInnerCode = application.gds_account_detail.getColumn(e.row,"ACCOUNT_INNER_CODE");
        		var budgetingCode="1";
        	trace(deptCode);
        	trace(workplaceCode);
        	trace(accountPeriodNo);
        	trace(accountInnerCode);

        	if(workplaceCode=="null"){
        		alert("작업장 코드를 선택해주세요")

        	}
        	if(deptCode=="null"){
        		alert("부서 코드를 선택해주세요")
        	}
        	else{

        // 		this.ds_budget1.setColumn(0,"WORKPLACE_CODE",workplace)
        // 		this.ds_budget1.setColumn(0,"DEPT_CODE",deptCode)
        // 		this.ds_budget1.setColumn(0,"BUDGETING_CODE",code)
        //
        	 	var id = "batchBudget";
         		var url = "svcBudget::batch";
         		var resData = "ds_budget1=ds_budget1";
         		var reqData = "";
        		var args = "deptCode='"+deptCode+"' workplaceCode='"+workplaceCode+"' accountPeriodNo='"+accountPeriodNo+"' budgetingCode='"+budgetingCode+"' accountInnerCode='"+accountInnerCode+"'";
         		var callback = "callback";
         		this.transaction(id, url, resData, reqData, args, callback);
        		this.reload();
        		}

        };


        this.Grid00_oncellclick = function(obj,e)
        {
        var parentAccountInnerCode = application.gds_account.getColumn(e.row,"ACCOUNT_INNER_CODE");
        			trace("dfdf" + parentAccountInnerCode);
         		var id = "detailaccountlist";
         		var url = "svcOperate::detailaccountlist";
         		var resData = "";
         		var reqData = "gds_account_detail=gds_account_detail";
        		var args = "parentAccountInnerCode='"+parentAccountInnerCode+"'";
         		var callback = "callback";
         		this.transaction(id, url, resData, reqData, args, callback);
        };


        this.ed_workplace_oneditclick = function(obj,e)
        {
        	this.gfnOpen("workplacepopup", "popup::workplacepopupform.xfdl", "callback", null)

        };
        this.ed_deptCode_oneditclick = function(obj,e)
        {
        	this.gfnOpen("deptpopup", "popup::deptpopupform.xfdl", "callback", null)

        };

        this.ed_period_oneditclick = function(obj,e)
        {
        	this.gfnOpen("periodpopup", "popup::periodpopupform.xfdl", "callback", null)
        };

        this.callback = function(trid, ErrorCode, ErrorMsg){

        if(trid == "workplacepopup"){
        	this.ed_workplace.set_value(application.gds_department.getColumn(0,"WORKPLACE_NAME"));
        	gb_workplaceCode = application.gds_department.getColumn(0,"WORKPLACE_CODE");

        }
        if(trid == "deptpopup"){
        	this.ed_deptCode.set_value(application.gds_department.getColumn(0,"DEPT_NAME"));
        	gb_deptCode = application.gds_department.getColumn(0,"DEPT_CODE");

        }
        if(trid == "periodpopup"){
        	this.ed_period.set_value(application.gds_period.getColumn(0,"FISCAL_YEAR"))

        }

        };

        this.ed_workplace_onchanged = function(obj,e)
        {

        };

        this.ed_deptCode_onchanged = function(obj,e)
        {

        };

        this.ed_period_onchanged = function(obj,e)
        {

        };
        this.searchButton_onclick = function(obj,e)
        {
        	var id = "budgetlist";
         		var url = "svcOperate::findParentAccountList";
         		var resData = "";
         		var reqData = "gds_account=gds_account";
        		var args = "";
         		var callback = "callback";
         		this.transaction(id, url, resData, reqData, args, callback);
        };



        this.Grid00_00_oncellclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.budgetapplform_onload,this);
            this.Static01_03.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01_00_00_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01_00_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.Static01_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.ed_workplace.addEventHandler("oneditclick",this.ed_workplace_oneditclick,this);
            this.ed_workplace.addEventHandler("onchanged",this.ed_workplace_onchanged,this);
            this.ed_deptCode.addEventHandler("oneditclick",this.ed_deptCode_oneditclick,this);
            this.ed_deptCode.addEventHandler("onchanged",this.ed_deptCode_onchanged,this);
            this.ed_period.addEventHandler("oneditclick",this.ed_period_oneditclick,this);
            this.ed_period.addEventHandler("onchanged",this.ed_period_onchanged,this);
            this.Grid00_02.addEventHandler("oncellclick",this.Grid00_02_oncellclick,this);
            this.Static01_00_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.searchButton.addEventHandler("onclick",this.searchButton_onclick,this);
        };
        this.loadIncludeScript("budgetRequestform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
