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
            obj = new Grid("Grid00","0","125","1080","510",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_financialposition");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"270\"/><Column size=\"270\"/><Column size=\"270\"/><Column size=\"270\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"/><Cell col=\"2\" colspan=\"2\" text=\"당기\"/><Cell row=\"1\" text=\"분류\"/><Cell row=\"1\" col=\"1\" text=\"계정과목\"/><Cell row=\"1\" col=\"2\" text=\"세부금액\"/><Cell row=\"1\" col=\"3\" text=\"합계금액\"/></Band><Band id=\"body\"><Cell text=\"bind:CATEGORY\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:BALANCE_DETAIL\" maskeditformat=\"#,###0\" displaytype=\"number\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:BALANCE_SUMMARY\" maskeditformat=\"#,###0\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","660","76","228","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("회계기수를 조회해주세요.");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_font("bold 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","986","76","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("결산");
            obj.set_background("#5170ad");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","Edit00:18","76",null,"40","Button01:12",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_background("#5170ad");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
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
            obj.set_text("재무상태표");
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
        this.addIncludeScript("financialpositionform.xfdl","scripts::commonDate.xjs");
        this.registerScript("financialpositionform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        application = nexacro.getApplication();

        this.financialpositionform_onload = function(obj,e)
        {

        		application.gds_period.clearData();
        };

        this.Button00_onclick = function(obj,e) // 조회 버튼 이벤트
        {
        	application.gv_currentPeriod = application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO"); // 회계년도 얻어 오는 로직
        		var period = application.gv_currentPeriod;
        		//var period=application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");
        		var callresult = "SEARCH";
        		var id = "financialposition"; // 계정 과목
        		var url = "svcStatement::financialposition";
        		var resData = "";
        		var reqData = "ds_financialposition=ds_financialposition";
        		var args = "period='"+period+"' callresult='"+callresult+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);

        };

        // 시산표에서 재무상태표로 옮김 (결산 버튼)
        this.Button01_onclick = function(obj,e)
        {

        	var accountPeriodNo=application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");
        	var callresult = "Y";
        			if(this.confirm("결산하시겠습니까?","결산")){

        		var id = "selecttotaltrialbalance";
        		var url = "svcStatement::selecttotaltrialbalance"; //selecttotaltrialbalance
        		var reqData = "ds_totaltrialbalance=ds_totaltrialbalance";
        		var resData = "";
        		var args = "accountPeriodNo='"+accountPeriodNo+"' callresult='"+callresult+"'";
        		var callback = "callback";
        		this.transaction(id, url, reqData, resData, args, callback);
        		this.Button00_onclick();

        		} else {
        		alert("결산을 취소했습니다.");
        		this.Button00_onclick();
        		}

        };



        this.Edit00_oneditclick = function(obj,e)
        {
        	this.gfnOpen("periodpopup", "popup::periodpopupform.xfdl", "callback", null);
        };

         this.callback = function(trid, ErrorCode, ErrorMsg){
         	 if(trid == "periodpopup"){
        	this.Edit00.set_value(application.gds_period.getColumn(0,"FISCAL_YEAR"));
        	}
        	else if(trid=="financialposition"){
         		if(ErrorCode<0){
         			alert("회계년도를 입력해 주세요 : "+ErrorMsg)
        			this.gfnOpen("periodpopup", "popup::periodpopupform.xfdl", "callback", null);
         		}
         	else if(this.ds_financialposition.getColumn("BALANCE_SUMMARY")==null||0){
        				this.alert("조회되는 결과가 없습니다. 결산과정이 선행되어야 합니다.")
        		}

        	}
        	}


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.financialpositionform_onload,this);
            this.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("financialpositionform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
