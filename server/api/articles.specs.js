/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')
const Article = db.model('article')

describe('Articles routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/articles', () => {
    const anjaliEmail = 'anjali@gmail.com'

    beforeEach(() => {
      return User.create({
        email: anjaliEmail
      }).then(user => {
        Article.create({
          title: "test article title",
          description: "test article description",
          userId: 1
        })

      })
    })

    it('GET /api/articles', () => {
      return request(app)
        .get('/api/articles')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].email).to.be.equal(codysEmail)
        })
    })
  })
})
