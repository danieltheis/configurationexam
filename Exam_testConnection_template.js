function testConnection(context) {

    var dataSource = ''; //Exam: Replace quotes with Scripting API to get Data Source
    var username = ''; //Exam: Replace quotes with Scripting API to get Designer Setting Value
    var serviceURL = ''; //Exam: Replace quotes with Scripting API to get Designer Setting Value
    var repository = ''; //Exam: Replace quotes with Scripting API to get Designer Setting Value

    var url = serviceURL + '/' + username + '/' + repository + '/personnel';
    ai.log.logVerbose('url: ' + url);
    var method = 'GET';
    var body = '';
    var headers = {};

    var response = null;

    response = ''; //Exam: Replace quotes with Scripting API to make https request
    var httpCode = ''; //Exam: Replace quotes with Scripting API to get HTTP code from response
    var responseBody = ''; //Exam: Replace quotes with Scripting API to get body from response

    if (httpCode != '200') {
        throw 'service returned HTTP ' + httpCode;
    } else {
        ai.log.logInfo('response from service -->', responseBody);
        return true;
    }
}
