import React from 'react';
import './portfolio.css';

class portfolio extends React.Component {
  render() {
    return (
      <div className="rezume">
        <div className="fst_section">
          <div className="photostud">
            &nbsp;
          </div>
          <div className="FIO_spec">
            <div className="FIOstud">
              <input type="text" name="FIO_student" disabled/>
            </div>
              <div>Специальность</div>
              <div className="spec">
                <input type="text" name="spec_student" disabled/>
              </div>
              </div>
            </div>
            <div className="about">
              <h2>О студенте</h2>
              <textarea name="about_student" cols="40" rows="10" disabled></textarea>
            </div>
            <h2>Рекомендации преподавателей</h2>
            <div className="recomendation">
              <input type="text" name="FIO_prepod" disabled value="Иванов Иван Иванович"/>
                <textarea name="about_student" cols="40" rows="4" disabled>Крутой студент, везде учавствует, всё круто!</textarea>
                <input type="text" name="spec_prepod" disabled value="Системное программирование"/>
  </div>
                <div className="recomendation">
                  <input type="text" name="FIO_prepod" disabled value="Иванов Иван Иванович"/>
                    <textarea name="about_student" cols="40" rows="4" disabled>Крутой студент, везде учавствует, всё круто!</textarea>
                    <input type="text" name="spec_prepod" disabled value="Системное программирование"/>
  </div>
                    <div className="recomendation">
                      <input type="text" name="FIO_prepod" disabled value="Иванов Иван Иванович"/>
                        <textarea name="about_student" cols="40" rows="4" disabled>Крутой студент, везде учавствует, всё круто!</textarea>
                        <input type="text" name="spec_prepod" disabled value="Системное программирование"/>
  </div>
</div>
                      );
                      }
                  }
                  
                  export default portfolio;
