
it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {
        amount: 15000,
        years: 15,
        rate: 9.6

    };
    expect(calculateMonthlyPayment(values)).toEqual("157.54")
  });
  
  
  it('should return a result with 2 decimal places', function () {
    // ..
    const values = {
        amount: 15050,
        years: 15,
        rate: 6.9

    };
    expect(calculateMonthlyPayment(values)).toEqual("134.43")
  });
  

  it("should have extremely high interest rates", function() {
    /// etc
    const values = {
        amount: 25000,
        years: 20,
        rate: 17.5
    };

    expect(calculateMonthlyPayment(values)).toEqual("376.24")

  });
  
  