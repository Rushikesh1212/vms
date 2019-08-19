
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//========  layoutPostLoginis HOC  =========== 
import layoutPostLogin from '../coreAdmin/Layout/layoutPostLogin.js';



import Layout from '../coreAdmin/Layout/Layout.js';
import UMListOfUsers from '../coreAdmin/userManagement/UM/UMListOfUsers.js';
import EditUserProfile from '../coreAdmin/userManagement/UM/EditUserProfile.js';
import UMRolesList from '../coreAdmin/userManagement/Roles/UMRolesList.js';
import CompanySetting from '../coreAdmin/companysetting/Components/CompanySetting.js';
import ViewTemplates from '../coreAdmin/NotificationManagement/ViewTemplates.jsx';


const UMListOfUsersPage = layoutPostLogin(UMListOfUsers);
const UMRolesListPage = layoutPostLogin(UMRolesList);
const CompanySettingPage = layoutPostLogin(CompanySetting);
const EditUserProfilePage = layoutPostLogin(EditUserProfile);


export const routes  = (
        <div className="col-lg-10 col-lg-offset-2">
            <Router>
                  <Route path="/umlistofusers"    component={UMListOfUsersPage}   exact/>
                  <Route path="/umroleslist"      component={UMRolesListPage}   exact />
                  <Route path="/companysetting"   component={CompanySettingPage}   exact />
                  <Route path="/edituserprofile"  component={EditUserProfilePage}   exact />
            </Router>
        </div>
);

