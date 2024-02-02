(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnFirst","282","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_firstBlue1");
            obj.set_text("<<");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev","317","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_preBlue1");
            obj.set_text("<");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","352","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn2","387","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn3","422","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn4","457","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn5","492","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn6","527","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn7","562","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn8","597","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn9","632","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","667","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","702","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_nextBlue1");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Button("btnLast","737","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_lastBlue1");
            obj.set_text(">>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","144","1000","364",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("gds_bbs");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"BBS_ID\"/><Cell col=\"1\" text=\"BBS_TITLE\"/><Cell col=\"2\" text=\"BBS_CONTENTS\"/><Cell col=\"3\" text=\"BBS_DATE\"/><Cell col=\"4\" text=\"EMP_NAME\"/><Cell col=\"5\" text=\"CHECKED\"/></Band><Band id=\"body\"><Cell text=\"bind:BBS_ID\"/><Cell col=\"1\" text=\"bind:BBS_TITLE\"/><Cell col=\"2\" text=\"bind:BBS_CONTENTS\"/><Cell col=\"3\" text=\"bind:BBS_DATE\"/><Cell col=\"4\" text=\"bind:EMP_NAME\"/><Cell col=\"5\" text=\"bind:CHECKED\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","263","21","554","96",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("사내 게시판");
            obj.set_textAlign("center");
            obj.set_font("48px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("bt_add","910","113","60","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("bt_delete","980","113","60","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
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
        this.addIncludeScript("boardform.xfdl","scripts::commonOpen.xjs");
        this.addIncludeScript("boardform.xfdl","scripts::commonDate.xjs");
        this.registerScript("boardform.xfdl", function() {
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;
        var page=0;
        this.boardform_onload = function(obj,e)
        {
        	today=this.gfn_today();

        	var id = "selectBoard";
        	var url = "svcOperate::selectBoard";
        	var resData = "";
        	var reqData = "gds_bbs=gds_bbs";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);

        };
        //게시판 추가
        this.bt_add_onclick = function(obj,e)
        {

        // 	this.ds_bbs.addRow();
        // 	this.ds_bbs.setColumn(0,"BBS_ID","NEW");
        // 	this.ds_bbs.setColumn(0,"EMP_NAME",application.gv_empName);
        // 	this.ds_bbs.setColumn(0,"BBS_DATE",today);
        	this.gfnOpen("popup", "popup::boardmodafform.xfdl", "callbackFunc", {status:"add",today:today})


        };




        this.Grid00_oncellclick = function(obj,e)
        {
        	var checked = this.gds_bbs.getColumn(e.row,"CHECKED")
        	if(e.col == 4){
        	if(checked == null || checked == 0){
        		this.gds_bbs.setColumn(e.row,"CHECKED",1);
        	}

        	else{
        		this.gds_bbs.setColumn(e.row,"CHECKED",0);
        	}

        	}
        };

         this.Grid00_onheadclick = function(obj,e)
         {
         	var num = null;
         	var size = this.gds_bbs.getRowCount();
         	var headCheck = obj.getCellProperty('Head',4,'text');
        	this.alert("체크여부 :"+headCheck);

         	if(e.col==4){
        		if(headCheck=='0'||headCheck==null){
                 num = '1';

        		}else{
                 num = '0';
              }
         	        for(var i=0; i<size; i++){
                this.gds_bbs.setColumn(i,"CHECKED",num);
               }

        		obj.setCellProperty('Head',4,'text',num);
        	}


        };



        //게시판 삭제

        this.bt_delete_onclick = function(obj,e)
        {

        //
        // 	    this.confirm("게시글을 삭제 하시겠습니까?");
        // 		 var size = application.gds_bbs.getRowCount();
        //    var row = null;
        //    for(var i=0; i<size; i++){
        //       row = application.gds_bbs.findRow("CHECKED","1");
        //       if(row!=-1){
        //          application.gds_bbs.deleteRow(row);
        //       }
        //    }
        //
        //    var id = "deleteBoard";
        //             var url = "svcOperate::removeBoard";
        //             var resData = "";
        //             var reqData = "gds_bbs=gds_bbs";
        //             var args = "";
        //             var callback = "callback";
        //
        //             this.transaction(id, url, resData, reqData, args, callback);


        	var count = this.Grid00.getCellValue(this.Grid00.currentrow, 0); // 저장전
        	var boardNo = this.Grid00.getCellValue(this.Grid00.currentrow, 1); // 저장된
        	var boardDS = this.Grid00.getBindDataset();
        	var rowCount = boardDS.getRowCountNF();
        	var index;

        	if(rowCount != 0){
        		for(var i=0; i<rowCount; i++){
        			if(boardDS.id == "gds_bbs"){
        				index = bindDS.findRow("JOURNAL_NO", journalNo);
        			}
        			boardDS.deleteRow(index);
        		}
        	}


        	application.gds_bbs.deleteRow(application.gds_bbs.rowposition);


        };



        this.callbackFunc = function( strID, vArgu ){
           this.reload();

        }

        this.callback = function(trid , ErrorCode, ErrorMsg){


           if(trid == "deleteBoard"){
              if(ErrorCode>=0){
                 alert("삭제완료!");
              }
           }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.boardform_onload,this);
            this.btnFirst.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrev.addEventHandler("onclick",this.Button_onclick,this);
            this.btn1.addEventHandler("onclick",this.btn0_onclick,this);
            this.btn2.addEventHandler("onclick",this.btn1_onclick,this);
            this.btn3.addEventHandler("onclick",this.btn2_onclick,this);
            this.btn4.addEventHandler("onclick",this.btn3_onclick,this);
            this.btn5.addEventHandler("onclick",this.btn4_onclick,this);
            this.btn6.addEventHandler("onclick",this.btn5_onclick,this);
            this.btn7.addEventHandler("onclick",this.btn6_onclick,this);
            this.btn8.addEventHandler("onclick",this.btn7_onclick,this);
            this.btn9.addEventHandler("onclick",this.btn8_onclick,this);
            this.btn10.addEventHandler("onclick",this.btn9_onclick,this);
            this.btnNext.addEventHandler("onclick",this.Button_onclick,this);
            this.btnLast.addEventHandler("onclick",this.Button_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.bt_add.addEventHandler("onclick",this.bt_add_onclick,this);
            this.bt_delete.addEventHandler("onclick",this.bt_delete_onclick,this);
        };
        this.loadIncludeScript("boardform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
