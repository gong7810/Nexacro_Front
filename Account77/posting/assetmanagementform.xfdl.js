(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("assetmanagementForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_assetitem", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"USEFUL_LIFE\" type=\"INT\" size=\"256\"/><Column id=\"MANAGEMENT_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCUMULATED_DEPRECIATION\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDUAL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDUAL_LIFE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_asset", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assetitemMask", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"USEFUL_LIFE\" type=\"INT\" size=\"256\"/><Column id=\"MANAGEMENT_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCUMULATED_DEPRECIATION\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDUAL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RESIDUAL_LIFE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_assetitemRegist", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACQUISITION_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"USEFUL_LIFE\" type=\"INT\" size=\"256\"/><Column id=\"MANAGEMENT_DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","46","146","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_asset");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자산분류코드\"/><Cell col=\"1\" text=\"자산분류\"/></Band><Band id=\"body\"><Cell text=\"bind:ASSET_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ASSET_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","46","360","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_assetitem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"관리번호\"/><Cell col=\"1\" text=\"자산관리명\"/></Band><Band id=\"body\"><Cell text=\"bind:ASSET_ITEM_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ASSET_ITEM_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","75","41","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자산관리대장");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","433","122","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("관리번호");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","433","196","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("계정과목코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","433","270","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취득일자");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","433","344","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("관리부서");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03","433","418","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("내용연수");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04","433","492","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("감가상각누계액");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_05","763","122","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("자산명");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","763","196","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("계정과목명");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","763","270","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("취득금액");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_04_00","763","492","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("잔존가치");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_03_00","756","419","137","29",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("잔여연수");
            this.addChild(obj.name, obj);

            obj = new Edit("et_usefulLife","426","443","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("et_accumulatedDepreciation","426","517","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("et_acquisitionAmount","756","291","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("et_residualValue","756","517","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("et_residualLife","755","443","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("et_managementDeptName","426","375","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_textAlign("center");
            obj.set_visible("true");
            obj.set_displaynulltext("부서를 조회해주세요");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("et_parentsName","755","223","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_textAlign("center");
            obj.set_visible("true");
            obj.set_readonly("false");
            obj.set_displaynulltext("계정과목을 조회해주세요");
            this.addChild(obj.name, obj);

            obj = new Edit("et_parentsCode","426","220","290","37",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_textAlign("center");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            obj.set_displaynulltext("계정과목을 선택해주세요");
            this.addChild(obj.name, obj);

            obj = new Edit("et_assetItemCode","426","148","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("et_assetItemName","756","148","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("et_acquisitionDate","426","291","288","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_textAlign("center");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Bt_delete","1000","81","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Bt_save","918","81","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Bt_regist","754","81","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("등록");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Bt_update","836","81","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("수정");
            obj.set_background("#87c4f1");
            obj.set_color("aliceblue");
            obj.set_borderRadius("5px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","1160","257","620","183",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","0","619","183",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_asset");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"290\"/><Column size=\"40\"/><Column size=\"290\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정과목코드\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"계정과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:ASSET_CODE\" textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:ASSET_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00_00","1160","510","290","183",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","20","289","137",null,null,null,null,null,null,this.PopupDiv00_00.form);
            obj.set_taborder("0");
            obj.set_binddataset("gds_department");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"관리부서\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.PopupDiv00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00_00.form
            obj = new Layout("default","",0,0,this.PopupDiv00_00.form,function(p){});
            this.PopupDiv00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","et_assetItemCode","value","ds_assetitemMask","ASSET_ITEM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","et_assetItemName","value","ds_assetitemMask","ASSET_ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","et_parentsCode","value","ds_assetitemMask","PARENTS_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","et_parentsName","value","ds_assetitemMask","PARENTS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","et_acquisitionDate","value","ds_assetitemMask","ACQUISITION_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","et_acquisitionAmount","value","ds_assetitemMask","ACQUISITION_AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","et_usefulLife","value","ds_assetitemMask","USEFUL_LIFE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","et_accumulatedDepreciation","value","ds_assetitemMask","ACCUMULATED_DEPRECIATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","et_residualValue","value","ds_assetitemMask","RESIDUAL_VALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","et_residualLife","value","ds_assetitemMask","RESIDUAL_LIFE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","et_managementDeptName","value","ds_assetitemMask","MANAGEMENT_DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("assetmanagementform.xfdl", function() {

        application = nexacro.getApplication();


        this.assetmanagementForm_onload = function(obj,e)
        {
        	var id = "assetList";
        	var url = "svcPosting::assetList";
        	var reqData = "";
        	var resData = "ds_asset=ds_asset";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);
        };



        //자산분류
        this.Grid00_oncellclick = function(obj,e)
        {
        	var assetCode = this.ds_asset.getColumn(e.row,"ASSET_CODE");

        	var id = "assetitemlist";
        	var url = "svcPosting::assetitemlist";
        	var reqData = "";
        	var resData = "ds_assetitem=ds_assetitem";
        	var args = "assetCode='"+assetCode+"'";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);



        };

        //assetitemlist 조회
        this.Grid00_00_oncellclick = function(obj,e)
        {

        	this.ds_assetitemMask.clearData();

        	var value = this.ds_assetitem.getColumn(e.row,"ASSET_ITEM_CODE");
        	this.ds_assetitemMask.filter("ASSET_ITEM_CODE=='"+value+"'");
        	this.ds_assetitemMask.copyData(this.ds_assetitem);


        	//결과창 비활성화
        	this.et_assetItemCode.set_enable(false);
        	this.et_assetItemName.set_enable(false);
        	this.et_acquisitionDate.set_enable(false);
        	this.et_usefulLife.set_enable(false);
        	this.et_acquisitionAmount.set_enable(false);
        	this.et_managementDeptName.set_enable(false);
        	this.et_parentsCode.set_enable(false);
        	this.et_parentsName.set_enable(false);


        	// null 날라오면 0으로 변환
        	var value = this.ds_assetitemMask.getColumn(0,"ACCUMULATED_DEPRECIATION");
        	if(value == 0 ||null){
        		this.et_accumulatedDepreciation.set_format("#,##0");
        	}


        };

        //JE 등록
        this.Bt_regist_onclick = function(obj,e)
        {

        	this.ds_assetitemMask.clearData();

        	this.ds_assetitemMask.addRow();

        	//입력창 활성화
        	this.et_assetItemCode.set_enable(true);
        	this.et_assetItemName.set_enable(true);
        	this.et_acquisitionDate.set_enable(true);
        	this.et_usefulLife.set_enable(true);
        	this.et_acquisitionAmount.set_enable(true);
        	this.et_managementDeptName.set_enable(true);
        	this.et_parentsCode.set_enable(true);
        	this.et_parentsName.set_enable(true);

        	//입력창 비우기
        	this.et_assetItemCode.set_value("");
        	this.et_assetItemName.set_value("");
        	this.et_acquisitionDate.set_value("");
        	this.et_usefulLife.set_value("");
        	this.et_acquisitionAmount.set_value("");
        	//this.et_managementDeptName.set_value("");
        	//this.et_parentsCode.set_value("");
        	//this.et_parentsName.set_value("");



        };




        //저장
        this.Bt_save_onclick = function(obj,e)
        {


            if(confirm("저장하시겠습니까?")){


        		this.ds_assetitemRegist.clearData();


        		var nRow = this.ds_assetitemRegist.addRow();

        		this.ds_assetitemRegist.setColumn(nRow,"ASSET_ITEM_CODE",this.et_assetItemCode.value);
        		this.ds_assetitemRegist.setColumn(nRow,"ASSET_ITEM_NAME",this.et_assetItemName.value);
                this.ds_assetitemRegist.setColumn(nRow,"ACQUISITION_DATE",this.et_acquisitionDate.value);
                this.ds_assetitemRegist.setColumn(nRow,"ACQUISITION_AMOUNT",nexacro.toNumber(this.et_acquisitionAmount.value));
        		this.ds_assetitemRegist.setColumn(nRow,"USEFUL_LIFE",nexacro.toNumber(this.et_usefulLife.value));
                this.ds_assetitemRegist.setColumn(nRow,"MANAGEMENT_DEPT_NAME",this.et_managementDeptName.value);
        		this.ds_assetitemRegist.setColumn(nRow,"PARENTS_CODE",this.et_parentsCode.value);
        		this.ds_assetitemRegist.setColumn(nRow,"PARENTS_NAME",this.et_parentsName.value);



                var id = "assetitemlistRegist";
                var url = "svcPosting::assetitemlistRegist";
                var reqData = "ds_assetitemRegist=ds_assetitemRegist";
                var resData = "";
                var args = "";
                var callback = "callback";

                this.transaction(id, url, reqData, resData, args, callback);

        	}

        	this.reload();

        };



        //수정
        this.Bt_update_onclick = function(obj,e){


        	//입력(수정)창 활성화
        	this.et_assetItemCode.set_enable(true);
        	this.et_assetItemName.set_enable(true);
        	this.et_acquisitionDate.set_enable(true);
        	this.et_usefulLife.set_enable(true);
        	this.et_acquisitionAmount.set_enable(true);
        	this.et_managementDeptName.set_enable(true);
        	this.et_parentsCode.set_enable(true);
        	this.et_parentsName.set_enable(true);

        }



        //삭제
        this.Bt_delete_onclick = function(obj,e)
        {


            if(confirm("삭제하시겠습니까?")){


        		var assetItemCode=this.ds_assetitemMask.getColumn(e.row,"ASSET_ITEM_CODE");

        		trace(assetItemCode);


                var id = "assetitemlistRemove";
        		var url = "svcPosting::assetremoval";
        		var reqData = "";
        		var resData = "";
        		var args = "code='"+assetItemCode+"'";
        		var callback = "callback";

        		this.transaction(id, url, reqData, resData, args, callback);

        		this.ds_assetitemMask.deleteRow(e.row);

        	}

        	this.reload();


        	//this.ds_assetitemMask.
        }



        //계정과목코드 & 계정과목명 하단 popup
        this.et_parentsCode_oneditclick=function(obj,e){
        	var nX=0;
        	var nY=obj.height;
        	this.PopupDiv00.trackPopupByComponent(this.et_parentsCode,nX,nY);


        };

        //계정과목코드 & 계정과목명 더블클릭
        this.PopupDiv00.form.Grid00_oncelldblclick = function(obj,e){


        	var parentCode=this.ds_asset.getColumn(e.row,"ASSET_CODE");
            var parentName=this.ds_asset.getColumn(e.row,"ASSET_NAME");

        	this.PopupDiv00.closePopup();

        	this.et_parentsCode.set_value(parentCode);
        	this.et_parentsName.set_value(parentName);


        };


        //부서 하단 popup
        this.et_managementDeptName_oneditclick=function(obj,e){
            var nX=0;
            var nY=obj.height;
            this.PopupDiv00_00.trackPopupByComponent(this.et_managementDeptName,nX,nY);


        	var id = "deptList";
        	var url = "svcPosting::deptlist";
        	var reqData = "";
        	var resData = "gds_department=ds_department";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);

        }


        //부서 계정과목코드 & 계정과목명
        this.PopupDiv00_00.form.Grid00_oncelldblclick=function(obj,e){


        	var deptName=application.gds_department.getColumn(e.row,"DEPT_NAME");

        	this.PopupDiv00_00.closePopup();

        	this.et_managementDeptName.set_value(deptName);


        };









        this.callback = function(trid , ErrorCode, ErrorMsg){
        	if(trid == "assetList"){
        		if(ErrorCode<0){
        			alert(trid+"  트랜잭션실패 , 사유"+ErrorMsg)
        		}
        	}
        	else if(trid == "assetitemlist"){
        		if(ErrorCode<0){
        			alert(trid+"  트랜잭션실패 , 사유"+ErrorMsg)
        		}
        	}
        	else if(trid == "assetitemlistRegist"){
        		if(ErrorCode<0){
        			alert(trid+"  트랜잭션실패 , 사유"+ErrorMsg)
        		}
        		else if(ErrorCode>=0){
        			alert("등록되었습니다");
        		}
        		else if(trid == "assetitemlistRemove"){
        			if(ErrorCode<0){
        				alert(trid+"  트랜잭션실패 , 사유"+ErrorMsg)
        			}
        			else if(ErrorCode>=0){
        				alert("삭제되었습니다");
        			}

        		}
        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.assetmanagementForm_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.Grid00_00_oncellclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.et_usefulLife.addEventHandler("onchanged",this.et_usefulLife_onchanged,this);
            this.et_managementDeptName.addEventHandler("oneditclick",this.et_managementDeptName_oneditclick,this);
            this.et_managementDeptName.addEventHandler("onchanged",this.et_managementDeptName_onchanged,this);
            this.et_parentsName.addEventHandler("oneditclick",this.et_parentsCode_oneditclick,this);
            this.et_parentsCode.addEventHandler("oneditclick",this.et_parentsCode_oneditclick,this);
            this.et_assetItemCode.addEventHandler("onchanged",this.et_assetItemCode_onchanged,this);
            this.Bt_delete.addEventHandler("onclick",this.Bt_delete_onclick,this);
            this.Bt_save.addEventHandler("onclick",this.Bt_save_onclick,this);
            this.Bt_regist.addEventHandler("onclick",this.Bt_regist_onclick,this);
            this.Bt_update.addEventHandler("onclick",this.Bt_update_onclick,this);
            this.PopupDiv00.form.Grid00.addEventHandler("oncelldblclick",this.PopupDiv00.form.Grid00_oncelldblclick,this);
            this.PopupDiv00_00.form.Grid00.addEventHandler("oncelldblclick",this.PopupDiv00_00.form.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("assetmanagementform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
