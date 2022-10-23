(function () {
    
    function MockPay({amount, keyId, onSuccess, onFailure, customer, themeColor, currency_user_defined, business_icon, business_title, order_id, complete_payment_url}) {
        this.amount = amount;
        this.keyId = keyId;
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
        this.business_icon = business_icon || "https://dashboard.rapyd.net/images/rapyd-logo-black.svg";
        this.business_title = business_title || "Rapyd";
        this.order_id = order_id || (String.fromCharCode(65 + Math.floor(Math.random() * 26))+ Date.now()) ;
        this.currency_user_defined = currency_user_defined || 'USD';
        currency_user_definedx = currency_user_defined;
        customerx = customer || {};
        this.complete_payment_url = complete_payment_url;
        complete_payment_urlx = complete_payment_url;

        console.log(customer);
        this.themeColor = themeColor || "#EC4899";
        addresses_global = [];
        countriesdata_global = [];
        
        customer_name_global = "";
        customer_email_global = "";

        customer_phone_global = "";
        customer_country_code_global = "";

        customer_billing_name_global = "";

        customer_billing_phone_global = "";
        customer_billing_countrycode_global = "";

        customer_billing_addressline1_global = "";

        customer_billing_addressline2_global = "";

        customer_billing_country_global = "";

        customer_billing_state_global = "";

        customer_billing_city_global = "";

        customer_billing_zip_global = "";


        customer_id_global = "";


        customer_address_global_id = "";


        discount_global= 0;

        
        





    }
    
    const styleSheetExists = !!document.getElementById('mockpay_checkout_stylesheet');
    if (!styleSheetExists) {
        const head = document.getElementsByTagName('head')[0];
        const stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.href = '../checkout.css';
        stylesheet.id = 'mockpay_checkout_stylesheet';
        head.appendChild(stylesheet);
    }

    function setValidity(node, isValid) {
        if (isValid) {
            node.classList.remove('error');
            return;
        }
        node.classList.add('error');
    }

}