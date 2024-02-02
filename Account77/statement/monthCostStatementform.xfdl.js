(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("monthCostStatementform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_monthCost", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COST_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"JANUARY\" type=\"STRING\" size=\"256\"/><Column id=\"FEBRUARY\" type=\"STRING\" size=\"256\"/><Column id=\"MARCH\" type=\"STRING\" size=\"256\"/><Column id=\"APRIL\" type=\"STRING\" size=\"256\"/><Column id=\"MAY\" type=\"STRING\" size=\"256\"/><Column id=\"JUNE\" type=\"STRING\" size=\"256\"/><Column id=\"JULY\" type=\"STRING\" size=\"256\"/><Column id=\"AUGUST\" type=\"STRING\" size=\"256\"/><Column id=\"SEPTEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"OCTOBER\" type=\"STRING\" size=\"256\"/><Column id=\"NOVEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DECEMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","1200.00","98","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_background("#5170ad");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_date","1007.00","98","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","19.00","19","230","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","34.00","29","200","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기간별 원가명세서");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"함초롬돋움\"");
            obj.set_border("3px none #000000");
            obj.set_background("transparent");
            obj.set_borderRadius("0px");
            obj.set_color("#fcfbfd");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_date00","803.00","98","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","148","1260","507",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_monthCost");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"과목\"/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\" text=\"1월\"/><Cell col=\"3\" text=\"2월\"/><Cell col=\"4\" text=\"3월\"/><Cell col=\"5\" text=\"4월\"/><Cell col=\"6\" text=\"5월\"/><Cell col=\"7\" text=\"6월\"/><Cell col=\"8\" text=\"7월\"/><Cell col=\"9\" text=\"8월\"/><Cell col=\"10\" text=\"9월\"/><Cell col=\"11\" text=\"10월\"/><Cell col=\"12\" text=\"11월\"/><Cell col=\"13\" text=\"12월\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NAME\"/><Cell col=\"1\" text=\"bind:COST_SUMMARY\"/><Cell col=\"2\" text=\"bind:JANUARY\"/><Cell col=\"3\" text=\"bind:FEBRUARY\"/><Cell col=\"4\" text=\"bind:MARCH\"/><Cell col=\"5\" text=\"bind:APRIL\"/><Cell col=\"6\" text=\"bind:MAY\"/><Cell col=\"7\" text=\"bind:JUNE\"/><Cell col=\"8\" text=\"bind:JULY\"/><Cell col=\"9\" text=\"bind:AUGUST\"/><Cell col=\"10\" text=\"bind:SEPTEMBER\"/><Cell col=\"11\" text=\"bind:OCTOBER\"/><Cell col=\"12\" text=\"bind:NOVEMBER\"/><Cell col=\"13\" text=\"bind:DECEMBER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("monthCostStatementform.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("monthCostStatementform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("monthCostStatementform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();


        this.monthCostStatement_onload = function(obj,e){
        		trace("tracer기간별원가명세서");
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

        		var id = "monthCostStatement";
        		var url = "svcStatement::monthCost";
        		var resData = "";
        		var reqData = "ds_monthCost=ds_monthCost";
        		var args = "selectedDate='"+selectedDate+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);
        };










        this.calendar_date_onchanged = function(obj,e)
        {

        };

        this.calendar_date00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.monthCostStatementform_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.calendar_date.addEventHandler("onchanged",this.calendar_date_onchanged,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.calendar_date00.addEventHandler("onchanged",this.calendar_date00_onchanged,this);
        };
        this.loadIncludeScript("monthCostStatementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
