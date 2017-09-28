import constants from '../constants'
import superagent from 'superagent'
import sha1 from 'sha1'

const cloudName = 'dushlwfma'
const url = "https://api.cloudinary.com/v1_1/" + cloudName + '/image/upload'
const timestamp = Date.now() / 1000
const uploadPreset = 'afzhx4nk'
const API_SECRET = 'FSFPWBxpBKQS5pb_MVjEg6ZvbaQ'
const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + API_SECRET

const signature = sha1(paramsStr)

const params = {
    'api_key': '251617577614387',
    'timestamp': timestamp,
    'upload_preset': uploadPreset,
    'signature': signature
}


let actions = {
    fetchSave: (recipe) => {
        return (dispatch) => {
            console.log('inside actions, fetchSave, received : ' + JSON.stringify(recipe))
            let uploadRequest = superagent.post(url)
            uploadRequest.attach('file', recipe.image).field(params).end((err, resp) => {
                if (err) {
                    console.log(err, null)
                    return
                }
                recipe.image = resp.body.secure_url
                dispatch({
                    type: constants.FETCH_SAVE,
                    payload: recipe
                })
            })

        }
    }
}

export default actions