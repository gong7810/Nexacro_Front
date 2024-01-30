(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("totalaccountledgerform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_account", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_accountDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_carrayOver", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARRY_OVER\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","75","41","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래처별초기이월");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","46","146","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_account");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정과목 코드\"/><Cell col=\"1\" text=\"계정과목\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","46","360","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_accountDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ACCOUNT_INNER_CODE\"/><Cell col=\"1\" text=\"ACCOUNT_NAME\"/><Cell col=\"2\" text=\"BALANCE\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"2\" text=\"bind:BALANCE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1000","96","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","426","146","642","404",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_carrayOver");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"214\"/><Column size=\"214\"/><Column size=\"214\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CUSTOMER_CODE\"/><Cell col=\"1\" text=\"CUSTOMER_NAME\"/><Cell col=\"2\" text=\"CARRY_OVER\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_CODE\"/><Cell col=\"1\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"2\" text=\"bind:CARRY_OVER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","760","96","228","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("회계기수를 조회해주세요.");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_font("bold 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("earlycarryoverbycustomerform.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("earlycarryoverbycustomerform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("earlycarryoverbycustomerform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/
        application = nexacro.getApplication();

        var code;

        this.earlycarryoverbycustomerform_onload = function(obj,e){
        	application.gds_period.clearData();
        	//계정과목 가져옴
        	var id = "getParentAccountList";
        	var url = "svcOperate::findParentAccountList";
        	var reqData = "";
        	var resData = "ds_account=gds_account";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);
        };


        this.Grid00_oncellclick = function(obj,e)
        {

        	code = this.ds_account.getColumn(e.row, "ACCOUNT_INNER_CODE");
        	trace("          code :  "+code);
        	var id = "Detailaccountlist";
        	var url = "svcOperate::Detailaccountlist";
        	var reqData = "";
        	var resData = "ds_accountDetail=gds_account";
        	var args = "code='"+code+"'";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);
        };


        this.Edit00_oneditclick = function(obj,e)
        {
        	this.gfnOpen("periodpopup", "popup::periodpopupform.xfdl", "callback", null);
        };

        this.callback = function(trid, ErrorCode, ErrorMsg){

           if(trid == "periodpopup"){
        	this.Edit00.set_value(application.gds_period.getColumn(0,"FISCAL_YEAR"));
        	//this.Edit00.set_enable("false");
              if(ErrorCode<0){
                 alert("조회 실패 : "+ErrorMsg);
              }
           }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.earlycarryoverbycustomerform_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.Grid00_00_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
        };
        this.loadIncludeScript("earlycarryoverbycustomerform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
