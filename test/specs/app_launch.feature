@skip
Feature: App Launch

  Scenario: Verify the app opens and the SwagLabs icon is displayed
    Given the user launches the app
    Then the Swag Labs Icon should be displayed
    Then the robot graphic should be displayed
