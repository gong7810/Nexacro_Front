(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("journalDetailForm");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","112","23","167","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("분개상세");
            obj.set_textAlign("center");
            obj.set_font("24px/normal \"휴먼엑스포\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","90","370","286",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_journalDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분개번호\"/><Cell col=\"1\" text=\"분개상세번호\"/><Cell col=\"2\" text=\"상세계정과목\"/></Band><Band id=\"body\"><Cell text=\"bind:JOURNAL_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JOURNAL_DETAIL_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ACCOUNT_CONTROL_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("journaldetailform.xfdl", function() {

        application = nexacro.getApplication();
        this.journalDetailForm_onload = function(obj,e)
        {
        	trace("   분개번호 : " + application.gv_journalNo);
        	var journalNo = application.gv_journalNo;


        	var id = "findJournalDetailList";
        	var url = "svcPosting::findJournalDetailList";
        	var resData = "gds_journalDetail=gds_journalDetail";
        	var reqData = "";
        	var args = "journalNo='"+journalNo+"'";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);

        };
        this.callback = function(trid , ErrorCode, ErrorMsg){
        		//alert(application.gds_journalDetail.saveXML());
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.journalDetailForm_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("journaldetailform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
