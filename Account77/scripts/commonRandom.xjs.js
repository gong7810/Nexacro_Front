//XJS=commonRandom.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"scripts::commonScripts.xjs");
        this.addIncludeScript(path,"scripts::commonString.xjs");
        this.registerScript(path, function() {
        /********************************************************************************
        공통 유틸
        @Path          scripts::commonRandom.xjs
        @Description   공통 Random 함수
        @Author        S.U
        @Create        2024. 01. 18.

        * =========================================================================
        * 수정일자     수정자    내    용
        * =========================================================================
        * 2024.01.18    S.U    최초 작성

        ********************************************************************************/

        /***************************************************************************
        * this.gfn_randomAlpha			: 랜덤한 알파벳을 불러온다.

        **************************************************************************/
        this.executeIncludeScript("scripts::commonScripts.xjs"); /*include "scripts::commonScripts.xjs"*/
        this.executeIncludeScript("scripts::commonString.xjs"); /*include "scripts::commonString.xjs"*/

        /**
        * @class 랜덤한 알파벳난수를 생성한다
        * @return string 생성한 알파벳
        */
        this.gfn_randomAlpha = function (num)
        {
        	const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        	var strRandom = '';

        	const charactersLength = characters.length;
        	for (let i = 0; i < num; i++) {
        		strRandom += characters.charAt(Math.floor(Math.random() * charactersLength));
        	}

        	return strRandom;
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
