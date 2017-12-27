import React, { Component } from 'react';
import Avatar from 'react-avatar';
import './styles.css';


export default class ImageInputControl extends Component {
  constructor(props) {
    super(props);

    this.handleImageChange = this.handleImageChange.bind(this);
    this.adaptFileEventToValue = this.adaptFileEventToValue.bind(this);

    this.state = {
      avatarPreviewUrl: null,
    };
  }

  adaptFileEventToValue(delegate) {
    return (e) => delegate(e.target.files[0]);
  }

  handleImageChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        avatarPreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { input: { onChange, onBlur, ...inputProps, }, username, avatarUrl } = this.props;
    const avatar = this.state.avatarPreviewUrl || avatarUrl;

    return (
      <div>
        {avatar !== null ?
          (
            <label
              style={{ backgroundImage: `url(${avatar})` }}
              className="user-avatar-preview"
              htmlFor="image-file-input"
            />
          ) :
          (
            <label
              htmlFor="image-file-input"
              className="user-avatar-preview"
            >
              <Avatar name={username} size={150} round />
            </label>
          )
        }
        <input
          onChange={(e) => { this.adaptFileEventToValue(onChange)(e); this.handleImageChange(e); }}
          onBlur={this.adaptFileEventToValue(onBlur)}
          type="file"
          id="image-file-input"
          {...inputProps}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}
