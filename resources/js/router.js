
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [
  
    { 
      
      path: '/', 
      name: 'home',
      component: () => import('./components/frontend/Index.vue'),
      meta:{
        title: 'welecome ',
          }
    },

   { 
    
    path: '/blog/details/:slug', 
    name: 'blog_post_details',
    component: () => import('./components/frontend/BlogPostDetails.vue'),
    meta:{
       title: 'Blog Details ',
         }
   }, 

   { 
    path: '/course/details/:slug', 
    name: 'course_details',
    component: () => import('./components/frontend/CourseDetails.vue'),
    meta:{
       title: 'Course Details ',
         }
    }, 

    { 
    path: '/course/of/category/:id', 
    name: 'category_wise_course',
    component: () => import('./components/frontend/CategoryWiseCourse.vue'),
    meta:{
       title: 'Course of category ',
         }
    }, 

   { 
    path: '/search/details', 
    name: 'search',
    component: () => import('./components/frontend/Search.vue'),
    meta:{
       title: 'Search Details ',
         }
    },


   { 
    path: '/student/register', 
    name: 'student_register',
    component: () => import('./components/frontend/student/Register.vue'),
    meta:{
       title: 'Student Registration ',
         }
    },


   { 
    path: '/public/user/login', 
    name: 'user_login',
    component: () => import('./components/frontend/user/Login.vue'),
    meta:{
       title: 'user login ',
         }
    },
    

    { 
    path: '/user/register', 
    name: 'user_register',
    component: () => import('./components/frontend/user/Signup.vue'),
    meta:{
       title: 'user register ',
         }
    },

     {
        path: '/public/user/password/reset',
        name: 'UserPasswordReset',
        component: () => import('./components/frontend/user/UserPasswordReset.vue'),
        meta: {
            title: 'Password Reset'
        }
    },
    {
        path: '/public/user/code/verify/:email',
        name: 'CodeVerified',
        component: () => import('./components/frontend/user/CodeVerified.vue'),
        meta: {
            title: 'Password Reset'
        }
    },

    {
        path: '/public/user/reset/password/:email',
        name: 'NewPasswordUser',
        component: () => import('./components/frontend/user/NewPassword.vue'),
        meta: {
            title: 'set new password'
        }
    },
    
    
   { 
    path: '/student/result/check', 
    name: 'check_student_result',
    component: () => import('./components/frontend/student/Result.vue'),
    meta:{
       title: 'Student Result Check ',
         }
    },

    { 
    path: '/backend/category/admin/login', 
    name : 'admin_login',
    component: () => import('./components/admin/Login.vue'),
    meta: {  title:'Admin Login' } 
    },

    { 
    path: '/backend/admin/add', 
    name : 'add_admin',
    component: () => import('./components/admin/admin/Add.vue'),
    meta: {  title:'Admin Register',
             authAdmin: true  } 
    },
    
    { 
    path: '/backend/admin/edit/:id', 
    name : 'edit_admin',
    component: () => import('./components/admin/admin/Edit.vue'),
    meta: {  title:'Admin Edit',
             authAdmin: true  } 
    },

     { 
    path: '/backend/admin/password/edit/', 
    name : 'edit_admin_password',
    component: () => import('./components/admin/admin/Password.vue'),
    meta: {  title:'Admin Password Edit',
             authAdmin: true  } 
    },

    
     { 
    path: '/backend/admin/profile', 
    name : 'admin_profile',
    component: () => import('./components/admin/admin/Profile.vue'),
    meta: {  title:'Admin Profile Info',
             authAdmin: true  } 
    },

    { 
    path: '/backend/admin/list', 
    name : 'admin_list',
    component: () => import('./components/admin/admin/Index.vue'),
    meta: {  title:'Admin List',
             authAdmin: true  } 
    },

  { 
    path: '/backend/admin/dashboard', 
    name : 'admin_dashboard',
    component: () => import('./components/admin/Dashboard.vue'),
    meta: {  title:'Admin Dashboard',
             authAdmin: true  } 
   },

    { 
    path: '/backend/category/list', 
    name : 'category',
    component: () => import('./components/admin/category/Index.vue'),
    meta: {  title:'category list' ,
             authAdmin: true 
          } 
    },
    
    { 
    path: '/backend/category/add', 
    name : 'add_category',
    component : () => import('./components/admin/category/Add.vue'),
    meta: {  title:'category add',
             authAdmin: true ,
          } 
    },
    { 
    path: '/backend/category/edit/:id', 
    name : 'edit_category',
    component: () => import('./components/admin/category/Edit.vue'),
    meta: {  title:'category edit',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/banner/list', 
    name : 'banner',
    component: () => import('./components/admin/banner/Index.vue'),
    meta: {  title:'banner list' ,
             authAdmin: true 
          } 
    },
    
    { 
    path: '/backend/banner/add', 
    name : 'add_banner',
    component: () => import('./components/admin/banner/Add.vue'),
    meta: {  title:'banner add',
             authAdmin: true ,
          } 
    },

    { 
    path: '/backend/banner/edit/:id', 
    name : 'edit_banner',
    component: () => import('./components/admin/banner/Edit.vue'),
    meta: {  title:'banner edit',
             authAdmin: true 
           } 
    },


    { 
    path: '/backend/role/list', 
    name : 'role_list',
    component: () => import('./components/admin/role/Index.vue'),
    meta: {  title:'role',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/role/add', 
    name : 'add_role',
    component: () => import('./components/admin/role/Add.vue'),
    meta: {  title:'role add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/role/edit/:id', 
    name : 'edit_role',
    component: () => import('./components/admin/role/Edit.vue'),
    meta: {  title:'role edit',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/manage/role/edit/:id', 
    name : 'manage_role',
    component: () => import('./components/admin/role/ManageRole.vue'),
    meta: {  title:'role management',
             authAdmin: true 
           } 
    },

     { 
    path: '/backend/model/assign/role/:id', 
    name : 'assign_role',
    component: () => import('./components/admin/admin/AssignRole.vue'),
    meta: {  title:'admin giving role ',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/role/assign/permissions/:id', 
    name : 'assign_permission',
    component: () => import('./components/admin/admin/AssignPermissions.vue'),
    meta: {  title:'role giving permission ',
             authAdmin: true 
           } 
    },


   { 
    path: '/backend/permission/list', 
    name : 'permission_list',
    component: () => import('./components/admin/permission/Index.vue'),
    meta: {  title:'permission',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/permission/add', 
    name : 'add_permission',
    component: () => import('./components/admin/permission/Add.vue'),
    meta: {  title:'permission add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/permission/edit/:id', 
    name : 'edit_permission',
    component: () => import('./components/admin/permission/Edit.vue'),
    meta: {  title:'permission edit',
             authAdmin: true 
           } 
 
    },

    
   { 
    path: '/backend/course/list', 
    name : 'course_list',
    component: () => import('./components/admin/course/Index.vue'),
    meta: {  title:'courses',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/course/add', 
    name : 'add_course',
    component: () => import('./components/admin/course/Add.vue'),
    meta: {  title:'course add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/course/edit/:id', 
    name : 'edit_course',
    component: () => import('./components/admin/course/Edit.vue'),
    meta: {  title:'course edit',
             authAdmin: true 
           } 
    },
      
   { 
    path: '/backend/blog/post/list', 
    name : 'post_list',
    component: () => import('./components/admin/blog_post/Index.vue'),
    meta: {  title:'posts',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/blog/post/add', 
    name : 'add_post',
    component: () => import('./components/admin/blog_post/Add.vue'),
    meta: {  title:'post add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/blog/post/edit/:id', 
    name : 'edit_post',
    component: () => import('./components/admin/blog_post/Edit.vue'),
    meta: {  title:'post edit',
             authAdmin: true 
           } 
    },
  
      
   { 
    path: '/backend/employee/list', 
    name : 'team_member',
    component: () => import('./components/admin/team/Index.vue'),
    meta: {  title:'teams',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/employee/add', 
    name : 'add_team_member',
    component: () => import('./components/admin/team/Add.vue'),
    meta: {  title:'team member add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/employee/edit/:id', 
    name : 'edit_team_member',
    component: () => import('./components/admin/team/Edit.vue'),
    meta: {  title:'team member edit',
             authAdmin: true 
           } 
    },



      { 
    path: '/backend/slider/list', 
    name : 'slider_list',
    component: () => import('./components/admin/slider/Index.vue'),
    meta: {  title:'sliders',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/slider/add', 
    name : 'add_slider',
    component: () => import('./components/admin/slider/Add.vue'),
    meta: {  title:'slider add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/slider/edit/:id', 
    name : 'edit_slider',
    component: () => import('./components/admin/slider/Edit.vue'),
    meta: {  title:'slider edit',
             authAdmin: true 
           } 
    },

  
      { 
    path: '/backend/for/category/slider/list', 
    name : 'category_slider_list',
    component: () => import('./components/admin/category_slider/Index.vue'),
    meta: {  title:'category sliders',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/for/category/slider/add', 
    name : 'add_category_slider',
    component: () => import('./components/admin/category_slider/Add.vue'),
    meta: {  title:'category slider add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/for/category/slider/edit/:id', 
    name : 'edit_category_slider',
    component: () => import('./components/admin/category_slider/Edit.vue'),
    meta: {  title:'category slider edit',
             authAdmin: true 
           } 
    },


     { 
    path: '/backend/carrier/post/list', 
    name : 'carrier_list',
    component: () => import('./components/admin/carrier/Index.vue'),
    meta: {  title:'carriers',
             authAdmin: true 
           } 
    },

   { 
    path: '/backend/carrier/post/add', 
    name : 'add_carrier',
    component: () => import('./components/admin/carrier/Add.vue'),
    meta: {  title:'carrier add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/carrier/post/edit/:id', 
    name : 'edit_carrier',
    component: () => import('./components/admin/carrier/Edit.vue'),
    meta: {  title:'carrier edit',
             authAdmin: true 
           } 
    },
 
    { 
    path: '/backend/carrier/post/show/:id', 
    name : 'show_carrier',
    component: () => import('./components/admin/carrier/Show.vue'),
    meta: {  title:'carrier show',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/applicant/carrier/post/:id', 
    name : 'candidate_carrier',
    component: () => import('./components/admin/carrier/JobApplied.vue'),
    meta: {  title:'carrier applicant show',
             authAdmin: true 
           } 
    },


    { 
    path: '/backend/student/registed/in/course/:id', 
    name : 'course_registered_students',
    component: () => import('./components/admin/course/RegisteredStudetns.vue'),
    meta: {  title:'course registered studetns ',
             authAdmin: true 
           } 
    },

    
    { 
    path: '/backend/student/add/result/:id', 
    name : 'add_student_result',
    component: () => import('./components/admin/students/AddResult.vue'),
    meta: {  title:'student result add',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/student/result/edit/:id', 
    name : 'edit_student_result',
    component: () => import('./components/admin/students/EditResult.vue'),
    meta: {  title:'student result edit',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/student/details/:id', 
    name : 'student_details',
    component: () => import('./components/admin/students/Details.vue'),
    meta: {  title:'student details',
             authAdmin: true 
           } 
    },

    { 
    path: '/backend/students/list/display', 
    name : 'students',
    component: () => import('./components/admin/students/Students.vue'),
    meta: {  title:'students list',
             authAdmin: true 
           } 
    },





    
]

const router = new VueRouter({
  routes,
  mode:'history'
})


router.beforeEach ( (to,from,next) => {

     if (to.matched.some( record => record.meta.authAdmin ) ) {
       if (localStorage.getItem('admin_token')) {
          next()
          return 
       } 
       next('/backend/category/admin/login') ;
     }else{
       next() 
     }
} )

export default router;