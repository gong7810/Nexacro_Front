(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("vehicleLogBookform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vehicle", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHICLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AVAILABILITY\" type=\"STRING\" size=\"256\"/><Column id=\"DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_USAGE_RATIO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_vehicleLogbook", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHICLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSONAL_DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_ODOMETER\" type=\"STRING\" size=\"256\"/><Column id=\"AFTER_ODOMETER\" type=\"STRING\" size=\"256\"/><Column id=\"NOTES\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","385.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무용 차량 운행기록부");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("vehicleGrid","64.00","96","915","234",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_vehicle");
            obj.set_nodatatext("조회된 회사차량이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"110\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차량코드\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"차종\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"사원코드\"/><Cell col=\"6\" text=\"사원명\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"주행거리(KM)\"/><Cell col=\"9\" text=\"업무용 사용거리(KM)\"/><Cell col=\"10\" text=\"업무사용비율(%)\"/></Band><Band id=\"body\"><Cell text=\"bind:VEHICLE_CODE\"/><Cell col=\"1\" text=\"bind:VEHICLE_NUMBER\"/><Cell col=\"2\" text=\"bind:VEHICLE_TYPE\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" text=\"bind:EMP_CODE\"/><Cell col=\"6\" text=\"bind:EMP_NAME\"/><Cell col=\"7\" text=\"bind:AVAILABILITY\"/><Cell col=\"8\" text=\"bind:DISTANCE\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:BUSINESS_DISTANCE\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:BUSINESS_USAGE_RATIO\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("insertBtn","913.00","65","67","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("vehicleLogbookGrid","65.00","365","915","150",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_vehicleLogbook");
            obj.set_nodatatext("해당 차량의 운행기록이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"125\"/><Column size=\"135\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"155\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사용일자\"/><Cell col=\"1\" text=\"시작시간\"/><Cell col=\"2\" text=\"주행거리(KM)\"/><Cell col=\"3\" text=\"업무용 사용거리(KM)\"/><Cell col=\"4\" text=\"비업무용 사용거리(KM)\"/><Cell col=\"5\" text=\"주행 전 계기판(KM)\"/><Cell col=\"6\" text=\"주행 후 계기판(KM)\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:USE_DATE\"/><Cell col=\"1\" text=\"bind:START_TIME\"/><Cell col=\"2\" text=\"bind:DISTANCE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:BUSINESS_DISTANCE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:PERSONAL_DISTANCE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:BEFORE_ODOMETER\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:AFTER_ODOMETER\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:NOTES\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("deleteBtn","912.00","335","67","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("vehicleLogBookform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\operate\vehicleLogBookform.xfdl
        /* 작 성 일 자 : 2024/01/27
        /* 작 성 자 명 : S.U
        /* 설       명 : 업무용차량 운행기록부 폼
        /*************************************************************/

        application = nexacro.getApplication();
        var vehicleCode = '';
        var selectDate = '';
        var selectTime = '';
        var rowNum = '';

        this.vehicleLogBookform_onload = function (obj,e)
        {
        	var id = "findVehicleList";
        	var url = "svcOperate::findVehicleList";
        	var reqData = "";
        	var resData = "ds_vehicle=ds_vehicle";
        	var args = "";
        	var callback = "callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);
        };

        // 업무용차량 운행기록 상세정보
        this.vehicleGrid_oncellclick = function (obj,e)
        {
        	vehicleCode = this.vehicleGrid.getCellText(e.row, 0);

        	var id = "findVehicleLogbookList";
        	var url = "svcOperate::findVehicleLogbookList";
        	var reqData = "";
        	var resData = "ds_vehicleLogbook=ds_vehicleLogbook";
        	var args = "vehicleCode="+vehicleCode;
        	var callback = "callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);

        	selectDate = '';
        	selectTime = '';

        };

        // 운행기록 셀 클릭
        this.vehicleLogbookGrid_oncellclick = function (obj,e)
        {
        	selectDate = this.vehicleLogbookGrid.getCellText(e.row, 0);
        	selectTime = this.vehicleLogbookGrid.getCellText(e.row, 1);
        	rowNum = e.row;

        	trace(rowNum);
        };

        // 추가
        this.insertBtn_onclick = function(obj,e)
        {
        	var count = this.ds_vehicle.getRowCount();	// 등록된 차량코드의 수
        	application.gds_vehicleCode.deleteAll();	// 전역 데이터셋 차량코드 초기화

        	for (var i = 0; i < count; i++) {
        		application.gds_vehicleCode.addRow();	// count만큼 행추가
        		application.gds_vehicleCode.setColumn(i, "VEHICLE_CODE", this.ds_vehicle.getColumn(i, 0));
        		application.gds_vehicleCode.setColumn(i, "VEHICLE_NUMBER", this.ds_vehicle.getColumn(i, 1));
        		application.gds_vehicleCode.setColumn(i, "VEHICLE_TYPE", this.ds_vehicle.getColumn(i, 2));
        		application.gds_vehicleCode.setColumn(i, "DEPT_CODE", this.ds_vehicle.getColumn(i, 3));
        		application.gds_vehicleCode.setColumn(i, "DEPT_NAME", this.ds_vehicle.getColumn(i, 4));
        		application.gds_vehicleCode.setColumn(i, "EMP_CODE", this.ds_vehicle.getColumn(i, 5));
        		application.gds_vehicleCode.setColumn(i, "EMP_NAME", this.ds_vehicle.getColumn(i, 6));
        		application.gds_vehicleCode.setColumn(i, "AVAILABILITY", this.ds_vehicle.getColumn(i, 7));

        		// index에 맞게 전역 데이터셋에 차량코드 추가
        	}


        	//띄울 poppdiv의 정보를 작성하고
        	var sID="vehicleLogbookRegistform";
        	var sURL="popup::vehicleLogbookRegistform.xfdl";
        	var param={count:count}; // 생성되는 폼에 파라미터를 넘겨준다.
        	var callbackFunc="onload_callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모 프레임의 왼쪽과의 거리,
        	// 부모 프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부모 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        	// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        };

        // 삭제
        this.deleteBtn_onclick = function(obj,e)
        {
        	if (selectDate == '' || selectTime == '')
        		alert("운행기록을 선택해주세요");
        	else {
        		const bool = confirm("차량코드 : " + vehicleCode + "\n사용일자 : " + selectDate + " " + selectTime + "\n운행기록을 삭제하시겠습니까?");

        		if (bool) {
        			var id = "deleteVehicleLogbook";
        			var url = "svcOperate::deleteVehicleLogbook";
        			var reqData = "";
        			var resData = "";
        			var args = "vehicleCode='"+vehicleCode+"'"+" selectDate='"+selectDate+"'"+" selectTime='"+selectTime+"'";
        			var callback = "callbackFunc";

        			this.transaction(id, url, reqData, resData, args, callback);

        			alert("삭제되었습니다");
        			selectDate = '';
        			selectTime = '';

        			this.ds_vehicleLogbook.deleteRow(rowNum);
        		}
        	}
        };

        this.onload_callbackFunc = function(obj,e)
        {
        	trace("<<<<<<< callback function has been called");

        	if(e=='esc'){
        		trace('<<<<<<<<<<<<<<<< this is esc_btn >>>>>>>>>>>>>>>>>>>');
        	}else {
        		this.reload();
        		trace(">>>>>>> vehicleLogBookform has been reloaded!!");

        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.vehicleLogBookform_onload,this);
            this.vehicleGrid.addEventHandler("oncellclick",this.vehicleGrid_oncellclick,this);
            this.insertBtn.addEventHandler("onclick",this.insertBtn_onclick,this);
            this.vehicleLogbookGrid.addEventHandler("oncellclick",this.vehicleLogbookGrid_oncellclick,this);
            this.deleteBtn.addEventHandler("onclick",this.deleteBtn_onclick,this);
        };
        this.loadIncludeScript("vehicleLogBookform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
