(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("costStatement");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tmpCostStatement", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COST\" type=\"STRING\" size=\"256\"/><Column id=\"COST_SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"EARLY_COST\" type=\"STRING\" size=\"256\"/><Column id=\"EARLY_COST_SUMMARY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","1000","96","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_background("#5170ad");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","148","1080","507",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_tmpCostStatement");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/><Column size=\"216\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"당기\"/><Cell col=\"3\" colspan=\"2\" text=\"전기\"/><Cell row=\"1\" text=\"과목\"/><Cell row=\"1\" col=\"1\" text=\"세부금액\"/><Cell row=\"1\" col=\"2\" text=\"합계금액\"/><Cell row=\"1\" col=\"3\" text=\"세부금액\"/><Cell row=\"1\" col=\"4\" text=\"합계금액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NAME\"/><Cell col=\"1\" text=\"bind:COST\"/><Cell col=\"2\" text=\"bind:COST_SUMMARY\"/><Cell col=\"3\" text=\"bind:EARLY_COST\"/><Cell col=\"4\" text=\"bind:EARLY_COST_SUMMARY\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_date","817","96","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_text("원가명세서");
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
        this.addIncludeScript("costStatementform.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("costStatementform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("costStatementform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();


        this.costStatement_onload = function(obj,e){
        		trace("trace원가명세서");
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

        		var id = "costStatement";
        		var url = "svcStatement::selectedDate";
        		var resData = "";
        		var reqData = "ds_tmpCostStatement=ds_tmpCostStatement";
        		var args = "selectedDate='"+selectedDate+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);
        };










        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.costStatement_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("costStatementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
