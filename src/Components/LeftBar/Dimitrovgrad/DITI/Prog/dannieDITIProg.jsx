import React from 'react';
import '../../../../Content/Content.css';
import {NavLink} from 'react-router-dom';
import firebase from "../../../../../Firestore.js";

class DannieProgDITI extends React.Component{
    constructor() {
        super()
        this.state = {
            prog: []
        }
        
    }
    componentDidMount() {
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        let newState = [];
      
        const progref = db.collection("Город").doc("Димитровград").collection("МИФИ").doc("Специальность").collection("Программирование");
        let getProg = progref.get()
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
                Photo: doc.data().Фото
              })
            });
            this.setState({
                prog: newState
            })
      
          })
            .catch(err => {
                console.log('Error getting document', err);
            });      
      }
    render(){
    return (
        <div>
          {this.state.prog.map(item => (
          <NavLink to="/dimitrovgrad/DITI/Prog/Choose"><div className="block">
              <div className="Photo"><img className="Photo" src={item.Photo} /></div>
              <div className="FIO">{item.Familiya} {item.Imya} {item.Otchestvo}</div><br/>
              <div className="dannieostudente">Данные о студенте:<br/> {item.Dannieostudente} </div>
            <div className="sredball">Средний балл: <br/>{item.SredniyBall}</div>
              </div>
          </NavLink>  
          ))} 
          {/*<div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div> 
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div> 
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
          </div> 
          <div className="block">
              <div className="Photo"><img className="Photo" src={photo}/></div>
              <div className="FIO">Иванова Елена Ивановна</div>
    </div> */}
    </div> 
    );
    }
}

export default DannieProgDITI;