(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("journalForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","75","41","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("분개장");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","148","1080","507",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_journal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"전표번호\"/><Cell col=\"1\" text=\"분개번호\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"계정과목\"/><Cell col=\"4\" text=\"차변\"/><Cell col=\"5\" text=\"대변\"/><Cell col=\"6\" text=\"분개상세\"/></Band><Band id=\"body\"><Cell text=\"bind:SLIP_NO\"/><Cell col=\"1\" text=\"bind:JOURNAL_NO\"/><Cell col=\"2\" text=\"bind:BALANCE_DIVISION\"/><Cell col=\"3\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"4\" text=\"bind:LEFT_DEBTOR_PRICE\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:RIGHT_CREDITS_PRICE\" displaytype=\"number\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" text=\"분개상세\"/></Band></Format></Formats>");
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
        this.addIncludeScript("journalForm.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("journalForm.xfdl","scripts::commonOpen.xjs");
        this.registerScript("journalForm.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();

        this.journalForm_onload = function(obj,e)
        {
              this.calendar_start.set_value( this.gfn_todayFirst().toString() );
              this.calendar_end.set_value( this.gfn_today().toString() );
              var name = application.gds_journal.getColumn(e.row,"ACCOUNT_NAME");

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

              // 분개 다 가지고옴
              var id = "findJournalList";
              var url = "svcPosting::findRangedJournalList2";
              var resData = "gds_journal=gds_journal";
              var reqData = "";
              var args = "startDate='"+sDate+"' endDate='"+eDate+"'";
              var callback = "callback";

              this.transaction(id, url, reqData, resData, args, callback);

              application.gds_journal.filter("");


              // 대차변값 null 날라오면 0으로 변환
              var count = this.Grid00.rowcount;
              for(i = 0 ; i<count ; i++){
              var left = application.gds_journal.getColumn(i , "LEFT_DEBTOR_PRICE");
              var right = application.gds_journal.getColumn(i , "RIGHT_CREDITS_PRICE");
                 if(left == null){
                 application.gds_journal.setColumn(i , "LEFT_DEBTOR_PRICE" , 0);
                 }
                 if(right == null){
                 application.gds_journal.setColumn(i , "RIGHT_CREDITS_PRICE" , 0);
                 }
              }
        };


        this.Grid00_oncellclick = function(obj,e)
        {
           if(e.cell == 6){
              this.gfnOpen("dialog_journalDetail", "popup::journalDetailForm.xfdl", "callback", null);
              application.gv_journalNo = application.gds_journal.getColumn(e.row,"JOURNAL_NO");
              trace("   분개번호 : " + application.gv_journalNo);
           }
        };

        this.callback = function(trid , ErrorCode, ErrorMsg){
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.journalForm_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("journalForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
