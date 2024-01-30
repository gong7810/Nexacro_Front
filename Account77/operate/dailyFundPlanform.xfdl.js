(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dailyFundPlanform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_plan", this);
            obj._setContents("<ColumnInfo><Column id=\"PLAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_balance", this);
            obj._setContents("<ColumnInfo><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BALANCE_DIVISION\">수입</Col></Row><Row><Col id=\"BALANCE_DIVISION\">지출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inplanList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outplanList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","365.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일자별자금계획관리");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Tab("planTab","112.00","68","819","452",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("addPlan",this.planTab);
            obj.set_text("자금계획입력");
            this.planTab.addChild(obj.name, obj);

            obj = new Static("static1","3.06%","11.14%","9.67%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("0");
            obj.set_text("계획일자");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Calendar("planDate","16.28%","11.14%","30.60%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_asset");
            obj.set_datecolumn("PROGRESS");
            obj.set_dateformat("yyyy-MM-dd ");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Static("static2","3.06%","26.78%","9.67%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("2");
            obj.set_text("자금코드");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Edit("fundCode","134.00","114","30.60%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Static("static3","3.06%","44.08%","9.67%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("4");
            obj.set_text("자금과목");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Edit("fundName","134.00","187","30.60%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Static("static4","3.06%","60.43%","9.67%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Combo("balanceDivision","134.00","257","30.60%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_balance");
            obj.set_datacolumn("BALANCE_DIVISION");
            obj.set_text("입 / 출을 선택해주세요");
            obj.set_value("");
            obj.set_index("-1");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Static("static5","52.02%","11.14%","9.67%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("8");
            obj.set_text("거래처코드");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Edit("customerCode","537.00","48","30.60%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Static("static6","51.90%","27.25%","9.67%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("10");
            obj.set_text("거래처명");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Edit("customerName","537.00","115","30.60%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Static("static7","51.90%","44.08%","9.67%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("12");
            obj.set_text("적요");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Edit("expenseReport","538.00","187","30.60%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_textAlign("center");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Static("static8","51.90%","60.43%","9.67%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("14");
            obj.set_text("금액");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new MaskEdit("price","537.00","256","30.60%","8.06%",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("15");
            obj.set_format("#,#.###");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Button("saveDatabtn","717.00","323","72","40",null,null,null,null,null,null,this.planTab.addPlan.form);
            obj.set_taborder("16");
            obj.set_text("저장");
            this.planTab.addPlan.addChild(obj.name, obj);

            obj = new Tabpage("findPlan",this.planTab);
            obj.set_text("자금계획상세");
            this.planTab.addChild(obj.name, obj);

            obj = new Calendar("startDate","32.00","17","131","30",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Calendar("endDate","199.00","17","131","30",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Static("Static00_00","167.00","20","27","24",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("3");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Button("findPlanbtn","358.00","17","79","30",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Grid("inExpectedPlan","32.00","78","763","155",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_inplanList");
            obj.set_nodatatext("조회된 수입예정계획이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"95\"/><Column size=\"75\"/><Column size=\"95\"/><Column size=\"135\"/><Column size=\"98\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계획번호\"/><Cell col=\"1\" text=\"계획일자\"/><Cell col=\"2\" text=\"자금코드\"/><Cell col=\"3\" text=\"자금과목\"/><Cell col=\"4\" text=\"거래처코드\"/><Cell col=\"5\" text=\"거래처명\"/><Cell col=\"6\" text=\"적요\"/><Cell col=\"7\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PLAN_NO\"/><Cell col=\"1\" text=\"bind:PLAN_DATE\"/><Cell col=\"2\" text=\"bind:FUND_CODE\"/><Cell col=\"3\" text=\"bind:FUND_NAME\"/><Cell col=\"4\" text=\"bind:CUSTOMER_CODE\"/><Cell col=\"5\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"6\" text=\"bind:EXPENSE_REPORT\"/><Cell col=\"7\" text=\"bind:PRICE\"/></Band></Format></Formats>");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Static("Static00","31.00","55","120","20",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("5");
            obj.set_text("수입예정");
            obj.set_font("normal 13pt/normal \"Gulim\"");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Static("Static00_01","30.00","237","120","20",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("6");
            obj.set_text("지출예정");
            obj.set_font("normal 13pt/normal \"Gulim\"");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Grid("outExpectedPlan","31.00","260","763","155",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_outplanList");
            obj.set_nodatatext("조회된 지출예정계획이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"95\"/><Column size=\"75\"/><Column size=\"95\"/><Column size=\"135\"/><Column size=\"98\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계획번호\"/><Cell col=\"1\" text=\"계획일자\"/><Cell col=\"2\" text=\"자금코드\"/><Cell col=\"3\" text=\"자금과목\"/><Cell col=\"4\" text=\"거래처코드\"/><Cell col=\"5\" text=\"거래처명\"/><Cell col=\"6\" text=\"적요\"/><Cell col=\"7\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:PLAN_NO\"/><Cell col=\"1\" text=\"bind:PLAN_DATE\"/><Cell col=\"2\" text=\"bind:FUND_CODE\"/><Cell col=\"3\" text=\"bind:FUND_NAME\"/><Cell col=\"4\" text=\"bind:CUSTOMER_CODE\"/><Cell col=\"5\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"6\" text=\"bind:EXPENSE_REPORT\"/><Cell col=\"7\" text=\"bind:PRICE\"/></Band></Format></Formats>");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Button("updatePlanbtn","627.00","17","79","30",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("8");
            obj.set_text("수정");
            this.planTab.findPlan.addChild(obj.name, obj);

            obj = new Button("deletePlan","716.00","17","79","30",null,null,null,null,null,null,this.planTab.findPlan.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.planTab.findPlan.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.planTab.addPlan.form
            obj = new Layout("default","",0,0,this.planTab.addPlan.form,function(p){});
            this.planTab.addPlan.form.addLayout(obj.name, obj);

            //-- Default Layout : this.planTab.findPlan.form
            obj = new Layout("default","",0,0,this.planTab.findPlan.form,function(p){});
            this.planTab.findPlan.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","planTab.addPlan.form.planDate","value","ds_plan","PLAN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","planTab.addPlan.form.fundCode","value","ds_plan","FUND_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","planTab.addPlan.form.fundName","value","ds_plan","FUND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","planTab.addPlan.form.balanceDivision","value","ds_plan","BALANCE_DIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","planTab.addPlan.form.customerCode","value","ds_plan","CUSTOMER_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","planTab.addPlan.form.customerName","value","ds_plan","CUSTOMER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","planTab.addPlan.form.expenseReport","value","ds_plan","EXPENSE_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","planTab.addPlan.form.price","value","ds_plan","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","planTab.addPlan.form.static1","value","ds_plan","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("dailyFundPlanform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("dailyFundPlanform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\operate\dailyFundPlanform.xfdl
        /* 작 성 일 자 : 2024/01/23
        /* 작 성 자 명 : S.U
        /* 설       명 : 일자별자금계획관리 폼
        /*************************************************************/

        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/
        var planNo = '';
        application = nexacro.getApplication();

        // 계정과목 팝업창 호출
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
        	this.planTab.addPlan.form.fundCode.set_value(application.gv_accountCode);
        	this.planTab.addPlan.form.fundName.set_value(application.gv_accountName);
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
        	this.planTab.addPlan.form.customerCode.set_value(application.gv_customerCode);
        	this.planTab.addPlan.form.customerName.set_value(application.gv_customerName);
        }

        // 데이터
        this.reset = function ()
        {
        	this.planTab.addPlan.form.planDate.value = "";
        	this.planTab.addPlan.form.fundCode.value = "";
        	this.planTab.addPlan.form.fundName.value = "";
        	this.planTab.addPlan.form.balanceDivision.value = "";
        	this.planTab.addPlan.form.customerCode.value = "";
        	this.planTab.addPlan.form.customerName.value = "";
        	this.planTab.addPlan.form.expenseReport.value = "";
        	this.planTab.addPlan.form.price.value = "";
        };

        // 자금계획 추가
        this.saveDatabtn_onclick = function (obj,e)
        {
        	trace(this.planTab.addPlan.form.planDate.text); // 탭컴포넌트 - 탭번호 - 폼 - 하위컴포넌트로 접근 경로 명시
        	var bool = confirm("저장하시겠습니까?");
        	if (bool) {
        		if (this.planTab.addPlan.form.planDate.value == '')
        		alert("계획일자를 선택해주세요");
        		else if(this.planTab.addPlan.form.balanceDivision.value == '')
        		alert("구분을 선택해주세요");
        		else if(this.planTab.addPlan.form.expenseReport.value == '')
        		alert("적요를 입력해주세요");
        		else if(this.planTab.addPlan.form.price.value == '')
        		alert("금액을 입력해주세요");
        		else {
        			var id = "insertPlan";
        			var url = "svcOperate::insertPlan";
        			var reqData = "ds_plan=ds_plan";
        			var resData = "";
        			var args = "";
        			var callback = "callback";

        			this.transaction(id, url, reqData, resData, args, callback);
        			alert("저장되었습니다.");
        			this.reset();
        		}
        	}
        };

        // 자금계획 조회
        this.findPlanbtn_onclick = function(obj,e)
        {
        	trace(this.planTab.findPlan.form.startDate.text);
        	trace(this.planTab.findPlan.form.endDate.text);
        	var startDate = this.planTab.findPlan.form.startDate.text;
        	var endDate = this.planTab.findPlan.form.endDate.text;

        	if (this.planTab.findPlan.form.startDate.value == null || this.planTab.findPlan.form.endDate.value == null)
        	alert("조회일자를 선택해주세요");
        	else {
        		var id = "findPlan";
        		var url = "svcOperate::findPlan";
        		var reqData = "";
        		var resData = "ds_inplanList=ds_plan ds_outplanList=ds_plan";
        		var args = "startDate='"+startDate+"' endDate='"+endDate+"'";
        		var callback = "findPlan_callback";

        		this.transaction(id, url, reqData, resData, args, callback);
        	}
        };

        this.findPlan_callback = function ()
        {
        	var increase = "수입";
        	var decrease = "지출";
        	this.ds_inplanList.filter("BALANCE_DIVISION=='"+increase+"'");
        	this.ds_outplanList.filter("BALANCE_DIVISION=='"+decrease+"'");
        };

        // 자금계획 수정
        this.inExpectedPlan_oncellclick = function (obj,e)
        {
        	planNo = this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 0);

        	application.gds_plan.setColumn(0, "PLAN_NO", this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 0));
        	application.gds_plan.setColumn(0, "PLAN_DATE", this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 1));
        	application.gds_plan.setColumn(0, "FUND_CODE", this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 2));
        	application.gds_plan.setColumn(0, "FUND_NAME", this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 3));
        	application.gds_plan.setColumn(0, "CUSTOMER_CODE", this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 4));
        	application.gds_plan.setColumn(0, "CUSTOMER_NAME", this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 5));
        	application.gds_plan.setColumn(0, "EXPENSE_REPORT", this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 6));
        	application.gds_plan.setColumn(0, "PRICE", this.planTab.findPlan.form.inExpectedPlan.getCellText(this.planTab.findPlan.form.inExpectedPlan.currentrow, 7));
        	application.gds_plan.setColumn(0, "BALANCE_DIVISION", "수입");

        	trace(application.gds_plan.getColumn(0, "PLAN_NO"));
        };

        this.outExpectedPlan_oncellclick = function (obj,e)
        {
        	planNo = this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 0);

        	application.gds_plan.setColumn(0, "PLAN_NO", this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 0));
        	application.gds_plan.setColumn(0, "PLAN_DATE", this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 1));
        	application.gds_plan.setColumn(0, "FUND_CODE", this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 2));
        	application.gds_plan.setColumn(0, "FUND_NAME", this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 3));
        	application.gds_plan.setColumn(0, "CUSTOMER_CODE", this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 4));
        	application.gds_plan.setColumn(0, "CUSTOMER_NAME", this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 5));
        	application.gds_plan.setColumn(0, "EXPENSE_REPORT", this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 6));
        	application.gds_plan.setColumn(0, "PRICE", this.planTab.findPlan.form.outExpectedPlan.getCellText(this.planTab.findPlan.form.outExpectedPlan.currentrow, 7));
        	application.gds_plan.setColumn(0, "BALANCE_DIVISION", "지출");
        };

        this.updatePlanbtn_onclick = function ()
        {
        	//띄울 poppdiv의 정보를 작성하고
        	var sID="dailyFundPlanupdateform";
        	var sURL="popup::dailyFundPlanupdateform.xfdl";
        	var param={}; // 생성되는 폼에 파라미터를 넘겨준다.
        	var callbackFunc="dailyFundPlanupdateform_callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        	// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        	// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        };


        // dailyFundPlanupdateform의 콜백함수를 받는 함수 입니다.
        this.dailyFundPlanupdateform_callbackFunc = function(obj,e)
        {
        	trace("<<<<<<< callback function has been called");

        	if(e=='esc'){
        		trace('<<<<<<<<<<<<<<<< this is esc >>>>>>>>>>>>>>>>>>>');
        	}else if(e=='updatePlanbtn'){
        		this.reload();
        		trace(">>>>>>> dailyFundPlanupdateform has been reloaded!!");

        	}
        }

        // 자금계획 삭제
        this.deletePlan_onclick = function(obj,e)
        {
        	trace(planNo);
        	var bool = confirm("계획번호 : " + planNo + "\n삭제하시겠습니까?");

        	if (bool) {
        		var id = "deletePlan";
        		var url = "svcOperate::deletePlan";
        		var reqData = "";
        		var resData = "";
        		var args = "planNo="+planNo;
        		var callback = "deletePlan_callback";

        		this.transaction(id, url, reqData, resData, args, callback);
        		alert("삭제되었습니다");
        		this.findPlanbtn_onclick();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.planTab.addPlan.form.planDate.addEventHandler("onchanged",this.edit_birth_date_onchanged,this);
            this.planTab.addPlan.form.fundCode.addEventHandler("oneditclick",this.fundCode_oneditclick,this);
            this.planTab.addPlan.form.fundCode.addEventHandler("onchanged",this.planTab_addPlan_fundCode_onchanged,this);
            this.planTab.addPlan.form.customerCode.addEventHandler("oneditclick",this.customerCode_oneditclick,this);
            this.planTab.addPlan.form.saveDatabtn.addEventHandler("onclick",this.saveDatabtn_onclick,this);
            this.planTab.findPlan.form.findPlanbtn.addEventHandler("onclick",this.findPlanbtn_onclick,this);
            this.planTab.findPlan.form.inExpectedPlan.addEventHandler("oncellclick",this.inExpectedPlan_oncellclick,this);
            this.planTab.findPlan.form.outExpectedPlan.addEventHandler("oncellclick",this.outExpectedPlan_oncellclick,this);
            this.planTab.findPlan.form.updatePlanbtn.addEventHandler("onclick",this.updatePlanbtn_onclick,this);
            this.planTab.findPlan.form.deletePlan.addEventHandler("onclick",this.deletePlan_onclick,this);
        };
        this.loadIncludeScript("dailyFundPlanform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
