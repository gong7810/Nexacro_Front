(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("vehicleLogbookRegistform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vehicle", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHICLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AVAILABILITY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AVAILABILITY\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_vehicleLogbook", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHICLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORE_ODOMETER\" type=\"STRING\" size=\"256\"/><Column id=\"AFTER_ODOMETER\" type=\"STRING\" size=\"256\"/><Column id=\"DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSONAL_DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"NOTES\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("vehiclecode","46","38","73","33",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("차량코드");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Combo("vehicleCodeCombo","139.00","38","82","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("gds_vehicleCode");
            obj.set_datacolumn("VEHICLE_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","46.00","92","602","51",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_vehicle");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"차량번호\"/><Cell col=\"1\" text=\"차종\"/><Cell col=\"2\" text=\"부서코드\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"사원코드\"/><Cell col=\"5\" text=\"사원명\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:VEHICLE_NUMBER\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:VEHICLE_TYPE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:EMP_CODE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:EMP_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("usedate","45","174","73","33",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("사용일자");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Calendar("useDate","176.00","174","130","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("usedate00","387.00","174","87","33",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("사용시작시간");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Calendar("startTime","518.00","174","130","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("normal");
            obj.set_dateformat("HH:mm");
            obj.set_editformat("HH:mm");
            obj.set_datepickerchangetype("auto");
            obj.set_headformat("HH:mm");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Button("saveData","577.00","388","71","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("usedate01","45","227","165","33",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주행 전 계기판의 거리(km)");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Static("usedate01_00","388.00","227","164","33",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주행 후 계기판의 거리(km)");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("before","240.00","227","66","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_format("#,#.###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("after","582.00","227","66","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_format("#,#.###");
            this.addChild(obj.name, obj);

            obj = new Static("usedate01_01","45","280","95","33",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("주행거리(km)");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("distance","224.00","280","82","33",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("usedate01_01_00","386.00","280","122","33",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("업무용 주행거리(km)");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("busiDistance","566.00","280","82","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_format("#,0.###");
            this.addChild(obj.name, obj);

            obj = new Static("usedate01_01_01","45","334","136","33",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("비업무용 주행거리(km)");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("perDistance","224.00","334","82","33",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_format("#,0.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("usedate02","386.00","334","43","33",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("비고");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Edit("notes","457.00","334","191","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("vehicleCode","250.00","38","94","33",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,440,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","vehicleCode","value","ds_vehicleLogbook","VEHICLE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","useDate","value","ds_vehicleLogbook","USE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","startTime","value","ds_vehicleLogbook","START_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","before","value","ds_vehicleLogbook","BEFORE_ODOMETER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","after","value","ds_vehicleLogbook","AFTER_ODOMETER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","distance","value","ds_vehicleLogbook","DISTANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","busiDistance","value","ds_vehicleLogbook","BUSINESS_DISTANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","perDistance","value","ds_vehicleLogbook","PERSONAL_DISTANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","notes","value","ds_vehicleLogbook","NOTES");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("vehicleLogbookRegistform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\popup\vehicleLogbookRegistform.xfdl
        /* 작 성 일 자 : 2024/01/27
        /* 작 성 자 명 : S.U
        /* 설       명 : 업무용차량 운행기록 추가 폼
        /*************************************************************/
        var count = this.parent.count;
        application = nexacro.getApplication();

        this.vehicleLogbookRegistform_onload = function (obj,e)
        {
        	var condition = "사용";
        	application.gds_vehicleCode.filter("AVAILABILITY=='" + condition + "'");
        };

        // 차량코드 선택
        this.vehicleCodeCombo_onitemchanged = function(obj,e)
        {
        	this.vehicleCode.value = this.vehicleCodeCombo.value;
        	var selectCode = this.vehicleCodeCombo.index
        	this.ds_vehicle.setColumn(0, "VEHICLE_CODE", application.gds_vehicleCode.getColumn(selectCode, 0));
        	this.ds_vehicle.setColumn(0, "VEHICLE_NUMBER", application.gds_vehicleCode.getColumn(selectCode, 1));
        	this.ds_vehicle.setColumn(0, "VEHICLE_TYPE", application.gds_vehicleCode.getColumn(selectCode, 2));
        	this.ds_vehicle.setColumn(0, "DEPT_CODE", application.gds_vehicleCode.getColumn(selectCode, 3));
        	this.ds_vehicle.setColumn(0, "DEPT_NAME", application.gds_vehicleCode.getColumn(selectCode, 4));
        	this.ds_vehicle.setColumn(0, "EMP_CODE", application.gds_vehicleCode.getColumn(selectCode, 5));
        	this.ds_vehicle.setColumn(0, "EMP_NAME", application.gds_vehicleCode.getColumn(selectCode, 6));
        };

        // 주행거리 세팅
        this.after_onchanged = function(obj,e)
        {
        	if (this.before.value != null && this.after.value != null) {
        		if (nexacro.toNumber(this.after.value) <= nexacro.toNumber(this.before.value)) {

        			trace(typeof(this.after.value)); // type을 number로 하고 value를 뽑아도 string이다

        			alert("주행 후 계기판의 거리가 주행 전과 같거나 더 적을 수 없습니다");
        			this.after.value = '';
        		} else
        			this.distance.value = this.after.value - this.before.value;
        	}
        };

        // 업무용 사용비율 세팅
        this.busiDistance_onchanged = function(obj,e)
        {
        	if (this.distance.value - this.busiDistance.value < 0) {
        		alert("주행거리보다 더 주행할 수 없습니다");
        		this.busiDistance.value = '';
        	} else
        		this.perDistance.value = this.distance.value - this.busiDistance.value;
        };

        // 저장
        this.saveData_onclick = function(obj,e)
        {
        	this.ds_vehicleLogbook.setColumn(0, "USE_DATE", this.useDate.text);
        	this.ds_vehicleLogbook.setColumn(0, "START_TIME", this.startTime.text);
        	this.ds_vehicleLogbook.setColumn(0, "DEPT_CODE", this.ds_vehicle.getColumn(0, "DEPT_CODE"));
        	this.ds_vehicleLogbook.setColumn(0, "DEPT_NAME", this.ds_vehicle.getColumn(0, "DEPT_NAME"));
        	this.ds_vehicleLogbook.setColumn(0, "EMP_CODE", this.ds_vehicle.getColumn(0, "EMP_CODE"));
        	this.ds_vehicleLogbook.setColumn(0, "EMP_NAME", this.ds_vehicle.getColumn(0, "EMP_NAME"));
        	trace(this.ds_vehicleLogbook.getColumn(0, "USE_DATE"));
        	trace(this.ds_vehicleLogbook.getColumn(0, "START_TIME"));

        	if (this.ds_vehicleLogbook.getColumn(0, "VEHICLE_CODE") == null)
        		alert("운행한 차량코드를 선택해주세요");
        	else if (this.ds_vehicleLogbook.getColumn(0, "USE_DATE") == null)
        		alert("사용일자를 입력해주세요");
        	else if (this.ds_vehicleLogbook.getColumn(0, "START_TIME") == null)
        		alert("시작시간을 입력해주세요");
        	else if (this.ds_vehicleLogbook.getColumn(0, "BEFORE_ODOMETER") == null)
        		alert("주행 전 계기판의 거리를 입력해주세요");
        	else if (this.ds_vehicleLogbook.getColumn(0, "AFTER_ODOMETER") == null)
        		alert("주행 후 계기판의 거리를 입력해주세요");
        	else if (this.ds_vehicleLogbook.getColumn(0, "BUSINESS_DISTANCE") == null)
        		alert("업무용 주행거리를 입력해주세요");
        	else {
        		var bool = confirm("저장하시겠습니까?")

        		if (bool) {
        			var id = "insertVehicleLogbook";
        			var url = "svcOperate::insertVehicleLogbook";
        			var reqData = "ds_vehicleLogbook=ds_vehicleLogbook";
        			var resData = "";
        			var args = "";
        			var callback = "callbackFunc";

        			this.transaction(id, url, reqData, resData, args, callback);
        			alert("저장되었습니다");

        			this.close();
        		}
        	}
        };

        // esc로 창 닫기
        this.vehicleLogbookRegistform_onkeydown = function(obj,e)
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
            this.addEventHandler("onload",this.vehicleLogbookRegistform_onload,this);
            this.addEventHandler("onkeydown",this.vehicleLogbookRegistform_onkeydown,this);
            this.vehicleCodeCombo.addEventHandler("onitemchanged",this.vehicleCodeCombo_onitemchanged,this);
            this.startTime.addEventHandler("onchanged",this.useDate00_onchanged,this);
            this.saveData.addEventHandler("onclick",this.saveData_onclick,this);
            this.after.addEventHandler("onchanged",this.after_onchanged,this);
            this.busiDistance.addEventHandler("onchanged",this.busiDistance_onchanged,this);
            this.perDistance.addEventHandler("onchanged",this.perDistance_onchanged,this);
        };
        this.loadIncludeScript("vehicleLogbookRegistform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
