$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "As a User I can Search google for Citizens Advice and verifying the search functionality on Citizens Advice Website",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 77167472400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#  // Test: 1"
    }
  ],
  "line": 5,
  "name": "As a User I should be able to search for Citizens Advice on Google",
  "description": "",
  "id": "search-functionality;as-a-user-i-should-be-able-to-search-for-citizens-advice-on-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Google page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I input text \"Citizens Advice\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be navigated to Citizens Advice Website",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdef.iAmOnGooglePage()"
});
formatter.result({
  "duration": 2001638501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Citizens Advice",
      "offset": 14
    }
  ],
  "location": "SearchStepdef.iInputTextInSearchBox()"
});
formatter.result({
  "duration": 576401,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027test.tech.citizensadv.Stepdef.SearchStepdef.iInputTextInSearchBox() in file:/C:/Users/Nehal/IdeaProjects/CitizensAdv_Tech_Test/target/test-classes/\u0027 with pattern [^I input text \"([^\"]*)\" in search box$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Citizens Advice]. \nStep: When I input text \"Citizens Advice\" in search box\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchStepdef.iShouldBeNavigatedToCitizensAdviceWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1283598901,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 10,
      "value": "#    // Test: 2"
    }
  ],
  "line": 11,
  "name": "I can see and verify the list of items on the main navigation header of the home page",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Citizens Advice home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click England as option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am able to see the list of items",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify list of items \"\u003citems\u003e\" on the main navigation header of the home page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;",
  "rows": [
    {
      "cells": [
        "items"
      ],
      "line": 17,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;1"
    },
    {
      "cells": [
        "Benefits"
      ],
      "line": 18,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;2"
    },
    {
      "cells": [
        "Work"
      ],
      "line": 19,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;3"
    },
    {
      "cells": [
        "Debt and money"
      ],
      "line": 20,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;4"
    },
    {
      "cells": [
        "Consumer"
      ],
      "line": 21,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;5"
    },
    {
      "cells": [
        "Housing"
      ],
      "line": 22,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;6"
    },
    {
      "cells": [
        "Family"
      ],
      "line": 23,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;7"
    },
    {
      "cells": [
        "Law and courts"
      ],
      "line": 24,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;8"
    },
    {
      "cells": [
        "Immigration"
      ],
      "line": 25,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;9"
    },
    {
      "cells": [
        "Health"
      ],
      "line": 26,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;10"
    },
    {
      "cells": [
        "More from us"
      ],
      "line": 27,
      "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21623533200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "I can see and verify the list of items on the main navigation header of the home page",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Citizens Advice home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click England as option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am able to see the list of items",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify list of items \"Benefits\" on the main navigation header of the home page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdef.iAmOnCitizensAdviceHomePage()"
});
formatter.result({
  "duration": 652160499,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]Citizens Advice\u003e but was:\u003c[Welcome to ]Citizens Advice\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat test.tech.citizensadv.Stepdef.SearchStepdef.iAmOnCitizensAdviceHomePage(SearchStepdef.java:32)\r\n\tat ✽.Given I am on Citizens Advice home page(src/test/java/resources/featurefile/Search.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchStepdef.iClickEnglandAsOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchStepdef.iAmAbleToSeeTheListOfItems(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Benefits",
      "offset": 22
    }
  ],
  "location": "SearchStepdef.verifyListOfItemsOnTheMainNavigationHeaderOfTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 309200500,
  "status": "passed"
});
formatter.before({
  "duration": 27477609601,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "I can see and verify the list of items on the main navigation header of the home page",
  "description": "",
  "id": "search-functionality;i-can-see-and-verify-the-list-of-items-on-the-main-navigation-header-of-the-home-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Citizens Advice home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click England as option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am able to see the list of items",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify list of items \"Work\" on the main navigation header of the home page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepdef.iAmOnCitizensAdviceHomePage()"
});
formatter.result({
  "duration": 1132967099,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[]Citizens Advice\u003e but was:\u003c[Welcome to ]Citizens Advice\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat test.tech.citizensadv.Stepdef.SearchStepdef.iAmOnCitizensAdviceHomePage(SearchStepdef.java:32)\r\n\tat ✽.Given I am on Citizens Advice home page(src/test/java/resources/featurefile/Search.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchStepdef.iClickEnglandAsOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchStepdef.iAmAbleToSeeTheListOfItems(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 22
    }
  ],
  "location": "SearchStepdef.verifyListOfItemsOnTheMainNavigationHeaderOfTheHomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 233246300,
  "status": "passed"
});
