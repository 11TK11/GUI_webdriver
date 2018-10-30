Feature: Create a New Project

  @deleteProject
  Scenario: Create a new project with privacy set to public
    Given I log in as "username1"
    When I click the create project button
    And I create a new project with fields:
      | name    | test |
      | account | newAccount     |
      | privacy | public         |

    Then I verify if the project is created
