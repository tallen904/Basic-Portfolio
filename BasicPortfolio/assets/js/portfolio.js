console.log("Hello")

// $("#githubImg").hover(function(){
// 	$("#githubImg").replace("src", "./assets/images/githubSquare.png")
// })

$(document).ready(function () {
    $('#githubImg')
        .mouseover(function () {
        $(this).attr("src", "./assets/images/github2.png");
    })
        .mouseout(function () {
        $(this).attr("src", "./assets/images/github.png");
    });
});

$(document).ready(function () {
    $('#linkedinImg')
        .mouseover(function () {
        $(this).attr("src", "./assets/images/linkedin2.png");
    })
        .mouseout(function () {
        $(this).attr("src", "./assets/images/linkedin.png");
    });
});

$(document).ready(function () {
    $('#stackoverflowImg')
        .mouseover(function () {
        $(this).attr("src", "./assets/images/stackoverflow2.png");
    })
        .mouseout(function () {
        $(this).attr("src", "./assets/images/stackoverflow.png");
    });
});