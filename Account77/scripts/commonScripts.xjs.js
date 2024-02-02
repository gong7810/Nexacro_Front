//XJS=commonScripts.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"scripts::commonTransaction.xjs");
        this.addIncludeScript(path,"scripts::commonOpen.xjs");
        this.addIncludeScript(path,"scripts::commonUtil.xjs");
        this.addIncludeScript(path,"scripts::commonDataset.xjs");
        this.addIncludeScript(path,"scripts::commonDate.xjs");
        this.addIncludeScript(path,"scripts::commonString.xjs");
        this.registerScript(path, function() {

        /********************************************************************************
         공통 스트립트관리
         @Path		    scripts::commonScripts
         @Description 	공통스크립트의 모음
         공통단 처리한 부분을 공부하고싶으면 loginForm과 ContractForm을 보면 됨.
         ********************************************************************************/

        this.executeIncludeScript("scripts::commonTransaction.xjs"); /*include "scripts::commonTransaction.xjs"*/
        // 트랜잭션 스크립트
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/
        // 화면 관련 스크립트
        this.executeIncludeScript("scripts::commonUtil.xjs"); /*include "scripts::commonUtil.xjs"*/
        // 유틸 관련 스크립트
        this.executeIncludeScript("scripts::commonDataset.xjs"); /*include "scripts::commonDataset.xjs"*/
        // 데이터셋 관련 스크립트
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/
        // 날짜 관련 스크립트
        this.executeIncludeScript("scripts::commonString.xjs"); /*include "scripts::commonString.xjs"*/
        // String 관련 스크립트

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
