var CYBELAR_Checkout = {
  paymentBtnAppend: function () {
    $(document).ajaxSuccess(function (t, n, e, o) {
      e.url.indexOf("/api/checkout/pub/orderForm") && window.innerWidth > 768 && (
        $(".body-order-form .row-fluid .mini-cart #payment-data-submit").appendTo($(".body-order-form .row-fluid .mini-cart")), $(".body-order-form .row-fluid .mini-cart #payment-data-submit-clone").length || (
          $(".body-order-form .row-fluid .mini-cart .cart-fixed").before('<button id="payment-data-submit-clone" class="submit btn btn-success btn-large btn-block">Finalizar compra</button>'), CYBELAR_Checkout.paymentBtnCloneClick())
      )
    }
    )
  }, paymentBtnCloneClick: function () {
    $(".body-order-form .row-fluid .mini-cart #payment-data-submit-clone").click(function () {
      $(".body-order-form .row-fluid .mini-cart #payment-data-submit").trigger("click")
    })
  }, cartEmptyClass: function () {
    $(window).on("orderFormUpdated.vtex", function (t, n) { 0 == n.items.length && $("body").addClass("cart-empty") })
  }, triggerCreditCard: function () {
    var t = 0;
    $(document).ajaxSuccess(function (n, e, o, r) {
      -1 != o.url.indexOf("/orderForm") && "#/payment" == window.location.hash && 0 == t && (
        $("#payment-group-creditCardPaymentGroup").trigger("click"), t++)
    }), window.addEventListener("hashchange", function () {
      "#/payment" == window.location.hash && $("#payment-group-creditCardPaymentGroup").trigger("click")
    })
  }, giftOpened: () => {
    $(document).ajaxSuccess(function (t, n, e, o) {
      if (-1 != e.url.indexOf("/orderForm")) {
        const t = setInterval(() => {
          $(".body-cart .container-cart .summary-template-holder .cart-totalizers .coupon-data a.link-coupon-add").length && (
            $(".body-cart .container-cart .summary-template-holder .cart-totalizers .coupon-data a.link-coupon-add").trigger("click"), clearInterval(t))
        })
      }
    })
  }, triggerBtnPayment: () => {
    function t() {
      $(".accordion-toggle .payment-edit-link .link-box-edit").unbind("click"), $(".accordion-toggle .payment-edit-link .link-box-edit").click(function () { $(".btn-go-to-payment-wrapper #btn-go-to-payment").trigger("click") })
    } window.addEventListener("hashchange", () => { "#/shipping" === location.hash && t() }), t()
  }, init: function () { CYBELAR_Checkout.paymentBtnAppend(), CYBELAR_Checkout.cartEmptyClass(), CYBELAR_Checkout.giftOpened(), CYBELAR_Checkout.triggerCreditCard(), CYBELAR_Checkout.triggerBtnPayment() }
}; $(document).ready(function () {
  CYBELAR_Checkout.init();

  // $("a[data-name=Pix]").on("click", function(){


  // })
});
$(window).on("hashchange", e => {
  if (window.location.hash == "#/payment" && $('.message-pix').length == 0) {
    // setTimeout(() => {
      $("<p style='color: #e31f1d; text-align: center; font-size: 11px' class='message-pix'>*O desconto de PIX é válido somente para o produto vendido e entregue por Cybelar</p>").insertAfter(".box-payment-pix");
    // },3000)
  }

});

$(window).on("hashchange", () => {
  if (window.location.hash != "#/payment") {
    $(".body-order-form .row-fluid .mini-cart #payment-data-submit").css({
      display: "none",
    });
  }
});

$(document).ajaxSuccess(function () {
  if (window.location.hash != "#/payment") {
    $(".body-order-form .row-fluid .mini-cart #payment-data-submit").css({
      display: "none",
    });
  }
});

$(window).on("orderFormUpdated.vtex",  () => {
  console.log("atualizou3")
  if (window.location.hash != "#/payment") {
    setTimeout(()=>{
      $(".body-order-form .row-fluid .mini-cart #payment-data-submit").css({
        display: "none",
      });
    }, 1000)
  }
});

$(window).on("load", () => {
  setTimeout(() => {
    if($('.message-pix').length == 0){
      $("<p style='color: #e31f1d; text-align: center; font-size: 11px' class='message-pix'>*O desconto de PIX é válido somente para o produto vendido e entregue por Cybelar</p>").insertAfter(".box-payment-pix");

    }
  },3000)
  if (window.location.hash != "#/payment") {
    setTimeout(()=>{
      $(".body-order-form .row-fluid .mini-cart #payment-data-submit").css({
        display: "none",
      });
    }, 1000)
  }
});
