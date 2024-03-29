//XJS=common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*********************************************************
        * Popup Component 생성 및 호출 처리
         @Path          scripts::common61th.xjs
         @Description   POPUP 컴포넌트를 생성해서 띄우는 스크립트
         @Author          박소연, 이혜동
         @Created on    2020.03.01
         ********************************************************/
        /**
         * fn_openPopup:
         * @param  sFram, sId, sUrl, sParam, sCallBack
         * @return {N/A}    N/A
         * @example this.fn_openPopup("부모객체", "서비스 아이디", "폼URL주소", "파라미터 값", "콜백함수");
         */

        this.fn_openPopup = function(sFram,sId,sUrl,sParam,sCallBack)
        {
            var nLeft = system.clientToScreenX(this, 10);
            //컴포넌트의 클라이언트 기준의 x 좌표값을 스크린 기준의 x 좌표값으로 반환하는 메소드입니다.

            var nTop  = system.clientToScreenY(this, 10);
        	//컴포넌트의 클라이언트 기준의 y 좌표값을 스크린 기준의 y 좌표값으로 반환하는 메소드입니다.


            var objChild = new ChildFrame(sId, "absolute", nLeft, nTop, 300, 400);
            objChild.set_formurl(sUrl);
            objChild.set_openalign("center middle");
            objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , sParam
                             , sFram
                             , sCallBack);
        };







        /*********************************************************
        * TRANSACTION 서비스 호출 처리
         @Path          scripts::common61th.xjs
         @Description   서비스 아이디로 트랜젝션 처리
         @Author          박소연, 이혜동
         @Created on    2020.03.01
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId){
           var sUrl    = "",
              sInDs    = "",
              sOutDs    = "",
              sParam    = "",
              sCallBack = "";

           sCallBack = "fnCallback";

           switch(sTranId) {
        	   case "FactoryList":
        	      this.transaction(
        	           "findFactoryList" //이게 콜백 받는 아이디
        	         , "dataURL::logi/logiBase/findFactoryList.do"
        	         , ""
        	         , "ds_factory=ds_factory"
        	         , "itemCode='all'"
        	         , sCallBack
        	      );
        	      break;

           case "Save":  // 원하는 트렌젝션 값을 셋팅 해둔다
              alert("저장");
        //       this.transaction(
        //            "save"
        //          , ""
        //          , ""
        //          , ""
        //          , ""
        //          , sCallBack
        //       );
              break;

           default:
              alert("유효한 서비스 아이디가 아닙니다");
        	  break;
           }
        };


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
