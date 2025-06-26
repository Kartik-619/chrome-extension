# chrome-extension
 A lightweight Chrome extension to toggle dark mode on any website and block distracting domains. <br>Built using Manifest V3, with dynamic rule control and a simple popup UI.<br>
<h1> Personal Chrome Extension — Dark Mode & Site Blocker 🚀</h1><br>
A lightweight and beginner-friendly Chrome Extension that allows users to:
<li>- 🌓 Toggle dark mode on any website</li>
<li>- 🚫 Block distracting domains (e.g. Facebook, YouTube)</li><br>
Built from scratch using Manifest V3 and native Chrome Extension APIs, this project taught me how to build a real browser tool that interacts with tabs, scripts, and declarative rules.
<hr>
<h2><b>💡 What I Learned</b></h2><br>
This project started with curiosity and ended with confidence. Here’s what I explored and implemented:
<br>
<br>- Setting up a valid manifest.json using Manifest V3
<br>- Communicating between popup UI and service workers using chrome.runtime.sendMessage
<br>- Using chrome.scripting.executeScript to inject custom styling into active tabs
<br>- Blocking specific URLs with chrome.declarativeNetRequest (static and dynamic rules)
<br>- Handling edge cases: restricted chrome:// URLs, serialization errors, and background script persistence
<br>- Designing a clean popup with HTML/CSS/JS<br>
<hr>
<h2>🧩 Chrome APIs Use</h2>
<img src="asset/asset.png" width="400"/>
<hr>
<h1> How to Use</h1>
<br>- Clone or download the repo
<br>- Visit chrome://extensions/ in Chrome
<br>- Enable Developer Mode
<br>- Click Load Unpacked and select the extension folder
<br>- Open any website → Click the extension icon → Toggle dark mode or block domains

