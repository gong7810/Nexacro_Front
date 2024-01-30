(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_period", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\" sumtext=\"회계년도\"/><Column id=\"PERIOD_START_DATE\" type=\"STRING\" size=\"256\" sumtext=\"기수시작일\"/><Column id=\"PERIOD_END_DATE\" type=\"STRING\" size=\"256\" sumtext=\"기수마감일\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FISCAL_YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menuList", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ST\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">1</Col><Col id=\"MENU_ORDER\">0</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_NAME\">기초정보관리</Col></Row><Row><Col id=\"MENU_ID\">3</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_NAME\">계정과목관리</Col><Col id=\"MENU_URL\">acBase::accountForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_NAME\">코드관리</Col><Col id=\"MENU_URL\">Base::codeForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">5</Col><Col id=\"MENU_NAME\">전표입력</Col><Col id=\"MENU_ORDER\">0</Col><Col id=\"MENU_ST\">1</Col></Row><Row><Col id=\"MENU_ID\">6</Col><Col id=\"MENU_NAME\">일반전표</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">slip::slipForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">7</Col><Col id=\"MENU_NAME\">전표승인</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">slip::slipApprovalForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">8</Col><Col id=\"MENU_NAME\">장부관리</Col><Col id=\"MENU_ORDER\">0</Col><Col id=\"MENU_ST\">1</Col></Row><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">분개장</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">book::journalForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">25</Col><Col id=\"MENU_NAME\">계정별 원장</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">book::ledgerbyAccountForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">12</Col><Col id=\"MENU_NAME\">결산/재무제표</Col><Col id=\"MENU_ORDER\">0</Col><Col id=\"MENU_ST\">1</Col></Row><Row><Col id=\"MENU_ID\">13</Col><Col id=\"MENU_NAME\">합계잔액시산표</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">statement::totalTrialbalanceForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">14</Col><Col id=\"MENU_NAME\">재무상태표</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">statement::financialpostionform.xfdl</Col></Row><Row><Col id=\"MENU_ID\">15</Col><Col id=\"MENU_NAME\">손익계산서</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">statement::incomeSForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">16</Col><Col id=\"MENU_NAME\">예산관리</Col><Col id=\"MENU_ORDER\">0</Col><Col id=\"MENU_ST\">1</Col></Row><Row><Col id=\"MENU_ID\">17</Col><Col id=\"MENU_NAME\">예산신청</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">Budget::budgetForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">18</Col><Col id=\"MENU_NAME\">예산편성</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">Budget::budgetOrgForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">기본설정</Col><Col id=\"MENU_ORDER\">0</Col><Col id=\"MENU_ST\">1</Col></Row><Row><Col id=\"MENU_ID\">22</Col><Col id=\"MENU_NAME\">사원관리</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">emp::empRegistForm.xfdl</Col></Row><Row><Col id=\"MENU_ID\">24</Col><Col id=\"MENU_NAME\">권한관리</Col><Col id=\"MENU_ORDER\">0</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\"/></Row><Row><Col id=\"MENU_NAME\">권한설정</Col><Col id=\"MENU_ID\">26</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">emp::authorityForm.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">메뉴설정</Col><Col id=\"MENU_ID\">27</Col><Col id=\"MENU_ORDER\">1</Col><Col id=\"MENU_ST\">1</Col><Col id=\"MENU_URL\">emp::menuForm.xfdl</Col></Row><Row/><Row/><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_slip", this);
            obj._setContents("<ColumnInfo><Column id=\"SLIP_TYPE\" type=\"STRING\" size=\"256\" sumtext=\"전표유형\"/><Column id=\"AUTHORIZATION_STATUS\" type=\"STRING\" size=\"256\" sumtext=\"결재상태\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\" sumtext=\"품의내역\"/><Column id=\"SLIP_DESCRIPTION\" type=\"STRING\" size=\"256\" sumtext=\"설명\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\" sumtext=\"결의부서코드\"/><Column id=\"REPORTING_EMP_CODE\" type=\"STRING\" size=\"256\" sumtext=\"작성자사원코드\"/><Column id=\"APPROVAL_EMP_CODE\" type=\"STRING\" size=\"256\" sumtext=\"승인자사원코드\"/><Column id=\"REPORTING_DATE\" type=\"STRING\" size=\"256\" sumtext=\"작성일자\"/><Column id=\"APPROVAL_DATE\" type=\"STRING\" size=\"256\" sumtext=\"승인일자\"/><Column id=\"SLIP_STATUS\" type=\"STRING\" size=\"256\" sumtext=\"전표상태\"/><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\" sumtext=\"회계기수일련번호\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\" sumtext=\"전표일련번호\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\" sumtext=\"사원코드\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\" sumtext=\"사원명\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\" sumtext=\"사용자PW\"/><Column id=\"SOCIAL_SECURITY_NUMBER\" type=\"STRING\" size=\"256\" sumtext=\"주민등록번호\"/><Column id=\"BIRTH_DATE\" type=\"STRING\" size=\"256\" sumtext=\"생년월일\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\" sumtext=\"성별\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\" sumtext=\"email\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\" sumtext=\"전화번호\"/><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"256\" sumtext=\"회사코드\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\" sumtext=\"사업장코드\"/><Column id=\"WORKPLACE_NAME\" type=\"STRING\" size=\"256\" sumtext=\"사업장이름\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\" sumtext=\"직급코드\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\" sumtext=\"직급명\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\" sumtext=\"부서코드\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\" sumtext=\"이미지\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\" sumtext=\"우편번호\"/><Column id=\"BASIC_ADDRESS\" type=\"STRING\" size=\"256\" sumtext=\"주소\"/><Column id=\"DETAIL_ADDRESS\" type=\"STRING\" size=\"256\" sumtext=\"상세주소\"/><Column id=\"LEVEL_OF_EDUCATION\" type=\"STRING\" size=\"256\" sumtext=\"최종학력\"/><Column id=\"USER_OR_NOT\" type=\"STRING\" size=\"256\" sumtext=\"사용자여부\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_journal", this);
            obj._setContents("<ColumnInfo><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\" sumtext=\"대차구분\"/><Column id=\"LEFT_DEBTOR_PRICE\" type=\"STRING\" size=\"256\" sumtext=\"차변금액\"/><Column id=\"RIGHT_CREDITS_PRICE\" type=\"STRING\" size=\"256\" sumtext=\"대변금액\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\" sumtext=\"거래처코드\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\" sumtext=\"계정내부코드\"/><Column id=\"JOURNAL_NO\" type=\"STRING\" size=\"256\" sumtext=\"분개일련번호\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\" sumtext=\"수주일련번호\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\" sumtext=\"계정과목\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\" sumtext=\"거래처이름\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_account", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_USE_CHECK\" type=\"STRING\" size=\"256\" sumtext=\"계정사용여부\"/><Column id=\"ACCOUNT_DIVISION\" type=\"STRING\" size=\"256\" sumtext=\"대차구분\"/><Column id=\"EDITABLE\" type=\"INT\" size=\"256\" sumtext=\"변경가능여부 0:불가 1:가능\"/><Column id=\"ACCOUNT_CHARACTER\" type=\"STRING\" size=\"256\" sumtext=\"계정그룹명\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\" sumtext=\"계정명\"/><Column id=\"ACCOUNT_DISPLAY_NAME\" type=\"STRING\" size=\"256\" sumtext=\"계정출력명\"/><Column id=\"ACCOUNT_DISPLAY_NAME_WITH_CODE\" type=\"STRING\" size=\"256\" sumtext=\"계정출력과목코드\"/><Column id=\"ACCOUNT_DESCRIPTION\" type=\"STRING\" size=\"256\" sumtext=\"설명\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\" sumtext=\"계정내부코드\"/><Column id=\"PARENT_ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\" sumtext=\"상위계정내부코드\"/><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\" sumtext=\"계정코드\"/><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_journalDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"JOURNAL_DETAIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOURNAL_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_CODE_NAMES\" type=\"STRING\" size=\"256\"/><Column id=\"JOURNAL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_detail_code", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_USE_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_CODE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CODE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_earlyStatements", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFT_DEBTOR_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_CREDITS_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DEBITS_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CREDITS_SUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_ledgerByAccount", this);
            obj._setContents("<ColumnInfo><Column id=\"CARRY_FORWARD\" type=\"STRING\" size=\"256\"/><Column id=\"REPORTING_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEFT_DEBTOR_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"RIGHT_CREDITS_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_customer", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LICENSE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BUSINESS_CONDITIONS\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CARD_OPEN_PLACE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_open", this);
            obj.addEventHandler("onvaluechanged",this.gds_open_onvaluechanged,this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_loginAuthority", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"isAuthority\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_account_code", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CODE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_account_control", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_CONTROL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_journal_detail_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"JOURNAL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JOURNAL_DETAIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_journal_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"JOURNAL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JOURNAL_DETAIL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JOURNAL_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_account_control_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_CONTROL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CONTROL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_authority_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTHORITY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_AUTHORITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_department", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_customerLedger", this);
            obj._setContents("<ColumnInfo><Column id=\"CARRY_OVER\" type=\"INT\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPOSIT\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"WITHDRAWAL\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"BALANCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_customerLedger_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"REPORTING_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEFT_DEBTOR_PRICE\" type=\"INT\" size=\"256\"/><Column id=\"RIGHT_CREDITS_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_bbs", this);
            obj._setContents("<ColumnInfo><Column id=\"BBS_ID\" type=\"INT\" size=\"256\"/><Column id=\"BBS_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BBS_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"BBS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_account_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\" sumtext=\"계정명\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\" sumtext=\"계정내부코드\"/><Column id=\"PARENT_ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\" sumtext=\"상위계정내부코드\"/><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\" sumtext=\"계정코드\"/><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_journal0", this);
            obj._setContents("<ColumnInfo><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\" sumtext=\"대차구분\"/><Column id=\"LEFT_DEBTOR_PRICE\" type=\"STRING\" size=\"256\" sumtext=\"차변금액\"/><Column id=\"RIGHT_CREDITS_PRICE\" type=\"STRING\" size=\"256\" sumtext=\"대변금액\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\" sumtext=\"거래처코드\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\" sumtext=\"계정내부코드\"/><Column id=\"JOURNAL_NO\" type=\"STRING\" size=\"256\" sumtext=\"분개일련번호\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\" sumtext=\"수주일련번호\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\" sumtext=\"계정과목\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\" sumtext=\"거래처이름\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_plan", this);
            obj._setContents("<ColumnInfo><Column id=\"PLAN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FUND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"BALANCE_DIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_vehicleCode", this);
            obj._setContents("<ColumnInfo><Column id=\"VEHICLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"VEHICLE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AVAILABILITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_accountControlName","");
            this._addVariable("gv_empCode","");
            this._addVariable("gv_empName","");
            this._addVariable("gv_deptCode","");
            this._addVariable("gv_currentPeriod","");
            this._addVariable("gv_journalNo","");
            this._addVariable("gv_customerCode","");
            this._addVariable("gv_accountCode","");
            this._addVariable("gv_accountName","");
            this._addVariable("gv_customerName","");
            this._addVariable("gv_assetCode","");
            this._addVariable("gv_assetName","");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("MDI (Frameset)");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("App_Desktop.xadl", function() {
        application = nexacro.getApplication();
        // divisionCode = '';

        this.Application_onload = function(obj,e)
        {
        	application.mainframe.set_visible(false);
        	nexacro.open("login", "Base::loginForm.xfdl", this.mainframe, null, "", 450, 150, 400, 500); // 모달을 띄운다.
        };


        //목록 페이지 오픈 함수
        gfn_open = function(url, title, sID){
        	trace("@@@@gfn_open@@@@")
        	var workFrame = application.mainframe.VFrameSet00.HFrameSet00.WorkFrame;
        /*
        	var positionCode = application.gds_emp.getColumn(0, "DEPT_CODE");
        	var posNo = positionCode.substr(4);	//DPT-05 에서 05만 구함. 앞의 4글자 subString

        	if(
        		url == "slip::slipApprovalForm.xfdl"
        			|| "statements::totalTrialbalanceForm.xfdl"
        			|| "statements::statementOfFPForm.xfdl"
        			|| "statements::incomeSForm.xfdl"
        	){
        		if(posNo<05){
        			alert("과장 이상만 접근 가능합니다.");
        		}else{
        			workFrame.set_titletext(title);
        			workFrame.set_formurl(url);
        		}
        	}else{  */
        	let pre = "";
        	let post = "";
        		workFrame.set_titletext(title);
        		if(url != null){
        		trace(url);
        			if(url.startsWith("/") || url.endsWith(".html")){
        				pre = url.split('/');
        				post = pre[2].split('.');
        				trace(" 0 "+pre[0]+" 1 "+pre[1]+" 2 "+pre[2]);
        				trace("pre : "+pre[1]+"		post : "+post[0]);
        				if(pre[1] == "hr") pre[1] = "emp";

        				if(post[0].endsWith("form")) workFrame.set_formurl(pre[1]+"::"+post[0]+".xfdl");
        				else workFrame.set_formurl(pre[1]+"::"+post[0]+"form.xfdl");
        			} else {
        				workFrame.set_formurl(url);
        			}
        		}
        		else alert("준비중.");
        //	}
        };



        this.callback = function(strSvcID, nErrorCode, strErrorMag){

        		this.trace(this.gds_loginAuthority.getColCount());
        };

        // gds_open에 데이터가 세팅되면, TopFrame에 user정보 출력
        this.gds_open_onvaluechanged = function(obj,e)
        {
        	var name = obj.getColumn(0, "NAME");
        	var position = obj.getColumn(0, "CODE");
        	this.mainframe.VFrameSet00.TopFrame.getForm().user_info.set_text(name + " " + position + "님");
        };


        /*
        dialog = function ( sID, sURL ,objArguList, obj ){  // objArguList  {변수명: 변수값}
           var objFrame = new ChildFrame();
           var objParentFrame = application.mainframe;
           objFrame.init( sID, 400, 150, 400, 150 );
           objFrame.set_formurl(sURL);
           var vRtn = objFrame.showModal( sID, objParentFrame, objArguList, obj, obj.fn_callback );
        }
        */


        });
		this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::temp_main.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
