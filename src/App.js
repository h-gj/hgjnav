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
        subtitle="Share knowledge & skills"
        />
        <MyCard 
        title="Cloud Clipboard" 
        link="http://47.106.82.158:8888/" 
        imgSrc="https://p3.itc.cn/q_70/images03/20210930/d83b2cb05e0d4174a447a5fb05191fd7.jpeg" 
        subtitle="Copy & paste cross devices"
        />
        <MyCard 
        title="String Converter" 
        link="http://47.106.82.158:8008/" 
        imgSrc="https://5b0988e595225.cdn.sohucs.com/images/20171107/79329af0a69d4872a08090c9b4f7446c.jpeg"
        subtitle="Replace curl host to local"
        />
        <MyCard
         title="Mingge Calculator" 
         link="http://47.106.82.158:8010/" 
         imgSrc="https://img1.baidu.com/it/u=385016547,1164316819&fm=253&fmt=auto&app=138&f=JPEG?w=543&h=500"
         subtitle="A special caculator for my cousin"
         />
      </div>
    </div>
  );
}

export default App;
