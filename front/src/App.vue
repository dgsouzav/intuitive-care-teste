<template>

        <div class=fundo>
        <div  class="caixa-fundo"></div>
        <div  class="img-logo"></div>
        <div  class="caixa-principal"></div>
        <span  class="relacao">Relação de Operadoras Ativas ANS</span>
        <div  class="tabela"></div>
        <div  class="barra-pesquisa"></div>
        <span  class="dados">Espaço para a tabela de dados.</span>
        <span  class="pesquisa">Espaço para a barra de pesquisa.</span></div>

</template>
    <script>
        
    </script>

    <style scoped>
          body {
            background: #E5E5E5; 
          }

          .fundo { 
            background-color:rgba(241.00000083446503, 241.00000083446503, 241.00000083446503, 1);
            width:100%;
            height:620px;
            position:absolute;
            overflow:hidden;
          }
          .caixa-fundo { 
            box-shadow:0px 4px 4px rgba(0, 0, 0, 0.10000000149011612);
            background-color:rgba(255, 255, 255, 1);
            width:99%;
            height:64px;
            position:absolute;
            left:0px;
            top:0px;
          }
          .img-logo { 
            width:200px;
            height:46.78899002075195px;
            position:absolute;
            left:600px;
            top:9px;
            background-image:url(image/logo_ic.png);
            background-repeat:no-repeat;
            background-size:cover;
          }
          .caixa-principal { 
            box-shadow:0px 4px 4px rgba(0, 0, 0, 0.05000000074505806);
            background-color:rgba(255, 255, 255, 1);
            width:95%;
            height:508px;
            position:absolute;
            left:24px;
            top:88px;
            border-top-left-radius:4px;
            border-top-right-radius:4px;
            border-bottom-left-radius:4px;
            border-bottom-right-radius:4px;
          }
          .relacao { 
            color:rgba(81.00000277161598, 97.00000181794167, 241.00000083446503, 1);
            width:95%;
            height:25px;
            position:absolute;
            left:36px;
            top:100px;
            font-family:Roboto;
            text-align:left;
            font-size:20px;
            letter-spacing:0;
          }
          .tabela { 
            background-color:rgba(255, 255, 255, 1);
            width: 1274px;;
            height:447px;
            position:absolute;
            left:36px;
            top:137px;
            border:1px solid rgba(0, 0, 0, 1);
          }

          .barra-pesquisa { 
            background-color:rgba(255, 255, 255, 1);
            width:709px;
            height:25px;
            position:absolute;
            left:600px;
            top:100px;
            border:1px solid rgba(0, 0, 0, 1);
          }

          /*.dados { 
            color:rgba(0, 0, 0, 0.3700000047683716);
            width:720px;
            height:24px;
            position:absolute;
            left:400px;
            top:324px;
            font-family:Roboto;
            text-align:left;
            font-size:20px;
            letter-spacing:0;
          }*/
          /*.pesquisa { 
            color:rgba(0, 0, 0, 0.3700000047683716);
            width:380px;
            height:14px;
            position:absolute;
            left:672px;
            top:103px;
            font-family:Roboto;
            text-align:left;
            font-size:16px;
            letter-spacing:0;
          }*/

    </style>