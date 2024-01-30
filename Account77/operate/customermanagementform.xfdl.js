(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("customermanagementform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_customer", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LICENSE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BUSINESS_CONDITIONS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BUSINESS_ITEMS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BASIC_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_DETAIL_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_TEL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_FAX_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("data_for_find_duplication", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LICENSE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BUSINESS_CONDITIONS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BUSINESS_ITEMS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BASIC_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_DETAIL_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_TEL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_FAX_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","365","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래처 관리");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("customer_grid","20","145","1030","395",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_customer");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/><Cell col=\"2\" text=\"대표자\"/><Cell col=\"3\" text=\"업태\"/><Cell col=\"4\" text=\"종목\"/><Cell col=\"5\" text=\"주소\"/><Cell col=\"6\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_CODE\"/><Cell col=\"1\" text=\"bind:CUSTOMER_NAME\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CUSTOMER_CEO\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:CUSTOMER_BUSINESS_CONDITIONS\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:CUSTOMER_BUSINESS_ITEMS\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:CUSTOMER_BASIC_ADDRESS\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:CUSTOMER_TEL_NUMBER\" edittype=\"none\" displaytype=\"normal\" maskedittype=\"string\" controlautosizingtype=\"none\" maskeditmaskchar=\"-\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("register_btn","930","106","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래처 등록");
            obj.set_borderRadius("5px");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Button("reload_btn","790","106","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("새로고침");
            obj.set_borderRadius("5px");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1070,610,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("customermanagementform.xfdl", function() {

        application = nexacro.getApplication();






        this.customermanagementform_onload = function(obj,e)
        {
        	this.reload_btn.set_visible(false);

        	// 그리드에 출력할 데이터를 받을 트랜잭션
        	var id = "customerList";
        	var url = "svcOperate::findCustomerList";
        	var resData = "";
        	var reqData = "ds_customer=ds_customer";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);
        	this.ds_customer.filter('');


        	// 데이터 중복을 검사하기 위한 데이터를 받을 transaction
        	// ---> 모든 거래처의 정보를 받아온다.


        	var id = "customerListForFindDuplication";
        	var url = "svcOperate::findCustomerList";
        	var resData = "";
        	var reqData = "data_for_find_duplication=ds_customer";
        	var args = "";
        	var callback = "callbacked";

        	this.transaction(id, url, resData, reqData, args, callback);
        	this.ds_customer.filter('');


        };


        this.callbacked=function(){

        // 모든 거래처 데이터가 잘 왔는지 확인
        var cnt=this.data_for_find_duplication.getRowCount();
        trace('<<<<<<<<<< cnt is : '+cnt);


        }





        // 거래처 등록 버튼을 누르면 발생하는 이벤트
        this.register_btn_onclick = function(obj,e)
        {






        	var registerBtn=this.register_btn.text;
        	// 새로 등록되는 거래처 코드를 생성하기 위해 현재 등록되어 있는 거래처의 개수를
        	// 구한다.
        	var rCount = this.ds_customer.getRowCount();
        		trace('<<<< rCnout is : '+rCount);

        	if(registerBtn=='거래처 등록'){




        		// 그리드를 더블 클릭하면 수정 모드로 바뀌는데 이때 더블 클릭을 하면
        		// customerdetailform이 열리는 것을 방지하기 위해 그리드의
        	    // oncelldblclick 이벤트를 삭제
        		// ---> 이 이벤트가 걸려있는 "customer_grid"는 "customermanagementform"이
        		//      reload될때 다시 걸림.

        		// customer_grid에 걸려있는 이벤트를 삭제하고
        		var cnt=this.customer_grid.clearEventHandler('oncelldblclick');
        		// 삭제된 이벤트의 갯수를 출력
        		trace('<<<<<<<< deleted event handler count : '+cnt);






        	//버튼의 text가 '거래처 등록' 기존의 데이터 셋을 지우고 새로운 row를 추가
        	var cnt=this.ds_customer.clearData();
        	trace('c is : '+cnt);
        	var nRow = this.ds_customer.addRow();
        	trace('<<<<<<<<< rCount in if statement : '+rCount);

        	//버튼의 text를 업데이트하고
        	this.register_btn.set_text('저 장');


        	//reload버튼을 보이게 한다.
        	this.reload_btn.set_visible(true);


        	// 그리드의 속성을 바꿔서 수정이 가능하게 변경하고,
        	// "CUSTOMER_CODE" 칼럼에 거래처 코드를 입력
        	// ---> 하나의 그리드로 정보를 보여주고 추가하는
        	// 기능을 하게 만들었으므로, 속성을 변경해준다.
         	this.ds_customer.setColumn(nRow,"CUSTOMER_CODE","PTN-"+ (rCount + 1) +"");
        	this.customer_grid.setCellProperty("Body", 1, "edittype", "text");
        	this.customer_grid.setCellProperty("Body", 2, "edittype", "text");
        	this.customer_grid.setCellProperty("Body", 3, "edittype", "text");
        	this.customer_grid.setCellProperty("Body", 4, "edittype", "text");
        	this.customer_grid.setCellProperty("Body", 5, "edittype", "text");
        	this.customer_grid.setCellProperty("Body",6,"displaytype","mask");
        	this.customer_grid.setCellProperty("Body",6,"edittype","mask");
        	this.customer_grid.setCellProperty("Body",6,"maskeditformat","###-####-####");


         	}if(registerBtn=='저 장'){



        		var bool=confirm('저장하시겠습니까?');
        		trace('-----------this is after confirm------------');


        		//빈칸 혹은 형식에 맞지 않는 컴포넌트가 있는지 확인하는 로직




        		if(bool){

        		//
        		this.for_insert_transactionFunc();
        		trace('<<<<<<<<<<<<<<<<< for_insert_transactionFunc has been called.');


        		}else{

        		return;
        		}


               trace('');
               trace('');
               trace('');
               trace('');

        		};


        }




        //위의 코드에서 confirm의 결과가 true이면은 실행
        this.for_insert_transactionFunc=function(){


        	trace('<<<<<<<< call has been arrived at for_insert_transactionFunc!!!');
        	trace('');
        	trace('');
        	trace('');
        	// 그리드 셀의 입력값을 가져와서
        	var custName=this.customer_grid.getCellText(0,1);
        	var custCeo=this.customer_grid.getCellValue(0,2);
        	var custBusinessConditions=this.customer_grid.getCellValue(0,3);
        	var custBusinessItems=this.customer_grid.getCellValue(0,4);
        	var custAddr=this.customer_grid.getCellValue(0,5);
        	var custPhone=this.customer_grid.getCellValue(0,6);
        	trace(custName+'//'+custCeo+'//'+custBusinessConditions+'//'+
        		 custBusinessItems+'//'+custAddr+'//'+custPhone);
        	trace('');
            trace('');
            trace('');
        		// 값이 입력되지 않은 그리드가 있으면은 alert를 띄운다.
        		if(custName==undefined){


        				alert('거래처명을 입력해 주세요.');
        				return;
        		}else if(custCeo==undefined){

        			    alert('대표자명을 입력해 주세요.');
        				return;
        		}else if(custBusinessConditions==undefined){

        			    alert('업태를 입력해 주세요.');
        				return;
        		}else if(custBusinessItems==undefined){

        				alert('종목을 입력해 주세요.');
        				return;
        		}else if(custAddr==undefined){

        				alert('주소를 입력해 주세요.');
        				return;
        		}else if(custPhone==undefined){

        				alert('전화번호를 입력해 주세요.');
        				return;
        		}







        		// 폼이 load 될때 받은 데이터에서 중복되는 거래처명이 있는지 확인
        		var rowCnt=this.data_for_find_duplication.findRow('CUSTOMER_NAME',custName);
        		trace('<<<<<<<< isCustomer exist? if "-1" there isnt exist : '+rowCnt);




        		//중복되는 데이터가 없으면 트랜잭션을 보내고
        	if(rowCnt==-1){

        			trace('customer_code is : ' +this.ds_customer.getColumn(0,'CUSTOMER_CODE'));

        			var id = "regiserCustomer";
        			var url = "svcOperate::registerCustomer";
        			var resData = "ds_customer=ds_customer";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        			var reqData = ""; // 데이터 요청
        			var args = "";
        			var callback = "data_for_dup_callbackFunc";

        			this.transaction(id, url, resData, reqData, args, callback);

        			//중복되는 데이터가 있으면은 alert를 띄운다.
        			}else{

        				alert('이미 존재하는 거래처 입니다.');
        				return;
        			}


        		//다시 버튼을 원상태로 복구
        		this.register_btn.set_text('거래처 등록');



        		// 그리드 셀의 속성을 수정할수 없는 상태로 되돌린다.
        	   this.customer_grid.setCellProperty("Body", 1, "edittype", "none");
        	   this.customer_grid.setCellProperty("Body", 2, "edittype", "none");
        	   this.customer_grid.setCellProperty("Body", 3, "edittype", "none");
        	   this.customer_grid.setCellProperty("Body", 4, "edittype", "none");
        	   this.customer_grid.setCellProperty("Body", 5, "edittype", "none");
        	   this.customer_grid.setCellProperty("Body",6,"displaytype","normal");
        	   this.customer_grid.setCellProperty("Body",6,"edittype","none");
        	   this.customer_grid.setCellProperty("Body",6,"maskeditformat","");

        		//해당 폼을 reload
        		this.reload();


        		}





        // 거래처 정보를 수정 및 삭제하기 위한 modal을 열기위한 이벤트
        this.customer_grid_oncelldblclick = function(obj,e)
        {
        		//셀에 있는 text를 변수에 담는다.
        		var custCode=this.customer_grid.getCellText(e.row,0);
        		var custName=this.customer_grid.getCellText(e.row,1);
        		var custCeo=this.customer_grid.getCellText(e.row,2);
        		var custBusinessConditions=this.customer_grid.getCellText(e.row,3);
        		var custBusinessItems=this.customer_grid.getCellText(e.row,4);
        		var custAddr=this.customer_grid.getCellText(e.row,5);
        		var custPhone=this.customer_grid.getCellText(e.row,6);


        		//변수에 셀의 값들이 제대로 담겼는지 확인
        		trace(custCode+'//'+custName+'//'+custCeo+'//'+custBusinessConditions+'//'+custBusinessItems+'//'+
        			 custAddr+'//'+custPhone);



        			//띄울 poppdiv의 정보를 작성하고
        			var sID="customerdetailform";
        			var sURL="popup::customerdetailform.xfdl";
        			var param={custCode:custCode,
        					   custName:custName,
        					   custCeo:custCeo,
        					   custBusinessConditions:custBusinessConditions,
        					   custBusinessItems:custBusinessItems,
        					   custAddr:custAddr,
        					   custPhone:custPhone
        					  }; // 열리는 폼에 파라미터를 넘겨준다.
        		    var callbackFunc="detailform_callbackFunc";
        			// 해당 프레임을 생성										  //            --파라미터 순서--
        	        var oChildFrame = new ChildFrame(sID, 0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        							                                                      // 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        																		          // 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        																		          // 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소
        	        // 해당 프레임의 띄어지는 위치및 해당 프레임을 화면에 출력	  // 열리는 폼의 크기는 해당 폼의 .xfdl 파일의 속성에서
        		    oChildFrame.set_openalign("center middle"); 					      // 수정해 줄수 있다.
        		    oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);




        };


        this.detailform_callbackFunc=function(obj,val){

        trace('------------------detailform has been closed!!!------------------');
        trace('--------------------------------- val is : '+val);
        if(val=='del_btn'||val=='save_btn'){

        this.reload();

        }


        }








        this.reload_btn_onclick = function(obj,e)
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.customermanagementform_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.customer_grid.addEventHandler("oncelldblclick",this.customer_grid_oncelldblclick,this);
            this.register_btn.addEventHandler("onclick",this.register_btn_onclick,this);
            this.reload_btn.addEventHandler("onclick",this.reload_btn_onclick,this);
        };
        this.loadIncludeScript("customermanagementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
