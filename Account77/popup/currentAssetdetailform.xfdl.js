(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("currentAssetdetailform");
            this.set_titletext("고정자산 상세 Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(890,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"FINALIZE_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FINALIZE_STATUS\">진행</Col></Row><Row><Col id=\"FINALIZE_STATUS\">정지</Col></Row><Row><Col id=\"FINALIZE_STATUS\">말소</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_amortizationWay", this);
            obj._setContents("<ColumnInfo><Column id=\"AMORTIZATION_WAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AMORTIZATION_WAY\">정액법</Col></Row><Row><Col id=\"AMORTIZATION_WAY\">정률법</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_departmentList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPARTMENT\">재경부</Col></Row><Row><Col id=\"DEPARTMENT\">영업부</Col></Row><Row><Col id=\"DEPARTMENT\">생산부</Col></Row><Row><Col id=\"DEPARTMENT\">구매자재부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_asset", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRESS\" type=\"STRING\" size=\"256\"/><Column id=\"FINALIZE_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCOUNT_NAME\"/><Col id=\"ASSET_CODE\"/><Col id=\"ACCOUNT_CODE\"/><Col id=\"ASSET_NAME\"/><Col id=\"PROGRESS\"/><Col id=\"FINALIZE_STATUS\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assetDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_COST\" type=\"STRING\" size=\"256\"/><Column id=\"AMORTIZATION_WAY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPRECIATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"USEFUL_LIFE\" type=\"STRING\" size=\"256\"/><Column id=\"AMORTIZATION_FINAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"REMAIN_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"AMORTIZATION_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"NORMAL_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCUMULATED_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("accountname","2.81%","4.67%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자산유형");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Edit("accountName","136.00","29","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("assetcode","2.81%","12.67%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자산코드");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("assetCode","15.17%","12.67%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("accountcode","2.81%","21.17%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("accountCode","135.00","129","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("assetname","2.81%","30.00%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("자산명");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("assetName","15.17%","30.00%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("progress_date","2.81%","38.67%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취득일");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("progress","15.17%","38.67%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displayinvalidtext("날짜를 선택해 주세요");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("finalizestatus","2.81%","46.67%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("처리여부");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("finalizeStatus","136.00","281","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_status");
            obj.set_datacolumn("FINALIZE_STATUS");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("acquisitioncost","2.81%","55.17%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("취득원가");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("acquisitionCost","15.17%","55.17%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("amortizationway","2.81%","63.17%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("상각방법");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("amortizationWay","135.00","380","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_amortizationWay");
            obj.set_datacolumn("AMORTIZATION_WAY");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("departmentList","2.81%","71.17%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("관리부서");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("department","136.00","429","250","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_departmentList");
            obj.set_datacolumn("DEPARTMENT");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("previouscost","50.00%","4.67%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("전기말상각누계액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("previousCost","67.42%","4.67%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,0.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("previousbalance","50.00%","13.00%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("전기말장부가액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("previousBalance","67.42%","13.17%","27.87%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_maskchar("-");
            obj.set_trimtype("left");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("usefullife","50.00%","21.67%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("내용연수");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("usefulLife","67.53%","21.67%","27.87%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_maskchar("-");
            obj.set_trimtype("left");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("amortizationfinalyear","50.00%","30.17%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("상각완료년도");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("amortizationFinalYear","67.42%","30.17%","27.87%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","50.11%","39.00%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("취득수량");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("acquisitionQuantity","67.42%","39.00%","27.87%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","50.11%","47.17%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("증감수량");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("changeQuantity","67.42%","47.17%","27.98%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_00","50.11%","55.17%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("잔존수량");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("remainQuantity","67.19%","55.17%","27.98%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01","50.11%","63.50%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("상각률");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("amortizationRate","67.19%","63.50%","27.98%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_00_00","50.11%","71.50%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("월수");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("month","67.19%","71.50%","27.98%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00","2.81%","81.67%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("일반상각비");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("normalAmortization","17.42%","81.67%","12.81%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00_00","35.17%","81.67%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("당기말상각누계액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("nowCost","49.89%","81.67%","12.81%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00_01","67.87%","81.67%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("당기말장부가액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("nowBalance","82.47%","81.67%","12.81%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("modify_btn","597.00","550","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("list_btn_detail","682.00","550","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("delete_btn","772.00","550","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("assetDetailCode","920","80","207","40",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",890,600,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","accountName","value","ds_asset","ACCOUNT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","assetCode","value","ds_asset","ASSET_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","accountCode","value","ds_asset","ACCOUNT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","assetName","value","ds_asset","ASSET_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","progress","value","ds_asset","PROGRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","finalizeStatus","value","ds_asset","FINALIZE_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","assetDetailCode","value","ds_assetDetail","ASSET_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","acquisitionCost","value","ds_assetDetail","ACQUISITION_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","amortizationWay","value","ds_assetDetail","AMORTIZATION_WAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","department","value","ds_assetDetail","DEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","previousCost","value","ds_assetDetail","DEPRECIATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","previousBalance","value","ds_assetDetail","BOOK_VALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","usefulLife","value","ds_assetDetail","USEFUL_LIFE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","amortizationFinalYear","value","ds_assetDetail","AMORTIZATION_FINAL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","acquisitionQuantity","value","ds_assetDetail","ACQUISITION_QUANTITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","changeQuantity","value","ds_assetDetail","CHANGE_QUANTITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","remainQuantity","value","ds_assetDetail","REMAIN_QUANTITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","amortizationRate","value","ds_assetDetail","AMORTIZATION_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","month","value","ds_assetDetail","MONTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","normalAmortization","value","ds_assetDetail","NORMAL_AMORTIZATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","nowCost","value","ds_assetDetail","ACCUMULATED_AMORTIZATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","nowBalance","value","ds_assetDetail","BOOK_VALUE_END");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("currentAssetdetailform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\popup\currentAssetdetailform.xfdl
        /* 작 성 일 자 : 2024/01/20
        /* 작 성 자 명 : S.U
        /* 설       명 : 고정자산상세 조회 폼
        /*************************************************************/
        var assetCode = this.parent.assetCode;		// 선택 자산코드


        // 창이 켜지면서 조회
        this.currentAssetdetailform_onload = function(obj,e)
        {
        	var id = "findAssetDetail";
        	var url = "svcOperate::findAssetDetail";
        	var reqData ="";
        	var resData ="ds_asset=ds_asset ds_assetDetail=ds_assetDetail";
        	var args = "assetCode="+assetCode;
        	var callback = "onload_callbackFunc";

        	this.transaction(id, url, reqData, resData, args, callback);

        	this.assetDetailCode.value = assetCode;
        }

        // 수정
        this.modify_btn_onclick = function(obj,e)
        {
        	if(this.modify_btn.text == "수정") {
        		this.modify_btn.set_text("저장");
        		this.assetName.set_readonly(false);
        		this.finalizeStatus.set_readonly(false);
        		this.progress.set_readonly(false);
        		this.department.set_readonly(false);
        		this.usefulLife.set_readonly(false);
        		this.changeQuantity.set_readonly(false);
        	} else {	//  유효성 검증 및 transaction을 위한 if문 시작

        		const bool = confirm("저장하시겠습니까?");

        		var id = "updateAsset";
        		var url = "svcOperate::updateAsset";
        		var reqData  = "ds_asset=ds_asset ds_assetDetail=ds_assetDetail"; // 업데이트할 데이터만 전송
        		var resData = "";
        		var args = "";
        		var callback = "callbackFunc";

        		if (this.assetName.text.trim() == "") {
        			alert("자산명을 입력해 주세요");
        			return;
        		} else if (this.usefulLife.text.trim() == ""){
        			alert('내용연수를 입력해 주세요');
        			return;
        		} else if (this.changeQuantity.text.trim() == ""){
        			alert('증감수량을 입력해 주세요');
        			return;
        		} else {
        			if(bool){
        				this.transaction(id, url, reqData, resData, args, callback);
        				trace("update asset data has been successfully sent!!");
        				alert("저장되었습니다.");
        				trace("response Data has been sent");
        			}else{
        				return; // 취소하면 다시 화면으로 돌아감
        			}
        		}

        		//컴포넌트들의 상태들을 다시 원복해 놓는다.
        		this.modify_btn.set_text('수정');
        		this.delete_btn.set_visible(true);
        		this.close('mod_btn');

        	}

        };

        // 내용연수 수정
        this.usefulLife_onchanged = function ()
        {
        	// 상각완료년도 = 현재년도 + 내용연수
        	var year = (new Date().getFullYear() + nexacro.toNumber(this.usefulLife.text)).toString();
        	this.amortizationFinalYear.set_value(year+'년');
        	// 상각률 = 1 / 내용연수
        	var rate = 1 / nexacro.toNumber(this.usefulLife.text);
        	this.amortizationRate.set_value(rate);
        	// 월수 = 12 고정
        	this.month.set_value(12);
        	// 일반상각비 = 취득원가 * 상각률
        	this.normalAmortization.set_value(nexacro.toNumber(this.acquisitionCost.value) * nexacro.toNumber(this.amortizationRate.value));
        	// 당기말상각누계액 = 전기말상각누계액 + 일반상각비
        	this.nowCost.set_value(nexacro.toNumber(this.previousCost.value) + nexacro.toNumber(this.normalAmortization.value));
        	// 당기말장부가액 = 취득원가 - 당기말상각누계액
        	this.nowBalance.set_value(nexacro.toNumber(this.acquisitionCost.value) - nexacro.toNumber(this.nowCost.value));
        };

        // 증감수량 수정
        this.changeQuantity_onchanged = function ()
        {
        	trace(this.progress.value);
        	// 잔존수량 = 취득수량 + 증감수량
        	var sum = nexacro.toNumber(this.acquisitionQuantity.value) + nexacro.toNumber(this.changeQuantity.value);
        	this.remainQuantity.set_value(sum);
        };

        // 목록
        this.list_btn_detail_onclick = function(obj,e)
        {
        	this.close('list_btn');
        };

        // 삭제
        this.delete_btn_onclick = function ()
        {
        	trace(this.assetCode.value);
        	const bool = confirm("삭제하시겠습니까?");

        	if(bool){
        		var id = "deleteAsset";
        		var url = "svcOperate::deleteAsset";
        		var reqData = "";
        		var resData = "";
        		var args = "assetCode="+this.assetCode.value; // 삭제할 게시물의 id를 파라미터로 백단으로 넘겨준다.
        		var callback = "callbackFunc";

        		this.transaction(id, url, reqData, resData, args, callback);

        		alert("성공적으로 삭제되었습니다.");

        		this.close('del_btn'); // 삭제후 팝업창을 닫는다.

        	}else{
        		trace("not deleted"); // 삭제하지 않으면 아무 동작도 하지 않는다.
        	}
        };

        // esc로 창 닫기
        this.currentAssetdetailform_onkeydown = function(obj,e)
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
            this.addEventHandler("onload",this.currentAssetdetailform_onload,this);
            this.addEventHandler("onkeydown",this.currentAssetdetailform_onkeydown,this);
            this.assetName.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.progress.addEventHandler("onchanged",this.edit_birth_date_onchanged,this);
            this.finalizeStatus.addEventHandler("oncloseup",this.edit_position_name_oncloseup,this);
            this.acquisitionCost.addEventHandler("onchanged",this.mask_edit_social_security_number_onchanged,this);
            this.amortizationWay.addEventHandler("oncloseup",this.edit_gender_oncloseup,this);
            this.department.addEventHandler("oncloseup",this.edit_level_of_education_oncloseup,this);
            this.previousCost.addEventHandler("onchanged",this.previousCost_onchanged,this);
            this.usefulLife.addEventHandler("onchanged",this.usefulLife_onchanged,this);
            this.acquisitionQuantity.addEventHandler("onchanged",this.acquisitionQuantity_onchanged,this);
            this.changeQuantity.addEventHandler("onchanged",this.changeQuantity_onchanged,this);
            this.remainQuantity.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.amortizationRate.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.modify_btn.addEventHandler("onclick",this.modify_btn_onclick,this);
            this.modify_btn.addEventHandler("onsetfocus",this.modify_btn_onsetfocus,this);
            this.list_btn_detail.addEventHandler("onclick",this.list_btn_detail_onclick,this);
            this.delete_btn.addEventHandler("onclick",this.delete_btn_onclick,this);
        };
        this.loadIncludeScript("currentAssetdetailform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
