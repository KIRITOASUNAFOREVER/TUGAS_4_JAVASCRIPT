function urutanTinggiBadan(tinggiBadanEdward,tinggiBadanFiona,tinggiBadanJulianto) {
  if(tinggiBadanEdward > tinggiBadanFiona){
    if(tinggiBadanEdward > tinggiBadanJulianto){
      if(tinggiBadanFiona > tinggiBadanJulianto){
        console.log("Urutan Tertinggi ke Terpendek");
        console.log("1) Edward   : " +tinggiBadanEdward.toString());
        console.log("2) Fiona    : " +tinggiBadanFiona.toString());
        console.log("3) Julianto : " +tinggiBadanJulianto.toString());
      }else{
        console.log("Urutan Tertinggi ke Terpendek");
        console.log("1) Edward   : " +tinggiBadanEdward.toString());
        console.log("2) Julianto : " +tinggiBadanJulianto.toString());
        console.log("3) Fiona    : " +tinggiBadanFiona.toString());
      }
    }
  }
  if(tinggiBadanFiona > tinggiBadanEdward){
    if(tinggiBadanFiona > tinggiBadanJulianto){
      if(tinggiBadanEdward > tinggiBadanJulianto){
        console.log("Urutan Tertinggi ke Terpendek");
        console.log("1) Fiona    : " +tinggiBadanFiona.toString());
        console.log("2) Edward   : " +tinggiBadanEdward.toString());
        console.log("3) Julianto : " +tinggiBadanJulianto.toString());
      }else{
        console.log("Urutan Tertinggi ke Terpendek");
        console.log("1) Fiona    : " +tinggiBadanFiona.toString());
        console.log("2) Julianto : " +tinggiBadanJulianto.toString());
        console.log("3) Edward   : " +tinggiBadanEdward.toString());
      }
    }
  }
  if(tinggiBadanJulianto > tinggiBadanEdward){
    if(tinggiBadanJulianto > tinggiBadanFiona){
      if(tinggiBadanEdward > tinggiBadanFiona){
        console.log("Urutan Tertinggi ke Terpendek");
        console.log("1) Julianto : " +tinggiBadanJulianto.toString());
        console.log("2) Edward   : " +tinggiBadanEdward.toString());
        console.log("3) Fiona    : " +tinggiBadanFiona.toString());
      }else{
        console.log("Urutan Tertinggi ke Terpendek");
        console.log("1) Julianto : " +tinggiBadanJulianto.toString());
        console.log("2) Fiona    : " +tinggiBadanFiona.toString());
        console.log("3) Edward   : " +tinggiBadanEdward.toString());
      }
    }
  }
}

let tinggiBadanEdward = 10;
let tinggiBadanFiona = 15;
let tinggiBadanJulianto = 10;
urutanTinggiBadan(tinggiBadanEdward,tinggiBadanFiona,tinggiBadanJulianto);
