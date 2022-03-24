/*
Script: TreeView Library
Author: Zia Haider
Created On:24th March,2022
*/
initTreeView=function(prop){                
    if(prop.toolbar=='display')
    {
        $(prop.container).append('<div id="toolbar"><span id="expand">expand all</span>&nbsp;|&nbsp;<span id="collapse">collapse all</span></div>');
    }    
    $(prop.container).append('<ul></ul>');
    ul=$(prop.container+' ul:eq(0)');
    generateNodes(prop.data,ul);
    $('.heading>span').click(function(){
        if($(this).parent().find('ul:eq(0)').hasClass('open')){
            $(this).parent().find('ul:eq(0)').removeClass('open')
        }else{
            $(this).parent().find('ul:eq(0)').addClass('open')
        }        
    });
    $('#expand').click(function(){
        $('.tree-vw>ul').find('ul').addClass('open')
    })
    
    $('#collapse').click(function(){
        $('.tree-vw>ul').find('ul').removeClass('open')
    })
    
}
generateNodes=function(data,ul){
    for(i in data)
    {
        if(data[i].nodes.length>0)
        {
            ul.append('<li class="heading" id="'+data[i].id+'" parentid="'+data[i].parentid+'"> <span>+</span> '+data[i].text+'</li>');
            ul.find('li[id='+data[i].id+']').append('<ul></ul>');
            sub=ul.find('li[id='+data[i].id+'] ul:eq(0)');
            generateNodes(data[i].nodes,sub);
        }
        else
        {
            ul.append('<li id="'+data[i].id+'" parentid="'+data[i].parentid+'">'+data[i].text+'</li>');
        }
    }
}