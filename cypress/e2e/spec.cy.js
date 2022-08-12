describe('empty spec', () => {
  it('passes', () => {
    
//     Have the following page:
// https://dribbble.com/shots/popular
// Create a solution(automated checks using any framework/programming language) where you
// need to include the following:
// 1. Log into the app
// 2. Go to the dashboard (where ‘All’ option is selected by default) and click on Filters
// 3.Filter by 'Colors' and select Black option and check that dropdown has the
// option selected
// 4. Clear Colors filter and after that go to “Tags” filter and search by “food” text
// 5. Verify the result: check only the first row(the first 4 cards- the length )
// 6.After that hover over the first card and check the presence of the 2 icons from the right corner

    
    cy.visit('https://dribbble.com/shots/popular')
  })
})