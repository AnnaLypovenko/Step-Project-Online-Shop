console.log('==========');
//подключение галереи//
//
// $(document).ready(function() {
//
//     $(".item").hide();
//     $(".item").slice(0,12).show();
//     $(".btn-show-more").click(function(){
//         let imageType = $(".btn.active").data("filter");
//         imageType = imageType.replace(".","");
//
//
//         /*
//         <div data-type="webd" class="item webd col-3">
//                 <a href=""><img src="image/gallery/web-design/web-design3.jpg" height="206" width="284"/></a>
//             </div>
//          */
//
//         for (let i=0; i<12; i++) {
//             let div = document.createElement("div");
//             div.setAttribute("data-type", imageType);
//             div.setAttribute("class", `item ${imageType} col-4`);
//             let a = document.createElement('a');
//             a.setAttribute("href", '');
//             div.appendChild(a);
//             let img = document.createElement("img");
//             img.setAttribute('src','image/gallery/web-design/web-design3.jpg');
//             a.appendChild(img);
//             let row = document.getElementsByClassName("row")[0];
//             row.appendChild(div);
//         }
//         let btn = document.getElementsByClassName("btn-show-more")[0];
//         btn.style.visibility = "hidden";
//     });
//     $('.btn').click(function() {
//         let btn = document.getElementsByClassName("btn-show-more")[0];
//         btn.style.visibility = "visible";
//         $(this).addClass('active').siblings().removeClass("active");
//         const imageType = $(this).data("filter");
//         //console.log(imageType);
//         $(".item").hide();
//         $(`.item${imageType}`).slice(0,12).show();
//     });
// });