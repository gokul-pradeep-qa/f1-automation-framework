Feature:HR LOGIN
  Scenario: HR login
    Given I am on the HR login page
    When I enter my username and password
    Then I should be redirected to the HR dashboard 
    And I should see the HR dashboard elements