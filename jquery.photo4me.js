/*  @preserve
 *  Project: jQuery plugin Photo4Me
 *  Description: 
 *  Author: Simon Philp : https://www.siphilp.co.uk
 *  Version: 0.1
 *  License: MIT
 */
(function ($) {
    $.fn.getMyPhotos = function (options) {
        var settings = $.extend({ apiUrl: "http://api.photo4me.com/result/"}, options);
        var apiUrl = settings.apiUrl + settings.userId;
        var elem = $(this);
        $('#p4meloader').show();
        $.getJSON(apiUrl, function() {
        }).done(function (data) {
            var listHtml = "";
              $.each(data.Photos, function (i, item) {
                  listHtml += "<li><a href='" + item.PhotoUrl + "'><img src='" + item.PhotoThumbUrl + "' alt='" + item.PictureName + "' /></a></li>";
                  if (i+1 === settings.numberPhotos) {return false;}});
              listHtml += "<li class='photo4Me-li'><a href='http://www.photo4me.com/photographer.asp?OwnerID=" + settings.userId + "'>View All</a></li>";
            elem.html(listHtml);
        }).error(function(error) {
            console.log(error);
        }).always(function() {
            $('#p4meloader').hide();
        });
    };
}(jQuery));