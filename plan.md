# Plan

1. Presented with the homepage - with nav links - and an option to login where I get a list of posts:

- Posts come back [x] Done
- Navbar shows [x] Done
- Logout is showing, we need this to be login (using however we do auth) [x] not done

2. Clicking the homepage in the navbar, should go to the homepage

- This does not work currently, none of the navbar links are hooked up [x] not done

3. Navbar links for Dashboard and any other protected route should redirect to login if you're not logged in

- Clicking navbar link should check if you're logged in. (In handlebars, not js) [x] not done
- Dashboard needs to be hooked up properly / fix the error [x] not done
  - Need to make sure this redirects to login [x] not done

4. Sign up page, should ask for a username and password

- Currently loads up the create post page, this should load sign up [x] not done
- When I sign up, it should save credentials and then login [] not done
  - This is in the frontend code [] not done

5. Choosing a protected route like dashboard or going straight to login .. lets you login

- See the above - login needs to load the login page [x] not done

6. When you're signed in, you should see a different nav bar, e.g. it says 'logout' not 'login' [] not done
7. Loading the homepage allows you to click on the post, add a comment etc do logged in actions

- Click on a post, see a post's author / date craeted etc
  - See mockup
- Must be able to leave a comment if you're logged in [] not done

8. Should be able to enter a comment on a post it should update

- Comment save to the database [] not done
- API route / handlers for adding a comment to a post [] done
- Comment needs to be triggered from frontend js [] not done
- Refetch / reload the page either through an api redirect or a window.location.reload [] not done

9. Going to dashboard gets the logged in user's posts

- API to grab only the user's posts from the databse [x] done (this is in the dashboardRoutes - user id comes from the session)
- Add to the template for the dashboard to create a new post [x] done (see dashboard)

10. Clicking a new post - then you're prompted with the form

- This is called via some html / js on the frontend to hit the api [x] done but review
- Refetch / reload the page either through an api redirect or a window.location.reload [] not done

11. Clicking on a post allows you to view the post

- Need to create the html template to look at a post [] not done
  - Should allow you to edit the post [] not done
    - Need a PUT route for posts [x] donea
  - Should allow you to delete the post [] not done
    - Need a DELETE route for the posts [x] done
      - Maybe double check the user is the owner of the post? [] not done (maybe not required)

12. Clicking logout will sign out of the site

- Add the logout button to the navbar [x] not done
- Frontend javascript that will call logging out on the API [x] not done
- Add a logout api route that will destroy a session [x] done

13. When you're idle on the website for X amount of time

- Something in the session is invalidated / logged out [] not done - Check mini project / activities / cookies / sessions - could be already done.
  Side note: Rejig everywhere we've used underscores on the variables.
  We've sorted:
- Nodemon - make sure we use `npm run dev` [x] done
- Seed data is now working - tables save as underscores - but we use the models as camelCase [x] done
- Homepage displays a list of posts even though you're not logged in [x] done \*/
