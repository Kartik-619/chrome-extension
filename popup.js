let btn = document.getElementById('darkmode');
btn.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "toggleDarkMode" }, (response) => {
        console.log("message sent", response);
      });
});
let block_site=document.getElementById("blockSite");

block_site.addEventListener("click",()=>{
    const site=document.getElementById("siteInput").value.trim();
    if(!site) return;
    chrome.runtime.sendMessage({blockSite:site},(response)=>{
        if(response.status==="blocked"){
            const li=document.createElement("li");
            li.textContent=response.domain;
            document.getElementById("blockedList").appendChild(li);
        }
    });
});