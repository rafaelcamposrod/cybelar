var CYBELAR_Checkout = {
    paymentBtnAppend: function () {
      $(document).ajaxSuccess(function (t, n, e, i) {
        e.url.indexOf("/api/checkout/pub/orderForm") &&
          window.innerWidth > 768 &&
          ($(".body-order-form .row-fluid .mini-cart #payment-data-submit").appendTo($(".body-order-form .row-fluid .mini-cart")),
          $(".body-order-form .row-fluid .mini-cart #payment-data-submit-clone").length ||
            ($(".body-order-form .row-fluid .mini-cart .cart-fixed").before('<button id="payment-data-submit-clone" class="submit btn btn-success btn-large btn-block">Finalizar compra</button>'), CYBELAR_Checkout.paymentBtnCloneClick()));
      });
    },

    paymentBtnCloneClick: function () {
      $(".body-order-form .row-fluid .mini-cart #payment-data-submit-clone").click(function () {
        $(".body-order-form .row-fluid .mini-cart #payment-data-submit").trigger("click");
      });
    },

    cartEmptyClass: function () {
      $(window).on("orderFormUpdated.vtex", function (t, n) {
        0 == n.items.length && $("body").addClass("cart-empty");
      });
    },

    shippingOpened: function () {
      const t = setInterval(() => {
        $("#shipping-preview-container #shipping-calculate-link").length && ($("#shipping-preview-container #shipping-calculate-link").trigger("click"), clearInterval(t));
      });
    },

    triggerCreditCard: function () {
      var t = 0;
      $(document).ajaxSuccess(function (n, e, i, o) {
        -1 != i.url.indexOf("/orderForm") && "#/payment" == window.location.hash && 0 == t && ($("#payment-group-creditCardPaymentGroup").trigger("click"), t++);
      }),
        window.addEventListener("hashchange", function () {
          "#/payment" == window.location.hash && $("#payment-group-creditCardPaymentGroup").trigger("click");
        });
    },

    giftOpened: () => {
      $(document).ajaxSuccess(function (t, n, e, i) {
        if (-1 != e.url.indexOf("/orderForm")) {
          const t = setInterval(() => {
            $(".body-cart .container-cart .summary-template-holder .cart-totalizers .coupon-data a.link-coupon-add").length &&
              ($(".body-cart .container-cart .summary-template-holder .cart-totalizers .coupon-data a.link-coupon-add").trigger("click"), clearInterval(t));
          });
        }
      });
    },

    triggerBtnPayment: () => {
      function t() {
        $(".accordion-toggle .payment-edit-link .link-box-edit").unbind("click"),
          $(".accordion-toggle .payment-edit-link .link-box-edit").click(function () {
            $(".btn-go-to-payment-wrapper #btn-go-to-payment").trigger("click");
          });
      }
      window.addEventListener("hashchange", () => {
        "#/shipping" === location.hash && t();
      }),
        t();
    },

    selectOpened: () => {
      console.log("selectOpned")
      // srp-delivery-select
      $(".srp-delivery-select").prop("multiple", true);
    },

    init: function () {
      CYBELAR_Checkout.paymentBtnAppend(), CYBELAR_Checkout.cartEmptyClass(), CYBELAR_Checkout.shippingOpened(), CYBELAR_Checkout.giftOpened(), CYBELAR_Checkout.triggerCreditCard(), CYBELAR_Checkout.triggerBtnPayment(), CYBELAR_Checkout.selectOpened();
    },
  };
  
  $(document).ready(function () {
    CYBELAR_Checkout.init();
  });