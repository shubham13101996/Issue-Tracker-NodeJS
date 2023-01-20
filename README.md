## Issue_Tracker_App

A Nodejs + EJS + MongoDB + Express application to track issues/bugs for a project.

## Features

-User can create a Project.<br/>
-User can create an issue.<br/>
-User can filter the issues by different parameters.<br/>
-User can track the issue by name or description.<br/>
<br/>

## Brief

1.Home Page<br/>
a.Show a list of projects.<br/>
b.Give a button to create a new Project,On creating a new project it should appear in the list.<br/>
<br/>

2.Create Project Page<br/>
Fill the following fields to create a project<br/>
a.Name<br/>
b.Description<br/>
c.Author<br/>
<br/>

3.Project Detail Page<br/>
a.When the user clicks on a project (in home page) redirect the user to this page which will show bugs related to this project<br/>
b.User should be able to perform following actions on this page<br/>
i.Filter by multiple labels i.e. user should be able to filter by 2 or more labels at the same time<br/>
ii.Filter by author<br/>
iii.Search by title and description<br/>
c.A button to create an issue<br/>
<br/>

4.Create issue page<br/>
a.User should be able to create an issue for a project<br/>
b.Fill the following fields<br/>
i.Title<br/>
ii.Description<br/>
iii.Labels (multiple labels can be added to a project, If a project has a label already show it (in dropdown) as the user types the label in)<br/>
iv.Author<br/>
