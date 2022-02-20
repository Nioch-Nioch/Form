import React, { useState } from 'react';

function App() {
  const [data, setData] = useState({
    name: "",
    format: "excel",
    email: "",
    schedule: "No Repeat",
    dateTime: "",
    dateDay: ""
  })

  const handleSubmit = (e) => {
    fetch('https://postmanecho.com/post', {
      method: 'POST',
      headers: {"Content-Type": "app/json"},
      body: JSON.stringify(data)
    }).then(()=> {console.log("DataAdded")})
  }

  return (
    <div className="App">
      <form className='modal' onSubmit={handleSubmit}>
        <h1 className='modal__name'>
          <label className='name__title'>
            Export Report
          </label>
        </h1>
        <main className='modal__form'>
          <div className='form__row form__name'>
            <div className='form__row--25'>
              <label className='form__label'>Report name</label>
            </div>
            <div className='form__row--75 '>
              <input type="text" placeholder="Shareablee Report" onChange={(e) => setData({ ...data, name: e.target.value })} className='form__input' />
            </div>
          </div>
          <div className='form__row form__format'>
            <div className='form__row--25'>
              <label className='form__label'>Format</label>
            </div>
            <div className='form__row--75'>
              <input type="radio" name="format" value="excel" onChange={() => setData({ ...data, format: "excel" })} checked={data.format === "excel"} /> Excel
              <input type="radio" name="format" value="csv" onChange={() => setData({ ...data, format: "csv" })} checked={data.format === "csv"} /> CSV
            </div>
          </div>
          <div className='form__row form__mail'>
            <div className='form__row--25'>
              <label className='form__label'>E-mail to</label>
            </div>
            <div className='form__row--75'>
              <input type="email" placeholder="client@company.com" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className='form__input' />
            </div>
          </div>
          <div className='form__row form__schadule'>
            <div className='form__row--25'>
              <label className='form__label'>Schedule</label>
            </div>
            <div className='form__row--75'>
              <input type="radio" name="formatData" value="No Repeat" onChange={() => setData({ ...data, schedule: "No Repeat" })} checked={data.schedule === "No Repeat"} /> No Repeat {"  "}
              <input type="radio" name="formatData" value="Specific Date" onChange={() => setData({ ...data, schedule: "Specific Date" })} checked={data.schedule === "Specific Date"} /> Specific Date  {"  "}
              <input type="radio" name="formatData" value="Daily" onChange={() => setData({ ...data, schedule: "Daily" })} checked={data.schedule === "Daily"} /> Daily {"  "}
              <input type="radio" name="formatData" value="Weekly" onChange={() => setData({ ...data, schedule: "Weekly" })} checked={data.schedule === "Weekly"} /> Weekly
            </div>
          </div>
          {data.schedule === "Specific Date"
            ? <div className='form__row form__every'>
              <div className='form__row--25'>
                <label className='form__label'>Date</label>
              </div>
              <div className='form__row--25'>
                <input type="date" onChange={(e) => setData({ ...data, dateDay: e.target.value })} className='form__input' />
              </div> <span>at</span>
              <div className='form__row--25' style={{ float: "right" }}>
                <input type="time" onChange={(e) => setData({ ...data, dateTime: e.target.value })} className='form__input' />
              </div>
            </div>
            : <></>}
          {data.schedule === "Daily"
            ? <div className='form__row form__every'>
              <div className='form__row--25'>
                <label className='form__label'>Everyday at</label>
              </div>
              <div className='form__row--25'>
                <input type="time" onChange={(e) => setData({ ...data, dateTime: e.target.value })} className='form__input' />
              </div>
            </div>
            : <></>}
          {data.schedule === "Weekly"
            ? <div className='form__row form__every'>
              <div className='form__row--25'>
                <label className='form__label'>Every</label>
              </div>
              <div className='form__row--25'>
                <select value={data.dateDay} onChange={(e) => setData({ ...data, dateDay: e.target.value })} className='form__input'>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>
              <span>at</span>
              <div className='form__row--25' style={{ float: "right" }}>
                <input type="time" onChange={(e) => setData({ ...data, dateTime: e.target.value })} className='form__input' />
              </div>
            </div>
            : <></>}
        </main>
        <div className='modal__bottom'>
          <input type="submit" value="OK" className="modal__button modal__button--black"></input>
          <input type="reset" value="Cancel" className="modal__button"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
