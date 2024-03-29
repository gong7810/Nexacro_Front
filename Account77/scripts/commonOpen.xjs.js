//XJS=commonOpen.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /********************************************************************************
         공통 메뉴 클릭시 화면호출
         @Path          scripts::commonOpen.xjs
         @Description    모달이나 다이얼로그를 띄우는 스크립트
         ********************************************************************************/

        // open메서드와 showmodal메서드의 가장 큰 차이점은 callbackFunction의 유무

        this.gfnOpen = function (sID, sURL, callbackFunc, param)   //"commonDialog", "base::commonDialog.xfdl","callback"
        {

        // 	if (sID == "loginForm")
        // 	{
        // 		var oChildFrame = new ChildFrame();  //(sID, 100, 100, 100, 100, null, null, sURL);
        // 		oChildFrame.init(sID, 100, 100, 350, 600, null, null, sURL);
        // 	}
        // 	else
        // 	{
        		var oChildFrame = new ChildFrame(sID, 100, 100, 350, 600, null, null, sURL);
        	//}


        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);

        };
        //목록 페이지 오픈 함수
        this.gfn_open = function(url, title, sID){
        	trace("@@@@gfn_open@@@@")
        	var workFrame = application.mainframe.VFrameSet00.HFrameSet00.WorkFrame;
        /*
        	var positionCode = application.gds_emp.getColumn(0, "DEPT_CODE");
        	var posNo = positionCode.substr(4);	//DPT-05 에서 05만 구함. 앞의 4글자 subString

        	if(
        		url == "slip::slipApprovalForm.xfdl"
        			|| "statements::totalTrialbalanceForm.xfdl"
        			|| "statements::statementOfFPForm.xfdl"
        			|| "statements::incomeSForm.xfdl"
        	){
        		if(posNo<05){
        			alert("과장 이상만 접근 가능합니다.");
        		}else{
        			workFrame.set_titletext(title);
        			workFrame.set_formurl(url);
        		}
        	}else{  */
        	let pre = "";
        	let post = "";
        		workFrame.set_titletext(title);
        		if(url != null){
        		trace(url);
        			if(url.startsWith("/") || url.endsWith(".html")){
        				pre = url.split('/');
        				post = pre[2].split('.');
        				trace(" 0 "+pre[0]+" 1 "+pre[1]+" 2 "+pre[2]);
        				trace("pre : "+pre[1]+"		post : "+post[0]);
        				if(pre[1] == "hr") pre[1] = "emp";

        				if(post[0].endsWith("form")) workFrame.set_formurl(pre[1]+"::"+post[0]+".xfdl");
        				else workFrame.set_formurl(pre[1]+"::"+post[0]+"form.xfdl");
        			} else {
        				workFrame.set_formurl(url);
        			}
        		}
        		else alert("준비중.");
        //	}
        };
        this.gds_open_onvaluechanged = function(obj,e)
        {
        	var name = obj.getColumn(0, "NAME");
        	var position = obj.getColumn(0, "CODE");
        	this.mainframe.VFrameSet00.TopFrame.getForm().user_info.set_text(name + " " + position + "님");
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
