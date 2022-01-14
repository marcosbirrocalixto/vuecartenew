import Home from '@/pages/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import MyProjects from '@/pages/Auth/MyProjects';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [            
            {        
                path: '/',
                component: Home,
                name: 'home',
            },
            
        ]
    },

    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children:[
            {        
                path: '/meus-projetos',
                component: MyProjects,
                name: 'my.projects',
            },

            {        
                path: '/login',
                component: Login,
                name: 'login',
            },
        
            {        
                path: '/register',
                component: Register,
                name: 'register',
            } 
        ] 
    }
]

export default routes