(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("customersLedgerForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_customerLedger", this);
            obj._setContents("<ColumnInfo><Column id=\"CARRY_OVER\" type=\"INT\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSIT\" type=\"INT\" size=\"256\"/><Column id=\"WITHDRAWAL\" type=\"INT\" size=\"256\"/><Column id=\"BALANCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","75","41","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래처원장");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","148","1079","507",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_customerLedger");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처이름\"/><Cell col=\"2\" text=\"이월금\"/><Cell col=\"3\" text=\"차변\"/><Cell col=\"4\" text=\"대변\"/><Cell col=\"5\" text=\"잔액\"/><Cell col=\"6\" text=\"원장상세\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_CODE\"/><Cell col=\"1\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"2\" text=\"bind:CARRY_OVER\"/><Cell col=\"3\" text=\"bind:DEPOSIT\"/><Cell col=\"4\" text=\"bind:WITHDRAWAL\"/><Cell col=\"5\" text=\"bind:BALANCE\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" text=\"상세보기\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;parseInt(DEPOSIT)&apos;)\" displaytype=\"currency\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;parseInt(WITHDRAWAL)&apos;)\" displaytype=\"currency\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;parseInt(BALANCE)&apos;)\" displaytype=\"currency\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;parseInt(BALANCE)&apos;) == 0 ? &quot;이상없음&quot; : &quot;이상있음&quot;\"/></Band></Format></Formats>");
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
        this.addIncludeScript("customersledgerForm.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("customersledgerForm.xfdl","scripts::commonOpen.xjs");
        this.registerScript("customersledgerForm.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;

        application = nexacro.getApplication();

        this.customersLedgerForm_onload = function(obj,e)
        {
              this.calendar_start.set_value( this.gfn_todayFirst().toString() );
              this.calendar_end.set_value( this.gfn_today().toString() );
              application.gds_customerLedger.clearData();

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

              var id = "customerledger";
              var url = "svcPosting::customerledger";
              var reqData = "";
              var resData = "ds_customerLedger=gds_customerLedger";
              var args = "startDate='"+sDate+"' endDate='"+eDate+"'";
              var callback = "callback";

              this.transaction(id, url, reqData, resData, args, callback);





        };

         //excel 오브젝트 시작
        this.Button01_onclick = function(obj,e)
        {

               this.exportObj = new ExcelExportObject("Export00", this);

            this.exportObj.set_exportfilename("customerLedgerForm");
            this.exportObj.set_exporturl("http://demo.nexacro.com/developer_guide/XExportImport");

            this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1");

            this.addEventHandler("onsuccess", this.Export00_onsuccess, this);
            this.addEventHandler("onerror", this.Export00_onerror, this);

            var intExportedItem = this.exportObj.exportData();
            trace("Number of Exported Item: " + intExportedItem);
        }

        this.Grid00_oncellclick = function(obj,e)
        {


           if(e.cell == 6){
              this.gfnOpen("dialog_customerLedgerDetail", "popup::customerledgerdetailform.xfdl", "callback", null);
              application.gv_customerCode = this.ds_customerLedger.getColumn(e.row,"CUSTOMER_CODE");


           }
        };

        //엑셀 export 시작
        this.Export00_onsuccess = function(obj, e)
        {
            trace("Export00_onsuccess");
        }

        this.Export00_onerror = function(obj, e)
        {
            trace("Export00_onerror");
        }
        //엑셀 export 끝


        this.callback = function(trid , ErrorCode, ErrorMsg){
               if(trid == "customerledger"){
                 if(ErrorCode<0){
                     alert("해당 기간에는 거래 내역이 없습니다");
                        application.gds_customerLedger.clearData();
                 }
               }

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.customersLedgerForm_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("customersledgerForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
