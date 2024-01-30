(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("detailtrialbalanceForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detailtrialbalance", this);
            obj._setContents("<ColumnInfo><Column id=\"LEV\" type=\"INT\" size=\"256\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEBITS_SUM\" type=\"INT\" size=\"256\"/><Column id=\"EXCEPT_CASH_DEBITS\" type=\"INT\" size=\"256\"/><Column id=\"CASH_DEBITS\" type=\"INT\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREDITS_SUM_BALANCE\" type=\"INT\" size=\"256\"/><Column id=\"DEBITS_SUM_BALANCE\" type=\"INT\" size=\"256\"/><Column id=\"CASH_CREDITS\" type=\"INT\" size=\"256\"/><Column id=\"EXCEPT_CASH_CREDITS\" type=\"INT\" size=\"256\"/><Column id=\"CREDITS_SUM\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","0","120","1080","510",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_detailtrialbalance");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"155\"/><Column size=\"155\"/><Column size=\"155\"/><Column size=\"140\"/><Column size=\"155\"/><Column size=\"155\"/><Column size=\"155\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"차변\" background=\"#87c4f1\" color=\"#ededed\"/><Cell col=\"3\"/><Cell col=\"4\" colspan=\"3\" text=\"대변\" background=\"#87c4f1\" color=\"#f4f4f4\"/><Cell row=\"1\" text=\"계\"/><Cell row=\"1\" col=\"1\" text=\"대체\"/><Cell row=\"1\" col=\"2\" text=\"현금\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\" text=\"현금\"/><Cell row=\"1\" col=\"5\" text=\"대체\"/><Cell row=\"1\" col=\"6\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"bind:DEBITS_SUM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EXCEPT_CASH_DEBITS\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CASH_DEBITS\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"4\" text=\"bind:CASH_CREDITS\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:EXCEPT_CASH_CREDITS\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CREDITS_SUM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","75","31","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일(월) 계표");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_start","627","66","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_end","817","66","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1000","66","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
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
        this.addIncludeScript("detailtrialbalanceForm.xfdl","scripts::commonDate.xjs");
        this.registerScript("detailtrialbalanceForm.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        application = nexacro.getApplication();

        this.detailtrialbalanceForm_onload = function(obj,e)
        {

        		this.calendar_start.set_value( this.gfn_todayFirst().toString() );
        		this.calendar_end.set_value( this.gfn_today().toString() );
        };

        this.Button00_onclick = function(obj,e)
        {
        		var startDate = this.calendar_start.value;
        		var endDate = this.calendar_end.value;

        		var sYear = startDate.toString().substring(0,4);
        		var sMonth = startDate.toString().substring(4,6);
        		var sDay = startDate.toString().substring(6,8);
        		var sDate = sYear+"-"+sMonth+"-"+sDay;

        		var eYear = endDate.toString().substring(0,4);
        		var eMonth = endDate.toString().substring(4,6);
        		var eDay = endDate.toString().substring(6,8);
        		var eDate = eYear+"-"+eMonth+"-"+eDay;

        		var id = "detailtrialbalance";
        		var url = "svcStatement::detailtrialbalance";
        		var resData = "";
        		var reqData = "ds_detailtrialbalance=ds_detailtrialbalance";
        		var args = "startDate='"+sDate+"' endDate='"+eDate+"'";
        		var callback = "callback";

        		this.transaction(id, url, resData, reqData, args, callback);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.detailtrialbalanceForm_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("detailtrialbalanceForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
