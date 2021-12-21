jQuery(document).ready(function(){
    jQuery('.red-color').click(function(){
        jQuery('body').addClass('red-color-bar').removeClass('green-color-bar blue-color-bar yellow-color-bar pink-color-bar violet-color-bar')
    });
    jQuery('.green-color').click(function(){
        jQuery('body').addClass('green-color-bar').removeClass('red-color-bar blue-color-bar yellow-color-bar pink-color-bar violet-color-bar')
    });
    jQuery('.blue-color').click(function(){
        jQuery('body').addClass('blue-color-bar').removeClass('red-color-bar green-color-bar yellow-color-bar pink-color-bar violet-color-bar')
    });
    jQuery('.yellow-color').click(function(){
        jQuery('body').addClass('yellow-color-bar').removeClass('red-color-bar green-color-bar blue-color-bar pink-color-bar violet-color-bar')
    });
    jQuery('.pink-color').click(function(){
        jQuery('body').addClass('pink-color-bar').removeClass('red-color-bar green-color-bar blue-color-bar yellow-color-bar violet-color-bar')
    });
    jQuery('.violet-color').click(function(){
        jQuery('body').addClass('violet-color-bar').removeClass('red-color-bar green-color-bar blue-color-bar yellow-color-bar pink-color-bar')
    });
});