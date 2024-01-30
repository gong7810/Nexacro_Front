(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("currentAssetRegistform");
            this.set_titletext("고정자산 등록 FORM");
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
            obj._setContents("<ColumnInfo><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_COST\" type=\"STRING\" size=\"256\"/><Column id=\"AMORTIZATION_WAY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPRECIATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"USEFUL_LIFE\" type=\"STRING\" size=\"256\"/><Column id=\"AMORTIZATION_FINAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGE_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"REMAIN_QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"AMORTIZATION_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"NORMAL_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"ACCUMULATED_AMORTIZATION\" type=\"STRING\" size=\"256\"/><Column id=\"BOOK_VALUE_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACQUISITION_COST\"/><Col id=\"ASSET_CODE\"/><Col id=\"AMORTIZATION_WAY\"/><Col id=\"DEPARTMENT\"/><Col id=\"DEPRECIATION\"/><Col id=\"BOOK_VALUE\"/><Col id=\"USEFUL_LIFE\"/><Col id=\"AMORTIZATION_FINAL_YEAR\"/><Col id=\"ACQUISITION_QUANTITY\"/><Col id=\"CHANGE_QUANTITY\"/><Col id=\"REMAIN_QUANTITY\"/><Col id=\"AMORTIZATION_RATE\"/><Col id=\"MONTH\"/><Col id=\"NORMAL_AMORTIZATION\"/><Col id=\"ACCUMULATED_AMORTIZATION\"/><Col id=\"BOOK_VALUE_END\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("accountname","2.81%","4.83%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자산유형");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            obj.set_background("#87c4f1");
            this.addChild(obj.name, obj);

            obj = new Edit("accountName","136.00","29","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("assetcode","2.81%","12.83%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("자산코드");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("assetCode","15.17%","12.83%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("accountcode","2.81%","21.33%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("accountCode","135.00","129","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("assetname","2.81%","30.00%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("자산명");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("assetName","15.17%","30.00%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("progress_date","2.81%","38.83%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("취득일");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("progress","15.17%","38.83%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displayinvalidtext("날짜를 선택해 주세요");
            obj.set_innerdataset("ds_asset");
            obj.set_datecolumn("PROGRESS");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("finalizestatus","2.81%","46.83%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("처리여부");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("finalizeStatus","136.00","281","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_status");
            obj.set_datacolumn("FINALIZE_STATUS");
            obj.set_displaynulltext("처리여부를 선택해 주세요");
            obj.set_tooltiptext("처리여부를 선택해 주세요");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("acquisitioncost","2.81%","55.33%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("취득원가");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("acquisitionCost","15.17%","55.33%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,#.###");
            this.addChild(obj.name, obj);

            obj = new Static("amortizationway","2.81%","63.33%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("상각방법");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("amortizationWay","135.00","380","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("상각방법을 선택해 주세요");
            obj.set_innerdataset("ds_amortizationWay");
            obj.set_datacolumn("AMORTIZATION_WAY");
            obj.set_tooltiptext("상각방법을 선택해 주세요");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("departmentList","2.81%","71.17%","8.54%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("관리부서");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("department","136.00","429","250","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_departmentList");
            obj.set_datacolumn("DEPARTMENT");
            obj.set_displaynulltext("관리부서를 선택해주세요");
            obj.set_tooltiptext("관리부서를 선택해주세요");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("previouscost","50.11%","4.83%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("전기말상각누계액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("previousCost","67.42%","4.83%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,0.###");
            this.addChild(obj.name, obj);

            obj = new Static("previousbalance","50.00%","13.00%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("전기말장부가액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("previousBalance","67.42%","13.33%","27.87%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_maskchar("-");
            obj.set_trimtype("left");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("usefullife","50.11%","21.83%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("내용연수");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("usefulLife","67.53%","21.83%","27.87%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_maskchar("-");
            obj.set_trimtype("left");
            this.addChild(obj.name, obj);

            obj = new Static("amortizationfinalyear","50.11%","30.17%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("상각완료년도");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("amortizationFinalYear","67.42%","30.17%","27.87%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","50.22%","39.00%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("취득수량");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("acquisitionQuantity","67.42%","39.00%","27.87%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00","50.22%","47.17%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("증감수량");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("changeQuantity","67.42%","47.17%","27.98%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_00","50.22%","55.17%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("잔존수량");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("remainQuantity","67.30%","55.17%","27.98%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01","50.22%","63.50%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("상각률");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("amortizationRate","67.30%","63.50%","27.98%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_00_00","50.22%","71.50%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("월수");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("month","67.30%","71.50%","27.98%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00","2.81%","81.83%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("일반상각비");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("normalAmortization","17.42%","81.83%","12.81%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00_00","35.17%","81.83%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("당기말상각누계액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("nowCost","49.89%","81.83%","12.81%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00_00_01_00_01","67.87%","81.67%","13.15%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("당기말장부가액");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("nowBalance","82.58%","81.67%","12.81%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("number");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            obj.set_format("#,#.###");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("saveData","764.00","542","86","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Edit("assetDetailCode","102.81%","15.33%","28.09%","5.17%",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_textAlign("center");
            obj.set_readonly("true");
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

            obj = new BindItem("item6","assetDetailCode","value","ds_assetDetail","ASSET_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("currentAssetRegistform.xfdl","scripts::commonDate.xjs");
        this.registerScript("currentAssetRegistform.xfdl", function() {
        /*************************************************************/
        /* 프 로 그 램 : C:\Users\owner\Desktop\77th_2nd_Nexa ACC\Nexacro_Front\popup\currentAssetRegistform.xfdl
        /* 작 성 일 자 : 2024/01/18
        /* 작 성 자 명 : S.U
        /* 설       명 : 고정자산 상세정보입력 폼
        /*************************************************************/
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/

        application = nexacro.getApplication();
        var accountName = this.parent.accountName;
        var accountCode = this.parent.accountCode;
        var assetCode = this.parent.assetCode;
        var assetName = '';					// 자산명
        var progress = '';					// 취득일
        var finalizeStatus = '';			// 처리여부
        var acquisitionCost = '';			// 취득원가
        var amortizationWay = '';			// 상각방법
        var department = '';				// 관리부서
        var previousCost = '';				// 전기말상각누계액
        var previousBalance = '';			// 전기말장부가액
        var usefulLife = '';				// 내용연수
        var amortizationFinalYear = '';		// 상각완료년도
        var acquisitionQuantity = '';		// 취득수량
        var changeQuantity = '';			// 증감수량
        var remainQuantity = '';			// 잔존수량
        var amortizationRate = '';			// 상각률
        var month = 12;						// 월수
        var normalAmortization = '';		// 일반상각비
        var nowCost = '';					// 당기말상각누계액
        var nowBalance = '';				// 당기말장부가액

        // 자산유형, 자산코드, 계정코드 세팅
        this.currentAssetRegistform_onload = function(obj, e)
        {
        	trace('<<<<<<<<<<open the registform');
        	trace(accountName);
        	trace(assetCode);
        	trace(accountCode);
        	this.accountName.set_value(accountName);
        	this.assetCode.set_value(assetCode);
        	this.assetDetailCode.set_value(assetCode);
        	this.accountCode.set_value(accountCode);

        };

        // 전기말장부가액 세팅
        this.previousCost_onchanged = function ()
        {
        	// 전기말장부가액 = 취득원가 - 전기말상각누계액
         	acquisitionCost = nexacro.toNumber(this.acquisitionCost.text.replace(/,/gi, ''));
         	previousCost = nexacro.toNumber(this.previousCost.text.replace(/,/gi, ''));
        	this.previousBalance.set_value(acquisitionCost - previousCost);
        	previousBalance = acquisitionCost - previousCost;


        };

        // 상각완료년도 세팅
        this.usefulLife_onchanged = function ()
        {
        	// 상각완료년도 = 현재년도 + 내용연수
        	var year = (new Date().getFullYear() + nexacro.toNumber(this.usefulLife.text)).toString();
        	this.amortizationFinalYear.set_value(year+'년');
        	amortizationFinalYear = this.amortizationFinalYear.text;
        	usefulLife = nexacro.toNumber(this.usefulLife.text);
        	// 상각률 = 1 / 내용연수
        	var rate = 1 / nexacro.toNumber(this.usefulLife.text);
        	this.amortizationRate.set_value(rate);
        	amortizationRate = rate;
        	// 월수 = 12 고정
        	this.month.set_value(12);
        	// 일반상각비 = 취득원가 * 상각률
        	this.normalAmortization.set_value(acquisitionCost * amortizationRate);
        	normalAmortization = acquisitionCost * amortizationRate;
        	// 당기말상각누계액 = 전기말상각누계액 + 일반상각비
        	this.nowCost.set_value(previousCost + normalAmortization);
        	nowCost = previousCost + normalAmortization;
        	// 당기말장부가액 = 취득원가 - 당기말상각누계액
        	trace('>>>>>>>>>>', acquisitionCost);
        	trace('>>>>>>>>>>', nowCost);
        	trace('>>>>>>>>>>', acquisitionCost-nowCost);
        	nowBalance = acquisitionCost - nowCost;
        	trace('>>>>>>>>>>', nowBalance);
        	this.nowBalance.set_value(nowBalance);
        };

        // 증감, 잔존수량 세팅
        this.acquisitionQuantity_onchanged = function ()
        {
        	// 취득수량 = 잔존수량
        	this.changeQuantity.set_value(0);
        	this.remainQuantity.set_value(this.acquisitionQuantity.text);
        	changeQuantity = 0;
        	remainQuantity = this.acquisitionQuantity.text.replace(/,/gi, '');

        	trace('>>>>>>>>>>>', this.ds_assetDetail.getColumn(0, 0));
        	trace('>>>>>>>>>>>', this.ds_assetDetail.getColumn(0, 1));
        	trace('>>>>>>>>>>>', this.ds_assetDetail.getColumn(0, 2));
        	trace('>>>>>>>>>>>', this.ds_assetDetail.getColumn(0, 15));
        };

        // 고정자산 등록
        this.saveData_onclick = function(obj,e)
        {
        	trace('<<<<<<< this is save currentAsset >>>>>>>');
        	// 데이터 세팅
        // 	accountName = this.parent.accountName;
        // 	accountCode = this.parent.accountCode;
        // 	assetCode = this.parent.assetCode;
        	assetName = this.assetName.text;
        	progress = this.progress.value;
        	trace('<<<<<'+accountName);
        	finalizeStatus = this.finalizeStatus.text;
        	acquisitionCost = this.acquisitionCost.text;
        	amortizationWay = this.amortizationWay.text;
        	department = this.department.text;
        	previousCost = this.previousCost.text;
        	previousBalance = this.previousBalance.text;
        	usefulLife = this.usefulLife.text;
        	amortizationFinalYear = this.amortizationFinalYear.text;
        	acquisitionQuantity = this.acquisitionQuantity.text;
        	changeQuantity = this.changeQuantity.text;
        	remainQuantity = this.remainQuantity.text;
        	amortizationRate = this.amortizationRate.text;
        	normalAmortization = this.normalAmortization.text;
        	nowCost = this.nowCost.text;
        	nowBalance = this.nowBalance.text;

        	//트랜잭션 정보를 변수에 할당
         	var id = "insertAsset";
         	var url = "svcOperate::insertAsset";
         	var reqData = "ds_asset=ds_asset ds_assetDetail=ds_assetDetail";
         	var resData = "";
        	var args = "";
         	var callback = "aasetRegister_callback";

        	// 전부 입력하지 않았다면 transaction이 실행되지 않음
        	// ---> 공백이어도 마찬가지
        	if(assetName.trim() == ''){
        		alert('자산명을 입력해 주세요.');
        		return;
        // 	} else if(progress == null){
        // 		alert('취득일을 선택해 주세요.');
        // 		return;
        // 	} else if(finalizeStatus.trim()==''){
        // 		alert('처리여부를 선택해 주세요.');
        // 		return;
        // 	} else if(acquisitionCost.trim()==''){
        // 		alert('취득원가를 입력해 주세요.');
        // 		return;
        // 	} else if(amortizationWay.trim()==''){
        // 		alert('상각방법을 선택해 주세요.');
        // 		return;
        // 	} else if(department.trim()==''){
        // 		alert('관리부서를 선택해 주세요.');
        // 		return;
        // 	} else if(usefulLife.trim()==''){
        // 		alert('내용연수를 입력해 주세요.');
        // 		return;
        // 	} else if(acquisitionQuantity.trim()==''){
        // 		alert('취득수량을 입력해 주세요.');
        // 		return;

        		// 상세정보를 다 입력했는지 확인
        	} else{
        		const bool = confirm("등록 하시겠습니까?");
        		if (bool) {
         			this.transaction(id, url, reqData, resData, args, callback);
        			alert("등록되었습니다.");
        			this.close('saveData');
        		}
        	}
        }


        // esc로 창 닫기
        this.currentAssetRegistform_onkeydown = function(obj,e)
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
            this.addEventHandler("onload",this.currentAssetRegistform_onload,this);
            this.addEventHandler("onkeydown",this.currentAssetRegistform_onkeydown,this);
            this.assetName.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.progress.addEventHandler("onchanged",this.edit_birth_date_onchanged,this);
            this.finalizeStatus.addEventHandler("oncloseup",this.edit_position_name_oncloseup,this);
            this.acquisitionCost.addEventHandler("onchanged",this.mask_edit_social_security_number_onchanged,this);
            this.amortizationWay.addEventHandler("oncloseup",this.edit_gender_oncloseup,this);
            this.department.addEventHandler("oncloseup",this.edit_level_of_education_oncloseup,this);
            this.previousCost.addEventHandler("onchanged",this.previousCost_onchanged,this);
            this.usefulLife.addEventHandler("onchanged",this.usefulLife_onchanged,this);
            this.acquisitionQuantity.addEventHandler("onchanged",this.acquisitionQuantity_onchanged,this);
            this.changeQuantity.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.remainQuantity.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.amortizationRate.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.saveData.addEventHandler("onclick",this.saveData_onclick,this);
        };
        this.loadIncludeScript("currentAssetRegistform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
