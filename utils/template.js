const templateHTML = `
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <style>{{styles}}</style>
    <body>
        <div class="OG">
            <div class="left">
                    <div class="divimg"></div>
            </div>
            <div class="right">
                <div class="empty"></div>
                <div class="pagaA">
                    Paga a 
                    <b>{{public_name}}</b>
                </div>
                <div class="url">
                    clip.mx/@{{alias}}
                </div>
                <div class="empty"></div>
                <div class="empty"></div>
                <div class="empty"></div>
                <div class="empty"></div>
            </div>
        </div>     
    </body> 
</html>`;

const templateStyles = `
body {
  width: 600px;
  height: 315px;
}

.OG{
    display: flex;
    width: 600px;
    height: 315px;
    background-image: url(https://raw.githubusercontent.com/lharo-clip/Assets/main/OG_img.jpg);
}

.left{
    width: 240px;
    height: 240px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center; 
}

.right{
    display: grid;
    border-radius: 25px;
    width: 360px;
    height: auto;
    text-align: center;
}
.pagaA{
    align-self: center;
    font-size: large;
    color: #000000;
}

.url{
    font-size: large;
    color: #fa4d09;
}

.divimg{
    width: 160px;
    height: 160px;
    border-radius: 300px;
    background: #ffffff;
    background-image: url(https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-size: cover;
}
`;

module.exports = { templateHTML, templateStyles };