# React TV Show App
- Creating React app based on a TV show
- Let users search characters by name
- Display images of all characters
- Show character information on hovering each character image: name, nickname, birthday, status (alive/dead)

## Getting Started

### Create React App

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter
4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`
5. Install dependencies:
    - Open terminal and run `npm install`
6. Delete: `public/vite.svg`, `src/assets`, `src/index.css`
    1. Remove `import './index.css'` from `src/main.jsx`
    2. Modify `src/App.jsx` and Remove:
        - `import reactLogo from './assets/react.svg'`
        - `import viteLogo from '/vite.svg'`
        
    3. Clear contents in `src/App.css`
7. Install Packages: 
    ```
    npm i axios
    ```

8. Start Development Server: 
    ```
    npm run dev 
    ```