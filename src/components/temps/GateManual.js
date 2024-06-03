import React from "react";
import gate1 from "../../images/gate1.jpg";
import gate2 from "../../images/gate2.jpg";
import gate3 from "../../images/gate3.jpg";
import gate4 from "../../images/gate4.jpg";
import gate5 from "../../images/gate5.jpg";
import gate6 from "../../images/gate6.jpg";
import gate7 from "../../images/gate7.jpg";

function GateManual() {
  return (
    <div className="gate_manual">
      <h4>הוראות הפעלה לשער ראשי</h4>
      לשער שלנו 3 מצבים: <br />
      פתוח לגמרי:
      <br />
      <img src={gate1} alt="gate1" className="gate-image" /><br />
      פתוח: ½ 
      <br />
      <img src={gate2} alt="gate2" className="gate-image" /><br />
      במצב זה הגובל האחורי צריך להיות מתחת לחץ המסמן " 1/2 :"
      <br />
      <img src={gate3} alt="gate3" className="gate-image" /><br />
      פתוח להולכי רגל:
      <br />
      <img src={gate4} alt="gate4" className="gate-image" /><br />
      במצב זה הגובל האחורי צריך להיות מתחת לחץ המסמן "הולכי רגל":
      <br />
      <img src={gate5} alt="gate5" className="gate-image" /><br />
      ועכשיו להוראות:
      <br />
      1. ע"מ שהגובל יעשה את העבודה שלו הוא חייב לשבת על המסרק  
      <br />
      <img src={gate6} alt="gate6" className="gate-image" /><br />
      2. העברת הגובל ממצב " 1/2 " למצב "הולכי רגל" יבוצע רק כאשר
      השער פתוח במלואו.
      <br />
      3. רק במצב חירום מותר להעביר את השער למצב ידני ע"מ להגיע
      לסגירה מלאה.
      <br />
      4. לפני ביצוע סעיף 3 חובה להסיר את הגובל לגמרי
      <br />
      5. קיים גובל קידמי – בגובל זה אסור לגעת.
      <br />
      <img src={gate7} alt="gate7" className="gate-image" /><br />
      פתיחה של השער מתבצעת ע"י השלט או ע"י הכפתור האדום הנמצא
      בצמוד לדלת הכניסה לבוטקה.
    </div>
  );
}

export default GateManual;