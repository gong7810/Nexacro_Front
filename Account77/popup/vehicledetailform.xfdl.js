(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("vehicledetailform");
            this.set_titletext("차량 상세정보 폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vehicle", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHICLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AVAILABILITY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_vehicleDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHICLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DISPOSAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"INSURANCE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INSURANCE_COMPANY\" type=\"STRING\" size=\"256\"/><Column id=\"INSURANCE_START_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"INSURANCE_END_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"LEASE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LEASE_START_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"LEASE_END_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"USAGE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category", this);
            obj._setContents("<ColumnInfo><Column id=\"EXPENSE_CATEGORY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EXPENSE_CATEGORY\">800번대</Col></Row><Row><Col id=\"EXPENSE_CATEGORY\">500번대</Col></Row><Row><Col id=\"EXPENSE_CATEGORY\">600번대</Col></Row><Row><Col id=\"EXPENSE_CATEGORY\">700번대</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"LEASE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LEASE_TYPE\">자차</Col></Row><Row><Col id=\"LEASE_TYPE\">렌트</Col></Row><Row><Col id=\"LEASE_TYPE\">리스</Col></Row><Row><Col id=\"LEASE_TYPE\">직원명의</Col></Row><Row><Col id=\"LEASE_TYPE\">직원소유타인명의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_available", this);
            obj._setContents("<ColumnInfo><Column id=\"AVAILABLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AVAILABLE\">사용</Col></Row><Row><Col id=\"AVAILABLE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("vehicleGrid","66.00","45","723","10.2%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_vehicle");
            obj.set_enable("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차량코드\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"차종\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"사원코드\"/><Cell col=\"6\" text=\"사원명\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:VEHICLE_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:VEHICLE_NUMBER\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:VEHICLE_TYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:DEPT_NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:EMP_CODE\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:EMP_NAME\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:AVAILABILITY\" edittype=\"combo\" combodataset=\"ds_available\" combodatacol=\"AVAILABLE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("accountname","8.24%","24.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("계정과목");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Static("currentasset","8.12%","33.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("고정자산");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Edit("accountCode","167.00","124","60","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("0208");
            obj.set_readonly("true");
            obj.set_text("0208");
            this.addChild(obj.name, obj);

            obj = new Edit("accountName","237.00","124","80","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("차량운반구");
            obj.set_readonly("true");
            obj.set_text("차량운반구");
            this.addChild(obj.name, obj);

            obj = new Edit("assetCode","167.00","169","110","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("assetName","287.00","169","100","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("If personal vehicles, Blanks");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("accountName00","58.94%","24.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취득일자");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Calendar("acquisitionDate","587.00","124","132","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("accountName00_00","58.94%","33.40%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("처분일자");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Calendar("disposalDate","587.00","169","132","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("currentasset00","8.24%","42.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("경비구분");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Combo("expenseCategory","167.00","214","144","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_category");
            obj.set_datacolumn("EXPENSE_CATEGORY");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("currentasset00_00","8.00%","51.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("보험여부");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("insuranceStatusCheckBox","173.00","259","69","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가입");
            obj.set_value("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("currentasset00_00_00","31.88%","51.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("보험회사");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Edit("customerCode","357.00","259","63","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("insuranceCompany","432.00","259","118","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("accountName00_01","8.00%","60.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("보험기간");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Calendar("insuranceStartPeriod","167.00","304","144","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","317.00","307","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("insuranceEndPeriod","349.00","304","144","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("accountName00_01_00","8.00%","69.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("임차구분");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Combo("leaseType","167.00","349","166","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_type");
            obj.set_datacolumn("LEASE_TYPE");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("accountName00_01_01","8.00%","78.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("임차기간");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Calendar("leaseStartPeriod","167.00","396","144","6.2%",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","317.00","399","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("leaseEndPeriod","349.00","396","144","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("accountName00_01_01_00","8.00%","87.80%","8.71%","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("사용구분");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("usageWork","167.00","439","83","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("일반업무용");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("usageCommute","257.00","439","83","6.20%",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("출·퇴근용");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("updateBtn","595","458","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("returnBtn","678.00","458","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("deleteBtn","759.00","458","62","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("insuranceStatus","725","257","81","34",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("usageType","725.00","304","81","34",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","accountCode","value","ds_vehicleDetail","ACCOUNT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","accountName","value","ds_vehicleDetail","ACCOUNT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","assetCode","value","ds_vehicleDetail","ASSET_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","assetName","value","ds_vehicleDetail","ASSET_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","acquisitionDate","value","ds_vehicleDetail","ACQUISITION_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","disposalDate","value","ds_vehicleDetail","DISPOSAL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","expenseCategory","value","ds_vehicleDetail","EXPENSE_CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","insuranceStatus","value","ds_vehicleDetail","INSURANCE_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","customerCode","value","ds_vehicleDetail","CUSTOMER_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","insuranceCompany","value","ds_vehicleDetail","INSURANCE_COMPANY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","insuranceStartPeriod","value","ds_vehicleDetail","INSURANCE_START_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","insuranceEndPeriod","value","ds_vehicleDetail","INSURANCE_END_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","leaseType","value","ds_vehicleDetail","LEASE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","leaseStartPeriod","value","ds_vehicleDetail","LEASE_START_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","leaseEndPeriod","value","ds_vehicleDetail","LEASE_END_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","usageType","value","ds_vehicleDetail","USAGE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("vehicledetailform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\popup\vehicledetailform.xfdl
        /* 작 성 일 자 : 2024/01/26
        /* 작 성 자 명 : S.U
        /* 설       명 : 업무용차량 상세 폼
        /*************************************************************/

        var vehicleCode = this.parent.vehicleCode;
        application = nexacro.getApplication();

        // 선택 업무용차량 조회
        this.vehicledetailform_onload = function (obj,e)
        {
        	var id = "findVehicle";
        	var url = "svcOperate::findVehicle";
        	var reqData ="";
        	var resData ="ds_vehicle=ds_vehicle";
        	var args = "vehicleCode="+vehicleCode;
        	var callback = "findVehicle_callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);
        };

        // 선택 업무용차량상세 조회
        this.findVehicle_callbackFunc = function ()
        {
        	var id = "findVehicleDetail";
        	var url = "svcOperate::findVehicleDetail";
        	var reqData ="";
        	var resData ="ds_vehicleDetail=ds_vehicleDetail";
        	var args = "vehicleCode="+vehicleCode;
        	var callback = "onload_callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);

        };

        // 조회후 콜백 처리
        this.onload_callbackFunc = function ()
        {
        	// 보험여부 체크박스 처리
        	if (this.insuranceStatus.value == "여") {
        		this.insuranceStatusCheckBox.value = true;
        	} else {
        		this.insuranceStatusCheckBox.value = false;
        	}

        	// 사용구분 체크박스 처리
        	if (this.usageType.value == "일반업무용") {
        		this.usageWork.value = true;
        		this.usageCommute.value = false;
        	} else {
        		this.usageWork.value = false;
        		this.usageCommute.value = true;
        	}
        };

        // 고정자산 선택 팝업창 호출
        this.assetName_oneditclick = function(obj,e)
        {
        	if (this.assetName.readonly == false) {
        		var sID="currentAssetselectform";
        		var sURL="popup::currentAssetselectform.xfdl";
        		var param="";
        		var callbackFunc="currentAssetselectform_callbackFunc";
        		// 해당 프레임을 생성												 //            --파라미터 순서--
        		var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        		// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        		// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        		// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        		// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        		oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        		oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        	}
        };

        // 선택 고정자산 세팅
        this.currentAssetselectform_callbackFunc = function ()
        {
        	this.assetCode.set_value(application.gv_assetCode);
        	this.assetName.set_value(application.gv_assetName);
        };

        // 거래처 팝업창 호출
        this.insuranceCompany_oneditclick = function(obj,e)
        {
        	if (this.insuranceCompany.readonly == false) {
        		var sID="customercodeform";
        		var sURL="popup::customercodeform.xfdl";
        		var param={vehicle : "vehicle"};
        		var callbackFunc="customercodeform_callbackFunc";
        		// 해당 프레임을 생성												 //            --파라미터 순서--
        		var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        		// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        		// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        		// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        		// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        		oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        		oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        	}
        };

        // 선택 거래처 세팅
        this.customercodeform_callbackFunc = function()
        {
        	this.customerCode.set_value(application.gv_customerCode);
        	this.insuranceCompany.set_value(application.gv_customerName);
        }

        // 보험가입 여부처리
        this.insuranceStatusCheckBox_onclick = function(obj,e)
        {
        	if (this.insuranceStatusCheckBox.value == true) {
        		this.insuranceStatus.value = '여';
        		this.insuranceCompany.set_readonly(false);
        		this.insuranceStartPeriod.set_readonly(false);
        		this.insuranceEndPeriod.set_readonly(false);
        	} else {
        		this.insuranceStatus.value = '부';
        		this.customerCode.value = '';
        		this.insuranceCompany.value = '';
        		this.insuranceStartPeriod.value = '';
        		this.insuranceEndPeriod.value = '';
        		this.insuranceCompany.set_readonly(true);
        		this.insuranceStartPeriod.set_readonly(true);
        		this.insuranceEndPeriod.set_readonly(true);
        	}
        };

        // 임차구분에 따른 임차기간처리
        this.leaseType_onitemchanged = function(obj,e)
        {
        	if (this.leaseType.value == "자차") {
        		this.leaseStartPeriod.value = '';
        		this.leaseEndPeriod.value = '';
        		this.leaseStartPeriod.set_readonly(true);
        		this.leaseEndPeriod.set_readonly(true);
        	} else {
        		this.leaseStartPeriod.set_readonly(false);
        		this.leaseEndPeriod.set_readonly(false);
        	}
        };

        // 사용구분 toggle처리
        this.usageWork_onclick = function(obj,e)
        {
        	if (this.usageWork.value == true) {
        		this.usageCommute.value = false;
        		this.usageType.value = "일반업무용";
        	} else if (!this.usageWork.value && !this.usageCommute.value) {
        		this.usageType.value = "";
        	}
        };
        // 사용구분 toggle처리
        this.usageCommute_onclick = function(obj,e)
        {
        	if (this.usageCommute.value == true) {
        		this.usageWork.value = false;
        		this.usageType.value = "출·퇴근용";
        	} else if (!this.usageWork.value && !this.usageCommute.value) {
        		this.usageType.value = "";
        	}
        };

        // 수정
        this.updateBtn_onclick = function(obj,e)
        {
        	if(this.updateBtn.text == "수정") {
        		this.updateBtn.set_text("저장");
        		this.vehicleGrid.enable = true;
        		this.assetName.set_readonly(false);
        		this.acquisitionDate.set_readonly(false);
        		this.disposalDate.set_readonly(false);
        		this.expenseCategory.set_readonly(false);
        		this.insuranceStatusCheckBox.set_readonly(false);
        		this.insuranceCompany.set_readonly(false);
        		this.insuranceStartPeriod.set_readonly(false);
        		this.insuranceEndPeriod.set_readonly(false);
        		this.leaseType.set_readonly(false);
        		this.leaseStartPeriod.set_readonly(false);
        		this.leaseEndPeriod.set_readonly(false);
        		this.usageWork.set_readonly(false);
        		this.usageCommute.set_readonly(false);

        		this.insuranceStatusCheckBox_onclick();
        		this.leaseType_onitemchanged();
        	} else {

        		if (this.ds_vehicle.getColumn(0, 5) == null) {
        			alert("사원코드를 입력해주세요");
        		} else if (this.ds_vehicle.getColumn(0, 6) == null) {
        			alert("사원명을 입력해주세요");
        		} else {
        			this.ds_vehicleDetail.setColumn(0, "ACQUISITION_DATE", this.acquisitionDate.text);

        			if (this.disposalDate.text == "    -  -  ")
        				this.ds_vehicleDetail.setColumn(0, "DISPOSAL_DATE", this.disposalDate.value);
        			else
        				this.ds_vehicleDetail.setColumn(0, "DISPOSAL_DATE", this.disposalDate.text);

        			if (this.insuranceStartPeriod.text == "    -  -  ")
        				this.ds_vehicleDetail.setColumn(0, "INSURANCE_START_PERIOD", this.insuranceStartPeriod.value);
        			else
        				this.ds_vehicleDetail.setColumn(0, "INSURANCE_START_PERIOD", this.insuranceStartPeriod.text);

        			if (this.insuranceEndPeriod.text == "    -  -  ")
        				this.ds_vehicleDetail.setColumn(0, "INSURANCE_END_PERIOD", this.insuranceEndPeriod.value);
        			else
        				this.ds_vehicleDetail.setColumn(0, "INSURANCE_END_PERIOD", this.insuranceEndPeriod.text);

        			if (this.leaseStartPeriod.text == "    -  -  ")
        				this.ds_vehicleDetail.setColumn(0, "LEASE_START_PERIOD", this.leaseStartPeriod.value);
        			else
        				this.ds_vehicleDetail.setColumn(0, "LEASE_START_PERIOD", this.leaseStartPeriod.text);

        			if (this.leaseEndPeriod.text == "    -  -  ")
        				this.ds_vehicleDetail.setColumn(0, "LEASE_END_PERIOD", this.leaseEndPeriod.value);
        			else
        				this.ds_vehicleDetail.setColumn(0, "LEASE_END_PERIOD", this.leaseEndPeriod.text);

        			const bool = confirm("저장하시겠습니까?");

        			if (bool) {
        				var id = "updateVehicle";
        				var url = "svcOperate::updateVehicle";
        				var reqData = "ds_vehicle=ds_vehicle ds_vehicleDetail=ds_vehicleDetail";
        				var resData = "";
        				var args = "";
        				var callback = "callbackFunc";

        				this.transaction(id, url, reqData, resData, args, callback);

        				alert("저장되었습니다");
        				this.close();
        			}
        		}
        	}
        }

        // 목록
        this.returnBtn_onclick = function(obj,e)
        {
        	this.close('list_btn');
        };

        // 삭제
        this.deleteBtn_onclick = function(obj,e)
        {
        	var vehicleCode = this.vehicleGrid.getCellText(0,0);

        	const bool = confirm("삭제하시겠습니까?\n(해당 차량의 모든 정보가 삭제됩니다)");

        	if (bool) {
        		var id = "deleteVehicle";
        		var url = "svcOperate::deleteVehicle";
        		var reqData = "";
        		var resData = "";
        		var args = "vehicleCode="+vehicleCode;
        		var callback = "callbackFunc";

        		this.transaction(id, url, reqData, resData, args, callback);

        		alert("삭제되었습니다");
        		this.close();
        	}
        };

        // esc로 창 닫기
        this.vehicledetailform_onkeydown = function(obj,e)
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
            this.addEventHandler("onload",this.vehicledetailform_onload,this);
            this.addEventHandler("onkeydown",this.vehicledetailform_onkeydown,this);
            this.assetName.addEventHandler("oneditclick",this.assetName_oneditclick,this);
            this.insuranceStatusCheckBox.addEventHandler("onclick",this.insuranceStatusCheckBox_onclick,this);
            this.insuranceCompany.addEventHandler("oneditclick",this.insuranceCompany_oneditclick,this);
            this.leaseType.addEventHandler("onitemchanged",this.leaseType_onitemchanged,this);
            this.usageWork.addEventHandler("onclick",this.usageWork_onclick,this);
            this.usageCommute.addEventHandler("onclick",this.usageCommute_onclick,this);
            this.updateBtn.addEventHandler("onclick",this.updateBtn_onclick,this);
            this.returnBtn.addEventHandler("onclick",this.returnBtn_onclick,this);
            this.deleteBtn.addEventHandler("onclick",this.deleteBtn_onclick,this);
        };
        this.loadIncludeScript("vehicledetailform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
