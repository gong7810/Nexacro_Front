(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workplacemanagementform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_workplace", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"CORPORATION_LICENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CEO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CONDITIONS\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_ITEMS\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_BASIC_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_DETAIL_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_TEL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_FAX_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","61","58","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업장 관리");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","148","1079","507",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_workplace");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"default\"/><Cell col=\"1\" text=\"사업장코드\"/><Cell col=\"2\" text=\"회사코드\"/><Cell col=\"3\" text=\"사업장명\"/><Cell col=\"4\" text=\"사업자등록번호\"/><Cell col=\"5\" text=\"법인등록번호\"/><Cell col=\"6\" text=\"대표자명\"/><Cell col=\"7\" text=\"업태\"/><Cell col=\"8\" text=\"종목\"/><Cell col=\"9\" text=\"주소\"/><Cell col=\"10\" text=\"전화번호\"/><Cell col=\"11\" text=\"팩스번호\"/><Cell col=\"12\" text=\"승인요청\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECKED\"/><Cell col=\"1\" text=\"bind:WORKPLACE_CODE\" textAlign=\"center\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:COMPANY_CODE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:WORKPLACE_NAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:BUSINESS_LICENSE\" textAlign=\"center\" maskeditformat=\"###-##-#####\" maskedittype=\"string\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:CORPORATION_LICENCE\" textAlign=\"center\" maskeditformat=\"###-##-#####\" maskedittype=\"string\" displaytype=\"none\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:WORKPLACE_CEO_NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:BUSINESS_CONDITIONS\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BUSINESS_ITEMS\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:WORKPLACE_BASIC_ADDRESS\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:WORKPLACE_TEL_NUMBER\" textAlign=\"center\" maskeditformat=\"###-####-####\" maskedittype=\"string\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"11\" text=\"bind:WORKPLACE_FAX_NUMBER\" textAlign=\"center\" maskeditformat=\"###-####-####\" maskedittype=\"string\" displaytype=\"mask\" maskeditautoselect=\"true\"/><Cell col=\"12\" text=\"bind:APPROVAL_STATUS\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Bt_reload","562","111","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("새로고침");
            obj.set_borderRadius("5px");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Button("Bt_add","822","111","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사업장 추가");
            obj.set_borderRadius("5px");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Button("Bt_delete","952","111","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사업장 삭제");
            obj.set_borderRadius("5px");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Button("Bt_regist","692","111","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사업장 등록");
            obj.set_borderRadius("5px");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("workplacemanagementform.xfdl", function() {

        application = nexacro.getApplication();
        this.workplacemanagementform_onload = function(obj,e)
        {
        	var id = "allworkplacelist";
        	var url = "svcOperate::allworkplacelist";
        	var resData = "";
        	var reqData = "ds_workplace=ds_workplace";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);
        	this.ds_workplace.filter('');
        };

        this.Button00_onclick = function(obj,e)
        {

        	this.reload();
        };


        //사업장 추가
        this.Bt_add_onclick = function(obj,e)
        {
        	this.ds_workplace.clearData();
        	var companyCode="COM-01";
        	trace("COMPANY_CODE=='"+companyCode+"'");
        	var nRow = this.ds_workplace.addRow();
         	this.ds_workplace.setColumn(nRow,"WORKPLACE_CODE","BRC-000");
         	this.ds_workplace.setColumn(nRow,"COMPANY_CODE","COM-01");
        	this.ds_workplace.setColumn(nRow,"APPROVAL_STATUS","미승인");
         	this.ds_workplace.filter("COMPANY_CODE=='"+companyCode+"'")

        };

        //사업장 등록
        this.Bt_regist_onclick = function(obj,e)
        {
        	var checked = this.ds_workplace.getColumn(e.row,"CHECKED");
        	trace("체크유무 :" +checked);
        	if(checked == 1){

        		var id = "registerworkplace";
        		var url = "svcOperate::registerworkplace";
        		var resData = "ds_workplace=ds_workplace";
        		var reqData = "";
        		var args = "";
        		var callback = "callback";

        		this.transaction(id, url, resData, reqData, args, callback);
        		this.alert("등록이 완료되었습니다.");
        		//this.reload();
        	}else{
        		this.alert("등록에 실패하였습니다.");
        		//this.reload();
        	}
        };

        //사업장 삭제
        this.Bt_delete_onclick = function(obj,e)
        {
        	var count = this.Grid00.rowcount;
        	for(var index = 0; index < count; index++){
        		var checked = this.ds_workplace.getColumn(index,"CHECKED") + "";
        		var workplaceCode =this.ds_workplace.getColumn(index,"WORKPLACE_CODE");
        		trace("    workplaceCode : "+workplaceCode);
        		trace("    체크유무 :" +checked);
        		if(checked=="1"){
        				if(this.confirm(workplaceCode+"  사업장을 삭제 하시겠습니까?")==true){
        					this.ds_workplace.deleteRow(index);
        					var id = "removeWorkplace";
        					var url = "svcOperate::removeWorkplace";
        					var resData = "";
        					var reqData = "";
        					var args = "workplaceCode='"+workplaceCode+"'";
        					var callback = "callback";
        					this.transaction(id, url, resData, reqData, args, callback);
        					this.alert("정상적으로 사업장이 삭제되었습니다.")
        					this.reload();
        					break;
        				} else {
        					alert("삭제를 취소했습니다.");
        					return;
        				}
        			}else{
        				this.alert("사업장을 삭제할 수 없습니다.")
        				this.reload();
        				break;
        			}

        		}
        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	var num = null;
        	var size = this.ds_workplace.getRowCount();
        	var headCheck = obj.getCellProperty('Head',0,'text');
        	trace("체크여부 :"+headCheck);
        	trace("이벤트인덱스 :"+e.col);
        	if(e.col==0){
        		if(headCheck=='0'||headCheck==null){
        			num = '1';

        		}else{
        			num = '0';
        		}
        		for(var i=0; i<size; i++){
        			this.ds_workplace.setColumn(i,"CHECKED",num);
        		}

        		obj.setCellProperty('Head',0,'text',num);
        	}


        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	var checked = this.ds_workplace.getColumn(e.row,"CHECKED"); // 체크되면 1 체크안되면 0
        	var value = this.ds_workplace.getColumn(e.row,"WORKPLACE_CODE");
        	var value1 = this.ds_workplace.getColumn(this.ds_workplace.rowposition,"WORKPLACE_CODE");
        	var value2 = this.ds_workplace.getColumn(e.col,"WORKPLACE_CODE");
        	trace("체크여부 :"+ checked);
        	trace("          e.row     :"+ value);
        	trace("          rowposition :"+ value1);
        	trace("          e.col     :"+ value2);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {

        	var status = this.ds_workplace.getColumn(e.row,"CHECKED") ;
        	trace("체크여부 :"+checked);
        	if(checked == "1")
        	obj.setCellProperty("Body", 1, "edittype", "text");
        	obj.setCellProperty("Body", 2, "edittype", "none");
        	obj.setCellProperty("Body", 3, "edittype", "text");
        	obj.setCellProperty("Body", 4, "edittype", "mask");
        	obj.setCellProperty("Body", 5, "edittype", "text");
        	obj.setCellProperty("Body", 6, "edittype", "text");
        	obj.setCellProperty("Body", 7, "edittype", "text");
        	obj.setCellProperty("Body", 8, "edittype", "text");
        	obj.setCellProperty("Body", 9, "edittype", "text");
        	obj.setCellProperty("Body", 10, "edittype", "mask");
        	obj.setCellProperty("Body", 11, "edittype", "mask");
        	obj.setCellProperty("Body", 12, "edittype", "none");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.workplacemanagementform_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Bt_reload.addEventHandler("onclick",this.Button00_onclick,this);
            this.Bt_add.addEventHandler("onclick",this.Bt_add_onclick,this);
            this.Bt_delete.addEventHandler("onclick",this.Bt_delete_onclick,this);
            this.Bt_regist.addEventHandler("onclick",this.Bt_regist_onclick,this);
        };
        this.loadIncludeScript("workplacemanagementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
