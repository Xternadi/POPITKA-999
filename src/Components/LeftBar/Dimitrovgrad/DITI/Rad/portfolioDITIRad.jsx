import React from 'react';
import '../../../../portfolio/portfolio.css';
import firebase from "../../../../../Firestore.js";
import {Choosen} from "./dannieDITIRad";

class portfolioDITIRad extends React.Component {
  constructor() {
    super()
    this.state = {
      Rad: []
    }

  }
  componentDidMount() {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    let newState = [];

    const RadMeh = db.collection("Город").doc("Димитровград").collection("МИФИ").doc("Специальность").collection("Радиация");
    let getRad = RadMeh.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          newState.push({
            id: doc.id,
            Dannieostudente: doc.data().Данные_о_студенте,
            DataRozh: doc.data().Дата_рождения,
            IzuchenniePredmeti: doc.data().Изученные_предметы,
            Osebe: doc.data().О_себе,
            SredniyBall: doc.data().Средний_балл,
            Familiya: doc.data().Фамилия,
            Imya: doc.data().Имя,
            Otchestvo: doc.data().Отчество,
            Photo: doc.data().Фото,
            Specialnost: doc.data().Специальность
          })
        });
        this.setState({ 
          Rad: newState
        })

      })
      .catch(err => {
        console.log('Error getting document', err);
      });
  }
  render() {
    return (
      <div>
      {this.state.Rad.map(item => { 
        if (item.id==Choosen)
         return (
      <div className="rezume">
        
          <div className="fst_section">
            <div className="photostud">
              <img className="photostudp" onClick={this.knop = () => {console.log(Choosen)}} src={item.Photo}/>
          </div>
            <div className="FIO_spec">
              <div className="FIOstud">
                <input type="text" name="FIO_student" className="FIO_student" value={item.Familiya+" "+item.Imya+" "+item.Otchestvo} disabled />
              </div>
              <div className="specialnost">Специальность</div>
              <div className="spec">
                <input type="text" name="spec_student" className="spec_student" value={item.Specialnost} disabled />
              </div>
            </div>
          </div>
          <div className="about">
            <h2>О студенте</h2>
            <textarea name="about_student" className="about_student" cols="40" rows="4" value={item.Osebe} disabled></textarea>
          </div>
          <h2>Характеристика студента</h2>
          <div className="recomendation">
         <textarea name="about_student" className="about_student" cols="40" rows="4" disabled>{item.Dannieostudente}</textarea>
          </div>
         
      </div>
      )})}
      </div>
    );
  }
}

export default portfolioDITIRad;
