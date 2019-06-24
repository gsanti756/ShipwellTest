# Challenge Shipwell

## Problem

Build a single page React application which will build a shipment itinerary. The app will allow the users to add, edit, and remove stops from the itinerary.

## Acceptance Criteria

- When the page loads, there should be two input fields and a button to add a new stop. The first input field should be the stop name which is required. The second field should be the stop address which is required and must have at least 3 characters to pass validation.

- When the user hits the Add button:

1. The stop address should be validated by the Shipwell API. If the address is unable to be validated, show an error message alerting the user. If the stop is successfully validated, proceed to step 2.

2. After the stop address has been validated, add the stop information to a list below the input fields. The list should show the stop number, name, and
   formatted_address that is returned from the server. The list should also show a checkbox, which can be used to mark the stop as complete.

- After stops have been added to the itinerary list, the user should be able to edit the name/address and also delete stops from the list.

- The user should be able to mark a stop as complete using the checkbox.

## Guidelines

- Build a single page app
- Use react and redux
- Use Shipwell API to validate address input
- Create a repository on GitHub and share the link with us. (if the repo is private share with ‘nfortenberry’)

Bonus

- Avoid using third party libraries such as Material UI, Bootstrap, and create-react-app.

While this is not a super complex app, please ensure production quality and use proper
architecture and system design as if you were building a larger app. Please let us know when
you will be able to deliver your implementation.
