const router = require("express").Router();
const { User } = require("../../models");

//ENDPOINT api/users

//get all users
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json(error);
  }
});

//SIGN UP
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const user = userData.get({ plain: true });

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;

      res.status(200).json(user);
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

//user login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const user = userData.get({ plain: true });

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;

      res.status(204).end();
      if (req.session.logged_in) {
        return res.redirect("/dashboard");
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
