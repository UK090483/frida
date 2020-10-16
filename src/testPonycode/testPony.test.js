const rewire = require("rewire")
const testPony = rewire("./testPony")
const ponyMord = testPony.__get__("ponyMord")
// @ponicode
describe("ponyMord", () => {
  test("0", () => {
    ponyMord("ponicode.com")
  })

  test("1", () => {
    ponyMord("https://bitbucket.org/atlassian/localstack")
  })
})
