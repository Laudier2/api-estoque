const request = require("supertest")
const app = require ("./dist/src/index.js")
const { json } = require("body-parser")

describe("Test my app server", function() {
  it("should list a server", async function(){
    const req = await request(app).get("/")

    console.log(req.body)

    //expect(req).toHaveProperty("acl")
    expect(req.body).toBe(undefined)
  })
})