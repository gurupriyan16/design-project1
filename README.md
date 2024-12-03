To run the three files (`index1.html`, `Styles.css`, and `script.js`), follow these steps:

---

### 1. **Set Up Files**
   - Place all three files in the same directory. For example:
     ```
     /project-directory
     ├── index1.html
     ├── Styles.css
     ├── script.js
     ```

---

### 2. **Link Files**
   - Ensure the HTML file (`index1.html`) references the correct paths to the CSS and JavaScript files:
     ```html
     <link rel="stylesheet" href="Styles.css">
     <script src="script.js"></script>
     ```

---

### 3. **Run the HTML File**
   - Open the `index1.html` file directly in a web browser:
     1. Navigate to the file in your file explorer.
     2. Double-click on `index1.html`.
     3. Your default browser will open and render the page.

---

### 4. **Test Interactivity**
   - Once the page is loaded:
     - The styles from `Styles.css` will automatically apply.
     - JavaScript functions from `script.js` will execute when triggered (e.g., button clicks or animations).

---

### 5. **Optional: Use a Local Server**
   For more advanced testing (e.g., with audio files or to avoid CORS issues), use a local server:
   - **Method 1: Python (if installed)**
     1. Open a terminal in the project directory.
     2. Run:
        ```bash
        python -m http.server
        ```
     3. Open a browser and navigate to `http://localhost:8000`.

   - **Method 2: Visual Studio Code with Live Server**
     1. Install the **Live Server** extension.
     2. Open the project in VS Code.
     3. Right-click on `index1.html` and select **Open with Live Server**.

---

### 6. **Debugging Tips**
   - If styles don't apply, ensure `Styles.css` is correctly linked and its path matches.
   - If JavaScript doesn't work, check the browser's Developer Tools console (`F12` or `Ctrl+Shift+I`) for errors.

Let me know if you need assistance setting up or debugging!
