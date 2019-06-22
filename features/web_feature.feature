Feature: Google search

  Scenario: Google search should give results
    Given I navigate to the url "http://www.google.com"
    When I do a search for "cats"
    Then I should see more than 500 results

  Scenario: Google search should not give results for crazy searches
    Given I navigate to the url "http://www.google.com"
    When I do a search for "\"Best places to go hike with your dragon\""
    # At the time of writing this nobody has answered this exact question yet.
    Then I should see the text "No results found for"
