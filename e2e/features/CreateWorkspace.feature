Feature: Create a New Workspace

  @deleteWorkspace
  Scenario: Create a new workspace
    Given I log in as "username1"
    When I switch tabs to workspaces
    And I click the create workspace button
    And I create a new workspace with fields:
      |name | test |
    Then I verify if the workspace is created
