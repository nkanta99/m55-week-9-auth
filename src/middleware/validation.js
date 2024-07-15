const isData = async (req, res, next) => {

    console.log("isData middleware hit and username:", req.body.username);
    try {
        if (!req.body.username) {
            res.status(422).json({message: "data is imcomplete"});
            return;
        }
        next();
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

// check if string is lowercase and make lower
const isLowerCase = async (req, res, next) => {
    try {
        // code here
       
        req.body.username = req.body.username.toLowerCase();
       
        // const lowerCheck = new String(req.body.username);
        // if (req.body.username !== req.body.username.toLowerCase()) {
        //   req.body.username = req.body.username.toLowerCase();
        // }

        // const checkLower = (data) => {
        //     return data === data.toLowerCase();
        // };

    // if (!checkLower(req.body.username)) {
    //     req.body.username = req.body.username.toLowerCase();
    // }

        next();
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};

// checks if email is valid using regex
const isValidEmail = async (req, res, next) => {
  try {
    // code here

    //   const checkEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/;

    //   if (!checkEmail.test(req.body.username)) {
    //     res.status(422).json({message: "email not valid"});
    //   }

    const checkEmail = new RegExp(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,6}$/);

    console.log("regex checkEmail:", checkEmail);

      if (!checkEmail.test(req.body.email)) {
        res.status(422).json({message: "email not valid"});
        return;
      }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
    isData,
    isLowerCase,
    isValidEmail,
};