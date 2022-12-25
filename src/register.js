import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const location = useLocation()
    const statusMessage = location.state
    let [user, setUser] = useState({emoji:'',name:'' ,email:'', password:''})

    const HandleChange = event => {
        let {name, value} = event.target;
        setUser({...user, [name]: value});
    }

    function Store(obj) {
        sessionStorage.setItem('users',JSON.stringify(obj))
    }

    function Retrieve(objKey) {
        return JSON.parse(sessionStorage.getItem(objKey))
    }

    const StoreUser = () => {
        let tempUsers = Retrieve('users')
        let tempUsersUpdated = [...tempUsers,user]
        Store(tempUsersUpdated)
        navigate('/login')

    }

    const Test = () => {
        let tempUsers = Retrieve('users')
        console.log(tempUsers)
    }

    return (
        <div className={'FormContainer'}>
            <h1>Register</h1>
            <h3>{statusMessage}</h3>
            <br/>
            <div className={'FieldContainer'}>
                <label className={'FieldLabel'}>
                    Emoji:
                    <br/>
                    <input name={'emoji'} type={'emoji'} placeholder={'Enter emoji'}
                           value={user.emoji} onChange={HandleChange}/>
                </label>
                <label className={'FieldLabel'}>
                    Username:
                    <br/>
                    <input name={'name'} type={'name'} placeholder={'Enter name'}
                           value={user.name} onChange={HandleChange}/>
                </label>
                <label className={'FieldLabel'}>
                    Email:
                    <br/>
                    <input name={'email'} type={'email'} placeholder={'Enter email'}
                           value={user.email} onChange={HandleChange}/>
                </label>

                <label className={'FieldLabel'}>
                    Password:
                    <br/>
                    <input name={'password'} type={'password'} placeholder={'Enter password'}
                           value={user.password} onChange={HandleChange}/>
                </label>
            </div>
            <div className={'ButtonContainer'}>
                <button className={'BtnGreen'} onClick={StoreUser}>Register</button>
                <button className={'BtnRed'} onClick={Test}>Test</button>
            </div>
        </div>
    );
}