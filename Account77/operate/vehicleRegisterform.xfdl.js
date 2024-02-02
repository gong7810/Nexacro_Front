(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("vehicleRegisterform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vehicle", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHICLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AVAILABILITY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","375.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무용 차량관리");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("vehicleGrid","139","125","723","330",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_vehicle");
            obj.set_nodatatext("조회된 회사차량이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"차량코드\"/><Cell col=\"1\" text=\"차량번호\"/><Cell col=\"2\" text=\"차종\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"사원코드\"/><Cell col=\"6\" text=\"사원명\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:VEHICLE_CODE\"/><Cell col=\"1\" text=\"bind:VEHICLE_NUMBER\"/><Cell col=\"2\" text=\"bind:VEHICLE_TYPE\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\"/><Cell col=\"4\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" text=\"bind:EMP_CODE\"/><Cell col=\"6\" text=\"bind:EMP_NAME\"/><Cell col=\"7\" text=\"bind:AVAILABILITY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("insertBtn","795","90","67","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("vehicleRegisterform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\operate\vehicleRegisterform.xfdl
        /* 작 성 일 자 : 2024/01/25
        /* 작 성 자 명 : S.U
        /* 설       명 : 업무용차량관리 폼
        /*************************************************************/

        this.vehicleRegisterform_onload = function (obj,e)
        {
        	var id = "findVehicleList";
        	var url = "svcOperate::findVehicleList";
        	var reqData = "";
        	var resData = "ds_vehicle=ds_vehicle";
        	var args = "";
        	var callback = "onload_callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);
        };

        // 업무용차량 상세정보
        this.vehicleGrid_oncelldblclick = function (obj,e)
        {
        	var vehicleCode = this.vehicleGrid.getCellText(this.vehicleGrid.currentrow, 0); // 차량코드를 열리는 폼에 넘김
        	trace(vehicleCode);

        	//띄울 poppdiv의 정보를 작성하고
        	var sID="vehicledetailform";
        	var sURL="popup::vehicledetailform.xfdl";
        	var param={vehicleCode : vehicleCode}; // 생성되는 폼에 파라미터를 넘겨준다.
        	var callbackFunc="vehicledetailform_callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모 프레임의 왼쪽과의 거리,
        	// 부모 프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부모 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        	// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        };

        this.vehicledetailform_callbackFunc = function ()
        {
        	this.reload();
        };

        // 추가
        this.insertBtn_onclick = function(obj,e)
        {
        	//띄울 poppdiv의 정보를 작성하고
        	var sID="vehicleRegistform";
        	var sURL="popup::vehicleRegistform.xfdl";
        	var param={}; // 생성되는 폼에 파라미터를 넘겨준다.
        	var callbackFunc="vehicledetailform_callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모 프레임의 왼쪽과의 거리,
        	// 부모 프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부모 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        	// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        };

        this.vehicledetailform_callbackFunc = function(obj,e)
        {
        	trace("<<<<<<< callback function has been called");

        	if(e=='esc' || e=='list_btn'){
        		trace('<<<<<<<<<<<<<<<< this is esc or list_btn >>>>>>>>>>>>>>>>>>>');
        	}else {
        		this.reload();
        		trace(">>>>>>> vehicleRegistform has been reloaded!!");

        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.vehicleRegisterform_onload,this);
            this.vehicleGrid.addEventHandler("oncelldblclick",this.vehicleGrid_oncelldblclick,this);
            this.insertBtn.addEventHandler("onclick",this.insertBtn_onclick,this);
        };
        this.loadIncludeScript("vehicleRegisterform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
