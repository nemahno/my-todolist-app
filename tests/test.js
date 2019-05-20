var expect  = require('chai').expect;
var request = require('request');
var chai = require('chai');

var API_URL = "http://192.168.99.100:8080"


var main_page_task_options = {
  uri: API_URL + '/todo',
  method: 'GET'
  };

it('Main Page Content', function(done) {
    request(main_page_task_options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});


var add_task_options = {
  uri: API_URL + '/todo/add/',
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  body: "newtodo=buy some milk",
  method: 'POST'
  };

it('Add Task Page Content', function(done) {
    request(add_task_options, function(error, response, body) {
        expect(response.statusCode).to.equal(302);
        done();
    });
});


var edit_task_options = {
  uri: API_URL + '/todo/edit/0',
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  body: "newedit=Buy Some Milk For The Team",
  method: 'POST'
  };

it('Edit Task Page Content', function(done) {
    request(edit_task_options, function(error, response, body) {
        expect(response.statusCode).to.equal(302);
        done();
    });
});


var delete_task_options = {
  uri: API_URL + '/todo/delete/0',
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  method: 'GET'
  };

it('Delete Task Page Content ', function(done) {
    request(delete_task_options, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
