(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fundPlanCalendarform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inplanList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outplanList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","365.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자금계획카렌다");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar","70.00","110","383","215",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Grid("inExpectedPlan","502.00","128","440","197",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_inplanList");
            obj.set_nodatatext("조회된 수입계획이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"75\"/><Column size=\"135\"/><Column size=\"98\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계획번호\"/><Cell col=\"1\" text=\"계획일자\"/><Cell col=\"2\" text=\"적요\"/><Cell col=\"3\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PLAN_NO\"/><Cell col=\"1\" text=\"bind:PLAN_DATE\"/><Cell col=\"2\" text=\"bind:EXPENSE_REPORT\"/><Cell col=\"3\" text=\"bind:PRICE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","500.00","327","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("지출예정");
            obj.set_font("normal 13pt/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("outExpectedPlan","501.00","350","440","197",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_outplanList");
            obj.set_nodatatext("조회된 지출계획이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"75\"/><Column size=\"135\"/><Column size=\"98\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계획번호\"/><Cell col=\"1\" text=\"계획일자\"/><Cell col=\"2\" text=\"적요\"/><Cell col=\"3\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PLAN_NO\"/><Cell col=\"1\" text=\"bind:PLAN_DATE\"/><Cell col=\"2\" text=\"bind:EXPENSE_REPORT\"/><Cell col=\"3\" text=\"bind:PRICE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","501.00","105","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("수입예정");
            obj.set_font("normal 13pt/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","110.00","366","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수입");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","110.00","418","60","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("지출");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("intotal","200.00","366","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_format("#,0.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("outtotal","200.00","418","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_format("#,0.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","intotal","value","ds_plan","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","outtotal","value","ds_plan","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("fundPlanCalendarform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\operate\fundPlanCalendarform.xfdl
        /* 작 성 일 자 : 2024/01/25
        /* 작 성 자 명 : S.U
        /* 설       명 : 자금계획카렌다 폼
        /*************************************************************/

        var selectDate = "";

        this.Calendar_onchanged = function(obj,e)
        {
        	selectDate = this.Calendar.text;

        	var id = "findPlan";
        	var url = "svcOperate::findPlan";
        	var reqData = "";
        	var resData = "ds_inplanList=ds_plan ds_outplanList=ds_plan";
        	var args = "startDate='"+selectDate+"' endDate='"+selectDate+"'";
        	var callback = "findPlan_callback";

        	this.transaction(id, url, reqData, resData, args, callback);
        };

        this.findPlan_callback = function ()
        {
        	var increase = "수입";
        	var decrease = "지출";
        	this.ds_inplanList.filter("BALANCE_DIVISION=='"+increase+"'");
        	this.ds_outplanList.filter("BALANCE_DIVISION=='"+decrease+"'");

        	var inSum = 0
        	var outSum = 0
        	var str = "";

        	for (var i = 0; i < this.ds_inplanList.getRowCount(); i++) {
        		str = this.inExpectedPlan.getCellText(i, 3);
        		inSum += nexacro.toNumber(str.replace(/,/gi, ''));
        	}
        	for (var i = 0; i < this.ds_outplanList.getRowCount(); i++) {
        		str = this.outExpectedPlan.getCellText(i, 3);
        		outSum += nexacro.toNumber(str.replace(/,/gi, ''));
        	}

        	this.intotal.set_value(inSum);
        	this.outtotal.set_value(outSum);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fundPlanCalendarform_onload,this);
            this.Calendar.addEventHandler("onchanged",this.Calendar_onchanged,this);
            this.inExpectedPlan.addEventHandler("oncellclick",this.inExpectedPlan_oncellclick,this);
            this.outExpectedPlan.addEventHandler("oncellclick",this.outExpectedPlan_oncellclick,this);
        };
        this.loadIncludeScript("fundPlanCalendarform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
