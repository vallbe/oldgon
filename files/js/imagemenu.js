imageToSwap = null;

function swapCurrentImageWithImage(image)
{
    currentImageName = document.getElementById('mainImage').src.split("/");
    currentImageName = currentImageName[currentImageName.length - 1];

    if ("img/" + currentImageName == image)
        return;
    
    imageToSwap = image;
    $("#mainImage").fadeOut(didFadeOutFinish);
}

function didFadeOutFinish()
{
    document.getElementById('mainImage').src = imageToSwap;
    $("#mainImage").opacity= 0.0;
    $("#mainImage").fadeIn();
}


function twitterExpand()
{
    $("#twitter").animate({width: '110px'}, 'fast', function(){
        $("#twitter_link").fadeIn()
    });
}

function twitterCollapse()
{
    $("#twitter_link").fadeOut('fast', function(){
        $("#twitter").animate({width: '15px'}, 'fast');
    });
}


function rssExpand()
{
    $("#rss").animate({width: '110px'}, 'fast', function(){
        $("#rss_link").fadeIn()
    });
}

function rssCollapse()
{
    $("#rss_link").fadeOut('fast', function(){
        $("#rss").animate({width: '15px'}, 'fast');
    });
}

function githubCollapse()
{
    $("#github_link").fadeOut('fast', function(){
        $("#github").animate({width: '15px'}, 'fast');
    });
}

function githubExpand()
{
    $("#github").animate({width: '110px'}, 'fast', function(){
        $("#github_link").fadeIn()
    });
}

function viadeoCollapse()
{
    $("#viadeo_link").fadeOut('fast', function(){
        $("#viadeo").animate({width: '15px'}, 'fast');
    });
}

function viadeoExpand()
{
    $("#viadeo").animate({width: '110px'}, 'fast', function(){
        $("#viadeo_link").fadeIn()
    });
}

/*
$(document).ready(function(){
    $("#twitter_link").fadeOut()
    $("#twitter").mouseenter(twitterExpand);
    $("#twitter").mouseleave(twitterCollapse);
    
    $("#rss_link").fadeOut()
    $("#rss").mouseenter(rssExpand);
    $("#rss").mouseleave(rssCollapse);

    $("#github_link").fadeOut()
    $("#github").mouseenter(githubExpand);
    $("#github").mouseleave(githubCollapse);
});
*/
