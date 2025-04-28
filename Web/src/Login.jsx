// import * as React from 'react';
// import Button from '@mui/material/Button';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import SendIcon from '@mui/icons-material';
// import Stack from '@mui/material/Stack';
// import swal from "sweetalert";
// import { useDispatch, useSelector } from 'react-redux'
// import { addUser } from "./redux/Action";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// // import {navigate} from /navigate";
// import { useNavigate } from "react-router-dom";
// import { SetUser } from "./redux/Action";
// import { useState } from "react";
// import './style.css'
// export const Login = () => {
//     const navigate = useNavigate()
//     const dispach = useDispatch()

//     const current = useSelector(store => store.CurrentUser);
//     const [errors, setErrors] = useState({});
//     let f = true;

//     const checkName = (value) => {
//         const nameRegex = /^[a-zA-Zא-ת]{2,20}$/
//         if (!value.match(nameRegex)) {
//             setErrors({
//                 ...errors, usern: 'שם חייב להכיל אותיות בלבד באורך של 2 - 20 תווים!'

//             })
//         }
//         else {
//             setErrors({ ...errors, usern: '' })
//         }
//     }
//     const checkPassword = (value) => {
//         const numRegex = /^[0-9]{8,9}$/

//         if (!value.match(numRegex)) {
//             setErrors({ ...errors, password: '  ת"ז חייב להיות 8 או 9  ספרות' })
//         }
//         else {
//             setErrors({ ...errors, password: '' })
//         }
//     }
//     const checkPhone = (value) => {
//         const nRegex = /^[0-9]{7,10}$/
//         if (value.length > 7 && value.length < 10 || value.length < 7 && value.length > 10 || !value.match(nRegex)) {
//             setErrors({ ...errors, phone: 'טלפון חייב להכיל 10 או 7 ספרות  ' })
//         }
//         else {
//             setErrors({ ...errors, phone: '' })
//         }
//     }
//     const cheksisma = (value) => {
//         const nRegex = /^[0-9]{0,5}$/

//         if (!value.match(nRegex)) {
//             setErrors({ ...errors, sisma: 'על הסיסמה להיות עד 5 תוים ' })
//         }
//         else {
//             setErrors({ ...errors, sisma: '' })
//         }
//     }
//     const chekcode = (value) => {
//         const nRegex = /^[0-9]{0,5}$/

//         if (!value.match(nRegex)) {
//             setErrors({ ...errors, code: 'על  הקוד להיות עד 5 מספרים ' })
//         }
//         else {
//             setErrors({ ...errors, code: '' })
//         }
//     }
//     const chekCard = (value) => {
//         const nRegex = /^[0-9]{16}$/

//         if (!value.match(nRegex)) {
//             setErrors({ ...errors, card: 'מספר אשראי צריך להיות בן 16 ספרות' })
//         }
//         else {
//             setErrors({ ...errors, card: '' })
//         }
//     }
//     const chekcvv = (value) => {
//         const nRegex = /^[0-9]{3}$/
//         if (!value.match(nRegex)) {
//             setErrors({ ...errors, cvv: ' צריך  להיות בן 3 ספרות cvv ' })
//         }
//         else {
//             setErrors({ ...errors, cvv: '' })
//         }
//     }
//     const checktype = (value) => {
//         if (value == "1") {
//             // event.preventDefault();
//             setErrors({ ...errors, type: 'אין אפשרות זהו קוד מנהלים  ' })
//         }

//         else {
//             setErrors({ ...errors, type: '' })
//         }


//     }
//     const [user, setUser] = useState({});
//     const   send = () => {
//         if (user.code && user.username && user.id && user.phone && user.sisma && user.numcard && user.valid && user.cvv && user.typeuser) {
//             dispach(addUser(user));
//             dispach(SetUser({ ...user }));
//             swal(`ברוך הבא ל ${user.username}`, ' הצטרפת בהצלחה! 😊😄😁😍', 'success')
//             navigate(`/cars`)
//         }
//         else {

//             swal(`לא תקין`, 'נא הכנס את הפרטים שוב', 'error')
//         }

//     }


//     return <>
//         <section id="all">
//             <div class="car-containers">
//                 <div class="car-roof"></div>
//                 <div class="car-body"><h2 id="h2">MilkisCars</h2></div>
//                 <div class="design-line"></div>
//                 <div class="window"></div>
//                 <div class="head-light"></div>
//                 <div class="fog-light"></div>
//                 <div class="door-knob"></div>
//                 <div class="tail-light"></div>
//             </div>
//             {/* <!-- Tire --> */}
//             <div class="front-tires"></div>
//             <div class="back-tires"></div>
//         </section>
//         <div className='login'>
//             <h2 id="h4">הצטרפות</h2>
//             <TextField id="outlined-basic" label=" הכנס קוד" variant="outlined" onBlur={(e) => setUser({ ...user, code: e.target.value })} onChange={(e) => chekcode(e.target.value)} />
//             <p className="error">{errors.code}</p>

//             <TextField id="outlined-basic" label=" הכנס שם" variant="outlined" onBlur={(e) => setUser({ ...user, username: e.target.value })} onChange={(e) => checkName(e.target.value)} />
//             <p className="error">{errors.usern}</p>
//             <TextField id="outlined-basic" label=" הכנס תעודת זהות" variant="outlined" onBlur={(e) => setUser({ ...user, id: e.target.value })} onChange={(e) => checkPassword(e.target.value)} />
//             <p className="error">{errors.password}</p>
//             <TextField id="outlined-basic" label=" הכנס  טלפון" variant="outlined" onBlur={(e) => setUser({ ...user, phone: e.target.value })} onChange={(e) => checkPhone(e.target.value)} />
//             <p className="error">{errors.phone}</p>
//             <TextField id="outlined-basic" label=" הכנס  סיסמה" variant="outlined" onBlur={(e) => setUser({ ...user, sisma: e.target.value })} onChange={(e) => cheksisma(e.target.value)} />
//             <p className="error">{errors.sisma}</p>
//             <TextField id="outlined-basic" label=" הכנס  מס כרטיס" variant="outlined" onBlur={(e) => setUser({ ...user, numcard: e.target.value })} onChange={(e) => chekCard(e.target.value)} />
//             <p className="error">{errors.card}</p>
//             <TextField id="outlined-basic" label=" הכנס   תוקף" variant="outlined" onBlur={(e) => setUser({ ...user, valid: e.target.value })} onChange={(e) => checkPassword(e.target.value)} />
//             <p> </p>
//             <TextField id="outlined-basic" label=" cvv " variant="outlined" onBlur={(e) => setUser({ ...user, cvv: e.target.value })} onChange={(e) => chekcvv(e.target.value)} />
//             <p className="error">{errors.cvv}</p>
//             <TextField id="outlined-basic" label=" סוג משתמש " variant="outlined" onBlur={(e) => setUser({ ...user, typeuser: e.target.value })} onChange={(e) => checktype(e.target.value)} />
//             <p className="error">{errors.type}</p>
      
//         <Button className='buto' onClick={send} variant="contained">
//         {/* endIcon={<SendIcon />} */}
//             שליחה
//         </Button>
//         </div>

//     </>
// } 
