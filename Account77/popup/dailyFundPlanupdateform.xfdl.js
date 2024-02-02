(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dailyFundPlanupdateform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_plan", this);
            obj._setContents("<ColumnInfo><Column id=\"PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_balance", this);
            obj._setContents("<ColumnInfo><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BALANCE_DIVISION\">수입</Col></Row><Row><Col id=\"BALANCE_DIVISION\">지출</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","115.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자금계획 수정");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("accountname","4.60%","27.50%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("계획번호");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Edit("planNo","96.00","99","28.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("assetcode","4.60%","40.56%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("계획일자");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("planDate","96.00","147","28.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("accountcode","4.60%","54.17%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("자금코드");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("fundCode","95.00","196","28.20%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("assetname","4.60%","67.78%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("자금과목");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("fundName","19.00%","67.78%","28.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("previouscost","52.20%","27.50%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("거래처코드");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("customerCode","336.00","99","28.20%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("previousbalance","52.20%","40.56%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("거래처명");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("customerName","336.00","146","28.20%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("usefullife","52.20%","54.17%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("적요");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("expenseReport","336.00","195","28.20%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("amortizationfinalyear","52.20%","67.78%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("금액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("price","336","244","28.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_format("#,#.###");
            this.addChild(obj.name, obj);

            obj = new Static("assetname00","4.60%","81.39%","12.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("balanceDivision","95.00","293","28.00%","8.06%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_balance");
            obj.set_datacolumn("BALANCE_DIVISION");
            obj.set_readonly("true");
            obj.set_text("입 / 출을 선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("updatePlanbtn","409.00","330","68","19",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,360,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","planNo","value","ds_plan","PLAN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","planDate","value","ds_plan","PLAN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","fundCode","value","ds_plan","FUND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","fundName","value","ds_plan","FUND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","customerCode","value","ds_plan","CUSTOMER_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","customerName","value","ds_plan","CUSTOMER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","expenseReport","value","ds_plan","EXPENSE_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","price","value","ds_plan","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","balanceDivision","value","ds_plan","BALANCE_DIVISION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dailyFundPlanupdateform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\popup\dailyFundPlanupdateform.xfdl
        /* 작 성 일 자 : 2024/01/24
        /* 작 성 자 명 : S.U
        /* 설       명 : 자금계획 수정 폼
        /*************************************************************/

        application = nexacro.getApplication();

        // 선택 자금계획 세팅
        this.dailyFundPlanupdateform_onload = function (obj, e)
        {
        	trace(application.gds_plan.getColumn(0, "PLAN_NO"));
        	this.planNo.set_value(application.gds_plan.getColumn(0, "PLAN_NO"));
        	this.planDate.set_value(application.gds_plan.getColumn(0, "PLAN_DATE"));
        	this.fundCode.set_value(application.gds_plan.getColumn(0, "FUND_CODE"));
        	this.fundName.set_value(application.gds_plan.getColumn(0, "FUND_NAME"));
        	this.customerCode.set_value(application.gds_plan.getColumn(0, "CUSTOMER_CODE"));
        	this.customerName.set_value(application.gds_plan.getColumn(0, "CUSTOMER_NAME"));
        	this.expenseReport.set_value(application.gds_plan.getColumn(0, "EXPENSE_REPORT"));
        	this.price.set_value(application.gds_plan.getColumn(0, "PRICE").replace(/,/gi, ''));
        	this.balanceDivision.set_value(application.gds_plan.getColumn(0, "BALANCE_DIVISION"));

        };

        // 자금코드 수정
        this.fundCode_oneditclick = function(obj,e)
        {
        	var sID="accInnerCodeForm";
        	var sURL="popup::accInnercodeform.xfdl";
        	var param="";
        	var callbackFunc="accInnercodeform_callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        	// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        	// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        };

        // 선택 계정과목 세팅
        this.accInnercodeform_callbackFunc = function ()
        {
        	this.fundCode.set_value(nexa.gv_accountCode);
        	this.fundName.set_value(nexa.gv_accountName);
        };

        // 거래처 팝업창 호출
        this.customerCode_oneditclick = function(obj,e)
        {
        	var sID="customercodeform";
        	var sURL="popup::customercodeform.xfdl";
        	var param="";
        	var callbackFunc="customercodeform_callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        	// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        	// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        };

        // 선택 거래처 세팅
        this.customercodeform_callbackFunc = function()
        {
        	this.customerCode.set_value(nexa.gv_customerCode);
        	this.customerName.set_value(nexa.gv_customerName);
        }

        // 자금계획 수정
        this.updatePlanbtn_onclick = function(obj,e)
        {
        	trace(this.ds_plan.getColumn(0, "FUND_CODE"));
        	if (this.ds_plan.getColumn(0, "FUND_CODE") == null)
        		alert("자금코드를 선택해주세요");
        	else if (this.ds_plan.getColumn(0, "CUSTOMER_CODE") == null)
        		alert("거래처코드를 선택해주세요");
        	else if (this.ds_plan.getColumn(0, "EXPENSE_REPORT") == null)
        		alert("적요를 입력해주세요");
        	else if (this.ds_plan.getColumn(0, "PRICE") == null)
        		alert("금액을 입력해주세요");
        	else {
        		var bool = confirm("저장하시겠습니까?")
        		if (bool) {
        			var id = "updatePlan";
        			var url = "svcOperate::updatePlan";
        			var reqData = "ds_plan=ds_plan";
        			var resData = "";
        			var args = "";
        			var callback = "updatePlan_callback";

        			this.transaction(id, url, reqData, resData, args, callback);
        			alert("저장되었습니다.");
        			this.close();
        		}

        	}
        };

        // esc로 창 닫기
        this.dailyFundPlanupdateform_onkeydown = function(obj,e)
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
            this.addEventHandler("onload",this.dailyFundPlanupdateform_onload,this);
            this.addEventHandler("onkeydown",this.dailyFundPlanupdateform_onkeydown,this);
            this.fundCode.addEventHandler("oneditclick",this.fundCode_oneditclick,this);
            this.fundName.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.customerCode.addEventHandler("oneditclick",this.customerCode_oneditclick,this);
            this.updatePlanbtn.addEventHandler("onclick",this.updatePlanbtn_onclick,this);
        };
        this.loadIncludeScript("dailyFundPlanupdateform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
