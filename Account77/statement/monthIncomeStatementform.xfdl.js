(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("monthIncomeStatement");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mincomeStatement", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"20\"/><Column id=\"MONTH\" type=\"STRING\" size=\"20\"/><Column id=\"SALES_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_COST_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"GROSS_MARGIN\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_MANAGE_COST_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATING_PROFIT\" type=\"STRING\" size=\"256\"/><Column id=\"NON_OPERATING_PROFIT_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"NON_OPERATING_COST_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"ORDINARY_PROFIT\" type=\"STRING\" size=\"256\"/><Column id=\"CORPORATE_TAX_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"NET_INCOME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calendar_date","857.00","96","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1040.00","96","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_background("#5170ad");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","148","1080","507",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_mincomeStatement");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연도\"/><Cell col=\"1\" text=\"월\"/><Cell col=\"2\" text=\"매출액\"/><Cell col=\"3\" text=\"매출원가\"/><Cell col=\"4\" text=\"매출총액\"/><Cell col=\"5\" text=\"판관비\"/><Cell col=\"6\" text=\"영업이익\"/><Cell col=\"7\" text=\"영업외수익\"/><Cell col=\"8\" text=\"영업외비용\"/><Cell col=\"9\" text=\"법인세차감전이익\"/><Cell col=\"10\" text=\"법인세\"/><Cell col=\"11\" text=\"당기순이익\"/></Band><Band id=\"body\"><Cell text=\"bind:YEAR\"/><Cell col=\"1\" text=\"bind:MONTH\"/><Cell col=\"2\" text=\"bind:SALES_SUMMARY\"/><Cell col=\"3\" text=\"bind:SALES_COST_SUMMARY\"/><Cell col=\"4\" text=\"bind:GROSS_MARGIN\"/><Cell col=\"5\" text=\"bind:SALES_MANAGE_COST_SUMMARY\"/><Cell col=\"6\" text=\"bind:OPERATING_PROFIT\"/><Cell col=\"7\" text=\"bind:NON_OPERATING_PROFIT_SUMMARY\"/><Cell col=\"8\" text=\"bind:NON_OPERATING_COST_SUMMARY\"/><Cell col=\"9\" text=\"bind:ORDINARY_PROFIT\"/><Cell col=\"10\" text=\"bind:CORPORATE_TAX_SUMMARY\"/><Cell col=\"11\" text=\"bind:NET_INCOME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","39.00","19","230","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","54.00","29","200","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기간별손익계산서");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("monthIncomeStatementform.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("monthIncomeStatementform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("monthIncomeStatementform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();


        this.monthIncomeStatement_onload = function(obj,e){
        		trace("tracer기간별손익계산서");
        		this.calendar_date.set_value( this.gfn_todayFirst().toString() );
        };

        //조회 버튼 클릭
        this.Button00_onclick = function(obj,e){
        		var date = this.calendar_date.value;

        		var year = date.toString().substring(0,4);
        		var month = date.toString().substring(4,6);
        		var day = date.toString().substring(6,8);
        		var selectedDate = year+"-"+month+"-"+day;

        // 		var eYear = endDate.toString().substring(0,4);
        // 		var eMonth = endDate.toString().substring(4,6);
        // 		var eDay = endDate.toString().substring(6,8);
        // 		var eDate = eYear+"-"+eMonth+"-"+eDay;

        		trace(year, month, day, selectedDate);
        		//trace(eYear, eMonth, eDay, eDate);

        		var id = "monthIncomeStatement";
        		var url = "svcStatement::monthIncome";
        		var reqData= "";
        		var resData  = "ds_mincomeStatement=ds_mincomeStatement";
        		var args = "selectedDate='"+selectedDate+"'";
        		var callback = "callback";

        		this.transaction(id, url, reqData, resData, args, callback);
        };

        this.callback = function ()
        {
        	trace(this.ds_mincomeStatement.getColumn(0, 1));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.monthIncomeStatement_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("monthIncomeStatementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
