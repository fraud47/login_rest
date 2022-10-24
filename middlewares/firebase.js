
const axios = require('axios')



exports.sendNotification = async(title,body,address,
    token,product,startDate,
    )=> {

accessToken = 'AAAAMSQ3qhY:APA91bFXrjGL7jAaAWX1OUnmR5rDJPuGZ7CTiAZ-5GaAc-dL75U8byDzOTNtDxFGijHlr6cqrmrS3nSssZ3Aeb6B0J5p_jv_m0fFJKuF0bj9byuvrgTd70BT1k9CbrRYZTRKvsxiJQRa'


const data = JSON.stringify({
  to: `${token}`,
  priority:"high",
  notification:{
    title:'neww from server',
    badge:'1',
    sound:'yes',
    body: 'from server',
    click_action: 'FLUTTER_NOTIFICATION_CLICK'
  }
})

const config = { headers:{
  'Content-Type': 'Application/json',
  'Authorization': `Bearer ${accessToken}`}}

  axios.post('https://fcm.googleapis.com/fcm/send',data,config).then(res => console.log(res))
  .catch(err => console.log(err));

    }
