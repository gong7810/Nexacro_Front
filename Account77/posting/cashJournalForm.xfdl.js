(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cashJournalForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cashJournal", this);
            obj._setContents("<ColumnInfo><Column id=\"MONTH_REPORTING_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REPORTING_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSIT\" type=\"INT\" size=\"256\"/><Column id=\"WITHDRAWAL\" type=\"INT\" size=\"256\"/><Column id=\"BALANCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","75","41","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("현금출납장");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","148","1079","507",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_cashJournal");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/><Column size=\"200\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"230\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"적요\"/><Cell col=\"2\" text=\"입금\"/><Cell col=\"3\" text=\"출금\"/><Cell col=\"4\" text=\"잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:REPORTING_DATE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EXPENSE_REPORT\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPOSIT\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:WITHDRAWAL\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:BALANCE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_start","627","96","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_end","817","96","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1000","96","68","40",null,null,null,null,null,null,this);
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
        this.addIncludeScript("cashJournalForm.xfdl","scripts::commonDate.xjs");
        this.registerScript("cashJournalForm.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();

        this.cashJournalForm_onload = function(obj,e)
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
              var account = '0101';
              var eYear = endDate.toString().substring(0,4);
              var eMonth = endDate.toString().substring(4,6);
              var eDay = endDate.toString().substring(6,8);
              var eDate = eYear+"-"+eMonth+"-"+eDay;

              var id = "cashjournal";
              var url = "svcPosting::cashjournal";
              var reqData = "";
              var resData = "ds_cashJournal=ds_cashJournal";
              var args = "startDate='"+sDate+"'endDate='"+eDate+"'account='"+account+"'";
              var callback = "callback";

              this.transaction(id, url, reqData, resData, args, callback);


        };

        this.callback = function(trid , ErrorCode, ErrorMsg){
              strXml = this.ds_cashJournal.saveXML();

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cashJournalForm_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("cashJournalForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
