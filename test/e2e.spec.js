/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const Actions = require('nightmare-react-utils').Actions;
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../src/js/app'

Nightmare.action(...Actions);


let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', function() {
  this.timeout(12000);
  this.slow(4000);
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('title').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('movie-finder');
      })
  );

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
    
  it('should have the header in an H1', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('h1.pageTitle').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Lamest Movie Search Ever!');
      })
  );  
  it('should include an input to search for movies', () =>
  nightmare
    .goto(url)
    .react.findAll('input.searchBar')
    .then((element) => {
      expect(element.length).to.not.equal(0);
      expect(element[0]).to.not.be.null;
    })
  );
  it('should include a button to search with', () =>
  nightmare
    .goto(url)
    .react.findAll('button.submit')
    .then((element) => {
      expect(element.length).to.not.equal(0);
      expect(element[0]).to.not.be.null;
    })
  );
  // it('should respond with 10 movies from search', () =>
  //     nightmare
  //     .goto(url)
  //     .type('input.searchBar','rocky')
  //     .click('button.submit')
  //     .wait('.moviePoster')
  //     .evaluate(() => document.querySelectorAll('input.moviePoster'))
  //     .then(posters => expect(posters).to.equal(10))
  //   );
  
});

  
