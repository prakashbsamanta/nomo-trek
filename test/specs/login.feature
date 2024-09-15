Feature: Login Functionality

  Scenario Outline: Verify user login with multiple sets of credentials
    Given the user launches the app
    When the user enters '<username>' and '<password>'
    And the user taps on the login button
    Then the error message '<errorMessage>' should be displayed
    Then the user should be on the homepage if login is successful

    Examples:
      | username                                     | password                               | errorMessage                                                 |
      | standard_user                                | secret_sauce                           |                                                              |
      | standard_user                                |                                        | Password is required                                         |
      | wrong_user                                   | wrong_pass                             | Username and password do not match any user in this service. |
      |                                              |                                        | Username is required                                         |
      | locked_out_user                              | secret_sauce                           | Sorry, this user has been locked out.                        |
      |                                              | secret_sauce                           | Username is required                                         |
      | " special@#$%^&* "                           | " special@#$%^&* "                     | Username and password do not match any user in this service. |
      | "special_user"                               | " password!@#$ "                       | Username and password do not match any user in this service. |
      | "verylongusernamethatisdefinitelytoolong123" | secret_sauce                           | Username and password do not match any user in this service. |
      | standard_user                                | verylongpasswordthatexceedslimits12345 | Username and password do not match any user in this service. |
      | "  standard_user  "                          | secret_sauce                           | Username and password do not match any user in this service. |
      | standard_user                                | "    secret_sauce   "                  | Username and password do not match any user in this service. |
      | alice@example.com                            |                               10203040 | Username and password do not match any user in this service. |
      |                                      1@2.com | f-o-o                                  | Username and password do not match any user in this service. |
      | bob@example.com                              |                                        | Password is required                                         |
      | bob@example.com                              |                               10203040 | Username and password do not match any user in this service. |
      | ' OR '1'='1                                  | secret_sauce                           | Username and password do not match any user in this service. |
