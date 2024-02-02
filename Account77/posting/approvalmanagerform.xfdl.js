(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("slipApprovalForm");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_slipStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STATUS\">전체검색</Col></Row><Row><Col id=\"STATUS\">작성중</Col></Row><Row><Col id=\"STATUS\">승인요청</Col></Row><Row><Col id=\"STATUS\">승인완료</Col></Row><Row><Col id=\"STATUS\">작성중(반려)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BALANCE_DIVISION\">차변</Col></Row><Row><Col id=\"BALANCE_DIVISION\">대변</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_slip","1.85%","9.47%","96.30%","25.79%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_slip");
            obj.set_autosizingtype("row");
            obj.set_nodatatext("조회된 전표가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"93\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"전표유형\"/><Cell col=\"2\" text=\"날짜\"/><Cell col=\"3\" text=\"작성자코드\"/><Cell col=\"4\" text=\"품의내역\"/><Cell col=\"5\" text=\"승인날짜\"/><Cell col=\"6\" text=\"승인자\"/><Cell col=\"7\" text=\"승인상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:SLIP_DESCRIPTION\"/><Cell col=\"1\" text=\"bind:SLIP_TYPE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REPORTING_DATE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REPORTING_EMP_CODE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:EXPENSE_REPORT\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:APPROVAL_DATE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:APPROVAL_EMP_CODE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:SLIP_STATUS\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_journal","1.85%","41.93%","96.30%","25.44%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_journal");
            obj.set_autosizingtype("row");
            obj.set_nodatatext("조회된 분개가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"236\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"분개일련번호\"/><Cell col=\"2\" text=\"계정코드\"/><Cell col=\"3\" text=\"계정과목\"/><Cell col=\"4\" text=\"대차구분\"/><Cell col=\"5\" text=\"거래처코드\"/><Cell col=\"6\" text=\"거래처명\"/><Cell col=\"7\" text=\"차변금액\"/><Cell col=\"8\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JOURNAL_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:BALANCE_DIVISION\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_combo\" combodatacol=\"BALANCE_DIVISION\" combocodecol=\"BALANCE_DIVISION\"/><Cell col=\"5\" text=\"bind:CUSTOMER_CODE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:CUSTOMER_NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:LEFT_DEBTOR_PRICE\" textAlign=\"center\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:RIGHT_CREDITS_PRICE\" textAlign=\"center\" displaytype=\"number\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_journal_detail","1.85%","73.68%","96.30%","24.56%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_journal_detail");
            obj.set_nodatatext("조회된 분개상세가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"264\"/><Column size=\"123\"/><Column size=\"174\"/><Column size=\"247\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"분개번호\"/><Cell col=\"2\" text=\"코드\"/><Cell col=\"3\" text=\"분개상세항목\"/><Cell col=\"4\" text=\"상세내용\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JOURNAL_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ACCOUNT_CONTROL_TYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ACCOUNT_CONTROL_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_start","19","14","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_end","186","14","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("bt_appSlip","85.19%","2.98%","5.46%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전표승인");
            this.addChild(obj.name, obj);

            obj = new Button("bt_cancleApp","91.30%","2.98%","5.46%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전표반려");
            this.addChild(obj.name, obj);

            obj = new Button("bt_searchSlip","441","20","79","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","156","17","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_status","330","22","98","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_slipStatus");
            obj.set_datacolumn("STATUS");
            obj.set_codecolumn("STATUS");
            obj.set_text("전체검색");
            obj.set_value("전체검색");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("approvalmanagerform.xfdl","scripts::commonDate.xjs");
        this.registerScript("approvalmanagerform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        application = nexacro.getApplication();

        this.slipApprovalForm_onload = function(obj,e)
        {
        	application.gds_slip.clear();
        	application.gds_journal.clear();
        	application.gds_journal_detail.clear();
        	today = this.gfn_today().toString();
        	firstday = this.gfn_todayFirst().toString();

        	this.calendar_start.set_value(firstday);
        	this.calendar_end.set_value(today);
        };






        //조회


        this.bt_searchSlip_onclick = function(obj,e)
        {


        		application.gds_slip.clear();
        	application.gds_journal.clear();
        	application.gds_journal_detail.clear();



        	var slipStatus = this.combo_status.value;
        	var startDate = this.calendar_start.value;
        	var endDate = this.calendar_end.value;

        	var sYear = startDate.toString().substring(0,4);
        	var sMonth = startDate.toString().substring(4,6);
        	var sDay = startDate.toString().substring(6,8);
        	var sDate = sYear+"-"+sMonth+"-"+sDay;

        	var eYear = endDate.toString().substring(0,4);
        	var eMonth = endDate.toString().substring(4,6);
        	var eDay = endDate.toString().substring(6,8);
        	var eDate = eYear+"-"+eMonth+"-"+eDay;

        	trace("sDate : "+sDate+"	eDate : "+eDate);

        	application.gds_slip.filter("");
        	application.gds_journal.filter("SLIP_NO=='X'");
        	application.gds_journal_detail.filter("JOURNAL_NO=='X'");




        //
        // 	var startDate = this.calendar_start.value;
        // 	var sYear = startDate.toString().substring(0,4);
        // 	var sMonth = startDate.toString().substring(4,6);
        // 	var sDay = startDate.toString().substring(6,8);
        // 	var sDate = sYear+"-"+sMonth+"-"+sDay;
        //
        // 	var endDate = this.calendar_end.value;
        // 	var eYear = endDate.toString().substring(0,4);
        // 	var eMonth = endDate.toString().substring(4,6);
        // 	var eDay = endDate.toString().substring(6,8);
        // 	var eDate = eYear+"-"+eMonth+"-"+eDay;

        // 	if(startDate && endDate ){
        // 		var id = "findRangedSlipList";
        // 		var url = "svcPosting::findRangedSlipList";
        // 		var resData = "gds_slip=gds_slip";
        // 		var reqData = "";
        // 		var args = "startDate='"+sDate+"' endDate='"+eDate+"' slipStatus='승인완료'";
        // 		var callback = "callback";

        			if(startDate && endDate && slipStatus){
        		// 전표 다가지고옴
        		var id = "findRangedSlipList";
        		var url = "svcPosting::findRangedSlipList";
        		var resData = "gds_slip=gds_slip";
        		var reqData = "";
        		var args = "startDate='"+sDate+"' endDate='"+eDate+"' slipStatus='"+slipStatus+"'"; // 넘어갈때 parameter (스프링 부트로넘어갈때)
        		var callback = "callback";

        		/*this.transaction(id, url, reqData, resData, args, callback, false);*/

        		this.transaction(id, url, reqData, resData, args, callback, false);



        	}else{
        		alert("날짜를 확인해주세요.");
        	}
        	var rowcount = application.gds_slip.rowcount;

        	application.gds_slip.addColumn("SLIP_DESCRIPTION", "string" , 1); // 칼럼명, 칼럼타입, 데이터 길이
        	for(index=0 ; index<rowcount ; index++){
        		application.gds_slip.setColumn(index,"SLIP_DESCRIPTION",0); // 선택해제 세팅
        	}

        };




        //분개조회
        this.grid_slip_oncellclick = function(obj,e)
        {
        	var check = application.gds_slip.getColumn(e.row, "SLIP_DESCRIPTION");
        		trace("check 2 :"+check);
        	var slipNo = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_NO");

        	var id = "findJournalListForSlip";
        	var url = "svcPosting::findSingleJournalList";
        	var resData = "";
        	var reqData = "gds_journal=gds_journal";
        	var args = "slipNo='"+slipNo+"'";
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);
        	application.gds_journal.filter("SLIP_NO=='"+slipNo+"'");
        };

        //분개상세조회
        this.grid_journal_oncellclick = function(obj,e)
        {
        	var selJournalNo = application.gds_journal.getColumn(application.gds_journal.rowposition, "JOURNAL_NO");

        	var id = "findJournalDetailInfo";
        	var url = "svcPosting::findJournalDetailList";
        	var resData = "";
        	var reqData = "gds_journal_detail=gds_journalDetail";
        	var args = "journalNo='"+selJournalNo+"'";
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);

        	application.gds_journal_detail.filter("JOURNAL_NO=='"+selJournalNo+"'");
        };


        var executionType; // 실행유형

        //전표승인
        this.bt_appSlip_onclick = function(obj,e)
        {

        	executionType = "승인완료";
        	var today = this.gfn_today().toString();

        // 	var empCode = application.gds_emp.getColumn(0, "EMP_CODE"); // 오류 발생
        // 				trace(empCode); // 확인 안됨

        	var count = 0;
        	var check = "";
        	var rowcount = this.grid_slip.rowcount;
        	/*var slipstatus = this.CheckBox.getDisplayText("SLIP_STATUS")*/


        	for(index=0 ; index<rowcount ; index++){

        		check = application.gds_slip.getColumn(index, "SLIP_DESCRIPTION");
        		trace(check);
        		if(check==1){	//체크되었을때 1, 안되었을때 0
        		var reportingEmpCode=application.gds_slip.getColumn(index,"REPORTING_EMP_CODE");
        			application.gds_slip.setColumn(index,"SLIP_STATUS","승인완료");
        			application.gds_slip.setColumn(index,"APPROVAL_DATE",today);
        			application.gds_slip.setColumn(index,"APPROVAL_EMP_CODE",reportingEmpCode);
        			application.gds_slip.setColumn(index,"SLIP_DESCRIPTION", null);
        			count++;
        			//var selSlipNo=application.gds_slip.getColumn(index,"SLIP_NO");

        			//application.gds_journal.filter("SLIP_NO=='"+selSlipNo+"'");

        			//var appDate = nexacro.getApplication().gds_slip.getColumn(index,"APPROVAL_DATE");
        			//this.Grid_slip.setCellProperty("Body",3,"text",appDate);
        			// 그리드에 승인날짜보이게
        		}
        	}

        	if(count==0){
        		alert("선택된 항목이 없습니다. 전표를 체크 해 주세요.");
        	}else{
        		this.approvalSlip(executionType); // 전표 승인 실행 함수
        	}
        };

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        //전표승인실행
        this.approvalSlip = function(executionType){

        	var id = "approveSlip";
        	if(executionType == "작성중(반려)"){
        		id = "cancleSlip";
        	}

        	if(confirm("선택한 전표를 " + executionType + "하시겠습니까?")){


        		var url = "svcPosting::approveSlip";
        		var reqData = "gds_slip=gds_slip"; //:u -> 변경된 내용 서버로 되돌려 보낼때 사용
        		var resData = "";
        		var args= "";
        		/*var args = "APPROVAL_DATE='"+APPROVAL_DATE+"' SLIP_STATUS='"+"승인요청"+"'";*/
        		//var args = "empCode='"+application.gv_empCode+"'";
        		var callback = "callback";

        		this.transaction(id, url, reqData, resData, args, callback, false);
        		//this.transaction(id, url, resData, reqData, args, callback, false);

        	}else{
        		this.bt_searchSlip_onclick(); // 다시 조회버튼
        	}
        }




        //전표반려
        this.bt_cancleApp_onclick = function(obj,e)
        {
        	executionType = "작성중(반려)";
        	var today = this.gfn_today().toString();
        	var empCode = application.gds_emp.getColumn(0, "EMP_CODE");
        	var count=0;
        	var check = "";
        	var rowcount = this.grid_slip.rowcount;

        	for(index=0 ; index < rowcount ; index++){
        		check = nexacro.getApplication().gds_slip.getColumn(index,"SLIP_DESCRIPTION")
        		if(check==1){

        			application.gds_slip.setColumn(index,"SLIP_STATUS","작성중(반려)");
        			application.gds_slip.setColumn(index,"APPROVAL_EMP_CODE","");
        			application.gds_slip.setColumn(index,"APPROVAL_DATE","");
        			application.gds_slip.setColumn(index,"SLIP_DESCRIPTION", null);
        			//nexacro.getApplication().gds_slip.setColumn(index,"SLIP_DESCRIPTION", null);

        			//var selSlipNo=nexacro.getApplication().gds_slip.getColumn(index,"SLIP_NO");
        			//var reDate=nexacro.getApplication().gds_slip.getColumn(index,"REPORTING_DATE");
        			//this.Grid_slip.setCellProperty("Body",3,"text",reDate);
        			count++

        		}
        	}
        	if(count==0){
        		alert("선택된 항목이 없습니다\n 전표를 체크해주세요.");
        	}else{
        		this.approvalSlip(executionType);
        	}
        };





        //콜백
        this.callback = function(trid, ErrorCode, ErrorMsg){
        	trace("trid  :"+trid)
        	if(trid == "findDisApprovalSlipList"){ //전표
        		if(ErrorCode <0){
        			alert("조회 실패 : " + ErrorMsg);
        		}
        	}else if(trid=="findSingleJournalList"){ //분개
        		if(ErrorCode <0){
        			alert("분개 조회 실패 : " + ErrorMsg);
        		}
        	}else if(trid=="getJournalDetailList"){//분개상세
        		if(ErrorCode <0){
        			alert("분개상세조회 실패 : " + ErrorMsg);
        		}
        	}else if(trid=="approveSlip")	{
        		if(ErrorCode <0){
        			alert("승인 실패 : " + ErrorMsg);
        		}else{
        			trace("승인성공");
        			alert("승인되었습니다");
        			this.bt_searchSlip_onclick();
        		}
        	}else if(trid=="cancleSlip"){
        		if(ErrorCode <0){
        			alert("반려 실패 : " + ErrorMsg);
        		}else{
        			alert("반려되었습니다");
        			gds_slip.clear();
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.slipApprovalForm_onload,this);
            this.grid_slip.addEventHandler("oncellclick",this.grid_slip_oncellclick,this);
            this.grid_slip.addEventHandler("onheadclick",this.grid_slip_onheadclick,this);
            this.grid_journal.addEventHandler("oncellclick",this.grid_journal_oncellclick,this);
            this.grid_journal.addEventHandler("oncelldblclick",this.grid_journal_oncelldblclick,this);
            this.grid_journal_detail.addEventHandler("oncelldblclick",this.grid_journal_detail_oncelldblclick,this);
            this.grid_journal_detail.addEventHandler("oncellclick",this.grid_journal_detail_oncellclick,this);
            this.calendar_start.addEventHandler("onchanged",this.calendar_start_onchanged,this);
            this.bt_appSlip.addEventHandler("onclick",this.bt_appSlip_onclick,this);
            this.bt_cancleApp.addEventHandler("onclick",this.bt_cancleApp_onclick,this);
            this.bt_searchSlip.addEventHandler("onclick",this.bt_searchSlip_onclick,this);
            this.combo_status.addEventHandler("onitemchanged",this.combo_status_onitemchanged,this);
        };
        this.loadIncludeScript("approvalmanagerform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
