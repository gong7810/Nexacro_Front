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


            obj = new Dataset("ds_budgetComparison", this);
            obj._setContents("<ColumnInfo><Column id=\"BUDGET_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_BUDGET\" type=\"STRING\" size=\"256\"/><Column id=\"EXEC_PERFORM\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_ACCOUNT_COMPARISON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_02","-2","-2","178","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","493","16","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","633","16","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","352","16","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","7","6","159","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("예실 대비 현황");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"함초롬돋움\"");
            obj.set_border("3px none #000000");
            obj.set_background("transparent");
            obj.set_borderRadius("0px");
            obj.set_color("#fcfbfd");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_workplace","506","26","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("사업장 선택");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_deptCode","646","27","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("부서 선택");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_period","366","27","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("회계연도");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj.set_autoselect("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","14","152","165","49",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("예산 코드    예산 타입");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","19","211","70","250",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("    1     \r\n\r\n    2     \r\n\r\n    3     \r\n\r\n    4     \r\n\r\n    5     \r\n\r\n    6     ");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","105","212","70","250",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("신청\r\n\r\n편성\r\n\r\n조정\r\n\r\n대비\r\n\r\n실적\r\n\r\n초과");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00","105","341","134","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("    대비");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("palegoldenrod");
            obj.set_color("sienna");
            obj.set_textAlign("left");
            obj.set_borderRadius("5px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","184","331","65","56",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조회");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","416.00","126","490","404",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_budgetComparison");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"98\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\" textAlign=\"center\"/><Cell col=\"1\" text=\"신청 예산\" textAlign=\"center\"/><Cell col=\"2\" text=\"편성 예산\" textAlign=\"center\"/><Cell col=\"3\" text=\"집행 실적\" textAlign=\"center\"/><Cell col=\"4\" text=\"예실 대비\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:BUDGET_DATE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:APP_BUDGET\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ORG_BUDGET\" textAlign=\"center\"/><Cell col=\"3\" text=\"expr:EXEC_PERFORM == null ? &quot;0&quot; : EXEC_PERFORM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:BUDGET_ACCOUNT_COMPARISON\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","774","16","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_accountCode","787","27","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("계정과목 선택");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","661","68","203","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("※집행 실적 : 차변 내역 합계");
            obj.set_font("normal 8pt/normal \"Arial\",\"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","661","90","203","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("※예실 대비 : 편성 예산 - 집행 실적");
            obj.set_font("normal 8pt/normal \"Arial\",\"함초롬돋움\"");
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
        this.addIncludeScript("budgetComparisonform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("budgetComparisonform.xfdl", function() {
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

        		alert("승인 완료되었습니다");
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

        this.ed_accountCode_oneditclick = function(obj,e)
        {
        	this.gfnOpen("accountCodePopup", "popup::accInnercodeform.xfdl", "callback", null)
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

        if(trid == "accountCodePopup"){
        	var r = application.gds_account.rowposition;
        	this.ed_accountCode.set_value(application.gds_account.getColumn(r, "ACCOUNT_NAME"));
        	gb_accountInnerCode = application.gds_account.getColumn(r, "ACCOUNT_INNER_CODE");
        }

        };

        ////////////////////////////

        this.ed_accountCode_onchanged = function(obj,e)
        {

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


        this.CheckBox00_00_onchanged= function(obj,e)
        {
        	var checked2 = this.CheckBox00_00.isChecked();
        	trace(checked2);
        	if(checked2){
        		var deptCode = gb_deptCode;
        		var workplaceCode = gb_workplaceCode;
        		var accountInnerCode = gb_accountInnerCode;
        		var accountPeriodNo = application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");


        		var id = "budgetComparison";
        		var url = "svcBudget::budgetComparison";
        		var resData = "";
        		var reqData = "ds_budgetComparison=ds_budgetComparison";
        		var args = "deptCode='"+deptCode+"' workplaceCode='"+workplaceCode+"' accountPeriodNo='"+accountPeriodNo+"' accountInnerCode='"+accountInnerCode+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);

        		}
        		else{
        			trace("Dfdfdf");
        			this.ds_budgetListForRecon.clearData();
        			this.Static05.set_text("");
        		}

        		     trace(deptCode);
              trace(workplaceCode);
              trace(accountPeriodNo);
              trace(accountInnerCode);

              trace("dd" + application.gds_account_detail.rowposition);
        };



        this.Static02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.budgetapplform_onload,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.ed_workplace.addEventHandler("oneditclick",this.ed_workplace_oneditclick,this);
            this.ed_workplace.addEventHandler("onchanged",this.ed_workplace_onchanged,this);
            this.ed_deptCode.addEventHandler("oneditclick",this.ed_deptCode_oneditclick,this);
            this.ed_deptCode.addEventHandler("onchanged",this.ed_deptCode_onchanged,this);
            this.ed_period.addEventHandler("oneditclick",this.ed_period_oneditclick,this);
            this.ed_period.addEventHandler("onchanged",this.ed_period_onchanged,this);
            this.Static02_01.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00_01.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00_00_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00_00_01_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.CheckBox00_00.addEventHandler("canchange",this.CheckBox00_00_canchange,this);
            this.CheckBox00_00.addEventHandler("onchanged",this.CheckBox00_00_onchanged,this);
            this.CheckBox00_00.addEventHandler("onclick",this.CheckBox00_00_onclick,this);
            this.Static01_01_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.ed_accountCode.addEventHandler("oneditclick",this.ed_accountCode_oneditclick,this);
            this.ed_accountCode.addEventHandler("onchanged",this.ed_accountCode_onchanged,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
        };
        this.loadIncludeScript("budgetComparisonform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
