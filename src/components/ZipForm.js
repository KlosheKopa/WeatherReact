import React, {Component} from 'react';

class ZipForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
    this.inputChanged = this.inputChanged.bind(this); 
    this.submitZipCode = this.submitZipCode.bind(this); 
  }

  render () {
    return  (
      <div className="zip-form">
        <form id="zipForm" onSubmit={this.submitZipCode}>
          <div className="flex-parent">
            <label htmlFor="zipcode">Zip</label>
            <input className="form-control" type="text" id="zipcode" name="zipcode"  
              value={this.state.zipcode} 
              onChange={this.inputChanged}
              required />
            <button type="submit" className="btn btn-success">Get the forcast!</button>
          </div>
        </form>
      </div>
    );
  }

  inputChanged(e) {
    const {value} = e.target;
    this.setState( {zipcode: value} );
  }  

  submitZipCode (e) {
    e.preventDefault();
    const { zipcode } = this.state;
    const { onSubmit } = this.props;
    onSubmit(zipcode);
    this.setState( {zipcode : ''} );
    }
}

export default ZipForm;