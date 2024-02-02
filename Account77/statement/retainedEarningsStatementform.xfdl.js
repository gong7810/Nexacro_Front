(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("retainedearningsstatementform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_retainedEarnings", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RETAINED\" type=\"INT\" size=\"256\"/><Column id=\"RETAINED_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FISCAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_RETAINED\" type=\"INT\" size=\"256\"/><Column id=\"PRE_RETAINED_SUMMARY\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calendar_date","857.00","96","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1040.00","96","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_background("#5170ad");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            obj.set_defaultbutton("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40.00","148","1080","507",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_retainedEarnings");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"154\"/><Column size=\"154\"/><Column size=\"154\"/><Column size=\"154\"/><Column size=\"154\"/><Column size=\"154\"/><Column size=\"154\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"당기\"/><Cell col=\"1\" text=\"세부금액\"/><Cell col=\"2\" text=\"합계금액\"/><Cell col=\"3\" text=\"과목\"/><Cell col=\"4\" text=\"전기\"/><Cell col=\"5\" text=\"세부금액\"/><Cell col=\"6\" text=\"합계금액\"/></Band><Band id=\"body\"><Cell text=\"\"/><Cell col=\"1\" text=\"bind:RETAINED\"/><Cell col=\"2\" text=\"bind:RETAINED_SUMMARY\"/><Cell col=\"3\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:PRE_RETAINED\"/><Cell col=\"6\" text=\"bind:PRE_RETAINED_SUMMARY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","39.00","19","280","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","54.00","29","250","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이익잉여금처분계산서");
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
        this.addIncludeScript("retainedEarningsStatementform.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("retainedEarningsStatementform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("retainedEarningsStatementform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();


        this.retainedearningsstatement_onload = function(obj,e){
        		trace("tracer이익잉여금처분계산서");
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

        		var id = "retainedearningsstatement";
        		var url = "svcStatement::retainedEarnings";
        		var resData = "";
        		var reqData = "ds_retainedEarnings=ds_retainedEarnings";
        		var args = "selectedDate='"+selectedDate+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);
        };

        this.callback = function ()
        {
        	trace(this.ds_retainedEarnings.getColumn(0, 1));
        };
        this.calendar_date_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.retainedearningsstatementform_onload,this);
            this.calendar_date.addEventHandler("onchanged",this.calendar_date_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("retainedEarningsStatementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
