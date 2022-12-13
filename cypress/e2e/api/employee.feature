Feature: duckduckgo.com
  Scenario: Add Employee record 
    Given I Set POST employee service api endpoint
    When I Send a POST HTTP request 
    # Then I receive valid Response