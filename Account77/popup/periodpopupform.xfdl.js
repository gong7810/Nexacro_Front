(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("periodpopupform");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","97","13","167","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회계연도");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"휴먼엑스포\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","42","60","298","316",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_period");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"69\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회계연도\"/><Cell col=\"1\" text=\"회계시작일\"/><Cell col=\"2\" text=\"회계종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:FISCAL_YEAR\"/><Cell col=\"1\" text=\"bind:PERIOD_START_DATE\"/><Cell col=\"2\" text=\"bind:PERIOD_END_DATE\"/></Band></Format></Formats>");
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
        this.registerScript("periodpopupform.xfdl", function() {

        application = nexacro.getApplication();
        var parent; // childFrame의 ID

        this.periodpopupform_onload = function(obj,e)
        {

           trace("회계기수 onload함수 시작");

           application.gds_period.clearData();

           //application.ds_period.clear();

           //회계기수 가져옴
           var id = "getPeriodList";
           var url = "svcOperate::accountperiodlist";
           var reqData = "";
           var resData = "gds_period=gds_period";
           var args = "";
           var callback = "callback";

           this.transaction(id, url, reqData, resData, args, callback);
        };

        // 콜백
        this.callback = function(trid, ErrorCode, ErrorMsg){

           if(trid == "getPeriodList"){
              if(ErrorCode<0){
                 alert("조회 실패 : "+ErrorMsg);
              }
           }
        }

        // 그리드 더블클릭 이벤트
        this.Grid00_oncelldblclick = function(obj,e)
        {
           var AccountYear = application.gds_period.getColumn(e.row, "FISCAL_YEAR");
           var periodNo = application.gds_period.getColumn(e.row, "ACCOUNT_PERIOD_NO");

           application.gds_period.setColumn(0,"FISCAL_YEAR", AccountYear);
           application.gds_period.setColumn(0,"ACCOUNT_PERIOD_NO", periodNo);

           this.close();

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.periodpopupform_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("periodpopupform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
