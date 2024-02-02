(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("customerledgerdetailform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","112","23","167","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래처원장상세");
            obj.set_textAlign("center");
            obj.set_font("24px/normal \"휴먼엑스포\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","90","370","286",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_customerLedger_detail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래날짜\"/><Cell col=\"1\" text=\"계정과목\"/><Cell col=\"2\" text=\"차변\"/><Cell col=\"3\" text=\"대변\"/></Band><Band id=\"body\"><Cell text=\"bind:REPORTING_DATE\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"2\" text=\"bind:LEFT_DEBTOR_PRICE\"/><Cell col=\"3\" text=\"bind:RIGHT_CREDITS_PRICE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("customerledgerdetailform.xfdl", function() {

        application = nexacro.getApplication();
        this.customerledgerdetailform_onload = function(obj,e)
        {

           var customerCode = application.gv_customerCode;
           var id = "findCustomerLedgerDetailList";
           var url = "svcPosting::findCustomerLedgerDetailList";
           var resData = "";
           var reqData = "gds_customerLedger_detail=gds_customerLedger_detail";
           var args = "customerCode='"+customerCode+"'";
           var callback = "callback";

           this.transaction(id, url, resData, reqData, args, callback);
        };
        this.callback = function(trid , ErrorCode, ErrorMsg){
              //alert(application.gds_customerLedger_detail.saveXML());
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.customerledgerdetailform_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("customerledgerdetailform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
