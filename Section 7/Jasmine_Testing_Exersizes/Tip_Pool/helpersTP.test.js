describe("Utitlies test (with setup and tear-dwon)", function () {
    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should add the total amount of tps of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 300;
        tipAmtInput = 60;

        submitPaymentInfo();

        expect(sumPaymentTotal(tipAmt)).toEqual(80);
    });

    it('should add up the sum of tip percentage of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 23)).toEqual(23);
        expect(calculateTipPercent(111, 10)).toEqual(10);
    });

    it('should create a new td and append to tr on appendTd(tr, value', function () {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).ToEqual('test');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        summeryTds[0].innerHTML = '';
        summeryTds[1].innerHTML = '';
        summeryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allpayments = {};
        paymentId = 0;
    });
});
