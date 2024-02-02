(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dailyFundJournalform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dailyTrade", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVIOUS_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_INCREASE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_DECREASE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_BALANCE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outExpected", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inExpected", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXPENSE_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_finance", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PREVIOUS_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"INCREASE\" type=\"STRING\" size=\"256\"/><Column id=\"DECREASE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"LIMIT_BALANCE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCOUNT_NAME\">당좌예금</Col></Row><Row><Col id=\"ACCOUNT_NAME\">보통예금</Col></Row><Row><Col id=\"ACCOUNT_NAME\">제예금</Col></Row><Row><Col id=\"ACCOUNT_NAME\">정기예금</Col></Row><Row><Col id=\"ACCOUNT_NAME\">정기적금</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_general", this);
            obj._setContents("<ColumnInfo><Column id=\"INDEX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVIOUS_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_INOUT\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_BALANCE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paynote", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVIOUS_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_INCREASE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_DECREASE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_BALANCE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_receivenote", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVIOUS_BALANCE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_INCREASE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_DECREASE\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_BALANCE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","405.00","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일일자금/분개현황");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Tab("dailyFund","63","76","967","464",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("dailyTradeStatus",this.dailyFund);
            obj.set_text("일일거래증감현황");
            this.dailyFund.addChild(obj.name, obj);

            obj = new Calendar("Calendar","26","19","169","36",null,null,null,null,null,null,this.dailyFund.dailyTradeStatus.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.dailyFund.dailyTradeStatus.addChild(obj.name, obj);

            obj = new Button("fetchbtn","226.00","19","79","36",null,null,null,null,null,null,this.dailyFund.dailyTradeStatus.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.dailyFund.dailyTradeStatus.addChild(obj.name, obj);

            obj = new Grid("dailyTradeStatusGrid","26","74","913","341",null,null,null,null,null,null,this.dailyFund.dailyTradeStatus.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_dailyTrade");
            obj.set_readonly("false");
            obj.set_nodatatext("조회된 일일거래가 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"183\"/><Column size=\"183\"/><Column size=\"183\"/><Column size=\"183\"/><Column size=\"183\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"전일잔액\"/><Cell col=\"2\" text=\"당일증가\"/><Cell col=\"3\" text=\"당일감소\"/><Cell col=\"4\" text=\"당일잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PREVIOUS_BALANCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:DAY_INCREASE\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:DAY_DECREASE\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:DAY_BALANCE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.dailyFund.dailyTradeStatus.addChild(obj.name, obj);

            obj = new Tabpage("inoutExpectedPrice",this.dailyFund);
            obj.set_text("입출금예정액");
            this.dailyFund.addChild(obj.name, obj);

            obj = new Calendar("Calendar","26.00","19","169","36",null,null,null,null,null,null,this.dailyFund.inoutExpectedPrice.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.dailyFund.inoutExpectedPrice.addChild(obj.name, obj);

            obj = new Button("fetchInoutbtn","226.00","19","79","36",null,null,null,null,null,null,this.dailyFund.inoutExpectedPrice.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.dailyFund.inoutExpectedPrice.addChild(obj.name, obj);

            obj = new Grid("outExpectedPriceGrid","13","85","465","328",null,null,null,null,null,null,this.dailyFund.inoutExpectedPrice.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_outExpected");
            obj.set_nodatatext("출금예정이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"155\"/><Column size=\"155\"/><Column size=\"155\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자금항목\"/><Cell col=\"1\" text=\"적요\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NAME\"/><Cell col=\"1\" text=\"bind:EXPENSE_REPORT\"/><Cell col=\"2\" text=\"bind:PRICE\"/></Band></Format></Formats>");
            this.dailyFund.inoutExpectedPrice.addChild(obj.name, obj);

            obj = new Grid("inExpectedPriceGrid","491.00","85","465","328",null,null,null,null,null,null,this.dailyFund.inoutExpectedPrice.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_inExpected");
            obj.set_nodatatext("입금예정이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"155\"/><Column size=\"155\"/><Column size=\"155\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자금항목\"/><Cell col=\"1\" text=\"적요\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NAME\"/><Cell col=\"1\" text=\"bind:EXPENSE_REPORT\"/><Cell col=\"2\" text=\"bind:PRICE\"/></Band></Format></Formats>");
            this.dailyFund.inoutExpectedPrice.addChild(obj.name, obj);

            obj = new Static("Static00","692.00","60","70","20",null,null,null,null,null,null,this.dailyFund.inoutExpectedPrice.form);
            obj.set_taborder("4");
            obj.set_text("입금예정");
            obj.set_font("normal 13pt/normal \"Gulim\"");
            this.dailyFund.inoutExpectedPrice.addChild(obj.name, obj);

            obj = new Static("Static00_00","214.00","60","70","20",null,null,null,null,null,null,this.dailyFund.inoutExpectedPrice.form);
            obj.set_taborder("5");
            obj.set_text("출금예정");
            obj.set_font("normal 13pt/normal \"Gulim\"");
            this.dailyFund.inoutExpectedPrice.addChild(obj.name, obj);

            obj = new Tabpage("financeStatus",this.dailyFund);
            obj.set_text("예적금현황");
            this.dailyFund.addChild(obj.name, obj);

            obj = new Calendar("date","32.00","17","131","36",null,null,null,null,null,null,this.dailyFund.financeStatus.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.dailyFund.financeStatus.addChild(obj.name, obj);

            obj = new Static("Static00_00","167.00","20","27","24",null,null,null,null,null,null,this.dailyFund.financeStatus.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.dailyFund.financeStatus.addChild(obj.name, obj);

            obj = new Button("fetchfinanceBtn","358.00","17","79","36",null,null,null,null,null,null,this.dailyFund.financeStatus.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.dailyFund.financeStatus.addChild(obj.name, obj);

            obj = new Grid("financeStatusGrid","34","83","900","329",null,null,null,null,null,null,this.dailyFund.financeStatus.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_finance");
            obj.set_nodatatext("조회된 예적금현황이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"113\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"개설점\"/><Cell col=\"2\" text=\"계좌번호\"/><Cell col=\"3\" text=\"전일잔액\"/><Cell col=\"4\" text=\"증가\"/><Cell col=\"5\" text=\"감소\"/><Cell col=\"6\" text=\"당일잔액\"/><Cell col=\"7\" text=\"한도잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_CODE\"/><Cell col=\"1\" text=\"bind:CUSTOMER_NAME\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ACCOUNT_NO\"/><Cell col=\"3\" text=\"bind:PREVIOUS_BALANCE\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:INCREASE\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:DECREASE\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DAY_BALANCE\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:LIMIT_BALANCE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.dailyFund.financeStatus.addChild(obj.name, obj);

            obj = new Combo("selectAccount","196","17","131","36",null,null,null,null,null,null,this.dailyFund.financeStatus.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_account");
            obj.set_datacolumn("ACCOUNT_NAME");
            obj.set_text("구분");
            obj.set_value("");
            obj.set_index("-1");
            this.dailyFund.financeStatus.addChild(obj.name, obj);

            obj = new Tabpage("fundStatus",this.dailyFund);
            obj.set_text("자금현황");
            this.dailyFund.addChild(obj.name, obj);

            obj = new Tab("fundStatusTab","7.00","-1","951","426",null,null,null,null,null,null,this.dailyFund.fundStatus.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.dailyFund.fundStatus.addChild(obj.name, obj);

            obj = new Tabpage("generalFundStatus",this.dailyFund.fundStatus.form.fundStatusTab);
            obj.set_text("총괄거래현황");
            this.dailyFund.fundStatus.form.fundStatusTab.addChild(obj.name, obj);

            obj = new Calendar("startDate","32.00","17","131","36",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.addChild(obj.name, obj);

            obj = new Static("Static00_00","167.00","20","27","24",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Gulim\"");
            this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.addChild(obj.name, obj);

            obj = new Calendar("endDate","199.00","17","131","36",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.addChild(obj.name, obj);

            obj = new Button("fetchGeneralTradeBtn","358.00","17","79","36",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.addChild(obj.name, obj);

            obj = new Grid("generalFundStatusGrid","34","73","884","301",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_general");
            obj.set_nodatatext("조회된 거래현황이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"148\"/><Column size=\"148\"/><Column size=\"148\"/><Column size=\"148\"/><Column size=\"148\"/><Column size=\"148\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"거래처\"/><Cell col=\"3\" text=\"전일잔액\"/><Cell col=\"4\" text=\"당일증감내역\"/><Cell col=\"5\" text=\"당일잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:INDEX_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"2\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"3\" text=\"bind:PREVIOUS_BALANCE\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:DAY_INOUT\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:DAY_BALANCE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.addChild(obj.name, obj);

            obj = new Tabpage("noteStatus",this.dailyFund.fundStatus.form.fundStatusTab);
            obj.set_text("어음현황");
            this.dailyFund.fundStatus.form.fundStatusTab.addChild(obj.name, obj);

            obj = new Calendar("Calendar","26.00","19","169","36",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.addChild(obj.name, obj);

            obj = new Button("fetchNotebtn","226.00","19","79","36",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.addChild(obj.name, obj);

            obj = new Grid("payNoteStatusGrid","26","81","442","296",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_paynote");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처\"/><Cell col=\"1\" text=\"전일잔액\"/><Cell col=\"2\" text=\"당일증가\"/><Cell col=\"3\" text=\"당일감소\"/><Cell col=\"4\" text=\"당일잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PREVIOUS_BALANCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:DAY_INCREASE\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:DAY_DECREASE\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:DAY_BALANCE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.addChild(obj.name, obj);

            obj = new Grid("receiveNoteStatusGrid","484.00","81","442","296",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_receivenote");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/><Column size=\"89\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처\"/><Cell col=\"1\" text=\"전일잔액\"/><Cell col=\"2\" text=\"당일증가\"/><Cell col=\"3\" text=\"당일감소\"/><Cell col=\"4\" text=\"당일잔액\"/></Band><Band id=\"body\"><Cell text=\"bind:CUSTOMER_NAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PREVIOUS_BALANCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:DAY_INCREASE\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:DAY_DECREASE\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:DAY_BALANCE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.addChild(obj.name, obj);

            obj = new Static("Static00_00","185.00","60","105","20",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form);
            obj.set_taborder("4");
            obj.set_text("지급어음현황");
            obj.set_font("normal 13pt/normal \"Gulim\"");
            this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.addChild(obj.name, obj);

            obj = new Static("Static00","663.00","60","105","20",null,null,null,null,null,null,this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form);
            obj.set_taborder("5");
            obj.set_text("받을어음현황");
            obj.set_font("normal 13pt/normal \"Gulim\"");
            this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.dailyFund.dailyTradeStatus.form
            obj = new Layout("default","",0,0,this.dailyFund.dailyTradeStatus.form,function(p){});
            this.dailyFund.dailyTradeStatus.form.addLayout(obj.name, obj);

            //-- Default Layout : this.dailyFund.inoutExpectedPrice.form
            obj = new Layout("default","",0,0,this.dailyFund.inoutExpectedPrice.form,function(p){});
            this.dailyFund.inoutExpectedPrice.form.addLayout(obj.name, obj);

            //-- Default Layout : this.dailyFund.financeStatus.form
            obj = new Layout("default","",0,0,this.dailyFund.financeStatus.form,function(p){});
            this.dailyFund.financeStatus.form.addLayout(obj.name, obj);

            //-- Default Layout : this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form
            obj = new Layout("default","",0,0,this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form,function(p){});
            this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form.addLayout(obj.name, obj);

            //-- Default Layout : this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form
            obj = new Layout("default","",0,0,this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form,function(p){});
            this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form.addLayout(obj.name, obj);

            //-- Default Layout : this.dailyFund.fundStatus.form
            obj = new Layout("default","",0,0,this.dailyFund.fundStatus.form,function(p){});
            this.dailyFund.fundStatus.form.addLayout(obj.name, obj);

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
        this.registerScript("dailyFundJournalform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\operate\dailyFundJournalform.xfdl
        /* 작 성 일 자 : 2024/01/25
        /* 작 성 자 명 : S.U
        /* 설       명 : 일일자금/분개현황 폼
        /*************************************************************/

        // 일일거래증감현황 조회
        this.fetchbtn_onclick = function(obj,e)
        {
        	var date = this.dailyFund.dailyTradeStatus.form.Calendar.text;

        	if (date.replace(/-/gi, '').trim() == '') {
        		alert("조회일자를 선택해주세요");
        	} else {
        		var id = "findDailyTradeStatus";
        		var url = "svcOperate::findDailyTradeStatus";
        		var reqData = "";
        		var resData = "ds_dailyTrade=ds_dailyTrade";
        		var args = "date="+date;
        		var callback = "dailyTradeStatus_callback";

        		this.transaction(id, url, reqData, resData, args, callback);
        	}
        };

        // 입출금예정액 조회
        this.fetchInoutbtn_onclick = function(obj,e)
        {
        	var date = this.dailyFund.inoutExpectedPrice.form.Calendar.text;

        	if (date.replace(/-/gi, '').trim() == '') {
        		alert("조회일자를 선택해주세요");
        	} else {
        		var id = "findInoutExpectedPrice";
        		var url = "svcOperate::findInoutExpectedPrice";
        		var reqData = "";
        		var resData = "ds_outExpected=ds_outExpected ds_inExpected=ds_inExpected";
        		var args = "date="+date;
        		var callback = "inoutExpectedPrice_callback";

        		this.transaction(id, url, reqData, resData, args, callback);
        	}
        };

        // 예적금현황 조회
        this.fetchfinanceBtn_onclick = function(obj,e)
        {
        	var date = this.dailyFund.financeStatus.form.date.text;
        	var accountName = this.dailyFund.financeStatus.form.selectAccount.text;

        	if (date.replace(/-/gi, '').trim() == '') {
        		alert("조회일자를 선택해주세요");
        	} else if (accountName == '') {
        		alert("구분을 선택해주세요");
        	} else {
        		var id = "findFinanceStatus";
        		var url = "svcOperate::findFinanceStatus";
        		var reqData = "";
        		var resData = "ds_finance=ds_finance";
        		var args = "date='"+date+"' accountName='"+accountName+"'";
        		var callback = "financeStatus_callback";

        		this.transaction(id, url, reqData, resData, args, callback);
        	}
        };

        // 총괄거래현황 조회
        this.fetchGeneralTradeBtn_onclick = function(obj,e)
        {
        	var startDate = this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form.startDate.text;
        	var endDate = this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form.endDate.text;

        	if (startDate.replace(/-/gi, '').trim() == '' || endDate.replace(/-/gi, '').trim() == '') {
        		alert("조회일자를 선택해주세요");
        	} else {
        		var id = "findGeneralFundStatus";
        		var url = "svcOperate::findGeneralFundStatus";
        		var reqData = "";
        		var resData = "ds_general=ds_general";
        		var args = "startDate='"+startDate+"' endDate='"+endDate+"'";
        		var callback = "findGeneralFundStatus_callback";

        		this.transaction(id, url, reqData, resData, args, callback);
        	}
        };

        // 어음현황 조회
        this.fetchNotebtn_onclick = function(obj,e)
        {
        	var date = this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form.Calendar.text;
        	trace(date);

        	if (date.replace(/-/gi, '').trim() == '') {
        		alert("조회일자를 선택해주세요");
        	} else {
        		var id = "findNoteStatus";
        		var url = "svcOperate::findNoteStatus";
        		var reqData = "";
        		var resData = "ds_paynote=ds_paynote ds_receivenote=ds_receivenote";
        		var args = "date="+date;
        		var callback = "findNoteStatus_callback";

        		this.transaction(id, url, reqData, resData, args, callback);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.dailyFund.dailyTradeStatus.form.fetchbtn.addEventHandler("onclick",this.fetchbtn_onclick,this);
            this.dailyFund.inoutExpectedPrice.form.fetchInoutbtn.addEventHandler("onclick",this.fetchInoutbtn_onclick,this);
            this.dailyFund.financeStatus.form.fetchfinanceBtn.addEventHandler("onclick",this.fetchfinanceBtn_onclick,this);
            this.dailyFund.fundStatus.form.fundStatusTab.generalFundStatus.form.fetchGeneralTradeBtn.addEventHandler("onclick",this.fetchGeneralTradeBtn_onclick,this);
            this.dailyFund.fundStatus.form.fundStatusTab.noteStatus.form.fetchNotebtn.addEventHandler("onclick",this.fetchNotebtn_onclick,this);
        };
        this.loadIncludeScript("dailyFundJournalform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
