(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("accountform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_account", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_accountDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","900","80","78","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("account_grid","40","110","300","190",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_account");
            obj.set_scrolltype("vertical");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정과목 코드\"/><Cell col=\"1\" text=\"계정\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("account_list_grid","372","110","606","342",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_accountDetailList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정세부코드\"/><Cell col=\"1\" text=\"계정그룹코드\"/><Cell col=\"2\" text=\"계정과목\"/><Cell col=\"3\" text=\"PARENT_ACCOUNT_INNER_CODE\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_INNER_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:GROUP_CODE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ACCOUNT_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PARENT_ACCOUNT_INNER_CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","365","10","251","75",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("계 정 과 목");
            obj.set_textAlign("center");
            obj.set_font("normal 18pt/normal \"Arial\"");
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
        this.addIncludeScript("accountform.xfdl","scripts::commonOpen.xjs");
        this.addIncludeScript("accountform.xfdl","scripts::commonDate.xjs");
        this.registerScript("accountform.xfdl", function() {
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;
        var page=0;







        this.accountform_onload = function(obj,e)
        {
        	trace("onload Event has been occured at : accountform");
        	today=this.gfn_today();
        	trace(today);
        	trace(application);

        	var id = "selectaccount";
        	var url = "svcOperate::findParentAccountList";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = "ds_account=gds_account"; // 데이터 요청
        	var args = "";
        	var callback = "";

        	this.transaction(id, url, resData, reqData, args, callback);


        };







        this.account_grid_oncellclick = function(obj,e)
        {
        		code = this.ds_account.getColumn(e.row, "ACCOUNT_INNER_CODE");
        	trace("<<<<<<<<<< code :  "+code);
        	var id = "Detailaccountlist";
        	var url = "svcOperate::detailaccountlist";
        	var resData = "";
        	var reqData = "ds_accountDetailList=gds_account_detail";
        	var args = "parentAccountInnerCode='"+code+"'";
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);
        };







        // 계정과목을 더블 클릭하면은
        //  modal이 열림
        this.account_list_grid_oncelldblclick = function(obj,e)
        {

        		//var objDs=obj.getBindDataset();
        		//trace('<<<<<<<objDs : '+objDs);



        		//더블클릭한 행의 셀에 있는 정보를 가져와서
        	var account_inner_code	=this.account_list_grid.getCellText(e.row,0);
        	var parent_account_inner_code=this.ds_accountDetailList.getColumn(e.row,'PARENT_ACCOUNT_INNER_CODE');
        	var account_group_code = this.account_list_grid.getCellText(e.row,1);
        	var account_name= this.account_list_grid.getCellText(e.row,2);


        	trace(' account_inner_code :'+account_inner_code,
        		  ' // parent_account_inner_code : '+parent_account_inner_code,
        		  ' // account_group_code : '+account_group_code,
        		  ' // account_name : '+account_name
        		 );


        			// accountmodifyform으로 데이터를 넘겨준다.
        			var sID="accountdetailform";
        			var sURL="popup::accountdetailform.xfdl";
        			var param={account_inner_code:account_inner_code,
        				       parent_account_inner_code:parent_account_inner_code,
        					   account_group_code:account_group_code,
        					   account_name:account_name
        					  };
        			var callbackFunc="detailform_callbackFunc";
        			// 해당 프레임을 생성
        	var oChildFrame = new ChildFrame(sID,0, 0, 0, 0, null, null, sURL);
        	//해당 프레임이 띄워질 위치를 화면 중앙으로 설정
        	oChildFrame.set_openalign("center middle");
        	// 해당 프레임을 화면에 띄움
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);


        };


        // detail폼이 닫히고 나서 호출되는 콜백함수
        //---> mod_btn을 눌러서 detail폼이 닫힌거면
        //     accountmodifyform이 열립니다.
        this.detailform_callbackFunc=function(obj,val){
        trace('<<<<<<this is obj : '+obj);
        trace('<<< this is  val : '+val);
        trace ('<<<<<this is data from detailform : '+val);



        if(val=='del_btn'||val=='esc'||val=='list_btn'){

        this.reload();

        //"mod_btn"에서 close()한 거라면 아래의 코드를 실행
        }else{
        //전달 받은 문자열 데이터를 ":"를 구분자로 나눠서 배열에 저장.
        var data=val.split(':');
        trace('<<<<< we have to open modifyform');
        trace('<<<<< val at if statement is : '+ data[0]+' / '+data[1]);



         	//this.close('mod_btn_detail_form');

        			var sID="accountmodifyform";
         			var sURL="popup::accountmodifyform.xfdl";
        			var param={data:data
         					  };
        			var callbackFunc="modifyform_callbackFunc";
         			// 해당 프레임을 생성
        	var oChildFrame = new ChildFrame(sID,0, 0, 0, 0, null, null, sURL);
        	// 화면이 띄워질 위치를 지정
        	// ---> 이 옵션을 지정해 주면은 ChildFrame을 생성할때 화면 위치 값을 입력하지 않아도 된다.
        	oChildFrame.set_openalign("center middle");
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);

        	};

        };


        //수정화면이 닫히면은 호출된다.
        this.modifyform_callbackFunc=function(obj,val){


        trace('<<<<<<<<val is : '+val )

        // 발생한 이벤트에 따라서 reload여부를 결정
        if(val=='mod_mod_btn'||val=='mod_del_btn'){

        this.reload();
        }



        trace('<<<<< modifyform has been closed!!!');

        }









        //계정과목 추가를 위한 버튼 이벤트
        this.Button00_onclick = function(obj,e)
        {
        	trace("btn has been pushed for :  add_accountsubject ");


        	//this.gfnOpen("modifyaccount", "popup::modifyaccountform.xfdl", "callbackFunc", {status:"add",today:'today'});

        			//띄울 poppdiv의 정보를 작성하고
        			var sID="accountaddform";
        			var sURL="popup::accountaddform.xfdl";
        			var param={};
        			var callbackFunc="addform_callbackFunc";
        			// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID,0, 0, 0, 0, null, null, sURL);  // 프레임명,
        																				 // 부모프레임의 왼쪽과의 거리,
        							                                                     // 부모프레임의 상단과의 거리,
        																				 // 해당 프레임의 넓이,
        																				 // 해당 프레임의 높이,
        																				 // 부모 프레임의 오른쪽과의 거리,
        																				 // 부모 프레임과의 하단과의 거리,
        																				 // 참조할 프레임의 주소
        																				 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        																				 // 해당 폼에서 크기를 지정해 주면은 된다.
        	    // 프레임의 위치를 설정해주고
        		oChildFrame.set_openalign("center middle");
        		// 해당 프레임을 화면에 출력
        		oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);

        		trace("childFramehas been successfully creataed at : account_write ")

        };


        //계정과목 추가 화면이 닫히면 호출된다.
        this.addform_callbackFunc=function(){

        trace('<<<<< this is callback for addform!!!');

        this.reload();

        }









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accountform_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.account_grid.addEventHandler("oncellclick",this.account_grid_oncellclick,this);
            this.account_list_grid.addEventHandler("oncelldblclick",this.account_list_grid_oncelldblclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("accountform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
