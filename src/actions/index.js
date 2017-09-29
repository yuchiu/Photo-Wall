import constants from '../constants'
import superagent from 'superagent'
import sha1 from 'sha1'
import firebase from 'firebase'
import {
    Base64
} from 'js-base64'

/* API call for uploading picture to cloudinary*/
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

/* initialize firebase */

const fbApp = firebase.initializeApp({
    apiKey: "AIzaSyDMqOMvtcfTg-97AF6zLvn-RRXIVGC7Ags",
    authDomain: "real-time-recipe-app.firebaseapp.com",
    databaseURL: "https://real-time-recipe-app.firebaseio.com",
    projectId: "real-time-recipe-app",
    storageBucket: "real-time-recipe-app.appspot.com",
    messagingSenderId: "430390434860"
})
const path = Base64.encode(window.location.href) + '/recipes'

let actions = {
    fetchNewRecipe: (newRecipe, isImgUploaded) => {
        return (dispatch) => {
            //if recipe contain image upload to cloudinary, then fetch to firebase
            if (isImgUploaded) {
                let uploadRequest = superagent.post(url)
                uploadRequest.attach('file', newRecipe.image).field(params).end((err, resp) => {
                    if (err) {
                        alert(err, null)
                    }
                    newRecipe.image = resp.body.secure_url
                    newRecipe.id = firebase.database().ref().push().key
                    fbApp
                        .database()
                        .ref(path + '/' + newRecipe.id)
                        .set(newRecipe)
                    dispatch(actions.fetchRecipeList({}))
                })
            }
            //if recipe has no image replace it with a placeholder img, fetch to firebase
            else {
                newRecipe.id = firebase.database().ref().push().key
                newRecipe.image = 'http://via.placeholder.com/300x250'
                fbApp
                    .database()
                    .ref(path + '/' + newRecipe.id)
                    .set(newRecipe)
                dispatch(actions.fetchRecipeList({}))
            }

        }
    },

    fetcEditRecipe: (editedRecipe, isImgUploaded, id) => {

        return (dispatch) => {
            console.log('inside actions, deleteRecipe, received id : ' + id)
            fbApp
                .database()
                .ref(path + '/' + id)
                .remove()
            dispatch(actions.fetchNewRecipe(editedRecipe, isImgUploaded))
        }
    },

    //------issue with delete, after fetch delete the id of EditRecipeModal component shift in some cases
    fetchDeleteRecipe: (id) => {
        return (dispatch) => {
            console.log('inside actions, deleteRecipe, received id : ' + id)
            fbApp
                .database()
                .ref(path + '/' + id)
                .remove()
            dispatch(actions.fetchRecipeList({}))
        }
    },
    fetchRecipeList: () => {
        return (dispatch) => {
            fbApp
                .database()
                .ref(path)
                .on('value', (snapshot) => {
                    let dataArr = [];
                    //convert returning object into arrays
                    snapshot.forEach(childSnapshot => {
                        let item = childSnapshot.val();
                        item.key = childSnapshot.key;
                        dataArr.push(item);
                    });
                    if (dataArr == []) {
                        console.log('data == []')
                        return
                    }
                    dispatch({
                        type: constants.FETCH_RECIPE_LIST,
                        payload: dataArr.reverse()
                    })
                })
        }
    }
}

export default actions