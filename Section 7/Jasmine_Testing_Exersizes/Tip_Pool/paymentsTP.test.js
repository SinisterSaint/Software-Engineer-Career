describe("Payments test  (with setup and tear-dwon", function (){
    beforeEach(function () {
        billAmtInput.value = 150;
        tipAmtInput.value = 25;    
    });

    it('should add a new payment to AllPayments on submitPaymentInfo()', function (){
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('200');
        expect(allPayments['payment1'].billAmt).toEqual('20');
        expect(allPayments['payment1'].billAmt).toEqual(20);
    });

    it('should not add a new payment on submitPaymentInfo() with empty input', function (){
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should update payment on #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTableDataList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTableDataList.length).toEqual(4);
        expect(curTableDataList[0].innerText).toEqual('$200');
        expect(curTableDataList[1].innerText).toEqual('$20');
        expect(curTableDataList[2].innerText).toEqual('20%');
        expect(curTableDataList[4].innerText).toEqual('X');
    });
 
    it('should create a new payment on create on createCurPayment()', function () {
        let newPayment = {
            billAmt: '200',
            tipAmnt: '20',
            tipPercent: 20,
        }
    });
    
    it('should not create a new payment with empty data on createCurPayemnt()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });
    
    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTBody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});
