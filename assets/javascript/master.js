 const div = document.querySelectorAll('.xo>div')
      let uder1 = '❌'
      let user2 = '⭕'
      let move =''
      let turn = parseInt(Math.random()*2)



      if(turn){
        alert('user1 start!')
        move ='❌'
      }else{
        alert('user2 start!')
        move ='⭕'
      }
      console.log(move);



      div.forEach((val)=>{
        val.addEventListener('click',()=>{
          if(val.innerText==''){
            val.innerText = move
          }else{
            console.log('dont click!');
          }
          if(move =='❌'){
            move='⭕'
          }else{
            move='❌'
          }
          /////////////////// 
          checkWinner()
        })
      })



      function checkWinner(){
          let winner =''
          switch(true){
          case (div[0].innerText==div[1].innerText && div[0].innerText==div[2].innerText) && (div[0].innerText!='') : winner = div[0].innerText ; break;
          case (div[3].innerText==div[4].innerText && div[3].innerText==div[5].innerText) && (div[3].innerText!='') : winner = div[3].innerText ; break;
          case (div[6].innerText==div[7].innerText && div[6].innerText==div[8].innerText) && (div[6].innerText!='') : winner = div[6].innerText ; break;
          case (div[0].innerText==div[3].innerText && div[0].innerText==div[6].innerText) && (div[0].innerText!='') : winner = div[0].innerText ; break;
          case (div[1].innerText==div[4].innerText && div[1].innerText==div[7].innerText) && (div[1].innerText!='') : winner = div[1].innerText ; break;
          case (div[2].innerText==div[5].innerText && div[2].innerText==div[8].innerText) && (div[2].innerText!='') : winner = div[2].innerText ; break;
          case (div[0].innerText==div[4].innerText && div[0].innerText==div[8].innerText) && (div[0].innerText!='') : winner = div[0].innerText ; break;
          case (div[2].innerText==div[4].innerText && div[2].innerText==div[6].innerText) && (div[2].innerText!='') : winner = div[2].innerText ; break;
        }

        console.log('winner is:' + winner);
        let popup = document.querySelector('.popUp')
        let board = document.querySelector('.popUp>p')


        if(winner =='❌'){
        //   alert('user1 win : ❌')
          popup.style.scale = '1'
          board.innerText ='user1 win :❌'
          createConfetti()
          setTimeout(() => {
            location.reload()
          }, 2000);
        }else if(winner =='⭕'){
        //   alert('user2 win : ⭕')
           popup.style.scale = '1'
           board.innerText ='user2 win :⭕'
           createConfetti()
          setTimeout(() => {
            location.reload()
          }, 2000);
        } 

        function createConfetti(){
        const emojis = ['👑','🎉','✨','🎊','⭐','👑','🎉','✨','🎊','⭐'];
        const container = document.body;

        for(let i = 0; i < 40; i++){
        const emoji = document.createElement('div');
        emoji.classList.add('emoji-fall');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = (Math.random() * 2 + 2) + 's';
        emoji.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
        container.appendChild(emoji);

        // بعد از تموم شدن انیمیشن، حذفش کن تا صفحه سنگین نشه
        setTimeout(() => {
            emoji.remove();
        }, 4000);
      }
    }
}