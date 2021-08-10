import './style.scss'
import './header'
import json from './data.json'
import { headerTitle } from './header';

const app = document.getElementById("app");

headerTitle(app, json.homepage.title, json.homepage.subhead, json.homepage.author);

document.querySelector('.nav').innerHTML = `
  <a href="quality-assurance.html">Quality Assurance</a>
  <a href="security.html">Security</a>
  <a href="bad-example.html">Bad Example</a>
`
