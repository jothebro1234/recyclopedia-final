import React from 'react';
import "./calculator.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pb_under: 0,
      pl_more: 0,
      agh_under: 0,
      agh_more: 0,
      glasser_under: 0,
      glasser_more: 0,
      totalAmount: 0,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value ? Number(value) : 0 });
  };

  calculateTotalAmount = () => {
    const { pb_under, pl_more, agh_under, agh_more, glasser_under, glasser_more } = this.state;
    const totalAmount = 
      (pb_under * 0.05) +
      (pl_more * 0.10) +
      (agh_under * 0.05) +
      (agh_more * 0.10) +
      (glasser_under * 0.05) +
      (glasser_more * 0.10);

    this.setState({ totalAmount });
    if (this.props.onCalculateTotal) {
      this.props.onCalculateTotal(totalAmount);
    }

    const demographics = {
      'Saved Animals': Math.ceil((pb_under + agh_under + glasser_under) * 0.1),
      '60W Lightbulb (hours)': Math.ceil((pl_more + pb_under) * 0.5),
      'Trees Saved': Math.ceil((pb_under + agh_under + glasser_under) * 0.0085),
      'Landfill Space (cubic yards)': Math.ceil((pb_under + pl_more) * 0.5),
      'Oil Saved (barrels)': Math.ceil((pl_more + agh_more) * 0.001),
      'Energy Saved (kWh)': Math.ceil((pb_under + glasser_under) * 0.3),
      'CO2 Reduced (lbs)': Math.ceil((pb_under + agh_under) * 0.3),
    };

    if (this.props.onCalculateDemographics) {
      this.props.onCalculateDemographics(demographics);
    }
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className="wide1">
            <h2>Under 24 ounces</h2>
            <div className='question'>
              <label>
                Plastic bottles:
                <input type="number" name="pb_under" value={this.state.pb_under} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className='question'>
              <label>
                Aluminum cans:
                <input type="number" name="agh_under" value={this.state.agh_under} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className='question'>
              <label>
                Glass bottles:
                <input type="number" name="glasser_under" value={this.state.glasser_under} onChange={this.handleInputChange} />
              </label>
            </div>
          </div>

          <div className="wide2">
            <h2>Over 24 ounces</h2>
            <div className='question'>
              <label>
                Plastic bottles:
                <input type="number" name="pl_more" value={this.state.pl_more} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className='question'>
              <label>
                Aluminum cans:
                <input type="number" name="agh_more" value={this.state.agh_more} onChange={this.handleInputChange} />
              </label>
            </div>
            <div className='question'>
              <label>
                Glass bottles:
                <input type="number" name="glasser_more" value={this.state.glasser_more} onChange={this.handleInputChange} />
              </label>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '2vh' }}>
          <button className="calculate" onClick={this.calculateTotalAmount}>Calculate</button>
        </div>

        <div className="total" style={{ textAlign: 'center', fontSize: '2.5rem', marginTop: '2vh'}}>
          <strong>Total Amount: </strong> ${this.state.totalAmount.toFixed(2)}
        </div>
      </div>
    );
  }
}

export default Calc;
