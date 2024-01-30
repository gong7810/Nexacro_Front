(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("customerCodeForm");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","97","13","167","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래처");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"휴먼엑스포\"");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","25","56","311","272",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_usecontrolkey("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("일반거래처");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","12","12","288","223",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("gds_customer");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_CODE\"/><Cell col=\"1\" text=\"bind:CUSTOMER_NAME\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("금융거래처");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","12","12","288","223",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("gds_customer");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_CODE\"/><Cell col=\"1\" text=\"bind:CUSTOMER_NAME\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("보험사");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","12","12","288","223",null,null,null,null,null,null,this.Tab00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_binddataset("gds_customer");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_CODE\"/><Cell col=\"1\" text=\"bind:CUSTOMER_NAME\"/></Band></Format></Formats>");
            this.Tab00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("직원복지");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","12","12","288","223",null,null,null,null,null,null,this.Tab00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_binddataset("gds_customer");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_CODE\"/><Cell col=\"1\" text=\"bind:CUSTOMER_NAME\"/></Band></Format></Formats>");
            this.Tab00.Tabpage4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",360,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("customercodeform.xfdl", function() {

        application = nexacro.getApplication();
        var checkPoint = this.parent.vehicle;

        this.customerCodeForm_onload = function(obj,e)
        {
        	var id = "getTotalCustomerList";
        	var url = "svcBase::findCustomerCodeList";
        	var reqData = "";
        	var resData = "gds_customer=gds_customer";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);

        	application.gds_customer.filter("CUSTOMER_TYPE=='일반'");

        	trace('>>>>>', checkPoint);
        	if (checkPoint == "vehicle") {
        		this.Tab00.tabindex = 2;
        		this.Tab00.enableevent = false;
        	}
        };


        // 콜백
        this.callback = function(trid, ErrorCode, ErrorMsg){
           if(trid=="getTotalCustomerList"){
              if(ErrorCode<0){
                 alert("조회실패 : "+ErrorMsg);
              }
           }
        }


        // tab change
        this.Tab00_onchanged = function(obj,e)
        {
        	switch(obj.tabindex) {
        	case 0 : application.gds_customer.filter("CUSTOMER_TYPE=='일반'");
        		break;
        	case 1 : application.gds_customer.filter("CUSTOMER_TYPE=='금융'");
        		break;
        	case 2 : application.gds_customer.filter("CUSTOMER_TYPE=='보험'");
        		break;
        	case 3 : application.gds_customer.filter("CUSTOMER_TYPE=='복지'");
        		break;
        	}
        };


        // 그리드 더블클릭
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var customerCode = application.gds_customer.getColumn(application.gds_customer.rowposition, "CUSTOMER_CODE");
        	var customerName = application.gds_customer.getColumn(application.gds_customer.rowposition, "CUSTOMER_NAME");
        	trace(customerCode)
        	trace(customerName)
        	application.gv_customerCode = customerCode;
        	application.gv_customerName = customerName;

        	application.gds_journal.setColumn(application.gds_journal.rowposition, "CUSTOMER_CODE", customerCode);
        	application.gds_journal.setColumn(application.gds_journal.rowposition, "CUSTOMER_NAME", customerName);

        	this.close();
        };

        // esc로 창 닫기
        this.customerCodeForm_onkeydown = function(obj,e)
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
            this.addEventHandler("onload",this.customerCodeForm_onload,this);
            this.addEventHandler("onkeydown",this.customerCodeForm_onkeydown,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Tab00.Tabpage2.form.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Tab00.Tabpage3.form.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Tab00.Tabpage4.form.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("customercodeform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
