import Home from './components/Home'
import User from './components/User/User'
import About from './components/About'
import AddUser from './components/User/AddUser'
import UserDetails from './components/User/UserDetails'
import UserEdit from './components/User/UserEdit'

export const routes = [
    { path: '/' , name: 'homepage', component: Home },
    { path: '/about' , name: 'about', component: About }, 
    { path: '/adduser' , name: 'adduser', component: AddUser },
    { path: '/user' , name: 'user', component: User } ,
    { path: '/user/:id', name: 'userdetails', component: UserDetails},
    { path: '/user/:id/edit', name: 'useredit', component: UserEdit}

    // , children: [
        
    // ]},  
    
]