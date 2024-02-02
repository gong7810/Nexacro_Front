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
            obj = new Grid("grid_slip","1.85%","9.47%","96.30%","25.79%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_slip");
            obj.set_autosizingtype("row");
            obj.set_nodatatext("조회된 전표가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"239\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"93\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"기수\"/><Cell col=\"1\" text=\"전표일련번호\"/><Cell col=\"2\" text=\"전표유형\"/><Cell col=\"3\" text=\"날짜\"/><Cell col=\"4\" text=\"작성자코드\"/><Cell col=\"5\" text=\"품의내역\"/><Cell col=\"6\" text=\"승인날짜\"/><Cell col=\"7\" text=\"승인자\"/><Cell col=\"8\" text=\"승인상태\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_PERIOD_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SLIP_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SLIP_TYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REPORTING_DATE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:REPORTING_EMP_CODE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:EXPENSE_REPORT\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:APPROVAL_DATE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:APPROVAL_EMP_CODE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:SLIP_STATUS\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_journal","1.85%","41.93%","96.30%","25.44%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_journal");
            obj.set_autosizingtype("row");
            obj.set_nodatatext("조회된 분개가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"236\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"분개일련번호\"/><Cell col=\"2\" text=\"계정코드\"/><Cell col=\"3\" text=\"계정과목\"/><Cell col=\"4\" text=\"대차구분\"/><Cell col=\"5\" text=\"거래처코드\"/><Cell col=\"6\" text=\"거래처명\"/><Cell col=\"7\" text=\"차변금액\"/><Cell col=\"8\" text=\"대변금액\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JOURNAL_NO\" textAlign=\"center\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:ACCOUNT_INNER_CODE\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"4\" text=\"bind:BALANCE_DIVISION\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_combo\" combodatacol=\"BALANCE_DIVISION\" combocodecol=\"BALANCE_DIVISION\"/><Cell col=\"5\" text=\"bind:CUSTOMER_CODE\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"center\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"7\" text=\"bind:LEFT_DEBTOR_PRICE\" textAlign=\"center\" displaytype=\"number\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:RIGHT_CREDITS_PRICE\" textAlign=\"center\" displaytype=\"number\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_journal_detail","1.85%","73.68%","96.30%","24.56%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("gds_journalDetail");
            obj.set_nodatatext("조회된 분개상세가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"분개상세번호\"/><Cell col=\"2\" text=\"계정코드\"/><Cell col=\"3\" text=\"계정항목\"/><Cell col=\"4\" text=\"상세내용\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JOURNAL_DETAIL_NO\" textAlign=\"center\" editimemode=\"hangul\"/><Cell col=\"2\" text=\"bind:ACCOUNT_CONTROL_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ACCOUNT_CONTROL_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JOURNAL_DESCRIPTION\" textAlign=\"center\" editautoselect=\"true\" editimemode=\"hangul\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_start","20","14","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Calendar("calendar_end","187","14","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("bt_addSlip","67.50%","2.63%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전표추가");
            this.addChild(obj.name, obj);

            obj = new Button("bt_delSlip","80.00%","2.63%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전표삭제");
            this.addChild(obj.name, obj);

            obj = new Button("bt_approvalSlip","92.13%","2.63%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("승인요청");
            this.addChild(obj.name, obj);

            obj = new Button("bt_searchSlip","448","18","79","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_status","337","20","98","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_slipStatus");
            obj.set_datacolumn("STATUS");
            obj.set_codecolumn("STATUS");
            obj.set_text("전체검색");
            obj.set_value("전체검색");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","157","17","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("bt_addJournal","85.65%","36.32%","5.46%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("분개추가");
            this.addChild(obj.name, obj);

            obj = new Button("bt_delJournal","91.76%","36.32%","5.37%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("분개삭제");
            this.addChild(obj.name, obj);

            obj = new Button("bt_editSlip","86.02%","2.63%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("전표수정");
            this.addChild(obj.name, obj);

            obj = new Button("bt_saveSlip","74.07%","2.46%","5.28%","4.74%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("전표저장");
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
        this.addIncludeScript("slipform.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("slipform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("slipform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/
        application = nexacro.getApplication();


        this.clear_data = function(){
           application.gds_slip.clearData();
           application.gds_journal.clearData();
           application.gds_journalDetail.clearData();
        }

        this.slipForm_onload = function(obj,e)
        {

           this.clear_data();
           this.calendar_start.set_value( this.gfn_todayFirst().toString() );
           this.calendar_end.set_value( this.gfn_today().toString() );
           application.gds_slip.filter("");

           // 계정코드 - 분개상세 컨트롤
           var id="getAccountControlDetail";
           var url="svcOperate::findAccountDetailList";
           var reqData="";
           var resData="gds_account_control=gds_account_control_detail";
           var args="";
           var callback="callback";

           this.transaction(id, url, reqData, resData, args, callback, false);

           // 상세코드 가져옴
           var id2="getCodeDetail";
           var url2="svcBase::findDetailCodeList";
           var reqData2="";
           var resData2="gds_detail_code=gds_detail_code";
           var args2="";
           var callback2="callback";

           this.transaction(id2, url2, reqData2, resData2, args2, callback2);
           trace(id2+"종료");
           this.bt_addSlip.set_enable(true);
        };


        /************************************** 전표 ***********************************************/

        // 전표 조회
        this.bt_searchSlip_onclick = function(obj,e)
        {

           this.clear_data();
           application.gds_journal_detail_temp.clearData();

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

           trace("sDate : "+sDate+"   eDate : "+eDate);

           application.gds_slip.filter("");
           application.gds_journal.filter("SLIP_NO=='X'");
           application.gds_journal_detail.filter("JOURNAL_NO=='X'");

           if(startDate && endDate && slipStatus){
              // 전표 다가지고옴
              var id = "findRangedSlipList";
              var url = "svcPosting::findRangedSlipList";
              var resData = "";
              var reqData = "gds_slip=gds_slip";
              var args = "startDate='"+sDate+"' endDate='"+eDate+"' slipStatus='"+slipStatus+"'";
              var callback = "callback";

              this.transaction(id, url, resData, reqData, args, callback, false);

              // 분개 다 가지고옴
              var id = "findJournalList";
              var url = "svcPosting::findRangedJournalList";
              var resData = "";
              var reqData = "gds_journal=gds_journal";
              var args = "startDate='"+sDate+"' endDate='"+eDate+"'";
              var callback = "callback";

              this.transaction(id, url, resData, reqData, args, callback, false);

        // 	  // 분개상세 추가
        //       var id = "findJournalDetailList";
        //       var url = "svcPosting::findJournalDetailList";
        //       var resData = "";
        //       var reqData = "gds_journalDetail=gds_journalDetail";
        //       var args = "startDate='"+sDate+"' endDate='"+eDate+"'";
        //       var callback = "callback";
        //
        //       this.transaction(id, url, reqData, resData, args, callback, false);

              this.bt_addSlip.set_enable(true);
              this.bt_delSlip.set_enable(true);
              this.bt_editSlip.set_enable(true);
              this.bt_approvalSlip.set_enable(true);
           }else{
              alert("날짜와 승인상태를 확인해주세요.");
           }
        };


        var STATUS;
        var SLIPNO;
        // 전표 그리드 클릭 이벤트
        this.grid_slip_oncellclick = function(obj,e)
        {
           trace("wetewtewt");
           SLIPNO = application.gds_slip.getColumn(e.row, "SLIP_NO");
           STATUS = application.gds_slip.getColumn(e.row, "SLIP_STATUS");

           this.bt_addJournal.set_enable(true);
           this.bt_delJournal.set_enable(true);

        /*   application.gds_journalDetail.clearData();*/

           if(SLIPNO=='NEW'){
              application.gds_journal.filter("JOURNAL_NO=='NEW'");
           }else{
              application.gds_journal.filter("SLIP_NO=='"+SLIPNO+"'");
        /*	  application.gds_journal.filter("JOURNAL_NO=='"+journalNo+"'");*/

              if(STATUS == "승인완료" || STATUS == "승인요청" || STATUS == "작성중(반려)"){
                 this.bt_addJournal.set_enable(false);
                 this.bt_delJournal.set_enable(false);
              }
           }
        };



        // 전표추가
        this.bt_appSlip_onclick = function(obj,e)
        {

           SLIPNO = "NEW";
           //application.gds_slip.set_rowposition(0);
           this.clear_data();

           var reportingDate = this.gfn_today().toString();
           var nRow = application.gds_slip.addRow();

           this.bt_saveSlip.set_enable(true);
           this.bt_editSlip.set_enable(false);
           this.bt_addSlip.set_enable(false);
           this.bt_addJournal.set_enable(false);
           this.bt_delJournal.set_enable(false);
           this.bt_approvalSlip.set_enable(false);
           this.bt_delSlip.set_enable(false);



           application.gds_slip.setColumn(nRow, "SLIP_NO", "NEW");
           application.gds_slip.setColumn(nRow, "SLIP_TYPE", "대체");
           application.gds_slip.setColumn(nRow, "REPORTING_EMP_CODE", application.gv_empCode);
           application.gds_slip.setColumn(nRow, "SLIP_STATUS", "작성중");
           application.gds_slip.setColumn(nRow, "REPORTING_DATE", this.gfn_today().toString());
           application.gds_slip.setColumn(nRow, "DEPT_CODE", application.gv_deptCode);
           application.gds_slip.setColumn(nRow, "ACCOUNT_PERIOD_NO", application.gv_currentPeriod);

           application.gds_slip.filter("REPORTING_DATE=='"+reportingDate+"'");
        };


        // 전표삭제
        this.bt_delSlip_onclick = function(obj,e)
        {
           if(application.gds_slip.getRowCount() == 0){
              alert("전표를 먼저 조회해주세요");
              return;
           }

           var status = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_STATUS");

           if(confirm("전표를 삭제하시겠습니까?")){
              if(status == "승인완료"){
                 if(confirm("승인된 전표를 삭제할 경우 처음부터 다시 작성해야합니다. \n전표를 삭제하시겠습니까?")){
                 var slipNo = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_NO");
                 var id = "deleteSlip";
                 var url = "svcPosting::removeSlip";
                 var resData = "";
                 var reqData = "";                  //승인된 전표도 경우에 따라 삭제할 필요성이 있어 삭제불가 대신 기능 추가
                 var args = "slipNo='"+slipNo+"'";
                 var callback = "callback";
                 this.transaction(id, url, resData, reqData, args, callback);
                 }else{alert("전표 삭제를 취소했습니다.");
                 return;}

              }else{
                 var slipNo = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_NO");

                 if(slipNo == "NEW"){
                    application.gds_slip.deleteRow(application.gds_slip.rowposition);
                    this.reload();
                    return;
                 }

                 var id = "deleteSlip";
                 var url = "svcPosting::removeSlip";
                 var resData = "";
                 var reqData = "";                  //전표id만 있으면 delete 가능하기 때문에 데이터셋 따로 보낼 필요 x
                 var args = "slipNo='"+slipNo+"'";
                 var callback = "callback";

                 this.transaction(id, url, resData, reqData, args, callback);

              }
           }
        };



        // 전표 수정
        this.bt_editSlip_onclick = function(obj,e)
        {
           var status = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_STATUS");

           if(application.gds_slip.getRowCount() == 0){
              alert("전표를 먼저 조회해주세요");
              return;
           }
           if(status == "승인완료"||status == "승인요청"){
              alert("승인완료된 / 승인요청중인 전표는 수정이 불가능합니다");
              return;
           }
           if(application.gds_journal.rowcount == 0){
              alert("전표를 선택해주세요");
              return;
           }
           if(confirm("수정모드로 변환합니다.\n전표를 수정 후 전표저장 버튼을 클릭해주세요")){
              //alert("수정모드로 변환합니다.\n전표를 수정 후 전표저장 버튼을 클릭해주세요");

              application.gds_journal_detail_temp.clear();
              this.bt_addSlip.set_enable(false);
              this.bt_delSlip.set_enable(false);
              this.bt_editSlip.set_enable(false);
              this.bt_addJournal.set_enable(true);
              this.bt_delJournal.set_enable(true);

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
                 //application.gds_journal.setColumn(a, "JOURNAL_NO", "NEW");
              }
              this.grid_journal_detail.set_binddataset("gds_journal_detail_temp");
              application.gds_journal_detail_temp.filter("COUNT=='"+count+"'");


           }else{
              this.bt_searchSlip.click();
           }
        };



        // 전표 저장
        this.bt_saveSlip_onclick = function(obj,e)
        {
           if(application.gds_slip.getRowCount() == 0){
              alert("전표를 먼저 조회해주세요");
              return;
           }

           var status = application.gds_slip.getColumn(application.gds_slip.rowposition, "SLIP_STATUS");

           // 기존에는 slipNo가 NEW가 아닐 경우 저장된 전표로 간주했으나, 현재는 slipStatus가 미승인인지 확인
           if(status == "승인완료"){
              alert("이미 승인완료된 전표입니다");
              return;
           }else{
              // 대차 정보
              var lPrice = application.gds_journal.getCaseSum("BALANCE_DIVISION=='차변'","parseInt(LEFT_DEBTOR_PRICE)"); // 해당 칼럼의 값을 모두 더한다.
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
                 "gds_slip2=gds_slip:u gds_journal2=gds_journal:u gds_journalDetail2=gds_journalDetail", // 분개상세는 옵션 없이 보낸다
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
                 "gds_slip=gds_slip gds_journal=gds_journal gds_journal_detail=gds_journal_detail_temp",
                 "",
                 "",
                 "callback",
                 false
              );
        }





        // 승인요청
        this.bt_approvalSlip_onclick = function(obj,e)
        {

              //this.alert(application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS"));

              application.gds_slip.setColumn(application.gds_slip.rowposition,"SLIP_STATUS","승인요청");

              //this.alert(application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS"));
              //this.alert(application.gds_slip.saveXML());



            if(confirm("승인요청 하시겠습니까?")){


             var id="approveSlip";
              var url = "svcPosting::approveSlip";
              var reqData = "gds_slip=gds_slip"; //:u -> 변경된 내용 서버로 되돌려 보낼때 사용
              var resData = "";
              var args= "";
              var callback = "callback";

              this.transaction(id, url, reqData, resData, args, callback, false);

           }



        };








        /************************************** 분개 ***********************************************/


        // 분개 추가
        this.bt_addJournal_onclick = function(obj,e)
        {

           var selectIndex = application.gds_slip.rowposition;
           if(selectIndex == -1){
              alert("전표를 선택해주세요. ");
           }else{
              //var rowCount = application.gds_journal.getRowCount();
              var lRow = application.gds_journal.addRow();
              var rRow = application.gds_journal.addRow();
              application.gds_journal.setColumn(lRow, "JOURNAL_NO", "NEW");
              application.gds_journal.setColumn(rRow, "JOURNAL_NO", "NEW");
              application.gds_journal.setColumn(lRow, "BALANCE_DIVISION", "차변");
              application.gds_journal.setColumn(rRow, "BALANCE_DIVISION", "대변");
           }
        };


        // 분개 삭제
        this.bt_delJournal_onclick  = function(obj,e)
        {

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
        this.grid_journal_oncellclick = function(obj,e)
        {

           var journalNo = obj.getCellValue(e.row, 1); // 선택 로우, 칼럼인덱스
           trace(journalNo+"*****")
           var count = obj.getCellValue(e.row, 0);
           trace(count+"*****")
            /*this.alert(this.journal_detail());*/

           if(journalNo!='NEW'){ // 저장된 전표면
              this.journal_detail(); // 등록된 상세 정보 가져옴
           }else{
              this.grid_journal.setCellProperty("Body", 4, "edittype", "none");
              this.grid_journal.setCellProperty("Body", 7, "edittype", "none");
              this.grid_journal.setCellProperty("Body", 8, "edittype", "none");

              //application.gds_journal_detail_temp.filter("COUNT=='"+count+"'");
           }
        }


        // * 참고용
        // var STATUS;
        // var SLIPNO;
        // // 전표 그리드 클릭 이벤트
        // this.grid_slip_oncellclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        // {
        //    trace("wetewtewt");
        //    SLIPNO = application.gds_slip.getColumn(e.row, "SLIP_NO");
        //    STATUS = application.gds_slip.getColumn(e.row, "SLIP_STATUS");
        //
        //    this.bt_addJournal.set_enable(true);
        //    this.bt_delJournal.set_enable(true);
        //
        // /*   application.gds_journalDetail.clearData();*/
        //
        //    if(SLIPNO=='NEW'){
        //       application.gds_journal.filter("JOURNAL_NO=='NEW'");
        //    }else{
        //       application.gds_journal.filter("SLIP_NO=='"+SLIPNO+"'");
        // /*	  application.gds_journal.filter("JOURNAL_NO=='"+journalNo+"'");*/
        //
        //       if(STATUS == "승인완료" || STATUS == "승인요청" || STATUS == "작성중(반려)"){
        //          this.bt_addJournal.set_enable(false);
        //          this.bt_delJournal.set_enable(false);
        //       }
        //    }
        // };


        // 분개상세 조회 메서드
        this.journal_detail = function(editJournalNo)
        {
           //application.gds_journal_detail.clearData();
           //application.gds_journal_detail_temp.clearData();

           //this.grid_journal_detail.set_binddataset("gds_journal_detail"); // dataset 바인딩 변경

           var journalNo = null;
           if(editJournalNo == undefined){ // 비수정모드
              journalNo = application.gds_journal.getColumn(application.gds_journal.rowposition, "JOURNAL_NO");
           }else{
              journalNo = editJournalNo; // 수정모드
           }
           /*trace(journalNo)*/
           application.gds_journalDetail.filter("JOURNAL_NO=='"+journalNo+"'");


           var id = "getJournalDetailList"
           var url = "svcPosting::findJournalDetailList";
           var resData = "gds_journalDetail=gds_journalDetail";
           var reqData = "gds_journalDetail=gds_journalDetail";
           var args = "journalNo='"+journalNo+"'";
           var callback = "callback";
        //
        //   this.alert(application.gds_journalDetail.saveXML());

           this.transaction(id, url, reqData, resData, args, callback, false);

        };



        // 분개 입력
        this.grid_journal_oncelldblclick = function(obj,e)
        {
           if(SLIPNO != "NEW" &&  this.bt_editSlip.enable == true){
              alert("해당 전표를 수정하시려면 전표수정 버튼을 클릭해주세요");
           }

           var count = obj.getCellValue(e.row,0); // 로우, 셀 인덱스

           if(application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS") == "작성중"||application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS") == "작성중(반려)"){

              if(e.cell==2 || e.cell==3){  // 계정 정보
                 this.gfnOpen("dialog_account_journal", "popup::accInnerCodeForm.xfdl", null, null);  // sID, sURL, callbackFunc, param

                 //application.gds_journal.setColumn(application.gds_journal.rowposition, "BALANCE_DIVISION", '');
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

                    this.create_journal_detail(count);
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



        // 분개 상세 입력정보 가져옴
        this.create_journal_detail = function(count){ // count : 분개 추가 번호


           var accountCode = application.gds_journal.getColumn(application.gds_journal.rowposition,"ACCOUNT_INNER_CODE"); // 계정코드
           trace(accountCode);

           var id = "journalDetailAccountList";
           var url = "svcPosting::journalDetailAccountList";
           var resData = "";
           var reqData = "gds_journalDetail=gds_journalDetail"; // 입력한 계정의 분개 상세 입력 정보
           var args = "accountCode='"+accountCode+"'";
           var callback = "callback";

           this.transaction(id, url, resData, reqData, args, callback, false);

           var rowCount = application.gds_journalDetail.rowcount;
           for(i = 0 ; i < rowCount ; i++){
              application.gds_journalDetail.setColumn(i,"JOURNAL_DETAIL_NO","NEW");
           }

           //this.next(count);
        }



        // 분개상세 입력 데이터 세팅
        this.next = function(count){
           this.grid_journal_detail.set_binddataset( "gds_journal_detail_temp" );

           var journalNo = application.gds_journal.getColumn(application.gds_journal.rowposition,"JOURNAL_NO");
           var c_rowCount = application.gds_account_control_temp.rowcount;
           var d_rowCount = application.gds_journal_detail_temp.getRowCountNF();

              // 칼럼 추가
              application.gds_account_control_temp.addColumn("COUNT","string",256);
              application.gds_account_control_temp.addColumn("JOURNAL_NO","string",256);

              // 분개상세 입력 로우에 추가값 세팅
              for(i=0; i < c_rowCount; i++){
                 application.gds_account_control_temp.setColumn(i,"COUNT",count);
                 application.gds_account_control_temp.setColumn(i,"JOURNAL_NO","NEW");
                 application.gds_account_control_temp.setColumn(i,"DESCRIPTION","");
              }

              // 분개상세 입력 데이터 세팅
              if(d_rowCount == 0){
                 application.gds_journal_detail_temp.copyData(application.gds_account_control_temp);
              }else{
                 // 해당 분개의 기존 분개상세 입력정보 삭제
                 for(i=0; i < d_rowCount; i++){
                    var index = application.gds_journal_detail_temp.findRow("COUNT", count);
                    application.gds_journal_detail_temp.deleteRow(index);
                 }
                 application.gds_journal_detail_temp.appendData(application.gds_account_control_temp, true);
              }

        }



        /************************************** 분개상세 ***********************************************/


        // 분개상세 입력
        this.grid_journal_detail_oncelldblclick = function(obj,e)
        {
           if(SLIPNO != "NEW" &&  this.bt_editSlip.enable == true){
              alert("해당 전표를 수정하시려면 전표수정 버튼을 클릭해주세요");
           }

           if(application.gds_slip.getColumn(application.gds_slip.rowposition,"SLIP_STATUS") == "작성중"){

              var accountControlName = obj.getCellValue(e.row, 3);
              var detailCodeType = obj.getCellValue(e.row, 2);
              application.gv_accountControlName = accountControlName;
              var description = application.gds_account_control.lookup("ACCOUNT_CONTROL_NAME",accountControlName,"DESCRIPTION");

              if(detailCodeType=='CALENDAR'){
                 trace(accountControlName);
                 this.grid_journal_detail.setCellProperty("Body", 4, "edittype", "date");

              }else if(detailCodeType=='SEARCH' || detailCodeType=='SELECT'){
                 this.grid_journal_detail.setCellProperty("Body", 4, "edittype", "none");
                 application.gds_detailCode.filter("DIVISION_CODE_NO=='"+description+"'");
                 this.gfnOpen("dialog_journalDetail", "popup::journalDetailForm.xfdl", "callback", null);

              }else{
                 this.grid_journal_detail.setCellProperty("Body", 4, "edittype", detailCodeType.toLowerCase());

              }
           }
        };


        // 분개상세 그리드 클릭
        this.grid_journal_detail_oncellclick = function(obj,e)
        {
           if(e.cell == 4){
           this.grid_journal_detail.setCellProperty("Body", 4, "edittype", "text");
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
                 this.reload();
              }
        }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.slipForm_onload,this);
            this.grid_slip.addEventHandler("oncellclick",this.grid_slip_oncellclick,this);
            this.grid_journal.addEventHandler("oncellclick",this.grid_journal_oncellclick,this);
            this.grid_journal.addEventHandler("oncelldblclick",this.grid_journal_oncelldblclick,this);
            this.grid_journal_detail.addEventHandler("oncelldblclick",this.grid_journal_detail_oncelldblclick,this);
            this.grid_journal_detail.addEventHandler("oncellclick",this.grid_journal_detail_oncellclick,this);
            this.bt_addSlip.addEventHandler("onclick",this.bt_appSlip_onclick,this);
            this.bt_delSlip.addEventHandler("onclick",this.bt_delSlip_onclick,this);
            this.bt_approvalSlip.addEventHandler("onclick",this.bt_approvalSlip_onclick,this);
            this.bt_searchSlip.addEventHandler("onclick",this.bt_searchSlip_onclick,this);
            this.combo_status.addEventHandler("onitemchanged",this.combo_status_onitemchanged,this);
            this.bt_addJournal.addEventHandler("onclick",this.bt_addJournal_onclick,this);
            this.bt_delJournal.addEventHandler("onclick",this.bt_delJournal_onclick ,this);
            this.bt_editSlip.addEventHandler("onclick",this.bt_editSlip_onclick,this);
            this.bt_saveSlip.addEventHandler("onclick",this.bt_saveSlip_onclick,this);
        };
        this.loadIncludeScript("slipform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
