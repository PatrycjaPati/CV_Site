function sendMessage() {
  fetch('https://api.patrycjamalgorzata.pl', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: "",
      title: "",//document.getElementById("exampleFormControlTextarea1").value, 
      email: document.getElementById("exampleFormControlInput1").value,
      message: document.getElementById("exampleFormControlTextarea1").value
    
    })
  }).then(res => res.json())
    .then((res) => {
		console.log(res)
		
		
		$("body").append(
			$("<div class='flash-message flash-message--success'><p>Udało się wysłać wiadomość</p></div>")
		);
		
	});


}

(function () {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  var getHeight = function () {
    var extraHeight = 0;

    if (isMobile.any()) extraHeight = 50;

    setTimeout(function () {
      $("#fh5co-main")
        .stop()
        .animate({
          height: $(".fh5co-tab-content.active").height() + extraHeight,
        });
    }, 200);
  };

  var pieChart = function () {
    $(".chart").easyPieChart({
      scaleColor: false,
      lineWidth: 10,
      lineCap: "butt",
      barColor: "#000000",
      trackColor: "#FFFFFF",
      size: 160,
      animate: 1000,
    });
  };

  var tabContainer = function () {
    getHeight();
    $(window).resize(function () {
      getHeight();
    });
  };

  var tabClickTrigger = function () {
    $(".fh5co-tab-menu a").on("click", function (event) {
      event.preventDefault();
      var $this = $(this),
        data = $this.data("tab"),
        pie = $this.data("pie");

      // add/remove active class
      $(".fh5co-tab-menu li").removeClass("active");
      $this.closest("li").addClass("active");

      $(".fh5co-tab-content.active").addClass("animated fadeOutDown");

      setTimeout(function () {
        $(".fh5co-tab-content.active").removeClass(
          "active animated fadeOutDown fadeInUp"
        );
        $('.fh5co-tab-content[data-content="' + data + '"]').addClass(
          "animated fadeInUp active"
        );
        getHeight();
      }, 500);

      if (pie === "yes") {
        setTimeout(function () {
          pieChart();
        }, 800);
      }
    });
  };

  

  // Document on load.
  $(function () {
    tabContainer();
    tabClickTrigger();

   

  });
})();
