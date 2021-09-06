import React, {useState} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {hot} from "react-hot-loader/root";

import { links } from './constants/links.constant';
import { Body, Content, Information } from './components/content/content.styles';
import { HeaderComponent } from './components/header/header.component';
import { SiteBarComponent } from './components/sitebar/sitebar.component';
import { SplitRouterComponent } from './helpers/hoc/split_router.hoc';
import { AuthComponent } from './modules/auth/auth.component';
import { CoursesComponent } from './modules/courses/courses.component';
import { DegreesComponent } from './modules/degrees/degrees.component';
import { DepartmentsListComponent } from './modules/departments/departments_list/departments_list.component';
import { GroupsListComponent } from './modules/groups/groups_list/groups_list.component';
import { LecturerComponent } from './modules/lecturers/lecturer/lecturer.component';
import { LecturersListComponent } from './modules/lecturers/lecturers_list/lecturers_list.component';
import { NewsComponent } from './modules/news/news/news.component';
import { NewsListComponent } from './modules/news/news_list/news_list.component';
import { SemestersComponent } from './modules/semesters/semesters.component';
import { SpecializationListComponent } from './modules/specializations/specializations_list/specialization_list.component';
import { SpecializationComponent } from './modules/specializations/specialization/specialization.component';
import { SpecialtyListComponent } from './modules/specialties/specialties_list/specialties_list.component';
import { SpecialtyComponent } from './modules/specialties/specialty/specialty.component';
import { FetchNewsContainer } from './modules/news/news/fetch_news.container';
import { NotFound } from './components/plugs.component';
import {UsersComponent} from "./modules/users/users.component";



function App() {
  const [isAuth, changeAuthStatus] = useState(localStorage.getItem("token"));

  const handleAuth = (token:string) => changeAuthStatus(token); 

  if(!isAuth){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={(props) => <AuthComponent {...props} onAuth={handleAuth}/>}/>
                <Route render={() => <Redirect to='/'/>}/>
            </Switch>
        </BrowserRouter>
    )
  } 

  return (
    <BrowserRouter>
      <HeaderComponent onLogout={handleAuth}/>
      <Body>
        <SiteBarComponent/>
        <Content>
          <Information>
            
              <Switch>
                <Route exact path='/' render={() => <Redirect to="/news/"/>} />
                {/* news */}
                <Route exact path={links.news.routeWithId} render={(props)=> <SplitRouterComponent {...props} list={NewsListComponent} one={FetchNewsContainer}/>}/>
                <Route exact path={links.news.create} render={() => <NewsComponent action="create"/>}/>

                {/* informational components */}
                <Route exact path={links.specialties.routeWithId} render={(props)=> <SplitRouterComponent {...props} list={SpecialtyListComponent} one={SpecialtyComponent}/>} />
                <Route exact path={links.specializations.routeWithId} render={(props)=> <SplitRouterComponent {...props} list={SpecializationListComponent} one={SpecializationComponent}/>} />
                <Route exact path={links.departments.routeWithId} render={(props)=> <SplitRouterComponent {...props} list={DepartmentsListComponent} one={DepartmentsListComponent}/>} />
                <Route exact path={links.lecturers.routeWithId} render={(props)=> <SplitRouterComponent {...props} list={LecturersListComponent} one={LecturerComponent}/>} />
                <Route exact path={links.groups.route} component={GroupsListComponent} /> 
                          
                {/* persistent data */}
                <Route exact path={links.academicDegrees.route} component={DegreesComponent} />
                <Route exact path={links.semesters.route} component={SemestersComponent} />
                <Route exact path={links.courses.route} component={CoursesComponent} />
                {/*users*/}
                <Route exact path={links.users.route} component={UsersComponent} />
                 {/*not found*/}
                <Route component={NotFound}/>
                
              </Switch>
         
          </Information>
          {/* <FooterComponent></FooterComponent> */}
        </Content> 
      </Body>
    </BrowserRouter>
  );
}

export default hot(App);
