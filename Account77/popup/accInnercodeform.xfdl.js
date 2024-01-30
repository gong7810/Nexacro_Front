(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("accInnerCodeForm");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_account", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("searchAccText","42","69","198","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","97","13","167","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("계정과목");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"휴먼엑스포\"");
            this.addChild(obj.name, obj);

            obj = new Button("bt_searchAcc","260","68","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","42","127","298","226",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("gds_account");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"계정과목\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("accInnercodeform.xfdl", function() {

        application = nexacro.getApplication();

        var parent; // childFrame의 ID

        this.accInnerCodeForm_onload = function(obj,e)
        {
           application.gds_account.clear();
           this.searchAccText.setFocus(true);
           parent = this.parent.name;
           trace("<<<<<<<<<<<", parent);

           //계정과목 가져옴
           var id = "getParentAccountList";
           var url = "svcOperate::findParentAccountList";
           var reqData = "";
           var resData = "ds_account=gds_account";
           var args = "";
           var callback = "callback";

           this.transaction(id, url, reqData, resData, args, callback);

           this.search();
        };


        // 검색 버튼
        this.bt_searchAcc_onclick = function(obj,e)
        {
           this.search();
        };


        // 검색 function
        this.search = function(){

           var id = "getAccountList";
           var url = "svcOperate::findAccountListByName";
           var resData = "";
           var reqData = "gds_account=gds_account";
           var args = "";
           if(this.searchAccText.value != null){
              args = "accountName='"+this.searchAccText.value+"'";
              application.gds_account.filter("");
           }else{
              args = "accountName=''";
              application.gds_account.filter("ACCOUNT_NAME!='사용자설정계정과목'");
           }
           var callback = "callback";
           trace("args : "+args);

           this.transaction(id, url, resData, reqData, args, callback);


        }


        // 콜백
        this.callback = function(trid, ErrorCode, ErrorMsg){

           if(trid == "getAccountList"){
              if(ErrorCode<0){
                 alert("조회 실패 : "+ErrorMsg);
              }
           }
        }


        //enter키
        this.searchAccText_onkeyup = function(obj,e)
        {
           if(e.keycode == 13){
              this.search();
           }
        };



        // 그리드 더블클릭 이벤트
        this.Grid00_oncelldblclick = function(obj,e)
        {
           var accountCode = application.gds_account.getColumn(application.gds_account.rowposition, "ACCOUNT_INNER_CODE");
           var accountName = application.gds_account.getColumn(application.gds_account.rowposition, "ACCOUNT_NAME");

           if(parent == "dialog_account"){
              application.gds_account_code.setColumn(0,"ACCOUNT_INNER_CODE",accountCode);
              application.gds_account_code.setColumn(0,"ACCOUNT_NAME",accountName);
           }else if(parent =="dialog_account_journal"){ // 계정 모달
              var n = application.gds_journal.rowposition;
              application.gds_journal.setColumn(n,"ACCOUNT_INNER_CODE",accountCode);
              application.gds_journal.setColumn(n,"ACCOUNT_NAME",accountName);
           }else if (parent == "accInnerCodeForm") {
        	  application.gv_accountCode = accountCode;
        	  application.gv_accountName = accountName;
           }
           this.close();
        };

        // esc로 창 닫기
        this.accInnerCodeForm_onkeydown = function(obj,e)
        {
        	const a=e.keycode;
        	if(a==27){
        		this.close('esc');
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accInnerCodeForm_onload,this);
            this.addEventHandler("onkeydown",this.accInnerCodeForm_onkeydown,this);
            this.searchAccText.addEventHandler("onkeyup",this.searchAccText_onkeyup,this);
            this.searchAccText.addEventHandler("onchanged",this.searchAccText_onchanged,this);
            this.bt_searchAcc.addEventHandler("onclick",this.bt_searchAcc_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("accInnercodeform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
