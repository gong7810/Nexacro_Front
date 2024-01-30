(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("monthIncomeStatement");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tmpmonthIncomeStatement", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"20\"/><Column id=\"MONTH\" type=\"STRING\" size=\"20\"/><Column id=\"SALES_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"SALES_COST_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"GROSS_MARGIN\" type=\"INT\" size=\"256\"/><Column id=\"SALES_MANAGE_COST_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"OPERATING_PROFIT\" type=\"INT\" size=\"256\"/><Column id=\"NON_OPERATING_PROFIT_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"NON_OPERATING_COST_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"ORDINARY_PROFIT\" type=\"INT\" size=\"256\"/><Column id=\"CORPORATE_TAX_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"NET_INCOME\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"20\"/><Column id=\"MONTH\" type=\"STRING\" size=\"20\"/><Column id=\"SALES_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"SALES_COST_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"GROSS_MARGIN\" type=\"INT\" size=\"256\"/><Column id=\"SALES_MANAGE_COST_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"OPERATING_PROFIT\" type=\"INT\" size=\"256\"/><Column id=\"NON_OPERATING_PROFIT_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"NON_OPERATING_COST_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"ORDINARY_PROFIT\" type=\"INT\" size=\"256\"/><Column id=\"CORPORATE_TAX_SUMMARY\" type=\"INT\" size=\"256\"/><Column id=\"NET_INCOME\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">1</Col><Col id=\"SALES_SUMMARY\">530000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">53000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">78452000</Col><Col id=\"OPERATING_PROFIT\">451548000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">400000</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">451948000</Col><Col id=\"NET_INCOME\">451948000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">2</Col><Col id=\"SALES_SUMMARY\">-36120000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">-36120000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">106560000</Col><Col id=\"OPERATING_PROFIT\">-142680000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">-142680000</Col><Col id=\"NET_INCOME\">-142680000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">3</Col><Col id=\"SALES_SUMMARY\">780000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">780000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">399508000</Col><Col id=\"OPERATING_PROFIT\">380492000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">380492000</Col><Col id=\"NET_INCOME\">380492000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">4</Col><Col id=\"SALES_SUMMARY\">320000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">32000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">440080000</Col><Col id=\"OPERATING_PROFIT\">-112008000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">-120080000</Col><Col id=\"NET_INCOME\">-120080000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">5</Col><Col id=\"SALES_SUMMARY\">972000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">9720000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">22460000</Col><Col id=\"OPERATING_PROFIT\">74740000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">747400000</Col><Col id=\"NET_INCOME\">747400000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">6</Col><Col id=\"SALES_SUMMARY\">72000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">720000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">450960000</Col><Col id=\"OPERATING_PROFIT\">451548000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">269040000</Col><Col id=\"NET_INCOME\">269040000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">7</Col><Col id=\"SALES_SUMMARY\">68000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">680000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">43600000</Col><Col id=\"OPERATING_PROFIT\">-142680000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">24400000</Col><Col id=\"NET_INCOME\">244000000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">8</Col><Col id=\"SALES_SUMMARY\">68000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">680000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">439664400</Col><Col id=\"OPERATING_PROFIT\">24035220</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">240335600</Col><Col id=\"NET_INCOME\">240335600</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">9</Col><Col id=\"SALES_SUMMARY\">116000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">1160000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">42112000</Col><Col id=\"OPERATING_PROFIT\">73888000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">738880000</Col><Col id=\"NET_INCOME\">738880000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">10</Col><Col id=\"SALES_SUMMARY\">73200000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">732000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">179580000</Col><Col id=\"OPERATING_PROFIT\">55242000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">552420000</Col><Col id=\"NET_INCOME\">552420000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">11</Col><Col id=\"SALES_SUMMARY\">42280000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">422800000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">188808000</Col><Col id=\"OPERATING_PROFIT\">4039920000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">4039920000</Col><Col id=\"NET_INCOME\">4039920000</Col></Row><Row><Col id=\"YEAR\">2023</Col><Col id=\"MONTH\">12</Col><Col id=\"SALES_SUMMARY\">680000000</Col><Col id=\"SALES_COST_SUMMARY\">0</Col><Col id=\"GROSS_MARGIN\">680000000</Col><Col id=\"SALES_MANAGE_COST_SUMMARY\">413440000</Col><Col id=\"OPERATING_PROFIT\">26656000</Col><Col id=\"NON_OPERATING_PROFIT_SUMMARY\">0</Col><Col id=\"NON_OPERATING_COST_SUMMARY\">0</Col><Col id=\"CORPORATE_TAX_SUMMARY\">0</Col><Col id=\"ORDINARY_PROFIT\">266560000</Col><Col id=\"NET_INCOME\">266560000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calendar_date","817","96","175","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1000","96","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_background("#5170ad");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","148","1080","507",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"31\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"연도\"/><Cell col=\"1\" text=\"월\"/><Cell col=\"2\" text=\"매출액\"/><Cell col=\"3\" text=\"매출원가\"/><Cell col=\"4\" text=\"매출총액\"/><Cell col=\"5\" text=\"판관비\"/><Cell col=\"6\" text=\"영업이익\"/><Cell col=\"7\" text=\"영업외수익\"/><Cell col=\"8\" text=\"영업외비용\"/><Cell col=\"9\" text=\"법인세차감전이익\"/><Cell col=\"10\" text=\"법인세\"/><Cell col=\"11\" text=\"당기순이익\"/></Band><Band id=\"body\"><Cell text=\"bind:YEAR\"/><Cell col=\"1\" text=\"bind:MONTH\"/><Cell col=\"2\" text=\"bind:SALES_SUMMARY\"/><Cell col=\"3\" text=\"bind:SALES_COST_SUMMARY\"/><Cell col=\"4\" text=\"bind:GROSS_MARGIN\"/><Cell col=\"5\" text=\"bind:SALES_MANAGE_COST_SUMMARY\"/><Cell col=\"6\" text=\"bind:OPERATING_PROFIT\"/><Cell col=\"7\" text=\"bind:NON_OPERATING_PROFIT_SUMMARY\"/><Cell col=\"8\" text=\"bind:NON_OPERATING_COST_SUMMARY\"/><Cell col=\"9\" text=\"bind:ORDINARY_PROFIT\"/><Cell col=\"10\" text=\"bind:CORPORATE_TAX_SUMMARY\"/><Cell col=\"11\" text=\"bind:NET_INCOME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","-1","-1","201","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("#5170ad");
            obj.set_borderRadius("0px");
            obj.set_font("normal 10pt/normal \"함초롬돋움\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","14","9","174","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("월별 손익계산서");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18pt/normal \"함초롬돋움\"");
            obj.set_border("3px none #000000");
            obj.set_background("transparent");
            obj.set_borderRadius("0px");
            obj.set_color("#fcfbfd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("monthIncomeStatementform.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("monthIncomeStatementform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("monthIncomeStatementform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();


        this.monthIncomeStatement_onload = function(obj,e){
        		trace("trace월별손익계산서");
        		//this.calendar_date.set_value( this.gfn_todayFirst().toString() );
        		this.calendar_date.set_value( this.gfn_todayFirst().toString() );
        		//var name = application.ds_tmpmonthIncomeStatement.getColumn(e.row,"ACCOUNT_NAME");
        };


        //조회 버튼 클릭
        this.Button00_onclick = function(obj,e){
        		var date = this.calendar_date.value;

        		//var endDate = this.calendar_end.value;

        		var year = date.toString().substring(0,4);
        		var month = date.toString().substring(4,6);
        		var day = date.toString().substring(6,8);
        		var selectedDate = year+"-"+month+"-"+day;

        // 		var eYear = endDate.toString().substring(0,4);
        // 		var eMonth = endDate.toString().substring(4,6);
        // 		var eDay = endDate.toString().substring(6,8);
        // 		var eDate = eYear+"-"+eMonth+"-"+eDay;

        		trace(year, month, day, selectedDate);
        		//trace(eYear, eMonth, eDay, eDate);

        		var id = "monthIncomeStatement";
        		var url = "svcStatement::monthIncomeStatement";
        		var resData = "";
        		var reqData = "ds_tmpmonthIncomeStatement=ds_tmpmonthIncomeStatement";
        		var args = "selectedDate='"+selectedDate+"'";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.monthIncomeStatement_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Static01_02.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("monthIncomeStatementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
