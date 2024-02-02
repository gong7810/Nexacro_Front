(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("slipForm");
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
            obj = new Grid("grid_slip","1.76%","9.47%","96.30%","25.79%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_slip");
            obj.set_autosizingtype("row");
            obj.set_nodatatext("조회된 전표가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"239\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"93\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"기수\"/><Cell col=\"1\" text=\"전표일련번호\"/><Cell col=\"2\" text=\"전표유형\"/><Cell col=\"3\" text=\"날짜\"/><Cell col=\"4\" text=\"작성자코드\"/><Cell col=\"5\" text=\"품의내역\"/><Cell col=\"6\" text=\"승인날짜\"/><Cell col=\"7\" text=\"승인자\"/><Cell col=\"8\" text=\"승인상태\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_PERIOD_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SLIP_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SLIP_TYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REPORTING_DATE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:REPORTING_EMP_CODE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:EXPENSE_REPORT\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:APPROVAL_DATE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:APPROVAL_EMP_CODE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:SLIP_STATUS\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_journal","1.76%","42.46%","96.30%","24.74%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_journal");
            obj.set_autosizingtype("row");
            obj.set_nodatatext("조회된 분개가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"236\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"분개일련번호\"/><Cell col=\"2\" text=\"계정코드\"/><Cell col=\"3\" text=\"계정과목\"/><Cell col=\"4\" text=\"대차구분\"/><Cell col=\"5\" text=\"거래처코드\"/><Cell col=\"6\" text=\"거래처명\"/><Cell col=\"7\" text=\"차변금액\"/><Cell col=\"8\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JOURNAL_NO\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:ACCOUNT_INNER_CODE\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"4\" text=\"bind:BALANCE_DIVISION\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_combo\" combodatacol=\"BALANCE_DIVISION\" combocodecol=\"BALANCE_DIVISION\"/><Cell col=\"5\" text=\"bind:CUSTOMER_CODE\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"center\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"7\" text=\"bind:LEFT_DEBTOR_PRICE\" textAlign=\"center\" displaytype=\"number\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:RIGHT_CREDITS_PRICE\" textAlign=\"center\" displaytype=\"number\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_journal_detail","1.76%","74.74%","96.30%","21.58%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_journal_detail");
            obj.set_nodatatext("조회된 분개상세가 없습니다");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"46\"/><Column size=\"176\"/><Column size=\"78\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"105\"/><Column size=\"153\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"분개상세번호\"/><Cell col=\"2\" text=\"계정코드\"/><Cell col=\"3\" text=\"계정과목\"/><Cell col=\"4\" text=\"상세코드\"/><Cell col=\"5\" text=\"상세항목\"/><Cell col=\"6\" text=\"상세내용\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:JOURNAL_DETAIL_NO\"/><Cell col=\"1\" text=\"bind:JOURNAL_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ACCOUNT_CONTROL_CODE\" suppressalign=\"first\" textAlign=\"center\" combodataset=\"gds_account_control\" combocodecol=\"ACCOUNT_CONTROL_CODE\" combodatacol=\"ACCOUNT_CONTROL_CODE\"/><Cell col=\"5\" text=\"bind:ACCOUNT_CONTROL_NAME\" textAlign=\"center\" edittype=\"none\" displaytype=\"normal\" combodataset=\"gds_account_control\" combodatacol=\"ACCOUNT_CONTROL_NAME\" combocodecol=\"ACCOUNT_CONTROL_NAME\"/><Cell col=\"6\" text=\"bind:JOURNAL_DESCRIPTION\" textAlign=\"center\" combodataset=\"bind:ACCOUNT_CONTROL_NAME\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_start","1.76%","2.81%","12.13%","5.09%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_end","16.76%","2.81%","12.13%","5.09%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("bt_addSlip","67.31%","3.16%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전표추가");
            this.addChild(obj.name, obj);

            obj = new Button("bt_delSlip","80.00%","3.16%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전표삭제");
            this.addChild(obj.name, obj);

            obj = new Button("bt_approvalSlip","92.87%","3.16%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("승인요청");
            this.addChild(obj.name, obj);

            obj = new Button("bt_searchSlip","39.26%","3.51%","7.22%","4.39%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_status","29.63%","3.86%","8.98%","4.04%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_slipStatus");
            obj.set_datacolumn("STATUS");
            obj.set_codecolumn("STATUS");
            obj.set_text("전체검색");
            obj.set_value("전체검색");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","14.17%","2.81%","2.5%","4.21%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("bt_addJournal","86.39%","36.32%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("분개추가");
            this.addChild(obj.name, obj);

            obj = new Button("bt_delJournal","92.78%","36.32%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("분개삭제");
            this.addChild(obj.name, obj);

            obj = new Button("bt_editSlip","73.70%","3.16%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("전표수정");
            this.addChild(obj.name, obj);

            obj = new Button("bt_saveSlip","86.48%","3.16%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("전표저장");
            this.addChild(obj.name, obj);

            obj = new Button("bt_addJournalDetail","86.39%","68.77%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("상세추가");
            this.addChild(obj.name, obj);

            obj = new Button("bt_delJournalDetail","92.78%","68.60%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("상세삭제");
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
        this.addIncludeScript("slipForm.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("slipForm.xfdl","scripts::commonOpen.xjs");
        this.registerScript("slipForm.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/

        application = nexacro.getApplication();


        this.clear_data = function(){
        	application.gds_slip.clearData();
        	application.gds_journal.clearData();
        	application.gds_journal_detail.clearData();
        }

        this.slipForm_onload = function(obj,e){

        	this.clear_data();
        	this.calendar_start.set_value( this.gfn_todayFirst().toString() );
        	this.calendar_end.set_value( this.gfn_today().toString() );

        	// 계정코드 - 분개상세 컨트롤
        	var id="getAccountControlDetail";
        	var url="svcOperate::findAccountDetailList";
        	var reqData="";
        	var resData="gds_account_control=gds_account_control_detail";
        	var args="";
        	var callback="callback";

        	this.transaction(id, url, reqData, resData, args, callback, false);
        };


        ////////////////////////////////////// 전표 //////////////////////////////////////

        	// 전표 조회
        this.bt_searchSlip_onclick = function(obj,e){
        	this.clear_data();

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

        	application.gds_slip.filter("");
        	application.gds_journal.filter(" ");
        	application.gds_journal_detail.filter(" ");


        	if(startDate && endDate && slipStatus){
        		// 전표
        		var id = "findRangedSlipList";
        		var url = "svcPosting::findRangedSlipList";
        		var reqData = "";
        		var resData = "gds_slip=gds_slip";
        		var args = "startDate='"+sDate+"' endDate='"+eDate+"' slipStatus='"+slipStatus+"'";
        		var callback = "callback";

        		this.transaction(id, url, reqData, resData, args, callback, false);

        		// 분개
        		var id = "findJournalList";
        		var url = "svcPosting::findRangedJournalList";
        		var reqData = "";
        		var resData = "gds_journal=gds_journal";
        		var args = "startDate='"+sDate+"' endDate='"+eDate+"'";
        		var callback = "callback";

        		this.transaction(id, url, reqData, resData, args, callback, false);

        		// 분개상세
        		var id = "findJournalDetailList";
        		var url = "svcPosting::findJournalDetailList";
        		var reqData = "";
        		var resData = "gds_journal_detail=gds_journal_detail";
        		var args = "startDate='"+sDate+"' endDate='"+eDate+"'";
        		var callback = "callback";

        		this.transaction(id, url, reqData, resData, args, callback, false);

        		this.bt_addSlip.set_enable(true);
        		this.bt_editSlip.set_enable(true);
        		this.bt_delSlip.set_enable(true);
        		this.bt_saveSlip.set_enable(false);
        		this.bt_approvalSlip.set_enable(true);

        		this.bt_addJournal.set_enable(false);
        		this.bt_delJournal.set_enable(false);
        		this.bt_addJournalDetail.set_enable(false);
        		this.bt_delJournalDetail.set_enable(false);

        	}else{
        		alert("날짜와 승인상태를 확인해주세요.");
        	}
        };

        var STATUS;
        var SLIPNO;

        	// 전표 그리드 클릭 이벤트
        this.grid_slip_oncellclick = function(obj,e){
        	SLIPNO = application.gds_slip.getColumn(e.row, "SLIP_NO");
        	STATUS = application.gds_slip.getColumn(e.row, "SLIP_STATUS");

        	if(SLIPNO=='NEW'){
        		application.gds_journal.filter("JOURNAL_NO=='NEW'");
        	}else{
        		application.gds_journal.filter("SLIP_NO=='"+SLIPNO+"'");
        	}
        };

        	// 전표 그리드 더블클릭
        this.grid_slip_oncelldblclick = function(obj,e){

        	SLIPNO = application.gds_slip.getColumn(e.row, "SLIP_NO");

        	if(SLIPNO != "NEW" &&  this.bt_editSlip.enable == true){
        		alert("해당 전표를 수정하시려면 전표수정 버튼을 클릭해주세요");
        	}else{
        		if(application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS") == "작성중"){
        			if(e.cell==5){
        				this.grid_slip.setCellProperty("Body", 5, "edittype", "text");
        			}
        		}
        	}
        }

        	// 전표 추가
        this.bt_appSlip_onclick = function(obj,e){

        	SLIPNO = "NEW";
        	this.clear_data();

        	var reportingDate = this.gfn_today().toString();
        	var nRow = application.gds_slip.addRow();

        	this.bt_addSlip.set_enable(false);
        	this.bt_editSlip.set_enable(false);
        	this.bt_delSlip.set_enable(false);
        	this.bt_saveSlip.set_enable(true);
        	this.bt_approvalSlip.set_enable(false);

        	this.bt_addJournal.set_enable(true);
        	this.bt_delJournal.set_enable(true);

        	this.bt_addJournalDetail.set_enable(true);
        	this.bt_delJournalDetail.set_enable(true);

        	application.gds_slip.setColumn(nRow, "ACCOUNT_PERIOD_NO", application.gv_currentPeriod);
        	application.gds_slip.setColumn(nRow, "SLIP_NO", "NEW");
        	application.gds_slip.setColumn(nRow, "SLIP_TYPE", "대체");
        	application.gds_slip.setColumn(nRow, "REPORTING_DATE", this.gfn_today().toString());
        	application.gds_slip.setColumn(nRow, "REPORTING_EMP_CODE", application.gv_empCode);
        	application.gds_slip.setColumn(nRow, "DEPT_CODE", application.gv_deptCode);
        	application.gds_slip.setColumn(nRow, "SLIP_STATUS", "작성중");

        	application.gds_slip.filter("REPORTING_DATE=='"+reportingDate+"'");
        };

        	// 전표 삭제
        this.bt_delSlip_onclick = function(obj,e){

        	if(application.gds_slip.getRowCount() == 0){
        		alert("전표를 먼저 조회해주세요");
        		return;
        	}

        	STATUS = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_STATUS");

        	if(confirm("전표를 삭제하시겠습니까?")){
        		if(STATUS == "승인완료"){
        			SLIPNO = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_NO");

        			if(confirm("승인된 전표를 삭제할 경우 처음부터 다시 작성해야합니다. \n전표를 삭제하시겠습니까?")){
        				var id = "deleteSlip";
        				var url = "svcPosting::removeSlip";
        				var reqData = "";
        				var resData = "";
        				var args = "slipNo='"+SLIPNO+"'";
        				var callback = "callback";
        				this.transaction(id, url, reqData, resData, args, callback);
        			}else{
        				alert("전표 삭제를 취소했습니다.");
        				return;
        			}
        		}else{
        			var id = "deleteSlip";
        			var url = "svcPosting::removeSlip";
        			var reqData = "";
        			var resData = "";
        			var args = "slipNo='"+SLIPNO+"'";
        			var callback = "callback";

        			this.transaction(id, url, reqData, resData, args, callback);
        		}
        	}
        };



        // 전표 수정
        this.bt_editSlip_onclick = function(obj,e){

        	STATUS = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_STATUS");

        	if(application.gds_slip.getRowCount() == 0){
        		alert("전표를 먼저 조회해주세요");
        		return;
        	}
        	if(application.gds_slip.rowposition == -1){
        		alert("전표를 선택해주세요");
        		return;
        	}
        	if(STATUS == "승인완료"||STATUS == "승인요청"){
        		alert("승인완료된 / 승인요청중인 전표는 수정이 불가능합니다");
        		return;
        	}

        	if(confirm("수정모드로 변환합니다.\n전표를 수정 후 전표저장 버튼을 클릭해주세요")){
        		this.bt_addSlip.set_enable(false);
        		this.bt_delSlip.set_enable(false);
        		this.bt_editSlip.set_enable(false);
        		this.bt_saveSlip.set_enable(true);
        		this.bt_approvalSlip.set_enable(false);

        		this.bt_addJournal.set_enable(true);
        		this.bt_delJournal.set_enable(true);

        		this.bt_addJournalDetail.set_enable(true);
        		this.bt_delJournalDetail.set_enable(true);

        		// 선택 전표 외 나머지 로우 모두 삭제
        		var s_rowCount = application.gds_slip.getRowCount();
        		for(var i=0; i<s_rowCount; i++){
        			var index = application.gds_slip.findRowExpr("SLIP_NO!='"+SLIPNO+"'");
        			application.gds_slip.deleteRow(index);
        		}

        		// 해당 분개 외 나머지 로우 모두 삭제
        		application.gds_journal.filter("");
        		var a_rowCount = application.gds_journal.getRowCountNF();
        		for(var aa=0; aa<a_rowCount; aa++){
        			var index = application.gds_journal.findRowExpr("SLIP_NO!='"+SLIPNO+"'");
        			application.gds_journal.deleteRow(index);
        		}

        		// 해당 분개
        		var j_rowCount = application.gds_journal.rowcount;
        		for(var a=0; a<j_rowCount; a++){
        			var editJournalNo = application.gds_journal.getColumn(a, "JOURNAL_NO");
        			var count = this.grid_journal.getCellValue(a, 0);

        			// 해당 분개의 분개상세 데이터 가져오기
        			this.journal_detail(editJournalNo);

        			// 가져온 분개상세 데이터에 COUNT 칼럼 추가
        			application.gds_journal_detail.addColumn("COUNT","string",256);

        			var jd_rowCount = application.gds_journal_detail.rowcount;
        			if(jd_rowCount != 0){

        				// COUNT 값 세팅
        				for(var b=0; b<jd_rowCount; b++){
        					application.gds_journal_detail.setColumn(b, "COUNT", count);
        					application.gds_journal_detail.setColumn(b, "JOURNAL_NO", "NEW");
        				}
        				// 분개상세 데이터 temp로 복사
        				if(application.gds_journal_detail_temp.getRowCountNF() == 0){
        					application.gds_journal_detail_temp.copyData(application.gds_journal_detail);
        				}else{
        					application.gds_journal_detail_temp.appendData(application.gds_journal_detail);
        				}
        			}
        		}
        		this.grid_journal_detail.set_binddataset("gds_journal_detail_temp");
        		application.gds_journal_detail_temp.filter("COUNT=='"+count+"'");
        	}else{
        		this.bt_searchSlip.click();
        	}
        };



        	// 전표 저장
        this.bt_saveSlip_onclick = function(obj,e){

        	if(application.gds_slip.getRowCount() == 0){
        		alert("전표를 먼저 조회해주세요");
        		return;
        	}

        	STATUS = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_STATUS");

        	if(STATUS == "승인완료"){
        		alert("이미 승인완료된 전표입니다");
        		return;
        	}else{
        		// 대차비교
        		var lPrice = application.gds_journal.getCaseSum("BALANCE_DIVISION=='차변'","parseInt(LEFT_DEBTOR_PRICE)");
        		var rPrice = application.gds_journal.getCaseSum("BALANCE_DIVISION=='대변'","parseInt(RIGHT_CREDITS_PRICE)");

        		var rowCount = application.gds_journal.getRowCount();

        		if(rowCount == 0){
        			alert("분개 정보를 추가하세요");
        			return;
        		}else{
        			//          for(var i=0; i<rowCount; i++){
        			//             if(application.gds_journal.getColumn(i, "ACCOUNT_NAME") == null){
        			//                alert("계정 정보를 입력하세요");
        			//                return;
        			//             }
        			//          }
        			if(lPrice == 0 || rPrice == 0){
        				alert("차변과 대변 정보를 입력하세요");
        				return;
        			}
        			var sumPrice = rPrice - lPrice;
        			if(sumPrice != 0){
        				alert("차변과 대변 금액이 맞지않습니다");
        				return;
        			}
        		}

        		if(SLIPNO == "NEW"){
        			if(confirm("전표를 저장하시겠습니까?")){

        				// 입력하지 않은 분개상세 정리
        				this.deleteNoDataJournalDetail();
        				this.addSlip();
        			}
        		}else{
        			if(this.bt_editSlip.enable == true){
        				this.bt_editSlip.click();
        				return;
        			}
        			if(confirm("수정한 전표를 저장하시겠습니까?")){

        				// 입력하지 않은 분개상세 정리
        				this.deleteNoDataJournalDetail();
        				// 오류발생 칼럼 정리
        				if(application.gds_journal_detail_temp.getColIndex("JOURNAL_DETAIL_NO") != -1){
        					application.gds_journal_detail_temp.set_updatecontrol(false);
        					var b = application.gds_journal_detail_temp.deleteColumn("JOURNAL_DETAIL_NO");
        				}
        				this.updateSlip();
        			}
        		}

        	}
        };


        // 추가
        this.addSlip = function(){

        	this.transaction(
        		"addSlip",
        		"svcPosting::addSlip",
        		"gds_slip2=gds_slip:u gds_journal2=gds_journal:u gds_journal_detail=gds_journal_detail",
        		"",
        		"empCode='"+application.gv_empCode+"' deptCode='"+application.gv_deptCode+"'",
        		"callback",
        		false
        	);
        }


        // 수정
        this.updateSlip = function(){

        	this.transaction(
        		"updateSlip",
        		"svcPosting::updateSlip",
        		"gds_slip=gds_slip gds_journal=gds_journal gds_journal_detail=gds_journal_detail",
        		"",
        		"",
        		"callback",
        		false
        	);
        }



        	// 승인요청
        this.bt_approvalSlip_onclick = function(obj,e){
        	STATUS = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_STATUS");

        	if(STATUS == "승인완료" || STATUS == "승인요청"){
        		alert("이미 " + STATUS + "된 전표입니다.");
        	}else{
        		application.gds_slip.setColumn(application.gds_slip.rowposition,"SLIP_STATUS","승인요청");
        		application.gds_slip.setColumn(application.gds_slip.rowposition, "APPROVAL_DATE",' ');
        		application.gds_slip.setColumn(application.gds_slip.rowposition, "APPROVAL_EMP_CODE",' ');

        		if(confirm("승인요청 하시겠습니까?")){
        			var id="approveSlip";
        			var url = "svcPosting::approveSlip";
        			var reqData = "gds_slip=gds_slip";
        			var resData = "";
        			var args= "";
        			var callback = "callback";

        			this.transaction(id, url, reqData, resData, args, callback, false);
        		}
        	}
        };

        ////////////////////////////////////// 분개 //////////////////////////////////////

        	// 분개 추가
        this.bt_addJournal_onclick = function(obj,e){

        	var selectIndex = application.gds_slip.rowposition;

        	if(selectIndex == -1){
        		alert("전표를 선택해주세요.");
        	}else{
        		var row = application.gds_journal.addRow();
        		application.gds_journal.setColumn(row, "JOURNAL_NO", "NEW");
        	}
        };


        // 분개 삭제
        this.bt_delJournal_onclick  = function(obj,e){

        	// 해당 분개의 분개상세 삭제
        	var count = this.grid_journal.getCellValue(this.grid_journal.currentrow, 0); // 저장전
        	var journalNo = this.grid_journal.getCellValue(this.grid_journal.currentrow, 1); // 저장된
        	var bindDS = this.grid_journal_detail.getBindDataset();
        	var rowCount = bindDS.getRowCountNF();
        	var index;

        	if(rowCount != 0){
        		for(var i=0; i<rowCount; i++){
        			if(bindDS.id == "gds_journal_detail"){
        				index = bindDS.findRow("JOURNAL_NO", journalNo);

        			}else if(bindDS.id == "gds_journal_detail_temp"){
        				index = bindDS.findRow("COUNT", count);
        			}
        			bindDS.deleteRow(index);
        		}
        	}

        	// 분개 삭제
        	application.gds_journal.deleteRow(application.gds_journal.rowposition);
        };



        	// 분개 그리드 클릭
        this.grid_journal_oncellclick = function(obj,e){

        	var JOURNAL_NO = application.gds_journal.getColumn(e.row, "JOURNAL_NO");


        	if(JOURNAL_NO=='NEW' && ACCOUNT_INNER_CODE!=null){
        	}else{
        		application.gds_journal_detail.filter("JOURNAL_NO=='"+JOURNAL_NO+"'");
        	}
        }

        	// 분개 그리드 더블클릭
        this.grid_journal_oncelldblclick = function(obj,e){
        	if(SLIPNO != "NEW" &&  this.bt_editSlip.enable == true){
        		alert("해당 전표를 수정하시려면 전표수정 버튼을 클릭해주세요");
        		return;
        	}

        	if(application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS") == "작성중"||application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS") == "작성중(반려)"){

        		if(e.cell==2 || e.cell==3){  // 계정 정보
        			this.gfnOpen("dialog_account_journal", "popup::accInnerCodeForm.xfdl", null, null);  // sID, sURL, callbackFunc, param

        			application.gds_journal.setColumn(application.gds_journal.rowposition, "CUSTOMER_CODE", '');
        			application.gds_journal.setColumn(application.gds_journal.rowposition, "CUSTOMER_NAME", '');
        			application.gds_journal.setColumn(application.gds_journal.rowposition, "LEFT_DEBTOR_PRICE", '');
        			application.gds_journal.setColumn(application.gds_journal.rowposition, "RIGHT_CREDITS_PRICE", '');

        		}else if(e.cell==4){  // 대차 구분
        			var accountCode = application.gds_journal.getColumn(application.gds_journal.rowposition,"ACCOUNT_INNER_CODE"); // 계정코드
        			if(accountCode == null){
        				alert("계정 정보를 먼저 입력해주세요");
        			}else{
        				this.grid_journal.setCellProperty("Body", 4, "edittype", "combo");

        				application.gds_journal.setColumn(application.gds_journal.rowposition, "CUSTOMER_CODE", '');
        				application.gds_journal.setColumn(application.gds_journal.rowposition, "CUSTOMER_NAME", '');
        				application.gds_journal.setColumn(application.gds_journal.rowposition, "LEFT_DEBTOR_PRICE", '');
        				application.gds_journal.setColumn(application.gds_journal.rowposition, "RIGHT_CREDITS_PRICE", '');

        			}
        		}else if(e.cell==5 || e.cell==6){ // 거래처 정보
        			this.gfnOpen("dialog_customer", "popup::customerCodeForm.xfdl", null, null);

        		}else if(e.cell==7 || e.cell==8){ // 대차 금액
        			var balance = application.gds_journal.getColumn(application.gds_journal.rowposition,'BALANCE_DIVISION'); // 대차구분 정보

        			if(balance == undefined){
        				alert("대차구분 정보를 입력해주세요");
        			}else if(balance == '차변'){
        				this.grid_journal.setCellProperty("Body", 8, "edittype", "none");
        				this.grid_journal.setCellProperty("Body", 7, "edittype", "mask");
        			}else if(balance == '대변'){
        				this.grid_journal.setCellProperty("Body", 7, "edittype", "none");
        				this.grid_journal.setCellProperty("Body", 8, "edittype", "mask");
        			}
        		}
        	}
        };

        ////////////////////////////////////// 분개상세 //////////////////////////////////////

        	// 분개상세추가
        this.bt_addJournalDetail_onclick = function(obj,e){

        	var JOURNAL_NO = application.gds_journal.getColumn(application.gds_journal.rowposition, "JOURNAL_NO");
        	var ACCOUNT_INNER_CODE = application.gds_journal.getColumn(application.gds_journal.rowposition, "ACCOUNT_INNER_CODE");
        	var ACCOUNT_NAME = application.gds_journal.getColumn(application.gds_journal.rowposition, "ACCOUNT_NAME");

        	if(JOURNAL_NO=='NEW' && ACCOUNT_INNER_CODE!=null){
        	var row = application.gds_journal_detail.addRow();

        	application.gds_journal_detail.setColumn(row, "JOURNAL_DETAIL_NO", application.gds_journal.rowposition+1);
        	application.gds_journal_detail.setColumn(row, "JOURNAL_NO", "NEW");
        	application.gds_journal_detail.setColumn(row, "ACCOUNT_INNER_CODE", ACCOUNT_INNER_CODE);
        	application.gds_journal_detail.setColumn(row, "ACCOUNT_NAME", ACCOUNT_NAME);
        	}

        	application.gds_journal_detail.filter("JOURNAL_NO=='NEW'");
        };

        	// 분개상세삭제
        this.bt_delJournalDetail_onclick = function(obj,e)
        {
        		application.gds_journal_detail.deleteRow(application.gds_journal_detail.rowposition);
        };


        	// 분개상세 그리드 더블클릭
        this.grid_journal_detail_oncelldblclick = function(obj,e){
        	if(SLIPNO != "NEW" &&  this.bt_editSlip.enable == true){
        		alert("해당 전표를 수정하시려면 전표수정 버튼을 클릭해주세요");
        	}

        	if(application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS") == "작성중"){
        		if(e.cell==5){
        			this.grid_journal_detail.setCellProperty("Body", 5, "edittype", "combo");
        		}else if(e.cell==6){
        			this.grid_journal_detail.setCellProperty("Body", 6, "edittype", "text");
        		}
        	}
        };

        // 분개상세 그리드 클릭
        this.grid_journal_detail_oncellclick = function(obj,e){

        	if(e.cell == 4){
        		this.grid_journal_detail.setCellProperty("Body", 4, "edittype", "combo");
        	}
        };


        /************************************** 기타 ***********************************************/

        // 입력하지 않은 분개상세 정리
        this.deleteNoDataJournalDetail = function(){

        	application.gds_journal_detail_temp.filter("");
        	var d_rowCount = application.gds_journal_detail_temp.getRowCount();
        	for(var i=0; i<d_rowCount; i++){
        		var index = application.gds_journal_detail_temp.findRow("DESCRIPTION", "");
        		application.gds_journal_detail_temp.deleteRow(index);
        	}

        };


        // 콜백
        this.callback = function(trid , ErrorCode, ErrorMsg){
        	trace("trid  :"+trid);
        	if(trid == "findSlipList"){ //전표
        		if(ErrorCode <0){
        			alert("조회 실패 : " + ErrorMsg);
        		}
        	}else if(trid == "deleteSlip"){
        		if(ErrorCode <0){
        			alert("삭제 실패 : " + ErrorMsg);
        		}else{
        			alert("전표가 삭제되었습니다");
        			this.bt_searchSlip.click();
        		}
        	}else if(trid == "updateSlip"){
        		if(ErrorCode <0){
        			alert("수정 실패 : " + ErrorMsg);
        		}else{
        			alert("전표가 수정되었습니다");
        			this.reload();
        		}
        	}else if(trid == "addSlip"){
        		if(ErrorCode <0){
        			alert("전표등록 실패 : " + ErrorMsg);
        		}else{
        			alert("전표가 저장되었습니다");
        			this.reload();
        		}
        	}else if(trid=="findJournalListForSlip"){ //분개
        		if(ErrorCode <0){
        			alert("분개 조회 실패 : " + ErrorMsg);
        		}
        	}else if(trid=="findJournalDetailInfo"){//분개상세
        		if(ErrorCode <0){
        			alert("분개상세조회 실패 : " + ErrorMsg);
        		}else{
        			jdCount=nexacro.getApplication().gds_journalDetail.getRowCount();
        		}
        	}else if(trid == "deleteJournal"){
        		if(ErrorCode <0){
        			alert("분개삭제 실패 : " + ErrorMsg);
        		}else{
        			alert("분개 내역이 삭제되었습니다");
        			this.reload();
        		}
        	}
        	else if(trid == "approveSlip"){
        		if(ErrorCode <0){
        			alert("승인요청 실패 : " + ErrorMsg);
        		}else{
        			alert("승인요청 되었습니다");
        			//this.reload();
        		}
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.slipForm_onload,this);
            this.grid_slip.addEventHandler("oncellclick",this.grid_slip_oncellclick,this);
            this.grid_slip.addEventHandler("oncelldblclick",this.grid_slip_oncelldblclick,this);
            this.grid_journal.addEventHandler("oncellclick",this.grid_journal_oncellclick,this);
            this.grid_journal.addEventHandler("oncelldblclick",this.grid_journal_oncelldblclick,this);
            this.grid_journal_detail.addEventHandler("oncelldblclick",this.grid_journal_detail_oncelldblclick,this);
            this.grid_journal_detail.addEventHandler("oncellclick",this.grid_journal_detail_oncellclick,this);
            this.bt_addSlip.addEventHandler("onclick",this.bt_appSlip_onclick,this);
            this.bt_delSlip.addEventHandler("onclick",this.bt_delSlip_onclick,this);
            this.bt_approvalSlip.addEventHandler("onclick",this.bt_approvalSlip_onclick,this);
            this.bt_searchSlip.addEventHandler("onclick",this.bt_searchSlip_onclick,this);
            this.combo_status.addEventHandler("onitemchanged",this.combo_status_onitemchanged,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.bt_addJournal.addEventHandler("onclick",this.bt_addJournal_onclick,this);
            this.bt_delJournal.addEventHandler("onclick",this.bt_delJournal_onclick,this);
            this.bt_editSlip.addEventHandler("onclick",this.bt_editSlip_onclick,this);
            this.bt_saveSlip.addEventHandler("onclick",this.bt_saveSlip_onclick,this);
            this.bt_addJournalDetail.addEventHandler("onclick",this.bt_addJournalDetail_onclick,this);
            this.bt_delJournalDetail.addEventHandler("onclick",this.bt_delJournalDetail_onclick,this);
        };
        this.loadIncludeScript("slipForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
