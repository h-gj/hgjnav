import './App.css';
import MyCard from './Card'

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center"}}>Gorgine's Works</h1>
      <div style={{ display: "flex", justifyContent: "center", columnGap: "30px" }}>
        <MyCard 
        title="Codinglife" 
        link="http://47.106.82.158/" 
        imgSrc="https://pepperstormmedia.com/wp-content/uploads/2017/08/blog-2355684_960_720.jpg" 
        subtitle="Share & learn knowledge"
        />
        <MyCard 
        title="Cloud Clipboard" 
        link="http://47.106.82.158:8888/" 
        imgSrc="https://cdn.getmidnight.com/45d07b00b0188a892509950ff919e14e/2021/12/Goals-1-.jpeg" 
        subtitle="Copy & paste cross devices"
        />
        <MyCard 
        title="String Converter" 
        link="http://47.106.82.158:8008/" 
        imgSrc="https://www.joydeepdeb.com/images/find-replace.jpg" 
        subtitle="Convert string easily"
        />
        <MyCard
         title="Mingge Calculator" 
         link="http://47.106.82.158:8010/" 
         imgSrc="https://www.moneysavingexpert.com/content/dam/mse/editorial-image-library/homepage/hero-homepage-energy-gas-electricity-piggy-bank-light-bulb-calculator.jpg"
         subtitle="Online calculator"
         />
      </div>
    </div>
  );
}

export default App;
