import Button from '@mui/material/Button';
import swal from 'sweetalert'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { getAllAdvertiser, login, signIn } from '../api';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom"

export const Login = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState({})
    const nav = useNavigate()

    const send = () => {
        if (user.email && user.password && user.phone) {
            login(user)
                .then(x => {
                    swal("ברוך הבא", "", "success");
                    //ניתוב לדף הבית
                    nav('/homePage')
                })
                .catch(async x => {
                    debugger

                    // swal("!!!!שגיאה ", `שגיאה מספר ${x.status.code}`, "error");
                    if (x.status == 404) {

                        // if (confirm("המערכת לא אמתה את הפרטים האם את/ה רוצה להרשם")) {
                        signIn(user).then(x => {
                            swal("ברוך הבא", "ההרשמה בוצעה בהצלחה", "success");
                            //ניתוב לדף הבית
                            nav('/homePage')
                        })
                            .catch(err => {
                                if (x.status = 300)
                                    swal("!!!!שגיאה ", ` הערכים שהכנסת אינם תקינים הכנס שנית`, "error");
                                //לברר מה הסטטוס הנכון
                                else
                                    swal("!!!!שגיאה ", ` ${err.message}`, "error");
                            })
                        // }
                        // else{
                        //     swal("חבל", "אם אתה מתחרט תמיד תוכל להרשם", "success");

                        // }


                    }



                })
        }
        else {
            swal("!!!!שגיאה ", "מלא את כל השדות", "error");
        }

    }
    const checMail = (value) => {
        const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!value.match(mailRegex)) {
            setError({ ...error, email: 'הכנס כתובת  מייל תקינה' })
        }
        else {
            setError({ ...error, email: '' })
        }
        console.log(error.email);

    }
    const checFhone1 = (value) => {

        const nRegex = /^[0-9]{7,10}$/
        if (value.length > 7 && value.length < 10 || value.length < 7 && value.length > 10 || !value.match(nRegex)) {
            setError({ ...error, phone1: 'הכנס מספר פלאפון תקין' })
        }
        else {
            setError({ ...error, phone1: '' })
        }
        console.log(error.phone1);

    }
    const checFhone2 = (value) => {
        const nRegex = /^[0-9]{7,10}$/
        if (value.length > 7 && value.length < 10 || value.length < 7 && value.length > 10 || !value.match(nRegex)) {
            setError({ ...error, phone2: 'הכנס מספר פלאפון תקין' })
        }
        else {
            setError({ ...error, phone2: '' })
        }
        console.log(error.phone2);

    }
    const checPass = (value) => {
        if (value.length < 5 || value.length > 10) {
            setError({ ...error, pass: 'סיסמה תקינה בין 5 ל-10 תווים' })
        }
        else {
            setError({ ...error, pass: '' })
        }
        console.log(error.pass);

    }
    return <>
        <div className='login'>
            <h2 id="h4">כניסה</h2>
            <TextField id="outlined-basic" label=" הכנס אימייל" variant="outlined" onBlur={e => { setUser({ ...user, email: e.target.value }) }} onChange={e => { checMail(e.target.value) }} />
            <p className="error">{error.email}</p>
            <TextField id="outlined-basic" label=" הכנס סיסמה" variant="outlined" onBlur={e => { setUser({ ...user, password: e.target.value }) }} onChange={e => { checPass(e.target.value) }} />
            <p className="error">{error.pass} </p>
            <TextField id="outlined-basic" label=" הכנס  טלפון" variant="outlined" onBlur={e => { setUser({ ...user, phone: e.target.value }) }} onChange={e => { checFhone1(e.target.value) }} />
            <p className="error">{error.phone1}</p>
            <TextField id="outlined-basic" label=" הכנס  טלפון נוסף" variant="outlined" onBlur={e => { setUser({ ...user, phone: e.target.value }) }} onChange={e => { checFhone2(e.target.value) }} />
            <p className="error">{error.phone2}</p>
            <Button className='buto' variant="contained" onClick={send}>
                שליחה
            </Button>
        </div>

    </>
}