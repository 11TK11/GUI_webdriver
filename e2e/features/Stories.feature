Feature: Create a new Story
    
Scenario: Create a new Story
    Given user is on Pivotal Page
    When I click the Add story button
    And I create a new story with fields:
       | name    | story description |
    And I click on save button
    Then I verify if the Story is created
    Then I verify the use requester is the user logged