(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boarddetailform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"WRITTEN_BY\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_BY\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("e_contents","32","132","618","228",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","32","36","64","14",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","32","90","64","14",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("modify_btn","405","370","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Edit("e_name","110","36","231","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("list_btn_detail","490","370","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("delete_btn","580","370","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("e_writer","110","80","231","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("e_write_date","419","86","231","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","348","86","64","14",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("작성일");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","e_contents","value","ds_board","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","e_name","value","ds_board","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","e_writer","value","ds_board","WRITTEN_BY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","e_write_date","value","ds_board","WRITE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("boarddetailform.xfdl","scripts::commonDate.xjs");
        this.registerScript("boarddetailform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;
        var status;
        var bno=this.parent.bno; // 부모객체에서 넘겨준 게시물 정보를 받아서 변수에 할당


        this.boarddetailform_onload = function(obj,e)
        {
        	 trace('<<<<onload event has been occured at : boarddetailform');
        			this.e_name.set_readonly(true);
        			this.e_contents.set_readonly(true);

        			trace("<<<<<<<<<<<<<< this is bno for parameter  :"+this.parent.bno); //객체의 키로 값을 받는다.



        			var id = "findBoardDetail";
        			var url = "svcOperate::findBoardDetail";
        			var resData = "";
        			var reqData = "ds_board=ds_board";
        			var args = "bno="+bno;
        			var callback = "callback";

        			this.transaction(id, url, resData, reqData, args, callback);

        };








        this.delete_btn_onclick = function(obj,e)
        {
        	const bool = confirm("삭제하시겠습니까?");
        	trace("this is for delete : "+bool);

        	if(bool){
        			var id = "removeBoard";
        			var url = "svcOperate::removeBoard";
        			var resData = "";
        			var reqData = "";
        			var args = "bno="+bno; // 삭제할 게시물의 id를 파라미터로 백단으로 넘겨준다.
        			var callback = "callbackFunc";

        			this.transaction(id, url, resData, reqData, args, callback);

        	alert("성공적으로 삭제되었습니다.");

        	this.close('del_btn'); // 삭제후 팝업창을 닫는다.

        	}else{
        		trace("not deleted"); // 삭제하지 않으면 아무 동작도 하지 않는다.
        	}
        };







        //목록으로 돌아가는 버튼
        this.list_btn_detail_onclick = function(obj,e)
        {
        	this.close('list_btn');


        };


        this.modify_btn_onclick = function(obj,e)
        {




        	var modBtn=this.modify_btn.text;

        	if(modBtn=='수정'){
        	trace(' this is for modify');
        	//modify_btn의 text를 "저장"으로 업데이트하고
        	this.modify_btn.set_text('저장');



        	//제목과 내용의 readonly를 false로 변경
        	this.e_name.set_readonly(false);
        	this.e_contents.set_readonly(false);






        	}else if(modBtn=='저장'){ //  유효성 검증 및 transaction을 위한 if문 시작

        			const bool=confirm("저장하시겠습니까?");

        			trace('this is for save');
        				var title=	this.e_name.text;
        				var contents = this.e_contents.text;

        				var id = "modifyBoard";
        				var url = "svcOperate::modifyBoard";
        				var resData = "ds_board=ds_board:U"; // 업데이트할 데이터만 전송
        				var reqData = "";
        				var args = "";
        				var callback = "callbackFunc";

        			if(title.trim()==""||title==''){
        				alert("제목을 입력해 주세요");      // 제목을 입력하지 않았을때 경고를 띄움
        				return;
        			}else if(contents.trim()==""||contents==''){
        				alert('내용을 입력해 주세요');      //제목은 입력했으나 내용을 입력하지 않았을때 경고를 띄움
        				return;
        			}else if(title&&contents){

        						// 위의 confirm의 결과가 true이면은 transaction을 보낸다.
        					if(bool){
        						this.transaction(id, url, resData, reqData, args, callback);
        							trace("update board data has been successfully sent!!");
        							alert("저장되었습니다.");
        							trace("response Data has been sent");
        						}else{
        							return; // 취소하면 다시 화면으로 돌아감

        					}


        				}



        		//컴포넌트들의 상태들을 다시 원복해 놓는다.
        		this.modify_btn.set_text('수정');
        		this.delete_btn.set_visible(true);
        		trace("modifiydetailform will be shut down");
        		this.close('mod_btn');


        		}//  유효성 검증 및 transaction을 위한 if문의 끝


        };






        this.boarddetailform_onkeydown = function(obj,e)
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
            this.addEventHandler("onload",this.boarddetailform_onload,this);
            this.addEventHandler("onkeydown",this.boarddetailform_onkeydown,this);
            this.e_contents.addEventHandler("onchanged",this.e_contents_onchanged,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.modify_btn.addEventHandler("onclick",this.modify_btn_onclick,this);
            this.modify_btn.addEventHandler("onsetfocus",this.modify_btn_onsetfocus,this);
            this.list_btn_detail.addEventHandler("onclick",this.list_btn_detail_onclick,this);
            this.delete_btn.addEventHandler("onclick",this.delete_btn_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_00_00_onclick,this);
        };
        this.loadIncludeScript("boarddetailform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
