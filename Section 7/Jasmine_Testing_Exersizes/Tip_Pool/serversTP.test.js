describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add another server on the submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);

  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTableDataList = document.querySelectorAll('#serverTable tbody tr td');
    expect(curTableDataList.length).toEqual(3);
    expect(curTableDataList[0].innerText).toEqual('Alice');
    expect(curTableDataList[1].innerText).toEqual('$0.00');
    expect(curTableDataList[2].innerText).toEqual('X');

  });

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};

    
  });
});
