$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@userStory(\"U01\")"
    }
  ]
});
formatter.background({
  "line": 3,
  "name": "Testing the login functionality (or) feature of an application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "As an existing user",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.as_an_existing_user()"
});
formatter.result({
  "duration": 469222500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Authenication",
  "description": "",
  "id": "login-feature;authenication",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@scenarioID(\"U01-TS01\")"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Open Application and Enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "enter username",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify Msg",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPage.open_Application_and_Enter_url()"
});
formatter.result({
  "duration": 567000,
  "error_message": "java.lang.NullPointerException\r\n\tat org.cucumber.stepDefinations.LoginPage.open_Application_and_Enter_url(LoginPage.java:66)\r\n\tat ✽.Given Open Application and Enter url(src/test/resources/Features/Login.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPage.enter_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage.enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPage.verify_Msg()"
});
formatter.result({
  "status": "skipped"
});
});