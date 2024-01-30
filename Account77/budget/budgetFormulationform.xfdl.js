(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("budgetinsertform");
            this.set_titletext("New Form");
            this.set_stepitemgap("180");
            this.set_stepitemsize("20");
            this.set_stepalign("right bottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_budgetCode", this);
            obj._setContents("<ColumnInfo><Column id=\"BUDGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_budget", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGETING_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"M1BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M2BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M3BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M4BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M5BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M6BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M7BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M8BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M9BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M10BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M11BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M12BUDGET\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_formation", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGETING_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"M1BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M2BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M3BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M4BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M5BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M6BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M7BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M8BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M9BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M10BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M11BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M12BUDGET\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_budgetListForComp", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGETING_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"M1_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M2_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M3_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M4_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M5_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M6_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M7_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M8_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M9_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M10_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M11_BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M12_BUDGET\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_budgetListForRecon", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_PERIOD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUDGETING_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"M1BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M2BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M3BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M4BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M5BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M6BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M7BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M8BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M9BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M10BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M11BUDGET\" type=\"INT\" size=\"256\"/><Column id=\"M12BUDGET\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00_01","422","352","576","178",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_budgetListForComp");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"109\"/><Column size=\"31\"/><Column size=\"109\"/><Column size=\"31\"/><Column size=\"109\"/><Column size=\"43\"/><Column size=\"111\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"월\"/><Cell col=\"1\" text=\"금액\"/><Cell col=\"2\" text=\"월\"/><Cell col=\"3\" text=\"금액\"/><Cell col=\"4\" text=\"월\"/><Cell col=\"5\" text=\"금액\"/><Cell col=\"6\" text=\"분기\"/><Cell col=\"7\" text=\"합계\"/></Band><Band id=\"body\"><Cell text=\"01\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:M1BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"2\" text=\"02\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:M2BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"4\" text=\"03\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:M3BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"6\" text=\"1분기\" textAlign=\"center\"/><Cell col=\"7\" expr=\"parseInt(M1BUDGET)+parseInt(M2BUDGET)+parseInt(M3BUDGET)\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"1\" text=\"04\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"bind:M4BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"1\" col=\"2\" text=\"05\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"bind:M5BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"1\" col=\"4\" text=\"06\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"bind:M6BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"1\" col=\"6\" text=\"2분기\" textAlign=\"center\"/><Cell row=\"1\" col=\"7\" expr=\"parseInt(M4BUDGET)+parseInt(M5BUDGET)+parseInt(M6BUDGET)\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"2\" text=\"07\" textAlign=\"center\"/><Cell row=\"2\" col=\"1\" text=\"bind:M7BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"2\" col=\"2\" text=\"08\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" text=\"bind:M8BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"2\" col=\"4\" text=\"09\" textAlign=\"center\"/><Cell row=\"2\" col=\"5\" text=\"bind:M9BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"2\" col=\"6\" text=\"3분기\" textAlign=\"center\"/><Cell row=\"2\" col=\"7\" expr=\"parseInt(M7BUDGET)+parseInt(M8BUDGET)+parseInt(M9BUDGET)\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"3\" text=\"10\" textAlign=\"center\"/><Cell row=\"3\" col=\"1\" text=\"bind:M10BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"3\" col=\"2\" text=\"11\" textAlign=\"center\"/><Cell row=\"3\" col=\"3\" text=\"bind:M11BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"3\" col=\"4\" text=\"12\" textAlign=\"center\"/><Cell row=\"3\" col=\"5\" text=\"bind:M12BUDGET\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"3\" col=\"6\" text=\"4분기\" textAlign=\"center\"/><Cell row=\"3\" col=\"7\" expr=\"parseInt(M10BUDGET)+parseInt(M11BUDGET)+parseInt(M12BUDGET)\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\"/><Cell row=\"4\" colspan=\"6\" text=\"연간 총 예산    \" textAlign=\"right\"/><Cell row=\"4\" col=\"6\" colspan=\"2\" textAlign=\"center\" displaytype=\"number\" edittype=\"mask\" expr=\"parseInt(M1BUDGET)+parseInt(M2BUDGET)+parseInt(M3BUDGET)+parseInt(M4BUDGET)+parseInt(M5BUDGET)+parseInt(M6BUDGET)+parseInt(M7BUDGET)+parseInt(M8BUDGET)+parseInt(M9BUDGET)+parseInt(M10BUDGET)+parseInt(M11BUDGET)+parseInt(M12BUDGET)\"/></Band></Format><Format id=\"format00\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","509","8","83","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("편성 내역");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_textAlign("center");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","-1","-1","178","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","14","9","151","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("예산 편성");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"함초롬돋움\"");
            obj.set_border("3px none #000000");
            obj.set_background("transparent");
            obj.set_borderRadius("0px");
            obj.set_color("#fcfbfd");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","-1","178","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","12","8","151","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("예산 조정");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"함초롬돋움\"");
            obj.set_border("3px none #000000");
            obj.set_background("transparent");
            obj.set_borderRadius("0px");
            obj.set_color("#fcfbfd");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","204","78","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","204","131","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","204","21","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_workplace","217","88","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("사업장 선택");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_deptCode","217","142","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("부서 선택");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_period","218","32","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_borderRadius("5px");
            obj.set_displaynulltext("회계연도");
            obj.set_textAlign("center");
            obj.set_enable("true");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj.set_autoselect("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","-1","104","117","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("접속자 : ");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_textAlign("center");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","9","142","91","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("권한 : ");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_textAlign("center");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","97","101","61","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("#e4b94d");
            obj.set_color("darkslategray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","97","140","61","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_background("#e4b94d");
            obj.set_color("darkslategray");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","955","310","43","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("승인");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj.set_positionstep("0");
            obj.set_background("#5170ad");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","870","304","70","42",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("예산 편성");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00","588","14","33","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_background("#0a0a0a");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","484","38","80","14",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_background("#5eb2d3");
            obj.set_borderRadius("2px");
            obj.set_boxShadow("2px 2px 10px 0px #46babe");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","832","38","80","14",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_background("#5eb2d3");
            obj.set_borderRadius("2px");
            obj.set_boxShadow("2px 2px 10px 0px #46babe");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","410","66","279","213",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("gds_account");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"117\"/><Column size=\"143\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정 코드\"/><Cell col=\"1\" text=\"계정 과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_02","740","67","279","213",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_binddataset("gds_account_detail");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"134\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정 코드\"/><Cell col=\"1\" text=\"계정 과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","466","22","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("계정 과목");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","814","23","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("계정 상세");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("searchButton","601","24","55","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("조회");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","396","282","312","58",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","892","532","173","44",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("편성 내역 조회 및 조정 ▶");
            obj.set_font("normal 700 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\",\"함초롬돋움\"");
            obj.set_color("tomato");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","880","532","173","44",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("◀ 신청 탭으로 돌아가기");
            obj.set_font("normal 700 14px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\",\"함초롬돋움\"");
            obj.set_positionstep("1");
            obj.set_color("tomato");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","510","46","310","503",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_positionstep("1");
            obj.set_binddataset("ds_budgetListForRecon");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\" band=\"left\"/><Column size=\"220\"/></Columns><Rows><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"29\"/><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"회계 연도 : \" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:application.gds_period.getColumn(0,&quot;FISCAL_YEAR&quot;)\" textAlign=\"center\"/><Cell row=\"1\" text=\"예산 코드 : \" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"expr:BUDGETING_CODE == &quot;2&quot; ? &quot;편성&quot; : &quot;기타&quot;\" textAlign=\"center\"/><Cell row=\"2\" text=\"사업장(부서) : \" textAlign=\"center\"/><Cell row=\"2\" col=\"1\" text=\"expr:application.gds_department.getColumn(0,&quot;WORKPLACE_NAME&quot;) +&quot;(&quot; + application.gds_department.getColumn(0,&quot;DEPT_NAME&quot;) + &quot;)&quot;\" textAlign=\"center\"/><Cell row=\"3\" text=\"계정 과목 : \" textAlign=\"center\"/><Cell row=\"3\" col=\"1\" text=\"expr:application.gds_account_detail.getColumn(application.gds_account_detail.rowposition, &quot;ACCOUNT_NAME&quot;)\" textAlign=\"center\"/><Cell row=\"4\" text=\"1월  : \" textAlign=\"center\"/><Cell row=\"4\" col=\"1\" text=\"bind:M1BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"5\" text=\"2월  : \" textAlign=\"center\"/><Cell row=\"5\" col=\"1\" text=\"bind:M2BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"6\" text=\"3월  : \" textAlign=\"center\"/><Cell row=\"6\" col=\"1\" text=\"bind:M3BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"7\" text=\"4월  : \" textAlign=\"center\"/><Cell row=\"7\" col=\"1\" text=\"bind:M4BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"8\" text=\"5월  : \" textAlign=\"center\"/><Cell row=\"8\" col=\"1\" text=\"bind:M5BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"9\" text=\"6월  : \" textAlign=\"center\"/><Cell row=\"9\" col=\"1\" text=\"bind:M6BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"10\" text=\"7월  : \" textAlign=\"center\"/><Cell row=\"10\" col=\"1\" text=\"bind:M7BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"11\" text=\"8월  : \" textAlign=\"center\"/><Cell row=\"11\" col=\"1\" text=\"bind:M8BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"12\" text=\"9월  : \" textAlign=\"center\"/><Cell row=\"12\" col=\"1\" text=\"bind:M9BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"13\" text=\"10월  : \" textAlign=\"center\"/><Cell row=\"13\" col=\"1\" text=\"bind:M10BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"14\" text=\"11월 : \" textAlign=\"center\"/><Cell row=\"14\" col=\"1\" text=\"bind:M11BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"15\" text=\"12월 : \" textAlign=\"center\"/><Cell row=\"15\" col=\"1\" text=\"bind:M12BUDGET\" textAlign=\"center\" edittype=\"mask\" displaytype=\"number\"/><Cell row=\"16\" text=\"예산 총계 : \" textAlign=\"center\"/><Cell row=\"16\" col=\"1\" text=\"expr:parseInt(M1BUDGET)+parseInt(M2BUDGET)+parseInt(M3BUDGET)+parseInt(M4BUDGET)+parseInt(M5BUDGET)+parseInt(M6BUDGET)+parseInt(M7BUDGET)+parseInt(M8BUDGET)+parseInt(M9BUDGET)+parseInt(M10BUDGET)+parseInt(M11BUDGET)+parseInt(M12BUDGET)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","43","89","367","75",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("2.편성 후 3.조정된 금액은 실행예산이 되고 \r\n이후 집행실적 금액에 따라 대비, 실적, 초과가 계산되지만 \r\nDB 한계상 편성과 조정금액으로만 이후 데이터를 계산하기로 함");
            obj.set_positionstep("1");
            obj.set_font("normal 10pt/normal \"Arial\",\"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","900","310","93","34",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("조정 승인");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            obj.set_positionstep("1");
            obj.set_background("#5170ad");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","58","189","165","49",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("예산 코드    예산 타입");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","149","249","70","250",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("신청\r\n\r\n편성\r\n\r\n조정\r\n\r\n대비\r\n\r\n실적\r\n\r\n초과");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00","149","340","134","34",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("    조정");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("palegoldenrod");
            obj.set_color("sienna");
            obj.set_textAlign("left");
            obj.set_borderRadius("5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","228","329","65","56",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("조회");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","63","248","70","250",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("    1     \r\n\r\n    2     \r\n\r\n    3     \r\n\r\n    4     \r\n\r\n    5     \r\n\r\n    6     ");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","89","217","165","49",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("예산 코드    예산 타입");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","180","277","70","250",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("신청\r\n\r\n편성\r\n\r\n조정\r\n\r\n대비\r\n\r\n실적\r\n\r\n초과");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00","180","368","134","34",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("    조정");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("palegoldenrod");
            obj.set_color("sienna");
            obj.set_textAlign("left");
            obj.set_borderRadius("5px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","259","357","65","56",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("조회");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00","94","276","70","250",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("    1     \r\n\r\n    2     \r\n\r\n    3     \r\n\r\n    4     \r\n\r\n    5     \r\n\r\n    6     ");
            obj.set_font("normal 12pt/normal \"함초롬돋움\"");
            obj.set_background("oldlace");
            obj.set_color("sienna");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1090,610,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Static03","text","ds_budgetCode","BUDGET_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Static03_00","text","gds_loginAuthority","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("budgetFormulationform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("budgetFormulationform.xfdl", function() {
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();

        var budgetingCode = "1"
        var period;
        var budgetCode;
        this.budgetinsertform_onload = function(obj,e)
        {
        // 		trace("@@@@gfn_loginAuthority@@@@");
        // 		var id = "findLoginAuthorityList";
        // 		var url = "svcOperate::loginAuthority";
        // 		var resData = "";
        // 		var reqData = "gds_loginAuthority=gds_loginAuthority";
        // 		var args = "empCode='"+empCode+"'";
        // 		var callback = "callback";

        /*		application.transaction(id, url, resData, reqData, args, callback, false);*/

        		var id = "deptInfo";
        		var url = "svcOperate::deptlist";
        		var resData = "";
        		var reqData = "gds_department=gds_department";
        		var args = "";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);

        		application.gds_department.filter('');

        //로그인 사용자 권한에 따라 예산 편성 가능 여부
        this.Static03.set_text(nexacro.getApplication().gv_empName);
        var authorityLevel = nexacro.getApplication().gv_authorityCode;

        //권한레벨 1 외 로그인(TA/1111)
        if(authorityLevel > 1) {
        this.Static03_00.set_text("권한 없음");
        this.Static03_00.set_background("#ff3333");
        this.Static03_00.set_color("#ffffff");
        }
        else {
        //권한레벨 1 로그인(admin/admin)
        this.Static03_00.set_text("Y");
        }

        };

        // 버튼팝업 ----------------------------
        this.ed_workplace_oneditclick = function(obj,e)
        {
        	this.gfnOpen("workplacepopup", "popup::workplacepopupform.xfdl", "callback", null)

        };
        this.ed_deptCode_oneditclick = function(obj,e)
        {
        	this.gfnOpen("deptpopup", "popup::deptpopupform.xfdl", "callback", null)

        };

        this.ed_period_oneditclick = function(obj,e)
        {
        	this.gfnOpen("periodpopup", "popup::periodpopupform.xfdl", "callback", null)
        };

        this.callback = function(trid, ErrorCode, ErrorMsg){

        if(trid == "workplacepopup"){
        	this.ed_workplace.set_value(application.gds_department.getColumn(0,"WORKPLACE_NAME"));
        	gb_workplaceCode = application.gds_department.getColumn(0,"WORKPLACE_CODE");

        }
        if(trid == "deptpopup"){
        	gb_deptName = this.ed_deptCode.set_value(application.gds_department.getColumn(0,"DEPT_NAME"));
        	gb_deptCode = application.gds_department.getColumn(0,"DEPT_CODE");

        }
        if(trid == "periodpopup"){
        	this.ed_period.set_value(application.gds_period.getColumn(0,"FISCAL_YEAR"))

        }
        };
        // 버튼팝업 ----------------------------




        this.Grid00_oncellclick = function(obj,e)
        {
        var parentAccountInnerCode = application.gds_account.getColumn(e.row,"ACCOUNT_INNER_CODE");
        			trace("dfdf" + parentAccountInnerCode);
         		var id = "detailaccountlist";
         		var url = "svcOperate::detailaccountlist";
         		var resData = "";
         		var reqData = "gds_account_detail=gds_account_detail";
        		var args = "parentAccountInnerCode='"+parentAccountInnerCode+"'";
         		var callback = "callback";
         		this.transaction(id, url, resData, reqData, args, callback);

        };

        this.Grid00_02_oncellclick = function(obj,e)
        {
        	accountInnerCode = application.gds_account_detail.getColumn(e.row,"ACCOUNT_INNER_CODE");
        };


        this.Button01_onclick = function(obj,e)
        {
        		this.ds_budget.clearData();
        		alert(budgetCode);
        		budgetingCode = "2";
        		var id = "formationbudgetlist";
         		var url = "svcBudget::formationbudgetlist";
         		var resData = "";
         		var reqData = "ds_formation=ds_budget";
        		var args = "budgetCode='"+budgetCode+"' budgetingCode='"+budgetingCode+"'";
         		var callback = "callback";
         		this.transaction(id, url, resData, reqData, args, callback);


        		budgetingCode = "1";
        		alert("예산편성이 완료되었습니다")
        };


        this.CheckBox00_onchanged = function(obj,e)
        {

        		var checked = this.CheckBox00.isChecked();
        		trace(checked);
        		if(checked){
        			var deptCode = gb_deptCode;
        			var workplaceCode = gb_workplaceCode;
        			var accountPeriodNo = application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");

        			var budgetingCode="1";

        			var id = "budgetListForComp";
        			var url = "svcBudget::budgetListForComp";
        			var resData = "";
        			var reqData = "ds_budgetListForComp=ds_budgetListForComp";
        			var args = "deptCode='"+deptCode+"' workplaceCode='"+workplaceCode+"' accountPeriodNo='"+accountPeriodNo+"' accountInnerCode='"+accountInnerCode+"'  budgetingCode='"+budgetingCode+"'";
        			var callback = "callback";
        			this.transaction(id, url, resData, reqData, args, callback);

        			trace(this.reqData);
        			trace("----"+ application.gds_department.getColumn(0,"WORKPLACE_NAME"))

        				if(this.reqData === undefined){
        				trace("+++++++++++++")
        					this.Static05.set_text("조회된 값이 없다면 표시되지 않습니다");
        				}
        		}
        		else{
        			trace("Dfdfdf");
        			this.ds_budgetListForComp.clearData();
        			this.Static05.set_text("");
        		}
        //
        		trace(deptCode);
        		trace(workplaceCode);
        		trace(accountPeriodNo);
        		trace(accountInnerCode);


        };

        this.searchButton_onclick = function(obj,e)
        {
        	var id = "budgetlist";
         		var url = "svcOperate::findParentAccountList";
         		var resData = "";
         		var reqData = "gds_account=gds_account";
        		var args = "";
         		var callback = "callback";
         		this.transaction(id, url, resData, reqData, args, callback);
        };



        this.Button00_onclick = function(obj,e)
        {
        			var deptCode = gb_deptCode;
        			var workplaceCode = gb_workplaceCode;
        			var accountPeriodNo = application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");
        			var budgetingCode="2";

        			var id = "compBudget";
        			var url = "svcBudget::compBudget";
        			var reqData = "ds_budgetListForComp=ds_budgetListForComp";
        			var resData = "";
        			var args = "deptCode='"+deptCode+"' workplaceCode='"+workplaceCode+"' accountPeriodNo='"+accountPeriodNo+"' accountInnerCode='"+accountInnerCode+"'  budgetingCode='"+budgetingCode+"'";
        			var callback = "callback";
        			this.transaction(id, url, reqData, resData, args, callback);
        };


        this.CheckBox00_00_onchanged= function(obj,e)
        {
        	var checked2 = this.CheckBox00_00.isChecked();
        	trace(checked2);
        	if(checked2){
        		var deptCode = gb_deptCode;
        		var workplaceCode = gb_workplaceCode;
        		var accountPeriodNo = application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");
        		var budgetingCode="2";

        		var id = "ds_budgetListForRecon";
        		var url = "svcBudget::budgetListForRecon";
        		var resData = "";
        		var reqData = "ds_budgetListForRecon=ds_budgetListForRecon";
        		var args = "deptCode='"+deptCode+"' workplaceCode='"+workplaceCode+"' accountPeriodNo='"+accountPeriodNo+"' accountInnerCode='"+accountInnerCode+"'  budgetingCode='"+budgetingCode+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);

        		trace(this.reqData);

        			if(this.reqData === undefined){
        			trace("+++++++++++++")
        				this.Static05.set_text("조회된 값이 없다면 표시되지 않습니다");
        			}
        		}
        		else{
        			trace("Dfdfdf");
        			this.ds_budgetListForRecon.clearData();
        			this.Static05.set_text("");
        		}

        		trace(deptCode);
        		trace(workplaceCode);
        		trace(accountPeriodNo);
        		trace(accountInnerCode);

        		trace("dd" + application.gds_account_detail.rowposition);
        };

        this.Button00_00_onclick = function(obj,e)
        {
        		    var deptCode = gb_deptCode;
        			var workplaceCode = gb_workplaceCode;
        			var accountPeriodNo = application.gds_period.getColumn(0,"ACCOUNT_PERIOD_NO");
        			var budgetingCode="3";

        			var id = "compBudget";
        			var url = "svcBudget::reconBudget";
        			var reqData = "ds_budgetListForRecon=ds_budgetListForRecon";
        			var resData = "";
        			var args = "deptCode='"+deptCode+"' workplaceCode='"+workplaceCode+"' accountPeriodNo='"+accountPeriodNo+"' accountInnerCode='"+accountInnerCode+"'  budgetingCode='"+budgetingCode+"'";
        			var callback = "callback";
        			this.transaction(id, url, reqData, resData, args, callback);
        };

        this.CheckBox00_canchange = function(obj,e)
        {

        };

        this.CheckBox00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.budgetinsertform_onload,this);
            this.addEventHandler("onclick",this.budgetinsertform_onclick,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static01_02_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static01_01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_03.addEventHandler("onclick",this.Static01_onclick,this);
            this.ed_workplace.addEventHandler("oneditclick",this.ed_workplace_oneditclick,this);
            this.ed_workplace.addEventHandler("onchanged",this.ed_workplace_onchanged,this);
            this.ed_deptCode.addEventHandler("oneditclick",this.ed_deptCode_oneditclick,this);
            this.ed_deptCode.addEventHandler("onchanged",this.ed_deptCode_onchanged,this);
            this.ed_period.addEventHandler("oneditclick",this.ed_period_oneditclick,this);
            this.ed_period.addEventHandler("onchanged",this.ed_period_onchanged,this);
            this.Static01_00_00_00.addEventHandler("onclick",this.Static01_00_00_00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Static01_03_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01_00_00_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01_01_00_00_00.addEventHandler("onclick",this.Static01_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00_02.addEventHandler("oncellclick",this.Grid00_02_oncellclick,this);
            this.Static01_00_00_01.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.Static01_00_00_00_00.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.searchButton.addEventHandler("onclick",this.searchButton_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static05_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static06_onclick,this);
            this.Static06_00.addEventHandler("onclick",this.Static06_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Static02_01.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00_00_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00_00_01_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.CheckBox00_00.addEventHandler("canchange",this.CheckBox00_00_canchange,this);
            this.CheckBox00_00.addEventHandler("onchanged",this.CheckBox00_00_onchanged,this);
            this.CheckBox00_00.addEventHandler("onclick",this.CheckBox00_00_onclick,this);
            this.Static02_00_01.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_01_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00_00_00_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02_00_00_01_00_00.addEventHandler("onclick",this.Static02_onclick,this);
            this.CheckBox00.addEventHandler("canchange",this.CheckBox00_canchange,this);
            this.CheckBox00.addEventHandler("onchanged",this.CheckBox00_onchanged,this);
            this.CheckBox00.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.Static02_00_01_00.addEventHandler("onclick",this.Static02_onclick,this);
        };
        this.loadIncludeScript("budgetFormulationform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
