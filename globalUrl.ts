let apiUrl = "http://localhost:3000/api/";
if(process.env.NODE_ENV != "development"){
    apiUrl="https://we-commerce.vercel.app/api/"
}
export default apiUrl;