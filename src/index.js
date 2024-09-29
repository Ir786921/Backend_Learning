import app from "./app/App.js"
const port = 8000;

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})