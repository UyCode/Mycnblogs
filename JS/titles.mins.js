function customTimer(inpId,fn){if($(inpId).length){fn();}else{var intervalId=setInterval(function(){if($(inpId).length){clearInterval(intervalId);customTimer(inpId,fn);}},100);}}function generateBlogTitle(){var root=document.createElement("div");root.id="ui";for(var i=0;i<50;i++){var node=document.createElement("div");node.className="text";node.innerHTML="R.Ahmatjan";root.appendChild(node);}document.getElementById("blogTitle").appendChild(root);var subTitle=document.createElement("h2");subTitle.innerHTML="Talk is cheap, show me the code.                                          كومپىيوتېر بىلىملىرى بېلوگى";document.getElementById("blogTitle").appendChild(subTitle);}$(function(){customTimer("#blogTitle",generateBlogTitle);});