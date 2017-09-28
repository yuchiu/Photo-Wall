import React from 'react'
import superagent from 'superagent'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'

class Images extends React.Component {

  constructor() {
    super()
    this.state = {
      images: []
    }
  }

  uploadeFile(files) {
    console.log('uploadFiles')
    const image = files[0]
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
    let uploadRequest = superagent.post(url)
    uploadRequest.attach('file', image)

    Object
      .keys(params)
      .forEach((key) => {
        uploadRequest.field(key, params[key])
      })

    uploadRequest.end((err, resp) => {
      if (err) {
        alert(err, null)
        return
      }
      const uploaded = resp.body
      let updatedImages = Object.assign([], this.state.images)
      updatedImages.push(uploaded)
      this.setState({images: updatedImages})
    })
  }
  removeImage(e) {
    e.preventDefault()
    console.log('remove ' + e.target.id)
    let updatedImages = Object.assign([], this.state.images)
    updatedImages.splice(e.target.id, 1)
    this.setState({images: updatedImages})
  }
  render() {

    const list = this
      .state
      .images
      .map((image, i) => {
        return (
          <li key={i}>
            <img src={image.secure_url} style={{
              height: 300
            }}/>
            <br/>
            <a
              href="#"
              id={i}
              onClick={this
              .removeImage
              .bind(this)}>remove</a>
          </li>
        )
      })

    return (

      <div>

        Images Component

        <Dropzone onDrop={this
          .uploadeFile
          .bind(this)}/>
        <ol>
          {list}
        </ol>
      </div>
    )
  }

}

export default Images