function profileNotification()
{
    var profil = document.getElementById('profile');
    profil.style.display = 'block'
}
function СloseProfileMenu()
{
    var profil = document.getElementById('profile');
    profil.style.display = 'none'
}
function OpenSMSR(){
    var profil = document.getElementById('SMSR')
    profil.style.display = "block"
}
function CloseSMSR(){
    var profil = document.getElementById('SMSR')
    profil.style.display = "none"
}
function OpenTrump(){
    document.getElementById('MyChatUkraine').style.boxShadow ="0 0 0 0"
    document.getElementById('Ukraine_chat').style.display = "none"
    document.getElementById('Trump_chat').style.display = "block"
    document.getElementById('TrumpC').style.boxShadow ="0 4px 10px 4px rgba(0,0,0,0.2)"
}
function OpenUkraine(){
    document.getElementById('Trump_chat').style.display = "none"
    document.getElementById('TrumpC').style.boxShadow ="0 0 0 0"
    document.getElementById('Ukraine_chat').style.display = "block"
    document.getElementById('MyChatUkraine').style.boxShadow ="0 4px 10px 4px rgba(0,0,0,0.2)"
}
function OpenComentsParis(){
    document.getElementById('Paris').style.display = 'block';
    document.getElementById('repost').style.display = "none";
}
function OpenPhoto(){
    document.getElementById('popup1').style.display = 'block';
}
function Like(){
    document.getElementById('Like').style.backgroundImage = "URL('Images/heart1.png')"
}
function Like1(){
    document.getElementById('Like1').style.backgroundImage = "URL('Images/heart1.png')"
}
function repost(){
    document.getElementById('repost').style.display = "block";
    document.getElementById('Paris').style.display = 'none';
}
function red(){
    document.getElementById('top').style.backgroundColor = "#e74c3c";    
    document.getElementById('search').style.backgroundColor = "#c0392b";        
}
function blue(){
    document.getElementById('top').style.backgroundColor = "#00aaff";    
    document.getElementById('search').style.backgroundColor = "#0099e6";        
}
function green(){
    document.getElementById('top').style.backgroundColor = "#2ecc71";    
    document.getElementById('search').style.backgroundColor = "#27ae60";        
}
function purple(){
    document.getElementById('top').style.backgroundColor = "#9b59b6";    
    document.getElementById('search').style.backgroundColor = "#8e44ad";        
}
function yelow(){
    var top = document.getElementById('top');
    var search = document.getElementById('search')
    top.style.backgroundColor = "#f1c40f";    
    search.style.backgroundColor = "#f39c12";        
    document.cookie = 'search'/* haaaard >.<*/
}
function OpenFeedback(){
    document.getElementById('feedback').style.display = 'block'
}
function CloseFeedback(){
    document.getElementById('feedback').style.display = 'none'
}