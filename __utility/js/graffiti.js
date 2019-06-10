var GraffitiHelpers = new Object();

GraffitiHelpers.statusMessage = function(name, text, alertOnNull)
{
    var result = $(name);
    if(result != null)
    {
        result.show();
        result.innerHTML = text;
    }
    else if(alertOnNull)
    {
        alert(text);
    }
}


var Comments = new Object();

Comments.statusMessage = function(text, alertOnNull)
{
    var result = $('comment_status');
    if(result != null)
    {
        result.show();
        result.innerHTML = text;
    }
    else if(alertOnNull)
    {
        alert(text);
    }
    
    if(typeof decrementComments == 'function')
        decrementComments();
}

Comments.deleteCommentWithStatus = function(url, id)
{
    var itemToRemove = new Array();

    if(arguments.length > 2)
    {
        for(var i=2; i<arguments.length;i++)
        {
            itemToRemove[i-2] = arguments[i];
        }
    }
    
  new Ajax.Request(url + '?command=deleteCommentWithStatus',
  {
    method:'post',
    parameters:  {commentid:id},
    onSuccess: function(transport)
    {
        itemToRemove.each(Element.hide);
        if($('commentsPending'))
        {
            $('commentsPending').innerHTML = parseInt($('commentsPending').innerHTML) - 1;
        }
        
     var response = transport.responseText || "no response text";
     Comments.statusMessage(response,false);        
    },
    onFailure: function(){ alert('Something went wrong...') }
  });
} 

Comments.approve = function(url, id)
{
    var itemToRemove = new Array();

    if(arguments.length > 2)
    {
        for(var i=2; i<arguments.length;i++)
        {
            itemToRemove[i-2] = arguments[i];
        }
    }

  new Ajax.Request(url + '?command=approve',
  {
    method:'post',
    parameters:  {commentid:id},
    onSuccess: function(transport)
    {
     itemToRemove.each(Element.hide);
     var response = transport.responseText || "no response text";
     Comments.statusMessage(response,false);        
    },
    onFailure: function(){ alert('Something went wrong...') }
  });
} 

Comments.unDelete = function(url, id)
{
    var dontrefresh = false;
    
    if(arguments.length > 2)
    {
        for(var i=2; i<arguments.length;i++)
        {
            dontrefresh = arguments[i];
        }
    }
  
  new Ajax.Request(url + '?command=unDelete',
  {
    method:'post',
    parameters:  {commentid:id},
    onSuccess: function(transport)
    {
        
     var response = transport.responseText || "no response text";
     Comments.statusMessage(response,false);  
     
     if(!dontrefresh) 
        window.location = window.location.pathname;

    },
    onFailure: function(){ alert('Something went wrong...') }
  });
} 

Comments.deleteComment = function(url, id)
{
    //if(!confirm('Are you sure you want to delete this comment ' + id + '? This action can not be undone!'))
    //    return false;
    
    var itemToRemove = new Array();

    if(arguments.length > 2)
    {
        for(var i=2; i<arguments.length;i++)
        {
            itemToRemove[i-2] = arguments[i];
        }
    }
    
  new Ajax.Request(url + '?command=deleteComment',
  {
    method:'post',
    parameters:  {commentid:id},
    onSuccess: function(transport)
    {
        itemToRemove.each(Element.hide);
    },
    onFailure: function(){ alert('Something went wrong...') }
  });
} 

//Add New Comment
Comments.submitComment = function(url)
{
    Comments.statusMessage('Sending... please wait',true);
 
    new Ajax.Request(url + '?command=newComment',
    {
        method:'post',
        parameters:  Form.serialize('comment_form'),
        onSuccess: function(transport)
                    {
                         var response = transport.responseText || "no response text";
                         Comments.statusMessage(response,true);
                         $('comment').value = '';
                     },
        onFailure: function()
        {
            Comments.statusMessage('Something went wrong. The comment was likely not saved.',true);
        }
  });
}

/*********************POSTS************************/

var Posts = new Object();

Posts.deletePost = function(url, id)
{
    var itemToRemove = new Array();

    if(arguments.length > 2)
    {
        for(var i=2; i<arguments.length;i++)
        {
            itemToRemove[i-2] = arguments[i];
        }
    }
    
  new Ajax.Request(url + '?command=deletePost',
  {
    method:'post',
    parameters:  {postid:id},
    onSuccess: function(transport)
    {
        itemToRemove.each(Element.hide);
        
     var response = transport.responseText || "no response text";
     Comments.statusMessage(response,false);        
    },
    onFailure: function(){ alert('Something went wrong...') }
  });
}

Posts.permanentDeletePost = function(url, id)
{
    var itemToRemove = new Array();

    if(arguments.length > 2)
    {
        for(var i=2; i<arguments.length;i++)
        {
            itemToRemove[i-2] = arguments[i];
        }
    }
    
  new Ajax.Request(url + '?command=permanentDeletePost',
  {
    method:'post',
    parameters:  {postid:id},
    onSuccess: function(transport)
    {
        itemToRemove.each(Element.hide);
        
     var response = transport.responseText || "no response text";
     window.location = response;      
    },
    onFailure: function(){ alert('Something went wrong...') }
  });
} 

Posts.unDeletePost = function(url, id)
{

    var itemToRemove = new Array();

    if(arguments.length > 2)
    {
        for(var i=2; i<arguments.length;i++)
        {
            itemToRemove[i-2] = arguments[i];
        }
    }

  new Ajax.Request(url + '?command=unDeletePost',
  {
    method:'post',
    parameters:  {postid:id},
    onSuccess: function(transport)
    {
         itemToRemove.each(Element.hide);
     var response = transport.responseText || "no response text";
     //Comments.statusMessage(response,false);  
     window.location = window.location.pathname;
    },
    onFailure: function(){ alert('Something went wrong...') }
  });
} 

/****************CONTACT***************************/

var Contact = new Object();

Contact.submitMessage = function(url)
{
    GraffitiHelpers.statusMessage('contact_status', 'sending', true);
 
    new Ajax.Request(url + '?command=newContactMessage',
    {
        method:'post',
        parameters:  Form.serialize('contact_form'),
        onSuccess: function(transport)
                    {
                         var response = transport.responseText || "no response text";
                         GraffitiHelpers.statusMessage('contact_status', response, true);
                         //Comments.statusMessage(response,true);
                         $('message').value = '';
                     },
        onFailure: function()
        {
            GraffitiHelpers.statusMessage('contact_status', 'Something went wrong. The contact request was likely not sent.', true);
        }
  });
}