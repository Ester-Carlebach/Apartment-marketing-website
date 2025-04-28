import { NavLink } from "react-router-dom"
import { Tooltip } from "@mui/material"

export const Nav = () => {
    return <>
    {/* 
עיר: הוספה *, שליפת כל הערים, קבלת מזג האויר העכשווי לפי קוד עיר 
קטגוריה: הוספה *, שליפת כל הקטגוריות
דירה: הוספה *, עדכון *, מחיקה *, */}
<div id="nav">
    <Tooltip title="דף הבית">
      <NavLink className="n" to=''>דף הבית</NavLink>
    </Tooltip>
    <Tooltip  title="כניסה" >
      <NavLink className="n" to='login'>כניסה</NavLink></Tooltip>
      <Tooltip  title="קטגוריות" >
      <NavLink className="n" to='category'>קטגוריות</NavLink></Tooltip>
      <Tooltip  title="כל המפרסמים" >
      <NavLink className="n" to='advertiser'>מפרסמים</NavLink></Tooltip>
      <Tooltip  title="כל הערים" >
      <NavLink className="n" to='city'>ערים</NavLink></Tooltip>
      <Tooltip  title="כל הדירות" >
      <NavLink className="n" to='apartment'>כל הדירות</NavLink></Tooltip>
    {/* <Tooltip title="כל  הרכבים">
      <NavLink className="n" to='/cars'><TimeToLeaveIcon id="Ho"></TimeToLeaveIcon></NavLink></Tooltip>
      <Tooltip title="כל מה שתרצו לדעת">
      <NavLink  className="n" to='/Info' ><AutoStoriesIcon id="Ho"></AutoStoriesIcon></NavLink></Tooltip>
      <Tooltip title="מבצעים">
      <NavLink className="n" to='/sail' ><PriceCheckIcon id="Ho"></PriceCheckIcon></NavLink></Tooltip> */}

      </div>
        {/* <NavLink to={"homePage"}>homePage      </NavLink>
        <NavLink to={"login"}>login</NavLink> */}
    </>
}