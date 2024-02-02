(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authorityform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Emp_Auth_List", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("emp_list", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("emp_auth_list","425","165","635","305",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Emp_Auth_List");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회된 권한이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"사원코드\"/><Cell col=\"2\" text=\"EMP_NAME\"/><Cell col=\"3\" text=\"권한코드\"/><Cell col=\"4\" text=\"권한메뉴\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:EMP_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:AUTHORITY_CODE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:AUTHORITY_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("emp_list_grid","60","165","290","305",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("emp_list");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원코드\"/><Cell col=\"1\" text=\"사원명\"/><Cell col=\"2\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:POSITION_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("static_emp_list","115","115","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사원목록");
            obj.set_textAlign("center");
            obj.set_rtl("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","690","128","110","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("권한목록");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("refresh_btn","970","120","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("새로고침");
            this.addChild(obj.name, obj);

            obj = new Button("register_auth_btn","856","120","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("권한생성");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,570,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authorityform.xfdl", function() {

        var bool=true;

        this.authorityform_onload = function(obj,e)
        {
        	this.set_visible(false);

        	//현재 로그인되어 있는 id를 가져옴
        	var	name = application.gds_emp.getColumn(0, "EMP_CODE");


        	if(name!='emp7'){
        		this.emp_list_grid.set_visible(false);
        		this.static_emp_list.set_visible(false);
        		this.refresh_btn.set_visible(false);
        		this.register_auth_btn.set_visible(false);
        	}

        	if(bool==true){


        		//띄울 poppdiv의 정보를 작성하고
        		var sID="authorityauthform";
        		var sURL="popup::authorityauthform.xfdl";
        		var param={}; // 열리는 폼에 데이터를 넘겨준다.
        		var callbackFunc="callbackFunc";
        		// 해당 프레임을 생성												 //            --파라미터 순서--
        		var oChildFrame = new ChildFrame(sID,600, 200, 100, 500, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        		// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        		// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        		// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소 ㄴ
        		// 해당 프레임을 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        		oChildFrame.set_openalign("center middle");
        		oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);

        	}
        	trace('<<<<<onload event has been occured at : authorityform');

        };

        this.callbackFunc=function(obj,val)
        {
        	var	code = application.gds_emp.getColumn(0, "EMP_CODE");
        	//alert('<<< code is :'+code)


        	if(code=='emp7'){

        		//로그인한 사용자가 admin이면 모든 사원의 권한 데이터를 가져옴

        		var id = "selectEmpAuthList";
        		var url = "svcOperate::authorityEmpList";
        		var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        		var reqData ="Emp_Auth_List=gds_authority_emp"; // 데이터 요청
        		var args = "";
        		var callback = "";

        		this.transaction(id, url, resData, reqData, args, callback);

        		trace('<<< tracnsaction for admin has been sent');

        		var id2 = "selecEmpList";
        		var url2 = "svcOperate::findEmpList";
        		var resData2 = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        		var reqData2 ="emp_list=gds_emp"; // 데이터 요청
        		var args2 = "";
        		var callback2 = "callback";

        		this.transaction(id2, url2, resData2, reqData2, args2, callback2);

        		trace('<<< tracnsaction for emp_list has been sent');

        	}else if(code!='emp7'){

        		//로그인한 사용자가 admin이 아니면 로그인한 사용자의 권한 데이터만 가져온다.
        		var id = "selectEmpAuthDetailList";
        		var url = "svcOperate::authorityEmpDetailList";
        		var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        		var reqData ="Emp_Auth_List=gds_authority_emp"; // 데이터 요청
        		var args = "empCode="+code;
        		var callback = "callback";

        		this.transaction(id, url, resData, reqData, args, callback);

        		trace('<<< transaction for other has been sent');
        	}

        	this.set_visible('true');
        }


        this.callback=function(){

        	var empCnt=this.emp_list.getRowCount();
        	trace('empCnt is : '+empCnt);

        	var cnt=this.Emp_Auth_List.getRowCount();
        	trace('emp authority cnt is :'+cnt);

        }

        this.emp_auth_detail_grid_oncelldblclick = function(obj,e)
        {
        	alert('<<<<< celldbl event has been occured at : '+obj);
        };

        // 이거는 화면이 완성 되고 나면은 수정이 필요 ---> 해당 권한의 삭제할 form을 띄울 예정
        this.emp_auth_list_oncelldblclick = function(obj,e)
        {
        	//클릭한 row의 정보를 변수에 할당
        	var empId=this.Emp_Auth_List.getColumn(e.row,0);
        	var empCode=this.Emp_Auth_List.getColumn(e.row,1);
        	var empName=this.Emp_Auth_List.getColumn(e.row,2);
        	var authCode=this.Emp_Auth_List.getColumn(e.row,3);
        	var authName=this.Emp_Auth_List.getColumn(e.row,4);

        	trace('selected data is : '+empCode+' // '+empName+' // '+authCode +' // '+authName);


        	//로그인한 유저의 정보를 변수에 할당
        	var	code = application.gds_emp.getColumn(0, "EMP_CODE");

        	if(code!='emp7'){

        		alert('access denied.');

        	}else if(code=='emp7'){

        		var sID="authoritdetailform";
        		var sURL="popup::authoritydetailform.xfdl";
        		var param={empId:empId,
        			empCode:empCode,
        			empName:empName,
        			authCode:authCode,
        			authName:authName}; // 열리는 폼에 파라미터를 넘겨준다.
        		var callbackFunc="callbackFunc";
        		// 해당 프레임을 생성												 //            --파라미터 순서--
        		var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        		// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        		// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        		// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소 ㄴ
        		// 해당 프레임을 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        		oChildFrame.set_openalign("center middle");
        		oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        	}
        };

        this.emp_list_grid_oncellclick = function(obj,e)
        {
        	var empcode=this.emp_list_grid.getCellText(e.row,0);
        	trace('<<<<< empcode is : '+empcode);

        	var id = "selectEmpAuthDetailList";
        	var url = "svcOperate::authorityEmpDetailList";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData ="Emp_Auth_List=gds_authority_emp"; // 데이터 요청
        	var args = "empCode="+empcode;
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);

        };


        this.refresh_btn_onclick = function(obj,e)
        {
        	this.reload();
        };

        this.register_auth_btn_onclick = function(obj,e)
        {
        	//띄울 poppdiv의 정보를 작성하고
        	var sID="authorityempaddform";
        	var sURL="popup::authorityempaddform.xfdl";
        	var param={}; // 열리는 폼에 파라미터를 넘겨준다.
        	var callbackFunc="auth_addhcallbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID,0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        	// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소 ㄴ
        	// 해당 프레임의 띄어지는 위치및 해당 프레임을 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);
        };

        this.auth_addcallbackFunc=function()
        {
        	trace('<<<<<<<<< addform has been closed');
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown",this.authorityform_onkeydown,this);
            this.addEventHandler("onload",this.authorityform_onload,this);
            this.addEventHandler("onclick",this.authorityform_onclick,this);
            this.addEventHandler("onkeyup",this.authorityform_onkeyup,this);
            this.emp_auth_list.addEventHandler("oncelldblclick",this.emp_auth_list_oncelldblclick,this);
            this.emp_list_grid.addEventHandler("oncellclick",this.emp_list_grid_oncellclick,this);
            this.refresh_btn.addEventHandler("onclick",this.refresh_btn_onclick,this);
            this.register_auth_btn.addEventHandler("onclick",this.register_auth_btn_onclick,this);
            this.Emp_Auth_List.addEventHandler("onload",this.Emp_Auth_List_onload,this);
        };
        this.loadIncludeScript("authorityform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
