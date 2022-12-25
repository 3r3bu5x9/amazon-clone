import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react"
import AuthContext from "./authContext";
import UserContext from "./userContext";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation()
    const statusMessage = location.state
    const {setLoginStatus} = useContext(AuthContext)
    const users = []
    const {setUser} = useContext(UserContext)
    let [userTemp, setUserTemp] = useState({emoji:'❌',name:'' ,email:'', password:''})

    useEffect(() => {
        setLoginStatus(0)
    })

    let usersJson = Retrieve('users')
    Object.keys(usersJson).forEach(key => users.push(usersJson[key]))

    const HandleChange = event => {
        let {name, value} = event.target;
        setUserTemp({...userTemp, [name]: value});
    }

    function Retrieve(objKey) {
        return JSON.parse(sessionStorage.getItem(objKey))
    }

    const Validate = () => {
        let flag = false
        for (const u of users) {
            flag = (u.email === userTemp.email && u.password === userTemp.password);
            if (flag) {
                setUser(u)
                setLoginStatus(1)
                break
            }
        }

        if (flag) {
            navigate('/home')
        } else {
            navigate('/login', {state: 'Invalid login or password 🥲🥲🥲'})
        }
    }

    return (
        <div className={'FormContainer'}>
            <h1>Login</h1>
            <h3>{statusMessage}</h3>
            <br/>
            <div className={'FieldContainer'}>
                <label className={'FieldLabel'}>
                    Email:
                    <br/>
                    <input name={'email'} type={'email'} placeholder={'Enter email'}

                           value={userTemp.email} onChange={HandleChange}/>
                </label>

                <label className={'FieldLabel'}>
                    Password:
                    <br/>
                    <input name={'password'} type={'password'} placeholder={'Enter password'}
                           value={userTemp.password} onChange={HandleChange}/>
                </label>
            </div>
            <div className={'ButtonContainer'}>
                <button className={'BtnGreen'} onClick={Validate}>Login</button>
                <button className={'BtnBlue'} onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    );
}