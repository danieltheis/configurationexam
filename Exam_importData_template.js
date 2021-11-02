function importData(context) {

    var dataSource = ''; //Exam: Replace quotes with Scripting API to get Data Source
    var username = ''; //Exam: Replace quotes with Scripting API to get Designer Setting for username 
    var serviceURL = ''; //Exam: Replace quotes with Scripting API to get Designer Setting for service URL 
    var repository = ''; //Exam: Replace quotes with Scripting API to get Designer Setting Value

    var rowset = ''; //Exam: Replace quotes with Scripting API to get rowset
    var tableId = ''; //Exam: Replace quotes with Scripting API to get table id from the rowset
    
    rowset.setSmartParsingEnabled(true);

    var columns = ''; //Exam: Replace quotes with Scripting API to get columns array from the rowset

    var url = serviceURL + '/' + username + '/' + repository + '/personnel';
    var method = 'GET';
    var body = '';
    var headers = {};

    var response = null;

    response = ''; //Exam: Replace quotes with Scripting API to make https request
    var httpCode = ''; //Exam: Replace quotes with Scripting API to get HTTP code from response
    var responseBody = ''; //Exam: Replace quotes with Scripting API to get body from response

    if (httpCode != '200') {
        throw 'service returned HTTP ' + httpCode;
    }

    responseBody = JSON.parse(response.getBody());
    for (var i = 0; i < responseBody.length; i++) {
        var cells = [];
        var row = responseBody[i];

        ''; //Exam: Replace the quotes with Scripting API to create an info-level log of what's in the row variable.  (Hint: use JSON.stringify(row)

        for (var j = 0; j < columns.length; j++) {
            var tempColumn = columns[j];
            var column = '';  //Exam: Replace the quotes with Scripting API to get the column id from the 'tempColumn' variable.
            var value = row[column];
            cells.push(value.toString());
        }

        ''; //Exam: Replace the quotes with Scripting API to create an info-level log of what's in the row variable.  (Hint: use cells.toString())
        ''; //Exam: Replace quotes with Scripting API to add a row to the rowset, passing the cells variable as a parameter
    }
}
