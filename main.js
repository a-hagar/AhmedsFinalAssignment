import './style.scss'
import './header'
import json from './data.json'
import { headerTitle } from './header';

const app = document.getElementById("app");

headerTitle(app, json.homepage.title, json.homepage.subhead, json.homepage.author);
